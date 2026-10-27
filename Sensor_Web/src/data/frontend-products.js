const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/photosensor-with-front-end-ic/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/lidar-sensor/photosensor-with-front-end-ic.html";

const s13645Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13645-01cr_kpic1097e.pdf";

const s14137Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s14137-01cr_kpic1107e.pdf";

const s15597Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15597-01ct_etc_kpic1108e.pdf";

const s16429Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s16429_series_kpic1112e.pdf";

const s16430Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s16430-01cr_kpic1111e.pdf";

const indexIntro =
  "索引说明写 Devices that integrate a photosensor, such as a photodiode or avalanche photodiode (APD), and front-end integrated circuit (IC) that reads the signals from the photosensor。Suitable for rangefinders because of their excellent noise and frequency characteristics。";

export const frontendProducts = [
  {
    id: "s13645",
    date: "2024-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S13645：滨松带前端 IC 的光传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1097E16，页脚写 Nov. 2024 DN，并写 current as of November 2024，记为约 2024 年 11 月。索引 newState 是 false。产品页特性写 No waveform distortion，手册写 Small waveform distortion。",
    applications: [],
    technologies: [],
    models: [
      page("S13645-01CR", "2024-11", part("S13645-01CR"), [
        "产品页没有写发布日期。页面标题写 Photosensor with front-end IC S13645-01CR。一级标题只写 S13645-01CR。二级标题写 Compact 16-element APD array suitable for various light level detection (serial output)。正文写 integrates 16-element Si APD array and preamp，并写 output can be obtained from any one channel speciﬁed in the selection logic。effects 印成 eﬀects，specified 用了 ﬁ 连字。特性写 High-speed response: 180 MHz、Two-level gain switch function，下一行用全角空格再写 (Low gain: single output, High gain: differential output)、Reduced background light effects、No waveform distortion when excessive light is incident。",
        "规格表封装 Plastic，通道数 16 ch，每通道感光面积 1.0 × 0.4 mm，光谱范围 400 to 1150 nm，峰值 840 nm，光灵敏度 900 kV/W，高频截止 180 MHz。备注写 Photosensitivity: High gain, λ=905 nm, M=50，以及 High cutoff frequency: Low gain。规格表没有测量温度。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与二级标题相同。封装底层取值和显示都是 Plastic。typeNameSort 写成 S13645-01CR。缩略图文件名是 k_s13645-01cr_pp_xx.jpg，thumbAlt 是空的。手册标 783 KB。`,
        `手册 ${s13645Sheet}。目录号 KPIC1097E16，页脚写 Nov. 2024 DN，并写 Information described in this material is current as of November 2024，记为约 2024 年 11 月。特性写 Small waveform distortion when excessive light is incident，增益两档的 low gain 和 high gain 用小写。结构表探测器 Si APD array，元件间距 0.5 mm，封装 Plastic。光灵敏度一行是 0.5 A/W，条件 λ=905 nm, M=1。跨阻增益低档典型 1.8 kV/A，高档典型 36 kV/A。高频截止低档典型 180 MHz，高档典型 160 MHz。峰值条件 M=100。击穿电压最小 120 V、典型 160 V、最大 200 V。暗电流条件 M=50，典型 0.4 nA、最大 4 nA。应用只写 Distance measurement。测距方法写 L = (1/2) × c × Td，没有写 TOF。注 *3 把 Measurement 印成 su ement。外形图把 Photosensitive 印成 Photosnsitive。引脚表表头最后一列写成 Pin no.，不是 Function。第 1、2、17 脚是 NC，注记写 Leave terminals 1, 2, and 17 open。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。焊接写 260 (twice)，并写 IPC/JEDEC J-STD-020 MSL 3。`,
      ]),
    ],
  },
  {
    id: "s14137",
    date: "2024-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S14137：滨松带前端 IC 的光传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1107E06，页脚写 Nov. 2024 DN，并写 current as of November 2024，记为约 2024 年 11 月。索引 newState 是 false。产品页特性写 No waveform distortion，手册写 Small waveform distortion。手册应用写 Distance measurement (e.g., LiDAR)。",
    applications: [],
    technologies: [],
    models: [
      page("S14137-01CR", "2024-11", part("S14137-01CR"), [
        "产品页没有写发布日期。二级标题写 Compact 16-element APD array suitable for various light level detection (parallel output)。正文写 integrates a 16-element APD array and a preamp，effects 印成 eﬀects，并写 The parallel output 16-element array enables simultaneous measurement of all pixels。特性写 16 ch parallel output、High-speed response: 180 MHz、Reduced background light effects、No waveform distortion when excessive light is incident。",
        "规格表封装 Plastic，通道数 16 ch，每通道感光面积 0.15 × 0.43 mm，光谱范围 420 to 1150 nm，峰值 840 nm，光灵敏度 36 kV/W，高频截止 180 MHz。备注只写 Photosensitivity: λ=905 nm, M=50，没有写高档或低档。",
        `索引 ${index} 这一行 newState 是 false。productExp 与二级标题相同。封装 Plastic。typeNameSort 写成 S14137-01CR。缩略图文件名是 k_s14137-01cr_pp_xx.jpg，thumbAlt 是空的。手册标 730 KB。`,
        `手册 ${s14137Sheet}。目录号 KPIC1107E06，页脚写 Nov. 2024 DN，并写 current as of November 2024，记为约 2024 年 11 月。特性把 Small 拆开，S 单独起一行，后面写 mall waveform distortion when excessive light is incident。结构表探测器 Si APD array，元件间距 0.5 mm，输出数 16，封装 Plastic。光灵敏度一行是 0.5 A/W，条件 λ=905 nm, M=1。跨阻增益典型 1.4 kV/A。高频截止最小 140 MHz、典型 180 MHz。峰值条件 M=100。击穿电压最小 150 V、典型 175 V、最大 200 V。暗电流条件 M=50，典型 0.1 nA、最大 1 nA。灵敏度均匀性 ±30%。串扰条件写成 FWHM=4 ns, =1 mW，等号前面没有量名。注 *4 把 Measurement 拆开。应用写 Distance measurement (e.g., LiDAR)。测距方法仍写 L = (1/2) × c × Td，没有写 TOF。电路例子写 evaluation kit: C14779-03。C14779-03 不是传感器，没有另开一页。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。焊接写 JEDEC J-STD-020 MSL 3。`,
      ]),
    ],
  },
  {
    id: "s15597",
    date: "2024-09",
    companyId: "hamamatsu",
    category: "product",
    title: "S15597：滨松带前端 IC 的光传感器",
    summary:
      "产品页没有写发布日期。与 S15658-01CT 共用手册目录号 KPIC1108E03，页脚写 Sep. 2024 DN，并写 current as of September 2024，记为约 2024 年 9 月。索引 newState 是 false。产品页正文把单只型号写成 They。",
    applications: [],
    technologies: [],
    models: [
      page("S15597-01CT", "2024-09", part("S15597-01CT"), [
        "产品页没有写发布日期。二级标题写 Compact APD suitable for various light level detection (Φ0.2 mm)，括号里的 Φ 是希腊文大写。正文写 integrates a Si APD and preamp，preamp 前面没有 a。先写 It also provides excellent noise and frequency characteristics，下一句又写 They also provide excellent noise and frequency characteristics。然后写 We provide an evaluation kit for these products。特性写 High-speed response: 180 MHz，增益两档写成 (low gain: single output, high gain: differential output)，low 和 high 是小写，括号前有全角空格。末行写 Small waveform distortion when excessive light is incident。",
        "规格表封装 Glass epoxy，通道数 1 ch，感光面积 φ0.2 mm，这里是小写 φ。光谱范围 400 to 1100 nm，峰值 840 nm，光灵敏度 3200 kV/W，高频截止 180 MHz。备注写 Photosensitivity: High gain, λ=905 nm, M=100，以及 High cutoff frequency: Low gain。",
        `索引 ${index} 这一行 newState 是 false。productExp 写 Compact APD suitable for various light level detection，没有括号里的直径。封装底层取值写 Glass，显示写成 Glass epoxy。typeNameSort 写成 S15597-01CT。缩略图文件名是 k_s15597-01ct_pp_xx.jpg，thumbAlt 是空的。手册标 929 KB。`,
        `手册 ${s15597Sheet}，与 S15658-01CT 共用，记为约 2024 年 9 月。封面标题写成 Photosensors，复数。特性只写 High-speed response，没有写 180 MHz。结构表探测器 Si APD，感光面积写成 ϕ0.2 mm，封装 Glass epoxy，密封材料 Silicone resin。注 *1 写 Photosensitive area in which a typical gain can be obtained。光灵敏度一行是 0.5 A/W，条件 λ=905 nm, M=1。跨阻增益高档典型 64 kV/A。高频截止低档典型 180 MHz、最大 260 MHz，高档典型 160 MHz。峰值条件 M=100。击穿电压最小 155 V、典型 175 V、最大 195 V。应用只写 Distance measurement。测距方法写 L = (1/2) × c × Td，没有写 TOF。外形图把 Tolerance 印成 Torelance。焊接写成 260 °C (twice)，并写 IPC/JEDEC J-STD-020 MSL 4。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。评估套件没有给出型号。`,
      ]),
    ],
  },
  {
    id: "s15658",
    date: "2024-09",
    companyId: "hamamatsu",
    category: "product",
    title: "S15658：滨松带前端 IC 的光传感器",
    summary:
      "产品页没有写发布日期。与 S15597-01CT 共用手册目录号 KPIC1108E03，页脚写 Sep. 2024 DN，并写 current as of September 2024，记为约 2024 年 9 月。索引 newState 是 false。可见正文写 for the product，meta description 又接上 for these products。",
    applications: [],
    technologies: [],
    models: [
      page("S15658-01CT", "2024-09", part("S15658-01CT"), [
        "产品页没有写发布日期。二级标题写 Compact APD suitable for various light level detection (Φ0.5 mm)，Φ 仍是希腊文大写。可见正文写 integrates a Si APD and a preamp，并写 We provide an evaluation kit for the product。meta description 在这句后面又接 They also provide excellent noise and frequency characteristics。We provide an evaluation kit for these products。Contact us for detailed information。Features 和前面连在一起，没有空格。特性写 High-speed response: 160 MHz，括号前有全角空格，并写 Small waveform distortion when excessive light is incident。",
        "规格表封装 Glass epoxy，通道数 1 ch，感光面积 φ0.5 mm。光谱范围 400 to 1100 nm，峰值 840 nm，光灵敏度 3200 kV/W，高频截止 160 MHz。备注与 S15597-01CT 相同，写 High gain, λ=905 nm, M=100，以及 High cutoff frequency: Low gain。",
        `索引 ${index} 这一行 newState 是 false。productExp 与 S15597-01CT 相同，没有直径。封装底层取值写 Glass，显示写成 Glass epoxy。截止频率 160 MHz。typeNameSort 写成 S15658-01CT。缩略图文件名是 k_s15658-01ct_pp_xx.jpg，thumbAlt 是空的。手册仍标 929 KB，文件名 s15597-01ct_etc_kpic1108e.pdf。`,
        `手册仍是 ${s15597Sheet}，记为约 2024 年 9 月。这一列感光面积 ϕ0.5 mm。高频截止低档最小 90 MHz、典型 160 MHz、最大 240 MHz，高档典型 150 MHz。击穿电压、光灵敏度和应用与 S15597-01CT 同一张表。外形表把 S15658-01CT 的 A 写成 ɸ0.5。`,
      ]),
    ],
  },
  {
    id: "s16429",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S16429：滨松带前端 IC 的光传感器",
    summary:
      "两只产品页都没有写发布日期，也都没有 meta description。共用手册目录号 KPIC1112E03，页脚写 Jul. 2026 DN，并写 current as of July 2026，记为约 2026 年 7 月。索引 newState 都是 false。正文写 direct TOF，也就是直接飞行时间。",
    applications: [],
    technologies: ["tof"],
    models: [
      page("S16429-01CT", "2026-07", part("S16429-01CT"), [
        "产品页没有写发布日期，也没有 meta description。二级标题写 Built-in gain-stabilized APD suitable for short pulse light detection。正文写 This device is for direct TOF (time-of-flight) distance measurement，直接飞行时间，integrating a Si APD and a transimpedance amplifier。括号里写 S16429-01CT: 300 MHz。特性写 Stable gain against temperature fluctuations、No gain adjustment according to individual differences required、Built-in high-speed transimpedance amplifier: 300 MHz、Low noise、No ringing。",
        "规格表封装 Glass epoxy，通道数 1 ch，感光面积 φ0.2 mm，光谱范围 400 to 1100 nm，峰值 840 nm，光灵敏度 0.5 A/W，高频截止 300 MHz。备注写 Photosensitivity: λ=905 nm, M=1。",
        `索引 ${index} 这一行 newState 是 false。productExp 与二级标题相同。封装底层取值写 Glass，显示写成 Glass epoxy。typeNameSort 写成 S16429-01CT。缩略图文件名是 k_s16429-01ct_pp_xx.jpg，thumbAlt 是空的。手册标 668 KB。`,
        `手册 ${s16429Sheet}。封面写 Photosensors with front-end IC 和 S16429 series。目录号 KPIC1112E03，页脚把 Jul. 2026 DN 另起一行，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。页脚没有印完整地址，写 Visit our website for product and contact information 和 Created in Japan。引言只在括号里写 S16429-01CT: 300 MHz。特性把两只的截止频率分两行。结构表探测器写成 Si APD S15415-02，感光面积 ϕ0.2 mm，封装 Glass epoxy，密封材料 Silicone resin。高频截止最小 200 MHz、典型 300 MHz。击穿电压条件 Vcc=0 V, ID=10 µA，Gain_APD terminal: open，最小 180 V、典型 200 V、最大 220 V。增益稳定模式的 APD 增益最小 40、典型 50、最大 60。跨阻增益差分典型 30 kV/A。暗电流典型 20 pA、最大 200 pA。应用写 Distance measurement 和 Presence or absence of objects。注 *4 写 APD gain is stabilized，表里击穿电压、暗电流和增益标的是 *5。*5 的正文写 Reference values。*9 把 Measurement 印成 su ement。注意事项写 Apply negative voltage with respect to GND (-165 V, etc.) to the anode terminal。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。焊接写 JEDEC J-STD-020 MSL 4。`,
      ]),
      page("S16429-02CT", "2026-07", part("S16429-02CT"), [
        "产品页没有写发布日期，也没有 meta description。二级标题与 S16429-01CT 相同。正文同样写 direct TOF (time-of-flight) distance measurement，直接飞行时间，但这一句没有把 280 MHz 放进括号。特性写 Built-in high-speed transimpedance amplifier: 280 MHz，其余四行与 S16429-01CT 相同。",
        "规格表封装 Glass epoxy，通道数 1 ch，感光面积 φ0.5 mm，光谱范围 400 to 1100 nm，峰值 840 nm，光灵敏度 0.5 A/W，高频截止 280 MHz。备注仍写 Photosensitivity: λ=905 nm, M=1。",
        `索引 ${index} 这一行 newState 是 false。productExp 与 S16429-01CT 相同。封装底层取值写 Glass，显示写成 Glass epoxy。截止频率 280 MHz。typeNameSort 写成 S16429-02CT。缩略图文件名是 k_s16429-02ct_pp_xx.jpg，thumbAlt 是空的。手册仍标 668 KB。`,
        `手册仍是 ${s16429Sheet}，记为约 2026 年 7 月。结构表探测器写成 Si APD S15415-05，感光面积 ϕ0.5 mm。高频截止最小 180 MHz、典型 280 MHz。暗电流典型 40 pA、最大 400 pA。击穿电压范围与 S16429-01CT 同为 180 V、200 V、220 V。S15415-02 和 S15415-05 已按 LiDAR 用 Si APD 单独收录，这里只记下手册把它们写成探测器。`,
      ]),
    ],
  },
  {
    id: "s16430",
    date: "2025-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S16430：滨松带前端 IC 的光传感器",
    summary:
      "产品页没有写发布日期，也没有 meta description。手册目录号 KPIC1111E03，页脚写 Jun. 2025 DN。正文写 The content of this document is current as of June 2025，记为约 2025 年 6 月。索引 newState 是 false。正文写 direct TOF，也就是直接飞行时间。",
    applications: [],
    technologies: ["tof"],
    models: [
      page("S16430-01CR", "2025-06", part("S16430-01CR"), [
        "产品页没有写发布日期，也没有 meta description。二级标题写 Built-in 16-element gain-stabilized APD array suitable for short pulse light detection (parallel output)。正文写 direct TOF (time-of-flight) distance measurement，直接飞行时间，integrating a 16 ch Si APD array and a transimpedance amplifier，并写 high-band cutoff frequency (300 MHz)。特性写 16 ch parallel output、Stable gain against temperature fluctuations、No gain adjustment according to individual differences required、Built-in high-speed transimpedance amplifier: 300 MHz、Low noise、No ringing、Low crosstalk。",
        "规格表封装 Glass epoxy，通道数 16 ch，每通道感光面积 0.15 × 0.45 mm，光谱范围 400 to 1100 nm，峰值 840 nm，光灵敏度 0.5 A/W，高频截止 300 MHz。备注写 Photosensitivity: λ=905 nm, M=1。",
        `索引 ${index} 这一行 newState 是 false。productExp 与二级标题相同。封装底层取值写 Glass，显示写成 Glass epoxy。typeNameSort 写成 S16430-01CR。缩略图文件名是 k_s16430-01cr_pp_xx.jpg，thumbAlt 是空的。手册标 563 KB。`,
        `手册 ${s16430Sheet}。目录号 KPIC1111E03，页脚写 Jun. 2025 DN。正文写 The content of this document is current as of June 2025，记为约 2025 年 6 月。页脚单位写成 Optical Semiconductor Sales，并印了韩国地址。结构表探测器 Si APD array，元件间距 0.5 mm，输出数 16，封装 Glass epoxy，窗口材料 Glass。注 *1 写 Area in which a typical gain can be obtained。高频截止最小 200 MHz、典型 300 MHz。击穿电压条件与 S16429 相同，最小 180 V、典型 200 V、最大 220 V。增益稳定模式的 APD 增益最小 35、典型 50、最大 65。跨阻增益差分典型 30 kV/A。电流 Power save=high 时典型 750 mA、最大 900 mA，Power save=low 时典型 300 mA。串扰条件 FWHM=1 ns, 1 mW，典型 -60 dB。灵敏度均匀性典型 ±5%、最大 ±15%。应用写 Distance measurement 和 Presence or absence of objects。绝对最大额定的芯片温度注记在 * 和 4 之间有空格，并写 Do heat dissipation。引脚表注写 *12: positive、*13: negative。电路例子把 B10 标成 Out2_1，引脚表 B10 是 Out16_2，电路注写成 *1 和 *2。Out10_1 的星号和 1 之间有空格。工作温度 -40 to +105 °C，贮存温度 -40 to +125 °C。焊接写 JEDEC J-STD-020 MSL 3。`,
      ]),
    ],
  },
];
