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

const intro =
  "索引一级标题写 Si APD arrays，前后没有空格。页面标题写 Si APD arrays | Hamamatsu Photonics，竖线两边各一个空格。说明写 Silicon APD array is a sensor with multiple Si APD arranged in a single package。共 2 行，newState 都是 false。表头把 Data 和 Sheet 分成两行，Product 和 Name 分成两行。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet。ProductName 的值和显示都写成 ProductName。温度系数和暗电流两列的复选框没有勾选。";

const docs8550 =
  "相关文档列出免责声明 Disclaimer / Opto-semiconductors，标 37 KB/PDF；金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products，标 290 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。这一页没有表面贴装注意事项。keywords 写 Si APD arrays。";

const docs15249 =
  "相关文档列出免责声明 Disclaimer / Opto-semiconductors，标 37 KB/PDF；表面贴装注意事项 Precautions / Surface mount type products，标 407 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。这一页没有金属、陶瓷和塑料产品注意事项。keywords 写 Si APD arrays。";

const indexDocs =
  "索引的相关文档页把上面两份注意事项都列出来，另外还有同一份免责声明、选型指南和两份技术笔记。";

const place8550 =
  "手册应用写 Low-light-level photometry in the visible range 和 Detector systems combined with scintillator。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。量子效率和光谱响应是灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const place15249 =
  "手册应用写 Particle counters 和 Flow cytometry。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应和量子效率是灵敏度曲线，不是按波段成像，所以不放在技术下面。";

export const siApdArrayProducts = [
  {
    id: "s8550",
    date: "2012-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S8550：滨松 4×8 元 Si APD 阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1031E01，页脚写 Oct. 2012 DN，并写 Information described in this material is current as of October, 2012，October 后面有逗号，记为约 2012 年 10 月。索引 newState 是 false。手册没有截止频率这一行，产品页、索引和约 2026 年 6 月的选型指南都写 250 MHz。",
    applications: [],
    technologies: [],
    models: [
      page("S8550-02", "2012-10", part("S8550-02"), [
        "产品页没有写发布日期。一级标题写 S8550-02。页面标题和 og:title 都写 Si APD array S8550-02 | Hamamatsu Photonics。二级标题写 4 × 8 element APD array with low noise and enhanced short-wavelength sensitivity，乘号两边有空格，short-wavelength 有连字符。正文写 The S8550-02 is an APD (avalanche photodiode) array designed for short wavelength detection, featuring low noise and low terminal capacitance。下一句写 The S8550-02 also offers uniform gain and small crosstalk between each element。这里 short wavelength 没有连字符。特性五条用 <br /> 分开，连字符后面没有空格：High sensitivity and low noise in short wavelength region、Low terminal capacitance、Optimized for blue light detection、Uniform gain and low crosstalk variation between each element、Nonmagnetic。产品页没有写应用栏。下载标 546 KB/PDF。meta description 在 element. 和 Features 之间没有空格。",
        "规格表类型写 4×8 elements array，乘号两边没有空格。感光面积 1.6 × 1.6 mm，封装 Ceramic。峰值 600 nm，光谱范围 320 to 1000 nm，暗电流最大 10 nA，截止频率典型 250 MHz，终端电容典型 9 pF，击穿电压典型 400 V，温度系数典型 0.78 V/℃，增益典型 50。规格表没有元件数、节距、窗口、量子效率、上升时间和冷却。测量条件写 Ta=25 ℃，然后 Peak sensitivity wavelength: M=50，Dark current: Per 1 element, M=50，Terminal capacitance: Per 1 element, M=50, f=10 kHz，unless otherwise noted。没有写截止频率和增益的条件。外形图标题写 Dimensional outline (unit: mm)，文件是 kapda0131ea.svg。产品页没有放光谱图。" +
          docs8550,
        `${intro}这一行 newState 是 false。productName 写 Si APD array。productExp 写 4 x 8 element APD array，用的是拉丁字母 x，也没有把二级标题里 low noise 以后的句子放进来。thumbAlt 写 S8550-02 product photo。缩略图文件名是 k_s8550_pp_xx,0.jpg，xx 和 0 之间是逗号。typeNameSort 写成 S08550-02。类型的值写 4×8 elements，显示才写成 4×8 elements array。感光面积的值写 1.6 × 1.6，显示补上 mm。光谱范围的值写 320 to 1000，显示补上 nm。峰值 600 nm。击穿电压 400 V。温度系数 0.78 V/℃。暗电流 10 nA。截止频率 250 MHz。终端电容 9 pF。增益的值是 50，没有单位。封装的值和显示都写 Ceramic。手册标 546 KB。索引地址 ${index}。${indexDocs}`,
        `手册 ${s8550Sheet}。目录号 KAPD1031E01，页脚写 Cat. No. KAPD1031E01 Oct. 2012 DN，并写 current as of October, 2012。封面标题与二级标题相同。引言与产品页正文相同。特性没有连字符，Nonmagnetic 单独一条。应用两条写在手册上，产品页没有。结构表写每元感光面积 1.6 × 1.6 mm，元件节距 2.3 mm，元件数 32，封装 Ceramic, nonmagnetic，窗口材料 Epoxy resin。绝对最大工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C，反向电流 200 μA，正向电流 10 mA。电特性条件 Ta=25 °C。光谱范围典型 320 to 1000 nm。峰值条件 M=50，典型 600 nm。量子效率条件 λ=420 nm，最小 60%、典型 70%。击穿电压典型 400 V、最大 500 V，没有最小值。暗电流写 Per 1 element, M=50，典型 1 nA、最大 10 nA。终端电容同一条件，再加 f=10 kHz，典型 9 pF。增益典型 50。增益偏差条件 M=50，最大 ±15%。暗电流温度系数典型 1.1 times/°C。上升时间典型 1.5 ns。击穿电压温度系数典型 0.78 V/°C。过剩噪声指数条件 λ=420 nm，典型 0.2。手册没有截止频率这一行，产品页和索引写的 250 MHz 不在这张表里。量子效率图号 KAPDB0059EB，条件 Typ. Ta=25 °C。增益图号 KAPDB0063EA，条件 Typ. Ta=25 °C, λ=420 nm。暗电流图号 KAPDB0200EA，终端电容图号 KAPDB0201EA，都写 per 1 element。串扰图号 KAPDC0039EA，注写 element gap: 0.7 mm, typical example。增益均匀性图号 KAPDB0202EA，条件 Average gain = 50。外形图号 KAPDA0131EA，产品页文件名没有 EA。图上感光面写成 1.6 × 1.6 (anode)，并标 Array 1、Array 2、Cathode 1、Cathode 2。` +
          `选型指南 ${guide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。短波类型这一页的表把这一行标成 4 × 8 element array。感光面积写成 1.6 × 1.6，下一行 (× 32 elements)。光谱范围 320 to 1000。击穿电压最大 500 V，温度系数 0.78 V/°C。截止频率 250 MHz，表头写 RL=50 Ω，注 *2 写 Value obtained when operated at the gain indicated in the table。终端电容 9 pF，下一行 (per element)。增益 50，表头写 λ=420 nm。封装 Ceramic。同一页的光谱图号是 KAPDB0073EF，条件 Typ. Ta=25 °C, M=50 at 600 nm，图例把 S8550-02 和 S8664-55/-1010 放在一起。量子效率图号 KAPDB0125EC，条件 Typ. Ta=25 °C, M=1，图例同样把这两只放在一起。手册自己的量子效率图是 KAPDB0059EB，不是这两张。` +
          place8550,
      ]),
    ],
  },
  {
    id: "s15249",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S15249：滨松 16 元表面贴装 Si APD 阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1084E03，页脚写 Nov. 2025 DN，并写 Information described in this material is current as of November 2025，记为约 2025 年 11 月。索引 newState 是 false。产品页正文没有写 16-element，二级标题、手册和选型指南都写了。",
    applications: [],
    technologies: [],
    models: [
      page("S15249", "2025-11", part("S15249"), [
        "产品页没有写发布日期。一级标题写 S15249。页面标题和 og:title 都写 Si APD array S15249 | Hamamatsu Photonics。二级标题写 Surface mount type 16-element Si APD array。正文前面有一段只含不换行空格的空段。正文写 The S15249 is a surface mount type Si APD array with high sensitivity in the short wavelength range and low bias operation。下一句写 This offers uniform gain and small crosstalk between elements。这里没有写 16-element，low bias 也没有连字符。特性用 <br /> 分开。第一条连字符后面没有空格，写 High sensitivity in the short wavelength range。下一行 QE=77% (λ=450 nm) 前面没有连字符。再两条是 Low bias operation: Breakdown voltage=160 V typ. 和 Gain variation between elements is small。产品页没有写应用栏。下载标 568 KB/PDF。meta description 同样没有 16-element，并在 elements. 和 Features 之间、range 和 QE 之间都没有空格。",
        "规格表类型写 16 elements array。感光面积 0.7 ×2.0 mm，乘号后面没有空格。封装 Glass epoxy。峰值 600 nm，光谱范围 350 to 1000 nm，暗电流最大 5 nA，截止频率典型 100 MHz，终端电容典型 25 pF，击穿电压典型 160 V，温度系数典型 0.15 V/℃，增益典型 50。规格表没有光灵敏度、量子效率、元件数、节距、窗口和冷却。测量条件写 Ta=25 ℃, per element，然后 Photosensitivity: M=1, λ=450 nm，Peak sensitivity wavelength: M=50，Dark current: M=50，Cutoff frequency: M=50, λ=450 nm, R<sub>L</sub>=50 Ω, -3 dB，Terminal capacitance: M=50, f=100 kHz，Breakdown voltage: I<sub>D</sub>=100 μA，Gain: λ=450 nm，unless otherwise noted。规格表本身没有光灵敏度这一行。光谱图文件是 kapdb0618ea.svg。外形图文件是 kapda0222ea.svg。产品页没有放量子效率图。" +
          docs15249,
        `${intro}这一行 newState 是 false。productName 写 Si APD array。productExp 与二级标题相同。thumbAlt 写 S15249 product photo。缩略图文件名是 s15249_b.jpg。typeNameSort 写成 S15249，没有补零。类型的值写 16 elements，显示才写成 16 elements array。感光面积的值写 0.7 ×2.0，乘号后面没有空格，显示补上 mm。光谱范围的值写 350 to 1000，显示补上 nm。峰值 600 nm。击穿电压 160 V。温度系数 0.15 V/℃。暗电流 5 nA。截止频率 100 MHz。终端电容 25 pF。增益的值是 50，没有单位。封装的值写 Glass，显示写成 Glass epoxy。手册标 568 KB。索引地址 ${index}。`,
        `手册 ${s15249Sheet}。目录号 KAPD1084E03，页脚写 Cat. No. KAPD1084E03 Nov. 2025 DN，并写 current as of November 2025。封面副题与二级标题相同。引言写成 The S15249 is a surface mount type 16-element Si APD array with high sensitivity in the short wavelength range and low bias operation。产品页正文少了 16-element。特性没有连字符，量子效率仍单独一行。应用写 Particle counters 和 Flow cytometry，产品页没有。结构表写每元感光面积 0.7 × 2.0 mm，乘号两边都有空格，元件节距 0.76 mm，元件数 16，封装 Glass epoxy，窗口材料 Epoxy resin。绝对最大额定值的表头写 Ta=25 °C。正向电流 10 mA，反向电流 200 µA。工作温度和贮存温度的条件都写 No dew condensation*1，范围是 -20 to +60 °C 和 -20 to +80 °C。焊接温度 260 (once)*2。注 *1 写 When there is a temperature difference between a product and the surrounding area in high humidity environments, dew condensation may occur on the product surface。注 *2 写 Reflow soldering, JEDEC J-STD-020 MSL 5a, see P.4。电特性表头写 Ta=25 °C, per element。光谱范围典型 350 to 1000 nm。峰值条件 M=50，典型 600 nm。光灵敏度条件 M=1, λ=450 nm，典型 0.28 A/W。量子效率同一条件，典型 77%。击穿电压条件 ID=100 µA，最小 140 V、典型 160 V、最大 180 V。温度系数典型 0.15 V/°C。暗电流条件 M=50，典型 0.3 nA、最大 5 nA。截止频率条件 M=50, λ=450 nm, RL=50 Ω, -3 dB，典型 100 MHz。终端电容条件 M=50, f=100 kHz，典型 25 pF。过剩噪声因子和过剩噪声指数的条件都是 M=50, λ=450 nm，典型 1.6 和 0.12。增益条件 λ=450 nm，典型 50。元件间增益均匀性条件 M=50, λ=450 nm，典型 ±5%、最大 ±10%。产品页规格表没有光灵敏度、量子效率、击穿电压范围、过剩噪声和增益均匀性这几项。光谱图号 KAPDB0618EA，条件 Typ. Ta=25 °C, M=50 at λ=450 nm, per element。文本层在这张图旁另有一行 pectral response，少了开头的 S。量子效率图号 KAPDB0619EA，标题写成 Quantum efficiency vs. wavelangth，wavelength 少了 e。条件 Typ. Ta=25 °C, per element。产品页没有这张图。暗电流图号 KAPDB0620EA，条件 Typ. Ta=25 °C, per element。终端电容图号 KAPDB0621EA，条件 Typ. Ta=25 °C, f=100 kHz, per element，标题里没有写电特性表上的 M=50。增益图号 KAPDB0622EA，条件 Typ. Ta=25 °C, λ=450 nm, per element。串扰图号 KAPDB0623EA，标题写 Crosstalk (typical example)，条件 Ta=25 °C, M=50 at λ=470 nm。电特性表的波长条件是 450 nm，这张图写成 470 nm。外形图号 KAPDA0222EA，产品页文件名没有 EA。感光面积写成 0.7 × 2.0 mm (× 16 elements)。节距一行的文本层写成 P0.76ġ× 15 = 11.4，0.76 和乘号之间是 U+0121，乘号后面有空格。焊盘表文本层把 Common cathode 抽成乱码，图上这一格印 Common cathode，另一格是 NC。公差写 Tolerance unless otherwise noted: ±0.2。推荐焊盘图号 KAPDC0133EA，节距写成 P1.27 × 8 = 10.16。回流焊图号 KSPDB0419EA，峰值温度 260 °C max.。开封后贮存写成 store the device in an environment at a temperature range of 5 to 30 °C and a humidity of 60% or less, and perform reflow soldering within 24 hours。烘烤一节把 method 写成 methode。推荐条件写成 120 °C、3 hours、up to twice，顿号是中文逗号。注写 perform experiments to confirm that no problems occur with the products。未开封超过 3 个月，或开封后超过贮存条件，回流前要先烘烤。手册相关信息列出 Disclaimer、Precautions / Surface mount type products 和 Technical note / Si APD。` +
          `约 2026 年 6 月的选型指南在第 7/22 页只放了一段说明，没有把这一只放进数字表。标题写 Si APD array S15249 和 Surface mount type 16-element Si APD array。正文写 high sensitivity in the short wavelength range and low-bias operation，bias 前面有连字符。下一句写 It realizes uniform gain and small crosstalk between elements。产品页和手册写的是 low bias，没有连字符，并且用 This offers，不是 It realizes。这一页没有印感光面积、击穿电压和截止频率。` +
          place15249,
      ]),
    ],
  },
];
