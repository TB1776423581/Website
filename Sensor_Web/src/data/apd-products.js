const page = (name, date, url, points) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
});

const si = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/apd/si-apd/${name}.html`;

const ingaas = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/apd/ingaas-apd/${name}.html`;

const siIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/apd/si-apd.html";

const ingaasIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/apd/ingaas-apd.html";

const s17268Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s17268_series_kapd1094e.pdf";

const s2384Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s12023-02_etc_kapd1007e.pdf";

const g15978Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/g15978-0020p_kapd1092e.pdf";

const siGuide =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/si_apd_kapd0001e.pdf";

const irGuide =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/infrared_kird0001e.pdf";

const siIntro =
  "索引一级标题写 Si APDs，前后没有空格。页面标题在 APDs 和竖线之间有两个空格。说明写 Silicon APDs provide high sensitivity ranging from UV to NIR for low light detection at high speeds。共 64 行。newState 为 true 的是 S17268-02 和 S17268-05。";

const ingaasIntro =
  "索引一级标题写 InGaAs APDs，前后没有空格。页面标题在 APDs 和竖线之间有两个空格。说明写 InGaAs APDs provide high near-infrared sensitivity for low light detection at high speeds。共 5 行：G15978-0020P、G8931-04、G8931-10、G8931-20 和 G14858-0020AA。newState 为 true 的只有 G15978-0020P。";

const siDocs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。产品页的 og:description 是空的。";

const irDocs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，安全注意事项 Safety consideration / Opto-semiconductors 标 34 KB/PDF，化合物光半导体注意事项标 390 KB/PDF，表面贴装注意事项 Precautions / Surface mount type products 标 407 KB/PDF。选型指南 Selection guide / Infrared detectors 标 2.2 MB/PDF，技术笔记 Technical note / Compound opto-semiconductor photosensors 标 3.1 MB/PDF。产品页的 og:description 是空的。";

const placeSi =
  "手册应用写 Optical rangefinders、Flow cytometry 和 Particle counters。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。量子效率和光谱响应是灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const s2384Docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，金属、陶瓷和塑料产品注意事项 Precautions / Metal, Ceramic, Plastic products 标 290 KB/PDF。选型指南 Selection guide / Si APD 标 2.6 MB/PDF，技术笔记 Technical note / Si APD 标 2.1 MB/PDF，APD 模块技术笔记 Technical note / APD modules 标 759 KB/PDF。";

const placeS2384 =
  "手册应用写 FSO 和 Optical rangefinders。选型指南这一节写 FSO, optical fiber communications, etc.。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

const placeIr =
  "手册应用写 Distance measurement 和 Low-light-level detection。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

export const apdProducts = [
  {
    id: "s17268",
    date: "2025-08",
    companyId: "hamamatsu",
    category: "product",
    title: "S17268：滨松短波表面贴装 Si APD",
    summary:
      "产品页没有写发布日期。两只共用手册目录号 KAPD1094E01，页脚写 Aug. 2025 DN，Cat. No. 和 Aug. 之间有两个空格，并写 The content of this document is current as of August 2025，记为约 2025 年 8 月。索引 newState 都是 true。S17268-05 的页面标题和 og:title 写成 Si APD S17268-02。",
    applications: [],
    technologies: [],
    models: [
      page("S17268-02", "2025-08", si("S17268-02"), [
        "产品页没有写发布日期。一级标题写 S17268-02。页面标题和 og:title 都写 Si APD S17268-02。二级标题写 Short-wavelength type APD, surface mount type package，wavelength 前面有连字符。正文写 The S17268-02 is a surface mount type short wavelength APD with enhanced sensitivity in the UV to visible region。下一句写 It offers high gain, high sensitivity, and low noise in the short wavelength region。这里 short wavelength 没有连字符。特性五条的连字符后面都是不换行空格。封装写成 1.8 mm × 2.0 mm × 0.9<sup>t</sup> mm，t 是上标。量子效率写成 QE=82 % (λ=450 nm)，百分号前面有空格。击穿电压写成 160 V typ.。高速响应那条在冒号后面和 typ. 后面也是不换行空格，写 Cutoff frequency=2 GHz typ. (λ=450 nm, M=50)。产品页没有写应用栏。下载标 343 KB/PDF。",
        "规格表类型分成两行，写 Short wavelength type，下一行 (Low bias operation)。感光面积 φ0.2 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 600 nm，光谱范围 350 to 1000 nm，光灵敏度典型 0.3 A/W，暗电流最大 1 nA，截止频率典型 2000 MHz，终端电容典型 1 pF，击穿电压典型 160 V，温度系数典型 0.15 V/℃，增益典型 50。规格表没有冷却，也没有量子效率。测量条件先写 Typ. Ta=25 ℃，unless otherwise noted，然后换行。光灵敏度条件 λ=450 nm, M=1。击穿电压条件把 D 写成下标，I<sub>D</sub>=100 μA。暗电流条件 M=50。截止频率的单词写成 frefuency，条件 M=50，R 写成下标，R<sub>L</sub>=50 Ω，λ=450 nm, -3 dB。终端电容条件 M=50, f=1 MHz。光谱图文件是 kapdb0673.svg。外形图文件是 kapda0238.svg。" +
          siDocs,
        `${siIntro}这一行 newState 是 true。productExp 与二级标题相同，wavelength 前面有连字符。thumbAlt 是 null。typeNameSort 写成 S17268-0002。类型的值停在 Short wavelength type，换行后再写 (Low bias，没有把 operation) 放进值里；显示才写成 Short wavelength type，换行 (Low bias operation)。感光面积 φ0.2 mm。光谱范围的值写成 350 to 1000，显示才补上 nm。峰值 600 nm。击穿电压 160 V。温度系数 0.15 V/℃。截止频率 2000 MHz。光灵敏度 0.3 A/W。暗电流 1 nA。终端电容 1 pF。增益的值是 50，没有单位。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 Surface mount，显示写成 Surface mount type。冷却的值写成 Non-cooled，显示也是 Non-cooled。产品页规格表没有冷却这一行。手册标 343 KB。索引地址 ${siIndex}。相关产品列出 S17268-05，放在同一页。`,
        `手册 ${s17268Sheet}。目录号 KAPD1094E01，页脚写 Cat. No. KAPD1094E01  Aug. 2025 DN，并写 current as of August 2025。封面标题写 Short wavelength type APD，wavelength 前面没有连字符，逗号后面有两个空格再换行。引言写成 These are surface mount type short wavelength APDs。特性没有连字符。封装尺寸写成 1.8 mm × 2.0 mm × 0.9t mm，t 前面没有空格，也不是上标。高速响应只写 Cutoff frequency=2 GHz typ. (S17268-02, λ=450 nm, M=50)，没有写 S17268-05 的 0.8 GHz。结构表感光面积 ϕ0.2 mm，封装 Glass epoxy，密封材料 Silicone resin。绝对最大正向电流 10 mA，反向电流 200 µA。工作温度 -30 to +100 °C，贮存温度 -40 to +100 °C。注 *1 写成 No dew condensation，冒号后面有两个空格。焊接温度 260 (3 times)。注 *2 写 Reflow soldering, JEDEC J-STD-020 MSL 2a, see P.5。击穿电压最小 140 V、典型 160 V、最大 180 V，条件 ID=100 µA。温度系数典型 0.15 V/°C。暗电流条件 M=50，典型 0.1 nA、最大 1 nA。截止频率典型 2 GHz。终端电容典型 1.0 pF，产品页和索引写成 1 pF。量子效率典型 82%，条件 λ=450 nm, M=1。过剩噪声因子典型 1.6，过剩噪声指数典型 0.12。增益典型 50，条件 M=50, λ=450 nm。产品页规格表没有这三项。光谱图号 KAPDB0673EA，条件 M=50 at λ=450 nm。量子效率图号 KAPDB0677EA，终端电容图号 KAPDB0676EA，增益图号 KAPDB0675EA，暗电流图号 KAPDB0674EA，产品页只放了光谱图。外形图号 KAPDA0238EA，产品页文件名没有 EA。图里 S17268-02 的感光面写成 ϕ0.2。公差写 Tolerance unless otherwise noted: ±0.1。芯片位置精度写 X, Y ≤ ±0.15。推荐焊盘图号 KAPDC0152EA。卷带包装 1000 pcs/reel。卷盘外径 ϕ180 mm，轴芯 ϕ60 mm，带宽 8 mm，材料 PS，静电特性 Conductive。` +
          `选型指南 ${siGuide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。短波、低偏压这一页把这一行的感光面积写成 ɸ0.2，光谱范围 350 to 1000 nm，截止频率 2000 MHz，终端电容 1 pF。封装分成两行，上一行 Glass，下一行 epoxy。击穿电压最大 180 V、温度系数 0.15 V/°C 和增益 50 印在同一组的上方，这一行没有再印一遍。增益栏的表头写 λ=650 nm，手册增益条件写 λ=450 nm。这一页的光谱图号是 KAPDB0010EE，条件写 M at 650 nm，不是产品页的 KAPDB0673EA。` +
          placeSi,
      ]),
      page("S17268-05", "2025-08", si("S17268-05"), [
        "产品页没有写发布日期。一级标题写 S17268-05。页面标题和 og:title 都写成 Si APD S17268-02。og:url 仍是 S17268-05 这一页。二级标题与 S17268-02 相同。正文把型号换成 The S17268-05 is，其余句子相同。特性前四条相同，连字符后面都是不换行空格。高速响应写成 Cutoff frequency=0.8 GHz typ. (λ=450 nm, M=50)，冒号后面和 typ. 后面仍是不换行空格。产品页没有写应用栏。下载标 343 KB/PDF。",
        "规格表类型同样分成两行。感光面积 φ0.5 mm，封装 Glass epoxy，封装类别 Surface mount type。峰值 600 nm，光谱范围 350 to 1000 nm，光灵敏度典型 0.3 A/W，暗电流最大 2 nA，截止频率典型 800 MHz，终端电容典型 3.6 pF，击穿电压典型 160 V，温度系数典型 0.15 V/℃，增益典型 50。规格表没有冷却。测量条件与 S17268-02 相同，截止频率仍写成 frefuency，D 和 L 仍是下标。光谱图和外形图的文件名也与 S17268-02 相同。" +
          siDocs,
        `${siIntro}这一行 newState 是 true。productExp 与二级标题相同。thumbAlt 是 null。typeNameSort 写成 S17268-0005。类型的值同样停在 (Low bias。感光面积 φ0.5 mm。暗电流 2 nA。截止频率 800 MHz。终端电容 3.6 pF。其余显示与 S17268-02 相同，冷却仍写成 Non-cooled，产品页规格表没有这一行。手册标 343 KB。`,
        `手册仍是 ${s17268Sheet}，记为约 2025 年 8 月。特性里的截止频率只点名 S17268-02 的 2 GHz，没有写这一只的 0.8 GHz。电特性表这一列截止频率典型 0.8 GHz，终端电容典型 3.6 pF，暗电流典型 0.2 nA、最大 2 nA。感光面积 ϕ0.5 mm。击穿电压范围仍是 140 V、160 V、180 V。外形图把这一只的感光面写成 ϕ0.5。` +
          `约 2026 年 6 月的选型指南把这一行的感光面积写成 ɸ0.5，截止频率 800 MHz，终端电容 3.6 pF，光谱范围与 S17268-02 同一格 350 to 1000 nm。封装两行仍是 Glass 和 epoxy。` +
          placeSi,
      ]),
    ],
  },
  {
    id: "s2384",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S2384：滨松低偏压、800 nm 波段 Si APD",
    summary:
      "产品页没有写发布日期。这一页只有 S2384。手册文件名是 s12023-02_etc_kapd1007e.pdf，页脚目录号 KAPD1007E19，写 Jul. 2026 DN，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。索引 newState 是 false，是第 3 行。产品页没有正文段。手册正文写 These are 800 nm band near-infrared Si APDs。",
    applications: [],
    technologies: [],
    models: [
      page("S2384", "2026-07", si("S2384"), [
        "产品页没有写发布日期。一级标题写 S2384。页面标题和 og:title 都写 Si APD S2384 | Hamamatsu Photonics，竖线前面是一个空格。二级标题写 Low bias operation, for 800 nm band，是一行。二级标题下面是两个空的 p，没有另起一段说明。特性三条，连字符后面是普通空格：Stable operation at low bias、High-speed response、High sensitivity and low noise。name 和 og:description 都写成 Features- Stable operation at low bias- High-speed response- High sensitivity and low noise，连字符两边没有空格。产品页没有写应用栏。下载标 876 KB/PDF。",
        "规格表类型分成两行，写 Near infrared type，下一行 (Low bias operation)。感光面积 φ3 mm，φ 是希腊小写 phi。封装 Metal。封装类别的表头写成 Package Category，C 是大写，值是 TO-5。峰值 800 nm。光谱范围 400 to 1000 nm。光灵敏度典型 0.5 A/W。暗电流最大 10 nA。截止频率典型 120 MHz。终端电容典型 40 pF。击穿电压典型 150 V。温度系数典型 0.65 V/℃，℃ 是 U+2103。增益典型 60。规格表没有冷却，没有窗材料，没有量子效率，也没有过剩噪声。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，然后换行。光灵敏度条件 λ=800 nm, M=1。没有写出暗电流、截止频率、终端电容、击穿电压和增益的条件。光谱图文件是 kapdb0020ed.svg。外形图文件是 kapda0012ec.svg。" +
          s2384Docs,
        `${siIntro}这一行是第 3 行，newState 是 false。productExp 写 Low bias operation, for 800 nm band。thumbAlt 写 S2384 product photo。typeNameSort 写成 S02384。类型的值停在 Near infrared type，换行后再写 (Low bias，没有把 operation) 放进值里；显示才写成 Near infrared type，换行 (Low bias operation)。感光面积的值写成 φ3，显示写成 φ3 mm。光谱范围的值写成 400 to 1000，显示才补上 nm。峰值 800 nm。击穿电压 150 V。温度系数 0.65 V/℃。截止频率 120 MHz。光灵敏度 0.5 A/W。暗电流 10 nA。终端电容 40 pF。增益的值是 60，没有单位。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-5。冷却的值写成 Non-cooled，显示也是 Non-cooled。产品页规格表没有冷却这一行。手册标 876 KB。索引地址 ${siIndex}。同一手册上的 S2385、S3884、S12023、S12051、S12086 和 S4315 是别的前缀，没有放进这一页。`,
        `手册 ${s2384Sheet}。文件名是 s12023-02_etc_kapd1007e.pdf。目录号 KAPD1007E19，页脚写 Cat. No. KAPD1007E19，下一行 Jul. 2026 DN，并写 Information described in this material is current as of July 2026。封面标题写 Si APD，型号写 S12023 series, etc.。副题写 Low bias operation, for 800 nm band。正文写 These are 800 nm band near-infrared Si APDs that can operate at low voltages, 200 V or less。下一句写 They are suitable for applications such as FSO (free space optics) and optical rangefinders。再下一句写 TE-cooled type S4315 series are also avaiable (see P.6)，avaiable 少一个字母。特性没有连字符：Stable operation at low bias、High-speed response、High sensitivity and low noise。应用写 FSO 和 Optical rangefinders。结构表这一只外形 (5)/K，封装 TO-5，感光面 ϕ3.0 mm，ϕ 是 U+03D5，产品页用的是 φ。注 *1 写 K=borosilicate glass, L=lens type borosilicate glass。注 *2 写 Photosensitive area in which a typical gain can be obtained。产品页规格表没有窗材料。绝对最大表这一组的正向电流 10 mA，反向电流 200 µA。工作温度 -20 to +85 °C，贮存温度 -55 to +125 °C。注 *3 写 No dew condensation。电特性表头写 Typ. Ta=25 °C, unless otherwise noted。光谱范围 400 to 1000 nm，峰值 800 nm，光灵敏度 0.5 A/W，量子效率 75%，击穿电压典型 150 V、最大 200 V，温度系数 0.65 V/°C，这几格是整组共用，产品页没有量子效率，击穿电压也没有最大 200 V。暗电流标 *5，典型 1 nA、最大 10 nA。截止频率 120 MHz，终端电容 40 pF，过剩噪声 0.3，增益 60。注 *5 写 The value at the gain listed in “Gain M”。产品页暗电流、截止频率和终端电容的测量条件没有写这项增益。光谱图号 KAPDB0020ED，条件 (Typ. Ta=25 °C, λ=800 nm)。量子效率图号 KAPDB0021EC。暗电流对反向电压图号 KAPDB0016ED，增益图号 KAPDB0017EC，终端电容图号 KAPDB0018ED，过剩噪声图号 KAPDB0022EA。产品页只放了光谱图。外形图 (5) S2384，图号 KAPDA0012EC，产品页文件名没有 EC。感光面中心对管帽中心写 -0.3≤X≤+0.3 和 -0.3≤Y≤+0.3。图上有一行写成 1.5. max.，1.5 后面多一个句点。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap。焊接条件写 Solder temperature: 260 °C (10 s or less, once)。下一句写 Solder the leads at a point at least 1 mm away from the package body。第 6 页把 S4315-04 的 APD used 写成 S2384，峰值注 *8 写 M=60。注 *9 把 temperature 写成 temperatuer。S4315 是另一个前缀，没有放进这一页。相关信息的注意事项写 Precautions / Metal, ceramic, plastic package products，ceramic 和 plastic 是小写。产品页写成 Metal, Ceramic, Plastic products。手册的目录只列 Technical note / Si APD，没有把选型指南和 APD 模块技术笔记列进去。` +
          `选型指南 ${siGuide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。第 11 页标题写 Low bias operation。正文写 They can obtain high gain with a bias voltage of 200 V or less, so they are suitable for FSO, optical fiber communications, etc.。手册写的是 optical rangefinders，不是 optical fiber communications。这一行感光面写成 ɸ3.0，ɸ 是 U+0278。截止频率 120 MHz，表头写 R<sub>L</sub>=50 Ω。终端电容 40 pF。增益 60，表头写 λ=800 nm。光谱范围 400 to 1000 nm、击穿电压最大 200 V 和温度系数 0.65 V/°C 印在整组中间，这一行没有再印一遍。封装 TO-5 印在 S3884 和 S2384 两行中间。S2385 那一行写成 TO-8。注 *1 写 Area in which a typical gain can be obtained。注 *2 写 Value obtained when operated at the gain indicated in the table。手册把面积注编成 *2，把增益注编成 *5。光谱图号 KAPDB0020ED，与手册相同。增益图号 KAPDB0017EC，也与手册相同。页脚页码写 11 / 22。第 20 页把模块 C12702-04 和 C12703-01 的 Built-in APD 写成 S2384，感光面都写成 ɸ3.0。这两只是模块，没有另开产品页。` +
          placeS2384,
      ]),
    ],
  },
  {
    id: "s2385",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S2385：滨松低偏压、800 nm 波段 Si APD",
    summary:
      "产品页没有写发布日期。这一页只有 S2385。手册文件名是 s12023-02_etc_kapd1007e.pdf，页脚目录号 KAPD1007E19，写 Jul. 2026 DN，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。索引 newState 是 false，是第 4 行。产品页没有正文段。手册正文写 These are 800 nm band near-infrared Si APDs。感光面积产品页写 φ5 mm，手册写 ϕ5.0 mm。封装类别是 TO-8。",
    applications: [],
    technologies: [],
    models: [
      page("S2385", "2026-07", si("S2385"), [
        "产品页没有写发布日期。一级标题写 S2385。页面标题和 og:title 都写 Si APD S2385 | Hamamatsu Photonics，竖线前面是一个空格。二级标题写 Low bias operation, for 800 nm band，是一行。二级标题下面是两个空的 p，没有另起一段说明。特性三条，连字符后面是普通空格：Stable operation at low bias、High-speed response、High sensitivity and low noise。name 和 og:description 都写成 Features- Stable operation at low bias- High-speed response- High sensitivity and low noise，连字符两边没有空格。keywords 写 Si APDs，末尾有一个空格。产品页没有写应用栏。下载标 876 KB/PDF。",
        "规格表类型分成两行，写 Near infrared type，下一行 (Low bias operation)。感光面积 φ5 mm，φ 是希腊小写 phi。封装 Metal。封装类别的表头写成 Package Category，C 是大写，值是 TO-8。峰值 800 nm。光谱范围 400 to 1000 nm。光灵敏度典型 0.5 A/W。暗电流最大 30 nA。截止频率典型 40 MHz。终端电容典型 95 pF。击穿电压典型 150 V。温度系数典型 0.65 V/℃，℃ 是 U+2103。增益典型 40。规格表没有冷却，没有窗材料，没有量子效率，也没有过剩噪声。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，然后换行。光灵敏度条件 λ=800 nm, M=1。没有写出暗电流、截止频率、终端电容、击穿电压和增益的条件。光谱图文件是 kapdb0020ed.svg。外形图文件是 kapda0013ee.svg。" +
          s2384Docs,
        `${siIntro}这一行是第 4 行，newState 是 false。productExp 写 Low bias operation, for 800 nm band。thumbAlt 写 S2385 product photo。typeNameSort 写成 S02385。类型的值停在 Near infrared type，换行后再写 (Low bias，没有把 operation) 放进值里；显示才写成 Near infrared type，换行 (Low bias operation)。感光面积的值写成 φ5，显示写成 φ5 mm。光谱范围的值写成 400 to 1000，显示才补上 nm。峰值 800 nm。击穿电压 150 V。温度系数 0.65 V/℃。截止频率 40 MHz。光灵敏度 0.5 A/W。暗电流 30 nA。终端电容 95 pF。增益的值是 40，没有单位。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-8。冷却的值写成 Non-cooled，显示也是 Non-cooled。产品页规格表没有冷却这一行。手册标 876 KB。索引地址 ${siIndex}。同一手册上的 S2384 已经单独成页。S3884、S12023、S12051、S12086 和 S4315 是别的前缀，没有放进这一页。`,
        `手册 ${s2384Sheet}。文件名是 s12023-02_etc_kapd1007e.pdf。目录号 KAPD1007E19，页脚写 Cat. No. KAPD1007E19，下一行 Jul. 2026 DN，并写 Information described in this material is current as of July 2026。封面标题写 Si APD，型号写 S12023 series, etc.。副题写 Low bias operation, for 800 nm band。正文写 These are 800 nm band near-infrared Si APDs that can operate at low voltages, 200 V or less。下一句写 They are suitable for applications such as FSO (free space optics) and optical rangefinders。再下一句写 TE-cooled type S4315 series are also avaiable (see P.6)，avaiable 少一个字母。特性没有连字符。应用写 FSO 和 Optical rangefinders。结构表这一只外形 (6)/K，封装 TO-8，感光面 ϕ5.0 mm，ϕ 是 U+03D5，产品页用的是 φ。注 *1 写 K=borosilicate glass, L=lens type borosilicate glass。注 *2 写 Photosensitive area in which a typical gain can be obtained。产品页规格表没有窗材料。绝对最大表这一组的正向电流 10 mA，反向电流 200 µA。工作温度 -20 to +85 °C，贮存温度 -55 to +125 °C。注 *3 写 No dew condensation。电特性表头写 Typ. Ta=25 °C, unless otherwise noted。光谱范围 400 to 1000 nm，峰值 800 nm，光灵敏度 0.5 A/W，量子效率 75%，击穿电压典型 150 V、最大 200 V，温度系数 0.65 V/°C，过剩噪声 0.3，这几格是整组共用，这一行没有再印一遍。产品页没有量子效率、最大击穿电压和过剩噪声。这一行暗电流标 *5，典型 3 nA、最大 30 nA。截止频率 40 MHz，终端电容 95 pF，增益 40。注 *5 写 The value at the gain listed in “Gain M”。产品页暗电流、截止频率和终端电容的测量条件没有写这项增益。光谱图号 KAPDB0020ED。外形图 (6) S2385，图号 KAPDA0013EE，产品页文件名是 kapda0013ee.svg。感光面中心对管帽中心写 -0.4≤X≤+0.4 和 -0.4≤Y≤+0.4。图上有一行写成 1.0 max.。窗玻璃那句写 The glass window may extend a maximum of 0.2 mm above the upper surface of the cap。引线节距印成 7.5 ± 0.2，旁边印着 Index mark。焊接条件写 Solder temperature: 260 °C (10 s or less, once)。下一句写 Solder the leads at a point at least 1 mm away from the package body。S4315 系列的 APD used 没有写 S2385。S4315-04 的 APD used 写成 S2384。S4315 是另一个前缀，没有放进这一页。相关信息的注意事项写 Precautions / Metal, ceramic, plastic package products，ceramic 和 plastic 是小写。产品页写成 Metal, Ceramic, Plastic products。` +
          `选型指南 ${siGuide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。第 11 页标题写 Low bias operation。正文写 They can obtain high gain with a bias voltage of 200 V or less, so they are suitable for FSO, optical fiber communications, etc.。手册写的是 optical rangefinders，不是 optical fiber communications。这一行感光面写成 ɸ5.0，ɸ 是 U+0278。截止频率 40 MHz，表头写 R<sub>L</sub>=50 Ω。终端电容 95 pF。增益 40，表头写 λ=800 nm。封装写成 TO-8，印在这一行。光谱范围 400 to 1000 nm、击穿电压最大 200 V 和温度系数 0.65 V/°C 印在整组中间，这一行没有再印一遍。注 *1 写 Area in which a typical gain can be obtained。注 *2 写 Value obtained when operated at the gain indicated in the table。手册把面积注编成 *2，把增益注编成 *5。光谱图号 KAPDB0020ED，与手册相同。增益图号 KAPDB0017EC，也与手册相同。页脚页码写 11 / 22。第 20 页的模块表把 C12702-04 和 C12703-01 的 Built-in APD 写成 S2384，没有写成 S2385。这两只是模块，没有另开产品页。` +
          placeS2384,
      ]),
    ],
  },
  {
    id: "s3884",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S3884：滨松低偏压、800 nm 波段 Si APD",
    summary:
      "产品页没有写发布日期。这一页只有 S3884。手册文件名是 s12023-02_etc_kapd1007e.pdf，页脚目录号 KAPD1007E19，写 Jul. 2026 DN，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。索引 newState 是 false，是第 5 行。产品页没有正文段。手册正文写 These are 800 nm band near-infrared Si APDs。感光面积产品页写 φ1.5 mm，手册写 ϕ1.5 mm。封装类别是 TO-5。",
    applications: [],
    technologies: [],
    models: [
      page("S3884", "2026-07", si("S3884"), [
        "产品页没有写发布日期。一级标题写 S3884。页面标题和 og:title 都写 Si APD S3884 | Hamamatsu Photonics，竖线前面是一个空格。二级标题写 Low bias operation, for 800 nm band，是一行。二级标题下面是两个空的 p，没有另起一段说明。特性三条，连字符后面是普通空格：Stable operation at low bias、High-speed response、High sensitivity and low noise。name 和 og:description 都写成 Features- Stable operation at low bias- High-speed response- High sensitivity and low noise，连字符两边没有空格。keywords 写 Si APDs，末尾有一个空格。产品页没有写应用栏。下载标 876 KB/PDF。相关产品只列 APD module C12703，图片 alt 写 C12703 product photo，链接是 apd-module/C12703.html。这是模块，没有放进这一页。",
        "规格表类型分成两行，写 Near infrared type，下一行 (Low bias operation)。感光面积 φ1.5 mm，φ 是 U+03C6。封装 Metal。封装类别的表头写成 Package Category，C 是大写，值是 TO-5。峰值 800 nm。光谱范围 400 to 1000 nm。光灵敏度典型 0.5 A/W。暗电流最大 5 nA。截止频率典型 400 MHz。终端电容典型 10 pF。击穿电压典型 150 V。温度系数典型 0.65 V/℃，℃ 是 U+2103。增益典型 100。规格表没有冷却，没有窗材料，没有量子效率，也没有过剩噪声。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，然后换行。光灵敏度条件 λ=800 nm, M=1。没有写出暗电流、截止频率、终端电容、击穿电压和增益的条件。光谱图文件是 kapdb0020ed.svg。外形图文件是 kapda0011ec.svg，data-asset 写成 KAPDA0011EC.svg。" +
          s2384Docs,
        `${siIntro}这一行是第 5 行，newState 是 false。productExp 写 Low bias operation, for 800 nm band。thumbAlt 写 S3884 product photo。typeNameSort 写成 S03884。类型的值停在 Near infrared type，换行后再写 (Low bias，没有把 operation) 放进值里；显示才写成 Near infrared type，换行 (Low bias operation)。感光面积的值写成 φ1.5，显示写成 φ1.5 mm。光谱范围的值写成 400 to 1000，显示才补上 nm。峰值 800 nm。击穿电压 150 V。温度系数 0.65 V/℃。截止频率 400 MHz。光灵敏度 0.5 A/W。暗电流 5 nA。终端电容 10 pF。增益的值是 100，没有单位。封装的值和显示都写成 Metal。封装类别的值和显示都写成 TO-5。冷却的值写成 Non-cooled，显示也是 Non-cooled。产品页规格表没有冷却这一行。手册标 876 KB。索引地址 ${siIndex}。同一手册上的 S2384 和 S2385 已经单独成页。S12023、S12051、S12086 和 S4315 是别的前缀，没有放进这一页。`,
        `手册 ${s2384Sheet}。文件名是 s12023-02_etc_kapd1007e.pdf。目录号 KAPD1007E19，页脚写 Cat. No. KAPD1007E19，下一行 Jul. 2026 DN，并写 Information described in this material is current as of July 2026。封面标题写 Si APD，型号写 S12023 series, etc.。副题写 Low bias operation, for 800 nm band。正文写 These are 800 nm band near-infrared Si APDs that can operate at low voltages, 200 V or less。下一句写 They are suitable for applications such as FSO (free space optics) and optical rangefinders。再下一句写 TE-cooled type S4315 series are also avaiable (see P.6)，avaiable 少一个字母。特性没有连字符。应用写 FSO 和 Optical rangefinders。结构表这一只外形 (4)/K，封装 TO-5，感光面 ϕ1.5 mm，ϕ 是 U+03D5，没有写成 ϕ1.50，产品页用的是 φ。注 *1 写 K=borosilicate glass, L=lens type borosilicate glass。注 *2 写 Photosensitive area in which a typical gain can be obtained。产品页规格表没有窗材料。绝对最大表这一组的正向电流 10 mA，反向电流 200 µA。工作温度 -20 to +85 °C，贮存温度 -55 to +125 °C。注 *3 写 No dew condensation。电特性表头写 Typ. Ta=25 °C, unless otherwise noted。光谱范围 400 to 1000 nm，峰值 800 nm，光灵敏度 0.5 A/W，量子效率 75%，击穿电压典型 150 V、最大 200 V，温度系数 0.65 V/°C，过剩噪声 0.3，这几格是整组共用，这一行没有再印一遍。产品页没有量子效率、最大击穿电压和过剩噪声。这一行暗电流标 *5，典型 0.5 nA、最大 5 nA。截止频率 400 MHz，终端电容 10 pF。增益栏的 100 印在 S12086 那一行，这一行没有再印数字。索引和选型指南这一行都写成 100。S2384 印 60，S2385 印 40。注 *5 写 The value at the gain listed in “Gain M”。产品页暗电流、截止频率和终端电容的测量条件没有写这项增益。击穿电压后缀的例子只写 S12023-02-01、S12023-02-02 和 S12023-02-03，没有写 S3884。光谱图号 KAPDB0020ED。暗电流对反向电压图号 KAPDB0016ED，图上标了 S3884。终端电容图号 KAPDB0018ED，图上也标了 S3884。增益图号 KAPDB0017EC。外形图 (4) S3884，图号 KAPDA0011EC，产品页文件名是 kapda0011ec.svg。图上写 Window。感光面中心对管帽中心写 -0.3≤X≤+0.3 和 -0.3≤Y≤+0.3。图上有一行写成 1.5 max.。引线节距印成 5.08 ± 0.2。这一张没有印 Index mark，也没有印 The glass window may extend 那一句，那一句印在 (5) S2384 和 (6) S2385。焊接条件写 Solder temperature: 260 °C (10 s or less, once)。下一句写 Solder the leads at a point at least 1 mm away from the package body。S4315 系列的 APD used 没有写 S3884。S4315-04 的 APD used 写成 S2384。注 *9 把 temperature 写成 temperatuer。S4315 是另一个前缀，没有放进这一页。相关信息的注意事项写 Precautions / Metal, ceramic, plastic package products，ceramic 和 plastic 是小写。产品页写成 Metal, Ceramic, Plastic products。` +
          `选型指南 ${siGuide}，产品页标 2.6 MB/PDF。目录号 KAPD0001E15，页脚写 Jun. 2026 DN，并写 Information described in this material is current as of June 2026，记为约 2026 年 6 月。第 11 页标题写 Low bias operation。正文写 They can obtain high gain with a bias voltage of 200 V or less, so they are suitable for FSO, optical fiber communications, etc.。手册写的是 optical rangefinders，不是 optical fiber communications。这一行感光面写成 ɸ1.5，ɸ 是 U+0278。截止频率 400 MHz，表头写 R<sub>L</sub>=50 Ω。终端电容 10 pF。增益 100，表头写 λ=800 nm。封装 TO-5 印在 S3884 和 S2384 两行中间。光谱范围 400 to 1000 nm、击穿电压最大 200 V 和温度系数 0.65 V/°C 印在整组中间，这一行没有再印一遍。注 *1 写 Area in which a typical gain can be obtained。注 *2 写 Value obtained when operated at the gain indicated in the table。手册把面积注编成 *2，把增益注编成 *5。光谱图号 KAPDB0020ED，与手册相同。增益图号 KAPDB0017EC，也与手册相同。页脚页码写 11 / 22。第 20 页模块表 Type no. 写 C12703，Built-in APD 写 S3884，Effective photosensitive area 写 ɸ1.5。High band 写 10 MHz。Photoelectric conversion sensitivity 写 1.5 × 10^6，表头单位 (V/W)。Minimum detection limit 写 0.63，表头单位 (nW rms)。Type 写 High sensitivity，Low band 写 DC，Supply voltage 写 ±12，这三格印在 C12703 和 C12703-01 两行中间，电源表头单位是 (V)。W×D×H 写 80 × 50 × 23，印在 C12703-01 那一行下面。C12703-01 和 C12702-04 的 Built-in APD 仍写成 S2384。这些是模块，没有另开产品页。` +
          placeS2384,
      ]),
    ],
  },
  {
    id: "g15978",
    date: "2025-05",
    companyId: "hamamatsu",
    category: "product",
    title: "G15978：滨松表面贴装 COB 封装 InGaAs APD",
    summary:
      "产品页没有写发布日期。手册目录号 KAPD1092E01，页脚写 May 2025 DN，Cat. No. 和 May 之间有两个空格，并写 The content of this document is current as of May 2025，记为约 2025 年 5 月。索引 newState 是 true。产品页和手册写封装 Glass epoxy，约 2026 年 8 月的选型指南写成 Plastic COB。",
    applications: [],
    technologies: [],
    models: [
      page("G15978-0020P", "2025-05", ingaas("G15978-0020P"), [
        "产品页没有写发布日期。一级标题写 G15978-0020P。页面标题和 og:title 都写 InGaAs APD G15978-0020P。二级标题写 Surface mount type COB package near-infrared detector。正文写 The G15978-0020P is an InGaAs APD available in a surface mount type COB package。下一句写 It is much smaller than the previous metal package type (G14858-0020AA), making it suitable for inclusion in compact and mobile equipment。特性前三条连字符后面是普通空格：Low dark current、Low capacitance、High sensitivity。后两条连字符后面是不换行空格：Small size: 1.6 mm × 0.8 mm × 0.7 mm、Compatible lead-free reflow soldering。产品页没有写应用栏。下载标 524 KB/PDF。",
        "规格表感光面积 φ0.2 mm，封装 Glass epoxy，封装类别 Surface mount type。光谱范围 950 nm to 1700 nm。峰值 1550 nm，光灵敏度典型 0.8 A/W，暗电流最大 50 nA，截止频率典型 900 MHz，终端电容典型 2.0 pF，击穿电压典型 65 V，温度系数典型 0.1 V/℃。规格表没有增益，也没有冷却。测量条件写 Ta=25℃，逗号前面没有空格，Photosensitivity: λ=1.55 μm, M=1。没有写出暗电流、截止频率和终端电容的条件。光谱图文件是 kapdb0417ea.svg。外形图文件是 kapda0235.svg。" +
          irDocs,
        `${ingaasIntro}这一行 newState 是 true。productExp 与二级标题相同。thumbAlt 是 null。typeNameSort 写成 G15978-0020P。感光面积 φ0.2 mm。光谱范围的值写成 950 nm to 1700，显示写成 950 nm to 1700 nm。峰值 1550 nm。光灵敏度 0.8 A/W。暗电流 50 nA。截止频率 900 MHz。终端电容 2.0 pF。击穿电压 65 V。温度系数 0.1 V/℃。封装的值写成 Glass，显示写成 Glass epoxy。封装类别的值写成 Surface mount，显示写成 Surface mount type。手册标 524 KB。索引地址 ${ingaasIndex}。另外四行的 newState 都是 false，没有放进这一页。相关产品列出 G14858-0020AA。`,
        `手册 ${g15978Sheet}。目录号 KAPD1092E01，页脚写 Cat. No. KAPD1092E01  May 2025 DN，并写 current as of May 2025。封面标题在 package 后面换行。特性没有连字符。结构表封装 Glass epoxy，窗口材料 Silicone resin，感光面积 ϕ0.2 mm。产品页没有写窗口材料。绝对最大反向电流 2 mA，正向电流 10 mA。工作温度 -40 to +60 °C，贮存温度 -40 to +125 °C。焊接一行把 temperature 写成 temperture。注 *1 写 No due condensation，due 不是 dew。注 *2 写 Reflow soldering, JEDEC J-STD-020 MSL 2, see P.4。光谱范围写成 0.95 to 1.7 µm。峰值 1.55 µm。光灵敏度条件 λ=1.55 µm, M=1，最小 0.65 A/W、典型 0.8 A/W。暗电流条件 VR=VBR × 0.95，典型 20 nA、最大 50 nA。暗电流温度系数典型 1.07 times/°C。终端电容典型 2.0 pF，条件 VR=VBR × 0.95, f=1 MHz。截止频率典型 0.9 GHz，条件 M=10, RL=50 Ω。产品页写成 900 MHz，测量条件没有写 M=10。击穿电压最小 50 V、典型 65 V、最大 80 V，条件 ID=100 µA。温度系数符号写成 Γ，范围 -40 to +60 °C，典型 0.1 V/°C。增益典型 30，条件 λ=1.55 µm, -30 dBm。产品页规格表没有增益。光谱图号 KAPDB0417EA。另有光灵敏度温度特性图 KAPDB0390EA、终端电容图 KAPDB0418EA 和暗电流图 KAPDB0423EB，产品页没有这三张图。外形图号 KAPDA0235EA，产品页文件名没有 EA。推荐焊盘图号 KAPDC0150EA。外围电路图号 KAPDC0005EC。回流焊图号 KMPDB0405EC。开封后贮存写成 A fter unpacking，A 和 fter 之间有空格，温度 15 to 30 °C，湿度 60% or less，并写 perform reflow soldering within 1 year。卷带包装 500 pcs/reel。卷盘外径 ϕ180 mm，轴芯 ϕ60 mm，带宽 8 mm，材料 PS，静电特性 Conductive。` +
          `选型指南 ${irGuide}，产品页标 2.2 MB/PDF。目录号 KIRD0001E23，页脚写 Aug. 2026 DN，并写 current as of August 2026，记为约 2026 年 8 月。InGaAs APD 这一节写 High-speed, high-sensitivity near infrared sensors with internal multiplication function。下一句写 Suitable for distance measurement and low-level light detection。手册写的是 Low-light-level detection。波长一行写 0.95 µm to 1.7 µm。G14858-0020AA 的封装写成 TO-18。这一只的封装写成 Plastic COB，下一行 (surface mount type)，括号前面没有空格。产品页和手册写的是 Glass epoxy，不是 Plastic。抽出的数字行落在两个型号之间，写成感光面积 ϕ0.2 mm、光谱范围 0.95 to 1.7 µm、击穿电压最大 80 V、截止频率 900 MHz、终端电容 2.0 pF、增益 30。` +
          placeIr,
      ]),
    ],
  },
];
