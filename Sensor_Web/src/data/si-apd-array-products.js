const page = (name, date, url, points) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/apd/si-apd-array/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/apd/si-apd-array.html";

const s8550Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s8550-02_kapd1031e.pdf";

const s15249Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15249_kapd1084e.pdf";

const guide =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/si_apd_kapd0001e.pdf";

const indexIntro =
  "索引一级标题写 Si APD arrays，前后没有空格。页面标题是 Si APD arrays | Hamamatsu Photonics，arrays 和竖线之间是一个空格。说明写 Silicon APD array is a sensor with multiple Si APD arranged in a single package。共两行，newState 都是 false。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。温度系数和暗电流两列默认没有勾选。筛选框先列 S15249，再列 S8550-02。";

const docs8550 =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。";

const docs15249 =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，表面贴装注意事项 Precautions / Surface mount type products 标 407 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。";

const place8550 =
  "手册应用写 Low-light-level photometry in the visible range 和 Detector systems combined with scintillator。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。量子效率是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const place15249 =
  "手册应用写 Particle counters 和 Flow cytometry。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。量子效率是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

export const siApdArrayProducts = [
  {
    id: "s8550",
    date: "2012-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S8550：滨松低噪声短波增强的 4×8 元 APD 阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1031E01，页脚写 Oct. 2012 DN，并写 Information described in this material is current as of October, 2012，记为约 2012 年 10 月。索引只有 S8550-02 这一行，newState 是 false。productExp 把乘号写成拉丁字母 x。手册没有截止频率，写上升时间 1.5 ns。产品页、索引和选型指南写成 250 MHz。",
    applications: [],
    technologies: [],
    models: [
      page("S8550-02", "2012-10", part("S8550-02"), [
        "产品页没有写发布日期。页眉写 Si APD array。一级标题写 S8550-02。页面标题和 og:title 都写 Si APD array S8550-02。二级标题写 4 × 8 element APD array with low noise and enhanced short-wavelength sensitivity，乘号是 ×。正文前面有一个空的 p。正文写 The S8550-02 is an APD (avalanche photodiode) array designed for short wavelength detection, featuring low noise and low terminal capacitance。下一句写 The S8550-02 also offers uniform gain and small crosstalk between each element。特性五条的连字符后面没有空格：High sensitivity and low noise in short wavelength region、Low terminal capacitance、Optimized for blue light detection、Uniform gain and low crosstalk variation between each element、Nonmagnetic。元描述和 og:description 把正文和特性连在一起，element 和 Features 之间没有空格。产品页没有写应用栏。下载标 546 KB/PDF。",
        "规格表类型写 4×8 elements array。感光面积 1.6 × 1.6 mm，封装 Ceramic。峰值 600 nm，光谱范围 320 to 1000 nm，暗电流最大 10 nA，截止频率典型 250 MHz，终端电容典型 9 pF，击穿电压典型 400 V，温度系数典型 0.78 V/℃，增益典型 50。规格表没有元素数、间距、窗口、量子效率和上升时间。测量条件写 Ta=25 ℃，Peak sensitivity wavelength: M=50，Dark current: Per 1 element, M=50，Terminal capacitance: Per 1 element, M=50, f=10 kHz，unless otherwise noted。页面锚点只有 Specifications、Dimensional outline (unit: mm) 和 Related documents，没有光谱图。外形图文件是 kapda0131ea.svg，资源名 KAPDA0131EA.svg。" +
          docs8550,
        `${indexIntro}这一行 newState 是 false。productName 写 Si APD array。productExp 写 4 x 8 element APD array，x 是拉丁字母，element 是单数。thumbAlt 写 S8550-02 product photo。typeNameSort 写成 S08550-02。类型的值写成 4×8 elements，显示写成 4×8 elements array。感光面积的值写成 1.6 × 1.6，显示才补上 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。峰值的值写成 600，显示写成 600 nm。击穿电压的值写成 400，显示写成 400 V。温度系数的值写成 0.78，显示写成 0.78 V/℃。暗电流的值写成 10，显示写成 10 nA。截止频率的值写成 250，显示写成 250 MHz。终端电容的值写成 9，显示写成 9 pF。增益的值是 50，显示也是 50。封装的值和显示都写成 Ceramic。手册标 546 KB。索引地址 ${index}。`,
        `手册 ${s8550Sheet}。目录号 KAPD1031E01，页脚写 Cat. No. KAPD1031E01 Oct. 2012 DN，并写 current as of October, 2012，October 后面有逗号。封面标题与二级标题相同，乘号是 ×。特性没有连字符。应用写 Low-light-level photometry in the visible range 和 Detector systems combined with scintillator。结构表感光面积 (per 1 element) 1.6 × 1.6 mm，间距 2.3 mm，元素数 32，封装 Ceramic, nonmagnetic，窗口材料 Epoxy resin。绝对最大工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C，反向电流 200 μA，正向电流 10 mA。电特性表光谱范围 320 to 1000 nm，峰值 600 nm，条件 M=50。量子效率最小 60%、典型 70%，条件 λ=420 nm。击穿电压典型 400 V、最大 500 V。暗电流典型 1 nA、最大 10 nA，条件 Per 1 element, M=50。终端电容典型 9 pF，条件 Per 1 element, M=50, f=10 kHz。增益典型 50。增益起伏最大 ±15%，条件 M=50。暗电流温度系数典型 1.1 times/°C。上升时间典型 1.5 ns。击穿电压温度系数典型 0.78 V/°C。过剩噪声指数典型 0.2，条件 λ=420 nm。这张表没有截止频率。产品页和索引写成 250 MHz。量子效率图号 KAPDB0059EB。增益图号 KAPDB0063EA，条件 Typ. Ta=25 °C, λ=420 nm。暗电流图号 KAPDB0200EA，条件 per 1 element。终端电容图号 KAPDB0201EA。串扰图号 KAPDC0039EA，注写 element gap: 0.7 mm, typical example。增益均匀性图号 KAPDB0202EA，注写 Average gain = 50。产品页没有这六张图。外形图号 KAPDA0131EA，标题写 Dimensional outline (unit: mm)，感光面写成 1.6 × 1.6 (anode)，并有两列阵列和管脚对照表。注写 Cathode 1: cathode of array 1，Cathode 2: cathode of array 2。` +
          `选型指南 ${guide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。第 8/22 页把这一行放在 4 × 8 element array。感光面积写成 1.6 × 1.6，下一行 (× 32 elements)。光谱范围 320 to 1000，击穿电压最大 500 V，温度系数 0.78 V/°C，截止频率 250 MHz，终端电容 9 pF，旁边写 (per element)，增益 50，增益栏表头写 λ=420 nm，封装 Ceramic。量子效率图号 KAPDB0125EC，图例把 S8550-02 和 S8664-55/-1010 放在一起。同一页光谱响应图的图例也写 S8550-02，条件 Typ. Ta=25 °C, M=50 at 600 nm，图号 KAPDB0073EF。` +
          place8550,
      ]),
    ],
  },
  {
    id: "s15249",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S15249：滨松表面贴装 16 元 Si APD 阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1084E03，页脚写 Nov. 2025 DN，并写 Information described in this material is current as of November 2025，记为约 2025 年 11 月。索引 newState 是 false。产品页正文没有写 16-element。二级标题、手册和选型指南第 7/22 页都写了。选型指南写 low-bias 和 It realizes。产品页和手册写 low bias 和 This offers。",
    applications: [],
    technologies: [],
    models: [
      page("S15249", "2025-11", part("S15249"), [
        "产品页没有写发布日期。页眉写 Si APD array。一级标题写 S15249。页面标题和 og:title 都写 Si APD array S15249。二级标题写 Surface mount type 16-element Si APD array。二级标题后面有一个只含不换行空格的空段落。正文写 The S15249 is a surface mount type Si APD array with high sensitivity in the short wavelength range and low bias operation。这里没有 16-element，bias 前面也没有连字符。下一句写 This offers uniform gain and small crosstalk between elements。特性三条的连字符后面没有空格。第一条是 High sensitivity in the short wavelength range，下一行写 QE=77% (λ=450 nm)。第二条写 Low bias operation: Breakdown voltage=160 V typ.。第三条写 Gain variation between elements is small，末尾没有句号。元描述和 og:description 把正文和特性连在一起，elements 和 Features 之间、range 和 QE 之间都没有空格。产品页没有写应用栏。下载标 568 KB/PDF。",
        "规格表类型写 16 elements array。感光面积 0.7 ×2.0 mm，乘号后面没有空格。封装 Glass epoxy。峰值 600 nm，光谱范围 350 to 1000 nm，暗电流最大 5 nA，截止频率典型 100 MHz，终端电容典型 25 pF，击穿电压典型 160 V，温度系数典型 0.15 V/℃，增益典型 50。规格表没有光灵敏度、量子效率、击穿电压范围、过剩噪声和增益均匀性。测量条件写 Ta=25 ℃，per element，Photosensitivity: M=1, λ=450 nm，Peak sensitivity wavelength: M=50，Dark current: M=50，Cutoff frequency: M=50, λ=450 nm, RL=50 Ω, -3 dB，Terminal capacitance: M=50, f=100 kHz，Breakdown voltage: ID=100 μA，Gain: λ=450 nm，unless otherwise noted。锚点有 Specifications、Spectral response、Dimensional outline (unit: mm) 和 Related documents。光谱图文件是 kapdb0618ea.svg。外形图文件是 kapda0222ea.svg。" +
          docs15249,
        `${indexIntro}这一行 newState 是 false。productName 写 Si APD array。productExp 与二级标题相同，写了 16-element。thumbAlt 写 S15249 product photo。typeNameSort 写成 S15249。类型的值写成 16 elements，显示写成 16 elements array。感光面积的值写成 0.7 ×2.0，显示写成 0.7 ×2.0 mm，乘号后面没有空格。光谱范围的值写成 350 to 1000，显示才补上 nm。峰值的值写成 600，显示写成 600 nm。击穿电压的值写成 160，显示写成 160 V。温度系数的值写成 0.15，显示写成 0.15 V/℃。暗电流的值写成 5，显示写成 5 nA。截止频率的值写成 100，显示写成 100 MHz。终端电容的值写成 25，显示写成 25 pF。增益的值是 50，显示也是 50。封装的值写成 Glass，显示写成 Glass epoxy。手册标 568 KB。索引地址 ${index}。`,
        `手册 ${s15249Sheet}。目录号 KAPD1084E03，页脚写 Cat. No. KAPD1084E03 Nov. 2025 DN，并写 current as of November 2025。封面标题与二级标题相同。正文写成 The S15249 is a surface mount type 16-element Si APD array with high sensitivity in the short wavelength range and low bias operation。产品页正文没有 16-element。下一句仍是 This offers uniform gain and small crosstalk between elements。特性没有连字符。第三条末尾有句号。量子效率仍写 QE=77% (λ=450 nm)。应用写 Particle counters 和 Flow cytometry。结构表感光面积 (per element) 0.7 × 2.0 mm，乘号两边都有空格。间距 0.76 mm，元素数 16，封装 Glass epoxy，窗口材料 Epoxy resin。绝对最大表的表头写 Ta=25 °C。正向电流 10 mA，反向电流 200 µA。工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C，条件都写 No dew condensation。焊接温度 260 (once)。注 *2 写 Reflow soldering, JEDEC J-STD-020 MSL 5a, see P.4。电特性表写 per element。光谱范围 350 to 1000 nm。峰值 600 nm，条件 M=50。光灵敏度典型 0.28 A/W，条件 M=1, λ=450 nm。产品页规格表没有这一行。量子效率典型 77%，条件 M=1, λ=450 nm。击穿电压最小 140 V、典型 160 V、最大 180 V，条件 ID=100 µA。温度系数典型 0.15 V/°C。暗电流典型 0.3 nA、最大 5 nA，条件 M=50。截止频率典型 100 MHz，条件 M=50, λ=450 nm，RL=50 Ω, -3 dB。手册这里的欧姆符号是 Ω。产品页测量条件写成 Ω。终端电容典型 25 pF，条件 M=50, f=100 kHz。过剩噪声因子典型 1.6，过剩噪声指数典型 0.12，增益典型 50，增益均匀性典型 ±5%、最大 ±10%，条件都写 M=50, λ=450 nm。光谱图号 KAPDB0618EA，条件 Typ. Ta=25 °C, M=50 at λ=450 nm, per element。产品页放的是这张图。量子效率图的标题写成 Quantum efficiency vs. wavelangth，图号 KAPDB0619EA，条件 Typ. Ta=25 °C, per element。暗电流图号 KAPDB0620EA。终端电容图号 KAPDB0621EA，纵轴写成 Terminal capacitanceġ(pF)，ġ 是 U+0121，条件 Typ. Ta=25 °C, f=100 kHz, per element。增益图号 KAPDB0622EA，条件 Typ. Ta=25 °C, λ=450 nm, per element。串扰标题写 Crosstalk (typical example)，文字层在图号 KAPDB0623EA 前面还有 Closstalk。条件写 Ta=25 °C, M=50 at λ=470 nm。电特性表的增益和截止频率条件写 λ=450 nm。纵轴写成 Relative sensitivityġ(%)，ġ 仍是 U+0121。外形图号 KAPDA0222EA。间距一行写成 P0.76ġ× 15 = 11.4，ġ 是 U+0121，后面还有乘号。感光面积写成 0.7 × 2.0 mm (× 16 elements)。公差写 Tolerance unless otherwise noted: ±0.2。推荐焊盘图号 KAPDC0133EA。回流焊图号 KSPDB0419EA，峰值 260 °C max.。开封后贮存写成 5 to 30 °C，湿度 60% or less，并写 perform reflow soldering within 24 hours。烘烤一节把 method 写成 methode。推荐条件写成 120 °C、3 hours、up to twice，顿号是表意逗号。未开封超过 3 个月，或开封后超过贮存条件，回流焊前要先烘烤。相关信息写 www.hamamatsu.com/sp/ssd/doc_en.html。` +
          `约 2026 年 6 月的选型指南第 7/22 页写 Si APD array S15249，下一行写 Surface mount type 16-element Si APD array。正文写 The S15249 is a surface mount type 16-element Si APD array with high sensitivity in the short wavelength range and low-bias operation. It realizes uniform gain and small crosstalk between elements。这里是 low-bias，并且用 It realizes，不是产品页和手册的 low bias 和 This offers。这一页没有这一只的数字规格行。` +
          place15249,
      ]),
    ],
  },
];
