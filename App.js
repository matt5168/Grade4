// ==========================================
// 1. 單字與文法分立資料庫 (終極完整版 U1 & U2)
// ==========================================
const courseData = {
  "U1": [
    { unit: "Unit 1: Fun Outdoors", word: "climb", partOfSpeech: "verb", translation: "攀爬", example: "He likes climbing trees.", exampleCn: "他喜歡爬樹。", grammar: { title: "動名詞與喜好", content: "What does he like doing? He likes climbing.", note: "動詞後加上 -ing 變為動名詞。" } },
    { unit: "Unit 1: Fun Outdoors", word: "hike", partOfSpeech: "verb", translation: "健行", example: "They like hiking up the hill.", exampleCn: "他們喜歡在山上健行。", grammar: { title: "動名詞變化", content: "hike 變成 hiking", note: "字尾為 e 的動詞，去掉 e 再加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "canoe", partOfSpeech: "verb", translation: "划獨木舟", example: "Does she like canoeing?", exampleCn: "她喜歡划獨木舟嗎？", grammar: { title: "Do/Does 疑問句", content: "Yes, she likes it a lot.", note: "詢問特定喜好使用 Does。" } },
    { unit: "Unit 1: Fun Outdoors", word: "fish", partOfSpeech: "verb", translation: "釣魚", example: "My dad and I like fishing.", exampleCn: "我爸爸和我喜歡釣魚。", grammar: { title: "動名詞", content: "fish 變成 fishing", note: "直接在字尾加上 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "grill hamburgers", partOfSpeech: "phrase", translation: "烤漢堡肉", example: "We like grilling hamburgers.", exampleCn: "我們喜歡烤漢堡肉。", grammar: { title: "動名詞", content: "grill 變成 grilling", note: "直接在字尾加上 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "watch birds", partOfSpeech: "phrase", translation: "賞鳥", example: "She likes watching birds.", exampleCn: "她喜歡賞鳥。", grammar: { title: "動名詞", content: "watch 變成 watching", note: "直接在字尾加上 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "ski", partOfSpeech: "verb", translation: "滑雪", example: "Is he good at skiing?", exampleCn: "他擅長滑雪嗎？", grammar: { title: "表達專長", content: "Yes, he's very good at it.", note: "be good at 加上動名詞。" } },
    { unit: "Unit 1: Fun Outdoors", word: "snowboard", partOfSpeech: "verb", translation: "滑雪板", example: "She isn't good at snowboarding.", exampleCn: "她不擅長滑雪板。", grammar: { title: "表達專長 (否定)", content: "She isn't good at snowboarding.", note: "be 動詞後加 not。" } },
    { unit: "Unit 1: Fun Outdoors", word: "ice-skate", partOfSpeech: "verb", translation: "溜冰", example: "Are you good at ice-skating?", exampleCn: "你擅長溜冰嗎？", grammar: { title: "動名詞變化", content: "ice-skate 變成 ice-skating", note: "去掉字尾 e 再加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "in-line skate", partOfSpeech: "verb", translation: "溜直排輪", example: "He likes in-line skating.", exampleCn: "他喜歡溜直排輪。", grammar: { title: "動名詞變化", content: "in-line skate 變成 in-line skating", note: "去掉字尾 e 再加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "skateboard", partOfSpeech: "verb", translation: "溜滑板", example: "He is good at skateboarding.", exampleCn: "他擅長溜滑板。", grammar: { title: "表達專長", content: "He is good at skateboarding.", note: "be good at 加上動名詞。" } },
    { unit: "Unit 1: Fun Outdoors", word: "surf", partOfSpeech: "verb", translation: "衝浪", example: "Is she good at surfing?", exampleCn: "她擅長衝浪嗎？", grammar: { title: "一般疑問句", content: "No, she's not very good at it.", note: "使用 Is/Are 詢問專長。" } },
    { unit: "Unit 1: Fun Outdoors", word: "wear a helmet", partOfSpeech: "phrase", translation: "戴安全帽", example: "When you go snowboarding, always wear a helmet.", exampleCn: "去滑雪板時，總是戴上安全帽。", grammar: { title: "時間副詞子句", content: "When you go snowboarding...", note: "When 帶出時間點，後接祈使句。" } },
    { unit: "Unit 1: Fun Outdoors", word: "put on sunscreen", partOfSpeech: "phrase", translation: "塗防曬油", example: "Always put on sunscreen.", exampleCn: "總是要塗防曬油。", grammar: { title: "安全提醒", content: "Always put on sunscreen.", note: "原形動詞開頭表示命令或建議。" } },
    { unit: "Unit 1: Fun Outdoors", word: "wear a life jacket", partOfSpeech: "phrase", translation: "穿救生衣", example: "When you go canoeing, wear a life jacket.", exampleCn: "去划獨木舟時，要穿救生衣。", grammar: { title: "時間副詞子句", content: "When you go canoeing...", note: "提醒安全規則。" } },
    { unit: "Unit 1: Fun Outdoors", word: "fasten your seatbelt", partOfSpeech: "phrase", translation: "繫緊安全帶", example: "When you ride in the car, fasten your seatbelt.", exampleCn: "搭車時，要繫緊安全帶。", grammar: { title: "時間副詞子句", content: "When you ride in the car...", note: "確保乘車安全。" } },
    { unit: "Unit 1: Fun Outdoors", word: "don't worry", partOfSpeech: "phrase", translation: "別擔心", example: "Don't worry, be happy.", exampleCn: "別擔心，開心點。", grammar: { title: "祈使句否定", content: "Don't + 原形動詞", note: "用於安撫或勸告。" } },
    { unit: "Unit 1: Fun Outdoors", word: "be good at", partOfSpeech: "phrase", translation: "擅長", example: "I am good at fishing.", exampleCn: "我擅長釣魚。", grammar: { title: "介系詞片語", content: "be good at + V-ing", note: "at 是介系詞，後面接名詞或動名詞。" } },
    { unit: "Unit 1: Fun Outdoors", word: "be careful", partOfSpeech: "phrase", translation: "小心", example: "Be careful on the ice.", exampleCn: "在冰上要小心。", grammar: { title: "祈使句", content: "Be careful.", note: "Be 動詞的祈使句保持原形。" } },
    { unit: "Unit 1: Fun Outdoors", word: "watch out", partOfSpeech: "phrase", translation: "當心 / 注意", example: "Watch out for the rocks!", exampleCn: "當心石頭！", grammar: { title: "感嘆祈使句", content: "Watch out!", note: "用於緊急提醒。" } },
    { unit: "Unit 1: Fun Outdoors", word: "ride in the car", partOfSpeech: "phrase", translation: "搭車", example: "We ride in the car to the park.", exampleCn: "我們搭車去公園。", grammar: { title: "動詞片語", content: "ride in the car", note: "表示乘坐汽車的動作。" } },
    { unit: "Unit 1: Fun Outdoors", word: "play on the beach", partOfSpeech: "phrase", translation: "在海灘玩", example: "They like playing on the beach.", exampleCn: "他們喜歡在海灘玩耍。", grammar: { title: "地方副詞", content: "on the beach", note: "on 用於開放的表面。" } },
    { unit: "Unit 1: Fun Outdoors", word: "have rules", partOfSpeech: "phrase", translation: "有規則", example: "Games have rules.", exampleCn: "遊戲都有規則。", grammar: { title: "動詞與名詞", content: "have rules", note: "rules 是可數名詞複數。" } },
    { unit: "Unit 1: Fun Outdoors", word: "be safe", partOfSpeech: "phrase", translation: "保持安全", example: "Be safe outdoors.", exampleCn: "在戶外保持安全。", grammar: { title: "祈使句", content: "Be safe.", note: "safe 是形容詞，前面需加上 Be 動詞。" } },
    { unit: "Unit 1: Fun Outdoors", word: "swim", partOfSpeech: "verb", translation: "游泳", example: "He likes swimming.", exampleCn: "他喜歡游泳。", grammar: { title: "動名詞變化", content: "swim 變成 swimming", note: "短母音+單子音，重複字尾 m 加 ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "run", partOfSpeech: "verb", translation: "跑步", example: "She likes running.", exampleCn: "她喜歡跑步。", grammar: { title: "動名詞變化", content: "run 變成 running", note: "短母音+單子音，重複字尾 n 加 ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "dance", partOfSpeech: "verb", translation: "跳舞", example: "They like dancing.", exampleCn: "他們喜歡跳舞。", grammar: { title: "動名詞變化", content: "dance 變成 dancing", note: "去掉字尾 e 再加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "cook", partOfSpeech: "verb", translation: "煮飯", example: "I like cooking.", exampleCn: "我喜歡煮飯。", grammar: { title: "動名詞變化", content: "cook 變成 cooking", note: "一般動詞直接加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "sing", partOfSpeech: "verb", translation: "唱歌", example: "We are good at singing.", exampleCn: "我們擅長唱歌。", grammar: { title: "動名詞變化", content: "sing 變成 singing", note: "一般動詞直接加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "read", partOfSpeech: "verb", translation: "閱讀", example: "He is good at reading.", exampleCn: "他擅長閱讀。", grammar: { title: "動名詞變化", content: "read 變成 reading", note: "一般動詞直接加 -ing。" } },
    { unit: "Unit 1: Fun Outdoors", word: "draw", partOfSpeech: "verb", translation: "畫畫", example: "She is good at drawing.", exampleCn: "她擅長畫畫。", grammar: { title: "動名詞變化", content: "draw 變成 drawing", note: "一般動詞直接加 -ing。" } }
  ],
  "U2": [
    { unit: "Unit 2: Land and Sea", word: "hippopotamus (hippo)", partOfSpeech: "noun", translation: "河馬", example: "The hippopotamus is bigger than the panda.", exampleCn: "河馬比熊貓大。", grammar: { title: "比較級句型", content: "bigger than", note: "big 需重複字尾 g 再加 -er。" } },
    { unit: "Unit 2: Land and Sea", word: "gorilla", partOfSpeech: "noun", translation: "大猩猩", example: "The gorilla is the biggest.", exampleCn: "大猩猩是最大的。", grammar: { title: "最高級句型", content: "the biggest", note: "最高級前面必須加上定冠詞 the。" } },
    { unit: "Unit 2: Land and Sea", word: "panda", partOfSpeech: "noun", translation: "熊貓", example: "The panda isn't as big as the hippo.", exampleCn: "熊貓不如河馬大。", grammar: { title: "同級比較否定", content: "isn't as big as", note: "使用 isn't as + 原級 + as。" } },
    { unit: "Unit 2: Land and Sea", word: "butterfly", partOfSpeech: "noun", translation: "蝴蝶", example: "The butterfly is smaller than the bird.", exampleCn: "蝴蝶比鳥小。", grammar: { title: "名詞複數", content: "butterflies", note: "子音+y 結尾，去 y 加 ies。" } },
    { unit: "Unit 2: Land and Sea", word: "caterpillar", partOfSpeech: "noun", translation: "毛毛蟲", example: "The caterpillar is the smallest.", exampleCn: "毛毛蟲是最小的。", grammar: { title: "最高級疑問", content: "Which one is the smallest?", note: "用 Which 詢問哪一個。" } },
    { unit: "Unit 2: Land and Sea", word: "bee", partOfSpeech: "noun", translation: "蜜蜂", example: "The bee is faster than the caterpillar.", exampleCn: "蜜蜂比毛毛蟲快。", grammar: { title: "比較級", content: "faster than", note: "一般單音節加 -er。" } },
    { unit: "Unit 2: Land and Sea", word: "eel", partOfSpeech: "noun", translation: "鰻魚", example: "Is the eel as long as the seal?", exampleCn: "鰻魚有跟海豹一樣長嗎？", grammar: { title: "同級比較", content: "Is the eel as long as...?", note: "詢問兩者是否一樣長。" } },
    { unit: "Unit 2: Land and Sea", word: "seal", partOfSpeech: "noun", translation: "海豹", example: "The seal isn't as long as the whale.", exampleCn: "海豹不如鯨魚長。", grammar: { title: "同級比較否定", content: "isn't as long as", note: "表示沒有和...一樣長。" } },
    { unit: "Unit 2: Land and Sea", word: "dolphin", partOfSpeech: "noun", translation: "海豚", example: "The dolphin is smarter than the shark.", exampleCn: "海豚比鯊魚聰明。", grammar: { title: "比較級", content: "smarter than", note: "單音節加 -er。" } },
    { unit: "Unit 2: Land and Sea", word: "squid", partOfSpeech: "noun", translation: "烏賊", example: "The squid is faster than the crab.", exampleCn: "烏賊比螃蟹快。", grammar: { title: "比較級", content: "faster than", note: "比較兩者特徵。" } },
    { unit: "Unit 2: Land and Sea", word: "whale", partOfSpeech: "noun", translation: "鯨魚", example: "The whale is the longest.", exampleCn: "鯨魚是最長的。", grammar: { title: "最高級", content: "the longest", note: "單音節加 the ... -est。" } },
    { unit: "Unit 2: Land and Sea", word: "shark", partOfSpeech: "noun", translation: "鯊魚", example: "The shark is as dangerous as the crocodile.", exampleCn: "鯊魚和鱷魚一樣危險。", grammar: { title: "同級比較", content: "as dangerous as", note: "使用 as + 原級 + as。" } },
    { unit: "Unit 2: Land and Sea", word: "lizard", partOfSpeech: "noun", translation: "蜥蜴", example: "How long is the lizard?", exampleCn: "這隻蜥蜴多長？", grammar: { title: "詢問長度", content: "How long is...?", note: "How long 詢問長度。" } },
    { unit: "Unit 2: Land and Sea", word: "beetle", partOfSpeech: "noun", translation: "甲蟲", example: "How much does the beetle weigh?", exampleCn: "甲蟲多重？", grammar: { title: "詢問重量", content: "How much does...weigh?", note: "weigh 是動詞。" } },
    { unit: "Unit 2: Land and Sea", word: "crab", partOfSpeech: "noun", translation: "螃蟹", example: "The crab weighs 500 grams.", exampleCn: "這螃蟹重 500 克。", grammar: { title: "重量單位", content: "grams", note: "超過 1 公克加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "octopus", partOfSpeech: "noun", translation: "章魚", example: "The octopus is very heavy.", exampleCn: "這章魚很重。", grammar: { title: "名詞複數", content: "octopuses", note: "字尾 s 加 es。" } },
    { unit: "Unit 2: Land and Sea", word: "aquarium", partOfSpeech: "noun", translation: "水族館", example: "We are at the aquarium.", exampleCn: "我們在水族館。", grammar: { title: "地方介系詞", content: "at the aquarium", note: "at 用於特定的地點。" } },
    { unit: "Unit 2: Land and Sea", word: "which one", partOfSpeech: "phrase", translation: "哪一個", example: "Which one is the biggest?", exampleCn: "哪一個是最大的？", grammar: { title: "疑問詞", content: "Which one...", note: "用來詢問特定群體中的哪一個。" } },
    { unit: "Unit 2: Land and Sea", word: "at work", partOfSpeech: "phrase", translation: "在工作中", example: "My dad is at work.", exampleCn: "我爸爸在上班。", grammar: { title: "介系詞片語", content: "at work", note: "固定搭配用法。" } },
    { unit: "Unit 2: Land and Sea", word: "what about", partOfSpeech: "phrase", translation: "那...呢？", example: "What about the crab?", exampleCn: "那螃蟹呢？", grammar: { title: "反問句型", content: "What about...", note: "用來針對同樣的問題詢問不同的對象。" } },
    { unit: "Unit 2: Land and Sea", word: "how much", partOfSpeech: "phrase", translation: "多少 (重量/不可數)", example: "How much does it weigh?", exampleCn: "它有多重？", grammar: { title: "疑問詞", content: "How much...", note: "詢問重量或不可數名詞的數量。" } },
    { unit: "Unit 2: Land and Sea", word: "how long", partOfSpeech: "phrase", translation: "多長", example: "How long is it?", exampleCn: "它有多長？", grammar: { title: "疑問詞", content: "How long...", note: "詢問時間或物品的長度。" } },
    { unit: "Unit 2: Land and Sea", word: "weigh", partOfSpeech: "verb", translation: "稱重", example: "I weigh the apple.", exampleCn: "我稱蘋果的重量。", grammar: { title: "動詞用法", content: "weigh", note: "注意與名詞 weight 區分。" } },
    { unit: "Unit 2: Land and Sea", word: "weight", partOfSpeech: "noun", translation: "重量", example: "What is its weight?", exampleCn: "它的重量是多少？", grammar: { title: "名詞用法", content: "weight", note: "不可數名詞。" } },
    { unit: "Unit 2: Land and Sea", word: "length", partOfSpeech: "noun", translation: "長度", example: "Measure the length.", exampleCn: "測量長度。", grammar: { title: "名詞用法", content: "length", note: "long 的名詞形態。" } },
    { unit: "Unit 2: Land and Sea", word: "kilogram (kg)", partOfSpeech: "noun", translation: "公斤", example: "It weighs 5 kilograms.", exampleCn: "它重 5 公斤。", grammar: { title: "名詞複數", content: "kilograms", note: "大於 1 時要加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "gram (g)", partOfSpeech: "noun", translation: "公克", example: "1 kilogram is 1000 grams.", exampleCn: "1 公斤是 1000 公克。", grammar: { title: "名詞複數", content: "grams", note: "大於 1 時要加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "meter (m)", partOfSpeech: "noun", translation: "公尺", example: "It is 3 meters long.", exampleCn: "它有 3 公尺長。", grammar: { title: "名詞複數", content: "meters", note: "大於 1 時要加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "centimeter (cm)", partOfSpeech: "noun", translation: "公分", example: "1 meter is 100 centimeters.", exampleCn: "1 公尺是 100 公分。", grammar: { title: "名詞複數", content: "centimeters", note: "大於 1 時要加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "insect", partOfSpeech: "noun", translation: "昆蟲", example: "A bee is an insect.", exampleCn: "蜜蜂是一種昆蟲。", grammar: { title: "冠詞用法", content: "an insect", note: "母音開頭，前面用 an。" } },
    { unit: "Unit 2: Land and Sea", word: "Komodo dragon", partOfSpeech: "noun", translation: "科摩多巨蜥", example: "The Komodo dragon is dangerous.", exampleCn: "科摩多巨蜥很危險。", grammar: { title: "專有名詞", content: "Komodo", note: "字首大寫。" } },
    { unit: "Unit 2: Land and Sea", word: "goliath beetle", partOfSpeech: "noun", translation: "巨人甲蟲", example: "The goliath beetle is big.", exampleCn: "巨人甲蟲很大。", grammar: { title: "複合名詞", content: "goliath beetle", note: "由兩個單字組成的名詞。" } },
    { unit: "Unit 2: Land and Sea", word: "spider crab", partOfSpeech: "noun", translation: "蜘蛛蟹", example: "The spider crab has long legs.", exampleCn: "蜘蛛蟹有長腿。", grammar: { title: "複合名詞", content: "spider crab", note: "由兩個單字組成的名詞。" } },
    { unit: "Unit 2: Land and Sea", word: "giant Pacific octopus", partOfSpeech: "noun", translation: "太平洋巨型章魚", example: "The giant Pacific octopus is smart.", exampleCn: "太平洋巨型章魚很聰明。", grammar: { title: "專有名詞", content: "Pacific", note: "地名首字母大寫。" } },
    { unit: "Unit 2: Land and Sea", word: "crocodile", partOfSpeech: "noun", translation: "鱷魚", example: "The crocodile has sharp teeth.", exampleCn: "鱷魚有尖牙。", grammar: { title: "可數名詞", content: "crocodiles", note: "複直接加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "island", partOfSpeech: "noun", translation: "島嶼", example: "They live on an island.", exampleCn: "他們住在一個島上。", grammar: { title: "冠詞與發音", content: "an island", note: "s 不發音，母音開頭用 an。" } },
    { unit: "Unit 2: Land and Sea", word: "Indonesia", partOfSpeech: "noun", translation: "印尼", example: "Komodo dragons live in Indonesia.", exampleCn: "科摩多巨蜥住在印尼。", grammar: { title: "地方介系詞", content: "in Indonesia", note: "國家或大地方前用 in。" } },
    { unit: "Unit 2: Land and Sea", word: "ground", partOfSpeech: "noun", translation: "地面 / 土地", example: "They sleep in holes in the ground.", exampleCn: "牠們睡在地上的洞裡。", grammar: { title: "介系詞", content: "in the ground", note: "在土地裡用 in。" } },
    { unit: "Unit 2: Land and Sea", word: "distance", partOfSpeech: "noun", translation: "距離", example: "They can walk long distances.", exampleCn: "牠們能走很長的距離。", grammar: { title: "可數名詞", content: "distances", note: "複數直接加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "bacteria", partOfSpeech: "noun", translation: "細菌", example: "It has bad bacteria in its mouth.", exampleCn: "牠嘴裡有壞細菌。", grammar: { title: "不規則複數", content: "bacteria", note: "bacteria 本身即為複數形式 (單數為 bacterium)。" } },
    { unit: "Unit 2: Land and Sea", word: "rough", partOfSpeech: "adjective", translation: "粗糙的", example: "Komodo dragons have rough skin.", exampleCn: "科摩多巨蜥有粗糙的皮膚。", grammar: { title: "形容詞用法", content: "rough skin", note: "形容詞放在名詞前面修飾。" } },
    { unit: "Unit 2: Land and Sea", word: "thick", partOfSpeech: "adjective", translation: "厚的 / 粗的", example: "They have thick scales.", exampleCn: "牠們有厚厚的鱗片。", grammar: { title: "形容詞用法", content: "thick scales", note: "形容詞放在名詞前面修飾。" } },
    { unit: "Unit 2: Land and Sea", word: "scales", partOfSpeech: "noun", translation: "鱗片", example: "Fish and reptiles have scales.", exampleCn: "魚和爬蟲類有鱗片。", grammar: { title: "複數名詞", content: "scales", note: "通常以複數形態出現。" } },
    { unit: "Unit 2: Land and Sea", word: "forked tongue", partOfSpeech: "noun", translation: "分叉的舌頭", example: "It has a long forked tongue.", exampleCn: "牠有長長的分叉舌頭。", grammar: { title: "名詞片語", content: "forked tongue", note: "用形容詞 forked 修飾 tongue。" } },
    { unit: "Unit 2: Land and Sea", word: "female", partOfSpeech: "noun/adjective", translation: "母的 / 雌性", example: "A female dragon lays eggs.", exampleCn: "母巨蜥會產卵。", grammar: { title: "形容詞用法", content: "a female dragon", note: "用來標示動物的性別。" } },
    { unit: "Unit 2: Land and Sea", word: "male", partOfSpeech: "noun/adjective", translation: "公的 / 雄性", example: "They don't need a male.", exampleCn: "牠們不需要雄性。", grammar: { title: "名詞用法", content: "a male", note: "作為名詞代表雄性動物。" } },
    { unit: "Unit 2: Land and Sea", word: "parthenogenesis", partOfSpeech: "noun", translation: "單性生殖", example: "This is called parthenogenesis.", exampleCn: "這被稱為單性生殖。", grammar: { title: "專有名詞", content: "parthenogenesis", note: "科學名詞，通常作不可數使用。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Articles (冠詞)", partOfSpeech: "grammar", translation: "a / an / the", example: "I saw a lion and an elephant. The lion was scary.", exampleCn: "I saw a lion and an elephant. The lion was scary.", grammar: { title: "冠詞用法規則", content: "We use a/an with singular nouns.", note: "子音開頭用 a，母音開頭用 an。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Plural Nouns", partOfSpeech: "grammar", translation: "複數名詞 (f/fe 變化)", example: "One wolf, two wolves.", exampleCn: "一匹狼，兩匹狼。", grammar: { title: "名詞字尾 f 或 fe", content: "Replace 'f' or 'fe' with 'ves'", note: "字尾為 f 或 fe 時，去掉並加上 -ves。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Irregular Plurals", partOfSpeech: "grammar", translation: "不規則複數名詞", example: "One child, two children.", exampleCn: "一個小孩，兩個小孩。", grammar: { title: "不規則變化", content: "child -> children", note: "不加 s。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Comparatives", partOfSpeech: "grammar", translation: "比較級 (-y 結尾)", example: "Pretty becomes prettier.", exampleCn: "Pretty 變成 prettier。", grammar: { title: "雙音節且 -y 結尾", content: "Drop -y and add -ier", note: "去 y 加 ier。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Comparatives", partOfSpeech: "grammar", translation: "比較級 (多音節)", example: "Expensive becomes more expensive.", exampleCn: "Expensive 變成 more expensive。", grammar: { title: "多音節形容詞", content: "more + adjective", note: "前方加 more。" } },
    { unit: "Unit 2: Land and Sea", word: "Grammar: Irregular Adjectives", partOfSpeech: "grammar", translation: "不規則形容詞比較級", example: "Good, better, best.", exampleCn: "好，更好，最好。", grammar: { title: "例外與不規則變化", content: "good -> better", note: "個別記憶。" } }
  ]
};

// ==========================================
// 2. 狀態管理與隨機抽題邏輯
// ==========================================
let activeVocabulary = [];
let currentWord = null;
let currentAudio = null;

function updateActiveVocabulary() {
  activeVocabulary = [];
  const checkboxes = document.querySelectorAll('.unit-checkbox:checked');
  checkboxes.forEach(cb => {
    const unitKey = cb.value;
    if (courseData[unitKey]) activeVocabulary = activeVocabulary.concat(courseData[unitKey]);
  });
  if (activeVocabulary.length === 0) {
    alert("請至少選擇一個單元進行學習喔！");
    return false;
  }
  return true;
}

function loadNextWord() {
  if (!updateActiveVocabulary()) return;
  const randomIndex = Math.floor(Math.random() * activeVocabulary.length);
  currentWord = activeVocabulary[randomIndex];
  renderWordCard(currentWord);
  document.getElementById("chat-log").innerHTML = "";
  document.getElementById("record-status").innerText = "等待指令...";
}

function renderWordCard(data) {
  document.getElementById("word-unit-badge").innerText = data.unit;
  document.getElementById("word-title").innerText = data.word;
  document.getElementById("word-translation").innerText = `${data.partOfSpeech}. ${data.translation}`;
  document.getElementById("word-example").innerText = data.example;
  document.getElementById("word-example-cn").innerText = data.exampleCn;

  const grammarBox = document.getElementById("grammar-box");
  if (data.grammar) {
    grammarBox.style.display = "block";
    document.getElementById("grammar-title").innerText = data.grammar.title;
    document.getElementById("grammar-content").innerText = data.grammar.content;
    document.getElementById("grammar-note").innerText = data.grammar.note;
  } else {
    grammarBox.style.display = "none";
  }
}

// 統一管理 Gemini API Key
const GEMINI_API_KEY = "AIzaSyA6u1hI6uAGHCOWPz7f0gPksZG-0gYrNFc"; 

// ==========================================
// 3. 網頁內建 LOG 紀錄顯示函式
// ==========================================
function addSystemLog(message, isError = false) {
  const logBox = document.getElementById("system-log-box");
  if (!logBox) return;
  const timeStr = new Date().toLocaleTimeString();
  const colorStyle = isError ? "color: #ff4444;" : "color: #00ff66;";
  logBox.innerHTML += `<div style="${colorStyle}">[${timeStr}] ${message}</div>`;
  logBox.scrollTop = logBox.scrollHeight;
}

// ==========================================
// 4. [修正] 專職語音合成 (Gemini 3.8 TTS 引擎)
// ==========================================
async function speakText(text) {
  const engine = document.getElementById("tts-engine-select").value;
  const statusText = document.getElementById("api-status-text");
  addSystemLog(`準備發音 [${engine}]：${text}`);
  
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (engine === "local") {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.getElementById("accent-select").value; 
    utterance.rate = parseFloat(document.getElementById("rate-slider").value);   
    window.speechSynthesis.speak(utterance);
    statusText.innerText = "🔊 內建語音播放中...";
    statusText.style.color = "#1a73e8";
    addSystemLog("本地語音播放中...");
  } else if (engine === "gemini") {
    statusText.innerText = "⏳ 正在請求 Gemini 語音...";
    statusText.style.color = "#1a73e8";
    addSystemLog("正在向 Gemini 3.8 Flash-Lite TTS 發送請求...");

    // 【核心修正】：將 config 改回 generationConfig 並補齊 role
    const requestBody = {
      contents: [{ role: "user", parts: [{ text: text }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } }
        }
      }
    };

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash-lite-tts:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
      
      addSystemLog(`API 回應狀態: ${response.status} ${response.statusText}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "API 請求失敗");
      }
      
      if (data.candidates && data.candidates.length > 0) {
        const parts = data.candidates[0].content.parts;
        const audioPart = parts.find(p => p.inlineData && p.inlineData.mimeType && p.inlineData.mimeType.includes('audio'));
        
        if (audioPart) {
          const base64Audio = audioPart.inlineData.data;
          addSystemLog(`成功取得 WAV 音訊封包，大小: ${base64Audio.length} bytes`);
          
          const binaryString = atob(base64Audio);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);

          const audioBlob = new Blob([bytes.buffer], { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          currentAudio = new Audio(audioUrl);
          currentAudio.onplay = () => {
            addSystemLog("▶️ 雲端語音開始播放");
            statusText.innerText = "▶️ 語音播放中...";
            statusText.style.color = "#2e7d32";
          };
          currentAudio.onended = () => {
            statusText.innerText = "✅ 播放完畢";
            statusText.style.color = "#666";
          };
          currentAudio.onerror = (e) => addSystemLog(`❌ 音訊播放錯誤`, true);
          
          await currentAudio.play().catch(err => {
            addSystemLog(`❌ 播放被阻擋: ${err.message}`, true);
            statusText.innerText = "❌ 播放被阻擋";
            statusText.style.color = "#e53935";
          });
        } else {
          addSystemLog("⚠️ API 回應中未包含音訊資料 (inlineData)", true);
        }
      } else {
        addSystemLog("❌ API 未返回任何內容 (candidates)", true);
      }
    } catch (error) {
      addSystemLog(`❌ 語音合成錯誤: ${error.message}`, true);
    }
  }
}

// ==========================================
// 5. [修正] 分離思考大腦 (Gemini 1.5 Text) 與嘴巴 (3.8 TTS)
// ==========================================
async function sendToGemini(userMessage) {
  appendChatLog("使用者", userMessage, "user");
  const statusText = document.getElementById("api-status-text");
  addSystemLog(`[AI 對話] 使用者輸入: ${userMessage}`);
  
  try {
    document.getElementById("record-status").innerText = "AI 思考中...";
    statusText.innerText = "⏳ AI 思考文字回覆中...";
    statusText.style.color = "#1a73e8";

    const prompt = `You are a friendly English tutor. The student is practicing the word "${currentWord.word}". Reply in English in 1 or 2 simple sentences. Student says: ${userMessage}`;
    const requestBody = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "對話請求失敗");
    
    if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts;
      const textPart = parts.find(p => p.text);
      const replyText = textPart ? textPart.text : "Great job!";
      
      appendChatLog("AI 老師", replyText, "ai");
      document.getElementById("record-status").innerText = "對話完成";
      addSystemLog(`[AI 對話] 成功取得文字回覆: ${replyText}`);
      
      speakText(replyText);
    }
  } catch (error) {
    appendChatLog("系統", "AI 網路連線失敗", "ai");
    document.getElementById("record-status").innerText = "連線失敗";
    addSystemLog(`❌ AI 對話錯誤: ${error.message}`, true);
    statusText.innerText = "❌ 對話失敗";
    statusText.style.color = "#e53935";
  }
}

function appendChatLog(sender, text, type) {
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<div class="chat-msg ${type}"><strong>${sender}:</strong> ${text}</div>`;
  chatLog.scrollTop = chatLog.scrollHeight;
}

// ==========================================
// 6. 語音辨識與事件綁定
// ==========================================
let recognition = null;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  
  recognition.onstart = () => {
    document.getElementById("record-status").innerText = "聆聽中...";
    document.getElementById("btn-record").classList.add("recording");
  };
  recognition.onresult = (e) => {
    document.getElementById("record-status").innerText = "辨識完成";
    sendToGemini(e.results[0][0].transcript);
  };
  recognition.onend = () => document.getElementById("btn-record").classList.remove("recording");
}

document.addEventListener("DOMContentLoaded", () => {
  loadNextWord();

  document.getElementById("btn-next-word").addEventListener("click", loadNextWord);
  document.querySelectorAll('.unit-checkbox').forEach(cb => cb.addEventListener("change", loadNextWord));

  document.getElementById("rate-slider").addEventListener("input", (e) => {
    document.getElementById("rate-display").innerText = `${e.target.value}x`;
  });
  
  document.getElementById("btn-speak-word").addEventListener("click", () => speakText(currentWord.word));
  document.getElementById("btn-speak-example").addEventListener("click", () => speakText(currentWord.example));
  document.getElementById("btn-speak-grammar").addEventListener("click", () => {
    if (currentWord.grammar) speakText(currentWord.grammar.content);
  });

  document.getElementById("btn-clear-log").addEventListener("click", () => {
    document.getElementById("system-log-box").innerHTML = "[System] 紀錄已清除。";
  });

  // 【核心修正】：將測試按鈕的 config 改回 generationConfig 並補齊 role
  document.getElementById("btn-test-api").addEventListener("click", async () => {
    const statusText = document.getElementById("api-status-text");
    statusText.innerText = "測試中...";
    statusText.style.color = "#1a73e8";
    addSystemLog("開始執行 API 連線測試...");

    const requestBody = {
      contents: [{ role: "user", parts: [{ text: "Hello, this is a test." }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } }
      }
    };

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash-lite-tts:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      if (response.ok) {
        statusText.innerText = "✅ API 連線成功！";
        statusText.style.color = "#2e7d32";
        addSystemLog("✅ API 連線測試成功 (Status 200)，金鑰有效。");
      } else {
        const errorMsg = data.error?.message || "未知錯誤";
        statusText.innerText = `❌ 失敗`;
        statusText.style.color = "#e53935";
        addSystemLog(`❌ API 測試失敗: ${errorMsg}`, true);
      }
    } catch (error) {
      statusText.innerText = "❌ 網路異常";
      statusText.style.color = "#e53935";
      addSystemLog(`❌ 網路例外錯誤: ${error.message}`, true);
    }
  });

  document.getElementById("btn-record").addEventListener("click", () => {
    if (window.isSecureContext === false) { 
      alert("請在 HTTPS 網址下執行語音辨識。"); return; 
    }
    if (!recognition) {
      alert("瀏覽器不支援語音辨識。"); return;
    }
    try { recognition.start(); } catch (e) { addSystemLog(`語音辨識啟動錯誤: ${e.message}`, true); }
  });
});