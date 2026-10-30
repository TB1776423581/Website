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

const s1337Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1337_series_kspd1032e.pdf";

const s1337Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：For UV to IR, precision photometry。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格。产品页没有写应用栏。下载标 239 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。相关产品轮播按 S1337-1010BQ、S1337-1010BR、S1337-16BQ、S1337-16BR、S1337-21、S1337-33BQ、S1337-33BR、S1337-66BQ、S1337-66BR 排，跳过当前型号。";

const s1337Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=960 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。λ 是 U+03BB。";

const s1337SheetLead =
  `手册 ${s1337Sheet}。文件名是 s1337_series_kspd1032e.pdf。目录号 KSPD1032E07。pdf 信息里的 Title 是 Si photodiode S1337 series，photodiode 是单数。封面可见文本先写 Si photodiodes，再写 S1337 series。副题是一行：For UV to IR, precision photometry。正文写 These Si photodiodes have sensitivity in the UV to near IR range. They are suitable for low-light-level detection in analysis and the like.。特性没有连字符：High UV sensitivity: QE 75% (λ=200 nm)、Low capacitance。百分号前面有空格。应用写 Analytical equipment 和 Optical measurement equipment。产品页没有应用栏。窗材料注没有单独的 K 和 Q 对照。石英窗和 S1337-21 的型号后面标 *，树脂灌封不标。注 * 写 Refer to “Precautions against UV light exposure.”，引号是弯引号。Note 写成 Note:  Exceeding，冒号后面是两个普通空格，没有 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)，° 是 U+00B0。暗电流温度系数的表头把 coefficient 拆开，coef 后面是 ﬁ，ﬁ 是 U+FB01，再空一格写 cient。峰值 960 nm 和暗电流温度系数 1.15 times/°C 印在九只中间，九只共用。λp 光灵敏度石英窗是 0.5 A/W，树脂灌封是 0.62 A/W，S1337-21 是 0.52 A/W。200 nm 这一列石英窗和 S1337-21 最小 0.10 A/W，石英窗典型 0.12 A/W，S1337-21 典型 0.13 A/W，树脂灌封是横线。He-Ne 633 nm 石英窗是 0.33 A/W，树脂灌封是 0.4 A/W，S1337-21 是 0.34 A/W。GaAs LED 930 nm 石英窗是 0.5 A/W，树脂灌封是 0.6 A/W，S1337-21 是 0.51 A/W。暗电流条件 VR=10 mV，表里没有典型值。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+03A9。表头单位写成 μs，μ 是 U+03BC，和产品页相同。产品页测量条件没有写上升时间。终端电容条件 VR=0 V, f=10 kHz。分流电阻条件 VR=10 mV，单位 GΩ，Ω 仍是 U+03A9。短路电流条件 100 lx。噪声等效功率文本层在 × 两边有空格，指数没有写成上标。产品页 × 两边没有空格，指数写成上标。光谱图一边图题写 S1337BQ series, S1337-21，BQ 前面没有连字符，图号 KSPDB0102ED。另一边写 S1337-BR series，图号 KSPDB0306EA。两张图的条件都写 (Typ. Ta=25 °C)。温度特性图号 KSPDB0053EB，条件 (Typ. )，Typ 和右括号之间有空格。暗电流对反向电压图号 KSPDB0104EC，条件 (Typ. Ta=25 °C)，曲线标 S1337-1010BQ/BR、S1337-66BQ/BR、S1337-21、S1337-33BQ/BR 和 S1337-16BQ/BR。第 3 页外形图题写 Dimensional outlines (unit: mm)，outlines 是复数。第 4 页和第 5 页文本层没有这句图题。产品页外形标题用单数 outline。树脂灌封图上写 The resin potting may extend a maximum of 0.1 mm above the upper surface of the package.。末页写 Information described in this material is current as of October, 2015，October 后面有逗号。最后一行写 Cat. No. KSPD1032E07  Oct. 2015 DN，Oct 前面有两个空格。末页没有写 Created in Japan，改印销售地址。紫外注意事项在第 5 页，两条都以 ∙ 开头，∙ 是 U+2219，后面是两个普通空格。记为约 2015 年 10 月。`;

const s1337GuideEight =
  `${guide}第 7 页列出前八只，没有 S1337-21。小标题仍写 For UV to near IR range。λ=200 nm 石英窗写 0.12，没有印手册里的最小 0.10，树脂灌封是横线。λ=960 nm 石英窗写 0.5，树脂灌封写 0.62，写在各自那一行，不是九只共用一个数。封装 Ceramic 印在八只中间。页脚页码写 7 / 46。光谱图号 KSPDB0262EF 的图题方括号写 S1336-BQ, S1337-BQ，另一张 KSPDB0309EA 的图题方括号写 S1336-BK, S1337-BR。手册图号是 KSPDB0102ED 和 KSPDB0306EA。星号写 Refer to “Precautions against UV light exposure (P.45).”。`;

const placeS1337 =
  "手册应用写 Analytical equipment 和 Optical measurement equipment。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s1787Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s1787_series_kspd1038e.pdf";

const s1787Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Plastic package photodiode with low dark current。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段。特性写在同一个 p 里，Features 是粗体，前面是 br，后面也是 br。只有一条，行首是连字符，后面是一个普通空格。产品页没有写应用栏。下载标 467 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。";

const s1787Measure =
  "规格表没有类型，没有截止频率，没有窗材料，没有噪声等效功率，也没有上升时间的测量条件。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=1V，1 和 V 之间没有空格，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。λ 是 U+03BB。";

const s1787SheetLead =
  `手册 ${s1787Sheet}。文件名是 s1787_series_kspd1038e.pdf。目录号 KSPD1038E03。pdf 信息里的 Title 是 Si photodiode S1787 series，photodiode 是单数。封面可见文本先写 Si photodiode，再写 S1787 series。副题是一行：Plastic package photodiode with low dark current。正文写 The S1787 series is a family of plastic package photodiodes that offer low dark current. Plastic package used is light-impervious, so no stray light can reach the active area from the side or backside. This allows reliable optical measurements in the visible to near infrared range, over a wide dynamic range from low light levels to high light levels.。light-impervious 在行末拆开，写成 light-imper- 再接 vious。产品页把 active area 写成 photosensitive area。特性没有连字符，按型号分写：S1787-04 写 For visible range，S1787-08 写 For visible to IR range，S1787-12 写 For visible to near IR range。应用写 Exposure meter、Illuminometer、Camera auto exposure、Stroboscope light control、Copier、Display light control、Optical switch, etc.。产品页没有应用栏。结构表没有封装列。窗材料表头写 Window material*，星号在表头。注写 Window material R: resin coating, V: visual-compensation filter, I: infrared-cutting filter。感光面积 2.4 × 2.8 mm、有效感光面积 6.6、反向电压 10 V、工作温度 -10 to +60 °C、贮存温度 -20 to +70 °C，这几项印在三只中间，° 是 U+00B0。三只窗材料分别写 V、R、I。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围、峰值、λp 光灵敏度、GaP LED 560 nm、He-Ne laser 633 nm 和短路电流写在各自那一行。S1787-04 的红外灵敏度比是 10，短路电流温度系数是 -0.01。S1787-08 和 S1787-12 的红外灵敏度比是横线，短路电流温度系数 0.1，印在这两只中间。暗电流条件 VR=1 V，1 和 V 之间有空格。暗电流 10 pA、上升时间 2.5 µs、终端电容 700 pF、分流电阻最小 10 GΩ、典型 100 GΩ，印在 S1787-04 和 S1787-08 中间。µ 是 U+00B5，Ω 是 U+2126。上升时间条件 VR=0 V, RL=1 kΩ。终端电容条件 VR=0 V, f=10 kHz。分流电阻条件 VR=10 mV。暗电流温度系数 1.12 times/°C 只印在 S1787-08 这一行。S1787-12 这一行暗电流最大 20 pA，上升时间 0.5 µs，终端电容 200 pF，分流电阻最小 1 GΩ、典型 10 GΩ。产品页上升时间用的 μ 是 U+03BC，暗电流条件写成 VR=1V，1 和 V 之间没有空格。光谱图号 KSPDB0124EB，曲线标 S1787-08、S1787-12 和 S1787-04，条件 (Typ. Ta=25 °C)。上升时间对负载电阻图号 KSPDB0125EB。暗电流对反向电压图号 KSPDB0126EB。分流电阻温度特性图号 KSPDB0127EB。短路电流线性图号 KSPDB0128EB，图题写 “A” light source fully illuminated，引号是弯引号。产品页只放了光谱 svg 和外形图。外形图题写 Dimensional outline (unit: mm)，outline 是单数。图上感光面写 Active area 2.8 × 2.4，另写 Photosensitive surface。图号 KSPDA0056EB。公差写 Tolerance unless otherwise noted: ±0.15，± 是 U+00B1。焊接条件写 Solder temperature 260 °C max. (once, less than 5 s)，备注写 at least 1 mm away from lead roots。相关信息里注意事项写 Disclaimer 和 Metal, ceramic, plastic package products，技术笔记写 Si photodiode，photodiode 是单数。末页写 Information described in this material is current as of May 2022。最后一行写 Cat. No. KSPD1038E03 May 2022 DN。末页没有写 Created in Japan，改印销售地址。记为约 2022 年 5 月。`;

const placeS1787 =
  "手册应用写 Exposure meter、Illuminometer、Camera auto exposure、Stroboscope light control、Copier、Display light control 和 Optical switch, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2281Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2281_series_kspd1044e.pdf";

const s2281Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Si photodiode with BNC connector。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段。特性三条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：Metal package with BNC connector、High sensitivity、High reliability。产品页没有写应用栏。下载标 399 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。图注写 Si photodiode 再加型号。";

const s2281Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=960 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，Noise equivalent power: V<sub>R</sub>=0 V, λ=λp，unless otherwise noted。λ 是 U+03BB。三只产品页的光灵敏度条件都写成 λ=960 nm。";

const s2281SheetLead =
  `手册 ${s2281Sheet}。文件名是 s2281_series_kspd1044e.pdf。目录号 KSPD1044E06。pdf 信息里的 Title 是 Si photodiodes S2281 series，photodiodes 是复数。封面可见文本先写 Si photodiodes，再写 S2281 series。副题是一行：Si photodiodes with BNC connector。产品页二级标题把 photodiodes 写成 photodiode。正文写 The S2281 series is a Si photodiode sealed in a metal package with a BNC connector. This configuration allows easy connection to Hamamatsu C9329-01 photosensor amplifier (The S2281-01 has a large terminal capacitance which may cause a gain peaking to occur when the C9329-01 is used with the gain set to the “M” range.). Two different spectral response characteristics are provided and the large photosensitive area makes the S2281 series well suited for optical power meters. Hamamatsu also provides the E2573 BNC-BNC coaxial cable (length: 1 m) as an option.。connection 在行末拆开，写成 connec- 再接 tion。characteristics 写成 characteris- 再接 tics。引号是弯引号，“ 是 U+201C，” 是 U+201D。产品页正文把 C9329-01 写成 C9329 的是 name 和 og 的 description，可见正文写的是 C9329-01。特性没有连字符：Metal package with BNC connector、High sensitivity、High reliability。应用写 Analytical instruments 和 Optical measurement equipment。产品页没有应用栏。结构表感光面积尺寸用 ϕ，ϕ 是 U+03D5。窗材料三只都写 Quartz glass。封装写成 Metal package with BNC connector，三只共用，单位栏是横线。绝对最大反向电压 5 V，三只共用。工作温度 -10 to +60 °C，贮存温度 -20 to +70 °C，° 是 U+00B0。注 * 的 N 单独落在星号那一行，下一行 o 前面是 U+0007，接 dew condensation。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Ta=25 °C, unless otherwise noted)，没有 Typ.。200 nm 光灵敏度三只都是最小 0.10 A/W、典型 0.12 A/W。λp 光灵敏度 S2281 和 S2281-04 是 0.5 A/W，S2281-01 是 0.36 A/W。短路电流条件 100 lx，单位 µA，µ 是 U+00B5。暗电流条件 VR=10 mV。分流电阻条件 VR=10 mV，单位 MΩ，Ω 是 U+2126。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+03A9，单位 µs。终端电容条件 VR=0 V, f=10 kHz。噪声等效功率条件 VR=0 V, λ=λp，文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标，上升时间用的 μ 是 U+03BC。光谱图号 KSPDB0090EA，条件 (Typ. Ta=25 °C)，曲线标 S2281/-04 和 S2281-01。暗电流对反向电压图号 KSPDB0180EA，曲线也标 S2281/-04 和 S2281-01。终端电容对反向电压图号 KSPDB0181EB，条件 (Typ. Ta=25 °C, f=1 MHz)，频率和电特性表的 10 kHz 不同，曲线标 S2281-01 和 S2281/-04。这三个图号在文本层里各又出现一次。产品页只放了光谱 svg 和外形图。外形图先出现 Dimensional outline (S2281 series, unit: mm)，outline 是单数，后面又写 Dimensional outlines (unit: mm)，outlines 是复数。图号 KSPDA0080EA。图上感光面用 ɸ，ɸ 是 U+0278，S2281 与 S2281-01 写 ɸ11.3，括号写 100 mm2，S2281-04 写 ɸ7.98，括号写 50 mm2。旁边写 Glass window。BNC 注写 BNC : UG-625B/U，Core : Cathode，这两处冒号前面有空格，Case: Anode 的冒号前面没有空格。外形尺寸还写 ɸ25.0 ± 0.1、ɸ17.5 ± 0.1、5.0 ± 0.2、10.0 ± 0.1，以及 ɸ16.0 的公差 +0 和 -0.1，± 是 U+00B1。相关信息里注意事项写 Disclaimer 和 Metal, ceramic, plastic package products，技术笔记写 Si photodiodes，photodiodes 是复数。末页写 Information described in this material is current as of March, 2025，March 后面有逗号。最后一行写 Cat. No. KSPD1044E06 Mar. 2025 DN。末页没有写 Created in Japan，改印销售地址。紫外注意事项两条都以 ∙ 开头，∙ 是 U+2219，第一个字母和后面的字母之间是 U+0007。C9329-01 和 E2573 不是这一索引上的光电二极管型号，没有另开一页。记为约 2025 年 3 月。`;

const placeS2281 =
  "手册应用写 Analytical instruments 和 Optical measurement equipment。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2386Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2386_series_kspd1035e.pdf";

const s2386Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 都只写 Features- High sensitivity in visible to near infrared range- Low dark current- High reliability- Superior linearity。Features 和连字符之间没有空格，连字符后面是一个空格。二级标题写在 span class=\"Txt__Limit\" 里，是一行：For visible to near IR, general-purpose photometry。二级标题下面先是一个只含不换行空格的 p，U+00A0。没有正文段。特性四条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：High sensitivity in visible to near infrared range、Low dark current、High reliability、Superior linearity。产品页没有写应用栏。下载标 762 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。";

const s2386Measure =
  "规格表没有类型，没有截止频率，没有窗材料，也没有上升时间的测量条件。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=960 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，Noise equivalent power: V<sub>R</sub>=0 V, λ=λp，unless otherwise noted。λ 是 U+03BB。";

const s2386SheetLead =
  `手册 ${s2386Sheet}。文件名是 s2386_series_kspd1035e.pdf。目录号 KSPD1035E09。pdf 信息里的 Title 是 Si photodiode S2386 series，photodiode 是单数。封面可见文本先写 Si photodiodes，再写 S2386 series。副题是一行：For visible to near IR, general-purpose photometry。封面没有正文段。特性没有连字符：High sensitivity in visible to near infrared range、Low dark current、High reliability、Superior linearity。应用写 Analytical instruments 和 Optical measurement equipment。产品页没有应用栏。结构表按 S2386-18K、S2386-18L、S2386-5K、S2386-44K、S2386-45K、S2386-8K 排，和索引顺序不同。窗材料注写 K=borosilicate glass, L=lens type borosilicate glass，borosilicate 的 b 是小写。反向电压 30 V、工作温度 -40 to +100 °C、贮存温度 -55 to +125 °C，六只共用，° 是 U+00B0。Note 写成 Note: Exceeding，冒号后面是一个普通空格，没有 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 320 to 1100、峰值 960 nm、λp 光灵敏度 0.6 A/W、GaP LED 560 nm 的 0.38 A/W、He-Ne laser 633 nm 的 0.43 A/W、GaAs LED 930 nm 的 0.59 A/W、暗电流温度系数 1.12 times/°C，这几项印在六只中间。表头里的 λ 是 U+F06C，分流电阻单位里的 Ω 是 U+F057。短路电流单位 μA 和上升时间单位 μs 的 μ 是 U+03BC。上升时间条件 VR=0 V, RL=1 kΩ。暗电流条件 VR=10 mV，表里只有最大值。终端电容条件 VR=0 V, f=10 kHz，表头把 VR 拆开，V 和 R 之间有空格。分流电阻条件 VR=10 mV。噪声等效功率条件 VR=0 V, λ=λp，文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标。光谱图号 KSPDB0110EB，条件 (Typ. Ta=25 °C)。光灵敏度温度特性图号 KSPDB0058EC，条件 (Typ.)。指向性图号 KSPDB0111EA，条件 (Typ. Ta=25 °C)，曲线标 S2386-18L 和 S2386-18K。暗电流对反向电压图号 KSPDB0113ED，条件 (Typ. Ta=25 °C)，曲线标 S2386-8K 和 S2386-18K/-5K/-44K/-45K。产品页只放了光谱 svg 和外形图。外形图题写 Dimensional outlines (unit: mm)，outlines 是复数。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap.。相关信息里注意事项写 Disclaimer 和 Metal, ceramic, plastic package products。技术信息写 Si photodiode/Application circuit examples，不是 Technical note。末页写 Information described in this material is current as of April 2019。最后一行写 Cat. No. KSPD1035E09 Apr. 2019 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2019 年 4 月。`;

const s2387Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2387_series_kspd1033e.pdf";

const s2387Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：For visible to IR, general-purpose photometry。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段，正文后面又是一个只含不换行空格的 p。没有特性列表，没有规格表，没有应用栏，没有光谱图，也没有外形图。下载只有手册，标 523 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。主图没有图注。相关产品轮播按 S12915-16R、S12915-33R、S12915-66R、S12915-1010R 排，四页相同。轮播链接是 /us/en/，没有 target。图注写 Si photodiode 再加型号。轮播图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg、k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg、k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg 和 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。S12915 是别的前缀，没有放进这一页。";

const s2387SheetLead =
  `手册 ${s2387Sheet}。文件名是 s2387_series_kspd1033e.pdf。目录号 KSPD1033E06。pdf 信息里的 Title 是 Si photodiodes S2387 series，photodiodes 是复数。封面可见文本先写 Si photodiodes，再写 S2387 series。副题是一行：For visible to IR, general-purpose photometry。封面没有正文段。特性没有连字符：High sensitivity in visible to infrared range、Low dark current、High linearity。应用写 Analytical equipment 和 Optical measurement equipment, etc.。产品页没有特性列表，也没有应用栏。结构表按 S2387-16R、S2387-33R、S2387-66R、S2387-1010R 排，和索引顺序相同。窗材料 Resin potting、反向电压 30 V、工作温度 -20 to +60 °C、贮存温度 -20 to +80 °C，印在四只中间，四只共用，° 是 U+00B0。封装列的单位是 mm，写的是外形尺寸，没有写 Ceramic。注 * 后面是一个空格和 U+0007，下一行写 No dew condensation。Note 写成 Note:，冒号后面是一个普通空格，然后是 U+0007，下一行写 Exceeding。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 340 to 1100、峰值 960 nm、λp 光灵敏度 0.58 A/W、GaP LED 560 nm 的 0.33 A/W、He-Ne laser 633 nm 的 0.37 A/W、暗电流温度系数 1.12 times/°C，这几项印在四只中间。表头 λ 是 U+03BB。短路电流单位 µA 和上升时间单位 µs 的 µ 是 U+00B5。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+2126。暗电流条件 VR=10 mV，表里只有最大值。终端电容条件 VR=0 V, f=10 kHz。分流电阻条件 VR=10 mV，单位 GΩ。短路电流条件 100 lx。噪声等效功率条件 VR=0 V, λ=λp，文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。索引 × 两边没有空格，指数写成上标，上升时间显示用的 μ 是 U+03BC。光谱图号 KSPDB0115EB，条件 (Typ. Ta=25 °C)。光灵敏度温度特性图号 KSPDB0058EC，条件 (Typ.)。暗电流对反向电压图号 KSPDB0117ED，条件 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，曲线标 S2387-1010R、S2387-66R 和 S2387-16R/33R。产品页没有放这些图。外形图先写 Dimensional outlines (unit: mm)，outlines 是复数。各只图题用单数 outline，并同时写 S1337 的树脂灌封型号。图上写 The resin potting may extend a maximum of 0.1 mm above the upper surface of the package.。图上也写 Photosensitive surface 和 Anode terminal mark。S1337 已经单独成页，没有放进这一页。焊接条件写 Solder temperature: 260 °C (5 s or less, once)，并写 Solder the leads at a point at least 2 mm away from the package body.。相关信息网址写 www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙ Disclaimer 和 ∙ Metal, ceramic, plastic package products，∙ 是 U+2219。技术笔记写 ∙ Si photodiodes。末页写 Information described in this material is current as of July 2022，July 后面没有逗号。最后一行写 Cat. No. KSPD1033E06 Jul. 2022 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2022 年 7 月。`;

const placeS2387 =
  "手册应用写 Analytical equipment 和 Optical measurement equipment, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2506Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2506-02_etc_kpin1048e.pdf";

const s2506Page =
  "产品页没有写发布日期。导语写 Si PIN photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Plastic SIP (single in-line package)。二级标题下面先是一个只含不换行空格的 p，U+00A0。产品页没有写应用栏。下载标 659 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。";

const s2506Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=780 nm，Dark current: V<sub>R</sub>=12 V，Cutoff frequency: V<sub>R</sub>=12 V，Terminal capacitance: V<sub>R</sub>=12 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=12 V，unless otherwise noted。λ 是 U+03BB。";

const s2506SheetLead =
  `手册 ${s2506Sheet}。文件名是 s2506-02_etc_kpin1048e.pdf。目录号 KPIN1048E12。pdf 信息里的 Title 是 Si PIN photodiodes S2506/S6775/S6967 series。封面可见文本先写 S2506/S6775/S6967 series，再写 Si PIN photodiodes。副题是一行：Plastic SIP (single in-line package)。正文写 S2506/S6775 series and S6967 are Si PIN photodiodes with large active areas, molded into a clear or visible-cut plastic SIP for detecting visible to near infrared range or near infrared range only. These Si PIN photodiodes feature a high sensitivity, a high-speed response and large active areas.。high- 在行末拆开，下一行写 speed。特性行首是 U+0007。S2506-02 写 visible to near infrared range。S2506-04 写 visible-cut。S6775, S6967 写 visible to near infrared range, high sensitivity，下一行写 high-speed response, large active area。S6775-01, S6967-01 写 visible-cut, high sensitivity，下一行写 high-speed response, large active area。Plastic package: 7 × 7.8 mm 这一行行首也是 U+0007，× 是 U+00D7。Photosensitive area size 这一行行首也是 U+0007，下面写 S2506 series: 2.77 × 2.77 mm 和 S6775/S6967 series: 5.5 × 4.8 mm。应用写 FSO (free space optics)、Optical switches 和 Laser radar, etc.。产品页没有应用栏。绝对最大额定值里，封装 Plastic、反向电压 20 V、工作温度 -25 to +85 °C、贮存温度 -40 to +100 °C 印在六只中间，° 是 U+00B0。功耗 150 mW、感光面积 2.77 × 2.77 mm 和有效感光面积 7.7 mm2 印在 S2506-02 和 S2506-04 中间。S6775 和 S6967 那一组另有面积和功耗，是别的前缀，没有放进这一页。Note 写成 Note:，冒号后面是一个普通空格，然后是 U+0007，下一行写 Exceeding。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。峰值 960 nm、λp 光灵敏度 0.56 A/W、暗电流典型 0.1 nA、最大 10 nA、截止频率 25 MHz、终端电容 15 pF、噪声等效功率 1.0 × 10-14，这几项印在 S2506-02 和 S2506-04 中间，并标 *1。暗电流温度系数 1.15 times/°C 印在六只中间。表头 λ 是 U+03BB。短路电流单位 µA 的 µ 是 U+00B5。截止频率表头写 RL=50 Ω，Ω 是 U+2126，并写 -3 dB。终端电容条件 f=1 MHz。*1 写 VR=12 V。噪声等效功率文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标。光谱图号 KPINB0348EB，条件 (Typ. Ta=25 °C)，曲线标 S2506-04 和 S2506-02，并写 QE=100 %，百分号前面有空格。光灵敏度温度特性图号 KPINB0063ED，条件 (Typ.)，曲线标 S2506-02 和 S2506-04。指向性图号 KPINB0065EB，条件 (Typ. Ta=25 °C)。暗电流对反向电压图号 KPINB0168EG，条件 (Typ. Ta=25 °C)，曲线标 S2506-02/-04、S6775/-01 和 S6967/-01。暗电流对温度图号 KPINB0169EE，条件 (Typ.)，S2506-02/-04 标 VR=12 V，另外两条标 VR=10 V。终端电容对反向电压图号 KPINB0170EF，条件 (Typ. Ta=25 °C, f=1 MHz)，曲线同样标这三组。产品页只放了光谱 jpg 和外形图。外形图题写 Dimensional outline (unit: mm)，outline 是单数。图号 KPINA0084EF，与产品页资源名相同。图上 S2506 series 的 B 写成 2.77 × 2.77，A 写成 2.8 ± 0.2。ϕ5.0 的 ϕ 是 U+03D5。Center of 和 Photosensitive area 分成两行。公差写 Tolerance unless otherwise noted: ±0.1。包装写 Packing: Polyethylene pack [anti-static type]。括号里的数写 Values in parentheses indicate reference values.。焊接条件写 Solder temperature 260 °C max. (once, 10 s or less)，备注写 at least 2 mm away from lead roots。焊接 Note 的 When 前面是 U+0007，并把 product 写成 prouct。相关信息网址写 www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙Notice 和 ∙Metal, ceramic, plastic package products，∙ 是 U+2219。技术笔记写 ∙Si photodiodes。末页写 Information described in this material is current as of May 2024。最后一行写 Cat. No. KPIN1048E12，后面是两个空格，再写 May 2024 DN。末页没有写 Created in Japan，改印销售地址。记为约 2024 年 5 月。`;

const placeS2506 =
  "手册应用写 FSO (free space optics)、Optical switches 和 Laser radar, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2592Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2592-03_etc_kspd1003e.pdf";

const s2592Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Thermoelectrically cooled photodiode for low-light-level detection in UV to near IR。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段。特性三条写在同一个 p 里，Features 是粗体，前面是 br，后面也是 br。每条另起一行，行首是连字符，后面是一个普通空格：High S/N、High UV sensitivity、Built-in thermistor allows stable operation。最后一条末尾没有句号。产品页没有写应用栏。下载标 916 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。主图没有图注。两只主图文件名都是 k_s2592-03_-04_pp_xx.jpg。";

const s2592Measure =
  "规格表没有类型，没有窗材料，也没有截止频率。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity: λ=960 nm，Dark current: V<sub>R</sub>=10 mV，Terminal capacitance: V<sub>R</sub>=0 V，Noise equivalent power: V<sub>R</sub>=0 V, λ=λp，unless otherwise noted。λ 是 U+03BB。测量条件没有写上升时间。";

const s2592SheetLead =
  `手册 ${s2592Sheet}。文件名是 s2592-03_etc_kspd1003e.pdf。目录号 KSPD1003E12。pdf 信息里的 Title 是 Si photodiodes S2592 series。封面可见文本先写 Si photodiodes，再写 S2592 series。副题分成两行：Thermoelectrically cooled photodiodes for，for 后面是两个空格再换行，下一行写 low-light-level detection in UV to near IR。产品页把 photodiodes 写成 photodiode，并合成一行。正文写 The S2592 series sensors combine a UV to near infrared Si photodiode with a thermoelectric cooler. A thermistor is also included in the same package to sense the Si photodiode chip temperature. This allows stable operation over long periods of time, making these sensors suitable for low-light-level detection where a high S/N is required. A dedicated temperature controller (C1103-04) and heatsink (A3179 series) are also available as options (sold separately).。产品页把 series sensors combine 写成型号加 combines，把 these sensors 写成 this sensor，并另写 hermetically sealed in a TO-8 package，没有写 C1103-04 和 A3179。特性没有连字符，行首是一个普通空格：High S/N、High UV sensitivity、Built-in thermistor allows stable operation.。最后一条末尾有句号。应用写 Low-light-level detection，行首也是一个普通空格。产品页没有应用栏。结构表内置光电二极管写 S1336 series，窗材料写 Sapphire glass，制冷写 One-stage TE-cooled，封装写 TO-8，这四项印在两只中间，单位栏是横线。感光面积写在各自那一行。绝对最大反向电压 5 V、工作温度 -40 to +70 °C、贮存温度 -55 to +85 °C，两只共用，° 是 U+00B0。注 *1 的 No 前面是 U+0007。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C)，没有 unless otherwise noted。光谱范围 190 to 1100、峰值 960 nm、λp 光灵敏度 0.42 A/W、暗电流温度系数 1.15 times/°C、制冷温度 35 °C，印在两只中间。制冷温度符号是 ∆，∆ 是 U+2206。表头 λ 是 U+03BB。短路电流单位 µA 和上升时间单位 µs 的 µ 是 U+00B5。上升时间条件 VR=0 V, RL=1 kΩ，Ω 是 U+2126。暗电流条件 VR=10 mV，表里只有最大值。终端电容条件 VR=0 V，没有写频率。分流电阻条件 VR=10 mV，单位 GΩ。噪声等效功率条件 VR=0 V, λ=λp，文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标，上升时间用的 μ 是 U+03BC。光谱图号 KSPDB0182EC，条件 (Typ. Ta=25 °C)，并写 QE=100%，百分号前面没有空格。光灵敏度温度特性图号 KSPDB0053EC，条件 (Typ. )，Typ 和右括号之间有空格。分流电阻对芯片温度图号 KSPDB0183EB，条件 (Typ. VR=10 mV)，曲线标 S2592-03 和 S2592-04。产品页只放了光谱 jpg 和外形图。制冷器规格表头写 TE-cooler specifications (Ta=25 °C, unless otherwise noted)。允许电流最大 1.5 A，允许电压最大 1.0 V，符号写成 VTE max。热敏电阻电阻最小 8.1 kΩ、典型 9.0 kΩ、最大 9.9 kΩ。B 常数条件 T1=25 °C, T2=-20 °C，典型 3.3 K。功耗最大 0.2 mW。制冷特性图号 KSPDB0184EB，电流电压图号 KSPDB0185EC，条件都写 (Typ. Ta=25 °C, thermal resistance of heatsink=3 °C/W)。热敏电阻温度特性图号 KIRDB0116EB，条件 (Typ.)，电阻单位 Ω 是 U+03A9。外形图题写 Dimensional outline (unit: mm)，outline 是单数。图号 KSPDA0133EB。图上 ɸ 是 U+0278。相关产品页写温度控制器 C1103-04 和散热器 A3179。A3179 外形图号 KIRDA0018EE，图上 (4 ×) ϕ3.5 的 ϕ 是 U+03D5。附件电缆 A4372-05 前面是 U+0008。这些不是这一索引上的光电二极管型号，没有另开一页。S1336 已经单独成页，没有放进这一页。相关信息网址写 http://www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙ Disclaimer 和 ∙ Metal, ceramic, plastic package products，∙ 是 U+2219。技术笔记写 ∙ Si photodiodes。紫外注意事项两条都以 ∙ 开头，后面是一个空格再加 U+0007。末页写 Information described in this material is current as of February 2023。最后一行写 Cat. No. KSPD1003E12，后面是两个空格，再写 Feb. 2023 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2023 年 2 月。`;

const placeS2592 =
  "手册应用写 Low-light-level detection。这句话对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2744Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2744-08_etc_kpin1049e.pdf";

const s2744Page =
  "产品页没有写发布日期。导语写 Si PIN photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes,Si photodiodes，逗号两边没有空格，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Large active area Si PIN photodiodes，photodiodes 是复数。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性五条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：Sensitivity matching with BGO and CsI(TI) scintillators、Low capacitance、High-speed response、High stability、Good energy resolution。CsI 和 (TI) 之间没有空格。产品页没有写应用栏。下载标 581 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图 alt 写 Si photodiode product photo。主图没有图注。";

const s2744Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=70 V，Cutoff frequency: V<sub>R</sub>=70 V，Terminal capacitance: V<sub>R</sub>=70 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=70 V，unless otherwise noted。λ 是 U+03BB。f 和 1 之间有空格。";

const s2744SheetLead =
  `手册 ${s2744Sheet}。文件名是 s2744-08_etc_kpin1049e.pdf。目录号 KPIN1049E06。pdf 信息里的 Title 是 Si PIN photodiode S2744/S3588-08/-09，photodiode 是单数，-09 前面是斜杠。封面可见文本先写 Si PIN photodiode，再写 S2744/S3588-08, -09，-09 前面是逗号、空格和连字符。副题是一行：Large active area Si PIN photodiodes。封面没有正文段。特性没有连字符：Sensitivity matching with BGO and CsI (TI) scintillators、High quantum efficiency (Unsealed type): QE=85 % (λ=540 nm)、Low capacitance、High-speed response、High stability、Good energy resolution。CsI 和 (TI) 之间有空格。百分号前面有空格。产品页把 CsI(TI) 写成没有空格，并且没有写量子效率这一条。应用写 Scintillation detectors、Hodoscopes 和 TOF counters。产品页没有应用栏。结构表窗材料 S2744-08 写 Epoxy resin，S2744-09 写 Unsealed。感光面积 10 × 20 印在这两只中间。耗尽层厚度 0.3 mm、反向电压 100 V、功耗 100 mW、工作温度 -20 to +60 °C、贮存温度 -20 to +80 °C，四只共用，° 是 U+00B0。S3588-08 和 S3588-09 是别的前缀，索引是第 70 行和第 71 行，没有放进这一页。Note 写成 Note:，冒号后面是一个普通空格，没有 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 340 to 1100、峰值 960 nm、λp 光灵敏度 0.66 A/W、暗电流典型 3 nA、最大 10 nA、暗电流温度系数 1.12 times/°C、噪声等效功率 4.7 × 10 -14，印在四只中间。表头 λ 是 U+03BB。短路电流单位 μA 的 μ 是 U+03BC。LSO 420 nm、BGO 480 nm、CsI(TI) 540 nm 写在各自那一行，表头 CsI(TI) 没有空格。S2744-08 写 0.20 A/W、0.30 A/W、0.36 A/W，短路电流 200 μA。S2744-09 写 0.22 A/W、0.33 A/W、0.41 A/W，短路电流 180 μA。截止频率表头写成 Cut-off Frequency，条件 VR=70 V。终端电容条件 f=1MHz，1 和 M 之间没有空格，另一处写 VR=70 V。截止频率 25 MHz 和终端电容 85 pF 印在 S2744-08 和 S2744-09 中间。噪声等效功率条件 VR=70 V, λ=λp，文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标，f 和 1 之间有空格。光谱图号 KPINB0265EC，条件 (Typ. Ta=25 °C)，曲线标 S2744/S3588-09 和 S2744/S3588-08。光灵敏度温度特性图号 KPINB0093ED，条件 (Typ.)。暗电流对反向电压图号 KPINB0220EB，条件 (Typ. Ta=25 °C)。终端电容对反向电压图号 KPINB0222EB，条件 (Typ. Ta=25 °C, f=1 MHz)，曲线标 S2744-08/-09 和 S3588-08/-09。产品页只放了光谱 jpg 和外形图。外形图题写 Dimensional outline (unit: mm)，outline 是单数。S2744-08 图号 KPINA0039EC，图上感光面写 Active area 10 × 20，并写 Resin surface、Photosensitive surface 和 White ceramic。灌封那句写 The potting resin may extend a maximum of 0.1 mm beyond the upper surface of the package.。S2744-09 图号 KPINA0108EA，图上感光面也写 Active area 10 × 20。两张图的引线文本层都写成 ȁ0.45，ȁ 是 U+0201。末页写 Information described in this material is current as of October, 2011，October 后面有逗号。最后一行写 Cat. No. KPIN1049E06 Oct. 2011 DN，Oct 前面是一个空格。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2011 年 10 月。`;

const placeS2744 =
  "手册应用写 Scintillation detectors、Hodoscopes 和 TOF counters。这些句子对不上本站的应用标签，所以不放在应用下面。TOF counters 没有写成测量物体远近，也没有写 iTOF 或 dTOF，所以不放在技术下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2744Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF，技术笔记 Technical note / X-ray detectors 标 2.4 MB/PDF。";

const s2833Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s5627-01_etc_kspd1025e.pdf";

const s2833Page =
  "产品页没有写发布日期。导语写 Si photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。name=\"description\" 和 og:description 都写 Features-Visible to near IR range。Features 和连字符之间没有空格，连字符后面也没有空格。型号区 class 含 Type--Migration。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性一条写在同一个 p 里，Features 是粗体，后面是 br。这一条另起一行，行首是连字符，后面是一个普通空格：Visible to near IR range。产品页没有写应用栏。下载标 678 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图没有图注。";

const s2833Measure01 =
  "规格表没有类型，没有截止频率，没有窗材料，也没有噪声等效功率。表头 Package category 的 c 是小写。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=λp，λ 是 U+03BB，冒号后面有一个空格，Dark current: V<sub>R</sub>=1 V，1 和 V 之间有空格，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。测量条件没有写上升时间。";

const s2833Measure04 =
  "规格表没有类型，没有截止频率，没有窗材料，也没有噪声等效功率。表头 Package category 的 c 是小写。测量条件写成一行：Typ. Ta=25 ℃，℃ 是 U+2103，Photosensitivity:λ=λp，λ 是 U+03BB，冒号后面没有空格，Dark current: V<sub>R</sub>=1 V，1 和 V 之间有空格，Terminal capacitance: V<sub>R</sub>=0 V, f=10 kHz，unless otherwise noted。测量条件没有写上升时间。";

const s2833SheetLead =
  `手册 ${s2833Sheet}。文件名是 s5627-01_etc_kspd1025e.pdf。目录号 KSPD1025E10。pdf 信息里的 Title 是 Si photodiodes S5627-01, S4797-01, S2388-01, etc.。封面可见文本先写 Si photodiodes，再写 S5627-01、S4797-01、S2833-01 etc.，没有写 S2388-01。副题是一行：Photodiodes molded into clear plastic packages。产品页把 packages 写成 package。正文写 These are Si photodiodes molded into clear plastic packages. Two types are available with sensitivity in the visible range and in the visible to near IR range. Two photosensitive areas of 1.3 × 1.3 mm and 2.4 × 2.8 mm are also available. The S5627-01 provides a spectral response characteristic similar to the visible range sensitivity without using visual-compensated filters.。visual-compensated 在行末拆开，写成 visual-compen- 再接 sated。特性行首是 U+0007：S5627-01: Visible range (Filterless type)、S4797-01, S6931-01: Visible to near IR range，下一行写 (Suppressed IR sensitivity type)、S2833-01, S4011-06DS: Visible to near IR range。没有写 S2833-04。应用写 Exposure meters、Illuminometers、Stroboscope light control、Copier、Display light control、Optical switches, etc.。Illuminometers 这一行行首是 U+0007。产品页没有应用栏。结构表 S2833-04 外形 (2)，S2833-01 外形 (4)，感光面积都是 2.4 × 2.8 mm，有效感光面积都是 6.6 mm2。DIP type 印在 S6931-01 和 S4797-01 中间，位置在 S5627-01 到 S2833-04 这一组的中部。Surface mount type 印在 S2833-01 和 S4011-06DS 中间。反向电压 10 V、工作温度 -25 to +85 °C、贮存温度 -40 to +100 °C 印在六只中间，落在 S4797-01 和 S2833-04 之间，° 是 U+00B0。S5627-01、S6931-01、S4797-01 和 S4011-06DS 是别的前缀，没有放进这一页。注 *1 写成 *1: N，下一行 o 前面是 U+0007，接 dew condensation。Note 的 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。GaP LED 560 nm 的 0.33 A/W、短路电流 6.5 µA、上升时间 2.5 µs、终端电容 700 pF、分流电阻典型 100 GΩ 印在 S2833-04 和 S2833-01 中间。µ 是 U+00B5，Ω 是 U+2126。光谱范围 320 to 1100 的 320 to 印在这两只中间，1100 印在 S2833-01 下一行。峰值 960 nm、λp 光灵敏度 0.58 A/W、He-Ne laser 633 nm 的 0.38 A/W、红外灵敏度比 -、短路电流温度系数 0.1、暗电流最大 10 pA、暗电流温度系数 1.12 times/°C、分流电阻最小 10 GΩ 印在 S2833-01 这一行。表头 λ 是 U+03BB。短路电流条件 100 lx。上升时间条件 VR=0 V, RL=1 kΩ。终端电容条件 VR=0 V, f=10 kHz。暗电流条件 VR=1 V。分流电阻条件 VR=10 mV。产品页上升时间用的 μ 是 U+03BC。无铅焊接那句写 This product does not support lead-free soldering temperature. For details on reflow soldering conditions for surface-mount conponents, please contact our sales office.。conponents 少了一个 m。光谱图号 KSPDB0129EE，条件 (Typ. Ta=25 °C)，曲线标 S2833-01/-04 和 S4011-06DS。上升时间对负载电阻图号 KSPDB0130EE，条件 (Typ. Ta=25 °C, VR=0 V)，曲线也标 S2833-01/-04。暗电流对反向电压图号 KSPDB0131EE。分流电阻对温度图号 KSPDB0132EE，条件 (Typ. VR=10 mV)，曲线标 S2833-01/-04。文本层里 KSPDB0129EE、KSPDB0130EE、KSPDB0131EE 各又出现一次，KSPDB0132E 少写最后一个 E。产品页只放了光谱图和外形图。外形图先写 Dimensional outlines (unit: mm)，outlines 是复数，各只图题用单数 outline。S2833-04 的图题写 (2) S6931-01, S2833-04，图号 KSPDA0184EB。图上 A 写成 S6931-01 0.6、S2833-04 0.7。公差写 Tolerance unless otherwise noted: ±0.1，± 是 U+00B1。引线写 Lead surface finish: Silver plating。包装写 Standard packing: Stick (50 pcs/stick)。S2833-01 图号 KSPDA0123EC，图题写 (4) S2833-01。图上写 14.5 ± 0.3，并有两处 0.3 max.。相关信息网址写 www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙ Disclaimer、∙ Metal, ceramic, plastic package products 和 ∙ Surface mount type products，∙ 是 U+2219。技术笔记写 ∙ Si photodiode，photodiode 是单数。末页写 Information described in this material is current as of January 2023。最后一行写 Cat. No. KSPD1025E10 Jan. 2023 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2023 年 1 月。`;

const placeS2833 =
  "手册应用写 Exposure meters、Illuminometers、Stroboscope light control、Copier、Display light control 和 Optical switches, etc.。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s3071Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s3071_etc_kpin1044e.pdf";

const s3071Page =
  "产品页没有写发布日期。导语写 Si PIN photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Large area, high-speed Si PIN photodiode，photodiode 是单数。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段。特性三条写在同一个 p 里，Features 是粗体，前面是 br，后面也是 br。每条另起一行，行首是连字符，后面是一个普通空格。产品页没有写应用栏。下载标 597 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图没有图注。";

const s3071Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=780 nm，Dark current: V<sub>R</sub>=24 V，Cutoff frequency: V<sub>R</sub>=24 V，Terminal capacitance: V<sub>R</sub>=24 V, f=1 MHz, λ=λp，Noise equivalent power: V<sub>R</sub>=24 V, λ=λp，unless otherwise noted。λ 是 U+03BB。终端电容那一截在 f=1 MHz 后面还写了 λ=λp。";

const s3071SheetLead =
  `手册 ${s3071Sheet}。文件名是 s3071_etc_kpin1044e.pdf。目录号 KPIN1044E08。pdf 信息里的 Title 是空的。封面可见文本先写 Si PIN photodiodes，再写 S3071、S3072、S3399、S3883。副题是一行：Large area, high-speed Si PIN photodiodes，photodiodes 是复数。产品页把 photodiodes 写成 photodiode。正文写 The S3071, S3072, S3399 and S3883 are Si PIN photodiodes having a relatively large photosensitive area from ϕ1.5 to ϕ5.0 mm yet they offer excellent frequency response from 40 to 300 MHz. These photodiodes are suitable for FSO (free space optics) and high-speed pulsed light detection.。ϕ5.0 在行末，下一行才写 mm。free space 在行末，下一行才写 optics。ϕ 是 U+03D5。FSO 和左括号之间有一个空格。产品页正文把 are 写成 is，把 they 写成 it，并写成 This photodiode，频率只写一只自己的数，FSO 和左括号之间没有空格。特性没有连字符：Photosensitive area size，下面按型号写 S3071: ϕ5.0 mm、S3072: ϕ3.0 mm、S3399: ϕ3.0 mm、S3883: ϕ1.5 mm。Cutoff frequency 下面写 S3071: 40 MHz (VR=24 V)、S3072: 45 MHz (VR=24 V)、S3399: 100 MHz (VR=10 V)、S3883: 300 MHz (VR=20 V)。High reliability: TO-5/8 metal package。应用写 FSO 和 High-speed pulsed light detection。产品页没有应用栏。结构表窗材料 S3071 写 (1)/K，S3072 写 (2)/K。封装 TO-8 印在 S3071 这一行。TO-5 印在 S3399 这一行。S3072 和 S3883 的封装格没有词。感光面积 ϕ5.0 和有效感光面积 19.6 mm2 印在 S3071 这一行。ϕ3.0 和 7.0 mm2 印在 S3072 这一行。反向电压 50 V 印在 S3071 和 S3072 中间。功耗 50 mW、工作温度 -40 to +100 °C、贮存温度 -55 to +125 °C 印在四只中间，° 是 U+00B0。反向电压 30 V 印在 S3399 和 S3883 中间。注 *1 写 Window material K=borosilicate glass，borosilicate 的 b 是小写。注 *2 写成 *2:，下一行 No 前面是 U+0007，接 condensation。Note 写成 Note:，下一行 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 320 to 1060、峰值 920 nm、λp 光灵敏度 0.6 A/W、660 nm 的 0.47 A/W、780 nm 的 0.54 A/W、830 nm 的 0.56 A/W、暗电流温度系数 1.15 times/°C，印在 S3071 和 S3072 中间。表头 λ 是 U+03BB。短路电流单位 µA 的 µ 是 U+00B5。截止频率表头写 RL=50 Ω，Ω 是 U+2126。终端电容表头写 f=1 MHz。噪声等效功率条件 λ=λp。*3 写 VR=24 V。S3071 这一行短路电流 17 µA，暗电流典型 0.5 nA、最大 10 nA，截止频率 40 MHz，终端电容 18 pF，噪声等效功率 2.1 × 10-14。S3072 这一行短路电流 6.5 µA，暗电流典型 0.3 nA、最大 10 nA，截止频率 45 MHz，终端电容 7 pF，噪声等效功率 1.6 × 10-14。这些数都标 *3。噪声等效功率文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标。S3399 和 S3883 是别的前缀，索引是第 67 行和第 76 行，没有放进这一页。光谱图号 KPINB0147EB，条件 (Typ. Ta=25 °C)，曲线标 S3399, S3883 和 S3071, S3072。光灵敏度温度特性图号 KPINB0148EB，条件 (Typ.)，曲线同样标这两组。暗电流对反向电压图号 KPINB0149EA，条件 (Typ. Ta=25 °C)。终端电容对反向电压图号 KPINB0150EA，条件 (Typ. Ta=25 °C, f=1 MHz)。这四个图号在文本层里各又出现一次。产品页只放了光谱 jpg 和外形图。外形图先写 Dimensional outlines (unit: mm)，outlines 是复数。S3071 图题另写 Dimensional outline (S1722-02, S3071, unit: mm)，outline 是单数。图号 KPINA0027ED，文本层又出现一次。图上 ɸ 是 U+0278。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap.。感光面中心到管帽中心写 -0.4≤X≤+0.4 和 -0.4≤Y≤+0.4。S3072 图号 KPINA0024ED，文本层又出现一次。窗玻璃那句写 0.15 mm。中心偏移写 -0.3≤X≤+0.3 和 -0.3≤Y≤+0.3。S1722-02 不是这一索引上的型号，没有另开一页。相关信息网址写 www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙ Disclaimer 和 ∙ Metal, ceramic, plastic package products，∙ 是 U+2219。Catalog 下面写 ∙ Technical note / Si photodiodes。末页写 Information described in this material is current as of April, 2025，April 后面有逗号。最后一行写 Cat. No. KPIN1044E08 Apr. 2025 DN。末页没有写 Created in Japan，改印销售地址，地址写 Chuo-ku。记为约 2025 年 4 月。`;

const placeS3071 =
  "手册应用写 FSO 和 High-speed pulsed light detection。这些句子对不上本站的应用标签，所以不放在应用下面。没有写 TOF。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s3204Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s3204-08_etc_kpin1051e.pdf";

const s3204Page =
  "产品页没有写发布日期。导语写 Si PIN photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes,Si photodiodes，逗号两边没有空格，末尾没有空格。name=\"description\" 和 og:description 都写 Features-Sensitivity matching with BGO and CsI(TI) scintillators-Low capacitance-High-speed response-High stability-Good energy resolution。Features 和连字符之间没有空格，连字符后面也没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Large photosensitive area Si PIN photodiodes，photodiodes 是复数。二级标题下面是一个只含不换行空格的 p，U+00A0。没有正文段。特性五条写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：Sensitivity matching with BGO and CsI(TI) scintillators、Low capacitance、High-speed response、High stability、Good energy resolution。CsI 和 (TI) 之间没有空格。产品页没有写应用栏。下载标 569 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图没有图注。";

const s3204Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件在 unless otherwise noted 后面有 br。写成 Ta=25 ℃，℃ 是 U+2103，Typ.，unless otherwise noted，下一行写 Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=70 V，Cutoff frequency: V<sub>R</sub>=70 V，Terminal capacitance: V<sub>R</sub>=70 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=70 V。λ 是 U+03BB。f 和 1 之间有空格。";

const s3204SheetLead =
  `手册 ${s3204Sheet}。文件名是 s3204-08_etc_kpin1051e.pdf。目录号 KPIN1051E10。pdf 信息里的 Title 是 s3204_etc_kpin1051e10.indd。封面可见文本先写 Si PIN photodiode，photodiode 是单数，再写 S3204/S3584 series。副题是一行：Large active area Si PIN photodiodes。产品页二级标题把 active 写成 photosensitive。封面没有正文段。特性没有连字符：Sensitivity matching with BGO and CsI (TI) scintillators、High quantum efficiency (Unsealed type): QE=85 % (λ=540 nm)、Low capacitance、High-speed response、High stability、Good energy resolution。CsI 和 (TI) 之间有空格。百分号前面有空格。文本层把 efficiency 拆成 effi 和 ciency。产品页把 CsI(TI) 写成没有空格，并且没有写量子效率这一条。应用写 Scintillation detectors、Hodoscopes 和 TOF counters。产品页没有应用栏。结构表窗材料 S3204-08 写 Epoxy resin，S3204-09 写 Unsealed。感光面积 18 × 18 印在这两只中间。耗尽层厚度 0.3 mm、反向电压 100 V、功耗 100 mW、工作温度 -20 to +60 °C、贮存温度 -20 to +80 °C，印在 S3204-09 和 S3584-08 中间，四只共用，° 是 U+00B0。反向电压表头写成 V R max，V 和 R 之间有空格。S3584-08 和 S3584-09 是别的前缀，索引是第 68 行和第 69 行，没有放进这一页。Note 写成 Note:，冒号后面是一个普通空格，没有 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 340 to 1100、峰值 960 nm、λp 光灵敏度 0.66 A/W、暗电流温度系数 1.12 times/°C，印在 S3204-09 和 S3584-08 中间。表头 λ 是 U+03BB。短路电流单位 μA 的 μ 是 U+03BC。表头把 coefficient 拆成 coeffi 和 cient。LSO 420 nm、BGO 480 nm、CsI(TI) 540 nm 写在各自那一行，表头 CsI(TI) 没有空格。S3204-08 写 0.20 A/W、0.30 A/W、0.36 A/W，短路电流 340 μA。S3204-09 写 0.22 A/W、0.33 A/W、0.41 A/W，短路电流 300 μA。暗电流典型 6 nA、最大 20 nA、截止频率 20 MHz、终端电容 130 pF、噪声等效功率 6.6 × 10 -14，印在 S3204-08 和 S3204-09 中间。截止频率表头写成 Cut-off Frequency。终端电容条件 f=1MHz，1 和 M 之间没有空格。噪声等效功率文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标，10 和 -14 之间有空格。产品页 × 两边没有空格，指数写成上标，f 和 1 之间有空格。光谱图一边图号 KPINB0227ED，条件 (Typ. Ta=25 °C)，曲线标 S3204/S3584-08。另一边图号 KPINB0264ED，条件同样写 (Typ. Ta=25 °C)，曲线标 S3204/S3584-09。光灵敏度温度特性图号 KPINB0093ED，条件 (Typ.)。暗电流对反向电压图号 KPINB0228EE，条件 (Typ. Ta=25 °C)，曲线标 S3204-08/-09 和 S3584-08/-09。终端电容对反向电压图号 KPINB0230EE，条件 (Typ. Ta=25 °C, f=1 MHz)，曲线标 S3584-08/-09 和 S3204-08/-09。产品页只放了光谱图和外形图。外形图题写 Dimensional outline (unit: mm)，outline 是单数。S3204-08 图号 KPINA0040EC，图上感光面写 Active area 18 × 18，并写 Resin、Photosensitive surface 和 White ceramic。S3204-09 图号 KPINA0110EA，图上感光面也写 Active area 18 × 18，并写 Photosensitive surface 和 White ceramic，文本层没有 Resin。两张图的引线都写成 0.45。外形尺寸写 25.5 +0 和 -0.6、3.4、2.54 ± 0.2、1.2、10、1.75、5.0 ± 0.2，± 是 U+00B1。末页写 Information described in this material is current as of January, 2012，January 后面有逗号。最后一行写 Cat. No. KPIN1051E10 Jan. 2012 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2012 年 1 月。`;

const placeS3204 =
  "手册应用写 Scintillation detectors、Hodoscopes 和 TOF counters。这些句子对不上本站的应用标签，所以不放在应用下面。TOF counters 没有写成测量物体远近，也没有写 iTOF 或 dTOF，所以不放在技术下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s3584Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件写成一行，没有 br：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=λp，Dark current: V<sub>R</sub>=70 V，Cutoff frequency: V<sub>R</sub>=70 V，Terminal capacitance: V<sub>R</sub>=70 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=70 V，unless otherwise noted。λ 是 U+03BB。f 和 1 之间有空格。";

const s3584SheetLead =
  `手册 ${s3204Sheet}。文件名是 s3204-08_etc_kpin1051e.pdf。目录号 KPIN1051E10。pdf 信息里的 Title 是 s3204_etc_kpin1051e10.indd。封面可见文本先写 Si PIN photodiode，photodiode 是单数，再写 S3204/S3584 series。副题是一行：Large active area Si PIN photodiodes。产品页二级标题把 active 写成 photosensitive。封面没有正文段。特性没有连字符：Sensitivity matching with BGO and CsI (TI) scintillators、High quantum efficiency (Unsealed type): QE=85 % (λ=540 nm)、Low capacitance、High-speed response、High stability、Good energy resolution。CsI 和 (TI) 之间有空格。百分号前面有空格。文本层把 efficiency 拆成 effi 和 ciency。产品页把 CsI(TI) 写成没有空格，并且没有写量子效率这一条。应用写 Scintillation detectors、Hodoscopes 和 TOF counters。产品页没有应用栏。结构表窗材料 S3584-08 写 Epoxy resin，S3584-09 写 Unsealed。感光面积 28 × 28 印在这两只中间。耗尽层厚度 0.3 mm、反向电压 100 V、功耗 100 mW、工作温度 -20 to +60 °C、贮存温度 -20 to +80 °C，印在 S3204-09 和 S3584-08 中间，四只共用，° 是 U+00B0。反向电压表头写成 V R max，V 和 R 是分开的词。S3204-08 和 S3204-09 已经单独成页。Note 写成 Note:，冒号后面是一个普通空格，没有 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 340 to 1100、峰值 960 nm、λp 光灵敏度 0.66 A/W、暗电流温度系数 1.12 times/°C，印在 S3204-09 和 S3584-08 中间。表头 λ 是 U+03BB。短路电流单位 μA 的 μ 是 U+03BC。表头把 coefficient 拆成 coeffi 和 cient。LSO 420 nm、BGO 480 nm、CsI(TI) 540 nm 写在各自那一行，表头 CsI(TI) 没有空格。S3584-08 写 0.20 A/W、0.30 A/W、0.36 A/W，短路电流 780 μA。S3584-09 写 0.22 A/W、0.33 A/W、0.41 A/W，短路电流 730 μA。暗电流典型 10 nA、最大 30 nA、截止频率 10 MHz、终端电容 300 pF、噪声等效功率 8.6 × 10 -14，印在 S3584-08 和 S3584-09 中间。截止频率表头写成 Cut-off Frequency。终端电容条件 f=1MHz，1 和 M 之间没有空格。噪声等效功率文本层把 8.6、×、10、-14 拆开，× 是 U+00D7，指数没有写成上标，10 和 -14 之间有空格。产品页 × 两边没有空格，指数写成上标，f 和 1 之间有空格。光谱图一边图号 KPINB0227ED，条件 (Typ. Ta=25 °C)，曲线标 S3204/S3584-08。另一边图号 KPINB0264ED，条件同样写 (Typ. Ta=25 °C)，曲线标 S3204/S3584-09。光灵敏度温度特性图号 KPINB0093ED，条件 (Typ.)。暗电流对反向电压图号 KPINB0228EE，条件 (Typ. Ta=25 °C)，曲线标 S3204-08/-09 和 S3584-08/-09。终端电容对反向电压图号 KPINB0230EE，条件 (Typ. Ta=25 °C, f=1 MHz)，曲线标 S3584-08/-09 和 S3204-08/-09。产品页只放了光谱图和外形图。外形图题写 Dimensional outline (unit: mm)，outline 是单数。S3584-08 图号 KPINA0041ED，图上感光面写 Active area 28 × 28，并写 Resin、Photosensitive surface 和 White ceramic。S3584-09 图号 KPINA0111EA，图上感光面也写 Active area 28 × 28，并写 Photosensitive surface 和 White ceramic，文本层没有 Resin。两张图的引线都写成 0.45。外形尺寸写 35.6 +0 和 -0.8、3.4、2.54 ± 0.2、1.2、10、1.75、5.0 ± 0.2，± 是 U+00B1。末页写 Information described in this material is current as of January, 2012，January 后面有逗号。最后一行写 Cat. No. KPIN1051E10 Jan. 2012 DN。末页没有写 Created in Japan，改印销售地址，地址写 Higashi-ku。记为约 2012 年 1 月。`;

const s2833Docs01 =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，表面贴装产品注意事项 Precautions / Surface mount type products 标 407 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。";

const s2833Docs04 =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si photodiodes 标 6.9 MB/PDF，技术笔记 Technical note / Si photodiodes 标 2.8 MB/PDF。";

const s1337Resin =
  "树脂灌封那句写 The resin potting may extend a maximum of 0.1 mm above the upper surface of the package.。";

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

const s3399Page =
  "产品页没有写发布日期。导语写 Si PIN photodiode。页面标题和 og:title 在型号和竖线之间有一个空格。keywords 写 Si photodiodes，末尾没有空格。型号区 class 含 Type--Migration。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Large area, high-speed Si PIN photodiode。二级标题下面先是一个只含不换行空格的 p，U+00A0，然后是正文段。特性三条写在同一个 p 里，Features 是粗体，前面是 br，后面也是 br。每条另起一行，行首是连字符，后面是一个普通空格。产品页没有写应用栏。下载标 597 KB/PDF。面包屑里的 Si photodiodes 末尾没有空格。主图没有图注。";

const s3399Measure =
  "规格表没有类型，没有窗材料，也没有上升时间。表头 Package category 的 c 是小写。测量条件写成一行：Ta=25 ℃，℃ 是 U+2103，Typ.，Photosensitivity: λ=780 nm，Dark current: V<sub>R</sub>=10 V，Cutoff frequency: V<sub>R</sub>=10 V，Terminal capacitance: V<sub>R</sub>=10 V, f=1 MHz，Noise equivalent power: V<sub>R</sub>=10 V, λ=λp，unless otherwise noted。λ 是 U+03BB。终端电容那一截在 f=1 MHz 后面是逗号，接着写 Noise equivalent power，没有再写 λ=λp。λ=λp 只写在噪声等效功率后面。";

const s3399SheetLead =
  `手册 ${s3071Sheet}。文件名是 s3071_etc_kpin1044e.pdf。目录号 KPIN1044E08。pdf 信息里的 Title 是空的。封面可见文本先写 Si PIN photodiodes，再写 S3071、S3072、S3399、S3883。副题是一行：Large area, high-speed Si PIN photodiodes，photodiodes 是复数。产品页把 photodiodes 写成 photodiode。正文写 The S3071, S3072, S3399 and S3883 are Si PIN photodiodes having a relatively large photosensitive area from ϕ1.5 to ϕ5.0 mm yet they offer excellent frequency response from 40 to 300 MHz. These photodiodes are suitable for FSO (free space optics) and high-speed pulsed light detection.。ϕ 是 U+03D5。FSO 和左括号之间有一个空格。产品页正文把 are 写成 is，把 they 写成 it，并写成 This photodiode，频率只写 100 MHz，FSO 和左括号之间没有空格。特性没有连字符：Photosensitive area size 下面写 S3399: ϕ3.0 mm。Cutoff frequency 下面写 S3399: 100 MHz (VR=10 V)。High reliability: TO-5/8 metal package。应用写 FSO 和 High-speed pulsed light detection。产品页没有应用栏。结构表 S3399 这一行写 (3)/K、TO-5、ϕ3.0、有效感光面积 7.0 mm2。反向电压 30 V 印在 S3399 和 S3883 中间。功耗 50 mW、工作温度 -40 to +100 °C、贮存温度 -55 to +125 °C 印在 S3072 和 S3399 中间，位置在四只的中部，° 是 U+00B0。S3071 和 S3072 已经单独成页。S3883 是别的前缀，索引是第 76 行，没有放进这一页。注 *1 写 Window material K=borosilicate glass，borosilicate 的 b 是小写。注 *2 写成 *2:，下一行 No 前面是 U+0007，接 condensation。Note 写成 Note:，下一行 Exceeding 前面是 U+0007。电特性表头写 Electrical and optical characteristics (Typ. Ta=25 °C, unless otherwise noted)。光谱范围 320 to 1000、峰值 840 nm、λp 光灵敏度 0.6 A/W、660 nm 的 0.45 A/W、780 nm 的 0.58 A/W、830 nm 的 0.6 A/W、暗电流温度系数 1.12 times/°C，印在 S3399 和 S3883 中间。表头 λ 是 U+03BB。短路电流单位 µA 的 µ 是 U+00B5。截止频率表头写 RL=50 Ω，Ω 是 U+2126。终端电容表头写 f=1 MHz。噪声等效功率条件 λ=λp。*4 写 VR=10 V，R 落在下一行。S3399 这一行短路电流 5.6 µA，暗电流典型 0.1 nA、最大 1.0 nA，截止频率 100 MHz，终端电容 20 pF，噪声等效功率 9.4 × 10-15，这些数都标 *4。噪声等效功率文本层在 × 两边有空格，× 是 U+00D7，指数没有写成上标。产品页 × 两边没有空格，指数写成上标。光谱图号 KPINB0147EB，条件 (Typ. Ta=25 °C)，曲线标 S3399, S3883 和 S3071, S3072。光灵敏度温度特性图号 KPINB0148EB。暗电流对反向电压图号 KPINB0149EA。终端电容对反向电压图号 KPINB0150EA，条件 (Typ. Ta=25 °C, f=1 MHz)。这四个图号在文本层里各又出现一次。产品页只放了光谱 jpg 和外形图。第 4 页外形文本层从 ensional outline (unit: mm) 写起，前面的 D 没有进文本层。另一行写 (S3883, mm)，前面一串是乱码。图题写 (3) S3399 和 (4) S3883。S3399 图号 KPINA0026ED，文本层又出现一次。图上 ɸ 是 U+0278，感光面写 ɸ3.0。窗玻璃那句写 The glass window may extend a maximum of 0.15 mm above the upper surface of the cap.。感光面中心到管帽中心写 -0.3≤X≤+0.3 和 -0.3≤Y≤+0.3。S3883 图号 KPINA0025ED，没有放进这一页。相关信息网址写 www.hamamatsu.com/sp/ssd/doc_en.html。注意事项写 ∙ Disclaimer 和 ∙ Metal, ceramic, plastic package products，∙ 是 U+2219。Catalog 下面写 ∙ Technical note / Si photodiodes。末页写 Information described in this material is current as of April, 2025，April 后面有逗号。最后一行写 Cat. No. KPIN1044E08 Apr. 2025 DN。末页没有写 Created in Japan，改印销售地址，地址写 Chuo-ku。记为约 2025 年 4 月。`;

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

  {
    id: "s1337",
    date: "2015-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S1337：滨松紫外到红外精密测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。九只共用这一页。手册文件名是 s1337_series_kspd1032e.pdf。pdf 信息里的 Title 是 Si photodiode S1337 series。末页写 Information described in this material is current as of October, 2015，October 后面有逗号。最后一行写 Cat. No. KSPD1032E07  Oct. 2015 DN，Oct 前面有两个空格，记为约 2015 年 10 月。索引 newState 都是 false，是第 30 行到第 38 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1337-16BQ", "2015-10", part("S1337-16BQ"), [
        s1337Page +
          "一级标题写 S1337-16BQ。主图文件名是 k_s1227-16bq_s1337-16bq_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-Low capacitance。Features 和连字符之间没有空格，连字符后面也没有空格。特性只有一条：Low capacitance。手册特性还有 High UV sensitivity: QE 75% (λ=200 nm)，这一页没有写。",
        "规格表感光面积 5.9 × 1.1 mm，× 是 U+00D7，两边有空格。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 50 pA。上升时间典型 0.2 μs，μ 是 U+03BC。终端电容典型 65 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图是 jpeg，文件名 k_s1337-1010bq_sr_xx,0.jpg，文件名写的是 S1337-1010BQ。目录名是 03_02_Characteristic Chart。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0105EB.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 30 行，newState 是 false。productName 写 Si photodiode。productExp 写 For UV to IR precision photometry, for analytical instrument, optical measurement equipment，IR 后面没有逗号，和二级标题不同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-16bq_s1337-16bq_pp_xx.jpg。typeNameSort 写成 S01337-0016BQ。类型的值和显示都写成 --。感光面积的值写成 5.9 × 1.1，显示写成 5.9 × 1.1 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 50 pA。上升时间的值写成 0.2，显示写成 0.2 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 65 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Ceramic。封装类别写成 --。冷却的值和显示都写成 Non-cooled。手册标 239 KB。索引地址 ${index}。其余八只放在同一页。`,
        s1337SheetLead +
          "结构表这一只窗材料 Quartz，型号后面标 *。外形尺寸 2.7 × 15 mm、感光面积 1.1 × 5.9 mm、有效感光面积 5.9 印在 S1337-16BQ 和 S1337-16BR 中间。产品页和索引把感光面积写成 5.9 × 1.1。工作温度 -20 to +60 °C、贮存温度 -20 to +80 °C 印在前八只中间。反向电压的数字 5 基线与 S1337-66BQ 这一行相同，前八只没有各自再写一个 5。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流写在这一行，最小 4.0 µA、典型 5.3 µA。暗电流最大 50 pA、上升时间 0.2 μs、终端电容 65 pF、分流电阻最小 0.2 GΩ、典型 0.6 GΩ，印在两行中间，和 S1337-16BR 共用。噪声等效功率 1.0 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0105EB，与产品页资源名相同。图上感光面写 1.1 × 5.9。窗标 Quartz window。" +
          s1337GuideEight +
          "这一对暗电流 50 和感光面积 1.1 × 5.9 印在 S1337-16BQ 和 S1337-16BR 中间。终端电容 65 印在 S1337-16 和 S1337-33 四只中间，33 这一对没有再写一个 65。型号后面有星号。" +
          placeS1337,
      ]),
      page("S1337-16BR", "2015-10", part("S1337-16BR"), [
        s1337Page +
          "一级标题写 S1337-16BR。主图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg，pp 和 xx 之间是句点。name=\"description\" 和 og:description 都写 Features-High UV sensitivity: QE=75% (λ=200 nm)-Low capacitance。等号是 ASCII =，75 和百分号之间没有空格。特性两条：High UV sensitivity: QE=75% (λ=200 nm)、Low capacitance。手册这一只 200 nm 光灵敏度是横线，窗材料是 Resin potting。",
        "规格表感光面积 5.9 × 1.1 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.62 A/W。暗电流最大 50 pA。上升时间典型 0.2 μs。终端电容典型 65 pF。噪声等效功率典型 8.4×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名是 KSPDB0306EA,0.jpg，和手册 BR 图号相同。外形图 data-asset 写成 KSPDA0106EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 31 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同，IR 后面没有逗号。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg，pp 和 xx 之间是句点。typeNameSort 写成 S01337-0016BR。类型的值和显示都写成 --。感光面积的值写成 5.9 × 1.1，显示写成 5.9 × 1.1 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.62 A/W。暗电流 50 pA。上升时间的值写成 0.2，显示写成 0.2 μs。截止频率是 --。终端电容 65 pF。噪声等效功率的值写成 8.4×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Resin potting，型号后面没有星号。外形尺寸、感光面积和有效感光面积与 S1337-16BQ 共用。200 nm 光灵敏度是横线。短路电流写在这一行，最小 4.4 µA、典型 6.2 µA。He-Ne 633 nm 是 0.4 A/W，GaAs LED 930 nm 是 0.6 A/W。暗电流、上升时间、终端电容和分流电阻与 S1337-16BQ 共用。噪声等效功率 8.4 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0106EB，与产品页资源名相同。图上感光面写 1.1 × 5.9。" +
          s1337Resin +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 340 to 1100，λ=200 nm 是横线，λ=960 nm 写 0.62。型号后面没有星号。" +
          placeS1337,
      ]),
      page("S1337-21", "2015-10", part("S1337-21"), [
        s1337Page +
          "一级标题写 S1337-21。主图文件名是 k_s3204-09_pp_xx.jpg，文件名写的是 S3204。name=\"description\" 和 og:description 都写 Features-Low capacitance。特性只有一条：Low capacitance。",
        "规格表感光面积 18 × 18 mm。封装 Ceramic，封装类别 Unsealed。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.52 A/W。暗电流最大 500 pA。上升时间典型 8 μs。终端电容典型 4000 pF。噪声等效功率典型 2.5×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名仍是 k_s1337-1010bq_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0190EA.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 32 行，newState 是 false。productName 写 Si photodiode。productExp 写 UV to IR sensitivity, low dark current, For spectrophotometer, analytical instruments, medical instruments.，末尾有句号，和二级标题不同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3204-09_pp_xx.jpg。typeNameSort 写成 S01337-0021。类型的值和显示都写成 --。感光面积的值写成 18 × 18，显示写成 18 × 18 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.52 A/W。暗电流 500 pA。上升时间的值写成 8，显示写成 8 μs。截止频率是 --。终端电容 4000 pF。噪声等效功率的值写成 2.5×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 Unsealed。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Unsealed，型号后面标 *。外形尺寸 25.5 × 25.5 mm、感光面积 18 × 18 mm、有效感光面积 324 写在这一行。工作温度 0 to +60 °C，贮存温度 0 to +80 °C，也写在这一行，不和前八只共用 -20 to +60。这一行没有再写反向电压 5。200 nm 光灵敏度最小 0.10 A/W、典型 0.13 A/W。λp 光灵敏度 0.52 A/W。He-Ne 633 nm 是 0.34 A/W，GaAs LED 930 nm 是 0.51 A/W。短路电流最小 200 µA、典型 250 µA。暗电流最大 500 pA。上升时间 8 μs。终端电容 4000 pF。分流电阻最小 0.02 GΩ、典型 0.1 GΩ。噪声等效功率 2.5 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0190EA，与产品页资源名相同。图上感光面写 18 × 18。图上写 White ceramic。引线直径文本层写成 ȁ0.45，ȁ 是 U+0201。25.5 的公差分成两行，一行 +0，一行 -0.6。" +
          `${guide}第 8 页才列出这一只。λ=200 nm 写 0.13，没有印手册里的最小 0.10。λ=960 nm 写 0.52。暗电流 500。终端电容 4000。感光面积 18 × 18。封装写成两行，Ceramic 和 (unsealed)。型号后面的星号是 *1。注 *1 写 Refer to “Precautions against UV light exposure (P.45).”。光谱图号 KSPDB0421EB，图题方括号写 S1337-21，方括号内侧各有两个 U+2005。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。手册把 S1337-21 画在 KSPDB0102ED 上。同一页还有 S2281，是别的前缀，没有放进这一页。页脚页码写 8 / 46。` +
          placeS1337,
      ]),
      page("S1337-33BQ", "2015-10", part("S1337-33BQ"), [
        s1337Page +
          "一级标题写 S1337-33BQ。主图文件名是 k_s1227-33bq_s1337-33bq_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-High UV sensitivity: QE 75% (λ=200 nm)-Low capacitance。75 和百分号之间有空格。特性两条：High UV sensitivity: QE 75% (λ=200 nm)、Low capacitance。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 30 pA。上升时间典型 0.2 μs。终端电容典型 65 pF。噪声等效功率典型 8.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名仍是 k_s1337-1010bq_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0107EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 33 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-33bq_s1337-33bq_pp_xx.jpg。typeNameSort 写成 S01337-0033BQ。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 30 pA。上升时间的值写成 0.2，显示写成 0.2 μs。截止频率是 --。终端电容 65 pF。噪声等效功率的值写成 8.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Quartz，型号后面标 *。外形尺寸 6 × 7.6 mm、感光面积 2.4 × 2.4 mm、有效感光面积 5.7 印在 S1337-33BQ 和 S1337-33BR 中间。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流写在这一行，最小 4.0 µA、典型 5.0 µA。暗电流最大 30 pA、上升时间 0.2 μs、终端电容 65 pF、分流电阻最小 0.3 GΩ、典型 1 GΩ，印在两行中间，和 S1337-33BR 共用。噪声等效功率 8.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0107EB，与产品页资源名相同。图上感光面写 2.4 × 2.4。窗标 Quartz window。" +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，λ=960 nm 写 0.5。暗电流 30 和感光面积 2.4 × 2.4 印在这一对中间。终端电容没有再写，和 S1337-16 共用中间的 65。型号后面有星号。" +
          placeS1337,
      ]),
      page("S1337-33BR", "2015-10", part("S1337-33BR"), [
        s1337Page +
          "一级标题写 S1337-33BR。主图文件名是 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-Low capacitance。特性只有一条：Low capacitance。",
        "规格表感光面积 2.4 × 2.4 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.62 A/W。暗电流最大 30 pA。上升时间典型 0.2 μs。终端电容典型 65 pF。噪声等效功率典型 6.5×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名是 KSPDB0306EA,0.jpg。外形图 data-asset 写成 KSPDA0108EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 34 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg。typeNameSort 写成 S01337-0033BR。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.62 A/W。暗电流 30 pA。上升时间的值写成 0.2，显示写成 0.2 μs。截止频率是 --。终端电容 65 pF。噪声等效功率的值写成 6.5×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Resin potting，型号后面没有星号。外形尺寸、感光面积和有效感光面积与 S1337-33BQ 共用。200 nm 光灵敏度是横线。短路电流写在这一行，最小 4.4 µA、典型 6.2 µA。暗电流、上升时间、终端电容和分流电阻与 S1337-33BQ 共用。噪声等效功率 6.5 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0108EB，与产品页资源名相同。图上感光面写 2.4 × 2.4。" +
          s1337Resin +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 340 to 1100，λ=200 nm 是横线，λ=960 nm 写 0.62。型号后面没有星号。" +
          placeS1337,
      ]),
      page("S1337-66BQ", "2015-10", part("S1337-66BQ"), [
        s1337Page +
          "一级标题写 S1337-66BQ。主图文件名是 k_s1227-66bq_s1337-66bq_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-High UV sensitivity: QE 75% (λ=200 nm)-Low capacitance。特性两条与 S1337-33BQ 相同。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 100 pA。上升时间典型 1 μs。终端电容典型 380 pF。噪声等效功率典型 1.3×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名仍是 k_s1337-1010bq_sr_xx,0.jpg。外形图 data-asset 写成 KSPDA0109EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 35 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-66bq_s1337-66bq_pp_xx.jpg。typeNameSort 写成 S01337-0066BQ。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 100 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 380 pF。噪声等效功率的值写成 1.3×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Quartz，型号后面标 *。外形尺寸 8.9 × 10.1 mm、感光面积 5.8 × 5.8 mm、有效感光面积 33 印在 S1337-66BQ 和 S1337-66BR 中间。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流写在这一行，最小 20 µA、典型 27 µA。暗电流最大 100 pA、上升时间 1 μs、终端电容 380 pF、分流电阻最小 0.1 GΩ、典型 0.4 GΩ，印在两行中间，和 S1337-66BR 共用。噪声等效功率 1.3 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0109EB，与产品页资源名相同。图上感光面写 5.8 × 5.8。窗标 Quartz window。" +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，λ=960 nm 写 0.5。暗电流 100、终端电容 380 和感光面积 5.8 × 5.8 印在这一对中间。型号后面有星号。" +
          placeS1337,
      ]),
      page("S1337-66BR", "2015-10", part("S1337-66BR"), [
        s1337Page +
          "一级标题写 S1337-66BR。主图文件名是 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-Low capacitance。特性只有一条：Low capacitance。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.62 A/W。暗电流最大 100 pA。上升时间典型 1 μs。终端电容典型 380 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名是 KSPDB0306EA,0.jpg。外形图 data-asset 写成 KSPDA0110EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 36 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg。typeNameSort 写成 S01337-0066BR。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.62 A/W。暗电流 100 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 380 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Resin potting，型号后面没有星号。外形尺寸、感光面积和有效感光面积与 S1337-66BQ 共用。200 nm 光灵敏度是横线。短路电流写在这一行，最小 22 µA、典型 33 µA。暗电流、上升时间、终端电容和分流电阻与 S1337-66BQ 共用。噪声等效功率 1.0 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0110EB，与产品页资源名相同。图上感光面写 5.8 × 5.8。" +
          s1337Resin +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 340 to 1100，λ=200 nm 是横线，λ=960 nm 写 0.62。型号后面没有星号。" +
          placeS1337,
      ]),
      page("S1337-1010BQ", "2015-10", part("S1337-1010BQ"), [
        s1337Page +
          "一级标题写 S1337-1010BQ。主图文件名是 k_s1227-1010bq_s1337-1010bq_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-High UV sensitivity: QE 75% (λ=200 nm)-Low capacitance。特性两条与 S1337-33BQ 相同。",
        "规格表感光面积 10 × 10 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 200 pA。上升时间典型 3 μs。终端电容典型 1100 pF。噪声等效功率典型 1.8×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名是 k_s1337-1010bq_sr_xx,0.jpg，和这一只的型号相同。外形图 data-asset 写成 KSPDA0111EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 37 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-1010bq_s1337-1010bq_pp_xx.jpg。typeNameSort 写成 S01337-1010BQ，1010 前面没有再补零。类型的值和显示都写成 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 200 pA。上升时间的值写成 3，显示写成 3 μs。截止频率是 --。终端电容 1100 pF。噪声等效功率的值写成 1.8×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Quartz，型号后面标 *。外形尺寸 15 × 16.5 mm、感光面积 10 × 10 mm、有效感光面积 100 印在 S1337-1010BQ 和 S1337-1010BR 中间。200 nm 光灵敏度最小 0.10 A/W、典型 0.12 A/W。短路电流写在这一行，最小 65 µA、典型 78 µA。暗电流最大 200 pA、上升时间 3 μs、终端电容 1100 pF、分流电阻最小 0.05 GΩ、典型 0.2 GΩ，印在两行中间，和 S1337-1010BR 共用。噪声等效功率 1.8 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0111EB，与产品页资源名相同。图上感光面写 10 × 10。窗标 Quartz window。" +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 190 to 1100，λ=200 nm 写 0.12，λ=960 nm 写 0.5。暗电流 200、终端电容 1100 和感光面积 10 × 10 印在这一对中间。型号后面有星号。" +
          placeS1337,
      ]),
      page("S1337-1010BR", "2015-10", part("S1337-1010BR"), [
        s1337Page +
          "一级标题写 S1337-1010BR。主图文件名是 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。name=\"description\" 和 og:description 都写 Features-Low capacitance。特性只有一条：Low capacitance。",
        "规格表感光面积 10 × 10 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.62 A/W。暗电流最大 200 pA。上升时间典型 3 μs。终端电容典型 1100 pF。噪声等效功率典型 1.5×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s1337Measure +
          "光谱图文件名是 KSPDB0306EA,0.jpg。外形图 data-asset 写成 KSPDA0112EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 38 行，newState 是 false。productName 写 Si photodiode。productExp 与 S1337-16BQ 相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。typeNameSort 写成 S01337-1010BR，1010 前面没有再补零。类型的值和显示都写成 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.62 A/W。暗电流 200 pA。上升时间的值写成 3，显示写成 3 μs。截止频率是 --。终端电容 1100 pF。噪声等效功率的值写成 1.5×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 239 KB。`,
        s1337SheetLead +
          "结构表这一只窗材料 Resin potting，型号后面没有星号。外形尺寸、感光面积和有效感光面积与 S1337-1010BQ 共用。200 nm 光灵敏度是横线。短路电流写在这一行，最小 70 µA、典型 95 µA。暗电流、上升时间、终端电容和分流电阻与 S1337-1010BQ 共用。噪声等效功率 1.5 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。外形图号 KSPDA0112EB，与产品页资源名相同。图上感光面写 10 × 10。" +
          s1337Resin +
          "约 2025 年 9 月的选型指南第 7 页把这一行的光谱范围写成 340 to 1100，λ=200 nm 是横线，λ=960 nm 写 0.62。型号后面没有星号。" +
          placeS1337,
      ]),
    ],
  },

  {
    id: "s1787",
    date: "2022-05",
    companyId: "hamamatsu",
    category: "product",
    title: "S1787：滨松塑料封装低暗电流 Si 光电二极管",
    summary:
      "产品页没有写发布日期。三只共用这一页。手册文件名是 s1787_series_kspd1038e.pdf。pdf 信息里的 Title 是 Si photodiode S1787 series。末页写 Information described in this material is current as of May 2022。最后一行写 Cat. No. KSPD1038E03 May 2022 DN，记为约 2022 年 5 月。索引 newState 都是 false，是第 39 行到第 41 行。",
    applications: [],
    technologies: [],
    models: [
      page("S1787-04", "2022-05", part("S1787-04"), [
        s1787Page +
          "一级标题写 S1787-04。主图文件名是 k_s1787-04_pp_xx.jpg。正文写 S1787-04 is a family of plastic package photodiodes that offer low dark current，没有 The，family 用的是单数型号。手册写 The S1787 series is a family。name=\"description\" 和 og:description 都把正文和特性接在一起，levels 后面的句号和 Features 之间没有空格，Features 和连字符之间没有空格，连字符后面也没有空格：Features-For visible range。特性写 For visible range。相关产品轮播按 S1787-08、S1787-12 排，跳过当前型号。图注写 Si photodiode 再加型号。",
        "规格表感光面积 2.8 × 2.4 mm，× 是 U+00D7，两边有空格。封装 Plastic。封装类别 With filter。冷却 Non-cooled。反向电压最大 10 V。光谱范围 320 to 730 nm。峰值 560 nm。光灵敏度典型 0.3 A/W。暗电流最大 10 pA。上升时间典型 2.5 μs，μ 是 U+03BC。终端电容典型 700 pF。" +
          s1787Measure +
          "光谱图是 svg，文件名 KSPDB0124EB.svg，三只相同。目录名是 03_15_new_Product_graph_svg。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0056EB.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 39 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1787-04_pp_xx.jpg。typeNameSort 写成 S01787-0004。类型的值和显示都写成 --。感光面积的值写成 2.8 × 2.4，显示写成 2.8 × 2.4 mm。光谱范围的值写成 320 to 730，显示才补上 nm。光灵敏度 0.3 A/W。暗电流 10 pA。上升时间的值写成 2.5，显示写成 2.5 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 700 pF。噪声等效功率的值和显示都写成 --。封装的值和显示都写成 Plastic。封装类别的值写成 With，显示写成 With filter。冷却的值和显示都写成 Non-cooled。手册标 467 KB。索引地址 ${index}。其余两只放在同一页。`,
        s1787SheetLead +
          "结构表这一只窗材料 V，visual-compensation filter。产品页封装类别写成 With filter。手册结构表感光面积写成 2.4 × 2.8，外形图和产品页写成 2.8 × 2.4。λp 光灵敏度 0.3 A/W。GaP LED 560 nm 是 0.3 A/W。He-Ne laser 633 nm 是 0.19 A/W。红外灵敏度比 10%。短路电流 0.65 µA，温度系数 -0.01 %/°C。暗电流、上升时间、终端电容和分流电阻与 S1787-08 共用中间那一栏。外形图号 KSPDA0056EB，与产品页资源名相同。" +
          `${guide}第 13 页标题写 Si photodiodes for general photometry/visible range，小标题写 For visible range，下面写 With visual-sensitive compensation filter。这一行光谱范围 320 to 730，峰值 560，λ=λp 写 0.3，暗电流 10，感光面积写成 2.4 × 2.8，封装 Plastic。光谱图号 KSPDB0277EE，图题方括号写 S1787-04, S16838-01MS，方括号内侧各有两个 U+2005。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。手册图号是 KSPDB0124EB。同一页还有 S16838-01MS，是别的前缀，没有放进这一页。页脚页码写 13 / 46。` +
          placeS1787,
      ]),
      page("S1787-08", "2022-05", part("S1787-08"), [
        s1787Page +
          "一级标题写 S1787-08。主图文件名是 k_s1787-08_-12_pp_xx.jpg，08 和 -12 之间有一个下划线。正文写 The S1787-08 is a plastic package photodiode that offers low dark current，photodiode 是单数，offers 有 s。手册写 family of plastic package photodiodes that offer，offer 没有 s。name=\"description\" 和 og:description 都写 Features-For visible to IR range，Features 和连字符之间没有空格，连字符后面也没有空格。特性写 For visible to IR range。相关产品轮播按 S1787-04、S1787-12 排，跳过当前型号。",
        "规格表感光面积 2.8 × 2.4 mm。封装 Plastic。封装类别 --。冷却 Non-cooled。反向电压最大 10 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.58 A/W。暗电流最大 10 pA。上升时间典型 2.5 μs。终端电容典型 700 pF。" +
          s1787Measure +
          "光谱图文件名仍是 KSPDB0124EB.svg。外形图 data-asset 仍是 KSPDA0056EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 40 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1787-08_-12_pp_xx.jpg。typeNameSort 写成 S01787-0008。类型的值和显示都写成 --。感光面积的值写成 2.8 × 2.4，显示写成 2.8 × 2.4 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 10 pA。上升时间的值写成 2.5，显示写成 2.5 μs。截止频率是 --。终端电容 700 pF。噪声等效功率是 --。封装 Plastic。封装类别的值和显示都写成 --。冷却 Non-cooled。手册标 467 KB。`,
        s1787SheetLead +
          "结构表这一只窗材料 R，resin coating。产品页封装类别是 --，没有写成 With filter。λp 光灵敏度 0.58 A/W。GaP LED 560 nm 是 0.33 A/W。He-Ne laser 633 nm 是 0.38 A/W。短路电流 5.6 µA。暗电流温度系数 1.12 times/°C 写在这一行。红外灵敏度比的横线和短路电流温度系数 0.1 印在这一只和 S1787-12 中间。暗电流、上升时间、终端电容和分流电阻与 S1787-04 共用中间那一栏。" +
          `${guide}第 14 页小标题写 For visible to near IR range。说明写 These photodiodes have sensitivity in the visible to near infrared range.。这一行写光谱范围 320 to 1100，峰值 960，λ=λp 写 0.58，暗电流 10，封装 Plastic。感光面积 2.4 × 2.8 印在 S1787-08 和 S2833-01 中间。光谱图号 KSPDB0286EF，图题还写 S4011-06DS、S2833-01/-04、S16765-01MS、S16838-02MS 和 S16840-02MS。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。手册图号是 KSPDB0124EB。这些是别的前缀，没有放进这一页。页脚页码写 14 / 46。` +
          placeS1787,
      ]),
      page("S1787-12", "2022-05", part("S1787-12"), [
        s1787Page +
          "一级标题写 S1787-12。主图文件名与 S1787-08 相同，是 k_s1787-08_-12_pp_xx.jpg。正文写 The S1787-12 is a plastic package photodiode that offers low dark current，photodiode 是单数，offers 有 s。手册写 family of plastic package photodiodes that offer，offer 没有 s。name=\"description\" 和 og:description 都写 Features-For visible to near IR range。特性写 For visible to near IR range。相关产品轮播按 S1787-04、S1787-08 排，跳过当前型号。",
        "规格表感光面积 2.8 × 2.4 mm。封装 Plastic。封装类别 With filter。冷却 Non-cooled。反向电压最大 10 V。光谱范围 320 to 1000 nm。峰值 650 nm。光灵敏度典型 0.35 A/W。暗电流最大 20 pA。上升时间典型 0.5 μs。终端电容典型 200 pF。" +
          s1787Measure +
          "光谱图文件名仍是 KSPDB0124EB.svg。外形图 data-asset 仍是 KSPDA0056EB.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 41 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1787-08_-12_pp_xx.jpg。typeNameSort 写成 S01787-0012。类型的值和显示都写成 --。感光面积的值写成 2.8 × 2.4，显示写成 2.8 × 2.4 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.35 A/W。暗电流 20 pA。上升时间的值写成 0.5，显示写成 0.5 μs。截止频率是 --。终端电容 200 pF。噪声等效功率是 --。封装 Plastic。封装类别的值写成 With，显示写成 With filter。冷却 Non-cooled。手册标 467 KB。`,
        s1787SheetLead +
          "结构表这一只窗材料 I，infrared-cutting filter。产品页封装类别写成 With filter。λp 光灵敏度 0.35 A/W。GaP LED 560 nm 是 0.3 A/W。He-Ne laser 633 nm 是 0.34 A/W。短路电流 2.3 µA。暗电流最大 20 pA。上升时间 0.5 µs。终端电容 200 pF。分流电阻最小 1 GΩ、典型 10 GΩ。红外灵敏度比的横线和短路电流温度系数 0.1 与 S1787-08 共用中间那一栏。" +
          `${guide}第 14 页把这一只放在 S1787-08 前面。峰值 650、λ=λp 写 0.35、感光面积 2.4 × 2.8 写在 S1787-12 这一行。光谱范围 320 to 1000、暗电流 20 和封装 Plastic 印在 S1787-12 和 S4797-01 中间。光谱图号 KSPDB0279EH，图题方括号写 S1787-12, S4797-01，方括号内侧各有两个 U+2005。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。手册图号是 KSPDB0124EB。S4797-01 是别的前缀，没有放进这一页。页脚页码写 14 / 46。` +
          placeS1787,
      ]),
    ],
  },

  {
    id: "s2281",
    date: "2025-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S2281：滨松带 BNC 连接器的 Si 光电二极管",
    summary:
      "产品页没有写发布日期。三只共用这一页。手册文件名是 s2281_series_kspd1044e.pdf。pdf 信息里的 Title 是 Si photodiodes S2281 series。末页写 Information described in this material is current as of March, 2025。最后一行写 Cat. No. KSPD1044E06 Mar. 2025 DN，记为约 2025 年 3 月。索引 newState 都是 false，是第 42 行到第 44 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2281", "2025-03", part("S2281"), [
        s2281Page +
          "一级标题写 S2281。主图文件名是 k_s2281_pp_xx.jpg。正文写 The S2281 is a Si photodiode sealed in a metal package with a BNC connector. This configuration allows easy connection to Hamamatsu C9329-01 photosensor amplifier. The large photosensitive area makes the S2281 well suited for optical power meters. Hamamatsu also provides E2573 BNC-BNC coaxial cable (length: 1 m) as an option.。手册写 The S2281 series，并写 the E2573。name=\"description\" 和 og:description 都把放大器写成 C9329，没有 -01，正文句号和 Features 之间没有空格，Features 和连字符之间没有空格，连字符后面有一个空格：Features- Metal package with BNC connector- High sensitivity- High reliability。相关产品轮播按 S2281-01、S2281-04 排，跳过当前型号。",
        "规格表感光面积 φ11.3 mm，φ 是 U+03C6。封装 Metal。封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 500 pA。上升时间典型 3 μs，μ 是 U+03BC。终端电容典型 1300 pF。噪声等效功率典型 1.8×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 是 U+00D7，两边没有空格。" +
          s2281Measure +
          "光谱图是 svg，data-asset 写成 KSPDB0090EA.svg，三只相同。目录名是 03_15_new_Product_graph_svg。coreimg 文件名写成小写 kspdb0090ea.svg。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0080EA.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kspda0080ea.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 42 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2281_pp_xx.jpg。typeNameSort 写成 S02281-0000。类型的值和显示都写成 --。感光面积的值写成 φ11.3，显示写成 φ11.3 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 500 pA。上升时间的值写成 3，显示写成 3 μs，μ 是 U+03BC。截止频率的值和显示都写成 --。终端电容 1300 pF。噪声等效功率的值写成 1.8×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装的值和显示都写成 Metal。封装类别的值和显示都写成 --。冷却的值和显示都写成 Non-cooled。手册标 399 KB。索引地址 ${index}。其余两只放在同一页。`,
        s2281SheetLead +
          "结构表这一只感光面积尺寸 ϕ11.3，有效感光面积 100 mm2。λp 是 960 nm。λp 光灵敏度 0.5 A/W。短路电流最小 64 µA、典型 80 µA。暗电流典型 50 pA、最大 500 pA。分流电阻最小 20 MΩ、典型 200 MΩ。上升时间 3 µs。终端电容 1300 pF。噪声等效功率 1.8 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。" +
          `${guide}第 8 页标题写 Si photodiodes for precision photometry，小标题写 For UV to near IR range。说明写 They are suitable for low-light-level detection in analysis and the like.。这一只型号后面是 *1 *2。光谱范围 190 to 1100、λ=200 nm 写 0.12、λ=960 nm 写 0.5、暗电流 500、终端电容 1300，印在 S2281 和 S2281-04 中间，没有印手册里的最小 0.10。感光面积写成 ϕ11.3，ϕ 是 U+03D5。封装 With BNC connector 拆成两行。光谱图号 KSPDB0422EB，图题方括号写 S2281 series，方括号内侧各有两个 U+2005。图注写 (Typ. Ta=25 °C)，° 是 U+00B0。曲线标 S2281-01 和 S2281/-04。手册图号是 KSPDB0090EA。同一页上方 S1337-21 的图号是 KSPDB0421EB，是别的前缀，没有放进这一页。注 *1 写 Refer to “Precautions against UV light exposure (P.45).”。注 *2 写 Weak photocurrent can be amplified with low noise by connecting to the photosensor amplifier C9329-01 (using BNC-BNC coaxial cable E2573).。页脚页码写 8 / 46。` +
          placeS2281,
      ]),
      page("S2281-01", "2025-03", part("S2281-01"), [
        s2281Page +
          "一级标题写 S2281-01。主图文件名与 S2281 相同，是 k_s2281_pp_xx.jpg。正文写 The S2281-01 is a Si photodiode sealed in a metal package with a BNC connector. This configuration allows easy connection to Hamamatsu C9329-01 photosensor amplifier (S2281-01 has a large terminal capacitance which may cause a gain peaking to occur when C9329-01 is used with the gain set to the \"M\" range.). The large photosensitive area makes the S2281-01 well suited for optical power meters. Hamamatsu also provides E2573 BNC-BNC coaxial cable (length: 1 m) as an option.。括号里的 S2281-01 前面没有 The，放大器写 C9329-01。M 两边是直引号。手册写 The S2281-01，放大器写 the C9329-01，M 两边是弯引号。name=\"description\" 和 og:description 把放大器写成 C9329，没有 -01，括号里也写成 when C9329 is used，M 写成 &#34;。Features 仍接在 option. 后面，没有空格。相关产品轮播按 S2281、S2281-04 排，跳过当前型号。",
        "规格表感光面积 φ11.3 mm。封装 Metal。封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1000 nm。峰值 720 nm。光灵敏度典型 0.36 A/W。暗电流最大 300 pA。上升时间典型 7 μs。终端电容典型 3200 pF。噪声等效功率典型 8.6×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2281Measure +
          "测量条件仍写 Photosensitivity: λ=960 nm，峰值栏是 720 nm。光谱图 data-asset 仍是 KSPDB0090EA.svg。外形图 data-asset 仍是 KSPDA0080EA.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 43 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2281_pp_xx.jpg。typeNameSort 写成 S02281-0001。类型的值和显示都写成 --。感光面积的值写成 φ11.3，显示写成 φ11.3 mm。光谱范围的值写成 190 to 1000，显示才补上 nm。光灵敏度 0.36 A/W。暗电流 300 pA。上升时间的值写成 7，显示写成 7 μs。截止频率是 --。终端电容 3200 pF。噪声等效功率的值写成 8.6×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal。封装类别 --。冷却 Non-cooled。手册标 399 KB。`,
        s2281SheetLead +
          "结构表这一只感光面积尺寸与 S2281 相同，ϕ11.3，有效感光面积 100 mm2。峰值 720 nm。λp 光灵敏度 0.36 A/W。短路电流最小 32 µA、典型 40 µA。暗电流典型 6 pA、最大 300 pA。分流电阻最小 30 MΩ、典型 1700 MΩ。上升时间 7 µs。终端电容 3200 pF。噪声等效功率 8.6 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。" +
          `${guide}第 9 页小标题仍写 For UV to near IR range，类型写 IR sensitivity suppressed type。说明写 These Si photodiodes have suppressed sensitivity in the infrared range and are suitable for low-light-level detection in analysis and the like.。这一行光谱范围 190 to 1000，λ=200 nm 写 0.12，没有印手册里的最小 0.10，λ=720 nm 写 0.36。暗电流 300。终端电容 3200。感光面积 ϕ11.3。型号后面只有一个星号。封装 With BNC 印在型号上一行，connector 印在型号下一行。注写 Refer to “Precautions against UV light exposure (P.45).”。光谱图号 KSPDB0308EA，图题方括号写 S1226-BK, S1227-BR。S2281-01 的曲线标在第 8 页 KSPDB0422EB 上。S1226 和 S1227 是别的前缀，没有放进这一页。页脚页码写 9 / 46。` +
          placeS2281,
      ]),
      page("S2281-04", "2025-03", part("S2281-04"), [
        s2281Page +
          "一级标题写 S2281-04。主图文件名是 k_s2281-04_pp_xx.jpg。正文写 The S2281-04 is a Si photodiode sealed in a metal package with a BNC connector. This configuration allows easy connection to Hamamatsu C9329-01 photosensor amplifier. The large photosensitive area makes S2281-04 well suited for optical power meters. Hamamatsu also provides E2573 BNC-BNC coaxial cable (length: 1 m) as an option.。makes 和型号之间没有 the。name=\"description\" 和 og:description 同样没有 the，并把放大器写成 C9329，没有 -01。Features 仍接在 option. 后面，没有空格。相关产品轮播按 S2281、S2281-01 排，跳过当前型号。",
        "规格表感光面积 φ7.98 mm。封装 Metal。封装类别 --。冷却 Non-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 500 pA。上升时间典型 3 μs。终端电容典型 1300 pF。噪声等效功率典型 1.8×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2281Measure +
          "光谱图 data-asset 仍是 KSPDB0090EA.svg。外形图 data-asset 仍是 KSPDA0080EA.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 44 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2281-04_pp_xx.jpg。typeNameSort 写成 S02281-0004。类型的值和显示都写成 --。感光面积的值写成 φ7.98，显示写成 φ7.98 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 500 pA。上升时间的值写成 3，显示写成 3 μs。截止频率是 --。终端电容 1300 pF。噪声等效功率的值写成 1.8×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal。封装类别 --。冷却 Non-cooled。手册标 399 KB。`,
        s2281SheetLead +
          "结构表这一只感光面积尺寸 ϕ7.98，有效感光面积 50 mm2。峰值 960 nm。λp 光灵敏度 0.5 A/W。短路电流最小 32 µA、典型 40 µA。暗电流典型 50 pA、最大 500 pA。分流电阻最小 20 MΩ、典型 200 MΩ。上升时间 3 µs。终端电容 1300 pF。噪声等效功率 1.8 × 10<sup>-14</sup> W/Hz<sup>1/2</sup>。200 nm 最小 0.10 A/W、典型 0.12 A/W 与另外两只相同。" +
          `${guide}第 8 页把这一只放在 S2281 下面，型号后面也是 *1 *2。感光面积写成 ϕ7.98。光谱范围、λ=200 nm 的 0.12、λ=960 nm 的 0.5、暗电流 500 和终端电容 1300 与 S2281 印在中间，没有再写一遍。` +
          placeS2281,
      ]),
    ],
  },

  {
    id: "s2386",
    date: "2019-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S2386：滨松可见到近红外通用测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。六只共用这一页。手册文件名是 s2386_series_kspd1035e.pdf。pdf 信息里的 Title 是 Si photodiode S2386 series。末页写 Information described in this material is current as of April 2019。最后一行写 Cat. No. KSPD1035E09 Apr. 2019 DN，记为约 2019 年 4 月。索引 newState 都是 false，是第 45 行到第 50 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2386-5K", "2019-04", part("S2386-5K"), [
        s2386Page +
          "一级标题写 S2386-5K。主图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg，文件名写的是 S1226 和 S1336。相关产品轮播按 S2386-18K、S2386-18L、S2386-44K 排，跳过当前型号，没有列出另外两只。",
        "规格表感光面积 2.4 × 2.4 mm，× 是 U+00D7，两边有空格。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 5 pA。上升时间典型 1.8 μs，μ 是 U+03BC。终端电容典型 730 pF。噪声等效功率典型 9.6×10<sup>-16</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s2386Measure +
          "光谱图是 svg，data-asset 写成 KSPDB0110EB.svg，六只相同。目录名是 03_15_new_Product_graph_svg。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0192EC.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。" +
          s1226Docs,
        `${indexIntro}这一行是第 45 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-5bk_s1336-5bk_pp_xx.jpg。typeNameSort 写成 S02386-0005K。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 5 pA。上升时间的值写成 1.8，显示写成 1.8 μs，μ 是 U+03BC。截止频率是 --。终端电容 730 pF。噪声等效功率的值写成 9.6×10<sup>-16</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 762 KB。索引地址 ${index}。其余五只放在同一页。`,
        s2386SheetLead +
          "结构表这一只外形 (3)/K，窗材料硼硅玻璃。封装没有单独印在这一行，TO-5 印在 S2386-44K 那一行。感光面积 2.4 × 2.4 mm。短路电流最小 4.4 μA、典型 6.0 μA。暗电流最大 5 pA。上升时间 1.8 μs。终端电容 730 pF。分流电阻最小 2 GΩ、典型 50 GΩ。噪声等效功率 9.6 × 10<sup>-16</sup> W/Hz<sup>1/2</sup>。外形图 (3) 图号 KSPDA0192ED，产品页资源名是 KSPDA0192EC。图上感光面写 2.4 × 2.4。感光面中心对管帽中心写成 -0.3≤X≤+0.3，-0.3≤Y≤+0.3。引线写成 0.45。" +
          `${guide}第 11 页标题写 Si photodiodes for precision photometry，小标题写 For visible to near IR range。说明写 These have sensitivity in the visible to infrared region, and achieve high sensitivity in the near infrared region.。这一行文本层以 1 开头，再写 S2386-5K。暗电流 5，终端电容 730，感光面积 2.4 × 2.4。封装没有印在这一行。下一行文本层以 2 开头，再写 320 to 1100 和 0.6，六只共用。页脚页码写 11 / 46。光谱图号 KSPDB0272EE。图注一处写 (Typ. Ta=25 °C)，° 是 U+00B0，另一处写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。手册图号是 KSPDB0110EB。` +
          placeS2281,
      ]),
      page("S2386-8K", "2019-04", part("S2386-8K"), [
        s2386Page +
          "一级标题写 S2386-8K。主图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。相关产品轮播按 S2386-18K、S2386-18L、S2386-44K 排，跳过当前型号。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal，封装类别 TO-8。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 50 pA。上升时间典型 10 μs。终端电容典型 4300 pF。噪声等效功率典型 2.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2386Measure +
          "光谱图 data-asset 仍是 KSPDB0110EB.svg。外形图 data-asset 写成 KSPDA0194EC.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 46 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-8bk_s1336-8bk_pp_xx.jpg。typeNameSort 写成 S02386-0008K。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 50 pA。上升时间的值写成 10，显示写成 10 μs。截止频率是 --。终端电容 4300 pF。噪声等效功率的值写成 2.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 762 KB。`,
        s2386SheetLead +
          "结构表这一只外形 (6)/K，窗材料硼硅玻璃。封装 TO-8。感光面积 5.8 × 5.8 mm。短路电流最小 26 μA、典型 33 μA。暗电流最大 50 pA。上升时间 10 μs。终端电容 4300 pF。分流电阻最小 0.2 GΩ、典型 10 GΩ。噪声等效功率 2.1 × 10<sup>-15</sup> W/Hz<sup>1/2</sup>。外形图 (6) 图号 KSPDA0194ED，产品页资源名是 KSPDA0194EC。图上感光面写 5.8 × 5.8。图上写 Index mark ( 1.4)，左括号后面有一个空格。感光面中心对管帽中心写成 -0.315≤X≤+0.485，-0.4≤Y≤+0.4。引线写成 0.45。" +
          `${guide}第 11 页这一行暗电流 50，终端电容 4300，感光面积 5.8 × 5.8，封装 TO-8。` +
          placeS2281,
      ]),
      page("S2386-18K", "2019-04", part("S2386-18K"), [
        s2386Page +
          "一级标题写 S2386-18K。主图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。相关产品轮播按 S2386-18L、S2386-44K、S2386-45K 排，跳过当前型号。S2386-45K 那张图的文件名仍是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal，封装类别 TO-18。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 2 pA。上升时间典型 0.4 μs。终端电容典型 140 pF。噪声等效功率典型 6.8×10<sup>-16</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2386Measure +
          "光谱图 data-asset 仍是 KSPDB0110EB.svg。外形图 data-asset 写成 KSPDA0191ED.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 47 行，newState 是 false。productName 写 Si photodiode。productExp 写 Visible to near IR sensitivity, general-purpose photometry，和二级标题不同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-18bk_s1336-18bk_pp_xx.jpg。typeNameSort 写成 S02386-0018K。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 2 pA。上升时间的值写成 0.4，显示写成 0.4 μs。截止频率是 --。终端电容 140 pF。噪声等效功率的值写成 6.8×10<sup>-16</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-18。冷却 Non-cooled。手册标 762 KB。`,
        s2386SheetLead +
          "结构表这一只外形 (1)/K，窗材料硼硅玻璃。封装 TO-18 和感光面积 1.1 × 1.1 mm 印在这一只和 S2386-18L 中间。短路电流最小 1 μA、典型 1.3 μA。暗电流最大 2 pA、上升时间 0.4 μs、终端电容 140 pF、分流电阻最小 5 GΩ、典型 100 GΩ、噪声等效功率 6.8 × 10<sup>-16</sup> W/Hz<sup>1/2</sup>，印在两行中间，和 S2386-18L 共用。外形图 (1) 图号 KSPDA0191ED，与产品页资源名相同。图上感光面写 Photosensitive area 1.1 × 1.1，另写 Photosensitive surface。感光面中心对管帽中心写成 -0.3≤X≤+0.3，-0.3≤Y≤+0.3。引线写成 0.45。" +
          `${guide}第 11 页暗电流 2、终端电容 140、感光面积 1.1 × 1.1 和封装 TO-18 印在 S2386-18K 和 S2386-18L 中间。` +
          placeS2281,
      ]),
      page("S2386-18L", "2019-04", part("S2386-18L"), [
        s2386Page +
          "一级标题写 S2386-18L。主图文件名是 k_s2386-18l_pp_xx.jpg。相关产品轮播按 S2386-18K、S2386-44K、S2386-45K 排，跳过当前型号。",
        "规格表感光面积 1.1 × 1.1 mm。封装 Metal。封装类别写成 TO-18，后面是 br，再写 with lens。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 2 pA。上升时间典型 0.4 μs。终端电容典型 140 pF。噪声等效功率典型 6.8×10<sup>-16</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2386Measure +
          "光谱图 data-asset 仍是 KSPDB0110EB.svg。外形图 data-asset 写成 KSPDA0048EF.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 48 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2386-18l_pp_xx.jpg。typeNameSort 写成 S02386-0018L。类型的值和显示都写成 --。感光面积的值写成 1.1 × 1.1，显示写成 1.1 × 1.1 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 2 pA。上升时间的值写成 0.4，显示写成 0.4 μs。截止频率是 --。终端电容 140 pF。噪声等效功率的值写成 6.8×10<sup>-16</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal。封装类别的值写成 TO-18<br>with，显示写成 TO-18<br>with lens。冷却 Non-cooled。手册标 762 KB。`,
        s2386SheetLead +
          "结构表这一只外形 (2)/L，窗材料是带透镜的硼硅玻璃。封装和感光面积与 S2386-18K 共用。短路电流最小 4 μA、典型 6.5 μA。暗电流、上升时间、终端电容、分流电阻和噪声等效功率与 S2386-18K 共用中间那一栏。外形图 (2) 图号 KSPDA0048EF，与产品页资源名相同。图上感光面写 Active area 1.1 × 1.1，另写 Photosensitive surface。引线那一行文本层写成 ġġġıįĵĶ，ġ 是 U+0121，ı 是 U+0131，į 是 U+012F，ĵ 是 U+0135，Ķ 是 U+0136，没有写成 0.45。感光面中心对管帽中心写成 -0.3≤X≤+0.3，-0.3≤Y≤+0.3。" +
          `${guide}第 11 页这一行没有再写暗电流、终端电容、感光面积和封装，和 S2386-18K 共用中间那一栏。指南没有写 with lens。` +
          placeS2281,
      ]),
      page("S2386-44K", "2019-04", part("S2386-44K"), [
        s2386Page +
          "一级标题写 S2386-44K。主图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。相关产品轮播按 S2386-18K、S2386-18L、S2386-45K 排，跳过当前型号。",
        "规格表感光面积 3.6 × 3.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 20 pA。上升时间典型 3.6 μs。终端电容典型 1600 pF。噪声等效功率典型 1.4×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2386Measure +
          "光谱图 data-asset 仍是 KSPDB0110EB.svg。外形图 data-asset 写成 KSPDA0193EC.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 49 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。typeNameSort 写成 S02386-0044K。类型的值和显示都写成 --。感光面积的值写成 3.6 × 3.6，显示写成 3.6 × 3.6 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 20 pA。上升时间的值写成 3.6，显示写成 3.6 μs。截止频率是 --。终端电容 1600 pF。噪声等效功率的值写成 1.4×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 762 KB。`,
        s2386SheetLead +
          "结构表这一只外形 (4)/K，窗材料硼硅玻璃。封装 TO-5 印在这一行。感光面积 3.6 × 3.6 mm。短路电流最小 9.6 μA、典型 12 μA。暗电流最大 20 pA。上升时间 3.6 μs。终端电容 1600 pF。分流电阻最小 0.5 GΩ。典型分流电阻 25 GΩ 和噪声等效功率 1.4 × 10<sup>-15</sup> W/Hz<sup>1/2</sup> 印在这一只和 S2386-45K 中间。外形图 (4) 图号 KSPDA0193ED，产品页资源名是 KSPDA0193EC。图上感光面写 3.6 × 3.6。感光面中心对管帽中心写成 -0.6≤X≤0，0 前面没有加号，下一行 -0.3≤Y≤+0.3。引线写成 0.45。" +
          `${guide}第 11 页这一行暗电流 20，终端电容 1600，感光面积 3.6 × 3.6，封装 TO-5。` +
          placeS2281,
      ]),
      page("S2386-45K", "2019-04", part("S2386-45K"), [
        s2386Page +
          "一级标题写 S2386-45K。主图文件名与 S2386-44K 相同，是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。相关产品轮播按 S2386-18K、S2386-18L、S2386-44K 排，跳过当前型号。",
        "规格表感光面积 3.9 × 4.6 mm。封装 Metal，封装类别 TO-5。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.6 A/W。暗电流最大 30 pA。上升时间典型 5.5 μs。终端电容典型 2300 pF。噪声等效功率典型 1.4×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2386Measure +
          "光谱图 data-asset 仍是 KSPDB0110EB.svg。外形图 data-asset 写成 KSPDA0178EE,0.svg，逗号在文件名里。coreimg 路径把逗号写成 %2C，文件名是小写 kspda0178ee%2C0.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 50 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1226-44bk_s1336-44bk_pp_xx.jpg。typeNameSort 写成 S02386-0045K。类型的值和显示都写成 --。感光面积的值写成 3.9 × 4.6，显示写成 3.9 × 4.6 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.6 A/W。暗电流 30 pA。上升时间的值写成 5.5，显示写成 5.5 μs。截止频率是 --。终端电容 2300 pF。噪声等效功率的值写成 1.4×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 762 KB。`,
        s2386SheetLead +
          "结构表这一只外形 (5)/K，窗材料硼硅玻璃。封装没有再写，TO-5 印在 S2386-44K 那一行。感光面积 3.9 × 4.6 mm。短路电流最小 12 μA、典型 17 μA。暗电流最大 30 pA。上升时间 5.5 μs。终端电容 2300 pF。分流电阻最小 0.3 GΩ。典型分流电阻和噪声等效功率与 S2386-44K 共用中间那一栏。外形图 (5) 图号 KSPDA0178EF，产品页资源名是 KSPDA0178EE,0。图上感光面写 3.9 × 4.6。感光面中心对管帽中心写成 -0.7≤X≤ - 0.1，减号两边各有一个空格，下一行 -0.3≤Y≤+0.3。引线写成 0.45。" +
          `${guide}第 11 页这一行暗电流 30，终端电容 2300，感光面积 3.9 × 4.6。封装没有再写。` +
          placeS2281,
      ]),
    ],
  },

  {
    id: "s2387",
    date: "2022-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S2387：滨松可见到红外通用测光 Si 光电二极管",
    summary:
      "产品页没有写发布日期。四只共用这一页。产品页写 Not recommended for new designs，并推荐后继系列 S12915。手册文件名是 s2387_series_kspd1033e.pdf。pdf 信息里的 Title 是 Si photodiodes S2387 series。末页写 Information described in this material is current as of July 2022。最后一行写 Cat. No. KSPD1033E06 Jul. 2022 DN，记为约 2022 年 7 月。索引 newState 都是 false，是第 51 行到第 54 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2387-16R", "2022-07", part("S2387-16R"), [
        s2387Page +
          "一级标题写 S2387-16R。主图 src 写成 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg.thumb.252.252.jpg，pp 和 xx 之间是句点。正文写 S2387-16R: Not recommended for new designs. 下一行写 We recommend the successor, S12915 series when purchasing a new product. 再下一行写 For more information, refer to the following webpage.。name=\"description\" 和 og:description 都没有第一句，把 product. 和 For 接在一起，中间没有空格，句末再写 Si photodiode S12915 Series - Successor to S2387 series S12915-16R，Series 的 S 是大写。产品详情链接写 /jp/en/product/optical-sensors/photodiodes/si-photodiodes/S12915-16R.html，target 是 _blank。",
        "产品页没有规格表。索引这一行感光面积写成 5.9 × 1.1 mm，× 是 U+00D7。封装 Ceramic，封装类别 --。冷却 Non-cooled。光谱范围 340 to 1100 nm。光灵敏度 0.58 A/W。暗电流 5 pA。上升时间 1.8 μs，μ 是 U+03BC。终端电容 730 pF。噪声等效功率 9.9×10<sup>-16</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。",
        `${indexIntro}这一行是第 51 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-16br_s1337-16br_s12915-16r_pp.xx.jpg。typeNameSort 写成 S02387-0016R。类型的值和显示都写成 --。感光面积的值写成 5.9 × 1.1，显示写成 5.9 × 1.1 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 5 pA。上升时间的值写成 1.8，显示写成 1.8 μs，μ 是 U+03BC。截止频率是 --。终端电容 730 pF。噪声等效功率的值写成 9.9×10<sup>-16</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 523 KB。索引地址 ${index}。其余三只放在同一页。`,
        s2387SheetLead +
          "结构表这一只外形尺寸 2.7 × 15 mm，感光面积 1.1 × 5.9 mm，有效感光面积 6.4 mm2。索引把感光面积写成 5.9 × 1.1。短路电流最小 4.4 µA、典型 6.0 µA。暗电流最大 5 pA、上升时间 1.8 µs、终端电容 730 pF、分流电阻最小 2 GΩ、典型 50 GΩ、噪声等效功率 9.9 × 10-16，印在这一只和 S2387-33R 中间。外形图题写 Dimensional outline (S1337-16BR, S2387-16R, unit: mm)。图号 KSPDA0106EB。图上感光面写 1.1 × 5.9。图上还有 Hole 和 (2 ×) 0.8。" +
          `${guide}第 11 页列出 S2386，第 12 页列出 S12915-16R、S12915-33R、S12915-66R 和 S12915-1010R，没有写出 S2387。第 12 页页脚写 12 / 46。S12915-16R 的感光面积写成 1.0 × 6.0，光灵敏度写成 0.64。图题方括号写 S12915 series，方括号内侧各有两个 U+2005。图号 KSPDB0363EA。` +
          placeS2387,
      ]),
      page("S2387-33R", "2022-07", part("S2387-33R"), [
        s2387Page +
          "一级标题写 S2387-33R。主图 src 写成 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg.thumb.252.252.jpg。正文把型号写成 S2387-33R。name=\"description\" 和 og:description 句末写 S12915-33R。产品详情链接写 /jp/en/product/optical-sensors/photodiodes/si-photodiodes/S12915-33R.html，target 是 _blank。",
        "产品页没有规格表。索引这一行感光面积写成 2.4 × 2.4 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。光谱范围 340 to 1100 nm。光灵敏度 0.58 A/W。暗电流 5 pA。上升时间 1.8 μs。终端电容 730 pF。噪声等效功率 9.9×10<sup>-16</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。",
        `${indexIntro}这一行是第 52 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-33br_s1337-33br_s12915-33r_pp_xx.jpg。typeNameSort 写成 S02387-0033R。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 5 pA。上升时间的值写成 1.8，显示写成 1.8 μs。截止频率是 --。终端电容 730 pF。噪声等效功率的值写成 9.9×10<sup>-16</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 523 KB。`,
        s2387SheetLead +
          "结构表这一只外形尺寸 6 × 7.6 mm，感光面积 2.4 × 2.4 mm，有效感光面积 5.7 mm2。短路电流最小 4.4 µA、典型 5.8 µA。暗电流、上升时间、终端电容、分流电阻和噪声等效功率与 S2387-16R 共用中间那一栏。外形图题写 Dimensional outline (S1337-33BR, S2387-33R, unit: mm)。图号 KSPDA0108EB。图上感光面写 2.4 × 2.4。" +
          `${guide}第 12 页 S12915-33R 的感光面积写成 2.4 × 2.4，终端电容写成 680。这一页没有写出 S2387-33R。` +
          placeS2387,
      ]),
      page("S2387-66R", "2022-07", part("S2387-66R"), [
        s2387Page +
          "一级标题写 S2387-66R。主图 src 写成 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg.thumb.252.252.jpg。正文把型号写成 S2387-66R。name=\"description\" 和 og:description 句末写 S12915-66R。产品详情链接写 /jp/en/product/optical-sensors/photodiodes/si-photodiodes/S12915-66R.html，target 是 _blank。",
        "产品页没有规格表。索引这一行感光面积写成 5.8 × 5.8 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。光谱范围 340 to 1100 nm。光灵敏度 0.58 A/W。暗电流 50 pA。上升时间 10 μs。终端电容 4300 pF。噪声等效功率 2.2×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。",
        `${indexIntro}这一行是第 53 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-66br_s1337-66br_s12915-66r_pp_xx.jpg。typeNameSort 写成 S02387-0066R。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 50 pA。上升时间的值写成 10，显示写成 10 μs。截止频率是 --。终端电容 4300 pF。噪声等效功率的值写成 2.2×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 523 KB。`,
        s2387SheetLead +
          "结构表这一只外形尺寸 8.9 × 10.1 mm，感光面积 5.8 × 5.8 mm，有效感光面积 33 mm2。短路电流最小 24 µA、典型 31 µA。暗电流最大 50 pA。上升时间 10 µs。终端电容 4300 pF。分流电阻最小 0.2 GΩ、典型 10 GΩ。噪声等效功率文本层写成 2.2 × 10-15。外形图题写 Dimensional outline (S1337-66BR, S2387-66R, unit: mm)。图号 KSPDA0110EB。图上感光面写 5.8 × 5.8。" +
          `${guide}第 12 页 S12915-66R 的终端电容写成 4000，感光面积写成 5.8 × 5.8。暗电流 50 印在 S12915-33R 和 S12915-66R 中间。这一页没有写出 S2387-66R。` +
          placeS2387,
      ]),
      page("S2387-1010R", "2022-07", part("S2387-1010R"), [
        s2387Page +
          "一级标题写 S2387-1010R。主图 src 写成 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg.thumb.252.252.jpg。正文把型号写成 S2387-1010R。name=\"description\" 和 og:description 句末写 S12915-1010R。产品详情链接写 /jp/en/product/optical-sensors/photodiodes/si-photodiodes/S12915-1010R.html，target 是 _blank。",
        "产品页没有规格表。索引这一行感光面积写成 10 × 10 mm。封装 Ceramic，封装类别 --。冷却 Non-cooled。光谱范围 340 to 1100 nm。光灵敏度 0.58 A/W。暗电流 200 pA。上升时间 33 μs。终端电容 12000 pF。噪声等效功率 3.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。",
        `${indexIntro}这一行是第 54 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s1227-1010br_s1337-1010br_s12915-1010r_pp_xx.jpg。typeNameSort 写成 S02387-1010R，1010 前面没有再补零。类型的值和显示都写成 --。感光面积的值写成 10 × 10，显示写成 10 × 10 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 200 pA。上升时间的值写成 33，显示写成 33 μs。截止频率是 --。终端电容 12000 pF。噪声等效功率的值写成 3.1×10<sup>-15</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 523 KB。`,
        s2387SheetLead +
          "结构表这一只外形尺寸 15 × 16.5 mm，感光面积 10 × 10 mm，有效感光面积 100 mm2。短路电流最小 68 µA、典型 91 µA。暗电流最大 200 pA。上升时间 33 µs。终端电容 12000 pF。分流电阻最小 0.05 GΩ、典型 5 GΩ。噪声等效功率文本层写成 3.1 × 10-15。外形图题写 Dimensional outline (S1337-1010BR, S2387-1010R, unit: mm)。图号 KSPDA0112EB。图上感光面写 10 × 10。" +
          `${guide}第 12 页 S12915-1010R 的终端电容写成 13000，感光面积写成 10 × 10。这一页没有写出 S2387-1010R。` +
          placeS2387,
      ]),
    ],
  },

  {
    id: "s2506",
    date: "2024-05",
    companyId: "hamamatsu",
    category: "product",
    title: "S2506：滨松塑料单列直插封装 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s2506-02_etc_kpin1048e.pdf。pdf 信息里的 Title 是 Si PIN photodiodes S2506/S6775/S6967 series。末页写 Information described in this material is current as of May 2024。最后一行写 Cat. No. KPIN1048E12，后面是两个空格，再写 May 2024 DN，记为约 2024 年 5 月。索引 newState 都是 false，是第 55 行和第 56 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2506-02", "2024-05", part("S2506-02"), [
        s2506Page +
          "一级标题写 S2506-02。主图 src 写成 k_s2506-02_pp_xx.jpg.thumb.252.252.jpg。alt 写 s2506-02 product photo。正文写 S2506-02 is a Si PIN photodiode with large active areas, molded into a clear plastic SIP for detecting visible to near infrared range.。手册写 are，并写 clear or visible-cut。name=\"description\" 和 og:description 都把 range. 和 Features 接在一起，中间没有空格，Features 和连字符之间没有空格，连字符后面是一个空格：Features- Visible to near infrared range- Plastic package: 7 × 7.8 mm- Photosensitive area size: 2.77 × 2.77 mm。可见特性写在同一个 p 里，Features 是粗体，后面是 br。每条另起一行，行首是连字符，后面是一个普通空格：Visible to near infrared range、Plastic package: 7 × 7.8 mm、Photosensitive area size: 2.77 × 2.77 mm。相关产品轮播只列 S2506-04，图注写 Si PIN photodiode S2506-04，alt 写 Si photodiode product photo，文件名是 k_s2506-04_pp_xx.jpg。",
        "规格表感光面积 2.77 × 2.77 mm，× 是 U+00D7，两边有空格。封装 Plastic。封装类别 --。冷却 Non-cooled。反向电压最大 20 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.48 A/W。暗电流最大 10000 pA。截止频率典型 25 MHz。终端电容典型 15 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s2506Measure +
          "光谱图是 jpg，data-asset 写成 k_s2506-02_sr_xx,0.jpg，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s2506-02-sr-xx%2C0.jpeg，下划线换成连字符。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0084EF.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0084ef.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 55 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与二级标题相同。thumbAlt 写 s2506-02 product photo。缩略图文件名是 k_s2506-02_pp_xx.jpg。typeNameSort 写成 S02506-0002。类型的值和显示都写成 --。感光面积的值写成 2.77 × 2.77，显示写成 2.77 × 2.77 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.48 A/W。暗电流 10000 pA。上升时间的值和显示都写成 --。截止频率的值写成 25，显示写成 25 MHz。终端电容 15 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Plastic，封装类别 --。冷却 Non-cooled。手册标 659 KB。索引地址 ${index}。另一只放在同一页。`,
        s2506SheetLead +
          "结构表这一只光谱范围 320 to 1100。660 nm 光灵敏度 0.4 A/W、780 nm 的 0.48 A/W、830 nm 的 0.5 A/W 写在这一行。短路电流 7.3 µA 写在这一行。峰值、λp 光灵敏度、暗电流、截止频率、终端电容和噪声等效功率与 S2506-04 共用中间那一栏。产品页光灵敏度 0.48 A/W 对得上 780 nm 这一列，测量条件也写 λ=780 nm。手册 λp 是 0.56 A/W。产品页暗电流只写最大 10000 pA，手册最大是 10 nA，典型是 0.1 nA。" +
          `${guide}第 17 页标题写 High-speed response Si PIN photodiodes。小标题写 Cutoff frequency，下一行写 10 MHz to less than 100 MHz。说明写 A wide variety of types are provided including a low-cost plastic package type and a visible-cut type.。这一行 λ=660 nm 写 0.4，λ=780 nm 写 0.48。截止频率 25、终端电容 15 和感光面积 2.77 × 2.77 印在 S2506-02 和 S2506-04 中间，截止频率和终端电容都标 (VR=12 V)。这一行没有再写封装。页脚页码写 17 / 46。光谱图号 KPINB0354EC，图题方括号写 S4707-01, S2506 series，方括号内侧各有两个 U+2005。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。曲线标 S2506-02、S2506-04 和 S4707-01。QE=100%，百分号前面没有空格。手册图号是 KPINB0348EB。同一页还有 S6775、S6967、S8385、S8729 和 S4707-01，是别的前缀，没有放进这一页。` +
          placeS2506,
      ]),
      page("S2506-04", "2024-05", part("S2506-04"), [
        s2506Page +
          "一级标题写 S2506-04。主图 src 写成 k_s2506-04_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。正文写 S2506-04 is a Si PIN photodiode with large active areas, molded into a visible-cut plastic SIP for detecting near infrared range only.。手册把 visible-cut 和 clear 写在同一句。name=\"description\" 和 og:description 都把 only. 和 Features 接在一起，中间没有空格：Features- Visible-cut- Plastic package: 7 × 7.8 mm- Photosensitive area size: 2.77 × 2.77 mm。可见特性第一条写 Visible-cut。相关产品轮播只列 S2506-02，图注写 Si PIN photodiode S2506-02，alt 写 s2506-02 product photo，文件名是 k_s2506-02_pp_xx.jpg。",
        "规格表感光面积 2.77 × 2.77 mm。封装 Plastic。封装类别 --。冷却 Non-cooled。反向电压最大 20 V。光谱范围 760 to 1100 nm。峰值 960 nm。光灵敏度典型 0.56 A/W。暗电流最大 10000 pA。截止频率典型 25 MHz。终端电容典型 15 pF。噪声等效功率典型 1.0×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2506Measure +
          "测量条件仍写 Photosensitivity: λ=780 nm。光谱图 data-asset 仍是 k_s2506-02_sr_xx,0.jpg，文件名写的是 S2506-02。外形图 data-asset 仍是 KPINA0084EF.svg。" +
          s1226Docs,
        `${indexIntro}这一行是第 56 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2506-04_pp_xx.jpg。typeNameSort 写成 S02506-0004。类型的值和显示都写成 --。感光面积的值写成 2.77 × 2.77，显示写成 2.77 × 2.77 mm。光谱范围的值写成 760 to 1100，显示才补上 nm。光灵敏度 0.56 A/W。暗电流 10000 pA。上升时间是 --。截止频率的值写成 25，显示写成 25 MHz。终端电容 15 pF。噪声等效功率的值写成 1.0×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Plastic，封装类别 --。冷却 Non-cooled。手册标 659 KB。`,
        s2506SheetLead +
          "结构表这一只光谱范围 760 to 1100。660 nm 和 780 nm 是横线。830 nm 光灵敏度 0.25 A/W 写在这一行。短路电流 4.1 µA 写在这一行。产品页光灵敏度写成 0.56 A/W，对得上印在两行中间的 λp，测量条件仍写 λ=780 nm，这一列在手册里是横线。产品页峰值写成 960 nm，手册也印在两行中间。" +
          `${guide}第 17 页这一行写 0.25 (λ=830 nm) 和 0.56 (λ=λp)。封装写成 Plastic，下一行写 (visible-cut type)。截止频率、终端电容和感光面积与 S2506-02 印在中间，没有再写一遍。` +
          placeS2506,
      ]),
    ],
  },

  {
    id: "s2592",
    date: "2023-02",
    companyId: "hamamatsu",
    category: "product",
    title: "S2592：滨松热电制冷、紫外到近红外弱光探测 Si 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s2592-03_etc_kspd1003e.pdf。pdf 信息里的 Title 是 Si photodiodes S2592 series。末页写 Information described in this material is current as of February 2023。最后一行写 Cat. No. KSPD1003E12，后面是两个空格，再写 Feb. 2023 DN，记为约 2023 年 2 月。索引 newState 都是 false，是第 57 行和第 58 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2592-03", "2023-02", part("S2592-03"), [
        s2592Page +
          "一级标题写 S2592-03。主图 src 写成 k_s2592-03_-04_pp_xx.jpg.thumb.252.252.jpg。正文写 The S2592-03 combines a UV to near infrared Si photodiode with a thermoelectric cooler. A thermistor is also included in the same package to sense the Si photodiode chip temperature. This allows stable operation over long periods of time, making this sensor suitable for low-light-level detection where a high S/N is required. The S2592-03 is hermetically sealed in a TO-8 package.。手册写 The S2592 series sensors combine，并写 these sensors，还写 C1103-04 和 A3179 series。name=\"description\" 和 og:description 都把 package. 和 Features 接上，中间有一个空格，Features 和连字符之间没有空格，连字符后面是一个空格：Features- High S/N- High UV sensitivity- Built-in thermistor allows stable operation。相关产品轮播只列 S2592-04，链接是 /us/en/，没有 target。图注写 Si photodiode S2592-04，alt 写 Si photodiode product photo，文件名仍是 k_s2592-03_-04_pp_xx.jpg。",
        "规格表感光面积 2.4 × 2.4 mm，× 是 U+00D7，两边有空格。封装 Metal。封装类别 TO-8。冷却 TE-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 38 pA。上升时间典型 0.2 μs，μ 是 U+03BC。终端电容典型 65 pF。噪声等效功率典型 8.1×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s2592Measure +
          "光谱图是 jpg，data-asset 写成 k_s2592-03_sr_xx,0.jpg，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s2592-03-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494117433。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 k_s2592-03_do_xx,0.jpg。目录名是 03_03_Dimensional Outline，Dimensional 和 Outline 之间有一个空格。coreimg 文件名写成小写 k-s2592-03-do-xx%2C0.jpeg，时间戳 1635494276682。" +
          s1226Docs,
        `${indexIntro}这一行是第 57 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2592-03_-04_pp_xx.jpg。typeNameSort 写成 S02592-0003。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.4，显示写成 2.4 × 2.4 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 38 pA。上升时间的值写成 0.2，显示写成 0.2 μs，μ 是 U+03BC。截止频率是 --。终端电容 65 pF。噪声等效功率的值写成 8.1×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 TE-cooled。手册标 916 KB。索引地址 ${index}。另一只放在同一页。`,
        s2592SheetLead +
          "结构表这一只感光面积 2.4 × 2.4 mm。短路电流 5 µA。暗电流最大 10 pA。上升时间 0.2 µs。终端电容 65 pF。分流电阻 1 GΩ。噪声等效功率文本层写成 8.1 × 10-15。产品页光灵敏度写成 0.5 A/W，测量条件写 λ=960 nm。手册 λp 是 0.42 A/W，峰值也是 960 nm。产品页暗电流写成 38 pA，手册这一行是 10 pA。" +
          `${guide}第 28 页标题写 TE-cooled type Si photodiodes。说明写 These photosensors combine a UV to near infrared Si photodiode with a TE-cooler and deliver low dark current.。这一行感光面积 2.4 × 2.4，暗电流 10，噪声等效功率 8.1 × 10-15。制冷温度 35、光谱范围 190 to 1100、峰值 960 和封装 TO-8 印在两只中间。表头 Δ 是 U+0394。这一页没有光灵敏度栏。页脚页码写 28 / 46。光谱图号 KSPDB0182EC，并写 QE=100%，百分号前面没有空格。星号写 Refer to “Precautions against UV light exposure (P.45).”，引号是弯引号。暗电流对得上手册的 10 pA，对不上产品页和索引的 38 pA。` +
          placeS2592,
      ]),
      page("S2592-04", "2023-02", part("S2592-04"), [
        s2592Page +
          "一级标题写 S2592-04。主图 src 仍写成 k_s2592-03_-04_pp_xx.jpg.thumb.252.252.jpg。正文把型号写成 S2592-04，其余句子和 S2592-03 相同，仍写 hermetically sealed in a TO-8 package。name=\"description\" 和 og:description 同样把 package. 和 Features 接上，中间有一个空格。相关产品轮播只列 S2592-03，链接是 /us/en/，没有 target。图注写 Si photodiode S2592-03，alt 写 Si photodiode product photo。",
        "规格表感光面积 5.8 × 5.8 mm。封装 Metal。封装类别 TO-8。冷却 TE-cooled。反向电压最大 5 V。光谱范围 190 to 1100 nm。峰值 960 nm。光灵敏度典型 0.5 A/W。暗电流最大 200 pA。上升时间典型 1 μs。终端电容典型 380 pF。噪声等效功率典型 1.3×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2592Measure +
          "光谱图 data-asset 仍是 k_s2592-03_sr_xx,0.jpg，文件名写的是 S2592-03。外形图 data-asset 仍是 k_s2592-03_do_xx,0.jpg。coreimg 路径改到 S2592-04，文件名仍是 k-s2592-03-sr-xx%2C0.jpeg 和 k-s2592-03-do-xx%2C0.jpeg。" +
          s1226Docs,
        `${indexIntro}这一行是第 58 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2592-03_-04_pp_xx.jpg。typeNameSort 写成 S02592-0004。类型的值和显示都写成 --。感光面积的值写成 5.8 × 5.8，显示写成 5.8 × 5.8 mm。光谱范围的值写成 190 to 1100，显示才补上 nm。光灵敏度 0.5 A/W。暗电流 200 pA。上升时间的值写成 1，显示写成 1 μs。截止频率是 --。终端电容 380 pF。噪声等效功率的值写成 1.3×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 TE-cooled。手册标 916 KB。`,
        s2592SheetLead +
          "结构表这一只感光面积 5.8 × 5.8 mm。短路电流 28 µA。暗电流最大 25 pA。上升时间 1 µs。终端电容 380 pF。分流电阻 0.4 GΩ。噪声等效功率文本层写成 1.3 × 10-14。产品页光灵敏度仍写成 0.5 A/W。手册 λp 的 0.42 A/W 印在两行中间。产品页暗电流写成 200 pA，手册这一行是 25 pA。" +
          `${guide}第 28 页这一行感光面积 5.8 × 5.8，暗电流 25，噪声等效功率 1.3 × 10-14。制冷温度、光谱范围、峰值和封装与 S2592-03 印在中间，没有再写一遍。暗电流对得上手册的 25 pA，对不上产品页和索引的 200 pA。` +
          placeS2592,
      ]),
    ],
  },

  {
    id: "s2744",
    date: "2011-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S2744：滨松大感光面 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s2744-08_etc_kpin1049e.pdf。pdf 信息里的 Title 是 Si PIN photodiode S2744/S3588-08/-09。末页写 Information described in this material is current as of October, 2011。最后一行写 Cat. No. KPIN1049E06 Oct. 2011 DN，记为约 2011 年 10 月。索引 newState 都是 false，是第 59 行和第 60 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2744-08", "2011-10", part("S2744-08"), [
        s2744Page +
          "一级标题写 S2744-08。主图 src 写成 k_s2744-08_pp_xx.jpg.thumb.252.252.jpg。name=\"description\" 和 og:description 都写 Features- Sensitivity matching with BGO and CsI(TI) scintillators- Low capacitance- High-speed response- High stability- Good energy resolution。Features 和连字符之间没有空格，连字符后面是一个空格。相关产品轮播按 S2744-09、S3204-08、S3204-09、S3584-08、S3584-09、S3588-08、S3588-09 排。链接是 /us/en/product/optical-sensors/photodiodes/si-photodiodes/ 再加型号，没有 target。图注写 Si PIN photodiode 再加型号。S3204-08 的 alt 写 S3204-08 product photo，其余 alt 写 Si photodiode product photo。S3204、S3584 和 S3588 是别的前缀，没有放进这一页。",
        "规格表感光面积 20 × 10 mm，× 是 U+00D7，两边有空格。封装 Ceramic。封装类别这一格是空的。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 10000 pA。截止频率典型 25 MHz。终端电容典型 85 pF。噪声等效功率典型 4.7×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s2744Measure +
          "光谱图是 jpg，data-asset 写成 k_s2744-08_sr_xx,0.jpg，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s2744-08-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494117912。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0039EC.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0039ec.svg，时间戳 1635494649072。" +
          s2744Docs,
        `${indexIntro}这一行是第 59 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 Large active area Si PIN photodiode，photodiode 是单数，产品页二级标题是复数 photodiodes。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2744-08_pp_xx.jpg。typeNameSort 写成 S02744-0008。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 20 × 10，显示写成 20 × 10 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 10000 pA。上升时间的值和显示都写成 --。截止频率的值写成 25，显示写成 25 MHz。终端电容 85 pF。噪声等效功率的值写成 4.7×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 581 KB。索引地址 ${index}。另一只放在同一页。`,
        s2744SheetLead +
          "产品页感光面积写成 20 × 10 mm。手册、外形图和选型指南都写成 10 × 20。产品页暗电流只写最大 10000 pA，对得上印在四只中间的最大 10 nA，没有写典型 3 nA。产品页光灵敏度 0.66 A/W 对得上 λp，测量条件写 λ=λp。" +
          `${guide}第 32 页标题写 Large-area Si PIN photodiodes。说明写 These are photosensors for high energy physics, mainly used with a scintillator being coupled. A long and narrow shape type is also available.。S2744-08 窗材料写 Epoxy resin。S2744-09 窗材料写 None。感光面积 10 × 20、暗电流 10 和终端电容 85 印在这两只中间。耗尽层厚度 0.3、光谱范围 340 to 1100、λ=960 nm 光灵敏度 0.66 和封装 Ceramic 的文本层落在 S3204-09 和 S3584-08 之间，位置在 S2744-08 到 S3588-09 这一组的中部。这一页没有截止频率栏，也没有噪声等效功率栏。页脚页码写 32 / 46。光谱图号 KPINB0265EE，图题方括号写 S2744/S3588 series，方括号内侧各有两个 U+2005。图注一处写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，另一处写 (Typ. Ta=25 °C)，° 是 U+00B0，并写 QE=100%，百分号前面没有空格。手册图号是 KPINB0265EC。同一页还有 S3204、S3584 和 S3588，是别的前缀，没有放进这一页。` +
          placeS2744,
      ]),
      page("S2744-09", "2011-10", part("S2744-09"), [
        s2744Page +
          "一级标题写 S2744-09。主图 src 写成 k_s2744-09_pp_xx.jpg.thumb.252.252.jpg。name=\"description\" 和 og:description 与 S2744-08 相同。锚点比 S2744-08 多一项 Notice。Notice 正文写 The chip of this product is not sealed and is exposed. 下一行写 Parts such as electrodes on the chip are not protected by an enclosure or window and so require especially strict care during handling compared to ordinary products. 再下一行写 Before using this product, always read “Precautions / Unsealed products” described below.。引号是弯引号，“ 是 U+201C，” 是 U+201D。这段 p 后面多一个 </p>。相关产品轮播按 S2744-08、S3204-08、S3204-09、S3584-08、S3584-09、S3588-08、S3588-09 排。链接同样是产品路径，没有 target。S3204-08 的 alt 仍写 S3204-08 product photo。",
        "规格表感光面积 20 × 10 mm。封装 Ceramic。封装类别 Unsealed。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 10000 pA。截止频率典型 25 MHz。终端电容典型 85 pF。噪声等效功率典型 4.7×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s2744Measure +
          "光谱图 data-asset 仍是 k_s2744-08_sr_xx,0.jpg，文件名写的是 S2744-08。coreimg 路径改到 S2744-09，文件名仍是 k-s2744-08-sr-xx%2C0.jpeg，时间戳仍是 1635494117912。外形图 data-asset 写成 kpina0108ea.svg，字母是小写。coreimg 文件名写成 kpina0108ea.svg，时间戳 1635494694937。" +
          "相关文档在免责声明前面先列未密封产品注意事项 Precautions / Unsealed products，标 373 KB/PDF。同一条链接在金属、陶瓷和塑料产品注意事项后面又出现一次，仍标 373 KB/PDF。" +
          s2744Docs,
        `${indexIntro}这一行是第 60 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与 S2744-08 相同，photodiode 是单数。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2744-09_pp_xx.jpg。typeNameSort 写成 S02744-0009。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 20 × 10，显示写成 20 × 10 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 10000 pA。上升时间是 --。截止频率的值写成 25，显示写成 25 MHz。终端电容 85 pF。噪声等效功率的值写成 4.7×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 Unsealed。冷却 Non-cooled。手册标 581 KB。`,
        s2744SheetLead +
          "产品页封装类别写成 Unsealed，对得上手册窗材料。选型指南这一行窗材料写成 None。产品页感光面积仍写成 20 × 10 mm。手册 λp 的 0.66 A/W 印在四只中间。产品页暗电流仍写成 10000 pA。" +
          `${guide}第 32 页这一行窗材料写 None。感光面积、暗电流和终端电容与 S2744-08 印在中间，没有再写一遍。耗尽层、光谱范围、光灵敏度和封装仍落在这一组的中部。` +
          placeS2744,
      ]),
    ],
  },

  {
    id: "s2833",
    date: "2023-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S2833：滨松透明塑料封装 Si 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s5627-01_etc_kspd1025e.pdf。pdf 信息里的 Title 是 Si photodiodes S5627-01, S4797-01, S2388-01, etc.。末页写 Information described in this material is current as of January 2023。最后一行写 Cat. No. KSPD1025E10 Jan. 2023 DN，记为约 2023 年 1 月。索引 newState 都是 false，是第 61 行和第 62 行。",
    applications: [],
    technologies: [],
    models: [
      page("S2833-01", "2023-01", part("S2833-01"), [
        s2833Page +
          "一级标题写 S2833-01。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Si Photodiode molded into clear plastic package，Photodiode 的 P 是大写。主图 src 写成 k_s2833-01_pp_xx.jpg.thumb.252.252.jpg。alt 写 S2833-01 product photo。相关产品轮播这一块是空的，没有列型号。",
        "规格表感光面积 2.4 × 2.8 mm，× 是 U+00D7，两边有空格。封装 Plastic。封装类别 --。冷却 Non-cooled。反向电压最大 10 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.58 A/W。暗电流最大 10 pA。上升时间典型 2.5 μs，μ 是 U+03BC。终端电容典型 700 pF。" +
          s2833Measure01 +
          "光谱图是 svg，data-asset 写成 KSPDB0129EE.svg。目录名是 03_15_new_Product_graph_svg。coreimg 文件名写成小写 kspdb0129ee.svg，时间戳 1635494709849。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0123EC.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kspda0123ec.svg，时间戳 1739420373534。" +
          s2833Docs01,
        `${indexIntro}这一行是第 61 行，newState 是 false。productName 写 Si photodiode。productExp 与二级标题相同，Photodiode 的 P 是大写。thumbAlt 写 S2833-01 product photo。缩略图文件名是 k_s2833-01_pp_xx.jpg。typeNameSort 写成 S02833-0001。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.8，显示写成 2.4 × 2.8 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 10 pA。上升时间的值写成 2.5，显示写成 2.5 μs，μ 是 U+03BC。截止频率是 --。终端电容 700 pF。噪声等效功率是 --。封装 Plastic，封装类别 --。冷却 Non-cooled。手册标 678 KB。索引地址 ${index}。另一只放在同一页。`,
        s2833SheetLead +
          "产品页上升时间写成 2.5 μs，终端电容写成 700 pF，对得上印在两只中间的数。产品页峰值 960 nm、光灵敏度 0.58 A/W、暗电流 10 pA 印在 S2833-01 这一行。手册没有把 S2833-04 写进特性。" +
          `${guide}第 14 页小标题写 For visible to near IR range。说明写 These photodiodes have sensitivity in the visible to near infrared range.。S2833-01 这一行没有数字。感光面积 2.4 × 2.8 印在上一行 S1787-08 和这一行中间，那是 S1787-08 的面积。S1787 已经单独成页，没有放进这一页。页脚页码写 14 / 46。光谱图号 KSPDB0286EF，图题写 S4011-06DS, S1787-08, S2833-01/-04, S16765-01MS, S16838-02MS, S16840-02MS。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA。同一页表头另一处写 (Typ. Ta=25 °C)，° 是 U+00B0，并写 QE=100%，百分号前面没有空格。手册图号是 KSPDB0129EE。` +
          placeS2833,
      ]),
      page("S2833-04", "2023-01", part("S2833-04"), [
        s2833Page +
          "一级标题写 S2833-04。二级标题写在 span class=\"Txt__Limit\" 里，是一行：Si photodiode molded into clear plastic package，photodiode 的 p 是小写。主图 src 写成 k_s2833-04_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。相关产品轮播只列 S2833-01。链接是 /us/en/product/optical-sensors/photodiodes/si-photodiodes/S2833-01.html，没有 target。图注写 Si photodiode S2833-01。alt 写 S2833-01 product photo。文件名是 k_s2833-01_pp_xx.jpg，没有 .thumb。",
        "规格表感光面积 2.4 × 2.8 mm。封装 Plastic。封装类别 --。冷却 Non-cooled。反向电压最大 10 V。光谱范围 320 to 1100 nm。峰值 960 nm。光灵敏度典型 0.58 A/W。暗电流最大 10 pA。上升时间典型 0.5 μs，μ 是 U+03BC。终端电容典型 200 pF。" +
          s2833Measure04 +
          "光谱图是 jpg，data-asset 写成 k_s2833-01_sr_xx,0.jpg，文件名写的是 S2833-01，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s2833-01-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494118188。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KSPDA0184EB.svg。目录名是 03_14_new_Product_Dimensional outline_svg。coreimg 文件名写成小写 kspda0184eb.svg，时间戳 1739420396268。" +
          s2833Docs04,
        `${indexIntro}这一行是第 62 行，newState 是 false。productName 写 Si photodiode。productExp 写 Si photodiode molded into clear plastic package, for visible to NIR range，末尾有一个空格。产品页二级标题没有 for visible to NIR range，photodiode 的 p 是小写。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s2833-04_pp_xx.jpg。typeNameSort 写成 S02833-0004。类型的值和显示都写成 --。感光面积的值写成 2.4 × 2.8，显示写成 2.4 × 2.8 mm。光谱范围的值写成 320 to 1100，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 10 pA。上升时间的值写成 0.5，显示写成 0.5 μs，μ 是 U+03BC。截止频率是 --。终端电容 200 pF。噪声等效功率是 --。封装 Plastic，封装类别 --。冷却 Non-cooled。手册标 678 KB。`,
        s2833SheetLead +
          "产品页上升时间写成 0.5 μs，终端电容写成 200 pF。手册这两项印在两只中间，是 2.5 µs 和 700 pF。0.5 µs 和 200 pF 印在 S4011-06DS 这一行。产品页峰值、光灵敏度和暗电流仍与印在 S2833-01 这一行的 960 nm、0.58 A/W、10 pA 相同。" +
          `${guide}第 14 页这一行写光谱范围 320 to 1100，峰值 960，λ=λp 写 0.58，暗电流 10，感光面积 2.4 × 2.8，封装 Plastic。S2833-01 那一行没有这些数字。这一页没有上升时间栏，也没有终端电容栏。光谱图号仍是 KSPDB0286EF。` +
          placeS2833,
      ]),
    ],
  },

  {
    id: "s3071",
    date: "2025-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S3071：滨松大面积高速 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s3071_etc_kpin1044e.pdf。pdf 信息里的 Title 是空的。末页写 Information described in this material is current as of April, 2025。最后一行写 Cat. No. KPIN1044E08 Apr. 2025 DN，记为约 2025 年 4 月。索引 newState 都是 false，是第 63 行和第 64 行。",
    applications: [],
    technologies: [],
    models: [
      page("S3071", "2025-04", part("S3071"), [
        s3071Page +
          "一级标题写 S3071。主图 src 写成 k_s3071_pp_xx.jpg.thumb.252.252.jpg。alt 写 S3071 product photo。正文写 The S3071 is a Si PIN photodiode having a relatively large photosensitive area yet it offers excellent frequency response at 40 MHz. This photodiode is suitable for FSO(free space optics) and high-speed pulsed light detection.。FSO 和左括号之间没有空格。name=\"description\" 和 og:description 都把 40 和 MHz 之间写成两个空格，并把 detection. 和 Features 接上，中间没有空格。Features 和连字符之间没有空格，连字符后面也没有空格：Features-Photosensitive area size: φ5.0 mm-Cutoff frequency: 40 MHz (VR=24 V)-High reliability: TO-8 metal package。可见特性三条是 Photosensitive area size: φ5.0 mm、Cutoff frequency: 40 MHz (V<sub>R</sub>=24 V)、High reliability: TO-8 metal package。φ 是 U+03C6。截止频率这一条的 R 写成下标。相关产品轮播先列 C8366，再列 S3072。链接是 /us/en/，没有 target。C8366 的 alt 写 C8366, -01 product photo，图注写 Photosensor amplifier C8366，文件名是 k_c8366_pp_xx.jpg。S3072 的 alt 写 Si photodiode product photo，图注写 Si PIN photodiode S3072，文件名是 k_s3072_s3399_pp_xx.jpg。C8366 不在这一索引上，没有另开一页。",
        "规格表感光面积 φ5.0 mm，φ 是 U+03C6。封装 Metal。封装类别 TO-8。冷却 Non-cooled。反向电压最大 50 V。光谱范围 320 to 1060 nm。峰值 920 nm。光灵敏度典型 0.54 A/W。暗电流最大 10000 pA。截止频率典型 40 MHz。终端电容典型 18 pF。噪声等效功率典型 2.1×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s3071Measure +
          "光谱图是 jpg，data-asset 写成 k_s3071_sr_xx,0.jpg，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s3071-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494118440。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0027ED.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0027ed.svg，时间戳 1635494523854。" +
          s1226Docs,
        `${indexIntro}这一行是第 63 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与二级标题相同。thumbAlt 写 S3071 product photo。缩略图文件名是 k_s3071_pp_xx.jpg。typeNameSort 写成 S03071。类型的值和显示都写成 --。感光面积的值写成 φ5.0，显示写成 φ5.0 mm。光谱范围的值写成 320 to 1060，显示才补上 nm。光灵敏度 0.54 A/W。暗电流 10000 pA。上升时间的值和显示都写成 --。截止频率的值写成 40，显示写成 40 MHz。终端电容 18 pF。噪声等效功率的值写成 2.1×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-8。冷却 Non-cooled。手册标 597 KB。索引地址 ${index}。另一只放在同一页。`,
        s3071SheetLead +
          "产品页光灵敏度写成 0.54 A/W，测量条件写 λ=780 nm，对得上印在两只中间的 780 nm 这一列。手册 λp 是 0.6 A/W。产品页峰值写成 920 nm，对得上印在两只中间的峰值。产品页暗电流只写最大 10000 pA，对得上这一行最大 10 nA，没有写典型 0.5 nA。产品页截止频率 40 MHz、终端电容 18 pF 对得上这一行。" +
          `${guide}第 19 页标题写 High-speed response Si PIN photodiodes。小标题写 10 MHz to less than 100 MHz。说明写 Metal package types are available.。S3071 这一行截止频率 40，条件 (VR=24 V)，感光面积 ϕ5，终端电容 18，条件也是 (VR=24 V)。λ=660 nm 的 0.47 和 λ=780 nm 的 0.54 印在 S3072 和 S3071 中间。封装 TO-8 印在 S3071 和下一行 S12271 中间。这一页没有暗电流栏，也没有峰值栏。页脚页码写 19 / 46。图题方括号写 S5821 series, S3071, S3072，方括号内侧各有两个 U+2005。曲线标 S3071, S3072。图号 KPINB0335EB。图注一处写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，另一处写 (Typ. Ta=25 °C)，° 是 U+00B0，并写 QE=100%，百分号前面没有空格。手册图号是 KPINB0147EB。同一页还有 S5821、S9119、S1223 和 S12271，是别的前缀，没有放进这一页。S1223 已经单独成页。` +
          placeS3071,
      ]),
      page("S3072", "2025-04", part("S3072"), [
        s3071Page +
          "一级标题写 S3072。主图 src 写成 k_s3072_s3399_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。正文把型号写成 S3072，频率写成 45 MHz，其余句子和 S3071 相同，FSO 和左括号之间仍没有空格。name=\"description\" 和 og:description 都在 area 和 yet 之间写成两个空格，40 MHz 那种两个空格没有出现在这一页。Features 和连字符的接法和 S3071 相同：Features-Photosensitive area size: φ3.0 mm-Cutoff frequency: 45 MHz (VR=24 V)-High reliability: TO-5 metal package。可见特性的截止频率写成 45 MHz (VR=24 V)，R 没有下标。封装写成 TO-5 metal package。相关产品轮播只列 S3071。链接是 /us/en/product/optical-sensors/photodiodes/si-photodiodes/S3071.html，没有 target。图注写 Si PIN photodiode S3071。alt 写 S3071 product photo。文件名是 k_s3071_pp_xx.jpg，没有 .thumb。",
        "规格表感光面积 φ3.0 mm。封装 Metal。封装类别 TO-5。冷却 Non-cooled。反向电压最大 50 V。光谱范围 320 to 1060 nm。峰值 920 nm。光灵敏度典型 0.54 A/W。暗电流最大 10000 pA。截止频率典型 45 MHz。终端电容典型 7 pF。噪声等效功率典型 1.6×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s3071Measure +
          "光谱图 data-asset 仍是 k_s3071_sr_xx,0.jpg，文件名写的是 S3071。coreimg 路径改到 S3072，文件名仍是 k-s3071-sr-xx%2C0.jpeg，时间戳仍是 1635494118440。外形图 data-asset 写成 KPINA0024.svg，没有 ED。coreimg 文件名写成 kpina0024.svg，时间戳 1743569407298。" +
          s1226Docs,
        `${indexIntro}这一行是第 64 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与二级标题相同。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3072_s3399_pp_xx.jpg。typeNameSort 写成 S03072。类型的值和显示都写成 --。感光面积的值写成 φ3.0，显示写成 φ3.0 mm。光谱范围的值写成 320 to 1060，显示才补上 nm。光灵敏度 0.54 A/W。暗电流 10000 pA。上升时间是 --。截止频率的值写成 45，显示写成 45 MHz。终端电容 7 pF。噪声等效功率的值写成 1.6×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 597 KB。`,
        s3071SheetLead +
          "产品页封装类别写成 TO-5。手册 TO-5 印在 S3399 这一行，S3072 这一行没有封装词。产品页光灵敏度仍写成 0.54 A/W，对得上印在两只中间的 780 nm。手册这一行暗电流典型是 0.3 nA，最大仍是 10 nA。产品页只写最大 10000 pA。产品页截止频率 45 MHz、终端电容 7 pF 对得上这一行。" +
          `${guide}第 19 页这一行截止频率 45，条件 (VR=24 V)，感光面积 ϕ3，终端电容 7，条件也是 (VR=24 V)。0.47 和 0.54 与 S3071 印在中间，没有再写一遍。这一行没有封装词。TO-8 仍落在 S3071 和 S12271 中间。` +
          placeS3071,
      ]),
    ],
  },

  {
    id: "s3204",
    date: "2012-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S3204：滨松大感光面积 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s3204-08_etc_kpin1051e.pdf。pdf 信息里的 Title 是 s3204_etc_kpin1051e10.indd。末页写 Information described in this material is current as of January, 2012。最后一行写 Cat. No. KPIN1051E10 Jan. 2012 DN，记为约 2012 年 1 月。索引 newState 都是 false，是第 65 行和第 66 行。",
    applications: [],
    technologies: [],
    models: [
      page("S3204-08", "2012-01", part("S3204-08"), [
        s3204Page +
          "一级标题写 S3204-08。主图 src 写成 k_s3204-08_pp_xx.jpg.thumb.252.252.jpg。alt 写 S3204-08 product photo。相关产品轮播按 S2744-08、S2744-09、S3204-09、S3584-08、S3584-09、S3588-08、S3588-09 排。链接是 /us/en/product/optical-sensors/photodiodes/si-photodiodes/ 再加型号，没有 target。图注写 Si PIN photodiode 再加型号。alt 都写 Si photodiode product photo。S2744 已经单独成页。S3584 和 S3588 是别的前缀，没有放进这一页。",
        "规格表感光面积 18 × 18 mm，× 是 U+00D7，两边有空格。封装 Ceramic。封装类别 --。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 20000 pA。截止频率典型 20 MHz。终端电容典型 130 pF。噪声等效功率典型 6.6×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s3204Measure +
          "光谱图是 jpg，data-asset 写成 k_s3204-08_sr_xx,0.jpg，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s3204-08-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494119090。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0040EC.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0040ec.svg，时间戳 1635494577664。" +
          s2744Docs,
        `${indexIntro}这一行是第 65 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 Large photosensitive area Si PIN photodiode，photodiode 是单数，产品页二级标题是复数 photodiodes。thumbAlt 写 S3204-08 product photo。缩略图文件名是 k_s3204-08_pp_xx.jpg。typeNameSort 写成 S03204-0008。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 18 × 18，显示写成 18 × 18 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 20000 pA。上升时间的值和显示都写成 --。截止频率的值写成 20，显示写成 20 MHz。终端电容 130 pF。噪声等效功率的值写成 6.6×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 569 KB。索引地址 ${index}。另一只放在同一页。`,
        s3204SheetLead +
          "产品页感光面积写成 18 × 18 mm，对得上手册和选型指南。产品页暗电流只写最大 20000 pA，对得上印在两只中间的最大 20 nA，没有写典型 6 nA。产品页光灵敏度 0.66 A/W 对得上 λp，测量条件写 λ=λp。产品页封装类别写成 --。手册窗材料写 Epoxy resin。" +
          `${guide}第 32 页标题写 Large-area Si PIN photodiodes。说明写 These are photosensors for high energy physics, mainly used with a scintillator being coupled. A long and narrow shape type is also available.。S3204-08 窗材料写 Epoxy resin。S3204-09 窗材料写 None。感光面积 18 × 18、暗电流 20 和终端电容 130 印在这两只中间。文本层在 S3204-08 这一行和感光面积这一行的最左边各有一个 2。耗尽层厚度 0.3、光谱范围 340 to 1100、λ=960 nm 光灵敏度 0.66 和封装 Ceramic 印在 S3204-09 和 S3584-08 中间，位置在 S2744-08 到 S3588-09 这一组的中部。这一页没有截止频率栏，也没有噪声等效功率栏。页脚页码写 32 / 46。表头条件写成 (Typ.Ta=25 °C)，Typ 和 Ta 之间没有空格，° 是 U+00B0。光谱图号 KPINB0277EC，图题方括号写 S3204/S3584 series，方括号内侧各有两个 U+2005。曲线标 S3204/S3584-08 和 S3204/S3584-09。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，并写 QE=100%，百分号前面没有空格。手册图号是 KPINB0227ED 和 KPINB0264ED。同一页还有 S2744 和 S3588。S2744 已经单独成页。` +
          placeS3204,
      ]),
      page("S3204-09", "2012-01", part("S3204-09"), [
        s3204Page +
          "一级标题写 S3204-09。主图 src 写成 k_s3204-09_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。name=\"description\" 和 og:description 与 S3204-08 相同。锚点比 S3204-08 多一项 Notice。Notice 正文写 The chip of this product is not sealed and is exposed. 下一行写 Parts such as electrodes on the chip are not protected by an enclosure or window and so require especially strict care during handling compared to ordinary products. 再下一行写 Before using this product, always read “Precautions / Unsealed products” described below.。引号是弯引号，“ 是 U+201C，” 是 U+201D。这段 p 后面多一个 </p>。Notice 下面先列未密封产品注意事项 Precautions / Unsealed products，标 373 KB/PDF。相关产品轮播按 S2744-08、S2744-09、S3204-08、S3584-08、S3204-09、S3588-08、S3588-09 排，轮播里有当前型号，没有 S3584-09。链接同样是产品路径，没有 target。S3204-08 的 alt 写 S3204-08 product photo，其余 alt 写 Si photodiode product photo。",
        "规格表感光面积 18 × 18 mm。封装 Ceramic。封装类别 Unsealed。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 20000 pA。截止频率典型 20 MHz。终端电容典型 130 pF。噪声等效功率典型 6.6×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s3204Measure +
          "光谱图是 svg，data-asset 写成 kpinb0264ed.svg，字母是小写。目录名是 03_15_new_Product_graph_svg。coreimg 文件名写成 kpinb0264ed.svg，时间戳 1635494748185。外形图 data-asset 写成 kpina0110ea.svg，字母是小写。coreimg 文件名写成 kpina0110ea.svg，时间戳 1635494695591。" +
          "相关文档在金属、陶瓷和塑料产品注意事项后面再列一次未密封产品注意事项 Precautions / Unsealed products，仍标 373 KB/PDF。" +
          s2744Docs,
        `${indexIntro}这一行是第 66 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与 S3204-08 相同，photodiode 是单数。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3204-09_pp_xx.jpg。typeNameSort 写成 S03204-0009。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 18 × 18，显示写成 18 × 18 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 20000 pA。上升时间是 --。截止频率的值写成 20，显示写成 20 MHz。终端电容 130 pF。噪声等效功率的值写成 6.6×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 Unsealed。冷却 Non-cooled。手册标 569 KB。下一行是第 67 行，S3399，共用 s3071_etc_kpin1044e.pdf，是别的前缀。`,
        s3204SheetLead +
          "产品页封装类别写成 Unsealed，对得上手册窗材料。选型指南这一行窗材料写成 None。产品页感光面积仍写成 18 × 18 mm。手册暗电流最大 20 nA 印在两只中间。产品页只写最大 20000 pA。产品页光谱图文件名对得上没有窗的那张，图号 KPINB0264ED。" +
          `${guide}第 32 页这一行窗材料写 None。感光面积、暗电流和终端电容与 S3204-08 印在中间，没有再写一遍。耗尽层、光谱范围、光灵敏度和封装仍落在 S3204-09 和 S3584-08 中间。` +
          placeS3204,
      ]),
    ],
  },

  {
    id: "s3399",
    date: "2025-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S3399：滨松大面积高速 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。手册文件名是 s3071_etc_kpin1044e.pdf。pdf 信息里的 Title 是空的。末页写 Information described in this material is current as of April, 2025。最后一行写 Cat. No. KPIN1044E08 Apr. 2025 DN，记为约 2025 年 4 月。索引 newState 是 false，是第 67 行。",
    applications: [],
    technologies: [],
    models: [
      page("S3399", "2025-04", part("S3399"), [
        s3399Page +
          "一级标题写 S3399。主图 src 写成 k_s3072_s3399_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。正文写 The S3399 is a Si PIN photodiode having a relatively large photosensitive area yet it offers excellent frequency response at 100 MHz. This photodiode is suitable for FSO(free space optics) and high-speed pulsed light detection.。is 和 a 之间是一个空格。FSO 和左括号之间没有空格。name=\"description\" 和 og:description 都在 is 和 a 之间写成两个空格，并把 detection. 和 Features 接上，中间没有空格。Features 和连字符之间没有空格，连字符后面也没有空格：Features-Photosensitive area size: φ3.0 mm-Cutoff frequency: 100 MHz (VR=10 V)-High reliability: TO-5 metal package。可见特性三条是 Photosensitive area size: φ3.0 mm、Cutoff frequency: 100 MHz (V<sub>R</sub>=10 V)、High reliability: TO-5 metal package。φ 是 U+03C6。截止频率这一条的 R 写成下标。相关产品轮播只列 C8366。链接是 /us/en/product/optical-sensors/photodiodes/photosensor-amplifier/C8366.html，没有 target。alt 写 C8366, -01 product photo，图注写 Photosensor amplifier C8366，文件名是 k_c8366_pp_xx.jpg。C8366 不在这一索引上，没有另开一页。",
        "规格表感光面积 φ3.0 mm，φ 是 U+03C6。封装 Metal。封装类别 TO-5。冷却 Non-cooled。反向电压最大 30 V。光谱范围 320 to 1000 nm。峰值 840 nm。光灵敏度典型 0.58 A/W。暗电流最大 1000 pA。截止频率典型 100 MHz。终端电容典型 20 pF。噪声等效功率典型 9.4×10<sup>-15</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s3399Measure +
          "光谱图是 jpg，data-asset 写成 k_s3071_sr_xx,0.jpg，文件名写的是 S3071，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s3071-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494118440。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0026.svg，没有 ED。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0026.svg，时间戳 1743569407010。" +
          s1226Docs,
        `${indexIntro}这一行是第 67 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 Large photosensitive area, high-speed Si PIN photodiode。产品页二级标题没有 photosensitive，也没有这个逗号。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3072_s3399_pp_xx.jpg。typeNameSort 写成 S03399。类型的值和显示都写成 --。感光面积的值写成 φ3.0，显示写成 φ3.0 mm。光谱范围的值写成 320 to 1000，显示才补上 nm。光灵敏度 0.58 A/W。暗电流 1000 pA。上升时间的值和显示都写成 --。截止频率的值写成 100，显示写成 100 MHz。终端电容 20 pF。噪声等效功率的值写成 9.4×10<sup>-15</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Metal，封装类别 TO-5。冷却 Non-cooled。手册标 597 KB。索引地址 ${index}。下一行是第 68 行，S3584-08。S3584-09 是第 69 行，共用 s3204-08_etc_kpin1051e.pdf，是别的前缀。`,
        s3399SheetLead +
          "产品页光灵敏度写成 0.58 A/W，测量条件写 λ=780 nm，对得上印在 S3399 和 S3883 中间的 780 nm 这一列。手册 λp 是 0.6 A/W。产品页峰值写成 840 nm，光谱范围写成 320 to 1000 nm，对得上印在这两只中间的数。产品页暗电流只写最大 1000 pA，对得上这一行最大 1.0 nA，没有写典型 0.1 nA。产品页截止频率 100 MHz、终端电容 20 pF 对得上这一行，条件是 *4，VR=10 V。产品页反向电压最大 30 V，对得上印在 S3399 和 S3883 中间的 30 V。产品页封装类别写成 TO-5，对得上手册这一行。" +
          `${guide}第 16 页标题写 High-speed response Si PIN photodiodes。小标题写 100 MHz to less than 1 GHz。说明写 These Si PIN photodiodes have a large photosensitive area (ϕ0.79 to ϕ3 mm) yet deliver excellent frequency response characteristics.。S3399 这一行感光面积 ϕ3，没有 .0。终端电容 20，条件 (VR=10 V)，R 落在下一行。截止频率的数字 100 印在 S5971 和 S3399 中间，更靠近 S5971。它的条件 (VR=10 V) 也印在这两行中间，更靠近 S3399。λ=660 nm 的 0.45、λ=780 nm 的 0.58 和封装 TO-5 印在 S3399 和 S3883 中间。这一页没有暗电流栏，也没有峰值栏。页脚页码写 16 / 46。表头条件写成 (Typ. Ta=25 °C)，° 是 U+00B0。图题方括号写 S5971, S5972, S3399, S3883, S13337-01，方括号内侧各有两个 U+2005。曲线标 S3399, S3883。图号 KPINB0316EE。图注写 QE=100%，百分号前面没有空格。手册图号是 KPINB0147EB。同一页还有 S5971、S5972、S3883、S10783、S10784、S11062-35GT 和 S13337-01，是别的前缀，没有放进这一页。` +
          placeS3071,
      ]),
    ],
  },

  {
    id: "s3584",
    date: "2012-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S3584：滨松大感光面积 Si PIN 光电二极管",
    summary:
      "产品页没有写发布日期。两只共用这一页。手册文件名是 s3204-08_etc_kpin1051e.pdf。pdf 信息里的 Title 是 s3204_etc_kpin1051e10.indd。末页写 Information described in this material is current as of January, 2012。最后一行写 Cat. No. KPIN1051E10 Jan. 2012 DN，记为约 2012 年 1 月。索引 newState 都是 false，是第 68 行和第 69 行。",
    applications: [],
    technologies: [],
    models: [
      page("S3584-08", "2012-01", part("S3584-08"), [
        s3204Page +
          "一级标题写 S3584-08。主图 src 写成 k_s3584-08_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。相关产品轮播按 S2744-08、S2744-09、S3204-08、S3204-09、S3584-09、S3588-08、S3588-09 排。链接是 /us/en/product/optical-sensors/photodiodes/si-photodiodes/ 再加型号，没有 target。图注写 Si PIN photodiode 再加型号。S3204-08 的 alt 写 S3204-08 product photo，其余 alt 写 Si photodiode product photo。S2744 和 S3204 已经单独成页。S3588 是别的前缀，没有放进这一页。",
        "规格表感光面积 28 × 28 mm，× 是 U+00D7，两边有空格。封装 Ceramic。封装类别 --。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 30000 pA。截止频率典型 10 MHz。终端电容典型 300 pF。噪声等效功率典型 8.6×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格，× 是 U+00D7。" +
          s3584Measure +
          "光谱图是 jpg，data-asset 写成 k_s3204-08_sr_xx,0.jpg，文件名写的是 S3204，逗号在文件名里。目录名是 03_02_Characteristic Chart，Chart 前面有一个空格。coreimg 文件名写成小写 k-s3204-08-sr-xx%2C0.jpeg，下划线换成连字符，时间戳 1635494119090。外形图标题写 Dimensional outline (unit: mm)，outline 是单数。data-asset 写成 KPINA0041ED.svg。目录名是 03_14_new_Product_Dimensional outline_svg，Dimensional 和 outline 之间有一个空格。coreimg 文件名写成小写 kpina0041ed.svg，时间戳 1635494578167。" +
          s2744Docs,
        `${indexIntro}这一行是第 68 行，newState 是 false。productName 写 Si PIN photodiode。productExp 写 Large photosensitive area Si PIN photodiode，photodiode 是单数，产品页二级标题是复数 photodiodes。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3584-08_pp_xx.jpg。typeNameSort 写成 S03584-0008。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 28 × 28，显示写成 28 × 28 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 30000 pA。上升时间的值和显示都写成 --。截止频率的值写成 10，显示写成 10 MHz。终端电容 300 pF。噪声等效功率的值写成 8.6×10<sup>-14</sup>，× 是 U+00D7，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 --。冷却 Non-cooled。手册标 569 KB。索引地址 ${index}。另一只放在同一页。`,
        s3584SheetLead +
          "产品页感光面积写成 28 × 28 mm，对得上手册和选型指南。产品页暗电流只写最大 30000 pA，对得上印在两只中间的最大 30 nA，没有写典型 10 nA。产品页光灵敏度 0.66 A/W 对得上 λp，测量条件写 λ=λp。产品页封装类别写成 --。手册窗材料写 Epoxy resin。选型指南这一行窗材料也写 Epoxy resin。" +
          `${guide}第 32 页标题写 Large-area Si PIN photodiodes。说明写 These are photosensors for high energy physics, mainly used with a scintillator being coupled. A long and narrow shape type is also available.。S3584-08 窗材料写 Epoxy resin。S3584-09 窗材料写 None。感光面积 28 × 28、暗电流 30 和终端电容 300 印在这两只中间。耗尽层厚度 0.3、光谱范围 340 to 1100、λ=960 nm 光灵敏度 0.66 和封装 Ceramic 印在 S3204-09 和 S3584-08 中间，位置在 S2744-08 到 S3588-09 这一组的中部。这一页没有截止频率栏，也没有噪声等效功率栏。页脚页码写 32 / 46。表头条件写成 (Typ.Ta=25 °C)，Typ 和 Ta 之间没有空格，° 是 U+00B0。光谱图号 KPINB0277EC，图题方括号写 S3204/S3584 series，方括号内侧各有两个 U+2005。曲线标 S3204/S3584-08 和 S3204/S3584-09。图注写 (Typ. Ta=25 ˚C)，˚ 是 U+02DA，并写 QE=100%，百分号前面没有空格。手册图号是 KPINB0227ED 和 KPINB0264ED。同一页还有 S2744、S3204 和 S3588。S2744 和 S3204 已经单独成页。` +
          placeS3204,
      ]),
      page("S3584-09", "2012-01", part("S3584-09"), [
        s3204Page +
          "一级标题写 S3584-09。主图 src 写成 k_s3584-09_pp_xx.jpg.thumb.252.252.jpg。alt 写 Si photodiode product photo。name=\"description\" 和 og:description 与 S3584-08 相同。锚点比 S3584-08 多一项 Notice。Notice 正文写 The chip of this product is not sealed and is exposed. 下一行写 Parts such as electrodes on the chip are not protected by an enclosure or window and so require especially strict care during handling compared to ordinary products. 再下一行写 Before using this product, always read “Precautions / Unsealed products” described below.。引号是弯引号，“ 是 U+201C，” 是 U+201D。这段 p 后面多一个 </p>。Notice 下面先列未密封产品注意事项 Precautions / Unsealed products，标 373 KB/PDF。相关产品轮播按 S2744-08、S2744-09、S3204-08、S3204-09、S3584-08、S3588-08、S3588-09 排，轮播里有 S3584-08，没有当前型号。链接同样是产品路径，没有 target。S3204-08 的 alt 写 S3204-08 product photo，其余 alt 写 Si photodiode product photo。",
        "规格表感光面积 28 × 28 mm。封装 Ceramic。封装类别 Unsealed。冷却 Non-cooled。反向电压最大 100 V。光谱范围 340 to 1100 nm。峰值 960 nm。光灵敏度典型 0.66 A/W。暗电流最大 30000 pA。截止频率典型 10 MHz。终端电容典型 300 pF。噪声等效功率典型 8.6×10<sup>-14</sup> W/Hz<sup>1/2</sup>，× 两边没有空格。" +
          s3584Measure +
          "光谱图是 svg，data-asset 写成 kpinb0264ed.svg，字母是小写。目录名是 03_15_new_Product_graph_svg。coreimg 文件名写成 kpinb0264ed.svg，时间戳 1635494748185。外形图 data-asset 写成 kpina0111ea.svg，字母是小写。coreimg 文件名写成 kpina0111ea.svg，时间戳 1635494695822。" +
          "相关文档在金属、陶瓷和塑料产品注意事项后面再列一次未密封产品注意事项 Precautions / Unsealed products，仍标 373 KB/PDF。" +
          s2744Docs,
        `${indexIntro}这一行是第 69 行，newState 是 false。productName 写 Si PIN photodiode。productExp 与 S3584-08 相同，photodiode 是单数。thumbAlt 写 Si photodiode product photo。缩略图文件名是 k_s3584-09_pp_xx.jpg。typeNameSort 写成 S03584-0009。类型的值写成 For X-ray，显示写成 For X-ray detection。感光面积的值写成 28 × 28，显示写成 28 × 28 mm。光谱范围的值写成 340 to 1100，显示才补上 nm。光灵敏度 0.66 A/W。暗电流 30000 pA。上升时间是 --。截止频率的值写成 10，显示写成 10 MHz。终端电容 300 pF。噪声等效功率的值写成 8.6×10<sup>-14</sup>，显示补上 W/Hz<sup>1/2</sup>。封装 Ceramic，封装类别 Unsealed。冷却 Non-cooled。手册标 569 KB。下一行是第 70 行，S3588-08。S3588-09 是第 71 行，共用 s2744-08_etc_kpin1049e.pdf，是别的前缀。`,
        s3584SheetLead +
          "产品页封装类别写成 Unsealed，对得上手册窗材料。选型指南这一行窗材料写成 None。产品页感光面积仍写成 28 × 28 mm。手册暗电流最大 30 nA 印在两只中间。产品页只写最大 30000 pA。产品页光谱图文件名对得上没有窗的那张，图号 KPINB0264ED。" +
          `${guide}第 32 页这一行窗材料写 None。感光面积、暗电流和终端电容与 S3584-08 印在中间，没有再写一遍。耗尽层、光谱范围、光灵敏度和封装仍落在 S3204-09 和 S3584-08 中间。` +
          placeS3204,
      ]),
    ],
  },

];
