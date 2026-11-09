window.alienEvents = [
// ==================== [alien_open] 開局之戰  (1 ~ 13) ====================
  {
    id: 1,
    stage: "alien_open",
    text: "落地首日：人類為帳戶數字排隊打卡，把清醒壽命兌成符號。（{{SLEEP}}：長工時與睡眠壓縮常成對出現——數字導航，身體先迷路）",
    options: [
      {
        text: "合理。符號能導航。",
        effect: { greed: 4 }
      },
      {
        text: "先觀察，異常入庫。",
        effect: { composure: 2 }
      },
      {
        text: "竟用生命兌換抽象符號。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 2,
    stage: "alien_open",
    text: "軌道上看不見國界；地表卻有人為線條爭吵，甚至犧牲。（{{ECONOMICS}}：損失厭惡讓「失去領地敘事」比妥協更痛——線條比人命更硬）",
    options: [
      {
        text: "國家當然最重要。",
        effect: { ignorance: 4 }
      },
      {
        text: "矛盾樣本，標記存檔。",
        effect: { composure: 2 }
      },
      {
        text: "國界多半活在思想裡。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 3,
    stage: "alien_open",
    text: "艦隊頻寬被陌生人吃飯旅遊吵架塞滿——旁觀竟算社交。（{{DIGITAL}}：社群日均使用常逾兩小時——推進劑便宜，孤獨很貴）",
    options: [
      {
        text: "我也會看，算法推薦。",
        effect: { ignorance: 4 }
      },
      {
        text: "娛樂重要，艦隊也播。",
        effect: { composure: 2 }
      },
      {
        text: "原來人類渴望彼此連結。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 4,
    stage: "alien_open",
    text: "跨星種信念：擁有更多＝更幸福。長期曲線一直打臉。（{{HEDONIC}}：享樂跑步機讓物質增量難換持久滿足——購物車滿，座標仍空）",
    options: [
      {
        text: "難道不是嗎？",
        effect: { greed: 6 }
      },
      {
        text: "有些人確實如此。",
        effect: { composure: 2 }
      },
      {
        text: "已擁有很多的人，仍在追更多。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 5,
    stage: "alien_open",
    text: "大量推進劑燒在讓陌生人點讚——便宜、上癮、不熄火。（{{DIGITAL}}：逾四成人自覺社群滑太久——認同感當燃料，引擎從不熄火）",
    options: [
      {
        text: "這很正常。",
        effect: { greed: 4 }
      },
      {
        text: "有點難理解。",
        effect: { composure: 2 }
      },
      {
        text: "認同感是高辛烷燃料。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 6,
    stage: "alien_open",
    text: "開會討論會議，再預約下一場——職涯像無限迴圈協定。（{{APA}}：會議與決策過載會抽乾自制與專注——流程信仰，比內容更虔誠）",
    options: [
      {
        text: "這叫專業。",
        effect: { ignorance: 4 }
      },
      {
        text: "好笑，錄進樣本。",
        effect: { composure: 2 }
      },
      {
        text: "文明靠集體相信流程。",
        effect: { tech: 6, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 7,
    stage: "alien_open",
    text: "人類崇拜從未見過的名人；距離越遠，信仰越亮。（{{DIGITAL}}：擬社會關係讓螢幕偶像佔用真實社交頻寬——遠距神龕，近處無人）",
    options: [
      {
        text: "成功的人值得崇拜。",
        effect: { greed: 4 }
      },
      {
        text: "觀測奇妙。",
        effect: { composure: 2 }
      },
      {
        text: "他們在投射自己的夢想。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 8,
    stage: "alien_open",
    text: "若視人類為一族，許多戰爭難編譯；旗幟一換，親疏重寫。（{{ECONOMICS}}：群體框架效應可瞬間重劃「自己人」——布料一換，敵意升級）",
    options: [
      {
        text: "立場本來就不同。",
        effect: { ignorance: 4 }
      },
      {
        text: "確實奇怪。",
        effect: { composure: 2 }
      },
      {
        text: "人類忘了自己其實是同族。",
        effect: { blessing: 4, tech: 6, wisdom: 4 }
      }
    ]
  },

  {
    id: 9,
    stage: "alien_open",
    text: "犧牲睡眠換錢，再花錢修身體——效率極低，普及率極高。（{{SLEEP}}：睡眠不足與健康代價常被延後支付——帳單深夜才到）",
    options: [
      {
        text: "這是成長代價。",
        effect: { greed: 4 }
      },
      {
        text: "行星級荒謬。",
        effect: { composure: 2 }
      },
      {
        text: "這像一種集體悖論。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 10,
    stage: "alien_open",
    text: "數十億人持不同信仰版本，核心焦慮卻高度重疊。（{{APA}}：選擇過載時，確定答案比正確答案更被渴望——焦慮同款，敘事分叉）",
    options: [
      {
        text: "一定有人是對的。",
        effect: { ignorance: 4 }
      },
      {
        text: "尊重每個選擇。",
        effect: { blessing: 3 }
      },
      {
        text: "或許一直在回答同一個問題。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 11,
    stage: "alien_open",
    text: "人類最怕「被怎麼看」，多數時候高估聚光燈亮度。（{{DIGITAL}}：約四分之一人覺得社群讓自己更糟——觀眾常比想像中少）",
    options: [
      {
        text: "這很重要。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "多少能理解。",
        effect: { composure: 2 }
      },
      {
        text: "觀眾常比想像中少。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      }
    ]
  },

  {
    id: 12,
    stage: "alien_open",
    text: "帝國崛起又消失重複上演；當代人仍相信秩序將永駐。（{{ECONOMICS}}：現狀偏誤讓當代秩序看起來比實際更永恆）",
    options: [
      {
        text: "總要相信未來。",
        effect: { composure: 2 }
      },
      {
        text: "歷史離我很遠。",
        effect: { ignorance: 4 }
      },
      {
        text: "原來文明也是生命體。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 13,
    stage: "alien_open",
    text: "觀察日報·第 13 日：人類短暫又矛盾，卻願為陌生人落淚。（{{APA}}：共情能力會驅動人類跨越陌生人界線）",
    options: [
      {
        text: "人類真麻煩。",
        effect: { ignorance: 4 }
      },
      {
        text: "人類很有趣。",
        effect: { composure: 2 }
      },
      {
        text: "我想繼續觀察下去。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },


// ==================== [alien_dissect] 解剖  (14 ~ 27) ====================
  {
    id: 14,
    stage: "alien_dissect",
    text: "貨幣不可食用，卻能命令人類勞動數十年。（{{ECONOMICS}}：心理帳戶把抽象數字變成可犧牲的「真實損失」——紙上符號，一生工期）",
    options: [
      {
        text: "貨幣本來就是真理。",
        effect: { greed: 6 }
      },
      {
        text: "這只是文明契約。",
        effect: { composure: 2 }
      },
      {
        text: "真正追求的其實是安全感。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 15,
    stage: "alien_dissect",
    text: "太空解析度為零；地表共識比座標更硬，有人為之赴死。（{{ECONOMICS}}：沉沒成本讓已投入的敘事難以放棄——信念比地圖更難改線）",
    options: [
      {
        text: "國界當然存在。",
        effect: { ignorance: 6 }
      },
      {
        text: "它存在於共識裡。",
        effect: { wisdom: 5, blessing: 3 }
      },
      {
        text: "文明的力量，來自集體相信。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 16,
    stage: "alien_dissect",
    text: "履歷用職稱定義自我——角色檔案覆蓋本體。（{{APA}}：角色認同過強時，自我容易被職稱與身份綁定）",
    options: [
      {
        text: "工作就是人。",
        effect: { ignorance: 4 }
      },
      {
        text: "多少有影響。",
        effect: { composure: 2 }
      },
      {
        text: "原來把角色誤認成自己。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 17,
    stage: "alien_dissect",
    text: "兩陌生人換球衣顏色，敵意即可編譯成功。（{{APA}}：社會認同啟動後，判斷更容易被捷徑綁架——顏色一換，隊友重寫）",
    options: [
      {
        text: "支持自己那隊很正常。",
        effect: { anger: 4 }
      },
      {
        text: "有趣的編譯錯誤。",
        effect: { composure: 2 }
      },
      {
        text: "群體認同是本能程式。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 18,
    stage: "alien_dissect",
    text: "很多衝突始於「我是誰」答案不同——身份權重大於事實。（{{APA}}：身份威脅會放大防衛與決策偏差——標籤比數據先開火）",
    options: [
      {
        text: "立場最重要。",
        effect: { ignorance: 4 }
      },
      {
        text: "每個人都有立場。",
        effect: { composure: 2 }
      },
      {
        text: "身份有時比事實更有力。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 19,
    stage: "alien_dissect",
    text: "宗教敘事分叉，核心提問收斂：不同故事，同款焦慮。（{{APA}}：存在焦慮會驅使人尋找穩定世界觀）",
    options: [
      {
        text: "一定有人是錯的。",
        effect: { ignorance: 4 }
      },
      {
        text: "我選擇尊重。",
        effect: { blessing: 3 }
      },
      {
        text: "答案不同，問題卻相同。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 20,
    stage: "alien_dissect",
    text: "愛心、讚、追蹤被當價值感單位——儀表板取代鏡子。（{{DIGITAL}}：計量社交把自我價值外包給公開數據——數字先結帳，鏡子後知）",
    options: [
      {
        text: "被喜歡本來就重要。",
        effect: { greed: 6 }
      },
      {
        text: "多少會在意。",
        effect: { composure: 2 }
      },
      {
        text: "數字被誤認成了價值。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 21,
    stage: "alien_dissect",
    text: "很多人每天和不存在的理想人設賽跑——幻覺很勤奮。（{{DIGITAL}}：向上社會比較是短影音推送的常見副作用——對手不存在，氣喘很真實）",
    options: [
      {
        text: "比較才能進步。",
        effect: { greed: 4 }
      },
      {
        text: "大家都這樣。",
        effect: { ignorance: 4 }
      },
      {
        text: "比較是一種文明幻覺。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 22,
    stage: "alien_dissect",
    text: "得到一切仍焦慮——慾望座標沒有終點。（{{HEDONIC}}：達標快樂半衰期短，焦慮殘留率偏高——清單清空，座標仍亮紅）",
    options: [
      {
        text: "一定是還不夠成功。",
        effect: { greed: 6 }
      },
      {
        text: "觀測異常。",
        effect: { composure: 2 }
      },
      {
        text: "慾望似乎沒有終點。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 23,
    stage: "alien_dissect",
    text: "五十年後多數煩惱權重趨近零；當下卻像末日警報。（{{APA}}：現時偏誤讓眼前情緒蓋過長期比例感——末日感很吵，時間很安靜）",
    options: [
      {
        text: "現在重要就好。",
        effect: { ignorance: 4 }
      },
      {
        text: "確實如此。",
        effect: { composure: 2 }
      },
      {
        text: "時間是最強的過濾器。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 24,
    stage: "alien_dissect",
    text: "國王、企業家、網紅都相信自己活在關鍵幀。（{{HEDONIC}}：新奇與關注會暫時抬高自我重要性，隨後消退——每個時代都自認主角）",
    options: [
      {
        text: "他們確實重要。",
        effect: { greed: 4 }
      },
      {
        text: "有些重要。",
        effect: { composure: 2 }
      },
      {
        text: "每個時代都自認主角。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 25,
    stage: "alien_dissect",
    text: "財富、權力、名聲皆依賴他人相信——信念即頻寬。（{{ECONOMICS}}：共識價值依賴信任網絡，脆弱如市場情緒——信心一斷線，王座變空殼）",
    options: [
      {
        text: "那也是力量，別小看。",
        effect: { greed: 4 }
      },
      {
        text: "有道理，先記報告。",
        effect: { composure: 2 }
      },
      {
        text: "文明本質是共識網路。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },

  {
    id: 26,
    stage: "alien_dissect",
    text: "多數人努力成為「別人認可的人」——自認可常缺貨。（{{APA}}：過度依賴外部認可，容易削弱穩定自我價值感）",
    options: [
      {
        text: "這很正常。",
        effect: { ignorance: 4 }
      },
      {
        text: "多少能理解。",
        effect: { composure: 2 }
      },
      {
        text: "卻很少成為自己認可的人。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 27,
    stage: "alien_dissect",
    text: "文明像共同做夢的叢集：夢很假，動員力很真。（{{APA}}：共享敘事可降低協調成本，也製造集體盲點——假夢真動員，效率驚人）",
    options: [
      {
        text: "文明當然是真實的。",
        effect: { ignorance: 6 }
      },
      {
        text: "這場夢很有力量。",
        effect: { composure: 2 }
      },
      {
        text: "偉大文明建立在共同想像上。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },


// ==================== [alien_finale] 終章  (28 ~ 40) ====================
  {
    id: 28,
    stage: "alien_finale",
    text: "回望藍星：國界消失，愛仍可測——抽象被情感實體化。（{{WHO}}：意義感是抗耗竭的關鍵恢復資源——愛不佔座標，卻改寫航線）",
    options: [
      {
        text: "家園只是地理概念。",
        effect: { tech: 2 }
      },
      {
        text: "愛讓概念變得真實。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      },
      {
        text: "人類總能把抽象變成意義。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "alien_finale",
    text: "貨幣是共識，卻啟用大規模陌生人合作——荒謬，但高效。（{{ECONOMICS}}：零價格與名義價格會扭曲真實交易成本感知——符號指揮千萬雙手）",
    options: [
      {
        text: "這依然很荒謬。",
        effect: { tech: 4 }
      },
      {
        text: "也許這是必要工具。",
        effect: { wisdom: 5, blessing: 3 }
      },
      {
        text: "真正厲害的是合作本身。",
        effect: { wisdom: 5, tech: 6, blessing: 3 }
      }
    ]
  },

  {
    id: 30,
    stage: "alien_finale",
    text: "為不存在於物理世界的故事流淚——情緒系統越級運作。（{{HEDONIC}}：虛構刺激仍能驅動真實情緒峰值與消退——假故事，真淚腺）",
    options: [
      {
        text: "情緒系統真奇怪。",
        effect: { tech: 4 }
      },
      {
        text: "故事只是娛樂。",
        effect: { ignorance: 4 }
      },
      {
        text: "故事是文明的共享夢境。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 31,
    stage: "alien_finale",
    text: "音樂、繪畫、詩歌從生存帳看幾乎無效，卻最被珍惜。（{{SLEEP}}：非功利活動有助從高壓警覺切換到恢復——無用之物，最能充電）",
    options: [
      {
        text: "文明應該更有效率。",
        effect: { greed: 4 }
      },
      {
        text: "藝術只是娛樂。",
        effect: { ignorance: 4 }
      },
      {
        text: "正因沒有必要才珍貴。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 32,
    stage: "alien_finale",
    text: "愛情無標準物理定義，卻改寫歷史曲線。（{{ECONOMICS}}：非貨幣回報常被理性模型低估，卻強勢改寫選擇——公式算崩，人還在愛）",
    options: [
      {
        text: "荷爾蒙而已。",
        effect: { tech: 2 }
      },
      {
        text: "事情沒這麼簡單。",
        effect: { wisdom: 5, blessing: 3 }
      },
      {
        text: "有些力量公式量不到。",
        effect: { wisdom: 4, blessing: 4, tech: 6 }
      }
    ]
  },

  {
    id: 33,
    stage: "alien_finale",
    text: "父母願意讓渡人生片段給下一代——理性模型常算崩。（{{APA}}：情感決策常壓過狹義效用最大化——最佳利益退場，愛接管鍵盤）",
    options: [
      {
        text: "這不符合最佳利益。",
        effect: { tech: 4 }
      },
      {
        text: "這是基因策略。",
        effect: { wisdom: 2 }
      },
      {
        text: "愛讓理性計算退位。",
        effect: { blessing: 5, wisdom: 4, tech: 4 }
      }
    ]
  },

  {
    id: 34,
    stage: "alien_finale",
    text: "千年戰亂災難後，希望殘留率仍不歸零。（{{WHO}}：希望與掌控感可緩衝長期壓力負荷——文明最硬的技術，叫還想明天）",
    options: [
      {
        text: "人類只是健忘。",
        effect: { ignorance: 4 }
      },
      {
        text: "樂觀是一種本能。",
        effect: { tech: 4 }
      },
      {
        text: "希望是文明最硬的技術。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 35,
    stage: "alien_finale",
    text: "若收到外星訊號，內鬥可能短暫暫停——共同未來權重上升。（{{APA}}：共同目標能暫時重組群體認同）",
    options: [
      {
        text: "不一定，人類很會分心。",
        effect: { composure: 2 }
      },
      {
        text: "可能會更加混亂。",
        effect: { tech: 2 }
      },
      {
        text: "共同未來比共同敵人重要。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "alien_finale",
    text: "最大力量審計結論：不是單點武器，是合作頻寬。（{{WHO}}：社會支持是對抗倦怠的核心防護——文明本質是大型協作）",
    options: [
      {
        text: "科技才是根本。",
        effect: { tech: 4 }
      },
      {
        text: "兩者都重要。",
        effect: { wisdom: 5, blessing: 3 }
      },
      {
        text: "文明其實是大型協作。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },

  {
    id: 37,
    stage: "alien_finale",
    text: "宇宙時間尺度下，人類一生短到近乎噪聲。（{{APA}}：有限生命感知會改變人對價值與優先序的判斷）",
    options: [
      {
        text: "那一切都沒有意義。",
        effect: { ignorance: 6 }
      },
      {
        text: "確實有點悲傷。",
        effect: { composure: 2 }
      },
      {
        text: "正因短暫，所以值得珍惜。",
        effect: { wisdom: 4, tech: 6, blessing: 4 }
      }
    ]
  },

  {
    id: 38,
    stage: "alien_finale",
    text: "博物館與城市終將消失：短暫是否等於無價值？（{{HEDONIC}}：擁有快感退去後，意義比占有更耐用——存在過，本身已是數據）",
    options: [
      {
        text: "那建造還有什麼意義？",
        effect: { ignorance: 6 }
      },
      {
        text: "至少存在過。",
        effect: { composure: 2 }
      },
      {
        text: "短暫不是沒有價值。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },

  {
    id: 39,
    stage: "alien_finale",
    text: "人類不完美，甚至很扯——觀測越久，越難關閉興趣。（{{APA}}：新奇與不確定性本身就能維持注意分配——荒謬是魅力的一部分）",
    options: [
      {
        text: "確實如此。",
        effect: { tech: 4 }
      },
      {
        text: "但也讓人頭痛。",
        effect: { composure: 2 }
      },
      {
        text: "荒謬本身也是魅力的一部分。",
        effect: { wisdom: 4, tech: 8, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "alien_finale",
    text: "銀河議會終審：觀察那麼久，你還願意成為人類嗎？（{{APA}}：意義感會影響人如何理解痛苦與脆弱）",
    options: [
      {
        text: "不願意。人類太混亂。",
        effect: { tech: 8, blessing: -2 }
      },
      {
        text: "不確定。需要更多樣本。",
        effect: { wisdom: 5, tech: 4, blessing: 3 }
      },
      {
        text: "願意。矛盾、脆弱、愛與故事，讓人類珍貴。",
        effect: { wisdom: 5, blessing: 5, composure: 3, tech: 10 }
      }
    ]
  }

];

// 八條。數字越高越先採用。帶得走的數值每跨一階換一張卡；定力每世從 40 起算。

window.alienEnding = {
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
      text: "文明不過是一場集體共識。\n但愛與眼淚是真的。\n荒謬鬧劇中，生命值得擁抱。",
    },
    {
      id: "citizen-tale",
      priority: 82,
      name: "銀河公民",
      min: { tech: 85, wisdom: 75, blessing: 40 },
      art: "ending/alien_citizen_tale.jpg",
      text: "看穿立場枷鎖，思維跨越地球。\n銀河議會授予權限：\n歡迎登入，銀河公民。",
    },
    {
      id: "scholar-tale",
      priority: 72,
      name: "星海學者",
      min: { tech: 70, wisdom: 65 },
      art: "ending/alien_scholar_tale.jpg",
      text: "宇宙越浩瀚，人類越顯渺小。\n你對每一個掙扎活著的生命，\n報以深深的敬意。",
    },
    {
      id: "reader-tale",
      priority: 62,
      name: "文明解譯者",
      min: { tech: 55, wisdom: 50 },
      art: "ending/alien_reader_tale.jpg",
      text: "文明偉大處從來不是晶片鋼鐵，\n而是數十億陌生人，\n願意相信同一個溫暖故事。",
    },
    {
      id: "observer-tale",
      priority: 52,
      name: "地球觀察員",
      min: { tech: 40, wisdom: 40 },
      art: "ending/alien_observer_tale.jpg",
      text: "你悄悄退到文明之外。\n冷眼看清國家貨幣究竟是什麼，\n默默戴上觀察者的視角。",
    },
    {
      id: "signal-tale",
      priority: 42,
      name: "頻率解碼者",
      min: { tech: 25 },
      art: "ending/alien_signal_tale.jpg",
      text: "習以為常的事真的理所當然嗎？\n你還沒有答案，\n但夜空深處的訊號已接通。",
    },
    {
      id: "signal",
      priority: 38,
      name: "訊號接收者",
      min: { tech: 10 },
      max: { tech: 24 },
      art: "ending/alien_signal.jpg",
      text: "在無盡的雜訊之中，\n你終於捕捉到了第一道，\n微弱而清晰的訊號。",
    },
    {
      id: "voyage",
      priority: 0,
      name: "航道上的人",
      art: "ending/alien_voyage.jpg",
      text: "四周一片死寂。\n宇宙的盡頭，\n訊號尚未成形。",
    },
  ],
};
