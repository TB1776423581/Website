const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/color-sensor/rgb-color-sensor/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/color-sensor/rgb-color-sensor.html";

const indexIntro =
  "索引一级标题在 RGB 前面有两个空格，写 RGB color sensors。说明写 These photo ICs have sensitivity to red, green, and blue respectively. Detected results are serially output in a digital value。列设置里 Data sheet 的显示写成 DataSheet，表头写成 Data，下一行 Sheet。";

const noTag =
  "这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。";

export const rgbColorProducts = [
  {
    id: "s9706",
    date: "2021-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S9706：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1060E17，页脚写 Jul. 2021 DN，并写 Information described in this material is current as of July 2021，记为约 2021 年 7 月。索引 newState 是 false。页眉写 Color sensor。二级标题写 12-bit digital output。",
    applications: [],
    technologies: [],
    models: [
      page("S9706", "2021-07", part("S9706"), [
        "产品页没有写发布日期。页眉写 Color sensor。一级标题写 S9706。二级标题写 12-bit digital output。正文写 The S9706 is a digital color sensor sensitive to red (λ=615 nm), green (λ=540 nm)、blue(λ=465 nm) regions of the spectrum。green 后面用顿号，blue 前面没有空格。特性写 12-bit digital output、Simultaneous measurement of RGB three colors、2-step sensitivity switching (sensitivity ratio of 1:9)、Low voltage (3.3V) operation、CMOS monolithic photo IC、No external components required。3.3 和 V 之间没有空格，1 和 9 之间没有空格。",
        "规格表产品类型 RGB digital color sensor，封装材料 Plastic，封装类型 Surface mount type，封装尺寸 4.0 × 4.7 × 2.6 mm，感光面积 1.2 × 1.2 mm。蓝、绿、红光谱响应范围 400 to 540 nm、480 to 600 nm、590 to 720 nm。峰值波长 465 nm、540 nm、615 nm。低量程光灵敏度 0.21、0.45、0.64 LSB/lx，高量程 1.9、4.1、5.8 LSB/lx。工作温度 -25 to +85 deg.C，贮存温度 -20 to +85 deg.C。测量条件写成 Typ. Ta=25 deg.C, Vdd=5 V, Tg=100 ms, A light source, unless otherwise noted，用 deg.C。页面下载标 557 KB/PDF。光谱响应图文件名是 k_s9706_sr_xx,0.jpg。外形图标题写 Dimensional outline (unit: mm)，文件名是 KPICA0060EE.svg。相关产品写 Color sensor S11012-01CR。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Color sensor。productExp 不以 The 开头，blue 前面用 and，写成 S9706 is a digital color sensor sensitive to red (λ=615 nm), green (λ=540 nm) and blue (λ=465 nm) regions of the spectrum. Detected signals are serially output as 12-bit digital data。类型显示 RGB digital color sensor，封装 Surface mount type，感光面积 1.2 × 1.2 mm，红、绿、蓝范围与规格表相同。typeNameSort 写成 S09706。手册标 557 KB。thumbAlt 是 S9706。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9706_kpic1060e.pdf。目录号 KPIC1060E17，页脚写 Jul. 2021 DN，并写 Information described in this material is current as of July 2021，记为约 2021 年 7 月。封面在 Color sensor 下面写 S9706，二级标题写 12-bit digital output。正文用 and blue，不用顿号。特性把 3.3 V 和 1 : 9 都写成带空格。说明写 that it sensitive。另写 This product does not support lead-free soldering. Solder it by hand。电特性条件是 Ta=25 °C, Vdd=5 V, Tg=100 ms，电源电压一行写 3.0 到 5.5 V。感光面积写 All elements (9 × 9 elements)，1.2 × 1.2 mm，单色有效面积 0.32 mm²。低量程和高量程典型值与产品页相同。应用写 Display color adjustment、Various applications involving color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s10917",
    date: "2022-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S10917：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KSPD1078E10，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。索引 newState 是 false。页眉写 Si photodiode array。二级标题写 RGB color sensor integrated in small and thin package。",
    applications: [],
    technologies: [],
    models: [
      page("S10917-35GT", "2022-12", part("S10917-35GT"), [
        "产品页没有写发布日期。页眉写 Si photodiode array。一级标题写 S10917-35GT。二级标题写 RGB color sensor integrated in small and thin package。正文写 The S10917-35GT is a compact color sensor with a 3-channel photodiode mounted in one package, and sensitive to red (λ=590 to 680 nm), green (λ=470 to 600 nm) and blue (λ=390 to 530 nm) light。接着写 An infrared-cut filter is formed on the photosensitive area，以及 suitable for monitoring brightness of RGB-LED backlight LCD in hand-held devices such as cell phones。特性写 Infrared-cut filter formed on active area，这里用 active area。还写 Superior cost performance、Small, thin package: 3.0 × 1.6 × 1.0t mm（t 放在上标）、3-channel (RGB) Si photodiode、Photosensitive area: 1 × 1 mm/3-segment (RGB)、RoHS-compatible、Surface mount type。厚度的 t 放在上标。",
        "规格表产品类型 RGB photodiode，封装材料 Plastic，封装类型 COB type，封装尺寸 3.0 × 1.6 × 1.0 mm，感光面积 1 × 1 mm。蓝、绿、红范围 390 to 530 nm、470 to 600 nm、590 to 680 nm。峰值波长 460 nm、540 nm、620 nm。光灵敏度 0.2、0.23、0.17 A/W。暗电流（最大）0.05 nA，终端电容 12 pF，上升时间 0.1 μs。工作温度 -25 to +85 deg.C，贮存温度 -40 to +85 deg.C。测量条件写成 Typ. Ta=25 deg.C, per element, Photosensitivity: λ=λp, Dark current (all elements): VR=1 V, unless otherwise noted。页面下载标 355 KB/PDF。光谱响应图是 k_s10917-35gt_sr_xx,0.jpg。外形图是 KSPDA0174.svg。相关产品写 RGB Color Sensor S10942-01CT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array。productExp 写成 S10917-35GT is a color sensor molded into a plastic package having a 3-channel photodiode sensitive to the Red, Green and Blue regions of the spectrum. S10917-35GT is ideal for RGB-LCD backlight monitors installed in such as mobile phones。这句没有写红外截止滤光片，也没有写 cell phones。类型显示 RGB photodiode，封装 COB type，感光面积 1 × 1 mm。红、绿、蓝范围与规格表相同。typeNameSort 写成 S10917-35GT。手册标 355 KB。thumbAlt 是 S10917-35GT。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s10917-35gt_kspd1078e.pdf。目录号 KSPD1078E10，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。页眉写 Si photodiode。特性写 Infrared-cut filter formed on photosensitive area，以及 Small, thin package: 3.0 × 1.6 × 1.0 tmm，t 和 mm 连在一起。RoHS-compatible 与产品页相同。暗电流典型 1 pA、最大 50 pA，上升时间典型 0.1 μs、最大 0.5 μs，终端电容典型 12 pF、最大 25 pF。应用写 Portable or mobile equipment、RGB-LED type LCD backlight monitors、Detectors for various light sources、Color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s10942",
    date: "2022-12",
    companyId: "hamamatsu",
    category: "product",
    title: "S10942：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KSPD1079E08，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。索引 newState 是 false。页眉写 Si photodiode array。特性把封装厚度写成 10，t 放在上标，规格表写成 1.0 mm。",
    applications: [],
    technologies: [],
    models: [
      page("S10942-01CT", "2022-12", part("S10942-01CT"), [
        "产品页没有写发布日期。页眉写 Si photodiode array。一级标题写 S10942-01CT。二级标题写 RGB color sensor integrated in small and thin package。正文把 significantly 拆成 signifi cantly。句子写 When compared to the previous model (S9702), the S10942-01CT is signifi cantly miniaturized the package size by 80% in cubic volume and PC board mount space by 77% in area。结尾写 ideal for RGB-LCD backlight monitors installed in such as mobile phones。红通道写成 (λ=590 nm Min.)。特性写 Small, thin package: 3.0 × 1.6 × 10t mm（t 放在上标，数字是 10）。还写 3-channel (RGB) Si photodiode、Photosensitive area: 1 × 1 mm/3-segment (RGB)、RoHS compliant、Surface mount type。",
        "规格表产品类型 RGB photodiode，封装材料 Plastic，封装类型 COB type，封装尺寸 3.0 × 1.6 × 1.0 mm，感光面积 1 × 1 mm。蓝范围 400 to 540, 800 to 1000 nm，绿范围 480 to 600, 760 to 1000 nm，红范围 590 to 1000 nm。规格表没有峰值波长。光灵敏度 0.21、0.25、0.45 A/W。暗电流（最大）0.05 nA，终端电容 12 pF，上升时间 0.1 μs。工作温度 -25 to +85 deg.C，贮存温度 -40 to +85 deg.C。备注写 This sensor also has sensitivity in the infraredregion, so cut off infrared light as needed，infrared 和 region 连在一起。测量条件写成 Typ. Ta=25 deg.C, per element, Photosensitivity: Red (λ=640 nm), Green (λ=540 nm), Blue (λ=460) , Dark current (all elements): VR=1 V, unless otherwise noted。Blue 的波长没有写 nm，括号和逗号之间有一个空格。页面下载标 382 KB/PDF。光谱响应图是 k_s10942-01ct_sr_xx,0.jpg。外形图是 KSPDA0186.svg。相关产品写 RGB Color Sensor S10917-35GT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array。productExp 与 S10917-35GT 同一套句子，写成 S10942-01CT is a color sensor molded into a plastic package having a 3-channel photodiode sensitive to the Red, Green and Blue regions of the spectrum. S10942-01CT is ideal for RGB-LCD backlight monitors installed in such as mobile phones。没有写前代型号 S9702，也没有写红外范围。类型显示 RGB photodiode，封装 COB type，感光面积 1 × 1 mm。红范围 590 to 1000 nm，绿范围 480 to 600, 760 to 1000 nm，蓝范围 400 to 540, 800 to 1000 nm。typeNameSort 写成 S10942-01CT。手册标 382 KB。thumbAlt 是 S10942-01CT。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s10942-01ct_kspd1079e.pdf。目录号 KSPD1079E08，页脚写 Dec. 2022 DN，并写 Information described in this material is current as of December 2022，记为约 2022 年 12 月。页眉写 Si photodiode。正文写 significantly，没有拆开。特性行印成 Small, thin package: 3.0 × 1.6 × 10 tmm。上升时间典型 0.1 μs、最大 1.0 μs。暗电流典型 1 pA、最大 50 pA。光灵敏度条件是 Blue (λ=460 nm)、Green (λ=540 nm)、Red (λ=640 nm)，典型值 0.21、0.25、0.45 A/W。图题把 S10170 和 S10917-35GT、S9702 印在同一行，S10170 没有产品页行，这一页不另收。红外注记写 Since this photodiode has sensitivity in the infrared region, infrared light must be filtered out as needed。应用写 Portable or mobile equipment、RGB-LCD backlight monitors、Detectors for various light sources、Color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s11012",
    date: "2021-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S11012：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1081E09，页脚写 Jul. 2021 DN，并写 Information described in this material is current as of July 2021，记为约 2021 年 7 月。索引 newState 是 false。页眉写 Color sensor。二级标题写 12-bit digital output, COB type。规格表没有峰值波长。",
    applications: [],
    technologies: [],
    models: [
      page("S11012-01CR", "2021-07", part("S11012-01CR"), [
        "产品页没有写发布日期。页眉写 Color sensor。一级标题写 S11012-01CR。二级标题写 12-bit digital output, COB type。正文写 The S11012-01CR is a digital color sensor sensitive to red (λ=615 nm), green (λ=540 nm)、blue(λ=465 nm) regions of the spectrum，green 后面用顿号。特性写 12-bit digital output、COB type、Simultaneous measurement of RGB three colors、2-step sensitivity switching (sensitivity ratio of 1:9)、Low voltage (3.3V) operation、CMOS monolithic photo IC、No external components required。",
        "规格表产品类型 RGB digital color sensor，封装材料 Plastic，封装类型 COB type，封装尺寸 3.43 × 3.8 × 1.6 mm，感光面积 1.2 × 1.2 mm。蓝范围 400 to 540, 800 to 1000 nm，绿范围 480 to 600, 760 to 1000 nm，红范围 590 to 1000 nm。规格表没有峰值波长。低量程光灵敏度 0.3、0.6、1.4 LSB/lx，高量程 2.6、5.3、12.9 LSB/lx。工作温度 -20 to +80 deg.C，贮存温度 -20 to +85 deg.C。备注写 This sensor also has sensitivity in the infraredregion, so cut off infrared light as needed。测量条件写成 Typ. Ta=25 deg.C, Vdd=5 V, Tg=100 ms, A light source, unless otherwise noted。页面下载标 775 KB/PDF。光谱响应图是 k_s11012-01cr_sr_xx,0.jpg。外形图是 KPICA0088EA.svg。相关产品写 Color sensor S9706。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Color sensor。productExp 以 The 开头，blue 前面用 and，写成 The S11012-01CR is a digital color sensor sensitive to red (λ=615 nm), green (λ=540 nm) and blue (λ=465 nm) regions of the spectrum. Detected signals are serially output as 12-bit digital data。类型显示 RGB digital color sensor，封装 COB type，感光面积 1.2 × 1.2 mm。红、绿、蓝范围与规格表相同。typeNameSort 写成 S11012-01CR。手册标 775 KB。thumbAlt 是 S11012-01CR。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11012-01cr_kpic1081e.pdf。目录号 KPIC1081E09，页脚写 Jul. 2021 DN，并写 Information described in this material is current as of July 2021，记为约 2021 年 7 月。封面写 Color sensor、S11012-01CR，二级标题写 12-bit digital output。正文用 and blue。特性含 COB type，灵敏度比写成 1 : 9，电压写成 3.3 V。说明写 that it sensitive。电特性表把 Photosensitivity 印成 Photo sensitivity。感光面积写 All elements (9 × 9 elements)，1.2 × 1.2 mm。注记 *2 写 Since this product has sensitivity in the infrared region, infrared light must be filtered out as needed。低量程典型值 0.3、0.6、1.4 LSB/lx，高量程 2.6、5.3、12.9 LSB/lx。电源电压 3.0 到 5.5 V，测量条件 Vdd=5 V。应用写 Display color adjustment、Various applications involving color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s7505",
    date: "2015-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S7505：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。与单色颜色探测器 S6428-01、S6429-01、S6430-01 共用手册目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，June 后面有逗号，记为约 2015 年 6 月。索引 newState 是 false。页眉写 Si photodiode array。",
    applications: [],
    technologies: [],
    models: [
      page("S7505-01", "2015-06", part("S7505-01"), [
        "产品页没有写发布日期。页眉写 Si photodiode array。一级标题写 S7505-01。二级标题写 RGB color sensor。正文写 The S7505-01 uses a 3-channel (RGB) photodiode having blue, green and red sensitivities, and is molded into a surface mount type package。特性写 3 ch (RGB) Si photodiode、Surface mount type plastic package (9 × 9.6 mm)、High sensitivity。",
        "规格表产品类型 RGB photodiode，封装材料 Plastic，封装类型 Surface mount type，封装尺寸 9.0 × 9.6 × 2.1 mm，感光面积 3.2 × 3.2 mm。蓝、绿、红范围 400 to 540 nm、480 to 600 nm、590 to 720 nm。峰值波长 460 nm、540 nm、620 nm。光灵敏度 0.18、0.23、0.16 A/W。暗电流（最大）0.2 nA，上升时间 0.5 μs。规格表没有终端电容。工作温度 -10 to +60 deg.C，贮存温度 -20 to +70 deg.C。测量条件写成 Typ. Ta=25 deg.C, per element, Photosensitivity: λ=λp, Dark current (all elements): VR=1 V, unless otherwise noted。页面下载标 227 KB/PDF。光谱响应图是 k_s7505-01_sr_xx,0.jpg。外形图是 KMPDA0073ED.svg。相关产品写 Color sensor evaluation circuit C9331，这一页不另收。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array。productExp 写成 S7505-01 use a 3-channel (RGB) photodiode having blue, green and red sensitivities, and is molded into a surface-mountable package，动词用 use，封装写成 surface-mountable。类型显示 RGB photodiode，封装 Surface mount type，感光面积 3.2 × 3.2 mm。红、绿、蓝范围与规格表相同。typeNameSort 写成 S07505-01。手册标 227 KB。thumbAlt 是 S7505-01。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s6428-01_etc_kspd1013e.pdf。目录号 KSPD1013E08，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，June 后面有逗号，记为约 2015 年 6 月。封面把 S6428-01、S6429-01、S6430-01 和 S7505-01 排在同一行，页眉写 Si photodiodes。S7505-01 的特性写 3 ch (RGB) Si photodiode、Surface mount type plastic package (9 × 9.6 mm)、High sensitivity。结构表感光面积写成 Green, Red: 1.5 × 1.5，Blue: 1.5 × 1.5 (2 elements)，有效面积 Green, Red: 2.25 mm²，Blue: 4.5 mm²。光灵敏度 0.18、0.23、0.16 A/W。暗电流注记 *1 写 All elements，典型 10 pA、最大 200 pA。终端电容蓝通道典型 150 pF、最大 300 pF，红和绿典型 80 pF、最大 150 pF。上升时间 0.5 μs。回流那一节写 The S7505-01 supports lead-free soldering。应用写 White balance adjustment、Color identification、Projector and TV brightness level detection、Color control、Light source color temperature detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s9032",
    date: "2022-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S9032：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册写 Information described in this material is current as of July 2022，记为约 2022 年 7 月。页脚目录号 KSPD1067E13 写 Jul. 2023 DN。索引 newState 是 false。页眉写 Si photodiode array。",
    applications: [],
    technologies: [],
    models: [
      page("S9032-02", "2022-07", part("S9032-02"), [
        "产品页没有写发布日期。页眉写 Si photodiode array。一级标题写 S9032-02。二级标题写 RGB color sensor。正文写 The S9032-02 is a color sensor molded into a plastic package having a 3-channel (RGB) photodiode sensitive to the blue (λp=460 nm), green (λp=540 nm) and red (λp=620 nm) regions of the spectrum. The S9032-02 has a 3-segment (RGB) circular photosensitive area of φ2 mm。特性写 3-channel (RGB) Si photodiode、Surface-mount small plastic package、Spectral response range close to the human eye sensitivity、No sensitivity in the near IR region、Photosensitive area: 3-segment (RGB) circular photosensitive area of φ2 mm。",
        "规格表产品类型 RGB photodiode，封装材料 Plastic，封装类型 Surface mount type，封装尺寸 4.0 × 4.7 × 2.55 mm，感光面积 φ2 mm。蓝、绿、红范围 400 to 540 nm、480 to 600 nm、590 to 720 nm。峰值波长 460 nm、540 nm、620 nm。光灵敏度 0.18、0.23、0.16 A/W。暗电流（最大）0.1 nA，终端电容 40 pF，上升时间 0.2 μs。工作温度 -25 to +85 deg.C，贮存温度 -40 to +85 deg.C。测量条件写成 Typ. Ta=25 deg.C, per element, Photosensitivity: λ=λp, Dark current (all elements): VR=1 V, unless otherwise noted。页面下载标 336 KB/PDF。光谱响应图是 k_s9032-02_sr_xx,0.jpg。外形图是 k_s9032-02_do_xx,0.jpg，不是 svg。相关产品写 Color sensor evaluation circuit C9331，这一页不另收。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array。productExp 把感光面写成 active area，用 φ2 mm：S9032-02 has a 3-segment (RGB) circular active area of φ2 mm。类型显示 RGB photodiode，封装 Surface mount type，感光面积 φ2 mm。红、绿、蓝范围与规格表相同。typeNameSort 写成 S09032-02。手册标 336 KB。thumbAlt 是 S9032-02。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9032-02_kspd1067e.pdf。正文写 current as of July 2022，页脚写 Cat. No. KSPD1067E13 Jul. 2023 DN。页眉写 Si photodiode。感光面一词被拆成 photosensi-tive，直径符号印成 ϕ2 mm。暗电流典型 5 pA、最大 100 pA。终端电容典型 40 pF、最大 80 pF。上升时间典型 0.2 μs、最大 1.0 μs。图题写成 Dark current vs. reverse0voltage (S9032/-02)，reverse 和 voltage 之间插了一个 0，型号写成 S9032/-02。文末写 Color sensor evaluation circuit C9331，并写 sold separately，这一页不另收。应用写 Color adjustment for LED back light system for LCD、Color adjustment for LCD projector、Color tester、Color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s9702",
    date: "2023-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S9702：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。手册目录号 KSPD1071E14，页脚写 Jul. 2023 DN，并写 Information described in this material is current as of July 2023，记为约 2023 年 7 月。索引 newState 是 false。页眉写 Si photodiode array。产品页光谱响应图文件名用的是 S9032-02。",
    applications: [],
    technologies: [],
    models: [
      page("S9702", "2023-07", part("S9702"), [
        "产品页没有写发布日期。页眉写 Si photodiode array。一级标题写 S9702。二级标题写 RGB color sensor。正文写 The S9702 has a 3-segment (RGB) photosensitive area of □1 mm。接着写 When compared to the previous model (S9032-02), the S9702 is significantly miniaturized (package size 55% less in cubic volume, PC board mount space 43% less in area)。特性写 3-channel (RGB) Si photodiode、Surface-mount small plastic package、Spectral response range close to the human eye sensitivity、No sensitivity in the near IR region、Photosensitive area: 3-segment (RGB) photosensitive area of □1 mm。",
        "规格表产品类型 RGB photodiode，封装材料 Plastic，封装类型 Surface mount type，封装尺寸 3.0 × 4.0 × 2.0 mm，感光面积 1 × 1 mm。蓝、绿、红范围 400 to 540 nm、480 to 600 nm、590 to 720 nm。峰值波长 460 nm、540 nm、620 nm。光灵敏度 0.18、0.23、0.16 A/W。暗电流（最大）0.05 nA，终端电容 12 pF，上升时间 0.1 μs。工作温度 -25 to +85 deg.C，贮存温度 -40 to +85 deg.C。测量条件写成 Typ. Ta=25 deg.C, per element, Photosensitivity: λ=λp, Dark current (all elements): VR=1 V, unless otherwise noted。页面下载标 311 KB/PDF。光谱响应图文件名是 k_s9032-02_sr_xx,0.jpg。外形图是 KSPDA0170EC.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Si photodiode array。productExp 把感光面写成 active area of 1×1 mm，乘号两边没有空格。类型显示 RGB photodiode，封装 Surface mount type，感光面积 1 × 1 mm。红、绿、蓝范围与规格表相同。typeNameSort 写成 S09702。手册标 311 KB。thumbAlt 是 S9702。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9702_kspd1071e.pdf。目录号 KSPD1071E14，页脚写 Jul. 2023 DN，并写 Information described in this material is current as of July 2023，记为约 2023 年 7 月。页眉写 Si photodiode。感光面印成 o1 mm，用字母 o，不是方框。暗电流典型 1 pA、最大 50 pA。终端电容典型 12 pF、最大 25 pF。上升时间典型 0.1 μs、最大 1.0 μs。另写 This product does not support lead-free soldering temperature。图题把 S10170 和 S9702、S10917-35GT 印在一起，S10170 没有产品页行，这一页不另收。应用写 Portable or mobile equipment、RGB-LCD backlight monitors、Detectors for various light sources、Color detection。${noTag}`,
      ]),
    ],
  },
  {
    id: "s13683",
    date: "2024-01",
    companyId: "hamamatsu",
    category: "product",
    title: "S13683：滨松 RGB 颜色传感器",
    summary:
      "产品页没有写发布日期。S13683-02WT 的手册目录号 KPIC1103E04，写 The content of this document is current as of January 2024。S13683-03DT 和 S13683-04DS 共用手册目录号 KPIC1106E05，写 Information described in this material is current as of January 2024。页脚都写 Jan. 2024 DN，记为约 2024 年 1 月。三行 newState 都是 false。",
    applications: [],
    technologies: [],
    models: [
      page("S13683-02WT", "2024-01", part("S13683-02WT"), [
        "产品页没有写发布日期。页眉写 Color sensor。一级标题写 S13683-02WT。二级标题写 I2C-compatible color sensor，2 放在上标，没有写 interface。正文写 The S13683-02WT is a color sensor that supports the inter-integrated circuit (I2C) interface，2 放在上标。波长写成 λp=615 nm、λp=530 nm、λp=460 nm，输出 16-bit digital data。特性写 I2C interface-compatible（2 放在上标）、Sequential measurements of red, green, blue, and correction channel。校正通道两行写成 The channels detect incident light entering from outside the ﬁlter，以及 The product subtracts the correction channel output to obtain high accuracy RGB data。ﬁlter 用了连字。还写 2-step sensitivity switching (sensitivity ratio 1 : 10)、Adjustable sensitivity (1 to 65535 times) by setting the integration time、Low voltage (2.5 V or 3.3 V) operation、Low current consumption: 75 μA typ.、With infrared cutoff filter、Wide dynamic range (low gain: 1 to 10 klx)。",
        "规格表产品类型 RGB digital color sensor，封装材料 Plastic，封装类型 WL-CSP，封装尺寸 1.75 × 1.25 × 0.45 mm，感光面积 1.22 × 0.56 mm。蓝、绿、红范围 400 to 540 nm、455 to 630 nm、575 to 660 nm。峰值波长 460 nm、530 nm、615 nm。低量程 3.35、7.61、9.48 counts/lx，校正通道 1.66 counts/lx。高量程 31.7、76.2、94.5 counts/lx，校正通道 15.3 counts/lx。工作温度 -40 to +85 deg.C，贮存温度 -40 to +100 deg.C。备注写 This sensor also has sensitivity in the infrared region (785 to 885 nm)。测量条件写成 Typ. Ta=25 deg.C, Vdd=Vbus=3.3 V, A light source, unless otherwise noted。页面下载标 589 KB/PDF。光谱响应图是 KPICB0237EB.svg。外形图是 KPICA0107EA.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Color sensor。productExp 只写 I2C interface-compatible color sensor，2 放在上标。类型显示 RGB digital color sensor，封装 WL-CSP，感光面积 1.22 × 0.56 mm。红范围 575 to 660 nm，绿范围 455 to 630 nm，蓝范围 400 to 540 nm。typeNameSort 写成 S13683-02WT。手册标 589 KB。thumbAlt 是 S13683-02WT。`,
        `手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13683-02wt_kpic1103e.pdf。目录号 KPIC1103E04，页脚写 Jan. 2024 DN，并写 The content of this document is current as of January 2024，记为约 2024 年 1 月。封面标题写 I2C compatible color sensor，2 不是上标，compatible 前面没有连字符。正文另写 We provide an evaluation kit for this product。校正通道写 The channels detect incident light that does not pass the filter，以及 it is necessary to subtract the correction channel output with external processing。灵敏度比写成 1:10，没有空格。电流写成 75 μA typ.。低量程光灵敏度典型值印了两遍，蓝通道最小一栏分别是 2.01 和 2.51，典型值都是 3.35 counts/lx。注记 *5 写 In the range of 10% from the peak，没有写 785 to 885 nm。外形图感光面积印成 (1.22 × 0.56)，封装一边印 1.75 ± 0.05。文末写 Evaluation kit for color sensor C14442-01，尺寸 60 mm (H) × 21.5 mm (V)，这一页不另收。应用写 LCD backlight adjustment on cell phones, notebook PCs, etc.、Energy-saving sensors on wide screen TV, etc.、Various light level detection and chromaticity adjustment。${noTag}`,
      ]),
      page("S13683-03DT", "2024-01", part("S13683-03DT"), [
        "产品页没有写发布日期。页眉写 Color sensor。一级标题写 S13683-03DT。二级标题写 I2C interface-compatible color sensor (Reel packing)，2 放在上标。正文写 The S13683-03DT is a digital color sensor，波长用 λ=615 nm、λ=530 nm、λ=460 nm，不是 λp。结尾写 Stick packing type (S13683-04DS) with same specifications is also available。特性电流写成 75 uA typ.，用字母 u。红外滤光写 With internal infrared-cut ﬁlter。校正通道仍写 The product subtracts the correction channel output。包装写 Packing type: reel (S13683-03DT)，下一行 stick (S13683-04DS)。动态范围写成 Wide dynamic range (Low gain: 1 to 10 klx)，Low 用大写。",
        "规格表产品类型 RGB digital color sensor，封装材料 Plastic，封装类型 Surface mount type，封装尺寸 3.0 × 4.0 × 1.85 mm，感光面积 0.54 × 1.1 mm。蓝、绿、红范围 400 to 540 nm、455 to 630 nm、575 to 660 nm。峰值波长 460 nm、530 nm、615 nm。低量程 3.8、8.7、12.4 counts/lx，校正通道 3.0 counts/lx。高量程 40.0、86.0、122.0 counts/lx，校正通道 30.0 counts/lx。工作温度 -40 to +85 deg.C，贮存温度 -40 to +105 deg.C。规格表没有红外备注。测量条件写成 Typ. Ta=25 deg.C, Vdd=3.3 V, A light source, unless otherwise noted，没有写 Vbus。页面下载标 587 KB/PDF。光谱响应图是 KPICB0251EB,0.svg。外形图是 KPICA0111ED.svg。相关产品写 I2C interface-compatible color sensor S13683-04DS，这里的 2 不是上标。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S13683-02WT 相同，只写 I2C interface-compatible color sensor，2 放在上标。类型显示 RGB digital color sensor，封装 Surface mount type，感光面积 0.54 × 1.1 mm。红、绿、蓝范围与 S13683-02WT 的索引行相同。typeNameSort 写成 S13683-03DT。手册标 587 KB。thumbAlt 写成 S13683-03DT, S13683-04DS。`,
        `手册与 S13683-04DS 共用 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13683-03dt_-04ds_kpic1106e.pdf。目录号 KPIC1106E05，页脚写 Jan. 2024 DN，并写 Information described in this material is current as of January 2024，记为约 2024 年 1 月。封面写 Color sensors、S13683-03DT/-04DS，标题写 I2C interface-compatible color sensor。正文把两只写成 The S13683-03DT/-04DS is a digital color sensor。校正通道写 external processing，processing 后面有一个空格再接句号。电流写成 75 μA typ.。包装写 S13683-03DT: reel、S13683-04DS: stick。低量程典型值 3.8、8.7、12.4 counts/lx，高量程 40.0、86.0、122.0 counts/lx。比值一行把 sensitivity 缩成 sensi.。注记 *6 写 Relative sensitivity=more than 10%，等号两边没有空格。注记 *7 的引号写成 Compensation method for sensitivity variation。绝对最大额定值功耗 300 mW，焊接温度 240 (once) °C。文末写 Evaluation kit for color sensors C15701-01，尺寸同样是 60 mm (H) × 21.5 mm (V)，这一页不另收。应用写 LCD backlight adjustment for cell phones, notebook PC, etc.、Energy-saving sensor for large-size TV, etc.、Various types of light detection or color adjustment。${noTag}`,
      ]),
      page("S13683-04DS", "2024-01", part("S13683-04DS"), [
        "产品页没有写发布日期。页眉写 Color sensor。一级标题写 S13683-04DS。二级标题写 I2C interface-compatible color sensor (Stick packing)，2 放在上标。正文把卷带包装写成 Reel packing type (S13683-03DT) with same specifications is also available。特性与 S13683-03DT 相同，电流仍写 75 uA typ.，包装两行改成先写 stick (S13683-04DS)，再写 reel (S13683-03DT)。",
        "规格表与 S13683-03DT 同一套数字：封装 Surface mount type，尺寸 3.0 × 4.0 × 1.85 mm，感光面积 0.54 × 1.1 mm，低量程 3.8、8.7、12.4 counts/lx，高量程 40.0、86.0、122.0 counts/lx，贮存温度 -40 to +105 deg.C。测量条件同样只写 Vdd=3.3 V。页面下载标 587 KB/PDF。光谱响应图和外形图与 S13683-03DT 同一套文件名。相关产品写 I2C interface-compatible color sensor S13683-03DT。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp、类型、封装、感光面积和光谱范围都与 S13683-03DT 的索引行相同。typeNameSort 写成 S13683-04DS。手册标 587 KB。thumbAlt 同样写成 S13683-03DT, S13683-04DS。`,
        `手册与 S13683-03DT 同一份，目录号 KPIC1106E05，页脚写 Jan. 2024 DN，并写 Information described in this material is current as of January 2024，记为约 2024 年 1 月。手册把包装写成 S13683-04DS: stick。应用句子与 S13683-03DT 相同，对不上本站的应用标签。手册没有写 TOF。`,
      ]),
    ],
  },
];
