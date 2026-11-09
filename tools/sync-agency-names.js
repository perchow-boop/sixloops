/**
 * 從 data/science-mapping.js（唯一來源）讀取機構名，
 * 將 data/*.js 題目中的機構中文名／舊別名換成 {{BASE_KEY}} 佔位符。
 *
 * 用法：node tools/sync-agency-names.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const MAPPING = path.join(ROOT, "data", "science-mapping.js");

const FILE_TO_LORE = {
  ghost: "ghost",
  hell: "hell",
  animal: "beast",
  human: "human",
  asura: "asura",
  immortal: "immortal",
  alien: "alien",
  heaven: "heaven",
};

const EVENT_KEY = {
  ghost: "hungryGhostEvents",
  hell: "hellEvents",
  animal: "animalEvents",
  human: "humanEvents",
  asura: "asuraOpenEvents",
  immortal: "immortalEvents",
  alien: "alienEvents",
  heaven: "heavenEvents",
};

/** 歷史別名 → 科學底座 key（含舊長名與現名） */
const ALIASES = {
  ghost: {
    SLEEP: ["冥界夜貓普查局", "冥間夜貓局"],
    ECONOMICS: ["孟婆算盤局"],
    APA: ["冤魂意志力診所", "冤魂意志所"],
    WHO: ["餓鬼勞動衛生局", "餓鬼勞動局"],
    DIGITAL: ["孟婆望鄉台大數據", "望鄉數據處"],
    HEDONIC: ["餓鬼感官麻木局", "感官麻木局"],
  },
  hell: {
    SLEEP: ["阿鼻不眠監獄", "不眠監獄署"],
    ECONOMICS: ["地獄債務審判庭", "地獄債務庭"],
    APA: ["業火精神崩潰室", "業火崩潰室"],
    WHO: ["牛頭馬面勞工局", "牛頭勞工署"],
    DIGITAL: ["地獄刑具直播間", "刑具直播台"],
    HEDONIC: ["地獄痛苦適應所", "痛苦適應所"],
  },
  beast: {
    SLEEP: ["荒野晝伏夜行站", "荒野夜行站"],
    ECONOMICS: ["本能捕食交易所", "本能交易所"],
    APA: ["無明發呆診療室", "無明發呆所"],
    WHO: ["野獸生存倦怠所", "野獸倦怠處"],
    DIGITAL: ["無明盲目滑動站", "盲目滑動台"],
    HEDONIC: ["動物本能麻痺站", "本能麻痺局"],
  },
  human: {
    SLEEP: ["社畜生理時鐘研究室", "社畜時鐘所"],
    ECONOMICS: ["都市精算生活所", "都市精算所"],
    APA: ["社畜決策過載所", "決策過載所"],
    WHO: ["打工人極限倦怠所", "極限倦怠處"],
    DIGITAL: ["都市數位迷失所", "都市迷失局"],
    HEDONIC: ["都市物質麻痺所", "物質麻痺所"],
  },
  asura: {
    SLEEP: ["修羅戰場情報局", "戰場情報局"],
    ECONOMICS: ["修羅資源掠奪所", "資源掠奪所"],
    APA: ["內卷精神壓力源", "內卷壓力源"],
    WHO: ["內卷修羅勞動局", "修羅勞動署"],
    DIGITAL: ["修羅比較焦慮網", "比較焦慮網"],
    HEDONIC: ["修羅勝負麻痺局", "勝負麻痺局"],
  },
  immortal: {
    SLEEP: ["仙人閉關打坐所", "閉關打坐所"],
    ECONOMICS: ["煉丹成本效益處", "煉丹成本處"],
    APA: ["天庭內耗診療所", "天庭內耗所"],
    WHO: ["仙人孤獨隔離局", "仙人孤立局"],
    DIGITAL: ["洞府玉簡幻覺網", "洞府幻覺網"],
    HEDONIC: ["修真虛空空虛所", "虛空空虛所"],
  },
  alien: {
    SLEEP: ["星際失眠觀測站", "星際失眠站"],
    ECONOMICS: ["銀河黑市交易處", "銀河黑市處"],
    APA: ["全息過載精神署", "全息過載署"],
    WHO: ["星際艦隊過勞署", "艦隊過勞署"],
    DIGITAL: ["短影音星際總署", "短影音總署"],
    HEDONIC: ["外星感官過載局", "感官過載局"],
  },
  heaven: {
    SLEEP: ["極樂世界不眠局", "極樂不眠局"],
    ECONOMICS: ["天界福報計算局", "福報計算局"],
    APA: ["天神無聊精神所", "無聊精神所"],
    WHO: ["天神無所事事症候群", "清閒無為署"],
    DIGITAL: ["天界虛擬幻境局", "虛擬幻境局"],
    HEDONIC: ["極樂世界虛無管理局", "虛無管理局"],
  },
};

function loadMapping() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(MAPPING, "utf8"), ctx);
  const root = ctx.window;
  return {
    scientificBases: root.scientificBases,
    realmLoreMapping: root.realmLoreMapping,
    realmIdToLoreKey: root.realmIdToLoreKey,
    agencyLabel: root.agencyLabel,
    resolveAgencyTokens: root.resolveAgencyTokens,
  };
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenizeRealmFile(fileKey, loreKey, api) {
  const filePath = path.join(ROOT, "data", fileKey + ".js");
  let src = fs.readFileSync(filePath, "utf8");
  const aliases = ALIASES[loreKey] || {};
  let replacements = 0;

  Object.keys(aliases).forEach(function (baseKey) {
    const names = aliases[baseKey].slice().sort(function (a, b) {
      return b.length - a.length;
    });
    names.forEach(function (name) {
      const re = new RegExp("（" + escapeRegExp(name) + "(?:認證)?：", "g");
      const count = (src.match(re) || []).length;
      if (count) {
        src = src.replace(re, "（{{" + baseKey + "}}：");
        replacements += count;
      }
    });
  });

  const apiNames = (api.realmLoreMapping[loreKey] || {}).agencies || {};
  Object.keys(apiNames).forEach(function (baseKey) {
    const label = String(apiNames[baseKey]).replace(/^【/, "").replace(/】$/, "");
    const re = new RegExp("（" + escapeRegExp(label) + "(?:認證)?：", "g");
    const count = (src.match(re) || []).length;
    if (count) {
      src = src.replace(re, "（{{" + baseKey + "}}：");
      replacements += count;
    }
  });

  fs.writeFileSync(filePath, src);
  console.log(fileKey + ".js tokens:", replacements);
  return replacements;
}

function verify() {
  const api = loadMapping();
  let bad = 0;
  Object.keys(FILE_TO_LORE).forEach(function (fileKey) {
    const loreKey = FILE_TO_LORE[fileKey];
    const eventKey = EVENT_KEY[fileKey];
    const code = fs.readFileSync(path.join(ROOT, "data", fileKey + ".js"), "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    const events = ctx.window[eventKey] || [];
    events.forEach(function (q) {
      if (!/\{\{(SLEEP|ECONOMICS|APA|WHO|DIGITAL|HEDONIC)\}\}：/.test(q.text)) {
        bad += 1;
        if (bad <= 5) {
          console.error("missing token", fileKey, q.id, q.text.slice(0, 60));
        }
      }
      const resolved = api.resolveAgencyTokens(
        q.text,
        loreKey === "ghost" ? "hungry" : loreKey === "beast" ? "animal" : loreKey
      );
      if (/\{\{/.test(resolved)) {
        bad += 1;
      }
    });
  });
  console.log(bad ? "VERIFY_FAIL " + bad : "VERIFY_OK");
}

const api = loadMapping();
Object.keys(FILE_TO_LORE).forEach(function (fileKey) {
  tokenizeRealmFile(fileKey, FILE_TO_LORE[fileKey], api);
});
verify();
