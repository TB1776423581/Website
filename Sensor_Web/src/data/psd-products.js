const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const one = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/one-dimensional-psd/${part}.html`;

const two = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/two-dimensional-psd/${part}.html`;

const pin = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/si-photodiode-for-lidar/${part}.html`;

const oneIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/one-dimensional-psd.html";

const twoIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/two-dimensional-psd.html";

const pinIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/si-photodiode-for-lidar.html";

const plasticSheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4583-04_etc_kpsd1009e.pdf";

const s3931Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s3931_etc_kpsd1002e.pdf";

const s7105Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s7105-16_kpsd1028e.pdf";

const s8543Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s8543_kpsd1021e.pdf";

const s14241Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14241_kpsd1029e.pdf";

const s15430Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15430_series_kpsd1030e.pdf";

const s15534Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15534_s15535_kpsd1031e.pdf";

const s2044Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2044_kpsd1015e.pdf";

const s5990Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s5990-01_etc_kpsd1010e.pdf";

const pinSheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13773_s15193_kpin1088e.pdf";

const plasticIntro =
  "meta description 写 Hamamatsu offers a variety of 1-D PSDs (position sensitive detectors)molded into plastic packages，detectors 和 molded 之间没有空格。特性里的 Excellent 印成 Ecellent。";

export const psdProducts = [
  {
    id: "s3274",
    date: "2020-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S3274：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1009E12，页脚写 Oct. 2020 DN，并写 current as of October 2020，记为约 2020 年 10 月。索引 newState 是 false。结构表把这只写成 DIP type, visible-cut。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S3274-05", "2020-10", one("S3274-05"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S3274-05。一级标题只写 S3274-05。${plasticIntro}同一段特性写 Thin, miniature plastic package、Ｖisible-cut package reducing background light noise，Visible 的首字母是全角Ｖ，并写 Surface mount package is available。`,
        "规格表感光面积 1 x 3.5 mm，封装 Plastic，没有封装类别这一行。峰值灵敏度波长典型 960 nm，光灵敏度典型 0.51 A/W。光谱响应范围 760 to 1100，没有写 nm。暗电流最大 1 nA，上升时间典型 15 μs，终端电容典型 15 pF，极间电阻典型 400 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 写 One-dimensional PSDs have a long, narrow photosensitive area and detect positions in a longitudinal direction。Suitable for use in displacement meters and other high precision distance measurement applications, such as optical switches。这一行 newState 是 false。productExp 写 1-D PSD with plastic package。封装类别印成 --。光谱范围同样没有 nm。typeNameSort 写成 S03274-05。手册标 430 KB。`,
        `手册 ${plasticSheet}。目录号 KPSD1009E12，页脚写 Oct. 2020 DN，并写 current as of October 2020，记为约 2020 年 10 月。封面写 1-D PSD with small plastic package。应用写 Auto focus camera、Range finders、Optical proximity switches、Displacement meters。特性写 High interelectrode resistance: S3274-05, S7105-05。结构表这一行是 DIP type, visible-cut，感光面积 1 × 3.5 mm，电阻长度 3.5 mm，反向电压最大 20 V，工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C。电特性这一行印出电阻 320、400、480 kΩ，行末是 15、一条横线和 15，没有印峰值波长。`,
      ]),
    ],
  },
  {
    id: "s3931",
    date: "2024-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S3931：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。手册正文写 current as of January 2024，记为约 2024 年 1 月。目录号 KPSD1002E12 的页脚写 Jan. 2025 DN。索引 newState 是 false。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("S3931", "2024-01", one("S3931"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S3931。一级标题只写 S3931。meta description 写 S3931 has an active area of 1 × 6 mm respectively，respectively 仍留在单只型号的句子里，并写 compact ceramic package with a transparent resin window。特性写 Superior position detection ability、High reliability、Easy to use 4-pin small ceramic package。",
        "规格表感光面积 1 x 6 mm，封装 Ceramic，没有封装类别这一行。峰值灵敏度波长典型 920 nm，光灵敏度典型 0.55 A/W。光谱响应范围 320 to 1100，没有写 nm。暗电流最大 10 nA，上升时间典型 1.5 μs，终端电容典型 40 pF，极间电阻典型 50 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 6 mm resistance length PSD for precision distance measurement, displacement sensing。封装 Ceramic，封装类别 --。光谱范围没有 nm。typeNameSort 写成 S03931。缩略图 alt 写 s3931。手册标 673 KB。`,
        `手册 ${s3931Sheet}。目录号 KPSD1002E12，页脚写 Jan. 2025 DN。正文写 current as of January 2024，记为约 2024 年 1 月。引言写 photosensitive area of 1 × 6 mm and 1 × 12 mm respectively，并写 Variant types (S3931-01, S3932-01) with a visible-cut resin window are also available。这两只不在索引上。窗口注 *1 写 R: resin coating。结构表封装 Ceramic，感光面积 1×6 mm，反向电压最大 20 V。电特性表位置检测误差典型 ±30 μm、最大 ±120 μm，极间电阻最小 30 kΩ、典型 50 kΩ、最大 80 kΩ，暗电流典型 0.15 nA、最大 10 nA。应用写 Displacement sensing、Distance measurement、Proximity switching。`,
      ]),
    ],
  },
  {
    id: "s3932",
    date: "2024-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S3932：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。与 S3931 共用一本手册。正文写 current as of January 2024，记为约 2024 年 1 月。目录号页脚写 Jan. 2025 DN。索引 newState 是 false。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("S3932", "2024-01", one("S3932"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S3932。一级标题只写 S3932。meta description 写 S3932 has an active area of 1 × 12 mm respectively。特性与 S3931 的产品页相同。",
        "规格表感光面积 1 x 12 mm，封装 Ceramic。峰值灵敏度波长典型 920 nm，光灵敏度典型 0.55 A/W。光谱响应范围 320 to 1100，没有写 nm。暗电流最大 20 nA，上升时间典型 3 μs，终端电容典型 80 pF，极间电阻典型 50 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 12 mm resistance length PSD for precision distance measurement, displacement sensing。封装类别 --。typeNameSort 写成 S03932。缩略图 alt 写 s3932。手册仍标 673 KB。`,
        `手册仍是 ${s3931Sheet}，正文日期记为约 2024 年 1 月，目录号页脚写 Jan. 2025 DN。结构表感光面积 1 × 12 mm。电特性表位置检测误差典型 ±60 μm、最大 ±240 μm，暗电流典型 0.2 nA、最大 20 nA，上升时间典型 3.0 μs，终端电容典型 80 pF，位置分辨率 0.3 μm。S3932-01 写在可见光截止窗口的可提供型号里，不在索引上。`,
      ]),
    ],
  },
  {
    id: "s4583",
    date: "2020-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4583：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1009E12，页脚写 Oct. 2020 DN，并写 current as of October 2020，记为约 2020 年 10 月。索引 newState 是 false。结构表写 Surface mount type, visible-cut。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S4583-04", "2020-10", one("S4583-04"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S4583-04。一级标题只写 S4583-04。${plasticIntro}特性写 Visible-cut package reducing background light noise，以及 Surface mount package is available。`,
        "规格表感光面积 1 x 3 mm，封装 Plastic，封装类别 Surface mount type。峰值灵敏度波长典型 960 nm，光灵敏度典型 0.51 A/W。光谱响应范围 760 to 1100，没有写 nm。暗电流最大 1 nA，上升时间典型 10 μs，终端电容典型 15 pF，极间电阻典型 140 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 1-D PSD with plastic package。封装类别 Surface mount type。typeNameSort 写成 S04583-04。缩略图 alt 写 s4581-04。手册标 430 KB。`,
        `手册 ${plasticSheet}，记为约 2020 年 10 月。结构表写 Surface mount type, visible-cut，感光面积 1×3 mm，电阻长度 3 mm。电特性这一行印全：光谱范围 760 to 1100 nm，峰值 960 nm，λ=890 nm 光灵敏度 0.51 A/W，λ=650 nm 一格是横线。极间电阻 100、140、180 kΩ。位置检测误差典型 ±10 μm、最大 ±30 μm。饱和光电流 30 μA。暗电流典型 0.05 nA、最大 1 nA。λ=890 nm 上升时间 10 μs，λ=650 nm 是横线。终端电容 15 pF。应用写 Auto focus camera、Range finders、Optical proximity switches、Displacement meters。`,
      ]),
    ],
  },
  {
    id: "s4584",
    date: "2020-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4584：滨松一维 PSD",
    summary:
      "两只产品页都没有写发布日期。共用手册目录号 KPSD1009E12，页脚写 Oct. 2020 DN，并写 current as of October 2020，记为约 2020 年 10 月。索引 newState 都是 false。S4584-04 是 visible-cut，S4584-06 是 clear。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S4584-04", "2020-10", one("S4584-04"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S4584-04。${plasticIntro}`,
        "规格表感光面积 1 x 3.5 mm，封装 Plastic，封装类别 Surface mount type。峰值灵敏度波长典型 960 nm，光灵敏度典型 0.51 A/W。光谱响应范围 760 to 1100，没有写 nm。暗电流最大 1 nA，上升时间典型 10 μs，终端电容典型 15 pF，极间电阻典型 140 kΩ。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 1-D PSD with plastic package。typeNameSort 写成 S04584-04。缩略图 alt 写 s4581-04。手册标 430 KB。`,
        `手册 ${plasticSheet}，记为约 2020 年 10 月。结构表写 Surface mount type, visible-cut，感光面积 1 × 3.5 mm，电阻长度 3.5 mm。电特性这一行只印出 760 to 1100、一条横线、0.51 和另一条横线，后面的格子是空的。`,
      ]),
      page("S4584-06", "2020-10", one("S4584-06"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S4584-06。${plasticIntro}`,
        "规格表感光面积 1 x 3.5 mm，封装 Plastic，封装类别 Surface mount type。峰值灵敏度波长典型 960 nm，光灵敏度典型 0.55 A/W。光谱响应范围 320 to 1100，没有写 nm。暗电流最大 1 nA，上升时间典型 3 μs，终端电容典型 15 pF，极间电阻典型 140 kΩ。",
        "索引 newState 是 false。productExp 同样写 1-D PSD with plastic package。光谱范围 320 to 1100，没有 nm。typeNameSort 写成 S04584-06。手册仍标 430 KB。",
        `手册仍是 ${plasticSheet}。结构表写 Surface mount type, clear，感光面积 1 × 3.5 mm，电阻长度 3.5 mm。电特性这一行印出 λ=650 nm 光灵敏度 0.38 A/W、λ=890 nm 0.55 A/W，位置检测误差 ±15 μm 和 ±35 μm，暗电流典型 0.05 nA、最大 1 nA，温度系数 1.15，行末是 3 和 15。产品页上升时间是 3 μs，终端电容是 15 pF。`,
      ]),
    ],
  },
  {
    id: "s7105",
    date: "2020-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S7105：滨松一维 PSD",
    summary:
      "四只产品页都没有写发布日期。S7105-04、S7105-05 和 S7105-06 共用 KPSD1009E12，页脚写 Oct. 2020 DN，并写 current as of October 2020，记为约 2020 年 10 月。S7105-16 的手册是 KPSD1028E02，页脚写 Sep. 2017 DN，并写 current as of September 2017，记为约 2017 年 9 月。索引 newState 都是 false。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S7105-04", "2020-10", one("S7105-04"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S7105-04。${plasticIntro}`,
        "规格表感光面积 1 x 4.2 mm，封装 Plastic，封装类别 Surface mount type。峰值灵敏度波长典型 960 nm，光灵敏度典型 0.51 A/W。光谱响应范围 760 to 1100，没有写 nm。暗电流最大 2 nA，上升时间典型 5 μs，终端电容典型 40 pF，极间电阻典型 140 kΩ。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 Plastic package PSD for surface mount。typeNameSort 写成 S07105-04。手册标 430 KB。`,
        `手册 ${plasticSheet}，记为约 2020 年 10 月。结构表写 Surface mount type, visible-cut，感光面积 1 × 4.2 mm，电阻长度 4.2 mm。电特性这一行只印出 760 to 1100、一条横线、0.51 和另一条横线。`,
      ]),
      page("S7105-05", "2020-10", one("S7105-05"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S7105-05。${plasticIntro}`,
        "规格表感光面积 1 x 4.2 mm，封装 Plastic，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.51 A/W，光谱范围 760 to 1100，没有 nm。暗电流最大 2 nA，上升时间典型 10 μs，终端电容典型 40 pF，极间电阻典型 400 kΩ。",
        "索引 newState 是 false。productExp 写 Plastic package PSD for surface mount。typeNameSort 写成 S07105-05。手册标 430 KB。",
        `手册 ${plasticSheet}。特性写 High interelectrode resistance: S3274-05, S7105-05。结构表写 Surface mount type, visible-cut。电特性这一行印出电阻 320、400、480 kΩ，行末是 15、一条横线和 10。产品页上升时间是 10 μs，终端电容是 40 pF。`,
      ]),
      page("S7105-06", "2020-10", one("S7105-06"), [
        `产品页没有写发布日期。页面标题写 One-dimensional PSD S7105-06。${plasticIntro}`,
        "规格表感光面积 1 x 4.2 mm，封装 Plastic，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.55 A/W，光谱范围 320 to 1100，没有 nm。暗电流最大 2 nA，上升时间典型 5 μs，终端电容典型 40 pF，极间电阻典型 140 kΩ。",
        "索引 newState 是 false。productExp 写 Plastic package PSD for surface mount。typeNameSort 写成 S07105-06。手册标 430 KB。",
        `手册 ${plasticSheet}。结构表写 Surface mount type, clear。电特性这一行印出 λ=650 nm 光灵敏度 0.38 A/W、λ=890 nm 0.55 A/W，位置检测误差 ±15 μm 和 ±40 μm，暗电流典型 0.1 nA、最大 2 nA，温度系数 1.15，行末是 2 和 40。产品页上升时间是 5 μs，终端电容是 40 pF。`,
      ]),
      page("S7105-16", "2017-09", one("S7105-16"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S7105-16。meta description 写 compatible to lead-free reflow soldering，特性里的对应一句写 Compatible lead reflow soldering，没有 with，也没有 free。特性还写 Photosensitive area: 1 × 4.2 mm (resistance length: 4.2 mm)，以及 Surface mount type, compact, thin leadless package。",
        "规格表感光面积 1 x 4.2 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.55 A/W，光谱范围 320 to 1100，没有 nm。暗电流最大 2 nA，上升时间典型 5 μs，终端电容典型 40 pF，极间电阻典型 140 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 Plastic package PSD for surface mount。封装印成 Glass epoxy，封装类别 Surface mount type。typeNameSort 写成 S07105-16。手册标 234 KB。`,
        `手册 ${s7105Sheet}。目录号 KPSD1028E02，页脚写 Sep. 2017 DN，并写 The content of this document is current as of September 2017，记为约 2017 年 9 月。特性同样写 Compatible lead reflow soldering。应用写 Distance measuring equipment、Proximity switches、Displacement meters。结构没有单独的封装行。反向电压最大 20 V。上升时间典型 5 μs、最大 15 μs，条件 λ=890 nm。位置分辨率一格最小和典型是横线，最大 0.1 μm。极间电阻最小 100 kΩ、典型 140 kΩ、最大 180 kΩ。`,
      ]),
    ],
  },
  {
    id: "s8543",
    date: "2017-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S8543：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1021E02，页脚写 Oct. 2017 DN，并写 current as of October 2017，记为约 2017 年 10 月。索引 newState 是 false。索引说明把 Excellent 印成 Excelent。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("S8543", "2017-10", one("S8543"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S8543。meta description 写 long, narrow active area，以及 surface mountable chip carrier package，并写 Hamamatsu also provides L5586 infrared LED compatible with S8543。特性写 active area: 0.7 × 24 mm、Chip carrier package for surface mount (t=1.36 mm)、Excellent position detection characteristic and resolution，characteristic 用了单数。",
        "规格表感光面积 0.7 x 24 mm，封装 Ceramic，没有封装类别这一行。峰值 960 nm，光灵敏度 0.58 A/W，光谱范围 320 to 1100，没有 nm。暗电流最大 15 nA，上升时间典型 20 μs，终端电容典型 65 pF，极间电阻典型 140 kΩ。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 Excelent position detection, chip carrier package. For position detection of optical head, distance measurement, displacement meter。封装 Ceramic，封装类别 --。typeNameSort 写成 S08543。手册标 554 KB。`,
        `手册 ${s8543Sheet}。目录号 KPSD1021E02，页脚写 Oct. 2017 DN，并写 current as of October 2017，记为约 2017 年 10 月。正文写 photosensitive area，外形图材料写 Ceramic，厚度 1.36 ± 0.15 mm。光灵敏度这一行的参数名写成 Photo sensitivity。反向电压最大 7 V。位置检测误差典型 ±50 μm、最大 ±250 μm。位置分辨率典型 0.6 μm。暗电流典型 1 nA、最大 15 nA。应用写 Position detection of optical pickup head、Distance measurement、Displacement measurement、Position detection, etc.。L5586 是红外 LED，不是这只 PSD。`,
      ]),
    ],
  },
  {
    id: "s14241",
    date: "2025-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S14241：滨松一维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1029E03，页脚写 January. 2025 DN，January 后面有一个句点，并写 current as of January 2025，记为约 2025 年 1 月。索引 newState 是 false。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("S14241", "2025-01", one("S14241"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S14241。一级标题只写 S14241。meta description 写 surface mount type PSD with a photosensitive area of 1 × 12 mm, and supports reflow mounting。特性写 Excellent position detectability、High reliability、Compatible with lead-free solder reflow。",
        "规格表感光面积 1 x 12 mm，封装 Plastic，封装类别 Surface mount type。峰值 940 nm，光灵敏度 0.57 A/W。光谱范围 380 to 1000，没有写 nm。暗电流最大 20 nA，上升时间典型 3 μs，终端电容典型 55 pF，极间电阻典型 50 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 Surface mount type PSD with 12 mm resistance length，句末有一个空格。光谱范围没有 nm。typeNameSort 写成 S14241。缩略图 alt 写 s14241。手册标 618 KB。`,
        `手册 ${s14241Sheet}。目录号 KPSD1029E03，页脚写 January. 2025 DN，并写 current as of January 2025，记为约 2025 年 1 月。结构表感光面积 1 × 12 mm，封装 Plastic，窗口 Silicone resin，电阻长度 12 mm。位置检测误差典型 ±60 μm、最大 ±240 μm。极间电阻最小 30 kΩ、典型 50 kΩ、最大 80 kΩ。暗电流典型 0.2 nA、最大 20 nA。位置分辨率典型 0.3 μm。注 *1 把 surrounding 印成 surounding，把 reliability 印成 reliablity。应用写 Distance measurement、Displacement meters、Proximity switches。`,
      ]),
    ],
  },
  {
    id: "s15430",
    date: "2021-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S15430：滨松一维 PSD",
    summary:
      "三只产品页都没有写发布日期。手册目录号 KPSD1030E01，页脚写 Dec. 2021 DN，并写 current as of December 2021，记为约 2021 年 12 月。索引 newState 都是 false。S15430-01CT 和 S15430-03CT 是可见光截止型。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S15430-01CT", "2021-12", one("S15430-01CT"), [
        "产品页没有写发布日期。页面标题写 One-dimensional PSD S15430-01CT。meta description 把 reflow 的 fl 印成连字 reﬂow，并写 Visible light cut type。特性写 Photosensitive area: 1× 6 mm，1× 和 6 之间有一个空格，以及 Applicable lead-free reflow soldering。",
        "规格表感光面积 1 x 6 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.5 A/W。光谱范围 780 to 1100，没有写 nm。暗电流最大 2 nA，上升时间典型 5 μs，终端电容典型 60 pF，极间电阻典型 50 kΩ。测量条件写 photosensitivity: λ=890 nm，rise time: VR=1 V, RL=1 kΩ, λ=890 nm。",
        `索引 ${oneIndex} 这一行 newState 是 false。productExp 写 PSD compatible to lead-free reﬂow soldering，reflow 同样是连字。光谱范围没有 nm。typeNameSort 写成 S15430-01CT。手册标 503 KB。`,
        `手册 ${s15430Sheet}。目录号 KPSD1030E01，页脚写 Dec. 2021 DN，并写 current as of December 2021，记为约 2021 年 12 月。特性写 Visible light cut type (S15430-01CT, S15430-03CT)。应用写 Distance measuring equipment、Camera auto-focus、Proximity switches、Displacement meters。结构表感光面积 1×6 mm，封装 Glass epoxy，密封材料 Silicone resin。反向电压最大 10 V。这一列 λ=650 nm 的上升时间是横线，λ=890 nm 是 5 μs。位置检测误差典型 ±20 μm、最大 ±60 μm。`,
      ]),
      page("S15430-02CT", "2021-12", one("S15430-02CT"), [
        "产品页没有写发布日期。meta description 同样使用 reﬂow 连字。特性列表没有写 Visible light cut type。",
        "规格表感光面积 1 x 6 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.55 A/W。光谱范围 320 to 1100，没有 nm。暗电流最大 2 nA，上升时间典型 5 μs，终端电容典型 60 pF，极间电阻典型 50 kΩ。测量条件同样写 λ=890 nm。",
        "索引 newState 是 false。光谱范围 320 to 1100，没有 nm。typeNameSort 写成 S15430-02CT。手册仍标 503 KB。",
        `手册仍是 ${s15430Sheet}，记为约 2021 年 12 月。这一列光谱范围 320 to 1100 nm，光灵敏度 0.55 A/W，条件 λ=890 nm。上升时间在 λ=650 nm 是 2 μs，在 λ=890 nm 是 5 μs。产品页只列出 5 μs，测量条件写的是 λ=890 nm。`,
      ]),
      page("S15430-03CT", "2021-12", one("S15430-03CT"), [
        "产品页没有写发布日期。meta description 写 Visible light cut type，以及 High interelectrode resistance: 300 kΩ。reflow 仍是连字。",
        "规格表感光面积 1 x 6 mm，封装 Glass epoxy。峰值 960 nm，光灵敏度 0.5 A/W。光谱范围 780 to 1100，没有 nm。暗电流最大 2 nA，上升时间典型 15 μs，终端电容典型 60 pF，极间电阻典型 300 kΩ。测量条件写 λ=890 nm。",
        "索引 newState 是 false。极间电阻 300 kΩ，上升时间 15 μs。typeNameSort 写成 S15430-03CT。手册仍标 503 KB。",
        `手册仍是 ${s15430Sheet}。这一列极间电阻最小 240 kΩ、典型 300 kΩ、最大 360 kΩ。λ=650 nm 的上升时间是横线，λ=890 nm 是 15 μs。饱和电流最小 20 μA，典型和最大是横线。`,
      ]),
    ],
  },
  {
    id: "s15535",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S15535：滨松二维 PSD",
    summary:
      "产品页没有 meta description，也没有写发布日期。手册目录号 KPSD1031E04，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 是 true。手册的结构表和电特性表只在 S15535 这一列标 NEW。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S15535", "2026-04", two("S15535"), [
        "产品页没有 meta description，也没有写发布日期。页面标题写 Two-dimensional PSD S15535。二级标题写 Surface mount type, high-accuracy position sensitive detector。正文写 It is smaller than the conventional S5991-01。特性写 Surface mount type、Excellent position detectability、Small package: 12.8 × 11.6 × 1.5t mm，t 是上标，以及 Compatible with lead-free solder reflow。",
        "规格表感光面积 9 x 9 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 980 nm，光灵敏度 0.6 A/W。光谱范围 380 to 1100，没有写 nm。暗电流最大 50 nA，上升时间典型 2 μs，终端电容典型 350 pF，极间电阻典型 7 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${twoIndex} 写 This PSD performs 2-dimensional position detection. It has excellent position detection characteristics with fast response and low dark current。这一行 newState 是 true。productExp 与二级标题相同。typeNameSort 写成 S15535。手册标 488 KB。`,
        `手册 ${s15534Sheet}。目录号 KPSD1031E04，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。封面在两个型号上方单独印 NEW，结构表和电特性表只把 NEW 放在 S15535 列。结构表感光面积 9×9 mm，封装 Glass epoxy，窗口 Silicone resin。外形图感光区标 9×9，外形尺寸标 12.8 和 11.6。位置检测误差典型 ±150 μm、最大 ±250 μm。暗电流典型 1 nA、最大 50 nA。位置分辨率典型 1.5 μm。应用写 Light spot detection、Pointing device、Various types of position detection。正文写 They are smaller than the conventional S5990-01。`,
      ]),
    ],
  },
  {
    id: "s15534",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S15534：滨松二维 PSD",
    summary:
      "产品页没有写发布日期。与 S15535 共用 KPSD1031E04，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 是 false。产品页特性写 COB type。手册特性写 Surface mount type。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S15534", "2026-04", two("S15534"), [
        "产品页没有写发布日期。页面标题写 Two-dimensional PSD S15534。二级标题写 Surface mount type, high-accuracy position sensitive detector。正文在 smaller than 之前换行，并写 smaller than the conventional S5990-01。特性写 COB type、Excellent position detectability、Small package: 7.21 × 5.96 × 1.5t mm，t 是上标。",
        "规格表感光面积 4 x 4 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 980 nm，光灵敏度 0.6 A/W。光谱范围 380 to 1100，没有 nm。暗电流最大 10 nA，上升时间典型 1 μs，终端电容典型 70 pF，极间电阻典型 7 kΩ。",
        `索引 ${twoIndex} 这一行 newState 是 false。productExp 与二级标题相同。typeNameSort 写成 S15534。手册标 488 KB。`,
        `手册 ${s15534Sheet}，记为约 2026 年 4 月。特性写 Surface mount type，没有写 COB type。结构表感光面积 4×4 mm。外形图在 Photosensitive area 旁印 5×5，并标 7.21 和 5.96。位置检测误差典型 ±70 μm、最大 ±150 μm。暗电流典型 0.5 nA、最大 10 nA。位置分辨率典型 0.7 μm。注 *3 写 light spot: ϕ0.2 mm，并在同一处带 *4。`,
      ]),
    ],
  },
  {
    id: "s2044",
    date: "2025-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S2044：滨松二维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1015E12，页脚写 Jan. 2025 DN，并写 current as of January 2025，记为约 2025 年 1 月。索引 newState 是 false。索引说明写 Pin-Cushion。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S2044", "2025-01", two("S2044"), [
        "产品页没有写发布日期。页面标题写 Two-dimensional PSD S2044。meta description 写 PSD (Position Sensitive Detector) is an optoelectronic position sensor utilizing photodiode surface resistance。Unlike discrete element detectors such as CCD, PSD provides continuous position data。特性写 High position resolution、Wide spectral response range、High-speed response、Simultaneous measurements of position and intensity、Position is measured independent of light-spot size、High reliability。",
        "规格表感光面积 4.7 x 4.7 mm，封装 Metal，没有封装类别这一行。峰值 920 nm，光灵敏度 0.6 A/W。光谱范围 340 to 1060，没有 nm。暗电流最大 5 nA，上升时间典型 0.3 μs，终端电容典型 45 pF，极间电阻典型 10 kΩ。测量条件 Typ. Ta=25 ℃，unless otherwise noted。",
        `索引 ${twoIndex} 这一行 newState 是 false。productExp 写 Pin-Cushion, high position resolution. For optical position and angle sensing, remote optical control, range finder, displacement and vibration monitor, laser beam alignment。封装类别 --。typeNameSort 写成 S02044。缩略图 alt 写 s2044。手册标 736 KB。`,
        `手册 ${s2044Sheet}。目录号 KPSD1015E12，页脚写 Jan. 2025 DN，并写 current as of January 2025，记为约 2025 年 1 月。结构表感光面积 4.7 × 4.7 mm，封装 Metal，窗口 Borosilicate glass，电阻长度 5.7 mm。位置检测误差 Zone A 典型 ±40 μm、最大 ±100 μm，Zone B 典型 ±70 μm、最大 ±150 μm。注 *3 写 Zone A=ϕ1.8 mm，Zone B=4 × 4 mm。直流和交流电路示例的标题写 pin-cushion type。一张图的标题写成 Pin-cushion type(Y2)，括号前没有空格。应用写 Optical position and angle sensing、Remote optical control systems、Automatic range finder systems、Displacement and vibration monitors、Laser beam alignment、Medical equipment。`,
      ]),
    ],
  },
  {
    id: "s5990",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S5990：滨松二维 PSD",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1010E14，页脚写 Mar. 2026 DN，并写 current as of March 2026，记为约 2026 年 3 月。索引 newState 是 false。手册把卷带包装写成 S5990-11，索引没有这一行。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S5990-01", "2026-03", two("S5990-01"), [
        "产品页没有写发布日期。页面标题写 Two-dimensional PSD S5990-01。meta description 以 Features 开头，写 Large active area: 4 × 4 mm、Chip carrier package for surface mounting thin package: 1.26 mmt、Improved tetra-lateral type (pin-cushion type)。评估板写成 C4674-01(DC signal processing circuit)，括号前没有空格。包装写 Tray: S5990-01 和 Reel: S5990-11。",
        "规格表感光面积 4 x 4 mm，封装 Ceramic，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.6 A/W。光谱范围 320 to 1100，没有 nm。暗电流最大 10 nA，上升时间典型 1 μs，终端电容典型 70 pF，极间电阻典型 7 kΩ。",
        `索引 ${twoIndex} 这一行 newState 是 false。productExp 写 Pin-Cushion, chip carrier package. For spot light detection, pointing device, position measurement。typeNameSort 写成 S05990-01。手册标 740 KB。`,
        `手册 ${s5990Sheet}。目录号 KPSD1010E14，页脚写 Mar. 2026 DN，并写 current as of March 2026，记为约 2026 年 3 月。结构表把 S5990-01 和 S5990-11 放在同一列，感光面积 4×4 mm，封装 Ceramic，窗口 Silicone resin。包装写 Tray: S5990-01, S5991-01 和 Reel: S5990-11, S5991-11。S5990-11 不在索引上。选项写 Signal processing circuit for 2-D PSD C4674-01。外形厚度 1.26 ± 0.15 mm。位置检测误差典型 ±70 μm、最大 ±150 μm。暗电流典型 0.5 nA、最大 10 nA。应用写 Light spot detection、Pointing device、Various types of position detection。`,
      ]),
    ],
  },
  {
    id: "s5991",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S5991：滨松二维 PSD",
    summary:
      "产品页没有写发布日期。与 S5990-01 共用 KPSD1010E14，页脚写 Mar. 2026 DN，并写 current as of March 2026，记为约 2026 年 3 月。索引 newState 是 false。卷带包装 S5991-11 不在索引上。",
    applications: ["machine", "consumer"],
    technologies: [],
    models: [
      page("S5991-01", "2026-03", two("S5991-01"), [
        "产品页没有写发布日期。meta description 写 Large active area: 9 × 9 mm、thin package: 1.26 mmt、Improved tetra-lateral type (pin-cushion type)。评估板一句写 Evaluation circuit boards provided，没有写出 C4674-01。包装写 Tray: S5991-01 和 Reel: S5991-11。",
        "规格表感光面积 9 x 9 mm，封装 Ceramic，封装类别 Surface mount type。峰值 960 nm，光灵敏度 0.6 A/W。光谱范围 320 to 1100，没有 nm。暗电流最大 50 nA，上升时间典型 2 μs，终端电容典型 500 pF，极间电阻典型 7 kΩ。",
        `索引 ${twoIndex} 这一行 newState 是 false。productExp 写 Pin-Cushion, chip carrier package. For spot light detection, pointing device, position measurement。typeNameSort 写成 S05991-01。缩略图 alt 写 Two-dimensional PSD  S5991-01，PSD 和型号之间有两个空格。手册标 740 KB。`,
        `手册仍是 ${s5990Sheet}，记为约 2026 年 3 月。S5991-01 和 S5991-11 在同一列，感光面积 9×9 mm。位置检测误差典型 ±150 μm、最大 ±250 μm。暗电流典型 1 nA、最大 50 nA。终端电容典型 500 pF。位置分辨率典型 1.5 μm。S5991-11 不在索引上。C4674-01 在 PSD 电路索引上单独收录。`,
      ]),
    ],
  },
  {
    id: "s13773",
    date: "2019-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S13773：滨松 LiDAR 用 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KPIN1088E05，页脚写 Nov. 2019 DN，并写 current as of November 2019，记为约 2019 年 11 月。索引 newState 是 false。手册电特性表只在 S15193 列标 NEW。",
    applications: ["auto"],
    technologies: [],
    models: [
      page("S13773", "2019-11", pin("S13773"), [
        "产品页没有写发布日期。页面标题写 Si PIN photodiode S13773。二级标题写 Surface mount type, high-speed Si photodiode。meta description 同时写 The S13773 features high-speed response 和 the S15193 features improved near infrared sensitivity，并写 suitable for distance measurement laser monitoring。特性写 High-speed response: 500 MHz、Surface mount type、High reliability (wide temperature range)。",
        "规格表感光面积 φ0.8 mm，元件数 1，封装 Glass epoxy，冷却 Non-cooled，反向电压最大 20 V。光谱范围 380 to 1000 nm。峰值 800 nm，光灵敏度典型 0.54 A/W，暗电流最大 500 pA，截止频率典型 500 MHz，终端电容典型 3 pF。测量条件把终端电容写成 λ=830 nm VR=10 V, f=10 MHz，截止频率写成 VR=10 V, RL=50 Ω,-3 dB，逗号后没有空格。产品页没有列出上升时间，也没有列出噪声等效功率。",
        `索引 ${pinIndex} 的标题写 Si photodiodes for LiDAR。说明写 Standard products are automotive-grade, meeting the reliability requirements for high temperature environments。这一行 newState 是 false。productName 写 Si PIN photodiode。上升时间印成 --。封装类别 Surface mount type。手册标 1.1 MB。`,
        `手册 ${pinSheet}。目录号 KPIN1088E05，页脚写 Nov. 2019 DN，并写 current as of November 2019，记为约 2019 年 11 月。感光面积写成 ɸ0.8 mm，窗口 Silicone resin。结构表没有冷却行。绝对最大额定值的焊接条件写 JEDEC J-STD-033C MSL 2a，注 *2 写 JEDEC J-STD-020 MSL 2a。截止频率条件是 λ=830 nm, VR=10 V, RL=50 Ω, -3 dB，典型 500 MHz。终端电容条件是 VR=10 V, f=10 kHz，典型 3 pF、最大 4 pF。暗电流典型 10 pA、最大 500 pA。噪声等效功率典型 1.1 × 10-14 W/Hz1/2。工作温度和贮存温度都是 -40 to +100 °C。应用写 Distance measurement laser monitor 和 Light monitor (from visible to near infrared region)。`,
      ]),
    ],
  },
  {
    id: "s15193",
    date: "2019-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S15193：滨松 LiDAR 用 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S13773 共用 KPIN1088E05，页脚写 Nov. 2019 DN，并写 current as of November 2019，记为约 2019 年 11 月。索引 newState 是 false。手册电特性表在这一列标 NEW。",
    applications: ["auto"],
    technologies: [],
    models: [
      page("S15193", "2019-11", pin("S15193"), [
        "产品页没有写发布日期。二级标题同样写 Surface mount type, high-speed Si photodiode。meta description 仍先写 S13773 的高速响应，再写 S15193 的近红外灵敏度。特性写 High sensitivity in the near IR region: 0.64 A/W (λ=920 nm)。",
        "规格表感光面积 φ0.8 mm，元件数 1，封装 Glass epoxy，冷却 Non-cooled，反向电压最大 20 V。光谱范围 380 to 1000 nm。峰值 920 nm，光灵敏度典型 0.64 A/W，暗电流最大 500 pA，截止频率典型 100 MHz，终端电容典型 2 pF。噪声等效功率典型写成 9.2×10-15 W/Hz1/2。测量条件同样把终端电容的频率写成 f=10 MHz，并写 λ=830 nm。",
        `索引 ${pinIndex} 这一行 newState 是 false。productExp 写 Surface mount type, high-speed Si photodiode。上升时间是 --。截止频率典型 100 MHz。手册标 1.1 MB。`,
        `手册仍是 ${pinSheet}，记为约 2019 年 11 月。电特性表的列标题写成 NEW S15193。截止频率典型 100 MHz。终端电容条件 f=10 kHz，典型 2 pF、最大 3 pF。光灵敏度最小 0.6 A/W、典型 0.64 A/W。暗电流典型 10 pA、最大 500 pA。噪声等效功率典型 9.2 × 10-15 W/Hz1/2。引言写 improved near infrared sensitivity。`,
      ]),
    ],
  },
];
