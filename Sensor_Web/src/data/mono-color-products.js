const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/color-sensor/monochromatic-color-detector/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/color-sensor/monochromatic-color-detector.html";

const parent = "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/color-sensor.html";

const sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s6428-01_etc_kspd1013e.pdf";

const indexIntro =
  "索引标题写 Monochromatic color detectors。说明写 Color sensors designed to detect monochromatic colors of blue (λp=460 nm), green (λp=540 nm), or red (λp=660 nm)。";

const sheetDate =
  `手册 ${sheet}。目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，June 后面有逗号，记为约 2015 年 6 月。封面在 Si photodiodes 下面写 RGB color sensor。开头一句把 S6428-01、S6429-01 和 S6430-01 放在 respectively 前面。同一页还写 The S7505-01 uses a 3-channel (RGB) photodiode，S7505-01 不在这条索引上，这一页不另收。回流温度曲线那一节只写 The S7505-01 supports lead-free soldering。`;

export const monoColorProducts = [
  {
    id: "s6428",
    date: "2015-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S6428：滨松单色颜色探测器",
    summary:
      "产品页没有写发布日期。三只共用手册目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，记为约 2015 年 6 月。索引 newState 是 false。产品页二级标题写 RGB color sensor。索引 productExp 把 blue 写成 bule。",
    applications: [],
    technologies: [],
    models: [
      page("S6428-01", "2015-06", part("S6428-01"), [
        "产品页没有写发布日期。页眉写 Si photodiode。一级标题写 S6428-01。二级标题写 RGB color sensor。正文写 The S6428-01 is a color sensor designed to respectively detect monochromatic colors of blue (λp=460 nm)。respectively 用在一只型号上。特性写 Plastic package (6 × 8 mm)、Spectral response range: 400 to 540 nm (λp=460 nm)、Insensitive to near IR range、High sensitivity: 0.22 A/W Typ. (λ=λp)、Low dark current。",
        "规格表封装材料 Plastic，感光面积 2.8 × 2.4 mm，光谱响应范围 400 to 540 nm，暗电流（最大）0.02 nA，终端电容 200 pF，上升时间 0.5 μs，备注 For blue。测量条件一行写成 PIO Measurement Conditions(Product unit)，括号前没有空格，内容是 Typ. Ta=25 deg.C, unless otherwise noted，用 deg.C，不是 °C。规格表没有光灵敏度。页面下载标 227 KB/PDF。光谱响应图文件名是 KSPDB0141EC,0.svg。外形图标题写 Dimensional outline (unit: mm)，文件名是 KSPDA0056EB.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}父页 ${parent} 没有产品表，说明写 Devices sensitive in the red, green, and blue spectral regions。productName 写 Si photodiode。productExp 写 Monochromatic color detector for bule，blue 写成 bule。备注显示 For blue。typeNameSort 写成 S06428-01。列设置里 Data sheet 的显示写成 DataSheet。手册标 227 KB。thumbAlt 是 S6428-01。`,
        `${sheetDate}三只的特性写 Insensitive to near IR range，光灵敏度这一只是 0.22 A/W Typ. (λ=λp)。结构表把三只放在同一行，感光面积尺寸写成 2.4 × 2.8 mm，有效感光面积 6.7 mm²。外形图把 Photosensitive area 印成 2.8 × 2.4，图号 KSPDA0056EA。绝对最大额定值反向电压 10 V，工作温度 -10 to +60 °C，贮存温度 -20 to +70 °C。电特性表暗电流典型 5 pA、最大 20 pA，条件 VR=1 V，数值落在三只共用的格子里。终端电容典型 200 pF、最大 400 pF，条件 VR=0 V，f=10 kHz。上升时间 0.5 μs，条件 VR=0 V，RL=1 kΩ，10 to 90%。暗电流温度系数 1.12 times/°C，和上升时间一样在表里只印一次。峰值波长 460 nm，光谱半宽 90 nm。光谱响应图号印成 KKSPDB0141EC。外形图公差写 Tolerance unless otherwise noted: ±0.15，引线表面写 Palladium，包装写 tray (100 pcs/tray)。应用写 White balance adjustment、Color identification、Projector and TV brightness level detection、Color control、Light source color temperature detection。这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。`,
      ]),
    ],
  },
  {
    id: "s6429",
    date: "2015-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S6429：滨松单色颜色探测器",
    summary:
      "产品页没有写发布日期。与 S6428-01、S6430-01 共用手册目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，记为约 2015 年 6 月。索引 newState 是 false。产品页二级标题写 RGB color sensor。光谱半宽是 70 nm，另外两只是 90 nm。",
    applications: [],
    technologies: [],
    models: [
      page("S6429-01", "2015-06", part("S6429-01"), [
        "产品页没有写发布日期。页眉写 Si photodiode。一级标题写 S6429-01。二级标题写 RGB color sensor。正文写 The S6429-01 is a color sensor designed to respectively detect monochromatic colors of green (λp=540 nm)。respectively 仍用在一只型号上。特性写 Plastic package (6 × 8 mm)、Spectral response range: 480 to 600 nm (λp=540 nm)、Insensitive to near IR range、High sensitivity: 0.27 A/W Typ. (λ=λp)、Low dark current。",
        "规格表封装材料 Plastic，感光面积 2.8 × 2.4 mm，光谱响应范围 480 to 600 nm，暗电流（最大）0.02 nA，终端电容 200 pF，上升时间 0.5 μs，备注 For green。测量条件仍写成 PIO Measurement Conditions(Product unit)，内容是 Typ. Ta=25 deg.C, unless otherwise noted。规格表没有光灵敏度。页面下载标 227 KB/PDF。光谱响应图和外形图与 S6428-01 同一套文件名，外形图标题仍是单数 outline。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode。productExp 写 Monochromatic color detector for green，green 没有拼错。备注显示 For green。typeNameSort 写成 S06429-01。手册标 227 KB。thumbAlt 是 S6429-01。`,
        `${sheetDate}这一只的光灵敏度是 0.27 A/W Typ. (λ=λp)，峰值波长 540 nm，光谱半宽 70 nm。结构表仍把三只合成一行，感光面积尺寸 2.4 × 2.8 mm，有效面积 6.7 mm²。外形图印 2.8 × 2.4，图号 KSPDA0056EA。暗电流典型 5 pA、最大 20 pA，终端电容典型 200 pF、最大 400 pF，与另外两只同一格。应用句子与 S6428-01 相同，对不上本站的应用标签。手册没有写 TOF。`,
      ]),
    ],
  },
  {
    id: "s6430",
    date: "2015-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S6430：滨松单色颜色探测器",
    summary:
      "产品页没有写发布日期。与 S6428-01、S6429-01 共用手册目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，记为约 2015 年 6 月。索引 newState 是 false。产品页二级标题写 RGB color sensor。光灵敏度是三只里最高的 0.45 A/W。",
    applications: [],
    technologies: [],
    models: [
      page("S6430-01", "2015-06", part("S6430-01"), [
        "产品页没有写发布日期。页眉写 Si photodiode。一级标题写 S6430-01。二级标题写 RGB color sensor。正文写 The S6430-01 is a color sensor designed to respectively detect monochromatic colors of red (λp=660 nm)。respectively 仍用在一只型号上。特性写 Plastic package (6 × 8 mm)、Spectral response range: 590 to 720 nm (λp=660 nm)、Insensitive to near IR range、High sensitivity: 0.45 A/W Typ. (λ=λp)、Low dark current。",
        "规格表封装材料 Plastic，感光面积 2.8 × 2.4 mm，光谱响应范围 590 to 720 nm，暗电流（最大）0.02 nA，终端电容 200 pF，上升时间 0.5 μs，备注 For red。测量条件仍写成 PIO Measurement Conditions(Product unit)，内容是 Typ. Ta=25 deg.C, unless otherwise noted。规格表没有光灵敏度。页面下载标 227 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode。productExp 写 Monochromatic color detector for red。备注显示 For red。typeNameSort 写成 S06430-01。手册标 227 KB。thumbAlt 是 S6430-01。`,
        `${sheetDate}这一只的光灵敏度是 0.45 A/W Typ. (λ=λp)，峰值波长 660 nm，光谱半宽 90 nm。结构表感光面积尺寸仍是 2.4 × 2.8 mm，外形图仍印 2.8 × 2.4。暗电流和终端电容与另外两只同一格。应用句子与 S6428-01 相同，对不上本站的应用标签。手册没有写 TOF。`,
      ]),
    ],
  },
];
