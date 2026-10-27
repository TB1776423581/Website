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
  "手册应用只写 Power monitor in optical fiber communications。这句没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱范围是探测器的响应波长，不是按波段成像，所以不放在技术下面。";

const g9801Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，安全注意事项 Safety consideration / Opto-semiconductors 标 34 KB/PDF，化合物光半导体注意事项 Precautions / Compound opto-semiconductors (photosensors, light emitters) 标 390 KB/PDF。选型指南 Selection guide / Infrared detectors 标 2.2 MB/PDF，技术笔记 Technical note / Compound opto-semiconductor photosensors 标 3.1 MB/PDF。";

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
    title: "G9801：滨松 1.3/1.55 μm、2 GHz 的插座型 InGaAs PIN 光电二极管",
    summary:
      "产品页没有写发布日期。G9801-22 和 G9801-32 共用这一页。手册目录号 KIRD1081E03，页脚写 Aug. 2015 DN，并写 Information described in this material is current as of August, 2015，记为约 2015 年 8 月。两行 newState 都是 false。产品页暗电流最大写成 0.95 nA。手册最大是 0.4 nA，典型是 0.02 nA。G9801-32 的正文在 is 和 high-speed 之间没有 a。",
    applications: [],
    technologies: [],
    models: [
      page("G9801-22", "2015-08", part("G9801-22"), [
        "产品页没有写发布日期。页眉写 InGaAs PIN photodiode。一级标题写 G9801-22。页面标题和 og:title 都写 InGaAs PIN photodiode G9801-22 | Hamamatsu Photonics。二级标题写 Receptacle type, 1.3/1.55 μm, 2 GHz。正文写 The G9801-22 is a high-speed receiver specifically developed for 1.3/1.55 μm band power monitor in optical fiber communications. This device incorporates a high-speed, high-sensitivity InGaAs PIN photodiode integrated in a receptacle，下一行直接写 module，中间没有空格。特性四条，连字符后面是一个普通空格：High-speed response: 2 GHz typ.、Low dark current: 20 pA typ.、High sensitivity: 0.9 A/W typ. (λ=1.31 μm)、Low terminal capacitance: 1 pF typ.。产品页没有写应用栏。下载标 233 KB/PDF，文件名是 g9801_series_kird1081e.pdf。og:description 把正文和特性连成一段，receptacle 和 module 连成 receptaclemodule。",
        "规格表元件数 1，封装写成 Receptacle，末尾多一个空格。封装类别 FC board，冷却 Non-cooled。光谱范围 0.9 to 1.7 μm。峰值典型 1.55 μm。光灵敏度典型 0.95 A/W。暗电流最大 0.95 nA。截止频率典型 2000 MHz。终端电容典型 1 pF。规格表没有感光面积，也没有噪声等效功率。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=5 V，Cutoff frequency: V<sub>R</sub>=5 V，逗号后面有两个空格再写下标 R<sub>L</sub>=50 Ω，λ=1.3 μm, -3 dB，Terminal capacitance: V<sub>R</sub>=5 V, f=1 MHz。锚点有 Specifications、Dimensional outline (unit: mm) 和 Related documents。产品页没有光谱图。外形图文件是 kirda0079ec.svg，资源路径写成 KIRDA0079EC.svg。" +
          g9801Docs,
        `${indexIntro}这一行 newState 是 false。productExp 写 FC receptacle-board mount, 1.3/1.55 μm, 2 GHz，不是二级标题里的 Receptacle type。thumbAlt 写 G9801-22。typeNameSort 写成 G09801-22，在 G 后面插入一个 0。感光面积的值是 --。光谱范围的值写成 0.9 to 1.7，显示才补上 μm。峰值 1.55 μm。光灵敏度 0.95 A/W。截止频率 2000 MHz。终端电容 1 pF。噪声等效功率是 --。封装的值写成 Receptacle，显示写成 Receptacle，末尾多一个空格。封装类别的值写成 FC，显示写成 FC board。冷却 Non-cooled。手册标 233 KB。索引地址 ${index}。另一行是 G9801-32，前缀相同，放在这一页。`,
        `手册 ${g9801Sheet}。目录号 KIRD1081E03，页脚写 Cat. No. KIRD1081E03 Aug. 2015 DN，并写 current as of August, 2015，August 后面有逗号。封面写 InGaAs PIN photodiodes，型号写 G9801 series，副题与产品页二级标题相同。引言写 The G9801 series are high-speed receivers specifically developed for 1.3/1.55 μm band power monitor in optical fiber communications。产品页把 series are 和 receivers 写成 G9801-22 is a 和 receiver。后面写 These devices incorporate a high-speed, high-sensitivity InGaAs PIN photodiode integrated in a receptacle module，module 前面有空格。再写 Packages are available with various connectors and mount types。特性四条与产品页相同，没有连字符。应用只写 Power monitor in optical fiber communications。绝对最大表头写 Ta=25 °C。反向电压 20 V。工作温度 -20 to +70 °C，贮存温度 -40 to +85 °C，条件都写 No dew condensation。电特性表头写 Photo sensitivity，中间有空格，符号 S，星号后的 2 写成上标。λ=1.3 μm 一行最小 0.75 A/W、典型 0.9 A/W。λ=1.55 μm 一行最小 0.8 A/W、典型 0.95 A/W。产品页规格表只留典型 0.95 A/W，条件写成 λ=λp。特性里的 0.9 A/W 写 λ=1.31 μm，手册这一行的条件写 λ=1.3 μm。暗电流条件 VR=5 V，典型 0.02 nA、最大 0.4 nA。特性里的 20 pA typ. 和 0.02 nA 是同一数值。产品页规格表写成最大 0.95 nA。截止频率一行的参数写成 Cut-off frequency，典型 2 GHz，条件 VR=5 V, R<sub>L</sub>=50 Ω，λ=1.3 μm, -3 dB。产品页写成 Cutoff frequency，数值写成 2000 MHz。终端电容典型 1 pF、最大 1.5 pF，条件 VR=5 V, f=1 MHz。噪声等效功率典型 3 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，-15 和 1/2 都是上标，条件 VR=5 V, λ=1.55 μm。产品页和索引都没有这一行。注 *2 写 Using a single mode optical fiber with a master plug，single 和 mode 分成两个词。产品表这一列 Mount type 写 Board，Connector 写 FC，外形编号 (1)。外形图号 KIRDA0079EC。图注写 This is compatible with FC/PC, FC/SPC, and FC/UPC optical plugs. It is not compatible with FC/Angled PC plugs。未注公差 ±0.2。引脚连接写成 Anode、Cathode、Case。文末写 The G9801 series may be damaged by electrostatic discharge, etc. Be careful when using the G9801 series。相关信息列出 Disclaimer 和 Metal, ceramic, plastic products。产品页的注意事项没有 Metal, ceramic, plastic products 这一份。` +
          `选型指南 ${guideUrl}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，封面写 August 2026 Selection guide，页脚写 Aug. 2026 DN，并写 Information described in this material is current as of August 2026，August 后面没有逗号，记为约 2026 年 8 月。指南没有列出 G9801。` +
          g9801Place,
      ]),
      page("G9801-32", "2015-08", part("G9801-32"), [
        "产品页没有写发布日期。页眉写 InGaAs PIN photodiode。一级标题写 G9801-32。页面标题和 og:title 都写 InGaAs PIN photodiode G9801-32 | Hamamatsu Photonics。二级标题与 G9801-22 相同。正文写 The G9801-32 is high-speed receiver specifically developed for 1.3/1.55 μm band power monitor in optical fiber communications，is 和 high-speed 之间没有 a。下一句同样在 receptacle 处换行，下一行直接写 module。四条特性与 G9801-22 相同，连字符后面仍是一个普通空格。产品页没有写应用栏。下载仍标 233 KB/PDF。og:description 同样把 receptaclemodule 连在一起，并且同样没有 a。",
        "规格表元件数、光谱范围、峰值、光灵敏度、暗电流、截止频率和终端电容与 G9801-22 相同，暗电流最大仍是 0.95 nA。封装仍写成 Receptacle，末尾多一个空格。冷却仍是 Non-cooled。封装类别写成 FC panel，不是 FC board。测量条件同样把 R 写成下标，截止频率那一处逗号后面同样有两个空格。外形图文件是 kirda0080ec.svg，资源路径写成 KIRDA0080EC.svg。产品页没有光谱图。" +
          g9801Docs,
        `${indexIntro}这一行 newState 是 false。productExp 写 FC receptacle-panel mount, 1.3/1.55 μm, 2 GHz。thumbAlt 写 G9801-32。typeNameSort 写成 G09801-32。感光面积和噪声等效功率都是 --。封装的值写成 Receptacle，显示同样在末尾多一个空格。封装类别的值写成 FC，显示写成 FC panel。手册仍标 233 KB。`,
        `手册仍是 ${g9801Sheet}，记为约 2015 年 8 月。产品表这一列 Mount type 写 Panel，Connector 仍写 FC，外形编号 (2)。电特性与 G9801-22 同一列，所以典型暗电流仍是 0.02 nA，最大仍是 0.4 nA，产品页规格表仍写最大 0.95 nA。外形图号 KIRDA0080EC。图注同样写 compatible with FC/PC, FC/SPC, and FC/UPC optical plugs，并写 It is not compatible with FC/Angled PC plugs。` +
          `约 2026 年 8 月的选型指南 KIRD0001E23 也没有列出 G9801-32。` +
          g9801Place,
      ]),
    ],
  },
];
