const page = (name, date, url, points, extra = {}) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
  ...extra,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiode-array/si-photodiode-array/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiode-array/si-photodiode-array.html";

const indexIntro =
  "索引一级标题写 Si photodiode arrays，前后没有空格。说明写 Silicon photodiode array is a sensor with multiple Si photodiodes arranged in a single package. It can be used in a wide range of applications such as light position detection, imaging, and spectrophotometry。列设置里 Data sheet 的显示写成 DataSheet。ProductName 的值和显示都写成 ProductName。感光面积的表头写 Element size (per 1 element)，数值不带 mm，显示才补上 mm。34 行的 newState 都是 false。";

const docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF。";

const noTof =
  "手册没有写 TOF，所以不放在飞行时间下面。";

const spectralPlace =
  "手册应用写 Multichannel spectrophotometers、Color analyzers、Light spectrum analyzers 和 Light position detection。分光放在技术下面，也放在应用下面的医疗与科学。位置检测没有写 TOF。" +
  noTof;

const distancePlace =
  "手册应用写 Spectrophotometers 和 Distance measurement。分光放在技术下面，也放在应用下面的医疗与科学。测距没有写 TOF。" +
  noTof;

const xrayPlace =
  "手册应用写 X-ray non-destructive inspection, etc.。放在应用下面的机器视觉和医疗与科学。光谱响应是光电二极管本身的灵敏度曲线，不是按波段成像，所以不放在技术下面。" +
  noTof;

const bands = ["uv", "nir"];

const sheet4111 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4111-16r_etc_kmpd1002e.pdf";

const sheet8558 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s8558_kmpd1062e.pdf";

export const siArrayProducts = [
  {
    id: "s4111",
    date: "2024-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4111：滨松紫外到近红外硅光电二极管阵列",
    summary:
      "S4111-16Q、S4111-16R、S4111-35Q 和 S4111-46Q 的产品页都没有写发布日期。四只共用手册。目录号 KMPD1002E11，页脚写 Oct. 2024 DN，并写 Information described in this material is current as of October 2024，记为约 2024 年 10 月。索引 newState 都是 false。产品页写用于 spectrophotometry，光谱从紫外到近红外。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page(
        "S4111-16Q",
        "2024-10",
        part("S4111-16Q"),
        [
          "产品页没有写发布日期。页眉写 Si photodiode array。二级标题写 16 element Si photodiode array for UV to NIR，element 前面没有连字符。正文写 ceramic DIP (Dual Inline Package)，并写 primarily developed for low-light-level detection such as spectrophotometry, and cover a wide spectral range，cover 没有 s。逗号后面的 The S4111-16Q 用大写。Cross-talk 有连字符。特性四条紧挨连字符：Large photosensitive area、Low crosstalk、Enhanced infrared sensitivity、low dark current。最后一条的 low 是小写。元描述把 array 和 is 连成 arrayis，把 from 和 UV 连成 fromUV。",
          "规格表元件尺寸 0.9 × 1.45 mm，元件数 16，封装 Ceramic，封装类别 18pin-DIP，闪烁体 None，冷却 Non-cooled。反向电压最大 15 V。光谱响应 190 到 1100 nm，峰值 960 nm，光灵敏度典型 0.58 A/W，暗电流最大 5 pA，上升时间典型 0.5 μs，终端电容典型 200 pF。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，per one element，Photosensitivity: λ=960 nm，Dark current: VR=10 mV，Rise time: VR=0 V，Terminal capacitance: VR=0 V。页面下载标 310 KB/PDF。索引缩略图是 k_s4111-16q_16r_pp_xx.jpg，thumbAlt 写 S4111 product photo。" + docs + " 技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。",
          `${indexIntro}这一行 productName 写 Si photodiode array。productExp 写 16-element Si photodiode array for UV to NIR，16 后面有连字符，产品页二级标题没有。typeNameSort 写成 S04111-16Q。手册标 310 KB。`,
          `手册 ${sheet4111}。封面并列 S4111/S4114 series。正文写 These photodiode arrays are，以及 the S4111/S4114 series are able，the 是小写。特性把 S4111 series 写成 Enhanced infrared sensitivity, low dark current。结构表窗口材料这一列，S4111-16R 写 Resin potting，S4111-16Q 写 Quartz。封装写成 18 pin DIP，pin 前后有空格。感光面积写成 1.45 × 0.9 mm，有效面积 1.305 mm2。产品页和索引写成 0.9 × 1.45 mm。元件间隙 0.1 mm，间距 1.0 mm。反向电压 15 V。工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C。注记 *1 指向 Precautions against UV light exposure，S4111-16Q 有这个星号，S4111-16R 没有。光灵敏度在 λp 是 0.58 A/W，200 nm 是 0.08 A/W，633 nm 是 0.43 A/W。暗电流最大 5 pA 的条件是 VR=10 mV，另一列 VR=10 V 是 25 pA。终端电容 VR=0 V 是 200 pF，VR=10 V 是 50 pF。上升时间 VR=0 V 是 0.5 µs。外形图号有 KMPDA0019ED、KMPDA0021ED、KMPDA0112EA、KMPDA0135EB 和 KMPDA0136EB。暗电流对反向电压的图号是 KMPDB0112EB。` +
            spectralPlace,
        ],
        { bands },
      ),
      page(
        "S4111-16R",
        "2024-10",
        part("S4111-16R"),
        [
          "产品页没有写发布日期。二级标题同样写 16 element，没有连字符。正文和特性与 S4111-16Q 同一套句子，Cross-talk 有连字符，特性里的 Low crosstalk 没有连字符，low dark current 的 low 是小写。",
          "规格表元件尺寸、元件数、封装和 18pin-DIP 与 S4111-16Q 相同。光谱响应写成 340 到 1100 nm，峰值、光灵敏度、暗电流、上升时间和终端电容与 S4111-16Q 相同。测量条件同样写 λ=960 nm 和 VR=10 mV。页面下载标 310 KB/PDF。缩略图与 S4111-16Q 共用 k_s4111-16q_16r_pp_xx.jpg。",
          "索引 productExp 与 S4111-16Q 相同，带连字符。光谱响应的值写成 340 to 1100。typeNameSort 写成 S04111-16R。",
          "手册窗口材料写 Resin potting，所以短波停在 340 nm，没有石英窗那一列的 190 nm。暗电流和电容与 S4111-16Q 同一行数字。633 nm 的光灵敏度是 0.39 A/W，200 nm 那一格是短横。手册没有给 S4111-16R 的紫外注意事项星号。" + spectralPlace,
        ],
        { bands },
      ),
      page(
        "S4111-35Q",
        "2024-10",
        part("S4111-35Q"),
        [
          "产品页没有写发布日期。二级标题写 35 element，没有连字符。正文把型号换成 S4111-35Q，其余句子与 S4111-16Q 相同。",
          "规格表元件尺寸 0.9 × 4.4 mm，元件数 35，封装类别 40pin-DIP，pin 前面没有连字符。光谱响应 190 到 1100 nm，峰值 960 nm，光灵敏度典型 0.58 A/W，暗电流最大 10 pA，上升时间典型 1.2 μs，终端电容典型 550 pF。页面下载标 310 KB/PDF。缩略图是 k_s4111-35q_s4114-35q_pp_xx.jpg，thumbAlt 写 Si photodiode array product photo。",
          "索引 productExp 写 35-element，有连字符。封装类别的值和显示都是 40pin-DIP。typeNameSort 写成 S04111-35Q。",
          "手册封装写成 40 pin DIP。感光面积 4.4 × 0.9 mm，有效面积 3.96 mm2。窗口材料 Quartz，并标 *1。暗电流最大 10 pA 的条件是 VR=10 mV，VR=10 V 那一列是 50 pA。终端电容 VR=0 V 是 550 pF，VR=10 V 是 120 pF。上升时间 VR=0 V 是 1.2 µs。" + spectralPlace,
        ],
        { bands },
      ),
      page(
        "S4111-46Q",
        "2024-10",
        part("S4111-46Q"),
        [
          "产品页没有写发布日期。二级标题写 46 element，没有连字符。正文和特性与 S4111-35Q 同一套。",
          "规格表元件尺寸 0.9 × 4.4 mm，元件数 46，封装类别 48pin-DIP。光谱、峰值、光灵敏度、暗电流、上升时间和终端电容与 S4111-35Q 相同。页面下载标 310 KB/PDF。缩略图是 k_s4111-46q_s4114-46q_pp_xx.jpg。特征图文件是 KMPDB0112EB.svg。手册里这个图号标在暗电流对反向电压的图上。",
          "索引 productExp 写 46-element。封装类别 48pin-DIP。typeNameSort 写成 S04111-46Q。",
          "手册封装写成 48 pin DIP，窗口材料 Quartz。电气数字与 S4111-35Q 同一行。" + spectralPlace,
        ],
        { bands },
      ),
    ],
  },
  {
    id: "s4114",
    date: "2024-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4114：滨松近红外抑制硅光电二极管阵列",
    summary:
      "S4114-35Q 和 S4114-46Q 的产品页都没有写发布日期。与 S4111 共用手册 KMPD1002E11，页脚写 Oct. 2024 DN，并写 current as of October 2024，记为约 2024 年 10 月。索引 newState 都是 false。手册把这一系列写成 NIR sensitivity suppressed type。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page(
        "S4114-35Q",
        "2024-10",
        part("S4114-35Q"),
        [
          "产品页没有写发布日期。二级标题写 35-element Si photodiode array for UV to NIR，35 后面有连字符。S4111 的二级标题没有连字符。正文句子与 S4111 相同，cover 没有 s，逗号后的 The 是大写。特性写 Low cross-talk，有连字符。S4111 的特性写 Low crosstalk，没有连字符。low dark current 的 low 仍是小写。",
          "规格表元件尺寸 0.9 × 4.4 mm，元件数 35，封装 Ceramic，封装类别 40-pin DIP，有连字符，DIP 前面有空格。光谱响应 190 到 1000 nm，峰值 800 nm，光灵敏度典型 0.5 A/W，暗电流最大 60 pA，上升时间典型 0.1 μs，终端电容典型 35 pF。测量条件的光灵敏度写成 λ=λp，不是 960 nm。页面下载标 310 KB/PDF。缩略图与 S4111-35Q 共用。",
          "索引 productExp 写 35-element Si photodiode array for UV to NIR。封装类别的值写成 40-pin，显示才写成 40-pin DIP。typeNameSort 写成 S04114-35Q。",
          "手册特性写 S4114 series: NIR sensitivity suppressed type, low terminal capacitance, high-speed response。封装写成 40 pin DIP。感光面积 4.4 × 0.9 mm。峰值波长 800 nm，光灵敏度 0.50 A/W。暗电流最大 60 pA 的条件是 VR=10 mV，VR=10 V 那一列是 300 pA。终端电容 VR=0 V 是 35 pF，VR=10 V 是 20 pF。上升时间 VR=0 V 是 0.1 µs，VR=10 V 是 0.05 µs。" + spectralPlace,
        ],
        { bands },
      ),
      page(
        "S4114-46Q",
        "2024-10",
        part("S4114-46Q"),
        [
          "产品页没有写发布日期。二级标题写 46-element，有连字符。特性同样写 Low cross-talk。",
          "规格表元件数 46，封装类别 48-pin DIP。光谱 190 到 1000 nm，峰值 800 nm，其余电气数字与 S4114-35Q 相同。测量条件同样写 λ=λp。页面下载标 310 KB/PDF。缩略图与 S4111-46Q 共用。特征图文件也是 KMPDB0112EB.svg。",
          "索引封装类别的值写成 48-pin，显示写成 48-pin DIP。typeNameSort 写成 S04114-46Q。",
          "手册封装写成 48 pin DIP。电气数字与 S4114-35Q 同一行。" + spectralPlace,
        ],
        { bands },
      ),
    ],
  },
  {
    id: "s8558",
    date: "2022-09",
    companyId: "hamamatsu",
    category: "product",
    title: "S8558：滨松表面贴装 16 元硅 PIN 阵列",
    summary:
      "产品页没有写发布日期。与 S15158 共用手册。目录号 KMPD1062E07，页脚写 Sep. 2022 DN，并写 Information described in this material is current as of September 2022，记为约 2022 年 9 月。索引 newState 是 false。产品页写 spectrophotometer 和 distance measurement。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page(
        "S8558",
        "2022-09",
        part("S8558"),
        [
          "产品页没有写发布日期。页眉写 Si PIN photodiode array。二级标题写 Surface mountable 16-element photodiode array。正文写 a ceramic chip carrier package suitable for surface mount using solder reflow techniques，以及 spectrophotometer and distance measurement，spectrophotometer 是单数。特性写 Active area: 0.7 × 2.0 mm (× 16 elements)、Ceramic chip carrier package for surface mount、Suitable for solder reflow、High sensitivity。元描述把 measurement.Features 连在一起。",
          "规格表元件尺寸 0.7 × 2.0 mm，元件数 16，封装 Ceramic，封装类别 Surface mount，闪烁体 None，冷却 Non-cooled。反向电压最大 30 V。光谱响应 320 到 1100 nm，峰值 960 nm，光灵敏度典型 0.72 A/W，暗电流最大 1000 pA，终端电容典型 5 pF。规格表没有上升时间。测量条件写 per one element，Photosensitivity: λ=λp，Dark current: VR=10 V，Terminal capacitance: VR=10 V, f=1 MHz。页面下载标 724 KB/PDF。索引缩略图是 k_s8558_pp_xx.jpg，thumbAlt 写 Si photodiode array product photo。" + docs + " 注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。技术笔记标 2.8 MB/PDF。",
          `${indexIntro}这一行 productExp 写 16 element array, surface mount cermic package. For position detection, spectrophotometers。ceramic 写成 cermic。element 前面没有连字符。position detection 在产品页和手册里都没有出现，手册写的是 Distance measurement。封装的值是 Ceramic，显示是 Ceramic。封装类别的值写成 Surface，显示写成 Surface mount。上升时间的值是 --。typeNameSort 写成 S08558。手册标 724 KB。`,
          `手册 ${sheet8558}。封面并列 S8558 和 S15158。正文写 surface mountable chip carrier packages，以及 solder reflow，没有 techniques。应用写 Spectrophotometers，是复数，以及 Distance measurement。特性写 Photosensitive area，不是 Active area。结构表封装写 Ceramic，窗口材料 Silicone resin，元件间距 0.8 mm。贮存温度 S8558 是 -40 to +125 °C，S15158 是 -40 to +100 °C。焊接写 Peak temperature: 260, 3 times，注记 *2 写 JEDEC J-STD-020 MSL 3。暗电流这一行，S8558 在 VR=10 V 的典型是 0.05 nA、最大 1 nA。1 nA 等于产品页的 1000 pA。终端电容条件写 VR=10 V, f=10 kHz，典型 5 pF、最大 10 pF。产品页测量条件写成 f=1 MHz。截止频率典型 25 MHz，条件 VR=10 V, RL=50 Ω, λ=830 nm, -3 dB。产品页没有截止频率。光谱图号 KMPDB0193EB。外形图号 KMPDA0144EE。` +
            distancePlace,
        ],
        { bands },
      ),
    ],
  },
  {
    id: "s15158",
    date: "2022-09",
    companyId: "hamamatsu",
    category: "product",
    title: "S15158：滨松表面贴装 16 元硅 PIN 阵列",
    summary:
      "产品页没有写发布日期。与 S8558 共用手册 KMPD1062E07，页脚写 Sep. 2022 DN，并写 current as of September 2022，记为约 2022 年 9 月。索引 newState 是 false。索引把产品名写成 Si PIN photodiode，产品页标题写成 Si PIN photodiode array。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page(
        "S15158",
        "2022-09",
        part("S15158"),
        [
          "产品页没有写发布日期。页眉写 Si PIN photodiode array。二级标题写 Surface mountable 16-element array，没有 photodiode。正文写 in surface mountable chip carrier package，package 前面没有 a。solder reﬂow 的 fl 是连字。应用写 spectrophotometers and distance measurement，spectrophotometers 是复数。特性写 Photosensitive area，以及 Compatible with lead-free solder reflow。元描述同样把 reﬂow 印成连字。",
          "规格表元件尺寸 0.7 × 2.0 mm，元件数 16，封装 Glass epoxy，封装类别 Surface mount。光谱响应 380 到 1100 nm，峰值 960 nm，光灵敏度典型 0.63 A/W，暗电流最大 10000 pA，终端电容典型 60 pF。没有上升时间。测量条件写 Dark current: VR=10 V, all 16 elements，Terminal capacitance: VR=10 V, f=10 kHz, all 16 elements。页面下载标 724 KB/PDF。缩略图是 k_s15158_pp_xx.jpg。光谱图文件是 KMPDB0193EB,0.svg，文件名里有逗号和 0。" + docs,
          "索引 productName 写 Si PIN photodiode，没有 array。productExp 与 S8558 相同，也把 ceramic 写成 cermic，并写 position detection。封装的值和显示都是 Ceramic。产品页和手册写的是 Glass epoxy。封装类别的值写成 Surface，显示写成 Surface mount。暗电流 10000 pA，终端电容 60 pF，上升时间 --。typeNameSort 写成 S15158。",
          "手册结构表封装写 Glass epoxy，窗口材料 Silicone resin。光谱响应 380 to 1100 nm。光灵敏度典型 0.63 A/W。暗电流这一行只填了 all 16 elements，典型 0.4 nA、最大 10 nA。10 nA 等于产品页的 10000 pA。终端电容条件写 all 16 elements，典型 60 pF、最大 90 pF，频率是 f=10 kHz。截止频率典型 25 MHz。贮存温度 -40 to +100 °C。外形图另有 KMPDA0623EC。" + distancePlace,
        ],
        { bands },
      ),
    ],
  },
  {
    id: "s14833",
    date: "2021-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S14833：滨松编码器用 6 元硅 PIN 阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KMPD1215E01，页脚写 Jan. 2021 DN，并写 Information described in this material is current as of January 2021，记为约 2021 年 1 月。索引 newState 是 false。产品页和手册都写 encoders。",
    applications: [],
    technologies: [],
    models: [
      page("S14833", "2021-01", part("S14833"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。二级标题写 6-element array for encoders。正文写 Each of the six element is separated，element 是单数，is 也是单数。特性写 High sensitivity、Surface mountable chip carrier package、Compatible with lead-free solder reflow。元描述把 encoders.Features 连在一起，并同样写 six element。",
        "规格表元件尺寸 2.76 × 1.37 mm，元件数 6，封装 Glass epoxy，封装类别 Surface mount，闪烁体 None，冷却 Non-cooled。反向电压最大 30 V。光谱响应 340 到 1100 nm，峰值 960 nm，光灵敏度典型 0.68 A/W，暗电流最大 5000 pA，终端电容典型 9 pF。规格表没有上升时间。测量条件只写 Typ. Ta=25 ℃，unless otherwise noted，per one element。页面下载标 574 KB/PDF。光谱图是 KMPDB0570EA.svg。thumbAlt 在索引里写成 Si PIN photodiode array  S14833，array 和型号之间有两个空格。" + docs + " 注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。",
        `${indexIntro}这一行 productName 写 Si PIN photodiode array。productExp 写 6-element array for encoders。感光面积的值写成 2.76 × 1.37 ，末尾有一个空格，显示写成 2.76 × 1.37  mm，mm 前面有两个空格。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 Surface，显示写成 Surface mount。上升时间是 --。typeNameSort 写成 S14833。手册标 574 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14833_kmpd1215e.pdf。正文写 Each of the six elements is separated，elements 是复数，is 仍是单数。产品页把 elements 印成 element。应用只写 Encoders。结构表封装 Glass epoxy，窗口材料 Silicone resin，元件尺寸 2.76 × 1.37 mm。反向电压 30 V。工作温度 -40 to +100 °C，贮存温度 -40 to +125 °C。焊接 260 (3 times)，注记 *2 写 JEDEC J-STD-020 MSL 3, See P.5。注记 *1 把 When 拆开，W 单独一行。光灵敏度最小 0.6 A/W、典型 0.68 A/W。暗电流最大 5.0 nA，条件 VR=10 V。5.0 nA 等于产品页的 5000 pA。截止频率典型 10 MHz，条件 VR=10 V, RL=50 Ω, λ=830 nm, -3 dB。产品页没有截止频率。终端电容典型 9 pF、最大 13 pF，条件 VR=10 V, f=10 kHz。噪声等效功率典型 1.6 × 10^-14 W/Hz^1/2。外形图号 KMPDA0622EA。这些句子对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。" +
          noTof,
      ]),
    ],
  },
  {
    id: "s11212",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S11212：滨松 X 射线检查用背照式阵列",
    summary:
      "S11212-021、S11212-121、S11212-321 和 S11212-422 的产品页都没有写发布日期。四只共用手册。目录号 KMPD1127E08，页脚写 Nov. 2025 DN，并写 Information described in this material is current as of November 2025，记为约 2025 年 11 月。索引 newState 都是 false。手册写用于 X 射线非破坏检查。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S11212-021", "2025-11", part("S11212-021"), [
        "产品页没有写发布日期。二级标题写 Back-illuminated photodiode array for X-ray non-destructive inspection，array 是单数。正文写 improved sensitivity uniformity，并点名前代 S5668 series。光入射侧写成 light incident side。替换那句写成 The S11212-021 can be replace the S5668 series，be 是多出来的。特性间距写成 1.575mm，mm 前面没有空格，乘号前面有空格：( × 16 pixels)。板尺寸写成 25.4 (W) ×20.0 (H) mm，乘号后面没有空格。双能那条写成 Suppports，p 有三个。元描述在型号后面有两个空格：The S11212-021  is。",
        "规格表元件尺寸 1.175 × 2.0 mm，元件数 16，封装 Glass epoxy，封装类别 Unsealed，闪烁体 None，冷却 Non-cooled。反向电压最大 10 V。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 30 pA，上升时间典型 6.5 μs，终端电容典型 40 pF。注记写 This photodiode array as it is does not function as an X-ray detector. An appropriate scintillator or phosphor sheet should be added at user’s side。测量条件写 Ta=25 ℃，per element，Photosensitivity: λ=λp。页面下载标 576 KB/PDF。未密封注意事项 Precautions / Unsealed products 标 373 KB/PDF。缩略图是 k_s11212-021_pp_xx.jpg。" + docs + " 技术笔记 Technical note / X-ray detectors 标 2.4 MB/PDF。",
        `${indexIntro}这一行 productExp 写 Back-illuminated photodiode arrays for X-ray non-destructive inspection，arrays 是复数，产品页二级标题是单数。封装的值写成 Glass epoxy，显示写成 Glass epoxy (unsealed)。封装类别的值和显示都是 Unsealed。typeNameSort 写成 S11212-021。手册标 576 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11212_series_kmpd1127e.pdf。标题写 arrays，是复数。正文写 The S11212 series can replace，没有 be。光入射侧写成 light incident side。板尺寸写成 25.4 (W) × 20.0 (H) mm，乘号两边都有空格。间距写成 1.575 mm，mm 前面有空格。选型表闪烁体 None，应用例子写 General photometry。注记 *2 写 An appropriate scintillator，scintillator 是单数。反向电压 10 V。工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C。注记 *3 写 No dew condensation，environment 是单数。光灵敏度在 λ=λp 是最小 550、典型 610、最大 670 mA/W。610 mA/W 等于产品页的 0.61 A/W。λ=540 nm 的典型是 420 mA/W。暗电流典型 5 pA、最大 30 pA，条件 VR=10 mV。上升时间典型 6.5 µs。终端电容最小 30 pF、典型 40 pF、最大 50 pF，条件 VR=0 V, f=10 kHz。截面图号 KMPDA0280EA。均匀性图号 KMPDB0352EA。" +
          xrayPlace,
      ]),
      page("S11212-121", "2025-11", part("S11212-121"), [
        "产品页没有写发布日期。二级标题与 S11212-021 相同，array 是单数。正文仍写 can be replace。特性去掉了光谱响应那一条。间距仍写成 1.575mm，板尺寸仍写成 ×20.0。双能仍写成 Suppports。",
        "规格表闪烁体 CsI(Tl)，封装类别 With scintillator，封装 Glass epoxy。没有光谱响应、峰值和光灵敏度。反向电压最大 10 V。暗电流、上升时间和终端电容与 S11212-021 相同。测量条件改成 dark current、rise time 和 terminal capacitance，没有光灵敏度。",
        "索引 productExp 写 Back-illuminated photodiode array for X-ray non-destructive inspection, with CsI(Tl) scintillator，array 是单数。闪烁体的值和显示都是 CsI(Tl)。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 With，显示写成 With scintillator。光谱三格都是 --。",
        "手册选型表闪烁体 CsI(Tl)，余辉 Large，串扰 Low。应用例子写 X-ray non-destructive inspection of slow-moving objects (baggage inspection, etc.)。X 射线灵敏度典型 6.0 nA。注意事项写 CsI(Tl) scintillator of the S11212-121 has deliquescence。工作温度改成 -10 to +60 °C，贮存温度 -20 to +70 °C。" + xrayPlace,
      ]),
      page("S11212-321", "2025-11", part("S11212-321"), [
        "产品页没有写发布日期。二级标题仍是单数 array。正文仍写 can be replace。特性仍写 Suppports，间距仍是 1.575mm。",
        "规格表闪烁体在索引里的值写成 GOS，显示写成 GOS ceramic。封装类别 With scintillator。光谱三格是 --。反向电压 10 V。暗电流最大 30 pA，上升时间 6.5 μs，终端电容 40 pF。",
        "索引 productExp 写 with GOS ceramic scintillator。封装的值写成 Glass，显示写成 Glass epoxy。",
        "手册选型表闪烁体写成 GOS ceramic，余辉 Small，串扰 Low。应用例子写 fast-moving objects (baggage inspection, etc.)。X 射线灵敏度典型 3.5 nA。" + xrayPlace,
      ]),
      page("S11212-422", "2025-11", part("S11212-422"), [
        "产品页没有写发布日期。二级标题仍是单数 array。正文仍写 can be replace。特性仍写 Suppports。",
        "规格表闪烁体 Phosphor sheet。封装类别 With scintillator。光谱三格是 --。其余电气数字与 S11212-121 相同。",
        "索引 productExp 写 with phosphor sheet。封装的值写成 Glass，显示写成 Glass epoxy。",
        "手册选型表闪烁体 Phosphor sheet，余辉 Small，串扰写成 May occur.。应用例子写 X-ray non-destructive inspection (at low X-ray energy)。X 射线灵敏度典型 3.0 nA。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s11299",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S11299：滨松细长板 X 射线背照式阵列",
    summary:
      "S11299-021、S11299-121、S11299-321 和 S11299-422 的产品页都没有写发布日期。四只共用手册。目录号 KMPD1128E08，页脚写 Nov. 2025 DN，并写 current as of November 2025，记为约 2025 年 11 月。索引 newState 都是 false。产品页写 slender board type，并写可以和 S11212 叠成两层。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S11299-021", "2025-11", part("S11299-021"), [
        "产品页没有写发布日期。二级标题写 Back-illuminated photodiode arrays for X-ray non-destructive inspection, slender board type，arrays 是复数。正文把 because 写成 bacause。板尺寸写成与 S11212 series 组合，括号里是 25.4(W) × 20.0 (H) mm，25.4 和 (W) 之间没有空格。two layer 的 two 和 layer 之间没有连字符。特性板尺寸是这一只自己的 25.4 (W) × 10.2 (H) mm。间距写成 1.575 mm，mm 前面有空格。双能写成 Supports，p 是两个，括号里的 combination 后面没有句号。",
        "规格表元件尺寸 1.175 × 2.0 mm，元件数 16，封装 Glass epoxy，封装类别 Unsealed，闪烁体 None。规格表没有反向电压。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 30 pA，上升时间典型 6.5 μs，终端电容典型 40 pF。注记把 scintillator 写成复数：An appropriate scintillators or phosphor sheet。页面下载标 648 KB/PDF。缩略图是 k_s11299-021_pp_xx.jpg。" + docs + " X 射线技术笔记标 2.4 MB/PDF。未密封注意事项标 373 KB/PDF。",
        "索引 productExp 写 Back-illuminated photodiode array for X-ray non-destructive inspection，array 是单数，没有 slender board type。反向电压的值是 --。封装显示写成 Glass epoxy (unsealed)。封装类别 Unsealed。typeNameSort 写成 S11299-021。手册标 648 KB。",
        "手册标题写 slender board type。正文写 compatible with dual energy imaging because，because 拼对了。绝对最大额定值把反向电压写成 VR Max.，M 是大写，数值 10 V。产品页和索引都没有这一行。工作温度 -20 to +60 °C。注记 *1 写 No condensation，没有 dew。光灵敏度典型 610 mA/W，等于产品页的 0.61 A/W。暗电流最大 30 pA。终端电容典型 40 pF。选型表无闪烁体的应用例子写 General photometry。" +
          xrayPlace,
      ]),
      page("S11299-121", "2025-11", part("S11299-121"), [
        "产品页没有写发布日期。二级标题把 arrays 改成单数 array，仍写 slender board type。正文仍写 bacause。特性没有光谱响应。板尺寸仍是 25.4 (W) × 10.2 (H) mm。双能写成 Supports。",
        "规格表闪烁体 CsI(Tl)，封装类别 With scintillator。没有反向电压，也没有光谱三行。暗电流最大 30 pA，上升时间 6.5 μs，终端电容 40 pF。",
        "索引 productExp 写 with CsI(Tl) scintillator。闪烁体 CsI(Tl)。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 With，显示写成 With scintillator。反向电压 --。",
        "手册选型表余辉 Large，串扰 Low。应用例子写 slow-moving objects (baggage inspection, etc.)。带闪烁体的工作温度是 -10 to +60 °C，贮存温度 -20 to +70 °C。反向电压仍是 10 V。" + xrayPlace,
      ]),
      page("S11299-321", "2025-11", part("S11299-321"), [
        "产品页没有写发布日期。二级标题写 Back-illuminated photodiode arrays，arrays 是复数，并写 slender board type。正文仍有 bacause。板尺寸 25.4 (W) × 10.2 (H) mm。间距 1.575 mm。",
        "索引闪烁体的值写成 GOS，显示写成 GOS ceramic。productExp 写 with GOS ceramic scintillator。光谱三格是 --。反向电压 --。封装类别 With scintillator。封装的值写成 Glass，显示写成 Glass epoxy。",
        "手册选型表闪烁体 GOS ceramic，余辉 Small，串扰 Low。应用例子写 fast-moving objects (baggage inspection, etc.)。X 射线灵敏度典型 3.5 nA。" + xrayPlace,
      ]),
      page("S11299-422", "2025-11", part("S11299-422"), [
        "产品页二级标题写 Back-illuminated photodiode arrays，arrays 是复数，并写 slender board type。正文仍有 bacause。",
        "索引闪烁体 Phosphor sheet。productExp 写 with phosphor sheet。封装的值写成 Glass，显示写成 Glass epoxy。反向电压 --。",
        "手册选型表闪烁体 Phosphor sheet，串扰写成 May occur.。应用例子写 at low X-ray energy。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s12362",
    date: "2026-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S12362：滨松 2.5 mm 间距 X 射线背照式阵列",
    summary:
      "S12362-021、S12362-121、S12362-321 和 S12362-421 的产品页都没有写发布日期。与 S12363 共用手册。目录号 KMPD1171E05，页脚写 Jan. 2026 DN，并写 current as of January 2026，记为约 2026 年 1 月。索引 newState 都是 false。产品页写元件间距 2.5 mm。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S12362-021", "2026-01", part("S12362-021"), [
        "产品页没有写发布日期。二级标题写 Back-illuminated photodiode array for X-ray non-destructive inspection (element pitch: 2.5 mm)。正文写 back side，不是 light incident side。特性板尺寸 40.4 (W) × 10.2 (H) mm。间距写成 2.5 mm ( × 16 pixels)，乘号前面有空格。双能写成 Supports，p 是两个。",
        "规格表元件尺寸 2.2 × 2.7 mm，元件数 16，封装 Glass epoxy，封装类别 Unsealed，闪烁体 None。没有反向电压。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 50 pA，上升时间典型 6.5 μs，终端电容典型 75 pF。注记写 An appropriate scintillator，是单数。测量条件写 Photosensitivity: λ=λp。页面下载标 725 KB/PDF。缩略图是 k_s12362-021_pp_xx.jpg。" + docs + " X 射线技术笔记标 2.4 MB/PDF。",
        "索引 productExp 写 Back-illuminated photodiode arrays，arrays 是复数，没有写出 2.5 mm。反向电压 --。封装显示 Glass epoxy (unsealed)。暗电流 50 pA，终端电容 75 pF。typeNameSort 写成 S12362-021。手册标 725 KB。",
        "手册封面并列 S12362/S12363 series。特性写两种板尺寸：40.4 (W) × 10.2 (H) mm 和 40.4 (W) × 20.0 (H) mm。绝对最大额定值反向电压 10 V，产品页没有这一行。注记 *3 把 No 拆开。光灵敏度典型 610 mA/W。暗电流最大 50 pA，条件 VR=10 mV。终端电容最小 50 pF、典型 75 pF、最大 100 pF。短路电流典型 7 µA，条件写在 *4。无闪烁体的应用例子写 General photometry。" +
          xrayPlace,
      ]),
      page("S12362-121", "2026-01", part("S12362-121"), [
        "产品页没有写发布日期。二级标题带 element pitch: 2.5 mm。特性没有光谱响应。板尺寸仍是 40.4 (W) × 10.2 (H) mm。",
        "规格表闪烁体 CsI(Tl)，封装类别 With scintillator。没有反向电压和光谱三行。暗电流最大 50 pA，上升时间 6.5 μs，终端电容 75 pF。",
        "索引 productExp 写 with CsI(Tl) scintillator。缩略图文件名是 k_S12362-121_pp_xx.jpg，S 是大写。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 With，显示写成 With scintillator。",
        "手册选型表 CsI(Tl)，余辉 Large，串扰 Low。应用例子写 slow-moving objects (baggage inspection, etc.)。X 射线灵敏度典型 12.5 nA。带闪烁体的工作温度是 -10 to +60 °C。" + xrayPlace,
      ]),
      page("S12362-321", "2026-01", part("S12362-321"), [
        "产品页二级标题带 2.5 mm。板尺寸 40.4 (W) × 10.2 (H) mm。",
        "索引闪烁体的值写成 GOS，显示写成 GOS ceramic。productExp 写 with GOS ceramic scintillator。光谱三格是 --。反向电压 --。缩略图是 k_s12362-321_pp_xx.jpg，s 是小写。",
        "手册 X 射线灵敏度这一列把 -321 的典型写成 7.2 nA。应用例子写 fast-moving objects。" + xrayPlace,
      ]),
      page("S12362-421", "2026-01", part("S12362-421"), [
        "产品页没有写发布日期。二级标题带 2.5 mm。特性没有光谱响应。板尺寸 40.4 (W) × 10.2 (H) mm。双能在这一页写成 Supports。",
        "规格表闪烁体 Phosphor sheet。暗电流最大 50 pA，终端电容 75 pF。没有反向电压。",
        "索引 productExp 写 with phosphor sheet。封装的值写成 Glass，显示写成 Glass epoxy。",
        "手册 X 射线灵敏度 -421 的典型写成 6.0 nA。应用例子写 at low X-ray energy。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s12363",
    date: "2026-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S12363：滨松 2.5 mm 间距宽板 X 射线阵列",
    summary:
      "S12363-021、S12363-121、S12363-321 和 S12363-421 的产品页都没有写发布日期。与 S12362 共用手册 KMPD1171E05，页脚写 Jan. 2026 DN，并写 current as of January 2026，记为约 2026 年 1 月。索引 newState 都是 false。产品页板尺寸写成 40.4 (W) × 20.0 (H) mm。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S12363-021", "2026-01", part("S12363-021"), [
        "产品页没有写发布日期。二级标题写 element pitch: 2.5 mm。正文写 back side。特性板尺寸写成 40.4 (W) × 20.0(H) mm，20.0 和 (H) 之间没有空格。双能写成 Suppports，p 有三个。S12362-021 的同一条写成 Supports。",
        "规格表元件尺寸 2.2 × 2.7 mm，封装类别 Unsealed，闪烁体 None。没有反向电压。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 50 pA，上升时间 6.5 μs，终端电容 75 pF。注记写 An appropriate scintillator，是单数。页面下载标 725 KB/PDF。缩略图是 k_s12363-021_pp_xx.jpg。",
        "索引 productExp 写 arrays，是复数，没有写宽板。反向电压 --。封装显示 Glass epoxy (unsealed)。typeNameSort 写成 S12363-021。",
        "手册把 S12363-021 的板尺寸放在 40.4 × 20.0 那一列。反向电压 10 V 写在绝对最大额定值里，产品页没有。电气表的光灵敏度和暗电流与 S12362-021 共用。" + xrayPlace,
      ]),
      page("S12363-121", "2026-01", part("S12363-121"), [
        "产品页二级标题带 2.5 mm。板尺寸 40.4 (W) × 20.0 (H) mm，这一只的 (H) 前面有空格。",
        "索引闪烁体 CsI(Tl)。productExp 写 with CsI(Tl) scintillator。封装的值写成 Glass，显示写成 Glass epoxy。反向电压 --。光谱三格是 --。",
        "手册应用例子与 S12362-121 相同，写 slow-moving objects。X 射线灵敏度典型 12.5 nA。" + xrayPlace,
      ]),
      page("S12363-321", "2026-01", part("S12363-321"), [
        "产品页板尺寸 40.4 (W) × 20.0 (H) mm。",
        "索引闪烁体的值写成 GOS，显示写成 GOS ceramic。反向电压 --。",
        "手册 X 射线灵敏度 -321 的典型是 7.2 nA。" + xrayPlace,
      ]),
      page("S12363-421", "2026-01", part("S12363-421"), [
        "产品页二级标题带 2.5 mm。板尺寸 40.4 (W) × 20.0 (H) mm。",
        "索引闪烁体 Phosphor sheet。productExp 写 with phosphor sheet。封装类别 With scintillator。反向电压 --。",
        "手册 X 射线灵敏度 -421 的典型是 6.0 nA。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s12858",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S12858：滨松 1.17 mm 间距 X 射线背照式阵列",
    summary:
      "S12858-021、S12858-122、S12858-324 和 S12858-422 的产品页都没有写发布日期。与 S12859 共用手册。目录号 KMPD1175E04，页脚写 Nov. 2025 DN，并写 current as of November 2025，记为约 2025 年 11 月。索引 newState 都是 false。产品页写间距从 S11212 的 1.575 mm 改成 1.17 mm。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S12858-021", "2025-11", part("S12858-021"), [
        "产品页没有写发布日期。二级标题写 Back-illuminated photodiode arrays，arrays 是复数，并写 element pitch: 1.17 mm。正文写 It is modified versions，It 是单数，versions 是复数。前代写成 S11212 series: 1.575 mm pitch。入射侧写成 back side。特性板尺寸 19.0 (W) × 10.2 (H) mm。间距写成 1.17 mm (× 16 pixels)，乘号前面没有空格。双能写成 Supports。元描述在型号后面有两个空格。未密封提示那句把顺序写成 Unsealed products / Precautions，相关文档的链接写成 Precautions / Unsealed products。提示行的文件大小只写 [PDF]，没有 373 KB。",
        "规格表元件尺寸 0.77 × 2.5 mm，元件数 16，封装类别 Unsealed，闪烁体 None。没有反向电压。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 30 pA，上升时间 6.5 μs，终端电容 30 pF。注记写 An appropriate scintillator，是单数。页面下载标 720 KB/PDF。缩略图是 k_s12858-021_pp_xx.jpg。" + docs,
        "索引 productExp 写 arrays，是复数，并写 element pitch: 1.17 mm。反向电压 --。封装显示 Glass epoxy (unsealed)。终端电容 30 pF。typeNameSort 写成 S12858-021。手册标 720 KB。",
        "手册写 These are modified versions。间距 1.17 mm。两种板尺寸是 19.0 × 10.2 mm 和 19.0 × 18.0 mm。反向电压 10 V 写在绝对最大额定值，产品页没有。终端电容最小 20 pF、典型 30 pF、最大 40 pF，条件 VR=0 V, f=10 kHz。暗电流最大 30 pA。无闪烁体的应用例子写 General photometry。注记 *2 指向没有闪烁体的型号。" +
          xrayPlace,
      ]),
      page("S12858-122", "2025-11", part("S12858-122"), [
        "产品页没有写发布日期。二级标题把 arrays 改成单数 array。正文写成 It is modified ed versions，modified 后面多了一个 ed。元描述同样写 modified ed。特性间距写成 1.17 mm ( × 16 pixels)，乘号前面有空格。双能写成 Suppports，p 有三个。S12858-021 的同一条写成 Supports。板尺寸 19.0 (W) × 10.2 (H) mm。",
        "规格表闪烁体 CsI(Tl)，封装类别 With scintillator。没有反向电压和光谱三行。暗电流最大 30 pA，上升时间 6.5 μs，终端电容 30 pF。测量条件只写 Ta=25 ℃，per element。",
        "索引 productExp 写 with CsI(Tl) scintillator。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 With，显示写成 With scintillator。",
        "手册选型表 CsI(Tl)，余辉 Large，串扰 Low。X 射线灵敏度 -122 的典型是 5.0 nA。应用例子写 slow-moving objects。" + xrayPlace,
      ]),
      page("S12858-324", "2025-11", part("S12858-324"), [
        "产品页二级标题是单数 array。正文写 modified versions，没有多出来的 ed。板尺寸 19.0 (W) × 10.2 (H) mm。",
        "索引闪烁体的值写成 GOS，显示写成 GOS ceramic。productExp 写 element pitch: 1.17 mm, with GOS ceramic scintillator。反向电压 --。",
        "手册 X 射线灵敏度 -324 的典型是 2.5 nA。" + xrayPlace,
      ]),
      page("S12858-422", "2025-11", part("S12858-422"), [
        "产品页板尺寸 19.0 (W) × 10.2 (H) mm。正文写 modified versions。",
        "索引闪烁体 Phosphor sheet。封装类别 With scintillator。终端电容 30 pF。反向电压 --。",
        "手册 X 射线灵敏度 -422 的典型是 2.2 nA。应用例子写 at low X-ray energy。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s12859",
    date: "2025-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S12859：滨松 1.17 mm 间距宽板 X 射线阵列",
    summary:
      "S12859-021、S12859-122、S12859-324 和 S12859-422 的产品页都没有写发布日期。与 S12858 共用手册 KMPD1175E04，页脚写 Nov. 2025 DN，并写 current as of November 2025，记为约 2025 年 11 月。索引 newState 都是 false。产品页板尺寸写成 19.0 (W) × 18.0 (H) mm。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S12859-021", "2025-11", part("S12859-021"), [
        "产品页没有写发布日期。二级标题写 arrays，是复数，并写 element pitch: 1.17 mm。正文写 It is modified versions。入射侧写 back side。特性板尺寸 19.0 (W) × 18.0 (H) mm。间距写成 1.17 mm (× 16 pixels)。双能写成 Supports。未密封提示写 Precautions / Unsealed products，并标 373 KB/PDF。元描述在型号后面有两个空格。",
        "规格表元件尺寸 0.77 × 2.5 mm，封装类别 Unsealed，闪烁体 None。没有反向电压。光谱响应 340 到 1100 nm，峰值 920 nm，光灵敏度典型 0.61 A/W，暗电流最大 30 pA，上升时间 6.5 μs，终端电容 30 pF。注记写 An appropriate scintillator。页面下载标 720 KB/PDF。缩略图是 k_s12859-021_pp_xx.jpg。",
        "索引 productExp 与 S12858-021 相同，写 arrays 和 1.17 mm。反向电压 --。封装显示 Glass epoxy (unsealed)。typeNameSort 写成 S12859-021。",
        "手册把 S12859-021 的板尺寸放在 19.0 × 18.0 那一列。反向电压 10 V 在绝对最大额定值里。终端电容典型 30 pF。" + xrayPlace,
      ]),
      page("S12859-122", "2025-11", part("S12859-122"), [
        "产品页二级标题是单数 array。正文写成 modified ed versions，modified 后面多了一个 ed。板尺寸 19.0 (W) × 18.0 (H) mm。",
        "索引闪烁体 CsI(Tl)。productExp 写 with CsI(Tl) scintillator。封装的值写成 Glass，显示写成 Glass epoxy。反向电压 --。",
        "手册 X 射线灵敏度 -122 的典型是 5.0 nA。" + xrayPlace,
      ]),
      page("S12859-324", "2025-11", part("S12859-324"), [
        "产品页正文写 modified versions，没有多出来的 ed。板尺寸 19.0 (W) × 18.0 (H) mm。",
        "索引闪烁体的值写成 GOS，显示写成 GOS ceramic。反向电压 --。",
        "手册 X 射线灵敏度 -324 的典型是 2.5 nA。" + xrayPlace,
      ]),
      page("S12859-422", "2025-11", part("S12859-422"), [
        "产品页正文写 modified versions。板尺寸 19.0 (W) × 18.0 (H) mm。",
        "索引闪烁体 Phosphor sheet。封装类别 With scintillator。终端电容 30 pF。反向电压 --。",
        "手册 X 射线灵敏度 -422 的典型是 2.2 nA。" + xrayPlace,
      ]),
    ],
  },
  {
    id: "s13620",
    date: "2022-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S13620-02：滨松可拼接 8×8 硅光电二极管阵列",
    summary:
      "产品页没有写发布日期。手册目录号 KMPD1198E04，页脚写 Apr. 2022 DN，并写 Information described in this material is current as of April 2022，记为约 2022 年 4 月。索引 newState 是 false。产品页写 8 × 8，并写 suitable structure for tiling。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S13620-02", "2022-04", part("S13620-02"), [
        "产品页没有写发布日期。页眉写 64-element Si photodiode array。二级标题写 Back-illuminated photodiode array for non-destructive X-ray inspection, suitable structure for tiling。正文写 8 × 8 element，incident surface side，以及 no crosstalk between channels。特性第一条写 2D (8 × 8 element) array。后面一条没有连字符，写成 Because there are no wires。efficiency 印成 efﬁ ciency，fi 是连字，后面还有一个空格。an scintillator 的 an 后面接辅音。it suitable 前面没有 is。",
        "规格表元件尺寸 2.5 × 2.5 mm，元件数 64，封装 Glass epoxy，封装类别 Unsealed，闪烁体 None，冷却 Non-cooled。反向电压最大 10 V。光谱响应 400 到 1100 nm，峰值 960 nm，光灵敏度典型 0.61 A/W，暗电流最大 300 pA，上升时间典型 15 μs，终端电容典型 60 pF。页面下载标 255 KB/PDF。缩略图是 k_s13620-02_pp_xx.jpg，thumbAlt 写 S13620-02 product photo。未密封注意事项标 373 KB/PDF。" + docs + " X 射线技术笔记标 2.4 MB/PDF。",
        `${indexIntro}这一行 productExp 与二级标题相同。封装的值写成 Glass epoxy，显示写成 Glass epoxy (unsealed)。封装类别 Unsealed。typeNameSort 写成 S13620-02。手册标 255 KB。`,
        "手册结构表把元件尺寸写成 2.8 × 2.8 mm，感光面积写成 2.5 × 2.5/element mm。产品页和索引的元件尺寸用的是 2.5 × 2.5。元件数写成 64 (8 × 8)，单位是 element，单数。封装 Glass epoxy。特性写 an scintillator 和 it suitable，与产品页相同。应用写 General industrial measurement，以及 X-ray non-destructive inspection and the like。另写可以按客户要求装 CsI (Tl)、phosphor sheet、GOS 和 CWO，这些带闪烁体的型号没有单独的索引行。光灵敏度在 λ=920 nm 是最小 550、典型 610 mA/W。610 mA/W 等于产品页的 0.61 A/W。峰值波长是 960 nm，这一行的条件不是 λp。短路电流条件写成 100 lx, 2856 k，k 是小写。暗电流典型 10 pA、最大 300 pA，条件 VR=10 mV。上升时间典型 15 µs。终端电容最小 40 pF、典型 60 pF、最大 90 pF。光谱图号 KMPDB0533EA，旁边另有 KMPDB0533JA。外形图号 KMPDA0603EC。" +
          xrayPlace,
      ]),
    ],
  },
];
