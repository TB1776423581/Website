const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/illuminance-sensor/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/illuminance-sensor.html";

const indexIntro =
  "索引一级标题写 Illuminance sensors。说明写 Illuminance sensors combine signal processing circuits and a photodiode with spectral sensitivity close to that of the human eye. Suitable for applications such as energy-saving sensors for TVs or light dimmers for liquid crystal panels and cell phones。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。Package type 和 Storage temperature 的列名末尾各有一个空格。";

const noTag =
  "这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。光谱响应说的是照度曲线，不是按波段成像，所以不放在技术下面。";

export const illuminanceProducts = [
  {
    id: "s9705",
    date: "2023-03",
    companyId: "hamamatsu",
    category: "product",
    title: "S9705：滨松照度传感器",
    summary:
      "产品页没有写发布日期。S9705 与 S9705-01DT 共用手册目录号 KPIC1059E13，页脚写 Mar. 2023 DN，并写 Information described in this material is current as of March 2023，记为约 2023 年 3 月。索引 newState 都是 false。页眉写 Light-to-frequency converter photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S9705", "2023-03", part("S9705"), [
        "产品页没有写发布日期。页眉写 Light-to-frequency converter photo IC。一级标题写 S9705。二级标题写 Converts light intensity to frequency of output pulse。正文写 The S9705 is a photo IC that combines a photodiode and a current-to-frequency converter on a CMOS chip. Output is a square wave (50 % duty ratio) with frequency directly proportional to light intensity incident on the photodiode。50 和 % 之间有空格。接着写 The S9705 has wide dynamic range。特性写 Converts light intensity to frequency、Wide dynamic range: 5 orders of magnitude、Excellent linearity、Output timing reset function、Digital output for direct interface to microcontroller、4-pin plastic package。",
        "规格表封装材料 Plastic，封装类型 Surface mount type，输出 Digital，电源电压 2.7 to 5.5 V，光谱响应范围 390 to 650 nm，峰值波长 550 nm，输出频率 50 kHz，工作温度 -40 to +85 deg.C，贮存温度 -40 to +100 deg.C，特性 CMOS level digital output。规格表没有反向电压。页面下载标 456 KB/PDF。缩略图是 k_s9705_pp_xx.jpg。外形图是 KPICA0063EE.svg。这一页没有相关产品。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Light-to-frequency converter photo IC。productExp 写成 Converts light intensity to frequency of output pulse。封装显示 Surface mount type，输出 Digital，光谱响应范围 390 to 650 nm，峰值波长 550 nm，电源电压 2.7 to 5.5 V，输出频率 50 kHz。封装类型的值写成 Surface mount，显示才加上 type。typeNameSort 写成 S09705。手册标 456 KB。thumbAlt 是 S9705。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9705_series_kpic1059e.pdf。目录号 KPIC1059E13，页脚写 Mar. 2023 DN，并写 Information described in this material is current as of March 2023，记为约 2023 年 3 月。封面写 S9705 series，二级标题写 Converts light level to frequency of output pulse，用 level，不用 intensity。占空比写成 50%，中间没有空格。正文写 The S9705 series has wide dynamic range，并写 light level。特性写 Converts light level to frequency。电特性表没有光谱响应范围这一行。峰值波长典型 550 nm。输出频率 fo 在 2856 K、100 lx 下最小 38、典型 50、最大 62 kHz。最大输出频率 fmax 最小 300 kHz、最大 1000 kHz，条件注记 *5 写 10 klx。线性度注记在表里写成 *6，文末两条注记都编成 *5，第二条写 Deviation from the straight line connecting the origin point to the fmax point, normalized by the 10 kHz value。电源电压 2.7 到 5.5 V。电流消耗典型 1.5 mA、最大 3.0 mA。暗频率最大 2 Hz。注记 *1 把 between 拆成 betw een，并把 characteristics and 印成 characteristicsand。焊接温度 250 (2 times)，注记 *2 写 MSL 4。外形图标题写 Dimensional outline (S9705, unit: mm)，图号 KPICA0063EE，旁边印 Photosensitive area、(4 ×) 0.35 和 (4 ×) 0.45。输出阻抗的单位在文本层印成 MW。卷带图号写成 KPINC0195EA，旁边还有 KMPDC0195EA。应用写 Liquid crystal monitor backlight dimmer for mobile devices、Brightness adjustment for large-screen liquid crystal TV、Lighting dimmer、Replacement for CdS photoconductive cells。" +
          noTag,
      ]),
      page("S9705-01DT", "2023-03", part("S9705-01DT"), [
        "产品页没有写发布日期。页眉写 Light-to-frequency converter photo IC。一级标题写 S9705-01DT。二级标题与 S9705 相同，写 Converts light intensity to frequency of output pulse。正文把型号换成 The S9705-01DT，占空比同样写成 50 %，中间有空格。特性六条与 S9705 相同，仍写 4-pin plastic package。",
        "规格表封装材料 Plastic，封装类型 Surface mount type，输出 Digital，电源电压 2.7 to 5.5 V，光谱响应范围 320 to 1000 nm，峰值波长 620 nm，输出频率 40 kHz，工作温度 -40 to +85 deg.C，贮存温度 -40 to +100 deg.C，特性 CMOS level digital output。页面下载标 456 KB/PDF，与 S9705 同一份手册。缩略图是 k_s9705-01_pp_xx.jpg，文件名停在 01，没有 DT。外形图仍是 KPICA0063EE.svg。这一页没有相关产品。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S9705 同一句。光谱响应范围 320 to 1000 nm，峰值波长 620 nm，输出频率 40 kHz。typeNameSort 写成 S09705-01DT。手册标 456 KB。thumbAlt 是 S9705-01DT。`,
        "手册与 S9705 同一份，目录号 KPIC1059E13，页脚写 Mar. 2023 DN，并写 current as of March 2023，记为约 2023 年 3 月。电特性表没有光谱响应范围这一行。峰值波长典型 620 nm。输出频率 fo 在 2856 K、20 lx 下最小 30、典型 40、最大 50 kHz，注记 *4 写 20 lx (S9705-01DT)。最大输出频率最大 1200 kHz，注记 *5 写 2 klx。焊接温度 240 (2 times)，注记 *3 写 MSL 5a。应用与 S9705 同一栏。" +
          noTag,
      ]),
    ],
  },
  {
    id: "s11153",
    date: "2022-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S11153：滨松照度传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1091E11，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。索引 newState 是 false。手册应用写 Automotive illuminance sensor。页眉写 Photo IC diode。",
    applications: ["auto"],
    technologies: [],
    models: [
      page("S11153-01MT", "2022-12", part("S11153-01MT"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S11153-01MT。二级标题写 Wide operating temperature: -40 to +105 ℃，用 ℃。正文写 The S11153-01MT photo IC has spectral response close to human eye sensitivity. Two active areas are made on a single chip。结尾写 has wide operating temperature range (-40 to +105 ℃)，wide 前面没有 a。特性写 Wide operating temperature: -40 to +105 ℃、Spectral response close to human eye sensitivity、Lower output-current variation compared with phototransistors、Excellent linearity、Low output deviation by different color temperature light source、Suitable for lead-free reflow (RoHS compliance)。",
        "规格表封装材料 Plastic，封装类型 Surface mount type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 300 to 820 nm，峰值波长 560 nm，工作温度 -40 to +105 deg.C，贮存温度 -40 to +125 deg.C。特性一行把 ℃ 换成 deg.C。测量条件写成 Ta=25 ℃，Photocurrent: 2856 K, 100 lx。页面下载标 645 KB/PDF。缩略图是 k_s11153-01mt_pp_xx.jpg。光谱响应图是 k_s11153-01mt_sr_xx,0.jpg。外形图是 KPICA0087EB.svg。这一页没有相关产品。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Photo IC diode。productExp 写成 The S11153-01MT photo IC has spectral response close to human eye sensitivity.Two active area are made on a single chip.Almost only the visible range can be measured，句号后面没有空格，area 用单数。结尾写 (-40 to +105℃)，105 和 ℃ 之间没有空格。特性显示 Wide operating temperature: -40 to +105 deg.C。typeNameSort 写成 S11153-01MT。手册标 645 KB。thumbAlt 是 S11153-01MT。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11153-01mt_kpic1091e.pdf。目录号 KPIC1091E11，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。二级标题写 Wide operating temperature: -40 to +105 °C。正文写 has a spectral response，以及 Two active areas，以及 has a wide operating temperature range。绝对最大额定光电流 5 mA，功耗 300 mW，注记 *1 写 3.0 mW/°C。焊接温度 250 (two times)，注记 *3 写 MSL 4，see P.7。电特性光谱响应范围 300 to 820 nm，峰值波长 560 nm。暗电流典型 1.0 nA、最大 50 nA。光电流在 VR=5 V、2856 K、100 lx 下最小 325 µA、最大 495 µA。上升时间典型 6.0 ms，下降时间典型 2.5 ms。外形图感光面积 0.32 × 0.46。方框图标题写成 Block diagram (S10604, S11154-01CT)，图号 KPICC0132EA。上升下降时间那一行写 Rise/fall time measurement method (S7183, S7184, S9066/-01, S9067/-01, S9363, S9648, S10085, S10108, S10109)，这些型号没有照度索引行，这一页不另收。应用写 Automotive illuminance sensor、Energy-saving sensor for TVs, etc.、Various types of light level measurement。Automotive illuminance sensor 放在汽车下面。其余句子对不上本站的应用标签。手册没有写 TOF。光谱响应说的是照度曲线，不是按波段成像，所以不放在技术下面。",
      ]),
    ],
  },
  {
    id: "s9066",
    date: "2020-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S9066：滨松照度传感器",
    summary:
      "产品页没有写发布日期。与 S9067-201CT 共用手册目录号 KPIC1088E07，页脚写 Dec. 2020 DN，并写 Information described in this material is current as of December 2020，记为约 2020 年 12 月。索引 newState 是 false。页眉写 Photo IC diode。",
    applications: [],
    technologies: [],
    models: [
      page("S9066-211SB", "2020-12", part("S9066-211SB"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S9066-211SB。二级标题写 Spectral response close to human eye sensitivity。正文写 Two photosensitive areas are made on a single chip. One is for detecting light in the visible to near infrared range and the other is only sensitive to near infrared light and used for output signal correction。结尾写 this photo IC offers lower output fluctuations，用单数 this。特性第一条以 filter. 结尾，句号留在条目里。还写 Operation just as easy to use as a photodiode、Large output current equivalent to phototransistors、Lower output-current fluctuations、Excellent linearity，以及 Low output fluctuations for light sources producing the same illuminance at different color temperatures。",
        "规格表封装材料 Plastic，封装类型 SIP type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 300 to 820 nm，峰值波长 560 nm，工作温度 -30 to +80 deg.C，贮存温度 -40 to +85 deg.C。特性一行写 Low output fluctuations for light sources producing the same illuminance at different color temperature，temperature 没有 s。测量条件写成 Ta=25 ℃，Photocurrent: 2856 K, 100 lx。页面下载标 925 KB/PDF。缩略图是 k_s9066-111_pp_xx.jpg。光谱响应图是 k_s9066-211sb_sr_xx,0.jpg。外形图是 KPICA0050EE.svg。相关产品写 Photo IC diode S9067-201CT 和 Photo IC diode S10604-200CT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Photo IC diode。productExp 写成 Spectral response close to human eye sensitivity, SIP type。特性与规格表那一行相同，temperature 没有 s。封装显示 SIP type，值写成 SIP。typeNameSort 写成 S09066-211SB。手册标 925 KB。thumbAlt 写成 S9066-111,S9066-211SB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9066-211sb_etc_kpic1088e.pdf。目录号 KPIC1088E07，页脚写 Dec. 2020 DN，并写 Information described in this material is current as of December 2020，记为约 2020 年 12 月。页眉写 Photo IC diodes，复数。封面把 S9066-211SB 和 S9067-201CT 排在同一行。正文写 The S9066-211SB, S9067-201CT photo ICs，中间用逗号，没有 and。difference、offer、different 的 fi 在文本层印成 ff 连字。功耗注记写 decreases at a rate of the following rate，S9066-211SB 是 250 mW、3.3 mW/°C。暗电流典型 1.0 nA、最大 50 nA。光电流最小 0.19 mA、最大 0.35 mA。上升时间典型 6.0 ms，下降时间典型 2.5 ms。上升下降图的 LED 写成 λ=660 nm，电特性条件写成 λ=560 nm。外形图写 (Includig burr)，感光面积 0.46 × 0.32，图号 KPICA0050EE。应用写 Energy-saving sensor for TVs, etc.、Light dimmers for liquid crystal panels、Cellular phone backlight dimmers、Various types of light level measurement。" +
          noTag,
      ]),
    ],
  },
  {
    id: "s9067",
    date: "2020-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S9067：滨松照度传感器",
    summary:
      "产品页没有写发布日期。与 S9066-211SB 共用手册目录号 KPIC1088E07，页脚写 Dec. 2020 DN，并写 Information described in this material is current as of December 2020，记为约 2020 年 12 月。索引 newState 是 false。页眉写 Photo IC diode。",
    applications: [],
    technologies: [],
    models: [
      page("S9067-201CT", "2020-12", part("S9067-201CT"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S9067-201CT。二级标题写 Spectral response close to human eye sensitivity，没有写 small COB。正文结构与 S9066-211SB 相同，型号换成 S9067-201CT，结尾仍写 this photo IC。特性六条与 S9066-211SB 相同，第一条仍以 filter. 结尾。",
        "规格表封装材料 Plastic，封装类型 COB (Chip On Board) type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 300 to 820 nm，峰值波长 560 nm，工作温度 -30 to +80 deg.C，贮存温度 -40 to +85 deg.C。特性一行写 Spectral response close to human eye sensitivity is attained without using visual-compensated filter。测量条件写成 Ta=25 ℃，Photocurrent: 2856 K, 100 lx。页面下载标 925 KB/PDF。缩略图是 k_s9067-101_pp_xx.jpg。光谱响应图用的是 k_s9066-211sb_sr_xx,0.jpg。外形图是 KPICA0051ED.svg。相关产品写 Photo IC diode S9066-211SB 和 Photo IC diode S10604-200CT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写成 Spectral response close to human eye sensitivity, small COB type，chip 用小写。特性与规格表那一行相同。封装显示 COB (Chip On Board) type。typeNameSort 写成 S09067-201CT。手册标 925 KB。thumbAlt 写成 S9067-101,S9067-201CT。`,
        "手册与 S9066-211SB 同一份。S9067-201CT 功耗 150 mW，注记写 2.0 mW/°C。光电流最小 0.18 mA、最大 0.34 mA。暗电流、峰值波长和上升下降时间与 S9066-211SB 同一套数字。外形图感光面积 0.32 × 0.46，图号 KPICA0051ED。应用与 S9066-211SB 同一栏。" +
          noTag,
      ]),
    ],
  },
  {
    id: "s10604",
    date: "2022-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S10604：滨松照度传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1090E07，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December, 2022，December 后面有逗号，记为约 2022 年 12 月。索引 newState 是 false。页眉写 Photo IC diode。",
    applications: [],
    technologies: [],
    models: [
      page("S10604-200CT", "2022-12", part("S10604-200CT"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S10604-200CT。二级标题写 COB (chip on board) type, small package，chip 用小写。正文写 Two photosensitive areas are made on a single chip，结尾写 Effects of infrared remote control light on sensitivity are reduced when compared to previous types。特性写 Small package: 2.0 × 1.25 × 0.8t mm，下一行 about 1/5 the cubic volume of previous type (S9067-201CT)，about 用小写，没有单独的项目符号。色温那一条在 producing the 后面换行。",
        "规格表封装材料 Plastic，封装类型 COB (Chip On Board) type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 300 to 820 nm，峰值波长 560 nm，工作温度 -30 to +80 deg.C，贮存温度 -40 to +85 deg.C。特性一行写 Spectral response close to human eye sensitivity。测量条件写成 Ta=25 ℃，Photocurrent: 2856 K, 100 lx。页面下载标 821 KB/PDF。缩略图是 k_s10604-01ct_pp_xx.jpg。光谱响应图是 k_s10604-200ct_sr_xx,0.jpg。外形图是 KPICA0072EB.svg。相关产品写 Photo IC diode S9066-211SB 和 Photo IC diode S9067-201CT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写成 COB (chip on board) type, small package。特性与规格表那一行相同。typeNameSort 写成 S10604-200CT。手册标 821 KB。thumbAlt 写成 S10604-01CT,S10604-200CT。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s10604-200ct_kpic1090e.pdf。目录号 KPIC1090E07，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December, 2022，December 后面有逗号，记为约 2022 年 12 月。封面在二级标题下另印 1 mm。特性把体积那一行写成 About 1/5，About 大写。功耗 150 mW，注记 *1 写 2 mW/°C。焊接温度 260 (two times)，注记 *3 写 MSL 3，see P.5。暗电流典型 1 nA、最大 50 nA，典型值没有小数。光电流最小 0.21 mA、最大 0.39 mA。上升时间典型 6.0 ms，下降时间典型 2.5 ms。外形图感光面积 0.32 × 0.46。方框图标题写成 Block diagram (S10604, S11154-01CT)，图号 KPICC0132EA。手册外形图号印成 KPICA0072EC，产品页外形图是 KPICA0072EB.svg。S11154-01CT 没有照度索引行，这一页不另收。应用写 Liquid crystal monitor backlight dimmer for cellular phone、Energy-saving sensor for large-screen TVs, etc.、Light dimmers for liquid crystal panels、Various types of light level measurement。" +
          noTag,
      ]),
    ],
  },
  {
    id: "s11154",
    date: "2020-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S11154：滨松照度传感器",
    summary:
      "产品页没有写发布日期。手册页脚写 Cat. No. KPIN1092E05 Dec. 2020 DN，并写 Information described in this material is current as of December 2020，记为约 2020 年 12 月。文件名是 s11154-201ct_kpic1092e.pdf。索引 newState 是 false。页眉写 Photo IC diode。",
    applications: [],
    technologies: [],
    models: [
      page("S11154-201CT", "2020-12", part("S11154-201CT"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S11154-201CT。二级标题写 Reduced color temperature erros，errors 少了一个 r。正文写 alsmost only in the visible range，almost 多了一个 s。特性写 Redused color temperature error，Reduced 印成 Redused，error 用单数。还写 Spectral response close to human eye sensitivity、Lower output-current variation compared with phototransistors、Excellent linearity、Low output deviation by different color temperature light source、Suitable for lead-free reflow (RoHS compliance)。",
        "规格表封装材料 Plastic，封装类型 COB (Chip On Board) type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 480 to 640 nm，峰值波长 580 nm，工作温度 -30 to +80 deg.C，贮存温度 -40 to +85 deg.C。特性一行写 Color temperature errors reduced type。测量条件写成 Ta=25 ℃，Photocurrent: 2856 K, 100 lx。页面下载标 1.0 MB/PDF。缩略图是 k_s11154-01ct_pp_xx.jpg。光谱响应图是 k_s11154-201ct_sr_xx,0.jpg。外形图是 KPICA0072EB.svg，与 S10604-200CT 产品页同一张图。这一页没有相关产品。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Photo IC diode。productExp 写成 Illuminance sensor with reduced color temperature errors and spectral response nearly equal to human visual sensitivity，errors 是完整拼写。特性显示 Color temperature errors reduced type。光谱响应范围 480 to 640 nm，峰值波长 580 nm。typeNameSort 写成 S11154-201CT。手册标 1.0 MB。thumbAlt 写成 S11154-201CT product photo。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11154-201ct_kpic1092e.pdf。页脚写 Cat. No. KPIN1092E05 Dec. 2020 DN，目录号前缀是 KPIN，文件名是 kpic1092e。并写 Information described in this material is current as of December 2020，记为约 2020 年 12 月。二级标题写 Reduced color temperature errors。正文写 closely resemble human eye sensitivity，以及 almost only，没有 alsmost。特性写 Reduced color temperature error，拼写是 Reduced。功耗 150 mW，注记 *1 写 2 mW/°C。回流条件写 Peak temperature 260 °C max., two times，注记 *3 写 JEDEC level 3。暗电流典型 1.0 nA、最大 50 nA。光电流最小 70 μA、最大 150 μA。上升时间典型 6.0 ms，下降时间典型 2.5 ms，下降时间一行的条件写成 RL=10 kΩ, λ=560 nm。外形图感光面积 0.32 × 0.46，图号 KPICA0072EB。应用写 Energy-saving sensor for large-screen TVs, etc.、Various types of light level measurement。" +
          noTag,
      ]),
    ],
  },
  {
    id: "s13948",
    date: "2021-02",
    companyId: "hamamatsu",
    category: "product",
    title: "S13948：滨松照度传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1105E03，页脚写 Feb. 2021 DN，并写 Information described in this material is current as of February 2021，记为约 2021 年 2 月。索引 newState 是 false。页眉写 Photo IC diode。缩略图文件名是 k_s9648_pp_xx.jpg。",
    applications: [],
    technologies: [],
    models: [
      page("S13948-01SB", "2021-02", part("S13948-01SB"), [
        "产品页没有写发布日期。页眉写 Photo IC diode。一级标题写 S13948-01SB。二级标题写 Plastic package shaped the same as metal package。正文写 Two photosensitive areas are made on a single chip，并写 offers lower output fluctuations for light sources producing the same illuminance at different color temperatures。结尾写 encapsulated in a plastic package having the same shape as a metal package。特性第一条前面有一个空格。其中一条写 Operation just as easy as using photodiodes，用 photodiodes。还写 Lower output-current fluctuations compared with phototransistors and CdS photoconductive cells。",
        "规格表封装材料 Plastic，封装类型 Head-on type，输出 Analog，反向电压 -0.5 to +12 V，光谱响应范围 300 to 820 nm，峰值波长 560 nm，工作温度 -30 to +80 deg.C，贮存温度 -40 to +85 deg.C。特性一行写 Plastic package shaped the same as metal package。测量条件只写 Ta=25 ℃，没有写 2856 K 和 100 lx。页面下载标 632 KB/PDF。缩略图是 k_s9648_pp_xx.jpg，alt 写 S13948-01SB product photo。光谱响应图是 KPICB0239EA.svg。外形图是 KPICA0108EC.svg。这一页没有相关产品。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Photo IC diode。productExp 写成 Plastic package shaped the same as metal package。封装显示 Head-on type，值写成 Head-on。特性与 productExp 同一句。typeNameSort 写成 S13948-01SB。手册标 632 KB。thumbAlt 写成 S13948-01SB product photo。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13948-01sb_kpic1105e.pdf。目录号 KPIC1105E03，页脚写 Feb. 2021 DN，并写 Information described in this material is current as of February 2021，记为约 2021 年 2 月。特性写 Operation just as easy to use as a photodiode，用 a photodiode。绝对最大额定的电压一行写 Maximum reverse voltage，符号 VR max，数值 -0.5 to 12 V，没有加号。功耗 250 mW，注记 *1 写 3.3 mW/°C。没有焊接温度这一行。电特性条件写 unless otherwise noted，句号放在括号里。暗电流典型 1.0 nA、最大 50 nA。光电流最小 0.18 mA、最大 0.34 mA。上升时间典型 6.0 ms，下降时间典型 2.5 ms。外形图感光面积 0.46 × 0.32。手册同时印 KPICA0108EB 和 KPICA0108EC。应用写 Energy-saving sensor for TVs, etc.、Light dimmers for liquid crystal panels、Various types of light level measurement。" +
          noTag,
      ]),
    ],
  },
];
