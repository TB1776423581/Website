const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/psd-module/${name}.html`;

const circuit = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/psd-circuit/${name}.html`;

const moduleIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/psd-module.html";

const circuitIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/psd/psd-circuit.html";

const c10443Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/c10443_series_kpsd1027e.pdf";

const c3683Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/c3683-02_kpsd1004e.pdf";

const c4674Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/c4674-01_kpsd1005e.pdf";

const moduleIntro =
  "索引说明写 Easy-to-use PSD modules integrate our PSDs with a current-to-voltage conversion circuit。";

const circuitIntro =
  "索引说明写 Driver circuit boards for PSD evaluation。";

export const psdModuleProducts = [
  {
    id: "c10443",
    date: "2025-02",
    companyId: "hamamatsu",
    category: "product",
    title: "C10443：滨松 PSD 模块",
    summary:
      "三只产品页都没有写发布日期。共用手册目录号 KPSD1027E12，页脚写 Feb. 2025 DN，并写 Information described in this material is current as of February 2025，记为约 2025 年 2 月。索引 newState 都是 false。封面标题行写 Integrates a 2-PSD。产品页把光灵敏度单位写成 mV/μm，手册写成 mV/μW。手册应用列出 Three-dimensional measurement，没有写 TOF。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("C10443-01", "2025-02", part("C10443-01"), [
        "产品页没有写发布日期。页面标题写 PSD module C10443-01。一级标题只写 C10443-01。副标题写 Integrates a PSD for precision photometry with low-noise amp in a compact case (Photosensitive area: 4 ×4 mm)，乘号后面没有空格。正文把型号写成 PSD module C10439-01，并写 high-precision two-dimensional PSD (position sensitive detector) and a low-noise amplifier，以及 accurate distance measurement。下一句写 Using a PSD module with a dedicated signal processing unit (C10460)。C10460 不在 PSD 模块索引和 PSD 电路索引上，没有另开一页。特性写 Photosensitive area: 4 ×4 mm、Easy handling、High precision analog voltage output、Only half size of a business card: 34 (W) × 44 (H) × 40 (D) mm、Three-types with different active areas available。",
        "规格表探测器 Two-dimensional PSD，感光面积 4 × 4 mm。光谱范围 320 to 1100 nm，峰值 960 nm，光灵敏度典型 -60 mV/μm。供电 ±5 to ±12 V。测量条件写 Ta=25 ℃, Vcc=±12 V, unless otherwise noted。规格表没有截止频率，也没有位置检测误差。",
        `索引 ${moduleIndex} 这一行 newState 是 false。${moduleIntro}productName 写 PSD module。productExp 把感光面积写成 4 x 4 mm，用的是字母 x。输出列写 Two-dimensional PSD、4 × 4 mm、320 to 1100 nm、960 nm、-60 mV/μm。typeNameSort 写成 C10443-01。缩略图文件名是 k_c10443-01_pp_xx.jpg，thumbAlt 是空的。手册标 545 KB。`,
        `手册 ${c10443Sheet}。目录号 KPSD1027E12，页脚写 Feb. 2025 DN，并写 current as of February 2025，记为约 2025 年 2 月。封面这一行写 Integrates a 2-PSD for precision photometry or a 4-segment Si photodiode。正文改写成 two-dimensional PSD (position sensitive detector) or a 4-segment Si photodiode。特性尺寸写成 34 (W) × 40 (D) × 44 (H) mm，选型表写成 34 × 40 × 44，和产品页的 34 (W) × 44 (H) × 40 (D) mm 轴序不同。这一列感光面积 4×4 mm，饱和入射光 167 μW，符号格印成 Past。光灵敏度 -60 mV/μW，条件 λ=λp。位置检测误差典型 ±70 μm、最大 ±150 μm，位置分辨率 0.5 μm，条件 Σ=10 V。上限截止频率 16 kHz，下限 DC。最大输出幅度 -Vs + 1.1 V。暗态失调 -5 到 +5 mV，噪声 1 mVp-p。消耗电流最大 ±2 mA。绝对最大供电 ±13 V。工作温度 0 to +50 °C，贮存温度 -10 to +60 °C。注 *1 写 No dew condensation。换算公式里的 L 写 4.5 mm，感光面是 4×4 mm。应用写 Optical axis alignment、Distance sensors、Two-dimensional measurement、Three-dimensional measurement、Length measurement、Liquid level sensors、Distortion measurement、Displacement sensor。没有写 TOF。手册没有出现 C10460。附件电缆写 One end of cable is cut oﬀ，off 用了连字。外形连接器写 HR-10A-10R-10PB (71)，附件写 HR10A-10P-10S。页脚地址写 Chuo-ku。Cutoff 和 Offset 印成带连字的 Cutoﬀ、Oﬀset。`,
      ]),
      page("C10443-02", "2025-02", part("C10443-02"), [
        "产品页没有写发布日期。页面标题写 PSD module C10443-02。副标题感光面积写成 9 ×9 mm，乘号后面没有空格。正文写 PSD modules C10443-02 contains，modules 是复数，动词是 contains。同样写 two-dimensional PSD、accurate distance measurement，以及 dedicated signal processing unit (C10460)。特性尺寸仍是 34 (W) × 44 (H) × 40 (D) mm，并仍写 Three-types。",
        "规格表探测器 Two-dimensional PSD，感光面积 9 × 9 mm。光谱范围、峰值和供电与 C10443-01 相同。光灵敏度典型仍是 -60 mV/μm。测量条件仍写 Vcc=±12 V。",
        `索引 ${moduleIndex} 这一行 newState 是 false。productExp 把感光面积写成 9 x 9 mm，用的是字母 x。输出列的光灵敏度仍是 -60 mV/μm。typeNameSort 写成 C10443-02。缩略图文件名是 k_c10443-02_pp_xx.jpg，thumbAlt 是空的。手册仍标 545 KB。`,
        `手册仍是 ${c10443Sheet}，记为约 2025 年 2 月。这一列感光面积 9×9 mm，与 C10443-01 共用 320 to 1100 nm、960 nm、167 μW 和 -60 mV/μW。位置检测误差典型 ±150 μm、最大 ±250 μm，位置分辨率 1.0 μm。上限截止频率仍是 16 kHz。消耗电流最大仍是 ±2 mA。换算公式里的 L 写 10 mm，感光面是 9×9 mm。`,
      ]),
      page("C10443-06", "2025-02", part("C10443-06"), [
        "产品页没有写发布日期。页面标题写 PSD module C10443-06。副标题写 Integrates a 4-segment Si photodiode with low-noise amp in a compact case (Photosensitive area: 10 × 10 mm)。正文写 contains a 4-segment Si photodiode and a low-noise amplifier，以及 accurate distance measurement。这一页没有写 C10460。特性感光面积写成 10 × 10 mm，尺寸仍是 34 (W) × 44 (H) × 40 (D) mm，并仍写 Three-types。",
        "规格表探测器 4-segment photodiode，感光面积 10 × 10 mm。光谱范围 320 to 1100 nm，峰值 960 nm，光灵敏度典型 -72 mV/μm。供电 ±5 to ±12 V。测量条件仍写 Ta=25 ℃, Vcc=±12 V, unless otherwise noted。",
        `索引 ${moduleIndex} 这一行 newState 是 false。productExp 写 Integrates a 4-segment Si photodiode with low-noise amp in a compact case (Photosensitive area: 10 × 10 mm)，这里用乘号。输出列写 4-segment photodiode、10 × 10 mm、-72 mV/μm。typeNameSort 写成 C10443-06。缩略图文件名是 k_c10443-06_pp_xx.jpg，thumbAlt 是空的。手册仍标 545 KB。`,
        `手册仍是 ${c10443Sheet}，记为约 2025 年 2 月。这一列探测器写 4-segment photodiode，感光面积 10 × 10 mm。饱和入射光 139 μW，光灵敏度 -72 mV/μW。位置检测误差和位置分辨率都是短横。上限截止频率 160 kHz。最大输出幅度 -Vs + 2.5 V。暗态失调 -10 到 +10 mV，噪声 3 mVp-p。消耗电流最大 ±15 mA。方框图输出写 Va、Vb、Vc、Vd，没有 C10443-01 那组 x、y 换算式。`,
      ]),
    ],
  },
  {
    id: "c3683",
    date: "2022-07",
    companyId: "hamamatsu",
    category: "product",
    title: "C3683：滨松一维 PSD 信号处理电路",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1004E10，页脚写 Jul. 2022 DN，并写 Information described in this material is current as of July 2022，记为约 2022 年 7 月。索引 newState 是 false。产品页没有规格表。手册写 displacement measurements using DC light，没有写 TOF。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("C3683-02", "2022-07", circuit("C3683-02"), [
        "产品页没有写发布日期。页面标题写 Signal processing circuit for 1-D PSD C3683-02。一级标题只写 C3683-02。副标题写 Circuit board for easier 1-D PSD operation。正文写 DC signal processing circuit for one-dimensional PSD，并写 suitable for displacement measurements using DC light。特性写 No complicated adjustments required、Output voltage directly representing the position data、Accurate position sensing、Three sensitivity ranges、Compact design。页面没有规格表，只有 Dimensional outline (unit: mm)。相关产品只列出已经收录的 S3931 和 S3932。",
        "页面下载标 398 KB/PDF。可见正文没有感光面积、供电和截止频率。",
        `索引 ${circuitIndex} 这一行 newState 是 false。${circuitIntro}productName 写 Signal processing circuit for 1D PSD，1D 没有连字符。productExp 写 Circuit board for 1-D PSD, for DC signal。dispMethod 是空的。typeNameSort 写成 C03683-02。缩略图文件名是 k_c3683-02_pp_xx.jpg，thumbAlt 是空的。手册标 398 KB。`,
        `手册 ${c3683Sheet}。目录号 KPSD1004E10，页脚写 Jul. 2022 DN，并写 current as of July 2022，记为约 2022 年 7 月。标题写 Signal processing circuit for 1-D PSD。特性展开写 The position (mm) of a light spot from the PSD (S3931, S3932) center is obtained as an output voltage (V)，并写 Position data of a light spot is independent of incident light intensity。规格条件 Ta=25 °C, Vs=±15 V。跨阻 H、M、L 三档典型 1 × 10^6、1 × 10^5、1 × 10^4 V/A。注 *2 写出厂设在 M range。工作供电最小 ±14.5 V、典型 ±15 V、最大 ±15.5 V。绝对最大供电 ±18 V。消耗电流典型 ±8 mA。位置输出最大幅度出厂 ±6 V，范围 ±5.8 到 ±6.2 V。注 *6 写 volume resistor。注 *8 写 Switching power supplies are not supported，纹波 3 mVp-p or less。注 *4 写 Output response time 10 to 90%，规格表条件星号是 *2、*3、*5、*6、*7、*8。注 *9 写 Vo=±6 V，规格表最大幅度的符号是 Vfs。配合表写 PSDs are sold separately。S3931 为 6 × 1 mm、分辨率 2.5 µm、Ceramic (9.2 × 4.8)，板上安装和外部连接都是 Yes。S3932 为 12 × 1 mm、5 µm、Ceramic (15.2 × 4.8)，两格都是 Yes。S8543、S4583-04、S4584 series、S3274-05、S7105 series 只在外部连接写 Yes。S15430-01CT/-02CT 与 S15430-03CT 放在同一行，1 × 6 mm、1.5 µm、Glass epoxy，外部连接 Yes。输出幅度写 S3931 的 Vo(X) 为 ±3 V、S3932 为 ±6 V。外形图印 MADE IN JAPAN，D-sub 连接器写 Hirose Electric: RDED-9P，公差 ±0.2。附件是说明书和连接器 HDEB-9S。页脚地址写 Higashi-ku。应用写 Displacement measurements using DC light、Various studies using 1-D PSD、Performance evaluation of 1-D PSD。没有写 TOF。`,
      ]),
    ],
  },
  {
    id: "c4674",
    date: "2022-07",
    companyId: "hamamatsu",
    category: "product",
    title: "C4674：滨松二维 PSD 信号处理电路",
    summary:
      "产品页没有写发布日期。手册目录号 KPSD1005E12，页脚写 Jul. 2022 DN，并写 Information described in this material is current as of July 2022，记为约 2022 年 7 月。索引 newState 是 false。索引 productExp 写 pin-cushion type，手册正文没有这几个词。产品页没有规格表。没有写 TOF。",
    applications: ["machine"],
    technologies: [],
    models: [
      page("C4674-01", "2022-07", circuit("C4674-01"), [
        "产品页没有写发布日期。页面标题写 Signal processing circuit for 2-D PSD C4674-01。一级标题只写 C4674-01。副标题写 Circuit board for easier 2-D PSD operation。正文写 DC signal processing circuit for two-dimensional PSD，并写 suitable for displacement measurements using DC light。特性第一行写 No complicated adjustment required，adjustment 是单数。其余写 Output voltage directly representing the position data、Accurate position sensing、Three sensitivity ranges、Compact design。页面没有规格表。相关产品列出已经收录的 S2044、S5990-01 和 S5991-01。",
        "页面下载标 465 KB/PDF。可见正文没有感光面积、供电和截止频率。",
        `索引 ${circuitIndex} 这一行 newState 是 false。${circuitIntro}productName 写 Signal processing circuit for 2D PSD，2D 没有连字符。productExp 写 Circuit board for pin-cushion type 2-D PSD, for DC signal。dispMethod 是空的。typeNameSort 写成 C04674-01。缩略图文件名是 k_c4674-01_pp_xx.jpg，thumbAlt 是空的。手册标 465 KB。`,
        `手册 ${c4674Sheet}。目录号 KPSD1005E12，页脚写 Jul. 2022 DN，并写 current as of July 2022，记为约 2022 年 7 月。标题写 Signal processing circuit for 2-D PSD。特性写 No complicated adjustments required，adjustments 是复数，并写 Position data of light spot is independent of incident light intensity，light spot 前面没有 a。手册正文没有写 pin-cushion。规格条件 Ta=25 °C, Vs=±15 V。跨阻三档与 C3683-02 相同。消耗电流典型 ±15 mA。位置输出最大幅度出厂 ±7 V，范围 ±6.8 到 ±7.2 V。表内把 Reference 印成 Referance voltage。注 *5 的代替光电流写 X1=X2=Y1=Y2，L 档 200 μA、M 档 20 μA、H 档 2 μA。注 *9 写 Vfs=±7 V。配合表写 PSDs are sold separately。S2044 为 4.7 × 4.7 mm、分辨率 2 µm、Metal (TO-8 φ14)，板上安装 ○，专用板 ×，外部连接 ○。S5990-01 为 4 × 4 mm、1.7 µm、Ceramic chip carrier (8.8 × 10.6)，板上安装 ×，专用板 ○。S5991-01 为 9 × 9 mm、3.8 µm、Ceramic chip carrier (14.5 × 16.5)，同样用专用板。输出幅度写 S2044 的 V4 (X) 和 V5 (Y) 都是 ±2.35 V，S5990-01 都是 ±2 V，S5991-01 都是 ±4.5 V。附件除说明书和 HDEB-9S 外，还有 S5990-01/S5991-01 mounting board。相关技术笔记写成 PSD processing circuit，circuit 是单数。页脚地址写 Higashi-ku。应用写 Displacement measurements using DC light、Various studies using 2-D PSD、Performance evaluation of 2-D PSD。没有写 TOF。`,
      ]),
    ],
  },
];
