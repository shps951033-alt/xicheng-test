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

/* ══════════════════════════════════════════════════════════════════════
   各款紙的顏色（老闆 2026-11-18：「雅子系列有很多顏色可以選，其他系列也是，要一一列出來讓客人選」）
   建立 2026-11-18｜154 款紙、809 個色號

   ★ 不要手改這份。來源＝營運部\紙張牌價-{長盈,恆成,聯美}紙業.md 的原表色號欄，
     用 awk 逐段抓出來的；牌價檔更新後要重抓（做法寫在 紅包袋春聯\說明.txt）。
   ★ p ＝ 該色在各克數的「整張大紙牌價」。同一款紙不同色**價錢可能不一樣**：
     例雅子 105g，棉白 42／可可棕 48／森林綠 58 —— 所以選色會影響報價，這是對的。
     ART_PAPERS.grades 的 price 是「該克數最高色號價」，沒選色時才用它（偏保守）。
   ★ 沒列在這裡的紙（大亞、峻揚那些，以及牌價表只給編號沒給色名的）＝我們手上沒有色名資料，
     頁面會改顯示「顏色請用 LINE 問我們」，不要自己編色名。
   ══════════════════════════════════════════════════════════════════════ */
var PAPER_COLORS = {
  "義大利環保奇麗紙": [
    {n:"米 Beige F4302", p:{130:36,260:72}},
    {n:"白 White F4301", p:{130:55,260:88}}
  ],
  "維納斯沐光紙": [
    {n:"白", p:{120:11,150:14,200:18,240:22}}
  ],
  "美國啤酒紙": [
    {n:"白 White F4701", p:{189:72,270:90,427:156}}
  ],
  "美國環保儷格紙": [
    {n:"白 White/黑 Black B17", p:{324:147}},
    {n:"白 White/紅 Red B17", p:{324:147}},
    {n:"灰 Gray/白 White B19", p:{324:147}},
    {n:"灰 Gray FB19", p:{216:96}},
    {n:"紫 Purple FB15", p:{216:96}},
    {n:"棕 Brown FB18", p:{216:96,324:147}},
    {n:"黑 Black FB16", p:{216:96,324:147}},
    {n:"紅 Red FB10", p:{216:96,324:147}},
    {n:"米 Beige/黃 Yellow FB07", p:{118:35,216:59}},
    {n:"灰 Gray FB06", p:{90:17,216:59}},
    {n:"灰 Gray FB04", p:{90:17}},
    {n:"綠 Green FB03", p:{90:17,118:35,216:59}},
    {n:"米 Beige FB02", p:{90:17,118:35,216:76}},
    {n:"白 White FB01", p:{90:17,118:32,216:59}},
    {n:"白 White FB00", p:{90:19,216:73}}
  ],
  "法國高級再生香榭紙": [
    {n:"綠 Green 5110", p:{330:115}},
    {n:"米 Beige 5120", p:{330:115}},
    {n:"粉紅 Pink 5119", p:{330:115}},
    {n:"綠 Green 5118", p:{330:115}},
    {n:"灰 Gray 5117", p:{330:115}},
    {n:"灰 Gray 5116", p:{330:115}},
    {n:"灰 Gray 5115", p:{330:115}},
    {n:"橘 Orange 5114", p:{330:115}},
    {n:"棕 Brown 5113", p:{330:115}},
    {n:"綠 Green 5111", p:{330:115}},
    {n:"粉紅 Pink/紅 Red 5112", p:{330:115}},
    {n:"牛皮 Khaki 5109", p:{330:115}},
    {n:"紫 Purple 5108", p:{330:115}},
    {n:"綠 Green 5107", p:{330:115}},
    {n:"牛皮 Khaki 5106", p:{330:115}},
    {n:"藍 Blue/黑 Black 5105", p:{330:115}},
    {n:"牛皮 Khaki/黃 Yellow 5104", p:{330:115}},
    {n:"紅 Red 5103", p:{330:115}},
    {n:"黑 Black 5102", p:{330:115}},
    {n:"白 White 5101", p:{330:115}},
    {n:"黑 Black 5121", p:{330:130}}
  ],
  "黑太子": [
    {n:"01 特黑", p:{100:90}}
  ],
  "義大利環保波絲紙": [
    {n:"黑 Black FTW04", p:{120:200,290:230}},
    {n:"黃 Yellow FTW03", p:{120:200,290:230}},
    {n:"灰 Gray FTW02", p:{120:200,290:230}},
    {n:"白 White FTW01", p:{120:200,290:230}}
  ],
  "新浪潮F系列": [
    {n:"白", p:{105:24,128:29,157:36,209:48}}
  ],
  "萊妮映畫": [
    {n:"白", p:{120:14,140:16,170:20,200:23,240:28}}
  ],
  "凝雪映畫": [
    {n:"白", p:{100:11,120:13.2,140:12.8,170:15.2,200:18,240:22,290:27.4}}
  ],
  "西岩森活卡": [
    {n:"白", p:{244:6,285:7,301:7}}
  ],
  "純棉剛古紙": [
    {n:"01 柔白", p:{160:65,300:130}}
  ],
  "德國環保棉卡": [
    {n:"#01 Nature White 自然白", p:{600:360,2:360}}
  ],
  "萊卡超特": [
    {n:"白 White L", p:{115:5.7,130:10.1,150:16,170:18.1,200:15,250:18.7,300:31.9,350:40.9,400:47.1}}
  ],
  "新歐林紙": [
    {n:"01 純白 Absolute White", p:{90:17,120:23}},
    {n:"02 原白 High White", p:{90:17,120:23}}
  ],
  "COSMIC": [
    {n:"01 火星咖", p:{360:270}},
    {n:"02 黑洞黑", p:{360:270}},
    {n:"04 行星藍", p:{360:270}},
    {n:"05 外星綠", p:{360:270}},
    {n:"06 水星白", p:{360:270}}
  ],
  "德國再生環保美紋紙": [
    {n:"綠 Green FGB07", p:{310:170}},
    {n:"紫 Purple FGB06", p:{310:170}},
    {n:"藍 Blue FGB05", p:{310:170}},
    {n:"棕 Brown FGB04", p:{310:170}},
    {n:"黃 Yellow FGB03", p:{310:170}},
    {n:"灰 Gray FGB02", p:{310:170}},
    {n:"白 White FGB01", p:{310:170}}
  ],
  "日標 B7": [
    {n:"自然白", p:{92:9.5,100:10.5}}
  ],
  "韓國環保再生奇艷紙 100%": [
    {n:"白 White FEC02", p:{112:20,122:22,145:26,174:31,203:35,222:39,251:44}}
  ],
  "新浪厚卡": [
    {n:"白", p:{180:33,240:44,280:52,310:57,350:64}}
  ],
  "德國環保再生蒙特科": [
    {n:"白 White 5407", p:{320:180}},
    {n:"黑 Black 5406", p:{320:180}},
    {n:"綠 Green 5405", p:{320:180}},
    {n:"灰 Gray 5404", p:{320:180}},
    {n:"黃 Yellow 5403", p:{320:180}},
    {n:"棕 Brown/牛皮 Khaki 5402", p:{320:180}},
    {n:"紅 Red 5401", p:{320:180}}
  ],
  "影舞剛古紙": [
    {n:"02 粉金", p:{120:90,250:190}}
  ],
  "英國史密斯": [
    {n:"01 琉璃白", p:{135:50,270:95,350:130}},
    {n:"02 冰原白", p:{135:50,270:95,350:130}},
    {n:"03 太古白", p:{135:50,270:95,350:130}},
    {n:"04 明亮白", p:{135:50,270:95,350:130}},
    {n:"05 自然白", p:{135:50,270:95,350:130}},
    {n:"06 羊皮白", p:{135:50,270:95,350:130}},
    {n:"07 米花白", p:{135:50,270:95,350:130}},
    {n:"08 蘋果綠", p:{135:50,270:95,350:130}},
    {n:"09 麥草綠", p:{135:50,270:95,350:130}},
    {n:"10 冷灰", p:{135:50,270:95,350:130}},
    {n:"11 冰藍", p:{135:50,270:95,350:130}},
    {n:"12 霧黃", p:{135:50,270:95,350:130}},
    {n:"13 淺灰", p:{135:50,270:95,350:130}},
    {n:"14 中性灰", p:{135:50,270:95,350:130}},
    {n:"15 格林綠", p:{135:50,270:95,350:130}},
    {n:"16 淺水藍", p:{135:50,270:95,350:130}},
    {n:"17 薰衣紫", p:{135:50,270:95,350:130}},
    {n:"18 甜心粉", p:{135:50,270:95,350:130}},
    {n:"19 冰沙黃", p:{135:50,270:95,350:130}},
    {n:"20 卡其", p:{135:50,270:95,350:130}},
    {n:"21 奶茶棕", p:{135:50,270:95,350:130}},
    {n:"22 皮絨棕", p:{135:50,270:95,350:130}},
    {n:"23 芥籽黃", p:{135:50,270:95,350:130}},
    {n:"24 皮卡黃", p:{135:50,270:95,350:130}},
    {n:"25 檸檬黃", p:{135:50,270:95,350:130}},
    {n:"26 愛馬仕橘", p:{135:50,270:95,350:130}},
    {n:"27 焦糖橘", p:{135:50,270:95,350:130}},
    {n:"28 英國紅", p:{135:50,270:95,350:130}},
    {n:"29 櫻桃紅", p:{135:50,270:95,350:130}},
    {n:"30 茜草紅", p:{135:50,270:95,350:130}},
    {n:"31 海棠紅", p:{135:50,270:95,350:130}},
    {n:"32 新桃紅", p:{135:50,270:95,350:130}},
    {n:"33 鳶尾紫", p:{135:50,270:95,350:130}},
    {n:"34 女王藍", p:{135:50,270:95,350:130}},
    {n:"35 海灣藍", p:{135:50,270:95,350:130}},
    {n:"36 里士藍", p:{135:50,270:95,350:130}},
    {n:"37 灰藍", p:{135:50,270:95,350:130}},
    {n:"38 土耳其藍", p:{135:50,270:95,350:130}},
    {n:"39 馬爾斯綠", p:{135:50,270:95,350:130}},
    {n:"40 祖母綠", p:{135:50,270:95,350:130}},
    {n:"41 海藻綠", p:{135:50,270:95,350:130}},
    {n:"42 寶石綠", p:{135:50,270:95,350:130}},
    {n:"43 森林綠", p:{135:50,270:95,350:130}},
    {n:"44 賽車綠", p:{135:50,270:95,350:130}},
    {n:"45 寶藍", p:{135:50,270:95,350:130}},
    {n:"46 元素藍", p:{135:50,270:95,350:130}},
    {n:"47 彩虹藍", p:{135:50,270:95,350:130}},
    {n:"48 紫羅蘭", p:{135:50,270:95,350:130}},
    {n:"49 紅酒紅", p:{135:50,270:95,350:130}},
    {n:"50 金莎棕", p:{135:50,270:95,350:130}},
    {n:"51 巧克力豆", p:{135:50,270:95,350:130}},
    {n:"52 煙灰", p:{135:50,270:95,350:130}},
    {n:"53 珍珠灰", p:{135:50,270:95,350:130}},
    {n:"54 月球灰", p:{135:50,270:95,350:130}},
    {n:"55 烏黑", p:{135:50,270:95,350:130}}
  ],
  "萊卡亮雪": [
    {n:"白 White LM", p:{100:7.5,115:6.1,135:14.4,150:11.1,170:18.1,200:14,250:17.6,300:31.9}}
  ],
  "日本巴川紙": [
    {n:"白 White 68N01", p:{52:14,68:18}}
  ],
  "雙威卡": [
    {n:"白", p:{450:26,610:36,770:46}}
  ],
  "蒝織超白": [
    {n:"鉑金白", p:{116:42,151:54,198:70,244:86,291:102}}
  ],
  "閃蝶紙": [
    {n:"05 彩白 Cryogen White", p:{120:60,240:105,250:105}}
  ],
  "再生卓越100 Colorplan": [
    {n:"01 雲白", p:{135:55,270:110}},
    {n:"02 霧白", p:{135:55,270:110}},
    {n:"03 櫻花粉", p:{135:55,270:110}},
    {n:"04 銀河灰", p:{135:55,270:110}},
    {n:"05 灰棕", p:{135:55,270:110}},
    {n:"06 苔藓綠", p:{135:55,270:110}},
    {n:"07 再生綠", p:{135:55,270:110}},
    {n:"08 復古橘", p:{135:55,270:110}},
    {n:"09 海洋藍", p:{135:55,270:110}},
    {n:"10 再生黑", p:{135:55,270:110}}
  ],
  "沐蘭紙": [
    {n:"01 原白", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"02 米白", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"03 奶黃", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"04 淺棕", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"05 木紋棕", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"06 木紋咖", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"07 木紋白", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"09 木白雪", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"10 草綠", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"11 墨綠", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"12 礦灰", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}},
    {n:"13 炭灰", p:{80:160,2:160,100:100,120:125,135:320,200:160,300:160,350:160}}
  ],
  "德國包皓斯紙": [
    {n:"黑 Black FBD04", p:{130:70,310:130}},
    {n:"黑 Black FBD03", p:{120:40,250:79,300:96}},
    {n:"白 White FBD02", p:{120:23,250:51,300:61}},
    {n:"白 White FBD01", p:{120:23,250:51,300:61}}
  ],
  "雙面壹級卡": [
    {n:"白", p:{220:720,240:7,260:8,300:9,350:11,400:13}}
  ],
  "韓國奇艷紙象牙紋": [
    {n:"米 Beige FMF02", p:{90:15,100:17,130:20,160:24,190:29,210:32,240:38}},
    {n:"白 White FMF01", p:{90:15,100:17,130:20,160:24,190:29,210:32,240:38,270:43}}
  ],
  "德國環保啤酒花紙": [
    {n:"棕 Brown F9105", p:{250:125}},
    {n:"棕 Brown F9104", p:{250:125}},
    {n:"橘 Orange F9103", p:{250:125}},
    {n:"米 Beige F9102", p:{250:125}},
    {n:"白 White F9101", p:{250:125}}
  ],
  "日本環保伊斯汀": [
    {n:"白 White FET", p:{104.7:23,125:27,149:33,180:39,209.3:46}}
  ],
  "絲紋色紙": [
    {n:"紅", p:{90:28,160:40,215:68}},
    {n:"粉紅", p:{100:27,215:45}},
    {n:"深藍", p:{100:31,215:68,280:76}},
    {n:"灰", p:{215:45}},
    {n:"咖啡", p:{100:31,215:68,280:76}},
    {n:"黑", p:{100:31,215:68,280:76}}
  ],
  "德國源彤紙": [
    {n:"白 White FSW", p:{115:12,135:20,150:22,170:26,200:31,250:39,300:47}}
  ],
  "水彩紙 Cottage": [
    {n:"白", p:{160:39,220:54,320:80}},
    {n:"米", p:{160:39,220:54,320:80}}
  ],
  "日本環保稻紙": [
    {n:"白 White FKK02", p:{157:36,245:76,310:96}},
    {n:"米 Beige FKK01", p:{105:65,157:65,310:65}}
  ],
  "義大利環保奇幻/變色龍紙": [
    {n:"棕 Brown F3308", p:{250:160}},
    {n:"紅 Red F3307", p:{250:160}},
    {n:"棕 Brown F3306", p:{250:160}},
    {n:"綠 Green F3304", p:{130:60}},
    {n:"紫 Purple F3303", p:{120:52,130:60,250:94}},
    {n:"粉紅 Pink/黃 Yellow F3302", p:{130:40,250:50}},
    {n:"白 White F3301", p:{120:52,250:94}},
    {n:"黃 Yellow F2916", p:{120:45,250:90,290:105}},
    {n:"米 Beige F2915", p:{120:45,250:90,290:105}},
    {n:"紅 Red/紫 Purple F2913", p:{120:45,250:90,290:105}},
    {n:"紅 Red F2912", p:{120:45,250:90,290:105}},
    {n:"綠 Green F2911", p:{120:45,250:90,290:105}},
    {n:"藍 Blue F2910", p:{120:45,250:90,290:105}},
    {n:"棕 Brown F2909", p:{120:45,250:90,290:105}},
    {n:"棕 Brown F2908", p:{120:45,250:90,290:105}},
    {n:"紫 Purple F2905", p:{120:45,250:90,290:105}},
    {n:"藍 Blue F2904", p:{120:45,250:90,290:105}},
    {n:"綠 Green F2903", p:{120:45,250:90,290:105}},
    {n:"白 White F2901", p:{120:45,250:90,290:105}},
    {n:"灰 Gray F2914", p:{120:45,250:90,290:105}},
    {n:"黃 Yellow F2907", p:{120:45,250:105,290:105}},
    {n:"灰 Gray F2906", p:{120:45,250:70,290:105}},
    {n:"米 Beige F2902", p:{120:45,250:105,290:80}}
  ],
  "SKIN": [
    {n:"39 超 白", p:{135:120,270:240,380:270}},
    {n:"69 象牙白", p:{135:120,270:240,380:270}},
    {n:"31 石 灰", p:{135:120,270:240,380:270}},
    {n:"17 芥末綠", p:{135:120,270:240,380:270}},
    {n:"18 翡翠綠", p:{135:120,270:240,380:270}},
    {n:"24 橙 色", p:{135:120,270:240,380:270}},
    {n:"15 大 紅", p:{135:120,270:240,380:270}},
    {n:"29 玫瑰紅", p:{135:120,270:240,380:270}},
    {n:"03 薰衣草", p:{135:120,270:240,380:270}},
    {n:"04 紫丁香", p:{135:120,270:240,380:270}},
    {n:"05 紫羅蘭", p:{135:120,270:240,380:270}},
    {n:"06 摩 卡", p:{135:120,270:240,380:270}},
    {n:"44 深 藍", p:{135:120,270:240,380:270}},
    {n:"09 黑 色", p:{135:120,270:240,380:270}}
  ],
  "勒斯緹": [
    {n:"白", p:{140:20,200:28,240:34,280:40}},
    {n:"米", p:{140:24,200:35,240:42,280:48}},
    {n:"奶茶", p:{140:24,280:48}},
    {n:"灰", p:{140:24,280:48}}
  ],
  "美國高級馬卡龍": [
    {n:"黑 Black F5025", p:{89:34,176:70}},
    {n:"綠 Green F5024", p:{89:24,176:50}},
    {n:"綠 Green F5023", p:{89:24,176:50}},
    {n:"綠 Green F5022", p:{89:24,176:50}},
    {n:"藍 Blue F5020", p:{89:24,176:50}},
    {n:"粉紅 Pink F5014", p:{89:24,176:50}},
    {n:"紅 Red F5012", p:{89:24,176:50}},
    {n:"橘 Orange F5011", p:{89:24,176:50}},
    {n:"橘 Orange F5010", p:{89:24,176:50}},
    {n:"黃 Yellow F5007", p:{89:24,176:50}},
    {n:"綠 Green F5003", p:{89:24,176:50}},
    {n:"黃 Yellow F5001", p:{89:24,176:50}},
    {n:"藍 Blue F5021", p:{89:21,176:50}},
    {n:"藍 Blue F5019", p:{89:21,176:50}},
    {n:"黃 Yellow F5008", p:{89:21,176:50}},
    {n:"綠 Green F5004", p:{89:21,176:50}},
    {n:"粉紅 Pink F5002", p:{89:21,176:50}},
    {n:"紫 Purple F5018", p:{89:21,176:39}},
    {n:"粉紅 Pink/紫 Purple F5015", p:{89:21,176:39}},
    {n:"白 White F5006", p:{89:21,176:39}},
    {n:"紫 Purple F5017", p:{89:24,176:39}},
    {n:"紫 Purple F5016", p:{89:24,176:50}},
    {n:"粉紅 Pink F5013", p:{89:24,176:39}},
    {n:"黃 Yellow F5009", p:{89:24,176:50}},
    {n:"粉紅 Pink F5005", p:{89:24,176:50}}
  ],
  "義大利再生羊綿紙": [
    {n:"灰 Gray/藍 Blue F8806", p:{120:27,360:80}},
    {n:"米 Beige F8803", p:{120:27,360:80}},
    {n:"灰 Gray F8802", p:{120:27,360:80}},
    {n:"灰 Gray/白 White F8801", p:{120:27,360:80}},
    {n:"黑 Black F8805", p:{120:38,360:113}},
    {n:"黑 Black F8804", p:{120:38,360:113}}
  ],
  "再生卓越50 Colorplan": [
    {n:"01 純白", p:{120:55,310:140}},
    {n:"02 霧光", p:{120:55,310:140}},
    {n:"03 自然灰", p:{120:55,310:140}},
    {n:"04 深海藍", p:{120:55,310:140}},
    {n:"05 深灰", p:{120:55,310:140}},
    {n:"06 木炭黑", p:{120:55,310:140}}
  ],
  "墨山日本灰卡": [
    {n:"灰", p:{350:25,400:28,450:32,650:46,750:53,850:60}}
  ],
  "儷影彩描紙": [
    {n:"05 銀 白", p:{200:145}},
    {n:"12 藍 色", p:{200:145}},
    {n:"16 銀 紫", p:{200:145}}
  ],
  "美國高級酒標紙": [
    {n:"米 Beige F9903", p:{89:40}},
    {n:"白 White F9902", p:{89:40}},
    {n:"白 White F9901", p:{89:40}}
  ],
  "德國彩艷紙": [
    {n:"白 White HB", p:{100:14,135:19,150:21,170:24}}
  ],
  "黑武士": [
    {n:"純黑", p:{120:20,200:35,240:40,360:60}}
  ],
  "麗革紙": [
    {n:"白", p:{116:50}},
    {n:"灰", p:{116:50}},
    {n:"淺棕", p:{116:50}},
    {n:"藏藍", p:{116:50}},
    {n:"螢光粉", p:{116:50}},
    {n:"螢光黃", p:{116:50}}
  ],
  "美國高級絲絨紙": [
    {n:"黑 Black FFT03", p:{300:256}},
    {n:"白 White/米 Beige FFT02", p:{300:256}},
    {n:"白 White FFT01", p:{300:256}}
  ],
  "美國可樂紙/厚卡紙": [
    {n:"灰 Gray F4622", p:{270:100}},
    {n:"灰 Gray F4621", p:{270:100}},
    {n:"灰 Gray F4620", p:{270:100}},
    {n:"灰 Gray F4619", p:{270:100}},
    {n:"灰 Gray F4618", p:{270:100}},
    {n:"藍 Blue F4617", p:{270:100}},
    {n:"紅 Red F4616", p:{270:100}},
    {n:"灰 Gray F4615", p:{118:27}},
    {n:"紅 Red F4614", p:{352:120}},
    {n:"黑 Black F4613", p:{270:100,352:133}},
    {n:"藍 Blue F4611", p:{270:100,352:133}},
    {n:"棕 Brown F4612", p:{270:100}},
    {n:"白 White F4600", p:{90:19,118:40,148:45,216:70,270:90,352:123,446:157}}
  ],
  "美國高級皇冠純棉紙": [
    {n:"米 Beige 822", p:{120:90,297:280,595:280}},
    {n:"白 White 821", p:{120:90,297:140,595:280}},
    {n:"白 White 820", p:{120:90,297:140,595:280}}
  ],
  "雲斯紙": [
    {n:"02 超白", p:{120:30,170:43,270:70}}
  ],
  "義大利再生東京紙": [
    {n:"黑 Black FTK07", p:{120:65,350:230}},
    {n:"藍 Blue FTK06", p:{120:65,350:230}},
    {n:"棕 Brown/紅 Red FTK05", p:{120:60,350:210}},
    {n:"灰 Gray FTK04", p:{120:60,350:210}},
    {n:"灰 Gray FTK03", p:{120:50,350:200}},
    {n:"米 Beige FTK02", p:{120:50,350:200}},
    {n:"白 White FTK01", p:{120:50,350:200}}
  ],
  "德國環保無漂紙": [
    {n:"牛皮 Khaki FNB", p:{120:38,300:84}},
    {n:"白 White FNC", p:{120:38,300:84}}
  ],
  "凝雪歐采": [
    {n:"藍白", p:{100:11}}
  ],
  "雅紋映畫": [
    {n:"白", p:{120:14,140:16,170:20,200:23,240:28}}
  ],
  "德國生物循環紙": [
    {n:"白 White F8105", p:{300:75}},
    {n:"白 White F8104", p:{300:140,600:370}},
    {n:"米 Beige F8103", p:{300:140,600:370}},
    {n:"米 Beige F8102", p:{300:140,600:370}},
    {n:"綠 Green F8101", p:{300:140,600:370}}
  ],
  "新波光紙": [
    {n:"新波光 冰白", p:{130:65,260:130}}
  ],
  "艾若薇": [
    {n:"超白", p:{105:20,128:24,151:29,186:35,233:44}},
    {n:"純白", p:{105:20,128:24,151:29,186:35,233:44}},
    {n:"白", p:{105:20,128:24,151:29,186:35,233:44}}
  ],
  "德國高級皮紋紙": [
    {n:"米 Beige F7116", p:{100:65,300:162}},
    {n:"橘 Orange/黃 Yellow F7115", p:{100:65,300:162}},
    {n:"綠 Green F7111", p:{100:54,300:162}},
    {n:"米 Beige F7110", p:{100:54,300:162}},
    {n:"藍 Blue F7109", p:{100:54,300:162}},
    {n:"粉紅 Pink/紅 Red F7108", p:{100:54,300:162}},
    {n:"粉紅 Pink F7107", p:{100:54,300:162}},
    {n:"黑 Black F7106", p:{100:54,300:162}},
    {n:"紅 Red F7105", p:{100:54,300:162}},
    {n:"灰 Gray F7104", p:{100:54,300:162}},
    {n:"牛皮 Khaki F7103", p:{100:54,300:162}},
    {n:"白 White F7102", p:{100:54,300:162}},
    {n:"白 White F7101", p:{100:54,300:162}},
    {n:"米 Beige F7118", p:{130:110,310:285}},
    {n:"灰 Gray F7117", p:{110:86,310:285}},
    {n:"綠 Green F7114", p:{120:64,300:162}},
    {n:"灰 Gray/黑 Black F7113", p:{120:64,300:162}},
    {n:"紅 Red F7112", p:{120:64,300:162}}
  ],
  "美國描圖紙": [
    {n:"藍 Blue 2207", p:{64:16}},
    {n:"灰 Gray 2206", p:{64:16}}
  ],
  "美國高級橡木紙": [
    {n:"黑 Black F704", p:{270:94}},
    {n:"灰 Gray F703", p:{270:94}},
    {n:"灰 Gray F702", p:{270:94}},
    {n:"白 White F700", p:{118:28}}
  ],
  "海德堡紙": [
    {n:"01 USED WHITE 再生白", p:{330:185,2:185,530:185}},
    {n:"02 FADED GREY 迷霧灰", p:{330:185,2:185,530:185}},
    {n:"03 SOFT KRAFT 柔軟棕", p:{330:185,2:185,530:185}},
    {n:"04 DULL BLACK 蒼海黑", p:{330:185,2:185,530:185}}
  ],
  "煉金紙": [
    {n:"01 Silver銀", p:{120:90,2:90,300:90}},
    {n:"02 Titanium鈦", p:{120:90,2:90,300:90}},
    {n:"03 Gold金", p:{120:90,2:90,300:90}},
    {n:"04 Copper銅", p:{120:90,2:90,300:90}},
    {n:"05 Platinum鉑", p:{120:90,2:90,300:90}}
  ],
  "義大利環保水果紙": [
    {n:"黑 Black F7712", p:{120:32,350:90}},
    {n:"牛皮 Khaki F7711", p:{120:32,350:90}},
    {n:"棕 Brown F7710", p:{120:32,350:90}},
    {n:"紅 Red F7709", p:{120:32,350:90}},
    {n:"藍 Blue F7708", p:{120:32,350:90}},
    {n:"棕 Brown F7707", p:{120:32,350:90}},
    {n:"粉紅 Pink F7706", p:{120:32,350:90}},
    {n:"綠 Green F7705", p:{120:32,350:90}},
    {n:"綠 Green F7704", p:{120:32,350:90}},
    {n:"牛皮 Khaki F7703", p:{120:32,350:90}},
    {n:"米 Beige F7702", p:{120:32,350:90}},
    {n:"白 White F7701", p:{120:32,350:90}}
  ],
  "細紋映畫": [
    {n:"白", p:{120:14,140:16,170:20,200:23,240:28}}
  ],
  "慕里洛": [
    {n:"白", p:{190:42,260:58,360:85}},
    {n:"米黃", p:{190:42,260:58}},
    {n:"卡其", p:{190:42,260:58}},
    {n:"棕", p:{190:58,260:79}},
    {n:"紅", p:{190:58,260:79}},
    {n:"綠", p:{190:58,260:79}},
    {n:"深藍", p:{190:58,260:79}},
    {n:"咖啡", p:{190:58,260:79}},
    {n:"黑", p:{190:58,260:79}}
  ],
  "德國925環保銀貂紙": [
    {n:"灰 Gray FG908", p:{310:275}},
    {n:"灰 Gray FG906", p:{310:275}},
    {n:"灰 Gray/白 White FG904", p:{310:275}},
    {n:"棕 Brown/灰 Gray FG907", p:{210:200,310:275}},
    {n:"灰 Gray FG905", p:{145:230}},
    {n:"灰 Gray/黑 Black FG903", p:{290:275}},
    {n:"藍 Blue FG902", p:{290:275}},
    {n:"灰 Gray FG901", p:{290:275}}
  ],
  "德國環保砂岩紙": [
    {n:"灰 Gray F6308", p:{120:85,300:170}},
    {n:"紅 Red F6307", p:{120:85,300:170}},
    {n:"綠 Green F6306", p:{120:85,300:170}},
    {n:"灰 Gray F6305", p:{120:75,300:170}},
    {n:"白 White F6304", p:{120:75,300:170}},
    {n:"黑 Black F6303", p:{100:75,300:170}},
    {n:"棕 Brown F6302", p:{100:75,300:170}},
    {n:"藍 Blue F6301", p:{100:75,300:170}}
  ],
  "新浪潮V系列": [
    {n:"純白", p:{122:25,151:31,227:49,273:60,320:75}},
    {n:"自然白", p:{122:26,151:32,175:39,227:51}}
  ],
  "新浪潮G系列": [
    {n:"超白", p:{151:31,175:36,227:49}}
  ],
  "義大利環保奇豔紙": [
    {n:"白 White Twill", p:{140:34,220:54,270:65}}
  ],
  "環保再生質樸紙": [
    {n:"01 雪白", p:{120:43,300:103}},
    {n:"02 駝色", p:{120:43,300:103}},
    {n:"03 褐色", p:{120:43,300:103}}
  ],
  "美國環保儷紋紙": [
    {n:"白 White F168", p:{90:17}},
    {n:"白 White F118", p:{90:17,111:35}},
    {n:"白 White/米 Beige F101", p:{90:17,111:35}},
    {n:"米 Beige F104", p:{90:17,111:35,176:48}},
    {n:"灰 Gray F103", p:{90:17,111:35,176:48}},
    {n:"白 White F100", p:{90:20,111:30,216:69}}
  ],
  "晨紙": [
    {n:"黑 Refined Black", p:{90:21,115:26,225:52,350:80,425:100}},
    {n:"熔岩紅 Lava", p:{115:29,225:56,350:86}},
    {n:"紅 True Red", p:{115:29,225:56,350:86}},
    {n:"石榴紅 Garnet", p:{115:29,225:56,350:86}}
  ],
  "雪韻": [
    {n:"超白", p:{120:12,150:15,180:18,210:21,250:25}}
  ],
  "德國環保新奇美": [
    {n:"白 White FN", p:{120:15,190:25,250:33}}
  ],
  "德國環保冰湖紙": [
    {n:"白 White FXL04", p:{200:68,250:84,300:102,350:138}},
    {n:"白 White FXL03", p:{115:30,135:35,200:54,250:66,300:78,350:108}},
    {n:"白 White FXL02", p:{115:30,200:54,250:66,300:78,350:108}},
    {n:"白 White FXL01", p:{90:18,100:20,115:24,135:28,160:32,200:44,250:54,300:68,350:94}}
  ],
  "韓國環保卡": [
    {n:"白 White FIW01", p:{300:51,350:60,400:68}}
  ],
  "亮面頂級卡": [
    {n:"白", p:{250:11,350:17}}
  ],
  "義大利新環保粉面彩柔紙": [
    {n:"白 White Recycled", p:{300:56,360:67,450:101}},
    {n:"米 Beige FCF02", p:{120:23,200:39,250:47,300:56,360:67,450:84}},
    {n:"白 White FCF01", p:{120:23,200:39,250:47,300:56,360:67,450:84}}
  ],
  "MATTER": [
    {n:"01 白色", p:{125:65,135:70,270:135,380:190}},
    {n:"03 米色", p:{125:65,135:70,270:135,380:190}},
    {n:"04 橘紅", p:{125:65,135:70,270:135,380:190}},
    {n:"05 淺灰", p:{125:65,135:70,270:135,380:190}},
    {n:"06 藍色", p:{125:65,135:70,270:135,380:190}},
    {n:"07 黑色", p:{125:65,135:70,270:135,380:190}}
  ],
  "米色映畫": [
    {n:"淺米", p:{120:11.2,140:13.4,200:19.2,240:23.2}}
  ],
  "義大利環保絲棉紙": [
    {n:"黑 Black FSF02", p:{120:200,300:230}},
    {n:"白 White FSF01", p:{120:200,300:230}}
  ],
  "德國再生環保紙": [
    {n:"黑 Black F6211", p:{120:62}},
    {n:"藍 Blue F6210", p:{120:62,300:165}},
    {n:"綠 Green F6209", p:{120:62,300:165}},
    {n:"灰 Gray F6203", p:{120:62,300:165}},
    {n:"紅 Red F6208", p:{120:58,300:157}},
    {n:"粉紅 Pink F6207", p:{120:58,300:157}},
    {n:"棕 Brown F6206", p:{300:165}},
    {n:"棕 Brown/牛皮 Khaki F6205", p:{300:157}},
    {n:"米 Beige F6204", p:{120:47,300:130}},
    {n:"灰 Gray F6202", p:{120:47,300:130}},
    {n:"白 White F6201", p:{120:47,300:130}}
  ],
  "芬蘭安索白卡": [
    {n:"白", p:{230:15.5,300:13.5,350:22.5}}
  ],
  "日本AP中性紙": [
    {n:"白", p:{80:11,120:17,157:22}},
    {n:"藍", p:{80:16,120:24}},
    {n:"粉", p:{80:16,120:24,157:31}},
    {n:"米", p:{80:16,120:17,157:22}},
    {n:"黃", p:{80:16,120:17,157:31}},
    {n:"超白", p:{120:17,157:22,186:27}}
  ],
  "麗斯格紋紙": [
    {n:"02 超白", p:{120:45,170:70,250:125,350:140}},
    {n:"03 米白", p:{120:45,170:70,250:125,350:140}}
  ],
  "肯特紙": [
    {n:"超白", p:{115:18,200:21,250:27,300:34,350:41,400:62}},
    {n:"暖白", p:{250:27,350:52}}
  ],
  "德國環保大麻紙": [
    {n:"白 White 德國環保大麻紙 Gmund Hanf F8202 10%", p:{120:48,320:116}},
    {n:"白 White/米 Beige 德國環保大麻紙 Gmund Hanf F8202 50%", p:{120:70,320:178}},
    {n:"白 White/米 Beige 德國環保大麻紙 Gmund Hanf F8201 100%", p:{120:84,320:210}}
  ],
  "日本王子美樂紙": [
    {n:"白", p:{105:15,128:18,157:23,209:30,233:35,262:40}}
  ],
  "超滑面剛古紙": [
    {n:"02 超白", p:{90:15,100:17,160:72,220:105,300:140,400:185}}
  ],
  "德國環保無透紙": [
    {n:"白 White 270", p:{80:25,100:30,135:40,270:80}}
  ],
  "德國清凝/杉形紙": [
    {n:"黑 Black FUB04", p:{310:275}},
    {n:"灰 Gray FUB03", p:{310:275}},
    {n:"米 Beige FUB02", p:{250:220}},
    {n:"白 White FUB01", p:{250:220}},
    {n:"黑 Black FUC04", p:{110:150,310:275}},
    {n:"灰 Gray FUC03", p:{110:150,310:275}},
    {n:"米 Beige FUC02", p:{130:130,250:220}},
    {n:"灰 Gray/白 White FUC01", p:{130:130,250:220}}
  ],
  "韻久日本灰卡": [
    {n:"灰", p:{350:30,400:34,450:38}}
  ],
  "韓國環保再生奇艷紙 30%": [
    {n:"白 White FEC01", p:{112:19,122:21,145:25,174:30,203:34,222:38,251:43}}
  ],
  "人文紙": [
    {n:"圓融紙", p:{120:31,170:44,250:65,350:91}},
    {n:"人文紙", p:{120:31,170:44,250:65,350:91}},
    {n:"心光紙", p:{120:31,170:44,250:65,350:91}}
  ],
  "黎石紙": [
    {n:"石膏白 Gesso", p:{120:20,180:28,250:38}},
    {n:"石灰白 Limestone", p:{120:20,180:28,250:38}},
    {n:"黏土灰 Clay", p:{120:23,180:34,250:46}},
    {n:"石英 Quartz", p:{120:23,180:34,250:46}},
    {n:"生棕 Raw Umber", p:{120:23,180:34,250:46}},
    {n:"銅綠 Verdigris", p:{120:23,180:34,250:46}},
    {n:"板岩灰 Ardesia", p:{120:25,180:37,250:50}},
    {n:"赭黃 Terra Gialla", p:{120:25,180:37,250:50}},
    {n:"褐煤 Lignite", p:{120:25,180:37,250:50}},
    {n:"鈷藍 Cobalt", p:{120:25,180:37,250:50}},
    {n:"霧藍 Azure", p:{120:25,180:37,250:50}},
    {n:"鏽棕 Rust", p:{120:25,180:37,250:50}},
    {n:"紅土 Terra Rossa", p:{120:25,180:37,250:50}},
    {n:"赤陶 Terracotta", p:{120:25,180:37,250:50}}
  ],
  "單面壹級卡": [
    {n:"白", p:{220:700,240:7,280:8,300:9,330:9,380:11}}
  ],
  "美國環保水洗牛皮紙": [
    {n:"紅 Red 5205", p:{303:275}},
    {n:"藍 Blue 5204", p:{303:275}},
    {n:"黑 Black 5203", p:{303:275}},
    {n:"棕 Brown 5202", p:{303:275}},
    {n:"白 White 5201", p:{303:275}}
  ],
  "義大利再生皮紋紙": [
    {n:"黑 Black F6606", p:{250:73}},
    {n:"棕 Brown F6605", p:{250:73}},
    {n:"綠 Green F6604", p:{250:60}},
    {n:"灰 Gray F6603", p:{250:60}},
    {n:"牛皮 Khaki/米 Beige F6602", p:{250:54}},
    {n:"米 Beige F6601", p:{250:54}}
  ],
  "麗奇映畫": [
    {n:"白", p:{120:14,140:16,170:20,200:23,240:28}}
  ],
  "奧地利鸚鵡螺再生環保紙": [
    {n:"白 White FMN", p:{80:16,90:18,100:20,120:24,160:32,200:44,250:56,300:67,350:78}}
  ],
  "環保芬蘭紙 (Tringa) Paptic Tringa": [
    {n:"白 White PT", p:{60:40,80:52,110:60,125:76,140:84,200:132}}
  ],
  "德國新雅柔卡": [
    {n:"白 White FAD", p:{270:43,300:49,350:54,400:64}}
  ],
  "炫光紙": [
    {n:"01 銀白 Lustre", p:{120:65,2:130,250:100,300:200}},
    {n:"03 銀灰 Galvanised", p:{120:65,2:130,250:100,300:200}},
    {n:"04 銀碳 Ionised", p:{120:65,2:130,250:100,300:200}},
    {n:"06 冰白 Ice Gold", p:{120:65,2:130,250:100,300:200}},
    {n:"07 白金 White Gold", p:{120:65,2:130,250:100,300:200}},
    {n:"08 米金 Gold leaf", p:{120:65,2:130,250:100,300:200}},
    {n:"19 炫金 Bright Gold", p:{120:65,2:130,250:100,300:200}},
    {n:"20 深紅 Red Lacquer", p:{120:65,2:130,250:100,300:200}},
    {n:"21 巧克力 Chocolate", p:{120:65,2:130,250:100,300:200}},
    {n:"22 皇金 Super Gold", p:{120:65,2:130,250:100,300:200}}
  ],
  "日本雅子": [
    {n:"01 棉白", p:{105:42,140:56,244:104}},
    {n:"02 石灰", p:{105:42,140:56,244:104}},
    {n:"03 自然白", p:{105:42,140:56,244:104}},
    {n:"04 土褐", p:{105:42,140:56,244:104}},
    {n:"05 琥珀紅", p:{105:42,140:56,244:104}},
    {n:"06 陶土黃", p:{105:42,140:56,244:104}},
    {n:"07 可可棕", p:{105:48,140:64,244:122}},
    {n:"08 橄欖綠", p:{105:48,140:64,244:122}},
    {n:"09 紅莓", p:{105:48,140:64,244:122}},
    {n:"10 雅典黑", p:{105:48,140:64,244:122}},
    {n:"11 藍海", p:{105:48,140:64,244:122}},
    {n:"12 紅布朗", p:{105:48,140:64,244:122}},
    {n:"13 森林綠", p:{105:58,140:76,244:148}},
    {n:"14 甜橘", p:{105:58,140:76,244:148}},
    {n:"15 咖啡豆", p:{105:58,140:76,244:148}},
    {n:"16 海軍藍", p:{105:58,140:76,244:148}},
    {n:"17 暮色棕", p:{105:58,140:76,244:148}},
    {n:"18 午夜藍", p:{105:58,140:76,244:148}}
  ],
  "美國皮革紙": [
    {n:"#01 Butterscotch 牛奶糖色", p:{303.4:185,2:220}},
    {n:"#02 Tan 牛皮色", p:{303.4:185,2:220}},
    {n:"#03 Black 黑色", p:{303.4:185,2:220}}
  ],
  "日本環保畫閣卡": [
    {n:"白 White FHG", p:{240:50,288:60}}
  ],
  "德國大地之母": [
    {n:"黑 Black F5309", p:{350:200}},
    {n:"棕 Brown F5308", p:{350:200}},
    {n:"橘 Orange F5307", p:{350:200}},
    {n:"灰 Gray F5306", p:{350:190}},
    {n:"橘 Orange/黃 Yellow F5305", p:{350:190}},
    {n:"綠 Green/黃 Yellow F5304", p:{350:190}},
    {n:"綠 Green F5303", p:{350:170}},
    {n:"米 Beige F5302", p:{350:170}},
    {n:"白 White F5301", p:{350:170}}
  ],
  "中性手感象牙紙": [
    {n:"自然白 White", p:{120:15,180:23,240:30,300:40,350:47}}
  ],
  "酒墊卡": [
    {n:"01 白色", p:{300:55}}
  ],
  "羅紗紙": [
    {n:"無垢", p:{81:18,116:26,151:49,198:45,244:79,320:104}},
    {n:"灰40", p:{116:37,151:49,244:79}},
    {n:"灰50", p:{116:37,151:49,244:79}},
    {n:"灰70", p:{116:37,151:49,244:79}},
    {n:"漆黑", p:{81:23,116:33,151:62,198:57,244:100,320:131}},
    {n:"濃赤", p:{81:23,116:33,151:62,198:57,244:100,320:131}}
  ],
  "美國環保可美紙": [
    {n:"米 Beige F24PT11", p:{346:125}},
    {n:"灰 Gray F24PT10", p:{284:98,406:156}},
    {n:"灰 Gray F24PT09", p:{284:98,406:156}},
    {n:"棕 Brown/牛皮 Khaki F24PT08", p:{284:98,406:156}},
    {n:"黑 Black F24PT07", p:{338:132,487:194}},
    {n:"黑 Black F24PT06", p:{338:110,487:178}},
    {n:"牛皮 Khaki F24PT05", p:{338:110,487:178}},
    {n:"牛皮 Khaki F24PT04", p:{338:110,487:178}},
    {n:"米 Beige F24PT03", p:{338:88,487:144}},
    {n:"白 White F24PT02", p:{338:88,487:144}},
    {n:"白 White F24PT01", p:{338:88,487:144}}
  ],
  "義大利環保奇豔紙/再生雅豔紙": [
    {n:"白 White Recycled", p:{120:19,270:38,320:44}},
    {n:"白 White Primsa", p:{140:44,250:76,320:97}}
  ],
  "麗斯毯紋紙": [
    {n:"02 超白", p:{100:32,120:38,170:58,250:85,320:110}},
    {n:"03 米白", p:{100:32,120:38,170:58,250:85,320:110}},
    {n:"16 紅色", p:{100:32,120:38,170:58,250:85,320:110}},
    {n:"17 深藍", p:{100:32,120:38,170:58,250:85,320:110}},
    {n:"18 黑色", p:{100:32,120:38,170:58,250:85,320:110}}
  ],
  "德國馬諦斯": [
    {n:"粉紅 Pink F6169", p:{120:45,300:105}},
    {n:"紫 Purple F6168", p:{120:45,300:105}},
    {n:"粉紅 Pink F6167", p:{120:45,300:105}},
    {n:"藍 Blue F6166", p:{120:45,300:105}},
    {n:"綠 Green F6165", p:{120:45,300:105}},
    {n:"綠 Green F6164", p:{120:45,300:105}},
    {n:"牛皮 Khaki F6148", p:{120:45,300:105}},
    {n:"紅 Red F6140", p:{120:45,300:105}},
    {n:"藍 Blue F6139", p:{120:45,300:105}},
    {n:"白 White F6124", p:{120:45,300:105}},
    {n:"白 White F6199", p:{120:45,300:105}},
    {n:"橘 Orange/黃 Yellow F6194", p:{120:45,300:105}},
    {n:"灰 Gray F6193", p:{120:45,300:105}},
    {n:"綠 Green F6191", p:{120:45,300:105}},
    {n:"藍 Blue/黑 Black F6189", p:{120:45,300:105}},
    {n:"綠 Green/黑 Black F6188", p:{120:45,300:105}},
    {n:"棕 Brown/黑 Black F6187", p:{120:45,300:105}},
    {n:"綠 Green/黃 Yellow F6186", p:{120:45,300:105}},
    {n:"牛皮 Khaki/米 Beige F6185", p:{120:45,300:105}},
    {n:"米 Beige F6184", p:{120:45,300:105}},
    {n:"藍 Blue F6162", p:{120:45,300:105}},
    {n:"紅 Red F6192", p:{120:45,240:90,300:105}},
    {n:"綠 Green F6190", p:{120:45,240:90,300:105}},
    {n:"灰 Gray/白 White F6172", p:{120:45,300:105}},
    {n:"白 White/粉紅 Pink F6171", p:{120:45,300:105}},
    {n:"紫 Purple F6163", p:{100:35,300:105}},
    {n:"綠 Green F6160", p:{100:35,300:105}},
    {n:"灰 Gray F6157", p:{100:35,300:105}},
    {n:"藍 Blue F6155", p:{100:35,300:105}},
    {n:"白 White F6150", p:{100:35,300:105}},
    {n:"白 White F6149", p:{100:35,300:105}},
    {n:"米 Beige F6146", p:{100:35,300:105}},
    {n:"灰 Gray F6145", p:{100:35,300:105}},
    {n:"藍 Blue F6144", p:{100:35,300:105}},
    {n:"棕 Brown F6138", p:{100:35,300:105}},
    {n:"棕 Brown F6137", p:{100:35,300:105}},
    {n:"綠 Green F6132", p:{100:35,300:105}},
    {n:"黃 Yellow F6131", p:{100:35,300:105}},
    {n:"牛皮 Khaki/米 Beige F6127", p:{100:35,300:105}},
    {n:"灰 Gray F6123", p:{100:35,300:105}},
    {n:"灰 Gray F6121", p:{100:35,300:105}},
    {n:"綠 Green F6116", p:{100:35,300:105}},
    {n:"藍 Blue F6114", p:{100:35,300:105}},
    {n:"牛皮 Khaki F6112", p:{100:35,300:105}},
    {n:"粉紅 Pink F6111", p:{100:35,300:105}},
    {n:"米 Beige F6107", p:{100:35,300:105}},
    {n:"牛皮 Khaki F6106", p:{100:35,300:105}},
    {n:"棕 Brown F6104", p:{100:35,300:105}},
    {n:"綠 Green F6103", p:{100:35,300:105}},
    {n:"藍 Blue F6101", p:{100:35,300:105}},
    {n:"藍 Blue F6159", p:{100:35,200:70,300:105}},
    {n:"紅 Red F6154", p:{100:35,200:70,300:105}},
    {n:"粉紅 Pink F6136", p:{100:35,200:70,300:105}},
    {n:"橘 Orange F6135", p:{100:35,200:70,300:105}},
    {n:"藍 Blue F6134", p:{100:35,200:70,300:105}},
    {n:"綠 Green F6128", p:{100:35,200:70,300:105}},
    {n:"灰 Gray F6125", p:{100:35,200:70,300:105}},
    {n:"黑 Black F6110", p:{100:35,200:70,300:105}}
  ],
  "美國高級晶圓紙": [
    {n:"紅 Red F503", p:{270:104}},
    {n:"黑 Black F502", p:{270:104}},
    {n:"藍 Blue F501", p:{270:104}},
    {n:"白 White F500", p:{118:31,216:64,352:116}}
  ],
  "環保芬蘭紙 (Strerna) Paptic Sterna": [
    {n:"白 White PS", p:{85:46,100:51}}
  ],
  "蒝織色紙": [
    {n:"秋香 36", p:{116:42,198:70}},
    {n:"黃綠 20", p:{116:42,198:70}},
    {n:"草綠 28", p:{116:42,198:70}},
    {n:"水藍 55", p:{116:42,198:70}},
    {n:"灰 07", p:{116:42,198:70}},
    {n:"棕 12", p:{116:42,198:70}},
    {n:"土黃 57", p:{116:42,198:70}},
    {n:"米黃 09", p:{116:42,198:70}},
    {n:"米 05", p:{116:42,198:70}},
    {n:"粉橘 15", p:{116:42,198:70}},
    {n:"綠 32", p:{116:50,198:84}},
    {n:"深藍 31", p:{116:50,198:84}},
    {n:"朱 23", p:{116:50,198:84}},
    {n:"深紅 30", p:{116:50,198:84}},
    {n:"黑 04", p:{116:50,198:84}},
    {n:"深綠 42", p:{116:60,198:100}},
    {n:"深紫 41", p:{116:60,198:100}},
    {n:"赤 43", p:{116:60,198:100}},
    {n:"咖啡 40", p:{116:60,198:100}},
    {n:"白 02", p:{198:70,116:42}}
  ],
  "美國環保象牙紙": [
    {n:"紅 Red F462", p:{216:80,270:100,352:140}},
    {n:"藍 Blue F460", p:{216:80,270:100,352:140}},
    {n:"灰 Gray F458", p:{270:81,352:123}},
    {n:"黑 Black F457", p:{118:38,270:100,352:140,446:178}},
    {n:"棕 Brown F456", p:{118:38,270:100}},
    {n:"米 Beige F455", p:{90:16,118:33,270:81}},
    {n:"白 White F451", p:{90:16,118:33,297:89}},
    {n:"灰 Gray/綠 Green F423", p:{118:33,216:69,270:81}},
    {n:"藍 Blue F422", p:{118:33,270:69}},
    {n:"綠 Green F421", p:{118:33,270:69}},
    {n:"紫 Purple F420", p:{216:69}},
    {n:"藍 Blue F419", p:{270:100,352:140}},
    {n:"灰 Gray F418", p:{216:69,352:123}},
    {n:"灰 Gray F417", p:{216:69,270:81}},
    {n:"紅 Red F416", p:{270:100,352:140}},
    {n:"灰 Gray F415", p:{118:28,352:123}},
    {n:"白 White F414", p:{118:28}},
    {n:"灰 Gray/白 White F413", p:{90:16,118:28}},
    {n:"粉紅 Pink F410", p:{75:16}},
    {n:"白 White/米 Beige F405", p:{75:15,118:33,176:70,216:65}},
    {n:"米 Beige F402", p:{90:16,118:33,176:43}},
    {n:"白 White F401", p:{75:15,118:33,216:83}},
    {n:"白 White F400", p:{90:17,118:36,176:70,216:83,297:89,352:118,446:164}}
  ],
  "皮草紙": [
    {n:"01 奶白 Milk", p:{120:115,2:115,300:115}},
    {n:"02 奶黃 Whipped Cream", p:{120:115,2:115,300:115}}
  ],
  "德國再生環保隕紋紙": [
    {n:"黑 Black FBG09", p:{310:190}},
    {n:"棕 Brown FBG04", p:{310:190}},
    {n:"棕 Brown FBG03", p:{310:190}},
    {n:"灰 Gray FBG08", p:{130:100,310:190}},
    {n:"綠 Green FBG07", p:{130:100,310:190}},
    {n:"藍 Blue FBG06", p:{130:100,310:190}},
    {n:"粉紅 Pink FBG05", p:{130:100,310:190}},
    {n:"白 White FBG02", p:{130:100,310:190}},
    {n:"黑 Black FBG01", p:{130:100,310:190}}
  ],
  "日本再生雲灰卡": [
    {n:"灰 Gray TCG03", p:{350:65}},
    {n:"灰 Gray TCG02", p:{350:65}},
    {n:"灰 Gray TCG01", p:{350:65}}
  ],
  "安格映畫": [
    {n:"白", p:{120:14,140:16,170:20,200:23,240:28}}
  ],
  "林感卡": [
    {n:"白", p:{330:22.6}}
  ],
  "冰雪紙": [
    {n:"01 瑜珈澄", p:{120:80,250:165,360:235}},
    {n:"02 熱情紅", p:{120:80,250:165,360:235}},
    {n:"03 魅力棕", p:{120:80,250:165,360:235}},
    {n:"04 知性藍", p:{120:80,250:165,360:235}},
    {n:"05 神秘黑", p:{120:80,250:165,360:235}},
    {n:"01 雪光", p:{115:80,235:160}},
    {n:"02 銀光", p:{115:80,235:160}},
    {n:"03 銅光", p:{115:80,235:160}},
    {n:"01 白色", p:{90:40,230:100}},
    {n:"02 暖色", p:{90:40,230:100}}
  ],
  "日標 HUWA HUWA": [
    {n:"白", p:{75:9.7,80:10.5,85:9.3,105:12}}
  ],
  "絲紋白紙": [
    {n:"白", p:{240:52,300:62,350:75}},
    {n:"米", p:{240:52,300:62,350:75}},
    {n:"黃", p:{120:24,160:31,240:52,300:62}}
  ],
  "德國環保金豔紙": [
    {n:"白 White G04", p:{310:255}},
    {n:"黑 Black G03", p:{310:255}},
    {n:"灰 Gray G02", p:{310:255}},
    {n:"白 White G01", p:{310:255}}
  ],
  "德國環保金碧紙": [
    {n:"米 Beige FT17", p:{310:275}},
    {n:"米 Beige FT14", p:{310:275}},
    {n:"橘 Orange FT13", p:{310:275}},
    {n:"橘 Orange FT12", p:{310:275}},
    {n:"綠 Green/黃 Yellow FT11", p:{310:275}},
    {n:"棕 Brown FT09", p:{310:275}},
    {n:"黃 Yellow FT04", p:{310:275}},
    {n:"黃 Yellow FT03", p:{310:275}},
    {n:"米 Beige FT16", p:{250:220}},
    {n:"米 Beige FT15", p:{250:220}},
    {n:"黃 Yellow FT05", p:{110:160,310:275}},
    {n:"棕 Brown/牛皮 Khaki FT02", p:{110:160,310:275}},
    {n:"白 White FT01", p:{110:160,310:275}}
  ],
  "魁特紙": [
    {n:"01 牛皮", p:{100:50}},
    {n:"01 白色", p:{188:95,227:115}}
  ],
  "凝雪厚卡": [
    {n:"白", p:{330:34,360:38,390:40,470:78}}
  ],
  "WILD": [
    {n:"01 White 大地白", p:{150:75,2:75,300:225,450:75,850:75}},
    {n:"02 Clay 磚土紅", p:{150:75,2:75,300:225,450:75,850:75}},
    {n:"03 Brown 泥土褐", p:{150:75,2:75,300:225,450:75,850:75}},
    {n:"04 Black 礦石黑", p:{150:75,2:75,300:225,450:75,850:75}},
    {n:"05 Green 草原綠", p:{150:75,2:75,300:225,450:75,850:75}}
  ],
  "美國環保萊妮紙/萊麗紙": [
    {n:"黃 Yellow F633", p:{227:109}},
    {n:"米 Beige F632", p:{227:109}},
    {n:"白 White F631", p:{118:50,227:109,311:153}},
    {n:"黑 Black F673", p:{118:45,216:69}},
    {n:"紅 Red F618", p:{216:69}},
    {n:"白 White F615", p:{90:19,216:55}},
    {n:"藍 Blue F605", p:{90:19,216:55}},
    {n:"米 Beige F607", p:{90:19,118:38,216:55}},
    {n:"灰 Gray F604", p:{90:19,118:38,216:55}},
    {n:"白 White/米 Beige F602", p:{90:19,118:38,216:70}},
    {n:"白 White F601", p:{90:32,118:54,176:75,216:90,352:106}},
    {n:"白 White F600", p:{90:19,118:54,216:70}}
  ],
  "雪莎": [
    {n:"自然白", p:{100:9.5,140:13.4,200:19.2,240:23.2}}
  ],
  "彩畫紙": [
    {n:"白", p:{120:20,160:28,220:45,320:56}}
  ],
  "萊卡超白超雪銅": [
    {n:"白 White HM", p:{150:18.7,170:21.1,200:24.8,250:30.9,300:37.3,350:44}}
  ],
  "韓國星艷紙": [
    {n:"白 White FIF01", p:{100:16,130:19,160:23,190:28,210:31,230:35,260:41}}
  ],
  "英國新百代": [
    {n:"01純白", p:{120:55,250:120,300:140,450:210}},
    {n:"02雪白", p:{120:55,250:120,300:140,450:210}},
    {n:"03米白", p:{120:55,250:120,300:140,450:210}},
    {n:"08深紅", p:{120:55,250:120,300:140,450:210}},
    {n:"10深綠", p:{120:55,250:120,300:140,450:210}},
    {n:"13靛藍", p:{120:55,250:120,300:140,450:210}},
    {n:"14深灰", p:{120:55,250:120,300:140,450:210}},
    {n:"15深咖啡", p:{120:55,250:120,300:140,450:210}},
    {n:"21印度黃", p:{120:55,250:120,300:140,450:210}},
    {n:"22奇異果", p:{120:55,250:120,300:140,450:210}},
    {n:"23草綠", p:{120:55,250:120,300:140,450:210}},
    {n:"24杉綠", p:{120:55,250:120,300:140,450:210}},
    {n:"25南瓜橘", p:{120:55,250:120,300:140,450:210}},
    {n:"26辣紅", p:{120:55,250:120,300:140,450:210}},
    {n:"27胭脂紅", p:{120:55,250:120,300:140,450:210}},
    {n:"28粉紅", p:{120:55,250:120,300:140,450:210}},
    {n:"29珊瑚紅", p:{120:55,250:120,300:140,450:210}},
    {n:"30桃紅", p:{120:55,250:120,300:140,450:210}},
    {n:"31葡萄", p:{120:55,250:120,300:140,450:210}},
    {n:"32紫藤花", p:{120:55,250:120,300:140,450:210}},
    {n:"33粉藍", p:{120:55,250:120,300:140,450:210}},
    {n:"34淺藍", p:{120:55,250:120,300:140,450:210}},
    {n:"35天藍", p:{120:55,250:120,300:140,450:210}},
    {n:"36深藍", p:{120:55,250:120,300:140,450:210}},
    {n:"37粉綠", p:{120:55,250:120,300:140,450:210}},
    {n:"38抹茶綠", p:{120:55,250:120,300:140,450:210}},
    {n:"39加勒比藍", p:{120:55,250:120,300:140,450:210}},
    {n:"40珊瑚藍", p:{120:55,250:120,300:140,450:210}},
    {n:"41卡布奇諾", p:{120:55,250:120,300:140,450:210}},
    {n:"42粉紅玫瑰", p:{120:55,250:120,300:140,450:210}},
    {n:"43野玫瑰", p:{120:55,250:120,300:140,450:210}},
    {n:"44黑莓", p:{120:55,250:120,300:140,450:210}},
    {n:"45波特紅", p:{120:55,250:120,300:140,450:210}},
    {n:"46鵝卵石", p:{120:55,250:120,300:140,450:210}},
    {n:"47石灰", p:{120:55,250:120,300:140,450:210}},
    {n:"48玄武岩", p:{120:55,250:120,300:140,450:210}},
    {n:"49粉灰", p:{120:55,250:120,300:140,450:210}},
    {n:"50鋼鐵灰", p:{120:55,250:120,300:140,450:210}},
    {n:"51信天翁", p:{120:55,250:120,300:140,450:210}},
    {n:"52深黑", p:{120:55,250:120,300:140,450:210}}
  ],
  "德國馬諦斯環保棉紙": [
    {n:"紅 Red FCC05", p:{120:58,350:150}},
    {n:"灰 Gray FCC03", p:{120:58,350:150}},
    {n:"黑 Black FCC04", p:{120:70,350:184}},
    {n:"米 Beige FCC02", p:{120:48,350:130}},
    {n:"白 White FCC01", p:{120:48,350:130}}
  ],
  "格蒙德裱紙": [
    {n:"亮白／萊妮紋", p:{120:50}},
    {n:"核桃棕／萊妮紋", p:{120:60}},
    {n:"鴿子灰／萊妮紋", p:{120:60}},
    {n:"海軍藍／萊妮紋", p:{120:70}},
    {n:"原紅／畫布紋", p:{120:60}},
    {n:"沙金／髮絲紋", p:{130:100}},
    {n:"鋁銀／髮絲紋", p:{130:100}}
  ],
  "德國環保金綺紙": [
    {n:"粉紅 Pink/紅 Red FA04", p:{430:470}},
    {n:"黃 Yellow FA02", p:{430:470}},
    {n:"粉紅 Pink FA03", p:{310:255}},
    {n:"綠 Green/黃 Yellow FA01", p:{310:255}},
    {n:"藍 Blue/黑 Black FR13", p:{310:255}},
    {n:"白 White FR09", p:{310:255}},
    {n:"紅 Red FR12", p:{110:150}},
    {n:"灰 Gray/綠 Green FR11", p:{110:150}},
    {n:"紅 Red FR06", p:{110:150}},
    {n:"綠 Green/黑 Black FR10", p:{110:150,310:255}},
    {n:"綠 Green FR08", p:{110:150,310:255}},
    {n:"紅 Red/綠 Green FR07", p:{110:150,310:255}},
    {n:"灰 Gray FR05", p:{110:150,310:255}},
    {n:"灰 Gray/藍 Blue FR04", p:{110:150,310:255}},
    {n:"白 White FR03", p:{110:150,310:255}},
    {n:"藍 Blue FR02", p:{110:150,310:255}},
    {n:"藍 Blue/黑 Black FR01", p:{110:150,310:255}}
  ],
  "六玉映畫": [
    {n:"白", p:{140:16,200:23,240:28}}
  ],
};
