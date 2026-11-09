window.hungryGhostEvents = [
  // ==================== [ghost_open] 覺醒期 (1 ~ 13) ====================
  {
    id: 1,
    stage: "ghost_open",
    text: "凌晨 3:07，炸雞半價跳出來——胃沒叫，演算法先餓了。（{{SLEEP}}：睡前螢幕使用會延後褪黑激素分泌，褪黑激素最先被加班）",
    options: [
      {
        text: "下單、加點、湊免運。人生苦，炸雞不能苦。",
        effect: { blessing: -3, greed: 6, composure: -4 }
      },
      {
        text: "喝溫水改滑短影音。沒吃到，天卻亮了。",
        effect: { composure: -4, ignorance: 6 }
      },
      {
        text: "刪 App 躺平。腦內炸雞揮手，錢包先守住。",
        effect: { wisdom: 5, composure: 2, greed: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 2,
    stage: "ghost_open",
    text: "茶水間巧克力寫「請慢用」，你剛吃飽，腳已路過三次。（{{ECONOMICS}}：損失厭惡讓「沒拿」聽起來像真的虧了一大口）",
    options: [
      {
        text: "倒水順手抓五六顆。這叫風險管理。",
        effect: { greed: 8, blessing: -2 }
      },
      {
        text: "品一顆最漂亮的，順便記住誰放的。",
        effect: { blessing: 3, greed: 2 }
      },
      {
        text: "目不斜視衝過。巧克力沒輸，你跑得快。",
        effect: { composure: 3, wisdom: 2 }
      }
    ]
  },

  {
    id: 3,
    stage: "ghost_open",
    text: "購物車 27 件，折扣倒數十分鐘，手心開始出汗。（{{APA}}：選項愈多，愈容易陷入選擇過載與決策疲勞）",
    options: [
      {
        text: "精算券碼「省了五千」。多花的一萬二先別提。",
        effect: { greed: 8, blessing: -4 }
      },
      {
        text: "刪一半留一半，感動自己變理性。",
        effect: { composure: 2, greed: 4 }
      },
      {
        text: "關車去洗澡。洗完忘了想買啥。",
        effect: { wisdom: 4, composure: 3, greed: -6, blessing: 4 }
      }
    ]
  },

  {
    id: 4,
    stage: "ghost_open",
    text: "修圖二十分鐘發美食照，放下五分鐘又拿起。（{{DIGITAL}}：社群日均 2 小時 23 分，刷新鍵比滿足感更勤奮）",
    options: [
      {
        text: "刪文，改酸別人破百讚。越滑越酸。",
        effect: { ignorance: 8, greed: 6, composure: -4 }
      },
      {
        text: "怪演算法，狂按讚求宇宙還流量。",
        effect: { ignorance: 4, greed: 4 }
      },
      {
        text: "關通知裝淡定。偷看多一讚，竟有點感動。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 5,
    stage: "ghost_open",
    text: "「免費試用七天」底下，小字寫著第八天自動續費。（{{ECONOMICS}}：現時偏誤專治未來帳單——今天的免費永遠比較大聲）",
    options: [
      {
        text: "先下載，一定記得取消——第 N 次說這句。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "研兩小時方案，成功說服自己需要。",
        effect: { greed: 8, composure: -6 }
      },
      {
        text: "滑掉。免費最會收走的，從來不是錢。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 6,
    stage: "ghost_open",
    text: "帳單一到，全桌齊喊「我來！」。面子開始競標，真心躲去結帳機後面。（{{ECONOMICS}}：社會規範常讓人表演大方，而非表達意願）",
    options: [
      {
        text: "搶三秒，見人真付立刻縮手，鬆一口氣。",
        effect: { greed: 8, blessing: -2 }
      },
      {
        text: "算到個位數，服務費也不能輸。",
        effect: { composure: 2 }
      },
      {
        text: "直接結帳轉移話題，戰爭秒結束。",
        effect: { blessing: 4, greed: -6 }
      }
    ]
  },

  {
    id: 7,
    stage: "ghost_open",
    text: "凌晨 1:27，你深信下一支影片能改命。（{{SLEEP}}：睡前螢幕使用常延後入睡時間，命運暫緩，藍光優先）",
    options: [
      {
        text: "滑到砸臉。痛醒先把片看完。",
        effect: { composure: -8, ignorance: 8, greed: 4 }
      },
      {
        text: "「最後三支」重複了十一輪。",
        effect: { composure: -4, ignorance: 4 }
      },
      {
        text: "手機丟床尾。想撿，但睡著了。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 8,
    stage: "ghost_open",
    text: "主管誇專案，名字卻不是你的。耗竭感比委屈更早到達現場。（{{WHO}}：倦怠常表現為耗竭感、疏離感與效能感下降）",
    options: [
      {
        text: "表面平靜，內心開拍《職場復仇者》。",
        effect: { greed: 6, anger: 8, blessing: -3 }
      },
      {
        text: "逢人澄清「不是你想的那樣」。",
        effect: { ignorance: 6, greed: 4 }
      },
      {
        text: "記這課，下次讓貢獻看得見。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 9,
    stage: "ghost_open",
    text: "餐費 1980，腦秒切「回本模式」，牛排龍蝦全像投資。（{{HEDONIC}}：享樂適應提醒：撐爆的快感，退潮速度快過結帳）",
    options: [
      {
        text: "牛排龍蝦全上。扶牆離席，仍覺虧。",
        effect: { greed: 8, blessing: -4, ignorance: 6 }
      },
      {
        text: "吃喜歡的到八分飽，專心聊天。",
        effect: { blessing: 3, composure: 2 }
      },
      {
        text: "望山海盤頓悟：回本使人什麼都幹。",
        effect: { wisdom: 5, greed: -4, blessing: 3 }
      }
    ]
  },

  {
    id: 10,
    stage: "ghost_open",
    text: "店員問要不要集點——抽屜裡早已躺著一堆。（{{ECONOMICS}}：零價格效應讓「免費」幾乎繞過理性，直達伸手反射）",
    options: [
      {
        text: "收下，跟其他貼紙一起安享晚年。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "轉送後面小孩，對方眼比中獎亮。",
        effect: { blessing: 4, greed: -2 }
      },
      {
        text: "微笑拒絕，感覺打贏免費魔王。",
        effect: { composure: 2, wisdom: 2 }
      }
    ]
  },

  {
    id: 11,
    stage: "ghost_open",
    text: "家裡還有半年衛生紙，團購通知卻震不停。理性開始被訊息量外包。（{{APA}}：持續做決定會消耗認知資源，使自制力下降）",
    options: [
      {
        text: "手比腦快付款。客廳變物流倉。",
        effect: { greed: 8, ignorance: 6 }
      },
      {
        text: "忍住沒買，下午都在想錯過多少。",
        effect: { composure: 2, greed: 4 }
      },
      {
        text: "靜音退群。世界忽然安靜。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 12,
    stage: "ghost_open",
    text: "全家睡了，只有冰箱白光在召喚。（{{SLEEP}}：夜間光源會攪亂褪黑激素，胃卻以為那是開工鈴）",
    options: [
      {
        text: "水餃雞塊冰淇淋全上。開了不吃沒禮貌。",
        effect: { greed: 6, blessing: -2 }
      },
      {
        text: "啃蘋果：水果不算宵夜。",
        effect: { ignorance: 4, greed: 2 }
      },
      {
        text: "喝溫水回房。餓的其實是情緒。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 13,
    stage: "ghost_open",
    text: "廣告喊「30 天高薪」「今日最後」，買課永遠比上課容易。（{{APA}}：計畫謬誤——想像完成的自己，從不負責打卡）",
    options: [
      {
        text: "秒買截圖限動。還沒學，已離成功一張證。",
        effect: { ignorance: 8, greed: 6 }
      },
      {
        text: "每天開五分鐘。內容忘，打卡齊。",
        effect: { composure: 2, ignorance: 4 }
      },
      {
        text: "關頁。缺的不是課，是把舊課看完。",
        effect: { wisdom: 4, greed: -4, blessing: 4 }
      }
    ]
  },


  // ==================== [ghost_abyss] 深淵期  (14 ~ 27) ====================
  {
    id: 14,
    stage: "ghost_abyss",
    text: "你只想買護手霜，櫃姐笑說「滿 3000 送 1500」。（{{ECONOMICS}}：框架效應專長把多花的錢，包裝成你賺到的樣子）",
    options: [
      {
        text: "硬湊門檻。結帳痛、拿贈爽、回家又痛。",
        effect: { greed: 8, blessing: -3 }
      },
      {
        text: "糾結十分鐘，多拿一件安慰自己有賺。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "只付護手霜走人。最貴的是湊優惠多買的。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 15,
    stage: "ghost_abyss",
    text: "年終入帳，你忽然覺得自己值得擁有全世界。（{{HEDONIC}}：享樂跑步機啟動：獎金快樂會被習慣很快調回原廠設定）",
    options: [
      {
        text: "清空收藏清單。快樂三天，帳單永久。",
        effect: { greed: 8, blessing: -4 }
      },
      {
        text: "半理財半享受，努力裝成熟。",
        effect: { composure: 2, greed: 4 }
      },
      {
        text: "先謝自己活過這年，再規劃。安全感在餘額。",
        effect: { blessing: 5, wisdom: 4, greed: -8 }
      }
    ]
  },

  {
    id: 16,
    stage: "ghost_abyss",
    text: "最後一支雞翅，全桌看見，沒人先動。（{{HEDONIC}}：稀缺會放大渴望，突然比牛排還珍貴。）",
    options: [
      {
        text: "閃電夾走。先下手為強。",
        effect: { greed: 6, blessing: -2 }
      },
      {
        text: "禮貌問一聲，沉默三秒後接收完畢。",
        effect: { composure: 2, greed: 2 }
      },
      {
        text: "夾給沒吃飽的人。被謝比吃翅更爽。",
        effect: { blessing: 4, greed: -6 }
      }
    ]
  },

  {
    id: 17,
    stage: "ghost_abyss",
    text: "限定池剩六小時，你已抽 90 發；聊天室有人曬畢業。（{{ECONOMICS}}：沉沒成本最會低語：都花了，差這一下怎麼能停）",
    options: [
      {
        text: "刷卡補刀。抽到了，爽三分鐘。",
        effect: { greed: 8, ignorance: 8, blessing: -4 }
      },
      {
        text: "嘴說隨緣，手每十分鐘開倒數。",
        effect: { composure: 3, greed: -4 }
      },
      {
        text: "刪遊戲。當下像失戀，三天後人生變長。",
        effect: { wisdom: 4, composure: 3, greed: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 18,
    stage: "ghost_abyss",
    text: "下午茶剛完，進口餅乾每經過都在叫你。（{{APA}}：決策疲勞後，伸手拿「不必需」的機率會悄悄上升）",
    options: [
      {
        text: "抓一把藏抽屜。胃不餓，安全感要存。",
        effect: { greed: 8, blessing: -2 }
      },
      {
        text: "吃一片，合理化成補腦。",
        effect: { greed: 4, ignorance: 2 }
      },
      {
        text: "拍開自己的手。伸出去的是習慣。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 19,
    stage: "ghost_abyss",
    text: "只想點滷肉飯，免運門檻卻改寫人生方程。（{{ECONOMICS}}：損失厭惡把 30 元運費，算成人生重大虧損事件）",
    options: [
      {
        text: "加飲料小菜甜點。胃痛，成功省 30 運費。",
        effect: { greed: 8, ignorance: 8, blessing: -2 }
      },
      {
        text: "先買，吃不完明天再說。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "直接付運費。有些便宜其實很貴。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 20,
    stage: "ghost_abyss",
    text: "會議上被點出小錯。問題不大，但你的防衛系統全速啟動。（{{WHO}}：職場倦怠常讓防衛先於修正，疏離感順便加時）",
    options: [
      {
        text: "反擊，翻對方全年黑歷史。",
        effect: { anger: 8, greed: 6, blessing: -4 }
      },
      {
        text: "微笑收下，內心記一筆。",
        effect: { anger: 6, ignorance: 6 }
      },
      {
        text: "修正並道謝。成長本來就不舒服。",
        effect: { wisdom: 4, blessing: 5, anger: -6 }
      }
    ]
  },

  {
    id: 21,
    stage: "ghost_abyss",
    text: "東京來回 3999，年假幾天未知，淺草寺已在腦內開跑。（{{DIGITAL}}：即時推播容易放大錯失恐懼與衝動決策）",
    options: [
      {
        text: "先搶。未來的自己會想辦法。",
        effect: { greed: 9, ignorance: 6, blessing: -2 }
      },
      {
        text: "研究請假航班到天亮，票也沒買。",
        effect: { composure: -6, ignorance: 6 }
      },
      {
        text: "關頁。真優惠是剛好用得到。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 22,
    stage: "ghost_abyss",
    text: "藥妝店買生理用品，十分鐘後籃裡多了面膜精華。（{{APA}}：貨架選項一開掛，結帳自制會先繳械投降）",
    options: [
      {
        text: "回家後悔；下次進店再重播。",
        effect: { greed: 8, ignorance: 8 }
      },
      {
        text: "對自己好一點，然後塞進抽屜深處。",
        effect: { ignorance: 6, greed: 4 }
      },
      {
        text: "改環境限制購物。克制力常是設計問題。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 23,
    stage: "ghost_abyss",
    text: "隔壁談高層八卦，你只聽到一半，大腦卻自動補完整季劇情。（{{DIGITAL}}：資訊缺口會驅動注意力，自動補完未知內容）",
    options: [
      {
        text: "開雷達模式，自行補完劇情。",
        effect: { greed: 6, ignorance: 8, blessing: -3 }
      },
      {
        text: "裝沒興趣，耳朵比誰都認真。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "戴耳機走人。人生夠複雜了。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 24,
    stage: "ghost_abyss",
    text: "健檢正常，看完保健品廣告後，突然覺得自己哪裡都不正常。（{{WHO}}：耗竭時，人更容易放大身體不適與焦慮訊號）",
    options: [
      {
        text: "下單全套保健品，用卡解決焦慮。",
        effect: { greed: 8, ignorance: 8, blessing: -2 }
      },
      {
        text: "買一瓶意思意思，求心安。",
        effect: { ignorance: 4, composure: -2 }
      },
      {
        text: "改散步早睡運動。最難買的是自律。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 25,
    stage: "ghost_abyss",
    text: "同學曬車曬旅遊，你電量 15%，自信更低。（{{DIGITAL}}：約四分之一人覺得社群讓自己更糟——電量與自信同步警告）",
    options: [
      {
        text: "酸一句。把別人想慘，自己較舒服。",
        effect: { anger: 8, greed: 6, blessing: -4 }
      },
      {
        text: "懷疑人生，連冰箱飲料都比你有前途。",
        effect: { ignorance: 8, composure: -6 }
      },
      {
        text: "按讚關機。手機裡是別人的人生。",
        effect: { wisdom: 4, blessing: 5, greed: -6 }
      }
    ]
  },

  {
    id: 26,
    stage: "ghost_abyss",
    text: "直播喊「最後三件！」——你根本不需要這件衣服。（{{ECONOMICS}}：稀缺訊號會提升主觀價值感與購買衝動）",
    options: [
      {
        text: "秒加一。到貨尺寸不合，熱情也不合。",
        effect: { greed: 8, ignorance: 8, blessing: -3 }
      },
      {
        text: "沒搶到，難過得像錯過人生轉捩點。",
        effect: { ignorance: 6, greed: 6 }
      },
      {
        text: "退出直播。限時優惠留給更需要的人。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 27,
    stage: "ghost_abyss",
    text: "生日高級餐廳，儀式感開始瘋狂加價。（{{HEDONIC}}：快樂一被拿去發限動證明，舌頭的話語權會下降）",
    options: [
      {
        text: "點爆整桌。撐到快喘不過氣，仍要發限動。",
        effect: { greed: 8, ignorance: 8, blessing: -4 }
      },
      {
        text: "菜剩一半，照拍十張。吃的是情緒。",
        effect: { greed: 6, blessing: -3 }
      },
      {
        text: "適量慶祝。快樂不必證明給別人看。",
        effect: { blessing: 5, wisdom: 4, greed: -8 }
      }
    ]
  },


  // ==================== [ghost_finale] 終局之戰 ====================
  {
    id: 28,
    stage: "ghost_finale",
    text: "大掃除翻出兩年前搶的進口餅乾：漂亮、過期、發霉。（{{HEDONIC}}：享樂適應很誠實——擁有當下的爽，退潮後只剩保存期限）",
    options: [
      {
        text: "捨不得丟，研究保存期限準不準。",
        effect: { greed: 6, ignorance: 8, blessing: -2 }
      },
      {
        text: "默默丟掉，順便罵當年的自己。",
        effect: { composure: 2, ignorance: 2 }
      },
      {
        text: "沉默三秒：最浪費的是沒用過的期待。",
        effect: { wisdom: 5, greed: -8, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "ghost_finale",
    text: "又站在冰箱前——你到底在找宵夜，還是找答案？（{{SLEEP}}：夜間醒來再碰螢幕，睡眠品質會被二次打折）",
    options: [
      {
        text: "開外送。人生沒答案，至少有鹽酥雞。",
        effect: { greed: 8, ignorance: 6, blessing: -5 }
      },
      {
        text: "滑手機麻痺。一小時沒了。",
        effect: { ignorance: 8, composure: -6 }
      },
      {
        text: "坐下承認：餓的可能從來不是胃。",
        effect: { wisdom: 5, composure: 3, greed: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 30,
    stage: "ghost_finale",
    text: "隱藏版盲盒機率 1/144，你願為未知刷卡。（{{HEDONIC}}：不確定性本身就能定價；多巴胺先結帳，理智後知後覺）",
    options: [
      {
        text: "端盒。今天不中，明天仍想。",
        effect: { greed: 8, ignorance: 6, blessing: -3 }
      },
      {
        text: "高價收二手。安慰自己時間貴過錢。",
        effect: { greed: 8, ignorance: 8 }
      },
      {
        text: "微笑離開。喜歡不必等於擁有。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 31,
    stage: "ghost_finale",
    text: "週五累到睜不開眼，卻捨不得睡，怕失去最後一點自己的時間。（{{WHO}}：耗竭是倦怠核心症狀之一，休息不足難靠刺激補回）",
    options: [
      {
        text: "追劇打遊戲到凌晨四點，用睡眠報復生活。",
        effect: { ignorance: 8, composure: -6, blessing: -3 }
      },
      {
        text: "躺著滑，嘴裡喊最後一則。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "提早睡。自由有時是允許休息。",
        effect: { blessing: 5, composure: 3, wisdom: 4 }
      }
    ]
  },

  {
    id: 32,
    stage: "ghost_finale",
    text: "兩杯咖啡下肚仍覺得累。你開始把耗竭誤認成咖啡因不足。（{{WHO}}：耗竭是倦怠核心——疲憊最會偽裝成『再刺激一點就好』）",
    options: [
      {
        text: "排半小時買網紅咖啡。這杯是希望。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "喝黑咖啡，詛咒今天所有會。",
        effect: { anger: 6, composure: -2 }
      },
      {
        text: "抬頭喝水。想不起上次好好睡。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 33,
    stage: "ghost_finale",
    text: "跨境平台推一堆幾塊錢小物——前提是你真的會用。（{{ECONOMICS}}：零價格錯覺讓便宜自動加分，使用率從不參與評分）",
    options: [
      {
        text: "狂加車。不買像吃虧。",
        effect: { greed: 8, ignorance: 8, blessing: -2 }
      },
      {
        text: "到貨才發現品質與圖活在不同宇宙。",
        effect: { ignorance: 6, greed: 4 }
      },
      {
        text: "關頁。房間裡最便宜的是空間。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 34,
    stage: "ghost_finale",
    text: "排隊兩小時吃十分鐘。你開始懷疑自己是在吃飯還是在蒐集證據。（{{DIGITAL}}：線上時數常被兌換成線下排隊，用來證明自己有來過）",
    options: [
      {
        text: "排到底。難吃也要說好吃。",
        effect: { greed: 9, ignorance: 9, blessing: -3 }
      },
      {
        text: "排到一半懷疑人生，氣到回家。",
        effect: { anger: 8, composure: -6 }
      },
      {
        text: "轉吃蛋餅。肚子其實沒那麼挑。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 35,
    stage: "ghost_finale",
    text: "帳單顯示：月費比你更勤奮地出現。（{{APA}}：現狀偏誤讓取消比訂閱費力——懶惰有時穿著會員皮）",
    options: [
      {
        text: "繼續扣。某天可能會看。",
        effect: { greed: 6, ignorance: 8 }
      },
      {
        text: "心痛一下，仍懶得取消。",
        effect: { greed: 4, anger: 4 }
      },
      {
        text: "全砍。取消比訂閱快樂。",
        effect: { wisdom: 4, composure: 3, greed: -4, blessing: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "ghost_finale",
    text: "短影音裡人人超前人生。演算法賣的是成功，收的是焦慮。（{{DIGITAL}}：長時間社群使用常伴隨比較心理與焦慮感上升）",
    options: [
      {
        text: "報名成功學，想複製別人捷徑。",
        effect: { greed: 8, ignorance: 8, blessing: -3 }
      },
      {
        text: "焦慮自己落後全世界。",
        effect: { ignorance: 6, anger: 6, composure: -6 }
      },
      {
        text: "關片去散步。演算法最會賣焦慮。",
        effect: { wisdom: 4, composure: 3, greed: -4, blessing: 4 }
      }
    ]
  },

  {
    id: 37,
    stage: "ghost_finale",
    text: "凌晨兩點不餓，卻打開吃播。胃沒需求，情緒有。（{{HEDONIC}}：感官刺激會短暫填補心理空缺）",
    options: [
      {
        text: "點宵夜參戰。胃撐了，問題還在。",
        effect: { greed: 8, ignorance: 6, blessing: -3 }
      },
      {
        text: "邊看邊流口水，留言「看得好餓」。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "關片。想吞下的不是炸雞。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 38,
    stage: "ghost_finale",
    text: "只想運動一下，店員開始描繪 VIP 人生。（{{WHO}}：『變更好』的壓力過載時，耗竭會比體脂先到達現場）",
    options: [
      {
        text: "刷卡。半年後店比體脂消失更快。",
        effect: { greed: 6, ignorance: 8, blessing: -4 }
      },
      {
        text: "不好意思拒，辦完每次進店都壓力。",
        effect: { ignorance: 8, anger: 6, composure: -4 }
      },
      {
        text: "禮貌拒絕。有效的是持續動，不是會員。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 39,
    stage: "ghost_finale",
    text: "房間堆滿當年的快樂，如今只剩灰塵負責續約。（{{HEDONIC}}：擁有快感退去後，稟賦效應仍堅持：以後一定會用到）",
    options: [
      {
        text: "全留。總覺得以後會用到。",
        effect: { greed: 8, ignorance: 8 }
      },
      {
        text: "邊整理邊罵自己，越丟越氣。",
        effect: { anger: 6, ignorance: 4 }
      },
      {
        text: "慢慢放。騰出空間，也騰出心位。",
        effect: { wisdom: 4, composure: 3, greed: -8, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "ghost_finale",
    text: "明知不快樂，仍捨不得離開。有些關係靠損失厭惡續命。（{{ECONOMICS}}：損失厭惡讓結束聽起來比痛苦維持更昂貴）",
    options: [
      {
        text: "繼續拉扯。沒結束就不用面對孤獨。",
        effect: { greed: 8, ignorance: 8, blessing: -4 }
      },
      {
        text: "發曖昧動態，希望對方看見。",
        effect: { ignorance: 8, greed: 6 }
      },
      {
        text: "含淚離開。有些飢餓要自己餵飽。",
        effect: { wisdom: 4, composure: 3, greed: -6, blessing: 4 }
      }
    ]
  }
];

window.hungryGhostEnding = {
  // 對齊 15 題縮放後總分：開局底數約 30~70、定力每世從 40 起。
  // 規則語意：min/max 含等號；above 為嚴格大於（above:99 ⇒ 需 >=100）。
  // 區間互相銜接：greed/ignorance 50~99 為中段卡、>=100 為極端卡。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "餓鬼道出口",
      min: { wisdom: 100, composure: 85 },
      max: { greed: 55, ignorance: 55 },
      art: "ending/ghost_exit.jpg",
      text: "停止索求，胃口空出。\n不是因為刻意忍耐，\n而是你本來就不餓了。",
    },
    {
      id: "enough",
      priority: 80,
      name: "知足者",
      above: { wisdom: 74, composure: 59 },
      art: "ending/ghost_enough.jpg",
      text: "世界依然喧鬧，慾望依舊。\n你終於明白：\n有些空缺不需要填滿。",
    },
    {
      id: "gluttony",
      priority: 70,
      name: "無底黑洞",
      above: { greed: 99 },
      art: "ending/ghost_gluttony.jpg",
      text: "慾望拉滿，永遠吃不飽。\n買下所有想買的東西之後，\n你只剩一具會結帳的空殼。",
    },
    {
      id: "blind-hunger",
      priority: 70,
      name: "盲目吞噬",
      above: { ignorance: 99 },
      art: "ending/ghost_blind_hunger.jpg",
      text: "胡亂抓取，食不知味。\n你根本不知自己在渴望什麼，\n像發瘋般將一切全吞下。",
    },
    {
      id: "fight",
      priority: 55,
      name: "搶食惡犬",
      above: { anger: 79 },
      max: { greed: 99, ignorance: 99 },
      art: "ending/ghost_fight.jpg",
      text: "為最後一塊肉跟世界翻臉。\n你看誰都像在搶你的份，\n活得像個暴怒的難民。",
    },
    {
      id: "patron",
      priority: 40,
      name: "信用卡功德主",
      min: { greed: 50 },
      max: { greed: 99 },
      art: "ending/ghost_patron.jpg",
      text: "銀行比家人更了解你。\n每一次的瘋狂消費，\n都在為經濟繁榮作貢獻。",
    },
    {
      id: "numb-hunger",
      priority: 40,
      name: "乾癟軀殼",
      min: { ignorance: 50 },
      max: { ignorance: 99 },
      art: "ending/ghost_numb_hunger.jpg",
      text: "靈魂乾涸，味覺麻木。\n機械性地咀嚼著日常，\n吞下寂寞，吐出嘆息。",
    },
    {
      id: "empty",
      priority: 0,
      name: "半步脫離餓鬼道",
      art: "ending/ghost_empty.jpg",
      text: "你看見世界充滿誘惑。\n也知道自己偶爾會失守。\n真正的清醒，是看見慾望。",
    },
  ],
};
