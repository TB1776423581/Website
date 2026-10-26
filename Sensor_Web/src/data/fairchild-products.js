const page = (name, date, url, points, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
});

const scientific = "https://fairchildimaging.com/scientific-imaging";
const space = "https://fairchildimaging.com/space-imaging";
const lowLight = "https://fairchildimaging.com/low-light-imaging";
const video = "https://fairchildimaging.com/professional-video";
const xray = "https://fairchildimaging.com/xray-imaging";
const f40Page = "https://fairchildimaging.com/f40";
const f3dJuly =
  "https://fairchildimaging.com/hubfs/Product%20Briefs/MAN%200242_F3D_Rev%20A.pdf";

export const fairchildProducts = [
  {
    id: "hwk4123",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "HWK4123：Fairchild 低噪声 sCMOS",
    summary:
      "科学成像、空间成像、低照度和机器视觉页的规格表都写 HWK4123 为 9.4MP、4/3 英寸、有效阵列 4100 x 2300、像元 4.6 µm x 4.6 µm。读出噪声写 0.25e- RMS @ 5 fps 和 0.50e- RMS @ 120 fps，动态范围 89 dB，峰值量子效率 90%。产品页没有写发布日期。白皮书文件名写 Aug 2025，正文写 9.5Mpixel，阵列写成 2308 x 4108。滨松 2026-07-10 的发布稿把这一只写成 10.5MP。",
    applications: ["scientific", "machine"],
    technologies: ["lowlight", "global", "hdr"],
    models: [
      page("HWK4123", "", scientific, [
        "产品页没有写发布日期。科学成像页规格表写分辨率 9.4MP，光学格式 4/3”，有效阵列 4100 x 2300，最高帧率 120 fps @ full frame rate，以及 1000 fps @ 276 rows (ROI)。ADC 写成 12 bits @ ≤60 fps 和 11 bits @ 120 fps。像元 4.6 µm x 4.6 µm。快门写成 Rolling w/ global reset; Global。读出噪声 0.25e- RMS @ 5 fps 和 0.50e- RMS @ 120 fps。动态范围 89 dB。峰值量子效率 90%。表末链着 Product Brief 和 HWK4123 white paper。",
        "空间成像页同一行分辨率、光学格式和有效阵列相同。ADC 写成 12 bits @ ≤ 60 fps，≤ 后面有空格。快门写成 Rolling w/ global reset; Global。读出噪声的两档与科学成像页相同。这一页的产品简报链接旁还写 CIS2521 Rediation Test Report，Rediation 少了一个 d，点名的是 CIS2521，不是 HWK4123。页首写 Technology Readiness Level 9，并写 sCMOS 和 Charged Coupled Device，Charge 和 Coupled 之间没有连字符。特性写读出噪声可以到 0.25e-，满阱可以到 40,000e-。满阱这句写在空间成像页的传感器家族说明里，没有单独点名 HWK4123。",
        "低照度页快门写成 Rolling w/global reset; Global，w/ 和 global 之间没有空格。帧率两档与科学成像页相同，中间有空格。页首写定制背照工艺可以做 <0.001 Lux（overcast starlight）成像，并写可见光和近红外。这一句写在整页说明里，规格表同时列出 HWK4123、HWK1411 和 HWK1910。",
        "机器视觉页读出噪声写成 0.25e- RMS @ 5 fps 和 0.50e- RMS @120 fps，第二档 @ 和 120 之间没有空格。页首写 global shutter、极低读出噪声，以及 4k 下 16 bits of resolution。",
        "sCMOS 总页写 sCMOS 3.1 组合的读出噪声可以到 0.25e- RMS，量子效率超过 90%，并写滚动快门和全局快门都能做高速。科学成像页写 Fairchild Imaging 的 sCMOS 3.1 传感器把读出噪声做到可以数光子，并写 these sensors have supported Nobel Prize winning research。这句写在整页说明里，没有单独点名 HWK4123。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 HWK4123 is a groundbreaking, ultra-low noise / ultra-low light imaging sensor，应用写 science, space, night vision, industrial, and other markets。",
        "白皮书链接的文件名是 HWK4123 White Paper_Aug 2025.pdf，正文没有印出版日期，记为约 2025 年 8 月。标题写 0.3e- Read Noise @30fps 9.5Mpixel。正文写 HWK4123 9.5Mpixel CMOS image sensor（2308 x 4108）。表 1 写 120fps、25C、0.40e-，30fps、25C、0.31e-，30fps、-12C、0.28e-，5fps、-12C、0.23e-。正文又写室温噪声降到 0.30e- at 30fps 和 0.40e- at 120fps。原先线性满阱 7,000e-，提高到 7,500e-。工艺写 65nm backside (BSI)。峰值量子效率从最初报告的 87% 测到 > 90%，图注写 peak 90.1% @480nm。新的 12-bit ADC 滚动快门最高 76fps。全局快门 50fps，读出噪声 2.6e-，快门效率 99.9%，满阱降到 4.7Ke-。转换增益大约 165uV/e-。列放大器高增益最高 32x，低增益 1x。双增益 11-bit 最高 120fps，固定增益 12-bit 最高 76fps。地址印成 1841 Zanker Road, Suite 50, San Jose, CA 95112。",
        "滨松 2026-07-10 的发布稿把例子写成 HWK4123 for space imaging，并写 Exceptional fidelity in 4K, 4/3\", 10.5MP, BSI, sCMOS 3.1 technology。同一篇写低噪声 0.25 e⁻ RMS，以及 proprietary dual-gain architecture 带来的高动态范围。10.5MP 对不上 Fairchild 规格表的 9.4MP，也对不上白皮书的 9.5Mpixel。",
      ]),
    ],
  },
  {
    id: "ltn4323",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "LTN4323：Fairchild 4K sCMOS",
    summary:
      "科学成像、空间成像和机器视觉页都写 LTN4323 为 10.5MP、4/3 英寸、有效阵列 4432 x 2368、像元 4.6 µm x 4.6 µm。读出噪声写 0.5e- RMS @ 5 fps 和 0.9e- RMS @ 120 fps，动态范围 92 dB，峰值量子效率 91%。产品页没有写发布日期。产品简报写它采用 sCMOS 3.1。",
    applications: ["scientific", "machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("LTN4323", "", scientific, [
        "产品页没有写发布日期。科学成像页规格表写分辨率 10.5MP，光学格式 4/3”，有效阵列 4432 x 2368。最高帧率 120 fps @ full frame rate，以及 1000 fps @ 290 rows。ADC 写成 12 bits @ ≤60 fps 和 11 bits @ 120 fps。像元 4.6 µm x 4.6 µm。快门写成 Rolling w/ global reset; Global。读出噪声 0.5e- RMS @ 5 fps 和 0.9 e- RMS @ 120 fps，0.9 和 e- 之间有空格。动态范围 92 dB。峰值量子效率 91%。",
        "空间成像页读出噪声第二档写成 0.9e- RMS @ 120 fps，0.9 和 e- 之间没有空格。ADC 的 ≤ 后面有空格。其余分辨率、阵列、帧率、动态范围和量子效率与科学成像页相同。",
        "机器视觉页读出噪声写成 0.5e- RMS @ 5 fps 和 0.9e- RMS @120 fps，第二档 @ 和 120 之间没有空格。",
        "专业视频页没有列 LTN4323。同一页的 MST4323 用了同一组 10.5MP、4432 x 2368、4.6 µm、92 dB 和 91%。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The LTN4323 image sensor has unparalleled versatility in 4K imaging, incorporating sCMOS 3.1 technology，应用写 science, space, industrial, high contrast, hyperspectral, medical, among others。",
      ]),
    ],
  },
  {
    id: "ltn4625",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "LTN4625：Fairchild APS-C sCMOS",
    summary:
      "空间成像和机器视觉页写 LTN4625 为 12MP、APS-C、有效阵列 4608 (H) x 2592 (V)、像元 5.5 µm x 5.5 µm。滚动快门加全局复位的最高帧率写 240 fps，全局快门写 120 fps。产品页没有写发布日期。产品简报写 240 frames per second at 12MP resolution。",
    applications: ["scientific", "machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("LTN4625", "", space, [
        "产品页没有写发布日期。空间成像页规格表写分辨率 12MP，光学格式 APS-C，有效阵列 4608 (H) x 2592 (V)。最高帧率写成 240 fps at 12MP (RS/GR) 和 120 fps at 12MP (GS)。ADC 写成 22 bits (2 x 11-bit)。像元 5.5 µm x 5.5 µm。快门写成 Rolling Shutter (RS), Global Reset (GR), Global Shutter (GS)。读出噪声写成 <1.5 e- RMS @ 240 fps (RS/GR) 和 <5 e- RMS @ 120 fps (GS)。动态范围写成 >88 dB Single Frame (RS/GR) 和 >77 dB Single Frame (GS)。峰值量子效率 >60%。",
        "机器视觉页帧率改用 @，写成 240 fps @ 12MP (RS/GR) 和 120 fps @ 12MP (GS)。读出噪声写成 <1.5e- RMS @ 240 fps (RS/GR) 和 <5e- RMS @ 120 fps (GS)，数字和 e- 之间没有空格。",
        "专业视频页的 MST4625 用了同一组 12MP 和 4608 (H) x 2592 (V)。这一页写着 MST4625 image sensor product brief，链接却指向 /ltn4625-product-brief。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The LTN4625 is a lightning-fast sCMOS image sensor in an APS-C optical format ideal for scientific applications, supporting 240 frames per second at 12MP resolution。",
      ]),
    ],
  },
  {
    id: "cis2521",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "CIS2521：Fairchild 5.5MP sCMOS",
    summary:
      "科学成像、空间成像和专业视频页都写 CIS2521 为 5.5 MP、4/3 英寸、有效阵列 2560 (H) x 2160 (V)、像元 6.5 µm x 6.5 µm。帧率写 100 fps (RS) 和 50 fps (GS)。动态范围写 >83.5 dB，峰值量子效率写 >60%。产品页没有写发布日期。滨松 2026-07-10 的发布稿写 TRL-9 和 5.5MP。",
    applications: ["scientific", "machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("CIS2521", "", scientific, [
        "产品页没有写发布日期。科学成像页规格表写分辨率 5.5 MP，MP 前有空格，光学格式 4/3”，有效阵列 2560 (H) x 2160 (V)。最高帧率 100 fps (RS), 50 fps (GS)。ADC 写成 22 bits (2 x 11-bit)。像元 6.5 µm x 6.5 µm。快门写成 Rolling Shutter and Global Shutter。读出噪声写成 <2 e- RMS (RS) 和 <5 e- RMS (GS)。动态范围 >83.5 dB。峰值量子效率 >60%。",
        "空间成像页这一行与科学成像页同一组数字。产品简报链接旁写 CIS2521 Rediation Test Report，Rediation 少了一个 d。页首写 Technology Readiness Level 9，特性里的像素范围写成 5.5 MP - 12 MP，没有单独把 TRL-9 只安在 CIS2521 上。",
        "专业视频页快门写成 Rolling Shutter (RS) and Global Shutter (GS)。读出噪声写成 <2e- RMS (RS) 和 <5e- RMS (GS)，数字和 e- 之间没有空格。分辨率仍写作 5.5 MP。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The CIS2521 is a large format, ultra low-noise CMOS image sensor intended for applications requiring high-quality imaging under low-light conditions。large 和 format 之间没有连字符。",
        "滨松 2026-07-10 的发布稿把例子写成 CIS2521 for space imaging，并写 TRL-9 workhorse 5.5MP sCMOS sensor for high reliability space-qualified imaging。5.5MP 中间没有空格。",
      ]),
    ],
  },
  {
    id: "cis2020",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "CIS2020：Fairchild 4.2MP sCMOS",
    summary:
      "科学成像页写 CIS2020 为 4.2MP、4/3 英寸、有效阵列 2048 (H) x 2048 (V)、像元 6.5 µm x 6.5 µm。最高帧率 100 fps。快门一格印成 Rolling Shuter。读出噪声 1e- RMS，动态范围 >90 dB，峰值量子效率 >70%。产品页没有写发布日期。产品简报页的正文却写着 CIS1910。",
    applications: ["scientific"],
    technologies: ["lowlight"],
    models: [
      page("CIS2020", "", scientific, [
        "产品页没有写发布日期。科学成像页规格表写分辨率 4.2MP，光学格式 4/3”，有效阵列 2048 (H) x 2048 (V)，最高帧率 100 fps。ADC 写成 22 bits (2 x 11-bit)。像元 6.5 µm x 6.5 µm。快门印成 Rolling Shuter，Shutter 少了一个 t。读出噪声 1e- RMS。动态范围 >90 dB。峰值量子效率 >70%。这一行没有写全局快门。",
        "空间成像、低照度、机器视觉和专业视频页的规格表都没有列 CIS2020。",
        "产品简报页标题写 CIS2020 Product Brief。要邮箱才能打开 PDF。公开正文写的是 The CIS1910 is a large format, ultra low-noise CMOS image sensor intended for applicaitons requiring high quality imaging under extremely low-light conditions。型号写成 CIS1910，applicaitons 少了一个 c。",
      ]),
    ],
  },
  {
    id: "cis1910",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "CIS1910：Fairchild 2.1MP sCMOS",
    summary:
      "科学成像和专业视频页写 CIS1910 为 2.1MP、1 英寸、有效阵列 1920 (H) x 1080 (V)、像元 6.5 µm x 6.5 µm。两页都写滚动快门和全局快门。科学成像页的最高帧率写成 100 fps (RS), 50 fps (GS)，动态范围 >88 dB，峰值量子效率 >50%。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("CIS1910", "", scientific, [
        "产品页没有写发布日期。科学成像页规格表写分辨率 2.1MP，光学格式 1”，有效阵列 1920 (H) x 1080 (V)。最高帧率 100 fps (RS), 50 fps (GS)。ADC 写成 22 bits (2 x 11-bit)。像元 6.5 µm x 6.5 µm。快门写成 Rolling Shutter and Global Shutter。读出噪声写成 <1.2 e- RMS (RS) 和 <4 e- RMS (GS)。动态范围 >88 dB。峰值量子效率 >50%。",
        "专业视频页分辨率、光学格式、阵列、帧率、ADC、像元、动态范围和量子效率与科学成像页相同。快门写成 Rolling Shutter (RS) and Global Shutter (GS)。读出噪声写成 <1.2e- RMS (RS)|<4e- RMS (GS)，数字和 e- 之间没有空格，两档之间是一根竖线。页首写这些传感器面向 pro-video and cinema systems, machine vision, and industrial applications。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The CIS1910 is a large-format, ultra low-noise sensor intended for applications requiring high-quality imaging under extremely low-light conditions。large-format 有连字符。CIS2020 简报页的正文也写成 CIS1910，并把 applications 印成 applicaitons。",
      ]),
    ],
  },
  {
    id: "hwk1411",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "HWK1411：Fairchild 1 英寸 sCMOS",
    summary:
      "低照度页写 HWK1411 为 1.6MP、1 英寸、有效阵列 1440 x 1100、像元 8.0 µm x 8.0 µm。最高帧率 120 fps。快门只写 Rolling Shutter。读出噪声 0.5e- RMS @ 120 fps，动态范围 82 dB，峰值量子效率 80%。产品页没有写发布日期。产品简报写 sCMOS 3.0 BSI。",
    applications: [],
    technologies: ["lowlight"],
    models: [
      page("HWK1411", "", lowLight, [
        "产品页没有写发布日期。低照度页规格表写分辨率 1.6MP，光学格式 1”，有效阵列 1440 x 1100，最高帧率 120 fps。ADC 写成 11 bits。像元 8.0 µm x 8.0 µm。快门只写 Rolling Shutter。读出噪声 0.5e- RMS @ 120 fps。动态范围 82 dB。峰值量子效率 80%。",
        "页首写定制背照工艺可以做 <0.001 Lux（overcast starlight）成像。这句写在整页说明里，规格表同时列出 HWK4123、HWK1411 和 HWK1910。科学成像、空间成像、机器视觉和专业视频页都没有列 HWK1411。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The HWK1411 ultra low-light sCMOS 3.0 BSI sensor defines the next horizon in professional imaging。",
      ]),
    ],
  },
  {
    id: "hwk1910",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "HWK1910：Fairchild 2/3 英寸 sCMOS",
    summary:
      "低照度页写 HWK1910 为 2.1 MP、2/3 英寸、有效阵列 1920 (H) x 1080 (V)、像元 5.04 µm x 5.04 µm。帧率写 60 fps (WDR) 和 30 fps (UDR)。快门只写 Rolling Shutter。动态范围写 >87dB (WDR) 和 >120 dB (UDR)，峰值量子效率 61%。产品页没有写发布日期。产品简报写 sCMOS 2.0。",
    applications: [],
    technologies: ["lowlight", "hdr"],
    models: [
      page("HWK1910", "", lowLight, [
        "产品页没有写发布日期。低照度页规格表写分辨率 2.1 MP，MP 前有空格，光学格式 2/3\"，有效阵列 1920 (H) x 1080 (V)。最高帧率 60 fps (WDR), 30 fps (UDR)。ADC 写成 16 bits (WDR) 和 16 bits companded (UDR)。像元 5.04 µm x 5.04 µm。快门只写 Rolling Shutter。读出噪声写成 1e- RMS @ 60 fps 和 0.7 e-RMS at lower frame rate，0.7 那一档 e 和 RMS 之间没有空格。动态范围写成 >87dB (WDR) 和 >120 dB (UDR)，87 和 dB 之间没有空格。峰值量子效率 61%。",
        "页首写定制背照工艺可以做 <0.001 Lux（overcast starlight）成像。这句写在整页说明里。科学成像、空间成像、机器视觉和专业视频页都没有列 HWK1910。",
        "产品简报页要邮箱才能打开 PDF。公开的那句写 The HWK1910 image sensor is a high definition format, ultra low-noise image sensor with sCMOS 2.0 technology。",
      ]),
    ],
  },
  {
    id: "mst4323",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "MST4323：Fairchild 专业视频 sCMOS",
    summary:
      "专业视频页写 MST4323 为 10.5MP、4/3 英寸、有效阵列 4432 x 2368、像元 4.6 µm x 4.6 µm。读出噪声写 0.5e- RMS @ 5 fps 和 0.9 e- RMS @ 120 fps，动态范围 92 dB，峰值量子效率 91%。这一行没有产品简报链接。产品页没有写发布日期。",
    applications: ["machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("MST4323", "", video, [
        "产品页没有写发布日期。专业视频页规格表写分辨率 10.5MP，光学格式 4/3”，有效阵列 4432 x 2368。最高帧率 120 fps @ full frame，以及 1000 fps @ 290 rows。ADC 写成 12 bits @ ≤60 fps 和 11 bits @ 120 fps。像元 4.6 µm x 4.6 µm。快门写成 Rolling w/ global reset; global，global 是小写。读出噪声 0.5e- RMS @ 5 fps 和 0.9 e- RMS @ 120 fps。动态范围 92 dB。峰值量子效率 91%。表末这一列是空的，没有 Product Brief 链接。",
        "页首写 family of high-definition color imaging sensors，并写面向 pro-video and cinema systems, machine vision, and industrial applications。科学成像页没有列 MST4323。LTN4323 在科学成像页用了同一组 10.5MP、4432 x 2368、92 dB 和 91%。",
      ]),
    ],
  },
  {
    id: "mst4625",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "MST4625：Fairchild 专业视频 12MP sCMOS",
    summary:
      "专业视频页写 MST4625 为 12MP、APS-C、有效阵列 4608 (H) x 2592 (V)、像元 5.5 µm x 5.5 µm。帧率写 240 fps @ 12MP (RS/GR) 和 120 fps @ 12MP (GS)。动态范围写 >88 dB 和 >77 dB 两档，峰值量子效率 >60%。产品页没有写发布日期。页上的 MST4625 简报链接指向 LTN4625 的简报页。",
    applications: ["machine"],
    technologies: ["lowlight", "global"],
    models: [
      page("MST4625", "", video, [
        "产品页没有写发布日期。专业视频页规格表写分辨率 12MP，光学格式 APS-C，有效阵列 4608 (H) x 2592 (V)。最高帧率 240 fps @ 12MP (RS/GR) 和 120 fps @ 12MP (GS)。ADC 写成 22 bits (2 x 11-bit)。像元 5.5 µm x 5.5 µm。快门写成 Rolling Shutter (RS), Global Reset (GR), Global Shutter (GS)。读出噪声写成 <1.5e- RMS at 240 fps (RS/GR) 和 <5e- RMS at 120 fps (GS)。动态范围写成 >88 dB Single Frame (RS/GR) 和 >77 dB Single Frame (GS)。峰值量子效率 >60%。",
        "页首的链接文字写 MST4625 image sensor product brief，href 是 /ltn4625-product-brief。规格表这一列的 Product Brief 也指向同一条 LTN4625 链接。LTN4625 简报页公开的那句写的是 LTN4625，不是 MST4625。",
        "空间成像和机器视觉页没有列 MST4625。LTN4625 在那两页用了同一组 12MP 和 4608 (H) x 2592 (V)。",
      ]),
    ],
  },
  {
    id: "f40",
    date: "2026-04",
    companyId: "fairchild",
    category: "product",
    title: "F40：Fairchild X 射线探测器",
    summary:
      "F40 产品页和 X 射线页都写 10.2MP，感光区 72 mm x 53 mm，像元 19.5 µm x 19.5 µm，最高帧率 6.4 fps max raw capture，闪烁体 FOP with Csl，接口 USB 3.0。产品页正文又写 At 10 fps。简报页脚印 APRIL 2026，有效像素写成 3700 x 2736 pixels，动态范围 70 dB。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: ["hdr"],
    models: [
      page("F40", "2026-04", f40Page, [
        "产品页没有写发布日期。标题写 F40 X-Ray Detector，并写 Next Generation X-Ray Detector, High Resolution, High Speed, Detachable USB3C。正文写 19.5µm pixel、high dynamic range，以及 patented low-noise technology。同一段写 At 10 fps, a series of images can quickly be acquired for tomosynthesis，又写 classic 1 frame per second mode。",
        "产品页规格表写分辨率 10.2MP，感光区 72 mm x 53 mm，最高帧率 6.4 fps max raw capture。闪烁体 FOP with Csl，Csl 的 l 是小写。数据接口 USB 3.0, Type C。操作系统 Windows / Mac / Linux。触发写成 Auto-detect / Software programmable。防水 IPX8。像元 19.5 µm x 19.5 µm。快门 Rolling / Global Reset。增益一行的表头写 Gain modes，内容 LG: 1x | HG: 20x。校正文件 Onboard。",
        "X 射线页同一行分辨率、感光区和 6.4 fps 与产品页相同。数据接口写成 USB 3.0 Type C，没有逗号。触发写成 Auto detect 和 Software programmable，detect 后面没有连字符。增益表头写成 Programmable Gain。操作系统仍是 Windows / Mac / Linux。",
        "简报标题写 High Resolution, Wide Dynamic Range，以及 Compact Form Factor, USB 3.0。有效像素写成 3700 x 2736 pixels，感光区 72 mm x 53 mm，总分辨率仍写 10.2 MP。帧率 6.4 fps max raw capture。数字输出 16 bits。闪烁体仍写 FOP with Csl。协议写成 USB 3.0, Type-C。校正写 Onboard correction files。触发分两行写 Auto-detect 和 Software programmable。增益 LG: 1x | HG: 20x。积分时间 25 ms to 2.5 s。高增益像素线性度 99% in HG。可见分辨率 25.6 lp/mm。特性栏另写 70 dB dynamic range，以及曝光范围 up to 135 kV。重量 135 grams。电源 3 amps。工作温度印成 -5OC to 55OC。USB 线写 Detachable, Field Replaceable。防水 IPX8。地址印成 1841 Zanker Rd., Ste. 50，San Jose, CA 95112。页脚印 APRIL 2026，并写 ©2026 Fairchild Imaging，记为约 2026 年 4 月。",
        "滨松 2026-07-10 的发布稿把例子写成 F40 detector for X-ray imaging，并写 High resolution, wide dynamic range, compact form factor, USB 3.0。发布稿没有写 10.2MP，也没有写 6.4 fps。",
      ]),
    ],
  },
  {
    id: "f3d",
    date: "2025-07",
    companyId: "fairchild",
    category: "product",
    title: "F3D：Fairchild 口内 X 射线传感器",
    summary:
      "F40 页和 X 射线页的规格表写 F3D 为 2.4MP，感光区 36 mm x 25 mm，帧率 10 fps，闪烁体 Tunable FOP with Csl，接口 USB 2.0。2025 年 7 月的简报把有效像素写成 1842 x 1306 pixels，正文却把感光区写成 36mm x 26mm。2025 年 2 月的简报把有效像素写成 1306 X 1842 pixels，并写动态范围 >90dB。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: ["hdr"],
    models: [
      page("F3D", "2025-07", f3dJuly, [
        "产品页没有单独的 F3D 标题页。F40 页规格表把这一列写成分辨率 2.4MP，感光区 36 mm x 25 mm，帧率 10 fps，闪烁体 Tunable FOP with Csl。接口 USB 2.0。操作系统 Windows / Mac。触发格里是 Auto-detect 和 Software programmable。防水 IPX8。像元 19.5 µm x 19.5 µm。快门 Rolling Reset / Global Reset。增益表头 Gain modes，内容 LG: 1x | HG: 10x。校正文件 Online。",
        "X 射线页分辨率、感光区、10 fps、闪烁体和 USB 2.0 与 F40 页相同。操作系统也是 Windows / Mac。触发写成 Auto detect 和 Software programmable。增益表头是 Programmable Gain。校正文件仍是 Online。F20、F15、F10 在这一页的操作系统写成 Windows / Mac，F40 页却把那三列写成 Windows / Mac / Linux。",
        "简报 MAN 0242 Rev A 的页脚印 JULY 2025，并写 ©2025 Fairchild Imaging，记为约 2025 年 7 月。标题写 High Speed Intraoral Sensor，以及 Low Dose X-Ray Exposure, Anatomical Design, Wide Dynamic Range, Low Noise。正文写 10 FPS for intraoral tomography，分辨率 2.4 MP，像元 19.5 µm，16-bits of grey-scale data。像素写成 multi-transitor pixel。高速印成 hig-speed。正文把感光区写成 36mm x 26mm。规格表写 36 mm x 25 mm，有效像素 1842 x 1306 pixels，帧率 10 fps，数字输出 16 bits，协议 USB 2.0，图像处理 Onboard image storage。闪烁体 Tunable FOP with Csl。快门 Rolling, Global Reset。增益 LG: 1x | HG: 10x。线性度 99% in HG。LP/MM 写 25.6 lp/mm。特性栏写 Onboard storage for 30 images。操作系统 Windows, Mac。USB 线 Factory replaceable。防水 IPX8。",
        "F40 页链出的另一份简报页脚印 February 2025。标题写 Next Generation X-Ray Detector，以及 Detachable USB-C 3.0 Cable。正文把 applications 印成 applicaitons，并写 19.5µm pixel。帧率写 At 10 frames per second，又写 classic 1 frame per second mode。特性写 >20lp/mm in real images、>90dB dynamic range，以及 1 - 10 frames per second。应用栏写 Human medical imaging、VeterInary imaging、Biopsy inspection、Mechanical Inspection 和 Non-destructive testing，Veterinary 的 I 是大写。规格表感光区 36 mm x 25 mm，有效像素写成 1306 X 1842 pixels，X 是大写。帧率 1 fps - 10 fps。读出时间 39ms。图像送出 0.1s。ADC 16 bits。协议 USB 2.0。接口又写 USB 2.0 w/ Type-A plug。操作系统 Windows, macOS。壳尺寸 8 H x 31W x 42 L。峰值电源 350 mA，空闲 110 mA。工作温度印成 -5OC to 40OC。线性度 >99%。闪烁体仍是 Tunable FOP with Csl。快门 Rolling, global reset。增益 LG: 1x | HG: 10x。图像处理写成 DDR3 onboard image storage。",
        "滨松 2026-07-10 的发布稿把例子写成 F3D detector for medical imaging，并写 High resolution, high speed, low dose。发布稿没有写 2.4MP。",
      ], "打开产品简报"),
    ],
  },
  {
    id: "f20",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "F20：Fairchild X 射线传感器",
    summary:
      "F40 页和 X 射线页的规格表写 F20 为 2.4MP，感光区 36 x 26，帧率 1 fps，像元 19.5 µm x 19.5 µm，闪烁体 CsI + FOP (customizable)，接口 USB 2.0。两页都没有给 F20 单独的产品简报链接。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: [],
    models: [
      page("F20", "", xray, [
        "产品页没有写发布日期，也没有单独的 F20 标题页。X 射线页规格表写分辨率 2.4MP，感光区 36 x 26，最高帧率 1 fps。闪烁体 CsI + FOP (customizable)。接口 USB 2.0。操作系统 Windows / Mac。防水 IPX8。触发 Auto Detect。像元 19.5 µm x 19.5 µm。快门 Global Reset。增益表头 Programmable Gain，内容 High / Low。校正文件 Onboard。这一列没有 Product Brief 链接。",
        "F40 页同一行分辨率、感光区、1 fps、闪烁体、USB 2.0、像元、Global Reset、High / Low 和 Onboard 与 X 射线页相同。操作系统写成 Windows / Mac / Linux。触发行写成 Hardware Trigger。增益表头写成 Gain modes。",
        "X 射线页把这组产品放在 Medical and Inspection 下面。组合说明写 Industrial and NDT x-ray inspection、Intraoral x-ray diagnostics、Extraoral TDI linescan x-ray diagnostics、Mammographic TDI linescan x-ray diagnostics 和 Biopsy x-ray inspection。这些句子没有单独点名 F20。",
      ]),
    ],
  },
  {
    id: "f15",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "F15：Fairchild X 射线传感器",
    summary:
      "F40 页和 X 射线页的规格表写 F15 为 2.2MP，感光区 33 x 26，帧率 1 fps，像元 19.5 µm x 19.5 µm，闪烁体 CsI + FOP (customizable)，接口 USB 2.0。两页都没有给 F15 单独的产品简报链接。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: [],
    models: [
      page("F15", "", xray, [
        "产品页没有写发布日期，也没有单独的 F15 标题页。X 射线页规格表写分辨率 2.2MP，感光区 33 x 26，最高帧率 1 fps。闪烁体 CsI + FOP (customizable)。接口 USB 2.0。操作系统 Windows / Mac。防水 IPX8。触发 Auto Detect。像元 19.5 µm x 19.5 µm。快门 Global Reset。增益 High / Low。校正文件 Onboard。这一列没有 Product Brief 链接。",
        "F40 页同一行的分辨率和感光区相同。操作系统写成 Windows / Mac / Linux。触发行写成 Hardware Trigger。增益表头写成 Gain modes，X 射线页写成 Programmable Gain。",
      ]),
    ],
  },
  {
    id: "f10",
    date: "",
    companyId: "fairchild",
    category: "product",
    title: "F10：Fairchild X 射线传感器",
    summary:
      "F40 页和 X 射线页的规格表写 F10 为 1.6MP，感光区 30 x 20，帧率 1 fps，像元 19.5 µm x 19.5 µm，闪烁体 CsI + FOP (customizable)，接口 USB 2.0。两页都没有给 F10 单独的产品简报链接。产品页没有写发布日期。",
    applications: ["scientific", "machine"],
    technologies: [],
    models: [
      page("F10", "", xray, [
        "产品页没有写发布日期，也没有单独的 F10 标题页。X 射线页规格表写分辨率 1.6MP，感光区 30 x 20，最高帧率 1 fps。闪烁体 CsI + FOP (customizable)。接口 USB 2.0。操作系统 Windows / Mac。防水 IPX8。触发 Auto Detect。像元 19.5 µm x 19.5 µm。快门 Global Reset。增益 High / Low。校正文件 Onboard。这一列没有 Product Brief 链接。",
        "F40 页同一行的分辨率和感光区相同。操作系统写成 Windows / Mac / Linux。触发行写成 Hardware Trigger。增益表头写成 Gain modes，X 射线页写成 Programmable Gain。",
      ]),
    ],
  },
];
