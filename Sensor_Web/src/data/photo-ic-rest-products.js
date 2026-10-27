const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const linkPart = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-optical-link/${name}.html`;
const switchPart = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-optical-switch/${name}.html`;
const flamePart = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-assemblies-for-flame-detection/${name}.html`;

const linkIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-optical-link.html";
const switchIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-for-optical-switch.html";
const flameIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/photo-ic-assemblies-for-flame-detection.html";
const ptrIndex =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/phototransistor.html";

const cols =
  "列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。";

const linkIntro =
  "索引一级标题写 Photo IC for optical link，前后没有空格。说明写 Photo IC receivers and emitters for plastic optical fiber communications。" +
  cols +
  "表头还有 Type1、Type2、Part Number、Package、Bandwidth、Operating supply voltage、Operating temperature、Storage temperature、Package type。Part Number 这一列的字段是对面器件。";

const linkSheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/l11354-01_etc_kpic1079e.pdf";

const linkDate =
  "产品页没有写发布日期。手册目录号 KPIC1079E09，页脚写 Jul. 2024 DN，并写 Information described in this material is current as of July 2024，记为约 2024 年 7 月。";

const linkNoTech =
  "手册没有写 TOF。峰值波长是单一数值，光谱图不是按波段成像，所以不放在技术下面。";

const guide =
  "选型指南 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/photo_ic_kpic0001e.pdf，产品页标 3.2 MB/PDF。封面写 Selection guide - September 2026。目录号 KPIC0001E22，页脚写 Sep. 2026 DN，并写 Information described in this material is current as of September 2026，记为约 2026 年 9 月。";

const note =
  "相关文档里的技术笔记 Transmitter/receiver photo IC for optical link 标 706 KB/PDF，文件名 optical_link_kpic9012e.pdf。";

export const photoIcRestProducts = [
  {
    id: "l11354",
    date: "2024-07",
    companyId: "hamamatsu",
    category: "product",
    title: "L11354：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1079E09，页脚写 Jul. 2024 DN，并写 Information described in this material is current as of July 2024，记为约 2024 年 7 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: ["auto"],
    technologies: [],
    models: [
      page("L11354-02", "2024-07", linkPart("L11354-02"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical link。一级标题写 L11354-02。二级标题写 For 150 Mbps optical link tramsmitter photo IC，transmitter 写成 tramsmitter。正文写 This photo IC is capable of data communication at a data rate of 150 Mbps through a plastic optical fiber (POF)。发射端写 a 650 nm RC (resonant cavity) type LED，以及 a driver circuit that supports an LVDS interface。温度补偿写 the high temperature emitted from the RC type LED。接收端写 a PIN photodiode and signal processing circuit，以及 a dummy photodiode。睡眠功能写 sleep function。车载一句写 allowing it to be installed even in automobiles for in-vehicle networking。接着写 an optical fiber transceiver (FOT) for a MOST network。可见正文最后写 POFs with ferrule are also available。元描述在 Its transmitter 前面没有空格的地方直接连 The transmitter，sleep 那句和 This product 也连在一起，并保留 POFs with ferrule are also available。特性四条：Communication speed up to 150 Mbps、3.3 V power supply operation、Wide operating temperature: -40 to +95 °C、Sleep mode function。",
        "规格表 Type1 写 For MOST automotive network，Type2 写 For MOST 150。Part Number 这一格写对面器件 S11355-04。封装 Plastic，封装类型 Sidelooker。带宽 4 to 150 Mbps。工作电源电压这一格写成 3.135 to 3.465  V，V 前面有两个空格。工作温度 -40 to +95 deg.C，贮存温度 -40 to +110 deg.C。测量条件写 Ta=-40 to +95℃，Vcc=3.135 to 3.465，没有单位。页面下载标 703 KB/PDF。缩略图文件名是 k_l11354-01_pp_xx.jpg，写的是 L11354-01。索引 thumbAlt 写 L11354-02 product photo。发射光谱图用的是 k_l10881_sr_xx,1.jpg，文件名是 L10881，页面地址写成 k-l10881-sr-xx,1.jpeg。外形图是 KPICA0079ED.svg。相关产品写 Receiver photo IC for optical link S11355-04。免责声明 37 KB/PDF，注意事项 Metal, Ceramic, Plastic products 290 KB/PDF。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productName 写 Photo IC for optical link。productExp 写 For MOST automotive network, 150 Mbps band POF communications。Type1 的值写成 For MOST automotive，显示才补上 network。Type2 的值写成 For MOST，显示才补上 150。对面器件 S11355-04。封装的值和显示都是 --，产品页规格表写 Plastic。工作电源电压的值写成 3.135 to 3.465，末尾有一个空格，显示才变成 3.135 to 3.465  V，V 前面两个空格。封装类型 Sidelooker。typeNameSort 写成 L11354-02。手册标 703 KB。`,
        `手册 ${linkSheet}。${linkDate}封面把 L11354-02 标成 Transmitter photo IC，把 S11355-04 标成 Receiver photo IC。二级标题写 For 150 Mbps optical link，没有 tramsmitter。正文用 These photo ICs is capable，is 用单数，速度写成 transmission speed。温度补偿写 the high temperature of the RC type LED，产品页写 emitted from。车载一句写成 These products features，features 用复数，后面 allowing it，it 用单数，并写 an fiber optical transceiver，an 后面接 fiber。手册没有 POFs with ferrule are also available。特性另有 Suitable for reflow soldering。应用写 Data transmission in harsh, noisy environments, such as in FA and OA、High-speed, short-distance data transmission，以及 Only for vehicle networks (MOST)。Only for vehicle networks (MOST) 和产品页的 automobiles、in-vehicle networking 放在汽车下面。FA 和 OA 对不上本站的应用标签。${linkNoTech}另写 MOST compliant products，以及 Specifications of these products are subject to change without prior notice to keep up with changes in the MOST standard。绝对最大额定电源电压 L11354-02 是 -0.5 to +4.5 V，S11355-04 是 -0.5 to +4.6 V。功耗 L11354-02 是 350 mW，S11355-04 是 320 mW。焊接温度 260 (3 times) °C，注记 *1 写 JEDEC J-STD-020 MSL 2a, see P.12。推荐工作电压 3.135 到 3.465 V，典型 3.3 V。数据率最大 150 Mbps，条件写 DCA coding。电特性标题写成 Electrical and optical characterisitics，characteristics 少一个 c。发射峰值波长最小 635 nm、典型 650 nm、最大 675 nm。光纤耦合光输出 1 最小 -7 dBm、最大 -1.5 dBm。关断光输出最大 -50 dBm。消光比最小 10 dB。电流消耗最大 40 mA。外形图标题写 Dimensional outlines (unit: mm)，图号 KPICA0079ED，与产品页相同。` +
          guide +
          "光链路这一节写 These are transmitter/receiver photo ICs for plastic optical fiber communication。同一句写 The optical transceivers P16671-01AS and P16548-01AT with a built-in transmitter and receiver are also available。P16671-01AS 不在光链路索引里，这一页不另收。指南把 L11354-02 标成 Transmitter photo IC，把 S11355-04 标成 Receiver photo IC。数据率印 4 to 150。工作电源电压印 3.135 to 3.465。光纤耦合光输出印 -7 to -1.5。MOST-compliant (In-vehicle) 印在 -40 to +95 旁边。",
      ]),
    ],
  },
  {
    id: "s11355",
    date: "2024-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S11355：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。与 L11354-02 共用手册目录号 KPIC1079E09，页脚写 Jul. 2024 DN，并写 current as of July 2024，记为约 2024 年 7 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: ["auto"],
    technologies: [],
    models: [
      page("S11355-04", "2024-07", linkPart("S11355-04"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical link。一级标题写 S11355-04。二级标题仍写 For 150 Mbps optical link tramsmitter photo IC，transmitter 写成 tramsmitter。正文与 L11354-02 同一段，但可见正文停在 in-vehicle multimedia network，没有 POFs with ferrule are also available。元描述同样停在这一句，The transmitter 和 This product 也与前句连在一起。特性四条与 L11354-02 相同。",
        "规格表 Type1、Type2、封装、封装类型、带宽、温度与 L11354-02 相同。Part Number 这一格写对面器件 L11354-02。工作电源电压这一格写成 3.135 to 3.465 V，V 前面只有一个空格。测量条件同样没有单位。页面下载标 703 KB/PDF。缩略图文件名是 k_s11355-03_pp_xx.jpg，写的是 S11355-03。索引 thumbAlt 写 S11355-04 product photo。这一页没有发射光谱图。外形图仍是 KPICA0079ED.svg。相关产品写 Transmitter photo IC for optical link L11354-02。免责声明和注意事项与 L11354-02 相同。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productExp 与 L11354-02 同一句。对面器件 L11354-02。封装的值和显示都是 --，产品页写 Plastic。工作电源电压的值没有末尾空格，显示写成 3.135 to 3.465 V。typeNameSort 写成 S11355-04。手册标 703 KB。`,
        "手册与 L11354-02 同一份。封面把这一列标成 Receiver photo IC。电特性另一组标题同样写成 characterisitics。接收端峰值灵敏度、传输抖动和睡眠时间都印在 S11355-04 这一列。应用里的 Only for vehicle networks (MOST) 放在汽车下面。" +
          linkNoTech +
          "选型指南把 S11355-04 标成 Receiver photo IC。接收电平印 -24 to 0。",
      ]),
    ],
  },
  {
    id: "l10881",
    date: "2026-10",
    companyId: "hamamatsu",
    category: "product",
    title: "L10881：滨松光链路红色 LED",
    summary:
      "产品页没有写发布日期。手册目录号 KLED1053E04，页脚另起一行写 Oct. 2026 DN，并写 Information described in this material is current as of October 2026，记为约 2026 年 10 月。索引 newState 是 false。索引产品名写 Red LED。",
    applications: [],
    technologies: [],
    models: [
      page("L10881", "2026-10", linkPart("L10881"), [
        "产品页没有写发布日期。页眉同时挂在 Light & radiation sources 的 LEDs 和 Photo IC for optical link 下面。一级标题写 L10881。二级标题写 RC-LED for 156 Mbps POF communications。正文写 The L10881 is designed for high-speed POF (plastic optical fi ber) communications，fiber 拆成 fi 和 ber。接着写 molded into miniature plastic package with lens。特性四条：Red RC-LED for POF data link、Peak emission wavelength: 650 nm、High-speed response: fc=70 MHz Typ.、High output power: Po=-2 dBm (IF=20 mA, φ1 mm, POF)。可见特性停在这里。元描述把 fiber 同样拆开，并在特性末尾多出 Designed to be used with the S7727。S7727 不在光链路索引里，这一页不另收。",
        "规格表 Type1 写 For POF data links。封装 Plastic，封装类型 With lens。带宽 DC to 156 Mbps。工作温度 0 to +60 deg.C，贮存温度 -40 to +85 deg.C。测量条件写 Typ. Ta=25 deg.C, unless otherwise noted。页面下载标 545 KB/PDF。索引缩略图是 k_l10881_pp_xx.jpg，thumbAlt 是 null。发射光谱图是 k_l10881_sr_xx,1.jpg。外形图是 KLEDA0088EA.svg。免责声明 37 KB/PDF，注意事项 290 KB/PDF。" + note + "这一页还链到 Selection guide / LED，标 3.3 MB/PDF。",
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productName 写 Red LED，不是 Photo IC for optical link。productExp 写 RC-LED for 156 Mbps POF communications。Type1 的值写成 For POF data，显示才补上 links。Type2 和对面器件都是 --。封装 Plastic。封装类型的值写成 With，显示才补上 lens。带宽 DC to 156 Mbps。工作电源电压是 --。typeNameSort 写成 L10881。手册标 545 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/l10881_kled1053e.pdf。页眉写 Red LED for optical link。目录号 KLED1053E04，Oct. 2026 DN 另起一行。并写 current as of October 2026，记为约 2026 年 10 月。正文写 plastic optical fiber，fiber 没有拆开。应用写 Plastic optical fiber communications (FA, office machine, home automation, LAN)，以及 Data transmission in locations subject to high electromagnetic noise。这些句子对不上本站的应用标签。" +
          linkNoTech +
          "手册没有写 S7727。绝对最大额定正向电流 50 mA，注记 *1 写 Decreases at a rate of 0.57 mA/°C。功耗 130 mW，注记 *2 写 decreases at a rate of 1.7 mW/°C above Ta=25 °C。工作温度 0 to 60 °C，贮存温度 -40 to +85 °C。正向电压典型 1.9 V、最大 2.4 V，条件 IF=20 mA。峰值波长最小 640 nm、典型 650 nm、最大 665 nm。光谱半宽最大 25 nm。光纤耦合光功率最小 -4.5 dBm、典型 -2 dBm、最大 +0.5 dBm。截止频率典型 70 MHz。注记写 GH4001 made by Mitsubishi Rayon，NA=0.5，以及 Vcc=5.0 V, R1=100 Ω, R2=300 kΩ, C1=20 pF。推荐驱动电路图号 KLEDC0047EA。外形图号 KLEDA0088EA，与产品页相同。选型指南的光链路表没有 L10881。",
      ]),
    ],
  },
  {
    id: "l12422",
    date: "2018-05",
    companyId: "hamamatsu",
    category: "product",
    title: "L12422：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1100E01，页脚写 May 2018 DN，并写 Information described in this material is current as of May 2018，记为约 2018 年 5 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: [],
    technologies: [],
    models: [
      page("L12422-01SR", "2018-05", linkPart("L12422-01SR"), [
        "产品页没有写发布日期。页眉同时挂在 LEDs 和 Photo IC for optical link 下面。一级标题写 L12422-01SR。二级标题写 Transmitter photo IC for DC to 10 Mbps optical link，Photo 的 p 小写。正文写 combines a 650 nm red LED，以及 a driver IC。手册写 a drive IC。速度写 ranging from DC to 10 Mbps。特性三条：Transmitter photo IC、Peak emission wavelength: 650 nm、Supports DC to 10 Mbps communication。",
        "规格表 Type1 写 For POF data links。Part Number 写对面器件 S13174-01SR。封装 Plastic，封装类型 with lens，with 小写。带宽 DC to 10 Mbps。工作温度 -20 to +85 deg.C，贮存温度 -40 to +85 deg.C。测量条件写 Ta=25℃，Vcc=3.135 to 3.465 V, unless otherwise noted。页面下载标 346 KB/PDF。索引缩略图是 k_l12422-01sr_pp_xx.jpg，thumbAlt 是 null。外形图资源名写成 ＫPICA0104EA.svg，K 是全角。相关产品写 Photo IC for optical link S13174-01SR。安全说明 Safety consideration / Opto-semiconductors 标 34 KB/PDF。注意事项 290 KB/PDF。" + note + "这一页链到 Selection guide / LED，标 3.3 MB/PDF，没有链 Photo IC 选型指南。",
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productExp 写 Transmitter photo IC for DC to 10 Mbps optical link。Type1 的值写成 For POF data，显示才补上 links。对面器件 S13174-01SR。封装 Plastic。封装类型的值写成 with，显示才补上 lens。工作电源电压是 --。typeNameSort 写成 L12422-01SR。手册标 346 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/l12422-01sr_kpic1100e.pdf。目录号 KPIC1100E01，页脚写 May 2018 DN，并写 current as of May 2018，记为约 2018 年 5 月。正文写 a drive IC，产品页写 a driver IC。应用写 Data transmission in harsh, noisy environments, such as in FA, OA, and digital audio，以及 High-speed, short-distance data transmission。这些句子对不上本站的应用标签。" +
          linkNoTech +
          "绝对最大额定电源电压 -0.5 to +4.0 V。输入电压 -0.5 to Vcc + 0.5 V。功耗 250 mW，注记 *1 写 1.75 mW/°C above Ta=25 °C。焊接写 230 °C, within 5 s, at least 1.5 mm away from lead roots。推荐电源电压最小 3.135 V、典型 3.3 V。峰值波长典型 650 nm。外形图号 KPICA0104EA。产品页文件名把 K 写成全角。选型指南把 L12422-01SR 标成 Transmitter photo IC，数据率印 DC to 10，工作温度印 -20 to +85。",
      ]),
    ],
  },
  {
    id: "l12557",
    date: "2017-06",
    companyId: "hamamatsu",
    category: "product",
    title: "L12557：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。与 S12423-01SR 共用手册目录号 KPIC1093E03，页脚写 Jun. 2017 DN，并写 Information described in this material is current as of June 2017，记为约 2017 年 6 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: [],
    technologies: [],
    models: [
      page("L12557-01SR", "2017-06", linkPart("L12557-01SR"), [
        "产品页没有写发布日期。页眉同时挂在 LEDs 和 Photo IC for optical link 下面。一级标题写 L12557-01SR。二级标题写 Transmitter Photo IC for DC to 10 Mbps optical link，Photo 的 p 大写。正文把 ranging 写成 rending：communication speeds rending from DC to 10 Mbps。元描述同样写 rending。特性三条与 L12422-01SR 相同。",
        "规格表 Type1 写 For POF data links。Part Number 写对面器件 S12423-01SR。封装 Plastic，封装类型 with lens。带宽 DC to 10 Mbps。温度与 L12422-01SR 相同。测量条件写 Ta=25℃，Vcc=4.75 to 5.25V, unless otherwise noted，5.25 和 V 之间没有空格。页面下载标 269 KB/PDF。索引缩略图是 k_l12557-01sr_pp_xx.jpg，thumbAlt 是 null。外形图是 KPICA0096EA.svg，页面地址挂在 LED 路径下。相关产品写 Photo IC for optical link S12423-01SR。安全说明 34 KB/PDF，注意事项 290 KB/PDF。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productExp 写 Transmitter Photo IC for DC to 10 Mbps optical link，Photo 的 p 大写。对面器件 S12423-01SR。封装类型的值写成 with，显示才补上 lens。工作电源电压是 --。typeNameSort 写成 L12557-01SR。手册标 269 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/l12557-01sr_etc_kpic1093e.pdf。封面型号写成 L12557-01SR, S12423-01SR。二级标题写 Transmitter/receiver photo IC for DC to 10 Mbps optical link。正文写 ranging，不是 rending，并写 a driver IC。应用写 Data transmission in harsh, noisy environments, such as in FA and OA.，OA 后面有句点，以及 High-speed, short-distance data transmission、Highly bursty data transmission。这些句子对不上本站的应用标签。" +
          linkNoTech +
          "绝对最大额定电源电压 L12557-01SR 是 -0.5 to +7.0 V，S12423-01SR 是 -0.5 to +4.0 V。功耗 250 mW。焊接写 230 °C, within 5 s, at least 2 mm away from lead roots。外形图号 KPICA0096EA，L12557-01SR 和 S12423-01SR 合在一张。选型指南的光链路表没有 L12557-01SR。",
      ]),
    ],
  },
  {
    id: "s12423",
    date: "2017-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S12423：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。与 L12557-01SR 共用手册目录号 KPIC1093E03，页脚写 Jun. 2017 DN，并写 current as of June 2017，记为约 2017 年 6 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: [],
    technologies: [],
    models: [
      page("S12423-01SR", "2017-06", linkPart("S12423-01SR"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical link。一级标题写 S12423-01SR。二级标题写 Receiver Photo IC for DC to 10 Mbps optical link，Photo 的 p 大写。正文写 has monolithically integrated PIN photodiode and signal processing circuit。下一句把 It features 写成 If features。元描述同样写 If features。结尾写 The S12423-01SR generates digital output (CMOS)。特性四条：Receiver photo IC、Supports DC to 10 Mbps communication、Monolithic photo IC featuring strong resistance to electromagnetic induction noise、Digital output (CMOS)。",
        "规格表 Type1 写 For POF data links。Part Number 写对面器件 L12557-01SR。封装 Plastic。没有封装类型这一行。带宽 DC to 10 Mbps。测量条件写 Ta=25℃，Vcc=3.135～3.465V , unless otherwise noted，中间是全角波浪号，V 和逗号之间有一个空格。页面下载标 269 KB/PDF。缩略图是 k_s12423-01sr_pp_xx.jpg，索引 thumbAlt 写 S12423-01SR。外形图是 KPICA0096EA.svg。相关产品写 Photo IC for optical link L12557-01SR。免责声明 37 KB/PDF，注意事项 290 KB/PDF。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productExp 写 Receiver Photo IC for DC to 10 Mbps optical link，Photo 的 p 大写。对面器件 L12557-01SR。封装 Plastic。封装类型的值和显示都是 --。工作电源电压是 --。typeNameSort 写成 S12423-01SR。手册标 269 KB。`,
        "手册与 L12557-01SR 同一份。接收端这一段写 It features，不是 If features。数字输出写 generates digital output (CMOS)。绝对最大额定电源电压 -0.5 to +4.0 V。输出电压 -0.5 to Vcc+0.5 V。选型指南的光链路表没有 S12423-01SR。",
      ]),
    ],
  },
  {
    id: "s13174",
    date: "2018-07",
    companyId: "hamamatsu",
    category: "product",
    title: "S13174：滨松光链路 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1101E01，页脚写 Jul. 2018 DN，并写 Information described in this material is current as of July 2018，记为约 2018 年 7 月。索引 newState 是 false。页眉写 Photo IC for optical link。",
    applications: [],
    technologies: [],
    models: [
      page("S13174-01SR", "2018-07", linkPart("S13174-01SR"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical link。一级标题写 S13174-01SR。二级标题写 Receiver photo IC for DC to 10 Mbps optical link，photo 的 p 小写。正文写 a receiver photo IC for plastic optical fiber (POF) communication。接着写 monolithically integrated PIN photodiode and signal processing circuit，以及 strong resistance to electromagnetic induction noise。速度写 from DC up to 10 Mbps。输出写 CMOS-compatible digital output。特性四条：Receiver photo IC、DC to 10 Mbps data communications、Monolithic photo IC featuring strong resistance to electromagnetic induction noise、Digital output (CMOS)。",
        "规格表 Type1 写 For POF data links。Part Number 写对面器件 L12422-01SR。封装 Plastic。没有封装类型这一行。带宽 DC to 10 Mbps。测量条件写 Ta=25℃，Vcc=3.135 to 3.465V , unless otherwise noted，用的是 to，V 和逗号之间有一个空格。页面下载标 314 KB/PDF。缩略图是 k_s13174-01sr_pp_xx.jpg，索引 thumbAlt 写 S13174-01SR。外形图是 KPICA0105EA.svg。相关产品写 Photo IC for optical link L12422-01SR。免责声明 37 KB/PDF，注意事项 290 KB/PDF。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productExp 写 Receiver photo IC for DC to 10 Mbps optical link，photo 的 p 小写。对面器件 L12422-01SR。封装 Plastic。封装类型是 --。工作电源电压是 --。typeNameSort 写成 S13174-01SR。手册标 314 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s13174-01sr_kpic1101e.pdf。目录号 KPIC1101E01，页脚写 Jul. 2018 DN，并写 current as of July 2018，记为约 2018 年 7 月。应用写 Data transmission in harsh, noisy environments, such as in FA, OA, and digital audio、High-speed, short-distance data transmission，以及 Highly bursty data transmission。这些句子对不上本站的应用标签。" +
          linkNoTech +
          "绝对最大额定电源电压 -0.5 to +4.0 V。输出电压 -0.5 to Vcc + 0.5 V。功耗 250 mW。焊接写 230 °C, within 5 s, at least 1.5 mm away from lead roots。推荐电源电压最小 3.135 V。高电平输出电流最小 -4 mA。外形图标题写 Dimensional outline (S13174-01SR, unit: mm)，图号 KPICA0105EA。选型指南把 S13174-01SR 标成 Receiver photo IC，数据率印 DC to 10。接收电平在表里印 -10 to 0。",
      ]),
    ],
  },
  {
    id: "p16548",
    date: "2026-07",
    companyId: "hamamatsu",
    category: "product",
    title: "P16548：滨松自由空间光收发器",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1114E08，Jul. 2026 DN 另起一行，并写 Information described in this material is current as of July 2026，记为约 2026 年 7 月。索引 newState 是 false。索引产品名写 Free-Space Optical transceiver。",
    applications: [],
    technologies: [],
    models: [
      page("P16548-01AT", "2026-07", linkPart("P16548-01AT"), [
        "产品页没有 meta description。页眉写 Photo IC for optical link。一级标题写 P16548-01AT。二级标题写 For 1.25 Gbps optical free-space communication。正文写 By placing two of this product facing each other on the optical axis，以及 full-duplex two-way communication with a transmission distance of up to 100 mm。接着写 even when communicating between a 360˚ rotating object and stationary object。发射端写 For the transmitter we use a 850 nm VCSEL，a 用在 850 前面。接收端写 a PIN photodiode and a signal processing IC，以及 high-speed operation。特性六条：Data rate: 100 Mbps to 1.25 Gbps、Transmission distance: 25 mm to 100 mm、Full duplex two-way communication、Supports 360˚ degree rotation mechanism、CML interface、850 nm VCSEL (laser class 1)。第一条前面多一个空格。360˚ 后面又写 degree。",
        "规格表 Type1 写 For optical free-space communication。没有封装和封装类型这两行。带宽 100 Mbps to 1.25 Gbps。工作温度 -40 to +85 deg.C，贮存温度 -40 to +105 deg.C。测量条件写 Ta=-40 to +85℃，Vcc=3.135 to 3.465 V。页面下载标 416 KB/PDF。缩略图是 k_p16548-01at_pp_xx.jpg，索引 thumbAlt 写 P16548-01AT product photo。外形图是 KPICA0120.svg，文件名没有 EA。免责声明 37 KB/PDF，注意事项 290 KB/PDF。" + note,
        `索引 ${linkIndex} 这一行 newState 是 false。${linkIntro}productName 写 Free-Space Optical transceiver。productExp 写 For 1.25 Gbps optical free-space communication。Type1 的值写成 For optical free-space，显示才补上 communication。Type2、对面器件、封装、封装类型和工作电源电压都是 --。typeNameSort 写成 P16548-01AT。手册标 416 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/p16548-01at_kpic1114e.pdf。页眉写 Optical transceiver。目录号 KPIC1114E08，Jul. 2026 DN 另起一行。并写 current as of July 2026，记为约 2026 年 7 月。应用写 Short-distance board-to-board communication，以及 Communication via rotation mechanism。这两句对不上本站的应用标签。" +
          linkNoTech +
          "绝对最大额定电源电压 -0.4 to +3.6 V。输入电压 +0.85 to +1.85 V。焊接温度 260 (twice) °C，注记 *2 写 IPC/JEDEC J-STD-020 MSL3, see P.5。推荐电源电压最小 3.135 V、典型 3.3 V、最大 3.465 V。数据率最小 100 Mbps、最大 1250 Mbps，条件写 8B10B coding。传输距离在 100 Mbps 到 625 Mbps 时最大 100 mm，在 625 Mbps 到 1.25 Gbps 时最大 50 mm。注记 *4 写 Distance between the bottom surfaces of the optical transceivers。接收输出负载 100 Ω，写 Differential。外形图号 KPICA0120EA。产品页文件名是 KPICA0120.svg。" +
          guide +
          "指南把 P16548-01AT 标成 Free-space optical transceiver。数据率印 100 to 1250。工作温度印 -40 to +85。旁边写 Optical free-space communication，以及 Transmission distance: 25 to 100 mm。注记 *14 写 Transmission distance when products are faced each other along the same optical axis。同一节还点名 P16671-01AS，索引没有这一行，不另收。",
      ]),
    ],
  },
  {
    id: "s6841",
    date: "2017-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S6841：滨松光开关 Photo IC",
    summary:
      "产品页没有写发布日期。与 S8119 共用手册目录号 KPIC1019E03，页脚写 Oct. 2017 DN，并写 Information described in this material is current as of October 2017，记为约 2017 年 10 月。索引 newState 是 false。页眉写 Photo IC for optical switch。",
    applications: [],
    technologies: [],
    models: [
      page("S6841", "2017-10", switchPart("S6841"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical switch。一级标题写 S6841。二级标题写 Photo IC with optical switch functions。正文写 specifically designed for a optical switch，a 后面接 optical。下一句在可见正文里于 be 和 easily 之间换行。元描述把两词连成 beeasily。特性写 Miniature transparent plastic package (4.5 × 5.5 mm)、Operation and margin display terminal、Synchronous/asynchronous switching terminal、Output logic switching terminal、Built-in short-circuit protective circuit、High sensitivity (0.05 uW/mm2 Typ.)，平方放在上标，uW 用字母 u。",
        "规格表封装 Plastic，封装类型 Surface mount type，输出 Digital。电源电压 4.5 to 5.5 V。光谱响应范围 380 to 1120 nm。表头把 Threshold light level 连成 Thresholdlight level，把 Allowable background light level 连成 Allowable backgroundlight level。阈值 0.05 μW/mm2，允许背景光 5000 lx。特性写 High sensitivity。测量条件写 Typ. Ta=25 ℃，Vcc=5 V, unless otherwise noted。页面下载标 674 KB/PDF。缩略图是 k_s6841_s8119_pp_xx.jpg，索引 thumbAlt 写 S6841,S8119。外形图是 KPICA0020EC.svg。相关产品列出 S8119、S11049-202SB 和 S11049-203DT。免责声明 37 KB/PDF，注意事项 Metal, Ceramic, Plastic products 290 KB/PDF。",
        `索引 ${switchIndex} 一级标题写成 Photo IC for optical switch，标题文字后面有两个空格。说明写 Functions needed for industrial optical switches are implemented into these photo ICs。${cols}表头还有 Output、Package、Package type、Spectral response range、Supply voltage、Threshold light level、Allowable background light level、Feature。这一行 newState 是 false。productExp 写 Digital output photo IC for optical switch, high sensitivity。输出 Digital。封装类型的值写成 Surface mount，显示才补上 type。阈值的值写成 0.05，显示补上 μW/mm2，平方放在上标。允许背景光的值写成 5000，显示才补上 lx。特性的值写成 High，显示才补上 sensitivity。typeNameSort 写成 S06841。手册标 674 KB。thumbAlt 写 S6841,S8119。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s6841_s8119_kpic1019e.pdf。目录号 KPIC1019E03，页脚写 Oct. 2017 DN，并写 current as of October 2017，记为约 2017 年 10 月。正文写 optical switches，用复数，并写 can be easily configured，be 和 easily 之间有空格。特性写 Having following function at each terminal。灵敏度写 S6841: High sensitivity (0.05 μW/mm2 typ.)，用 μ，typ 小写。应用只写 Optical switch。这句对不上本站的应用标签。手册没有写 TOF。峰值灵敏度是单一波长，所以不放在技术下面。绝对最大额定电源电压 -0.3 to +7 V。功耗 250 mW，注记 *1 写 3.3 mW/°C above Ta=25 °C。工作温度 -25 to +60 °C。焊接写 230 °C , 3 s，度和逗号之间有空格。电特性峰值灵敏度典型 820 nm。光谱响应 380 to 1120 nm。电源电压最小 4.5 V、典型 5.0 V、最大 5.5 V。迟滞这一行的词写成 Hysterisis。外形图号 KPICA0020EC，与产品页相同。" +
          guide +
          "光开关这一节写 These photo ICs include functions needed for industrial optical switches。S6841 和 S8119 的光谱响应印 380 to 1120，电源电压印 4.5 to 5.5。阈值照度最大值一列印 0.1 和 0.2。允许背景光印 5000 和 10000。特性印 High sensitivity、Digital output，以及 High allowable background light level、Digital output。封装印 Surface mount type。注记 *15 写 Photosensitive illuminance drops below 20% from disturbance background light。",
      ]),
    ],
  },
  {
    id: "s8119",
    date: "2017-10",
    companyId: "hamamatsu",
    category: "product",
    title: "S8119：滨松光开关 Photo IC",
    summary:
      "产品页没有写发布日期。与 S6841 共用手册目录号 KPIC1019E03，页脚写 Oct. 2017 DN，并写 current as of October 2017，记为约 2017 年 10 月。索引 newState 是 false。页眉写 Photo IC for optical switch。",
    applications: [],
    technologies: [],
    models: [
      page("S8119", "2017-10", switchPart("S8119"), [
        "产品页没有写发布日期。页眉和二级标题与 S6841 相同。正文同样写 a optical switch。元描述同样把 be easily 连成 beeasily。特性最后一条换成 Large allowable background light level (10000 lx Typ.)。",
        "规格表封装、封装类型、输出、电源电压和光谱响应范围与 S6841 相同。表头同样连成 Thresholdlight level 和 Allowable backgroundlight level。阈值 0.1 μW/mm2，允许背景光 10000 lx。特性写 Large allowable background light level。测量条件与 S6841 相同。页面下载标 674 KB/PDF。缩略图和外形图与 S6841 相同。相关产品列出 S6841、S11049-202SB 和 S11049-203DT。",
        `索引 ${switchIndex} 这一行 newState 是 false。一级标题后面有两个空格。productExp 写 Digital output photo IC for optical switch, Large allowable background light level，Large 大写。封装类型的值写成 Surface mount，显示才补上 type。阈值的值写成 0.1。允许背景光的值写成 10000，显示才补上 lx。特性的值写成 Large allowable background light，显示才补上 level。typeNameSort 写成 S08119。手册标 674 KB。`,
        "手册与 S6841 同一份。灵敏度这一行写 S8119: Large allowable background light level (10000 lx typ.)，typ 小写。应用只写 Optical switch，对不上本站的应用标签。迟滞同样写成 Hysterisis。选型指南把允许背景光 10000 和 High allowable background light level 印在这一行附近。",
      ]),
    ],
  },
  {
    id: "s11049",
    date: "2020-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S11049：滨松光开关 Photo IC",
    summary:
      "产品页没有写发布日期。S11049-202SB 与 S11049-203DT 共用手册目录号 KPIC1087E04，页脚写 Jun. 2020 DN，并写 Information described in this material is current as of June 2020，记为约 2020 年 6 月。索引 newState 都是 false。两页页眉都写 Photo IC for optical switch。",
    applications: [],
    technologies: [],
    models: [
      page("S11049-202SB", "2020-06", switchPart("S11049-202SB"), [
        "产品页没有写发布日期。页眉写 Photo IC for optical switch。一级标题写 S11049-202SB。二级标题写 Analog output photo IC for optical switch。正文写 designed for optical switches and provides an analog waveform output，photo ICs 用复数，provides 用单数。特性三条：Large allowable background light level: 4000 lx Min.、High linearity、Low noise: 1.8 mV rms Max.。",
        "规格表封装 Plastic，封装类型 SIP type，输出 Analog。电源电压这一格写 -0.5 to 7 V。光谱响应范围 380 to 1120 nm。没有阈值这一行。允许背景光的表头连成 Allowable backgroundlight level，数值 6000 lx。特性写 Analog output。测量条件写 Typ. Ta=25 ℃，Vcc=5 V。页面下载标 482 KB/PDF。缩略图文件名是 k_s11049-02sb_pp_xx.jpg，少写一个 2。索引 thumbAlt 写 S11049-202SB product photo。外形图资源名是 KPICA0083EA,0.svg，文件名里有逗号。相关产品列出 S6841、S8119 和 S11049-203DT。注意事项是 Metal, Ceramic, Plastic products，290 KB/PDF。",
        `索引 ${switchIndex} 这一行 newState 是 false。productExp 写 Analog output photo IC for optical switch。封装类型的值写成 SIP，显示才补上 type。电源电压的值写成 -0.5 to 7，显示才补上 V。阈值是 --。允许背景光的值写成 6000，显示才补上 lx。特性的值写成 Analog，显示才补上 output。typeNameSort 写成 S11049-202SB。手册标 482 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s11049_series_kpic1087e.pdf。封面写 S11049 series。目录号 KPIC1087E04，页脚写 Jun. 2020 DN，并写 current as of June 2020，记为约 2020 年 6 月。正文同样写 photo ICs 和 provides。特性写 4000 lx min.，min 小写，产品页写 Min.。应用写 Optical switch，以及 Optical receivers in various sensor devices。这两句对不上本站的应用标签。手册没有写 TOF。峰值灵敏度典型 800 nm，是单一波长，所以不放在技术下面。绝对最大额定电源电压 -0.5 to +7 V。功耗 S11049-202SB 是 250 mW，S11049-203DT 是 300 mW。贮存温度 S11049-202SB 是 -40 to +100 °C，S11049-203DT 是 -30 to +85 °C。焊接 S11049-202SB 写 240 (once)，S11049-203DT 写 *4。注记 *4 写 Reﬂow soldering, IPC/JEDEC J-STD-020 MSL 5a, see P.6，Reflow 的 fl 连成一个字符。电特性工作电源电压最小 4.5 V、最大 5.5 V，产品页规格表印的是绝对最大额定 -0.5 to 7 V。电流消耗最大 2.2 mA。光灵敏度在 λ=950 nm、输入 100 kHz 下，S11049-202SB 最小 120、典型 200、最大 300 V/mW，S11049-203DT 最小 160、典型 200、最大 300 V/mW。允许背景光最小 4000 lx、典型 6000 lx。输出噪声最大 2.8 mV rms。注记 *7 写 at witch the photo IC sensitivity drops by 20%，which 写成 witch。截止频率写成 Cut-oﬀ frequency，off 的 ff 连成一个字符。外形图号手册写 KPICA0083EB。产品页文件名是 KPICA0083EA,0.svg。选型指南这一行封装印 SIP，允许背景光印 6000，特性印 Analog output。",
      ]),
      page("S11049-203DT", "2020-06", switchPart("S11049-203DT"), [
        "产品页没有写发布日期。二级标题和正文、特性与 S11049-202SB 相同，特性仍写 4000 lx Min.。",
        "规格表封装 Plastic，封装类型 Surface mount type，输出 Analog。电源电压同样写 -0.5 to 7 V。允许背景光表头同样连成 Allowable backgroundlight level，数值 6000 lx。特性写 Analog output。测量条件写 Typ. Ta=25 ℃，Vcc=5 V。页面下载标 482 KB/PDF。缩略图文件名是 k_s11049-03dt_pp_xx.jpg。索引 thumbAlt 写 S11049-203DT product photo。外形图是 KPICA0092EA.svg。相关产品先列 S11049-202SB，再列 S6841 和 S8119。注意事项换成 Surface mount type products，407 KB/PDF。",
        `索引 ${switchIndex} 这一行 newState 是 false。productExp 与 S11049-202SB 相同。封装类型的值写成 Surface mount，显示才补上 type。电源电压、阈值、允许背景光和特性的截断方式与 S11049-202SB 相同。typeNameSort 写成 S11049-203DT。手册标 482 KB。`,
        "手册与 S11049-202SB 同一份。这一列功耗 300 mW，贮存温度 -30 to +85 °C，焊接走注记 *4。光灵敏度最小 160 V/mW。外形图号 KPICA0092EA，与产品页相同。选型指南这一行封装印 Surface mount type，特性印 Analog output。",
      ]),
    ],
  },
  {
    id: "s10108",
    date: "2016-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S10108：滨松火焰检测 Photo IC 组件",
    summary:
      "产品页没有写发布日期。与 S10109 共用手册目录号 KPIC1066E04，页脚写 Apr. 2016 DN，并写 Information described in this material is current as of April, 2016，April 和 2016 之间有逗号，记为约 2016 年 4 月。索引 newState 是 false。页眉写 Photo IC assemblies for flame detection。",
    applications: [],
    technologies: [],
    models: [
      page("S10108", "2016-04", flamePart("S10108"), [
        "产品页没有写发布日期。页眉同时挂在 Photo IC assemblies for flame detection 和 UV & flame sensors 下面。一级标题写 S10108。二级标题写 For flame eye/using photo IC diode (RoHS compliance) instead of CdS cell。正文写 designed specifically for flame detection (flame eye) in oil-fired hot water boilers and heaters，以及 assembled in an easy-to-install package along with the cable。特性四条，破折号后面都有一个空格：Spectral response suitable for detecting oil burner、Easy-to-install assembly with cable、Little variation in output current and good linearity、RoHS compliant products。",
        "规格表类型 Head-on。光谱响应范围 320 to 820 nm。峰值灵敏度波长 560 nm。暗电流最大值 50 nA。光电流 0.26 mA。上升时间 6000 μs，下降时间 2500 μs。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 205 KB/PDF。缩略图是 k_s10108_pp_xx.jpg，索引 thumbAlt 写 S10108。光谱响应图是 k_s10108_sr_xx,1.jpg。外形图是 KPICA0068EB.svg。相关产品写 Photo IC diode assembly S10109。免责声明 37 KB/PDF。没有塑料产品注意事项。",
        `索引 ${flameIndex} 一级标题写 Photo IC assemblies for flame detection。说明写 Photo IC sensors designed specifically for flame detection (flame eye) in oil-fired hot water boilers and heaters. Since they don’t use conventional CdS cells, these products are RoHS compliant。${cols}表头还有 Type、Spectral response range、Peak sensitivity wavelength、Dark current (max.)、Photocurrent、Rise time、Fall time。这一行 newState 是 false。productName 写 Photo IC assembly。productExp 写 Head-on type, For flame eye/using photo IC diode (RoHS compliance) instead of CdS cell。类型 Head-on。光谱响应范围的值写成 320 to 820，显示才补上 nm。峰值的值写成 560，显示才补上 nm。暗电流的值写成 50，显示才补上 nA。光电流的值写成 0.26，显示才补上 mA。上升时间的值写成 6000，显示才补上 μs。下降时间的值写成 2500，显示才补上 μs。typeNameSort 写成 S10108。手册标 205 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s10108_s10109_kpic1066e.pdf。页眉写 Photo IC diode assemblies。目录号 KPIC1066E04，页脚写 Apr. 2016 DN，并写 current as of April, 2016，April 后面有逗号，记为约 2016 年 4 月。二级标题写 For flame eye, using photo IC diode instead of CdS cell，用逗号，没有 RoHS compliance。正文写 incorporate a photo IC diode instead of CdS cells，以及 2 types of incident light direction (head-on type S10108: and side-on type: S10109)，S10108 后面先写冒号。应用写 Flame detection in oil boilers and heaters、Safety devices and alarms for heat generating devices，以及 Photorelay control devices。这些句子对不上本站的应用标签。手册没有写 TOF。峰值灵敏度是单一波长，光谱响应是一条曲线，所以不放在技术下面。电特性光谱响应范围典型值印 300 to 820 nm，产品页和索引印 320 to 820 nm。峰值典型 560 nm。暗电流典型 1.0 nA、最大 50 nA，条件 VR=5 V。光电流在 VR=5 V、2856 K、100 lx 下，S10108 最小 0.16 mA、典型 0.26 mA、最大 0.36 mA。上升时间典型 6.0 ms，下降时间典型 2.5 ms。产品页把同一组时间印成 6000 μs 和 2500 μs。条件写 10 to 90%，VR=7.5 V，RL=10 kΩ，λ=560 nm。绝对最大额定反向电压 -0.5 to +12 V。光电流 5 mA。正向电流没有单独数字，功耗 250 mW。工作温度 -30 to +80 °C，贮存温度 -40 to +85 °C。注记 *2 写 No dew condensation。外形图号 KPICA0068EB，与产品页相同。选型指南没有 S10108。",
      ]),
    ],
  },
  {
    id: "s10109",
    date: "2016-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S10109：滨松火焰检测 Photo IC 组件",
    summary:
      "产品页没有写发布日期。与 S10108 共用手册目录号 KPIC1066E04，页脚写 Apr. 2016 DN，并写 current as of April, 2016，记为约 2016 年 4 月。索引 newState 是 false。页眉写 Photo IC assemblies for flame detection。",
    applications: [],
    technologies: [],
    models: [
      page("S10109", "2016-04", flamePart("S10109"), [
        "产品页没有写发布日期。页眉、二级标题、正文和特性与 S10108 相同。一级标题写 S10109。",
        "规格表类型 Side-on。光谱响应范围仍印 320 to 820 nm。峰值 560 nm。暗电流最大值 50 nA。光电流 0.27 mA。上升时间 6000 μs，下降时间 2500 μs。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 205 KB/PDF。缩略图是 k_s10109_pp_xx.jpg。光谱响应图仍用 k_s10108_sr_xx,1.jpg。外形图是 KPICA0069EB.svg。相关产品写 Photo IC diode assembly S10108。免责声明 37 KB/PDF。",
        `索引 ${flameIndex} 这一行 newState 是 false。productName 写 Photo IC assembly。productExp 写 Side-on type, For flame eye/using photo IC diode (RoHS compliance) instead of CdS cell。类型 Side-on。光电流的值写成 0.27，显示才补上 mA。其余列与 S10108 相同。typeNameSort 写成 S10109。手册标 205 KB。`,
        "手册与 S10108 同一份。光电流在同一条件下最小 0.17 mA、典型 0.27 mA、最大 0.37 mA。外形图号 KPICA0069EB，与产品页相同。选型指南没有 S10109。",
      ]),
    ],
  },
  {
    id: "s2829",
    date: "2015-06",
    companyId: "hamamatsu",
    category: "product",
    title: "S2829：滨松光敏晶体管",
    summary:
      "产品页没有写发布日期。手册目录号 KPTR1001E03，页脚写 Jun. 2015 DN，并写 Information described in this material is current as of June, 2015，June 和 2015 之间有逗号，记为约 2015 年 6 月。索引 newState 是 false。页眉写 Phototransistor。",
    applications: [],
    technologies: [],
    models: [
      page("S2829", "2015-06", "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/phototransistor/S2829.html", [
        "产品页没有写发布日期。页眉写 Phototransistors，用复数。一级标题写 S2829。二级标题写 Subminiature package phototransistor。正文写 The S2829 is a high sensitivity phototransistor molded into a visible-cut plastic package。特性三条：Subminiature plastic package with lens、Visible-cut package、High sensitivity: 1.0 mA (1000 lx)。元描述也写 1.0 mA (1000 lx)。",
        "规格表封装 Plastic，封装类型 With lens。光电流 1.8 mA。暗电流最大值 100 nA。集电极-发射极饱和电压最大值 0.4 V。峰值灵敏度波长 800 nm。下降时间 3 μs。类型 Subminiature package。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 629 KB/PDF。缩略图是 k_s2829_pp_xx.jpg，索引 thumbAlt 写 S2829。外形图是 KPTRA0001EA.svg。免责声明 37 KB/PDF，注意事项 Metal, Ceramic, Plastic products 290 KB/PDF。",
        `索引 ${ptrIndex} 一级标题写 Phototransistor，用单数。浏览器标题写 Phototransistors。说明第一句写 Phototransistor amplify the current generated by the input of light, which enables them to derive large output currents from even small active areas，amplify 用原形。下一句写 They have peak sensitivity at 800 nm, and are available in a visible-cut plastic package with built-in lens. Applications include rotary encoders and touch screens。${cols}表头还有 Type、Peak sensitivity wavelength、Photocurrent、Dark current (max.)、Collector-emitter saturation voltage (max.)、Package、Package type、Fall time。这一行 newState 是 false。productName 写 Phototransistor。productExp 写 High sensitivity phototransistor in a molded, visible cut plastic package with a lens，visible 和 cut 之间没有连字符。类型的值写成 Subminiature，显示才补上 package。峰值的值写成 800，显示才补上 nm。光电流的值写成 1.8，显示才补上 mA。暗电流的值写成 100，显示才补上 nA。饱和电压的值写成 0.4，显示才补上 V。封装 Plastic。封装类型的值写成 With，显示才补上 lens。下降时间的值写成 3，显示才补上 μs。productType 写 Analog output。typeNameSort 写成 S02829。手册标 629 KB。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s2829_kptr1001e.pdf。页眉写 Phototransistor。目录号 KPTR1001E03，页脚写 Jun. 2015 DN，并写 current as of June, 2015，June 后面有逗号，记为约 2015 年 6 月。特性写 High sensitivity: 1.8 mA (1000 lx)。产品页和元描述写 1.0 mA (1000 lx)。规格表和索引写 1.8 mA。应用标题用单数 Application，写 Rotary encoders 和 Touch screen。这两句对不上本站的应用标签。手册没有写 TOF。峰值灵敏度是单一波长，所以不放在技术下面。绝对最大额定集电极-发射极电压 35 V，发射极-集电极电压 4 V，集电极电流 20 mA，集电极功耗 80 mW。工作温度 -25 to +85 °C，贮存温度 -40 to +100 °C。焊接写 260 °C, 3 s, at least 2.5 mm away from package surface。注记 *1 写 No dew condition。电特性光电流典型 1.8 mA，条件 VCE=5 V, 1000 lx。暗电流最大 100 nA，条件 VCE=20 V, 0 lx。饱和电压最大 0.4 V，条件 Ic=0.3 mA, 1000 lx。峰值典型 800 nm。上升时间典型 2 μs，下降时间典型 3 μs，条件 Vcc=5 V, Ic=1 mA, RL=100 Ω。注记 *2 写 Measured with a CIE standard “A” light source at 2856 K。外形图号 KPTRA0001EA，与产品页相同。" +
          guide +
          "光敏晶体管这一节写 This sensor amplifies and outputs current generated by incident light。表里印光电流 1.8、暗电流 100、饱和电压 0.4 (Ic=0.3 mA)、峰值 800。封装印 SIP with lens。注记 *10 写 VCE=5 V, 1000 lx, CIE standard A light source 2856 K。产品页封装类型写 With lens，没有写 SIP。",
      ]),
    ],
  },
];
