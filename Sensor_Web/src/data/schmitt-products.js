const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/schmitt-trigger-circuit-photo-ic/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/schmitt-trigger-circuit-photo-ic.html";

const indexIntro =
  "索引一级标题前面有两个空格，写 Schmitt trigger circuit photo IC。说明写 These devices integrate a photodiode, amplifier, Schmitt trigger circuit, and output phototransistor into a single chip. Their peak sensitivity is 850 nm。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。";

const noTag =
  "这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。峰值灵敏度是单一波长，不是按波段成像，所以不放在技术下面。";

const guide =
  "选型指南 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/photo_ic_kpic0001e.pdf，产品页标 3.2 MB/PDF。封面写 Selection guide - September 2026。目录号 KPIC0001E22，并写 Information described in this material is current as of September 2026，记为约 2026 年 9 月。施密特这一页的页眉写 Schmitt trigger circuit photo IC，同一行写 Digital output。说明写 These photo ICs are comprised of a photodiode, amplifier, schmitt trigger circuit, output transistor, and the like, all integrated in one chip，schmitt 用小写。注记 *7 写 λp=890 nm。";

export const schmittProducts = [
  {
    id: "s4810",
    date: "2017-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S4810：滨松施密特触发电路 Photo IC",
    summary:
      "产品页没有写发布日期。与 S6289 共用手册目录号 KPIC1005E07，页脚写 Oct. 2017 DN，并写 Information described in this material is current as of October 2017，记为约 2017 年 10 月。索引 newState 是 false。页眉写 Photo IC。索引 productName 也写 Photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S4810", "2017-10", part("S4810"), [
        "产品页没有写发布日期。页眉写 Photo IC。一级标题写 S4810。二级标题写 Operation at low voltage from 2.2 V。正文写 The S4810 is a digital output photo IC consisting of a photodiode, schmitt trigger circuit and output transistor, all integrated on a single chip and molded into a visible-cut, subminiature plastic package，and 和 molded 之间换行。schmitt 用小写。元描述把 andmolded 连在一起，并把 package.Features 连在一起。特性写 Low-voltage operation: 2.2 to 7 V、Subminiature plastic package with lens、Low current consumption、Open collector output，以及 \"H\" level output at light input。",
        "规格表封装材料 Plastic，封装类型 with lens, visible-cut，类型 Low-voltage operation, open collector output, \"H\" level output at light input，工作温度 -25 to +85 deg.C，贮存温度 -40 to +100 deg.C。电流一行的表头写成 Current comsumption，数值 1.3 mA。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，用 ℃。页面下载标 303 KB/PDF。缩略图是 k_s6289_s4827_s4828_s4810_pp_xx.jpg，alt 写 S4810,S6289。文件名里的 S4827、S4828 没有索引行，对应地址返回 404，这一页不另收。外形图二级标题写 Dimensional outlines，没有写 unit: mm。图是 KPICA0005EB.svg。相关产品写 Schmitt trigger circuit photo IC S6289 和 Schmitt trigger circuit photo IC S7610-10。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Photo IC。productExp 写成 Operation at low voltage from 2.2 V, \"H\" level output at light input，句末有 48 个全角空格。类型的值停在 light，显示才补上 input。封装类型的值写成 with lens,，显示才补上 visible-cut。工作温度 -25 to +85 deg.C，贮存温度 -40 to +100 deg.C。typeNameSort 写成 S04810。手册标 303 KB。thumbAlt 写成 S4810,S6289。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4810_s6289_kpic1005e.pdf。目录号 KPIC1005E07，页脚写 Oct. 2017 DN，并写 Information described in this material is current as of October 2017，记为约 2017 年 10 月。封面写 Low-voltage operation photo IC，型号写 S4810, S6289。二级标题写 Operation at low voltage from 2.2 V。正文写 The S4810 and S6289 are，用复数 are，并写 molded into a visible-cut, subminiature plastic package。特性与产品页五条相同，极性那一条写 S4810: \"H\" level output at light input。绝对最大额定电源电压 -0.5 to +7 V，输出电压 -0.5 to +7 V，输出电流 8 mA，功耗 150 mW，工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C。焊接写 260 °C, 3 s, at least 2.5 mm away from package surface。电特性条件写 Ta=25 °C, Vcc=5 V, light source: λp=890 nm LED。电源电压 2.2 到 7.0 V。低电平输出电压最大 0.4 V。高电平输出电流最大 10 μA。电流消耗典型 1.3 mA、最大 3 mA。L→H 阈值照度最大 1.5 μW/mm2，条件 RL=1.2 kΩ。迟滞一行的参数名写成 Hysterisis，符号是短横，注记 *3 写 S4810: EHL/ELH，典型 0.9。L→H 传输延迟最大 10 μs，H→L 最大 15 μs。上升时间典型 0.07 μs，下降时间典型 0.03 μs。峰值灵敏度波长典型 850 nm。注记写 Connect a 0.01 μF capacitor or larger between Vcc and GND。外形图标题写 Dimensional outline (unit: mm)，图号 KPICA0005EB，窗写 Visible-cut resin (black)，引脚写 VO、GND、Vcc。应用写 Cameras、Tape start/end mark sensor for VTRs, cassette tape recorders, etc.、Optical switches、Encoders。" +
          noTag +
          guide +
          "指南把 S4810 和 S6289 的封装写成 SIP with lens，阈值照度最大值 1.5 印在两行之间。峰值灵敏度 850 和电源 2.2 to 7.0 在文本层落在 S7610-10 那一行。",
      ]),
    ],
  },
  {
    id: "s6289",
    date: "2017-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S6289：滨松施密特触发电路 Photo IC",
    summary:
      "产品页没有写发布日期。与 S4810 共用手册目录号 KPIC1005E07，页脚写 Oct. 2017 DN，并写 Information described in this material is current as of October 2017，记为约 2017 年 10 月。索引 newState 是 false。页眉写 Schmitt trigger circuit photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S6289", "2017-10", part("S6289"), [
        "产品页没有写发布日期。页眉写 Schmitt trigger circuit photo IC。一级标题写 S6289。二级标题写 Operation at low voltage from 2.2 V。正文把型号换成 The S6289 is，and 和 molded 之间同样换行。元描述同样把 andmolded 连在一起，并把 package.Features 连在一起。特性五条与 S4810 相同，极性那一条换成 \"L\" level output at light input。",
        "规格表封装材料 Plastic，封装类型 with lens, visible-cut，类型 Low-voltage operation, open collector output, \"L\" level output at light input，工作温度 -25 to +85 deg.C，贮存温度 -40 to +100 deg.C。电流表头同样写成 Current comsumption，数值 1.3 mA。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 303 KB/PDF。缩略图与 S4810 相同，是 k_s6289_s4827_s4828_s4810_pp_xx.jpg，alt 写 S4810,S6289。外形图二级标题写 Dimensional outline (unit: mm)，图仍是 KPICA0005EB.svg。相关产品写 Schmitt trigger circuit photo IC S4810 和 Schmitt trigger circuit photo IC S7610-10。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Schmitt trigger circuit photo IC。productExp 写成 Operation at low voltage from 2.2 V, \"L\" level output at light input，句末没有全角空格。类型的值停在 light，显示才补上 input。封装类型的值写成 with lens,，显示才补上 visible-cut。typeNameSort 写成 S06289。手册标 303 KB。thumbAlt 写成 S4810,S6289。`,
        "手册与 S4810 同一份，目录号 KPIC1005E07，页脚写 Oct. 2017 DN，并写 current as of October 2017，记为约 2017 年 10 月。特性极性那一条写 S6289: \"L\" level output at light input。H→L 阈值照度最大 1.5 μW/mm2。迟滞一行仍写成 Hysterisis，注记 *3 写 S6289: ELH/EHL，典型 0.85。L→H 传输延迟最大 15 μs，H→L 最大 10 μs，与 S4810 对调。上升时间、下降时间和峰值灵敏度波长与 S4810 同一套数字。应用与 S4810 同一栏。" +
          noTag +
          "选型指南与 S4810 同一份，把这一行的封装写成 SIP with lens。",
      ]),
    ],
  },
  {
    id: "s7610",
    date: "2021-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S7610：滨松施密特触发电路 Photo IC",
    summary:
      "产品页没有写发布日期。与 S12558-01DT、S12558-02DT 共用手册目录号 KPIC1027E09，页脚写 Apr. 2021 DN，并写 Information described in this material is current as of April 2021，记为约 2021 年 4 月。索引 newState 是 false。页眉写 Schmitt trigger circuit photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S7610-10", "2021-04", part("S7610-10"), [
        "产品页没有写发布日期。页眉写 Schmitt trigger circuit photo IC。一级标题写 S7610-10。二级标题写 High reliability photo IC operable at 2.2 V。正文写 The S7610-10 is a photo IC comprised of a photodiode, amplifier, schmitt trigger circuit and output transistor, all integrated onto a single chip and molded with clear resin into a miniature package。接着写 An optical encoder resistant to tough environmental conditions can be configured by combining S7610-10 with infrared LED L6895-10 (made by HAMAMATSU)，HAMAMATSU 全大写。schmitt 用小写。元描述把 ).Features 连在一起。特性写 Pd plated leads、Miniature package with lens、Open collector output，以及 \"L\" level output at light input。",
        "规格表封装材料 Plastic，封装类型 with lens, clear，类型 Low-voltage operation, open collector output, \"L\" level output at light input，工作温度 -30 to +85 deg.C，贮存温度 -40 to +90 deg.C。电流表头写成 Current comsumption，数值 1.3 mA。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 679 KB/PDF。缩略图是 k_s7610-10_pp_xx.jpg，alt 写 S7610-10。外形图二级标题写 Dimensional outline (unit: mm)。图是 KPICA0044EC,0.svg，文件名里有逗号。相关产品写 Schmitt trigger circuit photo IC S4810、Schmitt trigger circuit photo IC S6289 和 Schmitt trigger circuit photo IC S12558-01DT，没有列 S12558-02DT。L6895-10 是红外 LED，这一页不另收。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Schmitt trigger circuit photo IC。productExp 写成 High reliability photo IC operable at 2.2 V。类型的值停在 light，显示才补上 input。封装类型的值写成 with lens,，显示才补上 clear。工作温度 -30 to +85 deg.C，贮存温度 -40 to +90 deg.C。typeNameSort 写成 S07610-10。手册标 679 KB。thumbAlt 是 S7610-10。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s7610-10_s12558-01dt_kpic1027e.pdf。目录号 KPIC1027E09，页脚写 Apr. 2021 DN，并写 Information described in this material is current as of April 2021，记为约 2021 年 4 月。封面写 Low-voltage operation photo IC，三个型号排成 S7610-10、S12558-01DT、S12558-02DT。二级标题写 High reliability photo IC operable at 2.2 V。正文写 The S7610-10, S12558-01DT and S12558-02DT are photo ICs comprised of，用 onto a single chip，并写 molded with clear resin into a miniature package。正文没有写 L6895-10。特性写 Low voltage operation (2.2 V)、Open collector output、\"L\" level output at light input，没有写 Pd plated leads，也没有写 Miniature package with lens。绝对最大额定电源电压和输出电压都是 -0.5 to +7 V。低电平输出电流 8 mA。功耗 250 mW，注记 *1 写 decreases at a rate of 3.3 mW/°C above Ta=25 °C .，句号前有空格。工作温度 -30 to +85 °C，贮存温度 -40 to +90 °C。焊接温度这一格是 *2，注记写 See the recommended soldering conditions (P.8)。推荐条件写 Solder temperature 260 °C max. (once, less than 3 s)，at least 2.5 mm away from lead roots。电特性条件写 Ta=25 °C, Vcc=5 V, unless otherwise noted, light source: λp=890 nm LED。低电平输出电压典型 0.05 V、最大 0.4 V，条件 IOL=4 mA, E=0.4 μW/mm2。高电平输出电流最大 10 μA。电流消耗典型 1.3 mA、最大 3 mA。H→L 阈值照度这一行写 S7610-10，典型 0.10、最大 0.25 μW/mm2，条件 RL=1.2 kΩ。迟滞参数名写成 Hysterisis，符号 Hys，条件 ELH/EHL，最小 0.75、典型 0.85、最大 0.95。L→H 传输延迟典型 4 μs、最大 15 μs，H→L 典型 1.5 μs、最大 10 μs。峰值灵敏度波长典型 850 nm。上升时间典型 0.07 μs、最大 1 μs，下降时间典型 0.03 μs、最大 1 μs。注记 *4 的第一行把平方印丢，写成 E0=0 μW/mm , E1=0.4 μW/mm，并写 RL=1.2 kΩ, CL=10 pF (S7610-10)。测量电路里的电容写成 0.1 μF。外形图标题写 Dimensional outlines (unit: mm)，S7610-10 那张图号是 KPICA0044ED，产品页外形图是 KPICA0044EC,0.svg。图上引脚写 GND、VO、Vcc，VO 用大写 O。应用写 FSO (free space optics)、Optical switch、Rotary encoders, etc.。" +
          noTag +
          guide +
          "指南这一行印峰值灵敏度 850、电源 2.2 to 7.0、阈值照度最大值 0.25，封装写 with lens。",
      ]),
    ],
  },
  {
    id: "s12558",
    date: "2021-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S12558：滨松施密特触发电路 Photo IC",
    summary:
      "产品页没有写发布日期。S12558-01DT 与 S12558-02DT 共用手册目录号 KPIC1027E09，页脚写 Apr. 2021 DN，并写 Information described in this material is current as of April 2021，记为约 2021 年 4 月。索引 newState 都是 false。两页页眉都写 Schmitt trigger circuit photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S12558-01DT", "2021-04", part("S12558-01DT"), [
        "产品页没有写发布日期。页眉写 Schmitt trigger circuit photo IC。一级标题写 S12558-01DT。二级标题写 High reliability photo IC operable at 2.2 V。正文写 The S12558-01DT is a photo IC comprised of a photodiode, amplifier, schmitt trigger circuit and output transistor，用单数 photo IC。结尾写 combining S12558-01DT with infrared LED L6895-10 (made by HAMAMATSU)，没有 the，HAMAMATSU 全大写。元描述把 ).Features 连在一起，并在第三条特性后截断，没有写 Surface mount type。特性写 Low voltage operation (2.2 V)、Open collector output、\"L\" level output at light input，以及 Surface mount type (Straight lead type)。",
        "规格表封装材料 Plastic，封装类型 clear，类型 Low-voltage operation, open collector output, \"L\" level output at light input，工作温度 -25 to +80 deg.C，贮存温度 -30 to +85 deg.C。电流表头写成 Current comsumption，数值 1.3 mA。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 679 KB/PDF，与 S7610-10 同一份手册。缩略图是 k_s12558-01dt_pp_xx.jpg，alt 写 S12558-01DT。外形图是 KPICA0093EA,0.svg。相关产品写 Schmitt trigger circuit photo IC S4810、Schmitt trigger circuit photo IC S6289 和 Schmitt trigger circuit photo IC S7610-10，没有列 S12558-02DT。注意事项链接写 Precautions / Surface mount type products，标 407 KB/PDF，文件名 kxx-a12029-eng.pdf。L6895-10 是红外 LED，这一页不另收。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Schmitt trigger circuit photo IC。productExp 与 S7610-10 同一句，写 High reliability photo IC operable at 2.2 V。类型的值停在 light，显示才补上 input。封装类型的值和显示都写成 clear。工作温度 -25 to +80 deg.C，贮存温度 -30 to +85 deg.C。typeNameSort 写成 S12558-01DT。手册标 679 KB。thumbAlt 是 S12558-01DT。`,
        "手册与 S7610-10 同一份，目录号 KPIC1027E09，页脚写 Apr. 2021 DN，并写 current as of April 2021，记为约 2021 年 4 月。文件名是 s7610-10_s12558-01dt_kpic1027e.pdf，没有把 S12558-02DT 写进文件名。工作温度 -25 to +80 °C，贮存温度 -30 to +85 °C。焊接温度写 240 (once)，注记 *3 写 Reflow soldering, IPC/JEDEC J-STD-020 MSL 5a, see P.8。回流图写 Preheat 70 to 90 s、Soldering 60 s max.。拆封后贮存写 30 °C or less，湿度 60% or less，并写 perform soldering within 24 hours。H→L 阈值照度这一行写 S12558-01DT/-02DT，典型 1.0、最大 2.0 μW/mm2。注记 *4 的第二行写 E0=0 μW/mm2, E1=4 μW/mm2, RL=1.2 kΩ, CL=10 pF (S12558-01DT/-02DT)。外形图标题写 S12558-01DT，感光面积 (0.4 × 0.4)，旁边印 (4 ×) 0.45 和 (4 ×) 0.35，图号 KPICA0093EA。引脚写 GND、GND、Vo、Vcc，Vo 用小写 o。还有 ϕ1.8、Depth 0.15 max.。推荐焊盘标题写 Recommended land patterns (unit: mm)。" +
          noTag +
          "选型指南把封装写成 Surface mount type (Straight lead type)，阈值照度最大值 2.0 印在 S12558-01DT 和 S12558-02DT 之间。",
      ]),
      page("S12558-02DT", "2021-04", part("S12558-02DT"), [
        "产品页没有写发布日期。页眉写 Schmitt trigger circuit photo IC。一级标题写 S12558-02DT。二级标题与 S12558-01DT 相同。正文写 The S12558-02DT is a photo ICs，photo ICs 用复数。amplifier 印成 ampliﬁer，configured 印成 conﬁgured，fi 连字。结尾写 combining the S12558-02DT，有 the，公司名写 Hamamatsu，不是全大写。元描述同样在第三条特性后截断。特性四条与 S12558-01DT 相同，最后一条换成 Surface mount type (Gull wing type)。",
        "规格表封装材料 Plastic，封装类型 clear，类型、工作温度和贮存温度与 S12558-01DT 相同。电流表头写成 Current comsumption，数值 1.3 mA。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 679 KB/PDF。缩略图是 k_s12558-02dt_pp_xx.jpg，alt 写 S12558-02DT。外形图是 KPICA0110EA,0.svg。相关产品只写 Schmitt trigger circuit photo IC S7610-10 和 Schmitt trigger circuit photo IC S12558-01DT。注意事项同样链接 Surface mount type products，407 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S12558-01DT 同一句。封装类型的值和显示都写成 clear。工作温度 -25 to +80 deg.C，贮存温度 -30 to +85 deg.C。typeNameSort 写成 S12558-02DT。手册标 679 KB。thumbAlt 是 S12558-02DT。`,
        "手册与 S12558-01DT 同一份。外形图标题写 S12558-02DT，感光面积同样写 (0.4 × 0.4)，图号 KPICA0110EA。引脚同样写 GND、GND、Vo、Vcc。推荐焊盘与 S12558-01DT 分成两张图。应用与 S7610-10 同一栏，写 FSO (free space optics)、Optical switch、Rotary encoders, etc.。" +
          noTag +
          "选型指南把封装写成 Surface mount type (Gull wing type)。",
      ]),
    ],
  },
];
