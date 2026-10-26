const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const ii = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/image-intensifier/${part}.html`;

const catalog =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/etd/II_TII0007E.pdf";

export const intensifierProducts = [
  {
    id: "v4170",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V4170：滨松两级多碱与 Cs-Te 像增强管",
    summary:
      "V4170U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ18 mm。V4170U-03 的产品页写 Cs-Te 光阴极，光谱响应 160 到 320 nm。两只都没有写发布日期。索引把两只都标成 Second Generation，量子效率都是 17 %。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V4170U", "", ii("V4170U"), [
        "产品页没有写发布日期。页面标题写 Image intensifier V4170U。一级标题只写 V4170U。正文先写 Image intensifiers are devices that can detect and amplify very low levels of light to capture images。下一句写 imaging of micro-discharges in the invisible regions 和 observation of high-speed phenomena。型号句写成 The V4170U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ18 mm。",
        "像增强器索引标题写 Image intensifiers (IIs)。说明写 IIs produce high-contrast images under dark conditions。Suitable for night-time surveillance, as well as for scientific and technical research。门控型写 high-speed moving objects、fluorescence lifetime observation，以及 bioluminescence and chemiluminescence imaging。这段写在整页说明里，没有单独点名 V4170U。索引共 19 行，newState 都是 false。",
        "这一行 productName 写 Image intensifier tube。Feature 写 Second Generation。光谱响应短波 160 nm，长波 900 nm，峰值 430 nm。有效光阴极面积写成 Dia.18 mm，不是产品页的 Φ18 mm。门控 Without。最短门时间写成 - ns，减号和 ns 之间有空格。量子效率 17 %，百分号前有空格。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V04170U，4 前面多了一个 0。手册标 2.1 MB。thumbAlt 是空的。",
        `手册链接 ${catalog}。目录号 TII 0007E04，页脚写 Sep. 2026，并写 © 2026 Hamamatsu Photonics K.K.，记为约 2026 年 9 月。概述把像增强器缩写成 I.I.。例子页标题写成 Examples of Chaptured Images，Captured 印成 Chaptured。结构页把入射电子印成 Incudent electron，并写 multiplied by afactor，factor 前面没有空格。荧光屏衰减图把 Relative 印成 Relarive。EBI 对温度的图题把 background 印成 backgrouns。`,
        "多碱光阴极规格表把 V4170U 和 V10308U 放在同一组。MCP 是 2 级，门控 Without，光谱响应 160 to 900 nm。峰值辐射灵敏度波长 430 nm。峰值量子效率波长 410 nm。索引的 Spectral Response (Peak) 是 430 nm，对的是辐射灵敏度峰值，不是 410 nm。量子效率只给典型 17 %，对得上索引。中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。索引只印 57 Lp/mm，没有写典型，也没有写 MCP 级数。光灵敏度这一组最小 100 µA/lm、典型 170 µA/lm。辐射灵敏度典型 60 mA/W。发光增益典型 5.0 × 10^6 (lm/m2)/lx。辐射出射增益典型 4.0 × 10^6 (W/m2)/(W/m2)。",
        "碱金属光阴极共用规格写荧光屏 P43，可以改成 P46。输出窗 FOP，可以改成硼硅玻璃或 inverter fiber optics。工作温度 -20 to +40 °C，贮存温度 -55 to +60 °C。冲击写成 300 m/s2 (30 G), 18 ms。振动 10 Hz to 55 Hz, 0.35 mm (p-p)。索引没有印荧光屏、输出窗和贮存温度。手册第 16 页的高速门控组件 C14245、C16031，电源模块 C6706、C8499、C6083，以及外壳 A10505，没有当作传感器加入。A10505 点名的 V8071U/D 产品页返回 404。",
      ]),
      page("V4170U-03", "", ii("V4170U-03"), [
        "产品页没有写发布日期。页面标题写 Image intensifier V4170U-03。型号句写成 The V4170U-03 is Cs-Te photocathode image intensifier，Cs-Te 前面没有 a。光谱响应 160 nm 到 320 nm，有效光阴极面积 Φ18 mm。前面两句概述与 V4170U 相同。",
        "索引 newState 是 false。productName 仍写 Image intensifier tube。Feature 仍写 Second Generation。光谱响应短波 160 nm，长波 320 nm，峰值 230 nm。有效面积写成 Dia.18 mm。门控 Without。最短门时间写成 --，没有 ns。量子效率 17 %。极限分辨率 28 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V04170U-03。手册仍标 2.1 MB。",
        "手册仍是 TII 0007E04，记为约 2026 年 9 月。Cs-Te 规格表把这一只放在 2 级 MCP、门控 Without。光谱响应 160 to 320 nm。峰值辐射灵敏度波长 230 nm，对得上索引的峰值。峰值量子效率波长 220 nm，索引没有印 220 nm。量子效率最小 5.4 %、典型 17 %。索引只印 17 %。中心极限分辨率最小 22 Lp/mm、典型 28 Lp/mm。索引只印 28 Lp/mm。辐射灵敏度典型 32 mA/W。辐射出射增益这一列典型 1.6 × 10^6 (W/m2)/(W/m2)，两级 MCP 那一组的最小值印成 2.0 × 10^5。",
      ]),
    ],
  },
  {
    id: "v4183",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V4183：滨松带门控的两级像增强管",
    summary:
      "V4183U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ18 mm。V4183U-03 的产品页写 Cs-Te 光阴极，光谱响应 160 到 320 nm。两只索引都写门控 With，最短门时间 5 ns。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V4183U", "", ii("V4183U"), [
        "产品页没有写发布日期。型号句写成 The V4183U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation。峰值 430 nm。有效面积写成 Dia.18 mm。门控 With。最短门时间 5 ns。量子效率 14 %。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V04183U。手册标 2.1 MB。",
        "手册仍是 TII 0007E04，记为约 2026 年 9 月。多碱表把 V4183U 和 V10309U 放在同一组。MCP 是 2 级，门控 With。峰值辐射灵敏度波长 430 nm，峰值量子效率波长 410 nm。量子效率典型 14 %，对得上索引。中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。光灵敏度这一组最小 100 µA/lm、典型 150 µA/lm。辐射灵敏度典型 47 mA/W。发光增益典型 4.0 × 10^6 (lm/m2)/lx。辐射出射增益典型 3.0 × 10^6 (W/m2)/(W/m2)。半导体后缀表把带门控写成 5 ns gate speed。这一只的索引也是 5 ns。",
      ]),
      page("V4183U-03", "", ii("V4183U-03"), [
        "产品页没有写发布日期。型号句写成 The V4183U-03 is Cs-Te photocathode image intensifier，Cs-Te 前面没有 a。光谱响应 160 nm 到 320 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。Feature 写 Second Generation。峰值 230 nm。有效面积 Dia.18 mm。门控 With。最短门时间 5 ns。量子效率 12 %。极限分辨率 28 Lp/mm。typeNameSort 写成 V04183U-03。手册仍标 2.1 MB。",
        "手册 Cs-Te 表把这一只放在 2 级 MCP、门控 With。峰值辐射灵敏度波长 230 nm，峰值量子效率波长 220 nm。量子效率最小 5.4 %、典型 12 %。中心极限分辨率最小 22 Lp/mm、典型 28 Lp/mm。辐射灵敏度典型 22 mA/W。辐射出射增益典型 1.1 × 10^6 (W/m2)/(W/m2)。",
      ]),
    ],
  },
  {
    id: "v6886",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V6886：滨松高分辨率一级像增强管",
    summary:
      "V6886U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ18 mm。V6886U-03 的产品页写 Cs-Te 光阴极，光谱响应 160 到 320 nm。索引把两只都标成 Second Generation, High Resolution，门控都是 Without。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V6886U", "", ii("V6886U"), [
        "产品页没有写发布日期。型号句写成 The V6886U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation, High Resolution。峰值 430 nm。有效面积 Dia.18 mm。门控 Without。最短门时间写成 - ns。量子效率 18 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V06886U。手册标 2.1 MB。",
        "手册仍是 TII 0007E04，记为约 2026 年 9 月。多碱表把 V6886U 和 V7669U 放在同一组。MCP 是 1 级，门控 Without。峰值辐射灵敏度波长 430 nm，峰值量子效率波长 410 nm。量子效率典型 18 %。中心极限分辨率最小 51 Lp/mm、典型 64 Lp/mm。索引只印 64 Lp/mm。光灵敏度这一组最小 150 µA/lm、典型 280 µA/lm。辐射灵敏度典型 62 mA/W。发光增益典型 1.2 × 10^4 (lm/m2)/lx。辐射出射增益典型 8.7 × 10^3 (W/m2)/(W/m2)。",
      ]),
      page("V6886U-03", "", ii("V6886U-03"), [
        "产品页没有写发布日期。型号句写成 The V6886U-03 is Cs-Te photocathode image intensifier，Cs-Te 前面没有 a。光谱响应 160 nm 到 320 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。Feature 仍写 Second Generation, High Resolution。峰值 230 nm。有效面积 Dia.18 mm。门控 Without。最短门时间写成 --，没有 ns。量子效率 17 %。极限分辨率 40 Lp/mm。typeNameSort 写成 V06886U-03。手册仍标 2.1 MB。",
        "手册 Cs-Te 表把这一只放在 1 级 MCP、门控 Without。峰值辐射灵敏度波长 230 nm，峰值量子效率波长 220 nm。量子效率最小 5.4 %、典型 17 %。中心极限分辨率最小 28 Lp/mm、典型 40 Lp/mm。辐射灵敏度典型 32 mA/W。一级 MCP 那一组的辐射出射增益最小值印成 1.2 × 10^3 (W/m2)/(W/m2)。这一列的典型值印成 3.8 × 10^6，旁边 V6887U-03 的典型值印成 2.6 × 10^3。",
      ]),
    ],
  },
  {
    id: "v6887",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V6887：滨松带门控的高分辨率像增强管",
    summary:
      "V6887U 的产品页写多碱光阴极，光谱响应 160 到 900 nm。V6887U-03 的产品页写 Cs-Te 光阴极，光谱响应 160 到 320 nm。两只有效光阴极都是 Φ18 mm，索引都写门控 With、最短门时间 5 ns，Feature 都写 Second Generation, High Resolution。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V6887U", "", ii("V6887U"), [
        "产品页没有写发布日期。型号句写成 The V6887U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation, High Resolution。峰值 430 nm。有效面积 Dia.18 mm。门控 With。最短门时间 5 ns。量子效率 15 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V06887U。手册标 2.1 MB。",
        "手册多碱表把 V6887U 和 V7670U 放在同一组。MCP 是 1 级，门控 With。量子效率典型 15 %。中心极限分辨率最小 51 Lp/mm、典型 64 Lp/mm。光灵敏度这一组最小 150 µA/lm、典型 230 µA/lm。辐射灵敏度典型 53 mA/W。发光增益典型 1.1 × 10^4 (lm/m2)/lx。辐射出射增益典型 6.8 × 10^3 (W/m2)/(W/m2)。峰值辐射灵敏度波长仍是 430 nm，峰值量子效率波长仍是 410 nm。",
      ]),
      page("V6887U-03", "", ii("V6887U-03"), [
        "产品页没有写发布日期。型号句写成 The V6887U-03 is Cs-Te photocathode image intensifier，Cs-Te 前面没有 a。光谱响应 160 nm 到 320 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。Feature 仍写 Second Generation, High Resolution。峰值 230 nm。有效面积 Dia.18 mm。门控 With。最短门时间 5 ns。量子效率 12 %。极限分辨率 40 Lp/mm。typeNameSort 写成 V06887U-03。手册仍标 2.1 MB。",
        "手册 Cs-Te 表把这一只放在 1 级 MCP、门控 With。量子效率最小 5.4 %、典型 12 %。中心极限分辨率最小 28 Lp/mm、典型 40 Lp/mm。辐射灵敏度典型 22 mA/W。辐射出射增益典型 2.6 × 10^3 (W/m2)/(W/m2)。峰值辐射灵敏度波长 230 nm，峰值量子效率波长 220 nm。",
      ]),
    ],
  },
  {
    id: "v7090",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V7090：滨松 GaAs 像增强器",
    summary:
      "V7090U-71 的产品页写 GaAs 光阴极，光谱响应 370 到 920 nm，有效光阴极 13.5 × 10 mm。索引 Feature 写成 Third Generation,  Enhanced Red，逗号和 Enhanced 之间有两个空格。门控写成 With / Without，最短门时间 5 ns。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V7090U-71", "", ii("V7090U-71"), [
        "产品页没有写发布日期。页面标题写 Image intensifier V7090U-71。型号句写成 The V7090U-71 is GaAs photocathode image intensifier，GaAs 前面没有 a。光谱响应 370 nm 到 920 nm，有效光阴极面积 13.5 × 10 mm，乘号是 ×。",
        "索引 newState 是 false。productName 写 Image intensifier，没有 tube。Feature 的取值写成 Third Generation,  Enhanced Red，逗号后面有两个空格。光谱响应短波 370 nm，长波 920 nm，峰值 700 to 800 nm。有效面积写成 13.5 x 10 mm，乘号是 x。门控写成 With / Without。最短门时间 5 ns。量子效率 30 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V07090U-71。手册标 2.1 MB。",
        "手册仍是 TII 0007E04，记为约 2026 年 9 月。半导体光阴极表的列名写成 V7090x-71-xxxx，x 占着灌封、门控、MCP、荧光屏和输出窗的位置。光阴极类型 GaAs。有效面积 13.5 × 10 mm。光谱响应 370 to 920 nm。峰值辐射灵敏度光谱范围 700 to 800 nm，对得上索引的峰值。峰值量子效率范围 600 to 700 nm，索引没有印这一段。量子效率最小是短横，典型 30 %。中心极限分辨率按 1 级 MCP 最小 51 Lp/mm、典型 64 Lp/mm，按 2 级 MCP 最小 45 Lp/mm、典型 57 Lp/mm。索引只印 64 Lp/mm。",
        "后缀表把 U 写成凹窗，输入窗在外壳前面之后。D 是凸窗。N 是没有门控，G 是 5 ns 门控。MCP 的 1 是单级，2 是两级。荧光屏 3 是 P43，6 是 P46。输出窗 0 是光纤板，2 是硼硅玻璃。索引只列了 V7090U-71 这一只，没有把这些后缀拆成单独型号。共用规格的工作温度 -20 to +40 °C，贮存温度 -55 to +60 °C。封面型号写成 V7090，没有 U。",
      ]),
    ],
  },
  {
    id: "v7669",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V7669：滨松 Φ25 mm 多碱像增强管",
    summary:
      "V7669U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ25 mm。索引 Feature 写 Second Generation, High Resolution，门控 Without，极限分辨率 64 Lp/mm，量子效率 18 %。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V7669U", "", ii("V7669U"), [
        "产品页没有写发布日期。型号句写成 The V7669U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ25 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation, High Resolution。峰值 430 nm。有效面积写成 Dia.25 mm。门控 Without。最短门时间写成 - ns。量子效率 18 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V07669U。手册标 2.1 MB。缩略图文件名与 V7670U、V10308U、V10309U 共用。",
        "手册多碱表把 V7669U 和 V6886U 放在同一组。MCP 是 1 级，门控 Without。有效面积这一列是 Φ25。量子效率典型 18 %。中心极限分辨率最小 51 Lp/mm、典型 64 Lp/mm。光灵敏度典型 280 µA/lm。辐射灵敏度典型 62 mA/W。发光增益典型 1.2 × 10^4 (lm/m2)/lx。峰值辐射灵敏度波长 430 nm，峰值量子效率波长 410 nm。外形图标题写成 V7669U series, V7670U series, V10308U series and V10309U series。Φ25 的最小值印成 Φ25 Min.，Min 的 i 是大写 I。",
      ]),
    ],
  },
  {
    id: "v7670",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V7670：滨松 Φ25 mm 带门控像增强管",
    summary:
      "V7670U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ25 mm。索引写门控 With，最短门时间 10 ns，量子效率 15 %，极限分辨率 64 Lp/mm。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。手册的门控后缀说明写的是 5 ns。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V7670U", "", ii("V7670U"), [
        "产品页没有写发布日期。型号句写成 The V7670U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ25 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation, High Resolution。峰值 430 nm。有效面积 Dia.25 mm。门控 With。最短门时间 10 ns。量子效率 15 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V07670U。手册标 2.1 MB。",
        "手册多碱表把 V7670U 和 V6887U 放在同一组。MCP 是 1 级，门控 With。量子效率典型 15 %。中心极限分辨率最小 51 Lp/mm、典型 64 Lp/mm。光灵敏度典型 230 µA/lm。辐射灵敏度典型 53 mA/W。发光增益典型 1.1 × 10^4 (lm/m2)/lx。这张表没有印最短门时间。半导体后缀表把 Has a gate 写成 5 ns gate speed。索引这一只是 10 ns，不是 5 ns。",
      ]),
    ],
  },
  {
    id: "v8070",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V8070：滨松 GaAsP 像增强器",
    summary:
      "V8070U-73 的产品页写 extended red GaAsP，光谱响应 280 到 820 nm。V8070U-74 的产品页写 GaAsP，光谱响应 280 到 720 nm。两只有效光阴极都是 13.5 × 10 mm。索引量子效率分别是 45 % 和 50 %，极限分辨率都是 64 Lp/mm。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V8070U-73", "", ii("V8070U-73"), [
        "产品页没有写发布日期。型号句写成 The V8070U-73 is extended red GaAsP photocathode image intensifier，extended 前面没有 a。光谱响应 280 nm 到 820 nm，有效光阴极面积 13.5 × 10 mm。索引这一行的 productExp 是空的，产品页正文有这句。",
        "索引 newState 是 false。productName 写 Image intensifier。Feature 写 Third Generation, High Q.E.。光谱响应短波 280 nm，长波 820 nm，峰值 530 to 580 nm。有效面积 13.5 x 10 mm。门控 With / Without。最短门时间 5 ns。量子效率 45 %。极限分辨率 64 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V08070U-73。手册标 2.1 MB。",
        "手册列名写成 V8070x-73-xxxx。光阴极类型 Extended red GaAsP。有效面积 13.5 × 10 mm。光谱响应 280 to 820 nm。峰值辐射灵敏度光谱范围 530 to 580 nm，对得上索引。峰值量子效率范围 480 to 530 nm，索引没有印这一段。量子效率最小 35 %、典型 45 %。1 级 MCP 的中心极限分辨率最小 51 Lp/mm、典型 64 Lp/mm。2 级 MCP 最小 45 Lp/mm、典型 57 Lp/mm。索引只印 64 Lp/mm。封面型号写成 V8070，没有 U。",
      ]),
      page("V8070U-74", "", ii("V8070U-74"), [
        "产品页没有写发布日期。型号句写成 The V8070U-74 is GaAsP photocathode image intensifier，GaAsP 前面没有 a。光谱响应 280 nm 到 720 nm，有效光阴极面积 13.5 × 10 mm。索引 productExp 有这句。",
        "索引 newState 是 false。productName 写 Image intensifier。Feature 写 Third Generation, High Q.E.。长波改成 720 nm，峰值仍是 530 to 580 nm。有效面积 13.5 x 10 mm。门控 With / Without。最短门时间 5 ns。量子效率 50 %。极限分辨率 64 Lp/mm。typeNameSort 写成 V08070U-74。手册仍标 2.1 MB。",
        "手册列名写成 V8070x-74-xxxx。光阴极类型 GaAsP。光谱响应 280 to 720 nm。量子效率最小 38 %、典型 50 %。1 级 MCP 的中心极限分辨率典型仍是 64 Lp/mm，最小 51 Lp/mm。峰值辐射灵敏度光谱范围仍是 530 to 580 nm，峰值量子效率范围仍是 480 to 530 nm。",
      ]),
    ],
  },
  {
    id: "v9501",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V9501：滨松 16 mm 方形 GaAsP 像增强器",
    summary:
      "V9501U-73 的产品页写 extended red GaAsP，光谱响应 280 到 820 nm，有效光阴极 16 × 16 mm。V9501U-74 的产品页写 GaAsP，光谱响应 280 到 720 nm。索引极限分辨率都是 57 Lp/mm，量子效率分别是 45 % 和 50 %。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V9501U-73", "", ii("V9501U-73"), [
        "产品页没有写发布日期。型号句写成 The V9501U-73 is extended red GaAsP photocathode image intensifier，extended 前面没有 a。光谱响应 280 nm 到 820 nm，有效光阴极面积 16 × 16 mm。",
        "索引 newState 是 false。productName 写 Image intensifier。Feature 写 Third Generation, High Q.E.。峰值 530 to 580 nm。有效面积写成 16 x 16 mm。门控 With / Without。最短门时间 5 ns。量子效率 45 %。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V09501U-73。手册标 2.1 MB。",
        "手册列名写成 V9501x-73-xxxx。有效面积 16 × 16 mm。光谱响应 280 to 820 nm。量子效率最小 35 %、典型 45 %。1 级 MCP 的中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。2 级 MCP 最小 40 Lp/mm、典型 51 Lp/mm。索引只印 57 Lp/mm。峰值辐射灵敏度光谱范围 530 to 580 nm。峰值量子效率范围 480 to 530 nm。",
      ]),
      page("V9501U-74", "", ii("V9501U-74"), [
        "产品页没有写发布日期。型号句写成 The V9501U-74 is GaAsP photocathode image intensifier，GaAsP 前面没有 a。光谱响应 280 nm 到 720 nm，有效光阴极面积 16 × 16 mm。索引这一行的 productExp 是空的，产品页正文有这句。",
        "索引 newState 是 false。Feature 写 Third Generation, High Q.E.。长波 720 nm，峰值 530 to 580 nm。有效面积 16 x 16 mm。门控 With / Without。最短门时间 5 ns。量子效率 50 %。极限分辨率 57 Lp/mm。typeNameSort 写成 V09501U-74。手册仍标 2.1 MB。",
        "手册列名写成 V9501x-74-xxxx。光阴极类型 GaAsP。光谱响应 280 to 720 nm。量子效率最小 38 %、典型 50 %。1 级 MCP 的中心极限分辨率典型 57 Lp/mm、最小 45 Lp/mm。峰值量子效率范围仍是 480 to 530 nm，索引峰值仍是 530 to 580 nm。",
      ]),
    ],
  },
  {
    id: "v9569",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V9569：滨松 16 mm 方形 GaAs 像增强器",
    summary:
      "V9569U-71 的产品页写 GaAs 光阴极，光谱响应 370 到 920 nm，有效光阴极 16 × 16 mm。索引 Feature 写成 Third Generation,  Enhanced Red，逗号和 Enhanced 之间有两个空格。极限分辨率 57 Lp/mm，量子效率 30 %。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V9569U-71", "", ii("V9569U-71"), [
        "产品页没有写发布日期。型号句写成 The V9569U-71 is GaAs photocathode image intensifier，GaAs 前面没有 a。光谱响应 370 nm 到 920 nm，有效光阴极面积 16 × 16 mm。",
        "索引 newState 是 false。productName 写 Image intensifier。Feature 的取值写成 Third Generation,  Enhanced Red，逗号后面有两个空格。峰值 700 to 800 nm。有效面积 16 x 16 mm。门控 With / Without。最短门时间 5 ns。量子效率 30 %。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V09569U-71。手册标 2.1 MB。",
        "手册列名写成 V9569x-71-xxxx。光阴极类型 GaAs。有效面积 16 × 16 mm。光谱响应 370 to 920 nm。峰值辐射灵敏度光谱范围 700 to 800 nm。峰值量子效率范围 600 to 700 nm。量子效率最小是短横，典型 30 %。1 级 MCP 的中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。2 级 MCP 最小 40 Lp/mm、典型 51 Lp/mm。索引只印 57 Lp/mm。封面型号写成 V9569，没有 U。",
      ]),
    ],
  },
  {
    id: "v10308",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V10308：滨松 Φ25 mm 两级多碱像增强管",
    summary:
      "V10308U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ25 mm。索引 Feature 写 Second Generation，门控 Without，量子效率 17 %，极限分辨率 57 Lp/mm。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V10308U", "", ii("V10308U"), [
        "产品页没有写发布日期。型号句写成 The V10308U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ25 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation。峰值 430 nm。有效面积 Dia.25 mm。门控 Without。最短门时间写成 - ns。量子效率 17 %。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V10308U，没有再插 0。手册标 2.1 MB。",
        "手册多碱表把 V10308U 和 V4170U 放在同一组。MCP 是 2 级，门控 Without。有效面积这一列是 Φ25。量子效率典型 17 %。中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。光灵敏度典型 170 µA/lm。辐射灵敏度典型 60 mA/W。发光增益典型 5.0 × 10^6 (lm/m2)/lx。辐射出射增益典型 4.0 × 10^6 (W/m2)/(W/m2)。峰值辐射灵敏度波长 430 nm，峰值量子效率波长 410 nm。",
      ]),
    ],
  },
  {
    id: "v10309",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V10309：滨松 Φ25 mm 带门控两级像增强管",
    summary:
      "V10309U 的产品页写多碱光阴极，光谱响应 160 到 900 nm，有效光阴极 Φ25 mm。索引写门控 With，最短门时间 10 ns，量子效率 14 %，极限分辨率 57 Lp/mm。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。手册的门控后缀说明写的是 5 ns。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V10309U", "", ii("V10309U"), [
        "产品页没有写发布日期。型号句写成 The V10309U is multialkali photocathode image intensifier，multialkali 前面没有 a。光谱响应 160 nm 到 900 nm，有效光阴极面积 Φ25 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation。峰值 430 nm。有效面积 Dia.25 mm。门控 With。最短门时间 10 ns。量子效率 14 %。极限分辨率 57 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V10309U。手册标 2.1 MB。",
        "手册多碱表把 V10309U 和 V4183U 放在同一组。MCP 是 2 级，门控 With。量子效率典型 14 %。中心极限分辨率最小 45 Lp/mm、典型 57 Lp/mm。光灵敏度典型 150 µA/lm。辐射灵敏度典型 47 mA/W。发光增益典型 4.0 × 10^6 (lm/m2)/lx。辐射出射增益典型 3.0 × 10^6 (W/m2)/(W/m2)。这张表没有印最短门时间。半导体后缀表把带门控写成 5 ns。索引这一只是 10 ns。",
      ]),
    ],
  },
  {
    id: "v13716",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "V13716：滨松高灵敏度 Cs-Te 像增强管",
    summary:
      "V13716U-N130 的产品页写高灵敏度 Cs-Te 光阴极，光谱响应 160 到 320 nm，有效光阴极 Φ18 mm。索引量子效率 32 %，极限分辨率 40 Lp/mm，门控 Without。产品页没有写发布日期。手册目录号 TII 0007E04，页脚写 Sep. 2026，记为约 2026 年 9 月。手册还列了 V13716U-N230，产品页返回 404，没有加入。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("V13716U-N130", "", ii("V13716U-N130"), [
        "产品页没有写发布日期。型号句写成 The V13716U-N130 is high sensitivity Cs-Te photocathode image intensifier，high 前面没有 a。光谱响应 160 nm 到 320 nm，有效光阴极面积 Φ18 mm。",
        "索引 newState 是 false。productName 写 Image intensifier tube。Feature 写 Second Generation，没有 High Resolution。峰值 230 nm。有效面积 Dia.18 mm。门控 Without。最短门时间写成 - ns，和多碱无门控那几只相同，不是 Cs-Te 无门控那几只的 --。量子效率 32 %。极限分辨率 40 Lp/mm。工作环境温度 -20 to +40 ℃。typeNameSort 写成 V13716U-N130。手册标 2.1 MB。",
        "手册高灵敏度 Cs-Te 表把 V13716U-N130 放在 1 级 MCP，门控 Without。光谱响应 160 to 320 nm。峰值辐射灵敏度波长 230 nm，峰值量子效率波长 220 nm。辐射灵敏度最小 48 mA/W、典型 59 mA/W。量子效率最小 26 %、典型 32 %。中心极限分辨率最小 28 Lp/mm、典型 40 Lp/mm。索引只印 32 % 和 40 Lp/mm。同一张表的 V13716U-N230 是 2 级 MCP，中心极限分辨率典型 28 Lp/mm。封面还写后缀 -N130 / -N230。V13716U-N230 不在索引上，产品页返回 404，没有加入。",
      ]),
    ],
  },
];
