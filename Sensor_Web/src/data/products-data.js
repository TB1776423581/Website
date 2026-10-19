import { depthProducts } from "./depth-products.js";
import { spectralProducts } from "./spectral-products.js";

export const products = [
  {
    id: "lytia",
    date: "2026-06-17",
    companyId: "sony",
    category: "product",
    title: "LYTIA：5000 万像素手机图像传感器",
    summary:
      "LYT-818 与 LYTIA L910 都是约 5000 万有效像素、1/1.28 英寸（对角 12.49 mm）、1.22 μm 的堆叠式手机传感器，彩色滤光片为 Quad Bayer。L910 是 LYTIA 系列第一款 LOFIC 产品，单次曝光动态范围 100 dB；LYT-818 用 UHCG 把随机噪声降到 0.95 e⁻，新 HDR 方式的动态范围是 86 dB。",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
    models: [
      {
        name: "LYTIA L910",
        date: "2026-06-17",
        url: "https://www.sony-semicon.com/en/info/2026/2026061701.html",
        linkLabel: "打开产品发布页",
        points: [
          "LYTIA 系列第一款采用 LOFIC 的产品，单次曝光动态范围 100 dB。",
          "同时使用 TCG-HDR 和 UHCG。发布页写明，相对 LYTIA 828，随机噪声大约降低 30%。",
          "可在 HDR 下做 4K 60 fps，量产出货时间为 2026 年夏季。",
          "用于手机，面向夜景、户外和省电的高画质视频。",
        ],
      },
      {
        name: "LYT-818",
        date: "2024-09-25",
        url: "https://www.sony-semicon.com/en/info/2024/2024092501.html",
        linkLabel: "打开产品发布页",
        points: [
          "归在 LYTIA 品牌下，主要用于手机主摄和副摄。",
          "UHCG 电路把随机噪声降到 0.95 e⁻。新的 HDR 方式在一次曝光里用三种增益读出，动态范围 86 dB。",
          "全像素 30 fps；1250 万像素 120 fps；4K 120 fps。量产发货时间为 2024 年 9 月中旬。",
        ],
      },
    ],
  },
  {
    id: "ox08d",
    date: "2025-10-07",
    companyId: "omnivision",
    category: "product",
    title: "OX08D：800 万像素车外图像传感器",
    summary:
      "OX08D10 与 OX08D20 都是 2.1 μm、TheiaCel 的 800 万像素车外传感器，用于辅助驾驶和自动驾驶。OX08D20 是 OX08D10 的升级，光学尺寸 1/1.729 英寸，HDR3 下 3840×2160 可达 60 fps。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "OX08D20",
        date: "2025-10-07",
        url: "https://www.ovt.com/products/ox08d20/",
        linkLabel: "打开产品页",
        points: [
          "产品页写明它是 OX08D10 的升级，面向车外辅助驾驶和自动驾驶。",
          "光学尺寸 1/1.729 英寸，像素 2.1 μm，卷帘快门。",
          "HDR3 模式下 3840×2160 为 60 fps，并采用与 Mobileye 合作的采集方式，减轻行驶中近处物体的运动模糊。",
          "网络安全对应 MIPI CSE 2.0。",
        ],
      },
      {
        name: "OX08D10",
        date: "2023-09-19",
        url: "https://www.ovt.com/products/ox08d10/",
        linkLabel: "打开产品页",
        points: [
          "2023 年 9 月 19 日在 AutoSens 布鲁塞尔发布。",
          "800 万像素、2.1 μm，采用 TheiaCel 与 LOFIC，面向需要抑制 LED 频闪的车外摄像头。",
          "用途包括前向辅助驾驶和自动驾驶。",
        ],
      },
    ],
  },
  {
    id: "isocell-hp",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL HP：2 亿像素手机图像传感器",
    summary:
      "HP1、HP2、HP3、HP9 都是 2 亿像素手机传感器。HP1 像素 0.64 μm、光学尺寸 1/1.22 英寸；HP2 为 0.6 μm、1/1.3 英寸；HP3 为 0.56 μm、发布稿写明 1/1.4 英寸；HP9 为 0.56 μm，面向长焦。",
    applications: ["mobile"],
    technologies: ["highres", "hdr", "lowlight"],
    models: [
      {
        name: "ISOCELL HP9",
        date: "2024-06-27",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp9/",
        linkLabel: "打开产品页",
        points: [
          "2024 年 6 月 27 日发布，面向手机长焦。",
          "2 亿像素、0.56 μm、光学尺寸 1/1.4 英寸，Tetra²pixel。",
          "配合 3 倍长焦模组时变焦可到 12 倍，并支持 8K 30 fps 与 4K 120 fps。",
        ],
      },
      {
        name: "ISOCELL HP2",
        date: "2023-01-17",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp2",
        linkLabel: "打开产品页",
        points: [
          "2023 年 1 月 17 日介绍，面向旗舰手机。",
          "有效分辨率 16384×12288，像素 0.6 μm，光学尺寸 1/1.3 英寸。",
          "Tetra²pixel、Super QPD，以及 8K 30 fps。",
        ],
      },
      {
        name: "ISOCELL HP3",
        date: "2022-06-23",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp3/",
        linkLabel: "打开产品页",
        points: [
          "2022 年 6 月 23 日发布，2 亿像素、0.56 μm。发布稿写明光学尺寸 1/1.4 英寸。",
          "Tetra²pixel 有三档：0.56 μm / 2 亿像素，1.12 μm / 5000 万像素，2.24 μm / 1250 万像素。",
          "Super QPD 同时看水平和垂直相位差。Smart-ISO Pro 与 Staggered HDR，14 bit，8K 最高 30 fps。",
          "4 倍无损变焦时仍是 1250 万像素。",
        ],
      },
      {
        name: "ISOCELL HP1",
        date: "2021-09-02",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-hp1/",
        linkLabel: "打开产品页",
        points: [
          "2021 年 9 月 2 日发布。有效分辨率 16384×12288，像素 0.64 μm，光学尺寸 1/1.22 英寸。",
          "16 像素合并后为 2.56 μm、1250 万像素。8K 30 fps 时先合成 1.28 μm、5000 万像素。",
          "Staggered HDR 与 Smart-ISO Pro。4K 120 fps，全分辨率 7.5 fps。",
        ],
      },
    ],
  },
  {
    id: "ov50",
    date: "2023-01-03",
    companyId: "omnivision",
    category: "product",
    title: "OV50：5000 万像素手机图像传感器",
    summary:
      "OV50A、OV50E、OV50H 都是约 5000 万像素的堆叠式手机传感器，四相位对焦覆盖整个阵列，并支持 HDR。OV50H 光学尺寸更大，为 1/1.3 英寸、约 1.2 μm；OV50E 与 OV50A 约为 1.0 μm。",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
    models: [
      {
        name: "OV50H",
        date: "2023-01-03",
        url: "https://www.ovt.com/products/ov50h/",
        linkLabel: "打开产品页",
        points: [
          "2023 年 1 月 3 日发布，用于高端手机后置摄像头。",
          "1/1.3 英寸、约 1.2 μm、5000 万像素，基于 PureCel Plus-S 堆叠工艺。",
          "支持 HDR，并首次采用水平/垂直四相位对焦。",
        ],
      },
      {
        name: "OV50E",
        date: "2022-08-08",
        url: "https://www.ovt.com/products/ov50e/",
        linkLabel: "打开产品页",
        points: [
          "2022 年 8 月 8 日发布，用于高端和主流手机后置主摄。",
          "5000 万像素、1.008 μm、光学尺寸 1/1.55 英寸，PureCel Plus-S 堆叠。",
          "交错 HDR 与 DCG，四相位对焦覆盖 100%，动态范围可超过 100 dB。",
          "近像素合并可输出 1250 万像素，等效约 2.0 μm。",
        ],
      },
      {
        name: "OV50A",
        date: "2021-02-16",
        url: "https://www.ovt.com/products/ov50a/",
        linkLabel: "打开产品页",
        points: [
          "产品页写明 2021 年 2 月 16 日发布，用于旗舰和高端手机的广角与超广角主摄。",
          "5000 万像素、1.0 μm；页面标题光学尺寸为 1/1.55 英寸，正文写 1/1.5 英寸。规格栏像素为 1.008 μm。",
          "四相位对焦覆盖 100%，PureCel Plus-S 堆叠，2 次或 3 次曝光的交错 HDR。",
          "50MP 或 8K 为 30 fps，1250 万像素为 60 fps。页面状态为 End-of-Life。",
        ],
      },
    ],
  },
  {
    id: "sc550xs",
    date: "2022",
    companyId: "smartsens",
    category: "product",
    title: "SC550XS：5000 万像素手机图像传感器",
    summary:
      "思特威 SC550XS 用于手机。5000 万像素、1.0 μm、光学尺寸 1/1.56 英寸，卷帘快门，带 PixGain HDR 和全像素对焦，接口为 MIPI。手册版权年为 2022。",
    applications: ["mobile"],
    technologies: ["hdr"],
    models: [
      {
        name: "SC550XS",
        date: "2022",
        url: "https://smartsens.oss-cn-beijing.aliyuncs.com/web/img/1656395373227125381.pdf",
        linkLabel: "打开产品手册",
        points: [
          "5000 万像素、1.0 μm、1/1.56 英寸，卷帘快门。",
          "PixGain HDR，全像素对焦，MIPI 接口。",
          "手册版权年为 2022，没有单独的月日。",
        ],
      },
    ],
  },
  {
    id: "gc50b2",
    date: "2023-12",
    companyId: "galaxycore",
    category: "product",
    title: "GC50：5000 万像素手机图像传感器",
    summary:
      "格科微手机产品页把 GC50B2 和 GC50E0 列在同一张表里，都是 5000 万像素、背照式、4C Bayer，全分辨率 15 fps。GC50B2 是 1.0 μm、1/1.56 英寸；GC50E0 是 0.7 μm、1/2.5 英寸。",
    applications: ["mobile"],
    technologies: [],
    models: [
      {
        name: "GC50B2",
        date: "2023-12",
        url: "https://www.gcoreinc.com/products/index",
        linkLabel: "打开产品页",
        points: [
          "5000 万像素、1/1.56 英寸、1.0 μm。",
          "背照式，4C Bayer，输出 RAW 10/12。",
          "全分辨率 15 fps，接口 C/D-PHY，封装 COB/COM。",
        ],
      },
      {
        name: "GC50E0",
        date: "2023-12",
        url: "https://www.gcoreinc.com/products/index",
        linkLabel: "打开产品页",
        points: [
          "与 GC50B2 列在同一产品表。5000 万像素、1/2.5 英寸、0.7 μm。",
          "背照式，4C Bayer，输出 RAW 10。",
          "全分辨率 15 fps，接口 D-PHY，封装 COB/COM。",
        ],
      },
    ],
  },
  {
    id: "gmax",
    date: "2018-09-20",
    companyId: "gpixel",
    category: "product",
    title: "GMAX：全局快门工业图像传感器",
    summary:
      "GMAX0505 与 GMAX3265 都是电荷域全局快门，用于工厂检测和机器视觉。0505 是 2.5 μm、1.1 英寸；3265 是 3.2 μm、2.3 英寸、约 6500 万像素。",
    applications: ["machine"],
    technologies: ["global"],
    models: [
      {
        name: "GMAX0505",
        date: "2018-05-29",
        url: "https://www.gpixel.com/pro_details_11126.html",
        linkLabel: "打开产品页",
        points: [
          "2018 年 5 月 29 日，长光辰芯公布这颗 26 MP 全局快门传感器。",
          "有效像素 5120×5120，像素 2.5 μm，光学尺寸 1.1 英寸。规格表分辨率写 26 MP，正文写 25 Megapixels。",
          "10 bit 最高 150 fps。峰值量子效率 65.5%（500 nm），满阱 6.5 ke⁻，12 bit、PGA 增益 5 倍时时间噪声 1.6 e⁻。",
          "快门效率超过 80 dB。面向工厂检测、自动化、交通监控和航测。",
        ],
      },
      {
        name: "GMAX3265",
        date: "2018-09-20",
        url: "https://gpixel.com/en/pro_details_1187.html",
        linkLabel: "打开产品页",
        points: [
          "2018 年 9 月 20 日公布。65 MP，有效像素 9344×7000，像素 3.2 μm。",
          "光学尺寸 2.3 英寸，对角线 37.4 mm。高速版 10 bit 为 71 fps，标准版 12 bit 为 31 fps。",
          "用于半导体、PCB、AOI 和屏幕检测。",
        ],
      },
    ],
  },
  {
    id: "gsense4040",
    date: "2017",
    companyId: "gpixel",
    category: "product",
    title: "GSENSE4040：1680 万像素科学级 CMOS",
    summary:
      "GSENSE4040 是 4096×4096、9 μm 的卷帘快门科学级传感器，光学尺寸 3.3 英寸。HDR 模式下暗噪声 3.7 e⁻、满阱 74.2 ke⁻，全分辨率 HDR 最高 24 fps。用于医疗成像、天文，无微透镜版本用于 X 射线和显微 CT。",
    applications: ["scientific"],
    technologies: ["hdr", "lowlight"],
    models: [
      {
        name: "GSENSE4040",
        date: "2017",
        url: "https://gpixel.com/en/pro_details_1199.html",
        linkLabel: "打开产品页",
        points: [
          "4096×4096、9 μm，光学尺寸 3.3 英寸，感光面积 36.864 mm × 36.864 mm，卷帘快门。",
          "HDR 模式暗噪声 3.7 e⁻，满阱 74.2 ke⁻，全分辨率 HDR 最高 24 fps。峰值量子效率 73.9%（600 nm）。",
          "带微透镜的版本用于医疗成像和天文；无微透镜版本用于 X 射线、带电粒子和显微 CT。",
        ],
      },
    ],
  },
  {
    id: "vb56g4a",
    date: "2022-05-05",
    companyId: "st",
    category: "product",
    title: "VB56G4A：150 万像素全局快门",
    summary:
      "VB56G4A 是 150 万像素、2.61 μm 的背照式全局快门单色传感器，面向车载驾驶员监测。940 nm 峰值量子效率 24%，全分辨率最高约 88 fps。",
    applications: ["auto"],
    technologies: ["global", "stacked", "lowlight"],
    models: [
      {
        name: "VB56G4A",
        date: "2022-05-05",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vb56g4a.html",
        linkLabel: "打开产品页",
        points: [
          "2022 年 5 月 5 日，意法半导体公布这颗驾驶员监测传感器。",
          "150 万像素、2.61 μm，背照式全局快门，单色，3D 堆叠。",
          "940 nm 峰值量子效率 24%，全分辨率最高约 88 fps。AEC-Q100 Grade 2。",
        ],
      },
    ],
  },
  {
    id: "ar0823at",
    date: "2023-05-09",
    companyId: "onsemi",
    category: "product",
    title: "AR0823AT：830 万像素 Hyperlux 车载传感器",
    summary:
      "AR0823AT 属于 Hyperlux，2.1 μm、830 万像素、1/1.8 英寸，电子卷帘快门。全分辨率下最高约 150 dB 动态范围，并支持 LED 频闪抑制，用于前视辅助驾驶、电子后视镜和舱内监控。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "AR0823AT",
        date: "2023-05-09",
        url: "https://www.onsemi.com/products/sensors/image-sensors/ar0823at",
        linkLabel: "打开产品页",
        points: [
          "2023 年 5 月 9 日，安森美发布 Hyperlux 时列入 AR0823AT。",
          "2.1 μm、830 万像素、1/1.8 英寸，3840×2160 最高约 60 fps。",
          "全分辨率最高约 150 dB，并支持 LED 频闪抑制。",
          "用途包括前视辅助驾驶、电子后视镜、舱内监控，以及感知和观看双输出。",
        ],
      },
    ],
  },
  {
    id: "ar0341at",
    date: "2023-05-09",
    companyId: "onsemi",
    category: "product",
    title: "AR0341AT：300 万像素 Hyperlux 车载传感器",
    summary:
      "AR0341AT 属于 Hyperlux，2.1 μm、300 万像素、1/3.6 英寸。第二代超级曝光像素在 LED 频闪抑制下达到 150 dB 动态范围，1920×1536 最高 60 fps，用于环视、泊车、电子后视镜和舱内监测。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "AR0341AT",
        date: "2023-05-09",
        url: "https://www.onsemi.com/products/sensors/image-sensors/ar0341at",
        linkLabel: "打开产品页",
        points: [
          "2023 年 5 月 9 日与 AR0823AT 一起作为 Hyperlux 的首批传感器公布。",
          "2.1 μm、300 万像素、1/3.6 英寸，电子卷帘快门，1920×1536 最高 60 fps。",
          "片上合成 HDR，最高超过 150 dB，并可压缩到 24、16 或 12 bit。",
          "按 ASIL-C 流程设计，硬件指标超过 ASIL-B。AEC-Q100 Grade 2，4 lane MIPI CSI-2。",
        ],
      },
    ],
  },
  {
    id: "genx320",
    date: "2023-10-16",
    companyId: "prophesee",
    category: "product",
    title: "GenX320：320×320 事件视觉传感器",
    summary:
      "GenX320 是 320×320 的事件视觉传感器，像素 6.3 μm，光学尺寸 1/5 英寸，动态范围大于 140 dB。超低功耗模式可到 36 μW，尺寸约 3×4 mm，用于眼动追踪、常开相机和可穿戴设备。",
    applications: ["consumer"],
    technologies: ["event"],
    models: [
      {
        name: "GenX320",
        date: "2023-10-16",
        url: "https://www.prophesee.ai/event-based-sensor-genx320/",
        linkLabel: "打开产品页",
        points: [
          "2023 年 10 月 16 日，Prophesee 公布 GenX320。",
          "320×320、像素 6.3 μm、光学尺寸 1/5 英寸，动态范围大于 140 dB。",
          "超低功耗模式可到 36 μW，裸片约 3×4 mm。",
          "用于眼动追踪、常开相机、可穿戴和边缘设备。",
        ],
      },
    ],
  },
  {
    id: "isocell-gn",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL GN：5000 万像素手机图像传感器",
    summary:
      "GN2、GN5、GNJ 都是 8160×6144 的 5000 万像素手机传感器，都有双像素对焦和 HDR。GN2 像素 1.4 μm、光学尺寸 1/1.12 英寸；GN5 与 GNJ 为 1.0 μm、1/1.57 英寸。",
    applications: ["mobile"],
    technologies: ["hdr", "lowlight"],
    models: [
      {
        name: "ISOCELL GNJ",
        date: "2024-06-27",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-gnj/",
        linkLabel: "打开产品页",
        points: [
          "2024 年 6 月 27 日发布。",
          "5000 万像素、1.0 μm、1/1.57 英寸，双光电二极管。",
          "Smart-ISO Pro 与 Staggered HDR，并降低 HDR 模式功耗。",
        ],
      },
      {
        name: "ISOCELL GN5",
        date: "2021-09-02",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-gn5/",
        linkLabel: "打开产品页",
        points: [
          "2021 年 9 月 2 日发布。有效分辨率 8160×6144，像素 1.0 μm，光学尺寸 1/1.57 英寸。",
          "Dual Pixel Pro，并在双像素上使用 FDTI。Tetrapixel 合并为 2.0 μm、1250 万像素。",
          "Staggered HDR 最高约 100 dB。8K 30 fps，4K 120 fps。产品状态为量产。",
        ],
      },
      {
        name: "ISOCELL GN2",
        date: "2021-02-23",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-gn2/",
        linkLabel: "打开产品页",
        points: [
          "2021 年 2 月 23 日发布。有效分辨率 8160×6144，像素 1.4 μm，光学尺寸 1/1.12 英寸。",
          "Tetrapixel 在暗光下合并为 2.8 μm。重排后输出可到 1 亿像素。",
          "Dual Pixel Pro，Smart-ISO Pro 与 Staggered HDR。8K 24 fps，全高清 480 fps。",
        ],
      },
    ],
  },
  {
    id: "isocell-jn",
    date: "2024-06-27",
    companyId: "samsung",
    category: "product",
    title: "ISOCELL JN：0.64 μm、5000 万像素手机传感器",
    summary:
      "JN1 与 JN5 都是 0.64 μm、5000 万像素的小尺寸手机传感器。JN1 光学尺寸 1/2.76 英寸，暗光下四像素合并为 1.28 μm。JN5 可用于前置到长焦，并有片上 2 倍变焦。",
    applications: ["mobile"],
    technologies: ["hdr", "lowlight"],
    models: [
      {
        name: "ISOCELL JN5",
        date: "2024-06-27",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-jn5/",
        linkLabel: "打开产品页",
        points: [
          "2024 年 6 月 27 日发布。5000 万像素、0.64 μm。",
          "可用于前置、广角、超广角和长焦。硬件 remosaic 做 2 倍传感器内变焦；配合 3 倍模组最高 6 倍。",
          "低功耗 Always-On，可用于前置运动识别。",
          "D-VTG 用两个传输栅改善暗光。DSG 在一帧内做 HDR。Super QPD 2 的对焦像素覆盖 100%。",
        ],
      },
      {
        name: "ISOCELL JN1",
        date: "2021-06-10",
        url: "https://semiconductor.samsung.com/image-sensor/mobile-image-sensor/isocell-jn1/",
        linkLabel: "打开产品页",
        points: [
          "2021 年 6 月 10 日发布。5000 万像素、0.64 μm，光学尺寸 1/2.76 英寸。",
          "可用于前置、超广角或长焦。Tetrapixel 在暗光下合并为 1.28 μm、1250 万像素。",
          "ISOCELL 2.0，场景间 HDR，Double Super PD。4K 60 fps，全高清 240 fps。",
        ],
      },
    ],
  },
  {
    id: "ox03j10",
    date: "2024-01-09",
    companyId: "omnivision",
    category: "product",
    title: "OX03J10：300 万像素车载环视图像传感器",
    summary:
      "OX03J10 是 300 万像素、3.0 μm、光学尺寸约 1/2.44 英寸的车载传感器，把图像传感器和图像信号处理器做在一颗芯片上。同时提供 140 dB 动态范围和 LED 频闪抑制，用于环视、后视和电子后视镜。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "OX03J10",
        date: "2024-01-09",
        url: "https://www.ovt.com/products/ox03j10/",
        linkLabel: "打开产品页",
        points: [
          "2024 年 1 月 9 日在 CES 发布。",
          "300 万像素、3.0 μm、约 1/2.44 英寸，传感器与图像信号处理器同芯片。",
          "140 dB 动态范围，并抑制 LED 频闪。用于环视、后视和电子后视镜。",
        ],
      },
    ],
  },
  {
    id: "imx-itof",
    date: "2020-11-24",
    companyId: "sony",
    category: "product",
    title: "IMX556 / IMX570：间接飞行时间图像传感器",
    summary:
      "IMX556 与 IMX570 是背照式间接飞行时间传感器，都用 MIPI，推荐光源 850 nm 或 940 nm。IMX556 像素 10 μm、光学尺寸 1/2 英寸；IMX570 像素 5 μm、光学尺寸 1/4.5 英寸。用于工业测距。",
    applications: ["depth", "machine"],
    technologies: ["tof"],
    models: [
      {
        name: "IMX570",
        date: "2020-11-24",
        url: "https://www.sony-semicon.com/en/products/is/industry/tof/itof.html",
        linkLabel: "打开产品页",
        points: [
          "有效像素 648×488，像素 5 μm，光学尺寸 1/4.5 英寸。",
          "VGA 最高 56 fps，调制频率 2 到 120 MHz，接口 MIPI。",
          "推荐光源 850 nm 或 940 nm。",
        ],
      },
      {
        name: "IMX556",
        date: "2020-11-24",
        url: "https://www.sony-semicon.com/en/products/is/industry/tof/itof.html",
        linkLabel: "打开产品页",
        points: [
          "与 IMX570 列在同一产品页。有效像素 642×484，像素 10 μm，光学尺寸 1/2 英寸。",
          "VGA 最高 60 fps，调制频率 4 到 100 MHz，接口 MIPI。",
          "推荐光源 850 nm 或 940 nm。",
        ],
      },
    ],
  },
  {
    id: "irs2877c",
    date: "2020-01",
    companyId: "infineon",
    category: "product",
    title: "IRS2877C：REAL3 飞行时间三维图像传感器",
    summary:
      "IRS2877C 是 REAL3 飞行时间图像传感器，原生约 HVGA，可上采样到 640×480 的深度图，波长 940 nm，面向消费和工业。",
    applications: ["depth", "consumer"],
    technologies: ["tof"],
    models: [
      {
        name: "IRS2877C",
        date: "2020-01",
        url: "https://www.infineon.com/part/IRS2877C",
        linkLabel: "打开产品页",
        points: [
          "REAL3 飞行时间图像传感器，原生约 HVGA，可上采样到 640×480。",
          "波长 940 nm，面向消费和工业。",
          "产品页状态为 on request。",
        ],
      },
    ],
  },
  {
    id: "irs2976c",
    date: "2023-02-24",
    companyId: "infineon",
    category: "product",
    title: "IRS2976C：REAL3 飞行时间图像传感器",
    summary:
      "IRS2976C 是 REAL3 的 VGA 飞行时间传感器，深度点 640×480，可与 IRS2877C 替换安装。正面照光像素的量子效率达到 30% 以上，传感器面积 23 mm²，并通过 Google Class 3 人脸识别认证。",
    applications: ["depth", "consumer"],
    technologies: ["tof"],
    models: [
      {
        name: "IRS2976C",
        date: "2023-02-24",
        url: "https://www.infineon.com/technology-news/2023/infpss202302-067",
        linkLabel: "打开产品发布页",
        points: [
          "2023 年 2 月 24 日公布，REAL3 VGA 飞行时间传感器。",
          "系统分辨率 640×480。正面照光像素量子效率 30% 以上。",
          "面积 23 mm²，可与 IRS2877C 替换安装。",
          "通过 Google Class 3（Strong）人脸识别认证，可在屏幕下工作。",
        ],
      },
    ],
  },
  {
    id: "mlx75027",
    date: "2019-03-05",
    companyId: "melexis",
    category: "product",
    title: "MLX75027：VGA 间接飞行时间图像传感器",
    summary:
      "MLX75027 是车规级单芯片 VGA 飞行时间图像传感器，分辨率 640×480，帧率最高约 120 fps，用于舱内监测、车外近距和工业三维相机。2023 年 6 月 20 日又公布了支持功能安全的 MLX75027RTI。",
    applications: ["depth", "auto"],
    technologies: ["tof"],
    models: [
      {
        name: "MLX75027",
        date: "2019-03-05",
        url: "https://www.melexis.com/en/product/MLX75027/Gen3-VGA-time-of-flight-3D-camera",
        linkLabel: "打开产品页",
        points: [
          "2019 年 3 月 5 日发布，车规级单芯片 VGA 飞行时间图像传感器。",
          "分辨率 640×480，帧率最高约 120 fps。",
          "用于舱内监测、车外近距和工业三维相机。",
          "2023 年 6 月 20 日公布支持功能安全的 MLX75027RTI。",
        ],
      },
    ],
  },
  {
    id: "vl53l",
    date: "2023",
    companyId: "st",
    category: "product",
    title: "VL53L：飞行时间测距传感器",
    summary:
      "这一页对照 VL53L1、L3、L4、L5、L7 和 L8。分区型最远大约 350 到 400 cm，VL53L1 的测距模式最远 800 cm。都用 940 nm VCSEL。",
    applications: ["depth", "consumer"],
    technologies: ["tof"],
    models: [
      {
        name: "VL53L8CX",
        date: "2023",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l8cx.html",
        linkLabel: "打开产品页",
        points: [
          "8×8 分区，测距最远约 400 cm，对角视场约 65°。",
          "每个分区可做多目标测距。产品页写明在产。",
          "寿命承诺起始日为 2023 年 12 月 1 日。",
        ],
      },
      {
        name: "VL53L5CX",
        date: "2021",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l5cx.html",
        linkLabel: "打开产品页",
        points: [
          "直接飞行时间，分区输出可选 4×4 或 8×8，测距最远 400 cm。",
          "对角视场 65°，帧率能力 60 Hz，940 nm VCSEL，接收端为 SPAD。",
          "模块尺寸 6.4 × 3.0 × 1.5 mm。寿命承诺起始日为 2021 年 7 月 1 日。",
        ],
      },
      {
        name: "VL53L7CX",
        date: "2023",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l7cx.html",
        linkLabel: "打开产品页",
        points: [
          "对角视场 90°，方形视场 60°×60°。分区可选 4×4 或 8×8，最远 350 cm，帧率能力 60 Hz。",
          "940 nm VCSEL，Class 1。模块 6.4 × 3.0 × 1.6 mm。与 VL53L5CX 引脚和驱动兼容。",
          "寿命承诺起始日为 2023 年 12 月 1 日。",
        ],
      },
      {
        name: "VL53L4CX",
        date: "2023",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l4cx.html",
        linkLabel: "打开产品页",
        points: [
          "单区测距，0 mm 到 6 m，短距线性到 10 mm，视场 18°。",
          "940 nm VCSEL，Class 1。模块 4.4 × 2.4 × 1 mm。可做多目标探测。",
          "寿命承诺起始日为 2023 年 12 月 1 日。",
        ],
      },
      {
        name: "VL53L3CX",
        date: "2022",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l3cx.html",
        linkLabel: "打开产品页",
        points: [
          "第三代 FlightSense。全视场下探测可超过 300 cm，典型全视场 25°。",
          "940 nm VCSEL。模块 4.4 × 2.4 × 1 mm。可做多目标探测。",
          "寿命承诺起始日为 2022 年 12 月 31 日。",
        ],
      },
      {
        name: "VL53L1",
        date: "2021",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l1.html",
        linkLabel: "打开产品页",
        points: [
          "测距模式最远 800 cm。60 Hz 时测距能力到 300 cm。",
          "分区扫描可选 2×2、3×3、4×4。940 nm，Class 1。模块 4.9 × 2.5 × 1.56 mm。",
          "在产型号 VL53L1CB 的寿命承诺起始日为 2021 年 12 月 31 日。",
        ],
      },
      {
        name: "VL53L4CD",
        date: "2023",
        url: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l4cd.html",
        linkLabel: "打开产品页",
        points: [
          "近距离测距，1 mm 到 1200 mm，对角视场 18°，测距频率最高 100 Hz。",
          "940 nm VCSEL，模块 4.4 × 2.4 × 1 mm。超低功耗模式可到 55 μA。",
          "寿命承诺起始日为 2023 年 12 月 1 日。",
        ],
      },
    ],
  },
  {
    id: "spectricity-s1",
    date: "2023-01-05",
    companyId: "spectricity",
    category: "product",
    title: "S1：15 通道快照式多光谱图像传感器",
    summary:
      "S1 覆盖可见光 400 到 700 nm，15 个通道，平均半高宽约 34 nm，空间分辨率 864×648，帧率 30 fps，滤光片与 CMOS 集成，面向移动设备。",
    applications: ["spectral", "mobile"],
    technologies: ["spectral"],
    models: [
      {
        name: "S1",
        date: "2023-01-05",
        url: "https://spectricity.com/products/",
        linkLabel: "打开产品页",
        points: [
          "2023 年 1 月 5 日，Spectricity 在 CES 介绍 S1。",
          "可见光 400 到 700 nm，15 个通道，平均半高宽约 34 nm。",
          "空间分辨率 864×648，帧率 30 fps，滤光片与 CMOS 集成。",
        ],
      },
    ],
  },
  {
    id: "imec-snapshot",
    date: "2015",
    companyId: "imec",
    category: "product",
    title: "Snapshot Mosaic：快照式高光谱图像传感器",
    summary:
      "imec 在 CMOS 图像传感器上按马赛克单片集成光谱滤光片。说明文件里的样品有 16 或 25 个波段，底层为 CMV2000，全局快门，最高约 340 个高光谱数据立方每秒。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
    models: [
      {
        name: "Snapshot Mosaic 4×4",
        date: "2015",
        url: "https://www.imec-int.com/drupal/sites/default/files/inline-files/SNm4x4%20snapshot%20hyperspectral%20imaging%20sensor_0.pdf",
        linkLabel: "打开产品手册",
        points: [
          "16 个波段，波长 470 到 630 nm。",
          "每个波段空间分辨率 512×256。半高宽小于 15 nm。",
          "底层为 CMOSIS CMV2000，像素 5.5 μm，全局快门。",
        ],
      },
      {
        name: "Snapshot Mosaic 5×5",
        date: "2015",
        url: "https://www.imec-int.com/drupal/sites/default/files/inline-files/SNm4x4%20snapshot%20hyperspectral%20imaging%20sensor_0.pdf",
        linkLabel: "打开产品手册",
        points: [
          "25 个波段，波长 600 到 1000 nm。",
          "每个波段空间分辨率 409×216。半高宽小于 15 nm。",
          "与 4×4 一样基于 CMV2000，最高约 340 个高光谱数据立方每秒。",
        ],
      },
    ],
  },
  {
    id: "imx990",
    date: "2020-05-12",
    companyId: "sony",
    category: "product",
    title: "IMX990 / IMX991：可见光到短波红外图像传感器",
    summary:
      "IMX990 与 IMX991 都用 SenSWIR，像素 5 μm，全局快门，可从可见光成像到短波红外，接口为 SLVS。IMX990 约 134 万像素、1/2 英寸；IMX991 约 34 万像素、1/4 英寸。用于工业检查、识别和测量。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
    models: [
      {
        name: "IMX990",
        date: "2020-05-12",
        url: "https://www.sony-semicon.com/en/products/is/industry/swir/imx990-991.html",
        linkLabel: "打开产品页",
        points: [
          "2020 年 5 月 12 日公布。有效像素 1296×1032，约 134 万，对角 8.2 mm（1/2 英寸）。",
          "像素 5 μm，全局快门，数字输出 SLVS。",
          "波长覆盖约 0.4 μm 到 1.7 μm。",
        ],
      },
      {
        name: "IMX991",
        date: "2020-05-12",
        url: "https://www.sony-semicon.com/en/products/is/industry/swir/imx990-991.html",
        linkLabel: "打开产品页",
        points: [
          "与 IMX990 同一天公布，列在同一产品页。",
          "有效像素 656×520，约 34 万，对角 4.1 mm（1/4 英寸）。",
          "像素同为 5 μm，全局快门，SLVS。",
        ],
      },
    ],
  },
  {
    id: "imx992",
    date: "2023-11",
    companyId: "sony",
    category: "product",
    title: "IMX992 / IMX993：高分辨率短波红外图像传感器",
    summary:
      "IMX992 与 IMX993 用 SenSWIR，像素 3.45 μm，可从可见光成像到短波红外，接口为 SLVS 或 MIPI。IMX992 约 532 万像素、1/1.4 英寸；IMX993 约 321 万像素、1/1.8 英寸。用于工业检查、识别和测量。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
    models: [
      {
        name: "IMX992",
        date: "2023-11",
        url: "https://www.sony-semicon.com/en/products/is/industry/swir/imx992-993.html",
        linkLabel: "打开产品页",
        points: [
          "有效像素 2592×2056，约 532 万，对角 11.4 mm（1/1.4 英寸），像素 3.45 μm。",
          "8 bit 全像素最高 131 fps。1200 nm 量子效率大于 75%。",
          "全局快门；打开 DRRS 时为卷帘快门。波长约 400 nm 到 1700 nm。",
        ],
      },
      {
        name: "IMX993",
        date: "2023-11",
        url: "https://www.sony-semicon.com/en/products/is/industry/swir/imx992-993.html",
        linkLabel: "打开产品页",
        points: [
          "与 IMX992 列在同一产品页。有效像素 2080×1544，约 321 万。",
          "对角 8.9 mm（1/1.8 英寸），像素同为 3.45 μm。",
          "8 bit 全像素最高 173 fps。接口同为 SLVS 或 MIPI。",
        ],
      },
    ],
  },
  {
    id: "gsprint4521",
    date: "2020-10-14",
    companyId: "gpixel",
    category: "product",
    title: "GSPRINT4521：2100 万像素高速全局快门",
    summary:
      "GSPRINT4521 是 2100 万像素、4.5 μm 的电荷域全局快门传感器，画幅约 APS，对角线 29.5 mm。8 bit 全分辨率最高 1000 fps，用于高速 4K、工业检测、运动分析和生命科学成像。",
    applications: ["machine", "scientific"],
    technologies: ["global", "hdr"],
    models: [
      {
        name: "GSPRINT4521",
        date: "2020-10-14",
        url: "https://gpixel.com/en/pro_details_1192.html",
        linkLabel: "打开产品页",
        points: [
          "2020 年 10 月 14 日公布，有效像素 5120×4096。",
          "4.5 μm 电荷域全局快门，对角线 29.5 mm。",
          "满阱 32 ke⁻，读出噪声小于 3 e⁻，动态范围超过 69 dB；双增益 HDR 可到 81 dB。",
          "8 bit 全分辨率 1000 fps。1024 行开窗的三维激光轮廓模式可超过 3500 fps。",
        ],
      },
    ],
  },
  {
    id: "ov64b",
    date: "2020-04-28",
    companyId: "omnivision",
    category: "product",
    title: "OV64B：6400 万像素手机图像传感器",
    summary:
      "OV64B 是 6400 万像素、0.7 μm、1/2 英寸的堆叠式手机传感器，用于超薄机身的主摄、广角、超广角或长焦。8K 为 30 fps，暗光下可合并成 1600 万像素。",
    applications: ["mobile"],
    technologies: ["stacked", "hdr"],
    models: [
      {
        name: "OV64B",
        date: "2020-04-28",
        url: "https://www.ovt.com/products/ov64b/",
        linkLabel: "打开产品页",
        points: [
          "产品页写明 2020 年 4 月 28 日发布。分辨率 9248×6944，像素规格栏为 0.702 μm。",
          "PureCel Plus-S 堆叠，卷帘快门。全分辨率 15 fps，8K 30 fps。",
          "近像素合并输出 1600 万像素，等效约 1.4 μm。支持 2 次或 3 次曝光的交错 HDR。",
        ],
      },
    ],
  },
  {
    id: "ov48c",
    date: "2020-01-06",
    companyId: "omnivision",
    category: "product",
    title: "OV48C：4800 万像素手机图像传感器",
    summary:
      "OV48C 是约 4800 万像素、1.2 μm 的堆叠式手机传感器，片上双转换增益 HDR，用于旗舰手机主摄。全分辨率 15 fps，4 像素合并后 1200 万像素为 60 fps。",
    applications: ["mobile"],
    technologies: ["stacked", "hdr", "lowlight"],
    models: [
      {
        name: "OV48C",
        date: "2020-01-06",
        url: "https://www.ovt.com/products/ov48c/",
        linkLabel: "打开产品页",
        points: [
          "2020 年 1 月 6 日在 CES 发布。分辨率 8064×6048。",
          "正文写像素 1.2 μm、光学尺寸 1/1.3 英寸；规格栏为 1.197 μm、1/1.32 英寸。",
          "片上 DCG HDR，也可做交错 HDR。4 像素合并等效约 2.4 μm，4K 60 fps。",
        ],
      },
    ],
  },
  {
    id: "ox08b40",
    date: "2019-12",
    companyId: "omnivision",
    category: "product",
    title: "OX08B40：830 万像素车载前视传感器",
    summary:
      "OX08B40 是 830 万像素、2.1 μm、1/1.73 英寸的前视车载传感器。片上 HALE 同时做 HDR 和 LED 频闪抑制，动态范围 140 dB，3840×2160 四次采集为 36 fps。",
    applications: ["auto"],
    technologies: ["stacked", "hdr"],
    models: [
      {
        name: "OX08B40",
        date: "2019-12",
        url: "https://www.ovt.com/products/ox08b40/",
        linkLabel: "打开产品页",
        points: [
          "豪威后来的说明写明 OX08B40 于 2019 年 12 月推出。",
          "3840×2160、2.1 μm、1/1.73 英寸，PureCel Plus-S 堆叠，卷帘快门。",
          "第一次曝光用 DCG 达到 82 dB。四次采集 4K 为 36 fps，并支持 LED 频闪抑制。",
          "面向前视辅助驾驶和自动驾驶，安全特性对应 ASIL C。",
        ],
      },
    ],
  },
  {
    id: "ox03c10",
    date: "2020-06-02",
    companyId: "omnivision",
    category: "product",
    title: "OX03C10：250 万像素车载观看传感器",
    summary:
      "OX03C10 是 250 万像素、3.0 μm、1/2.6 英寸的车载观看传感器。140 dB HDR，并抑制 LED 频闪，1920×1280 最高 60 fps，用于后视、环视和电子后视镜。",
    applications: ["auto"],
    technologies: ["stacked", "hdr"],
    models: [
      {
        name: "OX03C10",
        date: "2020-06-02",
        url: "https://www.ovt.com/products/ox03c10/",
        linkLabel: "打开产品页",
        points: [
          "2020 年 6 月 2 日发布。分辨率 1920×1280，像素 3.0 μm，光学尺寸 1/2.6 英寸。",
          "PureCel Plus 堆叠，Deep Well 与 DCG。140 dB，最多 4 次采集，并支持 LED 频闪抑制。",
          "全分辨率 60 fps。安全特性面向 ASIL C。用于后视、环视和电子后视镜。",
        ],
      },
    ],
  },
  {
    id: "ov2311",
    date: "2017-05-22",
    companyId: "omnivision",
    category: "product",
    title: "OV2311：200 万像素全局快门驾驶员监测传感器",
    summary:
      "OV2311 是 200 万像素、3 μm 的全局快门单色传感器，光学尺寸 1/2.9 英寸，面向驾驶员监测。1600×1300 最高 60 fps，并加强近红外灵敏度。",
    applications: ["auto"],
    technologies: ["global", "lowlight"],
    models: [
      {
        name: "OV2311",
        date: "2017-05-22",
        url: "https://www.ovt.com/products/ov2311/",
        linkLabel: "打开产品页",
        points: [
          "2017 年 5 月 22 日发布。分辨率 1600×1300，像素 3 μm，光学尺寸 1/2.9 英寸。",
          "OmniPixel3-GS 全局快门，全分辨率 60 fps。封装为 a-CSP。",
          "AEC-Q100 Grade 2。用于驾驶员监测和视线追踪。",
        ],
      },
    ],
  },
  {
    id: "imx735",
    date: "2023-09-12",
    companyId: "sony",
    category: "product",
    title: "IMX735：1742 万像素车载图像传感器",
    summary:
      "IMX735 是约 1742 万有效像素、2.1 μm 的车载传感器，对角 13.70 mm。同时做 HDR 和 LED 频闪抑制时动态范围 106 dB，动态范围优先模式为 130 dB。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "IMX735",
        date: "2023-09-12",
        url: "https://www.sony-semicon.com/en/news/2023/2023091201.html",
        linkLabel: "打开产品发布页",
        points: [
          "2023 年 9 月 12 日公布。有效像素 3017×5777，约 1742 万，像素 2.1 μm。",
          "对角 13.70 mm（1/1.17 英寸）。全像素 3AD 45 fps，4AD 40 fps。",
          "带 LED 频闪抑制时动态范围 106 dB，动态范围优先模式 130 dB。",
          "接口 MIPI CSI-2。量产按 AEC-Q100 Grade 2，开发流程对应 ASIL-B(D)。",
        ],
      },
    ],
  },
  {
    id: "ar0820at",
    date: "2018-01",
    companyId: "onsemi",
    category: "product",
    title: "AR0820AT：830 万像素车载图像传感器",
    summary:
      "现行产品页上的 AR0820AT 是 830 万像素、2.1 μm、1/2 英寸的车载传感器。片上 HDR 最高约 140 dB，3840×2160 在 3 次曝光 HDR 下最高约 40 fps，用于前视辅助驾驶。",
    applications: ["auto"],
    technologies: ["hdr"],
    models: [
      {
        name: "AR0820AT",
        date: "2018-01",
        url: "https://www.onsemi.com/products/sensors/image-sensors/ar0820at",
        linkLabel: "打开产品页",
        points: [
          "安森美在 2018 年 1 月把 AR0820AT 作为车载传感器平台的一员公布。现行产品页写的是 2.1 μm 背照像素。",
          "有效阵列 3848×2168，1/2 英寸，电子卷帘快门。",
          "3 次曝光 HDR 下 3840×2160 最高约 40 fps，片上 HDR 约 140 dB。",
          "故障检测用于支持 ASIL B。接口为 4 lane MIPI CSI-2。",
        ],
      },
    ],
  },
  {
    id: "imx459",
    date: "2021-09-06",
    companyId: "sony",
    category: "product",
    title: "IMX459：索尼车载 SPAD 深度传感器",
    summary:
      "IMX459 与 IMX479 列在同一车载 SPAD dToF 页。规格表写 IMX459 为 597×168、约 10 万 SPAD 像素、1/2.9 英寸；IMX479 为 105×1560、约 16.4 万像素、1 英寸。",
    applications: ["depth", "auto"],
    technologies: ["tof", "stacked"],
    models: [
      {
        name: "IMX459",
        date: "2021-09-06",
        url: "https://www.sony-semicon.com/en/products/is/automotive/tof.html",
        linkLabel: "打开产品页",
        points: [
          "2021 年 9 月 6 日发布。规格表：597×168，约 10 万 SPAD 像素，垂直有效 dToF 像素 192。",
          "像元 3×3 SPAD。对角 6.25 mm（1/2.9 英寸），单元 10.08 μm。可工作于线模式或面阵模式。",
          "905 nm 下光子探测效率 24%。接口 MIPI CSI-2。",
          "同页特性说明写 15 cm 距离分辨率、最远约 300 m。特性段的 189×600 与规格表的 597×168 不一致，以规格表为准。",
        ],
      },
      {
        name: "IMX479",
        date: "",
        url: "https://www.sony-semicon.com/en/products/is/automotive/tof.html",
        linkLabel: "打开产品页",
        points: [
          "规格表标为 New。105×1560，约 16.4 万 SPAD 像素，垂直有效 dToF 像素 520。",
          "像元 3×3 SPAD。对角 15.8 mm（1 英寸），单元 10.08 μm。线模式。",
          "940 nm 下光子探测效率 37%，死时间约 6 ns。接口 MIPI CSI-2。",
        ],
      },
    ],
  },
  ...depthProducts,
  ...spectralProducts,
];
