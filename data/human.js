
window.humanEvents = [
  {
    id: 1,
    stage: "human_open",
    text: "媽媽約吃飯、朋友約聚餐同秒跳出——選一檔，錯過痛先結帳。（{{ECONOMICS}}：損失厭惡專治兩難——沒選的那一頓，會在腦內標成溢價遺憾）",
    options: [
      { text: "去聚餐。親情排程延後再算。", effect: { greed: 2, ignorance: 4 } },
      { text: "先問出席名單。資訊焦慮續航。", effect: { ignorance: 4 } },
      { text: "回家吃飯。有些局可補，有些飯不行。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 2,
    stage: "human_open",
    text: "朋友傳「在嗎？」兩字。螢幕很短，心率很長。（{{DIGITAL}}：最短訊息常觸發最高社交焦慮——線上語氣最省字，也最費心）",
    options: [
      { text: "已讀不回，等完整需求規格。", effect: { composure: 2, ignorance: 2 } },
      { text: "秒回。對方只是問哪裡停車。", effect: { blessing: 3 } },
      { text: "直接打電話。猜謎不進 KPI。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 3,
    stage: "human_open",
    text: "老友開口借錢。友情帳與現金帳，很少同日對平。（{{ECONOMICS}}：關係資產與金錢風險——行為經濟學從不共用同一張試算表）",
    options: [
      { text: "借。友情萬歲，風險寫零。", effect: { blessing: 3, composure: -2 } },
      { text: "不借。親疏也要風險控管。", effect: { wisdom: 5, blessing: 3 } },
      { text: "只借願意當學費的金額。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 4,
    stage: "human_open",
    text: "翻到學生時代照片。當年什麼都沒有，快樂曲線卻很高。（{{HEDONIC}}：物質上升後基線快樂常悄悄回落——享樂跑步機最愛裝成成長）",
    options: [
      { text: "感慨青春已死。懷舊耗電模式。", effect: { ignorance: 4 } },
      { text: "立刻發限動。把回憶變流量。", effect: { greed: 4 } },
      { text: "對照片裡的自己笑一下。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 5,
    stage: "human_open",
    text: "另一半生氣了。你有錯，又沒那麼錯——意志力帳戶餘額不足。（{{APA}}：決策疲勞一來——情緒衝突最先抽乾自制力）",
    options: [
      { text: "講道理。正確率上升，勝率下降。", effect: { anger: 4, wisdom: 2 } },
      { text: "冷戰。安靜很省事，也很傷。", effect: { anger: 6, ignorance: 4 } },
      { text: "先抱一下再說。情緒優先於簡報。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 6,
    stage: "human_open",
    text: "冰箱剩菜對上外送炸雞。香氣先投票，理智後到。（{{ECONOMICS}}：現時偏誤，即時滿足往往會打敗延遲收益）",
    options: [
      { text: "炸雞。今晚快樂先入袋。", effect: { greed: 4 } },
      { text: "剩菜。定力小勝，味蕾抗議。", effect: { composure: 2 } },
      { text: "邊吃剩菜邊想炸雞。雙輸經典。", effect: { ignorance: 4, wisdom: 2 } }
    ]
  },
  {
    id: 7,
    stage: "human_open",
    text: "失聯好友寄來婚禮邀請。人情還要不要續費？（{{APA}}：長期關係投入會提高維持連結的心理傾向）",
    options: [
      { text: "禮到人不到。成本最低解。", effect: { composure: 2 } },
      { text: "去吃喜酒。現場才算簽到。", effect: { blessing: 3 } },
      { text: "順便把友情從封存撈回。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 8,
    stage: "human_open",
    text: "同事離職追夢。你嘴上祝福，心裡效能感掉線。（{{WHO}}：倦怠三軸——耗竭、疏離、效能感崩；羨慕常是免費加購的第四軸）",
    options: [
      { text: "說人總要吃飯。現實口號上線。", effect: { ignorance: 4 } },
      { text: "打開求職網站。羨慕轉成行動。", effect: { greed: 4 } },
      { text: "問自己：夢還有沒有心跳。", effect: { wisdom: 5, blessing: 3 } }
    ]
  },
  {
    id: 9,
    stage: "human_open",
    text: "生日訊息爆量，電話幾乎為零。讚數多，關係未必深。（{{DIGITAL}}：當局提醒——線上互動量高，不等於情感支持密度高）",
    options: [
      { text: "統計誰有發。人情變試算表。", effect: { greed: 4 } },
      { text: "有點失落。通知欄救不了。", effect: { ignorance: 4 } },
      { text: "主動打給真正重要的人。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 10,
    stage: "human_open",
    text: "約七點，六點五十八收到「改天」。晚上忽然多出一整塊空白。（{{APA}}：情緒落差出現時，人傾向用即時刺激填補空白）",
    options: [
      { text: "表面沒事，內心開帳本。", effect: { anger: 4 } },
      { text: "回「沒關係」。社交自動回覆。", effect: { composure: 2 } },
      { text: "突然多出一晚給自己。意外利多。", effect: { wisdom: 5, blessing: 3 } }
    ]
  },
  {
    id: 11,
    stage: "human_open",
    text: "經過以前常去的店。店還在，人變了。（{{HEDONIC}}：地方恆定、快樂不續約——享樂適應最誠實的街景樣本）",
    options: [
      { text: "感慨歲月。情緒先打卡。", effect: { wisdom: 5, blessing: 3 } },
      { text: "拍照傳給老朋友。回憶雲端同步。", effect: { blessing: 3 } },
      { text: "進去坐一下。現場比限動真實。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 12,
    stage: "human_open",
    text: "平凡一天：沒升職、沒失戀、沒中獎。大腦卻誤判為失敗。（{{HEDONIC}}：幸福會適應，平穩日常容易被誤判成毫無收穫）",
    options: [
      { text: "覺得無聊。多巴胺缺班。", effect: { greed: 4 } },
      { text: "開始滑手機。人工製造峰值。", effect: { ignorance: 4 } },
      { text: "突然覺得平安其實不錯。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 13,
    stage: "human_open",
    text: "睡前盤點：沒大成也沒大敗，只是活完一天。（{{SLEEP}}：穩定入睡本身就是被低估的恢復績效——比許願清單更接近修復）",
    options: [
      { text: "明天要更努力。焦慮鬧鐘預設。", effect: { greed: 4 } },
      { text: "再滑一下。藍光延長賽。", effect: { ignorance: 4 } },
      { text: "對今天說聲謝謝。關機入睡。", effect: { blessing: 5, wisdom: 4, composure: 2 } }
    ]
  },
  {
    id: 14,
    stage: "human_deep",
    text: "整理通訊錄。曾經天天聊的人，節日貼圖都停更。（{{DIGITAL}}：社群連結半衰期——往往短過你願意承認的）",
    options: [
      { text: "人生就是這樣。接受預設值。", effect: { composure: 2, ignorance: 4 } },
      { text: "翻舊聊天紀錄。時光機空轉。", effect: { ignorance: 6 } },
      { text: "主動傳：最近還好嗎？", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 15,
    stage: "human_deep",
    text: "很久沒全力以赴。不是不能，是怕失望。（{{APA}}：預期損失會把行動按鈕鎖死——決策拖延的常見病因）",
    options: [
      { text: "維持現狀最安全。零波動投資。", effect: { ignorance: 6 } },
      { text: "安慰自己成熟了。話術續命。", effect: { ignorance: 4 } },
      { text: "決定再認真相信一次。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 16,
    stage: "human_deep",
    text: "聚餐聊夢想，全場瞬間安靜。夢想像過期優惠券。（{{WHO}}：疏離感一來——連「還想要什麼」都變成尷尬議程）",
    options: [
      { text: "改聊房價。安全話題上線。", effect: { ignorance: 6 } },
      { text: "開玩笑帶過。氣氛急救包。", effect: { composure: 2, ignorance: 4 } },
      { text: "誠實說出還想做的事。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 17,
    stage: "human_deep",
    text: "長輩重複講同一故事。你以前嫌煩，今天有點難過。（{{WHO}}：倦怠裡的疏離——最常撞上最親密的人）",
    options: [
      { text: "滑手機假裝有在聽。", effect: { ignorance: 4 } },
      { text: "禮貌點頭。最低能耗模式。", effect: { composure: 2 } },
      { text: "陪他把故事講完。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 18,
    stage: "human_deep",
    text: "父母第一次住院。強大敘事崩盤，最大人生選項上線。（{{APA}}：重大壓力事件會占用認知資源，使決策品質下降）",
    options: [
      { text: "假裝沒事。情緒暫存匣。", effect: { ignorance: 6 } },
      { text: "忙著辦事，感受先排隊。", effect: { composure: 2, ignorance: 4 } },
      { text: "握著他們的手。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 19,
    stage: "human_deep",
    text: "朋友訊息五個字：「我離婚了。」螢幕很亮，回覆欄很暗。（{{DIGITAL}}：線上通知能秒達——深度安慰卻常卡在輸入框）",
    options: [
      { text: "不知道怎麼回。輸入法當機。", effect: { ignorance: 4 } },
      { text: "講道理安慰。雞湯自動生成。", effect: { wisdom: 2 } },
      { text: "問他在哪，然後出門。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 20,
    stage: "human_deep",
    text: "最好的朋友漸少聯絡。沒吵架，只是方向不同。（{{HEDONIC}}：關係也會享樂適應——不是爆裂，是熱度慢慢降溫）",
    options: [
      { text: "有點失落，但接受。", effect: { composure: 2 } },
      { text: "抱怨對方變了。責任外包。", effect: { anger: 6 } },
      { text: "珍惜曾經陪伴過彼此。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 21,
    stage: "human_deep",
    text: "上班途中想不起為何選這條路。腳還在走，意義先掉線。（{{WHO}}：耗竭常先於意義感崩盤出現——腳比靈魂準時）",
    options: [
      { text: "繼續走。慣性導航開啟。", effect: { ignorance: 6 } },
      { text: "開始懷疑人生。系統自檢。", effect: { wisdom: 5, composure: -2, blessing: 3 } },
      { text: "下班時間重新認識自己。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 22,
    stage: "human_deep",
    text: "有些夢想大概不會實現了。跑步機停了，腳還在空踩。（{{HEDONIC}}：享樂跑步機停下後——空轉本身也是一種痛）",
    options: [
      { text: "假裝不在意。裝死續航。", effect: { ignorance: 6 } },
      { text: "難過很久。情緒全額支付。", effect: { composure: -4, wisdom: 2 } },
      { text: "放下不代表失敗。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 23,
    stage: "human_deep",
    text: "能賺更多，代價是時間大砍。數字很好算，人生不好算。（{{ECONOMICS}}：機會成本從來不開發票——時間欄位永遠空白）",
    options: [
      { text: "當然賺錢。現金優先協議。", effect: { greed: 8 } },
      { text: "猶豫很久。決策緩衝區。", effect: { composure: 2 } },
      { text: "認真排人生優先序。", effect: { wisdom: 4, composure: 2, blessing: 4 } }
    ]
  },
  {
    id: 24,
    stage: "human_deep",
    text: "終於買得起小時候想要的東西。峰值三秒，平坦無限。（{{HEDONIC}}：享樂跑步機——擁有瞬間的爽，會被習慣很快沖淡）",
    options: [
      { text: "再買別的。下一站多巴胺。", effect: { greed: 6 } },
      { text: "懷疑是不是買錯了。", effect: { ignorance: 4 } },
      { text: "原來懷念的不是東西。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 25,
    stage: "human_deep",
    text: "社群回憶跳出：照片笑很大，那天其實很糟。（{{DIGITAL}}：演算法會修圖，記憶也會——線上敘事常覆蓋現場感受）",
    options: [
      { text: "原來記憶也會修圖。", effect: { wisdom: 5, blessing: 3 } },
      { text: "直接滑掉。別開封舊檔。", effect: { ignorance: 4 } },
      { text: "對過去的自己溫柔一點。", effect: { blessing: 4, wisdom: 4 } }
    ]
  },
  {
    id: 26,
    stage: "human_deep",
    text: "現在最快樂的事，跟二十歲完全不同。不是壞掉，是換檔。（{{HEDONIC}}：快樂來源會隨人生階段改變，不代表你失去了熱情）",
    options: [
      { text: "覺得自己老了。標籤亂貼。", effect: { ignorance: 4 } },
      { text: "有點感慨。中速行駛。", effect: { composure: 2 } },
      { text: "原來成長不是變成別人。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 27,
    stage: "human_deep",
    text: "重要的人事物多半不是失去，是慢慢走遠。（{{ECONOMICS}}：損失厭惡對慢離場最無力——痛感被拆成無數小額扣款）",
    options: [
      { text: "開始害怕失去。握得更緊。", effect: { greed: 6, composure: -2 } },
      { text: "感到遺憾。情緒備註完成。", effect: { wisdom: 2 } },
      { text: "珍惜還在身邊的人。", effect: { blessing: 5, wisdom: 4, composure: 2 } }
    ]
  },
  {
    id: 28,
    stage: "human_finale",
    text: "醫生說生命剩一年。最大決策題上線：你要改什麼？（{{APA}}：極端期限會瞬間清空次要決策——只剩核心優先序）",
    options: [
      { text: "拼命完成更多目標。清單至上。", effect: { greed: 8, composure: -2 } },
      { text: "不知道該做什麼。空白答卷。", effect: { ignorance: 8 } },
      { text: "把時間留給真正重要的人。", effect: { wisdom: 4, blessing: 5 } }
    ]
  },
  {
    id: 29,
    stage: "human_finale",
    text: "深夜想起多年沒聯絡的人。推播沒來，大腦自己推。（{{SLEEP}}：夜間醒來的回憶迴圈——最容易偷走下一輪深睡）",
    options: [
      { text: "算了。關閉通知。", effect: { ignorance: 6 } },
      { text: "偷看他社群近況。潛水模式。", effect: { composure: 2, ignorance: 4 } },
      { text: "傳一句：最近好嗎？", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 30,
    stage: "human_finale",
    text: "若今天是最後一天，你最想打電話給誰？（{{ECONOMICS}}：時間機會成本此刻最貴——通訊錄瞬間變成優先序表）",
    options: [
      { text: "客戶。還有款項沒收。", effect: { greed: 4 } },
      { text: "不知道。通訊錄空白。", effect: { ignorance: 6 } },
      { text: "那個真正重要的人。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 31,
    stage: "human_finale",
    text: "若能回到人生任何一天——後悔與懷舊搶同一條跑道。（{{SLEEP}}：反芻與懷舊常在深夜搶頻寬——睡眠品質最先買單）",
    options: [
      { text: "重做某個決定。想改歷史。", effect: { greed: 4, ignorance: 4 } },
      { text: "某個無憂無慮的日子。", effect: { composure: 2 } },
      { text: "其實不回去也沒關係。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 32,
    stage: "human_finale",
    text: "很多問題都沒有答案。追問本身，也開始變消耗。（{{APA}}：決策疲勞晚期——搜尋答案的動作，本身就在抽乾意志力）",
    options: [
      { text: "繼續追答案。搜尋永不下線。", effect: { greed: 6 } },
      { text: "開始失望。系統報錯。", effect: { ignorance: 6 } },
      { text: "接受不是每件事都需要答案。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 33,
    stage: "human_finale",
    text: "有人問：「這一生最重要的東西是什麼？」帳本忽然結不清。（{{ECONOMICS}}：無法折現的價值——最難塞進行為經濟學的欄位）",
    options: [
      { text: "成就。履歷當答案。", effect: { greed: 6 } },
      { text: "我還沒想過。空白欄位。", effect: { ignorance: 6 } },
      { text: "那些曾經真心愛過的人。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 34,
    stage: "human_finale",
    text: "有一天，你的名字會很少被提起。存在感也有半衰期。（{{APA}}：當自我價值綁定外部認可時，沉默容易被誤讀成失去價值）",
    options: [
      { text: "不行，我一定要留下什麼。", effect: { greed: 8 } },
      { text: "有點難過。情緒短暫掉線。", effect: { composure: -2 } },
      { text: "重要的從來不是被記住多久。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 35,
    stage: "human_finale",
    text: "童年照片裡的小孩正看著你。過去的時鐘，撞上現在的疲憊。（{{SLEEP}}：長期睡眠負債會讓「長大好累」的感覺被放大）",
    options: [
      { text: "希望他別知道長大這麼累。", effect: { ignorance: 4 } },
      { text: "告訴他，很多事沒照計畫。", effect: { composure: 2 } },
      { text: "告訴他：辛苦了，你做得很好。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 36,
    stage: "human_finale",
    text: "拿掉職稱、收入、學歷、身份——你還剩什麼？（{{APA}}：標籤卸除後的空白——是決策系統最怕的未定義狀態）",
    options: [
      { text: "突然不知道自己是誰。", effect: { ignorance: 8 } },
      { text: "有點不安。身分驗證失敗。", effect: { composure: -4 } },
      { text: "終於開始認識真正的自己。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 37,
    stage: "human_finale",
    text: "人生最大遺憾是什麼？損失清單開始自動排序。（{{ECONOMICS}}：損失厭惡讓「沒得到」常比「已擁有」佔用更多腦內預算）",
    options: [
      { text: "沒得到的東西。缺貨標籤。", effect: { greed: 6 } },
      { text: "做錯的選擇。回溯失敗。", effect: { ignorance: 4 } },
      { text: "那些沒說出口的愛。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 38,
    stage: "human_finale",
    text: "多年後才懂：人生不是待辦清單。KPI 退場，意義才入場。（{{WHO}}：把自我價值綁在產出時——倦怠會把整張清單一起燒穿）",
    options: [
      { text: "但還是想多完成幾項。", effect: { greed: 4 } },
      { text: "有點晚才懂。延遲收穫。", effect: { composure: 2 } },
      { text: "懂了就不算太晚。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 39,
    stage: "human_finale",
    text: "回顧至今，你最感謝什麼？最後一欄，數字說不準。（{{ECONOMICS}}：陪伴與苦難難報價——帳本最重要的欄位常常空白）",
    options: [
      { text: "那些成功。報酬率亮眼。", effect: { greed: 4 } },
      { text: "那些苦難。學費已付。", effect: { wisdom: 5, blessing: 3 } },
      { text: "那些陪伴。無法折現。", effect: { blessing: 5, wisdom: 4 } }
    ]
  },
  {
    id: 40,
    stage: "human_finale",
    text: "若重來一遍：痛過也愛過——你還願意再活一次嗎？（{{HEDONIC}}：享樂與痛苦都會適應——願不願重來，測的是意義不是峰值）",
    options: [
      { text: "不要。風險評估不過關。", effect: { anger: 6, ignorance: 8 } },
      { text: "只想修改幾個地方。", effect: { composure: 2, wisdom: 5, blessing: 3 } },
      { text: "願意。知道會痛，也願意。", effect: { wisdom: 5, blessing: 5, composure: 4, anger: -8 } }
    ]
  },
  {
    id: 101,
    stage: "human_open",
    hiddenType: "immortal",
    text: "深夜手機沒電，訊息停更，世界忽然安靜。你很久沒有只是坐著。（{{SLEEP}}：關掉藍光後的空白——常是褪黑激素終於有機會上班）",
    options: [
      { text: "立刻找充電器。連線優先。", effect: { ignorance: 4 } },
      { text: "躺著發呆。空窗模式。", effect: { composure: 2 } },
      { text: "安靜坐窗邊看夜色。", effect: { wisdom: 5, composure: 2, immortalValue: 4, blessing: 3 } }
    ]
  },
  {
    id: 102,
    stage: "human_open",
    hiddenType: "immortal",
    text: "公園老人在樹下發呆。什麼都沒做，卻比加班族平靜。（{{APA}}：持續休息與放空並非浪費，也能支持心理恢復）",
    options: [
      { text: "人生不能浪費時間。生產力教條。", effect: { greed: 4 } },
      { text: "拍張照離開。風景變素材。", effect: { composure: 2 } },
      { text: "坐另一張長椅十分鐘。", effect: { wisdom: 5, composure: 3, immortalValue: 6, blessing: 3 } }
    ]
  },
  {
    id: 103,
    stage: "human_open",
    hiddenType: "tech",
    text: "讀到「銀河系可能有數千億顆行星」。煩惱突然縮成小數點。（{{DIGITAL}}：資訊尺度一拉開——社群放大的日常焦慮會瞬間掉比例）",
    options: [
      { text: "滑過去。宇宙太大，先滑。", effect: { ignorance: 4 } },
      { text: "按讚收藏。智慧存草稿。", effect: { wisdom: 2 } },
      { text: "點進去讀完。好奇心連線。", effect: { wisdom: 5, tech: 6, blessing: 3 } }
    ]
  },
  {
    id: 201,
    stage: "human_abyss",
    hiddenType: "immortal",
    text: "朋友問：「這輩子都不成功，你還是你嗎？」你卡關了。（{{APA}}：身分綁死成就標籤時——卸除測驗會觸發決策系統當機）",
    options: [
      { text: "成功就是人生。定義鎖死。", effect: { greed: 6 } },
      { text: "沉默。緩衝區超時。", effect: { composure: 2 } },
      { text: "也許我不是那些標籤。", effect: { wisdom: 4, immortalValue: 6, blessing: 4 } }
    ]
  },
  {
    id: 202,
    stage: "human_abyss",
    hiddenType: "tech",
    text: "如果文明能活一萬年，今天的煩惱還重要嗎？（{{APA}}：時間尺度改變時，人對問題的重要性排序也會改變）",
    options: [
      { text: "感到恐懼。威脅偵測全開。", effect: { anger: 4 } },
      { text: "保持觀望。觀測者模式。", effect: { composure: 2 } },
      { text: "思考人類下一步會是什麼。", effect: { wisdom: 5, tech: 6, blessing: 3 } }
    ]
  },
  {
    id: 203,
    stage: "human_abyss",
    hiddenType: "hybrid",
    text: "宇宙那麼大，人生那麼短。深夜大哉問：到底什麼才重要？（{{HEDONIC}}：物質與刺激退潮後——剩下的問題才開始像問題）",
    options: [
      { text: "賺更多錢。答案外包給帳戶。", effect: { greed: 6 } },
      { text: "不知道。誠實空白。", effect: { ignorance: 6 } },
      { text: "開始思考生命。雙門同時開。", effect: { wisdom: 5, immortalValue: 4, tech: 4, blessing: 3 } }
    ]
  },
  {
    id: 301,
    stage: "human_finale",
    hiddenType: "immortal",
    text: "終於有一個下午：沒人找、沒工作、沒任務。你竟不無聊。（{{SLEEP}}：非睡眠的休息時段——同樣能幫生理時鐘從過載模式降速）",
    options: [
      { text: "找點事情做。空白恐懼症。", effect: { greed: 4 } },
      { text: "睡覺。補眠優先協議。", effect: { composure: 2 } },
      { text: "靜靜感受時間流動。", effect: { wisdom: 4, immortalValue: 9, blessing: 4 } }
    ]
  },
  {
    id: 302,
    stage: "human_finale",
    hiddenType: "tech",
    text: "若能離開地球親眼看銀河，你會想帶走什麼？行李額度有限。（{{DIGITAL}}：線上身分再完整——也塞不進真正離地那一趟的行李）",
    options: [
      { text: "資產。帳本跟到外太空。", effect: { greed: 4 } },
      { text: "履歷。職涯證明跨星系。", effect: { ignorance: 4 } },
      { text: "人類文明留下的故事。", effect: { wisdom: 4, tech: 9, blessing: 4 } }
    ]
  },
  {
    id: 303,
    stage: "human_finale",
    hiddenType: "hybrid",
    text: "向內見心，向外見宇宙。兩邊都沒盡頭——最大的選擇過載。（{{APA}}：無限選項會把探索本身變成另一種決策疲勞）",
    options: [
      { text: "回去追逐更多東西。", effect: { greed: 8 } },
      { text: "覺得人生沒有意義。", effect: { ignorance: 6 } },
      { text: "理解探索本身就是意義。", effect: { wisdom: 5, immortalValue: 8, tech: 8, blessing: 5 } }
    ]
  }
];

// ending list. 數字越高越先採用。同一層用超出門檻的幅度分勝負。
window.humanEnding = {
  // 對齊 15 題縮放後總分。immortalValue／tech 為隱藏線累積，門檻低於主屬性。
  // min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "both-doors",
      priority: 80,
      name: "破壁者",
      min: { immortalValue: 18, tech: 18, wisdom: 75 },
      art: "ending/human_both_doors.jpg",
      text: "心裡跟星空外都是路。\n下一轉，不管仙門星門——\n兩扇門全被你一腳踹開。",
    },
    {
      id: "immortal-door",
      priority: 70,
      name: "半步仙途",
      min: { immortalValue: 10, wisdom: 65 },
      art: "ending/human_immortal_door.jpg",
      text: "把安靜養成了靈氣。\n仙道的門開了——\n去九重天上當高級打工人。",
    },
    {
      id: "alien-door",
      priority: 70,
      name: "外星道",
      min: { tech: 10, wisdom: 65 },
      art: "ending/human_alien_door.jpg",
      text: "地球的爛制度困不住你。\n外星門開了——\n去別的星系繼續宇宙加班。",
    },
    {
      id: "blessed-human",
      priority: 60,
      name: "福報的人",
      min: { blessing: 70, wisdom: 65 },
      max: { immortalValue: 9, tech: 9 },
      art: "ending/human_blessed_human.jpg",
      text: "頂著福報卻活像個工具人。\n自我安慰知足常樂，\n只是捨不得這舒適牢籠。",
    },
    {
      id: "composed-human",
      priority: 50,
      name: "佛系打工人",
      min: { wisdom: 65, composure: 70 },
      max: { blessing: 69, immortalValue: 9, tech: 9 },
      art: "ending/human_composed_human.jpg",
      text: "主打隨緣與躺平。\n不管世界怎麼崩潰，\n你都能面不改色喝咖啡。",
    },
    {
      id: "numb-human",
      priority: 50,
      name: "麻木群眾",
      min: { wisdom: 65 },
      max: { composure: 69, blessing: 69, immortalValue: 9, tech: 9 },
      art: "ending/human_numb_human.jpg",
      text: "道理懂一堆，日子照樣爛。\n冷眼旁觀別人的荒謬，\n轉頭發現自己也陷泥沼。",
    },
    {
      id: "blessing-heavy",
      priority: 40,
      name: "溫水青蛙",
      min: { blessing: 70 },
      max: { wisdom: 64 },
      art: "ending/human_blessing_heavy.jpg",
      text: "生活過得去，腦袋空空。\n在毫無波瀾的舒適圈爛掉，\n完美示範溫水煮青蛙。",
    },
    {
      id: "composed-heavy",
      priority: 40,
      name: "冷漠旁觀者",
      min: { composure: 70 },
      max: { wisdom: 64 },
      art: "ending/human_composed_heavy.jpg",
      text: "情緒穩定，靈魂卻死寂。\n對所有苦難免疫，\n也對所有的快樂無感。",
    },
    {
      id: "chaos-human",
      priority: 30,
      name: "內耗大師",
      above: { greed: 69, anger: 39 },
      max: { wisdom: 64, blessing: 69, composure: 69 },
      art: "ending/human_chaos_human.jpg",
      text: "滿腔貪婪怒火無處發洩。\n在欲望暴躁中反覆撕扯，\n把自己折騰得精疲力竭。",
    },
    {
      id: "average-human",
      priority: 20,
      name: "平凡螺絲釘",
      balanced: 40,
      max: { wisdom: 64, blessing: 69, composure: 69, greed: 69, anger: 49, immortalValue: 9, tech: 9 },
      art: "ending/human_average_human.jpg",
      text: "數值平庸，毫無記憶點。\n標準的免洗螺絲釘，\n默默出生加班到老去。",
    },
    {
      id: "human-battery",
      priority: 0,
      name: "路人甲乙丙",
      art: "ending/human-battery.jpg",
      text: "存在感歸零，NPC嫌戲少。\n在人間當了幾十年背景板，\n最終悄無聲息地登出。",
    },
  ],
};
