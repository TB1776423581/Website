const page = (name, date, url, points) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/ingaas-photodiode/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/ingaas-photodiode.html";

const sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g14942_series_kird1147e.pdf";

const guideUrl =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/infrared_kird0001e.pdf";

const indexIntro =
  "索引一级标题写 InGaAs photodiodes，前后没有空格。页面标题在 photodiodes 和竖线之间是一个空格。说明写 InGaAs photodiodes for near-infrared light detection. Features include high speed, high sensitivity, low noise, and spectral responses ranging from 0.5 μm to 2.6 μm。共 96 行，产品名都写成 InGaAs PIN photodiode。newState 为 true 的只有 G14942-22。";

const docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，安全注意事项 Safety consideration / Opto-semiconductors 标 34 KB/PDF，化合物光半导体注意事项 Precautions / Compound opto-semiconductors (photosensors, light emitters) 标 390 KB/PDF。选型指南 Selection guide / Infrared detectors 标 2.2 MB/PDF，技术笔记 Technical note / Compound opto-semiconductor photosensors 标 3.1 MB/PDF。产品页的 og:description 是空的。";

const place =
  "手册应用写 Optical measurement including LiDAR、Optical fiber communications、Communication in industrial and semiconductor manufacturing equipment、SS-OCT 和 Laser power monitor。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面，也不放在技术下面。";

const g9801Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g9801_series_kird1081e.pdf";

const g9801Place =
  "手册应用只写 Power monitor in optical fiber communications。这句没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱范围是光电二极管的响应范围，不是按波段成像，所以不放在技术下面。";

const g6854Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g6854-01_kird1013e.pdf";

const g6854Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，安全注意事项 Safety consideration / Opto-semiconductors 标 34 KB/PDF，化合物光半导体注意事项 Precautions / Compound opto-semiconductors (photosensors, light emitters) 标 390 KB/PDF。选型指南 Selection guide / Infrared detectors 标 2.2 MB/PDF，技术笔记 Technical note / Compound opto-semiconductor photosensors 标 3.1 MB/PDF。";

const g6854Place =
  "手册应用只写 Optical fiber communications。这句没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const g8370Sheet10 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g8370-10_kird1058e.pdf";

const g8370Sheet81 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g8370-81_etc_kird1064e.pdf";

const g8370Place10 =
  "手册应用写 LD power monitor 和 LD aging equipment。这两句没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const g8370Place81 =
  "手册应用写 Laser monitor、Optical power meter 和 Laser diode life test。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

export const ingaasPinProducts = [
  {
    id: "g14942",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "G14942：滨松可配 FC/Angled PC 的插座型 InGaAs PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KIRD1147E02，页脚写 Jul. 2026 DN，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。G14942-22 和 G14942-32 共用这一页。索引 newState 为 true 的只有 G14942-22。手册产品表只在 G14942-22 旁边写 NEW。",
    applications: [],
    technologies: [],
    models: [
      page("G14942-22", "2026-07", part("G14942-22"), [
        "产品页没有写发布日期。一级标题写 G14942-22。页面标题和 og:title 都写 InGaAs PIN photodiode G14942-22。二级标题写 Angled PC compatible, receptacle type。正文写 This is a receptacle type compatible with FC/Angled PC, and has a built-in high-speed InGaAs PIN photodiode。特性三条的连字符后面都是不换行空格：High-speed response: 2 GHz typ.、Low dark current: 20 pA typ.、FC/Angled PC compatible。产品页没有写应用栏。下载标 264 KB/PDF。og:description 是空的。",
        "规格表元件数 1，封装 Receptacle，封装类别 FC board，冷却 Non-cooled。光谱范围 0.9 μm to 1.7 μm。峰值 1.55 μm，光灵敏度典型 0.95 A/W，暗电流最大 0.4 nA，截止频率典型 2000 MHz，终端电容典型 1 pF。规格表没有感光面积，也没有噪声等效功率。测量条件写 Typ. Ta=25 ℃，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=5 V，Cutoff frequency: V<sub>R</sub>=5 V，逗号后面有两个空格再写下标 R<sub>L</sub>=50 Ω，λ=1.55 μm, -3 dB，Terminal capacitance: V<sub>R</sub>=5 V, f=1 MHz，unless otherwise noted。外形标题写 Dimensional outline (unit: mm)，图文件是 kirda0300.svg。产品页没有光谱图。" +
          docs,
        `${indexIntro}这一行 newState 是 true。productExp 与二级标题相同。thumbAlt 是 null。感光面积的值是 --。光谱范围的值写成 0.9 μm to 1.7，显示才补上 μm。峰值 1.55 μm。光灵敏度 0.95 A/W。截止频率 2000 MHz。终端电容 1 pF。噪声等效功率是 --。封装的值写成 Receptacle，显示写成 Receptacle，末尾多一个空格。封装类别的值写成 FC，显示写成 FC board。冷却 Non-cooled。手册标 264 KB。索引地址 ${index}。相关产品列出 G9801-32 和 G9801-22。这两只也在同一索引上，没有放进这一页。`,
        `手册 ${sheet}。目录号 KIRD1147E02，页脚写 Jul. 2026 DN，并写 current as of July 2026。产品表把这一只写成 G14942-22 NEW，Mounted type 写 Board，连接器写 FC。电特性表是两只共用的一列。光谱范围写成 0.9 to 1.7 µm。峰值典型 1.55 µm。光灵敏度条件 λ=λp, VR=5 V，最小 0.8 A/W、典型 0.95 A/W。暗电流条件 Dark state, VR=5 V，典型 0.02 nA、最大 0.4 nA。特性里的 20 pA typ. 和 0.02 nA 是同一数值，规格表只留下最大 0.4 nA。截止频率典型 2 GHz，条件写成 VR=5 V, RL=50 Ωλ=λp, -3 dB，Ω 和 λ 之间没有空格。终端电容典型 1 pF、最大 1.5 pF，条件写成 VR=5 V, f=1 MHzCase: GND，MHz 和 Case 之间没有空格。回波损耗最小 27 dB、典型 35 dB，条件 λ=1.31/1.55 µm。注 *2 写 Using a single-mode optical fiber with an FC/Angled PC type master plug。产品页没有回波损耗。绝对最大反向电压 20 V，条件 Ta=25 °C。工作温度 -20 to +70 °C，贮存温度 -40 to +85 °C，条件都写 No dew condensation。外形图号 KIRDA0300EA，产品页文件名没有 EA。引脚写成 Case、Anode、Cathode。注 *3 写 It is not connected to the housing。推荐焊接温度 260 °C (within 10 seconds)。文末写 The G14942 series may be damaged or deteriorated by static electricity。相关信息列出 Metal, ceramic, plastic package products，产品页的注意事项没有这一份。` +
          `选型指南 ${guideUrl}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，页脚写 Aug. 2026 DN，并写 Information described in this material is current as of August 2026，记为约 2026 年 8 月。指南没有列出 G14942。` +
          place,
      ]),
      page("G14942-32", "2026-07", part("G14942-32"), [
        "产品页没有写发布日期。一级标题写 G14942-32。页面标题和 og:title 都写 InGaAs PIN photodiode G14942-32。二级标题、正文和三条特性与 G14942-22 相同，连字符后面同样是不换行空格。产品页没有写应用栏。下载仍标 264 KB/PDF。og:description 是空的。",
        "规格表元件数、光谱范围、峰值、光灵敏度、暗电流、截止频率和终端电容与 G14942-22 相同。封装仍是 Receptacle，冷却仍是 Non-cooled。封装类别写成 FC panel，不是 FC board。测量条件同样把 R 写成下标，截止频率那一处逗号后面同样有两个空格。外形图文件是 kirda0283.svg。产品页没有光谱图。" +
          docs,
        `${indexIntro}这一行 newState 是 false。productExp 与二级标题相同。thumbAlt 是 null。感光面积和噪声等效功率都是 --。封装的值写成 Receptacle，显示同样在末尾多一个空格。封装类别的值写成 FC，显示写成 FC panel。手册仍标 264 KB。相关产品同样列出 G9801-32 和 G9801-22，没有放进这一页。`,
        `手册仍是 ${sheet}，记为约 2026 年 7 月。产品表这一列没有写 NEW，Mounted type 写 Panel，连接器仍写 FC。电特性与 G14942-22 同一列，所以典型暗电流仍是 0.02 nA，产品页规格表仍只写最大 0.4 nA。外形图号 KIRDA0283EB，产品页文件名没有 EB。` +
          `约 2026 年 8 月的选型指南 KIRD0001E23 也没有列出 G14942-32。` +
          place,
      ]),
    ],
  },
  {
    id: "g9801",
    date: "2015-08",
    companyId: "hamamatsu",
    category: "product",
    title: "G9801：滨松 FC 插座型 InGaAs PIN 光电二极管",
    summary:
      "产品页没有写发布日期。G9801-22 和 G9801-32 共用这一页。手册目录号 KIRD1081E03，页脚写 Aug. 2015 DN，并写 Information described in this material is current as of August, 2015，August 后面有逗号，记为约 2015 年 8 月。索引 newState 都是 false。产品页暗电流最大写成 0.95 nA。手册最大是 0.4 nA，典型是 0.02 nA。",
    applications: [],
    technologies: [],
    models: [
      page("G9801-22", "2015-08", part("G9801-22"), [
        "产品页没有写发布日期。页眉写 InGaAs PIN photodiode。一级标题写 G9801-22。页面标题和 og:title 都写 InGaAs PIN photodiode G9801-22 | Hamamatsu Photonics。og:url 走 infrared-detector 路径，索引给出的产品地址走 photodiodes 路径。二级标题写 Receptacle type, 1.3/1.55 μm, 2 GHz。正文写 The G9801-22 is a high-speed receiver specifically developed for 1.3/1.55 μm band power monitor in optical fiber communications。下一句写 This device incorporates a high-speed, high-sensitivity InGaAs PIN photodiode integrated in a receptacle，然后换行再写 module。特性四条用 <br /> 分开，连字符后面是一个空格：High-speed response: 2 GHz typ.、Low dark current: 20 pA typ.、High sensitivity: 0.9 A/W typ. (λ=1.31 μm)、Low terminal capacitance: 1 pF typ.。产品页没有写应用栏。下载标 233 KB/PDF。meta description 把 receptacle 和 module 连成 receptaclemodule，并在 module. 和 Features 之间没有空格。keywords 写成 InGaAs photodiodes,InGaAs photodiodes。",
        "规格表元件数 1，封装 Receptacle，封装类别 FC board，冷却 Non-cooled。光谱范围 0.9 to 1.7 μm，峰值典型 1.55 μm，光灵敏度典型 0.95 A/W，暗电流最大 0.95 nA，截止频率典型 2000 MHz，终端电容典型 1 pF。规格表没有感光面积，也没有噪声等效功率。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=5 V，Cutoff frequency: V<sub>R</sub>=5 V,  R<sub>L</sub>=50 Ω，逗号后面有两个空格，再写 λ=1.3 μm, -3 dB，Terminal capacitance: V<sub>R</sub>=5 V, f=1 MHz。外形标题写 Dimensional outline (unit: mm)，图文件是 kirda0079ec.svg，页面里另有一份大写的 KIRDA0079EC.svg。" +
          docs,
        `${indexIntro}这一行 newState 是 false。productExp 写 FC receptacle-board mount, 1.3/1.55 μm, 2 GHz，比二级标题多了 FC 和 board mount。thumbAlt 写 G9801-22。缩略图文件名是 k_receptacle_-22_pp_xx.jpg。typeNameSort 写成 G09801-22。感光面积和噪声等效功率都是 --。光灵敏度 0.95 A/W。截止频率 2000 MHz。终端电容 1 pF。封装的值写成 Receptacle，显示写成 Receptacle，末尾多一个空格。封装类别的值写成 FC，显示写成 FC board。冷却 Non-cooled。手册标 233 KB。索引地址 ${index}。`,
        `手册 ${g9801Sheet}。目录号 KIRD1081E03，页脚写 Cat. No. KIRD1081E03 Aug. 2015 DN，并写 current as of August, 2015。封面写 InGaAs PIN photodiodes、G9801 series，副题写 Receptacle type, 1.3/1.55 μm, 2 GHz。引言写 The G9801 series are high-speed receivers specifically developed for 1.3/1.55 μm band power monitor in optical fiber communications。产品页用单数 is a，手册用复数 are。特性没有连字符，灵敏度条件写成 λ=1.31 μm。应用只写 Power monitor in optical fiber communications。电特性表头写 Ta=25 °C。光谱范围写成 0.9 to 1.7 μm。峰值典型 1.55 μm。光灵敏度这一行的名称写成 Photo sensitivity，中间有空格，符号 S。λ=1.3 μm 时最小 0.75 A/W、典型 0.9 A/W。λ=1.55 μm 时最小 0.8 A/W、典型 0.95 A/W。产品页规格表只留下 0.95 A/W，特性里的 0.9 A/W 对应手册 1.3 μm 那一格，但特性写成 1.31 μm。暗电流条件 VR=5 V，典型 0.02 nA、最大 0.4 nA。特性里的 20 pA typ. 和 0.02 nA 是同一数值。产品页规格表把最大写成 0.95 nA。截止频率写成 Cut-off frequency，有连字符，典型 2 GHz，条件 VR=5 V, RL=50 Ω，λ=1.3 μm, -3 dB。产品页写成 Cutoff frequency 和 2000 MHz。终端电容典型 1 pF、最大 1.5 pF。噪声等效功率条件 VR=5 V, λ=1.55 μm，典型 3 × 10-15 W/Hz1/2。产品页和索引都没有这一行。注 *2 写 Using a single mode optical fiber with a master plug，single 和 mode 之间没有连字符。封装表 Mount type 写 Board，连接器写 FC。外形图号 KIRDA0079EC。图注写 compatible with FC/PC, FC/SPC, and FC/UPC optical plugs，并写 It is not compatible with FC/Angled PC plugs。引脚写 Anode、Cathode、Case。文末写 The G9801 series may be damaged by electrostatic discharge, etc.。相关信息写 Disclaimer、Metal, ceramic, plastic products，技术信息写 Infrared detectors。产品页的注意事项标题不是 Metal, ceramic, plastic products。` +
          `选型指南 ${guideUrl}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，页脚写 Aug. 2026 DN，并写 Information described in this material is current as of August 2026，记为约 2026 年 8 月。指南正文没有 G9801。` +
          g9801Place,
      ]),
      page("G9801-32", "2015-08", part("G9801-32"), [
        "产品页没有写发布日期。页眉、一级标题的型号、页面标题和 og:title 都换成 G9801-32。og:url 仍走 infrared-detector 路径。二级标题与 G9801-22 相同。正文写 The G9801-32 is high-speed receiver，is 和 high-speed 之间没有 a。其余句子相同，receptacle 和 module 之间同样换行。特性四条与 G9801-22 相同。产品页没有写应用栏。下载仍标 233 KB/PDF。meta description 同样把 receptaclemodule 连在一起，并在 module. 和 Features 之间没有空格。",
        "规格表元件数、光谱范围、峰值、光灵敏度、暗电流、截止频率和终端电容与 G9801-22 相同，暗电流最大仍是 0.95 nA。封装仍是 Receptacle，冷却仍是 Non-cooled。封装类别写成 FC panel，不是 FC board。测量条件同样在截止频率的逗号后面有两个空格。外形图文件是 kirda0080ec.svg，页面里另有一份大写的 KIRDA0080EC.svg。" +
          docs,
        `${indexIntro}这一行 newState 是 false。productExp 写 FC receptacle-panel mount, 1.3/1.55 μm, 2 GHz。thumbAlt 写 G9801-32。缩略图文件名是 k_receptacle_-32_pp_xx.jpg。typeNameSort 写成 G09801-32。感光面积和噪声等效功率都是 --。封装显示同样在末尾多一个空格。封装类别的值写成 FC，显示写成 FC panel。手册仍标 233 KB。`,
        `手册仍是 ${g9801Sheet}，记为约 2015 年 8 月。封装表这一列 Mount type 写 Panel，连接器仍写 FC。电特性与 G9801-22 同一列，所以暗电流最大仍是 0.4 nA，产品页仍写 0.95 nA。外形图号 KIRDA0080EC。图注同样写不兼容 FC/Angled PC plugs。` +
          `约 2026 年 8 月的选型指南 KIRD0001E23 正文也没有 G9801-32。` +
          g9801Place,
      ]),
    ],
  },
  {
    id: "g6854",
    date: "2017-09",
    companyId: "hamamatsu",
    category: "product",
    title: "G6854：滨松球面透镜窗、便于光纤耦合的 InGaAs PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KIRD1013E05，页脚写 Sep. 2017 DN，并写 Information described in this material is current as of September 2017，记为约 2017 年 9 月。索引 newState 是 false。产品页暗电流最大写成 0.4 nA。手册最大写成 400 pA，典型 80 pA。手册把 careful 写成 carefull。",
    applications: [],
    technologies: [],
    models: [
      page("G6854-01", "2017-09", part("G6854-01"), [
        "产品页没有写发布日期。页眉写 InGaAs PIN photodiode。一级标题写 G6854-01。页面标题和 og:title 都写 InGaAs PIN photodiode G6854-01 | Hamamatsu Photonics。og:url 走 infrared-detector 路径，索引给出的产品地址走 photodiodes 路径。二级标题写 Spherical lens window package for efficient fiber coupling。产品页正文没有另起一段说明，特性直接从 Features 开始。特性五条，连字符后面是一个普通空格：Easy optical axis alignment、High fiber coupling efficiency、CD package、Package weldable by YAG laser、Spherical lens window with AR coating minimizes　return light input。最后一条 minimizes 和 return 之间是一个全角空格。产品页没有写应用栏。下载名称写 InGaAs PIN photodiode G6854-01，标 926 KB/PDF，文件名是 g6854-01_kird1013e.pdf。og:description 从 Features 起连成一段，条与条之间没有空格。keywords 写成 InGaAs photodiodes,InGaAs photodiodes。",
        "规格表感光面积 φ0.08 mm，元件数 1，封装 Metal，封装类别 TO-18 (with lens)，冷却 Non-cooled。光谱范围 0.9 to 1.7 μm。峰值典型 1.55 μm。光灵敏度典型 0.95 A/W。暗电流最大 0.4 nA。截止频率典型 2000 MHz。终端电容典型 1 pF。噪声等效功率典型 2×10<sup>-15</sup> W/Hz<sup>1/2</sup>，-15 和 1/2 都是上标。规格表没有分流电阻，也没有探测率。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=5 V，Cutoff frequency: V<sub>R</sub>=5 V, R<sub>L</sub>=50 Ω，λ=1.3 μm -3 dB，μm 和 -3 之间没有逗号，Terminal capacitance: V<sub>R</sub>=5 V, f=1 MHz。锚点有 Specifications、Spectral response、Dimensional outline (unit: mm) 和 Related documents。光谱图资源写成 k_g6854-01_sr_xx,0.jpg，逗号后面是 0，页面地址把下划线换成连字符，并把逗号写成 %2C。外形图文件是 kirda0063ed.svg，资源路径写成 KIRDA0063ED.svg。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false，排在 G14942-32 后面。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名是 k_g6854-01_pp_xx.jpg。typeNameSort 写成 G06854-01，在 G 后面插入一个 0。感光面积的值写成 φ0.08，显示写成 φ0.08 mm。光谱范围的值写成 0.9 to 1.7，显示才补上 μm。峰值 1.55 μm。光灵敏度 0.95 A/W。截止频率 2000 MHz。终端电容 1 pF。噪声等效功率的值写成 2×10<sup>-15</sup>，显示写成 2×10<sup>-15</sup> W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别的值在 with 处截断，写成 TO-18 (with，显示才补成 TO-18 (with lens)。冷却 Non-cooled。手册名称写 InGaAs PIN photodiode G6854-01，标 926 KB。索引地址 ${index}。`,
        `手册 ${g6854Sheet}。目录号 KIRD1013E05，页脚写 Cat. No. KIRD1013E05 Sep. 2017 DN，并写 current as of September 2017，September 后面没有逗号。封面写 InGaAs PIN photodiode，型号写 G6854-01。副题分成两行，写 Spherical lens window package for efficient fiber coupling，与产品页二级标题相同。特性没有连字符。CD package 下面多一句 High degree of base positioning accuracy allows easy positioning。产品页没有这一句。最后一条没有全角空格。应用只写 Optical fiber communications。绝对最大表头写 Ta=25 °C。反向电压符号写成 VR Max.，数值 20 V。工作温度 -40 to +85 °C，贮存温度 -55 to +125 °C。电特性表头写 Photo sensitivity，中间有空格。λ=1.3 μm 一行最小 0.8 A/W、典型 0.9 A/W。λ=1.55 μm 一行最小 0.85 A/W、典型 0.95 A/W。产品页规格表只留典型 0.95 A/W，条件写成 λ=λp。暗电流条件 VR=5 V，典型 80 pA、最大 400 pA。400 pA 与产品页的 0.4 nA 是同一数值，产品页没有写典型 80 pA。截止频率最小 1 GHz、典型 2 GHz，条件 VR=5 V, RL=50 Ω，λ=1.3 μm, -3 dB，μm 和 -3 之间有逗号。产品页写成 2000 MHz，并且没有逗号。终端电容典型 1 pF、最大 1.5 pF。分流电阻典型 8 GΩ，条件 VR=10 mV。探测率符号 D*，典型 5 × 10<sup>12</sup> cm · Hz<sup>1/2</sup>/W，12 和 1/2 都是上标，条件 λ=λp。噪声等效功率典型 2 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，条件 λ=λp。产品页用乘号紧贴 10，手册在 × 两边留空格。文末写 G6854-01 may be damaged by Electro Static Discharge, etc. Be carefull when using G6854-01。carefull 多一个 l，Electro 和 Static 各自首字母大写。光谱图号 KIRDB0002EC，暗电流图号 KIRDB0152EB，终端电容图号 KIRDB0153EB，频率响应图号 KIRDB0154EB，光纤耦合图号 KIRDB0155EC 和 KIRDB0156EC。外形图号 KIRDA0063ED。相关信息列出 Disclaimer 和 Metal, ceramic, plastic package products。产品页的注意事项没有 package products 这一份。` +
          `选型指南 ${guideUrl}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，页脚写 Aug. 2026 DN，并写 current as of August 2026，记为约 2026 年 8 月。第 5 页这一行写 G6854-01、Non-cooled、ϕ0.08、0.9 to 1.7、2000 (VR=5 V)，封装栏写成 With CD lens 和 TO-18。截止频率表头的单位是 MHz。` +
          g6854Place,
      ]),
    ],
  },
  {
    id: "g8370",
    date: "2025-05",
    companyId: "hamamatsu",
    category: "product",
    title: "G8370：滨松大面积陶瓷封装和低偏振相关损耗的 InGaAs PIN 光电二极管",
    summary:
      "产品页没有写发布日期。G8370-10、G8370-81、G8370-82、G8370-83 和 G8370-85 共用这一页。G8370-10 的手册目录号 KIRD1058E04，页脚写 May 2025 DN，并写 Information described in this material is current as of May 2025，记为约 2025 年 5 月。其余四只共用手册 KIRD1064E07，页脚写 Jul. 2020 DN，并写 current as of July, 2020，July 后面有逗号，记为约 2020 年 7 月。索引 newState 都是 false。G8370-10 的特性写灵敏度典型 0.95 A/W，产品页规格表和索引写 1 A/W，手册 λ=λp 的典型值是 1.0 A/W。",
    applications: [],
    technologies: [],
    models: [
      page("G8370-10", "2025-05", part("G8370-10"), [
        "产品页没有写发布日期。页眉写 InGaAs PIN photodiode。一级标题写 G8370-10。页面标题和 og:title 都写 InGaAs PIN photodiode G8370-10 | Hamamatsu Photonics。og:url 走 infrared-detector 路径，索引给出的产品地址走 photodiodes 路径。二级标题写 Ceramic package with large active area (φ10 mm)，φ 是希腊小写字母。二级标题后面先是一个只含不换行空格的段落，然后特性直接从 Features 开始，没有另起一段说明。特性五条放在同一个 p 里，b 包住 Features 和换行，连字符后面是一个普通空格：Large active area: φ10 mm、High sensitivity: 0.95 A/W typ. (λ=1.55 μm)、Low dark current、Low PDL: 5 mdB typ., 10 mdB max.、Photo response non-uniformity: ±2 % typ.。产品页没有写应用栏。下载名称写 Datasheet，标 280 KB/PDF，文件名是 g8370-10_kird1058e.pdf。og:description 从二级标题写起，标题后面是两个没有分号的 &nbsp，再接 Features，条与条之间没有空格。og:description 把 typ. 写成 Typ.，把 max. 写成 Max.。keywords 写成 InGaAs photodiodes,InGaAs photodiodes。",
        "规格表感光面积 φ10.0 mm，元件数 1，封装 Ceramic，冷却 Non-cooled。规格表没有封装类别。光谱范围 0.9 to 1.7 μm。峰值典型 1.55 μm。光灵敏度典型 1 A/W。暗电流最大 2000 nA。截止频率典型 0.1 MHz。终端电容典型 20000 pF。噪声等效功率典型 6×10<sup>-13</sup> W/Hz<sup>1/2</sup>，-13 和 1/2 都是上标。规格表没有分流电阻、探测率、偏振相关损耗和响应不均匀性。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=10 mV，Cutoff frequency: V<sub>R</sub>=0 V, R<sub>L</sub>=50 Ω，Terminal capacitance: V<sub>R</sub>=0 V,  f=1 MHz，f 前面有两个空格。锚点有 Specifications、Spectral response、Dimensional outline (unit: mm) 和 Related documents。光谱图文件是 kirdb0284eb.svg。外形图文件是 kirda0167.svg。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false，排在 G6854-01 后面。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名是 k_g8370-10_pp_xx.jpg。typeNameSort 写成 G08370-0010，在 G 后面插入一个 0，并把 10 补成 0010。感光面积的值写成 φ10.0，显示写成 φ10.0 mm。光谱范围的值写成 0.9 to 1.7，显示才补上 μm。峰值 1.55 μm。光灵敏度 1 A/W。截止频率 0.1 MHz。终端电容 20000 pF。噪声等效功率的值写成 6×10<sup>-13</sup>，显示写成 6×10<sup>-13</sup> W/Hz<sup>1/2</sup>。封装的值和显示都写成 Ceramic。封装类别的值和显示都写成 --。冷却 Non-cooled。手册名称写 Datasheet，标 280 KB。索引地址 ${index}。`,
        `手册 ${g8370Sheet10}。目录号 KIRD1058E04，页脚写 Cat. No. KIRD1058E04 May 2025 DN，并写 current as of May 2025，May 后面没有逗号。封面写 InGaAs PIN photodiode，型号写 G8370-10。副题写 Ceramic package with large active area (ϕ10 mm)，ϕ 是希腊 phi 符号，不是产品页的 φ。特性没有连字符，直径也用 ϕ。应用写 LD power monitor 和 LD aging equipment。绝对最大表把感光面写成 Active area，符号是一条短横，数值 ϕ10 mm。反向电压写成 VR Max.，数值 1 V。工作温度和贮存温度都是 -25 to +70* °C，注写 * No condensation。电特性表头写 Ta=25 °C，没有 Typ.，也没有 unless otherwise noted。光灵敏度这一行的名称写成 Photo sensitivity，中间有空格，符号 S。λ=1.3 µm 最小 0.8 A/W、典型 0.85 A/W。λ=λp 最小 0.85 A/W、典型 1.0 A/W。特性里的 0.95 A/W typ. (λ=1.55 μm) 和这张表的 1.0 A/W 不是同一个数，产品页规格表只留下 1 A/W。暗电流条件 VR=10 mV，典型 0.2 µA、最大 2 µA。2 µA 与产品页的 2000 nA 是同一数值，产品页没有写典型 0.2 µA。分流电阻条件 VR=10 mV，最小 5 kΩ、典型 50 kΩ。终端电容条件 VR=0 V, f=1 MHz，典型 20 nF。20 nF 与产品页的 20000 pF 是同一数值。截止频率条件 VR=0 V, RL=50 Ω，典型 100 kHz。100 kHz 与产品页的 0.1 MHz 是同一数值。噪声等效功率条件 λ=λp，典型 6 × 10<sup>-13</sup> W/Hz<sup>1/2</sup>，手册在 × 两边留空格，产品页把乘号紧贴 10。探测率符号 D*，条件 λ=λp，典型 1.5 × 10<sup>12</sup> cm⸱Hz<sup>1/2</sup>/W，乘号中间的点是 U+2E31。响应不均匀性条件 80 % of active area，典型 ±2 %。偏振相关损耗条件 VR=0 V, λ=1.55 µm，典型 5 mdB、最大 10 mdB。产品页规格表没有这四行。光谱图号 KIRDB0284EB，暗电流图号 KIRDB0285EA，终端电容图号 KIRDB0286EA。外形图号 KIRDA0167EC，产品页文件名没有 EC。图上感光面写成 Active area ɸ10，ɸ 是 U+0278。相关信息把化合物注意事项写成 Precautions / Compound opto-semisonductors (photosensors, light emitters)，semiconductors 少一个 c。同一份相关信息还列出 Safety consideration / Opto-semiconductor products、Precautions / Metal, ceramic, plastic package products，以及 Technical note / Compound semiconductor photosensors。产品页的注意事项没有 package products，技术笔记标题仍是 Compound opto-semiconductor photosensors。` +
          `选型指南 ${guideUrl}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，页脚写 Aug. 2026 DN，并写 current as of August 2026，记为约 2026 年 8 月。第 6 页这一行写 G8370-10、ϕ10、0.1* 和 Ceramic。截止频率表头写 VR=5 V，单位是 MHz。同页注写 * VR=0 V。这一页的说明写 peak sensitivity wavelength of 1.55 µm，并写 Suitable for optical power meters and NIR photometry，以及 Wavelength: 0.9 µm to 1.7 µm。这一行本身没有印出光谱范围和峰值。` +
          g8370Place10,
      ]),
      page("G8370-81", "2020-07", part("G8370-81"), [
        "产品页没有写发布日期。页眉、页面标题和 og:title 都换成 G8370-81，og:url 仍走 infrared-detector 路径。二级标题写 Low PDL (Polarization Dependence Loss)。说明段前面有一个空的 p。说明写 InGaAs PIN photodiode G8370-81 has low PDL (Polarization Dependence Loss) at 1.55 μm, large shunt resistance and very low noise。说明段和特性之间是一个不换行空格段落。特性四条，b 只包住 Features，连字符后面是一个普通空格：Low PDL (Polarization Dependence Loss)、Low noise, low dark current、Large active area、active area sizes: φ1 mm。最后一条 active 的首字母是小写。特性后面还有一个空的 p。产品页没有写应用栏。下载名称写 Datasheet，标 660 KB/PDF，文件名是 g8370-81_etc_kird1064e.pdf。og:description 把说明和特性连成一段，noise. 和 Features 之间是一个没有分号的 &nbsp，条与条之间没有空格。keywords 仍写成 InGaAs photodiodes,InGaAs photodiodes。",
        "规格表感光面积 φ1.0 mm，元件数 1，封装 Metal，封装类别 TO-18，冷却 Non-cooled。光谱范围 0.9 to 1.7 μm。峰值典型 1.55 μm。光灵敏度典型 1.1 A/W。暗电流最大 5 nA。截止频率典型 35 MHz。终端电容典型 90 pF。噪声等效功率典型 2×10<sup>-14</sup> W/Hz<sup>1/2</sup>，-14 和 1/2 都是上标。规格表没有分流电阻、探测率和偏振相关损耗。测量条件写 Typ. Ta=25 ℃，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=1 V，Cutoff frequency: V<sub>R</sub>=1 V, R<sub>L</sub>=50 Ω, -3 dB，Terminal capacitance: V<sub>R</sub>=1 V, f=1 MHz, unless otherwise noted。unless otherwise noted 放在末尾。锚点与 G8370-10 相同。光谱图文件是 kirdb0374ea.svg。外形图资源写成 kirda0189eb%2C0.svg，文件名在 eb 后面有逗号和 0。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false，排在 G8370-10 后面。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名是 k_g8370-01_-81_pp_xx.jpg。typeNameSort 写成 G08370-81，在 G 后面插入一个 0。感光面积的值写成 φ1.0，显示写成 φ1.0 mm。光谱范围的值写成 0.9 to 1.7，显示才补上 μm。峰值 1.55 μm。光灵敏度 1.1 A/W。截止频率 35 MHz。终端电容 90 pF。噪声等效功率的值写成 2×10<sup>-14</sup>，显示写成 2×10<sup>-14</sup> W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-18。冷却 Non-cooled。手册名称写 Datasheet，标 660 KB。`,
        `手册 ${g8370Sheet81}。目录号 KIRD1064E07，页脚写 Cat. No. KIRD1064E07 Jul. 2020 DN，并写 current as of July, 2020，July 后面有逗号。封面写 InGaAs PIN photodiodes，型号写 G8370-81/-82/-83/-85，是复数。副题与产品页二级标题相同。正文写 have low PDL at 1.55 µm, large shunt resistance and very low noise，用复数 have，没有把 Polarization Dependence Loss 再写一遍。下一句写 Hamamatsu provides various types of InGaAs PIN photodiodes with photosensitive areas from ϕ1 to ϕ5 mm。产品页没有这一句，说明段用的是单数 has。特性没有连字符，写成 Low PDL、Low noise, low dark current、Large photosensitive area、Various photosensitive area sizes available。产品页写的是 Large active area，并单独写直径。应用写 Laser monitor、Optical power meter 和 Laser diode life test。结构表窗材料注 *1 写 A=Borosilicate glass with anti-reflective coating (optimized for 1.55 µm peak)。这一只的外形栏写 (1)/A，封装 TO-18，感光面 ϕ1，反向电压最大 5 V。工作温度 -40 to +85 °C，贮存温度 -55 to +125 °C，这一格和 G8370-82、G8370-83、G8370-85 共用。注写 Exceeding the absolute maximum ratings even momentarily may cause a drop in product quality。电特性表头写 Typ. Ta=25 °C, unless otherwise noted。光谱范围 0.9 to 1.7 µm，峰值 1.55 µm，四只共用。λ=1.3 µm 最小 0.8 A/W、典型 0.9 A/W。λ=λp 最小 0.85 A/W、典型 1.1 A/W。产品页规格表只留下 1.1 A/W。暗电流条件 VR=1 V，典型 1 nA、最大 5 nA。截止频率典型 35 MHz，条件 VR=1 V，RL=50 Ω，-3 dB。终端电容典型 90 pF，条件 VR=1 V，f=1 MHz。分流电阻条件 VR=10 mV，典型 100 MΩ。偏振相关损耗条件 λ=λp，典型 5 mdB、最大 10 mdB，四只共用这一格。探测率条件 λ=λp，典型 5 × 10<sup>12</sup> cm·Hz<sup>1/2</sup>/W，也是四只共用。噪声等效功率条件 λ=λp，典型 2 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。手册在 × 两边留空格。光谱图号 KIRDB0374EA。温度特性图号 KIRDB0042EB，图题写 Photo sensitivity temperature characteristic，条件写成 (Typ., Vr=0 V)，Vr 的 r 是小写。线性图号 KIRDB0298EA，图题写 Photo sensitivity linearity，条件写成 (Typ. Ta=25 °C, λ=1.3 mm, RL=2 Ω, VR=0 V)，波长单位写成 mm。终端电容图号 KIRDB0299EA。分流电阻图号 KIRDB0300EA，条件写成 (Typ. VR=10 mV)。外形图号 KIRDA0189EB，图题写 (1) G8370-81。图上 Photosensitive 的下一行写成 Surface，S 大写。相关信息列出 Disclaimer、Metal, ceramic, plastic package products 和 Compound opto-semiconductors (photosensors, light emitters)。产品页的注意事项没有 package products 这一份。` +
          `约 2026 年 8 月的选型指南 KIRD0001E23 第 5 页写 G8370-81*、ϕ1、35 (VR=1 V) 和 TO-18。同页写 G8370-82*、ϕ2、4 (VR=1 V)，封装栏 TO-5 与 G8370-83* 连在一起。G8370-83* 写 ϕ3、2 (VR=1 V)。峰值 1.55 印在这几行旁边。G8370-85* 写 ϕ5、0.6 (VR=1 V) 和 TO-8。页末注写 * Low PDL type。这一页的说明写 peak sensitivity wavelength of 1.55 µm。` +
          g8370Place81,
      ]),
      page("G8370-82", "2020-07", part("G8370-82"), [
        "产品页没有写发布日期。页眉、一级标题、页面标题和 og:title 都换成 G8370-82。二级标题与 G8370-81 相同。说明把型号换成 G8370-82，句子其余部分相同。特性最后一条写成 active area sizes: φ2 mm，active 仍是小写。产品页没有写应用栏。下载仍标 660 KB/PDF，文件名仍是 g8370-81_etc_kird1064e.pdf。og:description 同样在 noise. 和 Features 之间放一个没有分号的 &nbsp，直径写成 φ2 mm。",
        "规格表感光面积 φ2.0 mm，元件数 1，封装 Metal，封装类别 TO-5，冷却 Non-cooled。光谱范围、峰值和光灵敏度与 G8370-81 相同。暗电流最大 25 nA。截止频率典型 4 MHz。终端电容典型 550 pF。噪声等效功率典型 4×10<sup>-14</sup> W/Hz<sup>1/2</sup>。测量条件与 G8370-81 相同，暗电流仍写 V<sub>R</sub>=1 V。光谱图文件仍是 kirdb0374ea.svg。外形图资源写成 kirda0155eb%2C1.svg，文件名在 eb 后面有逗号和 1。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名是 k_g8370-02_etc_pp_xx.jpg，和 G8370-83 相同。typeNameSort 写成 G08370-82。感光面积的值写成 φ2.0，显示写成 φ2.0 mm。光灵敏度 1.1 A/W。截止频率 4 MHz。终端电容 550 pF。噪声等效功率的值写成 4×10<sup>-14</sup>。封装显示写成 Metal。封装类别的值和显示都写成 TO-5。冷却 Non-cooled。手册仍标 660 KB。`,
        `手册仍是 ${g8370Sheet81}，记为约 2020 年 7 月。这一只的外形栏写 (2)/A，和 G8370-83 共用，封装 TO-5，感光面 ϕ2。反向电压最大 2 V 印在这一共用行上。暗电流典型 5 nA、最大 25 nA。截止频率典型 4 MHz。终端电容典型 550 pF。分流电阻典型 25 MΩ。噪声等效功率典型 4 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。光谱范围、峰值、光灵敏度和偏振相关损耗与 G8370-81 同一格。外形图号 KIRDA0155EB，图题写 (2) G8370-82/-83。图上 Photosensitive 的下一行写成 surface，s 小写。` +
          `约 2026 年 8 月的选型指南第 5 页这一行写 G8370-82*、ϕ2 和 4 (VR=1 V)。` +
          g8370Place81,
      ]),
      page("G8370-83", "2020-07", part("G8370-83"), [
        "产品页没有写发布日期。页眉、一级标题、页面标题和 og:title 都换成 G8370-83。二级标题和说明句式与 G8370-81 相同，说明里的型号换成 G8370-83。特性最后一条写成 active area sizes: φ3 mm。产品页没有写应用栏。下载仍标 660 KB/PDF，文件名仍是 g8370-81_etc_kird1064e.pdf。og:description 的直径写成 φ3 mm。",
        "规格表感光面积 φ3.0 mm，元件数 1，封装 Metal，封装类别 TO-5，冷却 Non-cooled。光谱范围、峰值和光灵敏度与 G8370-81 相同。暗电流最大 75 nA。截止频率典型 2 MHz。终端电容典型 1000 pF。噪声等效功率典型 6×10<sup>-14</sup> W/Hz<sup>1/2</sup>。测量条件与 G8370-81 相同。光谱图文件仍是 kirdb0374ea.svg。外形图资源与 G8370-82 相同，写成 kirda0155eb%2C1.svg。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名与 G8370-82 相同，是 k_g8370-02_etc_pp_xx.jpg。typeNameSort 写成 G08370-83。感光面积的值写成 φ3.0，显示写成 φ3.0 mm。截止频率 2 MHz。终端电容 1000 pF。噪声等效功率的值写成 6×10<sup>-14</sup>。封装类别的值和显示都写成 TO-5。手册仍标 660 KB。`,
        `手册仍是 ${g8370Sheet81}，记为约 2020 年 7 月。外形栏仍是 (2)/A，封装仍是 TO-5，感光面 ϕ3。反向电压最大仍是共用行上的 2 V。暗电流典型 15 nA、最大 75 nA。截止频率典型 2 MHz。终端电容典型 1000 pF。分流电阻典型 10 MΩ。噪声等效功率典型 6 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号仍是 KIRDA0155EB。` +
          `约 2026 年 8 月的选型指南第 5 页这一行写 G8370-83*、ϕ3 和 2 (VR=1 V)。` +
          g8370Place81,
      ]),
      page("G8370-85", "2020-07", part("G8370-85"), [
        "产品页没有写发布日期。页眉、一级标题、页面标题和 og:title 都换成 G8370-85。二级标题和说明句式与 G8370-81 相同，说明里的型号换成 G8370-85。特性最后一条写成 active area sizes: φ5 mm。产品页没有写应用栏。下载仍标 660 KB/PDF，文件名仍是 g8370-81_etc_kird1064e.pdf。og:description 的直径写成 φ5 mm。",
        "规格表感光面积 φ5.0 mm，元件数 1，封装 Metal，封装类别 TO-8，冷却 Non-cooled。光谱范围、峰值和光灵敏度与 G8370-81 相同。暗电流最大 125 nA。截止频率典型 0.6 MHz。终端电容典型 3500 pF。噪声等效功率典型 1×10<sup>-13</sup> W/Hz<sup>1/2</sup>，-13 和 1/2 都是上标。测量条件与 G8370-81 相同，暗电流仍写 V<sub>R</sub>=1 V。光谱图文件仍是 kirdb0374ea.svg。外形图资源写成 kirda0052ec%2C1.svg，文件名在 ec 后面有逗号和 1。" +
          g6854Docs,
        `${indexIntro}这一行 newState 是 false。productExp 与二级标题相同。thumbAlt 是 null。缩略图文件名是 k_g8370-05_-85_pp_xx.jpg。typeNameSort 写成 G08370-85。感光面积的值写成 φ5.0，显示写成 φ5.0 mm。截止频率 0.6 MHz。终端电容 3500 pF。噪声等效功率的值写成 1×10<sup>-13</sup>，显示写成 1×10<sup>-13</sup> W/Hz<sup>1/2</sup>。封装类别的值和显示都写成 TO-8。手册仍标 660 KB。`,
        `手册仍是 ${g8370Sheet81}，记为约 2020 年 7 月。外形栏写 (3)/A，封装 TO-8，感光面 ϕ5，反向电压最大 1 V。暗电流典型 25 nA、最大 125 nA，两格都标 *2，注写 *2: VR=0.1 V。产品页测量条件仍把暗电流写成 V<sub>R</sub>=1 V，最大仍是 125 nA。截止频率典型 0.6 MHz。终端电容典型 3500 pF。分流电阻典型 3 MΩ。噪声等效功率典型 1 × 10<sup>-13</sup> W/Hz<sup>1/2</sup>。外形图号 KIRDA0052EC，图题写 (3) G8370-85。图上感光面一行写成 surface，s 小写。` +
          `约 2026 年 8 月的选型指南第 5 页这一行写 G8370-85*、ϕ5、0.6 (VR=1 V) 和 TO-8。` +
          g8370Place81,
      ]),
    ],
  },
];
