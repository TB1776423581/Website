const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const part = (name) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/light-modulation-photo-ic/${name}.html`;

const index =
  "https://www.hamamatsu.com/us/en/product/optical-sensors/photo-ic/light-modulation-photo-ic.html";

const indexIntro =
  "索引一级标题前面有两个空格，写 Light modulation photo IC。说明写 Delivers stable output by synchronous optical detection, and is reliable even under fluctuating background light。列设置里 Data sheet 的值是 Data sheet，显示写成 DataSheet，表头写成 Data，下一行 Sheet。ProductName 的值和显示都写成 ProductName，表头写成 Product，下一行 Name。表头还有 Type、Package、Package type、Allowable background light level。";

const noTag =
  "这些句子对不上本站的应用标签，所以不放在应用下面。手册没有写 TOF。光谱响应是一条曲线，测量条件写 940 nm，选型指南的峰值灵敏度是单一波长，不是按波段成像，所以不放在技术下面。";

const sharedSheet =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4282-51_etc_kpic1002e.pdf";

const guide =
  "选型指南 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/photo_ic_kpic0001e.pdf，产品页标 3.2 MB/PDF。封面写 Selection guide - September 2026。目录号 KPIC0001E22，页脚写 Sep. 2026 DN，并写 Information described in this material is current as of September 2026，记为约 2026 年 9 月。光调制这一节页脚印 3，页眉写 Light modulation photo IC，同一行写 Digital output。说明写 These photo ICs employ an optical synchronious detection method that ensures stable output even under disturbance background light，synchronious 这样拼。注记 *8 写 λp=940 nm。注记 *9 写 Signal light=5 µW/mm2, λp=940 nm, disturbance background light=A light source。电源 4.5 to 16 只印在 S6846 和 S6986 之间。S10053 没有单独一行，只印 S10053-01DT。";

const sharedDate =
  "产品页没有写发布日期。手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 Information described in this material is current as of April 2026，记为约 2026 年 4 月。";

export const lightModulationProducts = [
  {
    id: "s4282",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S4282：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 Information described in this material is current as of April 2026，记为约 2026 年 4 月。索引 newState 是 false。页眉写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S4282-51", "2026-04", part("S4282-51"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S4282-51。二级标题写 Fewer detection errors even under disturbance background light。正文写 This light modulation photo IC was developed for optical synchronous detection under disturbance background light。接着写 A photodiode, preamplifier, comparator, oscillator, LED driver and signal processing circuit, etc. are all integrated on a monolithic photo IC chip。再写 Optical synchronous type photoreflectors and photointerrupters, which less susceptible to disturbance background light，which 后面没有 are。结尾写 an allowable background light level of 10000 lx Typ.，Typ 用大写，后面有句点。特性写 Large allowable background light level: 10000 lx Typ.、Minimum detection level: 0.7 uW/mm2 Typ.，uW 用字母 u，平方放在上标，以及 Digital output (Output appears “L” by light input.)。元描述在 Typ. 后面直接连 Features，平方写成 mm2。",
        "规格表封装 Plastic，封装类型 clear，允许背景光 10000 lx。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，用 ℃。没有 Type 这一行。页面下载标 693 KB/PDF。缩略图是 k_s4282-51_pp_xx.jpg，alt 写 S4282-51。光谱响应图文件名是 k-s4282-51-sr-xx,0.jpeg，文件名里有逗号。外形图是 kpica0009.svg。相关文档写 Disclaimer / Opto-semiconductors，37 KB/PDF，以及 Precautions / Metal, Ceramic, Plastic products，290 KB/PDF，文件名 kxx-a12028-eng.pdf。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productName 写 Light modulation photo IC。productExp 写成 Photo IC for synchronous detection of an optical signal in the presence of backgound such as bright sunlight，background 写成 backgound。类型的值和显示都是 --。封装 Plastic。封装类型 clear。允许背景光的值写成 10000，显示才补上 lx。typeNameSort 写成 S04282-51。手册标 693 KB。thumbAlt 是 S4282-51。`,
        `手册 ${sharedSheet}。${sharedDate}封面型号写成 S4282-51, S6809, S6846, S6986, S7136/-10, S10053/-01DT。正文用复数 These light modulation photo ICs were，后面仍写 this photo IC，which 后面同样没有 are。允许背景光写成 10000 lx typ.，typ 用小写，并括注 S4282-51, S6986, S10053/-01DT。最低检测写成 0.2 µW/mm2 typ.，括注 S6809, S6846, S7136/-10，用 µ。特性里 10000 lx typ. 与 0.2 µW/mm2 typ. 两行，斜杠后面的 10 和冒号之间有一个空格。应用写 Paper detection in office machine (copiers, fax machines, etc.)，machine 用单数，以及 Optical switches。绝对最大额定电源电压和输出电压都是 -0.5 to +16 V，输出电流 50 mA，阴极输出电压 -0.5 to +16 V。阴极输出电流这一行，S10053/-01DT 和 S4282-51, S6986 两格都是短横，S6809, S6846, S7136/-10 是 70 mA。功耗 250 mW。工作温度 S10053/-01DT 是 -25 to +85 °C，其余是 -25 to +60 °C。贮存温度 -40 to +100 °C。焊接温度 S10053/-01DT 写 240 (once)，其余两格写 *3。注记 *1 写 decreases at a rate of 3.3 mW/°C above Ta=25 °C。注记 *2 写 Reflow soldering, IPC/JEDEC-J-STD-020 MSL5a, see P.9。电特性条件写 Ta=25 °C, Vcc=5 V。左边一组写 Output: built-in pull-up resistor，Cathode: constant current drive。右边一组写 Output: open collector，Cathode: open collector drive。电源电压 4.5 到 16 V。电流消耗典型 4 mA、最大 11 mA，条件 Vo, LED terminals open。低电平输出电压典型 0.2 V、最大 0.4 V，条件 IOL=16 mA。高电平输出电压左边最小 4.9 V，右边最小 4.5 V，条件写 4.7 kΩ between Vcc and Vo。阴极低电平输出电压最大 0.8 V，条件 Icath=40 mA，印在开集电极这一组。阴极低电平输出电流最小 15 mA、典型 35 mA、最大 60 mA，条件 Vcath=1.2 V，印在恒流这一组。脉冲周期典型 130 μs，最小 65 μs、最大 220 μs。脉冲宽度典型 8 μs，最小 4 μs、最大 13.7 μs。H→L 阈值最小没有数字、典型 0.7 μW/mm2、最大 2 μW/mm2，条件 λ=940 nm，No background light。迟滞符号是短横，最小 0.45、典型 0.65、最大 0.95。频率响应最小 0.5 kHz、典型 1.25 kHz。允许背景光最小 5000 lx、典型 10000 lx，条件 Signal light: 5 μW/mm2, λp=940 nm，背景写 “A” light source。*2 的图号是 KPICC0009EA，图上印 10 k。*3 的图号是 KPICC0010EA。LED 驱动占空比写 1/16。真值表写 Light on 为 low，Light off 为 high。外形图标题写 Dimensional outlines (unit: mm)，S4282-51 和 S7136 合在一张，图号 KPICA0009EE，感光面积 (0.4 × 0.4)，包装写 Stick。产品页外形图是 kpica0009.svg。推荐焊接写 230 °C (less than 5 s) max.，S4282-51 写 at least 1 mm away from lead roots。注记 *6 写 Lead length: in case of 2 mm or more。` +
          noTag +
          guide +
          "指南这一行印峰值灵敏度 800、阈值照度最大值 2、允许背景光 10000，封装写 DIP。特性写 High allowable background light level，以及 Output “L” at light input。",
      ]),
    ],
  },
  {
    id: "s4289",
    date: "2019-02",
    companyId: "hamamatsu",
    category: "product",
    title: "S4289：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。手册目录号 KPIC1044E03，页脚写 Feb. 2019 DN，并写 Information described in this material is current as of February 2019，记为约 2019 年 2 月。索引 newState 是 false。页眉写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S4289-61", "2019-02", part("S4289-61"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S4289-61。二级标题写 Asynchronous type light modulation photo IC。正文写 The S4289-61 is an asynchronous type light modulation photo IC。中间写 no wiring to a signal light source (such as LED) is required。可见正文停在 equipment，没有 design，也没有句点，接着就是 Features。特性写 Asynchronous detection、Large allowable background illuminance: 4000 lx Typ.、Minimum detection level: 0.2 uW/mm2 Typ.、Digital output (Output appears “L” by light input.).，句点放在右括号前面，以及 Small plastic package。元描述同样停在 equipment，并直接连上 Features，平方写成 mm2。",
        "规格表封装 Plastic，封装类型 visible-cut，允许背景光 4000 lx，类型 Asynchronous detection。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 485 KB/PDF。缩略图是 k_s7136_s4289-61_pp_xx.jpg，alt 写 S4289-61,S7136。光谱响应图是 k-s6809-sr-xx,0.jpeg，文件名用的是 S6809。外形图是 kpica0009.svg。相关文档与 S4282-51 一样，注意事项是 Metal, Ceramic, Plastic products，290 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S4282-51 同一句，backgound 同样少一个 r。类型的值写成 Asynchronous，显示才补上 detection。封装类型 visible-cut。允许背景光的值写成 4000，显示才补上 lx。typeNameSort 写成 S04289-61。手册标 485 KB。thumbAlt 写成 S4289-61,S7136。缩略图文件名把 S7136 放在前面。`,
        "手册 https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/s4289-61_kpic1044e.pdf。目录号 KPIC1044E03，页脚写 Feb. 2019 DN，并写 Information described in this material is current as of February 2019，记为约 2019 年 2 月。二级标题与产品页相同。正文写 allows greater versatility in equipment design，有 design。特性最后一条写 Subminiature plastic package，产品页写 Small plastic package。允许背景照度写 4000 lx typ.，typ 用小写。应用写 Paper detection in office machines (copier, fax machines, etc.)，machines 用复数、copier 用单数，以及 Photosensor switches。绝对最大额定工作温度 -25 to +70 °C。焊接写 230 °C, 5 s, at least 1.8 mm away from package surface，写的是 package surface。注记 *1 写 Derate power dissipation at a rate of 3.3 mW/°C above Ta=25 °C。电流消耗典型 4.0 mA，条件 Vo and cathode terminals are open。高电平输出电压最小 4.9 V，条件 4.7 kΩ between Vcc and Vo。阴极输出注记 *3 写 When using it should be grounded，using 和 it 之间没有逗号。脉冲周期 1 典型 130 µs，脉冲宽度 1 典型 8 µs。输入光脉冲周期 2 最大 50 µs，脉冲宽度 2 最小 5 µs。H→L 阈值照度典型 0.2 µW/mm2、最大 1.0 µW/mm2，条件 λ=940 nm, No background light。迟滞符号写 Hys，最小 0.45、典型 0.65、最大 0.85。注记 *5 写 Hys = (L → H threshold illuminance) / (H → L threshold illuminance)。允许背景光最小 2000 lx、典型 4000 lx。信号光那一行印成 5 µ W/mm2，µ 和 W 之间有空格。真值表写 Light on 为 Low，Light off 为 High，两个词都大写。正文写 S4289-61 exhibits the same characteristics as S7136 series light modulation photo IC except for synchronous detection。外形图号 KPICA0009EC，感光面积 (0.4 × 0.4)。产品页外形图是 kpica0009.svg。注意事项一行写 Metal, ceramic plastic package products，ceramic 和 plastic 之间没有逗号。光谱响应图号 KPICB0002EA。" +
          noTag +
          "选型指南这一行只印允许背景光 4000，封装写 DIP。峰值灵敏度和阈值照度两格是空的。特性写 Asynchronous detection method，以及 Output “L” at light input。",
      ]),
    ],
  },
  {
    id: "s6809",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S6809：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。与 S4282-51 共用手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 是 false。页眉写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S6809", "2026-04", part("S6809"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S6809。二级标题与 S4282-51 相同。正文把结尾换成 a minimum detection level of 0.2 uW/mm2 Typ.，平方放在上标，Typ. 后面一个句点。特性四条，前三条与允许背景光 3000 lx Typ.、最低检测 0.2 uW/mm2 Typ.、数字输出 “L” 相同，第四条写 Small hysteresis。元描述在 Typ. 后面直接连 Features。",
        "规格表封装 Plastic，封装类型 visible-cut，允许背景光 3000 lx，类型 Small hysteresis。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF，与 S4282-51 同一份手册。缩略图是 k_s6846_s6809_pp_xx.jpg，alt 写 S6809,S6846。光谱响应图是 k-s6809-sr-xx,0.jpeg。外形图是 kpica0008ed.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 在 backgound 那一句后面加上 , Small hysteresis.。类型的值写成 Small，显示才补上 hysteresis。封装类型 visible-cut。允许背景光的值写成 3000，显示才补上 lx。typeNameSort 写成 S06809。手册标 693 KB。thumbAlt 写成 S6809,S6846。`,
        "手册与 S4282-51 同一份。迟滞右边另有一行写最小 0.65、典型 0.8、最大 0.95，三格都括注 S6809。没有括注的那一行仍是 0.45、0.65、0.95。特性写 Small hysteresis (S6809)。允许背景光这一组典型 3000 lx，最低检测典型 0.2 µW/mm2。工作温度 -25 to +60 °C。外形图与 S6846、S6986 合在一张，图号 KPICA0008EE，感光面积 (0.4 × 0.4)，包装写 Polyethylene bag (antistatic type)。产品页外形图是 kpica0008ed.svg。推荐焊接写 230 °C (less than 5 s) max.，这一行写 at least 1.8 mm away from lead roots。光谱响应图号 KPICB0002EA。" +
          noTag +
          "选型指南这一行印峰值灵敏度 850、阈值照度最大值 1，封装写 SIP。特性写 High sensitivity、Small hysteresis，以及 Output “L” at light input。",
      ]),
    ],
  },
  {
    id: "s6846",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S6846：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。与 S4282-51 共用手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 是 false。页眉写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S6846", "2026-04", part("S6846"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S6846。二级标题与 S4282-51 相同。正文结尾写 a minimum detection level of 0.2 uW/mm2 Typ..，Typ. 后面有两个句点。特性三条，允许背景光 3000 lx Typ.，最低检测 0.2 uW/mm2 Typ.，数字输出 “L”。没有写 Small hysteresis。元描述在两个句点后面直接连 Features。",
        "规格表封装 Plastic，封装类型 visible-cut，允许背景光 3000 lx。没有 Type 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。缩略图与 S6809 相同，是 k_s6846_s6809_pp_xx.jpg，alt 写 S6809,S6846。光谱响应图是 k-s6809-sr-xx,0.jpeg。外形图是 kpica0008ed.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S4282-51 同一句，backgound 同样少一个 r。类型的值和显示都是 --。封装类型 visible-cut。允许背景光的值写成 3000，显示才补上 lx。typeNameSort 写成 S06846。手册标 693 KB。thumbAlt 写成 S6809,S6846。`,
        "手册与 S4282-51 同一份。这一列和 S7136/-10 同在开集电极这一组。允许背景光典型 3000 lx，最低检测典型 0.2 µW/mm2。迟滞没有单独括注 S6846，用的是 0.45、0.65、0.95 那一行。工作温度 -25 to +60 °C。外形图与 S6809、S6986 同一张，图号 KPICA0008EE，包装写 Polyethylene bag (antistatic type)。产品页外形图是 kpica0008ed.svg。推荐焊接与 S6809 同一格，写 at least 1.8 mm away from lead roots。" +
          noTag +
          "选型指南 S6846 这一行没有印峰值灵敏度和阈值照度。特性写 High sensitivity，以及 Output “L” at light input。850、1 和 3000 印在 S7136 和 S7136-10 之间。",
      ]),
    ],
  },
  {
    id: "s6986",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S6986：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。与 S4282-51 共用手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 是 false。页眉写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S6986", "2026-04", part("S6986"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S6986。二级标题与 S4282-51 相同。正文结尾写 an allowable background light level of 10000 lx Typ..，Typ. 后面有两个句点。特性三条，允许背景光 10000 lx Typ.，最低检测 0.7 uW/mm2 Typ.，数字输出 “L”。元描述在两个句点后面直接连 Features。",
        "规格表封装 Plastic，封装类型 clear，允许背景光 10000 lx。没有 Type 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。产品页没有缩略图。光谱响应图用的是 k-s4282-51-sr-xx,0.jpeg。外形图是 kpica0008ed.svg。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S4282-51 同一句。类型的值和显示都是 --。封装类型 clear。允许背景光的值写成 10000，显示才补上 lx。typeNameSort 写成 S06986。手册标 693 KB。thumbSrc 是空的，thumbAlt 是 null。`,
        "手册与 S4282-51 同一份。这一列和 S4282-51、S10053/-01DT 同在内置上拉这一组。允许背景光典型 10000 lx，最低检测典型 0.7 µW/mm2。阴极低电平输出电流最小 15 mA、典型 35 mA、最大 60 mA。工作温度 -25 to +60 °C。外形图与 S6809、S6846 同一张，图号 KPICA0008EE，包装写 Polyethylene bag (antistatic type)。产品页外形图是 kpica0008ed.svg。推荐焊接与 S6809 同一格，写 at least 1.8 mm away from lead roots。光谱响应图号 KPICB0001EB。" +
          noTag +
          "选型指南这一行印峰值灵敏度 800、阈值照度最大值 2、允许背景光 10000，封装写 SIP。特性写 High allowable background light level，以及 Output “L” at light input。",
      ]),
    ],
  },
  {
    id: "s7136",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S7136：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。S7136 与 S7136-10 共用手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 都是 false。两页页眉都写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S7136", "2026-04", part("S7136"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S7136。二级标题与 S4282-51 相同。正文结尾写 a minimum detection level of 0.2 uW/mm2 Typ. (S7136)。特性三条，允许背景光 3000 lx Typ.，最低检测 0.2 uW/mm2 Typ.，数字输出 “L”。元描述把 (S7136). 留在 Features 前面。",
        "规格表封装 Plastic，封装类型 visible-cut，允许背景光 3000 lx。没有 Type 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。缩略图是 k_s7136_s4289-61_pp_xx.jpg，alt 写 S4289-61,S7136。光谱响应图是 k-s6809-sr-xx,0.jpeg。外形图是 kpica0009.svg。轮播链接到 S7136-10，缩略图文件名是 k_s7136-10_s8030_pp_xx.jpg，alt 写 S7136-10。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S4282-51 同一句。类型的值和显示都是 --。封装类型 visible-cut。允许背景光的值写成 3000，显示才补上 lx。typeNameSort 写成 S07136。手册标 693 KB。thumbAlt 写成 S4289-61,S7136。`,
        "手册与 S4282-51 同一份，型号写成 S7136/-10。允许背景光典型 3000 lx，最低检测典型 0.2 µW/mm2。工作温度 -25 to +60 °C。外形图与 S4282-51 同一张，图号 KPICA0009EE，感光面积 (0.4 × 0.4)，包装写 Stick。产品页外形图是 kpica0009.svg。推荐焊接写 at least 1 mm away from lead roots。S4289-61 的手册写 S4289-61 exhibits the same characteristics as S7136 series light modulation photo IC except for synchronous detection。" +
          noTag +
          "选型指南 S7136 这一行封装写 DIP。峰值灵敏度 850、阈值照度最大值 1、允许背景光 3000 印在 S7136 和 S7136-10 之间。特性写 High sensitivity，以及 Output “L” at light input。",
      ]),
      page("S7136-10", "2026-04", part("S7136-10"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S7136-10。二级标题与 S4282-51 相同。正文结尾写 a minimum detection level of 0.2 uW/mm2 Typ. (S7136-10)。特性三条与 S7136 相同。元描述把 (S7136-10). 留在 Features 前面。",
        "规格表封装 Plastic，封装类型 visible-cut，允许背景光 3000 lx。没有 Type 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。缩略图是 k_s7136-10_s8030_pp_xx.jpg，alt 只写 S7136-10。文件名里的 S8030 没有索引行，对应地址返回 404，这一页不另收。光谱响应图是 k-s6809-sr-xx,0.jpeg。外形图是 kpica0034ec.svg。注意事项链接写 Precautions / Surface mount type products，407 KB/PDF，文件名 kxx-a12029-eng.pdf。轮播链接到 S7136。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 与 S4282-51 同一句。类型的值和显示都是 --。封装类型 visible-cut。允许背景光的值写成 3000，显示才补上 lx。typeNameSort 写成 S07136-10。手册标 693 KB。thumbAlt 是 S7136-10。`,
        "手册与 S7136 同一份。外形图单独一张，标题写 S7136-10，有 Index mark，感光面积 (0.4 × 0.4)，图号 KPICA0034EC，包装写 Stick。产品页外形图是 kpica0034ec.svg。推荐焊盘图号 KPICC0371EA。推荐焊接这一格是 *7，注记写 Contact us for detailed information。" +
          noTag +
          "选型指南这一行封装写 Surface mount type。特性写 High sensitivity，以及 Output “L” at light input。",
      ]),
    ],
  },
  {
    id: "s10053",
    date: "2026-04",
    companyId: "hamamatsu",
    category: "product",
    title: "S10053：滨松光调制 Photo IC",
    summary:
      "产品页没有写发布日期。S10053 与 S10053-01DT 共用手册目录号 KPIC1002E15，页脚写 Apr. 2026 DN，并写 current as of April 2026，记为约 2026 年 4 月。索引 newState 都是 false。两页页眉都写 Light modulation photo IC。",
    applications: [],
    technologies: [],
    models: [
      page("S10053", "2026-04", part("S10053"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S10053。二级标题写 Fewer detection errors even under disturbance background light (Stick packing)。正文结尾写 an allowable background light level of 10000 lx Typ..，Typ. 后面有两个句点。特性写允许背景光 10000 lx Typ.、最低检测 0.7 uW/mm2 Typ.、数字输出 “L”、Small SMD package，以及 Packing type: Stick (S10053)。下一行先是 6 个全角空格和 3 个不换行空格，再写 Reel (S10053-01DT)。元描述把这 6 个全角空格留在 Stick (S10053) 后面，并把不换行空格写成 &nbsp; 三次，两个句点后面直接连 Features。",
        "规格表封装 Plastic，封装类型 clear，允许背景光 10000 lx，类型 Small SMD package。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。缩略图是 k_s10053_pp_xx.jpg，alt 写 S10053。光谱响应图是 k-s4282-51-sr-xx,0.jpeg。外形图是 kpica0076ed.svg。注意事项链接写 Precautions / Surface mount type products，407 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写成 backgound 那一句，再加 , small SMD package (Stick packing)，small 用小写。类型的值写成 Small SMD，显示才补上 package。封装类型 clear。允许背景光的值写成 10000，显示才补上 lx。typeNameSort 写成 S10053。手册标 693 KB。thumbAlt 是 S10053。`,
        "手册与 S4282-51 同一份，型号写成 S10053/-01DT。工作温度 -25 to +85 °C。焊接温度写 240 (once)。注记 *2 写 Reflow soldering, IPC/JEDEC-J-STD-020 MSL5a, see P.9。特性写 S10053: stick，S10053-01DT: reel，stick 和 reel 都用小写。允许背景光典型 10000 lx，最低检测典型 0.7 µW/mm2。外形图标题写 S10053/-01DT，感光面积 (0.4 × 0.4)，图号 KPICA0076EE。图上写 (GND) terminals should be connected to GND terminal on board。包装写 Stick (S10053) 和 Reel (S10053-01DT)。产品页外形图是 kpica0076ed.svg。手册写 The S10053/-01DT supports lead-free soldering。拆封后贮存写 30 °C or less，湿度 60% or less，并写 perform soldering within 24 hours。回流图写 240 °C max.，Preheat 70 to 90 s，Soldering 40 s max.。推荐焊盘图号 KPICC0370EA。光谱响应图号 KPICB0001EB。" +
          noTag +
          "选型指南没有 S10053 这一行。",
      ]),
      page("S10053-01DT", "2026-04", part("S10053-01DT"), [
        "产品页没有写发布日期。页眉写 Light modulation photo IC。一级标题写 S10053-01DT。二级标题写 Fewer detection errors even under disturbance background light (Reel packing)，右括号后面有一个空格。正文结尾同样写 10000 lx Typ..，两个句点。特性五条与 S10053 相同，包装那一行仍先写 Stick (S10053)。换行后是 5 个全角空格、5 个半角空格、1 个全角空格和 3 个不换行空格，再写 Reel (S10053-01DT)。元描述把同样一段空白留在 Stick (S10053) 后面。",
        "规格表封装 Plastic，封装类型 clear，允许背景光 10000 lx，类型 Small SMD package。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。页面下载标 693 KB/PDF。缩略图与 S10053 相同，是 k_s10053_pp_xx.jpg，alt 仍写 S10053。光谱响应图是 k-s4282-51-sr-xx,0.jpeg。外形图是 kpica0076ed.svg。注意事项同样是 Surface mount type products，407 KB/PDF。",
        `索引 ${index} 这一行 newState 是 false。${indexIntro}productExp 写成 backgound 那一句，再加 , small SMD package (Reel packing)。类型的值写成 Small SMD，显示才补上 package。封装类型 clear。允许背景光的值写成 10000，显示才补上 lx。typeNameSort 写成 S10053-01DT。手册标 693 KB。thumbAlt 是 S10053。`,
        "手册与 S10053 同一份。卷带规格写 Reel (conforms to JEITA ET-7200)，外径 ϕ254 mm，轴径 ϕ80 mm，带宽 12 mm，材料 PS，并写 Antistatic treatment。载带写 material: PS, electrically conductive。包装数量写 2000 pcs/reel。包装形式写 Reel and desiccant in moisture-proof packaging (vacuum-sealed)。" +
          noTag +
          "选型指南这一行印峰值灵敏度 800、阈值照度最大值 2、允许背景光 10000，封装写 Surface mount type。特性写 High allowable background light level，以及 Output “L” at light input。",
      ]),
    ],
  },
];
