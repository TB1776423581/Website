const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-laser-beam-synchronous-detection/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-laser-beam-synchronous-detection.html";

const s11257Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11257-01dt_etc_kpic1067e.pdf";

const s9684Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9684_etc_kpic1056e.pdf";

const s9703Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9703-11_kpic1068e.pdf";

const indexIntro =
  "索引标题写 Photo IC for laser beam synchronous detection。说明写 These photo ICs detect laser beam printing start timing in laser beam printers and digital copiers。表内产品名写成 Photo IC for laser beam sync detection。";

export const laserSyncProducts = [
  {
    id: "s13114",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S13114：滨松激光束同步检测用 Photo IC",
    summary:
      "产品页没有写发布日期。两只与 S11257-01DT 共用手册目录号 KPIC1067E08，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。索引 newState 都是 true。手册选型表也标 NEW。两只的电特性在手册里合成 S13114 series。",
    applications: [],
    technologies: [],
    models: [
      page("S13114-01DT", "2025-06", part("S13114-01DT"), [
        "产品页没有写发布日期。页眉写 Photo IC for laser beam sync detection。二级标题写 Low voltage operation (3.3 V)。正文写 high-speed PIN photodiode designed for laser beam synchronous detection，并写 operates at a low voltage (3.3 V) compatible with low-voltage peripheral components mounted on the same PC board。特性写 Current amplifier gain: 20 times、Digital output、Small package、Suitable for lead-free solder reflow、Photosensitive area: 2.84 mm × 0.25 mm、Surface mount type (Gull wing type)。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 1，Operating Supply voltage 3.3 V，类型 Low-voltage operation (3.3 V)。测量条件写 Ta=25 ℃, unless otherwise noted。规格表没有感光面积，也没有增益。页面下载标 366 KB/PDF。",
        `索引 ${index} 这一行 newState 是 true。${indexIntro}productExp 写 Low voltage (3.3 V) operation, 20 times larger current amp gain。typeNameSort 写成 S13114-01DT。手册标 366 KB。`,
        `手册 ${s11257Sheet}。目录号 KPIC1067E08，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。封面把 S13114 series 标成 NEW。选型表这一列增益 20 times，封装写 Surface mount types (Gull wing type)，types 是复数。推荐工作电压最小 3.15 V、典型 3.3 V、最大 3.45 V。无输入电流典型 0.85 mA、最大 1.5 mA。阈值光功率最小 14 µW、典型 19 µW、最大 24 µW。tPHL 典型 130 ns、最大 250 ns，tPLH 典型 200 ns、最大 300 ns。上升和下降时间都是典型 4 ns、最大 7 ns。高电平输出最小 2.9 V。工作温度 -25 to +80 °C，贮存温度 -40 to +85 °C。回流峰值 240 °C max., 1 time，并写 JEDEC level 5a。应用写 Print start timing detection for laser printers, digital copiers, fax machines, etc。引言还点名索引上没有的 S10317 series，这一页不另收。`,
      ]),
      page("S13114-02DT", "2025-06", part("S13114-02DT"), [
        "产品页没有写发布日期。页眉同样写 Photo IC for laser beam sync detection。二级标题和正文与 S13114-01DT 相同，增益仍写 20 times，感光面积仍写 2.84 mm × 0.25 mm。封装特性写成 Surface mount type (Straight lead type)。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 1，Operating Supply voltage 3.3 V，类型 Low-voltage operation (3.3 V)。测量条件仍是 Ta=25 ℃, unless otherwise noted。规格表没有区分直脚和鸥翼。页面下载标 366 KB/PDF。",
        `索引 ${index} 这一行 newState 是 true。productExp 与 S13114-01DT 相同，没有写 Straight lead。typeNameSort 写成 S13114-02DT。手册仍标 366 KB。`,
        `手册仍是 ${s11257Sheet}，记为约 2025 年 6 月。选型表这一列封装写 Surface mount types (Straight lead type)。电特性表把两只合成 S13114 series，阈值、延迟和电流与 S13114-01DT 同一列。`,
      ]),
    ],
  },
  {
    id: "s11257",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S11257：滨松激光束同步检测用 Photo IC",
    summary:
      "产品页没有写发布日期。与 S13114 共用手册目录号 KPIC1067E08，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。索引 newState 是 false。产品页感光面积写成 2.84 × 0.25 mm，手册写成 2.84 mm × 0.25 mm。",
    applications: [],
    technologies: [],
    models: [
      page("S11257-01DT", "2025-06", part("S11257-01DT"), [
        "产品页没有写发布日期。页眉写 Photo IC for laser beam sync detection。二级标题写 Low voltage operation (3.3 V)。正文与 S13114 同一段用途，写 high-speed PIN photodiode designed for laser beam synchronous detection。特性写 Current amplifier gain: 6 times、Digital output、Small package、Suitable for lead-free solder reflow、Photosensitive area: 2.84 × 0.25 mm。2.84 后面没有 mm。特性里没有写 Gull wing。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 1，Operating Supply voltage 3.3 V，类型 Low-voltage operation (3.3 V)。测量条件写 Ta=25 ℃, unless otherwise noted。页面下载标 366 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。productExp 写 Low voltage (3.3 V) operation, 6 times larger current amp gain, Photosensitive area: 2.84 x 0.25 mm。乘号是 x。typeNameSort 写成 S11257-01DT。手册标 366 KB。`,
        `手册 ${s11257Sheet}，记为约 2025 年 6 月。引言写 The S10317 series and S11257-01DT photo IC use，photo IC 用单数，并写 gain of 6 times (S11257-01DT) and 20 times (S13114 series)。选型表封装写 Surface mount types (Gull wing type)。推荐工作电压最小 3.135 V、典型 3.3 V、最大 3.45 V，最小电压比 S13114 series 的 3.15 V 多一位。无输入电流典型 0.7 mA、最大 1.5 mA。阈值光功率最小 49.5 µW、典型 62 µW、最大 74.5 µW。tPHL 典型 100 ns、最大 200 ns，tPLH 典型 150 ns、最大 250 ns。感光面积写成 2.84 mm × 0.25 mm。工作温度 -25 to +80 °C，贮存温度 -40 to +85 °C。应用写 Print start timing detection for laser printers, digital copiers, fax machines, etc。`,
      ]),
    ],
  },
  {
    id: "s11282",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S11282：滨松激光束同步检测用 Photo IC",
    summary:
      "产品页没有写发布日期。与 S9684 共用手册目录号 KPIC1056E09，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。索引 newState 是 false。产品页把 compare 用在单数主语后面。",
    applications: [],
    technologies: [],
    models: [
      page("S11282-01DS", "2025-06", part("S11282-01DS"), [
        "产品页没有写发布日期。页眉写 Photo IC for laser beam sync detection。二级标题写 High-sensitivity and high-speed photo IC for high precision printing。正文写 uses a dual-element Si PIN photodiode and compare the two signals，compare 没有加 s。再写 operates at a low voltage (3.3 V) compatible with low-voltage peripheral components。特性写 Current amplifier gain: 20 times、Photosensitive area (PD1: 2.5 × 0.3 mm, PD2: 2.5 × 0.5 mm)、Low voltage (3.3 V) operation。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 2，Operating Supply voltage 3.3 V，类型 Low-voltage operation (3.3 V)。测量条件写 Ta=25 ℃, unless otherwise noted。页面下载标 344 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。productExp 写 High-sensitivity and high-speed photo IC for high precision printing, Low voltage (3.3 V) operation。typeNameSort 写成 S11282-01DS。手册标 344 KB。`,
        `手册 ${s9684Sheet}。目录号 KPIC1056E09，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。选型表推荐工作电压 3.3 V，增益 20 times，封装写 Surface mount types (Gull wing type)。无输入电流最大 3.2 mA，表里没有典型值。阈值光功率最小 10.5 µW、典型 14.5 µW、最大 18.5 µW。高电平输出最小 2.9 V。传播延迟变化最大 ±5 ns。上升和下降时间典型 4 ns、最大 7 ns。条件写 λ=780 nm，Vcc=3.3 V。工作温度 -25 to +80 °C，贮存温度 -40 to +85 °C，两行都写 No condensation。应用写 Print start timing detection for laser printers, digital copiers, fax machines, etc。`,
      ]),
    ],
  },
  {
    id: "s9684",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S9684：滨松激光束同步检测用 Photo IC",
    summary:
      "产品页没有写发布日期。两只与 S11282-01DS 共用手册目录号 KPIC1056E09，页脚写 Jun. 2025 DN，并写 Information described in this material is current as of June 2025，记为约 2025 年 6 月。索引 newState 都是 false。S9684-01 的特性把 gain: 和 6 连在一起。索引 typeNameSort 在 S 后面加了 0。",
    applications: [],
    technologies: [],
    models: [
      page("S9684", "2025-06", part("S9684"), [
        "产品页没有写发布日期。页眉写 Photo IC for laser beam sync detection。二级标题写 High-sensitivity and high-speed photo IC for high precision printing。正文写 uses a dual-element Si PIN photodiode and compares the two signals。特性写 Current amplifier gain: 20 times、Photosensitive area (PD1: 2.5 × 0.3 mm, PD2: 2.5 × 0.5 mm)。没有写 3.3 V。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 2，Operating Supply voltage 5 V，类型 Standard type。测量条件写 Ta=25 ℃, unless otherwise noted。页面下载标 344 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。productExp 与二级标题相同，没有写 20 times。typeNameSort 写成 S09684。手册标 344 KB。`,
        `手册 ${s9684Sheet}，记为约 2025 年 6 月。选型表推荐工作电压 5.0 V，增益 20 times。无输入电流这一列最大 4 mA，没有典型值。阈值光功率最小 7.5 µW、典型 10 µW、最大 12.5 µW。高电平输出最小 4.6 V，条件 IOH=4 mA，并写 Vcc=5 V。传播延迟变化最大 ±5 ns。工作温度 -25 to +80 °C，贮存温度 -40 to +85 °C。应用写 Print start timing detection for laser printers, digital copiers, fax machines, etc。`,
      ]),
      page("S9684-01", "2025-06", part("S9684-01"), [
        "产品页没有写发布日期。二级标题和正文与 S9684 相同，compares 有 s。特性把增益写成 Current amplifier gain:6 times，冒号和 6 之间没有空格。感光面积仍是 PD1: 2.5 × 0.3 mm, PD2: 2.5 × 0.5 mm。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 2，Operating Supply voltage 5 V，类型 Standard type。测量条件与 S9684 相同。页面下载标 344 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。productExp 与 S9684 相同，没有写 6 times。typeNameSort 写成 S09684-01。手册仍标 344 KB。`,
        `手册仍是 ${s9684Sheet}，记为约 2025 年 6 月。选型表增益写成 6 times。阈值光功率最小 26 µW、典型 35 µW、最大 44 µW。电流最大仍是 4 mA，高电平输出最小仍是 4.6 V。注 *4 把这一列的输入功率写成 140 µW。`,
      ]),
    ],
  },
  {
    id: "s9703",
    date: "2020-02",
    companyId: "hamamatsu",
    category: "product",
    title: "S9703：滨松激光束同步检测用 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1068E04，页脚写 Feb. 2020 DN，并写 Information described in this material is current as of February 2020，记为约 2020 年 2 月。索引 newState 是 false。产品页点名 S9703 和 S9703-01，手册只点名 S9703-01。索引 typeNameSort 写成 S09703-11。",
    applications: [],
    technologies: [],
    models: [
      page("S9703-11", "2020-02", part("S9703-11"), [
        "产品页没有写发布日期。页眉写 Photo IC for laser beam sync detection。二级标题写 High sensitivity, high-speed response。正文写 When compared to S9703 and S9703-01 previously marketed, S9703-11 has reduced its reflection effects in the package。特性写 Current amplifier gain: 6 times、Digital output、Small package、Suitable for lead-free solder reflow、Active area: 2.84 × 0.5 mm。",
        "规格表封装 Plastic，封装类别 Surface mount type，元件数 1，Operating Supply voltage 5 V，类型 Standard type。测量条件写 Ta=25 ℃, unless otherwise noted。规格表没有感光面积。页面下载标 307 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。productExp 写 High sensitivity, high-speed response, 6 times larger current amp gain。typeNameSort 写成 S09703-11。手册标 307 KB。`,
        `手册 ${s9703Sheet}。目录号 KPIC1068E04，页脚写 Feb. 2020 DN，并写 Information described in this material is current as of February 2020，记为约 2020 年 2 月。正文只比较 the S9703-01 previously marketed，并写 the S9703-11 has reduced their reflection effects，their 用在一只型号上。特性把面积写成 Photosensitive area: 2.84 × 0.5 mm，产品页写 Active area。电流无输入典型 0.9 mA、最大 1.5 mA。阈值光功率最小 60 μW、典型 75 μW、最大 90 μW。tPHL 典型 75 ns、最大 150 ns，tPLH 典型 150 ns、最大 200 ns。条件写 λ=780 nm, Vcc=5 V, Ro=5.1 kΩ。输出电流一行写成 5m A，Ro 端电流写成 3m A。另写 Tape-and-reel shipment (S9703-31) is available。S9703、S9703-01 和 S9703-31 不在这条索引上，这一页不另收。工作温度 -25 to +80 °C，贮存温度 -40 to +85 °C。应用写 Print start timing detection for laser printers, digital copiers, fax machines, etc。`,
      ]),
    ],
  },
];
