/**
 * 餓鬼道結局分佈模擬
 * 用法：node tools/sim-ghost-endings.js
 *
 * - random：每題亂點選項
 * - greed：每題選「貪」增量最大的選項（極端貪婪）
 * - wisdom：每題選「慧」增量最大的選項（對照）
 *
 * 為聚焦結局門檻，本腳本跑滿 15 題後結算，不觸發中途解脫／橫死。
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const STAT_CAP = 350;
const DRAW_COUNT = 5;
const STAGES = ["ghost_open", "ghost_abyss", "ghost_finale"];
const EFFECT_KEYS = {
  wisdom: "wisdom",
  blessing: "merit",
  greed: "greed",
  anger: "anger",
  ignorance: "ignorance",
  composure: "composure",
};

const root = path.join(__dirname, "..");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "data/ghost.js"), "utf8"), ctx);
const rawEvents = ctx.window.hungryGhostEvents || [];
const endings = (ctx.window.hungryGhostEnding && ctx.window.hungryGhostEnding.endings) || [];

function mulberry32(seed) {
  let state = seed >>> 0;
  return function next() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clampStat(value) {
  return Math.max(0, Math.min(STAT_CAP, Math.round(value)));
}

function diminishedGain(current, delta) {
  if (!delta || delta <= 0) {
    return delta || 0;
  }
  const room = STAT_CAP - (current || 0);
  if (room <= 0) {
    return 0;
  }
  const keep = Math.max(0.08, Math.pow(1 - (current || 0) / STAT_CAP, 1.35));
  return Math.min(room, Math.max(1, Math.round(delta * keep)));
}

function erodeByPoisons(before, next) {
  let surge = 0;
  ["greed", "anger", "ignorance"].forEach(function add(key) {
    const rise = (next[key] || 0) - (before[key] || 0);
    if (rise > 0) {
      surge += rise;
    }
  });
  if (surge <= 0) {
    return;
  }
  const load = ((next.greed || 0) + (next.anger || 0) + (next.ignorance || 0)) / (STAT_CAP * 3);
  const chip = Math.max(1, Math.round(surge * (0.18 + load * 0.28)));
  next.merit = clampStat((next.merit || 0) - chip);
  next.wisdom = clampStat((next.wisdom || 0) - Math.max(1, Math.round(chip * 0.7)));
  if ((before.composure || 0) > 0 || (next.composure || 0) > 0) {
    next.composure = clampStat((next.composure || 0) - Math.max(1, Math.round(chip * 0.45)));
  }
}

function applyEffects(stats, effects) {
  const before = Object.assign({}, stats);
  const next = Object.assign({}, stats);
  Object.keys(effects || {}).forEach(function add(key) {
    const current = next[key] || 0;
    const delta = effects[key];
    const gained = delta > 0 ? diminishedGain(current, delta) : delta;
    next[key] = clampStat(current + gained);
  });
  erodeByPoisons(before, next);
  return next;
}

function compileEvent(raw) {
  return {
    id: raw.id,
    stage: raw.stage,
    choices: (raw.options || []).map(function mapOption(option) {
      const effects = {};
      const source = option.effect || {};
      Object.keys(EFFECT_KEYS).forEach(function copy(key) {
        if (source[key]) {
          effects[EFFECT_KEYS[key]] = source[key];
        }
      });
      return { label: option.text, effects: effects };
    }),
  };
}

const events = rawEvents.map(compileEvent);

function sampleDeck(rng) {
  const deck = [];
  const used = {};
  STAGES.forEach(function takeStage(stage) {
    const pool = events.filter(function keep(event) {
      return event.stage === stage && !used[event.id];
    });
    for (let i = pool.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      const swap = pool[i];
      pool[i] = pool[j];
      pool[j] = swap;
    }
    const take = Math.min(DRAW_COUNT, pool.length);
    for (let i = 0; i < take; i += 1) {
      used[pool[i].id] = true;
      deck.push(pool[i]);
    }
  });
  return deck;
}

function ghostStatBook(stats) {
  return {
    greed: stats.greed || 0,
    ignorance: stats.ignorance || 0,
    anger: stats.anger || 0,
    composure: stats.composure || 0,
    wisdom: stats.wisdom || 0,
    blessing: stats.merit || 0,
  };
}

function ghostRuleHits(rule, book) {
  const min = rule.min || {};
  const above = rule.above || {};
  const max = rule.max || {};
  const keys = Object.keys(min).concat(Object.keys(above), Object.keys(max));
  return keys.every(function pass(key) {
    const value = book[key] || 0;
    if (min[key] !== undefined && value < min[key]) {
      return false;
    }
    if (above[key] !== undefined && value <= above[key]) {
      return false;
    }
    if (max[key] !== undefined && value > max[key]) {
      return false;
    }
    return true;
  });
}

function settleEnding(stats) {
  const book = ghostStatBook(stats);
  const matched = endings.filter(function keep(row) {
    return ghostRuleHits(row, book);
  });
  matched.sort(function louder(a, b) {
    return (b.priority || 0) - (a.priority || 0);
  });
  return matched[0] || { id: "none", name: "（無匹配）" };
}

function baseStats(rng) {
  // 模擬開局三問後的大致區間，再把定力重設為餓鬼道入場的 40
  return {
    merit: 30 + Math.floor(rng() * 41),
    wisdom: 25 + Math.floor(rng() * 46),
    greed: 15 + Math.floor(rng() * 36),
    anger: 10 + Math.floor(rng() * 31),
    ignorance: 15 + Math.floor(rng() * 36),
    composure: 40,
  };
}

function pickRandom(choices, rng) {
  return choices[Math.floor(rng() * choices.length)];
}

function pickMaxStat(choices, key) {
  let best = choices[0];
  let bestScore = -Infinity;
  choices.forEach(function each(choice) {
    const score = (choice.effects && choice.effects[key]) || 0;
    if (score > bestScore) {
      bestScore = score;
      best = choice;
    }
  });
  return best;
}

function pickGreed(choices) {
  let best = choices[0];
  let bestScore = -Infinity;
  choices.forEach(function each(choice) {
    const e = choice.effects || {};
    const score = (e.greed || 0) * 2 + (e.ignorance || 0) + (e.anger || 0) - (e.wisdom || 0) - (e.composure || 0);
    if (score > bestScore) {
      bestScore = score;
      best = choice;
    }
  });
  return best;
}

function runOne(seed, strategy) {
  const rng = mulberry32(seed);
  let stats = baseStats(rng);
  const deck = sampleDeck(rng);
  deck.forEach(function play(event) {
    let choice;
    if (strategy === "greed") {
      choice = pickGreed(event.choices);
    } else if (strategy === "wisdom") {
      choice = pickMaxStat(event.choices, "wisdom");
    } else {
      choice = pickRandom(event.choices, rng);
    }
    stats = applyEffects(stats, choice.effects || {});
  });
  const finale = settleEnding(stats);
  return { id: finale.id, name: finale.name, stats: stats };
}

function simulate(strategy, n, seedBase) {
  const counts = {};
  const samples = {};
  endings.forEach(function mark(row) {
    counts[row.id] = 0;
  });
  counts.none = 0;
  for (let i = 0; i < n; i += 1) {
    const result = runOne(seedBase + i * 9973, strategy);
    counts[result.id] = (counts[result.id] || 0) + 1;
    if (!samples[result.id]) {
      samples[result.id] = result.stats;
    }
  }
  return { counts: counts, samples: samples, n: n };
}

function printReport(title, report) {
  console.log("\n=== " + title + "（n=" + report.n + "）===");
  const rows = Object.keys(report.counts)
    .map(function id(key) {
      const ending = endings.find(function find(row) {
        return row.id === key;
      });
      return {
        id: key,
        name: ending ? ending.name : key,
        count: report.counts[key],
        pct: (report.counts[key] / report.n) * 100,
      };
    })
    .filter(function keep(row) {
      return row.count > 0 || row.id === "empty";
    })
    .sort(function desc(a, b) {
      return b.count - a.count;
    });
  rows.forEach(function show(row) {
    const bar = "#".repeat(Math.round(row.pct / 2));
    console.log(
      row.name.padEnd(12, "　") +
        String(row.count).padStart(5) +
        "  " +
        row.pct.toFixed(1).padStart(5) +
        "%  " +
        bar
    );
  });
  const empty = report.counts.empty || 0;
  console.log(
    "→ empty（防呆）占比 " +
      ((empty / report.n) * 100).toFixed(1) +
      "%；" +
      (empty === report.n ? "全部卡在防呆！" : empty === 0 ? "無人只靠防呆。" : "多數人有對應結局。")
  );
  if (report.samples.empty) {
    const s = report.samples.empty;
    console.log(
      "  empty 範例數值：慧" +
        s.wisdom +
        " 定" +
        s.composure +
        " 貪" +
        s.greed +
        " 痴" +
        s.ignorance +
        " 嗔" +
        s.anger +
        " 福" +
        s.merit
    );
  }
  if (report.samples.gluttony) {
    const s = report.samples.gluttony;
    console.log("  gluttony 範例：貪" + s.greed + " 痴" + s.ignorance + " 慧" + s.wisdom);
  }
  if (report.samples.exit) {
    const s = report.samples.exit;
    console.log("  exit 範例：慧" + s.wisdom + " 定" + s.composure + " 貪" + s.greed + " 痴" + s.ignorance);
  }
}

const N = 1000;
printReport("隨機亂點", simulate("random", N, 20260304));
printReport("極端貪婪（每題偏貪／痴／嗔）", simulate("greed", N, 90210));
printReport("對照：偏慧根", simulate("wisdom", N, 314159));
console.log("");
