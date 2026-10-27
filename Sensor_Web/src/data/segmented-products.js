const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiode-array/segmented-type-si-photodiode/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiode-array/segmented-type-si-photodiode.html";

const indexIntro =
  "索引一级标题写 Segmented Si photodiodes，前后没有空格。说明写 Silicon PIN photodiodes consisting of 2 or 4 elements. Sensitive to UV and near-infrared ranges。列设置里 Data sheet 的值是 Data sheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。感光面积的值不带 mm，显示才补上 mm，乘号写成 x。";

const noPlace =
  "这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const guideUrl =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/si_pd_kspd0001e.pdf";

const guide =
  `选型指南 ${guideUrl}，产品页标 6.9 MB/PDF。目录号 KSPD0001E23，页脚写 Sep. 2025 DN，并写 Information described in this material is current as of September 2025，记为约 2025 年 9 月。分段型硅 PIN 这一节列出 S3096-02、S4204、S9345 和 S4349。分段型硅光电二极管这一节列出 S10359。表面贴装的 Segment type 这一节列出 S5980、S5981 和 S5870，下一组还列出 S8558 和 S15158。S8558 和 S15158 在硅光电二极管阵列索引上，不在这一条分段索引上，这一页不另收。指南没有 S16803。`;

const docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。";

const sheet3096 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s3096-02_s4204_kpin1039e.pdf";

const sheet5980 =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s5980_etc_kpin1012e.pdf";

export const segmentedProducts = [
  {
    id: "s16803",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S16803：滨松四象限硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KPIN1100E01，页脚写 Mar. 2026 DN，并写 Information described in this material is current as of March 2026，记为约 2026 年 3 月。索引 newState 是 true。页眉写 Si PIN photodiode array。",
    applications: [],
    technologies: [],
    models: [
      page("S16803", "2026-03", part("S16803"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S16803。二级标题写 High UV resistance, quadrant Si PIN photodiode。正文写 The S16803 is a quadrant Si PIN photodiode that has achieved high reliability for monitoring ultraviolet light。下一句写 a 4-segment photosensitive area arranged two-dimensionally，以及 position detection and laser optical axis alignment。特性四条：Quadrant (2 × 2) element format、High sensitivity in UV region、High reliability for monitoring UV light irradiation、No resin that causes outgassing。后两条前面各有一个不换行空格。",
        "规格表元件数 4-segment，封装 Metal，封装类型 TO-5，冷却 Non-cooled。光谱响应范围 190 to 1000 nm，峰值灵敏度波长（典型）780 nm，光灵敏度（典型）0.125 A/W，暗电流（最大）500 pA，截止频率（典型）90 MHz，终端电容（典型）10 pF。规格表没有感光面积。测量条件写 Typ. Ta=25 ℃，unless otherwise noted, per one element (except for photosensitive area)，Photosensitivity: λ=200 nm，Dark current: VR=10 V，Cutoff frequency: λ=405 nm, VR=10 V，Terminal capacitance: VR=10 V, f=1 MHz。页面下载标 313 KB/PDF。索引缩略图是 k_s16803_pp_xx.jpg，thumbAlt 是 null。光谱响应图是 KPINB0485.svg。外形图是 KPINA0134.svg，标题写 Dimensional outline (unit: mm)。" + docs,
        `索引 ${index} 这一行 newState 是 true。${indexIntro}productName 写 Si PIN photodiode array。productExp 写 High UV resistance, quadrant Si PIN photodiode。感光面积的值写成 3 x 3，显示写成 3 x 3 mm。封装类型的值和显示都是 TO-5。typeNameSort 写成 S16803，没有补零。手册标 313 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s16803_kpin1100e.pdf。页眉写 Si PIN photodiode，没有 array。目录号 KPIN1100E01，Mar. 2026 DN 另起一行，中间隔着 Visit our website for product and contact information。并写 current as of March 2026，记为约 2026 年 3 月。正文与产品页同一段。感光面积尺寸写 1.45 × 1.45 / element mm，外形图也印 1.45。索引写成 3 x 3 mm。窗口材料 Quartz glass。反向电压 30 V。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C，条件都写 No dew condensation。注记把 When 拆开，W 单独一行。光灵敏度最小 0.1 A/W、典型 0.125 A/W，条件 λ=200 nm。暗电流典型 50 pA、最大 500 pA，条件 VR=10 V。暗电流温度系数典型 1.15 times/°C。截止频率典型 90 MHz，条件 λ=405 nm, VR=10 V, RL=50 Ω, -3 dB。产品页测量条件没有 RL=50 Ω 和 -3 dB。终端电容典型 10 pF，条件 VR=10 V, f=1 MHz。噪声等效功率典型 3 × 10^-14 W/Hz^1/2，条件 λ=200 nm, VR=10 V。紫外注意事项写 If only a specific element is irradiated with ultraviolet light，以及 the correct center position may not be detected。外形图号 KPINA0134EA，产品页文件名没有 EA。光谱图号 KPINB0485EA，产品页文件名没有 EA。应用写 Laser beam axis alignment 和 Position sensing。" +
          noPlace +
          guide +
          "指南的分段型表没有 S16803。",
      ]),
    ],
  },
  {
    id: "s3096",
    date: "2023-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S3096：滨松双元硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S4204 共用手册。文件名写成 kpin1039e，目录号是 KMPD1039E06，页脚写 Jul. 2023 DN，并写 Information described in this material is current as of July, 2023，July 后面有逗号，记为约 2023 年 7 月。索引 newState 是 false。",
    applications: [],
    technologies: [],
    models: [
      page("S3096-02", "2023-07", part("S3096-02"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S3096-02。二级标题写 Dual-element, plastic package photodiode。正文写 molded into plastic package，package 用单数。手册写 plastic packages。接着写 low crosstalk between the elements，以及 meet you specific needs，your 写成 you。特性四条紧挨着连字符：High sensitivity、Uniform element sensitivity、Low crosstalk、Low noise。元描述把 Features 和特性连成一句，没有空格。",
        "规格表元件数 2-segment，封装 Plastic，冷却 Non-cooled。没有封装类型这一行。光谱响应范围 320 to 1100 nm，峰值灵敏度波长（典型）960 nm，光灵敏度（典型）0.58 A/W，暗电流（最大）500 pA，截止频率（典型）25 MHz，终端电容（典型）5 pF。测量条件写 Typ. Ta=25 ℃，per one element (except for photosensitive area), unless otherwise noted，Photosensitivity: λ=960 nm。没有写暗电流的偏压。页面下载标 535 KB/PDF。索引缩略图是 k_s3096-02_pp_xx.jpg，thumbAlt 写 S3096-02 product photo。光谱响应图是 k_s3096-02_sr_xx,0.jpg。外形图是 KMPDA0119EB.svg。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Dual-element, plastic package photodiode。感光面积的值写成 1.2 x 3，显示写成 1.2 x 3 mm。封装类型的值和显示都是 --。typeNameSort 写成 S03096-0002，型号补成五位，后缀 02 补成 0002。手册标 535 KB。`,
        `手册 ${sheet3096}。封面把 S3096-02 和 S4204 放在一起，页眉写 Si PIN photodiodes。目录号 KMPD1039E06，文件名却写成 kpin1039e。页脚写 Jul. 2023 DN，并写 current as of July, 2023，July 后面有逗号，记为约 2023 年 7 月。正文写 The S3096-02 and S4204 are，以及 plastic packages 和 these photodiodes。you specific needs 手册同样写成 you。感光面积写 1.2 × 3 / 2 elements mm，元件间隙 30 μm。反向电压 20 V。工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C。光灵敏度典型 0.58 A/W，条件 λ=λp。暗电流典型 0.05 nA、最大 0.5 nA，条件 VR=10 V, all elements。最大 0.5 nA 等于产品页的 500 pA。截止频率典型 25 MHz，条件 VR=10 V, RL=50 Ω, λ=780 nm, -3 dB。终端电容典型 5 pF。噪声等效功率典型 7.2 × 10^-15 W/Hz^1/2。手册写 These products do not support lead-free soldering temperature。外形图号 KMPDA0119EB，与产品页相同。应用写 Optical switches 和 Various position detection applications。` +
          noPlace +
          "选型指南把这一只的光灵敏度印成 0.39 A/W，条件 λ=650 nm，截止频率 25 MHz，暗电流最大 0.5 nA，注记 *1 写 Total value of all elements。光谱图号印成 KMPDB0134EE。",
      ]),
    ],
  },
  {
    id: "s4204",
    date: "2023-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S4204：滨松双元硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S3096-02 共用手册目录号 KMPD1039E06，页脚写 Jul. 2023 DN，并写 current as of July, 2023，记为约 2023 年 7 月。索引 newState 是 false。索引 productExp 比产品页二级标题长。",
    applications: [],
    technologies: [],
    models: [
      page("S4204", "2023-07", part("S4204"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S4204。二级标题与 S3096-02 相同，写 Dual-element, plastic package photodiode。正文写 molded into plastic packages，packages 用复数，low 和 noise 之间换行。元描述把换行吃掉，写成 lownoise，并同样写 you specific needs。特性四条与 S3096-02 相同。",
        "规格表元件数 2-segment，封装 Plastic，冷却 Non-cooled。没有封装类型这一行。光谱响应范围 320 to 1100 nm，峰值 960 nm，光灵敏度（典型）0.65 A/W，暗电流（最大）1000 pA，截止频率（典型）30 MHz，终端电容（典型）3 pF。测量条件同样只给光灵敏度 λ=960 nm。页面下载标 535 KB/PDF。索引缩略图是 k_s4204_pp_xx.jpg，thumbAlt 写 S4204 product photo。光谱响应图仍是 k_s3096-02_sr_xx,0.jpg，文件名是 S3096-02。外形图是 KMPDA0120EB.svg。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Dual element Si PIN photodiode, plastic package, uniform element sensitivity, low crosstalk，Dual element 中间没有连字符。感光面积的值写成 1 x 2，显示写成 1 x 2 mm。封装类型是 --。typeNameSort 写成 S04204。手册标 535 KB。`,
        `手册与 S3096-02 同一份。感光面积写 1 × 2 / 2 elements mm，元件间隙 20 μm。光灵敏度典型 0.65 A/W，条件 λ=λp。暗电流典型 0.1 nA、最大 1.0 nA，最大 1.0 nA 等于产品页的 1000 pA。截止频率典型 30 MHz。终端电容典型 3 pF。噪声等效功率典型 8.7 × 10^-15 W/Hz^1/2。外形图号 KMPDA0120EB，与产品页相同。应用句子与 S3096-02 相同。` +
          noPlace +
          "选型指南把这一只的光灵敏度印成 0.45 A/W，条件 λ=650 nm，暗电流最大 1 nA。",
      ]),
    ],
  },
  {
    id: "s4349",
    date: "2015-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4349：滨松四象限硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KMPD1007E03，页脚写 Oct. 2015 DN，并写 Information described in this material is current as of October, 2015，October 后面有逗号，记为约 2015 年 10 月。索引 newState 是 false。",
    applications: [],
    technologies: [],
    models: [
      page("S4349", "2015-10", part("S4349"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S4349。二级标题写 Quadrant Si PIN photodiode。正文写 sensitivity in the UV to near IR spectral range，以及 position sensing such as for laser beam axis alignment。特性写 Quadrant (2 × 2) element format、Low cross-talk: 2% max.、Wide spectral response range: 190 to 1000 nm、High-speed response: fc=20 MHz、TO-5 metal package。cross-talk 有连字符。",
        "规格表元件数 4-segment，封装 Metal，封装类型 TO-5，冷却 Non-cooled。光谱响应范围 190 to 1000 nm，峰值 720 nm，光灵敏度（典型）0.45 A/W，暗电流（最大）200 pA，截止频率（典型）20 MHz，终端电容（典型）25 pF。规格表没有感光面积，也没有串扰。测量条件写 Photosensitivity: λ=λp，Dark current: VR=5 V，Cutoff frequency: VR=5 V，Terminal capacitance: VR=5 V, f=1 MHz。页面下载标 191 KB/PDF。索引缩略图是 k_s4349_pp_xx.jpg，thumbAlt 写 S4349 product photo。光谱响应图是 k_s4349_sr_xx,0.jpg。外形图是 KMPDA0114EA.svg。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Quadrant Si PIN photodiode。感光面积的值写成 3 x 3，显示写成 3 x 3 mm。封装类型 TO-5。typeNameSort 写成 S04349。手册标 191 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4349_kmpd1007e.pdf。页眉写 Si photodiode，没有 PIN。二级标题和正文写 quadrant Si PIN photodiode。目录号 KMPD1007E03，页脚写 Oct. 2015 DN，并写 current as of October, 2015，October 后面有逗号，记为约 2015 年 10 月。特性把 cross-talk 写成 crosstalk，没有连字符。结构表窗口材料 Quartz glass。感光面积写 φ3.0/4 elements mm，元件间隙 100 μm。索引写成 3 x 3 mm。反向电压 20 V。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。光灵敏度典型 0.45 A/W，条件 λ=λp。暗电流典型 0.01 nA、最大 0.2 nA，条件 VR=5 V。最大 0.2 nA 等于产品页的 200 pA。暗电流温度系数典型 1.12 times/°C。截止频率典型 20 MHz，条件 VR=5 V, RL=50 Ω, λ=780 nm, -3 dB。产品页测量条件只写 VR=5 V。终端电容典型 25 pF。噪声等效功率典型 4.0 × 10^-15 W/Hz^1/2。串扰符号写成 CL，最大 2%，条件 VR=5 V, λ=780 nm。外形图号 KMPDA0114EA，与产品页相同。应用写 Laser beam axis alignment 和 Position sensing。" +
          noPlace +
          "选型指南把感光面积印成 3×3 /4-segment，并在旁边印 3.0。注记 *2 写 Refer to “Precautions against UV light exposure (P.45).”。暗电流 0.2 nA 的条件印成 VR=5 V。",
      ]),
    ],
  },
  {
    id: "s5870",
    date: "2024-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S5870：滨松表面贴装分段硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S5980、S5981 共用手册目录号 KPIN1012E10，页脚写 Dec. 2024 DN，并写 Information described in this material is current as of December 2024，记为约 2024 年 12 月。索引 newState 是 false。产品页没有正文，只有特性。",
    applications: [],
    technologies: [],
    models: [
      page("S5870", "2024-12", part("S5870"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S5870。二级标题写 Multi-element photodiode for surface mounting。可见正文没有说明段，直接从特性开始。元描述也从 Features 开始。特性写 Large photosensitive area: 10 × 10 mm、Chip carrier package suitable for surface mounting、Thin package: 1.26 mmt、Photo sensitivity: 0.72 A/W (λ=960 nm)，Photo 和 sensitivity 分成两个词。包装写 Tray: S5870 和 Reel: S5870-10。S5870-10 不在索引里，这一页不另收。",
        "规格表元件数 2-segment，封装 Ceramic，封装类型 Surface mount type，冷却 Non-cooled。光谱响应范围 320 to 1100 nm，峰值 960 nm，光灵敏度（典型）0.72 A/W，暗电流（最大）10000 pA，截止频率（典型）10 MHz，终端电容（典型）50 pF。测量条件只写 Photosensitivity: λ=960 nm。页面下载标 727 KB/PDF。索引缩略图是 k_s5870_pp_xx.jpg，thumbAlt 写 S5870 product photo。光谱响应图是 k_s5870_sr_xx,0.jpg。外形图是 KMPDA0113EB.svg。相关产品写 Si PIN photodiode S5980 和 Si PIN photodiode S5981。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Two-segment photodiode for surface mounting，产品页二级标题写 Multi-element。感光面积的值写成 10 x 10，显示写成 10 x 10 mm。封装类型的值写成 Surface mount，显示才补上 type。typeNameSort 写成 S05870。手册标 727 KB。`,
        `手册 ${sheet5980}。封面写 S5980/S5981/S5870 series，二级标题写 Surface mountable, segmented type Si photodiode。目录号 KPIN1012E10，页脚写 Dec. 2024 DN，并写 current as of December 2024，记为约 2024 年 12 月。特性写 Surface mount type ceramic chip carrier package、Compatible with lead-free solder reflow、High sensitivity。包装把三只的托盘和卷带写在一起：Tray: S5980, S5981, S5870，Reel: S5980-10, S5981-10, S5870-10。特性没有 1.26 mmt。外形图印 1.26 ± 0.15。产品页特性写 Thin package: 1.26 mmt。感光面积写 10 × 10 / 2 segments mm，元件间隙 30 µm。封装 Ceramic，窗口材料 Resin coating。反向电压 30 V。工作温度 -40 to +100 °C，贮存温度 -40 to +125 °C。注记 *1 写 high humidity environment，environment 用单数。焊接温度 260 (3 times) °C，注记 *2 写 Reflow soldering, JEDEC J-STD-020 MSL 3, see P.7。光灵敏度典型 0.72 A/W，条件 λ=λp。峰值波长 960 nm。暗电流典型 2 nA、最大 10 nA，条件 VR=10 V。最大 10 nA 等于产品页的 10000 pA。截止频率典型 10 MHz，条件 VR=10 V, RL=50 Ω, -3 dB。终端电容典型 50 pF，条件 VR=10 V, f=1 MHz。噪声等效功率典型 3.5 × 10^-14 W/Hz^1/2。这一只的外形图号印成 KMPDA0113EC，产品页文件名是 KMPDA0113EB。应用写 Laser optical axis alignment、Level meter、Pointing device, etc.。` +
          noPlace +
          "选型指南把这一组标题写成 Segment type Si photodiodes，说明写 2, 4 or 16 segments。这一只的截止频率印 10 MHz，终端电容印 50 pF，光灵敏度印 0.72 A/W，条件 λ=960 nm。",
      ]),
    ],
  },
  {
    id: "s5980",
    date: "2024-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S5980：滨松表面贴装四象限硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S5981、S5870 共用手册目录号 KPIN1012E10，页脚写 Dec. 2024 DN，并写 current as of December 2024，记为约 2024 年 12 月。索引 newState 是 false。感光面积是三只里最小的 5 × 5 mm。",
    applications: [],
    technologies: [],
    models: [
      page("S5980", "2024-12", part("S5980"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S5980。二级标题写 Multi-element photodiode for surface mounting。没有说明段。特性写 Large photosensitive area: 5 × 5 mm、Chip carrier package suitable for surface mounting、Thin package: 1.26 mmt、Photo sensitivity: 0.72 A/W (λ=960 nm)。包装写 Tray: S5980 和 Reel: S5980-10。S5980-10 不在索引里，这一页不另收。",
        "规格表元件数 4-segment，封装 Ceramic，封装类型 Surface mount type，冷却 Non-cooled。光谱响应范围 320 to 1100 nm，峰值 960 nm，光灵敏度（典型）0.72 A/W，暗电流（最大）2000 pA，截止频率（典型）25 MHz，终端电容（典型）10 pF。测量条件只写 Photosensitivity: λ=960 nm。页面下载标 727 KB/PDF。索引缩略图是 k_s5980_pp_xx.jpg，thumbAlt 写 S5980 product photo。光谱响应图是 k_s5870_sr_xx,0.jpg，文件名是 S5870。外形图是 KMPDA0036EC.svg。相关产品写 Si PIN photodiode S5981 和 Si PIN photodiode S5870。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Four-segment photodiode for surface mounting。感光面积的值写成 5 x 5，显示写成 5 x 5 mm。封装类型的值写成 Surface mount，显示才补上 type。typeNameSort 写成 S05980。手册标 727 KB。`,
        "手册与 S5870 同一份。感光面积写 5 × 5 / 4 segments mm。暗电流典型 0.3 nA、最大 2 nA。最大 2 nA 等于产品页的 2000 pA。截止频率典型 25 MHz。终端电容典型 10 pF。噪声等效功率典型 1.4 × 10^-14 W/Hz^1/2。外形图号印成 KMPDA0036EB，产品页文件名是 KMPDA0036EC。应用句子与 S5870 相同。" +
          noPlace +
          "选型指南这一只的截止频率印 25 MHz，终端电容印 10 pF。",
      ]),
    ],
  },
  {
    id: "s5981",
    date: "2024-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S5981：滨松表面贴装四象限硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S5980、S5870 共用手册目录号 KPIN1012E10，页脚写 Dec. 2024 DN，并写 current as of December 2024，记为约 2024 年 12 月。索引 newState 是 false。产品页特性把感光面积写成 active area。",
    applications: [],
    technologies: [],
    models: [
      page("S5981", "2024-12", part("S5981"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S5981。二级标题写 Multi-element photodiode for surface mounting。没有说明段。特性写 Large active area: 10 × 10 mm，S5870 和 S5980 写 photosensitive area，这一只写 active area。其余写 Chip carrier package suitable for surface mounting、Thin package: 1.26 mmt、Photo sensitivity: 0.72 A/W (λ=960 nm)。包装写 Tray: S5981 和 Reel: S5981-10。S5981-10 不在索引里，这一页不另收。",
        "规格表元件数 4-segment，封装 Ceramic，封装类型 Surface mount type，冷却 Non-cooled。光谱响应范围 320 to 1100 nm，峰值 960 nm，光灵敏度（典型）0.72 A/W，暗电流（最大）4000 pA，截止频率（典型）20 MHz，终端电容（典型）35 pF。测量条件只写 Photosensitivity: λ=960 nm。页面下载标 727 KB/PDF。索引缩略图是 k_s5981_pp_xx.jpg，thumbAlt 写 S5981 product photo。光谱响应图仍是 k_s5870_sr_xx,0.jpg。外形图是 KMPDA0037EB.svg。相关产品写 Si PIN photodiode S5980 和 Si PIN photodiode S5870。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Four-segment photodiode for surface mounting。感光面积的值写成 10 x 10，显示写成 10 x 10 mm。封装类型的值写成 Surface mount，显示才补上 type。typeNameSort 写成 S05981。手册标 727 KB。`,
        "手册与 S5870 同一份。感光面积写 10 × 10 / 4 segments mm。暗电流典型 0.6 nA、最大 4 nA。最大 4 nA 等于产品页的 4000 pA。截止频率典型 20 MHz。终端电容典型 35 pF。噪声等效功率典型 1.9 × 10^-14 W/Hz^1/2。外形图号 KMPDA0037EB，与产品页相同。应用句子与 S5870 相同。" +
          noPlace +
          "选型指南这一只的截止频率印 20 MHz，终端电容印 35 pF。",
      ]),
    ],
  },
  {
    id: "s9345",
    date: "2014-11",
    companyId: "hamamatsu",
    category: "product",
    title: "S9345：滨松不对称双元硅 PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KPIN1069E03，页脚写 Nov. 2014 DN，并写 Information described in this material is current as of November, 2014，November 后面有逗号，记为约 2014 年 11 月。索引 newState 是 false。索引 productExp 在 small 和 thin 之间没有空格。",
    applications: [],
    technologies: [],
    models: [
      page("S9345", "2014-11", part("S9345"), [
        "产品页没有写发布日期。页眉写 Si PIN photodiode array。一级标题写 S9345。二级标题写 Dual-element photodiode using newly developed small, thin package，small 和 thin 之间有空格。正文写 The cubic volume reduced to onefifth，one-fifth 连成 onefifth，reduced 前面没有 is。手册写 one-fifth。产品页把 photosensitive area 写成 active area：the entire photodiode active area of 1.5 mm wide and 5.6 mm long is asymmetrically segmented into 2 longitudinal sections of 1.5 mm and 4.1 mm。特性写 Miniature and thin plastic package: 3.4 × 7.0 × 0.95 t mm、Surface mounting type、Asymmetrical dual-element PIN photodiode、High sensitivity。感光面积写成 Photodiode A: 1.5 x 1.5 mm, Photodiode B: 1.5 x 4.1 mm，乘号是 x。",
        "规格表元件数 2-segment，封装 Plastic，封装类型 Surface mount type，冷却 Non-cooled。光谱响应范围 320 to 1100 nm，峰值 960 nm，光灵敏度（典型）0.55 A/W，暗电流（最大）5000 pA，截止频率（典型）15 MHz。规格表没有终端电容。测量条件写 Photosensitivity: λ=960 nm。页面下载标 187 KB/PDF。索引缩略图是 k_s9345_pp_xx.jpg，thumbAlt 写 S9345 product photo。光谱响应图是 k_s9345_sr_xx,0.jpg。外形图是 KPINA0095EB.svg。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写 Dual-element photodiode using newly developed small,thin package，small 和 thin 之间没有空格。感光面积的值写成 1.5 x 5.6，显示写成 1.5 x 5.6 mm，没有拆成两段。封装类型的值写成 Surface mount，显示才补上 type。终端电容是 --。typeNameSort 写成 S09345。手册标 187 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9345_kpin1069e.pdf。二级标题在 devel 后面断开，写成 newly devel- 和下一行 oped small, thin package。正文写 photosensitive area，不是 active area，one-fifth 有连字符。特性写 Surface mount type，产品页写 Surface mounting type。感光面积用乘号：Photodiode A: 1.5 × 1.5 mm，Photodiode B: 1.5 × 4.1 mm。目录号 KPIN1069E03，页脚写 Nov. 2014 DN，并写 current as of November, 2014，November 后面有逗号，记为约 2014 年 11 月。反向电压 20 V。工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C。回流写 Peak temperature 235 °C, 1 time，注记 *1 写 JEDEC level 5a。光灵敏度最小 0.5 A/W、典型 0.55 A/W，条件 λ=780 nm。产品页测量条件写 λ=960 nm，峰值波长才是 960 nm。短路电流 Photodiode A 典型 2.6 μA，Photodiode B 典型 7.1 μA，条件 VR=0 V, 2856 K, 100 lx。暗电流典型 0.4 nA、最大 5 nA，条件 VR=10 V, all elements。最大 5 nA 等于产品页的 5000 pA。终端电容 Photodiode A 典型 4 pF、最大 8 pF，Photodiode B 典型 10 pF、最大 20 pF，条件 VR=10 V, f=1 MHz。索引这一格是 --。截止频率最小 7 MHz、典型 15 MHz，条件 VR=10 V, RL=50 Ω, λ=780 nm, -3 dB。外形图号 KPINA0095EB，与产品页相同。应用写 Optical switches。" +
          noPlace +
          "选型指南把光灵敏度印成 0.45 A/W，条件 λ=650 nm。终端电容印 4 和 10，旁边标 Photodiode A 和 Photodiode B。暗电流最大 5 nA。",
      ]),
    ],
  },
  {
    id: "s10359",
    date: "2025-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S10359：滨松 ArF 监测用四象限硅光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KSPD1076E04，页脚写 Apr. 2025 DN，并写 The content of this document is current as of April 2025，记为约 2025 年 4 月。索引 newState 是 false。索引产品名没有 PIN，产品页标题有 PIN。",
    applications: [],
    technologies: [],
    models: [
      page("S10359", "2025-04", part("S10359"), [
        "产品页没有写发布日期。页眉写 Si photodiode array，没有 PIN。浏览器标题写 Si PIN photodiode S10359。一级标题写 S10359。二级标题写成两行：Highly reliable quadrant photodiode 和 for ArF excimer laser monitor。正文写 low sensitivity deterioration under UV light irradiation，以及 optical axis alignment or monitoring of intense UV light sources。特性写 High reliability to ArF excimer laser radiation (λ=193 nm)、No resin to cause outgassing、Large active area: 10 × 10 mm/quadrant。手册写 photosensitive area，产品页写 active area。",
        "规格表元件数 4-segment，封装 Metal，冷却 Non-cooled。没有封装类型这一行。光谱响应范围 193 to 1000 nm，峰值 760 nm，光灵敏度（典型）0.06 A/W，暗电流（最大）500 pA，上升时间（典型）1 μs，终端电容（典型）500 pF。没有截止频率。测量条件写 Typ. Ta=25 ℃，per one element (except for photosensitive area), unless otherwise noted，Photosensitivity: λ=193 nm。页面下载标 259 KB/PDF。索引缩略图是 k_s10359_pp_xx.jpg，thumbAlt 是 null。光谱响应图是 KSPDB0290.svg。外形图是 KSPDA0180.svg。" + docs,
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array，不是 Si PIN photodiode array。productExp 写 Highly reliable quadrant photodiode for ArF excimer laser monitor。感光面积的值写成 10 x 10，显示写成 10 x 10 mm，没有 /quadrant，也没有 / 4 segments。封装类型是 --。截止频率是 --。终端电容的值写成 500，显示写成 500 pF。typeNameSort 写成 S10359，没有补零。手册标 259 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s10359_kspd1076e.pdf。页眉写 Si photodiode，没有 PIN。目录号 KSPD1076E04，页脚写 Apr. 2025 DN。日期句子写成 The content of this document is current as of April 2025，不是 Information described in this material，记为约 2025 年 4 月。特性写 Large photosensitive area: 10 mm × 10 mm/quadrant。结构表写 10 × 10 / 4 segments mm。窗口材料 Quartz。反向电压符号写成 VR Max.，数值 20 V。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。光灵敏度这一行的名字写成 Photo sensitivity，最小 45 mA/W、典型 60 mA/W，条件 λ=193 nm。60 mA/W 等于产品页的 0.06 A/W。暗电流典型 0.02 nA、最大 0.5 nA，条件 VR=10 mV。最大 0.5 nA 等于产品页的 500 pA。上升时间典型 1 µs，条件 VR=0 V, RL=1 kΩ, 10 to 90%。终端电容典型 0.5 nF，条件 VR=0 V, f=10 kHz。0.5 nF 等于产品页的 500 pF。外形图号 KSPDA0180EC，产品页文件名没有 EC。光谱图号另有 KSPDB0290EB 和 KSPDB0289EA，产品页用的是 KSPDB0290.svg。应用写 ArF excimer laser detection 和 UV detection。" +
          noPlace +
          "选型指南这一只单独放在 Segmented type Si photodiodes 下面。表头暗电流写 VR=10 V max.，格子里的数是 0.02，注记写 VR=10 mV，这是手册里的典型值，不是最大 0.5 nA。表头终端电容写 VR=10 V, f=1 MHz，注记写 VR=0 V, f=10 kHz，数值 500。上升时间印 1 μs。光灵敏度印 0.06 A/W，条件 λ=193 nm。",
      ]),
    ],
  },
];
