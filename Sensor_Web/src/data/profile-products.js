const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const profile = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/profile-sensor/${part}.html`;

const s15366Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15366_series_kmpd1234e.pdf";

const s15366Note =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s15366_series_kmpd9018e.pdf";

const s9132Sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s9132_kmpd1075e.pdf";

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/distance-position-sensor/profile-sensor.html";

export const profileProducts = [
  {
    id: "s15366",
    date: "2026-09",
    companyId: "hamamatsu",
    category: "product",
    title: "S15366：滨松轮廓传感器",
    summary:
      "三只产品页都没有写发布日期。手册目录号 KMPD1234E08，页脚写 Sep. 2026 DN，并写 Information described in this material is current as of September 2026，记为约 2026 年 9 月。索引共 4 行，只有 S15366-1024 的 newState 是 true。手册结构表也只在 S15366-1024 那一列标 NEW。",
    applications: ["machine", "scientific"],
    technologies: ["global"],
    models: [
      page("S15366-1024", "2026-09", profile("S15366-1024"), [
        "产品页没有写发布日期，也没有 meta description。页面标题写 Profile sensor S15366-1024。一级标题只写 S15366-1024。副标题写 Outputs the incident position coordinate data of light spot, built-in center-of-gravity calculation circuit。手册封面写 Outputs incident position coordinate data of light spot, with built-in center-of-gravity calculation circuit。",
        "正文写 The S15366-1024 is a profile sensor，并把 Y 方向投影的感光区写成 connected in one horizontal row。手册写成 one horizontal column。产品页写 Projection data can be obtained by obtaining the data of all lines in order。手册写 by collecting the data of all lines in order。两处都写 position detection and moving object detection can be performed faster than normal area image sensors，并写 built-in light spot automatic tracking mode。",
        "特性写有效感光区 8 × 8 mm、1024 + 1024 像素，最高帧率 807 frames/s max.，单 3.3 V，Global shutter readout，partial readout and binning readout，automatic tracking mode。规格表像素间距 7.8 μm，像素尺寸 7.8 × 7987.2 μm，感光面积 7.9872 × 7.9872 mm，Frame rate max. 807 frames/s，供电 3.3 V，测量条件 Ta=25 ℃，unless otherwise noted。同一张表把 S15366-256 的感光面积印成 7.8 × 1996.8 μm。",
        `索引 ${index} 的说明写 High-performance CMOS area sensors designed to acquire projection data and detect positions with high speed。Suitable for detecting light spot positions。Can also be integrated into factory inspection equipment。这一行 newState 是 true。productName 写 Profile sensor。productExp 写 Outputs the incident position coordinate data of light spot, built-in center-of-gravity calculation circuit。像素 1024 + 1024，间距 7.8 μm，像素尺寸 7.8 × 7987.2 μm，图像尺寸 7.9872 × 7.9872 mm。帧率字段名带 Typ，印出的值是 807 frames/s，没有写 max.。供电 3.3 V。typeNameSort 写成 S15366-1024。手册标 651 KB。`,
        `手册链接 ${s15366Sheet}。目录号 KMPD1234E08，页脚写 Sep. 2026 DN，并写 current as of September 2026，记为约 2026 年 9 月。结构表像素数 1024 (H) + 1024 (V)，感光面积 7.9872 × 7.9872 mm，封装 Glass epoxy，窗口 Borosilicate glass。应用写 light spot position detection（printers, FA inspection equipment, amusement machines）、moving object detection（FA inspection equipment, amusement machines），以及 3D measurement（FA inspection equipment, medical measurement）。产品页还链接技术说明 ${s15366Note}，标 731 KB。`,
        "手册光谱响应范围 400 to 1000 nm，峰值灵敏度波长典型 650 nm。注 *12 写 λ=635 nm。绝对最大额定值里模拟和数字供电都是 -0.3 to +3.9 V。工作温度和贮存温度都是 -40 to +85 °C，并写 No dew condensation。推荐供电典型 3.3 V。A/D 转换器分辨率 8 bit。比较表写 X/Y-directions honeycomb array，扫描写 Two lines readout，重心计算电路 Built-in，输出是 Center-of-gravity calculation result 和 X/Y-direction projection data。接线图写 The S15366-1024 has 43 sub-pads. Connect them to ground。",
      ]),
      page("S15366-256", "2026-09", profile("S15366-256"), [
        "产品页没有写发布日期。副标题与 S15366-1024 相同。正文把 Y 方向写成 one horizontal row，手册写成 one horizontal column。特性写有效感光区 2 × 2 mm、256 + 256 像素，最高帧率 3156 frames/s max.。规格表像素尺寸 7.8 × 1996.8 μm，Frame rate max. 3156 frames/s，供电 3.3 V。感光面积这一格印成 7.8 × 1996.8 μm，和像素尺寸相同。S15366-512 和 S15366-1024 的产品页规格表也把这一列印成同样的值。",
        "索引 newState 是 false。像素 256 + 256，间距 7.8 μm，像素尺寸 7.8 × 1996.8 μm。图像尺寸印成 7.8 × 1996.8 μm，单位是 μm，不是 mm。帧率字段名带 Typ，印出的值是 3156 frames/s。typeNameSort 写成 S15366-256。手册仍标 651 KB。",
        "meta description 写 horizontal row，并写有效面积 2 × 2 mm、256 + 256 像素，以及 4 × 4 mm、512 + 512 像素，没有写 8 × 8 mm。帧率写 1602 frames/s max.（512 + 512 pixels）、3156 frames/s max.（256 + 256 pixels），以及 83333 frames/s max.（2 + 2 pixels）。可见特性列表只写 3156 frames/s max.。手册特性列表写的是 3156、1602 和 807 frames/s max.，没有印 83333，也没有印 2 + 2 pixels。",
        `手册仍是 ${s15366Sheet}，记为约 2026 年 9 月。结构表这一列像素数 256 (H) + 256 (V)，像素尺寸 7.8 × 1996.8 µm，感光面积 1.9968 × 1.9968 mm。示意图的感光区标到 (255, 255)，重心坐标例子写成 (128.40, 124.78)。光谱响应范围 400 to 1000 nm，峰值灵敏度波长典型 650 nm。暗态、主时钟 20 MHz 时，模拟端电流典型 24 mA、最大 35 mA，数字端典型 4 mA、最大 6 mA。`,
      ]),
      page("S15366-512", "2026-09", profile("S15366-512"), [
        "产品页没有写发布日期。副标题与另外两只相同。正文同样把 Y 方向写成 one horizontal row。特性写有效感光区 4 × 4 mm、512 + 512 像素，最高帧率 1602 frames/s max.。规格表像素尺寸 7.8 × 3993.6 μm，感光面积 3.9936 × 3.9936 mm，Frame rate max. 1602 frames/s，供电 3.3 V。同一张表里 S15366-256 的感光面积仍印成 7.8 × 1996.8 μm。",
        "索引 newState 是 false。像素 512 + 512，间距 7.8 μm，像素尺寸 7.8 × 3993.6 μm，图像尺寸 3.9936 × 3.9936 mm。帧率字段名带 Typ，印出的值是 1602 frames/s。typeNameSort 写成 S15366-512。手册仍标 651 KB。meta description 与 S15366-256 相同，里面有 83333 frames/s max.（2 + 2 pixels），可见特性列表只写 1602 frames/s max.。",
        `手册仍是 ${s15366Sheet}，记为约 2026 年 9 月。结构表这一列像素数 512 (H) + 512 (V)，感光面积 3.9936 × 3.9936 mm。光谱响应范围 400 to 1000 nm，峰值灵敏度波长典型 650 nm。暗态、主时钟 20 MHz 时，模拟端电流典型 40 mA、最大 60 mA，数字端典型 5 mA、最大 8 mA。接线图写 The S15366-512 has 16 sub-pads. Connect them to ground。`,
      ]),
    ],
  },
  {
    id: "s9132",
    date: "2026-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S9132：滨松高速投影轮廓传感器",
    summary:
      "产品页没有写发布日期。副标题写 High-speed frame rate sensor capable of acquiring two-dimensional projection data。手册目录号 KMPD1075E14，页脚写 Oct. 2026 DN，并写 current as of October 2026，记为约 2026 年 10 月。索引 newState 是 false。",
    applications: ["machine", "scientific"],
    technologies: [],
    models: [
      page("S9132", "2026-10", profile("S9132"), [
        "产品页没有写发布日期。页面标题写 Profile sensor S9132。一级标题只写 S9132。正文写 high-performance CMOS area sensor particularly intended to acquire projection data，并写 high-speed position detection and moving object detection。advantages over convensional 2D PSDs 里的 conventional 印成 convensional。external circuits are simplifi ed，simplified 中间有一个空格。手册同一句也写 convensional，simplified 则按行拆开。",
        "可见特性写 Sensor for acquiring 2D projection data、High-speed frame rate、Low power consumption、Digital video output、10-bit/8-bit switchable ADC，没有写帧率数字。规格表像素 256 + 256，间距 7.8 μm。像素尺寸印成 7.8  × 1996.8 μm，7.8 和乘号之间有两个空格。感光面积 1.9968 × 1.9968 mm。Frame rate max. 写 3200 frames/s (8-bit) 和 1600 frames/s (10-bit)。供电 5.0 V。测量条件 Ta=25 ℃，unless otherwise noted。",
        "索引 newState 是 false。productName 写 Profile sensor。productExp 写 Image sensor ideal for high-speed light spot position detection。像素 256 + 256，间距 7.8 μm。像素尺寸同样印成 7.8  × 1996.8 μm，中间两个空格。图像尺寸 1.9968 × 1.9968 mm。帧率字段名带 Typ，值写成 3200 frames/s (8-bit)<br>1600 frames/s (10-bit)。供电 5.0 V。typeNameSort 写成 S09132，9 前面多了一个 0。手册标 522 KB。",
        `手册链接 ${s9132Sheet}。目录号 KMPD1075E14，页脚写 Oct. 2026 DN，并写 current as of October 2026，记为约 2026 年 10 月。特性里的帧率写 3200 frames/s max. (8-bit) 和 1600 frames/s max. (10-bit)。应用与 S15366 手册相同：light spot position detection、moving object detection 和 3D measurement，括号里的设备也相同。结构表像素数 256 (H) + 256 (V)，像素尺寸 7.8 × 1996.8 µm，感光面积 1.9968 × 1.9968 mm，封装 Ceramic。窗口材料写 Borosilicate glass，单位那一格印成 mm。`,
        "手册模拟供电推荐值最小 4.75 V、典型 5 V、最大 5.25 V。数字供电最小 3 V、典型 5 V、最大 Vdd(A)。时钟频率表把 10-bit MODE 的最大值印成 5M，8-bit MODE 的最大值印成 10 M，单位都是 Hz，最小值都是 500。功耗典型 75 mW。注 *6 写成 V(clk)=V(st)=V(st)=5 V，V(st) 写了两次。光谱响应范围 380 to 1000 nm，峰值灵敏度波长典型 650 nm。暗电流典型 0.2 pA、最大 0.6 pA。饱和电荷典型 8 pC。PRNU 最大 ±10 %。工作温度 -5 to +65 °C，贮存温度 -10 to +85 °C。时序说明把 since 印成 scince。",
      ]),
    ],
  },
];
