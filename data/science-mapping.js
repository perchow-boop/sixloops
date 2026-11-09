/* 科學底座與八道機構對照（唯一來源）。改這裡即可，無需再同步另一份。 */
(function (root) {
  var scientificBases = {
    SLEEP: "Sleep Foundation",
    ECONOMICS: "Behavioral Economics",
    APA: "APA Psychology",
    WHO: "WHO Burnout",
    DIGITAL: "DataReportal / Pew Research",
    HEDONIC: "Hedonic Treadmill",
  };

  var realmLoreMapping = {
    ghost: {
      realmName: "餓鬼道",
      agencies: {
        SLEEP: "【冥間夜貓局】",
        ECONOMICS: "【孟婆算盤局】",
        APA: "【冤魂意志所】",
        WHO: "【餓鬼勞動局】",
        DIGITAL: "【望鄉數據處】",
        HEDONIC: "【感官麻木局】",
      },
    },
    hell: {
      realmName: "地獄道",
      agencies: {
        SLEEP: "【不眠監獄署】",
        ECONOMICS: "【地獄債務庭】",
        APA: "【業火崩潰室】",
        WHO: "【牛頭勞工署】",
        DIGITAL: "【刑具直播台】",
        HEDONIC: "【痛苦適應所】",
      },
    },
    beast: {
      realmName: "畜生道",
      agencies: {
        SLEEP: "【荒野夜行站】",
        ECONOMICS: "【本能交易所】",
        APA: "【無明發呆所】",
        WHO: "【野獸倦怠處】",
        DIGITAL: "【盲目滑動台】",
        HEDONIC: "【本能麻痺局】",
      },
    },
    human: {
      realmName: "人道",
      agencies: {
        SLEEP: "【社畜時鐘所】",
        ECONOMICS: "【都市精算所】",
        APA: "【決策過載所】",
        WHO: "【極限倦怠處】",
        DIGITAL: "【都市迷失局】",
        HEDONIC: "【物質麻痺所】",
      },
    },
    asura: {
      realmName: "阿修羅道",
      agencies: {
        SLEEP: "【戰場情報局】",
        ECONOMICS: "【資源掠奪所】",
        APA: "【內卷壓力源】",
        WHO: "【修羅勞動署】",
        DIGITAL: "【比較焦慮網】",
        HEDONIC: "【勝負麻痺局】",
      },
    },
    immortal: {
      realmName: "仙道",
      agencies: {
        SLEEP: "【閉關打坐所】",
        ECONOMICS: "【煉丹成本處】",
        APA: "【天庭內耗所】",
        WHO: "【仙人孤立局】",
        DIGITAL: "【洞府幻覺網】",
        HEDONIC: "【虛空空虛所】",
      },
    },
    alien: {
      realmName: "外星人道",
      agencies: {
        SLEEP: "【星際失眠站】",
        ECONOMICS: "【銀河黑市處】",
        APA: "【全息過載署】",
        WHO: "【艦隊過勞署】",
        DIGITAL: "【短影音總署】",
        HEDONIC: "【感官過載局】",
      },
    },
    heaven: {
      realmName: "天道",
      agencies: {
        SLEEP: "【極樂不眠局】",
        ECONOMICS: "【福報計算局】",
        APA: "【無聊精神所】",
        WHO: "【清閒無為署】",
        DIGITAL: "【虛擬幻境局】",
        HEDONIC: "【虛無管理局】",
      },
    },
  };

  /** 遊戲 realmId → lore 鍵 */
  var realmIdToLoreKey = {
    hungry: "ghost",
    ghost: "ghost",
    hell: "hell",
    animal: "beast",
    beast: "beast",
    human: "human",
    asura: "asura",
    immortal: "immortal",
    alien: "alien",
    heaven: "heaven",
  };

  function agencyLabel(loreKey, baseKey) {
    var raw =
      (((realmLoreMapping[loreKey] || {}).agencies || {})[baseKey]) || baseKey;
    return String(raw).replace(/^【/, "").replace(/】$/, "");
  }

  function resolveAgencyTokens(text, realmId) {
    var loreKey = realmIdToLoreKey[realmId] || realmId;
    return String(text || "").replace(
      /\{\{(SLEEP|ECONOMICS|APA|WHO|DIGITAL|HEDONIC)\}\}/g,
      function (_, key) {
        return agencyLabel(loreKey, key);
      }
    );
  }

  root.scientificBases = scientificBases;
  root.realmLoreMapping = realmLoreMapping;
  root.realmIdToLoreKey = realmIdToLoreKey;
  root.agencyLabel = agencyLabel;
  root.resolveAgencyTokens = resolveAgencyTokens;
})(typeof window !== "undefined" ? window : globalThis);
