const page = (name, date, url, points) => ({
  name,
  date,
  url,
  linkLabel: "打开产品页",
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/i2c-compatible-ingaas-photodiode/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photodiodes/i2c-compatible-ingaas-photodiode.html";

const sheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/p13567-02ct_etc_kpic1109e.pdf";

const indexIntro =
  "索引页面标题写 I2C-compatible InGaAs photodiode | Hamamatsu Photonics，photodiode 是单数，2 不是上标，竖线两边各一个空格。一级标题写成 I<sup>2</sup>C-compatible InGaAs photodiodes，2 是上标，photodiodes 是复数。说明写 These are compact optical devices that integrate an InGaAs photodiode and an IC. Signal from a photodiode that receives near infrared light is output digitally through an I2C interface. 句末 interface 后面有一个空格。共两行，newState 都是 false。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。探测器、光谱范围、发射器和峰值发射波长四列默认都勾选。";

const docs =
  "相关文档里免责声明 Disclaimer / Opto-semiconductors 标 37 KB/PDF，安全注意事项 Safety consideration / Opto-semiconductors 标 34 KB/PDF，化合物光半导体注意事项 Precautions / Compound opto-semiconductors (photosensors, light emitters) 标 390 KB/PDF。产品页的 og:description 是空的。";

const place =
  "手册应用写 Moisture level detection 和 NIR (near infrared) photometry。这些句子没有写 TOF，也对不上本站的应用标签，所以不放在应用下面。光谱响应是一条灵敏度曲线，不是按波段成像，所以不放在技术下面。";

export const i2cIngaasProducts = [
  {
    id: "g13568",
    date: "2025-05",
    companyId: "hamamatsu",
    category: "product",
    title: "G13568：滨松支持外接 LED 的 I²C 近红外传感器",
    summary:
      "产品页没有写发布日期。与 P13567-02CT 共用手册，目录号 KPIC1109E05，页脚写 May. 2025 DN，并写 Information described in this material is current as of May 2025，记为约 2025 年 5 月。索引 newState 是 false。产品页正文写 This is a compact optical devices。手册写 These are compact optical devices。",
    applications: [],
    technologies: [],
    models: [
      page("G13568-02CT", "2025-05", part("G13568-02CT"), [
        "产品页没有写发布日期。页眉写 Photosensor with front-end IC。一级标题写 G13568-02CT。页面标题和 og:title 都写 I2C-compatible InGaAs photodiode G13568-02CT | Hamamatsu Photonics，2 不是上标。二级标题写成 I<sup>2</sup>C interface-compatible near IR sensor，2 是上标。正文写 This is a compact optical devices that integrates an InGaAs photodiode and IC。devices 是复数，is 是单数，IC 前面没有 an。下一句写 Signal from a photodiode that receives near infrared light is output digitally through an I<sup>2</sup>C interface。再下一句写 It includes a built-in LED driver and supports external LEDs。特性七条。第一条连字符后面有两个空格，写 I<sup>2</sup>C interface。后面几条连字符后面是一个空格：Low supply voltage: Vdd=2.25 V to 3.63 V，行末有空格；I<sup>2</sup>C bus voltage: 1.65 V；Low current consumption；Small package (7.7 × 3.1 × 1.0 mm)；Supports lead-free reflow soldering；Built-in 16-bit A/D converter，行末有空格。产品页没有写应用栏。下载标 787 KB/PDF，文件名是 p13567-02ct_etc_kpic1109e.pdf。",
        "规格表封装 Plastic，探测器 InGaAs PIN photodiode，元素数 1，感光面积 ϕ0.3 mm，光谱范围 0.9 to 1.7 µm，峰值 1.55 µm。发射器、发射面积、峰值发射波长和光谱半宽都写成 -。锚点有 Specifications、Spectral response (photodiode)、Dimensional outline (unit: mm) 和 Related documents。光谱图文件是 KPICB0215.svg。外形图文件是 KPICA0119.svg。" +
          docs,
        `${indexIntro}这一行排在前面，newState 是 false。productName 写 Photosensor with front-end IC。productExp 写成 I<sup>2</sup>C interface-compatible InGaAs photodiode，不是二级标题里的 near IR sensor。thumbAlt 写 G13568-02CT product photo。typeNameSort 写成 G13568-02CT。探测器的值写成 InGaAs PIN，显示写成 InGaAs PIN photodiode。光谱范围的值写成 0.9 to 1.7，显示写成 0.9 to 1.7 µm。发射器的值和显示都写成 -。峰值发射波长的值和显示都写成 -。手册标 787 KB。索引地址 ${index}。另一行是 P13567-02CT，前缀不同，单独一页。`,
        `手册 ${sheet}。目录号 KPIC1109E05，页脚写 Cat. No. KPIC1109E05 May. 2025 DN，并写 current as of May 2025。封面产品名写 Near infrared/proximity type sensor，型号并排写 P13567-02CT G13568-02CT。副题写 I2C interface-compatible near IR sensor，2 不是上标。引言写 These are compact optical devices that integrate an InGaAs photodiode and IC。产品页把 These are 写成 This is。索引说明在 IC 前面有 an，手册没有。后面写 A type with a built-in LED (P13567-02CT) and a type that includes a built-in LED driver and supports external LEDs (G13568-02CT) are available。特性没有连字符。I2C bus voltage 写成 1.65 V，与产品页相同。应用写 Moisture level detection 和 NIR (near infrared) photometry。结构表两列共用探测器 InGaAs PIN photodiode 和感光面积 ϕ0.3 mm，封装 Plastic。这一列的发射器和发射面积是 -。绝对最大表头写 Ta=25 °C。电源电压 -0.3 to +4 V，负载电流 ±10 mA，功耗 100 mW，两列相同。工作温度 -30 to +80 °C，贮存温度 -40 to +85 °C，条件都写 No dew condensation。这一列的 LED 驱动电流直流模式写 64，注写 total value of 3 terminals，脉冲模式写 50，条件 Duty ratio=10%, pulse width=0.16 ms。反向电压 5 V，注 *2 写 When driven externally。焊接温度 260 (3 times)，注 *3 写 Reflow soldering, IPC/JEDEC J-STD-020 MSL3, see P.19。推荐工作电源电压最小 2.25 V、典型 3.3 V、最大 3.63 V。I2C 总线上拉电压最小 1.65 V、典型 3.3 V、最大 Vdd + 0.5 V，条件 Rp=2.2 kΩ。这一列的传感器表写 Sensor area，条件 Ta=25 °C, Vdd=Vbus=3.3 V。光谱范围 0.9 to 1.7 µm，峰值 1.55 µm。工作模式电流最小 25 µA、典型 75 µA、最大 150 µA，待机最小 0.1 µA、典型 1.0 µA、最大 3.0 µA，条件 E=0 lx (dark state), excluding output current。暗计数最大 10 counts。高增益灵敏度最小 500 counts/lx、最大 2500 counts/lx，条件 Light source A 100 lx，没有典型值。高增益与低增益之比最小 4.8 倍、最大 7.9 倍。I2C 地址写成 0 × 2A，7-bit，乘号两边有空格。时钟频率最小 1 kHz、最大 400 kHz。手册后文写 G13568-02CT does not have a built in LED, so it can not use this condition，built in 没有连字符。光谱图号 KPICB0215EB，产品页文件名没有 EB。外形图号 KPICA0119EA，产品页文件名是 KPICA0119.svg。` +
          place,
      ]),
    ],
  },
  {
    id: "p13567",
    date: "2025-05",
    companyId: "hamamatsu",
    category: "product",
    title: "P13567：滨松内置 LED 的 I²C 近红外反射传感器",
    summary:
      "产品页没有写发布日期。与 G13568-02CT 共用手册 KPIC1109E05，页脚写 May. 2025 DN，并写 current as of May 2025，记为约 2025 年 5 月。索引 newState 是 false。产品页把 I²C 总线电压写成 1.6 V。手册和 G13568-02CT 的产品页写成 1.65 V。",
    applications: [],
    technologies: [],
    models: [
      page("P13567-02CT", "2025-05", part("P13567-02CT"), [
        "产品页没有写发布日期。页眉写 Near infrared/proximity type sensor。一级标题写 P13567-02CT。页面标题和 og:title 都写 I2C-compatible InGaAs photodiode P13567-02CT | Hamamatsu Photonics，2 不是上标。二级标题写成 I<sup>2</sup>C interface-compatible InGaAs photodiode (Built-in LED type)，2 是上标。正文写 This reflective sensor houses an InGaAs PIN photodiode and 1.45 µm band LED in a compact package。下一句写 The LED irradiates infrared light on the target object, and the photodiode signal generated from the reflected light is output digitally through an I<sup>2</sup>C interface。特性八条。第一条连字符后面有两个空格，写 I<sup>2</sup>C interface。Low supply voltage: Vdd=2.25 V to 3.63 V 的行末有空格。I<sup>2</sup>C bus voltage 写成 1.6 V。后面是 Low current consumption、Small package (7.7 × 3.1 × 1.0 mm)、Supports lead-free reflow soldering、Built-in 16-bit A/D converter，这一行末有空格，以及 Built-in LED driver。产品页没有写应用栏。下载标 787 KB/PDF，文件名是 p13567-02ct_etc_kpic1109e.pdf。",
        "规格表封装 Plastic，探测器 InGaAs PIN photodiode，元素数 1，感光面积 ϕ0.3 mm，光谱范围 0.9 to 1.7 µm，峰值 1.55 µm。发射器 Infrared LED，发射面积 0.31 × 0.31 mm，峰值发射波长 1.45 µm，光谱半宽 120 nm。锚点有 Specifications、Spectral response (photodiode)、Emission spectrum (LED)、Dimensional outline (unit: mm) 和 Related documents。光电二极管光谱图文件是 KPICB0215.svg。LED 发射光谱图文件是 KPICB0221.svg。外形图文件是 KPICA0115.svg。" +
          docs,
        `${indexIntro}这一行排在 G13568-02CT 后面，newState 是 false。productName 写 Near infrared/proximity type sensor。productExp 写 Reflective sensor with InGaAs photodiode and infrared LED housed in a compact package，没有写二级标题里的 I<sup>2</sup>C。thumbAlt 写 P13567-02CT product photo。typeNameSort 写成 P13567-02CT。探测器的值写成 InGaAs PIN，显示写成 InGaAs PIN photodiode。光谱范围的值写成 0.9 to 1.7，显示写成 0.9 to 1.7 µm。发射器的值写成 Infrared，显示写成 Infrared LED。峰值发射波长的值写成 1.45，显示写成 1.45 µm。手册标 787 KB。索引地址 ${index}。`,
        `手册仍是 ${sheet}，记为约 2025 年 5 月。封面把这一只写在前面。特性里的总线电压写成 I2C bus voltage: 1.65 V。产品页写成 1.6 V。手册把这一只的类型写成 Built-in LED type (P13567-02CT)，产品页特性写成 Built-in LED driver。应用与 G13568-02CT 同一段。结构表发射器 Infrared LED，发射面积 0.31 × 0.31 mm。绝对最大 LED 驱动电流直流模式 80 mA，脉冲模式 80 mA。反向电压 1 V。电源、温度和焊接与另一列相同。传感器表写 Sensor section，条件 Ta=25 °C, Vdd=Vbus=Vanode=3.3 V, LED: λp=1.45 µm, initial setting: high gain, integration time: 100 ms。光谱范围 0.9 to 1.7 µm，峰值 1.55 µm。工作电流最小 30 µA、典型 75 µA、最大 150 µA，待机最小 0.1 µA、典型 1.0 µA、最大 3.0 µA。待机时暗计数最大 10 counts。驱动 LED 时暗计数典型 3000 counts、最大 7500 counts。高增益灵敏度典型 50000 counts/mW，条件是铝、反射率 90%、距离 1 mm。高增益与低增益之比最小 4.8 倍、最大 7.9 倍。I2C 地址同样写成 0 × 2A。时钟频率最小 1 kHz、最大 400 kHz。注写 I2C interface (SDA, SCL) timing complies with “The I2C-bus specification version 2.1”。LED 表峰值发射波长最小 1.4 µm、典型 1.45 µm、最大 1.5 µm，条件 IF=50 mA。光谱半宽典型 120 nm、最大 170 nm。辐射通量典型 2.4 mW。正向电压典型 1.0 V。反向电流符号写成 lR，不是 IR，最大 10 µA。截止频率典型 15 MHz。上升时间典型 22 µs，下降时间典型 27 µs。光谱图号 KPICB0215EB。发射光谱图号 KPICB0221EA，产品页文件名是 KPICB0221.svg。外形图号 KPICA0115EB，产品页文件名是 KPICA0115.svg。` +
          place,
      ]),
    ],
  },
];
