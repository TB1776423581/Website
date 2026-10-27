const page = (name, date, url, points, extra = {}) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
  ...extra,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiode-array/si-strip-detector/${name}.html`;

const indexIntro =
  "索引一级标题写 Si strip detector，前后没有空格。说明写 An SSD is a Si photodiode array with strips of photosensitive areas (PN junctions) with a width ranging from several micrometers to several tens of micrometers formed on a substrate. It can detect incident positions of high energy particles at the micron level。只有一行，newState 是 false。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头也写成 DataSheet。ProductName 的值和显示都写成 ProductName。";

const sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13804_kmpd1210e.pdf";

const place =
  "手册应用只写 High energy particle detection。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF，也不是按波段成像，所以不放在技术下面。";

export const siStripProducts = [
  {
    id: "s13804",
    date: "2023-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S13804：滨松高能粒子位置探测用单面硅条探测器",
    summary:
      "产品页没有写发布日期。手册目录号 KMPD1210E02，页脚写 Dec. 2023 DN，并写 Information described in this material is current as of December 2023，记为约 2023 年 12 月。索引 newState 是 false。二级标题写 Single-sided SSD for high energy particle position detection。",
    applications: [],
    technologies: [],
    models: [
      page("S13804", "2023-12", part("S13804"), [
        "产品页没有写发布日期。一级标题写 S13804。二级标题写 Single-sided SSD for high energy particle position detection。正文写 The Si strip detector (SSD) is a Si photodiode with PN junctions (particle detection structures) that are several micrometers to several tens of micrometers in width arranged in a strip formation。后面写 Developed specifically for the J-PARC muon g-2/EDM experiment，以及 precise incident positions of high-energy particles with remarkable accuracy。有效面积写成 about 97 × 97 mm。星号链接是 http://g-2.kek.jp/portal/index.html。特性三条前面都有连字符：High voltage tolerance、High radiation tolerance、Low dark current。元描述把 Developed specifically for the 换成 It is an SSD developed for，去掉 the，把 high-energy 写成 high energy，把 remarkable accuracy 写成 high accuracy。链接和 Features 连成 index.htmlFeatures。",
        "规格表 Type 写 Poly Si-bias AC-readout。Si thickness 写 320 ±15 μm，± 后面没有空格。Si crystal plane direction 写 <100>。Breakdown voltage min. 200 V。Dark current max. 3 μA。Full depletion voltage max. 100 V。Defective strip rate max. 5 %。页面没有芯片尺寸、条数、间距和 PolySi 电阻。外形标题写 Dimensional outline (unit: mm)，单位是 mm。图文件是 kspda0220ea.svg，资源名 KSPDA0220EA.svg。页面下载标 618 KB/PDF。相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF。技术笔记 Technical note / Si detectors for high energy particles 标 611 KB/PDF。",
        `${indexIntro}说明把产品页的 Si photodiode 写成 Si photodiode array，high energy 没有连字符。productName 写 Si strip detector。productExp 与二级标题相同。thumbAlt 写 Si strip detector S13804 product photo。typeNameSort 写成 S13804。类型的值写成 Poly Si-bias，显示写成 Poly Si-bias AC-readout。厚度的值写成 320 ±15，显示才补上 μm。晶向的值是 <100>，筛选框的属性被这个小于号截断。暗电流、击穿电压、全耗尽电压和缺陷条率的显示与规格表相同，数值不带单位，显示才补上。字段名写成 df061SiStripDetector1YieldVoltageMin、ad077SiStripDetector3TotalDepletionVoltage 和 ad078SiStripDetectorNgChannelRateMax，表头分别写成 Breakdown voltage min.、Full depletion voltage max. 和 Defective strip rate max.。手册标 618 KB。`,
        `手册 ${sheet}。目录号 KMPD1210E02，页脚写 Dec. 2023 DN，并写 current as of December 2023。类型写成 PolySi-bias AC-readout，Poly 和 Si 之间没有空格。厚度写成 320 ± 15 µm，± 两边都有空格。芯片尺寸 (98770 ± 20) × (98770 ± 20) µm。有效面积 97280 × 97280 µm。条布局 512 ch × 2 columns，条数 1024 ch，间距 190 µm，注入宽度 80 µm，读出铝宽度 90 µm，读出焊盘 165 × 100 × 2 µm。绝对最大反向电压 200 V。工作温度 -20 to +60 °C，贮存温度 -40 to +100 °C，条件都写 No dew condensation。击穿电压最小 200 V。暗电流最大 3 µA 的条件是 VR=200 V。全耗尽电压最大 100 V。缺陷条率最大 5 %。PolySi 电阻最小 5 MΩ、典型 10 MΩ、最大 15 MΩ。产品页规格表没有这一行。外形标题写 Dimensional outline (unit: µm)，单位是 µm，图号 KSPDA0220EA。详细芯片图号 KSPDA0219EA，产品页没有这张图。注记写 The pad arrangement allows the chip to be mounted in a 90° rotated state。第 2 页开头剩 ing。第 3 页页眉写成 ard packing specifications。包装写 Each chip is placed between two dustproof sheets (thick paper) and stored in a dedicated envelope (135 × 135 mm)，并写 Dedicated envelope and desiccant in moisture-proof packaging (vacuum-sealed)，图号 KSPDC0098EA。正文把 experiment 拆成 ex-periment。特性没有连字符。` +
          place,
      ]),
    ],
  },
];
