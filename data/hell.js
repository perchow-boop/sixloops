window.hellEvents = [
  // ==================== [hell_open] 開局之戰  (1 ~13) ====================
  {
    id: 1,
    stage: "hell_open",
    text: "6:30 鬧鐘響——那不是鈴聲，是資本主義起床號。（{{SLEEP}}：近六成成人睡前一小時仍亮螢幕，褪黑激素最先被加班）",
    options: [
      {
        text: "關掉鬧鐘繼續睡。人生很短，遲到很長。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "像喪屍起床。身體到浴室，靈魂留枕頭。",
        effect: { ignorance: 4, blessing: 3 }
      },
      {
        text: "多躺三分鐘，盯天花板盤點人生 bug。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 2,
    stage: "hell_open",
    text: "車廂已達物理極限，月台的人顯然不同意。（{{WHO}}：耗竭常從通勤這種「不算工時」的疲勞開始計費）",
    options: [
      {
        text: "硬擠進去。今天不是上班族，是液體。",
        effect: { anger: 4, composure: -4 }
      },
      {
        text: "等下一班。下一班長得跟這班一模一樣。",
        effect: { wisdom: 2, composure: 2 }
      },
      {
        text: "想像自己正在參加人類壓縮測試。",
        effect: { ignorance: 4, wisdom: 2 }
      }
    ]
  },

  {
    id: 3,
    stage: "hell_open",
    text: "屁股剛碰到椅子，主管已開始檢討你的人格。（{{APA}}：壓力狀態下，人更容易用情緒而非事實解讀批評）",
    options: [
      {
        text: "直接反駁。至少要死得有尊嚴。",
        effect: { anger: 6, composure: -4 }
      },
      {
        text: "低頭道歉。嘴在認錯，腦在寫離職信。",
        effect: { anger: 4, ignorance: 4 }
      },
      {
        text: "拿出完整紀錄。你沒有情緒，只有 Excel。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 4,
    stage: "hell_open",
    text: "三小時會議結論：下週再開一次。（{{HEDONIC}}：人會逐漸適應長期處境，連荒謬也可能變成日常）",
    options: [
      {
        text: "當場深深嘆氣。靈魂已提早離席。",
        effect: { anger: 6, composure: -4 }
      },
      {
        text: "神遊太虛。散會才知自己被指派工作。",
        effect: { ignorance: 6, composure: -2 }
      },
      {
        text: "主動接工作換散會。晚上因此失去自由。",
        effect: { blessing: -2, composure: 2 }
      }
    ]
  },

  {
    id: 5,
    stage: "hell_open",
    text: "客服電話一響，你就知道今天有一段修行。（{{WHO}}：情緒勞動同樣消耗身心資源——笑容是加班面具）",
    options: [
      {
        text: "直接對槓。你很爽，主管更快收到投訴。",
        effect: { anger: 8, composure: -6 }
      },
      {
        text: "全程「好的呢」。嘴在服務，心在超度。",
        effect: { anger: 4, composure: -4 }
      },
      {
        text: "把問題處理完，順便替對方的人生感到辛苦。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 6,
    stage: "hell_open",
    text: "午餐剛拆開，主管傳訊：「急件。」（{{WHO}}：休息權常被「急件」覆蓋成隱形加班）",
    options: [
      {
        text: "把便當蓋起來。午休正式下線。",
        effect: { composure: -6, blessing: 3 }
      },
      {
        text: "先吃。反正餓死的人做不出好報告。",
        effect: { composure: 2, anger: 2 }
      },
      {
        text: "躲進廁所假裝沒看見。",
        effect: { ignorance: 6, composure: 2 }
      }
    ]
  },

  {
    id: 7,
    stage: "hell_open",
    text: "第三杯咖啡下肚，你才開始看見工作輪廓。（{{SLEEP}}：咖啡因延遲結算，睡眠負債照樣按日計息）",
    options: [
      {
        text: "直接續第四杯。心臟能不能接受等等再談。",
        effect: { greed: 4, composure: -6 }
      },
      {
        text: "改喝水。至少身體知道你還在乎它。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      },
      {
        text: "開始 Google：心悸要掛什麼科。",
        effect: { ignorance: 4, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 8,
    stage: "hell_open",
    text: "晚上 10:48，主管傳訊：「方便聊一下嗎？」（{{DIGITAL}}：通知永遠在線，私人時間先被劃進工時）",
    options: [
      {
        text: "秒回。你已沒有私人時間的概念。",
        effect: { composure: -6, ignorance: 4 }
      },
      {
        text: "假裝睡著。明天的自己處理吧。",
        effect: { ignorance: 6, composure: 2 }
      },
      {
        text: "設定工作界線，明早再回。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 9,
    stage: "hell_open",
    text: "KPI 儀表板打開，全是血。（{{ECONOMICS}}：損失厭惡讓紅字比真實損失更痛——大腦先報警）",
    options: [
      {
        text: "開始瘋狂加班補數字。",
        effect: { composure: -6, greed: 4 }
      },
      {
        text: "盯著紅字發呆，希望它自己變綠。",
        effect: { ignorance: 6 }
      },
      {
        text: "分析問題來源，先救最重要的。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 10,
    stage: "hell_open",
    text: "花三小時做好的檔突然消失。（{{ECONOMICS}}：沉沒成本讓心血蒸發時，痛感遠大於實際損失）",
    options: [
      {
        text: "開始對電腦進行精神攻擊。",
        effect: { anger: 8, composure: -6 }
      },
      {
        text: "看著桌布發呆十分鐘。",
        effect: { ignorance: 4, wisdom: 2 }
      },
      {
        text: "重做。你變強了，也老了。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 11,
    stage: "hell_open",
    text: "一打開 Email，未讀 143 封。（{{DIGITAL}}：未讀訊息是現代酷刑，注意力先被撕成碎片）",
    options: [
      {
        text: "全部標已讀。眼不見為淨。",
        effect: { ignorance: 6 }
      },
      {
        text: "從第一封開始看，看到懷疑人生。",
        effect: { composure: -4 }
      },
      {
        text: "先處理重要信件，其餘交給未來的自己。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 12,
    stage: "hell_open",
    text: "Teams 紅點 99+，像世界末日倒數。（{{APA}}：選擇過載會把自制力直接抽乾——點不開也輸）",
    options: [
      {
        text: "全部點開。人生瞬間碎成一百塊。",
        effect: { composure: -6 }
      },
      {
        text: "假裝沒看到。",
        effect: { ignorance: 6 }
      },
      {
        text: "先分類，再逐步處理。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 13,
    stage: "hell_open",
    text: "星期六下午，群組突然 @你：「有空看一下嗎？」（{{WHO}}：週末工時延伸會加速疏離與耗竭）",
    options: [
      {
        text: "秒回。週末只是平日的延伸。",
        effect: { composure: -6, blessing: 3 }
      },
      {
        text: "已讀不回。星期一的自己會收到後果。",
        effect: { ignorance: 4, composure: 2 }
      },
      {
        text: "簡短回覆，下週處理。你開始保護時間。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },


  // ==================== [hell_grind] 苦行期  (14 ~ 26) ====================
  {
    id: 14,
    stage: "hell_grind",
    text: "凌晨 2:07——「還是第一版比較有感覺。」十七版白改。（{{SLEEP}}：睡眠被客戶回覆截斷，負債隔天加倍）",
    options: [
      {
        text: "砸鍵盤。檔案沒事，情緒成功損毀。",
        effect: { anger: 8, composure: -6 }
      },
      {
        text: "默默再改一次。人類適應力就是這樣練出來的。",
        effect: { ignorance: 6, composure: -6 }
      },
      {
        text: "加急件費。睡眠要出售，至少標個價。",
        effect: { wisdom: 5, greed: 4, composure: -4, blessing: 3 }
      }
    ]
  },

  {
    id: 15,
    stage: "hell_grind",
    text: "組織重整公告已上線，「不裁員」聽起來像「先觀察」。（{{ECONOMICS}}：損失厭惡把不確定性放大成末日感）",
    options: [
      {
        text: "立刻更新履歷，同時投出二十封。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      },
      {
        text: "開始瘋狂加班表忠誠。",
        effect: { greed: 6, composure: -6 }
      },
      {
        text: "假裝沒事。反正焦慮又不能加薪。",
        effect: { ignorance: 8, composure: -4 }
      }
    ]
  },

  {
    id: 16,
    stage: "hell_grind",
    text: "健檢報告出來，紅字比 Outlook 未讀還多。（{{WHO}}：健康紅字常是職場過勞開給身體的收據）",
    options: [
      {
        text: "搜尋「這數值還能活多久」。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "約醫生檢查。終於把自己排進待辦。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      },
      {
        text: "說等專案結束再處理。專案聽了很感動。",
        effect: { greed: 4, composure: -6 }
      }
    ]
  },

  {
    id: 17,
    stage: "hell_grind",
    text: "你開始羨慕失業的人——至少不用開晨會。（{{ECONOMICS}}：機會成本算盤一響，現狀突然變得很貴）",
    options: [
      {
        text: "打開房貸帳單冷靜一下。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      },
      {
        text: "立刻搜尋離島打工換宿。",
        effect: { ignorance: 6, composure: 2 }
      },
      {
        text: "繼續工作。你不是想離職，你只是想活。",
        effect: { wisdom: 5, composure: -4, blessing: 3 }
      }
    ]
  },

  {
    id: 18,
    stage: "hell_grind",
    text: "好友傳來海邊照，你回傳 Excel 截圖。（{{DIGITAL}}：社群日均約兩小時二十三分，最會放大比較傷）",
    options: [
      {
        text: "祝他玩得開心。順便把手機摔進抽屜。",
        effect: { anger: 4, composure: -4 }
      },
      {
        text: "開始規劃明年旅行。去年也是這樣規劃的。",
        effect: { wisdom: 5, ignorance: 4, blessing: 3 }
      },
      {
        text: "回頭打開那個還沒做完的表。",
        effect: { composure: -6, blessing: 3 }
      }
    ]
  },

  {
    id: 19,
    stage: "hell_grind",
    text: "會議齊喊「大家都很辛苦」——加薪的人始終不是大家。（{{ECONOMICS}}：框架效應把免費口號說成福利到帳）",
    options: [
      {
        text: "大聲認同。反正口號免費。",
        effect: { ignorance: 6 }
      },
      {
        text: "開始計算自己的時薪。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      },
      {
        text: "把不爽做成迷因發朋友群。",
        effect: { anger: 4, composure: 2 }
      }
    ]
  },

  {
    id: 20,
    stage: "hell_grind",
    text: "連續第十二天上班，星期幾已失去法律意義。（{{SLEEP}}：睡眠債開始收利息，精神帳戶已透支）",
    options: [
      {
        text: "繼續上工。反正人類很耐用。",
        effect: { composure: -8, ignorance: 6 }
      },
      {
        text: "請假一天。內疚感比主管還早來。",
        effect: { composure: 2, wisdom: 5, blessing: 3 }
      },
      {
        text: "打開銀行 App 看看存款獲得精神支援。",
        effect: { greed: 4, composure: 2 }
      }
    ]
  },

  {
    id: 21,
    stage: "hell_grind",
    text: "你開始在夢裡開會——最恐怖的是夢裡居然有效率。（{{SLEEP}}：工作入侵睡眠，連夢境都在加班打卡）",
    options: [
      {
        text: "醒來立刻記錄夢中結論。",
        effect: { ignorance: 4, composure: -4 }
      },
      {
        text: "搜尋過勞症狀。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      },
      {
        text: "覺得夢裡主管比真的主管好相處。",
        effect: { anger: 4, ignorance: 6 }
      }
    ]
  },

  {
    id: 22,
    stage: "hell_grind",
    text: "「如何避免倦怠」講座排在下班後晚上八點。（{{WHO}}：反諷現場——用加班時間學習如何不加班）",
    options: [
      {
        text: "瘋狂鼓掌。荒謬到極致就是藝術。",
        effect: { wisdom: 5, anger: 4, blessing: 3 }
      },
      {
        text: "認真聽課。希望問題可以用 PPT 解決。",
        effect: { ignorance: 6 }
      },
      {
        text: "請假回家睡覺。你決定親自示範。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 23,
    stage: "hell_grind",
    text: "朋友說你脾氣差；你想起昨天跟印表機吵架。（{{WHO}}：耗竭狀態下，情緒更容易向無關目標外溢）",
    options: [
      {
        text: "印表機先挑釁的。",
        effect: { anger: 6 }
      },
      {
        text: "開始懷疑自己是不是快燒光了。",
        effect: { wisdom: 5, composure: -4, blessing: 3 }
      },
      {
        text: "預約休假，先救人再救專案。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 24,
    stage: "hell_grind",
    text: "加薪 3%，便當漲 10%。（{{ECONOMICS}}：實質工資被通膨毆打，心理帳戶先喊痛）",
    options: [
      {
        text: "怒刷求職網站。",
        effect: { anger: 6, wisdom: 5, blessing: 3 }
      },
      {
        text: "告訴自己至少還有工作。",
        effect: { ignorance: 6 }
      },
      {
        text: "開始認真規劃財務與人生。",
        effect: { wisdom: 5, composure: 2, blessing: 3 }
      }
    ]
  },

  {
    id: 25,
    stage: "hell_grind",
    text: "照鏡子——你比較像主管養的植物。（{{WHO}}：長期耗竭會逐漸改變人對自己的感受）",
    options: [
      {
        text: "買保養品急救。",
        effect: { greed: 4, composure: 2 }
      },
      {
        text: "自拍存證，紀念青春離職。",
        effect: { ignorance: 4, wisdom: 2 }
      },
      {
        text: "提早回家睡覺。這是最低限度的溫柔。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 26,
    stage: "hell_grind",
    text: "安靜回來了，你卻不知道自己還喜歡什麼。（{{DIGITAL}}：螢幕填滿下班空白，興趣地圖先被刷掉）",
    options: [
      {
        text: "繼續滑影片直到睡著。",
        effect: { ignorance: 8, composure: -4 }
      },
      {
        text: "打開工作訊息確認有沒有新任務。",
        effect: { composure: -6, greed: 4 }
      },
      {
        text: "關掉螢幕。第一次想想自己想過什麼樣的人生。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },


  // ==================== [hell_finale] 終局之戰  (27 ~ 40) ====================
  {
    id: 27,
    stage: "hell_finale",
    text: "凌晨 3:17，明明很累，卻睡不著。（{{SLEEP}}：失眠腦堅持跑災難模擬，越想越醒、越醒越想）",
    options: [
      {
        text: "繼續想。焦慮了一小時，不焦慮完很浪費。",
        effect: { ignorance: 8, composure: -6 }
      },
      {
        text: "打開手機轉移注意力。失眠升級為熬夜。",
        effect: { ignorance: 6, greed: 4, composure: -6 }
      },
      {
        text: "告訴自己：現在不是解決人生的時間。然後專心睡覺。",
        effect: { wisdom: 5, composure: 3, blessing: 3 }
      }
    ]
  },

  {
    id: 28,
    stage: "hell_finale",
    text: "同學創業移民環遊，你像被困在 Excel 裡。（{{DIGITAL}}：社會比較在螢幕上加速，自尊先掉血）",
    options: [
      {
        text: "點開他的 LinkedIn，開始進行精神自虐。",
        effect: { ignorance: 8, anger: 4, composure: -4 }
      },
      {
        text: "對自己說：他一定沒看起來那麼快樂。",
        effect: { anger: 4, ignorance: 6 }
      },
      {
        text: "放下手機。別人的人生不會替你活。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 29,
    stage: "hell_finale",
    text: "三個月最開心的事——某次會議提前結束。（{{HEDONIC}}：享樂基準線被工作壓扁後，快樂門檻暴跌）",
    options: [
      {
        text: "接受現實。快樂標準降低可以增加幸福感。",
        effect: { ignorance: 8 }
      },
      {
        text: "決定買點東西犒賞自己。",
        effect: { greed: 6, composure: -4 }
      },
      {
        text: "開始思考除了工作之外還喜歡什麼。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 30,
    stage: "hell_finale",
    text: "戶頭比五年前多，笑容卻沒一起成長。（{{ECONOMICS}}：金錢效用遞減——數字上漲不等於快樂上漲）",
    options: [
      {
        text: "那就再努力賺一點。",
        effect: { greed: 8, ignorance: 4 }
      },
      {
        text: "開始懷疑是不是自己不知感恩。",
        effect: { ignorance: 6, composure: -4 }
      },
      {
        text: "第一次認真問：到底想要的是錢，還是生活？",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 31,
    stage: "hell_finale",
    text: "公司少了你照樣運作——刺痛，也自由。（{{APA}}：自我價值綁定產出時，可取代感最傷）",
    options: [
      {
        text: "開始拼命證明自己不可取代。",
        effect: { greed: 6, anger: 6 }
      },
      {
        text: "失落一整天。",
        effect: { ignorance: 6, composure: -6 }
      },
      {
        text: "鬆一口氣。人生不需要永遠當救世主。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 32,
    stage: "hell_finale",
    text: "朋友邀聚餐，你第一反應：會不會影響明天上班。（{{APA}}：意志力被工作預支後，連社交都像加班）",
    options: [
      {
        text: "拒絕。工作比較重要。",
        effect: { greed: 4, composure: -4 }
      },
      {
        text: "赴約，但全程都在看手機。",
        effect: { ignorance: 8 }
      },
      {
        text: "專心和朋友聊天。工作明天也會在。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 33,
    stage: "hell_finale",
    text: "休假第一天，沒有待辦讓你慌。（{{HEDONIC}}：習慣痛苦後，空白反而變成焦慮源）",
    options: [
      {
        text: "自己做一份待辦清單。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "繼續滑手機消磨時間。",
        effect: { ignorance: 6 }
      },
      {
        text: "什麼都不做。這比工作困難。",
        effect: { composure: 3, wisdom: 5, blessing: 3 }
      }
    ]
  },

  {
    id: 34,
    stage: "hell_finale",
    text: "家庭聚會上，你突然發現父母老了很多。（{{APA}}：注意力被工時占滿時，親近的人也會變模糊）",
    options: [
      {
        text: "心裡難過，但下週再說。",
        effect: { ignorance: 6 }
      },
      {
        text: "買昂貴禮物彌補愧疚。",
        effect: { greed: 6, blessing: 3 }
      },
      {
        text: "開始把時間排給重要的人。",
        effect: { blessing: 5, wisdom: 4 }
      }
    ]
  },

  {
    id: 35,
    stage: "hell_finale",
    text: "照鏡子，你認不出全力工作的自己。（{{DIGITAL}}：長期比較容易讓人用外部標準重新定義自己）",
    options: [
      {
        text: "換個髮型解決人生問題。",
        effect: { greed: 4, ignorance: 4 }
      },
      {
        text: "拍照發限動抒發情緒。",
        effect: { composure: -2, ignorance: 6 }
      },
      {
        text: "思考有哪些東西在這些年裡被犧牲掉了。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 36,
    stage: "hell_finale",
    text: "若財富自由，你還會做這份工作嗎？你安靜很久。（{{ECONOMICS}}：機會成本拷問——錢買到的是生活還是牢籠）",
    options: [
      {
        text: "不會。但明天還是要打卡。",
        effect: { composure: 2, wisdom: 5, blessing: 3 }
      },
      {
        text: "會，只是不要那麼多會議。",
        effect: { ignorance: 4 }
      },
      {
        text: "開始思考什麼事情是不拿錢也願意做的。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 37,
    stage: "hell_finale",
    text: "你翻到從前寫給自己的夢想清單。（{{HEDONIC}}：基準線漂移十年後，舊夢想看起來像別人的）",
    options: [
      {
        text: "默默收起來。不要打擾現在的自己。",
        effect: { ignorance: 6 }
      },
      {
        text: "自嘲一笑。那時候真天真。",
        effect: { composure: 2, wisdom: 5, blessing: 3 }
      },
      {
        text: "挑一件重新開始。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 38,
    stage: "hell_finale",
    text: "年度表揚大會，你終於拿到一直想要的獎。（{{HEDONIC}}：獎盃快樂半衰期很短——爽感退潮極快）",
    options: [
      {
        text: "很開心，大概維持到回家洗澡前。",
        effect: { greed: 6, ignorance: 4 }
      },
      {
        text: "開始想下一個更大的獎。",
        effect: { greed: 8 }
      },
      {
        text: "忽然發現自己追逐的其實不是獎盃。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 39,
    stage: "hell_finale",
    text: "路邊喝飲料——沒會議、沒訊息、沒 KPI。（{{DIGITAL}}：持續通知會切碎注意力，安靜變成稀有資源）",
    options: [
      {
        text: "開始擔心是不是漏了什麼工作。",
        effect: { ignorance: 6 }
      },
      {
        text: "趕快確認手機。",
        effect: { greed: 4, composure: -4 }
      },
      {
        text: "安靜享受十分鐘。很久沒人找你，你也終於找到自己。",
        effect: { wisdom: 4, composure: 3, blessing: 4 }
      }
    ]
  },

  {
    id: 40,
    stage: "hell_finale",
    text: "電腦關機，通知停止——燃燒你的，是那個永遠不敢停的自己。（{{WHO}}：倦怠三軸——耗竭、疏離、效能感崩）",
    options: [
      {
        text: "明天開始更努力。總有一天會到達終點。",
        effect: { greed: 9, ignorance: 9 }
      },
      {
        text: "不知道答案，但也不知道還能怎樣。",
        effect: { ignorance: 8, composure: 2 }
      },
      {
        text: "關上電腦，關掉通知，決定把人生的一部分還給自己。",
        effect: { wisdom: 5, composure: 4, blessing: 5, anger: -8 }
      }
    ]
  }
];

window.hellEvents = window.hellEvents;

window.hellEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "地獄道出口",
      min: { wisdom: 100, composure: 85 },
      max: { anger: 55, ignorance: 55, greed: 60 },
      art: "ending/hell_exit.jpg",
      text: "日常刑滿，原地出獄。\n解脫不是熬過所有苦，\n而是想起你本來就是個人。",
    },
    {
      id: "awake",
      priority: 80,
      name: "清醒的人",
      above: { wisdom: 74, composure: 59 },
      art: "ending/hell_awake.jpg",
      text: "人間地獄裡最荒謬的稱號。\n解脫不是熬過苦難，\n而是想起你根本不屬於這裡。",
    },
    {
      id: "riotous",
      priority: 70,
      name: "暴動刑徒",
      above: { anger: 99 },
      art: "ending/hell_riotous.jpg",
      text: "憎恨拉滿，不求解脫。\n我要帶著滿腔的怒火，\n把這座破地獄炸成平地。",
    },
    {
      id: "walking-dead",
      priority: 70,
      name: "行屍走肉",
      above: { ignorance: 99 },
      art: "ending/hell_walking_dead.jpg",
      text: "腦袋空空，靈魂登出。\n連自己在受什麼刑都不知道，\n只是機械地繼續往前走。",
    },
    {
      id: "anxiety",
      priority: 45,
      name: "焦慮狂人",
      min: { anger: 50 },
      max: { anger: 99 },
      art: "ending/hell_anxiety.jpg",
      text: "靠咖啡因續命的瘋子。\n看誰都像在故意挑釁，\n隨時準備把鍵盤砸出去。",
    },
    {
      id: "kpi",
      priority: 40,
      name: "數據奴隸",
      min: { greed: 55 },
      max: { anger: 49, ignorance: 49 },
      art: "ending/hell_kpi.jpg",
      text: "眼裡只看得到數字回報。\n以為自己正在贏，\n其實只是在幫地獄充值。",
    },
    {
      id: "loop",
      priority: 45,
      name: "無限輪迴",
      min: { ignorance: 50 },
      max: { ignorance: 99 },
      art: "ending/hell_loop.jpg",
      text: "明天又是新的一天。\n反正什麼也想不明白，\n那就原地打轉到世界毀滅。",
    },
    {
      id: "battery",
      priority: 0,
      name: "背景雜魚",
      art: "ending/hell_battery.jpg",
      text: "既沒有憤怒的勇氣，\n也沒有清醒的自覺，\n只是地獄道裡的最免洗消耗品。",
    },
  ],
};
