const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const hesai = "https://www.hesaitech.com";
const ls =
  "https://lslidar.com/wp-content/uploads/2024/12/LSLiDAR-Product-Brochure%EF%BC%88EN-V2.2-24.10.23%E7%89%88%EF%BC%89.pdf";
const hokuyoList = "https://www.hokuyo-aut.jp/search/index.php?cate01=1";
const benewakeCenter = "https://ai.benewake.com/en/products/";

export const depthProducts = [
  {
    id: "hesai-at",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "AT：禾赛车载长距激光雷达",
    summary:
      "AT128 与 ATX 都是车规、水平视场 120° 的长距激光雷达。AT128 为 128 通道，10% 反射率下 210 m；ATX 最高支持 256 通道，10% 反射率下 230 m，体积比 AT128 小约 60%。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("AT128", "", `${hesai}/product/at128/`, [
        "10% 反射率下测距 210 m，单回波点频 1,536,000 点/秒。",
        "视场 120°×25.4°，角分辨率 0.1°（水平）×0.2°（垂直），像素分辨率 1200×128。",
        "功耗 13.5 W，尺寸 136×114×49 mm，重量 940 g。Class 1，ISO 26262 ASIL B。",
      ]),
      page("ATX", "", `${hesai}/product/atx/`, [
        "最高支持 256 通道。10% 反射率下 230 m，单回波点频最高 3,840,000 点/秒。",
        "视场 120°×20°，最细角分辨率 0.08°×0.05°。功耗 8 W。",
        "尺寸最小约 100×100×30 mm，最小窗口高度 25 mm，重量 360 g。",
        "页面写明相对 AT128 体积大约小 60%。Class 1，ISO 26262 ASIL B。",
      ]),
    ],
  },
  {
    id: "hesai-xt",
    date: "2020-10-15",
    companyId: "hesai",
    category: "product",
    title: "XT：禾赛中距 360° 激光雷达",
    summary:
      "XT32M、XT32 和 XT16 列在同一产品页，都是 360° 中距激光雷达，测距精度 0.5 cm（1σ），准确度 ±1 cm。32 线与 16 线版本在 2020 年 10 月 15 日以 PandarXT 公布。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("XT32M", "", `${hesai}/product/xt32/`, [
        "产品页标题为 XT32M/32/16。这一组规格为 0.5 到 300 m，单回波点频 640,000 点/秒。",
        "视场 360°×40.3°，角分辨率 0.18°×1.3°。尺寸 Φ93×75 mm，重量 490 g。",
      ]),
      page("XT32", "2020-10-15", `${hesai}/product/xt32/`, [
        "2020 年 10 月 15 日，禾赛以 PandarXT 公布 32 线及 16 线版本。",
        "0.05 到 120 m，单回波点频 640,000 点/秒，视场 360°×31°，角分辨率 0.18°×1°。",
        "尺寸 Φ76×103.2 mm，重量 800 g。最近距离可到外壳接触。",
      ]),
      page("XT16", "2020-10-15", `${hesai}/product/xt32/`, [
        "与 XT32 同一发布。0.05 到 120 m，单回波点频 320,000 点/秒。",
        "视场 360°×30°，角分辨率 0.18°×2°。尺寸 Φ76×103.2 mm，重量 800 g。",
      ]),
    ],
  },
  {
    id: "hesai-qt",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "QT：禾赛近距超广角激光雷达",
    summary:
      "QT128 与 PandarQT 都是 360° 近距激光雷达，10% 反射率下 20 m。QT128 为 128 线，垂直视场 105°。PandarQT 为 64 线，手册写垂直视场 104.2°。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("QT128", "", `${hesai}/product/qt128/`, [
        "10% 反射率下 20 m，单回波点频 1,152,000 点/秒。",
        "视场 360°×105°，角分辨率 0.4°×0.4°。尺寸 Φ87×83.9 mm，重量 700 g。",
        "Class 1，ISO 26262 ASIL B。",
      ]),
      page(
        "PandarQT",
        "",
        "https://www.hesaitech.com/wp-content/uploads/2025/04/PandarQT_User_Manual_Q01-en-241210.pdf",
        [
          "手册型号为 PandarQT，64 线，机械旋转。波长 885 nm，Class 1。",
          "10% 反射率下 20 m。仪器量程 0.1 到 60 m。典型测距准确度 ±3 cm，典型精度 2 cm。",
          "视场 360°×104.2°（-52.1° 到 +52.1°）。水平角分辨率 0.6°，垂直最细 1.45°。帧率 10 Hz。",
          "单回波 384,000 点/秒，双回波 768,000 点/秒。功耗 8 W。",
          "高度 76.0 mm，顶部/底部直径 76.3/80.2 mm，重量 0.47 kg。防护 IP6K7 与 IP6K9K。",
          "数据接口为 Ethernet 100BASE-T1。",
        ],
        "打开产品手册",
      ),
    ],
  },
  {
    id: "hesai-pandar",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "Pandar128：禾赛 360° 长距激光雷达",
    summary:
      "Pandar128 是 128 线、360° 长距激光雷达，10% 反射率下 200 m，单回波点频 3,456,000 点/秒。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Pandar128", "", `${hesai}/product/pandar128/`, [
        "10% 反射率下 200 m。单回波 3,456,000 点/秒，双回波 6,912,000 点/秒。",
        "视场 360°×40°，角分辨率 0.1°×0.125°。尺寸 Φ116×123.7 mm。",
      ]),
    ],
  },
  {
    id: "hesai-ot",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "OT128：禾赛 360° 长距激光雷达",
    summary:
      "OT128 是车规 360° 长距激光雷达，10% 反射率下 200 m、最远 230 m，视场 360°×40°。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("OT128", "", `${hesai}/product/ot128/`, [
        "10% 反射率下 200 m，最远 230 m。单回波 3,456,000 点/秒，双回波 6,912,000 点/秒。",
        "视场 360°×40°，角分辨率 0.1°×0.125°。功耗 29 W，尺寸 Φ118×132.3 mm。",
        "Class 1。开发流程对应 ISO 26262 与 ISO 21434。",
      ]),
    ],
  },
  {
    id: "hesai-ft",
    date: "2022-11-02",
    companyId: "hesai",
    category: "product",
    title: "FT：禾赛全固态近距激光雷达",
    summary:
      "FT120 与 FTX 都是全固态近距激光雷达。FT120 于 2022 年 11 月 2 日公布，视场 100°×75°。FTX 产品页给出两组视场，点频都是 492,000 点/秒。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page(
        "FT120",
        "2022-11-02",
        `${hesai}/hesai-releases-fully-solid-state-lidar-ft120/`,
        [
          "2022 年 11 月 2 日公布。全固态，内部无运动部件，用于近距盲区。",
          "视场 100°×75°，最远 100 m。单回波 192,000 点/秒，分辨率 160×120。",
          "发布稿写明计划 2023 年下半年量产交付。",
        ],
        "打开产品发布页",
      ),
      page("FTX", "", `${hesai}/product/ftx/`, [
        "全固态短距激光雷达。一组规格为 10% 反射率下 20 m，视场 140°×180°，216×192，约 180 g。",
        "另一组为 10% 反射率下 30 m，视场 105°×140°，256×192，约 160 g。",
        "两组单回波点频都是 492,000 点/秒，功耗小于 6 W，扫描频率 10 Hz。Class 1。",
      ]),
    ],
  },
  {
    id: "hesai-jt",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "JT：禾赛超半球激光雷达",
    summary:
      "JT128 与 JT64P 列在同一产品页，视场都是 189°×360°，尺寸 Φ62.5×73 mm，重量 265 g，面向机器人和工业设备。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("JT128", "", `${hesai}/product/jt128/`, [
        "128 通道。10% 反射率下 40 m，最远 60 m。单回波 1,152,000 点/秒。",
        "视场 189°×360°，角分辨率 0.4°×0.74°。尺寸 Φ62.5×73 mm，重量 265 g。",
      ]),
      page("JT64P", "", `${hesai}/product/jt128/`, [
        "64 通道，最远 60 m。视场 189°×360°。",
        "尺寸与重量同页写为 Φ62.5×73 mm、265 g。噪声小于 30 dB。",
      ]),
      page("JT32", "", `${hesai}/product/`, [
        "产品总览把 JT32/16 列在一起：最远 65 m，单回波点频 192,000 点/秒，视场 360°×42.6°。",
        "同一栏写出通道数 32。",
      ]),
      page("JT16", "", `${hesai}/product/`, [
        "与 JT32 出现在同一栏标题 JT32/16。总览给出的最远距离是 65 m，视场 360°×42.6°。",
      ]),
      page("MT", "", `${hesai}/product/`, [
        "产品总览的 MT 系列写出测距精度 3.5 mm，准确度 ±7 mm，单回波点频 284,500 点/秒。",
      ]),
    ],
  },
  {
    id: "hesai-etx",
    date: "",
    companyId: "hesai",
    category: "product",
    title: "ETX：禾赛超长距激光雷达",
    summary:
      "ETX 是面向 L3 的 120° 激光雷达。规格栏写 10% 反射率下 300 m；正文写最远 600 m、10% 反射率下 400 m，并支持 1080、2160 和 4320 通道配置。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("ETX", "", `${hesai}/product/etx/`, [
        "规格栏：10% 反射率下 300 m，视场 120°×20°，功耗小于 13 W，扫描频率 10 Hz。",
        "正文：最远 600 m，10% 反射率下 400 m。通道配置包括 1080、2160 和 4320。",
        "尺寸 131×100×40 mm，重量小于 700 g。Class 1。",
      ]),
      page("ETX 1080 通道", "", `${hesai}/product/etx/`, [
        "产品页写明 ETX 支持 1080 通道配置，其余测距和视场与同页 ETX 规格栏一致。",
      ]),
      page("ETX 2160 通道", "", `${hesai}/product/etx/`, [
        "产品页写明 ETX 支持 2160 通道配置。规格栏测距为 10% 反射率下 300 m，视场 120°×20°。",
      ]),
      page("ETX 4320 通道", "", `${hesai}/product/etx/`, [
        "产品页写明 ETX 支持 4320 通道配置。正文另写最远 600 m、10% 反射率下 400 m。",
      ]),
    ],
  },
  {
    id: "hesai-picasso",
    date: "2026-04-20",
    companyId: "hesai",
    category: "product",
    title: "Picasso：禾赛全彩激光雷达 SPAD-SoC",
    summary:
      "2026 年 4 月 20 日的发布稿介绍 Picasso。这是第五代 6D 全彩激光雷达 SPAD-SoC，在芯片上同时做 RGB 与飞行时间测距，点云自带颜色。光子探测效率超过 40%。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page(
        "Picasso",
        "2026-04-20",
        `${hesai}/hesai-unveils-picasso-6d-full-color-spad-soc-next-gen-etx-and-innovations-in-spatial-intelligence-and-physical-ai/`,
        [
          "页面日期为 2026 年 4 月 20 日。文中写 2026 年 4 月 17 日举办技术开放日。",
          "第五代 6D 全彩激光雷达 ASIC 平台。在芯片上集成 RGB 与飞行时间测距，直接生成带颜色的点云。",
          "光子探测效率超过 40%。发布稿写明用于更远的测距、较小物体和低照度，并写明功耗包络与原来相同。",
          "发布稿写明 ETX 基于 Picasso，通道包括 1080、2160，最高 4320，预计 2026 年下半年量产。",
        ],
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "robosense-m",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "M：速腾聚创长距激光雷达",
    summary:
      "M1 Plus 与 M3 都属于 M 平台。M1 Plus 波长 905 nm，10% 反射率下 180 m；M3 波长 940 nm，10% 反射率下 300 m。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("M1 Plus", "", "https://store.robosense.ai/products/m1-plus", [
        "波长 905 nm。量程 200 m，10% NIST 反射率下 180 m。盲区不大于 0.5 m。",
        "视场 120°×25°。单回波 787,500 点/秒，双回波 1,575,000 点/秒。帧率 10 Hz。",
        "尺寸 111×110×45 mm，重量 690 g±20 g，功耗 15 W。Class 1，IP67 与 IP6K9K。",
      ]),
      page("M1", "", "https://store.robosense.ai/products/m1-plus", [
        "M1 Plus 产品页写明 M 平台与 M2、M1 Plus、M1 共用，并取得 ISO 26262 ASIL B。",
        "扫描芯片通过 AEC-Q100。页面没有单独列出 M1 的测距数字。",
      ]),
      page("M2", "", "https://store.robosense.ai/products/m1-plus", [
        "与 M1 一样，只在 M1 Plus 产品页作为同一 M 平台的型号被点名。",
        "页面没有单独给出 M2 的视场或点频。",
      ]),
      page("M3", "", "https://www.robosense.ai/en/rslidar/M3", [
        "940 nm。10% 反射率下 300 m，等效约 500 线，ROI 角分辨率 0.05°×0.05°。",
        "视场 120°×25°。页面写明可探测约 250 m 处身高 70 cm 的儿童。",
        "Class 1 人眼安全认证由 Seibersdorf Laboratories 出具。",
      ]),
    ],
  },
  {
    id: "robosense-e1",
    date: "2026-07-28",
    companyId: "robosense",
    category: "product",
    title: "E：速腾聚创全固态激光雷达",
    summary:
      "E1 是车规补盲激光雷达，视场 120°×90°，10% 反射率下 30 m。E1R 面向机器人，同样是 120°×90°，最远 75 m，10% 反射率下 30 m。E2 是 2026 年 7 月 28 日发布的全固态数字激光雷达。发布稿写明水平视场最高 180°；产品页写明最大视场 180°×135°，10% 反射率下最远 35 m。",
    applications: ["depth", "auto", "machine"],
    technologies: ["tof"],
    models: [
      page("E1", "", "https://www.robosense.ai/en/rslidar/E1", [
        "水平视场 120°，垂直视场 90°。帧率 10 到 30 Hz。",
        "10% 反射率下测距 30 m。页面写明地面盲区不大于 15 cm。",
      ]),
      page("E1R", "", "https://www.robosense.ai/en/rslidar/E1R", [
        "全固态数字激光雷达，面向机器人。视场 120°×90°。",
        "最远 75 m，10% 反射率下 30 m。点频 260,000 点/秒，144 线。",
        "窗口尺寸 7×35×75 mm。采用 SPAD-SoC 与 2D VCSEL。",
      ]),
      page(
        "E2",
        "2026-07-28",
        "https://www.robosense.ai/en/news-show-1998",
        [
          "2026 年 7 月 28 日在世界人工智能大会发布。全固态数字激光雷达，数字直接飞行时间（dToF），采用自有 SPAD-SoC。",
          "发布稿写明水平视场最高 180°。半隐藏光学设计，只露出两个光学窗口。",
          "发布稿写明面向机器人割草机、人形机器人、四足机器人、无人机和空间智能数据采集设备。",
          "产品页写明最大视场 180°×135°，双回波最高点频 1,500,000 点/秒，最高精度 1 cm（1σ），10% 反射率下最远 35 m。",
          "产品页写明采用可量产的 Peacock SPAD-SoC 与 2D VCSEL，扫描方式为 2D 电子扫描。",
        ],
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "robosense-phoenix",
    date: "2026-04-21",
    companyId: "robosense",
    category: "product",
    title: "Phoenix：速腾聚创车规 SPAD-SoC",
    summary:
      "2026 年 4 月 21 日发布。Phoenix 是车规级单片 SPAD-SoC，可输出 2160 线。发布稿写明分辨率 2160×1900，探测距离 600 m，并有 AEC-Q100。2160 线方案的量产时间写为 2026 年。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page(
        "Phoenix",
        "2026-04-21",
        "https://www.robosense.ai/en/news-show-1978",
        [
          "2026 年 4 月 21 日在深圳技术日发布。车规级单片 SPAD-SoC，基于 EOCENE 架构。",
          "可独立输出 2160 线。发布稿写明分辨率 2160×1900，并输出 2K 超高清近红外图像。探测距离 600 m。AEC-Q100。",
          "发布稿写明 Phoenix 系列有五款，分别对应 2160、1440、720、480 和 240 线的激光雷达方案。稿中没有写出另外四款的独立型号。",
          "发布稿写明 2160 线方案已获得车企定点，量产时间为 2026 年。",
          "同稿把 EOCENE 写成第三代 SPAD，光子探测效率 45%，28 nm，并用晶圆级混合键合做第二代三维堆叠。工作温度写为 -40°C 到 125°C。",
        ],
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "robosense-peacock",
    date: "2026-04-21",
    companyId: "robosense",
    category: "product",
    title: "Peacock：速腾聚创全固态 SPAD-SoC",
    summary:
      "2026 年 4 月 21 日发布。Peacock 是全固态超大面阵 SPAD-SoC，分辨率 640×480。发布稿写明视场 180°×135°，最近探测距离 5 cm，量产时间为 2026 年第三季度。",
    applications: ["depth", "auto", "machine"],
    technologies: ["tof"],
    models: [
      page(
        "Peacock",
        "2026-04-21",
        "https://www.robosense.ai/en/news-show-1978",
        [
          "2026 年 4 月 21 日与 Phoenix 同日发布。全固态超大面阵 SPAD-SoC，基于 EOCENE。分辨率 640×480。",
          "视场 180°×135°。发布稿写明精度为毫米级，最近可探测 5 cm 的物体。",
          "发布稿写明用途包括车载补盲、低速自动驾驶、工业安全、机器人和超级传感器形态。",
          "量产时间为 2026 年第三季度。发布稿写明首批已经向客户交付。",
          "E2 产品页写明，E2 采用可量产的 Peacock SPAD-SoC，架构为数字直接飞行时间（dToF）。",
          "发布稿写明，把彩色滤光片阵列与 Peacock 的输出结合做成 RGBD，并写明这款 RGBD 传感器计划于 2027 年底正式发布。稿中没有写出该 RGBD 传感器的型号。",
        ],
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "robosense-helios",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "Helios：速腾聚创 16/32 线激光雷达",
    summary:
      "Helios 16、Helios 32（H32F70）和 Helios 32（H32F26）列在同一产品页。波长都是 905 nm，量程 150 m（10% NIST 下 110 m）。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Helios 16", "", "https://store.robosense.ai/products/helios-series", [
        "型号 H16，16 线。垂直视场 30°（-15° 到 +15°），垂直角分辨率 2°。",
        "水平 360°。量程 150 m，10% NIST 下 110 m，盲区不大于 0.2 m，典型精度 1 cm。",
        "帧率 5/10/20 Hz。尺寸 Φ100×100 mm，功耗 11 W。Class 1。",
      ]),
      page("Helios 32 H32F70", "", "https://store.robosense.ai/products/helios-series", [
        "型号 H32F70，32 线，垂直视场 70°（-55° 到 +15°），垂直角分辨率最高 1.33°。",
        "量程、盲区和精度与同页 Helios 16 相同。功耗 12 W。",
      ]),
      page("Helios 32 H32F26", "", "https://store.robosense.ai/products/helios-series", [
        "型号 H32F26，32 线，垂直视场 26°（-16° 到 +10°），垂直角分辨率最高 0.5°。",
        "水平 360°，量程 150 m（10% NIST 下 110 m）。",
      ]),
    ],
  },
  {
    id: "robosense-ruby-plus",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "Ruby Plus：速腾聚创 128 线激光雷达",
    summary:
      "Ruby Plus 是 128 线激光雷达，10% 反射率下 240 m，量程 250 m，水平 360°，垂直 40°。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Ruby Plus", "", "https://www.robosense.ai/en/IncrementalComponents/RubyPlus", [
        "128 线，905 nm。量程 250 m，10% NIST 下 240 m，盲区不大于 0.4 m。",
        "水平 360°，垂直 40°（-25° 到 +15°）。垂直角分辨率最高 0.1°。",
        "帧率 10/20 Hz。平衡模式功耗 27 W，高性能模式 30 W。尺寸 Φ125×128 mm，重量 1920 g±50 g。",
      ]),
    ],
  },
  {
    id: "robosense-airy",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "Airy：速腾聚创半球数字激光雷达",
    summary:
      "Airy 是 192 线半球数字激光雷达，水平 360°、垂直 90°，半径覆盖 60 m，点频 172 万点/秒。Airy Lite 的产品页写 24 线、视场 360°×45°、最远 60 m。Safety Airy 的产品页写准半球三维安全防护，未给出线数和测距数字。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Airy", "", "https://www.robosense.ai/en/IncrementalComponents/Airy", [
        "192 线。水平 360°，垂直 90°，覆盖半径 60 m。",
        "点频 172 万点/秒，测距精度 1 cm（1σ）。",
        "直径 60 mm，高度 63 mm，重量小于 240 g，功耗低于 8 W。",
      ]),
      page("Airy Lite", "", "https://www.robosense.ai/en/IncrementalComponents/AiryLite", [
        "产品页未写发布日期。24 线数字激光雷达，视场 360°×45°，最远 60 m，精度 1 cm（1σ）。",
        "精度的测量条件写为 0 到 30 m、全通道平均。近处盲区小于 0.1 m。单帧扫描面积最高 10,000 m²。垂直方向另写 -11.5°，水平安装时可探测地面障碍。",
        "窗口 φ44×H20 mm，重量 200 g。工作温度 -20°C 到 +60°C。集成 IMU。架构为 SPAD-SoC 与 VCSEL。",
        "产品页列出的用途包括割草机器人、工业机器人、商用清洁机器人和四足机器人。",
      ]),
      page("Safety Airy", "", "https://www.robosense.ai/en/IncrementalComponents/SafetyAiry", [
        "产品页未写发布日期，也未给出线数、视场角度或测距数字。页面写它是三维安全激光雷达，视场为准半球，可同时输出高线数三维点云。",
        "产品页写符合 PL d（ISO 13849）、SIL 2（IEC 61508）和 Type 3（IEC 61496）。采用互为独立的双通道、双处理器安全路径，并可报告脏污。",
        "产品页写可探测悬空货架、细杆、护栏和人手。列出的用途包括无人叉车、AGV/AMR、移动操作机、工业安全区和智慧港口。",
      ]),
    ],
  },
  {
    id: "ouster-os",
    date: "",
    companyId: "ouster",
    category: "product",
    title: "OS：Ouster 数字激光雷达",
    summary:
      "OS0、OS1、OS2 各有 32、64、128 线三个型号，机械尺寸在各自系列内相同。OS0 垂直视场 90°，OS1 为 45°，OS2 为 22.5°。另有 OSDome 和 OS1 Max。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("OS0-128", "", "https://ouster.com/products/hardware/os0-lidar-sensor", [
        "官方硬件说明写明 OS0 有 128、64、32 线三个型号。OS0 页：10% 目标 35 m，最远 250 m，最近 0 m。",
        "垂直视场 90°，点频 1040 万点/秒。",
      ]),
      page("OS0-64", "", "https://ouster.com/products/hardware/os0-lidar-sensor", [
        "OS0 的 64 线型号。手册写明与 OS0-128、OS0-32 垂直分辨率不同，机械尺寸相同。",
        "产品页给出的 OS0 范围是 10% 目标 35 m、最远 250 m，垂直视场 90°。",
      ]),
      page("OS0-32", "", "https://ouster.com/products/hardware/os0-lidar-sensor", [
        "OS0 的 32 线型号。手册写明可选择均匀、渐变、地平线以上或以下的光束分布。",
        "产品页给出的 OS0 范围是 10% 目标 35 m、最远 250 m，垂直视场 90°。",
      ]),
      page("OS1-128", "", "https://ouster.com/products/hardware/os1-lidar-sensor", [
        "官方硬件说明写明 OS1 有 128、64、32 线三个型号。OS1 页：10% 目标 90 m，最远 250 m。",
        "垂直视场 45°，点频 1040 万点/秒。",
      ]),
      page("OS1-64", "", "https://ouster.com/products/hardware/os1-lidar-sensor", [
        "OS1 的 64 线型号。手册写明与同系列其他线数机械尺寸相同，垂直分辨率不同。",
        "产品页给出的 OS1 范围是 10% 目标 90 m、最远 250 m，垂直视场 45°。",
      ]),
      page("OS1-32", "", "https://ouster.com/products/hardware/os1-lidar-sensor", [
        "OS1 的 32 线型号。手册写明可选均匀、渐变、地平线以上或以下的光束分布。",
        "产品页给出的 OS1 范围是 10% 目标 90 m、最远 250 m，垂直视场 45°。",
      ]),
      page("OS2-128", "", "https://ouster.com/products/hardware/os2-lidar-sensor", [
        "OS2 页写明提供 32、64、128 垂直通道。OS2-128 的 10% 目标距离为 200 m，最远 400 m。",
        "垂直视场 22.5°。",
      ]),
      page("OS2-64", "", "https://ouster.com/products/hardware/os2-lidar-sensor", [
        "OS2 的 64 线配置。产品页写明 32 与 64 线还可选择渐变、地平线以下或以上的光束分布。",
        "同页 OS2 的 10% 目标距离为 200 m，最远 400 m，垂直视场 22.5°。",
      ]),
      page("OS2-32", "", "https://ouster.com/products/hardware/os2-lidar-sensor", [
        "OS2 的 32 线配置。产品页写明线数越高，远距离探测越好。",
        "同页 OS2 的 10% 目标距离为 200 m，最远 400 m，垂直视场 22.5°。",
      ]),
      page("OSDome", "", "https://ouster.com/products", [
        "产品页写明半球激光雷达，视场 180°，用于安防、基础设施和自主系统。",
      ]),
      page("OS1 Max", "", "https://ouster.com/products/hardware/os1-lidar-sensor", [
        "产品页把它列为 REV8 长距型号，垂直视场 45°。",
        "同组说明写 REV8 把距离和分辨率提高一倍，并带原生彩色。",
      ]),
    ],
  },
  {
    id: "livox-mid",
    date: "",
    companyId: "livox",
    category: "product",
    title: "Mid：览沃近距激光雷达",
    summary:
      "Mid-360 与 Mid-70 都用于低速机器人。Mid-360 水平 360°、垂直 59°，10% 反射率下 40 m；Mid-70 圆形视场 70.4°，最近探测 5 cm。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Mid-360", "", "https://www.livoxtech.com/mid-360", [
        "视场 360°×59°。最近探测 0.1 m；0.1 到 0.2 m 的数据仅供参考。",
        "10% 反射率下 40 m；80% 反射率下最远 70 m。40 线。",
        "尺寸 65×65×60 mm，重量 265 g。",
      ]),
      page("Mid-70", "", "https://www.livoxtech.com/mid-70", [
        "圆形视场 70.4°。最近探测 5 cm；0.05 到 0.2 m 的数据精度不保证。",
        "测距精度 2 cm，角度精度小于 0.1°。905 nm，Class 1。",
        "工作温度 -20℃ 到 65℃。100 klx 下误报率仍小于万分之一。",
      ]),
    ],
  },
  {
    id: "livox-avia",
    date: "",
    companyId: "livox",
    category: "product",
    title: "Avia：览沃激光雷达",
    summary:
      "Avia 规格页写明：0 klx、80% 反射率下 450 m，10% 反射率下 190 m。非重复扫描视场 70.4°×77.2°。Avia 2 的中文发布稿写 7 月 30 日发布，1535 nm，Focus 模式最远截止 1000 米。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Avia", "", "https://www.livoxtech.com/avia/specs", [
        "0 klx：10% 反射率 190 m，20% 为 260 m，80% 为 450 m。100 klx：10% 仍是 190 m，80% 为 320 m。",
        "非重复扫描视场 70.4°×77.2°，重复线扫描视场 70.4°×4.5°。",
        "单回波 240,000 点/秒，双回波 480,000 点/秒，三回波 720,000 点/秒。20 m 处测距随机误差 1σ 小于 2 cm。",
        "重量约 498 g（不含线缆），IP67。内置 BMI088。",
      ]),
      page(
        "Avia 2",
        "2026-07-30",
        "https://www.livoxtech.com/cn/news/avia-2_launch",
        [
          "英文页面日期为 2026-07-30。中文发布稿写 7 月 30 日，览沃发布傲览 Avia 2。1535 nm。发布稿写该波长人眼安全裕度更高，脚注写它属于广义 1550 nm（1.5 μm）人眼安全波段，Class 1 与 1550 nm 对等。",
          "Normal 模式量程 400 米（5% 反射率），发布稿写等效接近 600 米（10% 反射率）。Focus 模式 800 米（10% 反射率）。最远截止 1000 米，发布稿写针对 20% 反射率目标物测得。",
          "规格表写 Normal ≥ 400 m（5%）、Focus ≥ 800 m（10%）。脚注写 10% 反射率下测距能力可达 600 米，为保持每秒 35 万点，把 Normal 模式截止量程锁定在 400 米，并写优化了飞行时间与测量速率的平衡。",
          "视场角 Normal 为 80°×80°，Focus 为 15°×15°。楔形棱镜非重复式扫描。光斑发散角 0.25 mrad × 0.25 mrad，100 米处光斑直径 2.5 cm。",
          "规格表写角度精度 ≤ 0.02°（1σ）。测距精度 5 m 到 400 m 为 ≤ 4 cm（1σ），400 m 到 700 m 为 ≤ 6 cm（1σ）。发布稿另写厘米级测距精度。",
          "发布稿写 MTTF 可达 62,500 小时，并写为实验室典型测算值。工作温度 -20℃ 到 65℃。内置雨雾滤噪。脚注写雨天滤噪适用于小雨至中雨。",
          "发布稿写用途包括输电线路、轨旁周界、煤场粮仓和矿石堆场量方，以及智慧航道。",
        ],
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "livox-tele-15",
    date: "",
    companyId: "livox",
    category: "product",
    title: "Tele-15：览沃远距车载激光雷达",
    summary:
      "Tele-15 在 50% 反射率下最远 500 m，10% 反射率下 320 m，视场 14.5°×16.2°，测距精度 2 cm。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Tele-15", "", "https://www.livoxtech.com/tele-15", [
        "最远 500 m；10% 反射率下可达 320 m；50% 反射率下可探测 500 m。",
        "视场 14.5°×16.2°。测距精度 2 cm，角度精度小于 0.03°。",
        "工作温度 -40℃ 到 85℃。MTTF 40,000 小时。内置 BMI088 IMU，200 Hz。",
      ]),
    ],
  },
  {
    id: "seyond-falcon",
    date: "",
    companyId: "seyond",
    category: "product",
    title: "Falcon K：图达通长距激光雷达",
    summary: "Falcon K 最远可探测 500 m，10% 反射率下的探测距离为 250 m。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Falcon K", "", "https://www.seyond.com/products", [
        "最远 500 m，10% 反射率下 250 m。",
      ]),
    ],
  },
  {
    id: "seyond-robin",
    date: "",
    companyId: "seyond",
    category: "product",
    title: "Robin：图达通宽视场激光雷达",
    summary:
      "Robin W 的视场是 120°×70°。Robin E1X 的视场是 120°×20°，最远 300 m。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Robin W", "", "https://www.seyond.com/products", [
        "超宽视场 120°×70°，侧面探测更宽，页面写明无盲区。",
      ]),
      page("Robin E1X", "", "https://www.seyond.com/products", [
        "视场 120°×20°，最远 300 m。",
      ]),
    ],
  },
  {
    id: "seyond-hummingbird",
    date: "",
    companyId: "seyond",
    category: "product",
    title: "Hummingbird：图达通全固态激光雷达",
    summary:
      "Hummingbird D1 与 Hummingbird D1-R 的视场都是 140°×100°，最远都是 50 m。D1 产品页写明是全固态闪光激光雷达。D1-R 手册写明面向机器人，盲区 0.1 m。",
    applications: ["depth", "auto", "machine"],
    technologies: ["tof"],
    models: [
      page("Hummingbird D1", "", "https://seyond.com/products/hummingbird-d1/", [
        "全固态闪光激光雷达。视场 140°×100°，最远 50 m。",
      ]),
      page(
        "Hummingbird D1-R",
        "",
        "https://www.seyond.com/wp-content/uploads/2026/01/HD1-R_Non-automotive_EN_250820.pdf",
        [
          "手册写明全固态电子扫描，面向机器人，并预留 IMU。",
          "最远 50 m，10% 反射率下 30 m。盲区一处写 0.1 m，另一处写小于 10 cm。",
          "视场 140°×100°，分辨率 0.55°×0.52°。距离精度 ±2 cm，距离精密度 2 cm（1σ）。帧率 10 FPS，手册注明可配置。",
          "940 nm，Class 1（IEC-60825）。功耗 6 W。工作电压 9 到 32 V DC。",
          "数据接口 100M Base-Tx，接头为 RJ45、Mini IO 或航空插头。输出 XYZ 坐标、反射率和时间戳。时间同步为 GNSS（PPS）。",
          "最小尺寸 37×92×45 mm（高×宽×深），重量 220 g。机身 IP67，窗口 IP69K。工作温度 -40℃ 到 60℃。",
        ],
        "打开产品手册",
      ),
    ],
  },
  {
    id: "velodyne-vlp",
    date: "",
    companyId: "velodyne",
    category: "product",
    title: "VLP-16：Velodyne Puck",
    summary:
      "VLP-16 规格书 63-9229 Rev-H 写明 16 线、量程 100 m、垂直视场 30°（+15° 到 -15°），单回波约 300,000 点/秒。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page(
        "VLP-16",
        "",
        "https://www.mapix.com/wp-content/uploads/2018/07/63-9229_Rev-H_Puck-_Datasheet_Web.pdf",
        [
          "16 线。量程 100 m。水平 360°，垂直 +15.0° 到 -15.0°（30°），垂直角分辨率 2.0°。",
          "典型精度最高 ±3 cm。转速 5 到 20 Hz。波长 903 nm，Class 1。",
          "单回波约 300,000 点/秒，双回波约 600,000 点/秒。",
          "不含线缆和接口盒时重量约 830 g。防护 IP67。工作温度 -10℃ 到 +60℃。典型功耗 8 W。",
        ],
        "打开产品手册",
      ),
    ],
  },
  {
    id: "velodyne-vls",
    date: "",
    companyId: "velodyne",
    category: "product",
    title: "VLS-128：Velodyne 长距激光雷达",
    summary:
      "VLS-128 是 128 线长距激光雷达，10% 目标超过 300 m，5% 目标超过 180 m，水平 360°、垂直 40°。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("VLS-128", "", "https://velodynelidar.com/products/alpha-prime/", [
        "128 线。10% 目标超过 300 m，5% 目标超过 180 m。",
        "水平 360°，垂直 40°。精度 ±3 cm。帧率可配 5、10、20 Hz。",
        "IP68 与 IP69K，工作温度 -40℃ 到 +65℃。",
      ]),
    ],
  },
  {
    id: "benewake-tfmini",
    date: "",
    companyId: "benewake",
    category: "product",
    title: "TFmini：北醒近距单点激光雷达",
    summary:
      "TFmini-S、TFmini Plus 和 TF-Luna 都是单点 ToF 测距模组，不输出深度图。前两款量程 0.1 到 12 m；TF-Luna 为 0.2 到 8 m。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("TFmini Plus", "", "https://ai.benewake.com/en/products/tfmini-plus/", [
        "量程 0.1 到 12 m。0.1 到 5 m 精度 ±5 cm，5 到 12 m 为 ±1%。",
        "帧率 1 到 1000 Hz。IP65。视场 3.6°。功耗 550 mW，重量 12±1 g。",
        "接口 UART、I/O、I²C。供电 5±0.5 V。",
      ]),
      page("TFmini-S", "", "https://ai.benewake.com/en/products/tfmini-s/", [
        "同页对照表：量程 0.1 到 12 m。0.1 到 6 m 精度 ±6 cm，6 到 12 m 为 ±1%。",
        "帧率 1 到 1000 Hz。IP65。视场 2°。功耗不大于 0.7 W，重量 5±0.3 g。",
        "尺寸 42×15×16 mm。供电 5±0.1 V。",
      ]),
      page("TF-Luna", "", "https://ai.benewake.com/en/products/tf-luna/", [
        "单点 ToF。量程 0.2 到 8 m。0.2 到 3 m 精度 ±6 cm，3 到 8 m 为 ±2%。",
        "帧率 1 到 250 Hz。视场 2°。功耗不大于 0.35 W，重量小于 5 g。",
        "无外壳，需外部防护。供电 3.7 到 5.2 V。规格书写中心波长 850 nm，Class 1。",
      ]),
    ],
  },
  {
    id: "benewake-tf03",
    date: "",
    companyId: "benewake",
    category: "product",
    title: "TF03：北醒长距单点激光雷达",
    summary:
      "TF03 产品页同时列出 TF03-100 与 TF03-180，都是单点测距。100 款在 90% 反射率下 100 m，180 款为 180 m。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("TF03-180", "", "https://ai.benewake.com/en/products/tf03/", [
        "90% 反射率下 180 m，10% 反射率下 70 m。盲区不大于 0.1 m。",
        "帧率 1 到 9800 Hz。IP67。视场 0.5°。功耗不大于 0.8 W，重量 86±3 g。",
        "10 m 以内精度 ±10 cm，10 m 以上 1%。接口 UART、CAN、RS-232、RS-485。",
      ]),
      page("TF03-100", "", "https://ai.benewake.com/en/products/tf03/", [
        "产品页写明 TF03-100 在 90% 反射率下 100 m，10% 反射率下 40 m。",
        "盲区不大于 0.1 m。与 TF03-180 同页，精度与接口栏按 TF03 系列列出。",
      ]),
    ],
  },
  {
    id: "benewake-tfa",
    date: "",
    companyId: "benewake",
    category: "product",
    title: "TFA：北醒长距单点激光雷达",
    summary:
      "TFA170-L、TFA300、TFA300-L、TFA1200-L 和 TFA1500-L 都是单点长距测距，不输出深度图。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("TFA170-L", "", "https://ai.benewake.com/en/products/tfa170-l/", [
        "单点测距。量程 0.1 到 170 m。10 m 以内精度 ±10 cm，10 m 以上 1%。",
        "帧率 1 到 1000 Hz。无外壳。重量约 10 g。视场小于 0.5°。RS-232，供电 12 V±10%。",
      ]),
      page("TFA300", "", "https://ai.benewake.com/en/resources/technical-documents/tfa300-datasheet/", [
        "规格书：100 klux、90% 反射率下 270 m，30% 下 150 m，10% 下 90 m。盲区不大于 0.1 m。",
        "帧率 1 到 10,000 Hz，默认 50 Hz。IP67。典型重量 34.5 g。视场小于 0.5°。UART 与 CAN，供电 5 V±10%。",
      ], "打开产品手册"),
      page("TFA300-L", "", "https://ai.benewake.com/en/resources/technical-documents/tfa300-datasheet/", [
        "与 TFA300 同规格书的无外壳版本。100 klux、90% 反射率下 290 m，10% 下 100 m。",
        "典型重量 10.5 g，尺寸 32.0×30.2×20.2 mm。防护等级写为 NA。",
      ], "打开产品手册"),
      page("TFA1200-L", "", "https://ai.benewake.com/en/products/tfa1200-l/", [
        "单点测距。量程 3 到 1200 m。200 m 以内精度 1%。帧率 3 Hz。",
        "UART。无外壳。重量 11 g。视场约 6 mrad。供电 2.7 到 5.0 V。",
      ]),
      page("TFA1500-L", "", "https://ai.benewake.com/en/resources/technical-documents/tfa1500-l-datasheet/", [
        "规格书：量程 0.5 到 1500 m。80 m 以内精度 ±0.5 m，80 m 以上 ±1.0 m。",
        "默认帧率自适应 60 到 800 Hz。UART，波特率 500000。重量 11±0.5 g。无外壳。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "benewake-horn",
    date: "",
    companyId: "benewake",
    category: "product",
    title: "Horn：北醒三维激光雷达",
    summary:
      "Horn-X2 Pro 与 Horn-RT 都写明 10% 反射率下 300 m，帧率 1 到 20 FPS，接口 1000Base-T，防护 IP67。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Horn-X2 Pro", "", "https://ai.benewake.com/en/products/horn-x2-pro/", [
        "10% 反射率下 300 m。精度 1σ = 2 cm。帧率 1 到 20 FPS。",
        "视场 90°×30°，输出三维点云。功耗不大于 35 W，重量不大于 3.8 kg。",
        "尺寸 192.6×157×126 mm。供电 9 到 36 V。IP67。页面状态为停产。",
      ]),
      page("Horn-RT", "", benewakeCenter, [
        "产品中心写明 10% 反射率下 300 m，帧率 1 到 20 FPS。",
        "接口 1000Base-T，防护 IP67。",
      ]),
    ],
  },
  {
    id: "benewake-short",
    date: "",
    companyId: "benewake",
    category: "product",
    title: "北醒近距与车载激光雷达",
    summary:
      "产品中心还列出 VLS-H5、TF-UW500、TF-NOVA、LR10、AD2-S-X3 和 NOVA20。这些条目没有写明输出深度图，按测距产品收录。",
    applications: ["machine"],
    technologies: ["tof"],
    models: [
      page("VLS-H5", "", benewakeCenter, [
        "产品中心：量程 5 m，帧率 6 Hz，接口 UART，防护 IPX8。",
      ]),
      page("TF-UW500", "", benewakeCenter, [
        "产品中心：0.1 到 5 m，接口 UART 与 I²C，无外壳。",
      ]),
      page("TF-NOVA", "", benewakeCenter, [
        "产品中心：14 m，接口 UART、I/O、I²C，防护 IP65。",
      ]),
      page("LR10", "", benewakeCenter, [
        "产品中心按 LR10 系列列出：0.05 到 18 m，接口 Ethernet、GMSL、I/O，防护 IP67。",
      ]),
      page("AD2-S-X3", "", benewakeCenter, [
        "产品中心：10% 反射率下 300 m。接口 1000Base-T1 车载以太网。防护 IP67 与 IP6K9K。",
      ]),
      page("NOVA20", "", benewakeCenter, [
        "产品中心：10% 反射率、100 klux 下 1 m。",
      ]),
      page("TR", "", benewakeCenter, [
        "产品中心按 TR 系列列出：量程 40 m，帧率 10 到 30 Hz，防护 IP65。",
      ]),
      page("TFmini-i", "", benewakeCenter, [
        "产品中心标出接口 CAN、RS-485，防护 IP65。",
      ]),
      page("TF02-Pro", "", benewakeCenter, [
        "产品中心标出防护 IP65。",
      ]),
      page("TF02-i", "", benewakeCenter, [
        "产品中心标出接口 CAN、RS-485。",
      ]),
      page("TF02-Pro-W", "", benewakeCenter, [
        "产品中心标出接口 RS-485。",
      ]),
    ],
  },
  {
    id: "hokuyo-ust",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "UST：北阳小型扫描测距仪",
    summary:
      "北阳产品列表把 UST 写成小型二维扫描测距仪，多款重量 130 g，扫描角常见 270°，用于机器人和无人机。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("UST-30LX", "", hokuyoList, ["户外小型型号。列表写明重量仅 130 g，用于小型机器人或无人机。"]),
      page("UST-30LC", "", hokuyoList, ["与 UST-30LCN 同条列出，为区域配置与距离输出型扫描测距仪。"]),
      page("UST-30LCN", "", hokuyoList, ["与 UST-30LC 同条列出，为区域配置与距离输出型。"]),
      page("UST-15LX", "", hokuyoList, ["户外小型型号。列表写明重量 130 g。"]),
      page("UST-10LX", "", hokuyoList, ["与 UST-20LX 同条列出。列表写明重量 130 g。"]),
      page("UST-20LX", "", hokuyoList, ["与 UST-10LX 同条列出，为距离数据输出型。"]),
      page("UST-10LN", "", hokuyoList, ["列表写明 10 m 与 20 m 两档扫描距离，用于 AGV 障碍检测。"]),
      page("UST-20LN", "", hokuyoList, ["与 UST-10LN 同条列出，扫描距离覆盖 10 m 和 20 m。"]),
      page("UST-05LA", "", hokuyoList, ["与 UST-05LAP 同条列出，为区域配置与距离输出型。"]),
      page("UST-05LAP", "", hokuyoList, ["与 UST-05LA 同条列出。"]),
      page("UST-05LX", "", hokuyoList, ["UST-05 系列的距离输出型。"]),
      page("UST-05LN", "", hokuyoList, ["区域配置型。列表写明有 NPN 与 PNP。"]),
      page("UST-05LNP", "", hokuyoList, ["与 UST-05LN 同条列出的 PNP 型。"]),
      page("UST-10LXB-H02", "", hokuyoList, [
        "支持 PoE。探测距离 10 m，扫描角 270°，供电和数据可走同一根网线。",
      ]),
    ],
  },
  {
    id: "hokuyo-utm",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "UTM：北阳 30 m 扫描测距仪",
    summary: "UTM-30LN、UTM-30LX 和 UTM-30LX-EW 都是 30 m、270° 的二维扫描测距仪，可在 100,000 lx 下工作。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("UTM-30LN", "", hokuyoList, ["30 m、270°。100,000 lx，IP64。扫描时间 25 ms。"]),
      page("UTM-30LX", "", hokuyoList, ["30 m、270°。100,000 lx，IP64。扫描时间 25 ms，用于室外服务机器人。"]),
      page("UTM-30LX-EW", "", hokuyoList, ["Top-URG 的以太网版本。防护提高到 IP67，可在 100,000 lx 下室外使用。"]),
    ],
  },
  {
    id: "hokuyo-uxm",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "UXM：北阳多回波扫描测距仪",
    summary: "UXM 系列是二维多回波扫描测距仪。产品列表写明防护 IP67，面向雨、雪、雾等环境。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("UXM-30LX-EW", "", hokuyoList, ["可稳定探测黑色物体。多回波，IP67。"]),
      page("UXM-30LN-PW", "", hokuyoList, ["多回波，IP67，列表写明可用于雨、雪、雾。"]),
      page("UXM-30LXH-EHA", "", hokuyoList, ["分辨率更高的距离输出型。多回波，IP67。"]),
      page("UXM-30LAH-EHA", "", hokuyoList, ["分辨率更高，同时提供区域配置和距离输出。多回波，IP67。"]),
      page("UXM-30LXH-EWA", "", hokuyoList, ["分辨率更高的距离输出型。多回波，IP67。"]),
      page("UXM-30LAH-EWA", "", hokuyoList, ["分辨率更高，区域设置更灵活。多回波，IP67。"]),
    ],
  },
  {
    id: "hokuyo-ugm",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "UGM-50：北阳 120 m 户外扫描测距仪",
    summary: "UGM-50 是二维扫描测距仪。距离输出型和区域型都写明最远 120 m、扫描角 190°，金属外壳，IP67。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("UGM-50LXP", "", hokuyoList, ["距离输出型。最远 120 m，扫描角 190°。金属外壳抗单次 50 G，IP67。"]),
      page("UGM-50LXN", "", hokuyoList, ["与 UGM-50LXP 同条列出的距离输出型，最远 120 m，190°，IP67。"]),
      page("UGM-50LAP", "", hokuyoList, ["区域输出型。最远 120 m，扫描角 190°，IP67。"]),
      page("UGM-50LAN", "", hokuyoList, ["与 UGM-50LAP 同条列出的区域输出型。"]),
    ],
  },
  {
    id: "hokuyo-uam",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "UAM：北阳安全激光扫描仪",
    summary: "UAM 是防护距离 5 m、扫描角 270° 的二维安全激光扫描仪，用于 AGV 和垂直防护。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("UAM-05LECA-T301", "", hokuyoList, ["EtherCAT 型。防护区 5 m，扫描角 270°。"]),
      page("UAM-05LP-T301", "", hokuyoList, [
        "安全扫描仪。符合 IEC 61496-1/3 Type 3、IEC 61508 SIL2、ISO 13849-1 PLd Category 3。",
      ]),
      page("UAM-05LP-T301C", "", hokuyoList, ["与 UAM-05LP-T301 同条列出。"]),
      page("UAM-05LPA-T301", "", hokuyoList, ["防护距离 5 m，扫描角 270°。列表写明环境耐受高于原 UAM。"]),
      page("UAM-05LPA-T301C", "", hokuyoList, ["与 UAM-05LPA-T301 同条列出，防护距离 5 m，扫描角 270°。"]),
    ],
  },
  {
    id: "hokuyo-3d",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "北阳三维激光雷达",
    summary:
      "YVT-35LX 每帧输出 2590 个点。YHT-10LA 最远 10 m，扫描角 45°×（+40°/−45°）。UCT-10LCM 厚度 20 mm，最远 10 m。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("YVT-35LX-F0/FK", "", hokuyoList, [
        "三维扫描测距仪。一帧生成 2590 个点，可用交错模式提高点云密度。",
        "带加速度传感器和 PPS 输入。",
      ]),
      page("YHT-10LA", "", hokuyoList, [
        "区域设置型三维激光雷达。最远 10 m，扫描角 45°（水平）× +40°/−45°（垂直）。",
      ]),
      page("UCT-10LCM", "", hokuyoList, [
        "厚度仅 20 mm。最远 10 m，扫描角 100°（水平）×6°（垂直）。",
      ]),
    ],
  },
  {
    id: "hokuyo-scan",
    date: "",
    companyId: "hokuyo",
    category: "product",
    title: "URM 与 PBS：北阳二维探测",
    summary:
      "URM-40LC-EWT 是户外二维扫描测距仪。PBS-03JN 用红外 LED 做障碍探测，扫描角 180°。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("URM-40LC-EWT", "", hokuyoList, ["户外二维扫描测距仪。量程 40 m，多回波，IP67。"]),
      page("PBS-03JN", "", hokuyoList, ["红外 LED 障碍探测。扫描角 180°。"]),
    ],
  },
  {
    id: "sick-picoscan",
    date: "",
    companyId: "sick",
    category: "product",
    title: "picoScan：SICK 二维激光雷达",
    summary:
      "产品手册列出二维激光雷达 picoScan120，以及 picoScan150 的 Core、Prime 和 Pro。最远工作距离分别到 30 m、25 m、60 m 和 120 m。",
    applications: ["machine"],
    technologies: [],
    models: [
      page(
        "picoScan120",
        "",
        "https://www.sick.com/media/productoverview/0/70/970/productoverview_picoScan100_g574970_en.pdf",
        [
          "最远工作距离 0.05 到 30 m，90% 反射率下 30 m，10% 反射率下 18 m。",
          "扫描频率 20 Hz。用于室内自主移动机器人。",
        ],
        "打开产品手册",
      ),
      page(
        "picoScan150 Core",
        "",
        "https://www.sick.com/media/productoverview/0/70/970/productoverview_picoScan100_g574970_en.pdf",
        [
          "最远工作距离 0.05 到 25 m。90% 反射率下 25 m，10% 反射率下 12 m。",
          "角分辨率在 25 Hz 时 0.25°，15 Hz 时 0.33° 或 1.00°。扫描频率 15 到 50 Hz。",
        ],
        "打开产品手册",
      ),
      page(
        "picoScan150 Prime",
        "",
        "https://www.sick.com/media/productoverview/0/70/970/productoverview_picoScan100_g574970_en.pdf",
        [
          "最远工作距离 0.05 到 60 m。90% 反射率下 51 m，10% 反射率下 25 m。",
          "角分辨率 0.05° 到 1.00°。手册写明需包含 Dynamic Sensing Profiles Package 才有部分档位。",
        ],
        "打开产品手册",
      ),
      page(
        "picoScan150 Pro",
        "",
        "https://www.sick.com/media/productoverview/0/70/970/productoverview_picoScan100_g574970_en.pdf",
        [
          "最远工作距离 0.05 到 120 m。90% 反射率下 75 m，10% 反射率下 40 m。",
          "角分辨率 0.05° 到 1.00°，扫描频率 15 到 50 Hz。",
        ],
        "打开产品手册",
      ),
    ],
  },
  {
    id: "sick-multilayer",
    date: "",
    companyId: "sick",
    category: "product",
    title: "SICK 多层激光雷达",
    summary:
      "multiScan100 有 16 个扫描层，水平 360°。MRS1104C-111011 属于 MRS1000，4 层，水平 275°，垂直 7.5°。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page(
        "multiScan100",
        "",
        "https://www.sick.com/media/productoverview/4/14/914/productoverview_multiScan100_g574914_en.pdf",
        [
          "16 个扫描层。水平 360°。垂直视场有 65° 和 42° 两种版本。",
          "工作距离 0.05 到 62 m，随型号变化。可评估 3 个回波。扫描频率 20 Hz 或 40 Hz。",
          "重量 0.7 kg。防护包括 IP65、IP67、IP69 和 IPX9K。",
        ],
        "打开产品手册",
      ),
      page(
        "MRS1104C-111011",
        "",
        "https://www.sick.com/media/pdf/4/44/044/dataSheet_MRS1104C-111011_1081208_en.pdf",
        [
          "MRS1000 的具体型号，零件号 1081208。光源 850 nm，激光等级 1。",
          "水平 275°，垂直 7.5°，共 4 层。工作距离 0.2 到 64 m。",
          "10%  remission 下扫描距离 16 m，90% 下 30 m。扫描频率 50 Hz（4×12.5 Hz）。",
          "系统误差 ±60 mm，统计误差不大于 30 mm。点频 55,000 到 165,000 点/秒。",
        ],
        "打开产品手册",
      ),
    ],
  },
  {
    id: "adtf3175",
    date: "2023-03",
    companyId: "analog",
    category: "product",
    title: "ADTF3175：亚德诺百万像素飞行时间模组",
    summary:
      "ADTF3175 是完整的间接飞行时间模组，成像器 1024×1024、像素 3.5 μm，视场 75°×75°，深度范围 0.4 到 4 m。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("ADTF3175", "2023-03", "https://www.analog.com/en/products/adtf3175.html", [
        "基于 ADSD3100 的 100 万像素间接飞行时间成像器，像素 3.5 μm×3.5 μm。",
        "视场 75°×75°。照明组件带 940 nm 带通。4 lane MIPI CSI-2，每路 1.5 Gbps。",
        "深度范围 0.4 到 4 m：19% 最低反射率、相当于 3 klux 日光时，深度噪声 1σ 最大 15 mm。深度精度 ±5 mm。",
        "尺寸 42×31×15.1 mm。工作温度 -20℃ 到 65℃。产品页数据手册标注 2023 年 3 月。",
      ]),
    ],
  },
  {
    id: "leishen-ls",
    date: "2024-10",
    companyId: "leishen",
    category: "product",
    title: "LS：镭神 1550 nm 激光雷达",
    summary:
      "2024 年 10 月 23 日版产品手册把 LS144S3、LS180S3、LS400S3 列在同一张表，波长 1550 nm，水平视场 120°。另有 LS180S2、LS500W1、LS25E 和 LS30MVA。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("LS144S3", "2024-10", ls, [
        "手册版本 EN-V2.2，日期 2024 年 10 月 23 日。每帧 144 通道，每秒 1440 通道。",
        "水平视场 120°，垂直视场 24°。点频 1,650,000 点/秒。波长 1550 nm，Class I，TOF。",
      ], "打开产品手册"),
      page("LS180S3", "2024-10", ls, [
        "每帧 180 通道，每秒 1800 通道。水平 120°，垂直 25°（±12.5°）。",
        "点频 1,650,000 点/秒。手册把三个型号在 10% 反射率下的距离写成 180 / 210 / 250 m。",
      ], "打开产品手册"),
      page("LS400S3", "2024-10", ls, [
        "每帧 400 通道，每秒 4000 通道。水平 120°，垂直 25°（±12.5°）。",
        "点频 1,850,000 点/秒。测距精度栏为 ±2 cm。",
      ], "打开产品手册"),
      page("LS180S2", "2024-10", ls, [
        "手册称其为满足车规的图像级激光雷达，使用自研 1550 nm 光纤激光器，带抗干扰，超薄设计。",
      ], "打开产品手册"),
      page("LS500W1", "2024-10", ls, [
        "探测距离 2 到 150 m，视场 120°×73°。点频 3,700,000 点/秒，精度 ±2 cm，帧率 10 Hz。",
        "功耗不大于 40 W，IP6K9K，重量不大于 3000 g，尺寸 270×160×80 mm。",
      ], "打开产品手册"),
      page("LS25E", "2024-10", ls, [
        "用于铁路定点监测。最远 250 m，200 m 内可探测 20×20 cm 的小物体。",
      ], "打开产品手册"),
      page("LS30MVA", "2024-10", ls, [
        "桥梁防撞测距系统。10% 反射率下 10 到 2000 m，10 m 处精度 ±15 cm。",
        "点频 500 点/秒，俯仰角精度 0.01°。IP66，重量不大于 15 kg。",
      ], "打开产品手册"),
      page("MS06", "2024-10", ls, [
        "基于 TOF 的 Class I 激光雷达，手册写最远可达 2000 m，用于直升机和飞行汽车防撞。",
      ], "打开产品手册"),
      page("LS74A", "2024-10", ls, [
        "固定角度测距。905 nm，Class I，TOF。30% 反射率下 1200 m，精度 ±0.5 m（1σ）。",
        "帧率 1 到 10 Hz，单回波或双回波。供电 5 到 12 V，功耗 2 W。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "leishen-ch",
    date: "2024-10",
    companyId: "leishen",
    category: "product",
    title: "CH：镭神混合固态激光雷达",
    summary:
      "手册中的 CH128X1 与 CH128S1 都是 128 线、905 nm。CB64S1 是 64 线补盲。CH32R 与 CH16R 是超广角补盲。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("CH128X1", "2024-10", ls, [
        "905 nm，Class I，128 路，TOF。200 m（10% 下 160 m），精度 ±3 cm。",
        "水平 120°，垂直 25°（-12.5° 到 12.5°）。点频 760,000 点/秒。帧率 5/10/20 Hz。",
        "车载以太网，9 到 36 V，功耗 12 W，ASIL B，IP6K9K。重量 1000 g，尺寸 118×90×75 mm。",
      ], "打开产品手册"),
      page("CH128S1", "2024-10", ls, [
        "与 CH128X1 同表。905 nm，128 路，200 m（10% 下 160 m），精度 ±3 cm。",
        "水平 120°，垂直 25°。点频 760,000 点/秒。",
      ], "打开产品手册"),
      page("CB64S1", "2024-10", ls, [
        "64 路补盲。905 nm，TOF。100 m（10% 下 45 m），精度 ±3 cm。",
        "水平 180°，垂直 40°（-25° 到 15°）。点频 1,010,000 点/秒，帧率 10 Hz。",
        "功耗 12 W，ASIL B，IP6K9K。重量 1000 g，尺寸 116×90×76 mm。",
      ], "打开产品手册"),
      page("CH32R", "2024-10", ls, [
        "32 路。70% 反射率下 120 m，10% 下 30 m。精度 ±3 cm，1σ 为 ±1 cm。",
        "水平 360°，垂直 2.487° 到 89.105°。单回波 640,000 点/秒。",
      ], "打开产品手册"),
      page("CH16R", "2024-10", ls, [
        "16 路。70% 下 120 m，10% 下 30 m。水平 360°，垂直 2.487° 到 52.798°。",
        "单回波 320,000 点/秒，双回波 640,000 点/秒。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "leishen-cx",
    date: "2024-10",
    companyId: "leishen",
    category: "product",
    title: "CX：镭神车规混合固态激光雷达",
    summary:
      "CX128S2 与 CX126S3 都写明水平 120°、垂直 25°。CX1S3 为单线，CX6S3 为 6 线。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("CX126S3", "2024-10", ls, [
        "905 nm，Class I，126 路，TOF。200 m（10% 下 160 m），精度不大于 3 cm。",
        "水平 120°，垂直 25°。点频 840,000 点/秒。功耗 13.5 W，重量 635 g，尺寸 110×100.4×45 mm。",
      ], "打开产品手册"),
      page("CX128S2", "2024-10", ls, [
        "128 路。10% 反射率下 200 m，精度 ±3 cm。水平 120°，垂直 25°。",
        "点频 1,530,000 点/秒。功耗 15 W，重量不大于 935 g，尺寸 139×112.78×47 mm。",
      ], "打开产品手册"),
      page("CX6S3", "2024-10", ls, [
        "6 路。10% 反射率下 20 m，精度 ±3 cm。水平 120°，垂直 1°。",
        "点频 48,000 点/秒，帧率 5/10/20 Hz。重量 635 g。",
      ], "打开产品手册"),
      page("CX1S3", "2024-10", ls, [
        "1 路。10% 反射率下 150 m，精度 ±3 cm。水平 120°。",
        "帧率 30 到 150 Hz，点频 150,000 点/秒。重量 635 g。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "leishen-mechanical",
    date: "2024-10",
    companyId: "leishen",
    category: "product",
    title: "C：镭神机械式激光雷达",
    summary:
      "C32 与 C16 都是 360° 机械式激光雷达，10% 反射率下 100 m、70% 下 150 m。C32W 垂直视场更宽。单线型号另列。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("C32", "2024-10", ls, [
        "32 路，905 nm，Class I，TOF。10% 下 100 m，70% 下 150 m。精度 ±3 cm，1σ 为 ±1 cm。",
        "水平 360°，垂直 -16° 到 15°，均匀 1°。帧率 5/10/20 Hz。10 Hz 时功耗 12 W。",
        "IP67。重量 1040 g 或 1100 g。",
      ], "打开产品手册"),
      page("C32 PoE", "2024-10", ls, [
        "手册把 C32 与 C32 PoE 并列。供电一栏同时写出 12 到 32 V 和 36 到 57 V。",
        "线数、量程和视场与 C32 同表。",
      ], "打开产品手册"),
      page("C16", "2024-10", ls, [
        "16 路。10% 下 100 m，70% 下 150 m。水平 360°，垂直 -16° 到 14°，均匀 2°。",
        "10 Hz 时功耗 10 W。IP67。重量 1040 g。",
      ], "打开产品手册"),
      page("C16 PoE", "2024-10", ls, [
        "手册把 C16 与 C16 PoE 并列，尺寸写成 Φ102×77.9 mm 或 Φ102×91.9 mm。",
        "线数和量程与 C16 同表。",
      ], "打开产品手册"),
      page("C32W", "2024-10", ls, [
        "32 路。70% 下 130 m，10% 下 60 m。水平 360°，垂直 -54.7° 到 15°。",
        "点频 600,000 点/秒。功耗 12 W，IP67。重量约 1150 g，尺寸 Φ102×116 mm。",
      ], "打开产品手册"),
      page("C32W PoE", "2024-10", ls, [
        "与 C32W 同表。70% 下 50 到 130 m，10% 下 10 到 60 m。",
        "接口为 Ethernet 100base-TX 与 PPS。重量约 1115 g，尺寸 Φ102×102 mm。",
      ], "打开产品手册"),
      page("LS-PTZ-150", "2024-10", ls, [
        "旋转扫描。905 nm，Class I。最远 150 m，最近 1 m，精度 3 cm。",
        "水平 180°，垂直 120°。点频 150,000 点/秒。IP67，重量 3500 g。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "leishen-2d",
    date: "2024-10",
    companyId: "leishen",
    category: "product",
    title: "单线与二维：镭神扫描测距",
    summary:
      "手册里的 C1、N301、N10、M10 和 HS1 是单线或二维扫描，不形成三维点云。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("C1", "2024-10", ls, [
        "单线机械式。70% 下 120 m，10% 下 100 m。精度 ±3 cm，1σ 为 ±1 cm。水平 360°。",
        "单回波 20,000 点/秒，双回波 40,000 点/秒。10 Hz 时功耗 7 W，IP67。",
      ], "打开产品手册"),
      page("N10", "2024-10", ls, [
        "二维导航避障。70% 下 0.02 到 12 m。0 到 6 m 精度 ±3 cm，6 m 以上 ±4.5 cm。",
        "扫描 360°，帧率 6 到 12 Hz，点频 4,500 点/秒。功耗 1 W，重量约 60 g，IPX-4。",
      ], "打开产品手册"),
      page("M10", "2024-10", ls, [
        "手册写 M10 系列用 TOF 做 360° 二维扫描，精度 ±3 cm，最远 25 m。",
        "用于室内服务机器人、AGV 和无人机的定位与避障。",
      ], "打开产品手册"),
      page("N301", "2024-10", ls, [
        "防爆型号，标记 Ex d IIC T6 Gb。905 nm，Class 1，1 路，TOF。",
        "距离档 10/20/30/40/50 m，精度 ±3 cm。水平 360°。点频 20,000 点/秒，功耗 4 W。",
      ], "打开产品手册"),
      page("HS1", "2024-10", ls, [
        "手册写探测距离 100 m，测量精度 ±2 cm，扫描频率最高 200 Hz，用于车辆外廓和限高检测。",
      ], "打开产品手册"),
    ],
  },
  {
    id: "robosense-em",
    date: "2025-04",
    companyId: "robosense",
    category: "product",
    title: "EM：速腾聚创车载数字激光雷达",
    summary:
      "2025 年 9 月 10 日的发布稿写明，EM 平台在 2025 年 1 月推出 EM4，在 2025 年 4 月推出 EMX。EM4 产品页写最高 2160 线，视场 120°×27°，10% 反射率下 300 m，最远 600 m。EMX 产品页写 192 线、水平视场 140°、最远 300 m。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("EM4", "2025-01", "https://www.robosense.ai/en/rslidar/EM4", [
        "2025 年 9 月 10 日的发布稿写明，EM4 于 2025 年 1 月推出。发布稿写 EM4 采用 SPAD-SoC 与 VCSEL，10% 反射率下 300 m，最远 600 m，线数可从 520、720、1080 配到 2160。",
        "产品页写数字架构，SPAD-SoC。最高 2160 线。视场 120°×27°。",
        "产品页写 10% 反射率下 300 m，最远 600 m。点频 41.04M 点/秒。",
        "产品页写数据压缩比 60%。",
      ]),
      page("EMX", "2025-04", "https://www.robosense.ai/en/rslidar/EMX", [
        "2025 年 9 月 10 日的发布稿写明，EMX 于 2025 年 4 月推出，面向 L2 辅助驾驶，并写已向多家主机厂规模交付。发布稿写可配置 192、256 和 384 线。",
        "产品页写 EMX 基于 EM 平台，192 线，点频 288 万点/秒，帧率最高 20 Hz，最远 300 m，水平视场 140°。",
        "产品页写全局角分辨率 0.08°×0.10°（水平×垂直）。尺寸 120×80×30 mm（长×宽×高）。架构为 SPAD 与 VCSEL。",
        "产品页写 Gaze 最多把水平角分辨率提高 6 倍。发布稿写角分辨率 0.08°×0.1°，点频 288 万点/秒，最远 300 m，帧率最高 20 Hz。",
        "产品页写 200 m 内可分辨黑色车辆和交通锥，对应车速最高 160 km/h；30×17 cm 纸箱在 120 m 内，对应车速最高 121 km/h；散落轮胎在 80 m 内，对应车速最高 96 km/h。",
      ]),
    ],
  },
  {
    id: "robosense-fairy",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "Fairy：速腾聚创中距数字激光雷达",
    summary:
      "Fairy 的产品页写有 96 线和 48 线两个版本，视场 360°×32°，最远 150 m，精度 0.5 cm（1σ）。产品页未写发布日期。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("Fairy", "", "https://www.robosense.ai/en/rslidar/Fairy", [
        "产品页未写发布日期。96 线版本点频约 137 万点/秒，48 线版本点频 68.5 万点/秒。页注写最高可选 192 线。",
        "视场 360°×32°，最远 150 m。角分辨率 0.25°×0.33°。精度 0.5 cm（1σ）。",
        "精度的测量条件写为户外 30°C、0.5 m 到 70 m、目标反射率 50%、第 25 到 72 通道的平均精度。",
        "尺寸 φ75×H70 mm，重量小于 350 g。集成 IMU。发射端为 VCSEL，接收端为 SPAD-SoC。",
        "产品页列出的用途包括测绘仪器、无人机、庭院机器人、清洁机器人、无人叉车、配送机器人、智慧港口和无人矿卡。",
      ]),
    ],
  },
  {
    id: "robosense-ac",
    date: "2025-10-21",
    companyId: "robosense",
    category: "product",
    title: "AC：速腾聚创主动相机",
    summary:
      "AC1 的发布稿日期为 2025-03-28，写融合视场 120°×60°、最远 70 m。AC2 的发布稿正文写 2025-10-21 发布，产品页写测距 0.05 m 到 8 m、视场 120°×90°。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      page("AC1", "2025-03-28", "https://www.robosense.ai/en/rslidar/AC1", [
        "发布稿页面日期为 2025-03-28，正文写 2025 年 3 月 28 日在深圳发布。发布稿写融合激光雷达、相机和 IMU，融合视场 120°×60°，最远 70 m，10% 反射率目标的探测距离为 20 m，测距精度 3 cm（1σ）。",
        "产品页写最远 70 m，10% 反射率的深黑目标最远 40 m。5 m 内测距精度 1 cm（1σ）。100 klux 阳光下仍写最远 70 m、精度 1 cm（1σ）。",
        "产品页写深度视场 120°×60°，彩色视场 144°×78°。架构为 VCSEL、SPAD 与 CMOS，全固态模组，集成 IMU。工作温度 -20°C 到 +60°C。",
        "发布稿写用途包括人形机器人、无人机、数字孪生、三维扫描、环境监测和散料跟踪。",
      ]),
      page("AC2", "2025-10-21", "https://www.robosense.ai/en/rslidar/AC2", [
        "发布稿页面日期为 2025-10-24，正文写 2025 年 10 月 21 日在杭州的 IROS 2025 上发布，并写邀请制试用。产品页写可预订，未另写日期。",
        "发布稿写全固态大面阵 dToF、立体 RGB 与 IMU。8 m 内精度 ±5 mm。立体视觉加强 1 m 以内的深度精度。彩色分辨率为 1600×1400。同步精度最高 1 ms。视场 120°×90°。",
        "产品页写测距 0.05 m 到 8 m，全量程精度 ±5 mm，并注这是在 8 m 以内。彩色分辨率写 1600×1200。同步精度小于 1 ms。视场 120°×90°。立体基线 65 mm。全局快门。100 klux 下保持测距和精度。",
        "产品页写尺寸 102×32×45 mm（长×高×深）。发布稿写尺寸 100 mm × 30 mm × 45 mm（长×高×深）。",
        "发布稿写防护等级 IP65，工作温度 -10°C 到 55°C，接口为 GMSL2 与 FAKRA。发布稿写可感知牙刷、衣架，以及玻璃和金属等高反光材料。",
      ]),
    ],
  },
  {
    id: "aeva-atlas",
    date: "",
    companyId: "aeva",
    category: "product",
    title: "Atlas：Aeva 调频连续波激光雷达",
    summary:
      "Atlas 是车规 FMCW 4D 激光雷达，可同时测距和测速。产品页写明 10% 反射率下最远 250 m，视场 120°×30°。Atlas Ultra 的产品页写 10% 反射率下 250 m、视场 120°×25°。Atlas Orion 的产品页写车辆探测最远 500 m。",
    applications: ["depth", "auto", "machine"],
    technologies: [],
    models: [
      page("Atlas", "", "https://www.aeva.com/atlas/", [
        "FMCW，逐点多普勒测速，同时输出距离。",
        "10% 反射率下最远 250 m。视场 120°（水平）×30°（垂直）。",
        "功能安全 ISO 26262 ASIL-B（D）。相对 Aeries II 体积小 70%。被动散热。",
        "同页另写数字信号处理可做最远 500 m 的测量。",
      ]),
      page("Atlas Ultra", "", "https://www.aeva.com/atlas-ultra/", [
        "产品页未写发布日期。车规 4D 激光雷达，面向量产项目中的 SAE L3/L4 自动驾驶。",
        "相对 Aeva Atlas，分辨率是 3 倍，厚度少 35%。10% 反射率下 250 米。视场 120°（水平）×25°（垂直），并写最宽 120°。",
        "工作温度 -40°C 到 85°C。ISO 26262 ASIL-B（D）。",
        "产品页写即时速度检测、无 blooming 或 ghosting、抗干扰，以及 CoreVision Lidar-on-Chip 和 X1 SoC。",
      ]),
      page("Atlas Orion", "", "https://www.aeva.com/atlas-orion/", [
        "产品页未写发布日期。远距 4D 激光雷达，数据和供电走以太网，面向智慧基础设施和安防。",
        "弱势道路使用者探测最远 200 米，车辆探测最远 500 米。水平视场 120°。两台即可覆盖路口。角分辨率 0.05°×0.05°。",
        "支持以太网供电。耐久认证为 NEMA-TS2。",
        "使用 Aeva X1 LiDAR SoC。页面写该 SoC 是第一款车规 FMCW 激光雷达 SoC，并写 ISO 26262、ISO 21434 和 SOTIF/PAS 21448。",
      ]),
    ],
  },
  {
    id: "aeva-omni",
    date: "2026-01-06",
    companyId: "aeva",
    category: "product",
    title: "Omni：Aeva 短距宽视场 4D 激光雷达",
    summary:
      "2026 年 1 月 6 日，Aeva 在 CES 发布 Omni。发布稿写明与 LG Innotek 合作，视场 360°×90°，最远 80 米，直径 85 mm。早期客户试点在 2026 年下半年，量产目标为 2027 年。产品页标注 Available 2027。",
    applications: ["depth", "auto", "machine"],
    technologies: [],
    models: [
      page("Omni", "2026-01-06", "https://www.aeva.com/omni/", [
        "发布稿日期为 2026-01-06，正文写拉斯维加斯、2026 年 1 月 6 日。FMCW。发布稿写这是宽视场短距 4D 激光雷达，与 LG Innotek 合作开发。",
        "发布稿写可同时检测速度和位置，对阳光和其他激光雷达信号抗干扰，逆反射物体周围无 blooming 和 ghosting。",
        "水平视场 360°，垂直视场 90°。发布稿写逐点速度，最远 80 米，直径 85 mm。产品页写最远距离 80 米，视场 360（水平）×90（垂直），直径 85 mm。",
        "发布稿写防护等级 IP68 和 IP69K，并写可在雨、尘、雾中工作。产品页写工作温度 -40°C 到 60°C，被动散热，CoreVision Lidar-on-Chip 和 X1 SoC。",
        "产品页的 X1 一节写它是第一款车规 FMCW 激光雷达 SoC，集成数据采集、点云处理、扫描和应用软件，并写 ISO 26262、ISO 21434 和 SOTIF/PAS 21448。",
        "发布稿写 2026 年下半年向早期客户试点，量产目标为 2027 年。产品页标注 Available 2027。用途写自动驾驶、机器人、无人机、防务、仓储自动化和智慧基础设施。",
      ]),
    ],
  },
  {
    id: "aeva-eve",
    date: "2025-09-10",
    companyId: "aeva",
    category: "product",
    title: "Eve 1：Aeva 高精度激光传感器",
    summary:
      "Eve 1D 与 Eve 1V 共用产品页。Eve 1D 的发布稿日期为 2025-04-29，写 FMCW 激光位移、亚微米精度、工作距离 100 mm 到 20 m。Eve 1V 的发布稿日期为 2025-09-10，写非接触测速，精度为每秒亚毫米。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("Eve 1D", "2025-04-29", "https://www.aeva.com/eve-1/", [
        "发布稿日期为 2025-04-29，正文写加利福尼亚州山景城、2025 年 4 月 29 日。FMCW 激光位移传感器，用于工厂和过程自动化。",
        "发布稿标题写亚微米重复性。正文写测量精度到亚微米，工作距离 100 mm 到 20 m，测量与处理在同一机身。产品页写量程精度 Sub-Micron，线性度 0.01%，工作距离 100 mm 到 20 m。",
        "发布稿写使用 CoreVision lidar-on-chip，可测径向速度，并用于振动测量。产品页写环境光免疫、超高动态范围、单机身集成测量与处理。",
        "发布稿写样品当时可供，量产预计于当年开始。产品页未另写日期。",
      ]),
      page("Eve 1V", "2025-09-10", "https://www.aeva.com/eve-1/", [
        "发布稿日期为 2025-09-10，正文写加利福尼亚州山景城、2025 年 9 月 10 日。非接触运动传感器，测横向速度，包括长度、运动方向和位置。",
        "发布稿写精度为每秒亚毫米。产品页写 Sub-Millimeter Per Second，工作距离 200 到 300 mm。",
        "发布稿写 Class 1，非接触，面向包装、印刷、建材和挤出产线，可测卷材、片材、卷筒和分立件。产品页写无滑移、非接触。",
        "发布稿写样品当时可供，量产预计于次年年初开始。产品页未另写日期。",
      ]),
    ],
  },
  {
    id: "valeo-scala",
    date: "",
    companyId: "valeo",
    category: "product",
    title: "SCALA 3：法雷奥长距激光雷达",
    summary:
      "SCALA Gen 3 产品页写明 10% 反射率下 200 m，视场 120°×26°，分辨率 0.05°，尺寸 186×46×128 mm。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("SCALA 3", "", "https://www.valeo.com/en/catalogue/cda/long-range-lidar-sensors-valeo-scala-gen-3/", [
        "10% 反射率下 200 m。水平 120°，垂直 26°。水平与垂直分辨率 0.05°。",
        "10 fps 时每个回波 12.5M 点/秒。帧率可在 10 到 20 fps 之间配置。",
        "尺寸 186×46×128 mm（宽×高×深）。页面更新日期是 2024-09-16，不是发布日。",
      ]),
    ],
  },
  {
    id: "zvision-ml",
    date: "2023-01-05",
    companyId: "zvision",
    category: "product",
    title: "ML-30s：一径短距补盲激光雷达",
    summary:
      "ML-30s 与 ML-30s+ 都是短距激光雷达，视场 140°×70°，分辨率 320×160。ML-30s+ 于 2023 年 1 月 5 日在 CES 发布。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("ML-30s", "", "https://www.zvision.xyz/en/h-col-278.html", [
        "短距激光雷达。视场 140°×70°。分辨率 320×160。",
        "20 klux 下、10% 反射率测距 20 m。",
      ]),
      page("ML-30s+", "2023-01-05", "https://www.zvision.xyz/en/h-col-262.html", [
        "车规短距激光雷达。视场 140°×70°。分辨率 320×160。",
        "100 klux 下、10% 反射率测距 22 m。",
        "发布稿写明角分辨率 0.44°×0.44°，单回波 512,000 点/秒，尺寸 120×60×97 mm。",
        "当地时间 2023-01-05 在 CES 发布。",
      ]),
    ],
  },
  {
    id: "luminar-iris",
    date: "",
    companyId: "luminar",
    category: "product",
    title: "Iris：Luminar 车载激光雷达",
    summary:
      "公司年报把 Iris 写成 1550 nm 激光雷达，水平视场 120°，垂直视场软件可调、最高 30°，可探测 600 m 内的物体。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page(
        "Iris",
        "",
        "https://investors.luminartech.com/sec-filings/all-sec-filings/content/0001140361-26-011477/ef20067963-10k.htm",
        [
          "1550 nm。水平视场 120°，垂直视场由软件配置，最高 30°。",
          "可探测最远 600 m 的物体。点密度超过每平方度 200 点。",
        ],
        "打开产品说明",
      ),
    ],
  },
  {
    id: "cepton-vista",
    date: "",
    companyId: "cepton",
    category: "product",
    title: "Vista：Cepton 车载激光雷达",
    summary:
      "Vista 产品页同时介绍 Vista-X90 和 Vista-X120 Plus。X90 视场 90°×25°，ROI 角分辨率 0.09°。X120 Plus 视场 120°×25°，10% 反射率下 200 m。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("Vista-X90", "", "https://www.cepton.com/products/vista-x90", [
        "视场 90°×25°。ROI 角分辨率 0.09°×0.09°。同组规格写 200 m。",
        "面向挡风玻璃内侧安装。ISO 26262 ASIL-B。页面写明采用 MMT 结构。",
      ]),
      page("Vista-X120 Plus", "", "https://www.cepton.com/products/vista-x90", [
        "视场 120°×25°。ROI 角分辨率 0.05°×0.05°。10% 反射率下 200 m。",
        "尺寸 140×30×150 mm，重量约 0.8 kg。ISO 26262 ASIL-B。",
      ]),
    ],
  },
  {
    id: "livox-hap",
    date: "2021",
    companyId: "livox",
    category: "product",
    title: "HAP：览沃车规激光雷达",
    summary:
      "HAP 规格页列出 HAP (T1) 与 HAP (TX)。100 klx、10% 反射率下 150 m，视场 120°×25°。产品页写明约 2021 年起为客户量产。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      page("HAP (T1)", "2021", "https://www.livoxtech.com/hap/specs", [
        "100 klx、10% 反射率下 150 m。视场 120°×25°。点频 452,000 点/秒。",
        "ROI 角分辨率 0.23°（垂直）×0.18°（水平）。20 m 处测距随机误差 1σ 小于 2 cm。",
        "接口 100BASE-T1。典型功耗 12 W。重量约 1120 g，尺寸 105×131.6×65 mm。IP67。",
        "产品页写明约 2021 年开始为客户量产。",
      ]),
      page("HAP (TX)", "2021", "https://www.livoxtech.com/hap/specs", [
        "测距、视场和点频与 HAP (T1) 相同。数据口是 100BASE-TX。",
      ]),
    ],
  },
  {
    id: "robosense-bpearl",
    date: "",
    companyId: "robosense",
    category: "product",
    title: "Bpearl：速腾聚创近场补盲激光雷达",
    summary: "Bpearl 产品页写明水平 360° 的半球视场，盲区不大于 10 cm，用于近场补盲。",
    applications: ["depth", "auto", "machine"],
    technologies: ["tof"],
    models: [
      page("Bpearl", "", "https://www.robosense.ai/en/rslidar/Bpearl", [
        "水平视场 360°，半球视场。盲区不大于 10 cm。",
        "产品页写明用于近场盲区探测。",
      ]),
    ],
  },
];
