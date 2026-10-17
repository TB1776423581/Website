export const applications = [
  {
    id: "mobile",
    name: "手机",
    description: "用于智能手机摄像头的图像传感器，包括主摄、长焦和前置。",
  },
  {
    id: "auto",
    name: "汽车",
    description: "用于前视辅助驾驶、电子后视镜、舱内监测和自动驾驶的图像传感器。",
  },
  {
    id: "machine",
    name: "机器视觉",
    description: "用于工厂检测、自动化、交通和航测的图像传感器。",
  },
  {
    id: "scientific",
    name: "医疗与科学",
    description: "用于医疗成像、天文、显微和科学仪器的图像传感器。",
  },
  {
    id: "consumer",
    name: "消费电子",
    description: "用于可穿戴、眼动追踪、常开相机等消费设备的图像传感器。",
  },
  {
    id: "depth",
    name: "3D探测",
    description: "输出深度或三维图像的传感器，包括间接飞行时间、直接飞行时间和分区测距。",
  },
  {
    id: "spectral",
    name: "光谱探测",
    description: "按波段分辨光线的多光谱、高光谱图像传感器，以及覆盖可见光到短波红外的光谱成像传感器。",
  },
];

export const technologies = [
  {
    id: "stacked",
    name: "堆叠式",
    description: "像素与电路分层堆叠，用来提高画质、速度或缩小芯片。",
  },
  {
    id: "global",
    name: "全局快门",
    description: "所有像素同时曝光，适合运动物体和机器视觉。",
  },
  {
    id: "hdr",
    name: "高动态范围",
    description: "同一场景里同时保留高光和暗部。",
  },
  {
    id: "lowlight",
    name: "低照度",
    description: "面向暗光、夜景或近红外的灵敏度。",
  },
  {
    id: "event",
    name: "事件相机",
    description: "按像素亮度变化输出事件，而不是按固定帧率输出整幅图像。",
  },
  {
    id: "highres",
    name: "高分辨率",
    description: "以超高像素数作为主要特征的图像传感器。",
  },
  {
    id: "tof",
    name: "3D探测",
    description: "用飞行时间或分区深度测量物体远近，并形成深度图。",
  },
  {
    id: "spectral",
    name: "光谱探测",
    description: "在像素上区分不同波长，用于多光谱、高光谱或短波红外成像。",
  },
];

export const categories = {
  product: "新产品",
  roadmap: "路线",
  partnership: "合作",
  market: "产能与市场",
};

export const companies = [
  {
    id: "sony",
    name: "索尼半导体",
    nameEn: "Sony Semiconductor Solutions",
    region: "海外",
    hq: "日本",
    summary:
      "手机图像传感器品牌为 LYTIA。公司在产品页上的表述是：释放智能手机用户的创造力。",
    roadmap:
      "LYTIA L910 的公开资料写明，量产出货时间为 2026 年夏季。",
  },
  {
    id: "samsung",
    name: "三星半导体",
    nameEn: "Samsung Semiconductor",
    region: "海外",
    hq: "韩国",
    summary: "手机图像传感器品牌为 ISOCELL，覆盖旗舰机的高像素主摄。",
  },
  {
    id: "omnivision",
    name: "豪威",
    nameEn: "OMNIVISION",
    region: "国内",
    hq: "上海",
    summary:
      "豪威科技的图像传感器品牌是 OMNIVISION，产品覆盖手机与汽车摄像头。",
  },
  {
    id: "onsemi",
    name: "安森美",
    nameEn: "onsemi",
    region: "海外",
    hq: "美国",
    summary: "车载图像传感器产品线包括 Hyperlux，面向辅助驾驶和舱内视觉。",
  },
  {
    id: "smartsens",
    name: "思特威",
    nameEn: "SmartSens",
    region: "国内",
    hq: "上海",
    summary: "设计 CMOS 图像传感器，手机产品线为 XS 系列。",
  },
  {
    id: "galaxycore",
    name: "格科微",
    nameEn: "GalaxyCore",
    region: "国内",
    hq: "上海",
    summary: "设计手机 CMOS 图像传感器，公开产品页按像素档列出型号和规格。",
  },
  {
    id: "gpixel",
    name: "长光辰芯",
    nameEn: "Gpixel",
    region: "国内",
    hq: "长春",
    summary:
      "产品分为全局快门 GMAX 系列，以及科学成像 GSENSE 系列。",
  },
  {
    id: "st",
    name: "意法半导体",
    nameEn: "STMicroelectronics",
    region: "海外",
    hq: "瑞士",
    summary: "车载图像传感器包含面向驾驶员监测的全局快门产品。",
  },
  {
    id: "prophesee",
    name: "Prophesee",
    nameEn: "Prophesee",
    region: "海外",
    hq: "法国巴黎",
    summary: "做事件视觉传感器。像素在亮度变化时输出事件，而不是固定帧率的整幅图像。",
  },
  {
    id: "infineon",
    name: "英飞凌",
    nameEn: "Infineon",
    region: "海外",
    hq: "德国",
    summary: "REAL3 系列包含用于消费和工业的飞行时间三维图像传感器。",
  },
  {
    id: "melexis",
    name: "迈来芯",
    nameEn: "Melexis",
    region: "海外",
    hq: "比利时",
    summary: "车载和工业用间接飞行时间图像传感器，可输出 VGA 深度图。",
  },
  {
    id: "spectricity",
    name: "Spectricity",
    nameEn: "Spectricity",
    region: "海外",
    hq: "比利时",
    summary: "做面向移动设备的快照式多光谱图像传感器，由 imec 分拆而来。",
  },
  {
    id: "imec",
    name: "imec",
    nameEn: "imec",
    region: "海外",
    hq: "比利时",
    summary: "在 CMOS 图像传感器上单片集成马赛克滤光片，做成快照式高光谱传感器。",
  },
];

export const developments = [
  {
    id: "lyt-l910",
    date: "2026-06-17",
    companyId: "sony",
    category: "product",
    title: "LYTIA L910：约 5000 万像素，动态范围 100 dB",
    summary:
      "2026 年 6 月 17 日，索尼半导体公布 LYTIA L910。这是一款约 5000 万有效像素、1/1.28 英寸的堆叠式手机图像传感器，采用 LOFIC，动态范围 100 dB。公开资料写明它面向省电的高画质 4K，并改善夜景与户外成像，量产出货时间为 2026 年夏季。",
    productName: "LYTIA L910",
    productUrl: "https://www.sony-semicon.com/en/info/2026/2026061701.html",
    linkLabel: "打开产品发布页",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
  },
  {
    id: "lyt-818",
    date: "2024-09-25",
    companyId: "sony",
    category: "product",
    title: "LYT-818：面向暗光和高反差的 5000 万像素手机传感器",
    summary:
      "2024 年 9 月 25 日，索尼发布 LYT-818。约 5000 万有效像素、1/1.28 英寸，像素 1.22 μm，用于手机主摄。发布页强调暗光降噪和高动态范围，量产出货时间为 2024 年 9 月中旬。",
    productName: "LYT-818",
    productUrl: "https://www.sony-semicon.com/en/info/2024/2024092501.html",
    linkLabel: "打开产品发布页",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
  },
  {
    id: "ox08d20",
    date: null,
    companyId: "omnivision",
    category: "product",
    title: "OX08D20：800 万像素车外摄像头传感器",
    summary:
      "豪威产品页把 OX08D20 写成 OX08D10 的升级，面向辅助驾驶和自动驾驶的车外摄像头。页面写明 HDR3 模式下 3840×2160 可达 60 fps，并采用与 Mobileye 合作的采集方式，减轻行驶中近处物体的运动模糊。该页摘录没有单独的发布日期。",
    productName: "OX08D20",
    productUrl: "https://www.ovt.com/products/ox08d20/",
    linkLabel: "打开产品页",
    applications: ["auto"],
    technologies: ["hdr"],
  },
  {
    id: "ox08d10",
    date: "2023-09-19",
    companyId: "omnivision",
    category: "product",
    title: "OX08D10：用 TheiaCel 抑制车灯频闪的 800 万像素传感器",
    summary:
      "2023 年 9 月 19 日，豪威在 AutoSens 布鲁塞尔发布 OX08D10。800 万像素、2.1 μm，采用 TheiaCel 与 LOFIC，面向需要抑制 LED 频闪的车外摄像头。产品页列出的用途包括前向辅助驾驶和自动驾驶。",
    productName: "OX08D10",
    productUrl: "https://www.ovt.com/products/ox08d10/",
    linkLabel: "打开产品页",
    applications: ["auto"],
    technologies: ["hdr"],
  },
  {
    id: "isocell-hp2",
    date: "2023-01-17",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL HP2：2 亿像素手机图像传感器",
    summary:
      "三星于 2023 年 1 月 17 日介绍 ISOCELL HP2。有效分辨率 16384×12288，像素 0.6 μm，光学尺寸 1/1.3 英寸，面向旗舰手机。产品页写明 Tetra²pixel、Super QPD，以及 8K 30fps 视频。",
    productName: "ISOCELL HP2",
    productUrl: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp2",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["highres", "hdr", "lowlight"],
  },
  {
    id: "ov50h",
    date: "2023-01-03",
    companyId: "omnivision",
    category: "product",
    title: "OV50H：5000 万像素高端手机后置传感器",
    summary:
      "2023 年 1 月 3 日，豪威发布 OV50H。1/1.3 英寸、约 1.2 μm、5000 万像素，用于高端手机后置摄像头，支持 HDR，并首次采用水平/垂直四相位对焦。产品页写明基于 PureCel Plus-S 堆叠工艺。",
    productName: "OV50H",
    productUrl: "https://www.ovt.com/products/ov50h/",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
  },
  {
    id: "sc550xs",
    date: "2022",
    companyId: "smartsens",
    category: "product",
    title: "SC550XS：5000 万像素、1.0 μm 手机图像传感器",
    summary:
      "思特威 SC550XS 产品手册写明：5000 万像素、1.0 μm、光学尺寸 1/1.56 英寸，卷帘快门，带 PixGain HDR 和全像素对焦，接口为 MIPI。手册版权年为 2022，没有单独的月日。",
    productName: "SC550XS",
    productUrl: "https://smartsens.oss-cn-beijing.aliyuncs.com/web/img/1656395373227125381.pdf",
    linkLabel: "打开产品手册",
    applications: ["mobile"],
    technologies: ["hdr"],
  },
  {
    id: "gc50b2",
    date: null,
    companyId: "galaxycore",
    category: "product",
    title: "GC50B2：5000 万像素、1.0 μm 手机图像传感器",
    summary:
      "格科微手机图像传感器产品页列出 GC50B2：5000 万像素、1/1.56 英寸、1.0 μm、背照式、4C Bayer，全分辨率 15 fps，接口为 C/D-PHY。这一页同时列出多颗型号，GC50B2 是其中一行规格。",
    productName: "GC50B2",
    productUrl: "https://en.gcoreinc.com/products/index?subcid=4",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: [],
  },
  {
    id: "gmax0505",
    date: null,
    companyId: "gpixel",
    category: "product",
    title: "GMAX0505：1.1 英寸全局快门传感器",
    summary:
      "长光辰芯产品页介绍 GMAX0505：2.5 μm 电荷域全局快门，有效像素 5120×5120，光学尺寸 1.1 英寸，10 bit 最高 150 fps。页面写明面向工厂检测、自动化、交通监控和航测，状态为量产。发布日期页面未写明。",
    productName: "GMAX0505",
    productUrl: "https://www.gpixel.com/pro_details_11126.html",
    linkLabel: "打开产品页",
    applications: ["machine"],
    technologies: ["global"],
  },
  {
    id: "gsense4040",
    date: null,
    companyId: "gpixel",
    category: "product",
    title: "GSENSE4040：1680 万像素科学级 CMOS",
    summary:
      "长光辰芯产品页介绍 GSENSE4040：4096×4096、9 μm、卷帘快门。HDR 模式下暗噪声 3.7 e⁻、满阱 74.2 ke⁻，全分辨率 HDR 最高 24 fps。页面写明适用于医疗成像和天文；无微透镜版本用于 X 射线和显微 CT。",
    productName: "GSENSE4040",
    productUrl: "https://gpixel.com/en/pro_details_1199.html",
    linkLabel: "打开产品页",
    applications: ["scientific"],
    technologies: ["hdr", "lowlight"],
  },
  {
    id: "vb56g4a",
    date: null,
    companyId: "st",
    category: "product",
    title: "VB56G4A：150 万像素全局快门，面向驾驶员监测",
    summary:
      "意法半导体产品页列出 VB56G4A：150 万像素、2.61 μm、背照式全局快门、单色，面向车载驾驶员监测。940 nm 峰值量子效率 24%，全分辨率最高约 88 fps。页面状态为在产，没有单独的发布日期。",
    productName: "VB56G4A",
    productUrl: "https://www.st.com/en/imaging-and-photonics-solutions/vb56g4a.html",
    linkLabel: "打开产品页",
    applications: ["auto"],
    technologies: ["global", "stacked", "lowlight"],
  },
  {
    id: "ar0823at",
    date: null,
    companyId: "onsemi",
    category: "product",
    title: "AR0823AT：830 万像素 Hyperlux 车载传感器",
    summary:
      "安森美产品页列出 AR0823AT：Hyperlux 系列，2.1 μm、830 万像素、1/1.8 英寸，电子卷帘快门。页面写明全分辨率下最高约 150 dB 动态范围，并支持 LED 频闪抑制，用途包括前视辅助驾驶、电子后视镜和舱内监控。发布日期页面未写明。",
    productName: "AR0823AT",
    productUrl: "https://www.onsemi.com/products/sensors/image-sensors/ar0823at",
    linkLabel: "打开产品页",
    applications: ["auto"],
    technologies: ["hdr"],
  },
  {
    id: "genx320",
    date: null,
    companyId: "prophesee",
    category: "product",
    title: "GenX320：320×320 事件视觉传感器",
    summary:
      "Prophesee 产品页介绍 GenX320：320×320、像素 6.3 μm、光学尺寸 1/5 英寸，动态范围大于 140 dB，超低功耗模式可到 36 μW，尺寸约 3×4 mm。页面写明用于眼动追踪、常开相机和可穿戴设备。",
    productName: "GenX320",
    productUrl: "https://www.prophesee.ai/event-based-sensor-genx320/",
    linkLabel: "打开产品页",
    applications: ["consumer"],
    technologies: ["event"],
  },
  {
    id: "isocell-hp9",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL HP9：2 亿像素长焦图像传感器",
    summary:
      "三星于 2024 年 6 月 27 日发布 ISOCELL HP9。2 亿像素、0.56 μm、光学尺寸 1/1.4 英寸，面向手机长焦。产品页写明 Tetra²pixel，配合 3 倍长焦模组时变焦可到 12 倍，并支持 8K 30fps 与 4K 120fps。",
    productName: "ISOCELL HP9",
    productUrl: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp9/",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["highres", "lowlight", "hdr"],
  },
  {
    id: "isocell-gnj",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL GNJ：5000 万像素双像素手机传感器",
    summary:
      "三星于 2024 年 6 月 27 日同时发布 ISOCELL GNJ。5000 万像素、1.0 μm、光学尺寸 1/1.57 英寸，每个像素有两个光电二极管。产品页写明 Smart-ISO Pro 与 Staggered HDR，并降低 HDR 模式功耗。",
    productName: "ISOCELL GNJ",
    productUrl: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-gnj/",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["hdr", "lowlight"],
  },
  {
    id: "isocell-jn5",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL JN5：0.64 μm、5000 万像素小尺寸传感器",
    summary:
      "三星于 2024 年 6 月 27 日发布 ISOCELL JN5。5000 万像素、0.64 μm，可用于前置、广角和长焦。产品页写明片上硬件 remosaic、2 倍传感器内变焦，以及 Super QPD 2 全像素对焦。",
    productName: "ISOCELL JN5",
    productUrl: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-jn5/",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["highres", "hdr"],
  },
  {
    id: "ov50e",
    date: null,
    companyId: "omnivision",
    category: "product",
    title: "OV50E：5000 万像素手机后置传感器",
    summary:
      "豪威产品页介绍 OV50E：5000 万像素、1.008 μm、光学尺寸 1/1.55 英寸，基于 PureCel Plus-S 堆叠工艺。页面写明交错 HDR 与 DCG，四相位对焦覆盖 100%，动态范围可超过 100 dB。该页没有单独的发布日期。",
    productName: "OV50E",
    productUrl: "https://www.ovt.com/products/ov50e/",
    linkLabel: "打开产品页",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
  },
  {
    id: "ox03j10",
    date: "2024-01-09",
    companyId: "omnivision",
    category: "product",
    title: "OX03J10：300 万像素车载环视 SoC 图像传感器",
    summary:
      "豪威于 2024 年 1 月 9 日在 CES 发布 OX03J10。300 万像素、3.0 μm、光学尺寸约 1/2.44 英寸，把图像传感器和图像信号处理器做在一颗芯片上。产品页写明同时提供 140 dB 动态范围和 LED 频闪抑制，用于环视、后视和电子后视镜。",
    productName: "OX03J10",
    productUrl: "https://www.ovt.com/products/ox03j10/",
    linkLabel: "打开产品页",
    applications: ["auto"],
    technologies: ["hdr"],
  },
  {
    id: "imx570",
    date: null,
    companyId: "sony",
    category: "product",
    title: "IMX570：1/4.5 英寸间接飞行时间图像传感器",
    summary:
      "索尼工业产品页列出 IMX570：背照式间接飞行时间传感器，有效像素 648×488，像素 5 μm，光学尺寸 1/4.5 英寸，调制频率最高 120 MHz，接口为 MIPI。同一页还列出更大的 IMX556。页面没有写发布日期。",
    productName: "IMX570",
    productUrl: "https://www.sony-semicon.com/en/products/is/industry/tof/itof.html",
    linkLabel: "打开产品页",
    applications: ["depth", "machine"],
    technologies: ["tof"],
  },
  {
    id: "irs2877c",
    date: null,
    companyId: "infineon",
    category: "product",
    title: "IRS2877C：REAL3 飞行时间三维图像传感器",
    summary:
      "英飞凌产品页列出 IRS2877C：REAL3 飞行时间图像传感器，原生约 HVGA，可上采样到 640×480 的深度图，波长 940 nm，面向消费和工业。页面状态为 on request，没有写发布日期。",
    productName: "IRS2877C",
    productUrl: "https://www.infineon.com/part/IRS2877C",
    linkLabel: "打开产品页",
    applications: ["depth", "consumer"],
    technologies: ["tof"],
  },
  {
    id: "mlx75027",
    date: "2019-03-05",
    companyId: "melexis",
    category: "product",
    title: "MLX75027：VGA 间接飞行时间图像传感器",
    summary:
      "迈来芯于 2019 年 3 月 5 日发布 MLX75027，称其为车规级单芯片 VGA 飞行时间图像传感器。现行产品页写明分辨率 640×480，帧率最高约 120 fps，用于舱内监测、车外近距和工业三维相机。2023 年 6 月 20 日又公布了支持功能安全的 MLX75027RTI。",
    productName: "MLX75027",
    productUrl: "https://www.melexis.com/en/product/MLX75027/Gen3-VGA-time-of-flight-3D-camera",
    linkLabel: "打开产品页",
    applications: ["depth", "auto"],
    technologies: ["tof"],
  },
  {
    id: "vl53l8cx",
    date: null,
    companyId: "st",
    category: "product",
    title: "VL53L8CX：8×8 分区飞行时间传感器",
    summary:
      "意法半导体产品页列出 VL53L8CX：8×8 分区飞行时间传感器，测距最远约 400 cm，对角视场约 65°，可在每个分区做多目标测距。页面写明在产，寿命承诺起始日为 2023 年 12 月 1 日，没有单独的发布日期。",
    productName: "VL53L8CX",
    productUrl: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l8cx.html",
    linkLabel: "打开产品页",
    applications: ["depth", "consumer"],
    technologies: ["tof"],
  },
  {
    id: "spectricity-s1",
    date: null,
    companyId: "spectricity",
    category: "product",
    title: "S1：15 通道快照式多光谱图像传感器",
    summary:
      "Spectricity 产品页介绍 S1：可见光 400 到 700 nm、15 个通道、平均半高宽约 34 nm，空间分辨率 864×648，帧率 30 fps，滤光片与 CMOS 集成。页面没有写这颗传感器的发布日期。",
    productName: "S1",
    productUrl: "https://spectricity.com/products/",
    linkLabel: "打开产品页",
    applications: ["spectral", "mobile"],
    technologies: ["spectral"],
  },
  {
    id: "imec-snapshot-mosaic",
    date: null,
    companyId: "imec",
    category: "product",
    title: "Snapshot Mosaic：快照式高光谱图像传感器",
    summary:
      "imec 的产品说明写明：在 CMOS 图像传感器上按马赛克方式单片集成光谱滤光片，样品包括 16 或 25 个波段，底层传感器为 CMV2000，全局快门。说明文件没有标注发布日期。",
    productName: "Snapshot Mosaic",
    productUrl: "https://www.imec-int.com/drupal/sites/default/files/inline-files/SNm4x4%20snapshot%20hyperspectral%20imaging%20sensor_0.pdf",
    linkLabel: "打开产品手册",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
  },
  {
    id: "imx990",
    date: null,
    companyId: "sony",
    category: "product",
    title: "IMX990：可见光到短波红外的 134 万像素传感器",
    summary:
      "索尼产品页介绍 IMX990：SenSWIR 技术，约 134 万有效像素，像素可从可见光成像到短波红外，全局快门，光学尺寸 1/2 英寸。同一页还列出更小的 IMX991。页面没有写发布日期。",
    productName: "IMX990",
    productUrl: "https://www.sony-semicon.com/en/products/is/industry/swir/imx990-991.html",
    linkLabel: "打开产品页",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
  },
];

export function companyById(id) {
  return companies.find((company) => company.id === id);
}

export function applicationById(id) {
  return applications.find((item) => item.id === id);
}

export function technologyById(id) {
  return technologies.find((item) => item.id === id);
}

export function formatDate(date) {
  if (!date) return "日期未标明";
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-");
    return `${year}.${month}.${day}`;
  }
  return date;
}

export function sortedDevelopments(list = developments) {
  return [...list].sort((a, b) => {
    const aDate = a.date ?? "";
    const bDate = b.date ?? "";
    if (aDate && bDate) return bDate.localeCompare(aDate);
    if (aDate) return -1;
    if (bDate) return 1;
    return a.productName.localeCompare(b.productName);
  });
}

export function developmentsForCompany(companyId) {
  return sortedDevelopments(developments.filter((item) => item.companyId === companyId));
}

export function developmentsForApplication(applicationId) {
  return sortedDevelopments(
    developments.filter((item) => item.applications.includes(applicationId)),
  );
}

export function developmentsForTechnology(technologyId) {
  return sortedDevelopments(
    developments.filter((item) => item.technologies.includes(technologyId)),
  );
}
