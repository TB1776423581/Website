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

const s1223Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1223_series_kpin1050e.pdf";

const s1223Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。";

const placeS1223 =
  "手册应用写 Optical measurement equipment 和 Analytical equipment, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s1226Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1226_series_kspd1034e.pdf";

const s1226Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。";

const placeS1226 =
  "手册应用写 Analytical equipment 和 Optical measurement equipment, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s1336Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1336_series_kspd1022e.pdf";

const s1336Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 都写 Features- High sensitivity in UV range- Low capacitance- High reliability。Features 和连字符之间没有空格，连字符后面是一个空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：UV to near IR for precision photometry。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性三条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：High sensitivity in UV range、Low capacitance、High reliability。产品页没有写应用栏。下载标 784 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。相关产品轮播按 S1336-18BK、S1336-18BQ、S1336-44BK、S1336-44BQ、S1336-5BK、S1336-5BQ、S1336-8BK、S1336-8BQ 排，跳过当前型号。主图文件名都带 S1226。S1226 是别的前缀，已经单独成页，没有放进这一页。";

const s1336Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=960 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。λ 是 U+03BB。";

const s1336SheetLead =
  `手册 ${s1336Sheet}。文件名是 s1336_series_kspd1022e.pdf。目录号 KSPD1022E09。pdf 信息里的 Title 是 Si photodiodes S1336 series。封面可见文本先写 Si photodiodes，再写 S1336 series。副题是一行：UV to near IR for precision photometry。正文写 These Si photodiodes have sensitivity in the UV to near IR range. They are suitable for low-light-level detection in analysis and the like.。特性没有连字符：High sensitivity in UV range、Low capacitance、High reliability。应用写 Analytical instruments 和 Optical measurement equipment。产品页没有应用栏。绝对最大反向电压 5 V，数字 5 印在 TO-5 那一带，八只共用。窗材料注写 K=borosilicate glass, Q=quartz glass，borosilicate 的 b 是小写。注 *2 的 No 被拆开，N 后面是 U+0007，再写 o dew condensation。注 *3 写 Refer to “Precautions against UV light exposure.”，引号是弯引号。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)，° 是 U+00B0。峰值 960 nm、λp 光灵敏度 0.5 A/W、He-Ne 633 nm 光灵敏度 0.33 A/W、暗电流温度系数 1.15 times/°C，这四项印在 S1336-5BK 和 S1336-44BQ 中间，八只共用。200 nm 这一列石英窗最小 0.10 A/W、典型 0.12 A/W，硼硅玻璃是横线。暗电流条件 VR=10 mV，表里没有典型值。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+2126。表头单位写成 µs，µ 是 U+00B5。产品页上升时间用的 μ 是 U+03BC，测量条件没有写上升时间。终端电容条件 VR=0 V, f=10 kHz。分流电阻条件 VR=10 mV，单位 GΩ。短路电流条件 100 lx。噪声等效功率文本层在 × 两边有空格，指数另起一个词，没有写成上标。产品页 × 两边没有空格，指数写成上标。光谱图号 KSPDB0098EA，曲线标 S1336-BQ 和 S1336-BK，条件文本层写成 (Typ. Ta =25 °C)，等号两边有空格。温度特性图号 KSPDB0053EB。暗电流对反向电压图号 KSPDB0100EA，条件 (Typ. Ta=25 °C)，曲线标 S1336-8BQ/BK、S1336-18BQ/BK、S1336-44BQ/BK 和 S1336-5BQ/BK。同一页文本层还把 KSPDB0098EA 印进暗电流图一带。产品页只放了光谱 svg 和外形图。第 3 页有一行写 Dimensional outlines (unit: mm)，outlines 是复数。各只图题用单数 outline。各外形图引线写成 0.45。末页写 Information described in this material is current as of July 2023。最后一行写 Cat. No. KSPD1022E09 Jul. 2023 DN。末页没有写 Created in Japan，改印销售地址。紫外注意事项两条都以 ∙ 开头，第一个字母和后面的字母之间是 U+0007。记为约 2023 年 7 月。`;

const s1336Guide =
  `${guide}第 7 页标题写 Si photodiodes for precision photometry，小标题写 For UV to near IR range。说明写 They are suitable for low-light-level detection in analysis and the like.。λ=960 nm 的 0.5 印在 S1336-5BK 和 S1336-44BQ 中间，八只共用。封装 TO-5 也印在这一带，S1336-5 和 S1336-44 共用。页脚页码写 7 / 46。光谱图号 KSPDB0262EF，图题方括号写 S1336-BQ, S1337-BQ，方括号内侧各有两个 U+2005。另一张图号 KSPDB0309EA，图题方括号写 S1336-BK, S1337-BR。图注里一张写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，另一处写 (Typ. Ta=25 °C)，° 是 U+00B0。手册图号是 KSPDB0098EA。星号写 Refer to “Precautions against UV light exposure (P.45).”。同一页还有 S1337，是别的前缀，没有放进这一页。`;

const placeS1336 =
  "手册应用写 Analytical instruments 和 Optical measurement equipment。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s1336Window =
  "窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap。";

const s1226Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 都写 Features- High UV sensitivity: QE＝75 % (λ=200 nm)- Suppressed near IR sensitivity- Low dark current- High reliability。＝ 是 U+FF1D，λ 是 U+03BB。Features 和连字符之间没有空格，连字符后面是一个空格。二级标题写 For UV to visible, precision photometry; suppressed near IR sensitivity，是一行。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性四条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：High UV sensitivity: QE＝75 % (λ=200 nm)、Suppressed near IR sensitivity、Low dark current、High reliability。百分号前面有空格。产品页没有写应用栏。下载标 723 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。";

const s1226Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=720 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。λ 是 U+03BB。";

const s1227Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1227_series_kspd1036e.pdf";

const s1227Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：For UV to visible, precision photometry; suppressed IR sensitivity。前六只的二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格。产品页没有写应用栏。下载标 813 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。相关产品是另外七只 S1227，轮播从 S1227-1010BQ 排起，跳过当前型号。图注写 Si photodiode 再加型号，alt 都写 Si photodiode product photo。主图文件名带 S1337。BR 的主图文件名还带 S12915。S1337 和 S12915 是别的前缀，没有放进这一页。";

const s1227Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。封装类别的值是 --。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=720 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。λ 是 U+03BB。";

const s1227SheetLead =
  `手册 ${s1227Sheet}。文件名是 s1227_series_kspd1036e.pdf。目录号 KSPD1036E07。pdf 信息里的 Title 是空的。封面可见文本先写 Si photodiodes，再写 S1227 series。副题分成两行，产品页把它合成一行，中间是分号。正文写 These Si photodiodes have suppressed IR sensitivity. They are suitable for low-light-level detection in analysis and the like.。特性没有连字符：High UV sensitivity (quartz window type): QE 75 % (l=200 nm)、Suppressed IR sensitivity、Low dark current。文本层把 λ 写成拉丁字母 l，等号是 ASCII。产品页石英窗型号写成 QE＝75 % (λ=200 nm)，＝ 是 U+FF1D。应用写 Analytical equipment 和 Optical measurement equipment, etc.。产品页没有应用栏。绝对最大反向电压 5 V，八只共用。功耗栏没有。工作温度 -20 to +60 °C，贮存温度 -20 to +80 °C，° 是 U+00B0，八只共用。注 * 只标在石英窗四只后面，写 Refer to “Precautions against UV light exposure.”，引号是弯引号。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。峰值 720 nm，八只共用。λp 光灵敏度石英窗是 0.36 A/W，树脂灌封是 0.43 A/W。200 nm 这一列石英窗最小 0.10 A/W、典型 0.12 A/W，树脂灌封是横线。He-Ne 633 nm 石英窗是 0.34 A/W，树脂灌封是 0.39 A/W。暗电流条件 VR=10 mV，表里没有典型值。暗电流温度系数 1.12 times/°C，八只共用。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+2126。表头单位写成 µs，µ 是 U+00B5。产品页上升时间用的 μ 是 U+03BC，测量条件没有写上升时间。终端电容条件 VR=0 V, f=10 kHz。分流电阻条件 VR=10 mV，单位 GΩ。短路电流条件 100 lx。噪声等效功率文本层在 × 两边有空格，-15 没有写成上标。产品页 × 两边没有空格，-15 写成上标。光谱图号 KSPDB0094EC 给 BQ，KSPDB0307EA 给 BR，条件都写 (Typ. Ta=25 °C)。温度特性图号 KSPDB0030EB，条件 (Typ. )，Typ 和右括号之间有空格。暗电流对反向电压图号 KSPDB0096EB，条件 (Typ. Ta=25 °C)，曲线标 S1227-16BQ/BR、S1227-33BQ/BR、S1227-66BQ/BR 和 S1227-1010BQ/BR。产品页只放了光谱 jpeg 和外形图。第 3 页外形图题写 Dimensional outlines (unit: mm)，outlines 是复数。第 4 页文本层没有这句图题。末页写 Information described in this material is current as of October, 2015，October 后面有逗号。最后一行写 Cat. No. KSPD1036E07  Oct. 2015 DN，Oct 前面有两个空格。末页没有写 Created in Japan，改印销售地址。紫外注意事项两条都以 ∙ 开头，后面是空格再加 U+0007。记为约 2015 年 10 月。`;

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
  {
    id: "s1223",
    date: "2013-02",
    companyId: "hamamatsu",
    category: "product",
    title: "S1223：滨松可见到近红外精密测光 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s1223_series_kpin1050e.pdf。可见文本第一行写 Si PIN photodiodes，pdf 信息里的 Title 写 Si PIN photodiode S1223 series。末页写 Information described in this material is current as of February, 2013，February 后面有逗号。最后一行写 Cat. No. KPIN1050E02 Feb. 2013 DN，记为约 2013 年 2 月。索引 newState 都是 false，是第 4 行和第 5 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1223", "2013-02", part("S1223"), [
        "产品页没有写发布日期。导语写 Si PIN photodiode。一级标题写 S1223。页面标题和 og:title 都写 Si PIN photodiode S1223 | Hamamatsu Photonics，竖线前面是一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 都写 Features- High sensitivity in visible to near infrared range- High reliability- High-speed response: fc=30 MHz- Low capacitance。Features 和连字符之间没有空格，连字符后面是一个空格。二级标题写 For visible to near IR, precision photometry，是一行。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性四条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：High sensitivity in visible to near infrared range、High reliability、High-speed response: fc=30 MHz、Low capacitance。产品页没有写应用栏。下载标 613 KB/PDF。主图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg，文件名写的是 S1226 和 S1336。alt 写 Si photodiode product photo。相关产品只列 Si PIN photodiode S1223-01。alt 同样写 Si photodiode product photo，文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。面包屑里的 Si photodiodes 末尾没有空格。",
        "规格表没有类型。感光面积 2.4 × 2.8 mm，× 是 U+00D7，两边有空格。封装 Metal。封装类别的表头写成 Package category，c 是小写，值是 TO-5。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.52 A/W。暗电流最大 10000 pA。截止频率典型 30 MHz。终端电容典型 10 pF。噪声等效功率典型 9.4×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。规格表没有上升时间，没有窗材料，也没有有效感光面积。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=780 nm，Dark current: V<sub>R</sub>=20 V，Cutoff frequency: V<sub>R</sub>=20 V，Terminal capacitance: V<sub>R</sub>=20 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=20 V, λ=λp，unless otherwise noted。λ 是 U+03BB。光谱图是 jpeg，文件名 k_s1223_sr_xx,0.jpg，资源名同一文件。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。地址里的文件名是 kspda0196eb.svg。data-asset 写成 KSPDA0196EB.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1223Docs,
        `${indexIntro}这一行是第 4 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 For visible to near IR, precision photometry，与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。typeNameSort 写成 S01223。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.8，显示写成 2.4 × 2.8 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.52 A/W。暗电流 10000 pA。上升时间是 --。截止频率 30 MHz。终端电容 10 pF。噪声等效功率的值写成 9.4×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-5。冷却的值和显示都写成 Non-cooled。手册标 613 KB。索引地址 ${index}。S1223-01 放在同一页。`,
        `手册 ${s1223Sheet}。文件名是 s1223_series_kpin1050e.pdf。目录号 KPIN1050E02。第 1 页页脚写 www.hamamatsu.com 和页码 1。末页写 Information described in this material is current as of February, 2013，February 后面有逗号，2013 后面有句号。最后一行写 Cat. No. KPIN1050E02 Feb. 2013 DN。页码 3 在上一行。末页没有写 Created in Japan，改印销售地址。记为约 2013 年 2 月。封面可见文本写 Si PIN photodiodes，型号写 S1223 series。副题写 For visible to near IR, precision photometry。特性没有连字符。高速这一条下面再分两行：S1223: fc=30 MHz，S1223-01: fc=20 MHz。产品页把 fc=30 MHz 接在 High-speed response 后面。应用写 Optical measurement equipment 和 Analytical equipment, etc.。产品页没有应用栏。结构表这一只外形 (1)，窗材料 Borosilicate glass，封装 TO-5。感光面积 2.4 × 2.8 mm。有效感光面积 6.6，单位写成 mm，2 是单独一个字，位置比 mm 高一点，不是上标字符。产品页规格表没有窗材料，也没有有效感光面积。绝对最大反向电压 30 V，两只共用。功耗 100 mW。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C，° 是 U+00B0。Note 写 Exceeding the absolute maximum ratings even momentarily may cause a drop in product quality. Always be sure to use the product within the absolute maximum ratings。电特性表头写 Electrical and optical characteristics (Ta=25 °C)。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度在 λ=λp 为 0.6 A/W，λ=660 nm 为 0.45 A/W，λ=780 nm 为 0.52 A/W，λ=830 nm 为 0.54 A/W。产品页和索引只写 0.52 A/W，测量条件写的是 λ=780 nm。短路电流条件 100 lx，最小 5 μA、典型 6.3 μA，μ 是 U+03BC。暗电流条件 VR=20 V，典型 0.1 nA、最大 10 nA。产品页写成最大 10000 pA。暗电流温度系数 1.15 times/°C。截止频率 30 MHz，条件 VR=20 V, -3 dB。产品页测量条件没有写 -3 dB。终端电容 10 pF，条件 VR=20 V, f=1 MHz。噪声等效功率 9.4 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边有空格，-15 是单独一个抬高的词。产品页写成 9.4×10<sup>-15</sup>，× 两边没有空格。光谱图号 KPINB0143EB，条件 (Typ. Ta=25 °C)。另有光灵敏度温度特性图 KPINB0144EB，条件 (Typ.)，暗电流图 KPINB0145EA，条件 (Typ. Ta=25 °C)，终端电容图 KPINB0146EA，条件 (Typ. Ta=25 °C, f=1 MHz)。产品页只放了光谱 jpeg 和外形图。外形图题写 Dimensional outlines (unit: mm)，outlines 是复数。这一只是 (1) S1223，图号 KSPDA0196EB。图上有 5.9 ± 0.1、8.1 ± 0.1、9.1 ± 0.2、4.1 ± 0.2、2.8、20、0.45 和 5.08 ± 0.2，± 是 U+00B1。感光面写 2.4 × 2.8。图上写 Window、Glass、Photosensitive area、Photosensitive surface、Lead、Y 和 X。感光面中心对管帽中心写成一个词 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3，≤ 是 U+2264。并写 Connected to case。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap。` +
          `${guide}第 19 页标题写 High-speed response Si PIN photodiodes。截止频率这一节写 10 MHz to less than 100 MHz。这一行感光面积 2.4 × 2.8，截止频率 30，下面一行写 (VR=20 V)，终端电容 10，下面一行写 (VR=20 V)。0.45 和 0.52 印在这一行和 S1223-01 中间，落在 λ=660 nm 和 λ=780 nm 两列。封装 TO-5 印在 S1223-01 那一行。光谱图号 KPINB0143EC，手册图号是 KPINB0143EB。页脚页码写 19 / 46。同一页还有 S5821、S9119-01、S3071、S3072 和 S12271，是别的前缀，没有放进这一页。` +
          placeS1223,
      ]),
      page("S1223-01", "2013-02", part("S1223-01"), [
        "产品页没有写发布日期。导语写 Si PIN photodiode。一级标题写 S1223-01。页面标题和 og:title 都写 Si PIN photodiode S1223-01 | Hamamatsu Photonics，竖线前面是一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 与 S1223 相同，只把 fc=30 MHz 换成 fc=20 MHz。二级标题与 S1223 相同。二级标题下面同样是一个只含不换行空格的 p。特性四条的连字符后面都是普通空格，高速这一条写 High-speed response: fc=20 MHz。产品页没有写应用栏。下载标 613 KB/PDF。主图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品只列 Si PIN photodiode S1223。alt 同样写 Si photodiode product photo，文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。面包屑里的 Si photodiodes 末尾没有空格。",
        "规格表没有类型。感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5，表头同样是 Package category。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.52 A/W。暗电流最大 10000 pA。截止频率典型 20 MHz。终端电容典型 20 pF。噪声等效功率典型 1.3×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。规格表没有上升时间。测量条件与 S1223 相同，光灵敏度条件仍是 λ=780 nm。光谱图文件名仍是 k_s1223_sr_xx,0.jpg。外形图地址里的文件名是 kspda0193ec.svg。data-asset 写成 KSPDA0193EC.svg。目录名仍是 03_14_new_Product_Dimensional outline_svg。" +
          s1223Docs,
        `${indexIntro}这一行是第 5 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 For visible to near IR, precision photometry。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。typeNameSort 写成 S01223-0001。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。暗电流 10000 pA。上升时间是 --。截止频率 20 MHz。终端电容 20 pF。噪声等效功率的值写成 1.3×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却的值和显示都写成 Non-cooled。手册标 613 KB。`,
        `手册仍是 ${s1223Sheet}，记为约 2013 年 2 月。结构表这一只外形 (2)。窗材料、封装和光灵敏度与 S1223 共用。感光面积 3.6 × 3.6 mm。有效感光面积 13。短路电流最小 10 μA、典型 13 μA。暗电流典型 0.2 nA、最大 10 nA。产品页暗电流仍写成最大 10000 pA。截止频率 20 MHz。终端电容 20 pF。噪声等效功率 1.3 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边有空格。外形图 (2) 图号 KSPDA0193EC。图上的尺寸与 (1) 同一套，另有 0.3。感光面写 3.6 × 3.6。感光面中心对管帽中心的文本层写成一个词 -0.6≤X≤0，0 前面没有加号。下一行写 -0.3≤Y≤+0.3。窗玻璃那句与 (1) 相同。` +
          `约 2025 年 9 月的选型指南第 19 页把这一行的感光面积写成 3.6 × 3.6，截止频率 20，终端电容 20，两处条件都写 (VR=20 V)。封装 TO-5 印在这一行。` +
          placeS1223,
      ]),
    ],
  },
  {
    id: "s1226",
    date: "2023-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S1226：滨松紫外到可见精密测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。八只共用这一页。手册文件名是 s1226_series_kspd1034e.pdf。可见文本第一行写 Si photodiodes，pdf 信息里的 Title 写 Si photodiodes S1226 series。末页写 Information described in this material is current as of July 2023，July 后面没有逗号。最后一行写 Cat. No. KSPD1034E10 Jul. 2023 DN，记为约 2023 年 7 月。索引 newState 都是 false，是第 6 行到第 13 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1226-5BK", "2023-07", part("S1226-5BK"), [
        s1226Page +
          "一级标题写 S1226-5BK。主图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg，文件名同时写 S1226 和 S1336。alt 写 Si photodiode product photo。相关产品列出 S1226-18BK、S1226-18BQ、S1226-44BK、S1226-44BQ、S1226-5BQ、S1226-8BK 和 S1226-8BQ。图注都写 Si photodiode 再加型号，alt 都写 Si photodiode product photo，文件名都带 s1336。相关产品没有列出 S1336。",
        "规格表感光面积 2.4 × 2.4 mm，× 是 U+00D7，两边有空格。封装 Metal。封装类别的表头写成 Package category，c 是小写，值是 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs，μ 是 U+03BC。终端电容典型 160 pF。噪声等效功率典型 2.5×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图是 jpeg，文件名 k_s1226-18bk_sr_xx,0.jpg，资源名同一文件，文件名写的是 S1226-18BK。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。地址里的文件名是 kspda0114ed.svg。data-asset 写成 KSPDA0114ED.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 6 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。typeNameSort 写成 S01226-0005BK。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 160 pF。噪声等效功率的值写成 2.5×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-5。冷却的值和显示都写成 Non-cooled。手册标 723 KB。索引地址 ${index}。其余七只放在同一页。`,
        `手册 ${s1226Sheet}。文件名是 s1226_series_kspd1034e.pdf。目录号 KSPD1034E10。pdf 信息里的 Title 写 Si photodiodes S1226 series。封面可见文本先写 Si photodiodes，再写 S1226 series。副题分成两行，产品页把它合成一行，中间是分号。正文写 These Si photodiodes have suppressed IR sensitivity. They are suitable for low-light-level detection in analysis and the like.。特性没有连字符：Suppressed near IR sensitivity、High sensitivity in UV region (quartz glass type)、Low dark current、High reliability。产品页把第一条换成 High UV sensitivity: QE＝75 % (λ=200 nm)，八只产品页都这么写，包括窗是硼硅玻璃、光谱从 320 nm 起的型号。应用写 Analytical equipment 和 Optical measurement equipment, etc.。产品页没有应用栏。结构表这一只外形 (4)/K，窗材料 K=borosilicate glass，b 是小写，封装 TO-5。感光面积 2.4 × 2.4 mm。石英窗四只的型号后面标 *3，(3)/Q、(1)/Q、(5)/Q 和 (7)/Q。手册没有单独的 *3 注。注 *1 写 Window material, K=borosilicate glass, Q=quartz glass。注 *2 写了两次。第一次的 No 在 N 和 o 之间是 U+0007，后面写 dew condensation，并写温差结露可能造成特性变差。第二次仍标 *2，写 Refer to “Precautions against UV light exposure.”，引号是弯引号。Note 的 Exceeding 前面是 U+0007。绝对最大反向电压 5 V，八只共用。功耗栏没有。硼硅玻璃这四只工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C，° 是 U+00B0。石英玻璃那四只工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。峰值 720 nm，λp 光灵敏度 0.36 A/W，八只共用。He-Ne 633 nm 为 0.34 A/W，也是共用。200 nm 这一列硼硅玻璃型号是横线。暗电流条件 VR=10 mV，这一只最大 5 pA，表里没有典型值。暗电流温度系数 1.12 times/°C，八只共用。上升时间 0.5 μs，手册 μ 是 U+00B5，条件 VR=0 V, RL=1 kΩ，Ω 是 U+2126。产品页上升时间用的 μ 是 U+03BC，测量条件没有写上升时间。终端电容 160 pF，条件 VR=0 V, f=10 kHz。分流电阻最小 2 GΩ、典型 20 GΩ，产品页没有这一栏。短路电流条件 100 lx，最小 2.2 µA、典型 2.9 µA，µ 是 U+00B5，产品页没有这一栏。噪声等效功率文本层写成 2.5 × 10-15，× 两边有空格，页面记成 2.5 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。产品页写成 2.5×10<sup>-15</sup>，× 两边没有空格。光谱图号 KSPDB0106EA，条件 (Typ. Ta =25 °C)，图上分 S1226-BQ 和 S1226-BK。温度特性图号 KSPDB0030EA，条件 (Typ. )。暗电流对反向电压图号 KSPDB0108EC，条件 (Typ. Ta=25 °C)。产品页只放了光谱 jpeg 和外形图。外形图题写 Dimensional outlines (unit: mm)，outlines 是复数。这一只是 (4) S1226-5BK，图号 KSPDA0114ED。同一页文本层另有一行 Dimensional outline (S1336-5BK, unit: mm)。S1336 是别的前缀，索引这一段没有它，没有放进这一页。图上感光面写 2.4 × 2.4。引线写成 0.45。感光面中心对管帽中心写成一个词 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3，≤ 是 U+2264。并写 Connected to case。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap。` +
          `${guide}第 9 页标题写 Si photodiodes for precision photometry，小标题写 For UV to near IR range，类型写 IR sensitivity suppressed type。说明写 These Si photodiodes have suppressed sensitivity in the infrared range and are suitable for low-light-level detection in analysis and the like.。这一组 λ=720 nm 的 0.36 印在 S1226-5BK 和 S1226-44BQ 中间。λ=200 nm 这一列硼硅玻璃型号是横线，石英型号写 0.12，没有印手册里的最小 0.10。暗电流 5 pA，终端电容 160 pF，感光面积 2.4 × 2.4，封装 TO-5 印在 S1226-5BK 和 S1226-44BQ 中间。页脚页码写 9 / 46。光谱图号 KSPDB0423EB，图题方括号写 S1226-BQ, S1227-BQ。另一张图号 KSPDB0308EA，图题方括号写 S1226-BK, S1227-BR。手册图号是 KSPDB0106EA。星号写 Refer to “Precautions against UV light exposure (P.45).”。同一页还有 S1227 和 S2281-01，是别的前缀，没有放进这一页。` +
          placeS1226,
      ]),
      page("S1226-5BQ", "2023-07", part("S1226-5BQ"), [
        s1226Page +
          "一级标题写 S1226-5BQ。主图文件名是 k_s1226-5bq_s1336-5bq_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Metal，封装类别 TO-5，表头同样是 Package category。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs。终端电容典型 160 pF。噪声等效功率典型 2.5×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0202EB,0.svg，逗号和 0 写在图号后面。目录名仍是 03_14_new_Product_Dimensional outline_svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 7 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bq_s1336-5bq_pp_xx.jpg。typeNameSort 写成 S01226-0005BQ。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 160 pF。噪声等效功率的值写成 2.5×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (3)/Q，窗材料 Q=quartz glass，封装 TO-5，型号后面标 *3。感光面积 2.4 × 2.4 mm。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 5 pA。上升时间 0.5 μs。终端电容 160 pF。分流电阻最小 2 GΩ、典型 20 GΩ。短路电流最小 2.2 µA、典型 2.9 µA。噪声等效功率 2.5 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边有空格。外形图 (3) 图号 KSPDA0202EB。产品页资源名多了 ,0。图上感光面写 2.4 × 2.4。引线写成 0.45。感光面中心对管帽中心写成一个词 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。窗玻璃那句相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，暗电流 5 pA，终端电容 160 pF，感光面积 2.4 × 2.4。型号后面有星号。` +
          placeS1226,
      ]),
      page("S1226-8BK", "2023-07", part("S1226-8BK"), [
        s1226Page +
          "一级标题写 S1226-8BK。主图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal，封装类别 TO-8。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 20 pA。上升时间典型 2 μs。终端电容典型 1200 pF。噪声等效功率典型 5.0×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图地址里的文件名是 kspda0115ed.svg。data-asset 写成 KSPDA0115ED.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 8 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。typeNameSort 写成 S01226-0008BK。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 20 pA。上升时间的值写成 2，显示写成 2 μs。截止频率是 --。终端电容 1200 pF。噪声等效功率的值写成 5.0×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (8)/K，窗材料硼硅玻璃，封装 TO-8。感光面积 5.8 × 5.8 mm。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。暗电流最大 20 pA。上升时间 2 μs。终端电容 1200 pF。分流电阻最小 0.5 GΩ、典型 5 GΩ。短路电流最小 12 µA、典型 16 µA。噪声等效功率 5.0 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边有空格。外形图 (8) 图号 KSPDA0115ED。图上感光面写 5.8 × 5.8。引线文本层写成四个 U+0121 再接 0.45。感光面中心对管帽中心写成一个词 -0.315≤X≤0.485，0.485 前面没有加号，下一行 -0.4≤Y≤+0.4。并写 Index mark ( 1.4)，左括号和 1.4 之间有空格。窗玻璃那句相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 320 to 1000，λ=200 nm 是横线，暗电流 20 pA，终端电容 1200 pF，感光面积 5.8 × 5.8，封装 TO-8 印在 S1226-8BQ 那一行。` +
          placeS1226,
      ]),
      page("S1226-8BQ", "2023-07", part("S1226-8BQ"), [
        s1226Page +
          "一级标题写 S1226-8BQ。主图文件名是 k_s1226-8bq_s1336-8bq_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal，封装类别 TO-8。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 20 pA。上升时间典型 2 μs。终端电容典型 1200 pF。噪声等效功率典型 5.0×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0204EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 9 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-8bq_s1336-8bq_pp_xx.jpg。typeNameSort 写成 S01226-0008BQ。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 20 pA。上升时间的值写成 2，显示写成 2 μs。截止频率是 --。终端电容 1200 pF。噪声等效功率的值写成 5.0×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (7)/Q，窗材料石英玻璃，封装 TO-8，型号后面标 *3。感光面积 5.8 × 5.8 mm。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 20 pA。上升时间 2 μs。终端电容 1200 pF。分流电阻最小 0.5 GΩ、典型 5 GΩ。短路电流最小 12 µA、典型 16 µA。噪声等效功率 5.0 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (7) 图号 KSPDA0204EB。图上感光面写 5.8 × 5.8。引线文本层写成 U+0201 再接 0.45。感光面中心对管帽中心写成一个词 -0.315≤X≤+0.485，下一行 -0.4≤Y≤+0.4。并写 Index mark ( 1.4)，左括号和 1.4 之间有空格。窗玻璃那句相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，暗电流 20 pA，终端电容 1200 pF，感光面积 5.8 × 5.8，封装 TO-8 印在这一行。型号后面有星号。` +
          placeS1226,
      ]),
      page("S1226-18BK", "2023-07", part("S1226-18BK"), [
        s1226Page +
          "一级标题写 S1226-18BK。主图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal，封装类别 TO-18。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 2 pA。上升时间典型 0.15 μs。终端电容典型 35 pF。噪声等效功率典型 1.6×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg，和这一只的型号相同。外形图 data-asset 写成 KSPDA0113EE.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 10 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。typeNameSort 写成 S01226-0018BK。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 2 pA。上升时间的值写成 0.15，显示写成 0.15 μs。截止频率是 --。终端电容 35 pF。噪声等效功率的值写成 1.6×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-18。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (2)/K，窗材料硼硅玻璃，封装 TO-18。感光面积 1.1 × 1.1 mm。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。暗电流最大 2 pA。上升时间 0.15 μs。终端电容 35 pF。分流电阻最小 5 GΩ、典型 50 GΩ。短路电流最小 0.5 µA、典型 0.66 µA。噪声等效功率 1.6 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边有空格。外形图 (2) 图号 KSPDA0113EE。图上感光面写 1.1 × 1.1。引线文本层写成 U+0201 再接 0.45。窗高 3.0 ± 0.1，± 是 U+00B1。感光面中心对管帽中心写成一个词 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。窗玻璃那句相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 320 to 1000，λ=200 nm 是横线，暗电流 2 pA，终端电容 35 pF，感光面积 1.1 × 1.1，封装 TO-18 印在这一行。` +
          placeS1226,
      ]),
      page("S1226-18BQ", "2023-07", part("S1226-18BQ"), [
        s1226Page +
          "一级标题写 S1226-18BQ。二级标题仍是 For UV to visible, precision photometry; suppressed near IR sensitivity。主图文件名是 k_s1226-18bq_s1336-18bq_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal，封装类别 TO-18。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 2 pA。上升时间典型 0.15 μs。终端电容典型 35 pF。噪声等效功率典型 1.6×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0201E.svg，手册图号末尾的 C 没有写上。" +
          s1226Docs,
        `${indexIntro}这一行是第 11 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题不同，写 UV to Visible sensitivity, Supressed near IR sensitivity, low dark current, For spectrophotometer, analytical instruments, medical instruments.。Visible 的 V 是大写。Supressed 少了一个 p。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-18bq_s1336-18bq_pp_xx.jpg。typeNameSort 写成 S01226-0018BQ。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 2 pA。上升时间的值写成 0.15，显示写成 0.15 μs。截止频率是 --。终端电容 35 pF。噪声等效功率的值写成 1.6×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-18。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (1)/Q，窗材料石英玻璃，封装 TO-18，型号后面标 *3。感光面积 1.1 × 1.1 mm。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 2 pA。上升时间 0.15 μs。终端电容 35 pF。分流电阻最小 5 GΩ、典型 50 GΩ。短路电流最小 0.5 µA、典型 0.66 µA。噪声等效功率 1.6 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (1) 图号 KSPDA0201EC。产品页资源名写成 KSPDA0201E.svg。图上感光面写 1.1 × 1.1。引线文本层写成 U+0201 再接 0.45。窗高 3.0 ± 0.2。感光面中心对管帽中心的文本层写成 -0.3，中间是 U+001F，再写 X，再是 U+001F，再写 +0.3。下一行 Y 同样用 U+001F。右侧 (2) 用的是 ≤。窗玻璃那句相同。索引 productExp 里的 spectrophotometer、analytical instruments 和 medical instruments 没有出现在手册应用栏。手册应用仍是 Analytical equipment 和 Optical measurement equipment, etc.。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，暗电流 2 pA，终端电容 35 pF，感光面积 1.1 × 1.1。型号后面有星号。封装 TO-18 印在 S1226-18BK 那一行。` +
          placeS1226,
      ]),
      page("S1226-44BK", "2023-07", part("S1226-44BK"), [
        s1226Page +
          "一级标题写 S1226-44BK。主图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 10 pA。上升时间典型 1 μs。终端电容典型 500 pF。噪声等效功率典型 3.6×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0195EC.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 12 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。typeNameSort 写成 S01226-0044BK。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 10 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 500 pF。噪声等效功率的值写成 3.6×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (6)/K，窗材料硼硅玻璃，封装 TO-5。感光面积 3.6 × 3.6 mm。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。暗电流最大 10 pA。上升时间 1 μs。终端电容 500 pF。分流电阻最小 1 GΩ、典型 10 GΩ。短路电流最小 4.4 µA、典型 5.9 µA。噪声等效功率 3.6 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边有空格。外形图 (6) 图号 KSPDA0195EC。图上感光面写 3.6 × 3.6，另有 0.3。引线写成 0.45。感光面中心对管帽中心写成一个词 -0.6≤X≤0，0 前面没有加号，下一行 -0.3≤Y≤+0.3。窗玻璃那句相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 320 to 1000，λ=200 nm 是横线，暗电流 10 pA，终端电容 500 pF，感光面积 3.6 × 3.6。封装 TO-5 印在 S1226-5BK 和 S1226-44BQ 中间，这一行在 S1226-44BQ 下面。` +
          placeS1226,
      ]),
      page("S1226-44BQ", "2023-07", part("S1226-44BQ"), [
        s1226Page +
          "一级标题写 S1226-44BQ。主图文件名是 k_s1226-44bq_s1336-44bq_pp_xx.jpg。alt 写 Si photodiode product photo。相关产品是另外七只 S1226。",
        "规格表感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 10 pA。上升时间典型 1 μs。终端电容典型 500 pF。噪声等效功率典型 3.6×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1226Measure +
          "光谱图文件名仍是 k_s1226-18bk_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0203EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 13 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bq_s1336-44bq_pp_xx.jpg。typeNameSort 写成 S01226-0044BQ。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 10 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 500 pF。噪声等效功率的值写成 3.6×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 723 KB。`,
        `手册仍是 ${s1226Sheet}，记为约 2023 年 7 月。结构表这一只外形 (5)/Q，窗材料石英玻璃，封装 TO-5，型号后面标 *3。感光面积 3.6 × 3.6 mm。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 10 pA。上升时间 1 μs。终端电容 500 pF。分流电阻最小 1 GΩ、典型 10 GΩ。短路电流最小 4.4 µA、典型 5.9 µA。噪声等效功率 3.6 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (5) 图号 KSPDA0203EB。图上感光面写 3.6 × 3.6，另有 0.3。引线写成 0.45。感光面中心对管帽中心写成一个词 -0.6≤X≤0，0 前面没有加号，下一行 -0.3≤Y≤+0.3。窗玻璃那句相同。末页没有写 Created in Japan，改印销售地址。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，暗电流 10 pA，终端电容 500 pF，感光面积 3.6 × 3.6。型号后面有星号。` +
          placeS1226,
      ]),
    ],
  },

  {
    id: "s1227",
    date: "2015-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S1227：滨松紫外到可见精密测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。八只共用这一页。手册文件名是 s1227_series_kspd1036e.pdf。可见文本第一行写 Si photodiodes，pdf 信息里的 Title 是空的。末页写 Information described in this material is current as of October, 2015，October 后面有逗号。最后一行写 Cat. No. KSPD1036E07  Oct. 2015 DN，Oct 前面有两个空格，记为约 2015 年 10 月。索引 newState 都是 false，是第 14 行到第 21 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1227-16BQ", "2015-10", part("S1227-16BQ"), [
        s1227Page +
          "一级标题写 S1227-16BQ。name=\"description\" 和 og:description 都写 Features- High UV sensitivity (quartz window type): QE＝75 % (λ=200 nm)- Suppressed IR sensitivity- Low dark current。＝ 是 U+FF1D，λ 是 U+03BB，百分号前面有空格。特性三条与这段相同。主图文件名是 k_s1227-16bq_s1337-16bq_pp_xx.jpg。",
        "规格表感光面积 5.9 × 1.1 mm，× 是 U+00D7，两边有空格。封装 Ceramic。封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs，μ 是 U+03BC。终端电容典型 170 pF。噪声等效功率典型 2.5×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图是 jpeg，文件名 k_s1227-1010bq_sr_xx,0.jpg，资源名同一文件，文件名写的是 S1227-1010BQ。目录名是 03_02_Characteristic Chart，Characteristic 和 Chart 之间有一个空格。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。地址里的文件名是 KSPDA0094EB.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 14 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-16bq_s1337-16bq_pp_xx.jpg。typeNameSort 写成 S01227-0016BQ。类型的值和显示都写成 --。感光面积的值写成 5.9 × 1.1，显示写成 5.9 × 1.1 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 170 pF。噪声等效功率的值写成 2.5×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Ceramic。封装类别的值和显示都写成 --。冷却的值和显示都写成 Non-cooled。手册标 813 KB。索引地址 ${index}。其余七只放在同一页。`,
        s1227SheetLead +
          "结构表这一只外形尺寸 2.7 × 15 mm，窗材料 Quartz，型号后面标 *。感光面积 1.1 × 5.9 mm。产品页和索引写成 5.9 × 1.1 mm。有效感光面积 5.9，表头单位写成 mm2。暗电流最大 5 pA。上升时间 0.5 µs。终端电容 170 pF。分流电阻最小 2 GΩ、典型 20 GΩ。短路电流最小 2.0 µA、典型 3.2 µA。噪声等效功率 2.5 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0094EB，与产品页资源名相同。图上感光面写 1.1 × 5.9。孔写成 Hole (2 ×) 0.8。窗标 Quartz window。" +
          `${guide}第 9 页标题写 Si photodiodes for precision photometry，小标题写 For UV to near IR range，类型写 IR sensitivity suppressed type。这一行光谱范围 190 to 1000，λ=200 nm 写 0.12，没有印手册里的最小 0.10，λ=720 nm 写 0.36。型号后面有星号。终端电容 170 和感光面积 1.1 × 5.9 印在 S1227-16BQ 和 S1227-16BR 中间。暗电流 5 印在 S1227-16BR 和 S1227-33BQ 中间。封装 Ceramic 印在 S1227-33BR 和 S1227-66BQ 中间。页脚页码写 9 / 46。光谱图号 KSPDB0423EB，图题方括号写 S1226-BQ, S1227-BQ，方括号内侧各有两个 U+2005。另一张图号 KSPDB0308EA，图题方括号写 S1226-BK, S1227-BR。手册图号是 KSPDB0094EC 和 KSPDB0307EA。星号写 Refer to “Precautions against UV light exposure (P.45).”。同一页还有 S1226 和 S2281-01。S2281-01 那一行写 With BNC connector。它们是别的前缀，没有放进这一页。` +
          placeS1226,
      ]),
      page("S1227-16BR", "2015-10", part("S1227-16BR"), [
        s1227Page +
          "一级标题写 S1227-16BR。name=\"description\" 和 og:description 都写 Features- Resin potting type- Suppressed IR sensitivity- Low dark current。特性三条与这段相同，没有石英窗那条。主图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg，pp 和 xx 之间是句点，不是下划线。",
        "规格表感光面积 5.9 × 1.1 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1000 nm。峰值 720 nm。光灵敏度典型 0.43 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs。终端电容典型 170 pF。噪声等效功率典型 2.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名是 KSPDB0307EA,0.jpg，逗号和 0 写在图号后面。外形图 data-asset 写成 KSPDA0095EB.svg。目录名仍是 03_14_new_Product_Dimensional outline_svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 15 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg，pp 和 xx 之间是句点。typeNameSort 写成 S01227-0016BR。类型的值和显示都写成 --。感光面积的值写成 5.9 × 1.1，显示写成 5.9 × 1.1 mm。光谱范围的值写成 340 to 1000，显示才补上 nm。光灵敏度 0.43 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 170 pF。噪声等效功率的值写成 2.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只窗材料 Resin potting，没有星号。外形尺寸和感光面积与 S1227-16BQ 共用，手册写成 1.1 × 5.9 mm。有效感光面积 5.9。200 nm 光灵敏度是横线。暗电流最大 5 pA。上升时间 0.5 µs。终端电容 170 pF。分流电阻最小 2 GΩ、典型 20 GΩ。短路电流最小 2.2 µA、典型 3.7 µA。噪声等效功率 2.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0095EB。图上感光面写 1.1 × 5.9。孔写成 Hole (2 ×) 0.8。树脂那句写 The resin potting may extend a maximum of 0.1 mm above the upper surface of the package。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 340 to 1000，λ=200 nm 是横线，λ=720 nm 写 0.43。型号后面没有星号。` +
          placeS1226,
      ]),
      page("S1227-33BQ", "2015-10", part("S1227-33BQ"), [
        s1227Page +
          "一级标题写 S1227-33BQ。说明和特性与 S1227-16BQ 相同，包括 QE＝75 %。主图文件名是 k_s1227-33bq_s1337-33bq_pp_xx.jpg。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs。终端电容典型 160 pF。噪声等效功率典型 2.5×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名仍是 k_s1227-1010bq_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0096EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 16 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-33bq_s1337-33bq_pp_xx.jpg。typeNameSort 写成 S01227-0033BQ。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 160 pF。噪声等效功率的值写成 2.5×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只外形尺寸 6 × 7.6 mm，窗材料 Quartz，型号后面标 *。感光面积 2.4 × 2.4 mm。有效感光面积 5.7。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 5 pA。上升时间 0.5 µs。终端电容 160 pF。分流电阻最小 2 GΩ、典型 20 GΩ。短路电流最小 2.0 µA、典型 3.0 µA。噪声等效功率 2.5 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0096EB。图上感光面写 2.4 × 2.4。窗标 Quartz window。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，λ=720 nm 写 0.36。终端电容 160 和感光面积 2.4 × 2.4 印在 S1227-33BQ 和 S1227-33BR 中间。型号后面有星号。` +
          placeS1226,
      ]),
      page("S1227-33BR", "2015-10", part("S1227-33BR"), [
        s1227Page +
          "一级标题写 S1227-33BR。name=\"description\" 和 og:description 都写 Features- Resin　potting type- Suppressed IR sensitivity- Low dark current。Resin 和 potting 之间是 U+3000。页面上的特性仍写 Resin potting type，中间是普通空格。主图文件名是 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1000 nm。峰值 720 nm。光灵敏度典型 0.43 A/W。暗电流最大 5 pA。上升时间典型 0.5 μs。终端电容典型 160 pF。噪声等效功率典型 2.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名是 KSPDB0307EA,0.jpg。外形图 data-asset 写成 KSPDA0097EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 17 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg。typeNameSort 写成 S01227-0033BR。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 340 to 1000，显示才补上 nm。光灵敏度 0.43 A/W。暗电流 5 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 160 pF。噪声等效功率的值写成 2.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只窗材料 Resin potting，没有星号。外形尺寸和感光面积与 S1227-33BQ 共用。有效感光面积 5.7。200 nm 光灵敏度是横线。暗电流最大 5 pA。上升时间 0.5 µs。终端电容 160 pF。分流电阻最小 2 GΩ、典型 20 GΩ。短路电流最小 2.2 µA、典型 3.7 µA。噪声等效功率 2.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0097EB。图上感光面写 2.4 × 2.4。树脂灌封那句与 S1227-16BR 相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 340 to 1000，λ=200 nm 是横线，λ=720 nm 写 0.43。型号后面没有星号。` +
          placeS1226,
      ]),
      page("S1227-66BQ", "2015-10", part("S1227-66BQ"), [
        s1227Page +
          "一级标题写 S1227-66BQ。说明和特性与 S1227-16BQ 相同，包括 QE＝75 %。主图文件名是 k_s1227-66bq_s1337-66bq_pp_xx.jpg。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 20 pA。上升时间典型 2 μs。终端电容典型 950 pF。噪声等效功率典型 5.0×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名仍是 k_s1227-1010bq_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0098EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 18 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-66bq_s1337-66bq_pp_xx.jpg。typeNameSort 写成 S01227-0066BQ。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 20 pA。上升时间的值写成 2，显示写成 2 μs。截止频率是 --。终端电容 950 pF。噪声等效功率的值写成 5.0×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只外形尺寸 8.9 × 10.1 mm，窗材料 Quartz，型号后面标 *。感光面积 5.8 × 5.8 mm。有效感光面积 33。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 20 pA。上升时间 2 µs。终端电容 950 pF。分流电阻最小 0.5 GΩ、典型 5 GΩ。短路电流最小 11 µA、典型 16 µA。噪声等效功率 5.0 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0098EB。图上感光面写 5.8 × 5.8。窗标 Quartz window。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，λ=720 nm 写 0.36。暗电流 20、终端电容 950 和感光面积 5.8 × 5.8 印在 S1227-66BQ 和 S1227-66BR 中间。型号后面有星号。` +
          placeS1226,
      ]),
      page("S1227-66BR", "2015-10", part("S1227-66BR"), [
        s1227Page +
          "一级标题写 S1227-66BR。说明和特性写 Resin potting type，Resin 和 potting 之间是普通空格。主图文件名是 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1000 nm。峰值 720 nm。光灵敏度典型 0.43 A/W。暗电流最大 20 pA。上升时间典型 2 μs。终端电容典型 950 pF。噪声等效功率典型 4.2×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名是 KSPDB0307EA,0.jpg。外形图不是 svg。data-asset 写成 k_s1227-66br_do_xx,0.jpg，逗号和 0 写在文件名里。目录名是 03_03_Dimensional Outline，Outline 的 O 是大写，Dimensional 和 Outline 之间有一个空格。手册这一只的图号是 KSPDA0099EB。" +
          s1226Docs,
        `${indexIntro}这一行是第 19 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg。typeNameSort 写成 S01227-0066BR。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 340 to 1000，显示才补上 nm。光灵敏度 0.43 A/W。暗电流 20 pA。上升时间的值写成 2，显示写成 2 μs。截止频率是 --。终端电容 950 pF。噪声等效功率的值写成 4.2×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只窗材料 Resin potting，没有星号。外形尺寸和感光面积与 S1227-66BQ 共用。有效感光面积 33。200 nm 光灵敏度是横线。暗电流最大 20 pA。上升时间 2 µs。终端电容 950 pF。分流电阻最小 0.5 GΩ、典型 5 GΩ。短路电流最小 13 µA、典型 19 µA。噪声等效功率 4.2 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0099EB。产品页资源名写成 k_s1227-66br_do_xx,0.jpg。图上感光面写 5.8 × 5.8。树脂灌封那句与 S1227-16BR 相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 340 to 1000，λ=200 nm 是横线，λ=720 nm 写 0.43。型号后面没有星号。` +
          placeS1226,
      ]),
      page("S1227-1010BQ", "2015-10", part("S1227-1010BQ"), [
        "产品页没有写发布日期。导语写 Si photodiode。一级标题写 S1227-1010BQ。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 与 S1227-16BQ 相同，包括 QE＝75 %。二级标题仍在 span class=\"Txt__Limit\" 里。二级标题下面是两个空的 p，里面只有换行，不是不换行空格。Features 前面另有一个 br，不在 p 里面。三条特性后面是 br，再接一个空的 p。没有正文段。产品页没有写应用栏。下载标 813 KB/PDF。主图文件名是 k_s1227-1010bq_s1337-1010bq_pp_xx.jpg。面包屑里的 Si photodiodes 末尾没有空格。",
        "规格表感光面积 10 × 10 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 50 pA。上升时间典型 7 μs。终端电容典型 3000 pF。噪声等效功率典型 8.0×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名是 k_s1227-1010bq_sr_xx,0.jpg，和这一只的型号相同。外形图 data-asset 写成 KSPDA0100EB.svg。目录名仍是 03_14_new_Product_Dimensional outline_svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 20 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-1010bq_s1337-1010bq_pp_xx.jpg。typeNameSort 写成 S01227-1010BQ，1010 前面没有再补零。类型的值和显示都写成 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 50 pA。上升时间的值写成 7，显示写成 7 μs。截止频率是 --。终端电容 3000 pF。噪声等效功率的值写成 8.0×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只外形尺寸 15 × 16.5 mm，窗材料 Quartz，型号后面标 *。感光面积 10 × 10 mm。有效感光面积 100。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。暗电流最大 50 pA。上升时间 7 µs。终端电容 3000 pF。分流电阻最小 0.2 GΩ、典型 2 GΩ。短路电流最小 32 µA、典型 44 µA。噪声等效功率 8.0 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0100EB。图上感光面写 10 × 10。窗标 Quartz window。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 190 to 1000，λ=200 nm 写 0.12，λ=720 nm 写 0.36。暗电流 50、终端电容 3000 和感光面积 10 × 10 印在 S1227-1010BQ 和 S1227-1010BR 中间。型号后面有星号。` +
          placeS1226,
      ]),
      page("S1227-1010BR", "2015-10", part("S1227-1010BR"), [
        "产品页没有写发布日期。导语写 Si photodiode。一级标题写 S1227-1010BR。页面标题和说明的写法与 S1227-1010BQ 相同，二级标题下面同样是两个只有换行的空 p，Features 在 p 外面。name=\"description\" 和 og:description 都写 Features- Resin potting window type- Suppressed IR sensitivity- Low dark current。特性第一条写 Resin potting window type。另外七只树脂灌封型号写的是 Resin potting type，没有 window。手册窗材料写 Resin potting。主图文件名是 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。",
        "规格表感光面积 10 × 10 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1000 nm。峰值 720 nm。光灵敏度典型 0.43 A/W。暗电流最大 50 pA。上升时间典型 7 μs。终端电容典型 3000 pF。噪声等效功率典型 6.7×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1227Measure +
          "光谱图文件名是 KSPDB0307EA,0.jpg。外形图 data-asset 写成 KSPDA0101EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 21 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。typeNameSort 写成 S01227-1010BR，1010 前面没有再补零。类型的值和显示都写成 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。光谱范围的值写成 340 to 1000，显示才补上 nm。光灵敏度 0.43 A/W。暗电流 50 pA。上升时间的值写成 7，显示写成 7 μs。截止频率是 --。终端电容 3000 pF。噪声等效功率的值写成 6.7×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 813 KB。`,
        `手册仍是 ${s1227Sheet}，记为约 2015 年 10 月。结构表这一只窗材料 Resin potting，没有星号。外形尺寸和感光面积与 S1227-1010BQ 共用。有效感光面积 100。200 nm 光灵敏度是横线。暗电流最大 50 pA。上升时间 7 µs。终端电容 3000 pF。分流电阻最小 0.2 GΩ、典型 2 GΩ。短路电流最小 36 µA、典型 53 µA。噪声等效功率 6.7 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0101EB。图上感光面写 10 × 10。树脂灌封那句与 S1227-16BR 相同。` +
          `约 2025 年 9 月的选型指南第 9 页把这一行的光谱范围写成 340 to 1000，λ=200 nm 是横线，λ=720 nm 写 0.43。型号后面没有星号。` +
          placeS1226,
      ]),
    ],
  },

  {
    id: "s1336",
    date: "2023-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S1336：滨松紫外到近红外精密测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。八只共用这一页。手册文件名是 s1336_series_kspd1022e.pdf。pdf 信息里的 Title 是 Si photodiodes S1336 series。末页写 Information described in this material is current as of July 2023。最后一行写 Cat. No. KSPD1022E09 Jul. 2023 DN，记为约 2023 年 7 月。索引 newState 都是 false，是第 22 行到第 29 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1336-5BK", "2023-07", part("S1336-5BK"), [
        s1336Page +
          "一级标题写 S1336-5BK。主图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。",
        "规格表感光面积 2.4 × 2.4 mm，× 是 U+00D7，两边有空格。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 30 pA。上升时间典型 0.2 μs，μ 是 U+03BC。终端电容典型 65 pF。噪声等效功率典型 8.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图是 svg，文件名 KSPDB0098EA,0.svg，逗号和 0 写在图号后面。目录名是 03_15_new_Product_graph_svg。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。地址里的文件名是 KSPDA0192EC.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 22 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。typeNameSort 写成 S01336-0005BK。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 30 pA。上升时间的值写成 0.2，显示写成 0.2 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 65 pF。噪声等效功率的值写成 8.1×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别写成 TO-5。冷却的值和显示都写成 Non-cooled。手册标 784 KB。索引地址 ${index}。其余七只放在同一页。`,
        s1336SheetLead +
          "结构表这一只外形 (4)/K，窗材料硼硅玻璃。封装 TO-5 印在 S1336-5BK 和 S1336-44BQ 中间，和 S1336-44 共用。感光面积 2.4 × 2.4 mm，印在 S1336-5BQ 和 S1336-5BK 中间。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。短路电流最小 4 µA、典型 5 µA，印在两行中间，和 S1336-5BQ 共用。暗电流最大 30 pA。上升时间 0.2 µs。终端电容 65 pF。分流电阻最小 0.3 GΩ、典型 1 GΩ。噪声等效功率 8.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (4) 图号 KSPDA0192EC，与产品页资源名相同。图上感光面写 2.4 × 2.4。感光面中心对管帽中心写成 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          s1336Guide +
          "这一行光谱范围 320 to 1100，λ=200 nm 是横线。暗电流 30、终端电容 65 和感光面积 2.4 × 2.4 印在 S1336-5BQ 和 S1336-5BK 中间。型号后面没有星号。" +
          placeS1336,
      ]),
      page("S1336-5BQ", "2023-07", part("S1336-5BQ"), [
        s1336Page +
          "一级标题写 S1336-5BQ。主图文件名是 k_s1226-5bq_s1336-5bq_pp_xx.jpg。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 30 pA。上升时间典型 0.2 μs。终端电容典型 65 pF。噪声等效功率典型 8.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0198EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 23 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bq_s1336-5bq_pp_xx.jpg。typeNameSort 写成 S01336-0005BQ。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 30 pA。上升时间的值写成 0.2，显示写成 0.2 μs。截止频率是 --。终端电容 65 pF。噪声等效功率的值写成 8.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (3)/Q，窗材料石英玻璃，型号后面标 *3。感光面积与 S1336-5BK 共用。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流与 S1336-5BK 共用那一对 4 µA 和 5 µA。暗电流最大 30 pA。上升时间 0.2 µs。终端电容 65 pF。分流电阻最小 0.3 GΩ、典型 1 GΩ。噪声等效功率 8.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (3) 图号 KSPDA0198EB，与产品页资源名相同。图上感光面写 2.4 × 2.4。感光面中心对管帽中心写成 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，没有印手册里的最小 0.10。型号后面有星号。" +
          placeS1336,
      ]),
      page("S1336-8BK", "2023-07", part("S1336-8BK"), [
        s1336Page +
          "一级标题写 S1336-8BK。主图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal，封装类别 TO-8。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 100 pA。上升时间典型 1 μs。终端电容典型 380 pF。噪声等效功率典型 1.3×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0194EC.svg，和 S1336-44BK 的资源名相同。" +
          s1226Docs,
        `${indexIntro}这一行是第 24 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。typeNameSort 写成 S01336-0008BK。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 100 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 380 pF。噪声等效功率的值写成 1.3×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (8)/K，窗材料硼硅玻璃。封装 TO-8 印在 S1336-8BQ 和 S1336-8BK 中间。感光面积 5.8 × 5.8 mm，印在两行中间。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。短路电流最小 22 µA、典型 28 µA，印在两行中间，和 S1336-8BQ 共用。暗电流最大 100 pA。上升时间 1 µs。终端电容 380 pF。分流电阻最小 0.1 GΩ、典型 0.4 GΩ。噪声等效功率 1.3 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。图题还写 S2386-8K。文本层同时印 KSPDA0193EC 和 KSPDA0194EC。产品页资源名是 KSPDA0194EC.svg。图上感光面写 5.8 × 5.8，另有 0.085。感光面中心对管帽中心写成 -0.315≤X≤+0.485，下一行 -0.4≤Y≤+0.4。Index mark ( 1.4)，左括号后面有空格。" +
          s1336Window +
          "S2386 是别的前缀，没有放进这一页。约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 320 to 1100，λ=200 nm 是横线。暗电流 100、终端电容 380 和感光面积 5.8 × 5.8 印在 S1336-8BQ 和 S1336-8BK 中间。封装 TO-8 印在这一对中间。型号后面没有星号。" +
          placeS1336,
      ]),
      page("S1336-8BQ", "2023-07", part("S1336-8BQ"), [
        s1336Page +
          "一级标题写 S1336-8BQ。主图文件名是 k_s1226-8bq_s1336-8bq_pp_xx.jpg。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal，封装类别 TO-8。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 100 pA。上升时间典型 1 μs。终端电容典型 380 pF。噪声等效功率典型 1.3×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0200EC.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 25 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-8bq_s1336-8bq_pp_xx.jpg。typeNameSort 写成 S01336-0008BQ。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 100 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 380 pF。噪声等效功率的值写成 1.3×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (7)/Q，窗材料石英玻璃，型号后面标 *3。感光面积与 S1336-8BK 共用。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流与 S1336-8BK 共用那一对 22 µA 和 28 µA。暗电流最大 100 pA。上升时间 1 µs。终端电容 380 pF。分流电阻最小 0.1 GΩ、典型 0.4 GΩ。噪声等效功率 1.3 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图 (7) 图号 KSPDA0200EC，与产品页资源名相同。图上感光面写 5.8 × 5.8，另有 0.085。感光面中心对管帽中心写成 -0.315≤X≤+0.485，下一行 -0.4≤Y≤+0.4。Index mark ( 1.4)，左括号后面有空格。" +
          s1336Window +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，没有印手册里的最小 0.10。型号后面有星号。" +
          placeS1336,
      ]),
      page("S1336-18BK", "2023-07", part("S1336-18BK"), [
        s1336Page +
          "一级标题写 S1336-18BK。主图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal，封装类别 TO-18。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 20 pA。上升时间典型 0.1 μs。终端电容典型 20 pF。噪声等效功率典型 5.7×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0191ED.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 26 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。typeNameSort 写成 S01336-0018BK。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 20 pA。上升时间的值写成 0.1，显示写成 0.1 μs。截止频率是 --。终端电容 20 pF。噪声等效功率的值写成 5.7×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-18。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (2)/K，窗材料硼硅玻璃。封装 TO-18 印在 S1336-18BQ 和 S1336-18BK 中间。感光面积 1.1 × 1.1 mm，印在两行中间。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。短路电流写在这一行，最小 0.9 µA、典型 1.0 µA。暗电流最大 20 pA。上升时间 0.1 µs。终端电容 20 pF。分流电阻最小 0.5 GΩ、典型 2 GΩ，印在两行中间，和 S1336-18BQ 共用。噪声等效功率 5.7 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。图题还写 S2386-18K。手册图号 KSPDA0191EC。产品页资源名是 KSPDA0191ED.svg，修订字母不同。图上感光面写 1.1 × 1.1。感光面中心对管帽中心写成 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          "S2386 是别的前缀，没有放进这一页。约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 320 to 1100，λ=200 nm 是横线。暗电流 20、终端电容 20 和感光面积 1.1 × 1.1 印在 S1336-18BQ 和 S1336-18BK 中间。封装 TO-18 印在这一对中间。型号后面没有星号。" +
          placeS1336,
      ]),
      page("S1336-18BQ", "2023-07", part("S1336-18BQ"), [
        s1336Page +
          "一级标题写 S1336-18BQ。主图文件名是 k_s1226-18bq_s1336-18bq_pp_xx.jpg。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal，封装类别 TO-18。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 20 pA。上升时间典型 0.1 μs。终端电容典型 20 pF。噪声等效功率典型 5.7×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0197E.svg，图号后面没有 C。" +
          s1226Docs,
        `${indexIntro}这一行是第 27 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-18bq_s1336-18bq_pp_xx.jpg。typeNameSort 写成 S01336-0018BQ。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 20 pA。上升时间的值写成 0.1，显示写成 0.1 μs。截止频率是 --。终端电容 20 pF。噪声等效功率的值写成 5.7×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-18。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (1)/Q，窗材料石英玻璃，型号后面标 *3。感光面积与 S1336-18BK 共用。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流写在这一行，最小 1 µA、典型 1.2 µA。暗电流最大 20 pA。上升时间 0.1 µs。终端电容 20 pF。分流电阻与 S1336-18BK 共用，最小 0.5 GΩ、典型 2 GΩ。噪声等效功率 5.7 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。手册图号 KSPDA0197EC。产品页资源名是 KSPDA0197E.svg，没有 C。图上感光面写 1.1 × 1.1。感光面中心对管帽中心写成 -0.3≤X≤+0.3，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，没有印手册里的最小 0.10。型号后面有星号。" +
          placeS1336,
      ]),
      page("S1336-44BK", "2023-07", part("S1336-44BK"), [
        s1336Page +
          "一级标题写 S1336-44BK。主图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。",
        "规格表感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 50 pA。上升时间典型 0.5 μs。终端电容典型 150 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0194EC.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 28 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。typeNameSort 写成 S01336-0044BK。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 50 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 150 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (6)/K，窗材料硼硅玻璃。封装 TO-5 与 S1336-5 共用。感光面积 3.6 × 3.6 mm，印在 S1336-44BQ 和 S1336-44BK 中间。工作温度 -40 to +100 °C，贮存温度 -55 to +125 °C。200 nm 光灵敏度是横线。短路电流最小 8 µA、典型 10 µA，印在两行中间，和 S1336-44BQ 共用。暗电流最大 50 pA。上升时间 0.5 µs。终端电容 150 pF。分流电阻最小 0.2 GΩ、典型 0.6 GΩ。噪声等效功率 1.0 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。图题文本层写成 (S1223 S1336-44BK，S1223 和 S1336 之间没有逗号。外形图 (6) 图号 KSPDA0194EC，与产品页资源名相同。图上感光面写 3.6 × 3.6，另有 0.3。感光面中心对管帽中心写成 -0.6≤X≤0，0 前面没有加号，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          "S1223 是别的前缀，已经单独成页。约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 320 to 1100，λ=200 nm 是横线。暗电流 50、终端电容 150 和感光面积 3.6 × 3.6 印在 S1336-44BQ 和 S1336-44BK 中间。型号后面没有星号。" +
          placeS1336,
      ]),
      page("S1336-44BQ", "2023-07", part("S1336-44BQ"), [
        s1336Page +
          "一级标题写 S1336-44BQ。主图文件名是 k_s1226-44bq_s1336-44bq_pp_xx.jpg。",
        "规格表感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 50 pA。上升时间典型 0.5 μs。终端电容典型 150 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1336Measure +
          "光谱图文件名仍是 KSPDB0098EA,0.svg。外形图 data-asset 写成 KSPDA0199EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 29 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bq_s1336-44bq_pp_xx.jpg。typeNameSort 写成 S01336-0044BQ。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 50 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 150 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 784 KB。`,
        s1336SheetLead +
          "结构表这一只外形 (5)/Q，窗材料石英玻璃，型号后面标 *3。感光面积与 S1336-44BK 共用。工作温度 -20 to +60 °C，贮存温度 -55 to +80 °C。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流与 S1336-44BK 共用那一对 8 µA 和 10 µA。暗电流最大 50 pA。上升时间 0.5 µs。终端电容 150 pF。分流电阻最小 0.2 GΩ、典型 0.6 GΩ。噪声等效功率 1.0 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图 (5) 图号 KSPDA0199EB，与产品页资源名相同。图上感光面写 3.6 × 3.6，另有 0.3。感光面中心对管帽中心写成 -0.6≤X≤0，0 前面没有加号，下一行 -0.3≤Y≤+0.3。" +
          s1336Window +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，没有印手册里的最小 0.10。型号后面有星号。" +
          placeS1336,
      ]),
    ],
  },

];
