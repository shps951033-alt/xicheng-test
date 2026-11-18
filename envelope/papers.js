/* ══════════════════════════════════════════════════════════════════════
   美術紙選單（紅包袋全客製用）
   建立 2026-11-18｜老闆：「紙材直接用我們現有放在名片上的紙材選單套用進來」

   ★ 這份是從名片報價工具整包搬過來的，**不要在這裡改數字**。
     正本＝營運部\喜成名片報價工具-原始碼-20260624.html 的 ART_PAPERS
     （那份又是從 營運部\紙張牌價-*.md 五家紙廠牌價生成，2026-11-12 全抓官網價）
     牌價有更新 → 先更新名片工具，再把那段整段複製回這裡，兩邊才不會各走各的。

   欄位：name 紙名／grp 下拉選單分組／grades[] 各克數
         g      克數
         price  整張大紙牌價（未稅，取該克數最高色號價）
         perBig 每張大紙可落幾張**名片**（＝ ⌊長÷96mm⌋ × ⌊寬÷60mm⌋）
                ⚠️ 紅包袋不是用這個數字算，見下面 SHEET_BY_PERBIG。
   ══════════════════════════════════════════════════════════════════════ */
var ART_PAPERS = [
  { name:"德國馬諦斯", grades:[     // 聯美 Gmund Colors Matt，70×100cm→110落版；2026-11-12 改官網價（舊 300g 155）
    {g:"100g",price:35,perBig:110},{g:"120g",price:45,perBig:110},{g:"200g",price:70,perBig:110},{g:"240g",price:90,perBig:110},{g:"300g",price:105,perBig:110}
  ]},
  { name:"日本普立紙", grades:[     // 峻揚，43"×31"→143落版
    {g:"233g",price:250,perBig:143},{g:"349g",price:360,perBig:143}
  ]},
  { name:"法國爵士紙", grades:[     // 峻揚，70×100cm→110落版（規範公式⌊長÷96⌋×⌊寬÷60⌋）
    {g:"130g",price:80,perBig:110},{g:"170g",price:115,perBig:110},{g:"260g",price:170,perBig:110}
  ]},
  { name:"森紋紙亮面", grades:[     // 峻揚，43"×31"→143落版
    {g:"110g",price:55,perBig:143},{g:"280g",price:155,perBig:143}
  ]},
  { name:"森紋紙霧面", grades:[     // 峻揚，43"×31"→143落版
    {g:"110g",price:55,perBig:143},{g:"280g",price:140,perBig:143}
  ]},
  { name:"晶漾紙", grades:[     // 峻揚，31"×43"→143落版（取雙面欄）
    {g:"120g",price:50,perBig:143},{g:"160g",price:60,perBig:143},{g:"200g",price:70,perBig:143},{g:"240g",price:80,perBig:143},{g:"285g",price:100,perBig:143}
  ]},
  { name:"奇幻紙", grades:[     // 峻揚，31"×43"→143落版
    {g:"100g",price:46,perBig:143},{g:"120g",price:62,perBig:143},{g:"170g",price:68,perBig:143},{g:"280g",price:100,perBig:143}
  ]},
  { name:"日本再生源綠能卡（灰）", grades:[     // 峻揚，雙面灰，64×94cm→90落版
    {g:"310g",price:28,perBig:90},{g:"350g",price:31,perBig:90},{g:"400g",price:36,perBig:90},{g:"450g",price:40,perBig:90},{g:"500g",price:45,perBig:90},{g:"550g",price:50,perBig:90}
  ]},
  { name:"黑武士", grades:[     // 長盈，31"×43"→143落版；2026-11-12 改官網價（舊 40/60/70/100）
    {g:"120g",price:20,perBig:143},{g:"200g",price:35,perBig:143},{g:"240g",price:40,perBig:143},{g:"360g",price:60,perBig:143}
  ]},
  { name:"美國皮革紙", grades:[  // 長盈 NEENAH Jeans Label，303.4g；27"×39"→112落版、31"×43"→143落版
    {g:"303.4g（27×39）",price:185,perBig:112},{g:"303.4g（31×43）",price:220,perBig:143}
  ]},
  { name:"日本雅子", grades:[       // 長盈，43"×31"→143落版
    {g:"105g",price:58,perBig:143},{g:"140g",price:76,perBig:143},{g:"244g",price:148,perBig:143}
  ]},
  { name:"英國史密斯", grades:[  // 長盈，25"×38"→96落版
    {g:"135g",price:50,perBig:96},{g:"270g",price:95,perBig:96},{g:"350g",price:130,perBig:96}
  ]},
  { name:"英國新百代", grades:[     // 長盈，27"×39"→112落版
    {g:"120g",price:55,perBig:112},{g:"250g",price:120,perBig:112},{g:"300g",price:140,perBig:112},{g:"450g",price:210,perBig:112}
  ]},
  { name:"日本啤酒紙", grades:[     // 峻揚，64×90cm→90落版（白款）
    {g:"120g",price:30,perBig:90},{g:"190g",price:48,perBig:90},{g:"285g",price:72,perBig:90},{g:"480g",price:120,perBig:90},{g:"570g",price:140,perBig:90}
  ]},
  { name:"晶鑽紙", grades:[     // 峻揚，43"×31"→143落版
    {g:"120g",price:40,perBig:143},{g:"160g",price:60,perBig:143},{g:"240g",price:90,perBig:143}
  ]},
  { name:"一般象牙卡", grades:[     // 濬宇象牙大師，31"×43"→143落版
    {g:"120g",price:16,perBig:143},{g:"150g",price:20,perBig:143},{g:"180g",price:24,perBig:143},{g:"210g",price:27,perBig:143},{g:"250g",price:36,perBig:143},{g:"300g",price:43,perBig:143},{g:"350g",price:50,perBig:143},{g:"400g",price:56,perBig:143},{g:"450g",price:62,perBig:143}
  ]},
  { name:"一般黑卡", grades:[       // 濬宇永續環保黑卡，31"×43"→143落版
    {g:"110g",price:16,perBig:143},{g:"180g",price:26,perBig:143},{g:"250g",price:36,perBig:143},{g:"350g",price:50,perBig:143},{g:"400g",price:57,perBig:143},{g:"500g",price:70,perBig:143}
  ]},
  // ===== 紙廠官網牌價（2026-11-12 全抓：恆成／長瑩／大亞／聯美＋峻揚（官網無價，取 Vault 紙樣冊牌價）；每克數取最高色號價、令價÷500、含稅÷1.05、自動選每張名片最省大紙）=====
  // 正本：營運部/紙張牌價-恆成紙業.md、紙張牌價-長盈紙業.md、紙張牌價-大亞紙業.md、紙張牌價-聯美紙業.md、紙張牌價-峻揚紙業.md；grp＝下拉選單分組
  { grp:"美術紙", name:"黎石紙", grades:[ // 恆成
    {g:"120g",price:25,perBig:120},{g:"180g",price:37,perBig:120},{g:"250g",price:50,perBig:120}
  ]},
  { grp:"美術紙", name:"羅紗紙", grades:[ // 恆成
    {g:"81g",price:33,perBig:143},{g:"116g",price:47,perBig:143},{g:"151g",price:62,perBig:143},{g:"198g",price:81,perBig:143},{g:"244g",price:100,perBig:143},{g:"320g",price:131,perBig:143}
  ]},
  { grp:"美術紙", name:"蒝織超白", grades:[ // 恆成
    {g:"116g",price:42,perBig:143},{g:"151g",price:54,perBig:143},{g:"198g",price:70,perBig:143},{g:"244g",price:86,perBig:143},{g:"291g",price:102,perBig:143}
  ]},
  { grp:"美術紙", name:"蒝織色紙", grades:[ // 恆成
    {g:"116g",price:60,perBig:143},{g:"198g",price:100,perBig:143}
  ]},
  { grp:"美術紙", name:"格蒙德裱紙", grades:[ // 恆成
    {g:"120g",price:70,perBig:143},{g:"130g",price:100,perBig:143}
  ]},
  { grp:"美術紙", name:"晨紙", grades:[ // 恆成
    {g:"90g",price:21,perBig:143},{g:"115g",price:29,perBig:143},{g:"225g",price:56,perBig:143},{g:"350g",price:86,perBig:143},{g:"425g",price:100,perBig:143}
  ]},
  { grp:"美術紙", name:"麗革紙", grades:[ // 恆成
    {g:"116g",price:50,perBig:143}
  ]},
  { grp:"美術紙", name:"勒斯緹", grades:[ // 恆成
    {g:"140g",price:28,perBig:143},{g:"200g",price:40,perBig:143},{g:"240g",price:48,perBig:143},{g:"280g",price:56,perBig:143}
  ]},
  { grp:"美術紙", name:"水彩紙 Cottage", grades:[ // 恆成
    {g:"160g",price:39,perBig:143},{g:"220g",price:54,perBig:143},{g:"320g",price:80,perBig:143}
  ]},
  { grp:"美術紙", name:"絲紋白紙", grades:[ // 恆成
    {g:"120g",price:24,perBig:143},{g:"160g",price:31,perBig:143},{g:"240g",price:52,perBig:120},{g:"300g",price:62,perBig:120},{g:"350g",price:75,perBig:120}
  ]},
  { grp:"美術紙", name:"絲紋色紙", grades:[ // 恆成
    {g:"90g",price:28,perBig:143},{g:"100g",price:31,perBig:143},{g:"160g",price:40,perBig:143},{g:"215g",price:45,perBig:120},{g:"280g",price:76,perBig:120}
  ]},
  { grp:"美術紙", name:"慕里洛", grades:[ // 恆成
    {g:"190g",price:58,perBig:110},{g:"260g",price:79,perBig:110},{g:"360g",price:85,perBig:110}
  ]},
  { grp:"美術紙", name:"新歐林紙", grades:[ // 長瑩
    {g:"120g",price:27,perBig:120},{g:"150g",price:34,perBig:120},{g:"300g",price:86,perBig:120}
  ]},
  { grp:"美術紙", name:"煉金紙", grades:[ // 長瑩
    {g:"120g",price:90,perBig:110},{g:"300g",price:215,perBig:110}
  ]},
  { grp:"美術紙", name:"沐蘭紙", grades:[ // 長瑩
    {g:"80g",price:160,perBig:110},{g:"100g",price:65,perBig:110},{g:"120g",price:100,perBig:110},{g:"135g",price:85,perBig:110},{g:"200g",price:125,perBig:110},{g:"300g",price:255,perBig:110},{g:"350g",price:320,perBig:110}
  ]},
  { grp:"美術紙", name:"WILD", grades:[ // 長瑩
    {g:"150g",price:75,perBig:120},{g:"300g",price:150,perBig:120},{g:"450g",price:225,perBig:120},{g:"850g",price:425,perBig:120}
  ]},
  { grp:"美術紙", name:"天鵝絨紙", grades:[ // 長瑩
    {g:"120g",price:80,perBig:120},{g:"250g",price:165,perBig:120},{g:"360g",price:235,perBig:120}
  ]},
  { grp:"美術紙", name:"冰雪紙", grades:[ // 長瑩
    {g:"115g",price:80,perBig:110},{g:"235g",price:160,perBig:110}
  ]},
  { grp:"美術紙", name:"妮芙紙", grades:[ // 長瑩
    {g:"90g",price:40,perBig:110},{g:"230g",price:100,perBig:110}
  ]},
  { grp:"美術紙", name:"卡芙紙（牛皮）", grades:[ // 長瑩
    {g:"100g",price:50,perBig:180}
  ]},
  { grp:"美術紙", name:"魁特紙", grades:[ // 長瑩
    {g:"188g",price:95,perBig:143},{g:"227g",price:115,perBig:143}
  ]},
  { grp:"美術紙", name:"炫光紙", grades:[ // 長瑩
    {g:"120g",price:100,perBig:143},{g:"250g",price:200,perBig:143},{g:"300g",price:130,perBig:90}
  ]},
  { grp:"美術紙", name:"閃蝶紙", grades:[ // 長瑩
    {g:"120g",price:60,perBig:110},{g:"240g",price:105,perBig:110},{g:"250g",price:105,perBig:90}
  ]},
  { grp:"美術紙", name:"儷影彩描紙", grades:[ // 長瑩
    {g:"200g",price:145,perBig:110}
  ]},
  { grp:"美術紙", name:"皮草紙", grades:[ // 長瑩
    {g:"120g",price:115,perBig:110},{g:"300g",price:290,perBig:110}
  ]},
  { grp:"美術紙", name:"SKIN", grades:[ // 長瑩
    {g:"135g",price:120,perBig:110},{g:"270g",price:240,perBig:110},{g:"380g",price:270,perBig:110}
  ]},
  { grp:"美術紙", name:"COSMIC", grades:[ // 長瑩
    {g:"360g",price:270,perBig:110}
  ]},
  { grp:"美術紙", name:"MATTER", grades:[ // 長瑩
    {g:"125g",price:65,perBig:110},{g:"135g",price:70,perBig:110},{g:"270g",price:135,perBig:110},{g:"380g",price:190,perBig:110}
  ]},
  { grp:"美術紙", name:"麗斯毯紋紙", grades:[ // 長瑩
    {g:"100g",price:32,perBig:110},{g:"120g",price:38,perBig:110},{g:"170g",price:58,perBig:110},{g:"250g",price:85,perBig:110},{g:"320g",price:110,perBig:110}
  ]},
  { grp:"美術紙", name:"麗斯格紋紙", grades:[ // 長瑩
    {g:"120g",price:45,perBig:110},{g:"170g",price:70,perBig:110},{g:"250g",price:125,perBig:143},{g:"350g",price:140,perBig:110}
  ]},
  { grp:"美術紙", name:"新波光紙", grades:[ // 長瑩
    {g:"130g",price:65,perBig:110},{g:"260g",price:130,perBig:110}
  ]},
  { grp:"美術紙", name:"圓融紙", grades:[ // 長瑩
    {g:"120g",price:31,perBig:110},{g:"170g",price:44,perBig:110}
  ]},
  { grp:"美術紙", name:"人文紙", grades:[ // 長瑩
    {g:"170g",price:44,perBig:110},{g:"250g",price:65,perBig:110}
  ]},
  { grp:"美術紙", name:"心光紙", grades:[ // 長瑩
    {g:"120g",price:31,perBig:110},{g:"170g",price:44,perBig:110},{g:"250g",price:65,perBig:110},{g:"350g",price:91,perBig:110}
  ]},
  { grp:"美術紙", name:"雲斯紙", grades:[ // 長瑩
    {g:"120g",price:30,perBig:110},{g:"170g",price:43,perBig:110},{g:"270g",price:70,perBig:110}
  ]},
  { grp:"美術紙", name:"條紋剛古紙", grades:[ // 長瑩
    {g:"90g",price:15,perBig:42},{g:"100g",price:16,perBig:42},{g:"120g",price:50,perBig:110},{g:"160g",price:68,perBig:110},{g:"220g",price:95,perBig:110},{g:"300g",price:130,perBig:110}
  ]},
  { grp:"美術紙", name:"純棉剛古紙", grades:[ // 長瑩
    {g:"160g",price:65,perBig:110},{g:"300g",price:130,perBig:110}
  ]},
  { grp:"美術紙", name:"滑面剛古紙", grades:[ // 長瑩
    {g:"90g",price:15,perBig:42},{g:"100g",price:17,perBig:42},{g:"160g",price:72,perBig:110},{g:"220g",price:105,perBig:110},{g:"300g",price:140,perBig:110},{g:"400g",price:185,perBig:110}
  ]},
  { grp:"美術紙", name:"超滑面剛古紙", grades:[ // 長瑩
    {g:"100g",price:18,perBig:42},{g:"120g",price:55,perBig:110},{g:"160g",price:75,perBig:110},{g:"250g",price:120,perBig:110},{g:"320g",price:155,perBig:110}
  ]},
  { grp:"美術紙", name:"影舞剛古紙", grades:[ // 長瑩
    {g:"120g",price:90,perBig:110},{g:"250g",price:190,perBig:110}
  ]},
  { grp:"美術紙", name:"黑太子", grades:[ // 長瑩
    {g:"100g",price:90,perBig:110}
  ]},
  { grp:"美術紙", name:"德國純棉卡", grades:[ // 峻揚
    {g:"110g",price:130,perBig:110},{g:"300g",price:350,perBig:110},{g:"310g",price:400,perBig:110},{g:"450g",price:500,perBig:110},{g:"600g",price:700,perBig:110},{g:"610g",price:800,perBig:110},{g:"900g",price:1000,perBig:110}
  ]},
  { grp:"美術紙", name:"義大利紗蘿紙", grades:[ // 峻揚
    {g:"100g",price:48,perBig:110},{g:"140g",price:85,perBig:110},{g:"200g",price:96,perBig:110},{g:"240g",price:115,perBig:110},{g:"250g",price:100,perBig:110},{g:"300g",price:145,perBig:110}
  ]},
  { grp:"美術紙", name:"日本水蜜桃紙", grades:[ // 峻揚
    {g:"99g",price:70,perBig:143},{g:"100g",price:80,perBig:143},{g:"122g",price:100,perBig:143},{g:"157g",price:95,perBig:143},{g:"204g",price:110,perBig:143},{g:"250g",price:135,perBig:143}
  ]},
  { grp:"美術紙", name:"麻纖紙", grades:[ // 峻揚
    {g:"112g",price:55,perBig:143},{g:"253g",price:125,perBig:143}
  ]},
  { grp:"美術紙", name:"麻烙紙", grades:[ // 峻揚
    {g:"112g",price:55,perBig:143},{g:"192g",price:95,perBig:143}
  ]},
  { grp:"美術紙", name:"雪烙紙", grades:[ // 峻揚
    {g:"90g",price:80,perBig:143},{g:"120g",price:120,perBig:143},{g:"150g",price:165,perBig:143}
  ]},
  { grp:"美術紙", name:"素紙", grades:[ // 峻揚
    {g:"100g",price:45,perBig:143},{g:"220g",price:99,perBig:143}
  ]},
  { grp:"美術紙", name:"Super晶旋紙", grades:[ // 峻揚
    {g:"100g",price:34,perBig:143},{g:"150g",price:50,perBig:143},{g:"220g",price:70,perBig:143},{g:"260g",price:88,perBig:143}
  ]},
  { grp:"美術紙", name:"雲絲紙", grades:[ // 峻揚
    {g:"135g",price:75,perBig:143},{g:"220g",price:120,perBig:143}
  ]},
  { grp:"美術紙", name:"森巴紙", grades:[ // 峻揚
    {g:"120g",price:100,perBig:143}
  ]},
  { grp:"美術紙", name:"森波紙", grades:[ // 峻揚
    {g:"120g",price:60,perBig:143}
  ]},
  { grp:"美術紙", name:"棉緊紙", grades:[ // 峻揚
    {g:"100g",price:32,perBig:143},{g:"105g",price:45,perBig:143},{g:"150g",price:48,perBig:143},{g:"200g",price:64,perBig:143},{g:"300g",price:96,perBig:143}
  ]},
  { grp:"美術紙", name:"日本古月紙", grades:[ // 峻揚
    {g:"105g",price:65,perBig:143}
  ]},
  { grp:"美術紙", name:"毯紋紙", grades:[ // 峻揚
    {g:"100g",price:80,perBig:110}
  ]},
  { grp:"美術紙", name:"美國雅通紙", grades:[ // 峻揚
    {g:"270g",price:50,perBig:143}
  ]},
  { grp:"美術紙", name:"綢紋紙", grades:[ // 峻揚
    {g:"120g",price:70,perBig:143}
  ]},
  { grp:"美術紙", name:"日本再生金莎紙", grades:[ // 峻揚
    {g:"93g",price:100,perBig:143},{g:"128g",price:130,perBig:143}
  ]},
  { grp:"美術紙", name:"星幻紙", grades:[ // 峻揚
    {g:"120g",price:40,perBig:143},{g:"180g",price:60,perBig:143}
  ]},
  { grp:"美術紙", name:"炫采紙", grades:[ // 峻揚
    {g:"225g",price:73,perBig:143},{g:"250g",price:83,perBig:143}
  ]},
  { grp:"美術紙", name:"義大利絲紋紙", grades:[ // 峻揚
    {g:"90g",price:45,perBig:143},{g:"100g",price:45,perBig:143},{g:"160g",price:68,perBig:143},{g:"200g",price:90,perBig:143},{g:"215g",price:100,perBig:143},{g:"240g",price:66,perBig:120},{g:"280g",price:110,perBig:120},{g:"300g",price:110,perBig:143},{g:"350g",price:110,perBig:120}
  ]},
  { grp:"美術紙", name:"隕石黑卡", grades:[ // 峻揚
    {g:"120g",price:30,perBig:143},{g:"240g",price:60,perBig:143},{g:"345g",price:86,perBig:143}
  ]},
  { grp:"美術紙", name:"CP色萊妮", grades:[ // 峻揚
    {g:"90g",price:20,perBig:143},{g:"120g",price:30,perBig:143},{g:"180g",price:40,perBig:143},{g:"240g",price:60,perBig:143}
  ]},
  { grp:"美術紙", name:"牛津紙", grades:[ // 峻揚
    {g:"120g",price:60,perBig:143}
  ]},
  { grp:"美術紙", name:"錦紋紙", grades:[ // 峻揚
    {g:"140g",price:90,perBig:143}
  ]},
  { grp:"美術紙", name:"日本丹迪紙", grades:[ // 峻揚
    {g:"116g",price:50,perBig:143}
  ]},
  { grp:"美術紙", name:"優雅美闊", grades:[ // 峻揚
    {g:"70g",price:55,perBig:143}
  ]},
  { grp:"美術紙", name:"日本風雲紙（平面）", grades:[ // 峻揚
    {g:"128g",price:35,perBig:143},{g:"157g",price:40,perBig:143},{g:"203g",price:50,perBig:143},{g:"250g",price:60,perBig:143},{g:"307g",price:90,perBig:143},{g:"352g",price:100,perBig:143}
  ]},
  { grp:"美術紙", name:"日本風雲紙（條紋／波紋）", grades:[ // 峻揚
    {g:"128g",price:47,perBig:143},{g:"157g",price:58,perBig:143},{g:"203g",price:75,perBig:143},{g:"250g",price:92,perBig:143},{g:"307g",price:113,perBig:143},{g:"352g",price:130,perBig:143}
  ]},
  { grp:"美術紙", name:"義大利永采紙", grades:[ // 峻揚
    {g:"120g",price:38,perBig:143},{g:"160g",price:50,perBig:143},{g:"200g",price:64,perBig:143},{g:"240g",price:77,perBig:143}
  ]},
  { grp:"美術紙", name:"極光彩紙", grades:[ // 峻揚
    {g:"300g",price:45,perBig:72},{g:"410g",price:60,perBig:72},{g:"550g",price:80,perBig:72}
  ]},
  { grp:"美術紙", name:"紅吱吱", grades:[ // 峻揚
    {g:"120g",price:24,perBig:143},{g:"190g",price:30,perBig:143},{g:"240g",price:38,perBig:143},{g:"300g",price:48,perBig:143},{g:"350g",price:60,perBig:143}
  ]},
  { grp:"美術紙", name:"瀟爛紙", grades:[ // 峻揚
    {g:"100g",price:45,perBig:143},{g:"200g",price:90,perBig:143}
  ]},
  { grp:"美術紙", name:"醇萃紙 #02香草拿鐵・#03", grades:[ // 峻揚
    {g:"100g",price:35,perBig:143},{g:"200g",price:70,perBig:143},{g:"300g",price:105,perBig:143}
  ]},
  { grp:"美術紙", name:"醇萃紙 #04～#11", grades:[ // 峻揚
    {g:"100g",price:45,perBig:143},{g:"200g",price:90,perBig:143},{g:"300g",price:135,perBig:143}
  ]},
  { grp:"美術紙", name:"凝石紙", grades:[ // 峻揚
    {g:"133g",price:85,perBig:143}
  ]},
  { grp:"美術紙", name:"尿布紙", grades:[ // 峻揚
    {g:"120g",price:56,perBig:143},{g:"200g",price:95,perBig:143},{g:"300g",price:140,perBig:143}
  ]},
  { grp:"美術紙", name:"珍珠紙 Metallic", grades:[ // 峻揚
    {g:"124g",price:35,perBig:143},{g:"186g",price:48,perBig:143},{g:"246g",price:62,perBig:143},{g:"316g",price:80,perBig:143},{g:"370g",price:95,perBig:143}
  ]},
  { grp:"美術紙", name:"黑嚕嚕", grades:[ // 峻揚
    {g:"90g",price:19,perBig:143},{g:"120g",price:24,perBig:143},{g:"150g",price:30,perBig:143},{g:"200g",price:40,perBig:143},{g:"250g",price:50,perBig:143},{g:"300g",price:60,perBig:143},{g:"350g",price:70,perBig:143},{g:"400g",price:80,perBig:143},{g:"480g",price:90,perBig:143}
  ]},
  { grp:"美術紙", name:"新隕石黑", grades:[ // 峻揚
    {g:"240g",price:60,perBig:143},{g:"360g",price:80,perBig:143}
  ]},
  { grp:"美術紙", name:"波恩斯", grades:[ // 大亞
    {g:"105g",price:28,perBig:120},{g:"350g",price:85,perBig:120}
  ]},
  { grp:"美術紙", name:"芙蓉紙", grades:[ // 大亞
    {g:"128g",price:11,perBig:90},{g:"157g",price:18,perBig:143},{g:"209g",price:26,perBig:143},{g:"256g",price:22,perBig:90}
  ]},
  { grp:"美術紙", name:"柔美紙", grades:[ // 大亞
    {g:"128g",price:17,perBig:143},{g:"200g",price:25,perBig:143},{g:"232g",price:30,perBig:143}
  ]},
  { grp:"美術紙", name:"光采紙", grades:[ // 大亞
    {g:"200g",price:80,perBig:143},{g:"250g",price:100,perBig:143},{g:"300g",price:120,perBig:143}
  ]},
  { grp:"美術紙", name:"羊毛紙(25%羊毛)", grades:[ // 大亞
    {g:"128g",price:88,perBig:143}
  ]},
  { grp:"美術紙", name:"奇光紙", grades:[ // 大亞
    {g:"145g",price:200,perBig:143}
  ]},
  { grp:"美術紙", name:"晶綺紙", grades:[ // 大亞
    {g:"120g",price:50,perBig:143},{g:"200g",price:80,perBig:143},{g:"270g",price:120,perBig:143}
  ]},
  { grp:"美術紙", name:"日本書籍紙", grades:[ // 大亞
    {g:"55g",price:5.6,perBig:143},{g:"70g",price:7.1,perBig:143},{g:"95g",price:9.8,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙I", grades:[ // 大亞
    {g:"0g",price:80,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙II", grades:[ // 大亞
    {g:"0g",price:118,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙III", grades:[ // 大亞
    {g:"0g",price:128,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙IV", grades:[ // 大亞
    {g:"0g",price:70,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙Ⅴ", grades:[ // 大亞
    {g:"0g",price:195,perBig:143}
  ]},
  { grp:"美術紙", name:"手感紙(復古色系)", grades:[ // 大亞
    {g:"0g",price:50,perBig:143}
  ]},
  { grp:"美術紙", name:"風之戀", grades:[ // 大亞
    {g:"81.4g",price:40,perBig:143}
  ]},
  { grp:"美術紙", name:"寶格麗", grades:[ // 大亞
    {g:"105g",price:95,perBig:143},{g:"157g",price:145,perBig:143}
  ]},
  { grp:"美術紙", name:"藝術紙", grades:[ // 大亞
    {g:"80g",price:7,perBig:143},{g:"90g",price:8,perBig:143},{g:"110g",price:9.8,perBig:143}
  ]},
  { grp:"美術紙", name:"慕尼黑", grades:[ // 大亞
    {g:"245g",price:120,perBig:143},{g:"290g",price:140,perBig:143},{g:"335g",price:165,perBig:143}
  ]},
  { grp:"美術紙", name:"水紋紙", grades:[ // 大亞
    {g:"90g",price:18,perBig:143},{g:"216g",price:43,perBig:143}
  ]},
  { grp:"美術紙", name:"萊妮紙", grades:[ // 大亞
    {g:"85g",price:14,perBig:143},{g:"90g",price:18,perBig:143},{g:"176g",price:36,perBig:143},{g:"216g",price:43,perBig:143}
  ]},
  { grp:"美術紙", name:"夏綠蒂", grades:[ // 大亞
    {g:"120g",price:22,perBig:90},{g:"160g",price:30,perBig:90},{g:"220g",price:60,perBig:143},{g:"320g",price:60,perBig:90}
  ]},
  { grp:"美術紙", name:"皇家美術", grades:[ // 大亞
    {g:"186g",price:20,perBig:143},{g:"232g",price:25,perBig:143},{g:"256g",price:28,perBig:143}
  ]},
  { grp:"美術紙", name:"鬱金香", grades:[ // 大亞
    {g:"90g",price:15,perBig:143},{g:"100g",price:17,perBig:143},{g:"130g",price:20,perBig:143},{g:"160g",price:24,perBig:143},{g:"190g",price:20,perBig:90},{g:"210g",price:22,perBig:90},{g:"240g",price:38,perBig:143}
  ]},
  { grp:"美術紙", name:"日本美術紙 (60色）", grades:[ // 大亞
    {g:"122g",price:45,perBig:143}
  ]},
  { grp:"美術紙", name:"京都元素-116g", grades:[ // 大亞
    {g:"116g",price:56,perBig:143}
  ]},
  { grp:"美術紙", name:"京都元素", grades:[ // 大亞
    {g:"151g",price:75,perBig:143},{g:"244g",price:110,perBig:143}
  ]},
  { grp:"美術紙", name:"京都美學-116g", grades:[ // 大亞
    {g:"116g",price:75,perBig:143}
  ]},
  { grp:"美術紙", name:"京都美學", grades:[ // 大亞
    {g:"151g",price:75,perBig:143},{g:"198g",price:90,perBig:143},{g:"244g",price:110,perBig:143}
  ]},
  { grp:"美術紙", name:"彩虹色紙-60g", grades:[ // 大亞
    {g:"60g",price:7,perBig:90}
  ]},
  { grp:"美術紙", name:"彩虹色紙-90g", grades:[ // 大亞
    {g:"90g",price:9,perBig:90}
  ]},
  { grp:"美術紙", name:"彩虹色紙-125g", grades:[ // 大亞
    {g:"125g",price:12,perBig:90}
  ]},
  { grp:"美術紙", name:"彩虹色紙-155g", grades:[ // 大亞
    {g:"155g",price:15,perBig:90}
  ]},
  { grp:"美術紙", name:"彩虹色紙-205g", grades:[ // 大亞
    {g:"205g",price:20,perBig:90}
  ]},
  { grp:"美術紙", name:"螢火蟲-76g", grades:[ // 大亞
    {g:"76g",price:20,perBig:143}
  ]},
  { grp:"美術紙", name:"爵士紙", grades:[ // 大亞
    {g:"83g",price:6,perBig:90},{g:"92g",price:11,perBig:143},{g:"100g",price:12,perBig:143},{g:"115g",price:14,perBig:143}
  ]},
  { grp:"美術紙", name:"螢火蟲-90g", grades:[ // 大亞
    {g:"90g",price:24,perBig:143}
  ]},
  { grp:"美術紙", name:"螢火蟲-125g", grades:[ // 大亞
    {g:"125g",price:32,perBig:143}
  ]},
  { grp:"美術紙", name:"柏拉圖", grades:[ // 大亞
    {g:"55g",price:5.6,perBig:143},{g:"65g",price:4.4,perBig:90},{g:"70g",price:7.1,perBig:143},{g:"80g",price:8.2,perBig:143}
  ]},
  { grp:"美術紙", name:"天堂鳥", grades:[ // 大亞
    {g:"65g",price:4.4,perBig:90},{g:"75g",price:7.76,perBig:143},{g:"85g",price:8.8,perBig:143},{g:"95g",price:9.8,perBig:143},{g:"105g",price:7.4,perBig:90},{g:"130g",price:13.9,perBig:143}
  ]},
  { grp:"美術紙", name:"淺草紙", grades:[ // 大亞
    {g:"105g",price:55,perBig:143},{g:"125g",price:65,perBig:143}
  ]},
  { grp:"美術紙", name:"棉花糖", grades:[ // 大亞
    {g:"120g",price:21,perBig:110}
  ]},
  { grp:"美術紙", name:"瑹工紙", grades:[ // 大亞
    {g:"83g",price:10,perBig:143},{g:"92g",price:11,perBig:143},{g:"100g",price:12,perBig:143},{g:"115g",price:14,perBig:143},{g:"140g",price:17,perBig:143}
  ]},
  { grp:"美術紙", name:"凡賽斯", grades:[ // 大亞
    {g:"150g",price:30,perBig:120},{g:"320g",price:65,perBig:120}
  ]},
  { grp:"美術紙", name:"經典聖經", grades:[ // 大亞
    {g:"60g",price:8,perBig:90}
  ]},
  { grp:"美術紙", name:"貢多拉 (紅絲絨/羅曼灰)", grades:[ // 大亞
    {g:"100g",price:85,perBig:110}
  ]},
  { grp:"美術紙", name:"皮革紙", grades:[ // 大亞
    {g:"116g",price:55,perBig:143}
  ]},
  { grp:"美術紙", name:"德國包皓斯紙", grades:[ // 聯美
    {g:"120g",price:40,perBig:120},{g:"130g",price:70,perBig:90},{g:"250g",price:79,perBig:120},{g:"300g",price:96,perBig:120},{g:"310g",price:130,perBig:90}
  ]},
  { grp:"美術紙", name:"德國高級皮紋紙", grades:[ // 聯美
    {g:"100g",price:65,perBig:110},{g:"110g",price:86,perBig:110},{g:"120g",price:64,perBig:110},{g:"130g",price:110,perBig:110},{g:"300g",price:162,perBig:110},{g:"310g",price:285,perBig:110}
  ]},
  { grp:"美術紙", name:"日本巴川紙", grades:[ // 聯美
    {g:"52g",price:14,perBig:143},{g:"68g",price:18,perBig:143}
  ]},
  { grp:"美術紙", name:"德國彩艷紙", grades:[ // 聯美
    {g:"100g",price:14,perBig:143},{g:"135g",price:19,perBig:143},{g:"150g",price:21,perBig:143},{g:"170g",price:15,perBig:90}
  ]},
  { grp:"美術紙", name:"德國源彤紙", grades:[ // 聯美
    {g:"115g",price:12,perBig:90},{g:"135g",price:20,perBig:143},{g:"150g",price:22,perBig:143},{g:"170g",price:26,perBig:143},{g:"200g",price:31,perBig:143},{g:"250g",price:39,perBig:143},{g:"300g",price:47,perBig:143}
  ]},
  { grp:"美術紙", name:"韓國星艷紙", grades:[ // 聯美
    {g:"100g",price:16,perBig:143},{g:"130g",price:19,perBig:143},{g:"160g",price:23,perBig:143},{g:"190g",price:28,perBig:143},{g:"210g",price:31,perBig:143},{g:"230g",price:35,perBig:143},{g:"260g",price:41,perBig:143}
  ]},
  { grp:"美術紙", name:"韓國奇艷紙象牙紋", grades:[ // 聯美
    {g:"90g",price:15,perBig:143},{g:"100g",price:17,perBig:143},{g:"130g",price:20,perBig:143},{g:"160g",price:24,perBig:143},{g:"190g",price:29,perBig:143},{g:"210g",price:32,perBig:143},{g:"240g",price:38,perBig:143},{g:"270g",price:43,perBig:143}
  ]},
  { grp:"美術紙", name:"美國高級橡木紙", grades:[ // 聯美
    {g:"118g",price:28,perBig:100},{g:"270g",price:94,perBig:110}
  ]},
  { grp:"美術紙", name:"美國高級皇冠純棉紙", grades:[ // 聯美
    {g:"120g",price:90,perBig:100},{g:"297g",price:280,perBig:110},{g:"595g",price:280,perBig:48}
  ]},
  { grp:"美術紙", name:"美國高級酒標紙", grades:[ // 聯美
    {g:"89g",price:40,perBig:20}
  ]},
  { grp:"美術紙", name:"美國啤酒紙", grades:[ // 聯美
    {g:"189g",price:72,perBig:143},{g:"270g",price:90,perBig:110},{g:"427g",price:156,perBig:110}
  ]},
  { grp:"美術紙", name:"美國高級絲絨紙", grades:[ // 聯美
    {g:"300g",price:256,perBig:110}
  ]},
  { grp:"美術紙", name:"美國高級馬卡龍", grades:[ // 聯美
    {g:"89g",price:24,perBig:81},{g:"176g",price:39,perBig:81}
  ]},
  { grp:"美術紙", name:"美國高級晶圓紙", grades:[ // 聯美
    {g:"118g",price:31,perBig:100},{g:"216g",price:64,perBig:110},{g:"270g",price:104,perBig:110},{g:"352g",price:116,perBig:110}
  ]},
  { grp:"美術紙", name:"德國清凝/杉形紙", grades:[ // 聯美
    {g:"110g",price:150,perBig:110},{g:"130g",price:130,perBig:110},{g:"250g",price:220,perBig:110},{g:"310g",price:275,perBig:110}
  ]},
  { grp:"美術紙", name:"德國大地之母", grades:[ // 聯美
    {g:"350g",price:200,perBig:110}
  ]},
  { grp:"文化／印書用紙", name:"維納斯象牙", grades:[ // 恆成
    {g:"100g",price:12,perBig:143},{g:"120g",price:16,perBig:143},{g:"150g",price:20,perBig:143},{g:"180g",price:24,perBig:143},{g:"220g",price:30,perBig:143},{g:"270g",price:40,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯淺米象牙", grades:[ // 恆成
    {g:"100g",price:14,perBig:143},{g:"120g",price:18,perBig:143},{g:"150g",price:22,perBig:143},{g:"180g",price:27,perBig:143},{g:"220g",price:33,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯萊妮紙", grades:[ // 恆成
    {g:"100g",price:17,perBig:143},{g:"120g",price:22,perBig:143},{g:"150g",price:27,perBig:143},{g:"180g",price:31,perBig:143},{g:"220g",price:40,perBig:143},{g:"270g",price:48,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯細紋紙", grades:[ // 恆成
    {g:"100g",price:17,perBig:143},{g:"120g",price:22,perBig:143},{g:"150g",price:27,perBig:143},{g:"180g",price:31,perBig:143},{g:"220g",price:40,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯麗綺紙", grades:[ // 恆成
    {g:"120g",price:20,perBig:143},{g:"220g",price:36,perBig:143},{g:"270g",price:48,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯安格紙", grades:[ // 恆成
    {g:"120g",price:20,perBig:143},{g:"220g",price:36,perBig:143},{g:"270g",price:48,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯錦紋紙", grades:[ // 恆成
    {g:"100g",price:15,perBig:143},{g:"150g",price:24,perBig:143},{g:"220g",price:36,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"維納斯沐光紙", grades:[ // 恆成
    {g:"120g",price:16,perBig:143},{g:"150g",price:20,perBig:143},{g:"200g",price:27,perBig:143},{g:"240g",price:33,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"凝雪映畫", grades:[ // 恆成
    {g:"100g",price:13.6,perBig:143},{g:"120g",price:16.3,perBig:143},{g:"140g",price:19,perBig:143},{g:"170g",price:23,perBig:143},{g:"200g",price:27,perBig:143},{g:"240g",price:33,perBig:143},{g:"290g",price:41,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"米色映畫", grades:[ // 恆成
    {g:"120g",price:17.2,perBig:143},{g:"140g",price:20,perBig:143},{g:"200g",price:29,perBig:143},{g:"240g",price:35,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"凝雪歐采", grades:[ // 恆成
    {g:"100g",price:13.6,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"雪韻", grades:[ // 恆成
    {g:"120g",price:19,perBig:143},{g:"150g",price:23,perBig:143},{g:"180g",price:27,perBig:143},{g:"210g",price:31,perBig:143},{g:"250g",price:37,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"雪莎", grades:[ // 恆成
    {g:"100g",price:14.3,perBig:143},{g:"140g",price:20,perBig:143},{g:"200g",price:29,perBig:143},{g:"240g",price:35,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"安格映畫", grades:[ // 恆成
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"六玉映畫", grades:[ // 恆成
    {g:"140g",price:24,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"萊妮映畫", grades:[ // 恆成
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"細紋映畫", grades:[ // 恆成
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"雅紋映畫", grades:[ // 恆成
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"麗奇映畫", grades:[ // 恆成
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"ProLUX 春日雪", grades:[ // 恆成
    {g:"84g",price:11,perBig:143},{g:"98g",price:13,perBig:143},{g:"125g",price:18,perBig:143},{g:"160g",price:23,perBig:143},{g:"185g",price:27,perBig:143},{g:"230g",price:33,perBig:143},{g:"275g",price:40,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"ProLUX 秋月吟", grades:[ // 恆成
    {g:"84g",price:11,perBig:143},{g:"98g",price:13,perBig:143},{g:"125g",price:18,perBig:143},{g:"160g",price:23,perBig:143},{g:"185g",price:27,perBig:143},{g:"230g",price:33,perBig:143},{g:"275g",price:40,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"新浪潮V系列", grades:[ // 恆成
    {g:"122g",price:36,perBig:143},{g:"151g",price:46,perBig:143},{g:"175g",price:55,perBig:143},{g:"227g",price:73,perBig:143},{g:"273g",price:85,perBig:143},{g:"320g",price:105,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"新浪潮G系列", grades:[ // 恆成
    {g:"151g",price:44,perBig:143},{g:"175g",price:52,perBig:143},{g:"227g",price:70,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"新浪潮F系列", grades:[ // 恆成
    {g:"105g",price:34,perBig:143},{g:"128g",price:42,perBig:143},{g:"157g",price:51,perBig:143},{g:"209g",price:69,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"艾若薇", grades:[ // 恆成
    {g:"105g",price:29,perBig:143},{g:"128g",price:35,perBig:143},{g:"151g",price:42,perBig:143},{g:"186g",price:51,perBig:143},{g:"233g",price:64,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"日標 B7", grades:[ // 恆成
    {g:"92g",price:14,perBig:143},{g:"100g",price:15.5,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"日標 HUWA HUWA", grades:[ // 恆成
    {g:"75g",price:12,perBig:143},{g:"80g",price:13,perBig:143},{g:"85g",price:13.9,perBig:143},{g:"105g",price:18,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"日本王子美樂紙", grades:[ // 恆成
    {g:"105g",price:21,perBig:143},{g:"128g",price:26,perBig:143},{g:"157g",price:32,perBig:143},{g:"209g",price:42,perBig:143},{g:"233g",price:49,perBig:143},{g:"262g",price:56,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"彩畫紙", grades:[ // 恆成
    {g:"120g",price:20,perBig:120},{g:"160g",price:33,perBig:143},{g:"220g",price:45,perBig:143},{g:"320g",price:56,perBig:120}
  ]},
  { grp:"文化／印書用紙", name:"日本AP中性紙", grades:[ // 恆成
    {g:"80g",price:16,perBig:143},{g:"120g",price:24,perBig:143},{g:"157g",price:31,perBig:143},{g:"186g",price:38,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"肯特紙", grades:[ // 恆成
    {g:"115g",price:18,perBig:143},{g:"200g",price:30,perBig:143},{g:"250g",price:38,perBig:143},{g:"300g",price:48,perBig:143},{g:"350g",price:58,perBig:143},{g:"400g",price:62,perBig:110}
  ]},
  { grp:"文化／印書用紙", name:"中性手感象牙紙", grades:[ // 長瑩
    {g:"120g",price:15,perBig:143},{g:"180g",price:23,perBig:143},{g:"240g",price:30,perBig:143},{g:"300g",price:40,perBig:143},{g:"350g",price:47,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"歐林紙", grades:[ // 長瑩
    {g:"90g",price:17,perBig:120},{g:"120g",price:23,perBig:120}
  ]},
  { grp:"文化／印書用紙", name:"阿里郎輕塗紙", grades:[ // 長瑩
    {g:"129g",price:22,perBig:143},{g:"155g",price:26,perBig:143},{g:"179g",price:30,perBig:143},{g:"248g",price:45,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"新超感輕塗紙", grades:[ // 長瑩
    {g:"105g",price:14,perBig:143},{g:"128g",price:16,perBig:143},{g:"157g",price:20,perBig:143},{g:"186g",price:23,perBig:143},{g:"210g",price:26,perBig:143},{g:"256g",price:35,perBig:143},{g:"300g",price:41,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"韓國壓紋輕塗紙", grades:[ // 長瑩
    {g:"128g",price:21,perBig:143},{g:"256g",price:42,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"中性柔彩紙", grades:[ // 峻揚
    {g:"120g",price:18,perBig:143},{g:"150g",price:22.5,perBig:143},{g:"180g",price:27,perBig:143},{g:"210g",price:31.5,perBig:143},{g:"250g",price:38,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"中性高彩紙", grades:[ // 峻揚
    {g:"100g",price:14,perBig:143},{g:"120g",price:18,perBig:143},{g:"140g",price:20,perBig:143},{g:"170g",price:23,perBig:143},{g:"200g",price:29,perBig:143},{g:"240g",price:35,perBig:143},{g:"290g",price:41,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"美彩壓紋系列", grades:[ // 峻揚
    {g:"120g",price:21,perBig:143},{g:"140g",price:24,perBig:143},{g:"170g",price:29,perBig:143},{g:"200g",price:34,perBig:143},{g:"240g",price:42,perBig:143},{g:"290g",price:55,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"超白棉彩紙", grades:[ // 峻揚
    {g:"105g",price:14,perBig:143},{g:"128g",price:17.5,perBig:143},{g:"157g",price:21.5,perBig:143},{g:"186g",price:25.5,perBig:143},{g:"209g",price:28.5,perBig:143},{g:"256g",price:35,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"日本滑面象牙紙", grades:[ // 峻揚
    {g:"105g",price:27,perBig:143},{g:"128g",price:33,perBig:143},{g:"157g",price:40,perBig:143},{g:"186g",price:47,perBig:143},{g:"209g",price:53,perBig:143},{g:"233g",price:60,perBig:143},{g:"262g",price:67,perBig:143},{g:"290g",price:75,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"CP象牙紙", grades:[ // 峻揚
    {g:"100g",price:14,perBig:143},{g:"120g",price:18,perBig:143},{g:"150g",price:22,perBig:143},{g:"180g",price:27,perBig:143},{g:"220g",price:33,perBig:143},{g:"270g",price:40,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"CP萊妮紙", grades:[ // 峻揚
    {g:"100g",price:17,perBig:143},{g:"120g",price:22,perBig:143},{g:"150g",price:27,perBig:143},{g:"180g",price:31,perBig:143},{g:"220g",price:40,perBig:143},{g:"270g",price:48,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"好印紙", grades:[ // 峻揚
    {g:"100g",price:12,perBig:143},{g:"120g",price:16,perBig:143},{g:"150g",price:20,perBig:143},{g:"180g",price:24,perBig:143},{g:"210g",price:30,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"美階晶彩", grades:[ // 峻揚
    {g:"105g",price:14.4,perBig:143},{g:"120g",price:16.3,perBig:143},{g:"140g",price:19,perBig:143},{g:"170g",price:23,perBig:143},{g:"200g",price:27,perBig:143},{g:"240g",price:33,perBig:143},{g:"290g",price:41,perBig:143}
  ]},
  { grp:"文化／印書用紙", name:"藍帶晶彩", grades:[ // 峻揚
    {g:"90g",price:12.3,perBig:143},{g:"105g",price:14.4,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"單面壹級卡", grades:[ // 恆成
    {g:"220g",price:19.8,perBig:143},{g:"240g",price:21.6,perBig:143},{g:"280g",price:25.2,perBig:143},{g:"300g",price:27,perBig:143},{g:"330g",price:29.6,perBig:143},{g:"380g",price:34.6,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"雙面壹級卡", grades:[ // 恆成
    {g:"220g",price:20.8,perBig:143},{g:"240g",price:22.6,perBig:143},{g:"260g",price:24,perBig:143},{g:"300g",price:28,perBig:143},{g:"350g",price:34.2,perBig:143},{g:"400g",price:40.8,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"亮面頂級卡", grades:[ // 恆成
    {g:"250g",price:23.8,perBig:143},{g:"350g",price:35,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"雙威卡", grades:[ // 恆成
    {g:"450g",price:53,perBig:143},{g:"610g",price:72,perBig:143},{g:"770g",price:92,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"林感卡", grades:[ // 恆成
    {g:"330g",price:34,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"芬蘭安索白卡", grades:[ // 恆成
    {g:"230g",price:15.5,perBig:143},{g:"300g",price:19.5,perBig:143},{g:"350g",price:22.5,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"西岩森活卡", grades:[ // 恆成
    {g:"244g",price:18,perBig:143},{g:"285g",price:21,perBig:143},{g:"301g",price:22.4,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"新浪厚卡", grades:[ // 恆成
    {g:"180g",price:48,perBig:143},{g:"240g",price:64,perBig:143},{g:"280g",price:75,perBig:143},{g:"310g",price:83,perBig:143},{g:"350g",price:94,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"凝雪厚卡", grades:[ // 恆成
    {g:"330g",price:50,perBig:143},{g:"360g",price:56,perBig:143},{g:"390g",price:60,perBig:143},{g:"470g",price:78,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"韻久日本灰卡", grades:[ // 恆成
    {g:"350g",price:30,perBig:143},{g:"400g",price:34,perBig:143},{g:"450g",price:38,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"墨山日本灰卡", grades:[ // 恆成
    {g:"350g",price:25,perBig:143},{g:"400g",price:28,perBig:143},{g:"450g",price:32,perBig:143},{g:"650g",price:46,perBig:143},{g:"750g",price:53,perBig:143},{g:"850g",price:60,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"德國環保棉卡", grades:[ // 長瑩
    {g:"600g",price:360,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"伊東卡", grades:[ // 長瑩
    {g:"310g",price:70,perBig:90},{g:"490g",price:110,perBig:90},{g:"600g",price:135,perBig:90}
  ]},
  { grp:"卡紙／厚卡", name:"安藤卡", grades:[ // 長瑩
    {g:"260g",price:65,perBig:143},{g:"310g",price:76,perBig:143},{g:"370g",price:90,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"酒墊卡", grades:[ // 長瑩
    {g:"300g",price:55,perBig:88}
  ]},
  { grp:"卡紙／厚卡", name:"日本和牛卡", grades:[ // 峻揚
    {g:"260g",price:70,perBig:143},{g:"310g",price:85,perBig:143},{g:"370g",price:100,perBig:143},{g:"465g",price:125,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"華儷卡", grades:[ // 峻揚
    {g:"250g",price:27,perBig:143},{g:"310g",price:34,perBig:143},{g:"370g",price:42,perBig:143},{g:"430g",price:50,perBig:143},{g:"470g",price:53,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"原儷卡", grades:[ // 峻揚
    {g:"105g",price:10.5,perBig:143},{g:"128g",price:13,perBig:143},{g:"157g",price:16,perBig:143},{g:"186g",price:20,perBig:143},{g:"225g",price:24,perBig:143},{g:"250g",price:27,perBig:143},{g:"310g",price:34,perBig:143},{g:"370g",price:42,perBig:143},{g:"430g",price:50,perBig:143},{g:"470g",price:53,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"美階雪紡", grades:[ // 峻揚
    {g:"260g",price:24,perBig:143},{g:"300g",price:29,perBig:143},{g:"370g",price:36,perBig:143},{g:"430g",price:42,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"雪紡琉麗", grades:[ // 峻揚
    {g:"260g",price:31,perBig:143},{g:"300g",price:36,perBig:143},{g:"370g",price:45,perBig:143},{g:"430g",price:52,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"雪柔紙", grades:[ // 大亞
    {g:"90g",price:22,perBig:143},{g:"150g",price:38,perBig:143},{g:"200g",price:50,perBig:143},{g:"250g",price:40,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"奇儷紙", grades:[ // 大亞
    {g:"100g",price:23,perBig:143},{g:"130g",price:30,perBig:143},{g:"190g",price:45,perBig:143},{g:"250g",price:58,perBig:143},{g:"300g",price:70,perBig:143},{g:"350g",price:85,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"香氛紙", grades:[ // 大亞
    {g:"100g",price:23,perBig:143},{g:"130g",price:30,perBig:143},{g:"190g",price:45,perBig:143},{g:"250g",price:58,perBig:143},{g:"300g",price:70,perBig:143},{g:"350g",price:85,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"米蘭", grades:[ // 大亞
    {g:"100g",price:30,perBig:110},{g:"200g",price:60,perBig:110},{g:"300g",price:90,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"法藍", grades:[ // 大亞
    {g:"100g",price:30,perBig:110},{g:"200g",price:60,perBig:110},{g:"300g",price:90,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯I", grades:[ // 大亞
    {g:"120g",price:45,perBig:120},{g:"180g",price:70,perBig:120},{g:"250g",price:95,perBig:120},{g:"360g",price:140,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯II", grades:[ // 大亞
    {g:"120g",price:45,perBig:120},{g:"180g",price:70,perBig:120},{g:"250g",price:95,perBig:120},{g:"360g",price:140,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯III", grades:[ // 大亞
    {g:"120g",price:45,perBig:120},{g:"180g",price:70,perBig:120},{g:"250g",price:95,perBig:120},{g:"360g",price:140,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯IV", grades:[ // 大亞
    {g:"120g",price:50,perBig:120},{g:"180g",price:80,perBig:120},{g:"250g",price:110,perBig:120},{g:"360g",price:160,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯V", grades:[ // 大亞
    {g:"120g",price:45,perBig:120},{g:"180g",price:70,perBig:120},{g:"250g",price:95,perBig:120},{g:"360g",price:140,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯VI", grades:[ // 大亞
    {g:"120g",price:50,perBig:120},{g:"180g",price:80,perBig:120},{g:"250g",price:110,perBig:120},{g:"360g",price:160,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯VII", grades:[ // 大亞
    {g:"120g",price:45,perBig:120},{g:"180g",price:70,perBig:120},{g:"250g",price:95,perBig:120},{g:"360g",price:140,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"威尼斯VIII", grades:[ // 大亞
    {g:"120g",price:50,perBig:120},{g:"180g",price:80,perBig:120},{g:"250g",price:110,perBig:120},{g:"360g",price:160,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"皇家金貝", grades:[ // 大亞
    {g:"100g",price:16,perBig:143},{g:"120g",price:20,perBig:143},{g:"140g",price:23,perBig:143},{g:"200g",price:32,perBig:143},{g:"250g",price:40,perBig:143},{g:"320g",price:55,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"皇家風采", grades:[ // 大亞
    {g:"130g",price:10,perBig:143},{g:"170g",price:14,perBig:143},{g:"200g",price:16,perBig:143},{g:"250g",price:20,perBig:143},{g:"300g",price:24,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"皇家美學", grades:[ // 大亞
    {g:"160g",price:30,perBig:110},{g:"330g",price:65,perBig:110},{g:"500g",price:95,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"香草紙", grades:[ // 大亞
    {g:"200g",price:32,perBig:143},{g:"250g",price:40,perBig:143},{g:"300g",price:48,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"鄉村紙", grades:[ // 大亞
    {g:"100g",price:16,perBig:143},{g:"115g",price:18,perBig:143},{g:"130g",price:20,perBig:143},{g:"200g",price:32,perBig:143},{g:"250g",price:40,perBig:143},{g:"300g",price:48,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"儷絲紙", grades:[ // 大亞
    {g:"290g",price:70,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"萊姆紙", grades:[ // 大亞
    {g:"170g",price:17,perBig:90},{g:"200g",price:30,perBig:143},{g:"300g",price:45,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"生態紙", grades:[ // 大亞
    {g:"115g",price:11,perBig:90},{g:"150g",price:22,perBig:143},{g:"250g",price:37,perBig:143},{g:"300g",price:45,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-銀河白", grades:[ // 大亞
    {g:"110g",price:40,perBig:120},{g:"125g",price:45,perBig:120},{g:"230g",price:85,perBig:120},{g:"300g",price:110,perBig:120},{g:"350g",price:150,perBig:120},{g:"480g",price:200,perBig:110},{g:"700g",price:300,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-帝王金", grades:[ // 大亞
    {g:"110g",price:40,perBig:120},{g:"125g",price:45,perBig:120},{g:"230g",price:85,perBig:120},{g:"300g",price:110,perBig:120},{g:"350g",price:150,perBig:120},{g:"480g",price:200,perBig:110},{g:"700g",price:300,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-星光銀", grades:[ // 大亞
    {g:"110g",price:40,perBig:120},{g:"230g",price:85,perBig:120},{g:"300g",price:110,perBig:120},{g:"480g",price:200,perBig:110},{g:"700g",price:300,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-珍珠銅", grades:[ // 大亞
    {g:"110g",price:40,perBig:120},{g:"125g",price:45,perBig:120},{g:"230g",price:85,perBig:120},{g:"300g",price:110,perBig:120},{g:"350g",price:150,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-鈦極黑", grades:[ // 大亞
    {g:"110g",price:40,perBig:120},{g:"125g",price:45,perBig:120},{g:"300g",price:110,perBig:120},{g:"350g",price:150,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-月光藍", grades:[ // 大亞
    {g:"125g",price:45,perBig:120},{g:"230g",price:85,perBig:120},{g:"300g",price:110,perBig:120},{g:"350g",price:150,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-星空紫", grades:[ // 大亞
    {g:"125g",price:45,perBig:120},{g:"300g",price:110,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-靓粉紅", grades:[ // 大亞
    {g:"125g",price:45,perBig:120},{g:"300g",price:110,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-貴族金", grades:[ // 大亞
    {g:"125g",price:45,perBig:120},{g:"300g",price:110,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-時尚白/經典黑", grades:[ // 大亞
    {g:"250g",price:80,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"極光紙-雙色面", grades:[ // 大亞
    {g:"260g",price:120,perBig:120}
  ]},
  { grp:"卡紙／厚卡", name:"環保紙", grades:[ // 大亞
    {g:"90g",price:15,perBig:143},{g:"125g",price:20,perBig:143},{g:"155g",price:24,perBig:143},{g:"205g",price:32,perBig:143},{g:"270g",price:48,perBig:143},{g:"340g",price:60,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"尼采紙", grades:[ // 大亞
    {g:"95g",price:26,perBig:110},{g:"140g",price:35,perBig:143},{g:"250g",price:60,perBig:143},{g:"350g",price:98,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"艾美卡", grades:[ // 大亞
    {g:"245g",price:85,perBig:143},{g:"290g",price:100,perBig:143},{g:"335g",price:115,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"摩卡", grades:[ // 大亞
    {g:"245g",price:105,perBig:143},{g:"290g",price:125,perBig:143},{g:"335g",price:145,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"水晶卡", grades:[ // 大亞
    {g:"210g",price:16.7,perBig:143},{g:"260g",price:20.6,perBig:143},{g:"310g",price:24.5,perBig:143},{g:"360g",price:28.5,perBig:143},{g:"420g",price:33.2,perBig:143},{g:"465g",price:37,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"雅典", grades:[ // 大亞
    {g:"100g",price:30,perBig:110},{g:"200g",price:60,perBig:110},{g:"300g",price:90,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"星空", grades:[ // 大亞
    {g:"100g",price:30,perBig:110},{g:"200g",price:60,perBig:110},{g:"300g",price:90,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"歐洲之星", grades:[ // 大亞
    {g:"115g",price:60,perBig:110},{g:"300g",price:160,perBig:110}
  ]},
  { grp:"卡紙／厚卡", name:"奧斯卡", grades:[ // 大亞
    {g:"240g",price:21.6,perBig:143},{g:"270g",price:24.4,perBig:143},{g:"330g",price:29.6,perBig:143},{g:"360g",price:32.6,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"美白卡", grades:[ // 大亞
    {g:"230g",price:22,perBig:143},{g:"260g",price:24.6,perBig:143},{g:"310g",price:29.2,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"綠能卡", grades:[ // 大亞
    {g:"230g",price:22.2,perBig:143},{g:"260g",price:24.6,perBig:143},{g:"310g",price:29.2,perBig:143},{g:"350g",price:33,perBig:143},{g:"400g",price:37.8,perBig:143},{g:"450g",price:42.4,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"原生卡", grades:[ // 大亞
    {g:"360g",price:170,perBig:143},{g:"523g",price:250,perBig:143},{g:"1047g",price:500,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"環保卡", grades:[ // 大亞
    {g:"310g",price:40,perBig:143},{g:"350g",price:45,perBig:143},{g:"400g",price:50,perBig:143},{g:"450g",price:55,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"伯爵卡", grades:[ // 大亞
    {g:"310g",price:40,perBig:143},{g:"350g",price:45,perBig:143},{g:"400g",price:50,perBig:143},{g:"450g",price:55,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"再生卡", grades:[ // 大亞
    {g:"310g",price:40,perBig:143},{g:"350g",price:45,perBig:143},{g:"400g",price:50,perBig:143},{g:"450g",price:55,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"時尚卡", grades:[ // 大亞
    {g:"350g",price:50,perBig:143},{g:"400g",price:55,perBig:143},{g:"650g",price:100,perBig:143},{g:"850g",price:130,perBig:143},{g:"1300g",price:200,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"黑鑽卡", grades:[ // 大亞
    {g:"310g",price:100,perBig:143},{g:"350g",price:120,perBig:143},{g:"400g",price:130,perBig:143},{g:"450g",price:150,perBig:143},{g:"600g",price:180,perBig:143},{g:"700g",price:220,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"象牙卡", grades:[ // 大亞
    {g:"310g",price:45,perBig:143},{g:"350g",price:50,perBig:143},{g:"400g",price:60,perBig:143},{g:"450g",price:65,perBig:143},{g:"600g",price:90,perBig:143},{g:"700g",price:100,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"晶采紙", grades:[ // 大亞
    {g:"200g",price:20,perBig:90},{g:"250g",price:25,perBig:90},{g:"300g",price:45,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"亮彩黑卡", grades:[ // 大亞
    {g:"270g",price:80,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"香氣紙", grades:[ // 大亞
    {g:"120g",price:30,perBig:143},{g:"150g",price:38,perBig:143},{g:"210g",price:55,perBig:143},{g:"320g",price:85,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"德國新雅柔卡", grades:[ // 聯美
    {g:"270g",price:43,perBig:143},{g:"300g",price:49,perBig:143},{g:"350g",price:54,perBig:143},{g:"400g",price:64,perBig:143}
  ]},
  { grp:"卡紙／厚卡", name:"美國可樂紙/厚卡紙", grades:[ // 聯美
    {g:"90g",price:19,perBig:81},{g:"118g",price:40,perBig:100},{g:"148g",price:45,perBig:100},{g:"216g",price:70,perBig:110},{g:"270g",price:100,perBig:110},{g:"352g",price:133,perBig:110},{g:"446g",price:157,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"再生卓越50 Colorplan", grades:[ // 長瑩
    {g:"120g",price:55,perBig:120},{g:"310g",price:140,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"再生卓越100 Colorplan", grades:[ // 長瑩
    {g:"135g",price:55,perBig:100},{g:"270g",price:110,perBig:100}
  ]},
  { grp:"環保／再生紙", name:"環保再生百代紙", grades:[ // 長瑩
    {g:"300g",price:75,perBig:110},{g:"450g",price:115,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"環保再生質樸紙", grades:[ // 長瑩
    {g:"120g",price:43,perBig:110},{g:"300g",price:103,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"海德堡紙", grades:[ // 長瑩
    {g:"330g",price:185,perBig:110},{g:"530g",price:260,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"蔗素紙", grades:[ // 長瑩
    {g:"70g",price:8.7,perBig:143},{g:"90g",price:10.86,perBig:143},{g:"150g",price:18.1,perBig:143},{g:"200g",price:24,perBig:143},{g:"263g",price:31.8,perBig:143},{g:"295g",price:35.6,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本再生源環保卡", grades:[ // 峻揚
    {g:"450g",price:54,perBig:143},{g:"500g",price:60,perBig:143},{g:"550g",price:66,perBig:143},{g:"600g",price:72,perBig:143},{g:"650g",price:78,perBig:143},{g:"750g",price:90,perBig:143},{g:"850g",price:110,perBig:143},{g:"950g",price:123,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"再生源綠能薄卡", grades:[ // 峻揚
    {g:"130g",price:21,perBig:143},{g:"160g",price:24,perBig:143},{g:"210g",price:32,perBig:143},{g:"260g",price:38,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本節能卡", grades:[ // 峻揚
    {g:"300g",price:25,perBig:143},{g:"350g",price:26,perBig:143},{g:"400g",price:30,perBig:143},{g:"450g",price:34,perBig:143},{g:"550g",price:42,perBig:143},{g:"650g",price:50,perBig:143},{g:"750g",price:58,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本再生源鋼西卡", grades:[ // 峻揚
    {g:"210g",price:19,perBig:143},{g:"350g",price:30,perBig:143},{g:"400g",price:34.5,perBig:143},{g:"450g",price:39,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"奇萊紙", grades:[ // 大亞
    {g:"120g",price:22,perBig:90},{g:"150g",price:38,perBig:143},{g:"210g",price:55,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"義大利描圖紙 B", grades:[ // 大亞
    {g:"90g",price:50,perBig:143},{g:"110g",price:60,perBig:143},{g:"160g",price:70,perBig:110},{g:"230g",price:120,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"皇家描圖", grades:[ // 大亞
    {g:"110g",price:40,perBig:143},{g:"240g",price:90,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"極光紙-絲綢金/銅/黑", grades:[ // 大亞
    {g:"110g",price:45,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"極光紙-鱷紋白/銅/黑", grades:[ // 大亞
    {g:"110g",price:45,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"海洋之星I", grades:[ // 大亞
    {g:"115g",price:80,perBig:110},{g:"165g",price:120,perBig:110},{g:"235g",price:160,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"海洋之星II", grades:[ // 大亞
    {g:"115g",price:80,perBig:110},{g:"165g",price:120,perBig:110},{g:"235g",price:160,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"輕量環保紙", grades:[ // 大亞
    {g:"88g",price:7.6,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"環保美術紙", grades:[ // 大亞
    {g:"122g",price:45,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"再生色卡", grades:[ // 大亞
    {g:"90g",price:9,perBig:90},{g:"205g",price:20,perBig:90}
  ]},
  { grp:"環保／再生紙", name:"美感紙", grades:[ // 大亞
    {g:"116g",price:55,perBig:143},{g:"209g",price:98,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"再生紙", grades:[ // 大亞
    {g:"64g",price:5,perBig:90},{g:"81g",price:6,perBig:90},{g:"105g",price:8,perBig:90},{g:"128g",price:10,perBig:90},{g:"157g",price:18,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"德國環保再生蒙特科", grades:[ // 聯美
    {g:"320g",price:180,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"日本環保畫閣卡", grades:[ // 聯美
    {g:"240g",price:50,perBig:143},{g:"288g",price:60,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本環保伊斯汀", grades:[ // 聯美
    {g:"104.7g",price:23,perBig:143},{g:"125g",price:27,perBig:143},{g:"149g",price:33,perBig:143},{g:"180g",price:39,perBig:143},{g:"209.3g",price:46,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"德國環保金碧紙", grades:[ // 聯美
    {g:"110g",price:160,perBig:110},{g:"250g",price:220,perBig:110},{g:"310g",price:275,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"義大利新環保粉面彩柔紙", grades:[ // 聯美
    {g:"120g",price:23,perBig:143},{g:"200g",price:39,perBig:143},{g:"250g",price:47,perBig:143},{g:"300g",price:56,perBig:143},{g:"360g",price:67,perBig:143},{g:"450g",price:101,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"環保芬蘭紙 (Strerna) Paptic Sterna", grades:[ // 聯美
    {g:"85g",price:46,perBig:143},{g:"100g",price:51,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"環保芬蘭紙 (Tringa) Paptic Tringa", grades:[ // 聯美
    {g:"60g",price:40,perBig:143},{g:"80g",price:52,perBig:143},{g:"110g",price:60,perBig:143},{g:"125g",price:76,perBig:143},{g:"140g",price:84,perBig:143},{g:"200g",price:132,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"德國環保新奇美", grades:[ // 聯美
    {g:"120g",price:15,perBig:143},{g:"190g",price:25,perBig:143},{g:"250g",price:33,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"韓國環保卡", grades:[ // 聯美
    {g:"300g",price:51,perBig:143},{g:"350g",price:60,perBig:143},{g:"400g",price:68,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"韓國環保再生奇艷紙 100%", grades:[ // 聯美
    {g:"112g",price:20,perBig:143},{g:"122g",price:22,perBig:143},{g:"145g",price:26,perBig:143},{g:"174g",price:31,perBig:143},{g:"203g",price:35,perBig:143},{g:"222g",price:39,perBig:143},{g:"251g",price:44,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"韓國環保再生奇艷紙 30%", grades:[ // 聯美
    {g:"112g",price:19,perBig:143},{g:"122g",price:21,perBig:143},{g:"145g",price:25,perBig:143},{g:"174g",price:30,perBig:143},{g:"203g",price:34,perBig:143},{g:"222g",price:38,perBig:143},{g:"251g",price:43,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"奧地利鸚鵡螺再生環保紙", grades:[ // 聯美
    {g:"80g",price:16,perBig:143},{g:"90g",price:18,perBig:143},{g:"100g",price:20,perBig:143},{g:"120g",price:24,perBig:143},{g:"160g",price:32,perBig:143},{g:"200g",price:44,perBig:143},{g:"250g",price:56,perBig:143},{g:"300g",price:67,perBig:143},{g:"350g",price:78,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本環保稻紙", grades:[ // 聯美
    {g:"105g",price:65,perBig:90},{g:"157g",price:65,perBig:90},{g:"245g",price:76,perBig:143},{g:"310g",price:96,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"日本再生雲灰卡", grades:[ // 聯美
    {g:"350g",price:65,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"美國環保水洗牛皮紙", grades:[ // 聯美
    {g:"303g",price:275,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"美國環保儷格紙", grades:[ // 聯美
    {g:"90g",price:17,perBig:81},{g:"118g",price:35,perBig:100},{g:"216g",price:59,perBig:81},{g:"324g",price:147,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"美國環保象牙紙", grades:[ // 聯美
    {g:"75g",price:15,perBig:80},{g:"90g",price:17,perBig:81},{g:"118g",price:38,perBig:100},{g:"176g",price:70,perBig:143},{g:"216g",price:83,perBig:143},{g:"270g",price:69,perBig:90},{g:"297g",price:89,perBig:110},{g:"352g",price:140,perBig:110},{g:"446g",price:178,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"美國環保儷紋紙", grades:[ // 聯美
    {g:"90g",price:20,perBig:81},{g:"111g",price:30,perBig:90},{g:"176g",price:48,perBig:81},{g:"216g",price:69,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"美國環保萊妮紙/萊麗紙", grades:[ // 聯美
    {g:"90g",price:32,perBig:143},{g:"118g",price:54,perBig:143},{g:"176g",price:75,perBig:143},{g:"216g",price:90,perBig:143},{g:"227g",price:109,perBig:110},{g:"311g",price:153,perBig:110},{g:"352g",price:106,perBig:100}
  ]},
  { grp:"環保／再生紙", name:"美國環保可美紙", grades:[ // 聯美
    {g:"284g",price:98,perBig:110},{g:"338g",price:132,perBig:110},{g:"346g",price:125,perBig:110},{g:"406g",price:156,perBig:110},{g:"487g",price:194,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"美國環保紙", grades:[ // 聯美
    {g:"90g",price:16,perBig:81},{g:"118g",price:23,perBig:90},{g:"216g",price:60,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"義大利環保奇豔紙", grades:[ // 聯美
    {g:"140g",price:34,perBig:143},{g:"220g",price:54,perBig:143},{g:"270g",price:65,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"義大利環保奇豔紙/再生雅豔紙", grades:[ // 聯美
    {g:"120g",price:19,perBig:143},{g:"140g",price:44,perBig:120},{g:"250g",price:76,perBig:120},{g:"270g",price:38,perBig:143},{g:"320g",price:44,perBig:143}
  ]},
  { grp:"環保／再生紙", name:"義大利環保奇麗紙", grades:[ // 聯美
    {g:"130g",price:44,perBig:120},{g:"260g",price:88,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"義大利環保奇幻/變色龍紙", grades:[ // 聯美
    {g:"120g",price:52,perBig:120},{g:"130g",price:60,perBig:143},{g:"250g",price:50,perBig:110},{g:"290g",price:105,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"義大利環保絲棉紙", grades:[ // 聯美
    {g:"120g",price:200,perBig:110},{g:"300g",price:230,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"義大利環保波絲紙", grades:[ // 聯美
    {g:"120g",price:200,perBig:110},{g:"290g",price:230,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"義大利再生東京紙", grades:[ // 聯美
    {g:"120g",price:65,perBig:120},{g:"350g",price:230,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"義大利環保水果紙", grades:[ // 聯美
    {g:"120g",price:32,perBig:120},{g:"350g",price:90,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"義大利再生皮紋紙", grades:[ // 聯美
    {g:"250g",price:73,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"義大利再生環保紙", grades:[ // 聯美
    {g:"80g",price:12,perBig:110},{g:"90g",price:13,perBig:110},{g:"120g",price:16,perBig:110},{g:"250g",price:33,perBig:110},{g:"300g",price:42,perBig:120},{g:"350g",price:64,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"義大利再生羊綿紙", grades:[ // 聯美
    {g:"120g",price:38,perBig:120},{g:"360g",price:113,perBig:120}
  ]},
  { grp:"環保／再生紙", name:"德國環保冰湖紙", grades:[ // 聯美
    {g:"90g",price:18,perBig:90},{g:"100g",price:20,perBig:90},{g:"115g",price:30,perBig:90},{g:"135g",price:35,perBig:90},{g:"160g",price:32,perBig:90},{g:"200g",price:68,perBig:90},{g:"250g",price:84,perBig:90},{g:"300g",price:102,perBig:90},{g:"350g",price:138,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保金綺紙", grades:[ // 聯美
    {g:"110g",price:150,perBig:110},{g:"310g",price:255,perBig:110},{g:"430g",price:470,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保無透紙", grades:[ // 聯美
    {g:"80g",price:25,perBig:110},{g:"100g",price:30,perBig:110},{g:"135g",price:40,perBig:110},{g:"270g",price:80,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國925環保銀貂紙", grades:[ // 聯美
    {g:"145g",price:230,perBig:110},{g:"210g",price:200,perBig:110},{g:"290g",price:275,perBig:110},{g:"310g",price:275,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保大麻紙", grades:[ // 聯美
    {g:"120g",price:84,perBig:110},{g:"320g",price:210,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保無漂紙", grades:[ // 聯美
    {g:"120g",price:38,perBig:110},{g:"300g",price:84,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保金豔紙", grades:[ // 聯美
    {g:"310g",price:255,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國再生環保紙", grades:[ // 聯美
    {g:"120g",price:62,perBig:110},{g:"300g",price:165,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保啤酒花紙", grades:[ // 聯美
    {g:"250g",price:125,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國生物循環紙", grades:[ // 聯美
    {g:"300g",price:75,perBig:110},{g:"600g",price:370,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國再生環保隕紋紙", grades:[ // 聯美
    {g:"130g",price:100,perBig:110},{g:"310g",price:190,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國環保砂岩紙", grades:[ // 聯美
    {g:"100g",price:75,perBig:110},{g:"120g",price:85,perBig:110},{g:"300g",price:170,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"德國馬諦斯環保棉紙", grades:[ // 聯美
    {g:"120g",price:70,perBig:90},{g:"350g",price:184,perBig:90}
  ]},
  { grp:"環保／再生紙", name:"德國再生環保美紋紙", grades:[ // 聯美
    {g:"310g",price:170,perBig:110}
  ]},
  { grp:"環保／再生紙", name:"法國高級再生香榭紙", grades:[ // 聯美
    {g:"330g",price:130,perBig:110}
  ]},
  { grp:"銅版紙", name:"日光雪銅紙", grades:[ // 長瑩
    {g:"105g",price:7.2,perBig:143},{g:"128g",price:8.7,perBig:143},{g:"157g",price:10.66,perBig:143}
  ]},
  { grp:"銅版紙", name:"日本王子A1雪銅", grades:[ // 長瑩
    {g:"128g",price:5.72,perBig:90},{g:"157g",price:10.66,perBig:143},{g:"186g",price:12.62,perBig:143},{g:"210g",price:14.26,perBig:143}
  ]},
  { grp:"銅版紙", name:"彩畫高白銅版紙", grades:[ // 長瑩
    {g:"120g",price:6.58,perBig:143},{g:"150g",price:8.22,perBig:143},{g:"180g",price:9.86,perBig:143},{g:"200g",price:11.34,perBig:143},{g:"250g",price:14.18,perBig:143},{g:"300g",price:17.02,perBig:143}
  ]},
  { grp:"銅版紙", name:"美雪環保超雪銅", grades:[ // 長瑩
    {g:"150g",price:11.2,perBig:143},{g:"170g",price:12.7,perBig:143},{g:"200g",price:15.4,perBig:143},{g:"250g",price:19.2,perBig:143},{g:"300g",price:23,perBig:143}
  ]},
  { grp:"銅版紙", name:"美雪環保超特銅", grades:[ // 長瑩
    {g:"300g",price:23,perBig:143}
  ]},
  { grp:"銅版紙", name:"韓國哥倫布特銅／雪銅", grades:[ // 峻揚
    {g:"120g",price:8,perBig:143},{g:"150g",price:10,perBig:143},{g:"180g",price:12,perBig:143},{g:"200g",price:13.2,perBig:143},{g:"250g",price:16.8,perBig:143},{g:"300g",price:20,perBig:143}
  ]},
  { grp:"銅版紙", name:"日本雙面鏡銅", grades:[ // 峻揚
    {g:"192g",price:50,perBig:143}
  ]},
  { grp:"銅版紙", name:"歐洲象牙超雪銅", grades:[ // 峻揚
    {g:"135g",price:18.4,perBig:143},{g:"170g",price:23,perBig:143},{g:"250g",price:34,perBig:143},{g:"300g",price:32,perBig:110}
  ]},
  { grp:"銅版紙", name:"IT皇家超特", grades:[ // 大亞
    {g:"150g",price:11.2,perBig:143},{g:"170g",price:12.7,perBig:143},{g:"200g",price:15,perBig:143},{g:"250g",price:18.8,perBig:143},{g:"300g",price:14.8,perBig:90}
  ]},
  { grp:"銅版紙", name:"IT皇家超雪", grades:[ // 大亞
    {g:"150g",price:11.2,perBig:143},{g:"170g",price:12.7,perBig:143},{g:"200g",price:15,perBig:143},{g:"250g",price:13.1,perBig:90},{g:"300g",price:22.3,perBig:143}
  ]},
  { grp:"銅版紙", name:"環保超特", grades:[ // 大亞
    {g:"105g",price:7.2,perBig:143},{g:"128g",price:8.8,perBig:143},{g:"157g",price:10.8,perBig:143}
  ]},
  { grp:"銅版紙", name:"環保超雪", grades:[ // 大亞
    {g:"105g",price:7.2,perBig:143},{g:"128g",price:8.8,perBig:143},{g:"157g",price:10.8,perBig:143}
  ]},
  { grp:"銅版紙", name:"亮彩特銅", grades:[ // 大亞
    {g:"150g",price:5.64,perBig:90},{g:"170g",price:9.02,perBig:143},{g:"200g",price:7.22,perBig:90},{g:"250g",price:9.02,perBig:90}
  ]},
  { grp:"銅版紙", name:"亮彩雪銅", grades:[ // 大亞
    {g:"200g",price:11.02,perBig:143},{g:"250g",price:9.7,perBig:90},{g:"300g",price:16.5,perBig:143}
  ]},
  { grp:"銅版紙", name:"霧面特雪", grades:[ // 大亞
    {g:"105g",price:7.2,perBig:143},{g:"128g",price:8.8,perBig:143},{g:"157g",price:10.8,perBig:143},{g:"190g",price:16.4,perBig:143},{g:"230g",price:19.8,perBig:143},{g:"260g",price:22.4,perBig:143}
  ]},
  { grp:"銅版紙", name:"日本銅西", grades:[ // 大亞
    {g:"190g",price:13,perBig:143},{g:"210g",price:14.4,perBig:143},{g:"230g",price:15.8,perBig:143},{g:"260g",price:17.8,perBig:143},{g:"310g",price:21.2,perBig:143},{g:"360g",price:24.8,perBig:143},{g:"420g",price:28.8,perBig:143}
  ]},
  { grp:"銅版紙", name:"萊卡超特", grades:[ // 聯美
    {g:"115g",price:5.7,perBig:90},{g:"130g",price:10.1,perBig:143},{g:"150g",price:16,perBig:143},{g:"170g",price:18.1,perBig:143},{g:"200g",price:14,perBig:90},{g:"250g",price:18.7,perBig:90},{g:"300g",price:31.9,perBig:143},{g:"350g",price:40.9,perBig:143},{g:"400g",price:47.1,perBig:143}
  ]},
  { grp:"銅版紙", name:"萊卡亮雪", grades:[ // 聯美
    {g:"100g",price:7.5,perBig:143},{g:"115g",price:5.7,perBig:90},{g:"135g",price:9.6,perBig:90},{g:"150g",price:16,perBig:143},{g:"170g",price:18.1,perBig:143},{g:"200g",price:21.4,perBig:143},{g:"250g",price:26.9,perBig:143},{g:"300g",price:31.9,perBig:143}
  ]},
  { grp:"銅版紙", name:"萊卡超白超雪銅", grades:[ // 聯美
    {g:"150g",price:18.7,perBig:143},{g:"170g",price:21.1,perBig:143},{g:"200g",price:24.8,perBig:143},{g:"250g",price:30.9,perBig:143},{g:"300g",price:37.3,perBig:143},{g:"350g",price:44,perBig:143}
  ]},
  { grp:"描圖紙", name:"義大利描圖紙", grades:[ // 長瑩
    {g:"73g",price:29,perBig:143},{g:"90g",price:35,perBig:143},{g:"112g",price:44,perBig:143},{g:"145g",price:58,perBig:143},{g:"180g",price:78,perBig:143}
  ]},
  { grp:"描圖紙", name:"描圖紙", grades:[ // 峻揚
    {g:"70g",price:20,perBig:143},{g:"90g",price:25,perBig:143},{g:"110g",price:30,perBig:143},{g:"140g",price:42,perBig:143},{g:"180g",price:57,perBig:143},{g:"230g",price:110,perBig:143}
  ]},
  { grp:"描圖紙", name:"彩色描圖紙（黑）", grades:[ // 峻揚
    {g:"90g",price:80,perBig:110}
  ]},
  { grp:"描圖紙", name:"美國描圖紙", grades:[ // 聯美
    {g:"64g",price:16,perBig:81}
  ]},
  { grp:"和紙", name:"日本雲龍和紙", grades:[ // 長瑩
    {g:"75g",price:76.19,perBig:143},{g:"240g",price:133.33,perBig:143}
  ]},
  { grp:"和紙", name:"和風紙", grades:[ // 峻揚
    {g:"70g",price:45,perBig:143},{g:"90g",price:80,perBig:143},{g:"105g",price:65,perBig:143},{g:"135g",price:80,perBig:143}
  ]},
  { grp:"和紙", name:"和風之花彩", grades:[ // 峻揚
    {g:"90g",price:100,perBig:80}
  ]},
  { grp:"和紙", name:"雙面和風卡", grades:[ // 峻揚
    {g:"200g",price:150,perBig:90}
  ]},
  { grp:"和紙", name:"鳳羽紙", grades:[ // 峻揚
    {g:"70g",price:70,perBig:143},{g:"90g",price:140,perBig:143}
  ]},
  { grp:"和紙", name:"彩光紙", grades:[ // 峻揚
    {g:"80g",price:120,perBig:143}
  ]},
  { grp:"和紙", name:"雨音紙", grades:[ // 峻揚
    {g:"70g",price:120,perBig:143}
  ]},
  { grp:"和紙", name:"柳絲紙", grades:[ // 峻揚
    {g:"240g",price:200,perBig:143}
  ]},
  { grp:"和紙", name:"紅梅紙", grades:[ // 峻揚
    {g:"95g",price:180,perBig:143}
  ]},
  { grp:"和紙", name:"雪菊紙", grades:[ // 峻揚
    {g:"100g",price:130,perBig:143}
  ]},
  { grp:"和紙", name:"稻禾紙", grades:[ // 峻揚
    {g:"95g",price:150,perBig:143}
  ]},
  { grp:"和紙", name:"紅花染紙", grades:[ // 峻揚
    {g:"90g",price:200,perBig:143}
  ]},
  { grp:"和紙", name:"高砂紙", grades:[ // 峻揚
    {g:"90g",price:60,perBig:90}
  ]},
  { grp:"和紙", name:"杉皮紙", grades:[ // 峻揚
    {g:"100g",price:150,perBig:143}
  ]},
  { grp:"和紙", name:"京都紙", grades:[ // 峻揚
    {g:"150g",price:150,perBig:143}
  ]}
];

/* ══════════════════════════════════════════════════════════════════════
   大紙尺寸表（紅包袋落數用）
   建立 2026-11-18

   為什麼需要這張表：名片工具只存了 perBig（每張大紙落幾張名片），沒存大紙尺寸。
   紅包袋的用紙是 22×27 公分，跟名片 9.6×6 公分完全不同比例，不能用 perBig 換算
   （面積比 10.3 倍，但實際排下去是 12 個不是 13.9 個，會算錯 16%）。
   所以照 perBig 反推回大紙尺寸，再用刀模實際尺寸重新排一次。

   perBig ＝ ⌊長÷96mm⌋ × ⌊寬÷60mm⌋（名片工具的落版公式，含咬口邊界）
   下表：[長mm, 寬mm, 顯示名稱, 是否為推估]
   est:true ＝ 這個 perBig 對不到我們牌價檔裡任何一個常見尺寸，用 perBig 的下界推估
              （偏保守＝落數偏少＝報價偏高），頁面上會提醒客人跟我們確認。
              目前只有 22 個克數落在這裡（剛古紙小張、部分美國紙與描圖紙）。
   ══════════════════════════════════════════════════════════════════════ */
var SHEET_BY_PERBIG = {
  180: [1200, 900, '90 × 120 cm'],
  143: [1092, 787, '31" × 43"'],     // 最常見；80×110cm 也落在這格，落數一樣
  120: [1020, 720, '72 × 102 cm'],
  112: [ 991, 686, '27" × 39"'],
  110: [1000, 700, '70 × 100 cm'],
  100: [ 965, 635, '25" × 38"'],
   96: [ 965, 635, '25" × 38"'],
   90: [ 900, 640, '64 × 90 cm'],    // 25"×35"、93.9×63.6cm、64×94cm 也落這格，落數一樣
   88: [ 800, 700, '70 × 80 cm'],
   81: [ 864, 540, '', true],
   80: [ 768, 600, '', true],
   72: [ 768, 540, '', true],
   48: [ 576, 480, '', true],
   42: [ 576, 420, '', true],
   20: [ 384, 300, '', true]
};

/* 一張大紙可以軋幾個？兩個方向都排一次取多的（直放／橫放）。
   blankW／blankH ＝ 刀模用紙尺寸（公分），紅包袋＝22×27。 */
function upsOnSheet(perBig, blankW, blankH){
  var sh = SHEET_BY_PERBIG[perBig];
  if(!sh) return 0;                       // 對不到就回 0，呼叫端顯示「請洽 LINE」
  var a = Math.floor(sh[0] / (blankH * 10)) * Math.floor(sh[1] / (blankW * 10));
  var b = Math.floor(sh[0] / (blankW * 10)) * Math.floor(sh[1] / (blankH * 10));
  return Math.max(a, b);
}
function sheetInfo(perBig){
  var sh = SHEET_BY_PERBIG[perBig];
  return sh ? { w:sh[0], h:sh[1], label:sh[2], est:!!sh[3] } : null;
}
