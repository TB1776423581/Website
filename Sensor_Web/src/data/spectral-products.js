const page = (name, date, url, points, band, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
  band,
});

const lynredBrief =
  "https://www.lynred.com/sites/default/files/2026-01/web_BrochureSurveillance_2026.pdf";
const hamamatsuGuide =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/ingaas_is_kmir1037e.pdf";
const leptonSheet = "https://flir.netx.net/file/asset/56466/original/attachment";
const bosonPage = "https://oem.flir.com/products/boson?segment=oem&vertical=lwir";

export const spectralProducts = [
  {
    id: "s11639",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11639：滨松紫外到近红外线阵",
    summary:
      "S11639-01 与 S11639-21 的光谱响应都是 200 到 1000 nm，产品页强调紫外灵敏度。S11639N-02 写明 140 到 1000 nm，并强调真空紫外。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("S11639-01", "", "https://www.hamamatsu.com/eu/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639-01.html", [
        "CMOS 线阵，2048×1，像素 14×200 μm。光谱响应 200 到 1000 nm。",
        "产品页写明紫外到近红外都有高灵敏度，石英窗。最高行频 4672 行/秒。",
      ], "uv"),
      page("S11639-21", "", "https://www.hamamatsu.com/eu/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639-21.html", [
        "与 S11639-01 同为 2048×1，光谱响应 200 到 1000 nm。",
        "表面贴装陶瓷封装。产品页同样强调紫外区高灵敏度。",
      ], "uv"),
      page("S11639N-02", "", "https://www.hamamatsu.com/jp/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639N-02.html", [
        "无窗。光谱响应 140 到 1000 nm。产品页写明相对前代提高真空紫外灵敏度。",
        "2048×1，像素 14×200 μm。读出噪声 16 e⁻ rms。",
      ], "uv"),
    ],
  },
  {
    id: "s11151",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11151-2048：滨松前照式紫外 CCD",
    summary: "产品页写明前照式 CCD 在紫外区仍有高灵敏度，光谱响应 200 到 1000 nm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("S11151-2048", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11151-2048.html", [
        "2048×1，像素 14×200 μm。光谱响应 200 到 1000 nm。",
        "产品页写明 200 nm 紫外灵敏度接近背照式 CCD。典型行频 484 行/秒。",
      ], "uv"),
    ],
  },
  {
    id: "g12242",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G12242-0707W：滨松 InGaAs 面阵",
    summary:
      "产品页标题写近红外二维图像传感器。光谱响应 0.95 到 1.7 μm，与同范围的 G14671 一起放在短波。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G12242-0707W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G12242-0707W.html", [
        "128×128，像素 20 μm。光谱响应 0.95 到 1.7 μm，峰值灵敏度典型 1550 nm。",
        "最高 258 帧/秒。两级热电制冷。全局快门与卷帘快门可切换。",
      ], "swir"),
    ],
  },
  {
    id: "g1467",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1467：滨松 InGaAs 面阵",
    summary:
      "选型指南把 G14671 到 G14674 列在同一族，都是 320×256、20 μm。光谱响应从 0.95 μm 延伸到 2.55 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G14671-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，光谱响应 0.95 到 1.69 μm。两级热电制冷，芯片 15℃。",
      ], "swir", "打开产品手册"),
      page("G14672-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.12 到 1.85 μm。芯片温度 -20℃。",
      ], "swir", "打开产品手册"),
      page("G14673-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.3 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G14674-0808W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G14674-0808W.html", [
        "产品页标题写近红外，光谱响应写明 1.70 到 2.55 μm，峰值灵敏度典型 2200 nm。",
        "320×256，像素 20 μm。最高 509 帧/秒。两级热电制冷。",
      ], "swir"),
    ],
  },
  {
    id: "g1656",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1656：滨松三级制冷 InGaAs 面阵",
    summary:
      "选型指南把 G16561 到 G16564 列为 320×256、三级热电制冷，光谱响应与 G1467 同档。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G16561-0808T", "", hamamatsuGuide, [
        "选型指南：光谱响应 0.95 到 1.69 μm。三级热电制冷，芯片 15℃。最高帧频 503 帧/秒。",
      ], "swir", "打开产品手册"),
      page("G16562-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.12 到 1.85 μm。",
      ], "swir", "打开产品手册"),
      page("G16563-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.3 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G16564-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.7 到 2.55 μm。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "g1724",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1724：滨松宽光谱 InGaAs 面阵",
    summary: "选型指南把 G17242 与 G17243 列为 320×256、三级热电制冷，光谱从 0.9 μm 分别到 2.15 μm 和 2.55 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G17242-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，三级热电制冷。光谱响应 0.9 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G17243-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 0.9 到 2.55 μm。1.7 μm 区域缺陷像素上限 0.37%，2.2 与 2.6 μm 区域为 1%。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "hamamatsu-ingaas-small",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "滨松小面阵 InGaAs",
    summary: "选型指南还列出 64×64 与 192×96 的 InGaAs 面阵，光谱响应落在短波范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G11097-0606S", "", hamamatsuGuide, [
        "选型指南：64×64，像素 50 μm。光谱响应 0.95 到 1.7 μm。一级热电制冷。最高 1025 帧/秒。",
      ], "swir", "打开产品手册"),
      page("G12460-0606S", "", hamamatsuGuide, [
        "选型指南：64×64。光谱响应 1.12 到 1.9 μm。芯片温度 0℃。",
      ], "swir", "打开产品手册"),
      page("G13441-01", "", hamamatsuGuide, [
        "选型指南：192×96，像素 50 μm。光谱响应 1.3 到 2.15 μm。最高 867 帧/秒。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "lynred-atto",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "ATTO：Lynred 非制冷长波探测器",
    summary: "Lynred 安防手册把 ATTO320-02、ATTO640D-02、ATTO1024-02 和 ATTO1280-02 的光谱带都写成 8 到 14 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ATTO320-02", "", lynredBrief, [
        "手册：320×240，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，60 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO640D-02", "", lynredBrief, [
        "手册：640×480，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 40 mK（f/1，300 K，30 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO1024-02", "", lynredBrief, [
        "手册：1024×768，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，30 Hz）。最高 100 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO1280-02", "", lynredBrief, [
        "手册：1280×1024，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，30 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
    ],
  },
  {
    id: "lynred-pico",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "PICO：Lynred 非制冷长波探测器",
    summary: "手册把 PICO384S 与 PICO640S 的光谱带写成 8 到 14 μm。PICO640S BB 7-14 的型号名写明 7 到 14。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("PICO384S", "", lynredBrief, [
        "手册：384×288，像元 17 μm，光谱带 8 到 14 μm。",
        "NETD 小于 30 mK（f/1，300 K，50 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("PICO640S", "", lynredBrief, [
        "手册：640×480，像元 17 μm，光谱带 8 到 14 μm。",
        "NETD 小于 30 mK（f/1，300 K，30 Hz）。最高 120 Hz。",
      ], "lwir", "打开产品手册"),
      page("PICO640S BB 7-14", "", "https://www.lynred.com/products/pico640s-bb-7-14", [
        "产品页型号为 PICO640S BB 7-14，光谱带 7 到 14 μm。640×480，像元 17 μm。",
        "热灵敏度小于 30 mK（f/1，300 K，30 Hz）。最高 60 Hz。用于气体泄漏成像。",
      ], "lwir"),
    ],
  },
  {
    id: "ati320",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "ATI：Lynred 非制冷长波模组",
    summary:
      "ATI320 与 ATI640 都是非制冷模组。安防手册把 ATI320 的光谱带写成 8 到 14 μm。ATI640 的发布稿写长波，产品页写微测辐射热计。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ATI320", "", lynredBrief, [
        "手册：320×240，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，60 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATI640", "2024-06-18", "https://www.lynred.com/products/ati640", [
        "2024 年 6 月 18 日发布。发布稿写即插即用的长波热成像模组，VGA，基于 640×480、12 μm 传感器，帧率 60 Hz，可带镜头或不带镜头。功耗写到 1 W。",
        "将于 2024 年 6 月 17 日至 21 日在巴黎 Eurosatory 的 5A-C155 展位展出。发布稿写面向监控和国防，包括无人机。",
        "产品页写微测辐射热计，出厂校准，无快门成像。NETD 小于 24 mK（60 Hz，F/1，300 K，denoizing）。可选 3 种镜头。",
        "产品页写用途包括户外、休闲、监控和无人机。",
      ], "lwir"),
    ],
  },
  {
    id: "leo-mw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "LEO MW：Lynred 中波制冷探测器",
    summary: "规格书写明 LEO MW 是 MCT 中波探测器，光谱响应 3.7 到 4.8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("LEO MW", "", "https://www.lynred.com/sites/default/files/2021-07/LEO%20MW%20Datasheet.pdf", [
        "640×512，像元 15 μm，MCT。光谱响应 3.7 到 4.8 μm。",
        "焦平面工作温度 90 到 100 K。典型 NETD 20 mK。全帧最高 60 Hz。",
      ], "mwir", "打开产品手册"),
    ],
  },
  {
    id: "daphnis-hd",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "DAPHNIS HD MW：Lynred 中波探测器",
    summary: "安防手册把 DAPHNIS HD MW 的光谱带写成 3.7 到 4.8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("DAPHNIS HD MW", "", lynredBrief, [
        "手册：1280×720，像元 10 μm，光谱带 3.7 到 4.8 μm。",
        "NETD 20 mK。最高 85 Hz。手册写明可选陷波滤光片。",
      ], "mwir", "打开产品手册"),
    ],
  },
  {
    id: "snake-sw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "SNAKE SW：Lynred 短波探测器",
    summary: "安防手册把 SNAKE SW 的光谱带写成 0.9 到 1.7 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SNAKE SW", "", lynredBrief, [
        "手册：640×512，像元 15 μm，光谱带 0.9 到 1.7 μm。最高 330 Hz。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "yocto1024",
    date: "2026-01-19",
    companyId: "lynred",
    category: "product",
    title: "YOCTO1024：Lynred 非制冷长波探测器",
    summary:
      "2026 年 1 月 19 日发布。YOCTO1024 是 XGA（1024×768）非制冷微测辐射热计。发布稿正文写像素间距 8.5 μm、氧化钒、长波；产品页写 8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("YOCTO1024", "2026-01-19", "https://www.lynred.com/products/yocto1024", [
        "2026 年 1 月 19 日发布，并将于 2026 年 1 月 20 日至 23 日在拉斯维加斯 SHOT Show 展出。",
        "XGA，1024×768。发布稿标题和产品页写 8 μm，发布稿正文写像素间距 8.5 μm。氧化钒，发布稿写明针对长波。",
        "产品页：NETD 小于 50 mK（f/1，300 K，30 Hz，焦平面 25±5℃）。采用降噪算法后的系统 NETD 小于 20 mK。全帧帧率小于 50 Hz（2 路输出）。",
        "发布稿：在与常规 VGA、12 μm 探测器相同的占位里像素数是其 2.5 倍。相对 12 μm 探测器，DRI 最高提高 40%，相当于 1.4 倍放大。相对 XGA、12 μm 探测器，占位最多缩小 40%。尺寸 18×18×4.85 mm³。",
        "产品页写明适用于双筒、单筒、瞄准镜和卡装设备。发布稿还写休闲、狩猎、国防和监控，包括手持热像仪、武器瞄具、无人机和固定观察系统。",
        "产品页：可通过 I²C 配置，支持自由运行或外触发。按 MIL-810 与 MIL-883 做 TWS 鉴定。在欧洲设计和制造。",
        "发布稿写明随后数月还会推出模组版本，稿中没有给出该模组的型号。",
      ], "lwir"),
    ],
  },
  {
    id: "capt640",
    date: "2026-09-21",
    companyId: "lynred",
    category: "product",
    title: "CAPT640-02：Lynred 车载热成像探测器",
    summary:
      "2026 年 9 月 21 日发布。发布稿称 CAPT640，产品页型号为 CAPT640-02。640×480、12 μm 非制冷微测辐射热计，裸片，用于汽车夜视和辅助驾驶。",
    applications: ["spectral", "auto"],
    technologies: ["spectral"],
    models: [
      page("CAPT640-02", "2026-09-21", "https://www.lynred.com/products/capt640-02", [
        "2026 年 9 月 21 日发布。发布稿标题写欧洲第一款用于汽车行业的热成像传感器，正文写这是该公司第一款符合汽车应用需求的热成像传感器。将于 2026 年 9 月 22 日至 24 日在巴塞罗那 AutoSens 展出。",
        "发布稿称 CAPT640，有一处写作 CAPT 640。产品页型号为 CAPT640-02。640×480，像元 12 μm，微测辐射热计。",
        "产品页：NETD 小于 60 mK（30 Hz，f/1，300 K）。60 Hz 下功耗小于 320 mW。全数字输出。封装为带晶圆级封装的裸片，以及重构晶圆。",
        "产品页写明 AEC-Q100 Grade 3（-40℃ 到 +85℃）、IATF 16949，并可提供 PPAP。发布稿写明公司在 2025 年晚些时候获得 IATF 16949，CAPT640 符合该标准。",
        "发布稿写明通过三十多项测试，覆盖各生产批次共约 3000 个元件，包括工作和断电状态下的极端温度循环。",
        "发布稿写明用于夜视，可识别行人、骑行者、动物或障碍物，场景包括黑暗、前灯眩光、逆光、雨和雾。可装在前格栅、挡风玻璃或车顶的相机里，并写明可与可见光相机、雷达和激光雷达一起用于自动紧急制动和辅助驾驶。",
      ], "lwir"),
    ],
  },
  {
    id: "argo-mw",
    date: "2026-04-20",
    companyId: "lynred",
    category: "product",
    title: "ARGO MW SL：Lynred 中波制冷探测器",
    summary:
      "2026 年 4 月 20 日发布。发布稿称 ARGO SL，产品页型号为 ARGO MW SL。640×512、15 μm、二类超晶格，光谱响应 3.7 到 4.8 μm，焦平面最高 130 K。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ARGO MW SL", "2026-04-20", "https://www.lynred.com/products/argo-mw-sl", [
        "2026 年 4 月 20 日发布。发布稿称 ARGO SL，产品页型号为 ARGO MW SL。将于 2026 年 4 月 26 日至 30 日在 National Harbor 的 SPIE Defense + Security 展出。",
        "640×512，像元 15 μm，二类超晶格。光谱响应 3.7 到 4.8 μm。焦平面工作温度最高 130 K。",
        "产品页：NETD 小于 33 mK（27℃，50% 阱填充，f/4）。制冷机 K588。光圈 f/4 与 f/5.5。",
        "产品页：20℃ 下稳功率 4 Wdc，降温功率 12 Wdc，降温时间 5 分钟。IDDCA 的 MTTF 为 27,000 小时。发布稿写功耗 4 Wdc。",
        "发布稿写明面向战术无人机和单兵，可装入小于 6 英寸的光电吊舱，也可手持或穿戴。纳入 PlugUp 平台。",
        "发布稿写明它补足已有的 GALATEA SL。GALATEA SL 工作在中波蓝带 3.6 到 4.2 μm。",
      ], "mwir"),
    ],
  },
  {
    id: "draco-mw",
    date: "2026-06-15",
    companyId: "lynred",
    category: "product",
    title: "DRACO MW SL：Lynred 中波制冷探测器",
    summary:
      "2026 年 6 月 15 日发布。1280×1024、7.5 μm、二类超晶格，光谱响应 3.7 到 4.8 μm，焦平面 130 K。发布稿写帧率 60 Hz，产品手册写最高 75 Hz。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("DRACO MW SL", "2026-06-15", "https://www.lynred.com/products/draco-mw-sl", [
        "2026 年 6 月 15 日发布，并在 2026 年 6 月 15 日至 19 日的 Eurosatory 展出。",
        "1280×1024，像元 7.5 μm，二类超晶格。光谱响应 3.7 到 4.8 μm。焦平面 130 K。发布稿写高温工作。",
        "发布稿写帧率 60 Hz。产品手册写最高 75 Hz，并标明为初步数据。手册：NETD 35 mK（300 K，50% 阱填充，f/3）。",
        "手册：读出为直接注入，可选 IWR 与 ITR，可反转。开窗最小到 640×4。电荷容量 2.3 Me⁻。阵列可操作性大于 99.5%。50% 阱填充时的残余固定图形噪声小于 0.5 倍均方根噪声。",
        "手册：视频输出 CameraLink Base，通信为 CameraLink UART。电源典型 12 Vdc。组成包括 IDDCA、近距板和制冷机控制器。",
        "产品页与手册：制冷机 K588。光圈 f/4、f/3.4、f/3、f/2。20℃ 下稳功率小于 4.7 Wdc，降温功率小于 14 Wdc，降温时间小于 5 分钟。制冷机 MTTF 32,000 小时。",
        "手册：外形最大 56×77×72.5 mm，重量 360 g。产品页写明适用于地面车辆和反无人机系统。纳入 PlugUp 平台，发布稿写明使用分体线性制冷机。",
        "发布稿写明，图像稳定性和光谱带宽与约 2026 年 4 月发布的 ARGO SL 相同，分辨率提高到 SXGA。",
      ], "mwir"),
    ],
  },
  {
    id: "sirocco-sw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "SIROCCO：Lynred 扩展短波探测器",
    summary:
      "SIROCCO SW 的发布稿正文日期是 2026 年 1 月 19 日，新闻室列表日期是 2026 年 1 月 12 日。640×512、15 μm、碲镉汞，光谱响应 0.8 到 2.5 μm。SPACE SIROCCO SW 的产品页光谱范围是 0.9 到 2.5 μm。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("SIROCCO SW", "2026-01-19", "https://www.lynred.com/products/sirocco-sw", [
        "发布稿正文写 2026 年 1 月 19 日，新闻室列表日期为 2026-01-12。发布稿称 Sirocco SW，产品页型号为 SIROCCO SW。将于 2026 年 1 月 20 日至 22 日在 SPIE Photonics West 展出。",
        "640×512，像元 15 μm，碲镉汞扩展短波。光谱响应 0.8 到 2.5 μm。产品页写 0.8 到 2.5 μm 的量子效率 80%，190 K 下暗电流 150 fA，阵列可操作性大于 99.5%。",
        "发布稿写帧率最高 200 帧/秒。可探测 CO₂、CO、CH₄ 和 N₂O，并写明可用于 300℃ 以上的高温过程控制。",
        "发布稿写明有两种配置：供定制集成的焦平面，或装在 PlugUp 平台里的封装探测器。手册订货号为 SIROCCO SW-FPA 与 SIROCCO SW-K588，并标明为初步数据。",
        "发布稿写明面向采矿、农业、环境监测和工业过程控制，平台包括卫星、无人机和飞机。同稿写明面向新太空的增强制冷设计仍在开发，即将提供，稿中没有写出该设计的型号。",
      ], "swir"),
      page("SPACE SIROCCO SW", "", "https://www.lynred.com/products/space-sirocco-sw", [
        "640×512，像元 15 μm，碲镉汞扩展短波。光谱范围 0.9 到 2.5 μm。",
        "焦平面工作温度 150 K 到 200 K。读出功能包括开窗（最小窗口 160×2）、抗光晕和电源管理。奈奎斯特频率处的 MTF 为 0.5。",
        "产品页写明用于天基地球观测，包括大气化学、温室气体监测和高光谱成像。",
      ], "swir"),
    ],
  },
  {
    id: "eyesential-sw",
    date: "2025-01-21",
    companyId: "lynred",
    category: "product",
    title: "EYESENTIAL SW：Lynred 短波探测器",
    summary:
      "2025 年 1 月 21 日发布。640×512、10 μm、InGaAs，光谱响应 0.9 到 1.7 μm。发布稿写 14 bit 和 COTS 封装。产品页写全帧 300 fps，320×256 时 1200 fps。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral"],
    models: [
      page("EYESENTIAL SW", "2025-01-21", "https://www.lynred.com/products/eyesential-sw", [
        "2025 年 1 月 21 日发布。将于 2025 年 1 月 28 日至 30 日在旧金山 SPIE Photonics West 的 5029 展位展出。",
        "640×512，像元 10 μm，InGaAs。产品页光谱响应 0.9 到 1.7 μm。发布稿写 SWIR（0.9-1.7 μm）、14 bit 数字输出和 COTS 封装。",
        "产品页：全帧 300 fps，320×256 时 1200 fps。量子效率 70%（1 μm 到 1.6 μm）。暗电流 15 fA（21℃）。阵列可操作性大于 99.5%。",
        "发布稿写全帧 300 Hz、四分之一全帧 1200 Hz。产品页把后一档写成 320×256。",
        "产品页写明用于机器视觉和光谱测量。发布稿还写科学成像，并写明可选择或取消谱线。发布稿举例包括高速分拣不同塑料。",
        "发布稿写明套件含电路板、机械与光学接口（C-Mount）和 Lynred Software Toolbox。发布稿写它补足 SNAKE SW（640×512、15 μm）以及收购的 NIT 短波模组。",
      ], "swir"),
    ],
  },
  {
    id: "eole-mw",
    date: "2025-03-31",
    companyId: "lynred",
    category: "product",
    title: "EOLE：Lynred 气体成像中波探测器",
    summary:
      "EOLE MW 与 ATI EOLE MW 都是 640×512、15 μm、IGn，光谱带 3.2 到 3.55 μm。2025 年 3 月 31 日的发布稿称 ATI EOLE，产品页型号为 ATI EOLE MW。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("EOLE MW", "", "https://www.lynred.com/products/eole-mw", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGn。光谱带 3.2 μm 到 3.55 μm。",
        "NETD 典型 20 mK、最大 25 mK（黑体 300 K）。焦平面可操作性大于 99.5%。栏名 Minimum Frame Rate，数值为典型 30 Hz，范围 15 Hz 到 60 Hz。",
        "焦平面工作温度最高 150 K。光圈 F/1.3。重量 365 g。MTTF 32 000 小时（LP4 Lynred profile）。",
        "产品页写明针对甲烷，以及甲醇、苯和乙醇，适用于便携和 24/7。产品页写明性能超过新的欧洲法规要求，可探测到低至法规要求的十分之一。纳入 PlugUp，并写明与 Galatea MW SL 接口相同。",
      ], "mwir"),
      page("ATI EOLE MW", "2025-03-31", "https://www.lynred.com/products/ati-eole-mw", [
        "2025 年 3 月 31 日发布。发布稿称 ATI EOLE，产品页型号为 ATI EOLE MW。将于 2025 年 4 月 13 日至 17 日在奥兰多 SPIE Defense & Commercial Sensing 的 Hall A-E 1401 展位展出。",
        "640×512，像元 15 μm，标注 IGn。光谱带 3.2 μm 到 3.55 μm。发布稿写 3.2-3.55 μm，并写泄漏率最低可到 1.4 g/h。",
        "产品页：NETD 小于 25 mK（50% 阱填充），后处理 NETD 小于 15 mK。焦平面可操作性大于 99.5%。帧率栏与 EOLE MW 相同，典型 30 Hz，15 Hz 到 60 Hz。光圈 F/1.3。重量 380 g。MTTF 50 000 小时（Lynred LifeProfile 1）。",
        "发布稿写明这是红外机芯，输出经过校正的图像。附加处理板叠在近距板上，重 15 克，外形与近距板相同。相对探测器功耗增加 1 Wdc。纳入 PlugUp。",
        "产品页写明用于气体探测，包括甲烷、苯和乙醇，以及便携和 24/7。发布稿写明面向油气输送和分配系统的甲烷泄漏监测。",
      ], "mwir"),
    ],
  },
  {
    id: "galatea-mw",
    date: "2025-03-31",
    companyId: "lynred",
    category: "product",
    title: "GALATEA：Lynred 中波蓝带探测器",
    summary:
      "GALATEA MW SL 与 ATI GALATEA MW SL 都是 640×512、15 μm，光谱响应 3.6 到 4.2 μm。2025 年 3 月 31 日的发布稿称 ATI GALATEA SL，产品页型号为 ATI GALATEA MW SL。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("GALATEA MW SL", "", "https://www.lynred.com/products/galatea-mw-sl", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGn。光谱响应 3.6 到 4.2 μm。",
        "NETD 小于 28 mK（27℃，50% 阱填充，f/4）。制冷机 K588。光圈 f/4 与 f/5.5。",
        "20℃ 下稳功率 3 Wdc，降温功率 12 Wdc，降温时间 3 分 30 秒。制冷机 MTTF 32,000 小时。焦平面工作温度最高 150 K。",
        "产品页写明适合装入小型无人机吊舱，纳入 PlugUp。",
      ], "mwir"),
      page("ATI GALATEA MW SL", "2025-03-31", "https://www.lynred.com/products/ati-galatea-mw-sl", [
        "2025 年 3 月 31 日发布。发布稿称 ATI GALATEA SL，产品页型号为 ATI GALATEA MW SL。将于 2025 年 4 月 13 日至 17 日在奥兰多 SPIE Defense & Commercial Sensing 的 Hall A-E 1401 展位展出。",
        "产品页标注 640×512、15 μm、IGN。光谱响应 3.6 到 4.2 μm。发布稿写中波蓝带 3.6-4.2 μm，面向战术无人机的远距离应用。",
        "产品页：传感器 NETD 小于 28 mK（27℃，50% 阱填充，f/4），后处理 NETD 小于 20 mK。焦平面工作温度最高 150 K。光圈 f/4 与 f/5.5。",
        "产品页列出片上算法：最多 4 张表的两点非均匀性校正、坏点替换、空域与时域降噪、演进坏点检测、水平或垂直翻转、视频测试图、去条纹、色调映射、数字细节增强和图形叠加。",
        "发布稿写明附加处理板重 15 克，相对探测器增加 1 Wdc，输出经过校正的图像。纳入 PlugUp，机械、光学和电气接口在同平台各设计之间相同。发布稿写明面向无人机吊舱厂商。",
      ], "mwir"),
    ],
  },
  {
    id: "seegnus-mw",
    date: "2024-06-17",
    companyId: "lynred",
    category: "product",
    title: "SEEGNUS MW SL：Lynred 中波制冷探测器",
    summary:
      "2024 年 6 月 17 日的发布稿称 Seegnus。产品页型号为 SEEGNUS MW SL。1280×1024、7.5 μm，产品页光谱响应 3.6 到 4.2 μm，标注 IGn。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SEEGNUS MW SL", "2024-06-17", "https://www.lynred.com/products/seegnus-mw-sl", [
        "2024 年 6 月 17 日发布。发布稿称 Seegnus，产品页型号为 SEEGNUS MW SL，正文也写作 SEEGNUS MW。将于 2024 年 6 月 17 日至 21 日在巴黎 Eurosatory 的 5A-C155 展位展出。",
        "发布稿：1280×1024（SXGA），像元 7.5 μm，中波，高温工作，并引述焦平面为 150 K。产品页标注 IGn，光谱响应 3.6 到 4.2 μm，焦平面工作温度最高 150 K。",
        "产品页：NETD 42 mK（300 K，50% 阱填充，f/3）。制冷机 K588。光圈 f/4、f/3.4、f/3、f/2。20℃ 下稳功率小于 3.7 Wdc，降温功率小于 13.5 Wdc，降温时间小于 4 分 40 秒。制冷机 MTTF 32,000 小时。组成包括 IDDCA、近距板和制冷机控制器。",
        "发布稿写功耗小于 3.5 W，体积 300 cm³，制冷机可靠性 32,000 小时，并写相对该公司此前这一类中波 VGA 型号，DRI 距离净增 20%。纳入 PlugUp，机械、光学和电气接口与此前紧凑型设计相同，有三个安装面。",
        "发布稿写，配 220 mm 折叠式 f/4 成品光学件，在中纬度夏季大气条件下，可在 630 m 宽的场景里探测到 14.5 km 处的人，在 170 m 宽的场景里于 3.9 km 处识别。",
        "发布稿写用途包括无人机吊舱、战术目镜、装甲车辆观瞄、遥控武器观瞄、潜望镜，以及固定或机载监控。现场演示被写成用于远距离成像的最小 SXGA 传感器，并展示装在 6.3 英寸吊舱里的机械模型。发布稿引述其掌握 III-V 半导体技术。",
        "产品页写它是 PlugUp 平台里第一款 7.5 μm 像元的 SXGA 探测器，并写低声学噪声，适合要求紧凑和高 MTTF 的系统。",
      ], "mwir"),
    ],
  },
  {
    id: "boson",
    date: "",
    companyId: "teledyne",
    category: "product",
    title: "Boson：Teledyne FLIR 长波机芯",
    summary:
      "产品页写明 Boson 与 Boson+ 都是非制冷长波红外机芯，光谱带 8 到 14 μm，分辨率有 640×512 和 320×256。Boson SX8 是 2026 年 6 月 8 日发布的 1280×1024、8 μm 长波机芯。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Boson 640", "", bosonPage, [
        "对照表：640×512，像元 12 μm。光谱带 8 到 14 μm。",
        "工业档热灵敏度不大于 40 mK。帧率 60 Hz 与 9 Hz。",
      ], "lwir"),
      page("Boson 320", "", bosonPage, [
        "对照表：320×256，像元 12 μm。光谱带与 Boson 640 同为 8 到 14 μm。",
      ], "lwir"),
      page("Boson+ 640", "", bosonPage, [
        "对照表：640×512。光谱带 8 到 14 μm。工业档热灵敏度不大于 20 mK。",
        "默认 60 Hz，可在运行时选 30 Hz。",
      ], "lwir"),
      page("Boson+ 320", "", bosonPage, [
        "对照表：320×256。光谱带 8 到 14 μm。灵敏度分档与 Boson+ 640 相同。",
      ], "lwir"),
      page("Boson SX8", "2026-06-08", "https://oem.flir.com/products/boson-sx8/", [
        "2026 年 6 月 8 日发布。发布稿写 ITAR-free、符合 NDAA、量产的非制冷长波机芯，像元 8 μm，SXGA（1280×1024），并写这是第一款把这两项合在一起的此类机芯。相对当时高产量非制冷 VGA（640×512），分辨率是其四倍，封装尺寸与之相近。",
        "产品页写微测辐射热计，并写像素数是 640×512 VGA 模组的 4 倍。系列对照表在 Boson SX8 一列写光谱带 8 μm 到 14 μm，热灵敏度工业档不大于 35 mK、专业档不大于 45 mK。长波分类页卡片写灵敏度不大于 35 mK、水平视场 24° 到 50°。",
        "产品页要点写 30 Hz 和 60 Hz，并写路线图里还有更高帧率。同页表格里三款定焦均为 In Production：24°、24 mm，零件号 801280A0024-6IXAAA；32°、18 mm，801280A0032-6IXAAA；50°、12 mm，801280A0050-6IXAAA。这三行的帧率写成 60 Hz，并用平均或跳帧得到 30 Hz。温度测量为 No。",
        "系列对照表把 Boson SX8 的 Shutterless Options 写成 No，视频处理延迟写成 TBD。产品页写在美国量产，出口分类 EAR 6A003.b.4.b，并写有不含锗的镜头。",
        "发布稿写用途包括无人机、反无人机、周界安防、手持设备、导引头、视觉增强，以及情报、监视和侦察。将在 2026 年巴黎 Eurosatory 的 Teledyne FLIR 展位演示。",
      ], "lwir"),
      page("Boson SX8 CZ", "2026-06-08", "https://oem.flir.com/products/boson-sx8-cz/", [
        "2026 年 6 月 8 日与 Boson SX8 同一篇发布稿。发布稿称 Boson SX8-CZ 15–75，出厂集成 5 倍连续变焦镜头，焦距 15 到 75 mm。系列页的小标题写作 Boson+ SX8，正文写作 Boson SX8 CZ 和 Boson SX8 – CZ 15–75。",
        "产品页标题为 Boson SX8 CZ, 15-75 mm，页面状态为 Preproduction。Boson SX8 产品页表格把零件号 2686-350-CZ 标为 In Production，水平视场栏为空，帧率写默认 60 Hz、运行时可选择 30 Hz。型号选择页另有零件号 2686-350，状态为 Preproduction。长波分类页卡片写水平视场 6° 到 30°。",
        "产品页：光谱范围为长波红外，7.5 µm 到 14 µm。分辨率 1280×1024，像元 8 µm。灵敏度工业档不大于 35 mK，专业档不大于 45 mK，并注明 factory filters enabled。光学连续变焦写成 5.35x。窄视场焦距 75 mm，公差 +4%/−0%；宽视场 15 mm，公差 +0%/−4%。",
        "最近对焦距离：窄视场大于 18 m，宽视场大于 3 m。尺寸 110×84.3×84.3 mm，重量 530 g。标称电源 12 V ±1 V。工作温度 −35°C 到 70°C。镜头前防护 IP67。场景动态范围高增益到 140°C。",
        "产品页写温度测量为 No，同页又写准确度 ±5°C 或更小，视工作条件而定。非均匀性校正为出厂校准，并用 Silent Shutterless NUC（SSN），标准配置也包括物理快门。变焦过程中的视轴漂移小于 0.10 mm。变焦时间小于 1.5 秒，对焦时间小于 0.5 秒。",
        "产品页要点另写 30 Hz 和 60 Hz，并写后续还有更高帧率。出口分类写 EAR 6A003.b.4.b。用途包括无人系统、反无人机、周界监视、轻型装甲车辆态势感知和瞄准，以及单兵观瞄。",
      ], "lwir"),
    ],
  },
  {
    id: "lepton",
    date: "",
    companyId: "teledyne",
    category: "product",
    title: "Lepton：Teledyne FLIR 长波微型模组",
    summary:
      "Lepton 系列规格书把光谱带写成长波红外 8 到 14 μm，并列出 2.5、3.1R、3.5 和 UWFOV。Lepton XDS 是 2026 年 2 月 24 日发布的双光模组，热像一侧用 Lepton 3.5。",
    applications: ["spectral", "consumer"],
    technologies: ["spectral"],
    models: [
      page("Lepton 2.5", "", leptonSheet, [
        "规格书：长波红外 8 到 14 μm。80×60，像元 17 μm。热灵敏度小于 50 mK。",
      ], "lwir", "打开产品手册"),
      page("Lepton 3.1R", "", leptonSheet, [
        "规格书：光谱带同为 8 到 14 μm。160×120，像元 12 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton 3.5", "", leptonSheet, [
        "规格书：160×120，像元 12 μm，光谱带 8 到 14 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton UWFOV", "", leptonSheet, [
        "规格书：输出 160×120，可用区域为直径 120 像素。光谱带 8 到 14 μm，像元 12 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton XDS", "2026-02-24", "https://oem.flir.com/products/lepton-xds/", [
        "2026 年 2 月 24 日在巴塞罗那和戈利塔发布，并将于 2026 年 3 月 2 日至 5 日在巴塞罗那世界移动通信大会 7B6 展位展出。发布稿写 ITAR-free 的热像与可见光双光模组。",
        "发布稿：热像一侧为 160×120、可测温的 Lepton 3.5，可见光一侧为 500 万像素。带 MSX，把可见光图像的边缘叠到热像上，并带 Prism ISP。输出包括辐射测温 JPEG（RJPEG）。接口为 USB。",
        "产品页型号 500-1395-00，状态写 Under Development。热像探测器写 Lepton 3.5，160×120，像元 12 µm，热灵敏度小于 50 mK。红外镜头 57° 水平视场，f/1.1，视频 8.7 Hz。可见光传感器 2592×1944，像元 1.4 µm，有效焦距 1.57 mm，水平视场 98.2°，光圈写成 F/1/2.2，视频 640×480、30 Hz。",
        "产品页：高增益测温准确度为 ±5°C 或 5% 中较大者（典型），低增益为 ±10°C 或 10% 中较大者（典型）。工作温度 0°C 到 +60°C，非工作温度 −40°C 到 +70°C。",
        "尺寸 29×26.7×8.8 mm，重量 5.6 g。功耗：工作 1.6 W，快门动作 1.9 W，待机 500 mW。产品页写没有安装 IMU。",
        "发布稿把出口分类写成 ECCN 6A003.b.4.b。产品页写成 6a993.b.4.b。发布稿写用途包括火灾探测与预防、电动车电池监测、机器人导航、无人平台、智能基础设施，以及健康和安全。产品页还写移动设备、小型电子产品、智能建筑、占用分析和设备状态监测。",
      ], "lwir"),
    ],
  },
  {
    id: "gst-uncooled",
    date: "",
    companyId: "gst",
    category: "product",
    title: "GST：高芯科技非制冷长波探测器",
    summary:
      "这些型号的产品页都把响应波段写成 8 到 14 μm。GST212W、GST417W、GST612W 和 GST612W9 是晶圆级封装。GST412C、GST417C 和 GST612C 是陶瓷封装。GST417M、GST612M、GST817M 和 GST1212M 是金属封装。GST612W9 的标题写车规级红外探测器，正文写非制冷红外热成像模组。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("GST212W", "", "https://www.gst-ir.com/products-ir-detector/256X192/GST212W.html", [
        "晶圆级封装。256×192，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD 小于 40 mK。最高 50 Hz。重量小于 0.5 g。",
      ], "lwir"),
      page("GST417W", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST417W.html", [
        "晶圆级封装，氧化钒。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <40 mK。热响应时间 <12 ms。最大帧频 50 Hz。功耗 ≤180 mW。",
        "尺寸 18×16×2.75 mm（不含接口），重量 <2 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST412C", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST412C.html", [
        "陶瓷封装，氧化钒，无 TEC。400×300，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD ＜35 mK，最大帧频 50 Hz，功耗 ≤140 mW。特性栏另写功耗低至 80 mW。",
        "尺寸 18.5×18.5×3.8 mm（不计引脚），重量 <4.5 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612W", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612W.html", [
        "晶圆级封装，氧化钒。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <40 mK。最大帧频 50 Hz。功耗 ≤150 mW。",
        "尺寸 18×16×2.75 mm（不含接口），重量 <2 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST417C", "", "https://www.gst-ir.com/products-ir-detector/400X300/578.html", [
        "陶瓷封装，氧化钒，无 TEC。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD ＜30 mK，最大帧频 50 Hz，功耗 ＜180 mW。",
        "规格表尺寸写 18.×18.5×3.8 mm（不计引脚），特性栏写 18.5×18.5×3.8 mm。重量 ＜4.5 g。",
      ], "lwir"),
      page("GST417M", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST417M.html", [
        "金属封装，氧化钒，内置 TEC。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <30 mK。最大帧频 50 Hz。功耗 ≤180 mW。",
        "尺寸 30×19.8×7.32 mm（不计引脚），重量 <15 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612M", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612M.html", [
        "金属封装，氧化钒，内置 TEC。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <35 mK。最大帧频 50 Hz。功耗 ≤150 mW。",
        "尺寸 30×19.8×7.32 mm（不计引脚），重量 <20 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612W9", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612W9.html", [
        "标题写车规级红外探测器，正文写非制冷红外热成像模组。氧化钒，晶圆级封装。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "正文写国内首获车规级 AEC-Q104 认证，已实现大批量生产，用于智能驾驶。",
        "规格表典型 NETD ＜30 mK，最大帧频 50 Hz，功耗 ＜150 mW。特性栏功耗写 ＜120 mW。",
        "尺寸 19.1×24×3.75 mm（不含接口），重量 ＜2 g。工作温度 -40℃ 到 105℃。",
      ], "lwir"),
      page("GST612C", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612C.html", [
        "陶瓷封装。640×512，像元 12 μm。响应波段 8 到 14 μm。",
        "典型 NETD 小于 35 mK。最高 50 Hz。功耗不大于 150 mW。",
      ], "lwir"),
      page("GST817M", "", "https://www.gst-ir.com/products-ir-detector/800X600/GST817M.html", [
        "金属封装，氧化钒。800×600，像元 17 μm。光谱范围 8 到 14 μm。",
        "典型 NETD 小于 30 mK。最高 50 Hz。内置 TEC。",
      ], "lwir"),
      page("GST1212M", "", "https://www.gst-ir.com/products-ir-detector/1280X1024/GST1212M.html", [
        "金属封装，氧化钒。1280×1024，像元 12 μm。光谱范围 8 到 14 μm。",
        "典型 NETD 小于 50 mK。最高 50 Hz。内置 TEC。重量小于 57 g。",
      ], "lwir"),
    ],
  },
  {
    id: "c615s",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C615：高芯科技制冷红外探测器",
    summary:
      "C615S 是长波二类超晶格，光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。C615M 是中波碲镉汞，光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。两款都是 640×512、像元 15 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C615S", "", "https://www.gst-ir.com/products-ir-detectors/long-wave/C615S.html", [
        "640×512，像元 15 μm，二类超晶格。光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。",
        "NETD 典型值：F2、ITR 为 25 mK；隔行合并为 22 mK。",
      ], "lwir"),
      page("C615M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C615M.html", [
        "中波制冷红外探测器。640×512，像元 15 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 16 mK，F4 为 18 mK。有效像元率 ≥99.76%。",
        "可配置制冷机 RS058、RS046 和 LS734。规格表按制冷机分列功耗和重量。",
      ], "mwir"),
    ],
  },
  {
    id: "c1212",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C1212M：高芯科技中波制冷探测器",
    summary:
      "产品页写 C1212M 是碲镉汞中波制冷红外探测器，1280×1024、像元 12 μm，光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C1212M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C1212M.html", [
        "1280×1024，像元 12 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 16 mK，F4 为 18 mK。有效像元率 ≥99.5%。",
        "可配置制冷机 RS058。稳定功耗 ≤7 W，最大功耗 ≤17 W。制冷时间 ≤6 min。重量 ≤600 g。",
      ], "mwir"),
    ],
  },
  {
    id: "c330",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C330：高芯科技制冷红外探测器",
    summary:
      "C330M 是 320×256、30 μm 的碲镉汞中波探测器。C330S 长波与 C330S 双色都是 320×256、30 μm 的二类超晶格。双色产品页同时给出中波和长波两段光谱范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C330M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C330M.html", [
        "中波制冷红外探测器。320×256，像元 30 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 9 mK，F4 为 15 mK。工作模式写明 ITR 积分。",
        "可配置制冷机 RS058 与 RS046H。",
      ], "mwir"),
      page("C330S", "", "https://www.gst-ir.com/products-ir-detectors/long-wave/C330S.html", [
        "长波制冷红外探测器。320×256，像元 30 μm，二类超晶格。光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。",
        "NETD 典型值 20 mK（F2）。可配置制冷机 RS058。稳定功耗 ≤8 W，最大功耗 ≤17 W。",
      ], "lwir"),
      {
        ...page(
          "C330S 双色",
          "",
          "https://www.gst-ir.com/products-ir-detectors/two-color/C330STC.html",
          [
            "产品页型号写 C330S 中长波双色制冷红外探测器。320×256，像元 30 μm，二类超晶格。",
            "中波段 3.7±0.2 μm 到 4.8±0.2 μm，长波段 7.7±0.2 μm 到 9.4±0.3 μm。",
            "NETD 典型值中波 20 mK，长波 25 mK。可配置制冷机 RS058。稳定功耗 ≤9 W。",
          ],
          "mwir",
        ),
        bands: ["mwir", "lwir"],
      },
    ],
  },
  {
    id: "irnova-njord",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Njord MW：IRnova 中波探测器",
    summary: "产品页写明 T2SL Njord MW 覆盖 3 到 5 μm，规格表光谱范围 3.7 到 5.1 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Njord MW", "", "https://www.irnova.se/t2sl-njord-mw", [
        "1280×1024，像元 10 μm，T2SL。正文写全 3 到 5 μm 响应。",
        "规格表光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。NETD 25 mK（F/4，60 Hz）。",
      ], "mwir"),
    ],
  },
  {
    id: "irnova-oden",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Oden MW：IRnova 中波探测器",
    summary: "产品页写明 Oden MW 是中波 T2SL 探测器，光谱范围 3.7 到 5.1 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Oden MW", "", "https://www.irnova.se/t2sl-oden-mw", [
        "640×512，像元 15 μm。光谱范围 3.7 到 5.1 μm。",
        "NETD 18 mK（F/4，60 Hz）。工作温度最高 140 K。产品页写芯片来自瑞典。",
      ], "mwir"),
    ],
  },
  {
    id: "pelican-d",
    date: "",
    companyId: "scd",
    category: "product",
    title: "PELICAN-D：SCD 制冷红外探测器",
    summary:
      "PELICAN-D 640 产品页写中波 3.6 到 5 μm。PELICAN-D LW 产品页写长波，截止波长 9.3 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("PELICAN-D 640", "", "https://www.scd-infrared.com/products/pelican-d-640/", [
        "640×512，像元 15 μm。产品页写中波，光谱带 3.6 到 5 μm，可选 1 到 5.4 μm。",
        "材料为 InSb。工作温度 80 K。70% 阱填充时 NETD 20 mK。最高帧频 350 Hz。",
      ], "mwir"),
      page("PELICAN-D LW", "", "https://www.scd-infrared.com/products/pelican-d-lw/", [
        "640×512，像元 15 μm，T2SL。产品页写长波，截止波长 9.3 μm。",
        "工作温度 77 K。最高帧频 350 Hz。",
        "产品页同一行写 NETD at 70% well fill 为 15 mK，括号里又写 65%、30 Hz。两处阱填充比例不一致，页面没有解释。",
      ], "lwir"),
    ],
  },
  {
    id: "ir-s",
    date: "",
    companyId: "inright",
    category: "product",
    title: "IR-S：英睿红外胶体量子点短波图像传感器",
    summary:
      "产品页把 IR-S0615A、IR-S0615B、IR-S0615C 和 IR-S1210A 列在同一张表。光谱范围都是 0.4 到 1.7 μm，材料为硫化铅胶体量子点。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("IR-S0615A", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "640×512，像元 15 μm。光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 100 fps。1550 nm 量子效率大于 55%，可操作像元率不低于 99.5%。",
        "TEC 制冷，功耗 80 mW。满阱 5.3 Me⁻（ITR）或 4.6 Me⁻（IWR）。",
      ], "swir"),
      page("IR-S0615C", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "与 IR-S0615A 同为 640×512、15 μm，光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 340 fps。TEC 制冷，功耗 208 mW。",
      ], "swir"),
      page("IR-S0615B", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "640×512，像元 15 μm，光谱范围 0.4 到 1.7 μm。",
        "卷帘快门，最高 56 fps。满阱 450 ke⁻，功耗 60 mW。",
      ], "swir"),
      page("IR-S1210A", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "1280×1024，像元 10 μm。光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 100 fps。TEC 制冷，功耗 150 mW。",
        "满阱 4.0 Me⁻（ITR）或 2.7 Me⁻（IWR）。可操作像元率不低于 99.5%。",
      ], "swir"),
    ],
  },
  {
    id: "zxrc-sw",
    date: "2025-01",
    companyId: "zxrc",
    category: "product",
    title: "ZXRC-SW：中芯热成胶体量子点短波探测器",
    summary:
      "手册把 ZXRC-SW640、ZXRC-SW1280 和 ZXRC-SW1024×1 都写成胶体量子点短波探测器。表格中的光谱响应是 800 到 1700 nm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ZXRC-SW640-F15", "2025-01", "https://www.zxrckj.com/uploads/file/20250105/dfef96edb81478a40fbcca4688f462e5.pdf", [
        "蝶形封装手册。640×512，像元 15 μm，感光面积 9.6×7.68 mm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。全局快门，内置 TEC。",
        "4 路读出，全画幅帧频 120 Hz。动态范围不低于 55 dB。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW640-F15-YF2", "2025-01", "https://www.xinirtech.com/uploads/file/20250105/ae7e2e2a314f6b98b7a9e19f2f394c39.pdf", [
        "陶瓷封装手册。阵列、像元和光谱范围与蝶形封装的 ZXRC-SW640-F15 相同。",
        "外形 26×24.5×9.37 mm。窗口为蓝宝石，800 nm 前截止。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW1280-F15-YF", "2024-11", "https://www.zxrckj.com/uploads/file/20241223/e0caae2aad1de7ba425d7f7b5ab85691.pdf", [
        "陶瓷封装手册。1280×1024，像元 15 μm，感光面积 19.2×15.36 mm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。全局快门，内置 TEC。",
        "读出通道 4 或 8 路。手册表格写全画幅帧频 60 Hz（4 路）或 20 Hz（8 路）。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW1024x1-F12.5", "2024-12", "https://www.zxrckj.com/uploads/file/20241223/bab28322b53efdff0823014b04b71e85.pdf", [
        "陶瓷封装线阵手册。1024×1，像元 12.5×270 μm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。快照曝光，边积分边读出。",
        "4 路模拟输出，行频最高 40 kHz。内置 TEC。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "gir",
    date: "2025-06-10",
    companyId: "gpixel",
    category: "product",
    title: "GIR：InGaAs 短波红外线阵",
    summary:
      "2025 年 6 月 10 日发布 GIR1201 与 GIR2505。英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。两款都是 InGaAs 全局快门线阵，64 引脚 DIP，封装 57.4 mm × 18.9 mm。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral", "global"],
    models: [
      page(
        "GIR1201",
        "2025-06-10",
        "https://www.gpixel.com/en/details_201.html",
        [
          "英文发布稿日期为 2025-06-10。中文页面日期栏为 2025-06-09，正文写 2025 年 6 月 10 日发布。",
          "1024×1 InGaAs 线阵，像素 12.5 μm × 12.5 μm，全局快门。英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。",
          "片上 12 bit ADC。英文发布稿写动态范围 72 dB，低增益满阱 1.6 Me⁻，高增益满阱 120 ke⁻。2 对 Sub-LVDS，最高 1.68 Gbps，最高行频 71.9 kHz，最高行频下功耗小于 450 mW。",
          "中文发布稿把系列的高增益满阱写成 120 ke⁻、动态范围写成 72 dB，并写全速输出功耗为 450 mW。",
          "64 引脚 DIP，封装 57.4 mm × 18.9 mm，与 GIR2505 针脚兼容。中文发布稿写用途包括半导体检测、工业检测、智能分拣、光谱分析和医疗。工程样片和评估系统可订购。",
        ],
        "swir",
        "打开产品发布页",
      ),
      page(
        "GIR2505",
        "2025-06-10",
        "https://www.gpixel.com/en/details_201.html",
        [
          "与 GIR1201 同日发布。512×2 InGaAs 线阵，沿扫描方向 512 像素、2 行，像素 25 μm × 25 μm，全局快门。",
          "英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。动态范围 70 dB。低增益满阱 1.6 Me⁻，高增益满阱 85 ke⁻。",
          "2 对 Sub-LVDS，最高 1.68 Gbps，最高行频 40.4 kHz，最高行频下功耗小于 450 mW。64 引脚 DIP，封装 57.4 mm × 18.9 mm。",
          "中文发布稿未把高增益满阱和动态范围按型号分开，系列数字写为高增益满阱 120 ke⁻、动态范围 72 dB、全速功耗 450 mW。",
          "中文发布稿写用途包括半导体检测、工业检测、智能分拣、光谱分析和医疗。工程样片和评估系统可订购。",
        ],
        "swir",
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "ohle",
    date: "2026-03-19",
    companyId: "raytron",
    category: "product",
    title: "OHLE：睿创微纳 SWLP 非制冷长波探测器",
    summary:
      "OHLE3123 与 OHLE6081 都是氧化钒微测辐射热计、SWLP 封装的长波探测器。OHLE3123 为 384×288、12 μm。OHLE6081 正文写 640×512、8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("OHLE3123", "2025-03-12", "https://www.raytrontek.com/product/pro-detail-555.htm", [
        "新闻页日期为 2025-03-12。正文写 2025 年 3 月 11 日慕尼黑上海光博会开幕，OHLE3123 首发亮相。2026-03-19 的新闻写 2025 年发布，没有写日。",
        "氧化钒微测辐射热计，SWLP 长波。正文写面阵 384×288、像元间距 12 μm、NETD＜40 mK、功耗＜65 mW、响应波段 8-14 µm。",
        "规格表：响应波段 8~14 μm，像元间距 12 μm，分辨率 384×288。NETD <40 mK（f/1.0，25 Hz，300 K）。功耗 <60 mW（25 Hz，25℃）。帧频 ≤60 Hz。热时间常数 <15 ms。14 bit。",
        "规格表：片上 9 位非均匀性校正，36-Pin SWLP，尺寸 10.4×10.4×4.3 mm³（不计引脚），重量 <0.6 g，输出极性黑热。测温范围 -40~600℃（f/1.0）。可操作率 ≥99.5%。工作温度 -40°C~+85°C。",
        "正文写匹配 SMT1 贴装。亮点栏写匹配 SMT2。亮点栏写测温范围可达 -40~600°C。",
        "产品页写明用于户外夜视、工业测温、安防监控和民用行业无人机。",
      ], "lwir"),
      page("OHLE6081", "2026-03-19", "https://www.raytrontek.com/product/pro-detail-556.htm", [
        "中文新闻页日期为 2026-03-19。正文写 3 月 18 日 2026 慕尼黑上海光博会开幕，并写今年带来 OHLE6081。英文新闻 datePublished 为 2026-05-13，标题写在 Laser World of Photonics China 2026 上推出。产品页没有写日期。",
        "正文写氧化钒微测辐射热计、SWLP 长波，面阵 640×512，像元间距 8 μm，尺寸 11.2×11.2 mm。",
        "规格表把「响应波段」写成 640×512，「像元间距」写成 8-14 μm，「分辨率」写成 8 μm。规格表 NETD <50 mK（f/1.0，25 Hz，300 K）。帧频 25/30/50/60 Hz。热时间常数 <15 ms。14 bit。逐行读出。片上 6 位非均匀性校正。",
        "规格表：功耗 <120 mW。封装 11.2×11.2×4.2 mm³（不计引脚），32-Pin SWLP，重量 ＜1 g。输出极性白热。测温范围 -40℃~800℃（f/1.0）。可操作率 ≥99.5%。工作温度 -40~+105℃。",
        "英文新闻写 NETD <50 mK、尺寸 11.2×11.2 mm、重量 <1 g、功耗 <120 mW、测温 -40°C 到 800°C，并写相对常规 640×512 陶瓷封装探测器，模组尺寸大约缩小 74%。",
        "产品页写明用于民用行业无人机、工业测温、户外夜视和辅助驾驶。中文新闻还写户外手持和安防监控。英文新闻写商用无人机、工业测温、户外夜视、ADAS 和手持设备。",
      ], "lwir"),
    ],
  },
];
