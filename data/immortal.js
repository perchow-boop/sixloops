window.immortalEvents = [
  // ==================== [immortal_open] 開局之戰  (1 ~ 13) ====================
  {
    id: 1,
    stage: "immortal_open",
    text: "洞府空檔 47 分鐘，你比怕雷劫更怕「無事可修」。（{{SLEEP}}：夜間藍光易攪亂褪黑激素——空檔一亮玉簡，入睡時間當場加班）",
    options: [
      {
        text: "立刻排滿吐納課表。空，比雷劫更可怕。",
        effect: { greed: 4, immortalValue: -2 }
      },
      {
        text: "滑玉簡到天黑。螢幕亮，道心暗。",
        effect: { ignorance: 6 }
      },
      {
        text: "泡杯茶坐下。呼吸比進度重要。",
        effect: { wisdom: 5, composure: 3, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 2,
    stage: "immortal_open",
    text: "山徑老仙只餵鳥，沒進度條；你腳步亂了半拍。（{{ECONOMICS}}：機會成本常被「趕破境」說成節省——鳥叫從不開發票）",
    options: [
      {
        text: "人生怎能這樣浪費靈氣？",
        effect: { greed: 4 }
      },
      {
        text: "看兩眼就趕路破境。",
        effect: { composure: 2 }
      },
      {
        text: "坐下看十分鐘。鳥比丹藥吵得有道理。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 3,
    stage: "immortal_open",
    text: "落雷雨夜，玉簡推仙俠劇；你卻想關螢幕聽雨。（{{SLEEP}}：睡前一小時螢幕與睡眠品質互相拉扯，雷聲反而比較老實）",
    options: [
      {
        text: "趕快去做更有效率的閉關。",
        effect: { greed: 4 }
      },
      {
        text: "一邊聽雨一邊滑短影音。",
        effect: { ignorance: 4 }
      },
      {
        text: "單純聽雨。雷劫暫緩，耳膜先渡劫。",
        effect: { composure: 3, wisdom: 5, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 4,
    stage: "immortal_open",
    text: "今日無人誇也無人罵，洞府安靜得像被刪號。（{{APA}}：人類容易把安靜誤解成被忽略）",
    options: [
      {
        text: "總覺得少了點香火。",
        effect: { greed: 4 }
      },
      {
        text: "打開宗門論壇找存在感。",
        effect: { ignorance: 4 }
      },
      {
        text: "接受平凡一天。無評價，也是一種境界。",
        effect: { immortalValue: 6, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 5,
    stage: "immortal_open",
    text: "同門問「最近在忙什麼？」誠實答案差點脫口：沒有。（{{DIGITAL}}：社群自我呈現常把「忙」誤標成價值——清閒聽起來像修為退步）",
    options: [
      {
        text: "編幾件聽起來很渡劫的事。",
        effect: { greed: 6 }
      },
      {
        text: "含糊帶過，假裝在閉關。",
        effect: { composure: 2 }
      },
      {
        text: "誠實說只是過生活。道心沒掉，面子有一點。",
        effect: { wisdom: 5, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 6,
    stage: "immortal_open",
    text: "走了多年的山路，你今天才看見那棵比你先破境的樹。（{{HEDONIC}}：享樂適應讓日常風景很快失去新鮮——樹不修仙，活得更久）",
    options: [
      {
        text: "拍照打卡，發洞府限動。",
        effect: { greed: 4 }
      },
      {
        text: "看一眼繼續趕進度。",
        effect: { composure: 2 }
      },
      {
        text: "停下來看看它。樹不修仙，活得更久。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 7,
    stage: "immortal_open",
    text: "玉簡跳出「今日螢幕 6 小時 42 分」——比吐納還久。（{{DIGITAL}}：全球成人日均上網常逾六小時，經脈先於道心報加班）",
    options: [
      {
        text: "沒關係，再滑一下補課。",
        effect: { ignorance: 6 }
      },
      {
        text: "截圖給同門笑。笑完繼續滑。",
        effect: { composure: 2 }
      },
      {
        text: "把玉簡放遠一點。經脈先放假。",
        effect: { wisdom: 5, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 8,
    stage: "immortal_open",
    text: "群組整天沒人找你，腦自動編譯「被棄劇情」三集。（{{APA}}：人類傾向用有限資訊腦補社交威脅）",
    options: [
      {
        text: "懷疑自己被討厭。",
        effect: { ignorance: 4 }
      },
      {
        text: "主動找人聊天刷存在。",
        effect: { blessing: 3 }
      },
      {
        text: "享受這份安靜。仙人的標配。",
        effect: { composure: 3, immortalValue: 6 }
      }
    ]
  },

  {
    id: 9,
    stage: "immortal_open",
    text: "論壇誤解你一條留言，反駁長文已在丹田蓄力。（{{APA}}：線上衝突會抬升壓力反應與情緒耗竭——道心比留言更怕加賽）",
    options: [
      {
        text: "立刻長文回擊，法力全開。",
        effect: { anger: 6 }
      },
      {
        text: "默默介意三天，丹田發熱。",
        effect: { ignorance: 4 }
      },
      {
        text: "讓風把它吹走。道心比留言穩。",
        effect: { immortalValue: 6, wisdom: 5, anger: -2, blessing: 3 }
      }
    ]
  },

  {
    id: 10,
    stage: "immortal_open",
    text: "渴求已久的法寶入手，開心大約只住了兩天就退租。（{{HEDONIC}}：新物快樂常在數日內被習慣沖淡——丹爐轉速比喜悅更快）",
    options: [
      {
        text: "再研究下一件限量。",
        effect: { greed: 6 }
      },
      {
        text: "有點空虛，像丹藥過期。",
        effect: { ignorance: 4 }
      },
      {
        text: "原來快樂不住在商品裡。",
        effect: { wisdom: 5, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 11,
    stage: "immortal_open",
    text: "難得無樂無影無工，腦仍瘋狂找事填洞府空白。（{{APA}}：決策疲勞後，空白比忙碌更難忍受——心魔最愛報到空檔）",
    options: [
      {
        text: "馬上找東西填滿時間。",
        effect: { greed: 4 }
      },
      {
        text: "躺著發呆，像假死入定。",
        effect: { composure: 2 }
      },
      {
        text: "觀察自己的念頭。心魔也要報到。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 12,
    stage: "immortal_open",
    text: "舊丹藥鋪結束營業，招牌還亮，你腳步慢半拍。（{{ECONOMICS}}：損失厭惡讓「錯過回憶」比「不擁有」更痛——因果結案從不延期）",
    options: [
      {
        text: "抱怨世事無常，火氣上升。",
        effect: { anger: 4 }
      },
      {
        text: "有點難過，腳步慢半拍。",
        effect: { composure: 2 }
      },
      {
        text: "感謝它曾經存在。因果結案。",
        effect: { blessing: 4, wisdom: 4, immortalValue: 6 }
      }
    ]
  },

  {
    id: 13,
    stage: "immortal_open",
    text: "傍晚風過雲移，什麼劫都沒發生，你忽然很好。（{{SLEEP}}：規律作息與安靜時段有助恢復——免費仙樂，不收費不推播）",
    options: [
      {
        text: "大概太閒了，該閉關。",
        effect: { ignorance: 4 }
      },
      {
        text: "拍拍照留念，發個限動。",
        effect: { blessing: 3 }
      },
      {
        text: "只是安靜地看著。這叫境界。",
        effect: { wisdom: 4, composure: 3, immortalValue: 8, blessing: 4 }
      }
    ]
  },

  // ==================== [immortal_abyss] 深淵  (14 ~ 26) ====================
  {
    id: 14,
    stage: "immortal_abyss",
    text: "三年前失眠半個月的心魔檔案，忽然讀不出來了。（{{SLEEP}}：睡眠債會放大情緒記憶，也會隨時間淡化——痛苦有保存期限）",
    options: [
      {
        text: "繼續努力回想，翻舊帳。",
        effect: { greed: 4 }
      },
      {
        text: "覺得自己記性變差了。",
        effect: { ignorance: 4 }
      },
      {
        text: "原來很多痛苦都有保存期限。",
        effect: { wisdom: 5, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 15,
    stage: "immortal_abyss",
    text: "破境目標達成，快樂半衰期短到像丹藥過期。（{{HEDONIC}}：達標爽感常被享樂跑步機迅速歸零——下一個目標已在候診）",
    options: [
      {
        text: "再找新的破境目標。",
        effect: { greed: 6 }
      },
      {
        text: "開始懷疑修仙意義。",
        effect: { ignorance: 4 }
      },
      {
        text: "也許快樂本來就不是終點。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 16,
    stage: "immortal_abyss",
    text: "網上有人誇你、有人罵你，兩天後兩者都像風。（{{HEDONIC}}：情緒峰值終會回落，讚美與責備都難長住）",
    options: [
      {
        text: "努力記住稱讚，存進玉簡。",
        effect: { greed: 4 }
      },
      {
        text: "努力忘記批評，越忘越記。",
        effect: { anger: 4 }
      },
      {
        text: "原來兩者都像風。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 17,
    stage: "immortal_abyss",
    text: "有人問「你證明給誰看？」你卡在自己的天劫劇本裡。（{{DIGITAL}}：約四分之一人覺得社群讓自我評價更糟——觀眾常比你想的少）",
    options: [
      {
        text: "當然是全三界。",
        effect: { greed: 6 }
      },
      {
        text: "不知道，問心魔。",
        effect: { ignorance: 4 }
      },
      {
        text: "好像主要是證明給自己看。",
        effect: { wisdom: 4, immortalValue: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 18,
    stage: "immortal_abyss",
    text: "無論怎麼做，有些人就是不喜歡你——丹藥燒不完。（{{WHO}}：討好耗竭屬倦怠風險，難換來普遍認可——省下真元才是上策）",
    options: [
      {
        text: "努力讓他們喜歡，丹藥燒完。",
        effect: { greed: 6 }
      },
      {
        text: "偷偷介意，夜裡演對手戲。",
        effect: { anger: 4 }
      },
      {
        text: "接受這件事。省下真元。",
        effect: { composure: 3, immortalValue: 6 }
      }
    ]
  },

  {
    id: 19,
    stage: "immortal_abyss",
    text: "翻出舊照：練氣期的自己以為未來會很完美。（{{ECONOMICS}}：計畫謬誤讓想像中的完成遠大於真實——未來從不負責打卡）",
    options: [
      {
        text: "他太天真，像練氣期。",
        effect: { ignorance: 4 }
      },
      {
        text: "有點心疼那個自己。",
        effect: { blessing: 3 }
      },
      {
        text: "其實現在也不差。",
        effect: { wisdom: 4, blessing: 4, immortalValue: 4 }
      }
    ]
  },

  {
    id: 20,
    stage: "immortal_abyss",
    text: "同門炫耀新飛劍，以前會羨，今天參數沒那麼刺眼。（{{ECONOMICS}}：社會比較的相對剝奪感會隨時間減弱——飛劍歸他，道心歸你）",
    options: [
      {
        text: "可能只是買不起。",
        effect: { greed: 4 }
      },
      {
        text: "裝作不在意，偷看參數。",
        effect: { ignorance: 4 }
      },
      {
        text: "真心替他高興。飛劍歸他，道心歸你。",
        effect: { blessing: 4, immortalValue: 6 }
      }
    ]
  },

  {
    id: 21,
    stage: "immortal_abyss",
    text: "哪裡也沒去、什麼成就也沒有的週末，卻覺得很滿。（{{APA}}：持續刺激下降後，大腦更容易察覺細微滿足感）",
    options: [
      {
        text: "一定是哪裡不對。",
        effect: { ignorance: 4 }
      },
      {
        text: "這樣好像有點浪費壽元。",
        effect: { greed: 4 }
      },
      {
        text: "開始理解自在。",
        effect: { composure: 3, wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 22,
    stage: "immortal_abyss",
    text: "有人當面誤解你，理智斷線前你停了一秒。（{{APA}}：被誤解時，大腦的防衛系統會比理性更早開機）",
    options: [
      {
        text: "立刻糾正，火力全開。",
        effect: { anger: 6 }
      },
      {
        text: "回家越想越氣，快內傷了。",
        effect: { anger: 4 }
      },
      {
        text: "有些誤解不值得帶回家。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 23,
    stage: "immortal_abyss",
    text: "多數煩惱來自尚未降下的天劫，腦比雷先炸。（{{APA}}：預期焦慮常比事件本身更耗意志力——劫未到，內耗先結帳）",
    options: [
      {
        text: "提前焦慮才安全。",
        effect: { ignorance: 6 }
      },
      {
        text: "很難停止擔心。",
        effect: { composure: -2 }
      },
      {
        text: "事情來了再說。劫到再說。",
        effect: { composure: 3, immortalValue: 6 }
      }
    ]
  },

  {
    id: 24,
    stage: "immortal_abyss",
    text: "舊敵再出現，你竟想不起當年為什麼那麼恨。（{{HEDONIC}}：情緒強度也會適應，恨意並非永久資產——過期恨意不退款）",
    options: [
      {
        text: "趕快想起來，重開戰場。",
        effect: { anger: 6 }
      },
      {
        text: "保持距離，閉關回避。",
        effect: { composure: 2 }
      },
      {
        text: "原來恨意也會過期。",
        effect: { wisdom: 4, immortalValue: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 25,
    stage: "immortal_abyss",
    text: "鏡子裡的自己老了一點，仙氣還在，焦慮也在。（{{APA}}：外貌焦慮常來自自我形象與現實落差）",
    options: [
      {
        text: "研究抗老丹方。",
        effect: { greed: 4 }
      },
      {
        text: "有點感嘆，歲月不饒人。",
        effect: { composure: 2 }
      },
      {
        text: "感謝自己一路走到這裡。",
        effect: { blessing: 5, immortalValue: 6, wisdom: 4 }
      }
    ]
  },

  {
    id: 26,
    stage: "immortal_abyss",
    text: "夕陽和昨天一樣落下，你卻第一次覺得時間很慢。（{{APA}}：專注當下時，時間感知會明顯改變——趕劫模式一關，秒針忽然客氣）",
    options: [
      {
        text: "拍照傳社群求讚。",
        effect: { greed: 4 }
      },
      {
        text: "看幾秒就走，趕下一劫。",
        effect: { composure: 2 }
      },
      {
        text: "第一次覺得時間其實走得很慢。",
        effect: { wisdom: 4, composure: 3, immortalValue: 8, blessing: 4 }
      }
    ]
  },

  // ==================== [immortal_finale] 終章  (27 ~ 40) ====================
  {
    id: 27,
    stage: "immortal_finale",
    text: "清晨鳥叫把你吵醒——以前嫌吵，今天有點好聽。（{{SLEEP}}：自然聲景與晨間光照有助晝夜節律——免費仙樂，不需訂閱）",
    options: [
      {
        text: "繼續抱怨，吵死了。",
        effect: { anger: 4 }
      },
      {
        text: "翻身繼續睡，補回靈氣。",
        effect: { composure: 2 }
      },
      {
        text: "躺著聽一會兒。免費仙樂。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 28,
    stage: "immortal_finale",
    text: "買菜老闆娘多送一根蔥，世界沒變，心情變了。（{{ECONOMICS}}：微小互惠會啟動信任與回饋規範——香火＋1，成本極低）",
    options: [
      {
        text: "蔥也是有成本的。",
        effect: { greed: 4 }
      },
      {
        text: "點頭收下，當小福報。",
        effect: { blessing: 3 }
      },
      {
        text: "真誠說聲謝謝。香火+1。",
        effect: { blessing: 4, immortalValue: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "immortal_finale",
    text: "路人認錯人熱情打招呼，你卡在要不要拆穿。（{{DIGITAL}}：短暫社交誤認常見，多數人並未真正「盯著你」——聚光燈常是幻覺）",
    options: [
      {
        text: "立刻糾正，破壞氣氛。",
        effect: { composure: 2 }
      },
      {
        text: "尷尬微笑，先把因果接住。",
        effect: { blessing: 3 }
      },
      {
        text: "禮貌回應後再說明。",
        effect: { blessing: 4, wisdom: 4, immortalValue: 4 }
      }
    ]
  },

  {
    id: 30,
    stage: "immortal_finale",
    text: "排好的閉關課表全被打亂，道心比行程先垮。（{{ECONOMICS}}：計畫謬誤讓理想日程一碰現實就崩——風景改道也算破境）",
    options: [
      {
        text: "心情一起壞掉。",
        effect: { anger: 4 }
      },
      {
        text: "勉強接受，咬牙執行。",
        effect: { composure: 2 }
      },
      {
        text: "改成另一種風景。",
        effect: { wisdom: 5, composure: 3, immortalValue: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 31,
    stage: "immortal_finale",
    text: "排隊買早點，孩子喊「今天一定很好玩！」你忽然也信。（{{APA}}：情緒會在人與人之間傳遞，期待感也會）",
    options: [
      {
        text: "孩子真單純。",
        effect: { ignorance: 2 }
      },
      {
        text: "有點羨慕那股氣。",
        effect: { composure: 2 }
      },
      {
        text: "忽然也期待今天。",
        effect: { blessing: 4, immortalValue: 4 }
      }
    ]
  },

  {
    id: 32,
    stage: "immortal_finale",
    text: "朋友升職飛劍更亮，排行榜刺眼，祝福卡在喉嚨。（{{ECONOMICS}}：相對收入與地位比較常蓋過絕對福祉——真心高興比假裝省真元）",
    options: [
      {
        text: "還是有點不是滋味。",
        effect: { greed: 4 }
      },
      {
        text: "逼自己祝福，嘴角抽筋。",
        effect: { composure: 2 }
      },
      {
        text: "真心替他高興。",
        effect: { blessing: 4, immortalValue: 6 }
      }
    ]
  },

  {
    id: 33,
    stage: "immortal_finale",
    text: "喝茶時發現：這一刻沒特別快樂，也沒有缺憾。（{{HEDONIC}}：享樂基線平穩時，平靜常被誤診成無聊——無劫可趕，也是境界）",
    options: [
      {
        text: "這樣太無聊。",
        effect: { greed: 4 }
      },
      {
        text: "不知道算不算幸福。",
        effect: { composure: 2 }
      },
      {
        text: "或許這本來就是幸福。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 34,
    stage: "immortal_finale",
    text: "一朵快凋的花香氣更準，你想煉永不凋的丹。（{{HEDONIC}}：稀缺會抬高感知價值，也加速占有衝動——因為會凋，所以珍貴）",
    options: [
      {
        text: "可惜，真想煉成永不凋的丹。",
        effect: { composure: 2 }
      },
      {
        text: "拍照留念，存進相冊。",
        effect: { blessing: 3 }
      },
      {
        text: "因為會凋謝，所以珍貴。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 35,
    stage: "immortal_finale",
    text: "有人稱讚你，開心在，激動卻不再爆炸。（{{DIGITAL}}：外部讚美成癮會抬高回饋需求基線——夠了，也是一種修為）",
    options: [
      {
        text: "希望他再多說一點。",
        effect: { greed: 4 }
      },
      {
        text: "客氣回應，標準客服。",
        effect: { blessing: 3 }
      },
      {
        text: "笑著接受。夠了。",
        effect: { composure: 3, immortalValue: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "immortal_finale",
    text: "批評不太對，防禦卻比事實先出手。（{{APA}}：自我威脅會啟動防衛，加劇情緒耗竭——道心減重，從不辯開始）",
    options: [
      {
        text: "一定要辯贏。",
        effect: { anger: 6 }
      },
      {
        text: "默默不爽，記小本本。",
        effect: { anger: 4 }
      },
      {
        text: "讓它過去。道心減重。",
        effect: { composure: 3, immortalValue: 6 }
      }
    ]
  },

  {
    id: 37,
    stage: "immortal_finale",
    text: "再路過第一階注意過的樹——它還在，你也還在。（{{APA}}：熟悉的人事物能增強穩定感與心理安全感）",
    options: [
      {
        text: "直接走過，當作路障。",
        effect: { composure: 2 }
      },
      {
        text: "看看它長高了沒。",
        effect: { wisdom: 2 }
      },
      {
        text: "輕輕停下腳步，打個招呼。",
        effect: { wisdom: 5, immortalValue: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 38,
    stage: "immortal_finale",
    text: "你很久沒故意證明什麼了，競爭心像熄火的爐。（{{WHO}}：持續自我證明是耗竭三軸的常見燃料——輕鬆不是放棄，是停火）",
    options: [
      {
        text: "那會不會失去競爭力？",
        effect: { greed: 4 }
      },
      {
        text: "有點不習慣。",
        effect: { composure: 2 }
      },
      {
        text: "原來輕鬆不是放棄。",
        effect: { wisdom: 4, immortalValue: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 39,
    stage: "immortal_finale",
    text: "夕陽與雲似曾相識，你還是停下來看了很久。（{{HEDONIC}}：重複刺激下，主動注意才能對抗快樂消退——每一天其實都不同）",
    options: [
      {
        text: "只是剛好有空，別多想。",
        effect: { ignorance: 2 }
      },
      {
        text: "拍照收藏，當作業績。",
        effect: { blessing: 3 }
      },
      {
        text: "因為每一天其實都不同。",
        effect: { wisdom: 4, immortalValue: 8, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "immortal_finale",
    text: "風吹花落，你最想成為什麼？（{{APA}}：當外部目標退場後，人會重新排序真正重視的事物）",
    options: [
      {
        text: "成功的人。排行榜常駐。",
        effect: { greed: 8 }
      },
      {
        text: "重要的人。香火不斷。",
        effect: { greed: 6, blessing: 3 }
      },
      {
        text: "自在的人。無劫可趕。",
        effect: { wisdom: 5, composure: 4, blessing: 5, immortalValue: 10, anger: -8 }
      }
    ]
  }
];

window.immortalEnding = {
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
      text: "雲端之上，俯瞰人間。\n成仙不是活得像個神，\n而是終於允許自己像個人。",
    },
    {
      id: "mountain-tale",
      priority: 85,
      name: "見山還是山",
      min: { immortalValue: 80, wisdom: 75, composure: 70 },
      max: { greed: 55, anger: 55 },
      art: "ending/immortal_mountain_tale.jpg",
      text: "看穿修仙的遊戲規則。\n山還是那座山，\n而你再也不是任人擺佈的奴隸。",
    },
    {
      id: "immortal-greed",
      priority: 75,
      name: "斂財上仙",
      min: { immortalValue: 40 },
      above: { greed: 79 },
      art: "ending/immortal_greed.jpg",
      text: "福報與貪念滿點。\n在九重天上收香油錢，\n美其名普渡，其實在割韭菜。",
    },
    {
      id: "immortal-greed-mid",
      priority: 55,
      name: "蹭飯散仙",
      min: { immortalValue: 35, greed: 50 },
      max: { greed: 79 },
      art: "ending/immortal_greed_mid.jpg",
      text: "仙位沒撈到，好處全想要。\n每天在天庭各處白吃白喝，\n在神仙堆裡苟延殘喘。",
    },
    {
      id: "immortal-high-wisdom",
      priority: 65,
      name: "孤傲雲客",
      min: { immortalValue: 70, wisdom: 70, composure: 60 },
      max: { anger: 55 },
      art: "ending/immortal_high_wisdom.jpg",
      text: "高處不勝寒，獨自清高。\n看透眾人內心的荒謬，\n卻冷清得連個道友都沒有。",
    },
    {
      id: "immortal-mid-wisdom",
      priority: 50,
      name: "半仙半俗",
      min: { immortalValue: 50, wisdom: 55 },
      art: "ending/immortal_mid_wisdom.jpg",
      text: "悟了天機又捨不得紅塵。\n不上不下的尷尬位置，\n成了仙界最會抱怨的中產。",
    },
    {
      id: "immortal-low",
      priority: 40,
      name: "雲端邊緣人",
      min: { immortalValue: 30, wisdom: 40 },
      max: { immortalValue: 49 },
      art: "ending/immortal_low.jpg",
      text: "仙氣只剩一口，隨時登出。\n既沒有大智慧，\n也沒攢夠飛升的本錢。",
    },
    {
      id: "immortal-battery",
      priority: 0,
      name: "天庭背景板",
      art: "ending/immortal_battery.jpg",
      text: "靈氣耗盡，原地蒸發。\n連像樣的神仙都沒撐過，\n被洪流刷成廢棄物。",
    },
  ],
};
