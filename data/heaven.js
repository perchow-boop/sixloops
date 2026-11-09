window.heavenEvents = [
// ==================== [heaven_open] 開局之戰  (1 ~ 13) ====================
  {
    id: 1,
    stage: "heaven_open",
    text: "只填一張表就中大獎，同事鼓掌——主角光環疑似外掛。（{{HEDONIC}}：好運帶來的興奮感會迅速適應，快樂基線很快回升）",
    options: [
      {
        text: "研究手氣，抽獎加賽。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "拍照發限動，讓全世界知道。",
        effect: { greed: 4, blessing: 3 }
      },
      {
        text: "請同事喝飲料。好運要分流。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 2,
    stage: "heaven_open",
    text: "主管大會點名讚美，你只是做平常的事——掌聲卻全場。（{{DIGITAL}}：公開讚美的多巴胺回饋易被社群放大——獨奏幻覺，合奏才是真相）",
    options: [
      {
        text: "開始覺得公司離不開我。",
        effect: { greed: 4, ignorance: 6 }
      },
      {
        text: "享受被肯定的感覺。",
        effect: { blessing: 3 }
      },
      {
        text: "感謝團隊。掌聲很少是獨奏。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 3,
    stage: "heaven_open",
    text: "帳戶綠油油，睡覺也像在賺錢——牛市把人訓練成股神。（{{ECONOMICS}}：帳面獲利幻覺強化現時偏誤與過度交易——漲的時候人人像天選）",
    options: [
      {
        text: "加碼。這波穩了。",
        effect: { greed: 8, ignorance: 4 }
      },
      {
        text: "截圖發朋友群組。",
        effect: { greed: 4, blessing: 3 }
      },
      {
        text: "提醒自己：漲時人人像股神。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 4,
    stage: "heaven_open",
    text: "網購早到、品質超標還送贈品——世界溫柔得像 Bug。（{{HEDONIC}}：超預期爽感峰值消退極快——贈品退潮後，基準線更餓）",
    options: [
      {
        text: "立刻再買一次。",
        effect: { greed: 6 }
      },
      {
        text: "開心一整天。",
        effect: { blessing: 3 }
      },
      {
        text: "感激，但知道這不是常態。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 5,
    stage: "heaven_open",
    text: "聚會找你、朋友找你、外送員都祝你愉快，被善待久了，也容易忘記感謝。。（{{HEDONIC}}：長期被重視容易抬高心理基線，冷落感因此更明顯）",
    options: [
      {
        text: "覺得自己魅力無法擋。",
        effect: { greed: 4, ignorance: 6 }
      },
      {
        text: "享受大家的善意。",
        effect: { blessing: 4 }
      },
      {
        text: "珍惜善意，不視為理所當然。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 6,
    stage: "heaven_open",
    text: "秒回、融洽、無冷戰——像領到限時戀愛體驗券。（{{HEDONIC}}：關係順風期的快樂會被習慣迅速稀釋——體驗券到期，心跳先降速）",
    options: [
      {
        text: "覺得自己很值得被愛。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "好好享受當下。",
        effect: { blessing: 4 }
      },
      {
        text: "感謝對方付出，不只享受被照顧。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 7,
    stage: "heaven_open",
    text: "升職名單第一行是你——慾望已預約下一階。（{{WHO}}：職位晉升後耗竭風險常隨責任同步上升——特權到帳，負荷也加賽）",
    options: [
      {
        text: "開始研究下一次升職。",
        effect: { greed: 8 }
      },
      {
        text: "請朋友吃飯慶祝。",
        effect: { blessing: 3 }
      },
      {
        text: "提醒自己：職位是責任，不只特權。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 8,
    stage: "heaven_open",
    text: "投資翻倍，親戚忽然想聽你的課——專家錯覺自動安裝。（{{ECONOMICS}}：暴利後的過度自信偏差會低估運氣成分——運氣穿專家皮，很合身）",
    options: [
      {
        text: "開始以老師自居。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "分享心得，有點飄。",
        effect: { greed: 4, blessing: 3 }
      },
      {
        text: "承認有運氣成分。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 9,
    stage: "heaven_open",
    text: "健檢報告漂亮得像範本——風險偏好瞬間上調。（{{APA}}：完美指標易誘發鬆懈，削弱後續自制——綠燈一多，自制先闖紅燈）",
    options: [
      {
        text: "從今天開始亂吃。",
        effect: { ignorance: 6 }
      },
      {
        text: "獎勵自己一頓大餐。",
        effect: { blessing: 3, greed: 2 }
      },
      {
        text: "感謝身體一直加班。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 10,
    stage: "heaven_open",
    text: "綠燈、車位、排隊剛好——宇宙像站你這邊。（{{HEDONIC}}：連續好運容易讓人高估順境的持續性）",
    options: [
      {
        text: "覺得宇宙站在自己這邊。",
        effect: { ignorance: 6 }
      },
      {
        text: "開心得像中了小獎。",
        effect: { blessing: 3 }
      },
      {
        text: "心情很好，順手幫助別人。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 11,
    stage: "heaven_open",
    text: "最近消費都沒踩雷——你懷疑自己進化成購物之神。（{{ECONOMICS}}：成功率偏高會放大購買欲與沉沒加碼——連勝最會教人加碼）",
    options: [
      {
        text: "加大購買頻率。",
        effect: { greed: 6 }
      },
      {
        text: "開心接受好運。",
        effect: { blessing: 3 }
      },
      {
        text: "知道任何運氣都有限期。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 12,
    stage: "heaven_open",
    text: "前輩提拔並分享資源——自我神話開始寫草稿。（{{APA}}：成功容易產生歸因偏差，高估自己、低估助力）",
    options: [
      {
        text: "覺得自己果然與眾不同。",
        effect: { ignorance: 6, greed: 4 }
      },
      {
        text: "欣然接受，先記一筆人情。",
        effect: { blessing: 4 }
      },
      {
        text: "感謝貴人，也記得幫下一個人。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 13,
    stage: "heaven_open",
    text: "工作感情健康財務全綠——你忘了上次倒楣何時。（{{HEDONIC}}：長期順境容易讓人將幸福視為理所當然）",
    options: [
      {
        text: "覺得這一切都是自己厲害。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "享受當下，不想太多。",
        effect: { blessing: 3, ignorance: 4 }
      },
      {
        text: "偶爾提醒：順境也是修行。",
        effect: { wisdom: 4, blessing: 5, composure: 2 }
      }
    ]
  },


// ==================== [heaven_void] 虛無  (14 ~ 27) ====================
  {
    id: 14,
    stage: "heaven_void",
    text: "順利太久，原本會開心的事失去觸發力。（{{HEDONIC}}：享樂適應讓「應得的幸福」變成背景音——該開心的鍵，被習慣靜音）",
    options: [
      {
        text: "這本來就是我應得的。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "反正一直都這麼順。",
        effect: { ignorance: 6 }
      },
      {
        text: "提醒自己：好運≠理所當然。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 15,
    stage: "heaven_void",
    text: "你開始把助力記成自力——忘了當初拉你一把的人。（{{APA}}：成功時人容易高估自己，低估運氣與他人的幫助）",
    options: [
      {
        text: "今天的位置當然靠自己。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "偶爾想到，很快就忘。",
        effect: { ignorance: 4 }
      },
      {
        text: "主動回頭感謝曾經拉你一把的人。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 16,
    stage: "heaven_void",
    text: "連續成功後，你的判斷被當成永遠正確的預設。（{{APA}}：過度自信會縮短蒐證，加重決策錯誤——預設正確，錯得特別快）",
    options: [
      {
        text: "別人的意見只是背景音樂。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "聽聽看，基本上自己決定。",
        effect: { composure: 2, ignorance: 4 }
      },
      {
        text: "保持自信，記得運氣也有份。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 17,
    stage: "heaven_void",
    text: "連升三次後，看新人會冒出「怎麼這麼弱」。（{{APA}}：優勢地位容易讓人低估他人的處境與努力）",
    options: [
      {
        text: "成功的人本來就比較優秀。",
        effect: { greed: 6, anger: 4, ignorance: 6 }
      },
      {
        text: "沒說出口，心裡有點這樣想。",
        effect: { ignorance: 6 }
      },
      {
        text: "想起自己新人時也曾手忙腳亂。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 18,
    stage: "heaven_void",
    text: "連賺一年，你懷疑股神就是自己——天選外衣很合身。（{{ECONOMICS}}：賭徒謬誤把連勝讀成技能證明——牛市裡誰都像天才）",
    options: [
      {
        text: "All in。宇宙不會虧待天選。",
        effect: { greed: 8, ignorance: 6 }
      },
      {
        text: "繼續加碼，但有點不安。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "提醒自己：牛市裡誰都像天才。",
        effect: { wisdom: 4, composure: 2, blessing: 4 }
      }
    ]
  },

  {
    id: 19,
    stage: "heaven_void",
    text: "太順之後，努力開始顯得多餘——規劃像多餘儀軌。（{{HEDONIC}}：順境會降低成就感與驅動力）",
    options: [
      {
        text: "人生本來就該這樣。",
        effect: { ignorance: 8 }
      },
      {
        text: "偶爾偷懶應該沒差。",
        effect: { ignorance: 6 }
      },
      {
        text: "珍惜順境，同時持續精進。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 20,
    stage: "heaven_void",
    text: "碰到批評，第一反應是「他憑什麼？」——防禦比事實更快。（{{APA}}：自我服務偏差讓威脅訊息優先被擋下——防衛先到，道理後到）",
    options: [
      {
        text: "立刻反駁，氣勢不能輸。",
        effect: { anger: 6, ignorance: 6 }
      },
      {
        text: "表面接受，心裡不服。",
        effect: { anger: 4, ignorance: 4 }
      },
      {
        text: "靜下來思考對方是不是有道理。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 21,
    stage: "heaven_void",
    text: "朋友霉運、你順風——能力差異敘事自動生成。（{{APA}}：相對優勢幻覺來自比較框架，而非絕對能力——框架一換，天才變運氣）",
    options: [
      {
        text: "能力不同，結果當然不同。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "沒說出口，默默比較。",
        effect: { ignorance: 4 }
      },
      {
        text: "知道有時候只是人生不同階段。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 22,
    stage: "heaven_void",
    text: "太舒服會關掉學習動機——舒適長成牢房前通常沒警報。（{{WHO}}：低挑戰舒適圈是倦怠前的常見假性安寧——牢房裝修得很舒服）",
    options: [
      {
        text: "反正現在很好。",
        effect: { ignorance: 8 }
      },
      {
        text: "明天再學。",
        effect: { ignorance: 6 }
      },
      {
        text: "不讓舒適圈長成牢房。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 23,
    stage: "heaven_void",
    text: "掌聲變多後，你開始期待每天都被稱讚。（{{DIGITAL}}：讚美成癮抬高回饋需求，沒掌聲就情緒掉速——基線一抬，安靜像懲罰）",
    options: [
      {
        text: "沒有掌聲就渾身不對勁。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "有掌聲很好，沒有也失落。",
        effect: { ignorance: 4 }
      },
      {
        text: "把專注力放回事情本身。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 24,
    stage: "heaven_void",
    text: "順利會刪除成長紀錄——你遺忘那些曾讓你長大的低潮。（{{HEDONIC}}：挫折失憶讓快樂基線失真、抗壓變脆——刪掉低潮，也刪掉韌性）",
    options: [
      {
        text: "挫折只是失敗者的故事。",
        effect: { greed: 6, ignorance: 8 }
      },
      {
        text: "不太願意想起來。",
        effect: { ignorance: 4 }
      },
      {
        text: "記得低潮時的自己。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 25,
    stage: "heaven_void",
    text: "幾乎沒煩惱的日子——驚喜密度也一起下降。（{{HEDONIC}}：當幸福變成日常，驚喜感與感動閾值會提高）",
    options: [
      {
        text: "穩定比什麼都重要。",
        effect: { ignorance: 6 }
      },
      {
        text: "偶爾有點空虛。",
        effect: { ignorance: 4, composure: -2 }
      },
      {
        text: "開始重新探索世界。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 26,
    stage: "heaven_void",
    text: "幸福變成背景音樂後——真心感動變成稀有事件。（{{HEDONIC}}：情感習慣化是享樂跑步機的日常版本——背景音一開，峰值下架）",
    options: [
      {
        text: "這代表成熟。",
        effect: { ignorance: 6 }
      },
      {
        text: "可能只是最近太忙。",
        effect: { ignorance: 4 }
      },
      {
        text: "或許是把幸福當成背景音樂了。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 27,
    stage: "heaven_void",
    text: "工作財務關係穩定得令人安心——一切可控時最危險。（{{APA}}：控制錯覺在平穩期最強，風險評估最失真——無常從不提前通知）",
    options: [
      {
        text: "開始相信自己能控制一切。",
        effect: { greed: 6, ignorance: 8 }
      },
      {
        text: "享受這種安全感。",
        effect: { blessing: 3, ignorance: 4 }
      },
      {
        text: "記得無常從來不會提前通知。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },


// ==================== [heaven_finale] 終章  (28 ~ 40) ====================
  {
    id: 28,
    stage: "heaven_finale",
    text: "重整名單第一次碰到你——風原來不會永遠繞開。（{{APA}}：失去優勢時，人容易高估失敗對自我價值的衝擊）",
    options: [
      {
        text: "憤怒抱怨世界不公平。",
        effect: { anger: 8, ignorance: 6 }
      },
      {
        text: "懷疑自己是不是不夠好。",
        effect: { ignorance: 8, composure: -4 }
      },
      {
        text: "接受變化，開始思考下一步。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "heaven_finale",
    text: "幾天吐回半年獲利——市場用波動給天選之人補課。（{{ECONOMICS}}：損失厭惡讓回撤痛感遠大於上漲快感——跌的時候，天才忽然很凡人）",
    options: [
      {
        text: "瘋狂加碼攤平。信仰不能輸。",
        effect: { greed: 8, ignorance: 6 }
      },
      {
        text: "整夜看盤。",
        effect: { ignorance: 8, composure: -4 }
      },
      {
        text: "接受市場本來就有漲跌。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 30,
    stage: "heaven_finale",
    text: "不是小挫折——是你真的很想要卻失去的東西。（{{HEDONIC}}：重大失落後，原快樂來源的適應曲線會重設——失去一刀，基線重開機）",
    options: [
      {
        text: "無法接受。",
        effect: { anger: 6, ignorance: 6 }
      },
      {
        text: "開始否定自己。",
        effect: { ignorance: 8, composure: -6 }
      },
      {
        text: "讓自己難過，但不停在原地。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 31,
    stage: "heaven_finale",
    text: "健檢出現讓醫生停頓的數值——搜尋引擎比醫師更快。（{{SLEEP}}：健康焦慮最會在夜間搜尋中放大——藍光加劇，最糟結局先到）",
    options: [
      {
        text: "上網搜尋最糟結果。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "假裝沒事。",
        effect: { ignorance: 8 }
      },
      {
        text: "開始正視自己的身體。",
        effect: { wisdom: 4, blessing: 4 }
      }
    ]
  },

  {
    id: 32,
    stage: "heaven_finale",
    text: "後輩漂亮地超過你——祝福與焦慮同框。（{{ECONOMICS}}：被超越啟動地位威脅，相對剝奪感立刻上線——真心高興，喉嚨先卡關）",
    options: [
      {
        text: "嘴上祝福，心裡開戰。",
        effect: { anger: 6, greed: 4 }
      },
      {
        text: "開始焦慮年齡。",
        effect: { ignorance: 6 }
      },
      {
        text: "真心為對方高興。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 33,
    stage: "heaven_finale",
    text: "注意力經濟不認舊帳——你發現光不再照著自己。（{{DIGITAL}}：聚光燈轉移後，線上曝光下降常被讀成自我貶值——流量退潮，人還在）",
    options: [
      {
        text: "努力把注意力搶回來。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "感到失落。",
        effect: { ignorance: 6 }
      },
      {
        text: "學會退到幕後。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 34,
    stage: "heaven_finale",
    text: "鏡子第一次清楚顯示歲月痕跡——抗老購物車自動打開。（{{APA}}：衰老顯著性衝擊自我圖像，焦慮耗能上升——購物車很勤，歲月不退貨）",
    options: [
      {
        text: "購買所有抗老產品。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "不願意面對。",
        effect: { ignorance: 6 }
      },
      {
        text: "接受老去也是生命的一部分。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 35,
    stage: "heaven_finale",
    text: "好友遠遷後聯絡降頻——親密也遵循某種平方反比。（{{DIGITAL}}：遠距關係依賴數位聯絡，頻率下降易被誤讀——距離一拉，讀心全錯）",
    options: [
      {
        text: "責怪對方變了。",
        effect: { anger: 6, ignorance: 6 }
      },
      {
        text: "默默疏遠。",
        effect: { ignorance: 6 }
      },
      {
        text: "珍惜曾經的陪伴。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "heaven_finale",
    text: "照顧者變成被照顧者——父母頻繁提起看醫生。（{{APA}}：角色轉換常伴隨身分調適與情緒壓力）",
    options: [
      {
        text: "逃避這個念頭。",
        effect: { ignorance: 8 }
      },
      {
        text: "用錢解決。",
        effect: { greed: 4, blessing: 3 }
      },
      {
        text: "把時間留給重要的人。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 37,
    stage: "heaven_finale",
    text: "孩子有自己的生活，不再凡事需要你——愛要學放手。（{{SLEEP}}：空巢情緒常在夜間反芻，干擾入睡——房間變安靜，大腦變嘈雜）",
    options: [
      {
        text: "捨不得放手。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "有點空虛。",
        effect: { ignorance: 4 }
      },
      {
        text: "明白愛不是擁有。",
        effect: { wisdom: 4, blessing: 5 }
      }
    ]
  },

  {
    id: 38,
    stage: "heaven_finale",
    text: "退休首月無會議無業績無頭銜——自我檔案突然缺欄位。（{{APA}}：角色身份轉換常造成短期自我認同空缺）",
    options: [
      {
        text: "開始懷念掌聲。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "不知道自己該做什麼。",
        effect: { ignorance: 6 }
      },
      {
        text: "重新認識沒有身份的人生。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 39,
    stage: "heaven_finale",
    text: "最重要的東西多半不可控——這堂課通常遲到。（{{APA}}：控制慾退場時，不確定性焦慮會暫時峰值——握緊越久，放手越難）",
    options: [
      {
        text: "繼續試圖控制一切。",
        effect: { greed: 6, ignorance: 6 }
      },
      {
        text: "感到無力。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "學習接受無常。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "heaven_finale",
    text: "你求過財富愛情成就健康運氣——後來大多得到了。然後呢？（{{HEDONIC}}：慾望滿足後，享樂跑步機仍會追問下一個目標——清單清空，問題才開始）",
    options: [
      {
        text: "再追更多，永不滿足。",
        effect: { greed: 10 }
      },
      {
        text: "努力維持現狀不掉下去。",
        effect: { ignorance: 8, composure: 2 }
      },
      {
        text: "感謝曾經擁有。",
        effect: { wisdom: 5, blessing: 5 }
      }
    ]
  }

];

// 八條。數字越高越先採用。帶得走的數值每跨一階換一張卡；定力每世從 40 起算。

window.heavenEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "heaven-exit",
      priority: 90,
      name: "超脫天道",
      min: { wisdom: 100, composure: 85 },
      max: { greed: 55, ignorance: 55 },
      art: "ending/heaven_exit.jpg",
      text: "高居雲端，俯瞰棋局。\n解脫不是成為規則的神，\n而是掀翻權力編織的桌子。",
    },
    {
      id: "heaven-greed",
      priority: 75,
      name: "集權暴君",
      above: { blessing: 89, greed: 69 },
      art: "ending/heaven_greed.jpg",
      text: "福報與野心膨脹到極限。\n以為掌握了世界的命脈，\n卻被權慾活活榨乾。",
    },
    {
      id: "heaven-ignorance",
      priority: 75,
      name: "昏庸主宰",
      above: { blessing: 89, ignorance: 69 },
      art: "ending/heaven_ignorance.jpg",
      text: "坐在神壇上，腦袋一片空白。\n手握至高權力，\n卻不知底下的人在死什麼。",
    },
    {
      id: "heaven-wisdom",
      priority: 65,
      name: "孤獨先知",
      above: { blessing: 74, wisdom: 74 },
      art: "ending/heaven_wisdom.jpg",
      text: "洞察天機卻無人可說。\n看透所有的荒謬與因果，\n冷清得沒有一句真心話。",
    },
    {
      id: "heaven-greed-mid",
      priority: 40,
      stat: "greed",
      name: "特權寄生蟲",
      min: { blessing: 50, greed: 50 },
      art: "ending/heaven_greed_mid.jpg",
      text: "靠著體制庇護作威作福。\n利用天道規則的漏洞，\n把好處全往口袋裡塞。",
    },
    {
      id: "heaven-ignorance-mid",
      priority: 40,
      stat: "ignorance",
      name: "高階木偶",
      min: { blessing: 50, ignorance: 50 },
      art: "ending/heaven_ignorance_mid.jpg",
      text: "頂著最高頭銜的橡皮圖章。\n每天按部就班地蓋章發令，\n不知自己在維護什麼。",
    },
    {
      id: "heaven-wisdom-mid",
      priority: 40,
      stat: "wisdom",
      name: "旁觀改革者",
      min: { blessing: 50, wisdom: 50 },
      art: "ending/heaven_wisdom_mid.jpg",
      text: "看出制度漏洞卻無力改變。\n卡在高層與底層的縫隙，\n冷眼旁觀這場天道鬧劇。",
    },
    {
      id: "heaven-battery",
      priority: 0,
      name: "天庭小透明",
      art: "ending/heaven_battery.jpg",
      text: "福報耗盡，神壇塌陷。\n沒能撐起像樣的權威，\n被洪流刷成無足輕重的祭品。",
    },
  ],
};
