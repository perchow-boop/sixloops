window.animalEvents = [
  {
    id: 1,
    stage: "animal_open",
    text: "可頌店排到轉角，朋友說「不吃一次會後悔」。（{{ECONOMICS}}：從眾把排隊本身賣成商品——味道永遠後驗，遺憾先預售）",
    options: [
      { text: "直接入隊。兩小時後，味道輸給回憶預期。", effect: { ignorance: 6, greed: 4 } },
      { text: "先刷評價。越刷越餓，最後還是去了。", effect: { ignorance: 6, greed: 4 } },
      { text: "改買巷口蛋餅。懷疑他們吃的是社會認同。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 2,
    stage: "animal_open",
    text: "群組有人喊某檔「必漲」——附三個驚嘆號當盡職調查。（{{ECONOMICS}}：羊群效應專治「別人買我也買」——驚嘆號不是財務報表）",
    options: [
      { text: "立刻下單。驚嘆號都三個了，還能錯？", effect: { ignorance: 8, greed: 6 } },
      { text: "先問誰買了。大家買，你就買。", effect: { ignorance: 6 } },
      { text: "先問自己看得懂什麼。看不懂就不下注。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 3,
    stage: "animal_open",
    text: "網紅推保溫瓶，你家裡已有五個，渴卻還在。（{{HEDONIC}}：質感影片比真實需求更會結帳——多巴胺先付款，實用後到）",
    options: [
      { text: "直接下單。影片那麼舒服，產品怎麼會差。", effect: { greed: 6, ignorance: 6 } },
      { text: "加購物車觀察三天。三天後，觀察失敗。", effect: { ignorance: 6, greed: 4 } },
      { text: "打開櫃子數瓶子。渴的不是水，是新感。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 4,
    stage: "animal_open",
    text: "聚餐全場火鍋，你嘴裡想壽司，臉上寫「都可以」。（{{APA}}：從眾壓過真實偏好——選擇先投降，胃來買單）",
    options: [
      { text: "火鍋就火鍋。反正人生本來就不重要。", effect: { ignorance: 6, composure: -2 } },
      { text: "內心不爽，嘴上說都可以。標準社交補丁。", effect: { anger: 4, ignorance: 4 } },
      { text: "誠實說想吃壽司。被拒也比沒說出口乾淨。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 5,
    stage: "animal_open",
    text: "全公司在玩同一款手遊，連主管都在抽卡。（{{DIGITAL}}：職場也能變成熱門頁——不跟風先掉線，跟風先掉錢包）",
    options: [
      { text: "下載。你甚至還沒搞懂玩法。", effect: { ignorance: 6 } },
      { text: "玩一週才發現不好玩。社交門票已繳。", effect: { ignorance: 4, greed: 4 } },
      { text: "不跟風。聊天時孤單，餘裕卻很自由。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 6,
    stage: "animal_open",
    text: "短影音挑戰明明很蠢，三百萬人參加後，你開始懷疑是不是自己太落伍。（{{APA}}：群體認同會讓「很多人做」逐漸像「應該做」）",
    options: [
      { text: "立刻拍。三百萬人不可能都錯。", effect: { ignorance: 8 } },
      { text: "笑別人很蠢，同時把影片看到片尾。", effect: { ignorance: 4 } },
      { text: "默默滑走。演算法今天沒餵飽你，也沒吃掉你。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 7,
    stage: "animal_open",
    text: "標題寫「99% 的人都不知道」——你忽然覺得自己該負責知道。（{{ECONOMICS}}：稀缺框架一開，分享反射立刻上線——真相後補）",
    options: [
      { text: "立即轉發。標題有震驚，你有責任。", effect: { ignorance: 6 } },
      { text: "收藏起來。收藏夾是知識的骨灰罈。", effect: { ignorance: 6 } },
      { text: "先看內容再決定。大腦偶爾也上班。", effect: { wisdom: 5, blessing: 3 } }
    ]
  },
  {
    id: 8,
    stage: "animal_open",
    text: "AI 排的人生表，看起來比你自己合理。（{{DIGITAL}}：把決策外包給推薦引擎——自主感先掉線，效率後到帳）",
    options: [
      { text: "完全照做。畢竟它比我聰明。", effect: { ignorance: 6 } },
      { text: "照做八成，留兩成給命運亂數。", effect: { ignorance: 4, composure: 2 } },
      { text: "當參考不當導航。方向盤還在自己手上。", effect: { wisdom: 5, blessing: 3 } }
    ]
  },
  {
    id: 9,
    stage: "animal_open",
    text: "下一支、再下一支——你深信下一支能改命。（{{SLEEP}}：約九成成人睡前仍碰科技——命運暫緩，藍光優先）",
    options: [
      { text: "三小時後抬頭。時間被誰偷走，答案在電量。", effect: { ignorance: 8, composure: -4 } },
      { text: "滑到睡著。結局很安靜，睡眠品質很吵。", effect: { ignorance: 6 } },
      { text: "直接關掉。你選擇結束，不等它結束你。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 10,
    stage: "animal_open",
    text: "朋友邀活動，你沒興趣，拒絕詞卻卡在喉嚨。（{{WHO}}：討好也是一種耗竭——邊界先被磨平，行程後被塞滿）",
    options: [
      { text: "答應。反正自己的人生很好插隊。", effect: { ignorance: 6, composure: -2 } },
      { text: "去現場發呆。出席了，靈魂沒簽到。", effect: { ignorance: 4 } },
      { text: "禮貌拒絕。時間也是資產，不是人情稅。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 11,
    stage: "animal_open",
    text: "長輩群組神奇偏方，留言區全說有效。（{{APA}}：社會認同壓過查證——大腦先下班，謠言先上工）",
    options: [
      { text: "照著試。這麼多人推薦，還能假？", effect: { ignorance: 8 } },
      { text: "先存起來。等哪天生病再當勇士。", effect: { ignorance: 4 } },
      { text: "查證來源。讓大腦先打卡上班。", effect: { wisdom: 5, blessing: 3 } }
    ]
  },
  {
    id: 12,
    stage: "animal_open",
    text: "熱門文章滑到眼前，按讚數比標題還大聲。（{{DIGITAL}}：按讚常先於閱讀——拇指比思考更快，內容比流量更慢）",
    options: [
      { text: "跟著按。反正大家都按。", effect: { ignorance: 6 } },
      { text: "沒看完也按。儀式感完成。", effect: { ignorance: 6 } },
      { text: "看完再決定同不同意。罕見操作。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 13,
    stage: "animal_open",
    text: "演算法推了半年同款內容，你忽然覺得它才懂你。（{{DIGITAL}}：過濾氣泡比朋友更懂你想聽什麼——舒適圈有推播服務）",
    options: [
      { text: "繼續看。舒服最重要。", effect: { ignorance: 8 } },
      { text: "有點不安，但還是繼續看。不安也能訂閱。", effect: { ignorance: 6, wisdom: 2 } },
      { text: "主動搜完全不同的東西。讓世界再大一點。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 14,
    stage: "animal_abyss",
    text: "訂閱又扣款——你忘了它做什麼，它記得你的卡號。（{{ECONOMICS}}：現狀偏誤讓取消比扣款更難——懶惰穿會員皮，每月續約）",
    options: [
      { text: "繼續扣。萬一哪天用到呢。", effect: { ignorance: 8, greed: 4 } },
      { text: "打開看五分鐘又關掉。儀式性續命。", effect: { ignorance: 6 } },
      { text: "取消訂閱。終於承認自己早就沒在用。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 15,
    stage: "animal_abyss",
    text: "主管說流程從來如此，會議室安靜得像默許協議。（{{WHO}}：「一直都這樣」是倦怠最溫柔的溫床——異議先窒息）",
    options: [
      { text: "照做。反正以前的人也這樣。", effect: { ignorance: 6 } },
      { text: "抱怨流程很蠢，然後照做。雙軌並行。", effect: { anger: 4, ignorance: 4 } },
      { text: "試著問流程存在的原因。會議室短暫清醒。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 16,
    stage: "animal_abyss",
    text: "朋友問最近最快樂的事，你突然像當機，只想到工作進度。（{{HEDONIC}}：快樂基準線被日常磨平後——答案會失語，工作會接手）",
    options: [
      { text: "回答不上來，改聊工作。安全話題。", effect: { ignorance: 8 } },
      { text: "說最近追劇不錯。快樂外包給劇情。", effect: { ignorance: 4 } },
      { text: "認真想：自己多久沒真正快樂過。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 17,
    stage: "animal_abyss",
    text: "重大選擇當前，第一反應是問別人怎麼看。（{{APA}}：把決定外包會掏空意志力帳戶——決策疲勞最愛代簽）",
    options: [
      { text: "大家選哪個我就選哪個。民主式逃避。", effect: { ignorance: 8 } },
      { text: "先收集十幾個人的意見。問卷地獄。", effect: { ignorance: 6, composure: 2 } },
      { text: "參考別人，最後自己簽這個名。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 18,
    stage: "animal_abyss",
    text: "聚餐問吃什麼，「我都可以」已成肌肉記憶。（{{APA}}：決策疲勞的出口句——什麼都行，因為懶得想）",
    options: [
      { text: "真的都可以。懶得想也是一種立場。", effect: { ignorance: 6 } },
      { text: "其實有想吃的，但不想講。內耗加餐。", effect: { anger: 4, ignorance: 4 } },
      { text: "第一次說出自己的選擇。世界沒爆炸。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 19,
    stage: "animal_abyss",
    text: "交友軟體左滑右滑半小時——你在找對象，還是在分類？（{{APA}}：選項過多時，人更容易持續比較，而非做決定）",
    options: [
      { text: "繼續滑。總有下一個更好。", effect: { ignorance: 6, greed: 4 } },
      { text: "滑到手酸為止。產能達標。", effect: { ignorance: 6 } },
      { text: "關掉 App。今天先當個人類。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 20,
    stage: "animal_abyss",
    text: "下班進門，手指自己打開了短影音。（{{DIGITAL}}：短影音與推薦機制容易形成自動化使用習慣）",
    options: [
      { text: "兩小時後才抬頭。時間報銷單空白。", effect: { ignorance: 8 } },
      { text: "邊滑邊想停止。想很用力，停很失敗。", effect: { ignorance: 6, composure: -2 } },
      { text: "刻意做別的事。手指抗議，睡眠多謝。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 21,
    stage: "animal_abyss",
    text: "有人問夢想，你腦中只剩指標與截止日。（{{WHO}}：效能感被 KPI 綁架後——夢境也像加班簡報）",
    options: [
      { text: "夢想？先活下來再說。", effect: { ignorance: 8 } },
      { text: "講一個大家都會接受的答案。標準答案庫。", effect: { ignorance: 6 } },
      { text: "開始重新思考這個問題。危險但必要。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 22,
    stage: "animal_abyss",
    text: "影集追完，劇情忘了七成，只剩「好像有看過」。（{{DIGITAL}}：注意力被持續消耗時，內容容易留下時間感，卻留不下記憶）",
    options: [
      { text: "立刻開下一部。空窗恐懼症發作。", effect: { ignorance: 6 } },
      { text: "回去看解說影片。二創補課。", effect: { ignorance: 4 } },
      { text: "突然覺得自己好像不是在看劇。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 23,
    stage: "animal_abyss",
    text: "線上課程躺帳號一年，進度條還在片頭。（{{ECONOMICS}}：沉沒成本——買課永遠比上課容易，收藏等於結業）",
    options: [
      { text: "再買新的。這次一定會學。", effect: { greed: 6, ignorance: 6 } },
      { text: "把課程放收藏夾供奉。數位香火。", effect: { ignorance: 6 } },
      { text: "打開第一章。進度條終於動了。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 24,
    stage: "animal_abyss",
    text: "三百篇「改變人生」文章躺在資料夾，人生沒被改變。（{{ECONOMICS}}：沉沒收藏——存了等於做了，大腦先結案）",
    options: [
      { text: "看到新的繼續存。人生沒改，資料夾先升級。", effect: { ignorance: 8 } },
      { text: "打開其中一篇，看完標題就關。", effect: { ignorance: 4 } },
      { text: "選一篇真正讀完。罕見結案方式。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 25,
    stage: "animal_abyss",
    text: "起床、上班、下班、滑手機、睡覺——精準循環到可怕。（{{WHO}}：自動化生活是溫柔牢籠——耗竭前先麻木，麻木後更穩）",
    options: [
      { text: "這樣很穩定。穩定像溫水。", effect: { ignorance: 6 } },
      { text: "有點難過，但不知道改什麼。", effect: { ignorance: 4, composure: -2 } },
      { text: "先改其中一個習慣。微小叛亂。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 26,
    stage: "animal_abyss",
    text: "需要自己決定時，胸口忽然很不安。（{{APA}}：不確定性放大焦慮——大腦急著找外部答案當止痛）",
    options: [
      { text: "把決定權交給別人。外包安心。", effect: { ignorance: 8 } },
      { text: "拖到最後再決定。截止日當勇氣。", effect: { ignorance: 6 } },
      { text: "承擔不確定性，自己選一次。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 27,
    stage: "animal_abyss",
    text: "朋友又請幫忙，熟悉的「好啊」已到嘴邊。（{{WHO}}：討好反射比真心更快——邊界持續透支，人情卻記你帳）",
    options: [
      { text: "照樣答應。反正習慣了。", effect: { ignorance: 6, composure: -2 } },
      { text: "答應後開始後悔。標準兩段式。", effect: { anger: 4, ignorance: 4 } },
      { text: "禮貌拒絕。世界沒有因此毀滅。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 28,
    stage: "animal_finale",
    text: "手機沒電——沒地圖、沒短影音、沒推薦，你站在街上。（{{DIGITAL}}：當推薦與通知消失，人會重新感受到注意力的空白）",
    options: [
      { text: "立刻找充電器。沒演算法的世界令人不安。", effect: { ignorance: 8, composure: -4 } },
      { text: "無意義滑手機桌面。儀式性抽動。", effect: { ignorance: 6 } },
      { text: "抬頭看四周。原來街道長這樣。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 29,
    stage: "animal_finale",
    text: "導航失靈，你忽然不確定該往哪走。（{{APA}}：導航關掉等於決策裸奔——意志力被迫臨時上線）",
    options: [
      { text: "站原地等人經過再跟著走。", effect: { ignorance: 6 } },
      { text: "亂走一通，希望宇宙負責導航。", effect: { ignorance: 4, composure: -2 } },
      { text: "看路標、問路、自己做判斷。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 30,
    stage: "animal_finale",
    text: "朋友取消同行，旅行變成一個人的行程表。（{{APA}}：當外部評價降低，人更容易察覺真實偏好）",
    options: [
      { text: "直接取消。沒人陪不知道怎麼玩。", effect: { ignorance: 6 } },
      { text: "硬著頭皮出發。尷尬當門票。", effect: { composure: 2, wisdom: 5, blessing: 3 } },
      { text: "第一次認真享受獨處。風景沒要求合照。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 31,
    stage: "animal_finale",
    text: "有人問：沒人按讚，你還會發嗎？（{{DIGITAL}}：表達若綁定按讚——離線後自我也會掉線）",
    options: [
      { text: "不會。沒人聽見的樹倒了也沒意義。", effect: { ignorance: 6, greed: 4 } },
      { text: "可能還是會吧……大概。語氣很虛。", effect: { ignorance: 4 } },
      { text: "會。因為這本來就是我想說的。", effect: { wisdom: 4, composure: 2, blessing: 4 } }
    ]
  },
  {
    id: 32,
    stage: "animal_finale",
    text: "試著一週不看社群，第三天覺得正在錯過世界。（{{DIGITAL}}：FOMO 是數位戒斷標準副作用——社群日均逾兩小時仍嫌不夠）",
    options: [
      { text: "立刻登入。世界需要知道你在線。", effect: { ignorance: 6 } },
      { text: "偷看一下熱門。小劑量維持。", effect: { ignorance: 4 } },
      { text: "發現世界其實沒改變多少。焦慮白忙。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 33,
    stage: "animal_finale",
    text: "沒有建議、沒有評價、沒有方向——只剩你自己。（{{APA}}：外部導航全斷時——意志力必須自己上線，不能請假）",
    options: [
      { text: "感到恐慌。空白太吵。", effect: { ignorance: 6, composure: -4 } },
      { text: "開始一直問別人。尋找替代導航。", effect: { ignorance: 6 } },
      { text: "開始問自己。內建羅盤試運轉。", effect: { wisdom: 4, composure: 2, blessing: 4 } }
    ]
  },
  {
    id: 34,
    stage: "animal_finale",
    text: "工作 A 薪資高，工作 B 你比較喜歡——帳本與心跳互不相讓。（{{ECONOMICS}}：損失厭惡先喊怕——外部意見一稀釋，價值排序就晃）",
    options: [
      { text: "問大家怎麼選。民主式甩鍋。", effect: { ignorance: 6 } },
      { text: "選最多人推薦的。安全感外包。", effect: { ignorance: 6 } },
      { text: "認真面對自己的價值排序。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 35,
    stage: "animal_finale",
    text: "如果沒有演算法，你會主動看什麼？（{{DIGITAL}}：關掉推薦，興趣地圖才會露出真實輪廓——空白不是失敗）",
    options: [
      { text: "不知道。從來都是推什麼看什麼。", effect: { ignorance: 8 } },
      { text: "先看熱門排行。舊習難改。", effect: { ignorance: 4 } },
      { text: "開始尋找真正感興趣的東西。", effect: { wisdom: 5, composure: 2, blessing: 3 } }
    ]
  },
  {
    id: 36,
    stage: "animal_finale",
    text: "今天沒待辦，手機安靜，你卻開始懷疑自己漏了什麼。（{{APA}}：習慣依賴外部安排時，自主選擇反而容易引發焦慮）",
    options: [
      { text: "立刻新增待辦。忙碌比空白令人安心。", effect: { ignorance: 6 } },
      { text: "一直滑手機找事情做。人工忙碌。", effect: { ignorance: 6 } },
      { text: "安靜坐著。第一次發現自己有點陌生。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 37,
    stage: "animal_finale",
    text: "十年後回看，你最想提醒過去的自己什麼？（{{HEDONIC}}：麻痺常從「跟著走」開始——基準線悄悄被帶走）",
    options: [
      { text: "跟著大家走就好。安全第一。", effect: { ignorance: 6 } },
      { text: "努力不要輸。勝負慾續約。", effect: { greed: 4, anger: 2 } },
      { text: "花更多時間理解自己。遲到的提醒。", effect: { wisdom: 4, blessing: 4 } }
    ]
  },
  {
    id: 38,
    stage: "animal_finale",
    text: "翻開童年夢想本，一項都不像績效表。（{{HEDONIC}}：快樂基準線曾屬於你——清單裡沒有 KPI，只有想飛）",
    options: [
      { text: "合上本子。成年人不需要做夢。", effect: { ignorance: 6 } },
      { text: "笑自己幼稚。防禦性幽默。", effect: { ignorance: 4 } },
      { text: "選一個重新開始。幼稚有時很準。", effect: { wisdom: 4, composure: 3, blessing: 4 } }
    ]
  },
  {
    id: 39,
    stage: "animal_finale",
    text: "散步才發現路邊花開了——不知錯過多久。（{{DIGITAL}}：長時間數位刺激會降低對現實環境的注意力）",
    options: [
      { text: "拍照發社群。見證要有流量。", effect: { greed: 4, ignorance: 4 } },
      { text: "看三秒後繼續趕路。風景也打卡。", effect: { ignorance: 4 } },
      { text: "停下來看一會兒。沒有按讚也成立。", effect: { wisdom: 5, composure: 3, blessing: 3 } }
    ]
  },
  {
    id: 40,
    stage: "animal_finale",
    text: "沒推薦、沒導航、沒排行、沒別人意見。忽然所有選擇都回到你面前。。（{{APA}}：當外部依靠都消失時，人終究要為自己做決定）",
    options: [
      { text: "等待別人先走。跟風預備役。", effect: { ignorance: 9 } },
      { text: "跟著人最多的方向前進。群眾導航。", effect: { ignorance: 8, greed: 4 } },
      { text: "深吸一口氣，踏出自己的第一步。", effect: { wisdom: 5, composure: 4, blessing: 5, ignorance: -8 } }
    ]
  }
];

// 八條。數字越高越先採用。帶得走的數值每跨一階換一張卡；定力每世從 40 起算。
window.animalEnding = {
  // 對齊 15 題縮放後總分。min/max 含等號；above 嚴格大於。
  endings: [
    {
      id: "exit",
      priority: 90,
      name: "第一次自己走路",
      min: { wisdom: 100, composure: 85 },
      max: { ignorance: 55 },
      art: "ending/animal_exit.jpg",
      text: "深夜斷電，人生奪回手中。\n覺醒不是獲得解答，\n而是拒絕再由他人代選。",
    },
    {
      id: "free",
      priority: 80,
      name: "牧場逃脫者",
      min: { wisdom: 75, composure: 60 },
      max: { ignorance: 99 },
      art: "ending/animal_free.jpg",
      text: "不再盲目迎合群體。\n這一次，\n你終於開始為自己做決定。",
    },
    {
      id: "recommended",
      priority: 88,
      name: "推薦給你的下一生",
      above: { ignorance: 99 },
      min: { wisdom: 70 },
      art: "ending/animal_recommended.jpg",
      text: "演算法比你更了解你。\n所以下一世的劇本，\n早就替你安排好了。",
    },
    {
      id: "half",
      priority: 60,
      name: "半醒之人",
      min: { wisdom: 55 },
      max: { ignorance: 99 },
      art: "ending/animal_half.jpg",
      text: "迷霧之中你終於意識到：\n那些每天追逐的瘋狂欲望，\n其實根本不是你自己的。",
    },
    {
      id: "keeper",
      priority: 55,
      name: "演算法飼養員",
      above: { ignorance: 99 },
      max: { wisdom: 69 },
      art: "ending/animal_keeper.jpg",
      text: "你以為自己在使用手機，\n滑著無盡的動態牆——\n其實是手機在圈養你。",
    },
    {
      id: "follow",
      priority: 45,
      name: "永遠跟著走",
      above: { ignorance: 69 },
      max: { ignorance: 99, wisdom: 54 },
      art: "ending/animal_follow.jpg",
      text: "大隊往前，你就往前。\n大隊停下，你就停下。\n一生很安全，卻從不知去哪。",
    },
    {
      id: "auto",
      priority: 30,
      name: "自動駕駛人生獎",
      min: { ignorance: 50 },
      max: { ignorance: 69 },
      art: "ending/animal_auto.jpg",
      text: "你的人生安穩又平順，\n因為從出生到現在，\n你根本沒自己開過車。",
    },
    {
      id: "crowd",
      priority: 0,
      name: "跟風王",
      art: "ending/animal_crowd.jpg",
      text: "大家往左，你就跟著向左。\n大家向右，\n你覺得右邊好像也不錯。",
    },
  ],
};
