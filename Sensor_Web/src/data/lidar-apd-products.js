const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const apd = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/si-apd-for-lidar/${part}.html`;

const mppc = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/mppc-for-lidar/${part}.html`;

const ingaas = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/ingaas-apd/${part}.html`;

const apdIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/si-apd-for-lidar.html";

const mppcIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/mppc-for-lidar.html";

const ingaasIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/ingaas-apd.html";

const s14643Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14643-02_kapd1066e.pdf";

const s14644Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14644_series_kapd1067e.pdf";

const s14645Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14645_series_kapd1065e.pdf";

const s15413Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15413-02_kapd1090e.pdf";

const s15414Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15414_series_kapd1089e.pdf";

const s15415Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15415_series_kapd1088e.pdf";

const s15639Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15639-1325ps_kapd1085e.pdf";

const s16786Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s16786-0515wm_kapd1091e.pdf";

const g8931Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g8931_series_kapd1018e.pdf";

const g14858Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g14858-0020aa_kapd1068e.pdf";

const apdIntro =
  "索引说明写 Silicon APDs with high visible and NIR sensitivity, internal amplification, wide dynamic range, and wide bandwidth。Our standard products are automotive-grade, meeting the reliability requirements for high temperature environments。后一句还写 Customization of specific detectors is available to meet unique automotive LiDAR market requirements, such as element size, gap size, and coating material。";

export const lidarApdProducts = [
  {
    id: "s14643",
    date: "2025-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S14643：滨松 LiDAR 用 Si APD",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1066E03，页脚写 Jan. 2025 DN，并写 current as of January 2025，记为约 2025 年 1 月。索引 newState 是 false。类型格把 LiDAR 印成 LiDAE。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S14643-02", "2025-01", apd("S14643-02"), [
        "产品页没有写发布日期。页面标题写 Si APD S14643-02。meta description 写 compact, surface mount type Si APD that achieves high sensitivity in the 700 nm band，并写 suitable for laser monitoring of optical rangefinders widely used from consumer electronics to industrial uses。uses 是复数。特性写 Small package: 3.1 × 1.8 × 1.0t mm、Peak sensitivity wavelength: 760 nm (M=100)、Low bias operation: Breakdown voltage=120 V max.、High-speed response: Cutoff frequency=2 GHz typ. (λ=760 nm, M=100)、Reduction of breakdown voltage variation: 100 ± 20 V。Low bias 没有连字符。",
        "规格表类型写成 For LiDAE(700 nm band, Low bias operation)。页面源码是 For LiDAE<br />(700 nm band, Low bias operation)，LiDAE 和括号之间没有空格，LiDAR 印成 LiDAE。感光面积 φ0.2 mm，封装 Plastic，封装类别 Surface mount type。峰值 760 nm，光谱范围 400 to 1000 nm，光灵敏度 0.48 A/W，暗电流最大 0.2 nA，截止频率 2000 MHz，终端电容 0.7 pF，击穿电压 100 V，击穿电压温度系数 0.42 V/℃，增益 100。测量条件 Typ. Ta=25 ℃，unless otherwise noted，Photosensitivity: λ=760 nm, M=1。",
        `索引 ${apdIndex} 这一行 newState 是 false。${apdIntro}productExp 写 High speed, compact Si APD for LiDAR (700 nm band) featuring low-bias operation。这里 Low-bias 有连字符，LiDAR 拼写是对的。类型值同样是 For LiDAE，然后换行再写括号。typeNameSort 写成 S14643-02。手册标 463 KB。`,
        `手册 ${s14643Sheet}。目录号 KAPD1066E03，页脚写 Jan. 2025 DN，并写 current as of January 2025，记为约 2025 年 1 月。引言把型号写成 The S14643 02，短横线写成空格。应用只写 Optical rangefinders。结构表封装是 Glass epoxy (silicone resin)，不是产品页和索引的 Plastic。有效感光面积 0.03 mm2。注 *1 写 Area in which a typical gain can be obtained。工作温度 -30 to +100 °C，贮存温度 -40 to +100 °C。击穿电压最小 80 V、典型 100 V、最大 120 V。暗电流条件 M=100，典型 20 pA、最大 200 pA。截止频率典型 2 GHz，条件写 M=100, RL=50 Ω 和 λ=760 nm, -3 dB。终端电容条件 M=100, f=1 MHz。量子效率典型 78%，条件 λ=760 nm, M=1。增益条件 λ=760 nm，典型 100。`,
      ]),
    ],
  },
  {
    id: "s14644",
    date: "2021-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S14644：滨松 LiDAR 用 Si APD",
    summary:
      "产品页没有写发布日期。两只共用手册目录号 KAPD1067E02，页脚写 Mar. 2021 DN，并写 current as of March 2021，记为约 2021 年 3 月。索引 newState 都是 false。索引说明写 standard products are automotive-grade。手册特性把截止频率写成 1 GHz，电特性表分成 1.2 GHz 和 1 GHz。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S14644-02", "2021-03", apd("S14644-02"), [
        "产品页没有写发布日期。meta description 写 high sensitivity in the 800 nm band，并写 from consumer electronics to industrial uses。特性写 Peak sensitivity wavelength: 800 nm (M=100)、Low bias operation: Breakdown voltage=180 V max.、Cutoff frequency=1.2 GHz typ. (λ=800 nm, M=100)、Reduction of breakdown voltage variation: 160 ± 20 V。封装尺寸仍是 3.1 × 1.8 × 1.0t mm。",
        "规格表类型写成 For LiDAR(800 nm band, Low bias operation)，LiDAR 和括号之间没有空格。感光面积 φ0.2 mm，封装 Plastic，封装类别 Surface mount type。峰值 800 nm，光谱范围 400 to 1000 nm，光灵敏度 0.52 A/W，暗电流最大 0.3 nA，截止频率 1200 MHz，终端电容 0.6 pF，击穿电压 160 V，温度系数 0.63 V/℃，增益 100。测量条件里光灵敏度是 λ=800 nm, M=1。",
        `索引 ${apdIndex} 这一行 newState 是 false。productExp 写 High speed, compact Si APD for LiDAR (800 nm band) featuring low-bias operation。类型值在 LiDAR 后换行再写括号。手册标 599 KB。`,
        `手册 ${s14644Sheet}，记为约 2021 年 3 月。特性把系列截止频率写成 1 GHz typ.，条件 λ=800 nm, M=100。电特性表这一列是 1.2 GHz。封装写 Glass epoxy (silicone resin)。有效感光面积 0.03 mm2。暗电流条件 M=100，典型 30 pA、最大 300 pA。击穿电压最小 140 V、典型 160 V、最大 180 V。量子效率典型 80%，条件 λ=800 nm, M=1。工作温度 -30 to +100 °C，贮存温度 -40 to +100 °C。应用写 Optical rangefinders。`,
      ]),
      page("S14644-05", "2021-03", apd("S14644-05"), [
        "产品页没有写发布日期。meta description 与 S14644-02 同一段用途，特性里的截止频率写成 1 GHz typ. (λ=800 nm, M=100)。击穿电压最大仍是 180 V，峰值仍是 800 nm (M=100)。",
        "规格表类型同样写成 For LiDAR(800 nm band, Low bias operation)。感光面积 φ0.5 mm，封装 Plastic。光灵敏度 0.52 A/W，暗电流最大 0.5 nA，截止频率 1000 MHz，终端电容 1.6 pF，击穿电压 160 V，温度系数 0.63 V/℃，增益 100。",
        `索引 ${apdIndex} 这一行 newState 是 false。productExp 与 S14644-02 相同。终端电容典型 1.6 pF。手册仍标 599 KB。`,
        `手册仍是 ${s14644Sheet}，记为约 2021 年 3 月。这一列截止频率 1 GHz，和系列特性的 1 GHz 一致，和 S14644-02 的 1.2 GHz 不同。有效感光面积 0.19 mm2。暗电流典型 50 pA、最大 500 pA。终端电容条件 M=100, f=1 MHz，典型 1.6 pF。击穿电压范围与 S14644-02 同为 140 V、160 V、180 V。`,
      ]),
    ],
  },
  {
    id: "s14645",
    date: "2021-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S14645：滨松 LiDAR 用 Si APD",
    summary:
      "产品页没有写发布日期。两只共用手册目录号 KAPD1065E03，页脚写 Mar. 2021 DN，并写 current as of March 2021，记为约 2021 年 3 月。索引 newState 都是 false。索引说明写 standard products are automotive-grade。峰值写 840 nm，光灵敏度和截止频率的波长条件写 900 nm。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S14645-02", "2021-03", apd("S14645-02"), [
        "产品页没有写发布日期。meta description 写 high sensitivity in the 900 nm band，并写 from consumer electronics to industrial uses。特性写 Peak sensitivity wavelength: 840 nm (M=100)、Low bias operation: Breakdown voltage=195 V max.、Cutoff frequency=600 MHz typ. (λ=900 nm, M=100)、Reduction of breakdown voltage variation: 175 ± 20 V。Low bias 没有连字符。",
        "规格表类型写成 For LiDAR(900 nm band, Low bias operation)。感光面积 φ0.2 mm，封装 Plastic，封装类别 Surface mount type。峰值 840 nm，光谱范围 400 to 1100 nm，光灵敏度 0.5 A/W，暗电流最大 0.4 nA，截止频率 600 MHz，终端电容 0.5 pF，击穿电压 175 V，温度系数 1.1 V/℃，增益 100。测量条件把光灵敏度写成 λ=900 nm, M=1。",
        `索引 ${apdIndex} 这一行 newState 是 false。productExp 写 High speed, compact Si APD for LiDAR (900 nm band) featuring low-bias operation。峰值典型 840 nm，截止频率典型 600 MHz。手册标 607 KB。`,
        `手册 ${s14645Sheet}。目录号 KAPD1065E03，页脚写 Mar. 2021 DN，并写 current as of March 2021，记为约 2021 年 3 月。特性写 Low bias operation，没有连字符。结构表参数名写成 Photosensitive area size。封装 Glass epoxy (silicone resin)。有效感光面积 0.03 mm2。击穿电压最小 155 V、典型 175 V、最大 195 V。暗电流条件 M=100，典型 40 pA、最大 400 pA。截止频率典型 600 MHz。光灵敏度条件 λ=900 nm, M=1，典型 0.5 A/W。量子效率典型 70%。增益条件 λ=900 nm。卷带包装一行写成 vaccum-sealed。应用写 Optical rangefinders。工作温度 -30 to +100 °C，贮存温度 -40 to +100 °C。`,
      ]),
      page("S14645-05", "2021-03", apd("S14645-05"), [
        "产品页没有写发布日期。meta description 和特性与 S14645-02 相同，截止频率仍是 600 MHz typ. (λ=900 nm, M=100)，峰值仍是 840 nm (M=100)。",
        "规格表类型同样写成 For LiDAR(900 nm band, Low bias operation)。感光面积 φ0.5 mm。光灵敏度 0.5 A/W，暗电流最大 0.8 nA，截止频率 600 MHz，终端电容 1 pF，击穿电压 175 V，温度系数 1.1 V/℃，增益 100。光灵敏度条件仍是 λ=900 nm, M=1。",
        `索引 ${apdIndex} 这一行 newState 是 false。终端电容典型写成 1 pF，不是 1.0 pF。暗电流最大 0.8 nA。手册仍标 607 KB。`,
        `手册仍是 ${s14645Sheet}，记为约 2021 年 3 月。这一列有效感光面积 0.19 mm2。暗电流典型 80 pA、最大 800 pA。终端电容典型 1.0 pF。截止频率仍是 600 MHz。击穿电压范围与 S14645-02 相同。`,
      ]),
    ],
  },
  {
    id: "s15413",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S15413：滨松增益稳定型 Si APD",
    summary:
      "产品页没有写发布日期，og:description 是空的。手册目录号 KAPD1090E03，页脚写 Jun. 2025 DN，并写 current as of June 2025，记为约 2025 年 6 月。索引 newState 是 false。索引说明写 standard products are automotive-grade。索引的击穿电压和温度系数是 --。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S15413-02", "2025-06", apd("S15413-02"), [
        "产品页没有写发布日期。二级标题写 High-speed, compact Si APD that does not require temperature adjustment。正文写 gain-stabilized APD (GS APD) with a built-in temperature compensation function inside the sensor，并写 from consumer to industrial。特性写 Built-in temperature compensation function、Compact package: 2.0 × 1.8 × 0.85 t mm、Peak sensitivity wavelength: 760 nm (M=50)、Cutoff frequency=1.5 GHz typ (λ=660 nm, M=50)。0.85 和 t 之间有空格。typ 和括号之间没有句点。",
        "规格表类型 Gain-stabilized type。感光面积 φ0.2 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 760 nm，光谱范围 400 to 1000 nm，光灵敏度 0.42 A/W，暗电流最大 0.1 nA，截止频率 1500 MHz，终端电容 0.6 pF，增益 50。规格表没有击穿电压行，也没有温度系数行。测量条件只写 Typ. Ta=25 ℃，unless otherwise noted，没有写波长。",
        `索引 ${apdIndex} 这一行 newState 是 false。${apdIntro}productExp 写 High-speed, compact Si APD that does not require temperature adjustment。击穿电压和击穿电压温度系数都是 --。手册标 360 KB。产品页下载标 360 KB/PDF。`,
        `手册 ${s15413Sheet}。目录号 KAPD1090E03，页脚写 Jun. 2025 DN，并写 The content of this document is current as of June 2025，记为约 2025 年 6 月。封装 Glass epoxy，密封材料 Silicone resin。厚度写成 0.85t mm，t 前没有空格。光灵敏度条件 λ=660 nm, M=1，典型 0.42 A/W。量子效率典型 85%，同一波长。暗电流在增益稳定模式，典型 10 pA、最大 100 pA。截止频率典型 1.5 GHz，特性条件 λ=660 nm, M=50。增益最小 40、典型 50、最大 60。增益控制范围 30 to 100，条件 λ=660 nm。工作反向电压写成 110 + 0.42 × (Ta opr -25)。注 *5 写 Ta opr=assumed maximum operating temperature。工作温度 -30 to +105 °C，贮存温度 -40 to +105 °C。应用写 Optical rangefinders。`,
      ]),
    ],
  },
  {
    id: "s15414",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S15414：滨松增益稳定型 Si APD",
    summary:
      "产品页没有写发布日期，两页的 og:description 都是空的。共用手册目录号 KAPD1089E04，正文写 current as of March 2026，页脚另起一行写 Mar. 2026 DN，记为约 2026 年 3 月。索引 newState 都是 false。索引说明写 standard products are automotive-grade。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S15414-02", "2026-03", apd("S15414-02"), [
        "产品页没有写发布日期。正文用 S15414 series，并写 from consumer to industrial。特性写 Compact package: 2.0 × 1.8 × 0.85 t mm、Peak sensitivity wavelength: 800 nm (M=50)、cutoff frequency=1.2 GHz typ. (λ=800 nm, M=50)。cutoff 用了小写。",
        "规格表类型 Gain-stabilized type。感光面积 φ0.2 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 800 nm，光谱范围 400 to 1000 nm，光灵敏度 0.52 A/W，暗电流最大 0.15 nA，截止频率 1200 MHz，终端电容 0.6 pF，增益 50。没有击穿电压行。测量条件没有写波长。",
        `索引 ${apdIndex} 这一行 newState 是 false。击穿电压和温度系数是 --。截止频率典型 1200 MHz。手册标 394 KB。`,
        `手册 ${s15414Sheet}。目录号 KAPD1089E04，正文写 current as of March 2026，页脚写 Mar. 2026 DN，记为约 2026 年 3 月。特性把截止频率写成 1.2 GHz typ.，并注明 S15414-02。封装 Glass epoxy，密封材料 Silicone resin，厚度 0.85t mm。暗电流典型 15 pA、最大 150 pA。终端电容条件 M=50, f=1 MHz。量子效率典型 80%，条件 λ=800 nm, M=1。增益 40、50、60。增益控制范围 30 to 100。工作反向电压写成 140 + 0.63 × (Ta opr -25)。注 *5 写 Ta opr=assumed maximum operating temperature。工作温度 -30 to +105 °C，贮存温度 -40 to +105 °C。`,
      ]),
      page("S15414-05", "2026-03", apd("S15414-05"), [
        "产品页没有写发布日期。特性把截止频率写成 cutoff frequency=1.0 GHz typ. (λ=800 nm, M=50)，峰值仍是 800 nm (M=50)。封装尺寸同样写成 2.0 × 1.8 × 0.85 t mm。",
        "规格表感光面积 φ0.5 mm，封装 Glass epoxy。光灵敏度 0.52 A/W，暗电流最大 0.3 nA，截止频率 1000 MHz，终端电容 1.4 pF，增益 50。没有击穿电压行。",
        `索引 ${apdIndex} 这一行 newState 是 false。截止频率典型 1000 MHz，终端电容典型 1.4 pF，暗电流最大 0.3 nA。击穿电压是 --。手册仍标 394 KB。`,
        `手册仍是 ${s15414Sheet}，记为约 2026 年 3 月。电特性表这一列截止频率 1.0 GHz。暗电流典型 30 pA、最大 300 pA。终端电容典型 1.4 pF。增益仍是 40、50、60。系列特性的 1.2 GHz 只点了 S15414-02。`,
      ]),
    ],
  },
  {
    id: "s15415",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S15415：滨松增益稳定型 Si APD",
    summary:
      "产品页没有写发布日期，og:description 是空的。共用手册目录号 KAPD1088E03，页脚写 Jun. 2025 DN，并写 current as of June 2025，记为约 2025 年 6 月。索引 newState 都是 false。索引说明写 standard products are automotive-grade。峰值写 840 nm，截止频率和光灵敏度的波长条件写 905 nm。",
    applications: ["auto", "consumer"],
    technologies: [],
    models: [
      page("S15415-02", "2025-06", apd("S15415-02"), [
        "产品页没有写发布日期。正文写 from consumer to industrial。特性写 Peak sensitivity wavelength: 840 nm (M=50)、cutoff frequency=500 MHz typ. (λ=905 nm, M=50)、Compact package: 2.0 × 1.8 × 0.85 t mm。cutoff 用了小写。",
        "规格表类型 Gain-stabilized type。感光面积 φ0.2 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 840 nm，光谱范围 400 to 1100 nm，光灵敏度 0.5 A/W，暗电流最大 0.2 nA，截止频率 500 MHz，终端电容 0.5 pF，增益 50。没有击穿电压行。测量条件没有写波长。",
        `索引 ${apdIndex} 这一行 newState 是 false。击穿电压和温度系数是 --。峰值典型 840 nm。手册标 388 KB。`,
        `手册 ${s15415Sheet}。目录号 KAPD1088E03，页脚写 Jun. 2025 DN，并写 current as of June 2025，记为约 2025 年 6 月。特性截止频率写 500 MHz typ.，条件 λ=905 nm, M=50。光灵敏度条件 λ=905 nm, M=1，典型 0.5 A/W。量子效率典型 70%。暗电流典型 20 pA、最大 200 pA。终端电容条件 M=50, f=1 MHz，典型 0.5 pF。增益 40、50、60。增益控制范围 30 to 100，条件 λ=905 nm。工作反向电压写成 185 + 1.1 × (Ta opr - 25)。注 *5 写 Ta opr=assumed maximum operating temperature (°C)。封装 Glass epoxy，密封材料 Silicone resin。工作温度 -30 to +105 °C，贮存温度 -40 to +105 °C。`,
      ]),
      page("S15415-05", "2025-06", apd("S15415-05"), [
        "产品页没有写发布日期。特性与 S15415-02 一样写 cutoff frequency=500 MHz typ. (λ=905 nm, M=50)，峰值 840 nm (M=50)。",
        "规格表感光面积 φ0.5 mm。光灵敏度 0.5 A/W，暗电流最大 0.4 nA，截止频率 500 MHz，终端电容 1.1 pF，增益 50。没有击穿电压行。",
        `索引 ${apdIndex} 这一行 newState 是 false。终端电容典型 1.1 pF，暗电流最大 0.4 nA。击穿电压是 --。手册仍标 388 KB。`,
        `手册仍是 ${s15415Sheet}，记为约 2025 年 6 月。这一列暗电流典型 40 pA、最大 400 pA。终端电容典型 1.1 pF。截止频率仍是 500 MHz。增益仍是 40、50、60。`,
      ]),
    ],
  },
  {
    id: "s15639",
    date: "2024-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S15639：滨松 LiDAR 用 MPPC",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1085E02，页脚写 Nov. 2024 DN，Cat. No. 和编号之间没有空格，并写 current as of November 2024，记为约 2024 年 11 月。索引 newState 是 false。特性里的 9% 和电特性表里 VBR + 10 V 的 7.5% 不是同一个条件。",
    applications: ["auto"],
    technologies: ["tof"],
    models: [
      page("S15639-1325PS", "2024-11", mppc("S15639-1325PS"), [
        "产品页没有写发布日期。二级标题写 Near infrared high sensitivity MPPC (SiPM)，infrared 和 sensitivity 都没有连字符。正文写 surface mount type MPPC (SiPM) designed for automotive LiDAR applications that achieves high sensitivity and low afterpulses。特性写 High photon detection efficiency: 9% (λ=905 nm)、Low afterpulse probability: 1% max.、High gain: 1.3 × 10^6、Low crosstalk。6 是上标。Low crosstalk 没有给出数字。",
        "规格表封装 Glass epoxy，通道数 1 ch，有效感光面积 1.3 × 1.1 mm，像素数 2120，像素尺寸 25 μm，光谱范围 400 to 1000 nm，峰值 660 nm，暗计数 700 kcps，终端电容 42 pF，增益 1.3 × 10^6。测量条件 Ta=25 ℃。规格表没有光子探测效率，也没有串扰。",
        `索引 ${mppcIndex} 的说明写 enhanced sensitivity at 905 nm (the wavelength commonly used for TOF LiDAR)，并写 high internal gain to keep output signal above the noise floor of the system's electronics。这一行 newState 是 false。productExp 与二级标题相同，没有连字符。暗计数典型 700 kcps。手册标 525 KB。`,
        `手册 ${s15639Sheet}。页脚写 Cat. No.KAPD1085E02 Nov. 2024 DN，No. 和编号之间没有空格，并写 current as of November 2024，记为约 2024 年 11 月。标题写 MPPC® (Multi-Pixel Photon Counter)。密封材料 Silicone resin，窗口折射率 1.57。特性的光子探测效率是 9% (λ=905 nm)。电特性表在 VR=VBR + 10 V 写典型 7.5%，另一行 λ=905 nm, VR=VBR + 14 V 写 9%。暗计数率条件 VR=VBR + 10 V，典型 0.7 Mcps、最大 2.0 Mcps。串扰概率典型 4%。后脉冲最大 1%。增益典型 1.3 × 10^6。击穿电压最小 37 V、典型 42 V、最大 47 V。推荐工作电压从 VBR + 10 V 到 VBR + 14 V。暗电流典型 0.2 μA、最大 0.45 μA。峰值波长 660 nm。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。应用写 Distance measurement 和 LiDAR。`,
      ]),
    ],
  },
  {
    id: "s16786",
    date: "2025-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S16786：滨松 LiDAR 用 MPPC",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1091E05，页脚写 Jul. 2025 DN，Cat. No. 和编号之间没有空格，并写 current as of July 2025，记为约 2025 年 7 月。索引 newState 是 false。索引和产品页的增益是 7.3 × 10^5，手册电特性表是 7.0 × 10^5。",
    applications: [],
    technologies: ["tof"],
    models: [
      page("S16786-0515WM", "2025-07", mppc("S16786-0515WM"), [
        "产品页没有写发布日期。二级标题写 Near-infrared high-sensitivity MPPC (SiPM)，两处都有连字符。正文写 designed for LiDAR applications。下一句写 The smaller SPAD (Single Photon Avalanche Diode) size improves the dynamic range, and the microlens provide a high PDE (Photon Detection Efficiency)。provide 用了复数主语下的原形。再写 MPPCs come standard with a trench to reduce crosstalk。特性写 High photon detection efficiency: 15% (λ=905 nm)、Low crosstalk probability: 2% typ.、Equipped with microlens。",
        "规格表封装 Glass epoxy，通道数 1 ch，有效感光面积 0.5 × 0.5 mm，像素数 1089，像素尺寸 15 μm，光谱范围 400 to 1000 nm，峰值 660 nm，暗计数 100 kcps，终端电容 8 pF，增益 7.3 × 10^5。5 是上标。测量条件 Ta=25 ℃。规格表没有填充率和光子探测效率。",
        `索引 ${mppcIndex} 这一行 newState 是 false。说明仍写 TOF LiDAR 常用的 905 nm。productExp 与二级标题相同。增益典型 7.3 × 10^5。暗计数典型 100 kcps。手册标 360 KB。`,
        `手册 ${s16786Sheet}。页脚写 Cat. No.KAPD1091E05 Jul. 2025 DN，并写 current as of July 2025，记为约 2025 年 7 月。窗口材料写 Borosilicate glass with AR coating，折射率 1.53。填充率 90%。光子探测效率典型 15%，条件 λ=905 nm, VR=VBR + 14 V。串扰概率典型 2%。后脉冲最大 1%。增益典型写成 7.0 × 10^5，和索引、产品页的 7.3 × 10^5 不同。暗计数率典型 100 kcps、最大 500 kcps，条件 VR=VBR + 14 V。击穿电压典型 42 V。暗电流典型 0.01 μA。终端电容条件 f=100 kHz，典型 8 pF。峰值波长 660 nm。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。应用写 Distance measurement 和 LiDAR。`,
      ]),
    ],
  },
  {
    id: "g8931",
    date: "2019-07",
    companyId: "hamamatsu",
    category: "product",
    title: "G8931：滨松 InGaAs APD",
    summary:
      "产品页没有写发布日期。三只共用手册目录号 KAPD1018E06，页脚写 Jul. 2019 DN，并写 current as of July 2019，记为约 2019 年 7 月。索引 newState 都是 false。索引标题在 APDs 和竖线之间有两个空格。",
    applications: [],
    technologies: [],
    models: [
      page("G8931-04", "2019-07", ingaas("G8931-04"), [
        "产品页没有写发布日期。可见正文写 The G8931 series are InGaAs APDs used for distance measurement, optical communication, and low-light-level detection。下一句写 high-speed response at 2.5 Gbps, which is necessary for SONET, G/GE-PON, and other optical trunk lines。meta description 把同一只写成 trunk line optical fiber communications，并把 G-PON 和 GE-PON 分开写，还写出 synchronous optical network、gigabit-capable passive optical network、gigabit ethernet-passive optical network。meta 特性另有 Active area: φ0.04 mm。",
        "规格表感光面积 φ0.04 mm，封装 Metal，封装类别 TO-18。光谱范围 950 nm to 1700 nm，峰值 1550 nm，光灵敏度 0.9 A/W，暗电流最大 65 nA，截止频率 4000 MHz，终端电容 0.35 pF，击穿电压 55 V，温度系数 0.11 V/℃。测量条件 Ta=25℃，Photosensitivity: λ=1550 nm, M=1。规格表没有 2.5 Gbps。",
        `索引 ${ingaasIndex} 的标题写成 InGaAs APDs  | Hamamatsu Photonics，APDs 和竖线之间有两个空格。说明写 high near-infrared sensitivity for low light detection at high speeds。这一行 newState 是 false。productExp 写 High-speed response InGaAs APD。typeNameSort 写成 G08931-0004。手册标 722 KB。`,
        `手册 ${g8931Sheet}。目录号 KAPD1018E06，页脚写 Jul. 2019 DN，并写 current as of July 2019，记为约 2019 年 7 月。窗口 Borosilicate glass (AR coated: 1.55 µm)。光谱范围写成 0.95 to 1.7 µm。光灵敏度最小 0.8 A/W、典型 0.9 A/W，条件 λ=1.55 µm, M=1。暗电流条件 VR=VBR × 0.9，典型 40 nA、最大 65 nA。截止频率条件 M=10，最小 3 GHz、典型 4 GHz。终端电容典型 0.35 pF、最大 0.45 pF。击穿电压最小 40 V、典型 55 V、最大 60 V。增益最小 20、典型 30，条件 λ=1.55 µm, Ipo=1 µA。工作温度 -40 to +85 °C，贮存温度 -55 to +125 °C。应用写 Distance measurement、Optical communications、Low-light-level detection。`,
      ]),
      page("G8931-10", "2019-07", ingaas("G8931-10"), [
        "产品页没有写发布日期。meta description 写 The G8931-10 is a InGaAs APD，a 后面直接接 InGaAs。同一段写 distance measurement, optical communication, and low-light-level detection。meta 特性写 Large photosensitive area: φ0.1 mm。可见特性只列出 Low dark current、Low capacitance、High sensitivity。",
        "规格表感光面积 φ0.1 mm，封装 Metal，封装类别 TO-18。光谱范围 950 nm to 1700 nm，峰值 1550 nm，光灵敏度 0.9 A/W，暗电流最大 140 nA，截止频率 1500 MHz，终端电容 0.7 pF，击穿电压 55 V，温度系数 0.11 V/℃。测量条件把光灵敏度写成 λ=1.55 μm, M=1。",
        `索引 ${ingaasIndex} 这一行 newState 是 false。productExp 仍是 High-speed response InGaAs APD。typeNameSort 写成 G08931-0010。手册仍标 722 KB。`,
        `手册仍是 ${g8931Sheet}，记为约 2019 年 7 月。系列引言把大感光面积写在 G8931-20 的 φ0.2 mm 上。这一列暗电流典型 90 nA、最大 140 nA。截止频率最小 0.8 GHz、典型 1.5 GHz。终端电容典型 0.7 pF、最大 1 pF。光灵敏度最小 0.8 A/W、典型 0.9 A/W。击穿电压仍是 40 V、55 V、60 V。`,
      ]),
      page("G8931-20", "2019-07", ingaas("G8931-20"), [
        "产品页没有写发布日期。meta description 写 large area InGaAs APD designed for distance measurement, spatial light transmission and low-light-level detection, etc。并写 typical cut-off frequency 0.9 GHz at M=10。cut-off 有连字符。meta 特性含 Low voltage operation 和 Photosensitive area: φ0.2 mm。可见特性写 Large photosensitive area: φ0.2 mm、Low dark current、Low capacitance、High sensitivity，没有 Low voltage operation。",
        "规格表感光面积 φ0.2 mm，封装 Metal，封装类别 TO-18。光谱范围 950 nm to 1700 nm，峰值 1550 nm，光灵敏度 0.9 A/W，暗电流最大 200 nA，截止频率 900 MHz，终端电容 1.5 pF，击穿电压 55 V，温度系数 0.11 V/℃。测量条件 λ=1.55 μm, M=1。",
        `索引 ${ingaasIndex} 这一行 newState 是 false。typeNameSort 写成 G08931-0020。截止频率典型 900 MHz。手册仍标 722 KB。`,
        `手册仍是 ${g8931Sheet}，记为约 2019 年 7 月。引言写 The G8931-20 features a large ϕ0.2 mm photosensitive area。暗电流典型 150 nA、最大 200 nA。截止频率最小 0.6 GHz、典型 0.9 GHz，条件 M=10。终端电容典型 1.5 pF、最大 2 pF。光灵敏度最小 0.8 A/W、典型 0.9 A/W。`,
      ]),
    ],
  },
  {
    id: "g14858",
    date: "2024-12",
    companyId: "hamamatsu",
    category: "product",
    title: "G14858：滨松 InGaAs APD",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1068E01，页脚写 Dec. 2024 DN，并写 current as of December 2024，记为约 2024 年 12 月。索引 newState 是 false。索引标题在 APDs 和竖线之间有两个空格。",
    applications: [],
    technologies: [],
    models: [
      page("G14858-0020AA", "2024-12", ingaas("G14858-0020AA"), [
        "产品页没有写发布日期。二级标题写 InGaAs APD that greatly reduces dark current。正文写 greatly reduces dark current over existing products by the use of a new device structure and improved processing，并写 used for distance measurement, low-light-level detection, and so on。特性写 Low dark current、Low capacitance、High sensitivity。",
        "规格表感光面积 φ0.2 mm，封装 Metal，封装类别 TO-18。光谱范围 950 nm to 1700 nm，峰值 1550 nm，光灵敏度 0.8 A/W，暗电流最大 50 nA，截止频率 900 MHz，终端电容 2.0 pF，击穿电压 65 V，温度系数 0.1 V/℃。测量条件 Ta=25℃，Photosensitivity: λ=1.55 μm, M=1。",
        `索引 ${ingaasIndex} 这一行 newState 是 false。productExp 与二级标题相同。typeNameSort 写成 G14858-0020AA。手册标 551 KB。`,
        `手册 ${g14858Sheet}。目录号 KAPD1068E01，页脚写 Dec. 2024 DN，并写 current as of December 2024，记为约 2024 年 12 月。窗口 Borosilicate glass (AR coated: 1.55 µm)。感光面积写成 ɸ0.2 mm。光谱范围 0.95 to 1.7 µm。光灵敏度最小 0.65 A/W、典型 0.8 A/W，条件 λ=1.55 µm, M=1。暗电流条件 VR=VBR × 0.95，典型 20 nA、最大 50 nA。截止频率典型 0.9 GHz，条件 M=10, RL=50 Ω。终端电容条件 VR=VBR × 0.95, f=1 MHz，典型 2.0 pF。击穿电压最小 50 V、典型 65 V、最大 80 V。温度系数符号写成 Γ，范围 -40 to +85 °C，典型 0.1 V/°C。增益典型 30，条件 λ=1.55 µm, -30 dBm。工作温度 -40 to +85 °C，贮存温度 -55 to +125 °C。应用写 Distance measurement 和 Low-light-level detection。`,
      ]),
    ],
  },
];
