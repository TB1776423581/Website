const page = (name, date, url, points) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiodes/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/si-photodiodes.html";

const indexIntro =
  "索引一级标题写 Si photodiodes，前后没有空格。说明写 Silicon photodiodes with high sensitivity and low dark current, as well as silicon PIN photodiodes suitable for high-speed applications。共 183 行。产品名是 97 行 Si photodiode、80 行 Si PIN photodiode、5 行 Si photodiode with preamp、1 行 Si photodiode array。newState 为 true 的只有 S15152、S15173 和 S16495。列设置里 Data sheet 的值是 Data sheet，表头写成 Data，下一行 Sheet。ProductName 的值是 ProductName，表头写成 Product，下一行 Name。感光面积、光谱范围、光灵敏度、暗电流、上升时间、截止频率、终端电容和噪声等效功率的值不带单位，显示才补上。";

const sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15152_kpin1099e.pdf";

const guideUrl =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/si_pd_kspd0001e.pdf";

const guide =
  `选型指南 ${guideUrl}，产品页标 6.9 MB/PDF。目录号 KSPD0001E23，页脚写 Sep. 2025 DN，并写 Information described in this material is current as of September 2025，记为约 2025 年 9 月。`;

const docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，注意事项 Precautions / Surface mount type products 标 407 KB/PDF。选型指南标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。产品页的 og:description 是空的。";

const placePin =
  "手册应用写 FSO、Laser radars、Power meters 和 Barcode readers。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const placeFilter =
  "手册应用写 UVB monitor, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。带通滤光片做的是单色光度，不是按波段成像，所以不放在技术下面。";

export const siPhotodiodeProducts = [
  {
    id: "s15152",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S15152：滨松表面贴装高速 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KPIN1099E03，页脚写 Mar. 2026 DN，并写 Information described in this material is current as of March 2026，记为约 2026 年 3 月。索引 newState 是 true。同一份手册还列出 S15173。",
    applications: [],
    technologies: [],
    models: [
      page("S15152", "2026-03", part("S15152"), [
        "产品页没有写发布日期。一级标题写 S15152。页面标题写 Si PIN photodiode S15152。二级标题写 Surface mountable,   high-speed response Si PIN photodiode，逗号后面有三个空格。正文写 The S15152 is a Si PIN photodiode sealed in a surface mountable chip carrier package。后面写 It can be mounted using solder reflow, which facilitates automation，以及 suitable for FSO (free space optics) and other applications that require a wide field of view，还有 measurements and analysis。特性三条前面都有连字符：Surface mount type、Compatible with lead-free solder reflow、High sensitivity, high-speed response。产品页没有写应用栏。下载标 462 KB/PDF。",
        "规格表感光面积 5.0 × 5.0 mm，封装 Glass epoxy，封装类别 Surface mount type，冷却 Non-cooled，反向电压最大 30 V。光谱范围 380 to 1100 nm。峰值 960 nm，光灵敏度典型 0.69 A/W，暗电流最大 5000 pA，截止频率典型 20 MHz，终端电容典型 43 pF，噪声等效功率典型 1.7 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。测量条件写 Ta=25 ℃，Typ.，Photosensitivity: λ=960 nm，Dark current: VR=10 V，Cutoff frequency: VR=10 V, RL=50 Ω，Terminal capacitance: VR=10 V, f=10 kHz，NEP: VR=10 V, λ=λp，unless otherwise noted。产品页没有列出上升时间。光谱图文件是 kpinb0476.svg，资源名 KPINB0476.svg。外形标题写 Dimensional outline (unit: mm)，图文件是 kpina0132.svg，资源名 KPINA0132.svg。" +
          docs,
        `${indexIntro}这一行 newState 是 true。productName 写 Si PIN photodiode。productExp 与二级标题相同，逗号后面同样是三个空格。thumbAlt 是 null。类型的值是 --。感光面积的值写成 5.0 × 5.0，显示写成 5.0 × 5.0 mm。光谱范围的值写成 380 to 1100，显示才补上 nm。光灵敏度 0.69 A/W。暗电流 5000 pA。上升时间是 --。截止频率 20 MHz。终端电容 43 pF。噪声等效功率的值写成 1.7 × 10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 Surface mount，显示写成 Surface mount type。冷却 Non-cooled。手册标 462 KB。索引地址 ${index}。`,
        `手册 ${sheet}。目录号 KPIN1099E03，页脚写 Mar. 2026 DN，并写 current as of March 2026。同一份手册列出 S15152 和 S15173。引言把产品页的 The S15152 is 写成 The S15152 and S15173 are，把 It can be mounted 写成 They can be mounted，后面仍写 it is suitable，再写 they can be used。特性没有连字符。结构表感光面积写成 5 × 5 mm，封装 Glass epoxy，窗口材料 Silicone resin。绝对最大额定值反向电压 30 V，功耗 50 mW，工作温度 -40 to +100 °C，贮存温度 -40 to +125 °C，焊接温度 260 (3 times)。注 *1 写 No dew condensation。注 *2 写 JEDEC J-STD-020 MSL 3 (S15152)，并写 see P.7。电特性表光灵敏度在 λp 为 0.69 A/W，另有 λ=660 nm 0.47 A/W、λ=780 nm 0.57 A/W、λ=830 nm 0.61 A/W。暗电流典型 0.2 nA、最大 5 nA，条件 VR=10 V。暗电流温度系数 1.15 times/°C。截止频率 20 MHz，条件 RL=50 Ω, VR=10 V。终端电容 43 pF，条件 f=10 kHz, VR=10 V。噪声等效功率 1.7 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。光谱图号 KPINB0476EA。温度特性图号 KPINB0482JA，产品页没有这张图。暗电流对反向电压图号 KPINB0477EA。终端电容对反向电压图号 KPINB0478EA，条件写成 f=1 MHz，电特性表写的是 f=10 kHz。外形图号 KPINA0132EB，产品页资源名没有 EB。外形把 Tolerance 写成 Torelance。推荐焊盘图号 KPSDC0104EB。卷带包装 500 pcs/reel，带宽 16 mm。开封后贮存 168 hours。` +
          `${guide}第 23 页把 S15152 放在 High-speed response Si PIN photodiodes，说明写 chip carrier package suitable for surface mounting and allowed solder reflow mounting。封装写成 Plastic。截止频率 20 MHz，感光面积 5 × 5 mm，光谱范围 380 to 1100 nm，λ=960 nm 光灵敏度 0.69 A/W。终端电容栏的表头写 f=1 MHz，格子写成 43(f=10 kHz)。光谱图号 KPINB0480EA，同一张图还写 S5106、S5107、S7509 和 S7510。` +
          placePin,
      ]),
    ],
  },
  {
    id: "s15173",
    date: "2026-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S15173：滨松表面贴装高速 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。与 S15152 共用 KPIN1099E03，页脚写 Mar. 2026 DN，并写 current as of March 2026，记为约 2026 年 3 月。索引 newState 是 true。选型指南没有列出这一型号。",
    applications: [],
    technologies: [],
    models: [
      page("S15173", "2026-03", part("S15173"), [
        "产品页没有写发布日期。一级标题写 S15173。页面标题写 Si PIN photodiode S15173。二级标题同样写 Surface mountable,   high-speed response Si PIN photodiode，逗号后面有三个空格。正文把 S15152 换成 S15173，其余句子相同，包括 FSO (free space optics) 和 wide field of view。特性三条与 S15152 相同，前面都有连字符。产品页没有写应用栏。下载标 462 KB/PDF。光谱图和手册都与 S15152 相同。",
        "规格表感光面积 10 × 10 mm，封装 Glass epoxy，封装类别 Surface mount type，冷却 Non-cooled，反向电压最大 30 V。光谱范围 380 to 1100 nm。峰值 960 nm，光灵敏度典型 0.69 A/W，暗电流最大 10000 pA，截止频率典型 20 MHz，终端电容典型 155 pF，噪声等效功率典型 2.9 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。测量条件与 S15152 相同，光灵敏度条件是 λ=960 nm，终端电容条件是 VR=10 V, f=10 kHz。外形图文件是 kpina0133.svg，资源名 KPINA0133.svg。" +
          docs,
        `${indexIntro}这一行 newState 是 true。productName 写 Si PIN photodiode。productExp 与二级标题相同。thumbAlt 是 null。类型的值是 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。暗电流 10000 pA。上升时间是 --。截止频率 20 MHz。终端电容 155 pF。噪声等效功率的值写成 2.9 × 10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 Surface mount，显示写成 Surface mount type。手册标 462 KB。`,
        `手册仍是 ${sheet}，记为约 2026 年 3 月。结构表感光面积写成 10 × 10 mm，封装 Glass epoxy，窗口材料 Silicone resin。暗电流典型 0.5 nA、最大 10 nA，条件 VR=10 V。终端电容 155 pF。噪声等效功率 2.9 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。光灵敏度与 S15152 同一列，λp 为 0.69 A/W。注 *2 把这一型号写成 JEDEC J-STD-020 MSL4，MSL 和 4 之间没有空格。暗电流对反向电压图号 KPINB0483EA。终端电容对反向电压图号 KPINB0484EA，条件同样写成 f=1 MHz。外形图号 KPINA0133EA，产品页资源名没有 EA，同样把 Tolerance 写成 Torelance。推荐焊盘图号 KPSDC0109EA。卷带包装 100 pcs/reel，带宽 24 mm。开封后贮存 72 hours。` +
          `${guide}高速表面贴装这一节列出 S15152，没有列出 S15173。` +
          placePin,
      ]),
    ],
  },
  {
    id: "s16495",
    date: "2026-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S16495：滨松 310 nm 单色滤光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。手册目录号 KSPD1096E02，页脚写 Oct. 2026 DN，并写 Information described in this material is current as of October 2026，记为约 2026 年 10 月。索引 newState 是 true。产品页和索引把光灵敏度写成 0.13 A/W，手册和选型指南写成 13 mA/W。",
    applications: [],
    technologies: [],
    models: [
      page("S16495", "2026-10", part("S16495"), [
        "产品页没有写发布日期。一级标题写 S16495。页面标题写 Si photodiode S16495。二级标题写 Photodiode with a filter for monochromatic light (310 nm) detection。正文没有写出型号，写 This is a compact, surface-mount type photodiode with a center wavelength sensitivity at 310 nm, including a band-pass filter。下一句写 The spectral response half width (FWHM) is extremely narrow, allowing accurate photometry with little stray light。特性第一条连字符后面是不换行空格，写 With monochromatic light filter。后两条连字符后面是普通空格：Surface mount type、Compact and thin leadless ceramic package。产品页没有写应用栏。下载标 395 KB/PDF。",
        "规格表感光面积 1.1 × 1.1 mm，封装 Ceramic，封装类别 Surface mount type，冷却 Non-cooled，反向电压最大 5 V。光谱范围 304 to 316 nm。峰值 310 nm，光灵敏度典型 0.13 A/W，暗电流最大 10 pA，上升时间典型 0.1 μs，终端电容典型 25 pF。规格表没有截止频率，也没有噪声等效功率。测量条件写 Ta=25 ℃，Typ.，Photosensitivity: λ=λp，Dark current: 10 mV，Terminal capacitance: VR=0 V, f=10 kHz，unless otherwise noted。暗电流条件没有写出 VR=。光谱图文件是 kspdb0454.svg，资源名 KSPDB0454.svg。外形图文件是 kspda0235.svg，资源名 KSPDA0235.svg。" +
          docs,
        `${indexIntro}这一行 newState 是 true。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 是 null。类型的值是 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 304 to 316，显示才补上 nm。光灵敏度 0.13 A/W。暗电流 10 pA。上升时间的值写成 0.1，显示写成 0.1 μs。截止频率是 --。终端电容 25 pF。噪声等效功率是 --。封装的值和显示都是 Ceramic。封装类别的值写成 Surface mount，显示写成 Surface mount type。手册标 395 KB。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s16495_kspd1096e.pdf。目录号 KSPD1096E02，页脚写 Oct. 2026 DN，并写 current as of October 2026。手册标题先写 Si photodiode，再把二级标题拆成两行，型号写在下面。特性没有连字符。中心波长最小 304 nm、典型 310 nm、最大 316 nm。半宽最小 10 nm、典型 15 nm、最大 20 nm。光灵敏度条件 λ=310 nm，最小 7 mA/W、典型 13 mA/W。产品页和索引写成 0.13 A/W。暗电流典型 1 pA、最大 10 pA，条件 VR=10 mV。暗电流温度系数 1.12 times/°C。上升时间条件 VR=0 V, RL=1 kΩ，10% to 90%，典型 0.1 µs。终端电容典型 25 pF、最大 35 pF，条件 VR=0 V, f=10 kHz。绝对最大反向电压 5 V。工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C，条件都写 No dew condensation。焊接温度 260 (3 times)。注 *2 写 JEDEC J-STD-020 MSL 3, see P.3。光谱图号 KSPDB0454EA。另有暗电流图 KSPDB0456EA 和终端电容图 KSPDB0457EA，产品页没有这两张图。外形图号 KSPDA0235EA，写 Tolerance unless otherwise noted: ±0.1，并写 Photosensitive area 1.1 × 1.1。推荐焊盘图号 KPINC0041EA。开封后在 30 °C 以下、湿度 60 % 以下于 168 hours 内回流焊，百分号前面有空格。文末写 Precautions against UV light exposure。相关信息把页面的 Catalogs / Technical notes 写成 Catalog，把 Technical note / Si photodiodes 写成 Technical note / Si photodiode。` +
          `${guide}第 38 页标题写 For monochromatic light detection，说明写 This photosensor uses an interference filter and has high sensitivity only to monochromatic light。这一行中心波长 310 nm，半宽 15 nm，光灵敏度 13 mA/W，暗电流最大 10 pA，条件 VR=10 mV，感光面积 1.1 × 1.1 mm，封装 Ceramic。星号写 Refer to “Precautions against UV light exposure (P.45) ”。指南没有把光灵敏度写成 0.13 A/W。` +
          placeFilter,
      ]),
    ],
  },
];
