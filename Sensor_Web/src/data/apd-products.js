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
