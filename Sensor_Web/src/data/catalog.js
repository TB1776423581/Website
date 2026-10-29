import { products } from "./products-data.js";
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
    description: "输出深度或三维图像的传感器，包括飞行时间、分区测距和激光雷达。",
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
    name: "飞行时间",
    description: "用飞行时间测量物体远近。间接飞行时间是 iTOF，直接飞行时间是 dTOF。",
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
      "LYTIA 720 的发布页写明量产出货时间为 2026 年 11 月初。LYTIA L910 的公开资料写明，量产出货时间为 2026 年夏季。LYTIA 901 的发布页写明量产出货时间为 2025 年 11 月，并从此使用「LYTIA + 产品编号」命名。IMX927 的发布稿写明样品计划 2025 年 11 月中旬出货。",
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
      "产品包括全局快门 GMAX、高速全局快门 GSPRINT，以及科学成像 GSENSE。",
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
  {
    id: "hesai",
    name: "禾赛",
    nameEn: "Hesai",
    region: "国内",
    hq: "上海",
    summary: "做车载和机器人激光雷达，产品页覆盖长距前视、补盲和 360° 扫描。",
  },
  {
    id: "robosense",
    name: "速腾聚创",
    nameEn: "RoboSense",
    region: "国内",
    hq: "深圳",
    summary: "做 MEMS、固态补盲和机械式激光雷达，用于汽车和机器人。",
  },
  {
    id: "ouster",
    name: "Ouster",
    nameEn: "Ouster",
    region: "海外",
    hq: "美国",
    summary: "做数字激光雷达。产品页列出 OS0、OS1、OS2，以及 OSDome 和 OS1 Max。",
  },
  {
    id: "livox",
    name: "览沃",
    nameEn: "Livox",
    region: "国内",
    hq: "中国",
    summary: "做混合固态激光雷达，用于低速机器人、测绘和车载远距离探测。",
  },
  {
    id: "benewake",
    name: "北醒",
    nameEn: "Benewake",
    region: "国内",
    hq: "北京",
    summary: "做单点测距模组和三维激光雷达，产品页覆盖近距到数百米。",
  },
  {
    id: "hokuyo",
    name: "北阳",
    nameEn: "Hokuyo Automatic",
    region: "海外",
    hq: "日本",
    summary: "做扫描式激光测距仪，产品列表包括二维扫描和三维激光雷达。",
  },
  {
    id: "seyond",
    name: "图达通",
    nameEn: "Seyond",
    region: "海外",
    hq: "森尼韦尔",
    summary: "做图像级激光雷达。产品页列出 Falcon、Robin 和 Hummingbird。",
  },
  {
    id: "velodyne",
    name: "Velodyne",
    nameEn: "Velodyne Lidar",
    region: "海外",
    hq: "美国",
    summary: "机械式激光雷达。Ouster 于 2023-02-10 完成与 Velodyne 的合并，合并后公司名为 Ouster。型号仍按 VLP 和 VLS 单独列出。",
  },
  {
    id: "sick",
    name: "SICK",
    nameEn: "SICK",
    region: "海外",
    hq: "德国",
    summary:
      "做多层和二维激光雷达，产品手册列出 multiScan、MRS 和 picoScan。产品家族页还列出多层激光雷达 LD-MRS。",
  },
  {
    id: "analog",
    name: "亚德诺",
    nameEn: "Analog Devices",
    region: "海外",
    hq: "美国",
    summary: "做间接飞行时间深度模组，用于机器视觉和机器人。",
  },
  {
    id: "leishen",
    name: "镭神智能",
    nameEn: "LSLiDAR",
    region: "国内",
    hq: "深圳",
    summary: "做 1550 nm 与 905 nm 激光雷达。2024 年 10 月的产品手册列出图像级、补盲和机械式型号。",
  },
  {
    id: "aeva",
    name: "Aeva",
    nameEn: "Aeva",
    region: "海外",
    hq: "美国",
    summary: "做调频连续波 4D 激光雷达，产品页上的 Atlas 可同时测距和测速。",
  },
  {
    id: "valeo",
    name: "法雷奥",
    nameEn: "Valeo",
    region: "海外",
    hq: "法国",
    summary: "做车载长距激光雷达。产品目录页介绍 SCALA Gen 3。",
  },
  {
    id: "zvision",
    name: "一径科技",
    nameEn: "ZVISION",
    region: "国内",
    hq: "北京",
    summary: "做短距补盲激光雷达。英文产品页列出 ML-30s 和 ML-30s+。",
  },
  {
    id: "luminar",
    name: "Luminar",
    nameEn: "Luminar",
    region: "海外",
    hq: "美国",
    summary: "做 1550 nm 车载激光雷达。公司年报介绍 Iris 系列。",
  },
  {
    id: "cepton",
    name: "Cepton",
    nameEn: "Cepton",
    region: "海外",
    hq: "圣何塞",
    summary: "做车载激光雷达。Vista 产品页列出 Vista-X90 和 Vista-X120 Plus。小糸制作所 2025 年 1 月 7 日完成收购，Cepton 成为其子公司，并从纳斯达克退市。",
  },
  {
    id: "hamamatsu",
    name: "滨松光子",
    nameEn: "Hamamatsu Photonics",
    region: "海外",
    hq: "日本",
    summary:
      "做分光用线阵和 InGaAs 面阵。产品页给出紫外到短波的光谱响应范围。约 2026 年 3 月的选型指南列出 640×512 的 G1656。面阵产品页还包括两级制冷的 G13393。线阵产品页还包括 G920、G9494、G10768、G11135、G11475 到 G11478、G11508、G11608、G11620、G12230、G13913、G14237、G14714、G16823 到 G16825 和 G17225。分光用 CMOS 线阵产品页还包括 S8377、S8378、S9226、S9227、S10121 到 S10124、S11639-11、S13014、S13496、S14739-20、S15739、S15796、S15908、S15909、S16514-2048-11、S16528-1024-11 和 S16596-4096-11。分光用线阵索引把前照式 CCD S16929-01 标成新。分光用 NMOS 线阵产品页列出 S8380 与 S8381，类型写成 Infrared enhanced。分光用 NMOS 线阵产品页还列出 S3901 与 S3904，石英窗型号的类型写成 Current output type（Standard type），光纤窗型号写成 With FOP。分光用背照式 CCD 线阵产品页列出 S14290。分光用背照式 CCD 线阵产品页还列出带电子快门的 S11155-2048-02 与 S11156-2048-02。分光用索引里的背照式 CCD 面阵产品页列出近红外增强的 S16000-1007、S16001-1007S、S16010 和 S16011。相机用 CMOS 面阵产品页列出 S13499、S14250、S14501 和 S16101。工业用线阵产品页还包括 S10077、S10200、S10201、S10202、S10226、S10227、S11105、S11106、S11107、S11108、S13131、S13434、S13774、S14416、S14417、S14772、S14810、S14813、S15611、S15778、S16074 和 S17122。科学测量用线阵产品页列出 S9037 与 S9038。ICP 分光用面阵产品页列出 S12071 与 S12101。科学测量用面阵产品页列出 S7170-0909 与 S7171-0909-01。X 射线线阵产品页列出 S3901-256FX、S3901-512FX、S7199-01、S7199-01F、S8658-01 和 S8658-01F。X 射线面阵产品页列出 S15683-13。平板传感器产品页列出 C16401SK-51。带放大器的硅光电二极管阵列索引写，阵列与信号处理集成电路做在一起，通道数 64 到 256，有的带闪烁体，有的不带，主要用于 X 射线或可见光范围的工业检查，并写备有驱动电路。索引列出 S11865、S11866、S13885 和 S13886。超低噪声 CMOS 页写这些产品由 Fairchild Imaging, Inc. 制造，并写总部位于美国加利福尼亚州，是滨松光子的集团公司。这一页没有列出滨松型号。像增强器索引写 IIs produce high-contrast images under dark conditions，适合 night-time surveillance，以及 scientific and technical research。门控型用于高速现象、荧光寿命、生物发光和化学发光成像。索引列出 V4170、V4183、V6886、V6887、V7090、V7669、V7670、V8070、V9501、V9569、V10308、V10309 和 V13716。手册目录号 TII 0007E04，页脚写 Sep. 2026。轮廓传感器索引写 High-performance CMOS area sensors designed to acquire projection data and detect positions with high speed。Suitable for detecting light spot positions。Can also be integrated into factory inspection equipment。索引列出 S15366-1024、S9132、S15366-256 和 S15366-512。只有 S15366-1024 的 newState 是 true。一维 PSD 索引写 One-dimensional PSDs have a long, narrow photosensitive area and detect positions in a longitudinal direction。Suitable for use in displacement meters and other high precision distance measurement applications, such as optical switches。索引列出 S3274-05、S3931、S3932、S4583-04、S4584-04、S4584-06、S7105-04、S7105-05、S7105-06、S7105-16、S8543、S14241、S15430-01CT、S15430-02CT 和 S15430-03CT。二维 PSD 索引写 This PSD performs 2-dimensional position detection。It has excellent position detection characteristics with fast response and low dark current。索引列出 S15535、S2044、S5990-01、S5991-01 和 S15534。只有 S15535 的 newState 是 true。LiDAR 用硅光电二极管索引写 Si photodiodes for LiDAR，并写 Standard products are automotive-grade。索引列出 S13773 和 S15193，newState 都是 false。LiDAR 用 Si APD 索引写 Silicon APDs with high visible and NIR sensitivity，并写 standard products are automotive-grade。索引列出 S14643-02、S14644-02、S14644-05、S14645-02、S14645-05、S15413-02、S15414-02、S15414-05、S15415-02 和 S15415-05，newState 都是 false。S14643-02 的类型格把 LiDAR 印成 LiDAE。LiDAR 用 MPPC 索引写 enhanced sensitivity at 905 nm (the wavelength commonly used for TOF LiDAR)。索引列出 S15639-1325PS 和 S16786-0515WM，newState 都是 false。同一栏目的 InGaAs APD 索引标题在 APDs 和竖线之间有两个空格，说明写 high near-infrared sensitivity for low light detection at high speeds。索引列出 G8931-04、G8931-10、G8931-20 和 G14858-0020AA，newState 都是 false。带前端 IC 的光传感器索引写 Devices that integrate a photosensor, such as a photodiode or avalanche photodiode (APD), and front-end integrated circuit (IC) that reads the signals from the photosensor。Suitable for rangefinders because of their excellent noise and frequency characteristics。索引列出 S13645-01CR、S14137-01CR、S15597-01CT、S15658-01CT、S16429-01CT、S16429-02CT 和 S16430-01CR，newState 都是 false。S16429 和 S16430 的产品页写 direct TOF。激光束同步检测用 Photo IC 索引写 These photo ICs detect laser beam printing start timing in laser beam printers and digital copiers。索引列出 S13114-01DT、S13114-02DT、S11257-01DT、S11282-01DS、S9684、S9684-01 和 S9703-11。只有 S13114-01DT 和 S13114-02DT 的 newState 是 true。表内产品名写成 Photo IC for laser beam sync detection。PSD 模块索引写 Easy-to-use PSD modules integrate our PSDs with a current-to-voltage conversion circuit。索引列出 C10443-01、C10443-02 和 C10443-06，newState 都是 false。PSD 电路索引写 Driver circuit boards for PSD evaluation。索引列出 C3683-02 和 C4674-01，newState 都是 false。颜色传感器父页没有产品表，说明写 Devices sensitive in the red, green, and blue spectral regions。单色颜色探测器索引标题写 Monochromatic color detectors，说明写 Color sensors designed to detect monochromatic colors of blue (λp=460 nm), green (λp=540 nm), or red (λp=660 nm)。索引列出 S6428-01、S6429-01 和 S6430-01，newState 都是 false。产品名都写成 Si photodiode。S6428-01 的 productExp 把 blue 写成 bule。RGB 颜色传感器索引一级标题在 RGB 前面有两个空格，写 RGB color sensors。说明写 These photo ICs have sensitivity to red, green, and blue respectively. Detected results are serially output in a digital value。列设置里 Data sheet 的显示写成 DataSheet。索引列出 S9706、S10917-35GT、S10942-01CT、S11012-01CR、S7505-01、S9032-02、S9702、S13683-02WT、S13683-03DT 和 S13683-04DS，newState 都是 false。S13683 三行的 productExp 都只写 I2C interface-compatible color sensor，2 放在上标。S13683-03DT 和 S13683-04DS 的 thumbAlt 写成 S13683-03DT, S13683-04DS。照度传感器索引一级标题写 Illuminance sensors。说明写 Illuminance sensors combine signal processing circuits and a photodiode with spectral sensitivity close to that of the human eye. Suitable for applications such as energy-saving sensors for TVs or light dimmers for liquid crystal panels and cell phones。列设置里 Data sheet 的显示写成 DataSheet。索引列出 S9705、S9705-01DT、S11153-01MT、S9066-211SB、S9067-201CT、S10604-200CT、S11154-201CT 和 S13948-01SB，newState 都是 false。施密特触发电路 Photo IC 索引一级标题前面有两个空格，写 Schmitt trigger circuit photo IC。说明写 These devices integrate a photodiode, amplifier, Schmitt trigger circuit, and output phototransistor into a single chip. Their peak sensitivity is 850 nm。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。索引列出 S4810、S6289、S7610-10、S12558-01DT 和 S12558-02DT，newState 都是 false。S4810 的 productName 写成 Photo IC，页眉也写 Photo IC。其余四行的 productName 和页眉写成 Schmitt trigger circuit photo IC。光调制 Photo IC 索引一级标题前面有两个空格，写 Light modulation photo IC。说明写 Delivers stable output by synchronous optical detection, and is reliable even under fluctuating background light。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。索引列出 S4282-51、S4289-61、S6809、S6846、S6986、S7136、S7136-10、S10053 和 S10053-01DT，newState 都是 false。productExp 把 background 写成 backgound。光链路 Photo IC 索引一级标题写 Photo IC for optical link。说明写 Photo IC receivers and emitters for plastic optical fiber communications。索引列出 L11354-02、S11355-04、L10881、L12422-01SR、L12557-01SR、P16548-01AT、S12423-01SR 和 S13174-01SR，newState 都是 false。L10881 的产品名写成 Red LED。P16548-01AT 的产品名写成 Free-Space Optical transceiver。光开关 Photo IC 索引一级标题后面有两个空格，写 Photo IC for optical switch。说明写 Functions needed for industrial optical switches are implemented into these photo ICs。索引列出 S6841、S8119、S11049-202SB 和 S11049-203DT，newState 都是 false。火焰检测 Photo IC 组件索引写 Photo IC assemblies for flame detection。说明写 Photo IC sensors designed specifically for flame detection (flame eye) in oil-fired hot water boilers and heaters。索引列出 S10108 和 S10109，newState 都是 false。光敏晶体管索引一级标题写 Phototransistor。说明第一句写 Phototransistor amplify the current generated by the input of light。索引只列出 S2829，newState 是 false。分段硅光电二极管索引一级标题写 Segmented Si photodiodes。说明写 Silicon PIN photodiodes consisting of 2 or 4 elements. Sensitive to UV and near-infrared ranges。索引列出 S16803、S3096-02、S4204、S4349、S5870、S5980、S5981、S9345 和 S10359。只有 S16803 的 newState 是 true。S10359 的产品名写成 Si photodiode array，其余写成 Si PIN photodiode array。硅光电二极管阵列索引一级标题写 Si photodiode arrays。说明写 Silicon photodiode array is a sensor with multiple Si photodiodes arranged in a single package。索引列出 S4111、S4114、S8558、S11212、S11299、S12362、S12363、S12858、S12859、S13620-02、S14833 和 S15158，共 34 行，newState 都是 false。S8558 和 S15158 的 productExp 把 ceramic 写成 cermic。S15158 的产品名写成 Si PIN photodiode，没有 array。硅条探测器索引一级标题写 Si strip detector。说明写 An SSD is a Si photodiode array with strips of photosensitive areas (PN junctions) with a width ranging from several micrometers to several tens of micrometers formed on a substrate。索引只列出 S13804，newState 是 false。类型的值写成 Poly Si-bias，显示写成 Poly Si-bias AC-readout。硅光电二极管索引一级标题写 Si photodiodes。说明写 Silicon photodiodes with high sensitivity and low dark current, as well as silicon PIN photodiodes suitable for high-speed applications。索引共 183 行，newState 为 true 的是 S15152、S15173 和 S16495。S15152 与 S15173 的 productExp 在逗号后有三个空格。S16495 的 productExp 写 Photodiode with a filter for monochromatic light (310 nm) detection。InGaAs 光电二极管索引一级标题写 InGaAs photodiodes。说明写 spectral responses ranging from 0.5 μm to 2.6 μm。索引共 96 行，产品名都写成 InGaAs PIN photodiode。newState 为 true 的只有 G14942-22。G14942-32 的 newState 是 false，封装类别显示写成 FC panel。Si APD 索引一级标题写 Si APDs，页面标题在 APDs 和竖线之间有两个空格。说明写 Silicon APDs provide high sensitivity ranging from UV to NIR for low light detection at high speeds。索引共 64 行，newState 为 true 的是 S17268-02 和 S17268-05。不在 LiDAR 栏目下的 InGaAs APD 索引标题同样在 APDs 和竖线之间有两个空格。说明写 high near-infrared sensitivity for low light detection at high speeds。索引列出 G15978-0020P、G8931-04、G8931-10、G8931-20 和 G14858-0020AA。只有 G15978-0020P 的 newState 是 true。Si APD 阵列索引一级标题写 Si APD arrays，前后没有空格。页面标题写 Si APD arrays | Hamamatsu Photonics。说明写 Silicon APD array is a sensor with multiple Si APD arranged in a single package。索引共 2 行，S8550-02 和 S15249，newState 都是 false。表头把 Data 和 Sheet 分成两行，Product 和 Name 分成两行。列设置里 Data sheet 的显示写成 DataSheet，ProductName 的值和显示都写成 ProductName。温度系数和暗电流的复选框没有勾选。I²C 兼容 InGaAs 光电二极管索引的页面标题写 I2C-compatible InGaAs photodiode，photodiode 是单数，2 不是上标。一级标题把 2 写成上标，photodiodes 是复数。说明写 These are compact optical devices that integrate an InGaAs photodiode and an IC。索引列出 G13568-02CT 和 P13567-02CT，newState 都是 false。两行共用 787 KB 的手册。G9801-22 和 G9801-32 也在 InGaAs 光电二极管索引上，newState 都是 false。typeNameSort 写成 G09801-22 和 G09801-32。两只共用手册 KIRD1081E03，页脚写 Aug. 2015 DN。G6854-01 也在这一索引上，newState 是 false。typeNameSort 写成 G06854-01。封装类别的值在 with 处截断。手册 KIRD1013E05，页脚写 Sep. 2017 DN。G8370-10、G8370-81、G8370-82、G8370-83 和 G8370-85 也在这一索引上，newState 都是 false。G8370-10 的 typeNameSort 写成 G08370-0010，封装类别的值和显示都写成 --。手册 KIRD1058E04，页脚写 May 2025 DN。G8370-81 到 G8370-85 的 typeNameSort 写成 G08370-81、G08370-82、G08370-83 和 G08370-85，共用手册 KIRD1064E07，页脚写 Jul. 2020 DN。S2384 也在 Si APD 索引上，是第 3 行，newState 是 false。typeNameSort 写成 S02384。productExp 写 Low bias operation, for 800 nm band。手册 KAPD1007E19，页脚写 Jul. 2026 DN。S2385 也在 Si APD 索引上，是第 4 行，newState 是 false。typeNameSort 写成 S02385。productExp 写 Low bias operation, for 800 nm band。感光面积的值写成 φ5，显示写成 φ5 mm。封装类别写成 TO-8。手册仍是 KAPD1007E19。S3884 也在 Si APD 索引上，是第 5 行，newState 是 false。typeNameSort 写成 S03884。productExp 写 Low bias operation, for 800 nm band。感光面积的值写成 φ1.5，显示写成 φ1.5 mm。封装类别写成 TO-5。手册仍是 KAPD1007E19。S4315、S4315-01、S4315-02 和 S4315-04 也在 Si APD 索引上，是第 6 到第 9 行，newState 都是 false。typeNameSort 写成 S04315、S04315-0001、S04315-0002 和 S04315-0004。productExp 都写 Low bias operation, for 800 nm band, TE-cooled type。前三行类型的值停在 (TE-cooled，S4315-04 的值停在 (Low bias。冷却都写成 TE-cooled。手册仍是 KAPD1007E19。S5344 和 S5345 也在 Si APD 索引上，是第 10 行和第 11 行，newState 都是 false。typeNameSort 写成 S05344 和 S05345。productExp 都写 Short wavelength type APD。类型的值都停在 (Low bias。感光面积的值写成 φ3 和 φ5，显示写成 φ3 mm 和 φ5 mm。封装类别写成 TO-5 和 TO-8。冷却都写成 Non-cooled。手册 KAPD1001E08，页脚写 Sep. 2025 DN。S6045-04、S6045-05 和 S6045-06 也在 Si APD 索引上，是第 12 到第 14 行，newState 都是 false。typeNameSort 写成 S06045-04、S06045-05 和 S06045-06。productExp 都写 Low temperature coefficient type APD for 800 nm band。类型的值都停在 (Low temperature。感光面积的值写成 φ1.5、φ3 和 φ5，显示写成 φ1.5 mm、φ3 mm 和 φ5 mm。封装类别写成 TO-5、TO-5 和 TO-8。冷却都写成 Non-cooled。手册 KAPD1005E07，页脚写 Feb. 2026 DN。S8664-02K、S8664-05K、S8664-1010、S8664-10K、S8664-20K、S8664-30K、S8664-50K 和 S8664-55 也在 Si APD 索引上，是第 15 到第 22 行，newState 都是 false。typeNameSort 写成 S08664-02K、S08664-05K、S08664-1010、S08664-10K、S08664-20K、S08664-30K、S08664-50K 和 S08664-55。productExp 都写 Short wavelength type APD (Low terminal capacitance)。类型的值都停在 (low terminal。感光面积的值写成 φ0.2、φ0.5、10 × 10、φ1、φ2、φ3、φ5 和 5 × 5，显示写成 φ0.2 mm、φ0.5 mm、10 × 10 mm、φ1 mm、φ2 mm、φ3 mm、φ5 mm 和 5 × 5 mm。封装写成 Metal、Metal、Ceramic、Metal、Metal、Metal、Metal 和 Ceramic。封装类别写成 TO-5、TO-5、--、TO-5、TO-5、TO-8、TO-8 和 --。冷却都写成 Non-cooled。手册 KAPD1012E08，页脚写 Feb. 2026 DN。S8890-02、S8890-05、S8890-10、S8890-15 和 S8890-30 也在 Si APD 索引上，是第 23 行到第 27 行，newState 都是 false。typeNameSort 写成 S08890-02、S08890-05、S08890-10、S08890-15 和 S08890-30。productExp 都写 Long wavelength type APD optimized for YAG laser detection (1.06 μm)，μ 是 U+03BC。类型的值写成 Near infrared，显示才写成 Near infrared type。感光面积的值写成 φ0.2、φ0.5、φ1、φ1.5 和 φ3，显示写成 φ0.2 mm、φ0.5 mm、φ1 mm、φ1.5 mm 和 φ3 mm。封装都写成 Metal。封装类别写成 TO-5、TO-5、TO-5、TO-5 和 TO-8。冷却都写成 Non-cooled。手册 KAPD1010E06，页脚写 Feb. 2026 DN。S9075 也在 Si APD 索引上，是第 28 行，newState 是 false。typeNameSort 写成 S09075。productExp 写 Short wavelength type APD。类型的值停在 Short wavelength type，换行后再写 (low bias，没有把 operation) 放进值里，low 是小写。显示才写成 Short wavelength type，换行 (low bias operation)。感光面积的值写成 φ1.5，显示写成 φ1.5 mm。封装写成 Metal。封装类别写成 TO-5。冷却写成 Non-cooled。thumbAlt 写成 Si APD  S9075 product photo，Si APD 后面有两个空格。手册 KAPD1001E08，页脚写 Sep. 2025 DN。S9251-10 和 S9251-15 也在 Si APD 索引上，是第 29 行和第 30 行，newState 都是 false。typeNameSort 写成 S09251-10 和 S09251-15。productExp 都写 High sensitivity in near IR range (λ=900 nm)。类型的值都停在 (900 nm band, low terminal，没有把 capacitance) 放进值里。显示才写成 Near infrared type，换行 (900 nm band, low terminal capacitance)。感光面积的值写成 φ1 和 φ1.5，显示写成 φ1 mm 和 φ1.5 mm。封装都写成 Metal。封装类别都写成 TO-5。冷却都写成 Non-cooled。thumbAlt 都写成 Si APD 后面两个空格再加型号和 product photo。手册 KAPD1013E07，页脚写 Feb. 2026 DN。S12023-02、S12023-05、S12023-10 和 S12023-10A 也在 Si APD 索引上，是第 31 行到第 34 行，newState 都是 false。typeNameSort 写成 S12023-02、S12023-05、S12023-10 和 S12023-10A，没有在 S 后面补零。productExp 都写 Low bias operation, for 800 nm band。类型的值都停在 (Low bias。感光面积的值写成 φ0.2、φ0.5、φ1 和 φ1，显示写成 φ0.2 mm、φ0.5 mm、φ1 mm 和 φ1 mm。封装都写成 Metal。封装类别都写成 TO-18。冷却都写成 Non-cooled。手册 KAPD1007E19，页脚写 Jul. 2026 DN。S12051 也在 Si APD 索引上，是第 35 行，newState 是 false。typeNameSort 写成 S12051，没有在 S 后面补零。productExp 写 Low bias operation, for 800 nm band。类型的值停在 (Low bias。感光面积的值写成 φ0.5，显示写成 φ0.5 mm。截止频率 900 MHz。暗电流 1 nA。终端电容 2 pF。封装写成 Metal。封装类别写成 TO-18。冷却写成 Non-cooled。thumbAlt 写成 S12051 product photo。手册仍是 KAPD1007E19。",
  },
  {
    id: "fairchild",
    name: "Fairchild Imaging",
    nameEn: "Fairchild Imaging",
    region: "海外",
    hq: "圣何塞",
    summary:
      "滨松超低噪声 CMOS 页写 Fairchild Imaging, Inc. 总部位于美国加利福尼亚州，是滨松光子的集团公司，做可见光到近红外和 X 射线的 CMOS 图像传感器。产品简报印的地址是 1841 Zanker Rd., Ste. 50，San Jose, CA 95112。sCMOS 页写读出噪声可以到 0.25e- RMS，量子效率超过 90%。科学成像页列出 HWK4123、LTN4323、CIS2521、CIS2020 和 CIS1910。空间成像页另列出 LTN4625。低照度页另列出 HWK1411 和 HWK1910。专业视频页另列出 MST4323 和 MST4625。X 射线页列出 F40、F3D、F20、F15 和 F10。",
  },
  {
    id: "lynred",
    name: "Lynred",
    nameEn: "Lynred",
    region: "海外",
    hq: "法国",
    summary:
      "做非制冷与制冷红外探测器。安防手册列出短波、中波和长波型号。产品页还列出面向空间成像的线阵 CAPYORK、PEGA，以及面阵 COBRA、NGP SW 和 IRS。",
  },
  {
    id: "teledyne",
    name: "Teledyne FLIR",
    nameEn: "Teledyne FLIR",
    region: "海外",
    hq: "美国",
    summary:
      "做红外机芯。Boson 与 Lepton 的产品页把光谱带写成 8 到 14 μm。Neutrino 的 SWaP 系列页写中波。",
  },
  {
    id: "gst",
    name: "高芯科技",
    nameEn: "GST",
    region: "国内",
    hq: "武汉",
    summary: "做非制冷与制冷红外探测器。产品页地址在武汉东湖开发区。",
  },
  {
    id: "irnova",
    name: "IRnova",
    nameEn: "IRnova",
    region: "海外",
    hq: "瑞典",
    summary:
      "做制冷红外探测器。Oden 产品页写芯片来自瑞典。Balder 的产品页写 T2SL，光谱范围 0.9 到 2.5 μm。Tyr 的产品页写长波 QWIP。Hnoss 330 的产品页写 T2SL，光谱范围 3.2 到 3.4 μm。Skade 的产品页写 1280×1024、7.5 μm，光谱范围 3.7 到 5.1 μm。",
  },
  {
    id: "scd",
    name: "SCD",
    nameEn: "SCD",
    region: "海外",
    hq: "以色列",
    summary:
      "做制冷与非制冷红外探测器。关于页写明总部和晶圆厂在以色列。产品页列出 PELICAN-D、Robin、Blackbird、Crane、Sparrow、Hercules、Kinglet、Swift、Cardinal 和 Bird。",
  },
  {
    id: "inright",
    name: "英睿红外",
    nameEn: "InRight Tech",
    region: "国内",
    hq: "武汉",
    summary: "做硫化铅胶体量子点短波红外图像传感器。产品页列出 0.4 到 1.7 μm 的面阵型号。",
  },
  {
    id: "zxrc",
    name: "中芯热成",
    nameEn: "ZXRC",
    region: "国内",
    hq: "北京",
    summary: "做胶体量子点短波红外探测器。手册列出 640、1280 面阵和 1024 线阵。",
  },
  {
    id: "ams",
    name: "艾迈斯欧司朗",
    nameEn: "ams OSRAM",
    region: "海外",
    hq: "奥地利",
    summary:
      "做全局快门 CMOS 图像传感器。Mira 产品页页脚地址在奥地利 Premstätten。直接飞行时间产品页列出单区和多区的 TMF 型号。",
  },
  {
    id: "raytron",
    name: "睿创微纳",
    nameEn: "Raytron",
    region: "国内",
    hq: "",
    summary:
      "做车载红外模组。Horus1280-AW 产品页写明集成 1280×720、8 μm 氧化钒探测器。OHLE 产品页写明 SWLP 封装的氧化钒长波探测器。陶瓷封装产品页列出 RTD6122C 与 RTDS123C。短波产品页列出 InGaAs 面阵和线阵。",
  },
];

export { products };

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
  if (!date) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-");
    return `${year}.${month}.${day}`;
  }
  if (/^\d{4}-\d{2}$/.test(date)) {
    const [year, month] = date.split("-");
    return `约 ${year} 年${Number(month)} 月`;
  }
  if (/^\d{4}$/.test(date)) return `约 ${date} 年`;
  return date;
}

export function productById(id) {
  return products.find((item) => item.id === id);
}

export function modelAnchor(name) {
  const slug = String(name)
    .trim()
    .toLowerCase()
    .replace(/\+/g, "-plus")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u4e00-\u9fff-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `model-${slug || "item"}`;
}

export function modelTechnologies(product, model) {
  return model.technologies ?? product.technologies;
}

export function listedModels(list = products) {
  const rows = list.flatMap((product) =>
    product.models.map((model) => ({
      id: product.id,
      anchor: modelAnchor(model.name),
      date: model.date || product.date || "",
      companyId: product.companyId,
      category: product.category,
      title: model.name,
      summary: model.points.filter(Boolean).slice(0, 2).join(""),
      applications: product.applications,
      technologies: modelTechnologies(product, model),
    })),
  );
  return rows.sort((a, b) => {
    const byDate = (b.date ?? "").localeCompare(a.date ?? "");
    if (byDate) return byDate;
    return a.title.localeCompare(b.title, "zh");
  });
}

const hiddenApplicationTags = new Set(["depth", "spectral"]);

export function listedApplications(item) {
  return item.applications.filter((id) => !hiddenApplicationTags.has(id));
}

export function tagTechnologies(item) {
  const names = new Set(listedApplications(item).map((id) => applicationById(id)?.name));
  return item.technologies.filter((id) => !names.has(technologyById(id)?.name));
}

export const developments = products;

export function sortedDevelopments(list = products) {
  return [...list].sort((a, b) => {
    const byDate = (b.date ?? "").localeCompare(a.date ?? "");
    if (byDate) return byDate;
    return a.title.localeCompare(b.title, "zh");
  });
}

export function developmentsForCompany(companyId) {
  return listedModels(products.filter((item) => item.companyId === companyId));
}

export function developmentsForApplication(applicationId) {
  return listedModels(
    products.filter((item) => item.applications.includes(applicationId)),
  );
}

export function developmentsForTechnology(technologyId) {
  return listedModels(products).filter((item) => item.technologies.includes(technologyId));
}
