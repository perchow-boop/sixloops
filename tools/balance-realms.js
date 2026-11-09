/**
 * 將 animal / asura / human / hell / heaven / immortal / alien
 * 的選項 effect 縮放到與餓鬼道相同量級，並重寫結局門檻。
 * 用法：node tools/balance-realms.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function scale(v) {
  if (v === 0 || v == null) {
    return v;
  }
  const sign = v < 0 ? -1 : 1;
  const a = Math.abs(v);
  let n;
  if (a <= 5) {
    n = 2;
  } else if (a <= 10) {
    n = 4;
  } else if (a <= 15) {
    n = 6;
  } else if (a <= 20) {
    n = 8;
  } else if (a <= 25) {
    n = 9;
  } else {
    n = 10;
  }
  return sign * n;
}

function scaleEffectBlock(body) {
  return body.replace(/(\w+)\s*:\s*(-?\d+)/g, function (_all, key, num) {
    return key + ": " + scale(+num);
  });
}

function scaleEffectsInSource(src) {
  return src.replace(/effect:\s*\{([^{}]*)\}/g, function (_all, body) {
    return "effect: {" + scaleEffectBlock(body) + "}";
  });
}

const ENDINGS = {
  animalEnding: `window.animalEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "第一次自己走路",
      min: { wisdom: 100, composure: 85 },
      max: { ignorance: 55 },
      art: "ending/animal_exit.jpg",
      text: "深夜斷電，人生奪回手中。\\n覺醒不是獲得解答，\\n而是拒絕再由他人代選。",
    },
    {
      id: "free",
      priority: 80,
      name: "牧場逃脫者",
      min: { wisdom: 75, composure: 60 },
      max: { ignorance: 99 },
      art: "ending/animal_free.jpg",
      text: "不再盲目迎合群體。\\n這一次，\\n你終於開始為自己做決定。",
    },
    {
      id: "recommended",
      priority: 88,
      name: "推薦給你的下一生",
      above: { ignorance: 99 },
      min: { wisdom: 70 },
      art: "ending/animal_recommended.jpg",
      text: "演算法比你更了解你。\\n所以下一世的劇本，\\n早就替你安排好了。",
    },
    {
      id: "half",
      priority: 60,
      name: "半醒之人",
      min: { wisdom: 55 },
      max: { ignorance: 99 },
      art: "ending/animal_half.jpg",
      text: "迷霧之中你終於意識到：\\n那些每天追逐的瘋狂欲望，\\n其實根本不是你自己的。",
    },
    {
      id: "keeper",
      priority: 55,
      name: "演算法飼養員",
      above: { ignorance: 99 },
      max: { wisdom: 69 },
      art: "ending/animal_keeper.jpg",
      text: "你以為自己在使用手機，\\n滑著無盡的動態牆——\\n其實是手機在圈養你。",
    },
    {
      id: "follow",
      priority: 45,
      name: "永遠跟著走",
      above: { ignorance: 69 },
      max: { ignorance: 99, wisdom: 54 },
      art: "ending/animal_follow.jpg",
      text: "大隊往前，你就往前。\\n大隊停下，你就停下。\\n一生很安全，卻從不知去哪。",
    },
    {
      id: "auto",
      priority: 30,
      name: "自動駕駛人生獎",
      min: { ignorance: 50 },
      max: { ignorance: 69 },
      art: "ending/animal_auto.jpg",
      text: "你的人生安穩又平順，\\n因為從出生到現在，\\n你根本沒自己開過車。",
    },
    {
      id: "crowd",
      priority: 0,
      name: "跟風王",
      art: "ending/animal_crowd.jpg",
      text: "大家往左，你就跟著向左。\\n大家向右，\\n你覺得右邊好像也不錯。",
    },
  ],
};`,

  asuraEnding: `window.asuraEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "阿修羅道出口",
      min: { wisdom: 100, composure: 85 },
      max: { anger: 55 },
      art: "ending/asura_exit.jpg",
      text: "放下武器，停止內卷。\\n解脫不是贏過所有人，\\n而是想起你根本不需要這場仗。",
    },
    {
      id: "awake",
      priority: 80,
      name: "局外贏家",
      above: { wisdom: 74, composure: 59 },
      art: "ending/asura_awake.jpg",
      text: "在這場撕裂裡，清醒最痛苦。\\n贏了又怎樣？\\n你只是在別人的戰場上累死。",
    },
    {
      id: "riot",
      priority: 70,
      name: "常勝狂人",
      above: { anger: 99 },
      art: "ending/asura_riot.jpg",
      text: "好勝心開到頂，見誰想掐死。\\n血洗整個修羅場後才發現，\\n身邊連一個活口都沒有。",
    },
    {
      id: "greed-max",
      priority: 70,
      name: "權力黑洞",
      above: { greed: 99 },
      art: "ending/asura_greed_max.jpg",
      text: "嫉妒與貪婪頂到天花板。\\n你搶下所有的資源與版位，\\n卻將自己困在最高檔囚籠裡。",
    },
    {
      id: "caffeine",
      priority: 45,
      name: "內卷戰士",
      min: { anger: 50 },
      max: { anger: 99 },
      art: "ending/asura_caffeine.jpg",
      text: "把日常過成戰場的焦慮狂。\\n看誰都像在偷你的成果，\\n每天滿腔火氣跟全世界槓到底。",
    },
    {
      id: "kpi",
      priority: 45,
      name: "排名奴隸",
      min: { greed: 50 },
      max: { greed: 99 },
      art: "ending/asura_kpi.jpg",
      text: "眼裡只有排行榜和績效。\\n你以為自己正在往上爬，\\n其實只是修羅場的免費打手。",
    },
    {
      id: "wisdom-mid",
      priority: 30,
      name: "疲憊旁觀者",
      min: { wisdom: 50 },
      art: "ending/asura_wisdom_mid.jpg",
      text: "看穿打殺的無聊卻又手癢。\\n不上不下的尷尬心態，\\n讓你活得比誰都糾結痛苦。",
    },
    {
      id: "battery",
      priority: 0,
      name: "戰場砲灰",
      art: "ending/asura_battery.jpg",
      text: "彈盡援絕，原地陣亡。\\n沒有贏到最後的命，\\n也沒有退出的勇氣。",
    },
  ],
};`,

  hellEnding: `window.hellEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "地獄道出口",
      min: { wisdom: 100, composure: 85 },
      max: { anger: 55, ignorance: 55, greed: 60 },
      art: "ending/hell_exit.jpg",
      text: "日常刑滿，原地出獄。\\n解脫不是熬過所有苦，\\n而是想起你本來就是個人。",
    },
    {
      id: "awake",
      priority: 80,
      name: "清醒的人",
      above: { wisdom: 74, composure: 59 },
      art: "ending/hell_awake.jpg",
      text: "人間地獄裡最荒謬的稱號。\\n解脫不是熬過苦難，\\n而是想起你根本不屬於這裡。",
    },
    {
      id: "riotous",
      priority: 70,
      name: "暴動刑徒",
      above: { anger: 99 },
      art: "ending/hell_riotous.jpg",
      text: "憎恨拉滿，不求解脫。\\n我要帶著滿腔的怒火，\\n把這座破地獄炸成平地。",
    },
    {
      id: "walking-dead",
      priority: 70,
      name: "行屍走肉",
      above: { ignorance: 99 },
      art: "ending/hell_walking_dead.jpg",
      text: "腦袋空空，靈魂登出。\\n連自己在受什麼刑都不知道，\\n只是機械地繼續往前走。",
    },
    {
      id: "anxiety",
      priority: 45,
      name: "焦慮狂人",
      min: { anger: 50 },
      max: { anger: 99 },
      art: "ending/hell_anxiety.jpg",
      text: "靠咖啡因續命的瘋子。\\n看誰都像在故意挑釁，\\n隨時準備把鍵盤砸出去。",
    },
    {
      id: "kpi",
      priority: 40,
      name: "數據奴隸",
      min: { greed: 55 },
      max: { anger: 49, ignorance: 49 },
      art: "ending/hell_kpi.jpg",
      text: "眼裡只看得到數字回報。\\n以為自己正在贏，\\n其實只是在幫地獄充值。",
    },
    {
      id: "loop",
      priority: 45,
      name: "無限輪迴",
      min: { ignorance: 50 },
      max: { ignorance: 99 },
      art: "ending/hell_loop.jpg",
      text: "明天又是新的一天。\\n反正什麼也想不明白，\\n那就原地打轉到世界毀滅。",
    },
    {
      id: "battery",
      priority: 0,
      name: "背景雜魚",
      art: "ending/hell_battery.jpg",
      text: "既沒有憤怒的勇氣，\\n也沒有清醒的自覺，\\n只是地獄道裡的最免洗消耗品。",
    },
  ],
};`,

  heavenEnding: `window.heavenEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "heaven-exit",
      priority: 90,
      name: "超脫天道",
      min: { wisdom: 100, composure: 85 },
      max: { greed: 55, ignorance: 55 },
      art: "ending/heaven_exit.jpg",
      text: "高居雲端，俯瞰棋局。\\n解脫不是成為規則的神，\\n而是掀翻權力編織的桌子。",
    },
    {
      id: "heaven-greed",
      priority: 75,
      name: "集權暴君",
      above: { blessing: 89, greed: 69 },
      art: "ending/heaven_greed.jpg",
      text: "福報與野心膨脹到極限。\\n以為掌握了世界的命脈，\\n卻被權慾活活榨乾。",
    },
    {
      id: "heaven-ignorance",
      priority: 75,
      name: "昏庸主宰",
      above: { blessing: 89, ignorance: 69 },
      art: "ending/heaven_ignorance.jpg",
      text: "坐在神壇上，腦袋一片空白。\\n手握至高權力，\\n卻不知底下的人在死什麼。",
    },
    {
      id: "heaven-wisdom",
      priority: 65,
      name: "孤獨先知",
      above: { blessing: 74, wisdom: 74 },
      art: "ending/heaven_wisdom.jpg",
      text: "洞察天機卻無人可說。\\n看透所有的荒謬與因果，\\n冷清得沒有一句真心話。",
    },
    {
      id: "heaven-greed-mid",
      priority: 40,
      stat: "greed",
      name: "特權寄生蟲",
      min: { blessing: 50, greed: 50 },
      art: "ending/heaven_greed_mid.jpg",
      text: "靠著體制庇護作威作福。\\n利用天道規則的漏洞，\\n把好處全往口袋裡塞。",
    },
    {
      id: "heaven-ignorance-mid",
      priority: 40,
      stat: "ignorance",
      name: "高階木偶",
      min: { blessing: 50, ignorance: 50 },
      art: "ending/heaven_ignorance_mid.jpg",
      text: "頂著最高頭銜的橡皮圖章。\\n每天按部就班地蓋章發令，\\n不知自己在維護什麼。",
    },
    {
      id: "heaven-wisdom-mid",
      priority: 40,
      stat: "wisdom",
      name: "旁觀改革者",
      min: { blessing: 50, wisdom: 50 },
      art: "ending/heaven_wisdom_mid.jpg",
      text: "看出制度漏洞卻無力改變。\\n卡在高層與底層的縫隙，\\n冷眼旁觀這場天道鬧劇。",
    },
    {
      id: "heaven-battery",
      priority: 0,
      name: "天庭小透明",
      art: "ending/heaven_battery.jpg",
      text: "福報耗盡，神壇塌陷。\\n沒能撐起像樣的權威，\\n被洪流刷成無足輕重的祭品。",
    },
  ],
};`,

  // 人道：immortalValue / tech 題面稀少，門檻刻意壓低，但仍可走仙／星隱藏線
  humanEnding: `window.humanEnding = {
  // 對齊 15 題縮放後總分。immortalValue／tech 為隱藏線累積，門檻低於主屬性。
  // min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "both-doors",
      priority: 80,
      name: "破壁者",
      min: { immortalValue: 18, tech: 18, wisdom: 75 },
      art: "ending/human_both_doors.jpg",
      text: "心裡跟星空外都是路。\\n下一轉，不管仙門星門——\\n兩扇門全被你一腳踹開。",
    },
    {
      id: "immortal-door",
      priority: 70,
      name: "半步仙途",
      min: { immortalValue: 10, wisdom: 65 },
      art: "ending/human_immortal_door.jpg",
      text: "把安靜養成了靈氣。\\n仙道的門開了——\\n去九重天上當高級打工人。",
    },
    {
      id: "alien-door",
      priority: 70,
      name: "外星道",
      min: { tech: 10, wisdom: 65 },
      art: "ending/human_alien_door.jpg",
      text: "地球的爛制度困不住你。\\n外星門開了——\\n去別的星系繼續宇宙加班。",
    },
    {
      id: "blessed-human",
      priority: 60,
      name: "福報的人",
      min: { blessing: 70, wisdom: 65 },
      max: { immortalValue: 9, tech: 9 },
      art: "ending/human_blessed_human.jpg",
      text: "頂著福報卻活像個工具人。\\n自我安慰知足常樂，\\n只是捨不得這舒適牢籠。",
    },
    {
      id: "composed-human",
      priority: 50,
      name: "佛系打工人",
      min: { wisdom: 65, composure: 70 },
      max: { blessing: 69, immortalValue: 9, tech: 9 },
      art: "ending/human_composed_human.jpg",
      text: "主打隨緣與躺平。\\n不管世界怎麼崩潰，\\n你都能面不改色喝咖啡。",
    },
    {
      id: "numb-human",
      priority: 50,
      name: "麻木群眾",
      min: { wisdom: 65 },
      max: { composure: 69, blessing: 69, immortalValue: 9, tech: 9 },
      art: "ending/human_numb_human.jpg",
      text: "道理懂一堆，日子照樣爛。\\n冷眼旁觀別人的荒謬，\\n轉頭發現自己也陷泥沼。",
    },
    {
      id: "blessing-heavy",
      priority: 40,
      name: "溫水青蛙",
      min: { blessing: 70 },
      max: { wisdom: 64 },
      art: "ending/human_blessing_heavy.jpg",
      text: "生活過得去，腦袋空空。\\n在毫無波瀾的舒適圈爛掉，\\n完美示範溫水煮青蛙。",
    },
    {
      id: "composed-heavy",
      priority: 40,
      name: "冷漠旁觀者",
      min: { composure: 70 },
      max: { wisdom: 64 },
      art: "ending/human_composed_heavy.jpg",
      text: "情緒穩定，靈魂卻死寂。\\n對所有苦難免疫，\\n也對所有的快樂無感。",
    },
    {
      id: "chaos-human",
      priority: 30,
      name: "內耗大師",
      above: { greed: 69, anger: 39 },
      max: { wisdom: 64, blessing: 69, composure: 69 },
      art: "ending/human_chaos_human.jpg",
      text: "滿腔貪婪怒火無處發洩。\\n在欲望暴躁中反覆撕扯，\\n把自己折騰得精疲力竭。",
    },
    {
      id: "average-human",
      priority: 20,
      name: "平凡螺絲釘",
      balanced: 40,
      max: { wisdom: 64, blessing: 69, composure: 69, greed: 69, anger: 49, immortalValue: 9, tech: 9 },
      art: "ending/human_average_human.jpg",
      text: "數值平庸，毫無記憶點。\\n標準的免洗螺絲釘，\\n默默出生加班到老去。",
    },
    {
      id: "human-battery",
      priority: 0,
      name: "路人甲乙丙",
      art: "ending/human-battery.jpg",
      text: "存在感歸零，NPC嫌戲少。\\n在人間當了幾十年背景板，\\n最終悄無聲息地登出。",
    },
  ],
};`,

  immortalEnding: `window.immortalEnding = {
  // 對齊 15 題縮放後總分。immortalValue 為主軸；tech 極稀有，exit 不再要求 tech。
  // min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 95,
      name: "真正的神仙",
      min: { immortalValue: 95, wisdom: 90, composure: 75 },
      max: { greed: 50, anger: 50 },
      art: "ending/immortal_exit.jpg",
      text: "雲端之上，俯瞰人間。\\n成仙不是活得像個神，\\n而是終於允許自己像個人。",
    },
    {
      id: "mountain-tale",
      priority: 85,
      name: "見山還是山",
      min: { immortalValue: 80, wisdom: 75, composure: 70 },
      max: { greed: 55, anger: 55 },
      art: "ending/immortal_mountain_tale.jpg",
      text: "看穿修仙的遊戲規則。\\n山還是那座山，\\n而你再也不是任人擺佈的奴隸。",
    },
    {
      id: "immortal-greed",
      priority: 75,
      name: "斂財上仙",
      min: { immortalValue: 40 },
      above: { greed: 79 },
      art: "ending/immortal_greed.jpg",
      text: "福報與貪念滿點。\\n在九重天上收香油錢，\\n美其名普渡，其實在割韭菜。",
    },
    {
      id: "immortal-greed-mid",
      priority: 55,
      name: "蹭飯散仙",
      min: { immortalValue: 35, greed: 50 },
      max: { greed: 79 },
      art: "ending/immortal_greed_mid.jpg",
      text: "仙位沒撈到，好處全想要。\\n每天在天庭各處白吃白喝，\\n在神仙堆裡苟延殘喘。",
    },
    {
      id: "immortal-high-wisdom",
      priority: 65,
      name: "孤傲雲客",
      min: { immortalValue: 70, wisdom: 70, composure: 60 },
      max: { anger: 55 },
      art: "ending/immortal_high_wisdom.jpg",
      text: "高處不勝寒，獨自清高。\\n看透眾人內心的荒謬，\\n卻冷清得連個道友都沒有。",
    },
    {
      id: "immortal-mid-wisdom",
      priority: 50,
      name: "半仙半俗",
      min: { immortalValue: 50, wisdom: 55 },
      art: "ending/immortal_mid_wisdom.jpg",
      text: "悟了天機又捨不得紅塵。\\n不上不下的尷尬位置，\\n成了仙界最會抱怨的中產。",
    },
    {
      id: "immortal-low",
      priority: 40,
      name: "雲端邊緣人",
      min: { immortalValue: 30, wisdom: 40 },
      max: { immortalValue: 49 },
      art: "ending/immortal_low.jpg",
      text: "仙氣只剩一口，隨時登出。\\n既沒有大智慧，\\n也沒攢夠飛升的本錢。",
    },
    {
      id: "immortal-battery",
      priority: 0,
      name: "天庭背景板",
      art: "ending/immortal_battery.jpg",
      text: "靈氣耗盡，原地蒸發。\\n連像樣的神仙都沒撐過，\\n被洪流刷成廢棄物。",
    },
  ],
};`,

  alienEnding: `window.alienEnding = {
  // 對齊 15 題縮放後總分。tech 為主軸（約 15 題累積 60~110）。
  // min/max 含等號；區間互相銜接。
  endings: [
    {
      id: "sage-tale",
      priority: 95,
      name: "銀河智者",
      min: { tech: 100, wisdom: 90, blessing: 55 },
      max: { ignorance: 55 },
      art: "ending/alien_sage_tale.jpg",
      text: "文明不過是一場集體共識。\\n但愛與眼淚是真的。\\n荒謬鬧劇中，生命值得擁抱。",
    },
    {
      id: "citizen-tale",
      priority: 82,
      name: "銀河公民",
      min: { tech: 85, wisdom: 75, blessing: 40 },
      art: "ending/alien_citizen_tale.jpg",
      text: "看穿立場枷鎖，思維跨越地球。\\n銀河議會授予權限：\\n歡迎登入，銀河公民。",
    },
    {
      id: "scholar-tale",
      priority: 72,
      name: "星海學者",
      min: { tech: 70, wisdom: 65 },
      art: "ending/alien_scholar_tale.jpg",
      text: "宇宙越浩瀚，人類越顯渺小。\\n你對每一個掙扎活著的生命，\\n報以深深的敬意。",
    },
    {
      id: "reader-tale",
      priority: 62,
      name: "文明解譯者",
      min: { tech: 55, wisdom: 50 },
      art: "ending/alien_reader_tale.jpg",
      text: "文明偉大處從來不是晶片鋼鐵，\\n而是數十億陌生人，\\n願意相信同一個溫暖故事。",
    },
    {
      id: "observer-tale",
      priority: 52,
      name: "地球觀察員",
      min: { tech: 40, wisdom: 40 },
      art: "ending/alien_observer_tale.jpg",
      text: "你悄悄退到文明之外。\\n冷眼看清國家貨幣究竟是什麼，\\n默默戴上觀察者的視角。",
    },
    {
      id: "signal-tale",
      priority: 42,
      name: "頻率解碼者",
      min: { tech: 25 },
      art: "ending/alien_signal_tale.jpg",
      text: "習以為常的事真的理所當然嗎？\\n你還沒有答案，\\n但夜空深處的訊號已接通。",
    },
    {
      id: "signal",
      priority: 38,
      name: "訊號接收者",
      min: { tech: 10 },
      max: { tech: 24 },
      art: "ending/alien_signal.jpg",
      text: "在無盡的雜訊之中，\\n你終於捕捉到了第一道，\\n微弱而清晰的訊號。",
    },
    {
      id: "voyage",
      priority: 0,
      name: "航道上的人",
      art: "ending/alien_voyage.jpg",
      text: "四周一片死寂。\\n宇宙的盡頭，\\n訊號尚未成形。",
    },
  ],
};`,
};

const FILES = [
  { file: "animal.js", key: "animalEnding" },
  { file: "asura.js", key: "asuraEnding" },
  { file: "hell.js", key: "hellEnding" },
  { file: "heaven.js", key: "heavenEnding" },
  { file: "human.js", key: "humanEnding" },
  { file: "immortal.js", key: "immortalEnding" },
  { file: "alien.js", key: "alienEnding" },
];

FILES.forEach(function each(item) {
  const full = path.join(root, "data", item.file);
  let src = fs.readFileSync(full, "utf8");
  const before = (src.match(/effect:\s*\{/g) || []).length;
  src = scaleEffectsInSource(src);
  const after = (src.match(/effect:\s*\{/g) || []).length;
  if (before !== after) {
    throw new Error(item.file + " effect count changed " + before + " -> " + after);
  }
  const endingRe = new RegExp("window\\." + item.key + "\\s*=\\s*\\{[\\s\\S]*?\\};\\s*$");
  if (!endingRe.test(src)) {
    throw new Error(item.file + " missing " + item.key);
  }
  src = src.replace(endingRe, ENDINGS[item.key].trim() + "\n");
  fs.writeFileSync(full, src);
  console.log("updated", item.file, "effects", before);
});

console.log("done");
