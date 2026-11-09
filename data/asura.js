window.asuraOpenEvents = [
  // ==================== [asura_open] 開局之戰 ====================
  {
    id: 1,
    stage: "asura_open",
    text: "跨部門甩鍋會，黑鍋扣你頭上。全場安靜等你自爆。（{{WHO}}：責任轉移會同時點燃耗竭與怒意——疏離通常最先開火）",
    options: [
      {
        text: "拍桌開大，爛帳一次翻完。",
        effect: { anger: 10, blessing: -5, composure: -10 }
      },
      {
        text: "證據丟群組，主管社死直播。",
        effect: { anger: 8, greed: 4, wisdom: -4 }
      },
      {
        text: "用紀錄釐清。沒掌聲，有命。",
        effect: { composure: 3, wisdom: 4, anger: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 2,
    stage: "asura_open",
    text: "同學會十分鐘變沒獎盃的世界盃。年薪房價鋼琴獎輪番上場。（{{DIGITAL}}：線下敘事也會被社群軍備邏輯劫持——比較焦慮不限螢幕）",
    options: [
      {
        text: "人生包裝成成功學簡報上場。",
        effect: { greed: 9, ignorance: 9, blessing: -3 }
      },
      {
        text: "全程翻白眼，內心瘋狂吐槽。",
        effect: { anger: 8, ignorance: 6 }
      },
      {
        text: "安靜吃飯。不比較很省電。",
        effect: { wisdom: 4, composure: 3, greed: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 3,
    stage: "asura_open",
    text: "有人胡說八道，千則留言圍攻。你的回擊鍵凌晨自動亮起。（{{SLEEP}}：鍵盤戰拖到三點——睡眠剝奪會把勝負慾加成怒氣）",
    options: [
      {
        text: "兩千字長文戰到凌晨三點。",
        effect: { anger: 10, ignorance: 9, composure: -8 }
      },
      {
        text: "截圖發限動，道德高地團購。",
        effect: { anger: 6, ignorance: 8, blessing: -2 }
      },
      {
        text: "直接滑走。網勝兌不了現金。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 4,
    stage: "asura_open",
    text: "綠燈亮，前車慢半拍，唯一通行窗消失。喇叭變成情緒出口。（{{APA}}：壓力與認知負荷升高時，微小阻礙更容易被解讀成挑釁）",
    options: [
      {
        text: "喇叭末日，超車再送眼神刀。",
        effect: { anger: 10, blessing: -5, composure: -10 }
      },
      {
        text: "一路髒話到下個路口，血壓領先。",
        effect: { anger: 8, composure: -6 }
      },
      {
        text: "深呼吸。反正卡同一個紅燈。",
        effect: { composure: 3, wisdom: 5, anger: -6, blessing: 3 }
      }
    ]
  },

  {
    id: 5,
    stage: "asura_open",
    text: "年度唯一海外培訓名額，死對頭也在短名單。稀缺把職場變戰場。（{{ECONOMICS}}：稀缺效應：名額越少，腦內估值與敵意一起暴漲）",
    options: [
      {
        text: "收集黑歷史，評選前先開情報戰。",
        effect: { anger: 10, greed: 9, blessing: -5 }
      },
      {
        text: "盯對方進度，焦慮到睡不著。",
        effect: { ignorance: 9, composure: -8 }
      },
      {
        text: "做好自己的成果。該是你的跑不掉。",
        effect: { blessing: 5, wisdom: 4, composure: 3 }
      }
    ]
  },

  {
    id: 6,
    stage: "asura_open",
    text: "長輩分享《醫師不敢說的秘密》。荒謬到想退群——要不要打臉？（{{DIGITAL}}：假訊息轉發鏈最擅長把親情群組變成戰場直播）",
    options: [
      {
        text: "貼資料打臉，順便嘲『還有人信？』",
        effect: { anger: 9, ignorance: 6, blessing: -2 }
      },
      {
        text: "回貼圖，截圖給朋友群吐槽。",
        effect: { ignorance: 8, anger: 4 }
      },
      {
        text: "私下溫和聊。長輩想贏的常不是事實。",
        effect: { wisdom: 4, composure: 3, anger: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 7,
    stage: "asura_open",
    text: "等十分鐘的車位被逆向車搶走。損失厭惡瞬間升級成殺意。（{{ECONOMICS}}：已投入的等待成本，會把普通車位標成戰略物資）",
    options: [
      {
        text: "堵住車門，今天不講清楚別想走。",
        effect: { anger: 10, blessing: -5, composure: -10 }
      },
      {
        text: "開窗怒罵三分鐘，壓力一次清空。",
        effect: { anger: 10, composure: -8 }
      },
      {
        text: "搖頭離開。生命別浪費在搶位上。",
        effect: { composure: 3, wisdom: 4, anger: -9, blessing: 4 }
      }
    ]
  },

  {
    id: 8,
    stage: "asura_open",
    text: "流量更高的網紅公開嘲諷你，還夾帶人生攻擊。（{{DIGITAL}}：被更大帳號點名時，威脅偵測全面超頻——比較焦慮經典發作）",
    options: [
      {
        text: "立刻拍片回擊。創作者變復仇者。",
        effect: { anger: 10, greed: 8, blessing: -5 }
      },
      {
        text: "找律師寄函。氣勢先到位。",
        effect: { anger: 9, greed: 6, blessing: -3 }
      },
      {
        text: "繼續做作品。有些人流量靠別人。",
        effect: { wisdom: 5, composure: 3, anger: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 9,
    stage: "asura_open",
    text: "聚會有人嘆「換新車後真麻煩」——炫耀偽裝成抱怨。（{{HEDONIC}}：地位消費的爽感消退快，下一輪軍備競賽卻啟動更快）",
    options: [
      {
        text: "開啟吹牛模式，氣氛進入軍備賽。",
        effect: { greed: 10, ignorance: 10, blessing: -4 }
      },
      {
        text: "微笑回家，發『低調才是奢華』限動。",
        effect: { anger: 9, ignorance: 8 }
      },
      {
        text: "真心替他開心，守住自己的步調。",
        effect: { wisdom: 5, blessing: 5, greed: -8 }
      }
    ]
  },

  {
    id: 10,
    stage: "asura_open",
    text: "主管誇同事企劃，最好點子其實是你的。功勞被端走。（{{WHO}}：貢獻被吞沒時，疏離與耗竭同步上升——倦怠三軸連動）",
    options: [
      {
        text: "當場補十次『當初是我提的』。",
        effect: { anger: 9, greed: 8, blessing: -3 }
      },
      {
        text: "默默記仇，列入觀察名單。",
        effect: { anger: 8, ignorance: 8 }
      },
      {
        text: "記取教訓，未來更好呈現貢獻。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 11,
    stage: "asura_open",
    text: "季度業績你和另一組只差一點。排行榜讓群組充滿火藥味。（{{ECONOMICS}}：相對排名稀缺時，邊際差距會被大腦標成生死線）",
    options: [
      {
        text: "研究對方是否作弊，找逆轉劇本。",
        effect: { greed: 8, anger: 8, blessing: -3 }
      },
      {
        text: "整天刷排行榜，次數破三位數。",
        effect: { ignorance: 8, composure: -6 }
      },
      {
        text: "拍拍自己，檢討可成長之處。",
        effect: { wisdom: 4, composure: 3, blessing: 5 }
      }
    ]
  },

  {
    id: 12,
    stage: "asura_open",
    text: "公司出現派系，中午坐哪張桌都有政治含義。（{{APA}}：群體認同會讓日常互動逐漸帶上陣營色彩）",
    options: [
      {
        text: "加入最強一派，順便背後捅另一邊。",
        effect: { greed: 9, anger: 8, blessing: -4 }
      },
      {
        text: "兩邊討好，最後兩邊都不信你。",
        effect: { ignorance: 10, greed: 6, composure: -8 }
      },
      {
        text: "專注做事。精力花作品不花宮鬥。",
        effect: { wisdom: 4, composure: 3, greed: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 13,
    stage: "asura_open",
    text: "茶水間驚天八卦發酵。你剛好經過——要不要伸耳朵？（{{DIGITAL}}：八卦與碎片資訊最容易劫持注意力資源）",
    options: [
      {
        text: "湊進去，順便腦補劇情補完。",
        effect: { ignorance: 9, anger: 4, blessing: -3 }
      },
      {
        text: "裝不在乎，耳朵開高解析收音。",
        effect: { ignorance: 6, greed: 4 }
      },
      {
        text: "裝咖啡離開。別人的人生不好追。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  // ==================== [asura_abyss] 深淵期  (14 ~ 27) ====================
  {
    id: 14,
    stage: "asura_abyss",
    text: "高層掩蓋重大問題。揭發可能重創公司；不揭發，遲早有人受害。（{{APA}}：價值衝突會顯著提高決策負荷：正確選項也極耗能）",
    options: [
      {
        text: "當作沒看見。問題不歸你管。",
        effect: { ignorance: 10, blessing: -5, composure: -6 }
      },
      {
        text: "立刻公開爆料，不計代價揭穿。",
        effect: { blessing: 5, anger: 8, wisdom: 4 }
      },
      {
        text: "蒐證完整，找傷害最小的揭露方式。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 15,
    stage: "asura_abyss",
    text: "對手用三倍薪水挖走核心員工。忠誠也有市場價。（{{ECONOMICS}}：損失厭惡碰上人力市場定價，背叛感會被標成天價）",
    options: [
      {
        text: "怒罵忘恩負義，放話業界封殺。",
        effect: { anger: 10, blessing: -5 }
      },
      {
        text: "懷疑所有人，人人都是下個叛徒。",
        effect: { ignorance: 10, anger: 6, composure: -8 }
      },
      {
        text: "反思公司值不值得被留下。",
        effect: { wisdom: 5, composure: 3, anger: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 16,
    stage: "asura_abyss",
    text: "長輩房產讓家族群組變戰場。昨天叫叔叔阿姨，今天貼法院判例。（{{ECONOMICS}}：遺產是極端稀缺資源：親情帳與現金帳同時爆倉）",
    options: [
      {
        text: "寸土不讓。親情不能當飯吃。",
        effect: { greed: 10, anger: 10, blessing: -5 }
      },
      {
        text: "表面和氣，私下找律師最大化利益。",
        effect: { greed: 9, ignorance: 8, blessing: -4 }
      },
      {
        text: "守原則，不讓財產毀掉人情。",
        effect: { wisdom: 4, composure: 3, blessing: 5 }
      }
    ]
  },

  {
    id: 17,
    stage: "asura_abyss",
    text: "半年內容被原封搬走，對方流量是你十倍。（{{DIGITAL}}：抄襲把比較焦慮轉成戰意——曝光落差本身就是燃料）",
    options: [
      {
        text: "開戰到底，支持者轟成廢墟。",
        effect: { anger: 10, ignorance: 8, blessing: -5 }
      },
      {
        text: "天天檢舉，越檢舉越睡不著。",
        effect: { anger: 9, ignorance: 9, composure: -6 }
      },
      {
        text: "依法維權，精力放回創作。",
        effect: { wisdom: 5, composure: 3, anger: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 18,
    stage: "asura_abyss",
    text: "死對頭公司倒了。朋友圈轉發慘況，留言區幸災樂禍。（{{HEDONIC}}：擊敗對手的快感消退速度常比想像更快）",
    options: [
      {
        text: "打開香檳。這天等很久了。",
        effect: { anger: 10, blessing: -5, greed: 6 }
      },
      {
        text: "假裝同情，回家後把對方倒楣事講三輪。",
        effect: { ignorance: 8, anger: 6, blessing: -2 }
      },
      {
        text: "放下手機。命運遲早輪到每個人。",
        effect: { wisdom: 5, blessing: 5, anger: -8 }
      }
    ]
  },

  {
    id: 19,
    stage: "asura_abyss",
    text: "極度惡毒匿名私訊，精準戳痛點。要不要人肉？（{{SLEEP}}：夜間惡意訊息最會劫持睡眠：威脅迴圈比內容本身更傷）",
    options: [
      {
        text: "開始人肉。今天不是你死就是我活。",
        effect: { anger: 10, ignorance: 8, blessing: -5 }
      },
      {
        text: "截圖公審，拉大家一起生氣。",
        effect: { anger: 9, ignorance: 8 }
      },
      {
        text: "封鎖刪除。垃圾不用分類，直接丟。",
        effect: { wisdom: 5, composure: 3, anger: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 20,
    stage: "asura_abyss",
    text: "凌晨兩點樓上還在搬家具。睡眠被剝奪，殺意數據破表。（{{SLEEP}}：睡眠剝奪會顯著升高怒意與衝動——褪黑激素被迫加班）",
    options: [
      {
        text: "衝上樓理論，今晚必須有人代價。",
        effect: { anger: 10, blessing: -5 }
      },
      {
        text: "規劃復仇，讓對方體驗何謂噪音。",
        effect: { anger: 10, ignorance: 8 }
      },
      {
        text: "錄音蒐證，依法處理。情緒交給法律。",
        effect: { composure: 3, wisdom: 5, anger: -6, blessing: 3 }
      }
    ]
  },

  {
    id: 21,
    stage: "asura_abyss",
    text: "奧客拍桌要你下跪道歉。問題不在你，倦怠卻全在你身上。（{{WHO}}：情緒勞動把耗竭堆在第一線：失控常是累積而非單次）",
    options: [
      {
        text: "理智斷線，現場進入肉搏模式。",
        effect: { anger: 10, blessing: -5 }
      },
      {
        text: "強忍低頭，怨恨在心裡生根。",
        effect: { anger: 10, ignorance: 8, composure: -6 }
      },
      {
        text: "請主管或保全處理，不讓失控定義你。",
        effect: { wisdom: 4, composure: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 22,
    stage: "asura_abyss",
    text: "同事匿名黑函攻擊你。最痛的不是內容，是天天對你微笑的那張臉。（{{APA}}：信任崩盤後，每個互動都變成高負荷決策）",
    options: [
      {
        text: "直接對質，辦公室只能活一個。",
        effect: { anger: 10, blessing: -5 }
      },
      {
        text: "默默蒐集把柄，等待反殺。",
        effect: { anger: 10, greed: 8, ignorance: 6 }
      },
      {
        text: "證據自清，永久移出信任名單。",
        effect: { composure: 3, wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 23,
    stage: "asura_abyss",
    text: "論壇抹黑熱文，幾萬陌生人討論你的人格。（{{DIGITAL}}：公審機制把個人事件放大成全網比較與道德競賽）",
    options: [
      {
        text: "開小號對戰全網，鍵盤修羅模式。",
        effect: { anger: 10, ignorance: 10, blessing: -5 }
      },
      {
        text: "懷疑人生，覺得全世界針對你。",
        effect: { ignorance: 10, composure: -9 }
      },
      {
        text: "留證找律師，關 App 去散步。",
        effect: { wisdom: 5, composure: 3, anger: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 24,
    stage: "asura_abyss",
    text: "伴侶前任傳來訊息加曖昧合照。信任帳戶瞬間觸發警報。（{{APA}}：親密危機是決策過載高發區：監控與溝通搶同一條帶寬）",
    options: [
      {
        text: "立刻掀起感情世界大戰。",
        effect: { anger: 10, ignorance: 9, blessing: -4 }
      },
      {
        text: "開始偷偷檢查手機和行蹤。",
        effect: { ignorance: 10, composure: -9, anger: 4 }
      },
      {
        text: "直接溝通。信任若需監控，其實沒了。",
        effect: { wisdom: 4, composure: 4, anger: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 25,
    stage: "asura_abyss",
    text: "全網公審某人，證據看似指向有罪。群體比個人更可怕。（{{DIGITAL}}：轉發量常壓過求證動機——圍觀本身就是加速器）",
    options: [
      {
        text: "加入戰局。站正義比較舒服。",
        effect: { anger: 10, ignorance: 10, blessing: -4 }
      },
      {
        text: "轉發圍觀。沒開罵，也不想錯過。",
        effect: { ignorance: 8, anger: 4 }
      },
      {
        text: "等待更多資訊。群體有時更可怕。",
        effect: { wisdom: 5, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 26,
    stage: "asura_abyss",
    text: "決勝球裁判誤判給你冠軍點，你知道那球壓線。勝利要不要收下？（{{HEDONIC}}：違背價值換來的快感通常比想像更短暫）",
    options: [
      {
        text: "沉默收下。反正沒人發現。",
        effect: { greed: 9, ignorance: 8, blessing: -3 }
      },
      {
        text: "猶豫半天，最後順著判決收下。",
        effect: { ignorance: 8, composure: -4 }
      },
      {
        text: "主動承認誤判。輸比分，贏自己。",
        effect: { blessing: 5, wisdom: 5, greed: -8 }
      }
    ]
  },

  {
    id: 27,
    stage: "asura_abyss",
    text: "主管暗示：把對手錯誤放大一點，升職就是你的。（{{WHO}}：職場淘汰賽邀請函：踩人上位會加速疏離與道德耗竭）",
    options: [
      {
        text: "點頭。職場本來就是淘汰賽。",
        effect: { greed: 10, anger: 9, blessing: -5 }
      },
      {
        text: "表面無辜，實際偷偷補刀。",
        effect: { ignorance: 9, greed: 8, blessing: -4 }
      },
      {
        text: "拒絕踩人上位。輸也要輸得像自己。",
        effect: { blessing: 5, wisdom: 4, composure: 3 }
      }
    ]
  },

  // ==================== [asura_finale] 最終期  (28 ~ 40) ====================
  {
    id: 28,
    stage: "asura_finale",
    text: "急診只剩最後一套關鍵設備。老醫師對上十歲孩子。（{{APA}}：高風險道德決策會放大認知與情緒衝突，情感與準則同時搶決策權）",
    options: [
      {
        text: "選老醫師。他還能救更多人。",
        effect: { greed: 6, ignorance: 8, blessing: -2 }
      },
      {
        text: "選孩子。生命才正要開始。",
        effect: { blessing: 5, wisdom: 4, anger: 4 }
      },
      {
        text: "依客觀醫療標準，不讓情感判生死。",
        effect: { composure: 3, wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "asura_finale",
    text: "掌握富二代權貴犯罪證據。公開他入獄；家人可能遭報復。（{{SLEEP}}：情報變人質時，夜間反芻最容易把睡眠與判斷一起拖垮）",
    options: [
      {
        text: "為保護家人沉默。正義輸給親人。",
        effect: { greed: 9, ignorance: 9, blessing: -5 }
      },
      {
        text: "公開證據。人生從此翻天覆地。",
        effect: { blessing: 5, anger: 8, wisdom: 4 }
      },
      {
        text: "找第三方揭露，讓證據離開自己。",
        effect: { wisdom: 5, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 30,
    stage: "asura_finale",
    text: "公司準備用造假數據上市。幾千人生計與積蓄壓在你肩上。（{{ECONOMICS}}：高額利益與高額損失會同時放大風險容忍度）",
    options: [
      {
        text: "當作不知道。世界一直這樣運作。",
        effect: { ignorance: 10, blessing: -5 }
      },
      {
        text: "向監管單位檢舉，不惜玉石俱焚。",
        effect: { blessing: 5, anger: 8, wisdom: 4 }
      },
      {
        text: "給內部修正最後機會，同時留證。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 31,
    stage: "asura_finale",
    text: "情報能救五百名戰友，代價是暴露潛伏十年的間諜與家人。（{{APA}}：極端道德取捨會佔用大量認知資源）",
    options: [
      {
        text: "用情報。五百條命比一條重。",
        effect: { greed: 8, ignorance: 8, blessing: -4 }
      },
      {
        text: "保護間諜。有些犧牲不能被背叛。",
        effect: { anger: 8, ignorance: 9, blessing: -3 }
      },
      {
        text: "冒風險找第三路，試著救兩邊。",
        effect: { wisdom: 5, composure: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 32,
    stage: "asura_finale",
    text: "派系鬥爭最終局，雙方逼你表態。拒絕選邊＝同時得罪兩邊。（{{WHO}}：組織政治長期施壓，是職業倦怠的高效燃料）",
    options: [
      {
        text: "加入最有機會獲勝的一方。",
        effect: { greed: 9, anger: 6, blessing: -3 }
      },
      {
        text: "兩邊討好，希望左右逢源。",
        effect: { ignorance: 10, composure: -8 }
      },
      {
        text: "只對事情負責，不對派系效忠。",
        effect: { wisdom: 5, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 33,
    stage: "asura_finale",
    text: "好友犯下嚴重錯誤，你是唯一知情者。忠誠對上真相。（{{APA}}：雙重忠誠衝突會把決策系統推到極限負載）",
    options: [
      {
        text: "包庇到底，朋友就是要挺。",
        effect: { ignorance: 9, blessing: -4 }
      },
      {
        text: "立刻檢舉，完全不留情面。",
        effect: { anger: 8, wisdom: 5, blessing: 3 }
      },
      {
        text: "幫他承擔責任，不幫他逃避。",
        effect: { wisdom: 5, blessing: 5 }
      }
    ]
  },

  {
    id: 34,
    stage: "asura_finale",
    text: "多年競爭後你擊敗最大對手。他資金斷裂，只差最後一擊。（{{HEDONIC}}：趕盡殺絕的峰值快感短，習慣勝利後空虛來得更快）",
    options: [
      {
        text: "趕盡殺絕，永絕後患。",
        effect: { anger: 10, greed: 8, blessing: -5 }
      },
      {
        text: "表面放過，實際保持高度戒備。",
        effect: { composure: 2, ignorance: 6 }
      },
      {
        text: "停止追擊。要的是勝利，不是屍體。",
        effect: { wisdom: 5, blessing: 5, anger: -8 }
      }
    ]
  },

  {
    id: 35,
    stage: "asura_finale",
    text: "孩子在學校被霸凌，加害者家長背景顯赫。資源不對等開打。（{{ECONOMICS}}：權力與資源不對稱會把「公正」變成昂貴商品）",
    options: [
      {
        text: "利用關係和資源全面反擊。",
        effect: { anger: 10, greed: 6 }
      },
      {
        text: "默默吞下，希望事情自己過去。",
        effect: { ignorance: 9, composure: -6 }
      },
      {
        text: "堅定處理，但不讓仇恨主導。",
        effect: { wisdom: 4, composure: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "asura_finale",
    text: "晉升最高權力的條件：放棄曾堅持的價值觀。（{{WHO}}：長期違背自身價值，容易加速疏離感與心理耗竭）",
    options: [
      {
        text: "接受。理想不能當飯吃。",
        effect: { greed: 10, blessing: -5 }
      },
      {
        text: "一邊妥協，一邊說只是暫時。",
        effect: { ignorance: 9, greed: 6 }
      },
      {
        text: "拒絕。失去自己後，得到什麼都不值。",
        effect: { wisdom: 5, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 37,
    stage: "asura_finale",
    text: "當年害你最深的人如今落魄，需要你才能活。報應到帳。（{{HEDONIC}}：復仇爽感會適應；放下或報復，測的是你還要不要那台跑步機）",
    options: [
      {
        text: "拒絕。這是他應得的報應。",
        effect: { anger: 10, blessing: -5 }
      },
      {
        text: "幫他，但天天提醒當年惡行。",
        effect: { anger: 6, ignorance: 6 }
      },
      {
        text: "幫一次，然後放下這段恩怨。",
        effect: { blessing: 5, wisdom: 5, anger: -9 }
      }
    ]
  },

  {
    id: 38,
    stage: "asura_finale",
    text: "意外獲得足以摧毀仇人的秘密，沒人知道是你。（{{SLEEP}}：握著毀滅鍵的夜晚最難睡：情報本身就會變成失眠源）",
    options: [
      {
        text: "使用它。遲來的正義也是正義。",
        effect: { anger: 10, greed: 6 }
      },
      {
        text: "保存它，以備未來之需。",
        effect: { ignorance: 8, greed: 4 }
      },
      {
        text: "親手銷毀。仇恨不再繼續收利息。",
        effect: { wisdom: 5, composure: 4, anger: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 39,
    stage: "asura_finale",
    text: "名聲財富地位全有了，卻沒想像中快樂。王座上跑步機還在轉。（{{HEDONIC}}：享樂跑步機不認頭銜：贏得越多，基線滿足越容易歸零）",
    options: [
      {
        text: "設更高目標。一定是贏得還不夠。",
        effect: { greed: 10, ignorance: 8 }
      },
      {
        text: "懷疑人生是不是哪裡弄錯了。",
        effect: { ignorance: 9, composure: -4 }
      },
      {
        text: "第一次停下來問：到底在追什麼？",
        effect: { wisdom: 5, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "asura_finale",
    text: "你贏了，敵人都輸了，王座在前，心裡卻安靜。你真正想得到什麼？（{{HEDONIC}}：終極勝利常暴露適應終點：峰值退潮後只剩「然後呢」）",
    options: [
      {
        text: "坐上王座，享受征服一切的榮耀。",
        effect: { anger: 10, greed: 10, blessing: -5, composure: -8 }
      },
      {
        text: "放過所有人，仍時時回頭確認追兵。",
        effect: { composure: 2, ignorance: 9, wisdom: 5, blessing: 3 }
      },
      {
        text: "轉身離開。最大勝利是不再需要擊敗別人。",
        effect: { wisdom: 5, composure: 4, blessing: 5, anger: -10 }
      }
    ]
  }
];

window.asuraEvents = window.asuraOpenEvents;

window.asuraEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "阿修羅道出口",
      min: { wisdom: 100, composure: 85 },
      max: { anger: 55 },
      art: "ending/asura_exit.jpg",
      text: "放下武器，停止內卷。\n解脫不是贏過所有人，\n而是想起你根本不需要這場仗。",
    },
    {
      id: "awake",
      priority: 80,
      name: "局外贏家",
      above: { wisdom: 74, composure: 59 },
      art: "ending/asura_awake.jpg",
      text: "在這場撕裂裡，清醒最痛苦。\n贏了又怎樣？\n你只是在別人的戰場上累死。",
    },
    {
      id: "riot",
      priority: 70,
      name: "常勝狂人",
      above: { anger: 99 },
      art: "ending/asura_riot.jpg",
      text: "好勝心開到頂，見誰想掐死。\n血洗整個修羅場後才發現，\n身邊連一個活口都沒有。",
    },
    {
      id: "greed-max",
      priority: 70,
      name: "權力黑洞",
      above: { greed: 99 },
      art: "ending/asura_greed_max.jpg",
      text: "嫉妒與貪婪頂到天花板。\n你搶下所有的資源與版位，\n卻將自己困在最高檔囚籠裡。",
    },
    {
      id: "caffeine",
      priority: 45,
      name: "內卷戰士",
      min: { anger: 50 },
      max: { anger: 99 },
      art: "ending/asura_caffeine.jpg",
      text: "把日常過成戰場的焦慮狂。\n看誰都像在偷你的成果，\n每天滿腔火氣跟全世界槓到底。",
    },
    {
      id: "kpi",
      priority: 45,
      name: "排名奴隸",
      min: { greed: 50 },
      max: { greed: 99 },
      art: "ending/asura_kpi.jpg",
      text: "眼裡只有排行榜和績效。\n你以為自己正在往上爬，\n其實只是修羅場的免費打手。",
    },
    {
      id: "wisdom-mid",
      priority: 30,
      name: "疲憊旁觀者",
      min: { wisdom: 50 },
      art: "ending/asura_wisdom_mid.jpg",
      text: "看穿打殺的無聊卻又手癢。\n不上不下的尷尬心態，\n讓你活得比誰都糾結痛苦。",
    },
    {
      id: "battery",
      priority: 0,
      name: "戰場砲灰",
      art: "ending/asura_battery.jpg",
      text: "彈盡援絕，原地陣亡。\n沒有贏到最後的命，\n也沒有退出的勇氣。",
    },
  ],
};
