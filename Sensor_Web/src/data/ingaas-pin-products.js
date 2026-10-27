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
];
