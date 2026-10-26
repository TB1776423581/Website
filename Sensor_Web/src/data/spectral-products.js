const page = (name, date, url, points, band, linkLabel = "打开产品页") => ({
  name,
  date,
  url,
  linkLabel,
  points,
  band,
});

const lynredBrief =
  "https://www.lynred.com/sites/default/files/2026-01/web_BrochureSurveillance_2026.pdf";
const hamamatsuGuide =
  "https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/ingaas_is_kmir1037e.pdf";
const hamamatsuLine = (part) =>
  `https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-linear-image-sensor/${part}.html`;
const leptonSheet = "https://flir.netx.net/file/asset/56466/original/attachment";
const bosonPage = "https://oem.flir.com/products/boson?segment=oem&vertical=lwir";

export const spectralProducts = [
  {
    id: "s11639",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11639：滨松紫外到近红外线阵",
    summary:
      "S11639-01 与 S11639-21 的光谱响应都是 200 到 1000 nm，产品页强调紫外灵敏度。S11639N-02 写明 140 到 1000 nm，并强调真空紫外。S11639-11 的产品页写带遮光像素。特性写有效像素 2004，规格表写有效像素 2048×1。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("S11639-01", "", "https://www.hamamatsu.com/eu/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639-01.html", [
        "CMOS 线阵，2048×1，像素 14×200 μm。光谱响应 200 到 1000 nm。",
        "产品页写明紫外到近红外都有高灵敏度，石英窗。最高行频 4672 行/秒。",
      ], "uv"),
      page("S11639-21", "", "https://www.hamamatsu.com/eu/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639-21.html", [
        "与 S11639-01 同为 2048×1，光谱响应 200 到 1000 nm。",
        "表面贴装陶瓷封装。产品页同样强调紫外区高灵敏度。",
      ], "uv"),
      page("S11639N-02", "", "https://www.hamamatsu.com/jp/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639N-02.html", [
        "无窗。光谱响应 140 到 1000 nm。产品页写明相对前代提高真空紫外灵敏度。",
        "2048×1，像素 14×200 μm。读出噪声 16 e⁻ rms。",
      ], "uv"),
      page("S11639-11", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11639-11.html", [
        "产品页没有写发布日期。标题写高灵敏度、纵向长像素感光区，并写带遮光像素。光谱响应 200 到 1000 nm。无制冷，窗口为石英，封装 LCP。最高行频 4672 行/秒。测量条件写典型 Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz。",
        "特性写像元 14×200 μm，有效像素 2004，两端各 10 个像素为光学黑，有效感光区长度 28.056 mm，灵敏度 1300 V/(lx·s)。规格表把有效像素写成 2048×1，图像尺寸写成 28.672×0.200 mm。",
        "手册 KMPD1174E11 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。结构表写像素数 2048、有效像素 2004、感光区长度 28.672 mm，封装为 LCP（liquid crystal polymer）。特性与产品页同写用于低成本光谱仪。应用栏在光谱仪之外还写位置检测、图像读取和编码器。",
        "手册电特性：供电电流典型 30 mA、最小 20 mA、最大 50 mA。光灵敏度典型 1300 V/(lx·s)，转换效率典型 20 µV/e-，读出噪声典型 0.4 mV rms。",
      ], "uv"),
    ],
  },
  {
    id: "s11151",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11151-2048：滨松前照式紫外 CCD",
    summary: "产品页写明前照式 CCD 在紫外区仍有高灵敏度，光谱响应 200 到 1000 nm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("S11151-2048", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11151-2048.html", [
        "2048×1，像素 14×200 μm。光谱响应 200 到 1000 nm。",
        "产品页写明 200 nm 紫外灵敏度接近背照式 CCD。典型行频 484 行/秒。",
      ], "uv"),
    ],
  },
  {
    id: "s13496",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13496：滨松高灵敏度 CMOS 线阵",
    summary:
      "S13496、S13496-11、S13496-20 与 S13496N-02 的产品页都写高灵敏度 CMOS 线阵，像元 7×200 μm。前三款光谱响应 200 到 1000 nm。S13496N-02 写 140 到 1000 nm，并写真空紫外灵敏度高于前代 S13496。产品页都没有写发布日期。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S13496", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13496.html", [
        "产品页没有写发布日期。4096 像素，像元 7×200 μm，有效感光区长度 28.672 mm。光谱响应 200 到 1000 nm。无制冷，窗口为石英，封装 LCP。最高行频 2387 行/秒。规格表图像尺寸 28.672×0.200 mm，有效像素 4096×1。",
        "特性写灵敏度 650 V/(lx?s)，问号就印在产品页上。手册 KMPD1164E09 写成 650 V/(lx·s)。视频数据率最大 10 MHz。单 5 V 供电，内置时序发生器，各像素同时积分，并写可变积分时间的电子快门。测量条件与 S11639-11 相同。",
        "手册页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。结构表封装为 LCP（liquid crystal polymer）。应用栏写位置检测、编码器、光谱仪和图像读取。正文写另有表面贴装型 S13496-20。",
        "手册：转换效率典型 20 µV/e-，供电电流典型 40 mA、最小 20 mA、最大 60 mA。暗输出电压典型 0.1 mV，饱和输出电压典型 2.0 V，读出噪声典型 0.4 mV rms。",
      ], "uv"),
      page("S13496-11", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13496-11.html", [
        "产品页没有写发布日期。标题写带遮光像素。光谱响应 200 到 1000 nm。无制冷，窗口为石英，封装 LCP。最高行频 2387 行/秒。规格表有效像素 4096×1，图像尺寸 28.672×0.200 mm。",
        "特性写有效像素 4008，两端各 20 个像素为光学黑，有效感光区长度 28.056 mm，灵敏度 650 V/(lx・s)。正文写紫外区高灵敏度、耐紫外，并写用于低成本光谱仪。",
        "手册 KMPD1189E06 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。结构表写像素数 4096、有效像素 4008、感光区长度 28.672 mm。应用栏写位置检测、图像读取、编码器和光谱仪。",
        "手册：光灵敏度典型 650 V/(lx·s)，转换效率典型 20 µV/e-，供电电流典型 40 mA。暗输出电压典型 0.1 mV，读出噪声典型 0.4 mV rms。",
      ], "uv"),
      page("S13496-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13496-20.html", [
        "产品页没有写发布日期。标题写表面贴装。4096 像素，像元 7×200 μm，有效感光区长度 28.672 mm。光谱响应 200 到 1000 nm。无制冷，窗口为石英。规格表封装写成 Ceramic，最高行频 2387 行/秒。",
        "特性写灵敏度 650 V/(lx・s)，并写表面贴装。手册 KMPD1201E06 页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。结构表封装为 Ceramic。注记写可按要求提供无窗型 S13496N-20。正文写另有 DIP 型 S13496。",
        "手册应用栏写位置检测、图像读取、编码器和光谱仪。转换效率典型 25 µV/e-，符号写成 CE。光灵敏度符号写成 Sw，典型 650 V/(lx·s)。供电电流典型 40 mA。",
      ], "uv"),
      page("S13496N-02", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13496N-02.html", [
        "产品页没有写发布日期。标题写真空紫外区高灵敏度。4096 像素，像元 7×200 μm，有效感光区长度 28.672 mm。光谱响应 140 到 1000 nm。规格表类型写 High sensitivity type (vacuum UV)，窗口材料写 None，封装 LCP，无制冷，最高行频 2387 行/秒。",
        "特性写灵敏度 650 V/(lx・s)，低噪声 20 e- rms。正文写真空紫外灵敏度高于前代 S13496。",
        "手册 KMPD1258E02 页脚写 Dec 2024，并写资料截至 December 2024，记为约 2024 年 12 月。窗口注记拼成 Tempopary window，并写交货时用胶带固定玻璃，以保护感光区和引线。应用栏只写 Spectrometers。",
        "手册电特性里的读出噪声典型 0.4 mV rms，转换效率典型 20 µV/e-，供电电流典型 40 mA。特性栏的低噪声仍写 20 e- rms。",
      ], "uv"),
    ],
  },
  {
    id: "s16514",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16514-2048-11：滨松近红外高灵敏度 CMOS 线阵",
    summary:
      "产品页写近红外灵敏度高、光谱响应平滑。光谱响应 400 到 1050 nm。正文写 830 nm 的灵敏度接近前代 S11639-11 的两倍。产品页没有写发布日期。手册 KMPD1254E04 页脚写 Jan. 2026，并写资料截至 January 2026，记为约 2026 年 1 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S16514-2048-11", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S16514-2048-11.html", [
        "产品页没有写发布日期。像元 14×200 μm。特性写有效像素 2004，两端各 10 个像素为光学黑，有效感光区长度 28.056 mm，灵敏度 1800 V/(lx·s)。规格表有效像素 2004×1，图像尺寸 28.672×0.200 mm。光谱响应 400 到 1050 nm。无制冷，窗口为带增透膜的硼硅玻璃，封装 LCP。最高行频 4672 行/秒。",
        "视频数据率最大 10 MHz。单 5 V 供电，各像素同时积分，并写可变积分时间的电子快门。正文写用于低成本光谱仪。测量条件写典型 Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz。",
        "约 2026 年 6 月的 CCD/CMOS 选型指南 KMPD0002E35 在像素数一栏写成 2048，行频 4672 行/秒。手册结构表写像素数 2048、有效像素 2004、感光区长度 28.672 mm。窗口注记写 400 nm 到 1050 nm 的平均反射率不大于 1%，并写可按要求提供无窗型 S16514-2048N-11。",
        "手册应用栏写拉曼光谱仪、位置检测、图像读取，以及 SD-OCT（spectral domain-optical coherence tomography）。转换效率典型 20 µV/e-，供电电流典型 30 mA、最小 20 mA、最大 50 mA。暗输出电压典型 0.5 mV，读出噪声典型 0.4 mV rms。",
      ], "nir"),
    ],
  },
  {
    id: "s16596",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16596-4096-11：滨松近红外高灵敏度 CMOS 线阵",
    summary:
      "产品页写近红外灵敏度高、光谱响应平滑。光谱响应 400 到 1050 nm。正文写 830 nm 的灵敏度接近前代 S13496-11 的两倍。产品页没有写发布日期。手册 KMPD1255E04 页脚写 Jan. 2026，并写资料截至 January 2026，记为约 2026 年 1 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S16596-4096-11", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S16596-4096-11.html", [
        "产品页没有写发布日期。像元 7×200 μm。特性写有效像素 4008，两端各 20 个像素为光学黑，有效感光区长度 28.056 mm，灵敏度 900 V/(lx・s)。规格表有效像素 4008×1，图像尺寸 28.672×0.200 mm。光谱响应 400 到 1050 nm。无制冷，窗口为带增透膜的硼硅玻璃，封装 LCP。最高行频 2387 行/秒。",
        "视频数据率最大 10 MHz。单 5 V 供电，各像素同时积分，并写可变积分时间的电子快门。正文写用于低成本光谱仪。测量条件与 S16514-2048-11 的产品页相同。",
        "约 2026 年 6 月的选型指南在像素数一栏写成 4096，行频 2387 行/秒。手册结构表写像素数 4096、有效像素 4008、感光区长度 28.672 mm。窗口注记写平均反射率 1 % or less，范围 400 nm 到 1050 nm，并写可按要求提供无窗型 S16596-4096N-11。",
        "手册应用栏写拉曼光谱仪、位置检测、图像读取，以及 SD-OCT（spectral domain-optical coherence tomography）。光灵敏度写成 900 V/(lx·s)，转换效率典型 20 µV/e-，供电电流典型 40 mA。暗输出电压典型 0.25 mV，读出噪声典型 0.4 mV rms。",
      ], "nir"),
    ],
  },
  {
    id: "s13014",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13014：滨松高灵敏度 CMOS 线阵",
    summary:
      "S13014 与 S13014-10 的产品页都写高灵敏度 CMOS 线阵，像元 14 × 200 μm，512 像素，光谱响应 200 到 1000 nm。S13014 的正文写紫外区耐受高。S13014-10 的正文写表面贴装，并写紫外区灵敏度高、耐久性高。产品页没有写发布日期。手册 KMPD1170E08 把两款印在同一份资料上，页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S13014", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13014.html", [
          "产品页没有写发布日期。正文用单数 is，写纵向长像素感光区 14 × 200 µm，并写紫外区耐受高。单 5 V 供电，适合低成本光谱仪。特性写 512 像素，有效感光区长度 7.168 mm，灵敏度 1300 V/(lx・s)，紫外到近红外高灵敏度，括注光谱响应 200 到 1000 nm。各像素同时积分，并写可变积分时间的电子快门。视频数据率最大 10 MHz。",
          "规格表类型为 High sensitivity type。图像尺寸 7.168 x 0.200 mm，有效像素 512 x 1，像元 14 x 200 μm。最高行频 16556 行/秒。无制冷，窗口为石英，封装陶瓷。测量条件写典型 Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz。",
          "手册正文改成 The S13014 and S13014-10 are，并写紫外区灵敏度高、耐久性高。特性把灵敏度写成 1300 V/(lx·s)，另写两种封装：DIP type 为 S13014，表面贴装为 S13014-10。结构表两款封装都写成 Ceramic，窗口都是 Quartz。应用栏写光谱仪、位置检测、图像读取和编码器。",
          "手册时钟频率最低 200 kHz、典型写成 5M、最高 10 MHz，数据率等于 f(CLK)。供电电流符号写成 Ic，在 f(CLK)=10 MHz 时最小 10 mA、典型 20 mA、最大 40 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。峰值波长典型 700 nm。光灵敏度符号写成 Sw。转换效率典型 20 µV/e-。暗输出符号写成 VD，积分时间 10 ms，典型 0.2 mV。光响应非均匀性按 506 像素计算。操作示例标题把 Operation 印成 Operetion，并写输出全部 2048 通道；正文写输出全部 512 通道，起始脉冲周期 60.4 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13014-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13014-10.html", [
          "产品页没有写发布日期。索引短句在逗号后没有空格，写成 High sensitivity,photosensitive area with vertically long pixels (surface mount type)。标题把 Surface mount type 的首字母大写。正文写 employing，并写紫外区灵敏度高、耐久性高，单 5 V，表面贴装，可用于编码器、位置检测和光谱仪。",
          "特性与 S13014 的产品页相同，灵敏度同样写成 1300 V/(lx・s)，512 像素，有效感光区长度 7.168 mm，视频数据率最大 10 MHz。特性列表没有另写表面贴装一行。",
          "规格表与 S13014 相同，包括最高行频 16556 行/秒、窗口石英。封装一栏仍写成 Ceramic，没有写成表面贴装。测量条件也相同。",
          "手册与 S13014 合订。绝对最大额定的焊接温度一行写成 260 (3 times)，注记 *3 写回流焊，IPC/JEDEC J-STD-020 MSL2a。电特性和光学特性没有按型号拆开。操作示例标题同样写成 2048 通道，正文写 512 通道。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s14739",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14739-20：滨松表面贴装高灵敏度 CMOS 线阵",
    summary:
      "产品页写高灵敏度 CMOS 线阵，像元 14 × 200 μm，256 像素，光谱响应 200 到 1000 nm，并写表面贴装可缩小电路板占位。产品页没有写发布日期。手册 KMPD1196E07 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S14739-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S14739-20.html", [
          "产品页没有写发布日期。正文写纵向长像素感光区 14 × 200 μm，紫外区耐受高，单 5 V，适合低成本光谱仪。下一句写表面贴装封装可缩小印制板占位。特性写 256 像素，有效感光区长度 3.584 mm，灵敏度 1300 V/(lx·s)，光谱响应 200 到 1000 nm。视频数据率最大 10 MHz。特性最后一行写 Surface mount type。",
          "规格表类型为 High sensitivity type。图像尺寸 3.584 x 0.200 mm，有效像素 256 x 1，像元 14 x 200 μm。最高行频 28735 行/秒。无制冷，窗口为石英，封装陶瓷。测量条件与 S13014 的产品页相同。",
          "手册结构表像素数 256，感光区长度 3.584 mm，封装 Ceramic，窗口 Quartz。特性灵敏度同样写成 1300 V/(lx·s)。应用栏写光谱仪、位置检测、图像读取和编码器。焊接温度写成 240 (twice)，注记 *2 写回流焊，IPC/JEDEC J-STD-020 MSL5。",
          "手册时钟频率典型写成 5M，最高 10 MHz。供电电流符号写成 Ic，在 f(CLK)=10 MHz 时最小 5 mA、典型 15 mA、最大 35 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。峰值波长典型 700 nm。光灵敏度符号写成 Sw。转换效率典型 20 µV/e-。暗输出符号写成 VD，典型 0.2 mV。光响应非均匀性按 250 像素计算。操作示例把 Operation 印成 Operetion，没有写出像素数。起始脉冲周期 34.8 µs。时序图上印着 256。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s15739",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S15739：滨松 1024 像素高灵敏度 CMOS 线阵",
    summary:
      "S15739-1024 与 S15739-1024-20 的产品页都写 S15739 series，像元 14 × 200 μm，1024 像素，光谱响应 200 到 1000 nm。S15739-1024-20 的正文另写表面贴装封装。产品页没有写发布日期。手册 KMPD1235E05 页脚写 Feb. 2024，并写资料截至 February 2024，记为约 2024 年 2 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S15739-1024", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15739-1024.html", [
          "产品页没有写发布日期。正文写紫外区耐受高，单 5 V，适合低成本光谱仪。特性写像元 14 × 200 μm，1024 像素，有效感光区长度 14.336 mm，灵敏度 1300 V/(lx･s)，光谱响应 200 到 1000 nm。各像素同时积分，并写可变积分时间的电子快门。视频数据率最大 10 MHz。",
          "规格表类型为 High sensitivity type。图像尺寸 14.336 x 0.200 mm，有效像素 1024 x 1，像元 14 x 200 μm。最高行频 8960 行/秒。无制冷，窗口为石英，封装 LCP。测量条件与 S13014 的产品页相同。",
          "手册特性把像元写成 14 × 200 µm，灵敏度写成 1300 V/(lx⸱s)。结构表像素数 1024，感光区长度 14.336 mm，封装写成 LCP（liquid crystal polymer），窗口 Quartz。应用栏写分光光度测定、位置检测、图像读取和编码器。",
          "手册时钟频率典型一格是横线，最高 10 MHz。供电电流符号写成 Ic，在 f(CLK)=10 MHz 时最小 15 mA、典型 25 mA、最大 35 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。峰值波长典型 700 nm。光灵敏度符号写成 Sw。转换效率典型 20 µV/e-。暗输出符号写成 Vd，典型 0.2 mV。光响应非均匀性没有典型值，最大 ±10%，按 1018 像素计算。操作示例把 Operation 印成 Operetion，并写输出全部 1024 像素。起始脉冲周期 111.6 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S15739-1024-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15739-1024-20.html", [
          "产品页没有写发布日期。标题与 S15739-1024 一样，写到 1024 pixels 为止，没有写表面贴装。正文在系列介绍之后另写 The S15739-1024-20 is provided in a surface mount type package。特性列表与 S15739-1024 相同，灵敏度同样写成 1300 V/(lx･s)，没有表面贴装一行。",
          "规格表图像尺寸、有效像素、行频和窗口与 S15739-1024 相同。封装一栏写成 Ceramic。",
          "手册结构表把这一列的封装写成 Surface mount type ceramic，窗口仍是 Quartz。电特性和光学特性与 S15739-1024 写在同一组，没有按型号拆开。",
          "手册焊接温度写成 260 (twice)，注记 *3 写回流焊，IPC/JEDEC J-STD-020 MSL2a。操作示例仍写输出全部 1024 像素。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s15796",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S15796：滨松 7 μm 高灵敏度 CMOS 线阵",
    summary:
      "S15796-1024、S15796-1024-20、S15796-2048 与 S15796-2048-20 的产品页都写 S15796 series，像元 7 × 200 μm，光谱响应 200 到 1000 nm。两款 -20 的标题写表面贴装。产品页没有写发布日期。手册 KMPD1244E05 页脚写 Feb. 2024，并写资料截至 February 2024，记为约 2024 年 2 月。手册电光特性把动态范围 2 写成 20000 times。分光用线阵索引的短句把 S15796-2048-20 写成 1024 pixels。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S15796-1024", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15796-1024.html", [
          "产品页没有写发布日期。标题写 1024 pixels。正文写紫外区耐受高，单 5 V，适合低成本光谱仪。特性写像元 7 × 200 μm，1024 像素，有效感光区长度 7.168 mm，灵敏度 650 V/(lx･s)，光谱响应 200 到 1000 nm。视频数据率最大 10 MHz。",
          "规格表图像尺寸 7.168 x 0.200 mm，有效像素 1024 x 1，像元 7 x 200 μm。最高行频 8960 行/秒。无制冷，窗口为石英，封装 LCP。测量条件与 S13014 的产品页相同。",
          "手册特性把长度一行写成 Effective photosensitive area length : 7.168 mm (1024 pixels)，冒号前有空格，灵敏度写成 650 V/(lx⸱s)。结构表像素数 1024，感光区长度 7.168 mm，封装写成 LCP（liquid crystal polymer），窗口 Quartz。应用栏写分光光度测定、位置检测、图像读取和编码器。",
          "手册时钟频率典型一格是横线。1024 系列供电电流在 f(CLK)=10 MHz 时最小 15 mA、典型 25 mA、最大 35 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。暗输出典型 0.1 mV。光响应非均匀性没有典型值，最大 ±10%，1024 系列按 1018 像素计算。峰值波长典型 700 nm。转换效率典型 20 µV/e-。操作示例把 Operation 印成 Operetion，1024 像素那一则起始脉冲周期 111.6 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S15796-1024-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15796-1024-20.html", [
          "产品页没有写发布日期。标题在 1024 pixels 之后写 surface mount type。正文仍用系列的复数 are，没有单独点出这一型号。特性与 S15796-1024 相同，灵敏度同样写成 650 V/(lx･s)。",
          "规格表图像尺寸、有效像素和行频与 S15796-1024 相同。封装写成 Surface mount type ceramic，窗口为石英。",
          "手册正文写 S15796-1024-20 与 S15796-2048-20 采用表面贴装封装。结构表这一列写成 Surface mount type ceramic。电特性与 1024 系列写在同一组。",
          "手册 1024 像素的操作示例同时点名 S15796-1024 和 S15796-1024-20，起始脉冲周期 111.6 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S15796-2048", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15796-2048.html", [
          "产品页没有写发布日期。标题写 2048 pixels。特性写 2048 像素，有效感光区长度 14.336 mm，灵敏度 650 V/(lx･s)。其余特性与 1024 像素那一款相同。",
          "规格表图像尺寸 14.336 x 0.200 mm，有效像素 2048 x 1，像元 7 x 200 μm。最高行频 4672 行/秒。窗口为石英，封装 LCP。",
          "手册特性把长度写成 14.336 mm (2048 pixels)。结构表像素数 2048，感光区长度 14.336 mm，封装写成 LCP（liquid crystal polymer）。",
          "手册 2048 系列供电电流在 f(CLK)=10 MHz 时最小 20 mA、典型 30 mA、最大 40 mA。注记仍写 200 kHz 时典型 10 mA。光响应非均匀性按 2042 像素计算。操作示例标题写成输出全部 2048 通道，起始脉冲周期 214 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S15796-2048-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15796-2048-20.html", [
          "产品页没有写发布日期。标题写 2048 pixels, surface mount type。分光用线阵索引的短句写成 1024 pixels, surface mount type。特性写 2048 像素，有效感光区长度 14.336 mm，灵敏度 650 V/(lx･s)。",
          "规格表图像尺寸 14.336 x 0.200 mm，有效像素 2048 x 1。最高行频 4672 行/秒。窗口为石英，封装写成 Surface mount type ceramic。",
          "手册结构表这一列的封装写成 Surface mount type ceramic，像素数 2048，感光区长度 14.336 mm。供电电流与 S15796-2048 同为 2048 系列那一行。",
          "手册操作示例在 2048 像素那一则同时点名 S15796-2048 和 S15796-2048-20。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s16528",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16528-1024-11：滨松带遮光像素的 CMOS 线阵",
    summary:
      "产品页写高灵敏度 CMOS 线阵，带遮光像素，像元 28 × 200 μm，光谱响应 200 到 1000 nm。标题把 High sensitivity 和 photosensitive area 分成两行，中间没有逗号。产品页没有写发布日期。手册 KMPD1256E02 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S16528-1024-11", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S16528-1024-11.html", [
          "产品页没有写发布日期。标题用换行隔开 High sensitivity 和 photosensitive area with vertically long pixels (with light-shielding pixels)，中间没有逗号。索引短句在这两段之间有逗号。正文把像元写成 28× 200 µm，乘号前没有空格。单 5 V，适合低成本光谱仪，并写紫外区耐受高。",
          "特性写像元 28 × 200 μm，有效像素 1002，两端各 5 个像素为光学黑，有效感光区长度 28.056 mm，灵敏度 2600 V/(lx·s)，光谱响应 200 到 1000 nm。各像素同时积分，并写可变积分时间的电子快门。视频数据率最大 10 MHz。",
          "规格表类型为 High sensitivity type。图像尺寸 28.672 x 0.200 mm，有效像素 1002 x 1，像元 28 x 200 μm。最高行频 8960 行/秒。无制冷，窗口为石英，封装 LCP。测量条件与 S13014 的产品页相同。",
          "手册结构表像素数 1024，有效像素 1002，感光区长度 28.672 mm，封装写成 LCP（liquid crystal polymer），窗口 Quartz。注记 *1 写可按要求提供无窗型 S16528-1024N-11。结露注记把 environments 写成 environment。时钟频率典型一格是横线。供电电流在 f(CLK)=10 MHz 时最小 15 mA、典型 25 mA、最大 45 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。光灵敏度符号写成 S，典型 2600 V/(lx·s)。峰值波长典型 700 nm。转换效率典型 20 µV/e-。暗输出符号写成 Vd，典型 0.4 mV。动态范围 2 也写成 5000 倍。光响应非均匀性按有效 996 像素计算。应用栏写光谱仪、位置检测、图像读取和编码器。",
          "手册操作示例标题写成 Operetion example (for outputting signals from all 1024 channels)。下一句写成输出全部 2048 通道。起始脉冲周期按 1116/f(CLK) 算成 111.6 µs。时序图上印着 1105。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s16929",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16929-01：滨松高速前照式 CCD 线阵",
    summary:
      "分光用线阵索引把 S16929-01 标成新。产品页写前照式 CCD 线阵，带增透膜，近红外灵敏度高，面向 SD-OCT，最高行频 130 kHz。光谱响应 400 到 1100 nm。产品页没有写发布日期。手册 KMPD1262E01 页脚写 Dec. 2025，并写资料截至 December 2025，记为约 2025 年 12 月。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("S16929-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S16929-01.html", [
        "产品页没有写发布日期。索引把它标成新。正文写最高行频 130 kHz 的前照式 CCD 线阵，面向 SD-OCT。特性写窗口为带增透膜的硼硅玻璃，像元 10 μm × 180 μm，2048 像素，多端口高速读出，读出速度最高 40 MHz，括注 × 8 ports。近红外灵敏度高。图像滞后典型 0.1 %。",
        "规格表类型为 High-speed type。图像尺寸 20.48 x 0.18 mm，有效像素 2048 x 1，像元 10 x 180 μm。光谱响应 400 到 1100 nm。行频典型 68000 行/秒，最高 130000 行/秒。读出噪声典型 40 e- rms。无制冷，窗口写成 Borosilicate glass with AR coating，封装陶瓷。测量条件写典型 Ta=25 ℃，unless otherwise noted，operating conditions: Typ.。索引只列出最高行频 130000 行/秒。",
        "手册结构表总像素 2160，有效像素 2048，填充因子 100%，水平时钟两相，输出电路为三级 MOSFET 源跟随器，封装写成 30-pin ceramic DIP。窗口材料与产品页相同，注记 *1 写 Resin sealing。行频最小 40 kHz、典型 68 kHz、最大 130 kHz。每端口输出信号频率最小 12 MHz、典型 20 MHz、最大 40 MHz。每端口功耗典型 105 mW、最大 150 mW。",
        "手册饱和电荷典型 100 ke-、最小 80 ke-。转换效率最小 8.5 µV/e-、典型 10 µV/e-、最大 11.5 µV/e-。暗电流符号写成 DSmax，典型 20 e-/50 µs、最大 60 e-/50 µs，注记写行频 20 kHz。读出噪声典型 40 e- rms、最大 60 e- rms，注记写输出信号频率 40 MHz。光谱响应图标题写 without window。应用栏只写 SD-OCT（spectral domain-optical coherence tomography）。注意事项写 Handle the sensor with bare hands or wearing cotton gloves。",
      ], "nir"),
    ],
  },
  {
    id: "s837",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S8377 与 S8378：滨松内置时序发生器的 CMOS 线阵",
    summary:
      "S8377-128Q、S8377-256Q、S8377-512Q、S8378-256Q、S8378-512Q 与 S8378-1024Q 的产品页都写内置时序发生电路和信号处理电路，单 5 V。S8377 像元间距 50 μm，S8378 像元间距 25 μm，像素高度都写 0.5 mm。光谱响应 200 到 1000 nm。产品页没有写发布日期。手册标题写成 S8377/S8378 series，KMPD1066E11 页脚写 Feb. 2022，并写资料截至 February 2022，记为约 2022 年 2 月。产品页把窗口拼成 Quarts glass。手册写成 Quartz glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S8377-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8377-128Q.html", [
          "产品页没有写发布日期。正文写 The S8377-128Q is a family，又写 making them easy to use。单 5 V，只需起始脉冲和时钟。电荷放大器可在 500 kHz 读出。像素高度 0.5 mm，按 50 μm 间距排成一行。窗口写成 Quarts glass。",
          "特性写感光区宽，像素间距 50 μm，像素高度 0.5mm，片上电荷放大器，内置时序发生器，最高时钟 500 kHz，光谱响应 200 到 1000 nm，单 5 V。特性把 One-chip 印在产品页上。",
          "规格表类型为 Standard type。图像尺寸 6.4 x 0.5 mm，有效像素 128 x 1，像元 50 x 500 μm。最高行频 3846 行/秒。无制冷，窗口材料写成 Quartz，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，unless otherwise noted。",
          "手册把两列写成 S8377 series 与 S8378 series，并写 8 引脚、引脚兼容。结构表这一列像素数 128，像素间距 50 µm，像素高度 0.5 mm，封装长度 15.8 mm，8 引脚，封装 Ceramic，窗口 Quartz。外形图与 S8378-256Q 共用，感光区 6.4 × 0.5。电特性标题把 characteristics 印成 characterisitics。时钟频率写成 0.1 k 到 500 k Hz。功耗典型 15 mW。峰值波长典型 500 nm。光灵敏度符号写成 Sw，高增益典型 22 V/lx·s，低增益典型 4.4 V/lx·s。暗电流典型 0.01 pA。S8377 系列饱和电荷典型 12.5 pC。高增益读出噪声在 -128Q 一格写成典型 0.4 mV rms。时序注记把 timing 印成 timming。应用栏写图像输入装置和光学传感装置。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8377-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8377-256Q.html", [
          "产品页没有写发布日期。正文同样写 is a family 和 them，像素高度 0.5 mm，间距 50 μm，窗口写成 Quarts glass。特性与 S8377-128Q 相同，最高时钟 500 kHz，光谱响应 200 到 1000 nm。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 256 x 1，像元 50 x 500 μm。最高行频 1938 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S8377-128Q 相同。",
          "手册结构表像素数 256，封装长度 22.2 mm，其余结构与 S8377 系列相同。外形图与 S8378-512Q 共用。高增益读出噪声在 -256Q 一格写成典型 0.5 mV rms，低增益写成典型 0.15 mV rms。光灵敏度和峰值波长与 S8377 系列同一列。",
          "手册正文写每种系列有 3 种像素数，随后却列出 128、256、512 和 1024。S8377-256Q 写在 256 这一组。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8377-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8377-512Q.html", [
          "产品页没有写发布日期。正文写间距 50 μm、高度 0.5 mm，窗口写成 Quarts glass。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 512 x 1，像元 50 x 500 μm。最高行频 972 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S8377-128Q 相同。",
          "手册结构表像素数 512，封装长度 35.0 mm。外形图与 S8378-1024Q 共用。高增益读出噪声在 -512Q 一格写成典型 0.8 mV rms，低增益写成典型 0.2 mV rms。",
          "手册饱和输出电压高增益典型 3.2 V、低增益典型 2.5 V，S8377 与 S8378 写在同一组。暗输出积分时间 100 ms。S8377 高增益暗输出典型 1.0 mV，低增益典型 0.2 mV。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8378-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8378-256Q.html", [
          "产品页没有写发布日期。正文写 The S8378-256Q，间距 25 μm，高度 0.5 mm，窗口写成 Quarts glass。特性把像素间距写成 25 μm，像素高度 0.5mm，最高时钟 500 kHz，光谱响应 200 到 1000 nm。",
          "规格表图像尺寸 6.4 x 0.5 mm，有效像素 256 x 1，像元 25 x 500 μm。最高行频 1938 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S8377-128Q 相同。",
          "手册写 S8378 系列像素高度同样是 0.5 mm，间距 25 µm。结构表像素数 256，封装长度 15.8 mm。外形图与 S8377-128Q 共用，感光区 6.4 × 0.5。",
          "手册 S8378 系列饱和电荷典型 6.3 pC。高增益反馈电容典型 0.5 pF，低增益典型 2.5 pF。高增益读出噪声在 -256Q 一格写成典型 0.9 mV rms。光灵敏度仍是高增益 22 V/lx·s、低增益 4.4 V/lx·s。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8378-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8378-512Q.html", [
          "产品页没有写发布日期。正文把型号写成 The S8377-512Q has a height of 0.5 mm，间距写成 25 μm。标题和规格表型号仍是 S8378-512Q。窗口写成 Quarts glass。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 512 x 1，像元 25 x 500 μm。最高行频 972 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 512，像素间距 25 µm，封装长度 22.2 mm。外形图标题写成 S8377-256Q, S8378-512Q。高增益读出噪声在 -512Q 一格写成典型 1.3 mV rms，低增益写成典型 0.3 mV rms。",
          "手册 S8378 高增益暗输出典型 2.0 mV、最大 6.0 mV，低增益典型 0.4 mV、最大 1.2 mV。积分时间注记写 100 ms。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8378-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8378-1024Q.html", [
          "产品页没有写发布日期。正文把型号写成 The S8377-1024Q has a height of 0.5 mm，间距写成 25 μm。手册像素数清单里没有 S8377-1024Q，1024 只写在 S8378-1024Q。窗口写成 Quarts glass。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 1024 x 1，像元 25 x 500 μm。最高行频 487 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 1024，封装长度 35.0 mm。外形图标题写成 S8377-512Q, S8378-1024Q。高增益读出噪声在 -1024Q 一格写成典型 2.1 mV rms，低增益写成典型 0.4 mV rms。",
          "手册光响应非均匀性上限 ±3%，注记按全部像素的平均输出计算，没有写去掉两端像素。饱和曝光高增益典型 145 mlx·s，低增益典型 570 mlx·s，两列相同。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s9226",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S9226：滨松小型 CMOS 线阵",
    summary:
      "S9226-03 与 S9226-04 的产品页都写小型 CMOS 线阵，1024 像素，像元 7.8 × 125 μm，光谱响应 400 到 1000 nm，视频数据率最高 200 kHz。产品页把 CMOS 印成 Cmos，窗口印成 Broslicate glass。产品页没有写发布日期。手册 KMPD1121E11 页脚写 Dec. 2021，并写资料截至 December 2021，记为约 2021 年 12 月。手册窗口写成 Borosilicate glass。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S9226-03", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S9226-03.html", [
          "产品页没有写发布日期。副题写内置时序发生电路和信号处理电路，可单 3.3 V。正文写 small Cmos linear image sensor。特性写像素间距 7.8 μm，像素高度 125μm，中间没有空格。1024 像素。写可单 3.3 V。视频数据率最高 200 kHz。光谱响应 400 到 1000 nm。封装一行写 DIP (dual inline package) type。",
          "规格表类型为 Standard type。图像尺寸 7.9872 x 0.125 mm，有效像素 1024 x 1，像元 7.8 x 125 μm。最高行频 194 行/秒。无制冷，窗口写成 Broslicate glass，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，unless otherwise noted。",
          "手册正文写有 DIP 和表面贴装两种封装。特性把 DIP 指定为 S9226-03，表面贴装指定为 S9226-04。结构表两列封装都写成 Ceramic，窗口都写成 Borosilicate glass，感光区长度 7.9872 mm。推荐端电压 Vdd 最小 3.3 V、典型 5 V、最大 5.25 V。",
          "手册时钟频率最小 10 kHz、最高 800 kHz，数据率写成 f(CLK)/4。供电电流符号写成 Ic，最小 4 mA、典型 6 mA、最大 8 mA，这一行没有写时钟条件。转换效率高增益典型 3.2 μV/e-，低增益典型 1.6 μV/e-。暗电流典型 5 fA、最大 50 fA。峰值波长典型 650 nm。暗输出积分时间 10 ms。光响应非均匀性按 1022 像素计算，上限 ±5%。应用栏写分析仪器、位置检测和图像读取。",
        ], "nir"),
      },
      {
        ...page("S9226-04", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S9226-04.html", [
          "产品页没有写发布日期。副题、正文和像素特性与 S9226-03 相同，CMOS 仍印成 Cmos，像素高度仍写成 125μm。特性最后一行改成 Surface mount type。",
          "规格表图像尺寸、有效像素、行频和窗口与 S9226-03 相同，最高行频仍是 194 行/秒。窗口写成 Broslicate glass，封装仍写成 Ceramic。测量条件同样写 Vdd=5 V。",
          "手册特性把这一型号写成 Surface mount type: S9226-04。结构表封装仍是 Ceramic，窗口仍是 Borosilicate glass。电特性和光学特性与 S9226-03 写在同一组。",
          "手册焊接温度一行把 S9226-04 写成 240 (twice)，注记 *3 写回流焊，IPC/JEDEC J-STD-020 MSL 5。S9226-03 的焊接温度格子指向推荐焊接条件。",
        ], "nir"),
      },
    ],
  },
  {
    id: "s9227",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S9227：滨松同时积分的小型 CMOS 线阵",
    summary:
      "S9227-03 与 S9227-04 的产品页都写小型线阵，512 像素，像元 12.5 × 250 μm，视频数据率最高 5 MHz，各像素同时积分，光谱响应 400 到 1000 nm。页面标题写 CMOS linear image sensor。正文写 small linear image sensor，并写 read out of 5 MHz。窗口印成 Broslicate glass。产品页没有写发布日期。手册 KMPD1122E15 页脚写 May 2021，并写资料截至 May 2021，记为约 2021 年 5 月。手册窗口写成 Borosilicate glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S9227-03", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S9227-03.html", [
          "产品页没有写发布日期。副题写 Video data rate: 5 MHz max, simultaneous charge integration。正文写 Signal charge is integrated on all pixels simultaneously and then read out of 5 MHz。特性把像素间距和像素高度分成两行，512 像素，单 5 V，视频数据率最高 5 MHz，同时积分，带快门。光谱响应 400 到 1000 nm。封装写成 DIP (dual inline package) type。",
          "规格表类型为 Standard type。图像尺寸 6.4 x 0.25 mm，有效像素 512 x 1，像元 12.5 x 250 μm。最高行频 9434 行/秒。无制冷，窗口写成 Broslicate glass，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，unless otherwise noted。",
          "手册标题写 S9227 series，正文同样写 read out of 5 MHz，并写两种封装。特性把 DIP 指定为 S9227-03，表面贴装指定为 S9227-04。结构表没有按型号分列，像素数 512，感光区长度 6.4 mm，封装 Ceramic，窗口 Borosilicate glass。",
          "手册时钟频率最小 50 kHz，最高一格写成 5M Hz。数据率等于 f(CLK)。供电电流在 f(CLK)=5 MHz 时最小 20 mA、典型 26 mA、最大 32 mA。转换效率典型 1.6 μV/e-。暗电流典型 10 fA、最大 100 fA。饱和电荷典型 430 fC。峰值波长典型 650 nm。暗输出积分时间 10 ms，典型 1 mV。光响应非均匀性按 510 像素计算，上限 ±5%。应用栏写位置检测和图像读取。",
        ], "nir"),
      },
      {
        ...page("S9227-04", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S9227-04.html", [
          "产品页没有写发布日期。副题和正文与 S9227-03 相同，仍写 read out of 5 MHz。特性最后一行改成 Package: Surface mount type。像素高度仍单独成行。",
          "规格表图像尺寸、有效像素和行频与 S9227-03 相同，最高行频仍是 9434 行/秒。窗口写成 Broslicate glass，封装仍写成 Ceramic。",
          "手册特性把这一型号写成 Surface mount type: S9227-04。结构表没有单独一列，封装和窗口与 S9227-03 同为 Ceramic 和 Borosilicate glass。电特性写在同一组。",
          "手册焊接温度把 S9227-04 写成 240 (twice)，注记 *3 写回流焊，IPC/JEDEC J-STD-020 MSL 5。工作温度写成 -5 到 +85 ℃。",
        ], "nir"),
      },
    ],
  },
  {
    id: "s1012",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10121 至 S10124：滨松提高紫外灵敏度的 CMOS 线阵",
    summary:
      "S10121、S10122、S10123 与 S10124 的产品页都写电流输出型、每个像素可变积分时间，并写紫外灵敏度高于前代。光谱响应 200 到 1000 nm。产品页没有写发布日期。手册标题写成 S10121 to S10124 series (-01)，KMPD1162E06 页脚写 Jun. 2024，并写资料截至 June, 2024，记为约 2024 年 6 月。特性和手册都把比较级印成 High UV sensitivity than previous type。产品页用 is 接 photodiode arrays。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S10121-128Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10121-128Q-01.html", [
          "产品页没有写发布日期。副题写 Higher UV sensitivity than previous type, current-output type sensors with variable integration time function。正文写 The S10121-128Q-01 is self-scanning photodiode arrays。特性写 High UV sensitivity than previous type，感光区宽，像素间距 50 μm，像素高度 2.5 mm。",
          "规格表类型为 With variable integration time for each pixel。图像尺寸 6.4 x 2.5 mm，有效像素 128 x 1，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 1923 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，Vb=Vofd=2 V，Vofg=0.2 V，f(CLK)=200 kHz，unless otherwise noted。",
          "手册结构表像素数 128，像素间距 50 µm，像素高度 2.5 mm，封装 Ceramic，窗口 Quartz，括注 t=0.5 mm。注记 *1 写 Resin sealing，*2 写折射率 1.46。S10121 与 S10124 的时钟频率最高 250 kHz。视频数据率符号写成 VR，等于 f(CLK)。这一型号功耗典型 0.75 mW，注记写测在 250 kHz。",
          "手册 S10121 系列暗电流典型 0.1 pA、最大 0.6 pA。饱和电荷最小 110 pC、典型 165 pC。峰值波长典型 750 nm。饱和曝光典型 580 mlx·s。光响应非均匀性上限 ±3%，注记写除去第一个和最后一个像素。应用栏写 Spectrophotometry。外形图标题印着 S3901-128Q、S3904-256Q、S10111-128Q 和 S10114-256Q，图内标注写 S10121-128Q-01, S10124-256Q-01，感光区 6.4 × 2.5。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10121-256Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10121-256Q-01.html", [
          "产品页没有写发布日期。正文和特性与 S10121-128Q-01 同一套句子，像素间距 50 μm，像素高度 2.5 mm。比较级仍印成 High UV sensitivity than previous type。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1，像元 50 x 2500 μm。最高行频 969 行/秒。窗口 Quartz，封装 Ceramic。测量条件与 S10121-128Q-01 相同。",
          "手册结构表像素数 256，像素高度 2.5 mm。功耗典型 1.75 mW。视频线电容与 S10122-256Q-01 写在同一组，典型 14 pF。暗电流和饱和电荷与 S10121 系列同一行。",
          "手册外形图标题印着 S3901-256Q、S3904-512Q、S3921-256Q、S3924-512Q、S10111-256Q 和 S10114-512Q。图内标注写 S10121-256Q-01, S10124-512Q-01，感光区 12.8 × 2.5。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10121-512Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10121-512Q-01.html", [
          "产品页没有写发布日期。像素间距 50 μm，像素高度 2.5 mm。特性没有给出以 A/W 计的紫外灵敏度数字。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1，像元 50 x 2500 μm。最高行频 486 行/秒。窗口 Quartz，封装 Ceramic。测量条件与 S10121-128Q-01 相同。",
          "手册功耗典型 4.25 mW。视频线电容与 S10122-512Q-01 同一组，典型 22 pF。饱和电荷与 S10121 系列同一行，典型 165 pC。",
          "手册外形图标题印着 S3901-512Q、S3904-1024Q、S3921-512Q、S3924-1024Q、S10111-512Q 和 S10114-1024Q。图内标注写 S10121-512Q-01, S10124-1024Q-01，感光区 25.6 × 2.5。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10122-128Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10122-128Q-01.html", [
          "产品页没有写发布日期。副题与 S10121 相同。特性像素间距 50 μm，像素高度改成 0.5 mm。比较级仍印成 High UV sensitivity than previous type。",
          "规格表图像尺寸 6.4 x 0.5 mm，有效像素 128 x 1，像元 50 x 500 μm。最高行频 3846 行/秒。窗口 Quartz，封装 Ceramic。测量条件与 S10121-128Q-01 相同，时钟仍写 200 kHz。",
          "手册结构表像素高度 0.5 mm，像素间距 50 µm。S10122 与 S10123 的时钟频率最高 500 kHz。这一型号功耗典型 1.5 mW，注记写测在 500 kHz。视频线电容与 S10121-128Q-01 同一组，典型 10 pF。",
          "手册 S10122 系列暗电流典型 0.02 pA、最大 0.12 pA。饱和电荷最小 22 pC、典型 32 pC。峰值波长、饱和曝光和光响应非均匀性与全系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10122-256Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10122-256Q-01.html", [
          "产品页没有写发布日期。像素间距 50 μm，像素高度 0.5 mm。正文仍用 is 接 arrays。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 256 x 1，像元 50 x 500 μm。最高行频 1938 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 3.5 mW。视频线电容典型 14 pF，与 S10121-256Q-01 同一组。暗电流和饱和电荷与 S10122 系列同一行。",
          "手册时钟最高 500 kHz 写在 S10122/S10123 series 一行。产品页测量条件仍写 f(CLK)=200 kHz。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10122-512Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10122-512Q-01.html", [
          "产品页没有写发布日期。像素间距 50 μm，像素高度 0.5 mm。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 512 x 1，像元 50 x 500 μm。最高行频 972 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 8.25 mW。视频线电容典型 22 pF。饱和电荷与 S10122 系列同一行，典型 32 pC。",
          "手册外形图标题印着 S10112-512Q, S10113-1024Q。图内标注写 S10122-512Q-01, S10123-1024Q-01，感光区 25.6 × 0.5。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10123-256Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10123-256Q-01.html", [
          "产品页没有写发布日期。特性像素间距 25 μm，像素高度 0.5 mm。比较级仍印成 High UV sensitivity than previous type。",
          "规格表图像尺寸 6.4 x 0.5 mm，有效像素 256 x 1，像元 25 x 500 μm。最高行频 1938 行/秒。窗口 Quartz，封装 Ceramic。测量条件与 S10121-128Q-01 相同。",
          "手册结构表像素间距 25 µm，像素高度 0.5 mm。功耗典型 3.25 mW，时钟条件与 S10122 同为 500 kHz。视频线电容与 S10124-256Q-01 同一组，典型 13 pF。",
          "手册 S10123 系列暗电流典型 0.02 pA、最大 0.12 pA。饱和电荷最小 11 pC、典型 14 pC。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10123-512Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10123-512Q-01.html", [
          "产品页没有写发布日期。像素间距 25 μm，像素高度 0.5 mm。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 512 x 1，像元 25 x 500 μm。最高行频 972 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 7.25 mW。视频线电容与 S10124-512Q-01 同一组，典型 19 pF。饱和电荷与 S10123 系列同一行，典型 14 pC。",
          "手册峰值波长典型 750 nm，饱和曝光典型 580 mlx·s，两行覆盖 S10121 到 S10124。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10123-1024Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10123-1024Q-01.html", [
          "产品页没有写发布日期。像素间距 25 μm，像素高度 0.5 mm。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 1024 x 1，像元 25 x 500 μm。最高行频 487 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 18.25 mW，是功耗表里最大的一格。视频线电容与 S10124-1024Q-01 同一组，典型 32 pF。",
          "手册另两张外形图标题印着 S10112-128Q, S10113-256Q 和 S10112-256Q, S10113-512Q。图内标注分别写 S10122-128Q-01, S10123-256Q-01（感光区 6.4 × 0.5）和 S10122-256Q-01, S10123-512Q-01（感光区 12.8 × 0.5）。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10124-256Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10124-256Q-01.html", [
          "产品页没有写发布日期。特性像素间距 25 μm，像素高度 2.5 mm。",
          "规格表图像尺寸 6.4 x 2.5 mm，有效像素 256 x 1，像元 25 x 2500 μm。最高行频 969 行/秒。窗口 Quartz，封装 Ceramic。测量条件仍写 f(CLK)=200 kHz。",
          "手册结构表像素间距 25 µm，像素高度 2.5 mm。时钟最高与 S10121 同为 250 kHz。功耗典型 1.75 mW。视频线电容典型 13 pF。",
          "手册 S10124 系列暗电流典型 0.1 pA、最大 0.6 pA。饱和电荷最小 55 pC、典型 75 pC。外形图内标注把这一型号和 S10121-128Q-01 放在 6.4 × 2.5 那一张。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10124-512Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10124-512Q-01.html", [
          "产品页没有写发布日期。像素间距 25 μm，像素高度 2.5 mm。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1，像元 25 x 2500 μm。最高行频 486 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 3.75 mW。视频线电容典型 19 pF。饱和电荷与 S10124 系列同一行，典型 75 pC。",
          "手册暗电流与 S10121 系列同为典型 0.1 pA。时钟最高 250 kHz 写在 S10121/S10124 series 一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10124-1024Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10124-1024Q-01.html", [
          "产品页没有写发布日期。像素间距 25 μm，像素高度 2.5 mm。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1，像元 25 x 2500 μm。最高行频 243 行/秒。窗口 Quartz，封装 Ceramic。",
          "手册功耗典型 8.25 mW。视频线电容典型 32 pF。饱和电荷典型 75 pC。",
          "手册光响应非均匀性注记写除去第一个和最后一个像素，上限 ±3%。产品页另有一份 467 KB 的技术说明，规格表数字来自产品页和 KMPD1162E06。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s1590",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S15908 与 S15909：滨松紫外到近红外平滑光谱的 CMOS 线阵",
    summary:
      "S15908-512Q 与 S15909-1024Q 的产品页都写紫外到近红外光谱平滑，并写每个像素可变积分时间。光谱响应 200 到 1000 nm。产品页没有写发布日期。手册 KMPD1239E02 把两款印在同一份资料上，页脚写 Jun. 2024，并写资料截至 June 2024，记为约 2024 年 6 月。特性写 250 nm 的紫外灵敏度 0.09 A/W。手册光谱图把 S10121 到 S10124 series (-01) 标成前代。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S15908-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15908-512Q.html", [
          "产品页没有写发布日期。正文把 specifically 印成带连字的 speciﬁcally，并写 self-scanning photodiode array，面向分光，紫外到近红外光谱响应平滑。特性写抑制紫外到红外的光谱响应条纹，紫外灵敏度 0.09 A/W（λ=250 nm），暗电流 0.03 pA，饱和电荷 200 pC，每个像素可变积分时间。",
          "规格表类型为 With variable integration time for each pixel。图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 486 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，Vb=Vofd=2 V，Vofg=0.2 V，f(CLK)=200 kHz，unless otherwise noted。",
          "手册特性把饱和电荷的 200 拆开，行末是 2，下一行是 00 pC (S15908-512Q)。结构表像素数 512，间距 50 µm，像素高度 2.5 mm，封装 Ceramic，窗口 Quartz，重量 3.5 g。注记 *1 写 Resin sealing，*2 写折射率 1.46。功耗典型 4.25 mW，注记写 f(CLK)=250 kHz。视频线电容典型 22 pF。",
          "手册饱和电荷最小 150 pC、典型 200 pC。暗电流典型 0.03 pA、最大 0.3 pA。峰值波长典型 750 nm。饱和曝光典型 700 mlx·s。光响应非均匀性上限 ±3%，注记写除去第一个和最后一个像素。起始脉冲周期写成 514/f(CLK)。读出电路示例把 S15908-512Q 和 S15909-1024Q 标在 SD210DE 旁边。光谱图把前代写成 S10121 to S10124 series (-01)。外形图标题印着 S3901-512Q、S3904-1024Q、S3921-512Q、S3924-1024Q、S10111-512Q 和 S10114-1024Q，感光区 25.6 × 2.5。应用栏写 Spectrophotometry。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S15909-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S15909-1024Q.html", [
          "产品页没有写发布日期。正文与 S15908-512Q 相同，仍写 speciﬁcally 和 near IR region。特性紫外灵敏度同样写成 0.09 A/W（λ=250 nm），暗电流 0.03 pA。饱和电荷改成 100 pC。",
          "规格表图像尺寸同样是 25.6 x 2.5 mm，有效像素 1024 x 1，像元 25 x 2500 μm。最高行频 243 行/秒。窗口 Quartz，封装 Ceramic。测量条件与 S15908-512Q 相同。",
          "手册结构表像素数 1024，间距 25 µm，像素高度 2.5 mm，重量与 S15908-512Q 同格写成 3.5 g。功耗典型 8.25 mW。视频线电容典型 32 pF。饱和电荷最小 75 pC、典型 100 pC。起始脉冲周期写成 1026/f(CLK)。",
          "手册有一张光响应非均匀性图只写 S15909-1024Q，对照图标题写成 Previous type (S10124-1024-01)，型号里没有 Q。光源注记写 red LED（λ=635 nm）。暗电流、峰值波长和饱和曝光与 S15908-512Q 同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s838",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S8380 与 S8381：滨松红外增强 NMOS 线阵",
    summary:
      "S8380-128Q、S8380-256Q、S8380-512Q、S8381-256Q、S8381-512Q 与 S8381-1024Q 的产品页都写 NMOS 线阵。规格表类型写成 Current output type（Infrared enhanced type）。光谱响应 200 到 1000 nm。产品页没有写发布日期。手册标题写成 S8380/S8381 series，KMPD1045E03 页脚写 Feb. 2017，并写资料截至 February 2017，记为约 2017 年 2 月。手册写相对标准 NMOS 线阵，红外和软 X 射线区灵敏度更高，峰值波长在近红外，λp=750 nm。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S8380-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8380-128Q.html", [
          "产品页没有写发布日期。标题写 NMOS linear image sensor。正文写相对标准 NMOS 线阵，红外和软 X 射线区灵敏度更高，峰值波长在近红外（λp=750 nm）。λp 那句的句号后面没有空格，直接接 The photodiode。正文用单数 photodiode，并写高度 2.5 mm，按 50 μm 间距排成一行。窗口写成 Quartz glass。",
          "特性写红外和软 X 射线区高灵敏度、感光区宽、紫外灵敏度高且稳定、暗电流低、饱和电荷高、室温下可长时间积分、动态范围宽、线性度和空间均匀性好。功耗写成 Lower power consumption: 1 mW max.。起始脉冲和时钟与 CMOS 逻辑兼容。",
          "规格表类型为 Current output type（Infrared enhanced type）。图像尺寸 6.4 x 2.5 mm，有效像素 128 x 1，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 15600 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 那一格是空的。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写 Vb=2.0 V，Vφ=5.0 V。",
          "手册把 photodiode 写成复数 are arrayed。正文写每种系列有 3 种像素数，different 在行末拆成 differ- 和 ent，随后却列出 128、256、512 和 1024。结构表这一列像素数 128，像素间距 50 µm，像素高度 2.5 mm。封装长度与 S8380-256Q 写在合并格 31.75 mm，22 引脚，窗口 Quartz，重量与 S8380-256Q 合并写成 3.0 g。外形图标题写成 S8380-128Q, S8381-256Q，感光区 6.4 × 2.5，封装长度 31.75 ± 0.3 mm。注记 *3 写可提供光纤面板，但不包括 S8380-128Q 和 S8381-256Q。手册没有把这些光纤面板写成单独型号。",
          "手册光谱响应范围注记写 10 % of peak。峰值波长典型 750 nm。S8380 系列暗电流典型 0.2 pA、最大 0.6 pA。光电二极管电容典型 20 pF。饱和曝光典型 90 mlx · s，单位中间有空格，光源注记写 2856 K, tungsten lamp。饱和电荷典型 50 pC。光响应非均匀性上限 ±3%，注记写饱和的 50%，并除去起始像素和最后一个像素。绝对最大功耗 1 mW，条件 Vɸ=5.0 V。数据率最小 0.1 kHz、最大 2000 kHz。-128 Q 一格的视频延迟典型 80 ns，时钟线电容典型 21 pF，饱和控制栅电容典型 12 pF，视频线电容典型 7 pF。视频延迟注记写用 C7883 驱动电路测量。应用栏写 Multichannel spectrophotometry 和 Image readout system。工作温度 -40 到 +65 ℃，注记写 No dew condensation。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8380-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8380-256Q.html", [
          "产品页没有写发布日期。正文与 S8380-128Q 同一套句子，高度 2.5 mm，间距 50 μm，句号后同样没有空格。特性与功耗 1 mW max. 也相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1，像元 50 x 2500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S8380-128Q 相同。",
          "手册结构表像素数 256。封装长度与 S8380-128Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图标题写成 S8380-256Q, S8381-512Q，感光区 12.8 × 2.5，封装长度仍印 31.75 ± 0.3 mm。感光区结构图把 S8380 系列写成 a=50 μm，b=45 μm。",
          "手册暗电流、饱和电荷、饱和曝光和峰值波长与 S8380 系列同一列。-256 Q 一格的视频延迟典型 120 ns，时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF，视频线电容典型 11 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8380-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8380-512Q.html", [
          "产品页没有写发布日期。正文仍写间距 50 μm、高度 2.5 mm，并仍把 photodiode 写成单数。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1，像元 50 x 2500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 512。封装长度单独写成 40.6 mm，重量单独写成 3.5 g。外形图标题写成 S8380-512Q, S8381-1024Q，感光区 25.6 × 2.5，封装长度 40.6 ± 0.3 mm。引脚图写 Vss, Vsub and NC should be grounded。End of scan 写用 10 kΩ 上拉到 5 V。",
          "手册 -512 Q 一格的视频延迟典型 160 ns，时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF，视频线电容典型 20 pF。时钟高电平最小 4.5 V、典型 5 V、最大 10 V。视频偏置在 ɸ1、ɸ2 幅度为 5 V 时，手册推荐 2 V。推荐条件表把视频偏置典型值写成 Vɸ - 3.0。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8381-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8381-256Q.html", [
          "产品页没有写发布日期。正文把间距写成 25 μm，高度仍是 2.5 mm，photodiode 仍是单数，句号后仍没有空格。特性与 S8380 相同，功耗仍写 1 mW max.。",
          "规格表图像尺寸 6.4 x 2.5 mm，有效像素 256 x 1，像元 25 x 2500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S8380-128Q 相同。",
          "手册写 S8381 系列高度 2.5 mm，间距 25 μm。结构表像素数 256。封装长度与 S8381-512Q 写在合并格 31.75 mm，重量合并写成 3.0 g。外形图与 S8380-128Q 共用，感光区 6.4 × 2.5。注记 *3 把这一型号排除在光纤面板之外。感光区结构图把 S8381 系列写成 a=25 μm，b=20 μm。",
          "手册 S8381 系列暗电流典型 0.1 pA、最大 0.3 pA。光电二极管电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 90 mlx · s。-256 Q 一格的视频延迟典型 100 ns，时钟线电容典型 27 pF，饱和控制栅电容典型 14 pF，视频线电容典型 10 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8381-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8381-512Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm。特性与同系列相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1，像元 25 x 2500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 512。封装长度与 S8381-256Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图与 S8380-256Q 共用，感光区 12.8 × 2.5。",
          "手册暗电流和饱和电荷与 S8381 系列同一列。-512 Q 一格的视频延迟典型 150 ns，时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF，视频线电容典型 16 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S8381-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S8381-1024Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm。手册像素数清单里，1024 只写在 S8381-1024Q。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1，像元 25 x 2500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 3.5 g。外形图与 S8380-512Q 共用，感光区 25.6 × 2.5。光谱图把 S8380/S8381 series 标成 IR high-sensitivity type，对照曲线只写 Standard type，没有给出标准型的型号。",
          "手册 -1024 Q 一格的视频延迟典型 200 ns，时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF，视频线电容典型 30 pF。光响应非均匀性上限 ±3%，与 S8380 系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s390",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S3901 与 S3904：滨松电流输出 NMOS 线阵",
    summary:
      "S3901-128Q、S3901-256Q、S3901-512Q、S3904-256Q、S3904-512Q 与 S3904-1024Q 的产品页写 NMOS 线阵，类型为 Current output type（Standard type），光谱响应 200 到 1000 nm。S3901-1024Q 与 S3904-2048Q 的产品页写感光区长度 51.2 mm，光谱响应同样是 200 到 1000 nm。S3901-256F、S3901-512F、S3904-512F 与 S3904-1024F 的产品页写光纤窗，类型为 Current output type（With FOP），光谱响应 360 到 1000 nm。产品页都没有写发布日期。石英窗短阵列手册 KMPD1036E07 页脚写 May 2024，并写资料截至 May 2024，记为约 2024 年 5 月。光纤窗手册 KMPD1003E06 页脚同样写 May 2024，记为约 2024 年 5 月。长阵列手册 KMPD1049E06 页脚写 Jun. 2024，并写资料截至 June 2024，记为约 2024 年 6 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S3901-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-128Q.html", [
          "产品页没有写发布日期。标题写 NMOS linear image sensor。导语写 Current output, high UV sensitivity, excellent linearity, low power consumption。正文用单数 photodiode，写高度 2.5 mm，按 50 μm 间距排成一行。窗口写成 Quartz glass。",
          "特性写感光区宽、紫外灵敏度高且稳定、暗电流低、饱和电荷高、室温下可长时间积分、动态范围宽、线性度和空间均匀性好。功耗写成 Low power consumption: 1 mW max.。起始脉冲和时钟与 CMOS 逻辑兼容。",
          "规格表类型为 Current output type（Standard type）。图像尺寸 6.4 x 2.5 mm，有效像素 128 x 1，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 15600 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 那一格是空的。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写 Vb=2.0 V，Vφ=5.0 V。",
          "手册标题写成 S3901/S3904 series，KMPD1036E07 页脚写 May 2024，并写资料截至 May 2024，记为约 2024 年 5 月。手册把 photodiode 写成复数 are arrayed。S3901 系列高度 2.5 mm、间距 50 µm，S3904 系列高度 2.5 mm、间距 25 µm。正文写每种系列有 3 种像素数，different 在行末拆成 dif- 和 ferent，随后却列出 128、256、512 和 1024。特性功耗写成 Lower power consumption: 1 mW max.。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表这一列像素数 128。封装长度与 S3901-256Q 写在合并格 31.75 mm，22 引脚，窗口 Quartz，重量与 S3901-256Q 合并写成 3.0 g。注记 *3 写可提供光纤面板，但不包括 S3901-128Q 和 S3904-256Q。手册没有把这些光纤面板写成单独型号。外形图标题写成 S3901-128Q, S3904-256Q, S10111-128Q, S10114-256Q，感光区 6.4 × 2.5。S10111 和 S10114 没有在这张手册里另开型号。感光区结构图把 S3901 系列写成 a=50 µm，b=45 µm。",
          "手册光谱响应范围注记写 10% of peak。峰值波长典型 600 nm。S3901 系列暗电流典型 0.2 pA、最大 0.6 pA。光电二极管电容典型 20 pF。饱和曝光典型 180 mlx · s，单位中间有空格，光源注记写 2856 K, tungsten lamp。饱和电荷典型 50 pC。光响应非均匀性上限 ±3%，注记写饱和的 50%，并除去起始像素和最后一个像素。绝对最大功耗 1 mW，条件 Vɸ=5.0 V。工作温度 -40 到 +65 ℃，注记 *2 写 No dew condensation。贮存温度 -40 到 +85 ℃。数据率最小 0.1 kHz、最大 2000 kHz。-128 Q 一格的时钟线电容典型 21 pF，饱和控制栅电容典型 12 pF，视频线电容典型 7 pF。这张电气特性表没有把视频延迟写成一行。手册写 ɸ1、ɸ2 幅度为 5 V 时，视频偏置推荐 2 V。End of scan 写用 10 kΩ 上拉到 5 V。引脚图标题写成 S3901/S3902/S3903/S3904/S8380/S8381 series。时序图标题写成 S3901/S3902/S3903/S3904 series。S3902 和 S3903 不从这张图的标题另开型号。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3901-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-256Q.html", [
          "产品页没有写发布日期。正文与 S3901-128Q 同一套句子，高度 2.5 mm，间距 50 μm，photodiode 仍是单数。特性与功耗 Low power consumption: 1 mW max. 也相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1，像元 50 x 2500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S3901-128Q 相同。",
          "手册结构表像素数 256。封装长度与 S3901-128Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图标题写成 S3901-256Q, S3904-512Q, S3921-256Q, S3924-512Q, S10111-256Q, S10114-512Q，感光区 12.8 × 2.5，封装长度仍印 31.75 ± 0.3 mm。S3921、S3924、S10111 和 S10114 没有在这张手册里另开型号。",
          "手册暗电流、饱和电荷、饱和曝光和峰值波长与 S3901 系列同一列。-256 Q 一格的时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF，视频线电容典型 11 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3901-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-512Q.html", [
          "产品页没有写发布日期。正文仍写间距 50 μm、高度 2.5 mm，并仍把 photodiode 写成单数。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1，像元 50 x 2500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件把饱和电荷印成 Saturation charge:Vb=2.0 V，冒号后面没有空格。",
          "手册结构表像素数 512。封装长度单独写成 40.6 mm，重量单独写成 3.5 g。外形图标题写成 S3901-512Q, S3904-1024Q, S3921-512Q, S3924-1024Q, S10111-512Q, S10114-1024Q，感光区 25.6 × 2.5，封装长度 40.6 ± 0.3 mm。",
          "手册 -512 Q 一格的时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF，视频线电容典型 20 pF。时钟高电平最小 4.5 V、典型 5 V、最大 10 V。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-256Q.html", [
          "产品页没有写发布日期。正文把间距写成 25 μm，高度仍是 2.5 mm，photodiode 仍是单数，句子写成 has a height of 2.5 mm but is arrayed。特性与 S3901-128Q 相同，功耗仍写 Low power consumption: 1 mW max.。",
          "规格表图像尺寸 6.4 x 2.5 mm，有效像素 256 x 1，像元 25 x 2500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S3901-128Q 相同。",
          "手册写 S3904 系列高度 2.5 mm，间距 25 µm。结构表像素数 256。封装长度与 S3904-512Q 写在合并格 31.75 mm，重量合并写成 3.0 g。外形图与 S3901-128Q 共用，感光区 6.4 × 2.5。注记 *3 把这一型号排除在光纤面板之外。感光区结构图把 S3904 系列写成 a=25 µm，b=20 µm。",
          "手册 S3904 系列暗电流典型 0.1 pA、最大 0.3 pA。光电二极管电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 180 mlx · s。-256 Q 一格的时钟线电容典型 27 pF，饱和控制栅电容典型 14 pF，视频线电容典型 10 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-512Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm，并保留 but is arrayed。特性与同系列相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1，像元 25 x 2500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 512。封装长度与 S3904-256Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图与 S3901-256Q 共用，感光区 12.8 × 2.5。",
          "手册暗电流和饱和电荷与 S3904 系列同一列。-512 Q 一格的时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF，视频线电容典型 16 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-1024Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm，并保留 but is arrayed。手册像素数清单里，这一张短阵列表的 1024 只写在 S3904-1024Q。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1，像元 25 x 2500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 3.5 g。外形图与 S3901-512Q 共用，感光区 25.6 × 2.5。光谱图把曲线标成 S3901 series 和 S3904 series。",
          "手册 -1024 Q 一格的时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF，视频线电容典型 30 pF。光响应非均匀性上限 ±3%，与 S3901 系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3901-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-1024Q.html", [
          "产品页没有写发布日期。正文用复数 photodiodes，写高度 2.5 mm，间距 50 μm。窗口写成 Quartz glass。特性第一行写成 Large active area, long detection length。暗电流一行写成 large saturation charge，积分时间写成 long integration time，前面没有 a。功耗写成 Low power consumption: 1 mW max.。",
          "规格表类型为 Current output type（Standard type）。图像尺寸 51.2 x 2.5 mm，有效像素 1024 x 1，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。规格表没有 Dedicated driver circuit 这一行。测量条件与短阵列相同。",
          "手册标题写成 S3901-1024Q S3904-2048Q，KMPD1049E06 页脚写 Jun. 2024，并写资料截至 June 2024，记为约 2024 年 6 月。手册写感光区长度 51.2 mm，并写两种像素数 1024 和 2048。特性功耗写成 Low power consumption: 1 mW max.。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表像素数 1024。封装长度与 S3904-2048Q 写在合并格 65.0 mm。引脚数那一行的表头写成 Number of pin，数值 22。窗口 Quartz。重量与 S3904-2048Q 合并写成 8.5 g。注记 *3 写可提供光纤面板，没有给出单独型号。峰值波长典型 600 nm。暗电流典型 0.2 pA、最大 0.6 pA。电容典型 20 pF。饱和曝光典型 180 mlx ∙ s。饱和电荷典型 50 pC。光响应非均匀性上限 ±3%。工作温度注记写 No condensation。数据率最小 0.1 kHz、最大 2000 kHz。视频延迟典型 200 ns，注记写饱和的 50%。时钟线电容典型 134 pF，饱和控制栅电容典型 63 pF，视频线电容典型 45 pF。引脚说明写 ɸ1、ɸ2 幅度为 5 V 时，视频偏置推荐 2 V。End of scan 写用 10 kΩ 上拉到 5 V。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-2048Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-2048Q.html", [
          "产品页没有写发布日期。正文用复数 photodiodes，写高度 2.5 mm，间距 25 μm。特性与 S3901-1024Q 相同，功耗仍写 Low power consumption: 1 mW max.。",
          "规格表图像尺寸 51.2 x 2.5 mm，有效像素 2048 x 1，像元 25 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 975 行/秒。无制冷，窗口 Quartz，封装 Ceramic。规格表没有 Dedicated driver circuit 这一行。",
          "手册结构表像素数 2048。封装长度、引脚数和重量与 S3901-1024Q 同在合并格，长度 65.0 mm，重量 8.5 g。暗电流典型 0.1 pA、最大 0.3 pA。电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 180 mlx ∙ s。",
          "手册视频延迟典型 250 ns。时钟线电容典型 200 pF，饱和控制栅电容典型 87 pF，视频线电容典型 60 pF。光响应非均匀性上限 ±3%。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3901-256F", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-256F.html", [
          "产品页没有写发布日期。导语写 NMOS linear image sensors with fiber optic windows。正文写 high sensitivity，没有写 high UV sensitivity。型号句写成 a current-output type NMOS linear image sensor with a fiber optic window，window 用单数。下一句写光纤窗便于耦合到像增强器一类的成像器件，适合低照度检测。photodiode 用单数，高度 2.5 mm，间距 50 μm。",
          "特性没有紫外灵敏度一行。功耗写成 Lower power consumption: 1 mW max.。其余写感光区宽、暗电流低、饱和电荷高、室温下可长时间积分、动态范围宽、线性度和空间均匀性好，起始脉冲和时钟与 CMOS 逻辑兼容。",
          "规格表类型为 Current output type（With FOP）。图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1，像元 50 x 2500 μm。光谱响应 360 到 1000 nm。最高行频 7800 行/秒。无制冷，窗口 Fiber optic plate，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写 Vb=2.0 V，Vφ=5.0 V。",
          "手册标题写成 S3901/S3904-F series，KMPD1003E06 页脚写 May 2024，并写资料截至 May 2024，记为约 2024 年 5 月。手册写 fiber optic windows，复数。正文写每种系列有 2 种像素数，different 在行末拆成 dif- 和 ferent，随后却列出 256、512 和 1024。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表像素数 256。封装长度 31.75 mm，22 引脚，窗口 Fiber optic plate，重量 8.0 g。峰值波长典型 600 nm。暗电流典型 0.2 pA、最大 0.6 pA。电容典型 20 pF。饱和曝光典型 200 Mlx · s，M 是大写。饱和电荷典型 50 pC。光响应非均匀性上限 ±5%。工作温度注记写 No condensation。数据率最小 0.1 kHz、最大 2000 kHz。视频延迟典型 120 ns，注记写饱和的 50%，并用 C7883 驱动电路测量。时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF，视频线电容符号写成 CV，典型 11 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3901-512F", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3901-512F.html", [
          "产品页没有写发布日期。正文与 S3901-256F 同一套句子，光纤窗用单数，photodiode 用单数，高度 2.5 mm，间距 50 μm。特性功耗仍写 Lower power consumption: 1 mW max.。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1，像元 50 x 2500 μm。光谱响应 360 到 1000 nm。最高行频 3900 行/秒。无制冷，窗口 Fiber optic plate，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 512。封装长度 40.6 mm，重量 10.0 g。暗电流、饱和电荷和饱和曝光与 S3901-F 系列同一列。",
          "手册视频延迟典型 160 ns。时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF，视频线电容典型 20 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-512F", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-512F.html", [
          "产品页没有写发布日期。正文写光纤窗，photodiode 用单数，高度 2.5 mm，并写 is arrayed in a row at a spacing of 25 μm。特性与 S3901-256F 相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1，像元 25 x 2500 μm。光谱响应 360 到 1000 nm。最高行频 3900 行/秒。无制冷，窗口 Fiber optic plate，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册写 S3904-F 系列高度 2.5 mm，间距 25 µm。结构表像素数 512。封装长度 31.75 mm，重量 8.0 g。暗电流典型 0.1 pA、最大 0.3 pA。电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 200 Mlx · s。",
          "手册视频延迟典型 150 ns。时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF，视频线电容典型 16 pF。光响应非均匀性上限 ±5%。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3904-1024F", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3904-1024F.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm，并写 is arrayed in a row。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1，像元 25 x 2500 μm。光谱响应 360 到 1000 nm。最高行频 1950 行/秒。无制冷，窗口 Fiber optic plate，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 10.0 g。暗电流和饱和电荷与 S3904-F 系列同一列。",
          "手册视频延迟典型 200 ns。时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF，视频线电容典型 30 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s3902",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S3902 与 S3903：滨松电流输出 NMOS 线阵",
    summary:
      "S3902-128Q、S3902-256Q、S3902-512Q、S3903-256Q、S3903-512Q 与 S3903-1024Q 的产品页写 NMOS 线阵，类型为 Current output type（Standard type），光谱响应 200 到 1000 nm。导语写 Current output, high UV sensitivity, excellent linearity, low power consumption。产品页都没有写发布日期。手册 KMPD1043E06 页脚写 May 2024，并写资料截至 May 2024，记为约 2024 年 5 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S3902-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3902-128Q.html", [
          "产品页没有写发布日期。标题写 NMOS linear image sensor。导语写 Current output, high UV sensitivity, excellent linearity, low power consumption。正文用单数 photodiode，写高度 0.5 mm，按 50 μm 间距排成一行。窗口写成 Quartz glass。",
          "特性写感光区宽、紫外灵敏度高且稳定、暗电流低、饱和电荷高、室温下可长时间积分、动态范围宽、线性度和空间均匀性好。功耗写成 Low power consumption: 1 mW max.。起始脉冲和时钟与 CMOS 逻辑兼容。正文还写低照度下仍有高信噪比，扫描电路易于使用。",
          "规格表类型为 Current output type（Standard type）。图像尺寸 6.4 x 0.5 mm，有效像素 128 x 1，像元 50 x 500 μm。光谱响应 200 到 1000 nm。最高行频 15600 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 那一格是空的。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写成 Saturation charge: Vb=2.0 V，冒号后面有空格，Vφ=5.0 V。",
          "手册标题写成 S3902/S3903 series，KMPD1043E06 页脚写 May 2024，并写资料截至 May 2024，记为约 2024 年 5 月。手册把 photodiode 写成复数 are arrayed。S3902 系列高度 0.5 mm、间距 50 µm，S3903 系列高度 0.5 mm，并写 but are arrayed，间距 25 µm。正文写每种系列有 3 种像素数，different 在行末拆成 dif- 和 ferent，随后却列出 128（S3902-128Q）、256（S3902-256Q、S3903-256Q）、512（S3902-512Q、S3903-512Q）和 1024（S3903-1024Q）。特性功耗写成 Lower power consumption: 1 mW max.。Pixel pitch 的 50 在行末拆开，先印 5，下一行才是 0 µm (S3902 series)。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表这一列像素数 128。封装长度与 S3902-256Q 写在合并格 31.75 mm，表头写成 Number of pin，数值与整个 S3902 系列合并为 22。窗口 Quartz。重量与 S3902-256Q 合并写成 3.0 g。外形图标题写成 S3902-128Q, S3903-256Q, S3922-128Q, S3923-256Q，感光区 6.4 × 0.5，封装长度印 31.75。光学距离标注 1.3 ± 0.2，注记写从石英窗外表面到芯片表面。S3922 和 S3923 不从这张图的标题另开型号。感光区结构图把 S3902 系列写成 a=50 µm，b=45 µm。",
          "手册光谱响应范围注记写 10% of peak。峰值波长典型 600 nm。S3902 系列暗电流典型 0.08 pA、最大 0.15 pA。光电二极管电容典型 4 pF。饱和曝光典型 180 mlx · s，单位中间有空格，光源注记写 2856 K, tungsten lamp。饱和电荷典型 10 pC。光响应非均匀性上限 ±3%，注记写饱和的 50%，并除去起始像素和最后一个像素。绝对最大功耗 1 mW，条件 Vɸ=5.0 V。工作温度 -40 到 +65 ℃，注记 *2 写 No condensation。贮存温度 -40 到 +85 ℃。数据率最小 0.1 kHz、最大 2000 kHz。手册写视频数据率等于时钟频率，因为视频在 ɸ2 上升沿同步读出。这张电气特性表没有把视频延迟写成一行。-128 Q 一格的时钟线电容典型 21 pF，饱和控制栅电容典型 12 pF，视频线电容符号写成 CV，典型 7 pF。手册写 ɸ1、ɸ2 幅度为 5 V 时，视频偏置推荐 2 V。End of scan 写用 10 kΩ 上拉到 5 V。手册写这一系列不需要直流电源，Vss、Vsub 和全部 NC 应接地。全复位脉冲宽度写长于 5 µs。等效电路标题写成 S3901/S3902/S3903/S3904 series。引脚图标题写成 S3901/S3902/S3903/S3904/S8380/S8381 series。时序图标题写成 S3901/S3902/S3903/S3904 series。这些名称不从这张图的标题另开型号。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3902-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3902-256Q.html", [
          "产品页没有写发布日期。正文与 S3902-128Q 同一套句子，高度 0.5 mm，间距 50 μm，photodiode 仍是单数，并写 is arrayed in a row。特性与功耗 Low power consumption: 1 mW max. 也相同。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 256 x 1，像元 50 x 500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S3902-128Q 相同，饱和电荷冒号后面有空格。",
          "手册结构表像素数 256。封装长度与 S3902-128Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图标题写成 S3902-256Q, S3903-512Q, S3922-256Q, S3923-512Q，感光区 12.8 × 0.5，封装长度仍印 31.75。S3922 和 S3923 不从这张图的标题另开型号。",
          "手册暗电流、饱和电荷、饱和曝光和峰值波长与 S3902 系列同一列。-256 Q 一格的时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF，视频线电容典型 11 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3902-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3902-512Q.html", [
          "产品页没有写发布日期。正文仍写间距 50 μm、高度 0.5 mm，并仍把 photodiode 写成单数，句子里有 in a row。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 512 x 1，像元 50 x 500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件把饱和电荷写成 Saturation charge: Vb=2.0 V，冒号后面有空格。",
          "手册结构表像素数 512。封装长度单独写成 40.6 mm，重量单独写成 3.5 g。外形图标题写成 S3902-512Q, S3903-1024Q, S3922-512Q, S3923-1024Q，感光区 25.6 × 0.5，封装长度 40.6。",
          "手册 -512 Q 一格的时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF，视频线电容典型 20 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3903-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3903-256Q.html", [
          "产品页没有写发布日期。正文把间距写成 25 μm，高度仍是 0.5 mm，photodiode 仍是单数，句子写成 is arrayed at a spacing，没有写 but，也没有写 in a row。特性与 S3902-128Q 相同，功耗仍写 Low power consumption: 1 mW max.。",
          "规格表图像尺寸 6.4 x 0.5 mm，有效像素 256 x 1，像元 25 x 500 μm。最高行频 7800 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。测量条件与 S3902-128Q 相同。",
          "手册写 S3903 系列高度 0.5 mm，并写 but are arrayed，间距 25 µm。结构表像素数 256。封装长度与 S3903-512Q 写在合并格 31.75 mm，重量合并写成 3.0 g。外形图与 S3902-128Q 共用，感光区 6.4 × 0.5。感光区结构图把 S3903 系列写成 a=25 µm，b=20 µm。",
          "手册 S3903 系列暗电流典型 0.04 pA、最大 0.08 pA。光电二极管电容典型 2 pF。饱和电荷典型 5 pC。饱和曝光仍是 180 mlx · s。-256 Q 一格的时钟线电容典型 27 pF，饱和控制栅电容典型 12 pF，视频线电容典型 10 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3903-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3903-512Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 0.5 mm，并写 is arrayed at a spacing，没有写 but。特性与同系列相同。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 512 x 1，像元 25 x 500 μm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 512。封装长度与 S3903-256Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图与 S3902-256Q 共用，感光区 12.8 × 0.5。",
          "手册暗电流和饱和电荷与 S3903 系列同一列。-512 Q 一格的时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF，视频线电容典型 16 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3903-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3903-1024Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 0.5 mm，并写 is arrayed at a spacing。手册像素数清单里，1024 只写在 S3903-1024Q。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 1024 x 1，像元 25 x 500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 一格是空的。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 3.5 g。外形图与 S3902-512Q 共用，感光区 25.6 × 0.5。光谱图标题写成 Spectral response (NMOS linear image sensor: standard type)。",
          "手册 -1024 Q 一格的时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF，视频线电容典型 30 pF。光响应非均匀性上限 ±3%，与 S3902 系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s14290",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14290：滨松高速背照式 CCD 线阵",
    summary:
      "S14290 的产品页写背照式 CCD 线阵，多端口读出，最高行频 30 kHz，并写纵向长像素。光谱响应 320 到 1100 nm。正文写近红外灵敏度高，适合 raman spectroscopy 和 OCT，raman 以小写印在产品页上。产品页没有写发布日期。手册 KMPD1232E02 页脚写 May 2022，并写资料截至 May 2022，记为约 2022 年 5 月。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S14290", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S14290.html", [
          "产品页没有写发布日期。标题写 Back-thinned type CCD linear image sensor。正文写最高行频 30 kHz，多端口读出，每端口最高 10 MHz，并写适合光谱仪的纵向长像素。特性只列 High-speed line rate: 30 kHz max.。",
          "规格表类型为 High-speed type。图像尺寸 24.576 x 0.500 mm，有效像素 1024 x 1，像元 24 x 500 μm。光谱响应 320 到 1100 nm。行频典型 10000 行/秒，最高 30000 行/秒。暗电流典型 120000 e-/pixel/s。读出噪声典型 100 e- rms。无制冷，窗口 Borosilicate glass，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，operating conditions: Typ.。",
          "手册结构表总像素 1056 × 1，有效像素 1024 × 1，像元 24 × 500 µm，图像尺寸 24.576 × 0.500 mm。水平时钟两相。输出电路写成 Two-stage MOSFET source follower。封装写成 54-pin ceramic DIP。窗口 Borosilicate glass，注记 *1 写 Resin sealing。注记 *2 把 Window-less 拆成行首的 W 和下一行的 indow-less，并写可按要求提供无窗型 S14290N 和石英窗型 S14290Q。无窗型写临时窗用胶带固定。这两款没有单独的产品页，这里不另开型号。注记 *14 把这两款的光谱响应写成 200 到 1100 nm。",
          "手册信号输出频率典型 5 MHz、最大 10 MHz。行频典型 10 kHz、最大 30 kHz。满阱最小 400 ke-、典型 500 ke-。转换效率最小 4 µV/e-、典型 5 µV/e-、最大 6 µV/e-。暗电流一行写成典型 120 ke-/pixel/s、最大 600 ke-/pixel/s，下一行写成典型 80 pA/cm2、最大 400 pA/cm2。产品页只列出 120000 e-/pixel/s。读出噪声典型 100 e- rms、最大 150 e- rms。注记 *12 把 output 印成 outoput，条件写 Signal outoput frequency=10 MHz。动态范围最小 2600、典型 5000。注记 *13 写 Dynamic range=Full well capacity/Readout noise。光响应非均匀性典型 ±3%、最大 ±10%。图像滞后典型 10%、最大 20%。电荷转移效率最小 0.99995、典型 0.99999。",
          "手册片上放大器加负载电阻的功耗典型 75 mW，这一格没有写最大。阻性栅功耗最小 0.6 mW、典型 3.1 mW、最大 6.3 mW。阻性栅电阻典型 1.5 kΩ。引脚表列出 OS1 到 OS8。器件结构标题有一行把 structure 印成 stracture。结构图标着 128 pixels、4-blank，以及 OS1、OS2、OS7、OS8。时序图印着 D1 到 D4 和像素 1 到 128。外形图重量 3.5 g，折射率一栏 S14290 为 1.52、S14290Q 为 1.45，AR coat 写成 none。积分时间最小 33 µs、典型 66 µs。工作温度 -50 到 +50 ℃，注记写 Package temperature。贮存温度 -50 到 +70 ℃。焊接温度 260 °C max.（5 seconds or less），并写至少离开引脚根部 2 mm。注意事项写 Handle these sensors with bare hands or wearing cotton gloves。另有一段写紫外照射可能使特性变差。光谱响应图标题写 without window。应用栏写 OCT（optical coherence tomography）和 Spectrophotometry。绝对最大额定值注记指向阻性栅 CCD 的技术资料，规格数字来自产品页和 KMPD1232E02。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s13499",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13499：滨松近红外 CMOS 面阵",
    summary:
      "产品页写近红外高灵敏度的 APS 型 CMOS 面阵，格式 VGA。光谱响应 400 到 1100 nm。卷帘快门与全局快门可选。产品页没有写发布日期。手册 KMPD1190E02 页脚写 Apr. 2020，并写资料截至 April 2020，记为约 2020 年 4 月。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral", "global", "lowlight"],
    models: [
      page("S13499", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/area-sensor/for-camera/S13499.html", [
        "产品页没有写发布日期。659×494，像元 9.9×9.9 μm。图像尺寸 6.524×4.891 mm。光谱响应 400 到 1100 nm。最高 75 帧/秒。无制冷，封装陶瓷。窗口一栏写成 Broslicate glass。",
        "特性写读出噪声 5e- rms，条件为卷帘快门、列放大器 8 倍增益。单 3.3 V 供电。全数字输入输出，内置时序发生器、偏置发生器、放大器和 A/D 转换器。SPI 可做部分读出、增益切换和帧起始模式选择。",
        "手册结构表写总像素 704×539，有效像素 659×494，窗口材料写成 Borosilicate glass。约 2026 年 6 月的选型指南把这一行标成 Front-illuminated type，帧频 75 帧/秒。",
        "手册应用栏写近红外激光光斑检测，括注位置检测和图案识别；另一项写近红外图像检测，括注晶圆透射图像和静脉认证。",
      ], "nir"),
    ],
  },
  {
    id: "s14250",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14250：滨松少像素近红外 CMOS 面阵",
    summary:
      "产品页写近红外高灵敏度、像素少、功耗低的 APS 型 CMOS 面阵。30×30 像素，像元 50×50 μm，光谱响应 400 到 1100 nm。特性写全局快门。产品页没有写发布日期。手册 KMPD1194E06 页脚写 Aug. 2025，并写资料截至 August 2025，记为约 2025 年 8 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global", "lowlight"],
    models: [
      page("S14250", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/area-sensor/for-camera/S14250.html", [
        "产品页没有写发布日期。有效像素 30×30，像元 50×50 μm。图像尺寸 1.5×1.5 mm。光谱响应 400 到 1100 nm。最高 344 帧/秒。无制冷，封装陶瓷。窗口一栏写成 Broslicate glass。",
        "正文写像元大，低照度下仍可采集；像素少，因此全部像素最高 344 帧/秒读出，部分读出还可以再减少像素。单 3.3 V 供电。成像时功耗约 30 mW，关断功能下待机不高于 0.7 mW。",
        "手册结构表写总像素 32×32，有效像素 30×30，窗口材料写成 Borosilicate glass。选型指南把帧频写成 344 帧/秒。",
        "手册应用栏写安防相机，括注夜视和运动物体检测；另一项写监控相机，括注低分辨率以兼顾隐私。",
      ], "nir"),
    ],
  },
  {
    id: "s14501",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14501：滨松背照式可见到近红外 CMOS 面阵",
    summary:
      "产品页写背照式 APS，可见到近红外高灵敏度，格式 SXGA。光谱响应 400 到 1100 nm。卷帘快门与全局快门可选。产品页没有写发布日期。手册 KMPD1217E05 页脚写 Oct. 2022，并写资料截至 October 2022，记为约 2022 年 10 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global", "lowlight"],
    models: [
      page("S14501", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/area-sensor/for-camera/S14501.html", [
        "产品页没有写发布日期。1280×1024，像元 7.4×7.4 μm。图像尺寸 9.472×7.578 mm。光谱响应 400 到 1100 nm。最高 146 帧/秒。无制冷，封装陶瓷。窗口一栏写成 Broslicate glass。",
        "全数字输入输出，内置时序发生器、偏置发生器、放大器和 A/D 转换器。垂直方向读出行数可变。SPI 可做部分读出、增益切换和帧起始模式选择。",
        "手册结构表写总像素 1280×1064，有效像素 1280×1024，窗口材料写成 Borosilicate glass。1024 行时，高分辨率模式的帧频是全局快门 28 帧/秒、卷帘快门 29 帧/秒；高速模式是全局快门 140 帧/秒、卷帘快门 146 帧/秒。高分辨率模式写 12-bit，高速模式写 9.4-bit resolution（数据宽度 10-bit）。主时钟条件都写 f(MCLK)=30 MHz。",
        "手册应用栏写机器视觉、追踪、安防（红外相机），以及红外光斑的位置和形状识别。选型指南把这一行标成 Back-illuminated type。",
      ], "nir"),
    ],
  },
  {
    id: "s16101",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16101：滨松背照式紫外 CMOS 面阵",
    summary:
      "产品页写背照式 APS，紫外高灵敏度，格式 SXGA。光谱响应 245 到 1100 nm。卷帘快门与全局快门可选。产品页没有写发布日期。手册 KMPD1237E02 页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral", "global"],
    models: [
      page("S16101", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/area-sensor/for-camera/S16101.html", [
        "产品页没有写发布日期。1280×1024，像元 7.4×7.4 μm。图像尺寸 9.472×7.578 mm。光谱响应 245 到 1100 nm。最高 146 帧/秒。无制冷，窗口为石英玻璃，封装陶瓷。",
        "特性第一行拼成 High UV sensitivy，下一行写紫外光照下特性稳定。正文写垂直方向可做高速部分读出。全数字输入输出，内置时序发生器、偏置发生器、放大器和 A/D 转换器。",
        "手册特性把同一行写成 High UV sensitivity，并另写最高读出 146 帧/秒。结构表写总像素 1280×1064，有效像素 1280×1024。1024 行时，高分辨率模式的帧频是全局快门 28 帧/秒、卷帘快门 29 帧/秒；高速模式是全局快门 140 帧/秒、卷帘快门 146 帧/秒。高分辨率模式写 12-bit，高速模式写 9.4-bit resolution（数据宽度 10-bit）。",
        "手册应用栏写紫外相机、机器视觉和追踪。选型指南写光谱响应 245 到 1100 nm，并标成 Back-illuminated type，帧频 146 帧/秒。",
      ], "uv"),
    ],
  },
  {
    id: "s17122",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S17122：滨松高速数字 CMOS 线阵",
    summary:
      "工业用线阵索引把 S17122 标成新。产品页写最高 80 MHz 读出、数字输出，并写可做像素合并。光谱响应 400 到 1000 nm。产品页没有写发布日期，也没有给出手册。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S17122", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S17122.html", [
        "产品页没有写发布日期。正文写最高读出 80 MHz、最高行频 61 kHz。内置时序发生器、偏置发生器和 12-bit A/D 转换器，数字输入输出。做像素合并时，像元按 14 μm × 200 μm、有效像素按 1024 使用，信号电平提高，数据传输时间缩短。",
        "特性写像元 7 μm × 200 μm，像素数 2048，有效感光区长度 14.336 mm，最高读出 61 kHz，并写排有用于光学位置对准的像素。单 3.3 V 供电。SPI 一行括注写成 bining function, partial readout, offset adjustment。正文里的合并一词写成 binning。索引短句也写成 binning function。页末写 Please contact us for more details。",
        "规格表类型为高速读出，图像尺寸 14.336 x 0.2 mm，有效像素 2048 x 1，像元 7 x 200 μm。光谱响应 400 到 1000 nm。最高行频 61000 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写读出全部 2048 像素时的行频。",
      ], "nir"),
    ],
  },
  {
    id: "s15611",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S15611：滨松 40 MHz 数字 CMOS 线阵",
    summary:
      "S15611、S15611-10 与 S15611W 的产品页都写最高 40 MHz 读出、最高行频 34 kHz，1024 像素，像元 7 × 200 μm，光谱响应 400 到 1000 nm。S15611-10 写光谱响应比前代 S15611 更平滑。S15611W 写 CSP。产品页都没有写发布日期。工业用线阵索引把 S15611W 标成新。手册 KMPD1221E10 封面也在 S15611W 上方印 NEW，并写资料截至 September 2026，记为约 2026 年 9 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S15611", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S15611.html", [
        "产品页没有写发布日期。1024 像素，像元 7 × 200 μm，有效感光区长度 7.168 mm。最高读出 40 MHz。各像素同时积分，积分时间可变，括注电子快门。单 3.3 V 供电。SPI 可做部分读出和偏置调整。内置 12-bit A/D 转换器。",
        "规格表图像尺寸 7.168 x 0.2 mm，有效像素 1024 x 1，最高行频 34000 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写读出全部 1024 像素时的行频。",
        "手册 KMPD1221E10 与 S15611W 合订，页脚写 Cat. No. KMPD1221E10，资料截至 September 2026，记为约 2026 年 9 月。特性把封装分成两行：S15611 为 Ceramic，S15611W 为 Borosilicate glass + Si substrate。结构表窗口一栏在 S15611 下写成 Borosilicate glass。应用栏写编码器、位置检测和机器视觉。",
        "手册供电电流典型 120 mA、最大 150 mA，条件 f(MCLK)=40 MHz。光灵敏度符号写成 S，700 nm 时典型 0.38 A/W，另一行典型 3300 DN/(nJ/cm2)。转换效率典型 50 µV/e-。暗输出典型 1.2 mV、2.5 DN。饱和电荷典型 34 ke-。读出噪声典型 0.63 mV rms、1.3 DN rms。",
      ], "nir"),
      page("S15611-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S15611-10.html", [
        "产品页没有写发布日期。正文写光谱响应比前代 S15611 更平滑，并写这是 COB（chip on board），封装紧凑，厚度 0.7 mm。像素、行频、同时积分、电子快门、3.3 V、SPI 和 12-bit A/D 与 S15611 的产品页相同。",
        "规格表图像尺寸写成 7.168 × 0.2 mm，有效像素 1024 x 1，最高行频 34000 行/秒。无制冷。窗口材料写成 Silicone resin，封装 Glass epoxy。测量条件同样是读出全部 1024 像素。",
        "手册 KMPD1257E04 页脚写 Nov. 2024，并写资料截至 November 2024，记为约 2024 年 11 月。结构表封装为 Glass epoxy，密封材料写成 Silicone resin，没有单独的窗口一行。应用栏写编码器、位置检测和机器视觉。",
        "手册供电电流典型 120 mA、最大 150 mA，条件写 f(MCLK)=40 MHz 的普通模式，并写行频降低时可降低功耗。峰值波长典型 700 nm。光灵敏度典型 980 V/(lx∙s) 与 2000 k DN/(lx∙s)，注记 *6 写 2856 K 钨灯。转换效率典型 40 µV/e-。饱和电荷典型 43 ke-。读出噪声典型 0.63 mV rms、1.3 DN rms。",
      ], "nir"),
      page("S15611W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S15611W.html", [
        "产品页没有写发布日期。工业用线阵索引把它标成新。正文写 CSP（chip size package），因此封装紧凑且薄。像素、40 MHz、34 kHz、同时积分、电子快门、3.3 V、SPI 和 12-bit A/D 与 S15611 的产品页相同。",
        "规格表图像尺寸 7.168 x 0.2 mm，有效像素 1024 x 1，最高行频 34000 行/秒。无制冷。窗口写成 Broslicate glass。封装写成 Borosilicate glass + Si substrate。产品页给出的手册仍是与 S15611 合订的 KMPD1221E10。",
        "手册封面在型号 S15611W 上方印 NEW，结构表表头写成 S15611W NEW。封装一行写成 Borosilicate glass + Si substrate。绝对最大额定的注记把 JEDEC 拼成 FJEDEC J-STD-020 MSL 2, see P17。",
        "手册暗输出与 S15611 分开写：S15611W 典型 3.6 mV、7.5 DN。供电电流、转换效率 50 µV/e-、饱和电荷和读出噪声与 S15611 同一张表。应用栏同样写编码器、位置检测和机器视觉。",
      ], "nir"),
    ],
  },
  {
    id: "s13774",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13774：滨松 100 klines/s CMOS 线阵",
    summary:
      "产品页写面向需要高速扫描的工业相机，列并行读出，最高 100 klines/s。4096 像素，像元 7 × 7 μm，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1184E06 页脚写 Sep. 2022，并写资料截至 September 2022，记为约 2022 年 9 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S13774", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13774.html", [
        "产品页没有写发布日期。每个像素有读出放大器和 A/D 转换器。A/D 可选 10-bit，高速模式最高 100 klines/s；或 12-bit，低速模式最高 25 klines/s。图像数据以 180 MHz LVDS 串行输出。",
        "特性写像元 7 × 7 μm，像素数 4096，各像素同时积分，3.3 V 供电，SPI，内置 10-bit/12-bit A/D 转换器。规格表图像尺寸 28.672 × 0.007 mm，有效像素 4096 x 1，最高行频 100000 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写高速模式的行频。",
        "手册结构表写有效感光区长度 28.672 mm，窗口材料写成 Borosilicate glass，并写 400 到 800 nm 的增透膜反射率不大于 1%。应用栏写机器视觉、胶片检查、印制电路板外观检查和印刷检查。",
        "手册主时钟典型 30 MHz。高速模式行频在 tpi(MST)=300/f(MCLK) 时为 100 klines/s，低速模式在 tpi(MST)=1200/f(MCLK) 时为 25 klines/s。供电电流在 LR=100 klines/s 时，Vdd(A) 典型 140 mA，Vdd(D) 典型 400 mA，Vdd(C) 典型 810 mA，注记写饱和曝光光进入时。",
      ], "nir"),
    ],
  },
  {
    id: "s14772",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14772：滨松 125 klines/s CMOS 线阵",
    summary:
      "产品页写面向需要高速扫描的工业相机，列并行读出，最高 125 klines/s。2048 像素，像元 14 × 14 μm，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1202E03 页脚写 Sep. 2022，并写资料截至 September 2022，记为约 2022 年 9 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S14772", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14772.html", [
        "产品页没有写发布日期。正文把 readout amplifier 印成 readout ampliﬁer。A/D 可选 10-bit，高速模式最高 125 klines/s；或 11-bit，低速模式最高 62.5 klines/s。视频信号以 225 MHz LVDS 串行输出。",
        "特性写像元 14 × 14 μm，像素数 2048，各像素同时积分，3.3 V 供电，SPI，内置 10-bit/11-bit A/D 转换器。规格表图像尺寸 28.672 × 0.014 mm，有效像素 2048 x 1，最高行频 125000 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写高速模式的行频。",
        "手册结构表窗口材料写成 Borosilicate glass。应用栏写机器视觉、胶片检查、印制电路板外观检查和印刷检查。主时钟典型 37.5 MHz，范围 36.5 到 38.5 MHz。",
        "手册供电电流在 f(MCLK)=37.5 MHz、LR=125 klines/s 时，Vdd(A) 典型 90 mA，Vdd(D) 典型 280 mA，Vdd(C) 典型 510 mA，注记写饱和曝光光进入时。A/D 转换电压范围写成 0 to 1.3 V。高速模式注记写从偏置输出到饱和输出约 1024 DN，低速模式约 2048 DN。",
      ], "nir"),
    ],
  },
  {
    id: "s1481",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14810 与 S14813：滨松 TDI-CCD 线阵",
    summary:
      "S14810 与 S14813 的产品页都写 TDI-CCD 与 CMOS 读出电路合在一起，10-bit 数字输出，最高行频 100 kHz。都是 1024×128，像元 12×12 μm。S14810 为前照，光谱响应 400 到 1100 nm。S14813 为背照，光谱响应 200 到 1100 nm。产品页没有写发布日期。手册 KMPD1216E05 把两款印在同一份资料上，并写资料截至 July 2026，记为约 2026 年 7 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S14810", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14810.html", [
        "产品页没有写发布日期。标题写前照。正文写 TDI-CCD 在高速成像时仍能保证亮度，并配 CMOS 读出电路做数字输出。特性写 10-bit 数字输出，最高行频 100 kHz，低噪声 8 e- rms typ.，可双向转移。",
        "规格表图像尺寸 12.288 x 1.536 mm，有效像素 1024 x 128，像元 12 x 12 μm。光谱响应 400 到 1100 nm。行频一栏写成 Line rate (typ.)，100000 行/秒。暗电流典型 10000 e-/pixel/s。读出噪声典型 30 e- rms。无制冷，窗口为硼硅玻璃，封装陶瓷。测量条件写 Typ. Ta=25 ℃，读出噪声为 low（gain=1）。",
        "工业用线阵索引把输出写成 Analog，行频最高一栏写成 --。手册特性写有效位数 9.4-bit（数据宽度 10-bit），低噪声一行把 S14810 写成 8 e- rms typ.。结构表总像素 1024×132，有效像素 1024×128，填充因子 100%，TDI 级数 128，抗晕光写成 FW × 100 min.，垂直时钟 2 相、双向，输出电路 1。",
        "手册暗电流两款都写典型 10 ke-/pixel/s、最大 15 ke-/pixel/s。读出噪声按增益分开：增益 1 倍时 S14810 典型 30 e- rms，增益 10 倍时典型 8 e- rms。转换效率增益 1 倍典型 25 µV/e-、0.015 DN/e-，增益 10 倍典型 250 µV/e-、0.15 DN/e-。供电电流典型值，模拟与数字端合计 430 mA，注记写这是两颗 ROIC 的合计；计数端典型 250 mA，注记写饱和时。应用栏写高速运动物体的连续成像和机器视觉。",
      ], "nir"),
      {
        ...page("S14813", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14813.html", [
        "产品页没有写发布日期。标题写背照。正文写紫外到可见光的灵敏度高于前照的 S14810，低照度下仍能得到清晰图像。特性写 10-bit 数字输出，最高行频 100 kHz，耐紫外，低噪声 12 e- rms typ.，可双向转移。",
        "规格表与 S14810 同为 1024 x 128、12 x 12 μm、12.288 x 1.536 mm。光谱响应 200 到 1100 nm。行频一栏同样写成 Line rate (typ.)，100000 行/秒。暗电流典型写成 10 e-/pixel/s。读出噪声典型 40 e- rms。无制冷，窗口为石英玻璃，封装陶瓷。测量条件同样写读出噪声为 low（gain=1）。",
        "工业用线阵索引同样把输出写成 Analog，行频最高一栏写成 --。手册把耐紫外只写在 S14813，低噪声写成 12 e- rms typ.。增益 1 倍时读出噪声典型 40 e- rms，增益 10 倍时典型 12 e- rms。转换效率增益 1 倍典型 15 µV/e-、0.009 DN/e-，增益 10 倍典型 150 µV/e-、0.09 DN/e-。",
        "手册暗电流写典型 10 ke-/pixel/s。产品页暗电流写 10 e-/pixel/s。计数端供电电流典型 230 mA，模拟与数字端典型 430 mA。应用栏与 S14810 相同。",
      ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s15778",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S15778：滨松 8192 像素高速 CMOS 线阵",
    summary:
      "产品页写面向需要高速扫描的工业相机，8192 像素，像元 7 × 7 μm，最高 100 klines/s。光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1238E04 页脚写 Jun. 2026，并写资料截至 June 2026，记为约 2026 年 6 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S15778", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S15778.html", [
        "产品页没有写发布日期。正文把 readout amplifier 印成 readout ampliﬁer。A/D 可选 10-bit，高速模式最高 100 klines/s；或 11-bit，低速模式最高 50 klines/s。视频信号以 360 MHz LVDS 串行输出。",
        "特性写像元 7 × 7 μm，像素数 8192，各像素同时积分，供电 3.3/1.8 V，SPI，内置 10-bit/11-bit A/D 转换器。规格表图像尺寸 57.344 × 0.007 mm，有效像素 8192 x 1，最高行频 100000 行/秒。无制冷，窗口写成 Broslicate glass，封装写成 Glass epoxy and FeNiCo alloy。测量条件写高速模式的行频。",
        "手册结构表有效感光区长度 57.344 mm，窗口材料写成 Borosilicate glass，并写 400 到 800 nm 的增透膜反射率不大于 1%。应用栏写机器视觉、胶片检查、印制电路板外观检查和印刷检查。",
        "手册供电电流在 Vdd(A)=Vdd(D)=3.3 V、Vdd(C)=1.8 V、f(MCLK)=30 MHz、LR=100 klines/s 时，Vdd(A) 典型 250 mA，Vdd(D) 典型 740 mA，Vdd(C) 典型 680 mA，注记写饱和曝光光进入时。",
      ], "nir"),
    ],
  },
  {
    id: "s16074",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S16074：滨松可切换像元的 CMOS 线阵",
    summary:
      "产品页写面向工业相机，感光区并行排着 7 × 7 µm、9.3 × 9.3 µm 和 14 × 14 µm 三条像元，可用 SPI 切换。光谱响应 400 到 1000 nm。14 × 14 µm 时最高 65 klines/s。产品页没有写发布日期。手册 KMPD1241E04 页脚写 Jan. 2026，并写资料截至 January 2026，记为约 2026 年 1 月。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S16074", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S16074.html", [
        "产品页没有写发布日期。正文写内置时序发生器、偏置发生器、放大器和 12-bit A/D 转换器，视频信号以 320 MHz LVDS 串行输出。像元尺寸在正文里用 µm。各像素同时积分。3.3 V 供电。",
        "规格表按三条像元列出：有效像素 4096 x 1、3072 x 1、2048 x 1，像元 7 x 7 μm、9.3 x 9.3 μm、14 x 14 μm，图像尺寸 28.672 x 0.007 mm、28.672 x 0.0093 mm、28.672 x 0.014 mm。光谱响应 400 到 1000 nm。最高行频 65000 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写成 Line rate (pixel size: 14 x 14 um)。",
        "手册结构表写总像素 4160、3120、2080，有效像素 4096、3072、2048，两侧另有哑像素和遮光像素，注记写初始设置不读出，可用 SPI 改成读出。窗口材料写成 Borosilicate glass，双面多层增透，400 nm 到 800 nm 反射率不大于 1 %。工作温度 -40 到 +85 °C。应用栏写机器视觉、胶片检查、印制电路板外观检查和印刷检查。",
        "手册把转换系数写成 Conversion factor，符号仍是 CE。增益 1 时，7 µm、9.3 µm、14 µm 的转换系数典型 42、38、13 µV/e-，光灵敏度典型 45、72、54 V/(lx∙s)，饱和电荷典型 27、30、87 ke-。供电电流在 f(MCLK)=40 MHz 时，Vdd(A) 典型 320 mA，Vdd(D) 典型 160 mA。",
      ], "nir"),
    ],
  },
  {
    id: "s1441",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S14416 与 S14417：滨松宽动态范围 CMOS 线阵",
    summary:
      "S14416-02、S14416-06、S14416-12、S14417-02 与 S14417-06 的产品页都写低功耗 CMOS 线阵，视频数据率 10 MHz。S14416 像元 63.5 × 63.5 μm，标题写 400 dpi。S14417 像元 127 × 127 μm，标题写 200 dpi。光谱响应都是 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1191E06 标题写成 S14416/S14417 series，并写 Wide dynamic range and 200 dpi/400 dpi，资料截至 October 2022，记为约 2022 年 10 月。手册把数据率写成 10 MHz data rate，产品页写成 10 MHz video data rate。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S14416-02", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14416-02.html", [
        "产品页没有写发布日期。标题写 400 dpi sensor with a wide dynamic range。正文写 The S14416 series，像元 63.5 × 63.5 μm。特性写 256 像素，最高数据率 10 MHz，单 3 V 或 5 V，内置时序发生器，只需起始脉冲和时钟，低电流，可同时积分。",
        "规格表类型为高速读出。图像尺寸 16.12×0.0635 mm，有效像素 256 x 1，像元 63.5 x 63.5 μm。光谱响应 400 到 1000 nm。最高行频 36231 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。测量条件写 Typ. Ta=25 ℃，Vdd=3 V/5 V，V(CLK)=V(ST)=Vdd，f(CLK)=10 MHz。",
        "手册结构表有效感光区长度 16.256 mm，窗口材料写成 Borosilicate glass。像素间距与像素高度都是 63.5 µm。供电电流在 f(CLK)=10 MHz、暗态时，Vdd=3 V 典型 12 mA，Vdd=5 V 典型 18 mA。",
        "手册把光灵敏度和转换效率按系列列出。S14416 系列光灵敏度典型 80 V/(lx∙s)，转换效率典型 0.75 µV/e-，峰值波长典型 700 nm。暗输出典型 0.02 mV，积分时间 10 ms。Vdd=5 V 时饱和输出典型 4.0 V，读出噪声典型 0.7 mV rms。应用栏写位置检测、物体测量和各类图像读取。",
      ], "nir"),
      page("S14416-06", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14416-06.html", [
        "产品页没有写发布日期。标题写成 Wide dynamic range and 400 dpi。正文同样写 The S14416 series，像元 63.5 × 63.5 μm。特性写 768 像素。内置时序发生器一行在 start pulse 后换行，再接 and clock pulse for operation。",
        "规格表图像尺寸 48.36×0.0635 mm，有效像素 768 x 1，像元 63.5 x 63.5 μm。最高行频 12690 行/秒。无制冷，窗口写成 Broslicate glass，封装 Glass epoxy。测量条件与 S14416-02 相同。",
        "手册有效感光区长度 48.768 mm，窗口材料与 S14416-02 同栏写成 Borosilicate glass。供电电流在 f(CLK)=10 MHz、暗态时，Vdd=3 V 典型 36 mA，Vdd=5 V 典型 54 mA。光灵敏度、转换效率和峰值波长与 S14416 系列同一列。",
        "手册光响应非均匀性按 762 像素计算，并写去掉两端各 3 个像素。光谱响应图把 S14416-06 与 S14416-02、S14417-02、S14417-06 画在同一张图上。应用栏与 S14416-02 相同。",
      ], "nir"),
      page("S14416-12", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14416-12.html", [
        "产品页没有写发布日期。标题写成 Wide dynamic range and 400 dpi。正文改成单数 The S14416-12 is，不再写 series。像元仍是 63.5 × 63.5 μm。特性写 1536 像素。时序发生器一行同样在 start pulse 后换行。",
        "规格表图像尺寸 97.472×0.0635 mm，有效像素 1536 x 1。最高行频 6426 行/秒。无制冷。窗口写成 Silicone resin，封装 Glass epoxy。测量条件与 S14416-02 相同。",
        "手册有效感光区长度同样是 97.472 mm。窗口材料写成 Silicone resin，与产品页一致。封装为 Glass epoxy。供电电流在 f(CLK)=10 MHz、暗态时，Vdd=3 V 典型 72 mA，Vdd=5 V 典型 108 mA。",
        "手册光谱响应单独画一张 S14416-12。光灵敏度、转换效率仍与 S14416 系列同一列，典型 80 V/(lx∙s)、0.75 µV/e-。光响应非均匀性按 1530 像素计算。应用栏与同系列相同。",
      ], "nir"),
      page("S14417-02", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14417-02.html", [
        "产品页没有写发布日期。标题写 200 dpi sensor with a wide dynamic range。正文写 The S14417 series，像元 127 × 127 μm。特性写 128 像素，其余条目与 S14416-02 的特性列表相同。",
        "规格表图像尺寸 16.189 x 0.127 mm，有效像素 128 x 1，像元 127 x 127 μm。光谱响应 400 到 1000 nm。最高行频 67567 行/秒。无制冷，窗口写成 Broslicate glass，封装陶瓷。规格表没有测量条件一行。",
        "手册有效感光区长度 16.256 mm，像素间距与像素高度都是 127 µm，窗口材料写成 Borosilicate glass。供电电流在 f(CLK)=10 MHz、暗态时，Vdd=3 V 典型 9 mA，Vdd=5 V 典型 13 mA。",
        "手册 S14417 系列光灵敏度典型 75 V/(lx∙s)，转换效率典型 0.35 µV/e-，峰值波长典型 700 nm。暗输出典型 0.04 mV。Vdd=5 V 时饱和输出典型 4.0 V，读出噪声典型 0.6 mV rms。光响应非均匀性按 122 像素计算。",
      ], "nir"),
      page("S14417-06", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S14417-06.html", [
        "产品页没有写发布日期。标题写成 Wide dynamic range and 200 dpi。正文写 The S14417 series，像元 127 × 127 μm。特性写 384 像素。Built-in timing generator 一行在分号后换行。",
        "规格表图像尺寸 48.701 x 0.127 mm，有效像素 384 x 1，像元 127 x 127 μm。最高行频 24752 行/秒。无制冷，窗口写成 Broslicate glass，封装 Glass epoxy。规格表同样没有测量条件一行。",
        "手册有效感光区长度 48.768 mm，窗口材料写成 Borosilicate glass，封装 Glass epoxy。供电电流在 f(CLK)=10 MHz、暗态时，Vdd=3 V 典型 27 mA，Vdd=5 V 典型 39 mA。光灵敏度与转换效率与 S14417 系列同一列。",
        "手册光响应非均匀性按 378 像素计算。并行读出时序图在 S14417-06 旁同时写 192 和 384，串行读出时序图写 384。应用栏与 S14416 相同。",
      ], "nir"),
    ],
  },
  {
    id: "s13131",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13131：滨松薄封装 CMOS 线阵",
    summary:
      "S13131-512、S13131-736 与 S13131-1536 的产品页都写条码读取器、编码器和扫描用线阵，COB，厚度 0.8 mm，单 3.3 V，像元 5.5 × 63.5 μm，光谱响应 400 到 1000 nm。产品页把 applications 印成 ap-plications。窗口写成 Epoxy resin。产品页没有写发布日期。三份手册页脚都写 Nov. 2024，并写资料截至 November 2024，记为约 2024 年 11 月。手册密封材料写成 Silicone resin，没有单独的窗口一行。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S13131-512", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13131-512.html", [
        "产品页没有写发布日期。正文写厚度是前代产品的一半，0.8 mm，并写低功耗和高灵敏度。特性写 512 像素，有效感光区长度 2.816 mm，视频数据率最大 2 MHz，输入端电容 5 pF，封装 3.5 × 3.0 × 0.8 t mm。",
        "规格表类型为树脂密封封装。图像尺寸 2.816 x 0.0635 mm，有效像素 512 x 1，像元 5.5 x 63.5 μm。最高行频 3787 行/秒。无制冷，窗口写成 Epoxy resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，Vdd=3.3 V，V(CLK)=V(ST)=3.3 V，f(CLK)=2 MHz。",
        "手册 KMPD1158E06 结构表像素数 512，像素间距 5.5 µm，像素高度 63.5 µm，感光区长度 2.816 mm，封装 Glass epoxy，密封材料 Silicone resin。特性里的封装厚度写成 0.8t mm。应用栏写编码器、各类图像扫描和条码读取器。",
        "手册供电电流在 f(CLK)=2 MHz 时最小 7 mA、典型 12 mA、最大 17 mA。注记 *4 写成 Higher the clock pulse frequency，并写 f(CLK)=200 kHz 时典型 11 mA。光灵敏度典型 280 V/(lx·s)，峰值波长典型 650 nm，转换效率典型 45 µV/e-。暗输出典型 1.5 mV，积分时间 10 ms。读出噪声典型 0.4 mV rms。光响应非均匀性按 506 像素计算。",
      ], "nir"),
      page("S13131-736", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13131-736.html", [
        "产品页没有写发布日期。正文与 S13131-512 相同，包括 ap-plications 和 0.8 mm。特性写 736 像素，有效感光区长度 4.048 mm，封装 4.7 × 2.8 × 0.8 t mm。视频数据率和输入端电容与 512 像素款相同。",
        "规格表图像尺寸 4.048 x 0.0635 mm，有效像素 736 x 1，像元 5.5 x 63.5 μm。最高行频 2659 行/秒。窗口写成 Epoxy resin，封装 Glass epoxy。测量条件与 S13131-512 相同。",
        "手册 KMPD1157E06 感光区长度 4.048 mm，密封材料同样写成 Silicone resin。回流焊一行把 Peak temperature 260 °C 与 three times 分成两行。注记 *2 写 JEDEC level 2a。",
        "手册供电电流、光灵敏度、峰值波长、转换效率和暗输出与 S13131-512 同一组数字。光响应非均匀性按 730 像素计算，并写去掉两端各 3 个像素。应用栏相同。",
      ], "nir"),
      page("S13131-1536", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13131-1536.html", [
        "产品页没有写发布日期。正文同样印成 ap-plications。特性写 1536 像素，有效感光区长度 8.448 mm，封装 9.1 × 2.4 × 0.8 t mm。",
        "规格表图像尺寸 8.448 x 0.0635 mm，有效像素 1536 x 1，像元 5.5 x 63.5 μm。最高行频 1288 行/秒。窗口写成 Epoxy resin，封装 Glass epoxy。测量条件与另外两款相同。",
        "手册 KMPD1159E06 感光区长度 8.448 mm，封装 Glass epoxy，密封材料 Silicone resin。供电电流典型仍是 12 mA，注记 *4 同样写 200 kHz 时典型 11 mA。",
        "手册光灵敏度典型 280 V/(lx·s)，转换效率典型 45 µV/e-，读出噪声典型 0.4 mV rms。光响应非均匀性按 1530 像素计算。应用栏写编码器、各类图像扫描和条码读取器。",
      ], "nir"),
    ],
  },
  {
    id: "s13434",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13434-2496：滨松 2496 像素 CMOS 线阵",
    summary:
      "产品页写条码读取器、编码器和扫描用线阵，COB，厚度 0.8 mm，单 3.3 V。像元 5.25 × 63.5 μm，2496 像素，光谱响应 400 到 1000 nm。产品页把 applications 写成完整单词。窗口写成 Epoxy resin。产品页没有写发布日期。手册 KMPD1160E06 页脚写 Nov. 2024，并写资料截至 November 2024，记为约 2024 年 11 月。手册密封材料写成 Silicone resin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S13434-2496", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13434-2496.html", [
        "产品页没有写发布日期。正文写厚度是前代产品的一半，0.8 mm，低功耗和高灵敏度。特性写像元 5.25 × 63.5 μm，2496 像素，有效感光区长度 13.104 mm，视频数据率最大 2 MHz，输入端电容 5 pF，封装 13.8 × 2.1 × 0.8 t mm。",
        "规格表类型为树脂密封封装。图像尺寸 13.104 x 0.0635 mm，有效像素 2496 x 1，像元 5.25 x 63.5 μm。最高行频 796 行/秒。无制冷，窗口写成 Epoxy resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，Vdd=3.3 V，V(CLK)=V(ST)=3.3 V，f(CLK)=2 MHz。",
        "手册结构表像素间距 5.25 µm，像素高度 63.5 µm，感光区长度 13.104 mm，封装 Glass epoxy，密封材料 Silicone resin，没有单独的窗口一行。特性里的封装厚度写成 0.8t mm。应用栏写编码器、各类图像扫描和条码读取器。",
        "手册供电电流在 f(CLK)=2 MHz 时典型 12 mA、最小 7 mA、最大 17 mA。注记 *4 写成 Higher the clock pulse frequency，并写 f(CLK)=200 kHz 时典型 11 mA。光灵敏度典型 280 V/(lx·s)，峰值波长典型 650 nm，转换效率典型 45 µV/e-，暗输出典型 1.5 mV，读出噪声典型 0.4 mV rms。光响应非均匀性按 2490 像素计算。",
      ], "nir"),
    ],
  },
  {
    id: "s10077",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10077：滨松数字输出 CMOS 线阵",
    summary:
      "产品页写用于图像输入的 CMOS 线阵，片上电荷放大器和 8-bit/10-bit AD 转换器，视频数据率最高 1 MHz，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1088E10 页脚写 May 2019，并写资料截至 May 2019，记为约 2019 年 5 月。产品页窗口写成 Tempax。手册窗口写成 Borosilicate glass。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S10077", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10077.html", [
        "产品页没有写发布日期。标题写 Digital output, built-in 8/10-bit AD converter, single power supply operation。正文写 The signal processing circuit has a charge amplifier，并写 a 8-bit/10-bit AD converter。特性把像元间距 14 μm 和像元高度 50 μm 写在同一行，像素数写成 1024 ch。单电源 3.3 到 5 V。视频数据率最高 1 MHz。光谱响应 400 到 1000 nm。数字输出，8-bit/10-bit 可切换 ADC。各像素同时积分，积分时间可变。",
        "规格表类型为 Digital output type。图像尺寸 14.336 x 0.05 mm，有效像素 1024 x 1，像元 14 x 50 μm。最高行频 972 行/秒。无制冷，窗口写成 Tempax，封装 LCP。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。",
        "手册结构表感光区长度 14.336 mm，封装写成 LCP（liquid crystal polymer），窗口材料写成 Borosilicate glass。应用栏写分析仪器、位置检测和图像读取。特性把视频数据率写成 1 MHz max.，并在 start and clock pulse inputs 后加句号。手册标题把转换器写成 8/10-bit A/D converter。",
        "手册时钟频率 8-bit 最高 12 MHz，10-bit 最高 6 MHz。数据率写成 f(CLK)/12。供电电流一栏把 Current consumption 印成 Current consumoption，符号写成 lc。Vdd=3.3 V 时 8-bit 典型 12 mA、10-bit 典型 10 mA，Vdd=5 V 时 8-bit 典型 16 mA、10-bit 典型 14 mA。注记分别写 f(CLK)=12 MHz 和 6 MHz。",
        "手册光灵敏度典型 30 V/lx · s，峰值波长典型 700 nm，符号印成 lp。暗输出积分时间写成 Ts=10 s。Vdd=5 V 时 8-bit 暗输出典型 0.03 digit，10-bit 典型 0.12 digit。饱和输出 8-bit 为 255 digit，10-bit 为 1023 digit。读出噪声 8-bit 典型 0.7 digit，10-bit 典型 2.8 digit。光响应非均匀性按 1022 像素计算，上限 ±10%，公式一行写成 DX/X。时序图注记写 When using analog output AO。",
      ], "nir"),
    ],
  },
  {
    id: "s10200",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10200、S10201 与 S10202：滨松背照 TDI-CCD",
    summary:
      "S10200-02-01、S10201-04-01、S10202-08-01 与 S10202-16-01 的产品页都写背照 TDI-CCD，光谱响应 200 到 1100 nm，像元 12 × 12 μm，TDI 级数在手册里写成 128。产品页没有写发布日期。手册 KMPD1098E11 把四款印在同一份资料上，页脚写 Jan. 2021，并写资料截至 January 2021，记为约 2021 年 1 月。产品页正文把 quantum 印成 quantμm。手册写成 quantum efficiency。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S10200-02-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10200-02-01.html", [
          "产品页没有写发布日期。正文写背照结构把紫外到近红外的量子效率写高，光谱范围 200 到 1100 nm，并把 quantum 印成 quantμm。特性写 TDI 模式、高速连续采集、紫外到近红外高灵敏度、多端口提高行频。手册特性在这些条目之后另写 Low noise。",
          "规格表类型分成两行，写成 TDI operation 和 TDI-CCD image sensor。图像尺寸 12.288 x 1.536 mm，有效像素 1024 x 128，像元 12 x 12 μm。行频一栏写成 Line rate (typ.)，50000 行/秒。暗电流典型 30 e-/pixel/s。读出噪声典型 35 e- rms。无制冷，窗口为石英玻璃，封装陶瓷。测量条件写 Typ. Ta=25 ℃，unless otherwise noted，operating conditions: Typ.。",
          "手册选型表总像素 1040 × 128，有效像素 1024 × 128，端口数 2，像素速率 30 MHz/port，行频 50 kHz，垂直转移写成 Bi-directional。适用相机一栏写成 -。注记写另有临时窗口型 S10200-02N-01 和遮光罩型 S10200-02M-01，只在索取时提供，产品索引没有这两款。",
          "手册窗口一行写 Quartz glass，注记 *4 写成 Resin sealing。暗电流符号 DS，典型 30 e-/pixel、最大 100 e-/pixel，单位不是产品页的 e-/pixel/s。注记 *12 写行频 50 kHz，并写 128 级转移后的累积暗信号。读出噪声典型 35 e- rms、最大 45 e- rms。满阱典型 100 ke-，转换效率典型 9.5 μV/e-，动态范围典型 2857。光响应非均匀性典型 ±3%、最大 ±10%。每端口功耗典型 120 mW。输出 MOSFET 供电电流每个节点典型 8 mA。应用栏写高速移动样品的连续成像、电子零件产线检查、半导体检查，并把流式细胞术印成 Flow cytometery。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10201-04-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10201-04-01.html", [
          "产品页没有写发布日期。正文与 S10200-02-01 相同，包括 quantμm。特性列表也相同，没有写 Low noise。",
          "规格表图像尺寸 24.576 x 1.536 mm，有效像素 2048 x 128，像元 12 x 12 μm。行频典型 50000 行/秒。暗电流典型 30 e-/pixel/s。读出噪声典型 35 e- rms。窗口为石英玻璃，封装陶瓷。测量条件与 S10200-02-01 相同。",
          "手册选型表总像素 2080 × 128，有效像素 2048 × 128，端口数 4，行频 50 kHz。适用相机写成 C10000-801/-A01。注记同样列出临时窗口型 S10201-04N-01 和遮光罩型 S10201-04M-01，只在索取时提供。垂直移位寄存器电容典型 400 pF。",
          "手册暗电流、读出噪声、满阱、转换效率和每端口功耗与同页其他型号写在同一组，没有按型号拆开。暗电流注记仍写行频 50 kHz。应用栏与 S10200-02-01 相同。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10202-08-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10202-08-01.html", [
          "产品页没有写发布日期。正文与 S10200-02-01 相同，包括 quantμm。特性列表也相同。",
          "规格表图像尺寸 49.152 x 1.536 mm，有效像素 4096 x 128，像元 12 x 12 μm。行频典型 50000 行/秒。暗电流典型 30 e-/pixel/s。读出噪声典型 35 e- rms。窗口为石英玻璃，封装陶瓷。测量条件与 S10200-02-01 相同。",
          "手册选型表总像素 4160 × 128，有效像素 4096 × 128，端口数 8，行频 50 kHz。适用相机一栏写成 -。垂直移位寄存器电容与 S10202-16-01 同栏，典型 650 pF。",
          "手册电特性和光学特性与另外三款写在同一张表。暗电流单位仍是 e-/pixel，注记行频 50 kHz。应用栏相同。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10202-16-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10202-16-01.html", [
          "产品页没有写发布日期。正文与 S10200-02-01 相同，包括 quantμm。特性列表也相同。",
          "规格表图像尺寸与 S10202-08-01 相同，写成 49.152 x 1.536 mm，有效像素 4096 x 128。行频典型 100000 行/秒。暗电流典型仍写 30 e-/pixel/s。读出噪声典型 35 e- rms。窗口为石英玻璃，封装陶瓷。",
          "手册选型表总像素 4224 × 128，有效像素 4096 × 128，端口数 16，行频 100 kHz。像素速率仍是 30 MHz/port。适用相机一栏写成 -。",
          "手册暗电流一行没有按型号拆开，注记 *12 仍写行频 50 kHz。读出噪声、满阱典型 100 ke-、转换效率典型 9.5 μV/e- 和每端口功耗典型 120 mW 与同页其余型号同一组。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s10226",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10226-10：滨松树脂密封 CMOS 线阵",
    summary:
      "产品页写小型树脂密封 CMOS 线阵，1024 像素，像元 7.8 × 125 μm，光谱响应 400 到 1000 nm，视频数据率最高 200 kHz。产品页没有写发布日期。手册 KMPD1151E05 页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。产品页窗口写成 Silicone resin。手册没有窗口一行，密封材料写成 Silicone resin。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S10226-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10226-10.html", [
        "产品页没有写发布日期。标题写 Small, resin-sealed CMOS image sensor。特性写小型、高性价比，像元间距 7.8 μm、像元高度 125 μm，1024 像素，单 3.3 V，高灵敏度、低暗电流、低噪声。内置时序发生器，只需 Start 和 Clock。视频数据率最高 200 kHz。光谱响应 400 到 1000 nm。",
        "规格表类型为 Resin-sealed type package。图像尺寸 7.9872 x 0.125 mm，有效像素 1024 x 1，像元 7.8 x 125 μm。最高行频 194 行/秒。无制冷，窗口写成 Silicone resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，f(CLK)=800 kHz，并同时写 Vdd=5 V 与 Vdd=3.3 V 两组时钟和起始脉冲电压。",
        "手册正文写相对前代 S9226 系列更小、性价比更高。特性写表面贴装封装 2.4 × 9.1 × 1.6t mm，并同样写 Single 3.3 V power supply operation。推荐端电压把 Vdd 典型值写成 5 V，最小 3.3 V，最大 5.25 V。结构表感光区长度 7.9872 mm，封装 Glass epoxy，密封材料 Silicone resin。框图标题写成 Block diagram (S9226/-03, S10226 series)。",
        "手册时钟频率最高 800 kHz，数据率写成 f(CLK)/4。供电电流 Vdd=5 V 时典型 5 mA、最大 8 mA，Vdd=3.3 V 时典型 4.5 mA、最大 7 mA。转换效率高增益典型 3.2 µV/e-，低增益典型 1.6 µV/e-。暗输出积分时间 10 ms。Vdd=5 V 高增益暗输出典型 0.3 mV、最大 8 mV。饱和输出 Vdd=5 V 典型 3.2 V，Vdd=3.3 V 典型 2.0 V。读出噪声高增益典型 1.4 mV rms，低增益典型 0.7 mV rms。峰值波长典型 700 nm。光响应非均匀性按 1022 像素计算，上限 ±8.5%。应用栏写条码读取器、位移计、折射计、干涉仪和小型光谱仪。",
      ], "nir"),
    ],
  },
  {
    id: "s10227",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10227-10：滨松树脂密封 CMOS 线阵",
    summary:
      "产品页写小型树脂密封 CMOS 线阵，512 像素，像元 12.5 × 250 μm，单 5 V，视频数据率最高 5 MHz，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1152E08 页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。产品页窗口写成 Silicone resin。手册没有窗口一行，密封材料写成 Silicone resin。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S10227-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S10227-10.html", [
        "产品页没有写发布日期。标题写 Small, resin-sealed CMOS image sensor。特性写小型、高性价比，像元间距 12.5 μm、像元高度 250 μm，512 像素，单 5 V，视频数据率最高 5 MHz。各像素同时积分，带快门。高灵敏度、低暗电流、低噪声。内置时序发生器，只需 Start 和 Clock。光谱响应 400 到 1000 nm。",
        "规格表类型为 Resin-sealed type package。图像尺寸 6.4 x 0.25 mm，有效像素 512 x 1，像元 12.5 x 250 μm。最高行频 9434 行/秒。无制冷，窗口写成 Silicone resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=5 MHz，unless otherwise noted。",
        "手册正文写相对前代 S9227 系列更小、性价比更高。特性写表面贴装封装 4.4 × 9.1 × 1.6t mm，并写 Single 5 V power supply operation。推荐端电压 Vdd 最小 4.75 V、典型 5 V、最大 5.25 V。结构表感光区长度 6.4 mm，封装 Glass epoxy，密封材料 Silicone resin。光谱响应图标题写成 Spectral response (S10226, S10227)。",
        "手册时钟频率最高 5 MHz，数据率写成等于 f(CLK)。供电电流在 f(CLK)=5 MHz 时最小 20 mA、典型 26 mA、最大 32 mA。转换效率典型 1.6 µV/e-。暗输出积分时间 10 ms，典型 1 mV、最大 10 mV。饱和输出典型 4.3 V。读出噪声典型 0.45 mV rms。峰值波长典型 700 nm。光响应非均匀性按 510 像素计算，上限 ±8.5%。应用栏写条码读取器、位移计、折射计、干涉仪和小型光谱仪。",
      ], "nir"),
    ],
  },
  {
    id: "s11105",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11105：滨松高速 CMOS 线阵",
    summary:
      "S11105 与 S11105-01 的产品页都写视频数据率 50 MHz 的 CMOS 线阵，像元 12.5 × 250 μm，512 像素，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1111E06 把两款印在同一份 S11105 series 资料上，页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。产品页窗口写成 Tempax。手册窗口写成 Borosilicate glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S11105", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11105.html", [
        "产品页没有写发布日期。标题写 High-speed video data rate: 50 MHz。正文写 The S11105 is a CMOS linear image sensor that delivers a video data rate of 50 MHz。特性写视频数据率最高 50 MHz，像元 12.5 × 250 μm，512 像素，各像素同时积分，积分时间可变并写 electronic shutter function，单 5 V，内置时序发生器，只需 start and clock pulse inputs，封装写成 DIP (dual inline package) type。",
        "规格表类型为 High-speed readout type。图像尺寸 6.4 x 0.25 mm，有效像素 512 x 1，像元 12.5 x 250 μm。最高行频 88652 行/秒。无制冷，窗口写成 Tempax，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=50 MHz，unless otherwise noted。",
        "手册结构表像素数 512，像元 12.5 × 250 µm，感光区长度 6.4 mm，封装 Ceramic，窗口材料 Borosilicate glass。特性把两种封装写成 DIP type: S11105 和 Surface mount type: S11105-01。应用栏写位置检测和图像读取。",
        "手册时钟频率最低 1 MHz、最高 50 MHz，数据率写成等于 f(CLK)。供电电流符号写成 I，在 f(CLK)=50 MHz 时最小 60 mA、典型 90 mA、最大 140 mA。注记写 f(CLK)=1 MHz 时典型 70 mA。光灵敏度典型 40 V/(lx·s)，峰值波长典型 680 nm，转换效率典型 0.6 µV/e-。暗输出积分时间写成 Ts=10 ms，典型 1.0 mV。饱和输出典型 1.3 V。读出噪声典型 2.5 mV rms。光响应非均匀性按 506 像素计算。框图标题写成 Block diagram (S11105 series, S11108)。操作示例把 Operation 印成 Operetion，并写全 512 通道时行频 88.65 kHz。",
      ], "nir"),
      page("S11105-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11105-01.html", [
        "产品页没有写发布日期。标题同样写 High-speed video data rate: 50 MHz。正文把型号换成 The S11105-01。特性最后一条写成 Surface mount type，其余与 S11105 相同。",
        "规格表图像尺寸、像素和像元与 S11105 相同。最高行频写成 88495 行/秒。窗口仍写成 Tempax，封装 Ceramic。测量条件在 f(CLK)=50 MHz 后换行，再写 unless otherwise noted。",
        "手册没有按封装拆开电特性和光学特性。绝对最大额定的回流焊条件注记 *2 写成 S11105-01，*3 写成 JEDEC level 5。外形图标题写成 Dimensional outline (S11105-01)。引脚从 22 脚改成 16 脚。",
        "手册操作示例只写全 512 通道行频 88.65 kHz，没有写出产品页的 88495 行/秒。手册相关资料另列 Surface mount type products/Precautions。产品页相关资料也多一份 Precautions / Surface mount type products。",
      ], "nir"),
    ],
  },
  {
    id: "s11106",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11106-10：滨松树脂密封 CMOS 线阵",
    summary:
      "产品页写树脂密封 CMOS 线阵，128 像素，像元 63.5 × 63.5 μm，视频数据率最高 10 MHz，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1150E05 把 S11106-10 与 S11107-10 印在同一份资料上，页脚写 Oct. 2024，并写资料截至 October 2024，记为约 2024 年 10 月。产品页窗口写成 Silicone resin。手册没有窗口一行，密封材料写成 Silicone resin。外形图把密封写成 Silicon resin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S11106-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11106-10.html", [
        "产品页没有写发布日期。标题写 Compact size and high cost-performance。正文写 The S11106-10 is CMOS linear image sensors，用复数 sensors。特性写表面贴装封装 2.4 × 9.1 ×1.6 t mm，像元 63.5 × 63.5 μm，128 像素，数据率最高 10 MHz，3 V 或 5 V 单电源，内置时序发生器，只需 Start 和 Clock，低电流，可同时积分。",
        "规格表类型为 Resin-sealed type package。图像尺寸 8.06 x 0.0635 mm，有效像素 128 x 1，像元 63.5 x 63.5 μm。最高行频 67568 行/秒。无制冷，窗口写成 Silicone resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，Vdd=3 V/5 V，V(CLK)=V(ST)=Vdd，f(CLK)=10 MHz，unless otherwise noted。",
        "手册正文同样用复数，并写像素 63.5 × 63.5 µm（S11106-10）、127 × 127 µm（S11107-10）。结构表像素数 128，像素间距 63.5 µm，像素高度 63.5 µm，感光区长度 8.06 mm，封装 Glass epoxy，密封材料 Silicone resin。特性封装写成 2.4 × 9.1 ×1.6t mm。应用栏写位置检测、物体测量、旋转编码器和图像读取。",
        "手册把 Electrical characteristics 印成 Electrical characterisitics。时钟频率最低 5 kHz、最高 10 MHz，数据率写成等于 f(CLK)。供电电流符号写成 Ic。Vdd=3 V 时最小 4.0 mA、典型 6.0 mA、最大 8.0 mA，Vdd=5 V 时最小 7.0 mA、典型 9.0 mA、最大 11.0 mA。注记写 f(CLK)=10 MHz、暗态。光灵敏度符号写成 Sw，典型 80 V/(lx·s)。转换效率典型 0.75 µV/e-。峰值波长典型 700 nm。暗输出典型 0.02 mV，积分时间 10 ms。Vdd=5 V 饱和输出典型 4.0 V。读出噪声 Vdd=5 V 典型 0.7 mV rms，Vdd=3 V 典型 1.0 mV rms。光响应非均匀性按 112 像素计算，并写去掉两端各 8 个像素。",
        "手册单像素输出波形标题把数据率符号写成 VR，印成 [f(CLK)=VR=10 MHz]。操作示例标题写成 Operetion example (S11106)，起始脉冲周期 14.8 µs，没有写行频。外形图密封一行写成 Silicon resin。绝对最大额定注记写成 Always be sure to the product within the absolute maximum ratings。",
      ], "nir"),
    ],
  },
  {
    id: "s11107",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11107-10：滨松树脂密封 CMOS 线阵",
    summary:
      "产品页写树脂密封 CMOS 线阵，64 像素，像元 127 × 127 μm，视频数据率最高 10 MHz，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册与 S11106-10 同一份，KMPD1150E05，页脚写 Oct. 2024，记为约 2024 年 10 月。产品页窗口写成 Silicone resin。手册密封材料写成 Silicone resin，外形图写成 Silicon resin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S11107-10", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11107-10.html", [
        "产品页没有写发布日期。标题写 Compact size and high cost-performance。正文写 The S11107-10 is CMOS linear image sensors，用复数 sensors。特性写表面贴装封装 2.4 × 9.1 ×1.6 t mm，像元 127 × 127 μm，64 像素，数据率最高 10 MHz。电源、时序发生器和同时积分的写法与 S11106-10 相同。",
        "规格表类型为 Resin-sealed type package。图像尺寸 8.06 x 0.127 mm，有效像素 64 x 1，像元 127 x 127 μm。最高行频 119048 行/秒。无制冷，窗口写成 Silicone resin，封装 Glass epoxy。测量条件与 S11106-10 相同。",
        "手册结构表像素数 64，像素间距 127 µm，像素高度 127 µm，感光区长度仍写 8.06 mm。封装 Glass epoxy，密封材料 Silicone resin。应用栏与 S11106-10 写在同一组。",
        "手册供电电流 Vdd=3 V 时最小 2.5 mA、典型 4.5 mA、最大 6.5 mA，Vdd=5 V 时最小 4.5 mA、典型 6.5 mA、最大 8.5 mA。光灵敏度典型 75 V/(lx·s)，转换效率典型 0.35 µV/e-，峰值波长典型 700 nm。暗输出典型 0.04 mV。Vdd=5 V 饱和输出典型 4.0 V。读出噪声 Vdd=5 V 典型 0.6 mV rms，Vdd=3 V 典型 0.9 mV rms。光响应非均匀性按 56 像素计算，并写去掉两端各 4 个像素。",
        "手册单像素输出波形标题写成 [f(CLK)=DR=10 MHz]，与 S11106-10 同页的 VR 不同。操作示例标题写成 Operetion example (S11107)，起始脉冲周期 8.4 µs，没有写行频。时序图在像素数旁同时写 128 (S11106-10) 和 64 (S11107-10)。",
      ], "nir"),
    ],
  },
  {
    id: "s11108",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11108：滨松高灵敏度 CMOS 线阵",
    summary:
      "产品页写在每个像素上加放大器的 CMOS 线阵，2048 像素，像元 14 × 14 μm，有效感光区长度 28.672 mm，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1112E13 页脚写 Mar. 2024，并写资料截至 March 2024，记为约 2024 年 3 月。产品页和手册窗口都写成 Tempax。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S11108", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11108.html", [
        "产品页没有写发布日期。标题写 Achieves high sensitivity by adding an amplifier to each pixel。正文在 area 与括号之间没有空格，写成 long photosensitive area( effective photosensitive area length: 28.672 mm)。特性写像元 14 × 14 μm，2048 像素，有效感光区长度 28.672 mm，高灵敏度 50V/(lx・s)，各像素同时积分，积分时间可变，单 5 V，内置时序发生器，视频数据率最高 10 MHz，输入端电容 5 pF。",
        "规格表类型为 High sensitivity type。图像尺寸 28.672 x 0.014 mm，有效像素 2048 x 1，像元 14 x 14 μm。最高行频 4672 行/秒。无制冷，窗口写成 Tempax，封装 LCP。测量条件第一行写 Typ. Ta=25 ℃，unless otherwise noted，下一行写 Spectral response range:Vdd=5 V, V(CLK)=V(ST)=5 V, f(CLK)=10 MHz。",
        "手册结构表像素数 2048，像元 14 × 14 µm，感光区长度 28.672 mm，封装写成 LCP (liquid crystal polymer)，窗口材料写成 Tempax。光灵敏度写成 50 V/(lx·s)。应用栏写位置检测、图像读取、编码器和条码读取器。",
        "手册时钟频率最低 200 kHz、最高 10 MHz，数据率写成等于 f(CLK)。供电电流符号写成 Ic，在 f(CLK)=10 MHz 时最小 20 mA、典型 30 mA、最大 50 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。峰值波长典型 700 nm，转换效率典型 13 µV/e-。暗输出积分时间写成 Ts=10 ms，典型 0.3 mV。饱和输出典型 1.2 V。读出噪声典型 0.6 mV rms。光响应非均匀性按 2042 像素计算，注记写去掉两端各 3 个像素。图像滞后上限 0.6 mV。",
        "手册光谱响应图标题把 response 印成 resposne。框图标题写成 Block diagram (S11105 series, S11108)。块切换注记写读出全部像素时 BSW 应为 NC 或 GND，读出 1024 像素（513 到 1536 通道）时为 Vdd。操作示例把 Operation 印成 Operetion。全 2048 通道起始脉冲周期写成 214 µs，1024 通道写成 111.6 µs。外形图注记把 *3 用了两次，一处写距封装边缘到感光区中心，另一处写 Glass thickness，图上玻璃厚度标成 *4。",
      ], "nir"),
    ],
  },
  {
    id: "s11637",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11637：滨松带增益切换的 CMOS 线阵",
    summary:
      "S11637-1024Q 与 S11637-2048Q 的产品页都写带电子快门和增益切换的 CMOS 线阵，像元 12.5 × 500 μm，光谱响应 200 到 1000 nm。产品页没有写发布日期。手册 KMPD1131E03 把两款印在同一份 S11637 series 资料上，页脚写 Jul. 2017，并写资料截至 July 2017，记为约 2017 年 7 月。产品页窗口写成 Quartz。手册窗口写成 Quartz (without AR coating)。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S11637-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11637-1024Q.html", [
          "产品页没有写发布日期。正文写 The S11637 series are CMOS linear image sensors，并写像元间距是前代 S10453 系列的一半。特性写电子快门、增益切换、读出速度最高 10 MHz、电压输出、单 5 V、各像素同时积分、内置时序发生器，光谱响应 200 到 1000 nm。手册特性另写 Pixel size: 12.5 × 500 μm。",
          "规格表类型为 High-speed readout type。图像尺寸 12.8 x 0.5 mm，有效像素 1024 x 1，像元 12.5 x 500 μm。最高行频 9487 行/秒。无制冷，窗口写成 Quartz，封装 Ceramic。产品页没有测量条件一行。",
          "手册结构表总像素和有效像素都是 1024，填充因子 100%，感光区长度 12.8 mm，封装 Ceramic。窗口材料写成 Quartz (without AR coating)，注记 *1 写 Resin sealing，*2 写 Refractive index=1.46。手册正文用单数 is。应用栏写分光光度计和图像读取。",
          "手册视频数据率符号写成 VR，等于 f(CLK)。行频上限 9487 行/秒。供电电流符号写成 I，在 f(CLK)=10 MHz、暗态时典型 55 mA、最大 70 mA。光灵敏度符号写成 S，高增益典型 153 V/(lx∙s)，低增益典型 38 V/(lx∙s)。转换效率高增益典型 1.18 μV/e-，低增益典型 0.30 μV/e-。峰值波长典型 600 nm。",
          "手册器件结构把像素高度印成 Pixel heght，并写 front-illuminance type photodiode。增益放大器一行写成 gain swithing function。外形图注记把 photosensitive 印成 phtosensitive。重量写成 3 g。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S11637-2048Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11637-2048Q.html", [
          "产品页没有写发布日期。正文和特性与 S11637-1024Q 相同，没有单独写出 2048 像素。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 2048 x 1，像元 12.5 x 500 μm。最高行频 4812 行/秒。窗口写成 Quartz，封装 Ceramic。",
          "手册结构表总像素和有效像素都是 2048，感光区长度 25.6 mm。电特性和光学特性与 1024 像素那一款写在同一组，只有行频和供电电流按型号拆开。供电电流在 f(CLK)=10 MHz、暗态时典型 95 mA、最大 125 mA。",
          "手册操作示例按 2048 通道计算，时钟 10 MHz 时起始脉冲周期 207.8 μs。外形图重量写成 3.6 g，注记同样把 photosensitive 印成 phtosensitive。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s11720",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11720：滨松密接用长感光区 CMOS 线阵",
    summary:
      "S11720-20 与 S11720-40 的产品页都写密接光学系统用 CMOS 线阵，像元 127 × 127 μm，光谱响应 400 到 1000 nm，内置 16-bit A/D 转换器。产品页没有写发布日期。手册 KMPD1200E01 把两款印在同一份资料上，页脚写 Feb. 2020，并写资料截至 February 2020，记为约 2020 年 2 月。产品页窗口写成 Silicone resin。手册没有窗口一行，密封材料写成 Silicone resin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S11720-20", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11720-20.html", [
        "产品页没有写发布日期。正文写一台相机读出 195 mm（S11720-20）或 390 mm（S11720-40），灵敏度写成 40800 V/lx･s，行频写成 45.4 klines/s。特性写像元 127 × 127 μm，像素数 1536（256 × 6 chips），有效感光区长度 194.97 mm，高速读出 45.4 klines/s，高灵敏度 40800 V/lx·s（gain=8），各像素同时积分，5 V，SPI，内置 16-bit A/D 转换器。",
        "规格表类型为 High-speed readout type。图像尺寸写成 194.972 × 0.127 mm，有效像素 1536 x 1，像元 127 x 127 μm。最高行频 45400 行/秒。无制冷，窗口写成 Silicone resin，封装 Glass epoxy。产品页没有测量条件一行。",
        "手册结构表像素数 1536（256 × 6），像素间距和高度都是 127 μm，有效感光区长度 194.972 mm，封装 Glass epoxy，密封材料 Silicone resin。特性里的长度写成 194.97 mm，正文写成 195 mm。应用栏写胶片检查、印制电路板外观检查、印刷检查和工业线阵相机。",
        "手册 CMOS 时钟频率最低 10 MHz、典型 13 MHz、最高 15 MHz。数据率写成 f(CCLK) × 6。行频上限 45.4 klines/s。供电电流在 f(CCLK)=15 MHz、暗态时典型 530 mA、最大 630 mA。A/D 转换器分辨率写成 16 bit。光灵敏度增益 1 典型 5100 V/(lx∙s)，增益 8 典型 40800 V/(lx∙s)。转换效率增益 8 典型 200 μV/e-。峰值波长典型 700 nm。光响应非均匀性按 1530 像素计算。",
      ], "nir"),
      page("S11720-40", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S11720-40.html", [
        "产品页没有写发布日期。正文把两个长度都写成 S11720-40，印成 195 mm（S11720-40）、390 mm（S11720-40）。灵敏度仍写成 40800 V/lx･s，行频仍写成 45.4 klines/s。特性写像素数 3072（256 × 12 chips），有效感光区长度 390.04 mm，其余与 S11720-20 相同。",
        "规格表图像尺寸写成 390.044 × 0.127 mm，有效像素 3072 x 1，像元 127 x 127 μm。最高行频同样写成 45400 行/秒。窗口写成 Silicone resin，封装 Glass epoxy。",
        "手册结构表像素数 3072（256 × 12），有效感光区长度 390.044 mm。特性长度写成 390.04 mm，正文写成 390 mm。供电电流在 f(CCLK)=15 MHz、暗态时典型 1060 mA、最大 1260 mA。",
        "手册光灵敏度和转换效率没有按型号拆开。暗输出增益 8 的数字输出一行写成典型 54.7 DN、最大 27.3 DN。光响应非均匀性按 3066 像素计算，注记写去掉两端各 3 个像素。",
      ], "nir"),
    ],
  },
  {
    id: "s12198",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S12198：滨松紫外区光谱平滑的 CMOS 线阵",
    summary:
      "S12198-512Q-01 与 S12198-1024Q-01 的产品页都写竖长像元 25 × 500 μm 的 CMOS 线阵，光谱响应 200 到 1000 nm，并写紫外区光谱响应平滑变化。产品页没有写发布日期。手册 KMPD1178E03 标题写成 S12198 series (-01)，页脚写 Sep. 2018，并写资料截至 September 2018，记为约 2018 年 9 月。产品页和手册窗口都写成 Quartz。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S12198-512Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12198-512Q-01.html", [
          "产品页没有写发布日期。正文写 vertically long pixels (25 × 500 μm)，并把 varying 印成 varing。特性写 Pixel size : 25 × 500 μm，冒号前有空格，512 像素，有效感光区长度写成 12.8 mm，冒号后没有空格。增益切换、紫外区光谱、同时积分、可变积分时间和单 5 V 的写法与 1024 像素那一页相同。",
          "规格表类型为 High-speed readout type。图像尺寸 12.8 x 0.5 mm，有效像素 512 x 1，像元 25 x 500 μm。最高行频 18450 行/秒。无制冷，窗口写成 Quartz，封装 Ceramic。产品页没有测量条件一行。",
          "手册结构表像素数 512，像元 25 × 500 µm，感光区长度 12.8 mm，封装 Ceramic，窗口材料 Quartz。特性同样把 varying 印成 varing。应用栏写分光光度计和图像读取。",
          "手册视频数据率符号写成 DR，等于 f(CLK)。行频上限 18450 行/秒。供电电流符号写成 Ic，在 f(CLK)=10 MHz、暗态时典型 32 mA、最大 40 mA。光灵敏度高增益典型 189 V/(lx∙s)，低增益典型 42 V/(lx∙s)。转换效率符号写成 CCE，高增益典型 0.56 µV/e-，低增益典型 0.13 µV/e-。峰值波长典型 750 nm。",
          "手册光谱图标题旁另印一行 Block diagram (S9227/-03, S10227series)。操作示例页眉写成 Operetion example (S11637-1024Q)，正文标题是 S12198-512Q-01，起始脉冲周期 54.2 µs。外形图把 Tolerance 印成 Torelance，把 photosensitive 印成 phtosensitive。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S12198-1024Q-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12198-1024Q-01.html", [
          "产品页没有写发布日期。正文与 512 像素那一页相同，包括 varing。特性写 1024 像素，有效感光区长度一行写成 length : 25.6 mm，冒号前有空格。增益切换一行前面也有空格。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 1024 x 1，像元 25 x 500 μm。最高行频 9487 行/秒。窗口写成 Quartz，封装 Ceramic。",
          "手册结构表像素数 1024，感光区长度 25.6 mm。供电电流在 f(CLK)=10 MHz、暗态时典型 46 mA、最大 61 mA。行频上限 9487 行/秒。光灵敏度和转换效率与 512 像素那一款写在同一组。",
          "手册操作示例正文标题是 S12198-1024Q-01，起始脉冲周期 105.4 µs。页眉仍写成 Operetion example (S11637-1024Q)。紫外区光谱图图例写成 S12198 series (previous product) 和 S12198 series (-01)。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s12379",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S12379：滨松四端口前照 CCD 线阵",
    summary:
      "产品页写高速行频、前照 CCD 线阵，用于机器视觉相机，2048 像素，像元 8 × 8 μm，光谱响应 200 到 1000 nm。产品页没有写发布日期。手册 KMPD1149E02 页脚写 Oct. 2016，并写资料截至 October 2016，记为约 2016 年 10 月。产品页窗口写成 Quartz。手册窗口写成 Quartz glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S12379", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12379.html", [
          "产品页没有写发布日期。正文写 high-speed line rate, front-illuminated CCD linear image sensor designed for machine vision cameras。特性写像元 8 × 8 μm，2048 像素，四端口读出最高 40 MHz × 4 ports，并写 Line, pixel binning, area scanning。CCD 节点灵敏度典型 21 μV/e-。另写抗光晕。",
          "规格表类型为 Standard type。图像尺寸 16.384 x 0.008 mm，有效像素 2048 x 1，像元 8 x 8 μm。行频典型 36000 行/秒，最高 72000 行/秒。暗电流典型写成 30 e-/pixel/s。读出噪声典型 20 e- rms。无制冷，窗口写成 Quartz，封装 Ceramic。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。",
          "手册标题写 4-port readout。特性没有写 Line, pixel binning, area scanning。应用栏标题用单数 Application，写机器视觉和高速图像读出。结构表图像尺寸 16.384 × 0.008 mm，总像素 2104，有效像素 2048，封装 24-pin ceramic DIP，窗口材料 Quartz glass，注记写 Resin sealing。",
          "手册行频典型 36 kHz、最高 72 kHz。每端口输出信号频率最高 40 MHz。暗电流单位写成 e-/ms。全部有效像素平均典型 30、最大 100，全部有效像素中的最大值典型 40、最大 100。CCD 节点灵敏度典型 21 μV/e-，最小 19、最大 23。饱和电荷典型 20 ke-。读出噪声典型 20 e- rms，注记写读出频率 40 MHz。每端口功耗典型 100 mW。光谱响应图标题写成 without window，注记写光谱响应会随石英玻璃透过率下降。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s12443",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S12443：滨松小型封装 CMOS 线阵",
    summary:
      "产品页写 2496 像素的 CMOS 线阵，像元 7 × 125 μm，有效感光区长度 17.472 mm，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1137E11 页脚写 May 2025，并写资料截至 May 2025，记为约 2025 年 5 月。产品页窗口写成 Epoxy resin。手册没有窗口一行，密封材料写成 Silicone resin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S12443", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12443.html", [
        "产品页没有写发布日期。正文写 compact yet 2496-pixel long photosensitive area，像元写成 7 x 125 μm。特性写像元 7 × 125 μm，2496 像素，有效感光区长度 17.472 mm，单 3.3 V，内置时序发生器，视频数据率最高 10 MHz。输入端电容一行把 input 印成 imput，写成 Small imput terminal capacitance: 5 pF。",
        "规格表类型为 Resin-sealed type package。图像尺寸 17.472 x 0.125 mm，有效像素 2496 x 1，像元 7 x 125 μm。最高行频 3924 行/秒。无制冷，窗口写成 Epoxy resin，封装 Glass epoxy。测量条件写 Typ. Ta=25 ℃，Vdd=3.3 V，V(CLK)=V(ST)=3.3 V，f(CLK)=10 MHz，unless otherwise noted。",
        "手册结构表像素间距 7 µm，像素高度 125 µm，感光区长度 17.472 mm，封装 Glass epoxy，密封材料 Silicone resin。特性把输入端电容写成 Small input terminal capacitance: 5 pF，并写各像素同时积分和电子快门。应用栏写条码读取器、位置检测、图像读取和编码器。",
        "手册把 Electrical characteristics 印成 Electrical characterisitics。时钟频率典型写成 5M，最高 10 MHz。数据率写成等于 f(CLK)。供电电流在 f(CLK)=10 MHz 时最小 14 mA、典型 21 mA、最大 30 mA。注记写 f(CLK)=200 kHz 时典型 8 mA。光灵敏度典型 500 V/(lx·s)，峰值波长典型 700 nm，转换效率典型 25 µV/e-。光响应非均匀性按 2490 像素计算。绝对最大额定注记写成 Always be sure to the product within the absolute maximum ratings。",
      ], "nir"),
    ],
  },
  {
    id: "s12551",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S12551：滨松分选用前照 CCD 线阵",
    summary:
      "S12551-1024 与 S12551-2048 的产品页都写前照 CCD 线阵，像元 14 × 14 μm，光谱响应 200 到 1000 nm，用于分选机一类用途。产品页没有写发布日期。手册 KMPD1147E05 把两款印在同一份资料上，页脚写 Mar. 2021，并写资料截至 March 2021，记为约 2021 年 3 月。产品页和手册窗口都写成 Quartz glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S12551-1024", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12551-1024.html", [
          "产品页没有写发布日期。正文写 front-illuminated type CCD linear image sensor，用于 sorting machine。特性写像元 14 × 14 μm，1024 像素，CCD 节点灵敏度典型 13 μV/e-，读出速度最高 40 MHz，抗光晕，内置电子快门。",
          "规格表类型为 Standard type。图像尺寸 14.336 x 0.014 mm，有效像素 1024 x 1，像元 14 x 14 μm。行频典型 18900 行/秒，最高 37900 行/秒。暗电流典型写成 15 e-/pixel/s。读出噪声典型 40 e- rms。无制冷，窗口写成 Quartz glass，封装 Ceramic。测量条件写行频不含电子快门，暗电流是全部有效像素中的最大值，读出噪声的读出频率是 40 MHz。",
          "手册结构表像素数 1044，有效像素 1024，图像尺寸 14.336 × 0.014 mm，水平时钟两相，输出电路为三级 MOSFET 源极跟随器，封装 24-pin ceramic DIP，窗口材料 Quartz glass，注记写 Resin sealing。应用栏写异物筛选和高速成像。",
          "手册把 Electrical characteristics 印成 Electrical characterisitics。不含电子快门时行频典型 18.9 kHz、最高 37.9 kHz，含电子快门时典型 18.4 kHz、最高 36.0 kHz。暗电流符号写成 ID max，单位写成 e-/pixel/ms，典型 15、最大 75。满阱典型 100 ke-，转换效率典型 13 μV/e-。读出噪声典型 40 e- rms。功耗典型 100 mW。绝对最大额定注记写成 Always be sure to the product within the absolute maximum ratings。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S12551-2048", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12551-2048.html", [
          "产品页没有写发布日期。正文与 1024 像素那一页相同。特性在 CCD 节点灵敏度之后另写 about twice compared to previous product S11151-2048。像素数写成 2048。",
          "规格表图像尺寸 28.672 x 0.014 mm，有效像素 2048 x 1，像元 14 x 14 μm。行频典型 9600 行/秒，最高 19200 行/秒。暗电流典型仍写 15 e-/pixel/s。读出噪声典型 40 e- rms。窗口写成 Quartz glass，封装 Ceramic。测量条件把 effective 印成 eﬀective。",
          "手册结构表像素数 2068，有效像素 2048，图像尺寸 28.672 × 0.014 mm。特性没有写相对 S11151-2048 大约两倍。不含电子快门时行频典型 9.6 kHz、最高 19.2 kHz，含电子快门时典型 9.5 kHz、最高 18.7 kHz。",
          "手册暗电流、满阱、转换效率和读出噪声与 1024 像素那一款写在同一组，单位仍是 e-/pixel/ms。水平移位寄存器电容典型 220 pF，1024 像素那一款同栏是 90 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s12706",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S12706：滨松细像元高灵敏度 CMOS 线阵",
    summary:
      "产品页写细像元高灵敏度 CMOS 线阵，4096 像素，像元 7 × 7 μm，有效感光区长度 28.672 mm，光谱响应 400 到 1000 nm。产品页没有写发布日期。手册 KMPD1146E06 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。产品页窗口写成 Broslicate glass。手册窗口写成 Borosilicate glass。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("S12706", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S12706.html", [
        "产品页没有写发布日期。正文把 It 印成 it，像元写成 7 x 7 μm，有效感光区长度 28.672 mm，4096 像素。特性写高灵敏度 23 V/(lx・s)，各像素同时积分，电子快门，单 5 V，内置时序发生器，视频数据率最高 10 MHz。",
        "规格表类型为 High sensitivity type。图像尺寸 28.672 x 0.007 mm，有效像素 4096 x 1，像元 7 x 7 μm。最高行频 2387 行/秒。无制冷，窗口写成 Broslicate glass，封装 LCP。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz，unless otherwise noted。",
        "手册正文写成 It has，并把 effective photosensitive area length 写成 effective photosensitive length。特性光灵敏度写成 23 V/(lx·s)。结构表封装写成 LCP (liquid crystal polymer)，窗口材料 Borosilicate glass。应用栏写位置检测、图像读取和编码器。",
        "手册时钟频率典型写成 5M，最高 10 MHz。数据率写成等于 f(CLK)。供电电流在 f(CLK)=10 MHz 时最小 20 mA、典型 40 mA、最大 60 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。光灵敏度符号写成 S，典型 23 V/(lx·s)。峰值波长典型 600 nm，转换效率典型 25 µV/e-。饱和输出注记把 Difference 印成 Diference。光响应非均匀性按 4090 像素计算。",
        "手册操作示例页眉写成 Operetion example (for outputting signals from all 2048 channels)。正文写 When outputting from all 4096 pixels。时钟 10 MHz 时起始脉冲周期 418.8 µs。",
      ], "nir"),
    ],
  },
  {
    id: "s13488",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13488：滨松彩色与高灵敏度 CMOS 线阵",
    summary:
      "S13488 的产品页写对红、绿、蓝敏感的 CMOS 线阵，滤光片顺序为 R、G、B。S13488-01 的产品页写带增益切换的高灵敏度 CMOS 线阵。两款都是 2048 像素，像元 14 × 42 μm，光谱响应 400 到 1000 nm。产品页没有写发布日期。S13488 手册 KMPD1180E04 页脚写 Sep. 2022，记为约 2022 年 9 月。S13488-01 手册 KMPD1167E03 页脚写 May 2022，记为约 2022 年 5 月。两份手册窗口都写成 Borosilicate glass。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("S13488", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13488.html", [
        "产品页没有写发布日期。正文写对红 630 nm、绿 540 nm、蓝 460 nm 敏感，滤光片按 R、G、B 排列。特性写像元 14 × 42 μm，2048 像素，有效感光区长度 28.672 mm。高增益光灵敏度写成红 65 V/(lx·s)、绿 85 V/(lx·s)、蓝 35 V/(lx·s)。光谱响应 400 到 1000 nm，视频数据率最高 10 MHz。",
        "规格表类型为 High sensitivity type。图像尺寸 28.672 x 0.042 mm，有效像素 2048 x 1，像元 14 x 42 μm。最高行频 4672 行/秒。无制冷，窗口写成 Borosilicate glass，封装 LCP。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz，unless otherwise noted。",
        "手册标题写 RGB color image sensor。结构表封装写成 LCP (liquid crystal polymer)，窗口材料 Borosilicate glass。应用栏写图像读取和各种颜色检测。光谱响应注记写这款传感器在红外也有灵敏度，需要时截去红外光。",
        "手册时钟频率典型写成 5M。供电电流高增益在 f(CLK)=10 MHz 时典型 75 mA，低增益典型 35 mA。注记写 f(CLK)=200 kHz 时高增益 55 mA、低增益 15 mA。高增益光灵敏度典型值与特性相同，红 65、绿 85、蓝 35 V/(lx·s)。低增益典型 13、17、7 V/(lx·s)。转换效率高增益典型 125 µV/e-，低增益典型 25 µV/e-。光响应非均匀性按每种颜色的 2042 像素计算。",
      ], "nir"),
      page("S13488-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13488-01.html", [
        "产品页没有写发布日期。正文写像元 14 × 42 µm，噪声低于、灵敏度高于前代 S11638，并带增益切换。特性把高灵敏度写成 1100 V/(lx·s)。像素数、感光区长度、光谱响应、电源和视频数据率与 S13488 的特性写法相同。",
        "规格表图像尺寸、像素、像元、行频、窗口和封装与 S13488 相同。最高行频 4672 行/秒。窗口写成 Borosilicate glass，封装 LCP。测量条件也相同。",
        "手册特性同样把高灵敏度写成 1100 V/(lx·s)。电光特性表的光灵敏度高增益典型 1350 V/(lx·s)，低增益典型 270 V/(lx·s)。峰值波长典型 700 nm。转换效率高增益典型 125 µV/e-，低增益典型 25 µV/e-。",
        "手册时钟频率典型一栏写成 -，最高 10 MHz。供电电流与 S13488 同为高增益典型 75 mA、低增益典型 35 mA。注记写 f(CLK)=200 kHz 时高增益 55 mA，并把低增益写成 Low gain。光响应非均匀性按 2042 像素计算。应用栏写光谱仪、位置检测、图像读取和编码器。",
      ], "nir"),
    ],
  },
  {
    id: "s13828",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13828：滨松紫外到近红外高灵敏度 CMOS 线阵",
    summary:
      "产品页写竖长像元 28 × 84 μm 的高灵敏度 CMOS 线阵，1024 像素，有效感光区长度 28.672 mm，光谱响应 200 到 1000 nm，用于低成本光谱仪。产品页没有写发布日期。手册 KMPD1168E08 页脚写 Apr. 2024，并写资料截至 April 2024，记为约 2024 年 4 月。产品页和手册窗口都写成 Quartz。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S13828", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-industry/S13828.html", [
          "产品页没有写发布日期。正文写 vertically long pixels (28 × 84 µm)，紫外区灵敏度高、耐紫外，单 5 V，适合 low cost spectrometers。特性写像元 28 × 84 μm，1024 像素，有效感光区长度 28.672 mm，高灵敏度 1100 V/(lx·s)，光谱响应 200 到 1000 nm，视频数据率最高 10 MHz。",
          "规格表类型为 High sensitivity type。图像尺寸 28.672 x 0.084 mm，有效像素 1024 x 1，像元 28 x 84 μm。最高行频 8960 行/秒。无制冷，窗口写成 Quartz，封装 LCP。测量条件写 Typ. Ta=25 ℃，Vdd=5 V，V(CLK)=V(ST)=5 V，f(CLK)=10 MHz，unless otherwise noted。",
          "手册结构表像素数 1024，像元 28 × 84 µm，感光区长度 28.672 mm，封装写成 LCP (liquid crystal polymer)，窗口材料 Quartz。应用栏写光谱仪、位置检测、图像读取和编码器。",
          "手册时钟频率典型写成 5M，最高 10 MHz。数据率写成等于 f(CLK)。供电电流在 f(CLK)=10 MHz 时最小 20 mA、典型 25 mA、最大 50 mA。注记写 f(CLK)=200 kHz 时典型 10 mA。光灵敏度典型 1100 V/(lx·s)，峰值波长典型 700 nm。转换效率符号写成 CCE，典型 20 µV/e-。光响应非均匀性按 1018 像素计算。",
          "手册操作示例页眉写成 Operetion example (for outputting signals from all 2048 channels)。下一行写 When outputting from all 1024 pixels。同一段又写 for outputting signals from all 2048 channels。时钟 10 MHz 时起始脉冲周期 111.6 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "g12242",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G12242-0707W：滨松 InGaAs 面阵",
    summary:
      "产品页标题写近红外二维图像传感器。光谱响应 0.95 到 1.7 μm，与同范围的 G14671 一起放在短波。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G12242-0707W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G12242-0707W.html", [
        "128×128，像素 20 μm。光谱响应 0.95 到 1.7 μm，峰值灵敏度典型 1550 nm。",
        "最高 258 帧/秒。两级热电制冷。全局快门与卷帘快门可切换。",
      ], "swir"),
    ],
  },
  {
    id: "g13393",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G13393：滨松两级制冷 InGaAs 面阵",
    summary:
      "G13393-0808W 与 G13393-0909W 的产品页都写近红外二维图像传感器，光谱响应 0.95 μm 到 1.7 μm。都是金属封装、两级热电制冷、全局快门。产品页没有写发布日期。手册 KMIR1029E04 与 KMIR1027E04 的页脚都写 Mar. 2025，并写资料截至 March 2025，记为约 2025 年 3 月。产品页把灵敏度写成 1 uV/e-。手册特性栏写成 1 μV/e，转换效率表的单位写成 µV/e-。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
    models: [
      page("G13393-0808W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G13393-0808W.html", [
        "产品页没有写发布日期。320×256，像元 20 μm × 20 μm，像元间距 20 μm。图像尺寸 6.40 mm × 5.12 mm。金属封装，两级热电制冷。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高 228 帧/秒。暗电流典型 0.5 pA。特性写全局快门，并写内置时序发生器。测量条件写 Td=15 ℃，Vdd=Port_sel=Mode01=5 V，Mode02=0 V，Vb1=0.5 V，PD_bias=3 V，Vref=3 V。",
        "手册把应用写成近红外无损检测（农产品检测、半导体检测、液位检测）、高光谱成像和交通监测。结构表写填充因子 100%，封装 28-pin metal，窗口为带增透膜的蓝宝石玻璃。",
        "手册：光灵敏度典型 0.8 A/W，转换效率典型 1 µV/e-，饱和电荷典型 1100 ke，暗电流最大 2.5 pA。读出噪声符号 Nr，典型 500 µV rms。动态范围符号 DR，典型 2200。缺陷像素上限 0.37%，并写相邻缺陷像素少于 16。供电电流典型 50 mA、最大 100 mA。条件为 Ta=25 °C、Td=15 °C。",
        "产品页写信号从一路视频线读出。手册写读出端口数为 4，一帧扫描写成 256 行 × 80 列。框图标题写成 G12242-0909W。时序图标题写成 G12242-0707R/-0707W。等效电路标题写成 G12242-0707R。",
      ], "swir"),
      page("G13393-0909W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G13393-0909W.html", [
        "产品页没有写发布日期。640×512，像元 20 μm × 20 μm，像元间距 20 μm。图像尺寸 12.80 mm × 10.24 mm。金属封装，两级热电制冷。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高 62 帧/秒。暗电流典型 0.5 pA。特性写全局快门，并写内置时序发生器。测量条件写 Td=15 ℃，Vdd=Port_sel=Mode01=5 V，Mode02=0 V，Vb1=0.5 V，PD_bias=3 V，Vref=3 V。",
        "手册把应用写成热像监测、高光谱成像、近红外图像检测、异物检测、半导体测试和交通监测。结构表同样写填充因子 100%、28-pin metal，窗口为带增透膜的蓝宝石玻璃。图像尺寸写成 12.8 × 10.24 mm。",
        "手册：光灵敏度典型 0.8 A/W，转换效率典型 1 µV/e-，饱和电荷典型 1100 ke，暗电流最大 2.5 pA。读出噪声符号 Nread，典型 500 µV rms。动态范围符号 Drange，典型 2200。缺陷像素上限 0.37%，并写相邻缺陷像素少于 16。供电电流典型 70 mA、最大 140 mA。",
        "产品页写信号从一路视频线读出。手册写读出端口数为 4，一帧扫描写成 512 行 × 160 列。框图标题写成 G12242-0909W, G13393-0909W。时序图标题写成 G12242-0707R/-0707W。等效电路标题写成 G12242-0707R。",
      ], "swir"),
    ],
  },
  {
    id: "g1467",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1467：滨松 InGaAs 面阵",
    summary:
      "选型指南把 G14671 到 G14674 列在同一族，都是 320×256、20 μm。光谱响应从 0.95 μm 延伸到 2.55 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G14671-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，光谱响应 0.95 到 1.69 μm。两级热电制冷，芯片 15℃。",
      ], "swir", "打开产品手册"),
      page("G14672-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.12 到 1.85 μm。芯片温度 -20℃。",
      ], "swir", "打开产品手册"),
      page("G14673-0808W", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.3 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G14674-0808W", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor/ingaas-area-image-sensor/G14674-0808W.html", [
        "产品页标题写近红外，光谱响应写明 1.70 到 2.55 μm，峰值灵敏度典型 2200 nm。",
        "320×256，像素 20 μm。最高 509 帧/秒。两级热电制冷。",
      ], "swir"),
    ],
  },
  {
    id: "g1656",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1656：滨松三级制冷 InGaAs 面阵",
    summary:
      "选型指南把 G16561 到 G16564 的 0808 列为 320×256、三级热电制冷，最高帧频 503 帧/秒。约 2026 年 3 月的同一指南还列出 0909，为 640×512、像素 20 μm，最高帧频 116 帧/秒。光谱响应与 G1467 同档。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G16561-0808T", "", hamamatsuGuide, [
        "选型指南：光谱响应 0.95 到 1.69 μm。三级热电制冷，芯片 15℃。最高帧频 503 帧/秒。",
      ], "swir", "打开产品手册"),
      page("G16562-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.12 到 1.85 μm。",
      ], "swir", "打开产品手册"),
      page("G16563-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.3 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G16564-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 1.7 到 2.55 μm。",
      ], "swir", "打开产品手册"),
      page("G16561-0909T", "", hamamatsuGuide, [
        "约 2026 年 3 月的选型指南：640×512，像素 20 μm。光谱响应 0.95 到 1.69 μm。三级热电制冷，芯片 15℃。最高帧频 116 帧/秒。缺陷像素上限 0.37%。",
      ], "swir", "打开产品手册"),
      page("G16562-0909T", "", hamamatsuGuide, [
        "选型指南与 G16561-0909T 同在 640×512、像素 20 μm 这一组，最高帧频 116 帧/秒。光谱响应 1.12 到 1.85 μm。",
      ], "swir", "打开产品手册"),
      page("G16563-0909T", "", hamamatsuGuide, [
        "选型指南：640×512，像素 20 μm。光谱响应 1.3 到 2.15 μm。三级热电制冷，芯片 -20℃。最高帧频 116 帧/秒。缺陷像素上限 1%。",
      ], "swir", "打开产品手册"),
      page("G16564-0909T", "", hamamatsuGuide, [
        "选型指南与 G16563-0909T 同在 640×512、像素 20 μm 这一组，最高帧频 116 帧/秒。光谱响应 1.7 到 2.55 μm。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "g1724",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1724：滨松宽光谱 InGaAs 面阵",
    summary: "选型指南把 G17242 与 G17243 列为 320×256、三级热电制冷，光谱从 0.9 μm 分别到 2.15 μm 和 2.55 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G17242-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，三级热电制冷。光谱响应 0.9 到 2.15 μm。",
      ], "swir", "打开产品手册"),
      page("G17243-0808T", "", hamamatsuGuide, [
        "选型指南：320×256，像素 20 μm。光谱响应 0.9 到 2.55 μm。1.7 μm 区域缺陷像素上限 0.37%，2.2 与 2.6 μm 区域为 1%。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "hamamatsu-ingaas-small",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "滨松小面阵 InGaAs",
    summary: "选型指南还列出 64×64 与 192×96 的 InGaAs 面阵，光谱响应落在短波范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G11097-0606S", "", hamamatsuGuide, [
        "选型指南：64×64，像素 50 μm。光谱响应 0.95 到 1.7 μm。一级热电制冷。最高 1025 帧/秒。",
      ], "swir", "打开产品手册"),
      page("G12460-0606S", "", hamamatsuGuide, [
        "选型指南：64×64。光谱响应 1.12 到 1.9 μm。芯片温度 0℃。",
      ], "swir", "打开产品手册"),
      page("G13441-01", "", hamamatsuGuide, [
        "选型指南：192×96，像素 50 μm。光谱响应 1.3 到 2.15 μm。最高 867 帧/秒。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "g920",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G920：滨松 DWDM 监测用 InGaAs 线阵",
    summary:
      "G9203-256DA 与 G9204-512DA 的产品页都写用于光通信里的 WDM 监测。光谱响应都是 900 nm 到 1700 nm，无制冷，陶瓷封装。转换效率可选 16 nV/e⁻ 或 320 nV/e⁻。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G9203-256DA", "", hamamatsuLine("G9203-256DA"), [
        "产品页没有写发布日期。标题写用于 DWDM 波长监测的图像传感器。256 像素，1 路视频。像元 50 μm × 500 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷。最高行频 1910 行/秒。暗电流最大 20 pA。",
        "封装为气密陶瓷，窗口有减反射膜。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G9204-512DA", "", hamamatsuLine("G9204-512DA"), [
        "产品页没有写发布日期。512 通道，产品页写 2 路视频，并写高分辨率 25 μm 间距。像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷。规格表最高行频 960 行/秒。页上另写：用两路视频读出时，行频与 256 通道相同。暗电流最大 5 pA。",
        "与 G9203-256DA 同页说明可选转换效率 16 nV/e⁻ 和 320 nV/e⁻。陶瓷封装。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "g11608",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G11608：滨松宽光谱 InGaAs 线阵",
    summary:
      "G11608-256DA 与 G11608-512DA 的产品页都写光谱响应 0.5 μm 到 1.7 μm，用于近红外多通道分光。两款都是无制冷陶瓷封装，峰值灵敏度典型 1550 nm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("G11608-256DA", "", hamamatsuLine("G11608-256DA"), [
          "产品页没有写发布日期。标题写宽光谱近红外图像传感器，0.5 μm 到 1.7 μm。正文写短波一侧灵敏度有增强。",
          "256 像素，像元 50 μm × 500 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.5 mm。无制冷，陶瓷封装。最高行频 17200 行/秒。",
          "规格表光谱响应 500 nm 到 1700 nm，峰值灵敏度典型 1550 nm。暗电流最大 10 pA。测量条件写典型 Ta=25℃，f=500 kHz。",
        ], "nir"),
        bands: ["nir", "swir"],
      },
      {
        ...page("G11608-512DA", "", hamamatsuLine("G11608-512DA"), [
          "产品页没有写发布日期。特性同样写光谱响应 0.5 μm 到 1.7 μm。512 像素，像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。",
          "无制冷，陶瓷封装。最高行频 9150 行/秒。规格表光谱响应 500 nm 到 1700 nm，峰值灵敏度典型 1550 nm。暗电流最大 5 pA。",
          "测量条件写典型 Ta=25℃，f=500 kHz。",
        ], "nir"),
        bands: ["nir", "swir"],
      },
    ],
  },
  {
    id: "g11508",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G11508：滨松一级制冷 InGaAs 线阵",
    summary:
      "G11508-256SA 与 G11508-512SA 的产品页都写近红外传感器，光谱响应 900 nm 到 1670 nm，一级热电制冷，金属封装。用于近红外多通道分光。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G11508-256SA", "", hamamatsuLine("G11508-256SA"), [
        "产品页没有写发布日期。正文把 consist of 写成 consist an。256 像素，像元 50 μm × 500 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "光谱响应 900 nm 到 1670 nm，峰值灵敏度典型 1550 nm。一级热电制冷，金属封装。最高行频 17200 行/秒。暗电流最大 10 pA。",
        "测量条件写典型 Ta=25℃，光谱响应范围的芯片温度为 -10℃。数据手册和选型指南都把缺陷像素上限写成 0。",
      ], "swir"),
      page("G11508-512SA", "", hamamatsuLine("G11508-512SA"), [
        "产品页没有写发布日期。正文同样把 consist of 写成 consist an，并写高分辨率 25 μm 间距。512 像素，像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "光谱响应 900 nm 到 1670 nm，峰值灵敏度典型 1550 nm。一级热电制冷，金属封装。规格表最高行频 9150 行/秒。页上另写：用两路视频读出时，行频与 256 通道相同。暗电流最大 5 pA。",
        "测量条件写典型 Ta=25℃，光谱响应范围的芯片温度为 -10℃。",
      ], "swir"),
    ],
  },
  {
    id: "g11620",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G11620：滨松分光用 InGaAs 线阵",
    summary:
      "产品页写 G11620 系列用于近红外多通道分光。InGaAs 阵列只与一片 CMOS 用凸点连接，用来减小奇数像素和偶数像素的视频输出差。规格表光谱响应都是 950 nm 到 1700 nm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G11620-256DA", "", hamamatsuLine("G11620-256DA"), [
        "产品页没有写发布日期。标题写单路视频、256 像素，0.95 μm 到 1.7 μm。像元 50 μm × 500 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "无制冷，陶瓷封装。最高行频 17200 行/秒。峰值灵敏度典型 1550 nm。暗电流最大 5 pA。测量条件写典型 Ta=25℃，f=1 MHz。",
      ], "swir"),
      page("G11620-256DF", "", hamamatsuLine("G11620-256DF"), [
        "产品页没有写发布日期。标题写单路视频、256 像素。特性写高分辨率 25 μm 间距。像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 6.4 mm × 0.5 mm。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷，陶瓷封装。最高行频 17200 行/秒。暗电流最大 5 pA。",
      ], "swir"),
      page("G11620-512DA", "", hamamatsuLine("G11620-512DA"), [
        "产品页没有写发布日期。标题写单路视频、512 像素，0.95 μm 到 1.7 μm。特性写高分辨率 25 μm 间距。像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。",
        "无制冷，陶瓷封装。最高行频 9150 行/秒。规格表光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。暗电流最大 5 pA。",
      ], "swir"),
      page("G11620-256SA", "", hamamatsuLine("G11620-256SA"), [
        "产品页没有写发布日期。标题写制冷型、单路视频、256 像素。像元 50 μm × 500 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.5 mm。金属封装，一级热电制冷。",
        "规格表光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 17200 行/秒。暗电流最大 5 pA。测量条件写典型 Ta=25℃。",
        "选型指南把一级制冷型号的光谱响应写成 0.95 到 1.67 μm，芯片温度 -10℃。",
      ], "swir"),
      page("G11620-512SA", "", hamamatsuLine("G11620-512SA"), [
        "产品页没有写发布日期。标题写制冷型、单路视频、512 像素。特性写高分辨率 25 μm 间距。像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。金属封装，一级热电制冷。",
        "规格表光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 9150 行/秒。暗电流最大 5 pA。测量条件写典型 Ta=25℃。",
        "选型指南把一级制冷型号的光谱响应写成 0.95 到 1.67 μm，芯片温度 -10℃。",
      ], "swir"),
    ],
  },
  {
    id: "g1147",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1147：滨松两级制冷 InGaAs 线阵",
    summary:
      "产品页把 G11475 到 G11478 写成同一系列，用于近红外多通道分光。都是金属封装、两级热电制冷，测量条件写芯片温度 -20℃。256 像素的像元为 50 μm × 250 μm，最高行频 17200 行/秒。512 像素的像元为 25 μm × 250 μm，最高行频 9150 行/秒。选型指南写 256 像素型号的缺陷像素上限为 5%，512 像素型号为 4%。数据手册把这一系列的缺陷像素上限写成 5%。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G11475-256WB", "", hamamatsuLine("G11475-256WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 1.85 μm。正文把 consist of 写成 consist an。256 有效像素，像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 1850 nm，峰值灵敏度典型 1750 nm。两级热电制冷，金属封装。最高行频 17200 行/秒。暗电流最大 20 pA。",
        "测量条件写典型 Ta=25℃，并写 Tchip=-20℃。",
      ], "swir"),
      page("G11475-512WB", "", hamamatsuLine("G11475-512WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 1.85 μm，并写高分辨率 25 μm 间距。512 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 1850 nm，峰值灵敏度典型 1750 nm。两级热电制冷。最高行频 9150 行/秒。暗电流最大 20 pA。测量条件写 Tchip=-20℃。",
        "页底前代产品写成 G9205-512WB，光谱 900 到 1850 nm，最高行频 1910 行/秒。",
      ], "swir"),
      page("G11476-256WB", "", hamamatsuLine("G11476-256WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 2.05 μm。256 有效像素，像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2050 nm，峰值灵敏度典型 1950 nm。两级热电制冷，金属封装。最高行频 17200 行/秒。暗电流最大 40 pA。测量条件写 Tchip=-20℃。",
        "页底前代产品写成 G9206-256WB，光谱 900 到 2050 nm。",
      ], "swir"),
      page("G11477-256WB", "", hamamatsuLine("G11477-256WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 2.15 μm。规格表写的是总像素数 256，没有有效像素栏，也没有峰值波长栏。像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2150 nm。两级热电制冷，金属封装。最高行频 17200 行/秒。暗电流最大 50 pA。测量条件写成 unless otherwise noted,Tchip=-20℃。",
        "页底前代产品写成 G9206-02B，光谱 900 到 2050 nm。",
      ], "swir"),
      page("G11477-512WB", "", hamamatsuLine("G11477-512WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 2.15 μm。512 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2150 nm，峰值灵敏度典型 1950 nm。两级热电制冷。最高行频 9150 行/秒。暗电流最大 50 pA。测量条件写 Tchip=-20℃。",
        "页底前代产品写成 G9206-512WB，光谱 900 到 2050 nm。",
      ], "swir"),
      page("G11478-256WB", "", hamamatsuLine("G11478-256WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 2.55 μm。256 有效像素，像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2550 nm，峰值灵敏度典型 2300 nm。两级热电制冷，金属封装。最高行频 17200 行/秒。暗电流最大 1000 pA。测量条件写 Tchip=-20℃。",
        "页底前代产品写成 G9208-256WB，光谱 900 到 2550 nm。",
      ], "swir"),
      page("G11478-512WB", "", hamamatsuLine("G11478-512WB"), [
        "产品页没有写发布日期。标题写 0.9 μm 到 2.55 μm。512 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2550 nm，峰值灵敏度典型 2300 nm。两级热电制冷。最高行频 9150 行/秒。暗电流最大 1000 pA。测量条件写 Tchip=-20℃。",
        "页底前代产品写成 G9208-512WB，光谱 900 到 2550 nm。",
      ], "swir"),
    ],
  },
  {
    id: "g11135",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G11135：滨松异物检测用 InGaAs 线阵",
    summary:
      "G11135-256DD 与 G11135-512DE 的产品页都写用于异物检测设备，光谱响应 950 nm 到 1700 nm，无制冷，陶瓷封装，单路视频。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G11135-256DD", "", hamamatsuLine("G11135-256DD"), [
        "产品页没有写发布日期。标题在 512 pixels 与 near 之间没有空格，写成 Single video line (256 pixels)near infrared image sensor。",
        "256 有效像素，像元 50 μm × 50 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.050 mm。无制冷，陶瓷封装。最高行频 14000 行/秒。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。暗电流最大 2.5 pA。特性写最高数据率 5 MHz，并写内置温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G11135-512DE", "", hamamatsuLine("G11135-512DE"), [
        "产品页没有写发布日期。标题同样把 (512 pixels)near 连写。512 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.025 mm。",
        "无制冷，陶瓷封装。最高行频 8150 行/秒。光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。暗电流最大 2.5 pA。",
        "特性写最高数据率 5 MHz，并写内置温度传感器。",
      ], "swir"),
    ],
  },
  {
    id: "g14006",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G14006-512DE：滨松异物检测用 InGaAs 线阵",
    summary:
      "产品页写 G14006-512DE 用于异物检测，单路视频 512 像素，光谱响应 1120 nm 到 1900 nm，无制冷。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G14006-512DE", "", hamamatsuLine("G14006-512DE"), [
        "产品页没有写发布日期。标题把 (512 pixels)near 连写。正文写室温工作。512 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.025 mm。",
        "光谱响应 1120 nm 到 1900 nm，峰值灵敏度典型 1750 nm。无制冷，陶瓷封装。最高行频 8150 行/秒。暗电流最大 10 pA。",
        "特性写最高数据率 5 MHz，并写内置温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "g14237",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G14237-512WA：滨松拉曼用 InGaAs 线阵",
    summary:
      "产品页写 G14237-512WA 用于 1064 nm 激光的拉曼光谱。相对前代 G11508-512SA，截止波长缩短，暗电流降到前代（截止波长 1.7 μm）的 1/10 或更低。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G14237-512WA", "", hamamatsuLine("G14237-512WA"), [
        "产品页没有写发布日期。512 有效像素，像元 25 μm × 500 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.5 mm。金属封装，两级热电制冷。特性写高分辨率 25 μm 间距。",
        "光谱响应 850 nm 到 1450 nm，峰值灵敏度典型 1350 nm。最高行频 9150 行/秒。暗电流最大 2 pA。转换效率可选四档。测量条件写典型 Ta=25℃，CE=16 nV/e⁻。",
        "选型指南写芯片温度 -20℃，缺陷像素上限 1%，行频格为 9150 并带星号。星号说明：用两路视频读出时，行频与 256 像素相同。",
      ], "swir"),
    ],
  },
  {
    id: "g9494",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G9494：滨松异物检测用 InGaAs 线阵",
    summary:
      "G9494-256D 与 G9494-512D 的产品页都写用于在线异物检测设备，光谱响应 0.9 μm 到 1.7 μm。产品页写方形像素，并把 CTIA 写成 Capacitive Transfer Impedance Amplifier，所有像素同时积分，像素输出之间没有时间差。数据手册编号 KMIR1014E09，日期 Nov. 2022，记为约 2022 年 11 月。手册把 CTIA 写成 Capacitive Trans-Impedance Amplifier，应用栏写异物检测监视和近红外光谱，结构表把两款封装都写成 22-pin ceramic DIP。电气特性条件写 CE=1600 nV/e⁻。缺陷像素上限 1%。暗输出表把 512 的型号写成 G9404-512D。手册图像尺寸写成 12.8 × 0.050 mm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G9494-256D", "", hamamatsuLine("G9494-256D"), [
        "产品页没有写发布日期。256 有效像素，像元 50 μm × 50 μm，像元间距 50 μm。图像尺寸 12.8 mm × 0.05 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷。最高行频 7100 行/秒。暗电流最大 20 pA。特性写数据率典型 2 MHz，转换增益可选 Cf=0.1 pF 或 1 pF，并写内置 CMOS 读出电路。",
        "产品页封装写成 Metal。测量条件写 Ta=25 ℃，integraion time:200 μs, per element。",
      ], "swir"),
      page("G9494-512D", "", hamamatsuLine("G9494-512D"), [
        "产品页没有写发布日期。512 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.025 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷。规格表最高行频 3720 行/秒。页上另写：用两路视频读出时，行频与 256 通道相同。暗电流最大 5 pA。",
        "产品页封装写成 Ceramic。特性同样写数据率典型 2 MHz，转换增益可选 Cf=0.1 pF 或 1 pF。测量条件同样写成 integraion time:200 μs, per element。",
      ], "swir"),
    ],
  },
  {
    id: "g10768",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G10768：滨松高速 1024 像素 InGaAs 线阵",
    summary:
      "G10768-1024D 与 G10768-1024DB 的产品页都写用于异物筛查和医疗诊断这类需要多通道高速行频的设备。都是 1024 像素、无制冷、陶瓷封装。信号电路写 CTIA（Capacitive Transimpedance amplifiers），经采样保持电路在所有像素同时积分时读出，并用 8 路输出提高行频。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("G10768-1024D", "", hamamatsuLine("G10768-1024D"), [
          "产品页没有写发布日期。1024 有效像素，像元 25 μm × 100 μm，像元间距 25 μm。图像尺寸 25.6 mm × 0.1 mm。",
          "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 39000 行/秒。暗电流最大 5 pA。特性写数据率典型 5 MHz、最大 6.67 MHz，转换效率四档，并写内置时序发生器。",
          "应用例写 SD-OCT：宽带光源照到样品，干涉光经分光后由线阵接收，再对波长信息做傅里叶变换，得到样品深度方向的图像。另一则应用例写线性编码器，并写这款线阵具有矩形像素、高行频和全局快门。测量条件写典型 Ta=25℃。",
        ], "swir"),
        technologies: ["spectral", "global"],
      },
      page("G10768-1024DB", "", hamamatsuLine("G10768-1024DB"), [
        "产品页没有写发布日期。1024 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 25.6 mm × 0.025 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷，陶瓷封装。最高行频 39000 行/秒。暗电流最大 5 pA。",
        "特性写数据率典型 5 MHz、最大 6.67 MHz，转换效率四档，并写内置时序发生器。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "g12230",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G12230-512WB：滨松双芯片 InGaAs 线阵",
    summary:
      "产品页写 G12230-512WB 把截止波长 1.65 μm 和 2.15 μm 的两片 InGaAs 芯片精确串联，用于近红外多通道分光。光谱响应 950 nm 到 2150 nm。两级热电制冷，金属封装。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G12230-512WB", "", hamamatsuLine("G12230-512WB"), [
        "产品页没有写发布日期。有效像素写成 254 + 254。像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.25 mm。特性写高分辨率 25 μm 间距。",
        "光谱响应 950 nm 到 2150 nm，峰值灵敏度典型 1950 nm。两级热电制冷。最高行频 9150 行/秒。暗电流最大写成 2 pA（1 到 254 通道）和 50 pA（259 到 512 通道）。",
        "特性还写两档转换效率、内置饱和对策电路、CDS、热敏电阻和时序发生器。测量条件写 Ta=25 ℃，Td=-20℃，Vdd=5 V，INP=Vinp=PDN=4 V，Fvref=1.2V，Vφ=5V，f=1 MHz。",
      ], "swir"),
    ],
  },
  {
    id: "g13913",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G13913：滨松便携分析用 InGaAs 线阵",
    summary:
      "G13913-128FB 与 G13913-256FG 的产品页都写用于便携分析仪器。相对前代 DIP 封装的 G11620 系列，电流更小，并采用带柔性板的紧凑 LCC 封装。两款都是无制冷，光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G13913-128FB", "", hamamatsuLine("G13913-128FB"), [
        "产品页没有写发布日期。128 有效像素，像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 6.4 mm × 0.25 mm。封装为带柔性板的陶瓷。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 13600 行/秒。暗电流最大 10 pA。特性写驱动 3.3 V，电流消耗 15 mA，转换效率两档。",
        "特性还写内置防饱和电路和时序发生器。测量条件写 unless otherwise noted, Typ. Ta=25 ℃，Vdd=3.3 V，INP=Fvref=Vhold=PDN=2.5V，Vclk=3.3 V，fop=1 MHz。",
      ], "swir"),
      page("G13913-256FG", "", hamamatsuLine("G13913-256FG"), [
        "产品页没有写发布日期。256 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 6.4 mm × 0.25 mm。特性写高分辨率 25 μm 间距。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷。最高行频 7290 行/秒。暗电流最大 10 pA。封装为带柔性板的陶瓷。",
        "特性写驱动 3.3 V 和两档转换效率，并写内置防饱和电路和时序发生器。测量条件与 G13913-128FB 相同。",
      ], "swir"),
    ],
  },
  {
    id: "g14714",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G14714：滨松异物检测用高速 InGaAs 线阵",
    summary:
      "产品页写 G14714 用于异物检测。G14714-512DE 的正文写 The G14714 series，G14714-1024DG 与 G14714-1024DK 的正文写具体型号。InGaAs 阵列与 CMOS 电荷放大器凸点连接。三款都是无制冷陶瓷封装，光谱响应 950 nm 到 1700 nm，最高行频 40000 行/秒，转换效率四档。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G14714-512DE", "", hamamatsuLine("G14714-512DE"), [
        "产品页没有写发布日期。512 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.025 mm。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷，陶瓷封装。最高行频 40000 行/秒。暗电流最大 5 pA。",
        "特性写最高数据率 15 MHz，并写内置时序发生器和温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G14714-1024DG", "", hamamatsuLine("G14714-1024DG"), [
        "产品页没有写发布日期。1024 有效像素，像元 12.5 μm × 250 μm，像元间距 12.5 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷，陶瓷封装。最高行频 40000 行/秒。暗电流最大 50 pA。",
        "特性写最高数据率 15 MHz，转换效率四档，并写内置时序发生器和温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G14714-1024DK", "", hamamatsuLine("G14714-1024DK"), [
        "产品页没有写发布日期。1024 有效像素，像元 12.5 μm × 12.5 μm，像元间距 12.5 μm。图像尺寸 12.8 mm × 0.0125 mm。",
        "光谱响应 950 nm 到 1700 nm，峰值灵敏度典型 1550 nm。无制冷，陶瓷封装。最高行频 40000 行/秒。暗电流最大 5 pA。",
        "特性写最高数据率 15 MHz，转换效率四档，并写内置时序发生器和温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "g1682",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G1682：滨松无制冷近红外分光用 InGaAs 线阵",
    summary:
      "数据手册标题把 G16823、G16824 和 G16825 写成同一系列，应用栏写近红外多通道分光、过程分析装置和便携分析仪器。手册编号 KMIR1040E01，页脚写 Apr. 2025，并写内容截至 April 2025，记为约 2025 年 4 月。手册特性栏把转换效率写成 CE=16 nV/e- 与 160 nV/e-。光谱响应表把 Photosensitivity 写成 Photosensivity。缺陷像素一栏，G16823 为 0%，G16824 与 G16825 的上限为 2%。电源电流典型值，128 像素为 15 mA，256 像素为 20 mA。线性度图把 Vpdn 写成 Vdpn，并把 16 nV/e⁻ 写成 16 nv/e-。各产品页都写单路视频、无制冷、陶瓷封装、驱动电压 3.3 V。产品页写这一产品比前代更小；以前的长波长型号要靠热电制冷降低暗电流，这一产品靠零偏压在无制冷下得到更低的暗电流。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("G16823-128DB", "", hamamatsuLine("G16823-128DB"), [
        "产品页没有写发布日期。标题写 128 像素、0.9 μm 到 1.7 µm，微米符号前后不一致。128 有效像素，像元 50 μm × 250 μm，像元间距 50 μm。图像尺寸 6.4 mm × 0.25 mm。特性栏像元写成 50 µm × 250 µm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 13600 行/秒。暗电流最大 3 pA。特性把两档转换效率写成 CE=16 nV/e - 与 160 nV/e -。",
        "测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G16823-256DG", "", hamamatsuLine("G16823-256DG"), [
        "产品页没有写发布日期。标题写 256 像素、0.9 μm 到 1.7 µm。256 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 6.4 mm × 0.25 mm。特性栏像元写成 25 µm × 250 µm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1550 nm。最高行频 7290 行/秒。暗电流最大 1 pA。转换效率同样写成 CE=16 nV/e - 与 160 nV/e -。",
        "测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G16824-256DG", "", hamamatsuLine("G16824-256DG"), [
        "产品页没有写发布日期。标题写 256 像素、0.9 μm 到 1.9 µm。256 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 6.4 mm × 0.25 mm。",
        "光谱响应 900 nm 到 1900 nm，峰值灵敏度典型 1700 nm。无制冷，陶瓷封装。最高行频 7290 行/秒。暗电流最大 2 pA。",
        "特性写单路视频、低功耗和驱动电压 3.3 V，转换效率写成 CE=16 nV/e - 与 160 nV/e -。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G16825-256DG", "", hamamatsuLine("G16825-256DG"), [
        "产品页没有写发布日期。标题写 256 像素、0.9 μm 到 2.1 µm。256 有效像素，像元 25 μm × 250 μm，像元间距 25 μm。图像尺寸 6.4 mm × 0.25 mm。",
        "光谱响应 900 nm 到 2100 nm，峰值灵敏度典型 1850 nm。无制冷，陶瓷封装。最高行频 7290 行/秒。暗电流最大 5 pA。",
        "特性写单路视频和驱动电压 3.3 V，转换效率写成 CE=16 nV/e - 与 160 nV/e -。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "g17225",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "G17225：滨松高速异物检测用 InGaAs 线阵",
    summary:
      "G17225-512DE、G17225-1024DG 与 G17225-1024DK 的产品页都写用于异物检测。CMOS 电荷放大器键合到 InGaAs 光电二极管阵列的每个像素。三款都是无制冷陶瓷封装。特性写最高行频 50 klines/s，规格表写成 50000 行/秒。光谱响应都是 900 nm 到 1700 nm，峰值灵敏度典型 1650 nm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("G17225-512DE", "", hamamatsuLine("G17225-512DE"), [
        "产品页没有写发布日期。512 有效像素，像元 25 μm × 25 μm，像元间距 25 μm。图像尺寸 12.8 mm × 0.025 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1650 nm。无制冷，陶瓷封装。规格表最高行频 50000 行/秒。暗电流最大 5 pA。",
        "特性写最高数据率 20 MHz，转换效率四档，并写内置温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G17225-1024DG", "", hamamatsuLine("G17225-1024DG"), [
        "产品页没有写发布日期。1024 有效像素，像元 12.5 μm × 250 μm，像元间距 12.5 μm。图像尺寸 12.8 mm × 0.25 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1650 nm。无制冷，陶瓷封装。规格表最高行频 50000 行/秒。暗电流最大 50 pA。",
        "特性写最高行频 50 klines/s、最高数据率 20 MHz，转换效率四档，并写内置温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
      page("G17225-1024DK", "", hamamatsuLine("G17225-1024DK"), [
        "产品页没有写发布日期。1024 有效像素，像元 12.5 μm × 12.5 μm，像元间距 12.5 μm。图像尺寸 12.8 mm × 0.0125 mm。",
        "光谱响应 900 nm 到 1700 nm，峰值灵敏度典型 1650 nm。无制冷，陶瓷封装。规格表最高行频 50000 行/秒。暗电流最大 5 pA。",
        "特性写最高数据率 20 MHz，转换效率四档，并写内置温度传感器。测量条件写典型 Ta=25℃。",
      ], "swir"),
    ],
  },
  {
    id: "lynred-atto",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "ATTO：Lynred 非制冷长波探测器",
    summary:
      "Lynred 安防手册把 ATTO320-02、ATTO640D-02、ATTO1024-02 和 ATTO1280-02 的光谱带都写成 8 到 14 μm。ATTO640D-04、ATTO640D-04+ 与 ATTO640D-04W 的产品页写微测辐射热计。2026 年 9 月的无人机手册把与这一外形对应的一行写成 LWIR。ATTO256-02 的产品页写微测辐射热计，没有写光谱范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ATTO320-02", "", lynredBrief, [
        "手册：320×240，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，60 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO640D-02", "", lynredBrief, [
        "手册：640×480，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 40 mK（f/1，300 K，30 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO1024-02", "", lynredBrief, [
        "手册：1024×768，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，30 Hz）。最高 100 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO1280-02", "", lynredBrief, [
        "手册：1280×1024，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，30 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATTO640D-04", "", "https://www.lynred.com/products/atto640d-04-04-04w", [
        "产品页没有写发布日期。640×480，像元 12 μm，微测辐射热计。产品页写这是市场上最小的 VGA 热传感器。",
        "产品页：原生 NETD 小于 40 mK（f/1，300 K，30 Hz）。帧率最高 60 Hz。数字输出 60 Hz 功耗小于 320 mW，模拟输出 60 Hz 小于 150 mW。",
        "手册：外形小于 17.3×17.3×4.9 mm³（含 J-Lead 引脚），晶圆级封装。工作温度 -40℃ 到 +85℃。可操作性大于 99.8%。输出为 14 bit 并行数字，以及模拟。手册页脚写 June 2026，记为约 2026 年 6 月。",
        "产品页与手册：封装为 J-LEAD44，符合 JEDEC 回流焊与操作标准。占位与 PICO384 系列（17 μm）和 ATTO320（12 μm）兼容。可通过 I²C 访问，支持自由运行或外触发。",
        "2026 年 9 月的无人机手册里，与这一外形对应的一行把光谱带写成 LWIR，NETD 写成 35 mK（f/1，300 K，30 Hz），重量小于 3 g，并多写模拟输出 30 Hz 功耗小于 140 mW。产品页没有按 04、04+、04W 分开写这一行，也没有写重量。",
      ], "lwir"),
      page("ATTO640D-04+", "", "https://www.lynred.com/products/atto640d-04-04-04w", [
        "与 ATTO640D-04 同一产品页，没有单独的发布日期。640×480，像元 12 μm，微测辐射热计。",
        "产品页与手册：NETD 小于 35 mK（f/1，300 K，30 Hz）。可操作性大于 99.8%。帧率、功耗、封装和占位与 ATTO640D-04 写在同一组。",
        "无人机手册把与外形 17.3×17.3×4.9 mm³ 对应的一行写成 LWIR、NETD 35 mK，没有单独列出 04+。",
      ], "lwir"),
      page("ATTO640D-04W", "", "https://www.lynred.com/products/atto640d-04-04-04w", [
        "与 ATTO640D-04 同一产品页。640×480，像元 12 μm，微测辐射热计。产品页写保护窗口为锗。",
        "产品页与手册：NETD 小于 45 mK（f/1，300 K，30 Hz）。可操作性大于 99.8%。其余封装、帧率和功耗与同页的 04、04+ 写在一起。",
        "无人机手册没有单独列出 04W。与这一外形对应的一行写 LWIR。",
      ], "lwir"),
      page("ATTO256-02", "", "https://www.lynred.com/products/atto256-02", [
        "产品页没有写发布日期。256×192，像元 12 μm，微测辐射热计。产品页没有写光谱范围。",
        "热灵敏度小于 50 mK（f/1，300 K，60 Hz）。帧率最高 60 Hz。功耗小于 220 mW。",
        "封装为 J-LEAD44，符合 JEDEC 回流焊与操作标准。产品页写全数字，并写兼容 Tecless 和 Shutterless。",
        "手册参考号写 10/2023/01，记为约 2023 年 10 月。手册补写工作温度 -40℃ 到 +85℃，阵列可操作性大于 99.8%，并写可通过 I²C 访问，支持自由运行或外触发。",
      ], "lwir"),
    ],
  },
  {
    id: "lynred-pico",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "PICO：Lynred 非制冷长波探测器",
    summary:
      "手册把 PICO384S 与 PICO640S 的光谱带写成 8 到 14 μm。PICO640S BB 7-14 的型号名写明 7 到 14。PICO1024Gen2、PICO384+ 与 PICO640-046/046+ 的产品页写微测辐射热计，没有写光谱范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("PICO384S", "", lynredBrief, [
        "手册：384×288，像元 17 μm，光谱带 8 到 14 μm。",
        "NETD 小于 30 mK（f/1，300 K，50 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("PICO640S", "", lynredBrief, [
        "手册：640×480，像元 17 μm，光谱带 8 到 14 μm。",
        "NETD 小于 30 mK（f/1，300 K，30 Hz）。最高 120 Hz。",
      ], "lwir", "打开产品手册"),
      page("PICO640S BB 7-14", "", "https://www.lynred.com/products/pico640s-bb-7-14", [
        "产品页型号为 PICO640S BB 7-14，光谱带 7 到 14 μm。640×480，像元 17 μm。",
        "热灵敏度小于 30 mK（f/1，300 K，30 Hz）。最高 60 Hz。用于气体泄漏成像。",
      ], "lwir"),
      page("PICO1024Gen2", "", "https://www.lynred.com/products/pico1024gen2", [
        "产品页没有写发布日期，也没有写光谱范围。标题为 PICO1024Gen2。1024×768，像元 17 μm，微测辐射热计。",
        "产品页写面向远距离探测的高对比度成像。",
        "NETD 写成 30<NETD<50 mK（f/1，300 K，30 Hz）。帧率最高 120 Hz。热时间常数小于 12 ms。功耗小于 200 mW。",
        "产品页写兼容 Tecless 和 Shutterless。鉴定写 TWS qualified：MIL810-MIL883。",
      ], "lwir"),
      page("PICO384+", "", "https://www.lynred.com/products/pico384", [
        "产品页标题为 PICO384+，正文写作 Pico384+Gen2。没有写发布日期，也没有写光谱范围。384×288，像元 17 μm，微测辐射热计。",
        "热灵敏度小于 40 mK（f/1，300 K，50 Hz）。帧率最高 60 Hz。功耗小于 220 mW，条件写 60 Hz。",
        "产品页写表面贴装 J-Lead44，符合 JEDEC 回流焊与操作标准，全数字，并写兼容 TECless 和 Shutterless。",
      ], "lwir"),
      page("PICO640-046", "", "https://www.lynred.com/products/pico640-046046", [
        "与 PICO640-046+ 同一产品页，标题为 PICO640-046/046+。没有写发布日期，也没有写光谱范围。640×480，像元 17 μm，微测辐射热计。",
        "热灵敏度小于 50 mK（f/1，300 K，30 Hz）。帧率最高 120 Hz（2 路输出）。热时间常数小于 12 ms。",
        "功耗小于 130 mW（1 路输出），小于 160 mW（2 路输出）。产品页写兼容 Tecless 和 Shutterless。",
      ], "lwir"),
      page("PICO640-046+", "", "https://www.lynred.com/products/pico640-046046", [
        "与 PICO640-046 同一产品页。640×480，像元 17 μm，微测辐射热计。产品页没有写光谱范围。",
        "热灵敏度小于 40 mK（f/1，300 K，30 Hz）。帧率、热时间常数和功耗与同页的 PICO640-046 写在一起。",
      ], "lwir"),
    ],
  },
  {
    id: "ati320",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "ATI：Lynred 非制冷长波模组",
    summary:
      "ATI320、ATI640 与 ATI640S 都是非制冷模组。安防手册把 ATI320 的光谱带写成 8 到 14 μm。ATI640 的发布稿写长波，产品页写微测辐射热计。ATI640S 的产品页写微测辐射热计，没有写光谱范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ATI320", "", lynredBrief, [
        "手册：320×240，像元 12 μm，光谱带 8 到 14 μm。",
        "NETD 小于 50 mK（f/1，300 K，60 Hz）。最高 60 Hz。",
      ], "lwir", "打开产品手册"),
      page("ATI640", "2024-06-18", "https://www.lynred.com/products/ati640", [
        "2024 年 6 月 18 日发布。发布稿写即插即用的长波热成像模组，VGA，基于 640×480、12 μm 传感器，帧率 60 Hz，可带镜头或不带镜头。功耗写到 1 W。",
        "将于 2024 年 6 月 17 日至 21 日在巴黎 Eurosatory 的 5A-C155 展位展出。发布稿写面向监控和国防，包括无人机。",
        "产品页写微测辐射热计，出厂校准，无快门成像。NETD 小于 24 mK（60 Hz，F/1，300 K，denoizing）。可选 3 种镜头。",
        "产品页写用途包括户外、休闲、监控和无人机。",
      ], "lwir"),
      page("ATI640S", "", "https://www.lynred.com/products/ati640s", [
        "产品页没有写发布日期，也没有写光谱范围。640×480，像元 12 μm，微测辐射热计。",
        "产品页：全帧 60 Hz。NETD 小于 18 mK（60 Hz，F/1，300 K，Denoising）。可自配快门和光学件，并写可在 Shutter 或 Less Shutter 模式工作。",
        "手册标明 PRELIMINARY，参考号写 2025/01，记为约 2025 年 1 月。手册把 NETD 写成不大于 18 mK，条件与产品页相同。尺寸 24.6×24.6×19.9 mm，重量 15 g。功耗小于 1.0 W。出图时间 1 秒，帧延迟约 1.25 ms。",
        "手册：工作温度 -40℃ 到 +65℃，图像质量温度范围 -20℃ 到 +65℃。输出为并行 LVCMOS 14 bit，或 24 bit 着色（3×8 bit），以及 MIPI CSI-2 D-PHY 单数据通道。鉴定写 MIL-STD-883L 与 MIL-STD-810H。",
      ], "lwir"),
    ],
  },
  {
    id: "leo-mw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "LEO MW：Lynred 中波制冷探测器",
    summary: "规格书写明 LEO MW 是 MCT 中波探测器，光谱响应 3.7 到 4.8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("LEO MW", "", "https://www.lynred.com/sites/default/files/2021-07/LEO%20MW%20Datasheet.pdf", [
        "640×512，像元 15 μm，MCT。光谱响应 3.7 到 4.8 μm。",
        "焦平面工作温度 90 到 100 K。典型 NETD 20 mK。全帧最高 60 Hz。",
      ], "mwir", "打开产品手册"),
    ],
  },
  {
    id: "daphnis-hd",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "DAPHNIS：Lynred 中波探测器",
    summary:
      "安防手册把 DAPHNIS HD MW 的光谱带写成 3.7 到 4.8 μm。Daphnis XGA MW 的产品页写 MCT、1024×768、10 μm，没有写出光谱范围数字。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("DAPHNIS HD MW", "", lynredBrief, [
        "手册：1280×720，像元 10 μm，光谱带 3.7 到 4.8 μm。",
        "NETD 20 mK。最高 85 Hz。手册写明可选陷波滤光片。",
      ], "mwir", "打开产品手册"),
      page("Daphnis XGA MW", "", "https://www.lynred.com/products/daphnis-xga-mw", [
        "产品页没有写发布日期，也没有写出光谱范围数字。标题为 Daphnis XGA MW。1024×768，像元 10 μm，MCT。",
        "产品页写它用来从 VGA、15 μm 的系统升级，芯片尺寸相同，接口简化，画幅为 4/3。",
        "NETD 20 mK（293 K，70% 阱填充，2.7 me⁻）。焦平面工作温度最高 110 K。电荷容量三档增益写成 1.1 Me⁻、2.7 Me⁻、5.6 Me⁻。",
        "视频输出 14 bit，CameraLink。全帧最高 100 Hz。阵列可操作性 99.8%。可选制冷机 RM2、RM3、K508N。",
        "产品页写可选 CO2 陷波滤光片，用于提高对比度，距离增加 +5% 到 +10%。",
      ], "mwir"),
    ],
  },
  {
    id: "snake-sw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "SNAKE SW：Lynred 短波探测器",
    summary: "安防手册把 SNAKE SW 的光谱带写成 0.9 到 1.7 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SNAKE SW", "", lynredBrief, [
        "手册：640×512，像元 15 μm，光谱带 0.9 到 1.7 μm。最高 330 Hz。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "yocto1024",
    date: "2026-01-19",
    companyId: "lynred",
    category: "product",
    title: "YOCTO1024：Lynred 非制冷长波探测器",
    summary:
      "2026 年 1 月 19 日发布。YOCTO1024 是 XGA（1024×768）非制冷微测辐射热计。发布稿正文写像素间距 8.5 μm、氧化钒、长波；产品页写 8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("YOCTO1024", "2026-01-19", "https://www.lynred.com/products/yocto1024", [
        "2026 年 1 月 19 日发布，并将于 2026 年 1 月 20 日至 23 日在拉斯维加斯 SHOT Show 展出。",
        "XGA，1024×768。发布稿标题和产品页写 8 μm，发布稿正文写像素间距 8.5 μm。氧化钒，发布稿写明针对长波。",
        "产品页：NETD 小于 50 mK（f/1，300 K，30 Hz，焦平面 25±5℃）。采用降噪算法后的系统 NETD 小于 20 mK。全帧帧率小于 50 Hz（2 路输出）。",
        "发布稿：在与常规 VGA、12 μm 探测器相同的占位里像素数是其 2.5 倍。相对 12 μm 探测器，DRI 最高提高 40%，相当于 1.4 倍放大。相对 XGA、12 μm 探测器，占位最多缩小 40%。尺寸 18×18×4.85 mm³。",
        "产品页写明适用于双筒、单筒、瞄准镜和卡装设备。发布稿还写休闲、狩猎、国防和监控，包括手持热像仪、武器瞄具、无人机和固定观察系统。",
        "产品页：可通过 I²C 配置，支持自由运行或外触发。按 MIL-810 与 MIL-883 做 TWS 鉴定。在欧洲设计和制造。",
        "发布稿写明随后数月还会推出模组版本，稿中没有给出该模组的型号。",
      ], "lwir"),
    ],
  },
  {
    id: "capt640",
    date: "2026-09-21",
    companyId: "lynred",
    category: "product",
    title: "CAPT640-02：Lynred 车载热成像探测器",
    summary:
      "2026 年 9 月 21 日发布。发布稿称 CAPT640，产品页型号为 CAPT640-02。640×480、12 μm 非制冷微测辐射热计，裸片，用于汽车夜视和辅助驾驶。",
    applications: ["spectral", "auto"],
    technologies: ["spectral"],
    models: [
      page("CAPT640-02", "2026-09-21", "https://www.lynred.com/products/capt640-02", [
        "2026 年 9 月 21 日发布。发布稿标题写欧洲第一款用于汽车行业的热成像传感器，正文写这是该公司第一款符合汽车应用需求的热成像传感器。将于 2026 年 9 月 22 日至 24 日在巴塞罗那 AutoSens 展出。",
        "发布稿称 CAPT640，有一处写作 CAPT 640。产品页型号为 CAPT640-02。640×480，像元 12 μm，微测辐射热计。",
        "产品页：NETD 小于 60 mK（30 Hz，f/1，300 K）。60 Hz 下功耗小于 320 mW。全数字输出。封装为带晶圆级封装的裸片，以及重构晶圆。",
        "产品页写明 AEC-Q100 Grade 3（-40℃ 到 +85℃）、IATF 16949，并可提供 PPAP。发布稿写明公司在 2025 年晚些时候获得 IATF 16949，CAPT640 符合该标准。",
        "发布稿写明通过三十多项测试，覆盖各生产批次共约 3000 个元件，包括工作和断电状态下的极端温度循环。",
        "发布稿写明用于夜视，可识别行人、骑行者、动物或障碍物，场景包括黑暗、前灯眩光、逆光、雨和雾。可装在前格栅、挡风玻璃或车顶的相机里，并写明可与可见光相机、雷达和激光雷达一起用于自动紧急制动和辅助驾驶。",
      ], "lwir"),
    ],
  },
  {
    id: "argo-mw",
    date: "2026-04-20",
    companyId: "lynred",
    category: "product",
    title: "ARGO MW SL：Lynred 中波制冷探测器",
    summary:
      "2026 年 4 月 20 日发布。发布稿称 ARGO SL，产品页型号为 ARGO MW SL。640×512、15 μm、二类超晶格，光谱响应 3.7 到 4.8 μm，焦平面最高 130 K。ATI ARGO MW SL 的产品页没有写发布日期，分辨率、像元和光谱响应与 ARGO MW SL 相同。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ARGO MW SL", "2026-04-20", "https://www.lynred.com/products/argo-mw-sl", [
        "2026 年 4 月 20 日发布。发布稿称 ARGO SL，产品页型号为 ARGO MW SL。将于 2026 年 4 月 26 日至 30 日在 National Harbor 的 SPIE Defense + Security 展出。",
        "640×512，像元 15 μm，二类超晶格。光谱响应 3.7 到 4.8 μm。焦平面工作温度最高 130 K。",
        "产品页：NETD 小于 33 mK（27℃，50% 阱填充，f/4）。制冷机 K588。光圈 f/4 与 f/5.5。",
        "产品页：20℃ 下稳功率 4 Wdc，降温功率 12 Wdc，降温时间 5 分钟。IDDCA 的 MTTF 为 27,000 小时。发布稿写功耗 4 Wdc。",
        "发布稿写明面向战术无人机和单兵，可装入小于 6 英寸的光电吊舱，也可手持或穿戴。纳入 PlugUp 平台。",
        "发布稿写明它补足已有的 GALATEA SL。GALATEA SL 工作在中波蓝带 3.6 到 4.2 μm。",
      ], "mwir"),
      page("ATI ARGO MW SL", "", "https://www.lynred.com/products/ati-argo-mw-sl", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGN。光谱响应 3.7 到 4.8 μm。焦平面工作温度最高 130 K。光圈 f/4 与 f/5.5。",
        "传感器 NETD 小于 33 mK（27℃，50% 阱填充，f/4）。后处理 NETD 小于 25 mK。",
        "产品页写片上算法包括最多 4 张表的两点非均匀性校正、坏点替换、空域与时域降噪、演进坏点检测、水平或垂直翻转、视频测试图、去条纹、色调映射、数字细节增强和图形叠加。",
        "产品页写面向无人系统和监控，用来缩短热像机开发。",
      ], "mwir"),
    ],
  },
  {
    id: "draco-mw",
    date: "2026-06-15",
    companyId: "lynred",
    category: "product",
    title: "DRACO MW SL：Lynred 中波制冷探测器",
    summary:
      "2026 年 6 月 15 日发布。1280×1024、7.5 μm、二类超晶格，光谱响应 3.7 到 4.8 μm，焦平面 130 K。发布稿写帧率 60 Hz，产品手册写最高 75 Hz。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("DRACO MW SL", "2026-06-15", "https://www.lynred.com/products/draco-mw-sl", [
        "2026 年 6 月 15 日发布，并在 2026 年 6 月 15 日至 19 日的 Eurosatory 展出。",
        "1280×1024，像元 7.5 μm，二类超晶格。光谱响应 3.7 到 4.8 μm。焦平面 130 K。发布稿写高温工作。",
        "发布稿写帧率 60 Hz。产品手册写最高 75 Hz，并标明为初步数据。手册：NETD 35 mK（300 K，50% 阱填充，f/3）。",
        "手册：读出为直接注入，可选 IWR 与 ITR，可反转。开窗最小到 640×4。电荷容量 2.3 Me⁻。阵列可操作性大于 99.5%。50% 阱填充时的残余固定图形噪声小于 0.5 倍均方根噪声。",
        "手册：视频输出 CameraLink Base，通信为 CameraLink UART。电源典型 12 Vdc。组成包括 IDDCA、近距板和制冷机控制器。",
        "产品页与手册：制冷机 K588。光圈 f/4、f/3.4、f/3、f/2。20℃ 下稳功率小于 4.7 Wdc，降温功率小于 14 Wdc，降温时间小于 5 分钟。制冷机 MTTF 32,000 小时。",
        "手册：外形最大 56×77×72.5 mm，重量 360 g。产品页写明适用于地面车辆和反无人机系统。纳入 PlugUp 平台，发布稿写明使用分体线性制冷机。",
        "发布稿写明，图像稳定性和光谱带宽与约 2026 年 4 月发布的 ARGO SL 相同，分辨率提高到 SXGA。",
      ], "mwir"),
    ],
  },
  {
    id: "sirocco-sw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "SIROCCO：Lynred 扩展短波探测器",
    summary:
      "SIROCCO SW 的发布稿正文日期是 2026 年 1 月 19 日，新闻室列表日期是 2026 年 1 月 12 日。640×512、15 μm、碲镉汞，光谱响应 0.8 到 2.5 μm。SPACE SIROCCO SW 的产品页光谱范围是 0.9 到 2.5 μm。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      page("SIROCCO SW", "2026-01-19", "https://www.lynred.com/products/sirocco-sw", [
        "发布稿正文写 2026 年 1 月 19 日，新闻室列表日期为 2026-01-12。发布稿称 Sirocco SW，产品页型号为 SIROCCO SW。将于 2026 年 1 月 20 日至 22 日在 SPIE Photonics West 展出。",
        "640×512，像元 15 μm，碲镉汞扩展短波。光谱响应 0.8 到 2.5 μm。产品页写 0.8 到 2.5 μm 的量子效率 80%，190 K 下暗电流 150 fA，阵列可操作性大于 99.5%。",
        "发布稿写帧率最高 200 帧/秒。可探测 CO₂、CO、CH₄ 和 N₂O，并写明可用于 300℃ 以上的高温过程控制。",
        "发布稿写明有两种配置：供定制集成的焦平面，或装在 PlugUp 平台里的封装探测器。手册订货号为 SIROCCO SW-FPA 与 SIROCCO SW-K588，并标明为初步数据。",
        "发布稿写明面向采矿、农业、环境监测和工业过程控制，平台包括卫星、无人机和飞机。同稿写明面向新太空的增强制冷设计仍在开发，即将提供，稿中没有写出该设计的型号。",
      ], "swir"),
      page("SPACE SIROCCO SW", "", "https://www.lynred.com/products/space-sirocco-sw", [
        "640×512，像元 15 μm，碲镉汞扩展短波。光谱范围 0.9 到 2.5 μm。",
        "焦平面工作温度 150 K 到 200 K。读出功能包括开窗（最小窗口 160×2）、抗光晕和电源管理。奈奎斯特频率处的 MTF 为 0.5。",
        "产品页写明用于天基地球观测，包括大气化学、温室气体监测和高光谱成像。",
      ], "swir"),
    ],
  },
  {
    id: "eyesential-sw",
    date: "2025-01-21",
    companyId: "lynred",
    category: "product",
    title: "EYESENTIAL SW：Lynred 短波探测器",
    summary:
      "2025 年 1 月 21 日发布。640×512、10 μm、InGaAs，光谱响应 0.9 到 1.7 μm。发布稿写 14 bit 和 COTS 封装。产品页写全帧 300 fps，320×256 时 1200 fps。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral"],
    models: [
      page("EYESENTIAL SW", "2025-01-21", "https://www.lynred.com/products/eyesential-sw", [
        "2025 年 1 月 21 日发布。将于 2025 年 1 月 28 日至 30 日在旧金山 SPIE Photonics West 的 5029 展位展出。",
        "640×512，像元 10 μm，InGaAs。产品页光谱响应 0.9 到 1.7 μm。发布稿写 SWIR（0.9-1.7 μm）、14 bit 数字输出和 COTS 封装。",
        "产品页：全帧 300 fps，320×256 时 1200 fps。量子效率 70%（1 μm 到 1.6 μm）。暗电流 15 fA（21℃）。阵列可操作性大于 99.5%。",
        "发布稿写全帧 300 Hz、四分之一全帧 1200 Hz。产品页把后一档写成 320×256。",
        "产品页写明用于机器视觉和光谱测量。发布稿还写科学成像，并写明可选择或取消谱线。发布稿举例包括高速分拣不同塑料。",
        "发布稿写明套件含电路板、机械与光学接口（C-Mount）和 Lynred Software Toolbox。发布稿写它补足 SNAKE SW（640×512、15 μm）以及收购的 NIT 短波模组。",
      ], "swir"),
    ],
  },
  {
    id: "eole-mw",
    date: "2025-03-31",
    companyId: "lynred",
    category: "product",
    title: "EOLE：Lynred 气体成像中波探测器",
    summary:
      "EOLE MW 与 ATI EOLE MW 都是 640×512、15 μm、IGn，光谱带 3.2 到 3.55 μm。2025 年 3 月 31 日的发布稿称 ATI EOLE，产品页型号为 ATI EOLE MW。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("EOLE MW", "", "https://www.lynred.com/products/eole-mw", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGn。光谱带 3.2 μm 到 3.55 μm。",
        "NETD 典型 20 mK、最大 25 mK（黑体 300 K）。焦平面可操作性大于 99.5%。栏名 Minimum Frame Rate，数值为典型 30 Hz，范围 15 Hz 到 60 Hz。",
        "焦平面工作温度最高 150 K。光圈 F/1.3。重量 365 g。MTTF 32 000 小时（LP4 Lynred profile）。",
        "产品页写明针对甲烷，以及甲醇、苯和乙醇，适用于便携和 24/7。产品页写明性能超过新的欧洲法规要求，可探测到低至法规要求的十分之一。纳入 PlugUp，并写明与 Galatea MW SL 接口相同。",
      ], "mwir"),
      page("ATI EOLE MW", "2025-03-31", "https://www.lynred.com/products/ati-eole-mw", [
        "2025 年 3 月 31 日发布。发布稿称 ATI EOLE，产品页型号为 ATI EOLE MW。将于 2025 年 4 月 13 日至 17 日在奥兰多 SPIE Defense & Commercial Sensing 的 Hall A-E 1401 展位展出。",
        "640×512，像元 15 μm，标注 IGn。光谱带 3.2 μm 到 3.55 μm。发布稿写 3.2-3.55 μm，并写泄漏率最低可到 1.4 g/h。",
        "产品页：NETD 小于 25 mK（50% 阱填充），后处理 NETD 小于 15 mK。焦平面可操作性大于 99.5%。帧率栏与 EOLE MW 相同，典型 30 Hz，15 Hz 到 60 Hz。光圈 F/1.3。重量 380 g。MTTF 50 000 小时（Lynred LifeProfile 1）。",
        "发布稿写明这是红外机芯，输出经过校正的图像。附加处理板叠在近距板上，重 15 克，外形与近距板相同。相对探测器功耗增加 1 Wdc。纳入 PlugUp。",
        "产品页写明用于气体探测，包括甲烷、苯和乙醇，以及便携和 24/7。发布稿写明面向油气输送和分配系统的甲烷泄漏监测。",
      ], "mwir"),
    ],
  },
  {
    id: "galatea-mw",
    date: "2025-03-31",
    companyId: "lynred",
    category: "product",
    title: "GALATEA：Lynred 中波蓝带探测器",
    summary:
      "GALATEA MW SL、ATI GALATEA MW SL 与 GALATEA HHTI 都是 640×512、15 μm，光谱响应 3.6 到 4.2 μm。2025 年 3 月 31 日的发布稿称 ATI GALATEA SL，产品页型号为 ATI GALATEA MW SL。GALATEA HHTI 的产品页没有写发布日期，制冷机写成 RMs1。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("GALATEA MW SL", "", "https://www.lynred.com/products/galatea-mw-sl", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGn。光谱响应 3.6 到 4.2 μm。",
        "NETD 小于 28 mK（27℃，50% 阱填充，f/4）。制冷机 K588。光圈 f/4 与 f/5.5。",
        "20℃ 下稳功率 3 Wdc，降温功率 12 Wdc，降温时间 3 分 30 秒。制冷机 MTTF 32,000 小时。焦平面工作温度最高 150 K。",
        "产品页写明适合装入小型无人机吊舱，纳入 PlugUp。",
      ], "mwir"),
      page("ATI GALATEA MW SL", "2025-03-31", "https://www.lynred.com/products/ati-galatea-mw-sl", [
        "2025 年 3 月 31 日发布。发布稿称 ATI GALATEA SL，产品页型号为 ATI GALATEA MW SL。将于 2025 年 4 月 13 日至 17 日在奥兰多 SPIE Defense & Commercial Sensing 的 Hall A-E 1401 展位展出。",
        "产品页标注 640×512、15 μm、IGN。光谱响应 3.6 到 4.2 μm。发布稿写中波蓝带 3.6-4.2 μm，面向战术无人机的远距离应用。",
        "产品页：传感器 NETD 小于 28 mK（27℃，50% 阱填充，f/4），后处理 NETD 小于 20 mK。焦平面工作温度最高 150 K。光圈 f/4 与 f/5.5。",
        "产品页列出片上算法：最多 4 张表的两点非均匀性校正、坏点替换、空域与时域降噪、演进坏点检测、水平或垂直翻转、视频测试图、去条纹、色调映射、数字细节增强和图形叠加。",
        "发布稿写明附加处理板重 15 克，相对探测器增加 1 Wdc，输出经过校正的图像。纳入 PlugUp，机械、光学和电气接口在同平台各设计之间相同。发布稿写明面向无人机吊舱厂商。",
      ], "mwir"),
      page("GALATEA HHTI", "", "https://www.lynred.com/products/galatea-hhti", [
        "产品页没有写发布日期。640×512，像元 15 μm，标注 IGN。光谱响应 3.6 到 4.2 μm。产品页写面向地面便携。",
        "NETD 小于 25.4 mK（27℃，50% 阱填充，f/4）。焦平面工作温度最高 150 K。制冷机 RMs1。光圈 f/4 与 f/5.5。",
        "产品页：20℃ 下稳功率 2 Wdc，降温功率 6.9 Wdc，降温时间小于 3 mn。MTTF 大于 16 000 小时。",
        "手册写帧率 60 Hz，重量 230 g，读出可选 IWR 与 ITR，架构为直接注入，开窗最小到 160×2，电荷容量 2.1 Me⁻，信号输出率 10 MHz。阵列可操作性大于 99.5%。50% 阱填充时的残余固定图形噪声小于 0.5 倍均方根噪声。组成包括 IDDCA、近距板和制冷机控制器。手册把降温时间写成小于 3 min。",
      ], "mwir"),
    ],
  },
  {
    id: "seegnus-mw",
    date: "2024-06-17",
    companyId: "lynred",
    category: "product",
    title: "SEEGNUS MW SL：Lynred 中波制冷探测器",
    summary:
      "2024 年 6 月 17 日的发布稿称 Seegnus。产品页型号为 SEEGNUS MW SL。1280×1024、7.5 μm，产品页光谱响应 3.6 到 4.2 μm，标注 IGn。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SEEGNUS MW SL", "2024-06-17", "https://www.lynred.com/products/seegnus-mw-sl", [
        "2024 年 6 月 17 日发布。发布稿称 Seegnus，产品页型号为 SEEGNUS MW SL，正文也写作 SEEGNUS MW。将于 2024 年 6 月 17 日至 21 日在巴黎 Eurosatory 的 5A-C155 展位展出。",
        "发布稿：1280×1024（SXGA），像元 7.5 μm，中波，高温工作，并引述焦平面为 150 K。产品页标注 IGn，光谱响应 3.6 到 4.2 μm，焦平面工作温度最高 150 K。",
        "产品页：NETD 42 mK（300 K，50% 阱填充，f/3）。制冷机 K588。光圈 f/4、f/3.4、f/3、f/2。20℃ 下稳功率小于 3.7 Wdc，降温功率小于 13.5 Wdc，降温时间小于 4 分 40 秒。制冷机 MTTF 32,000 小时。组成包括 IDDCA、近距板和制冷机控制器。",
        "发布稿写功耗小于 3.5 W，体积 300 cm³，制冷机可靠性 32,000 小时，并写相对该公司此前这一类中波 VGA 型号，DRI 距离净增 20%。纳入 PlugUp，机械、光学和电气接口与此前紧凑型设计相同，有三个安装面。",
        "发布稿写，配 220 mm 折叠式 f/4 成品光学件，在中纬度夏季大气条件下，可在 630 m 宽的场景里探测到 14.5 km 处的人，在 170 m 宽的场景里于 3.9 km 处识别。",
        "发布稿写用途包括无人机吊舱、战术目镜、装甲车辆观瞄、遥控武器观瞄、潜望镜，以及固定或机载监控。现场演示被写成用于远距离成像的最小 SXGA 传感器，并展示装在 6.3 英寸吊舱里的机械模型。发布稿引述其掌握 III-V 半导体技术。",
        "产品页写它是 PlugUp 平台里第一款 7.5 μm 像元的 SXGA 探测器，并写低声学噪声，适合要求紧凑和高 MTTF 的系统。",
      ], "mwir"),
    ],
  },
  {
    id: "scorpio",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "SCORPIO：Lynred 制冷探测器",
    summary:
      "SCORPIO MW 与 SCORPIO BB MW 的产品页都写 VGA 中波、640×512、15 μm、MCT，没有写出光谱范围数字。SCORPIO LW 的产品页写长波，同样没有写出光谱范围数字。三页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SCORPIO MW", "", "https://www.lynred.com/products/scorpio-mw", [
        "产品页没有写发布日期，也没有写出光谱范围数字。标题为 SCORPIO MW，副题写独特、通用的 VGA 中波探测器。640×512，像元 15 μm，MCT。",
        "正文写宽光谱范围，并写有最高 110 K 的版本。",
        "NETD 19 mK（293 K，50% 阱填充，100 Hz）。焦平面工作温度最高 110 K。全帧最高 210 Hz。阵列可操作性 99.8%。",
        "电荷容量写成 6.4×10^6 e⁻（100% 阱填充、ITR）或 5×10^6 e⁻（100% 阱填充、IWR）。",
        "可选制冷机 RM2、RM3、RM3 Low Power、K508、K508N。",
      ], "mwir"),
      page("SCORPIO BB MW", "", "https://www.lynred.com/products/scorpio-bb-mw", [
        "产品页没有写发布日期，也没有写出光谱范围数字。标题为 SCORPIO BB MW，副题写面向工业应用的 VGA 中波宽带探测器。640×512，像元 15 μm，MCT。",
        "正文写宽光谱带，面向机器视觉高光谱和气体探测。",
        "NETD 22 mK（293 K，50% 阱填充，100 Hz）。焦平面工作温度最高 110 K。全帧最高 120 Hz。阵列可操作性 99.6%。",
        "电荷容量一格写成 6.410^6 e⁻（100% 阱填充、ITR），另一格写成 5×10^6 e⁻（100% 阱填充、IWR）。",
        "可选制冷机 RM3、K508。",
      ], "mwir"),
      page("SCORPIO LW", "", "https://www.lynred.com/products/scorpio-lw", [
        "产品页没有写发布日期，也没有写出光谱范围数字。标题为 SCORPIO LW。640×512，像元 15 μm，MCT。产品页写紧凑的高分辨率长波探测器，面向远距离和快速运动目标，并写低功耗适合地面应用。",
        "NETD 写成 22 mK（f/2，210 Hz），以及 10 mK（f/2，30 Hz post acc\\ 4 frames）。焦平面工作温度最高 90 K。全帧最高 210 Hz。阵列可操作性 99.8%。",
        "电荷容量写成 13.6×10^6 e⁻（standard），分档为 27.2×10^6 e⁻（binning）。",
        "可选制冷机写成 K508、RM3、K508N ROHS。",
      ], "lwir"),
    ],
  },
  {
    id: "jupiter-mw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "JUPITER MW：Lynred 中波探测器",
    summary:
      "产品页没有写发布日期。JUPITER MW 是 1280×1024、15 μm 的 MCT 中波探测器，光谱响应 3.7 到 4.8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("JUPITER MW", "", "https://www.lynred.com/products/jupiter-mw", [
        "产品页没有写发布日期。标题为 JUPITER MW，副题写高性能 SXGA 百万像素产品。1280×1024，像元 15 μm，MCT。",
        "光谱响应 3.7 到 4.8 μm。正文写这是中波 SXGA、15 μm 的 IDCA。",
        "NETD 18 mK（293 K，积分时间按 50% 阱填充；原文写作 intergration）。制冷机 LSF9548 与 K548。",
        "读出为串行电气接口，快照，直接注入，积分同时读出。可编程积分时间，抗光晕，图像可 invert、revert、inverse。",
        "开窗为 1280×1024，或可编程一个或两个窗口，最小到 260×1。",
      ], "mwir"),
    ],
  },
  {
    id: "capyork",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "CAPYORK：Lynred 空间线阵",
    summary:
      "产品页没有写发布日期。LYNRED Linear CAPYORK 是碲镉汞线阵。特性表光谱范围是 0.9 到 2.5 μm。正文写地球观测，从短波直到中波。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("LYNRED Linear CAPYORK", "", "https://www.lynred.com/products/lynred-linear-capyork", [
        "产品页没有写发布日期。标题为 LYNRED Linear CAPYORK。线阵，(1200×1)×4，像元 15 μm，MCT。",
        "正文写面向地球观测，光谱从短波直到中波，并写用于 LSTM 任务。特性表把光谱范围写成 0.9 到 2.5 μm。",
        "格式为 4 个波段、每段 1200 个 TDI 像素，像元 15 μm。工作温度标称 200 K。可操作性写 100%。",
        "读出为 CTIA，片上 TDI 12 级，快照积分，读出 IWR/ITR，4 路模拟输出。",
        "正文还写可与交错或拼接配置兼容，可选增益，每条读出线可调积分时间。",
      ], "swir"),
    ],
  },
  {
    id: "pega",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "PEGA：Lynred 空间线阵",
    summary:
      "产品页没有写发布日期。LYNRED Linear PEGA 是碲镉汞线阵。正文写地球观测，从中波直到甚长波。特性表写 4 个通道、8 到 12 μm，两片阵列为长波与甚长波。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("LYNRED Linear PEGA", "", "https://www.lynred.com/products/lynred-linear-pega", [
        "产品页没有写发布日期。标题为 LYNRED Linear PEGA。页首格式写成 (600×3)×4，像元 30 μm，MCT。",
        "正文写面向地球观测，光谱从中波直到甚长波，并写用于 TRISHNA 任务。可操作性写 100%。",
        "特性表：敏感阵列为 4 个通道、8 到 12 μm，两片阵列为 LWIR 与 VLWIR。9 条读出线、每条 600 像素，像元标称 30 μm。工作温度标称 60 K。",
        "读出为快照，IWR 与 ITR，片外 TDI（每通道 3 条读出线）。每条读出线 1 路模拟输出，伪差分，最大输出摆幅 2.6 V。",
        "标称帧率 4.5 kHz（像素率 3 MHz），并写可工作到 8 MHz 像素率。积分时间从 15 μs 到（帧时间减 15 μs）。",
        "正文还写可与交错或拼接配置兼容，可选增益，每条读出线可调积分时间。",
      ], "lwir"),
    ],
  },
  {
    id: "cobra",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "COBRA：Lynred 空间面阵",
    summary:
      "产品页没有写发布日期。LYNRED Staring array COBRA 是 1380×640、20 μm 的碲镉汞面阵，光谱范围 0.9 到 2.5 μm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("LYNRED Staring array COBRA", "", "https://www.lynred.com/products/lynred-staring-array-cobra", [
        "产品页没有写发布日期。标题为 LYNRED Staring array COBRA。1380×640，像元 20 μm，MCT。",
        "光谱范围 0.9 到 2.5 μm。焦平面工作温度 150 K。",
        "产品页写高光谱与高空间分辨率，面向天基地球观测，举例大气化学或高光谱成像。",
        "读出功能包括按行选增益、选择读出的行、抗光晕和电源管理。奈奎斯特频率处的 MTF 为 0.5。PRNU 小于 3%。",
        "架构为 CTIA，快照积分，读出 IWR/ITR 以及非破坏多次读出。高增益模式有片上 CDS。模拟输出 6 路或 12 路，可选。",
      ], "swir"),
    ],
  },
  {
    id: "ngp-sw",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "NGP SW：Lynred 空间短波面阵",
    summary:
      "产品页没有写发布日期。LYNRED Staring array NGP SW 是 1024×1024、15 μm 的碲镉汞短波面阵，光谱范围 0.9 到 2.5 μm。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("LYNRED Staring array NGP SW", "", "https://www.lynred.com/products/lynred-staring-array-ngp-sw", [
        "产品页没有写发布日期。标题为 LYNRED Staring array NGP SW。1024×1024，像元 15 μm，MCT。副题写大型短波红外探测器，面向空间成像。",
        "光谱范围 0.9 到 2.5 μm。焦平面工作温度 150 K 到 200 K。",
        "产品页写已做空间鉴定，并写超光谱、高光谱成像以及光谱测量。",
        "架构为 CTIA，快照积分，读出 IWR/ITR 以及非破坏多次读出，4 路模拟输出。奈奎斯特频率处的 MTF 为 0.5。PRNU 小于 1%。",
      ], "swir"),
    ],
  },
  {
    id: "lynred-irs",
    date: "",
    companyId: "lynred",
    category: "product",
    title: "IRS：Lynred 空间探测面阵",
    summary:
      "产品页没有写发布日期。LYNRED Staring array IRS 是碲镉汞面阵。特性表同时写出中波 4 到 6.25 μm，以及 8 到 14.5 μm。正文写从中波直到甚长波，用于傅里叶变换光谱探测。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page(
          "LYNRED Staring array IRS",
          "",
          "https://www.lynred.com/products/lynred-staring-array-irs",
          [
            "产品页没有写发布日期。标题为 LYNRED Staring array IRS。页首格式写成 160×160 / 480×480，像元 90 μm / 30 μm，MCT。",
            "正文写已做空间鉴定，面向傅里叶变换光谱的探测，光谱从中波直到甚长波，并写用于 MTG 任务。",
            "特性表光谱范围写成 4 到 6.25 μm（MWIR），以及 8 到 14.5 μm（该格写作 LWIR-LWIR）。焦平面工作温度 55 K。",
            "可操作性大于 99.5%（MWIR），大于 98%（该格写作 LWIR-VLWIR）。奈奎斯特频率处的 MTF 大于 0.6。PRNU 小于 2%。",
            "读出功能包括超像素内的子像素剔除、Normal Mode 与 Imager Mode 两种工作模式，以及 Skimming。",
          ],
          "mwir",
        ),
        bands: ["mwir", "lwir"],
      },
    ],
  },
  {
    id: "boson",
    date: "",
    companyId: "teledyne",
    category: "product",
    title: "Boson：Teledyne FLIR 长波机芯",
    summary:
      "产品页写明 Boson 与 Boson+ 都是非制冷长波红外机芯，光谱带 8 到 14 μm，分辨率有 640×512 和 320×256。Boson SX8 是 2026 年 6 月 8 日发布的 1280×1024、8 μm 长波机芯。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Boson 640", "", bosonPage, [
        "对照表：640×512，像元 12 μm。光谱带 8 到 14 μm。",
        "工业档热灵敏度不大于 40 mK。帧率 60 Hz 与 9 Hz。",
      ], "lwir"),
      page("Boson 320", "", bosonPage, [
        "对照表：320×256，像元 12 μm。光谱带与 Boson 640 同为 8 到 14 μm。",
      ], "lwir"),
      page("Boson+ 640", "", bosonPage, [
        "对照表：640×512。光谱带 8 到 14 μm。工业档热灵敏度不大于 20 mK。",
        "默认 60 Hz，可在运行时选 30 Hz。",
      ], "lwir"),
      page("Boson+ 320", "", bosonPage, [
        "对照表：320×256。光谱带 8 到 14 μm。灵敏度分档与 Boson+ 640 相同。",
      ], "lwir"),
      page("Boson SX8", "2026-06-08", "https://oem.flir.com/products/boson-sx8/", [
        "2026 年 6 月 8 日发布。发布稿写 ITAR-free、符合 NDAA、量产的非制冷长波机芯，像元 8 μm，SXGA（1280×1024），并写这是第一款把这两项合在一起的此类机芯。相对当时高产量非制冷 VGA（640×512），分辨率是其四倍，封装尺寸与之相近。",
        "产品页写微测辐射热计，并写像素数是 640×512 VGA 模组的 4 倍。系列对照表在 Boson SX8 一列写光谱带 8 μm 到 14 μm，热灵敏度工业档不大于 35 mK、专业档不大于 45 mK。长波分类页卡片写灵敏度不大于 35 mK、水平视场 24° 到 50°。",
        "产品页要点写 30 Hz 和 60 Hz，并写路线图里还有更高帧率。同页表格里三款定焦均为 In Production：24°、24 mm，零件号 801280A0024-6IXAAA；32°、18 mm，801280A0032-6IXAAA；50°、12 mm，801280A0050-6IXAAA。这三行的帧率写成 60 Hz，并用平均或跳帧得到 30 Hz。温度测量为 No。",
        "系列对照表把 Boson SX8 的 Shutterless Options 写成 No，视频处理延迟写成 TBD。产品页写在美国量产，出口分类 EAR 6A003.b.4.b，并写有不含锗的镜头。",
        "发布稿写用途包括无人机、反无人机、周界安防、手持设备、导引头、视觉增强，以及情报、监视和侦察。将在 2026 年巴黎 Eurosatory 的 Teledyne FLIR 展位演示。",
      ], "lwir"),
      page("Boson SX8 CZ", "2026-06-08", "https://oem.flir.com/products/boson-sx8-cz/", [
        "2026 年 6 月 8 日与 Boson SX8 同一篇发布稿。发布稿称 Boson SX8-CZ 15–75，出厂集成 5 倍连续变焦镜头，焦距 15 到 75 mm。系列页的小标题写作 Boson+ SX8，正文写作 Boson SX8 CZ 和 Boson SX8 – CZ 15–75。",
        "产品页标题为 Boson SX8 CZ, 15-75 mm，页面状态为 Preproduction。Boson SX8 产品页表格把零件号 2686-350-CZ 标为 In Production，水平视场栏为空，帧率写默认 60 Hz、运行时可选择 30 Hz。型号选择页另有零件号 2686-350，状态为 Preproduction。长波分类页卡片写水平视场 6° 到 30°。",
        "产品页：光谱范围为长波红外，7.5 µm 到 14 µm。分辨率 1280×1024，像元 8 µm。灵敏度工业档不大于 35 mK，专业档不大于 45 mK，并注明 factory filters enabled。光学连续变焦写成 5.35x。窄视场焦距 75 mm，公差 +4%/−0%；宽视场 15 mm，公差 +0%/−4%。",
        "最近对焦距离：窄视场大于 18 m，宽视场大于 3 m。尺寸 110×84.3×84.3 mm，重量 530 g。标称电源 12 V ±1 V。工作温度 −35°C 到 70°C。镜头前防护 IP67。场景动态范围高增益到 140°C。",
        "产品页写温度测量为 No，同页又写准确度 ±5°C 或更小，视工作条件而定。非均匀性校正为出厂校准，并用 Silent Shutterless NUC（SSN），标准配置也包括物理快门。变焦过程中的视轴漂移小于 0.10 mm。变焦时间小于 1.5 秒，对焦时间小于 0.5 秒。",
        "产品页要点另写 30 Hz 和 60 Hz，并写后续还有更高帧率。出口分类写 EAR 6A003.b.4.b。用途包括无人系统、反无人机、周界监视、轻型装甲车辆态势感知和瞄准，以及单兵观瞄。",
      ], "lwir"),
    ],
  },
  {
    id: "lepton",
    date: "",
    companyId: "teledyne",
    category: "product",
    title: "Lepton：Teledyne FLIR 长波微型模组",
    summary:
      "Lepton 系列规格书把光谱带写成长波红外 8 到 14 μm，并列出 2.5、3.1R、3.5 和 UWFOV。Lepton XDS 是 2026 年 2 月 24 日发布的双光模组，热像一侧用 Lepton 3.5。",
    applications: ["spectral", "consumer"],
    technologies: ["spectral"],
    models: [
      page("Lepton 2.5", "", leptonSheet, [
        "规格书：长波红外 8 到 14 μm。80×60，像元 17 μm。热灵敏度小于 50 mK。",
      ], "lwir", "打开产品手册"),
      page("Lepton 3.1R", "", leptonSheet, [
        "规格书：光谱带同为 8 到 14 μm。160×120，像元 12 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton 3.5", "", leptonSheet, [
        "规格书：160×120，像元 12 μm，光谱带 8 到 14 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton UWFOV", "", leptonSheet, [
        "规格书：输出 160×120，可用区域为直径 120 像素。光谱带 8 到 14 μm，像元 12 μm。",
      ], "lwir", "打开产品手册"),
      page("Lepton XDS", "2026-02-24", "https://oem.flir.com/products/lepton-xds/", [
        "2026 年 2 月 24 日在巴塞罗那和戈利塔发布，并将于 2026 年 3 月 2 日至 5 日在巴塞罗那世界移动通信大会 7B6 展位展出。发布稿写 ITAR-free 的热像与可见光双光模组。",
        "发布稿：热像一侧为 160×120、可测温的 Lepton 3.5，可见光一侧为 500 万像素。带 MSX，把可见光图像的边缘叠到热像上，并带 Prism ISP。输出包括辐射测温 JPEG（RJPEG）。接口为 USB。",
        "产品页型号 500-1395-00，状态写 Under Development。热像探测器写 Lepton 3.5，160×120，像元 12 µm，热灵敏度小于 50 mK。红外镜头 57° 水平视场，f/1.1，视频 8.7 Hz。可见光传感器 2592×1944，像元 1.4 µm，有效焦距 1.57 mm，水平视场 98.2°，光圈写成 F/1/2.2，视频 640×480、30 Hz。",
        "产品页：高增益测温准确度为 ±5°C 或 5% 中较大者（典型），低增益为 ±10°C 或 10% 中较大者（典型）。工作温度 0°C 到 +60°C，非工作温度 −40°C 到 +70°C。",
        "尺寸 29×26.7×8.8 mm，重量 5.6 g。功耗：工作 1.6 W，快门动作 1.9 W，待机 500 mW。产品页写没有安装 IMU。",
        "发布稿把出口分类写成 ECCN 6A003.b.4.b。产品页写成 6a993.b.4.b。发布稿写用途包括火灾探测与预防、电动车电池监测、机器人导航、无人平台、智能基础设施，以及健康和安全。产品页还写移动设备、小型电子产品、智能建筑、占用分析和设备状态监测。",
      ], "lwir"),
    ],
  },
  {
    id: "neutrino",
    date: "2026-02-10",
    companyId: "teledyne",
    category: "product",
    title: "Neutrino：Teledyne FLIR 中波机芯",
    summary:
      "SWaP 系列页写 Neutrino LC 为 VGA、Neutrino SX8 为 SXGA，都是 HOT 焦平面的中波机芯。2026 年 2 月 10 日的发布稿推出 Neutrino SX8 ISR 50-1000。ISR 系列页写中波，并写今天有四种配置，对照表列出 5 行。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Neutrino LC", "", "https://oem.flir.com/products/neutrino-swapc-series?segment=oem&vertical=mwir", [
        "SWaP 系列页没有写发布日期。对照表两行都是 640×512、像元 15 µm、无镜头、最高 60 Hz、温度测量 No、状态 In Production。零件号 425-0640140-0PAAX 为无快门，425-0640140-1PAAX 为带快门。",
        "系列页写 VGA 分辨率的 Neutrino LC 与 SXGA 分辨率的 Neutrino SX8 提供中波图像，基于 HOT 焦平面和线性微制冷机，符合 NDAA，ITAR-free。出口分类写 EAR 6A003.b.4.a。",
        "系列页写工作温度 -40℃ 到 +71℃。降温功耗写成小于 8 W 或小于 12 W，23℃ 稳态小于 4 W 或小于 8 W，没有把这两档分到 LC 或 SX8。",
        "系列页写用途包括小型吊舱和机身、手持设备、安防相机、瞄准装置和资产监测。",
      ], "mwir"),
      page("Neutrino SX8", "", "https://oem.flir.com/products/neutrino-swapc-series/?model=425-1280125-1PAAX&segment=oem&vertical=mwir", [
        "f/2.5、带快门的型号页零件号为 425-1280125-1PAAX，状态 In Production。分辨率 1280×1024，像元 8 µm。光谱带写标准 3.4 到 5.1 µm。传感器技术写 HOT MWIR。灵敏度小于 38 mK（50% 阱填充，黑体 30℃，flood 模式）。",
        "型号页：帧率最高 60 Hz。光圈可选 f/4、f/3 和 f/2.5，水平视场写无镜头。制冷机 MTTF 最高 27,000 小时。阱容量 2.6×10⁶ 电子。60 Hz 下积分时间 0.01 ms 到 16 ms。读出电路 ISC1601。",
        "型号页：相机输入 +5.0 Vdc，制冷机 +12 Vdc。降温功耗小于 12 W，23℃ 稳态小于 8 W。尺寸 7.9×5.3×6.1 cm，重量小于 420 g。工作温度 -40℃ 到 +71℃。出口分类 6A003.b.4.a。",
        "系列对照表另有 f/3 零件号 425-1280130-1PAAX 和 f/4 零件号 425-1280140-1PAAX，都是 1280×1024、8 µm、最高 60 Hz、In Production。",
      ], "mwir"),
      page("Neutrino SX8 ISR 15-300", "", "https://oem.flir.com/products/neutrino-ground-isr-series?segment=oem&vertical=mwir", [
        "ISR 系列页没有单独写发布日期。对照表：零件号 425-1601140-C802，1280×1024 HOT MWIR，30 Hz，像元 8 µm，水平视场 2.0° 到 39.1°（无热化），温度测量 No，状态 In Production。",
        "系列页写这些机芯把中波模组与连续变焦镜头做在一起，线性斯特林制冷机 MTTF 大于 27,000 小时。接口写 30 Hz Camera Link 或千兆以太网，以及 1080P30 HD-SDI、720P60 HD-SDI、NTSC 或 PAL。",
      ], "mwir"),
      page("Neutrino LC ISR 20-420", "", "https://oem.flir.com/products/neutrino-ground-isr-series?segment=oem&vertical=mwir", [
        "ISR 系列页没有单独写发布日期。对照表：零件号 425-0403155-C643，640×512 HOT MWIR，30 Hz，像元 15 µm，水平视场 1.30° 到 27.50°（无热化），温度测量 No，状态 In Production。",
        "系列页写中波，并写线性斯特林制冷机 MTTF 大于 27,000 小时。",
      ], "mwir"),
      page("Neutrino SX8 ISR 35-700", "", "https://oem.flir.com/products/neutrino-ground-isr-series?segment=oem&vertical=mwir", [
        "ISR 系列页没有单独写发布日期。对照表：零件号 425-1601140-C804，1280×1024 HOT MWIR，30 Hz，像元 8 µm，水平视场 0.84° 到 16.65°（无热化），温度测量 No，状态 In Production。",
      ], "mwir"),
      page("Neutrino SX8 ISR 50-1000", "2026-02-10", "https://oem.flir.com/products/neutrino-ground-isr-series?segment=oem&vertical=mwir", [
        "2026 年 2 月 10 日发布。发布页日期行写 Tuesday, February 10, 2026，正文写成 Februay 10, 2026。发布稿称它是更名后的 Neutrino ISR 系列（原 Neutrino Ground ISR Series）里目前探测距离最远的型号，连续变焦 20 倍。",
        "发布稿：使用制冷的 1280×1024 Neutrino SX8 中波传感器，像元 8 µm，工厂集成 50 mm 到 1000 mm 连续变焦镜头。制冷机写 FL100 线性斯特林，MTTF 大于 27,000 小时。车辆探测 34 km，识别 23.5 km，辨认 20 km。",
        "发布稿写接口包括千兆以太网、Camera Link 和 HD-SDI。符合 NDAA，ITAR-free，出口分类 EAR 6A003.b.4.a。写明面向边境监视、周界安防和反无人机。",
        "ISR 系列对照表：零件号 425-1601140-C805，1280×1024 HOT MWIR，30 Hz，像元 8 µm，水平视场 0.59° 到 11.69°（无热化），温度测量 No，状态 In Production。",
      ], "mwir"),
      page("Neutrino SX12 ISR 1200", "", "https://oem.flir.com/products/neutrino-ground-isr-series?segment=oem&vertical=mwir", [
        "ISR 系列页没有单独写发布日期。对照表：零件号 425-0056-00，分辨率格写 1280×1024，没有写 HOT MWIR。30 Hz，像元 12 µm，水平视场 0.72° 到 7.2°（无热化），温度测量 No，状态 In Production。",
        "系列页正文写这一系列是中波。对照表这一行没有重复光谱带。",
      ], "mwir"),
    ],
  },
  {
    id: "gst-uncooled",
    date: "",
    companyId: "gst",
    category: "product",
    title: "GST：高芯科技非制冷长波探测器",
    summary:
      "这些型号的产品页都把响应波段写成 8 到 14 μm。GST212W、GST417W、GST612W 和 GST612W9 是晶圆级封装。GST412C、GST417C 和 GST612C 是陶瓷封装。GST417M、GST612M、GST817M 和 GST1212M 是金属封装。GST612W9 的标题写车规级红外探测器，正文写非制冷红外热成像模组。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("GST212W", "", "https://www.gst-ir.com/products-ir-detector/256X192/GST212W.html", [
        "晶圆级封装。256×192，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD 小于 40 mK。最高 50 Hz。重量小于 0.5 g。",
      ], "lwir"),
      page("GST417W", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST417W.html", [
        "晶圆级封装，氧化钒。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <40 mK。热响应时间 <12 ms。最大帧频 50 Hz。功耗 ≤180 mW。",
        "尺寸 18×16×2.75 mm（不含接口），重量 <2 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST412C", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST412C.html", [
        "陶瓷封装，氧化钒，无 TEC。400×300，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD ＜35 mK，最大帧频 50 Hz，功耗 ≤140 mW。特性栏另写功耗低至 80 mW。",
        "尺寸 18.5×18.5×3.8 mm（不计引脚），重量 <4.5 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612W", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612W.html", [
        "晶圆级封装，氧化钒。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <40 mK。最大帧频 50 Hz。功耗 ≤150 mW。",
        "尺寸 18×16×2.75 mm（不含接口），重量 <2 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST417C", "", "https://www.gst-ir.com/products-ir-detector/400X300/578.html", [
        "陶瓷封装，氧化钒，无 TEC。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD ＜30 mK，最大帧频 50 Hz，功耗 ＜180 mW。",
        "规格表尺寸写 18.×18.5×3.8 mm（不计引脚），特性栏写 18.5×18.5×3.8 mm。重量 ＜4.5 g。",
      ], "lwir"),
      page("GST417M", "", "https://www.gst-ir.com/products-ir-detector/400X300/GST417M.html", [
        "金属封装，氧化钒，内置 TEC。400×300，像元 17 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <30 mK。最大帧频 50 Hz。功耗 ≤180 mW。",
        "尺寸 30×19.8×7.32 mm（不计引脚），重量 <15 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612M", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612M.html", [
        "金属封装，氧化钒，内置 TEC。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "规格表典型 NETD <35 mK。最大帧频 50 Hz。功耗 ≤150 mW。",
        "尺寸 30×19.8×7.32 mm（不计引脚），重量 <20 g。工作温度 -40°C 到 +85°C。",
      ], "lwir"),
      page("GST612W9", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612W9.html", [
        "标题写车规级红外探测器，正文写非制冷红外热成像模组。氧化钒，晶圆级封装。640×512，像元 12 μm。光谱范围 8 到 14 μm。",
        "正文写国内首获车规级 AEC-Q104 认证，已实现大批量生产，用于智能驾驶。",
        "规格表典型 NETD ＜30 mK，最大帧频 50 Hz，功耗 ＜150 mW。特性栏功耗写 ＜120 mW。",
        "尺寸 19.1×24×3.75 mm（不含接口），重量 ＜2 g。工作温度 -40℃ 到 105℃。",
      ], "lwir"),
      page("GST612C", "", "https://www.gst-ir.com/products-ir-detector/640X512/GST612C.html", [
        "陶瓷封装。640×512，像元 12 μm。响应波段 8 到 14 μm。",
        "典型 NETD 小于 35 mK。最高 50 Hz。功耗不大于 150 mW。",
      ], "lwir"),
      page("GST817M", "", "https://www.gst-ir.com/products-ir-detector/800X600/GST817M.html", [
        "金属封装，氧化钒。800×600，像元 17 μm。光谱范围 8 到 14 μm。",
        "典型 NETD 小于 30 mK。最高 50 Hz。内置 TEC。",
      ], "lwir"),
      page("GST1212M", "", "https://www.gst-ir.com/products-ir-detector/1280X1024/GST1212M.html", [
        "金属封装，氧化钒。1280×1024，像元 12 μm。光谱范围 8 到 14 μm。",
        "典型 NETD 小于 50 mK。最高 50 Hz。内置 TEC。重量小于 57 g。",
      ], "lwir"),
    ],
  },
  {
    id: "c615s",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C615：高芯科技制冷红外探测器",
    summary:
      "C615S 是长波二类超晶格，光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。C615M 是中波碲镉汞，光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。两款都是 640×512、像元 15 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C615S", "", "https://www.gst-ir.com/products-ir-detectors/long-wave/C615S.html", [
        "640×512，像元 15 μm，二类超晶格。光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。",
        "NETD 典型值：F2、ITR 为 25 mK；隔行合并为 22 mK。",
      ], "lwir"),
      page("C615M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C615M.html", [
        "中波制冷红外探测器。640×512，像元 15 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 16 mK，F4 为 18 mK。有效像元率 ≥99.76%。",
        "可配置制冷机 RS058、RS046 和 LS734。规格表按制冷机分列功耗和重量。",
      ], "mwir"),
    ],
  },
  {
    id: "c1212",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C1212M：高芯科技中波制冷探测器",
    summary:
      "产品页写 C1212M 是碲镉汞中波制冷红外探测器，1280×1024、像元 12 μm，光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C1212M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C1212M.html", [
        "1280×1024，像元 12 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 16 mK，F4 为 18 mK。有效像元率 ≥99.5%。",
        "可配置制冷机 RS058。稳定功耗 ≤7 W，最大功耗 ≤17 W。制冷时间 ≤6 min。重量 ≤600 g。",
      ], "mwir"),
    ],
  },
  {
    id: "c330",
    date: "",
    companyId: "gst",
    category: "product",
    title: "C330：高芯科技制冷红外探测器",
    summary:
      "C330M 是 320×256、30 μm 的碲镉汞中波探测器。C330S 长波与 C330S 双色都是 320×256、30 μm 的二类超晶格。双色产品页同时给出中波和长波两段光谱范围。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("C330M", "", "https://www.gst-ir.com/products-ir-detectors/medium-wave/C330M.html", [
        "中波制冷红外探测器。320×256，像元 30 μm，碲镉汞。光谱范围 3.7±0.2 μm 到 4.8±0.2 μm。",
        "NETD 典型值 F2 为 9 mK，F4 为 15 mK。工作模式写明 ITR 积分。",
        "可配置制冷机 RS058 与 RS046H。",
      ], "mwir"),
      page("C330S", "", "https://www.gst-ir.com/products-ir-detectors/long-wave/C330S.html", [
        "长波制冷红外探测器。320×256，像元 30 μm，二类超晶格。光谱范围 7.7±0.2 μm 到 9.4±0.3 μm。",
        "NETD 典型值 20 mK（F2）。可配置制冷机 RS058。稳定功耗 ≤8 W，最大功耗 ≤17 W。",
      ], "lwir"),
      {
        ...page(
          "C330S 双色",
          "",
          "https://www.gst-ir.com/products-ir-detectors/two-color/C330STC.html",
          [
            "产品页型号写 C330S 中长波双色制冷红外探测器。320×256，像元 30 μm，二类超晶格。",
            "中波段 3.7±0.2 μm 到 4.8±0.2 μm，长波段 7.7±0.2 μm 到 9.4±0.3 μm。",
            "NETD 典型值中波 20 mK，长波 25 mK。可配置制冷机 RS058。稳定功耗 ≤9 W。",
          ],
          "mwir",
        ),
        bands: ["mwir", "lwir"],
      },
    ],
  },
  {
    id: "irnova-njord",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Njord：IRnova 中波探测器",
    summary:
      "Njord MW、Njord SL 与 Njord LLT 的规格表都是 1280×1024、10 μm，光谱范围 3.7 到 5.1 μm。Njord MW 的产品页正文写全 3 到 5 μm 响应。Njord SL 的产品页写它是 Njord MW 的分体线性制冷版本。Njord LLT 的产品页写它是长寿命版本。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Njord MW", "2025-02-24", "https://www.irnova.se/t2sl-njord-mw", [
        "2025 年 2 月 24 日发布。新闻稿把型号写成 Njord MW SXGA T2SL，并写旋转式 SWaP 版本当时即可订货。",
        "1280×1024，像元 10 μm，T2SL。产品页正文写全 3 到 5 μm 响应。新闻稿也写覆盖整个中波 3 到 5 μm。",
        "规格表光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。规格表 NETD 25 mK（F/4，60 Hz）。新闻稿写 F/4 下 NETD 低于 30 mK。",
      ], "mwir"),
      page("Njord SL", "", "https://www.irnova.se/products/njord-mw-sl", [
        "产品页写它是 Njord MW 的分体线性制冷版本，SXGA，光轴更短，并写适合无人机云台。正文写这种制冷机几乎听不见。",
        "1280×1024，像元 10 µm，T2SL。光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。光圈 F/2、F/3.4、F/4。NETD 25 mK（F/4，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 61%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 K588、SX020。功耗 2 W，并写不含近距电子学。降温时间 4 分钟。制冷机电压 12 V。重量 340 g。外形 87×72×58 mm。制冷机 MTTF 40 000 小时。环境条件 MIL-STD-810。",
        "2025 年 2 月 24 日的 Njord MW 新闻稿写，分体线性版本计划在第二季度发布，当时已接受订货。本页没有写发布日期。",
      ], "mwir"),
      page("Njord LLT", "", "https://www.irnova.se/products/njord-llt", [
        "产品索引把这一型号标成 New。产品页没有写发布日期，页脚写 This is revision 1.0。",
        "产品页写它是 Njord 的长寿命版本，把 Njord 的 T2SL 焦平面装进可配 0.5 W 制冷机的杜瓦。正文写预期寿命 50 000 小时或更长，并写这相当于将近 6 年的 24/7 运行。",
        "1280×1024，像元 10 µm，T2SL。光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。光圈 F/1.2、F/2、F/3.4、F/4。NETD 25 mK（F/4，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 61%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 3 W，并写不含近距电子学。降温时间 3.5 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 143×76×62 mm。规格表制冷机 MTTF 大于 50 000 小时。环境条件 MIL-STD-810。",
        "产品页写用途包括防空目标跟踪、边境与固定监控、工业热像与无损检测、远距离安防，以及坦克瞄具、海上和消防。",
      ], "mwir"),
    ],
  },
  {
    id: "skade",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Skade：IRnova 中波探测器",
    summary:
      "产品页写 Skade 是 1280×1024、7.5 µm 的 T2SL 中波探测器。规格表光谱范围 3.7 到 5.1 µm。产品索引写约 2027 年第二季度发布。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Skade", "", "https://www.irnova.se/products/skade", [
        "产品索引上方卡片写 To be released Q2 2027，产品列表标签写 Releasing Q2 2027，记为约 2027 年第二季度。产品页没有写发布日期，页脚写 This is revision 1.0。",
        "卡片正文写它将补齐 HOT HD 探测器组合，像元间距降到 7.5 µm，并写许多新特性尚未公布。",
        "产品页写 1280×1024、7.5 µm、T2SL，并写旋转式和分体线性两种制冷。正文写在整个 3 到 5 µm 有高量子效率。规格表光谱范围 3.7 到 5.1 µm，可选二氧化碳陷波。",
        "光圈 F/2、F/3、F/3.4。NETD 30 mK（F/3，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 60%。",
        "近距电子学供电 5 V。最高帧率 60 Hz，可选 120 Hz。接口 Camera Link。这一栏把 proximity electronics 写成 poximity elecronics，并写含制冷机控制。",
        "制冷机 RMs1、K580、K588、SX020。功耗 2 W，并写不含近距电子学。降温时间 4 分钟。制冷机电压 12 V。重量 260 g（RMs1）、350 g（K588）。外形 97×58×55 mm（RMs1）、87×72×58 mm（K588）。制冷机 MTTF 为 12 500 小时（RMs1）和 40 000 小时（K588）。环境条件 MIL-STD-810。",
        "产品页写用途包括远距离安防监控、无人机云台、机载 ISR 与瞄准、手持和电池供电系统，以及移动和固定平台。",
      ], "mwir"),
    ],
  },
  {
    id: "irnova-oden",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Oden：IRnova 中波探测器",
    summary:
      "Oden MW、Oden SL 与 Oden LLT 的规格表都写 640×512、15 μm，光谱范围 3.7 到 5.1 μm。Oden SL 的产品页写它是 Oden MW 的分体线性制冷版本。Oden LLT 的产品页写它是长寿命版本。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Oden MW", "", "https://www.irnova.se/t2sl-oden-mw", [
        "640×512，像元 15 μm。光谱范围 3.7 到 5.1 μm。",
        "NETD 18 mK（F/4，60 Hz）。工作温度最高 140 K。产品页写芯片来自瑞典。",
      ], "mwir"),
      page("Oden SL", "", "https://www.irnova.se/products/oden-mw-sl", [
        "产品页写它是 Oden MW 的分体线性制冷版本，并写光轴更短，适合空间受限的系统，例如无人机云台。正文写双对置压缩机，声音很低、振动很小。",
        "640×512，像元 15 µm，T2SL。光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。光圈选项写 F4 与 F/5.5。NETD 18 mK（F/4，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 62%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 K588、SX020。功耗 2 W，并写不含近距电子学。降温时间 3.5 分钟。制冷机电压 12 V。重量 340 g。外形 86×70×52 mm。制冷机 MTTF 40 000 小时。环境条件 MIL-STD-810。",
      ], "mwir"),
      page("Oden LLT", "", "https://www.irnova.se/products/oden-llt", [
        "产品页写它是 Oden 的长寿命版本，把 Oden 的 T2SL 焦平面装进可配 0.5 W 制冷机的杜瓦。正文写预期寿命 50 000 小时或更长，并写这相当于将近 6 年的 24/7 运行。",
        "640×512，像元 15 µm，T2SL。光谱范围 3.7 到 5.1 μm，可选二氧化碳陷波。光圈选项写 F4 与 F/5.5。NETD 18 mK（F/4，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 62%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 3 W。这一栏把 electronics 写成 elecroics，并写不含近距电子学。降温时间 3 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 143×76×62 mm。规格表制冷机 MTTF 大于 50 000 小时。环境条件 MIL-STD-810。",
      ], "mwir"),
    ],
  },
  {
    id: "hnoss",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Hnoss：IRnova 光学气体成像探测器",
    summary:
      "Hnoss 330、Hnoss 330 SL 与 Hnoss 330 LLT 的规格表都是 640×512、15 μm 的 T2SL，光谱范围 3.2 到 3.4 μm。三页都写光学气体成像。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Hnoss 330", "", "https://www.irnova.se/products/hnoss-330", [
        "产品页写这是用于光学气体成像的 SWaP 探测器，材料为 T2SL。正文写可成像甲烷、丙烷，以及乙醇、苯等液体蒸气，并写适合手持扫描泄漏。",
        "640×512，像元 15 µm。光谱范围 3.2 到 3.4 µm。光圈 F/1.2。NETD 16 mK（F/1.2，30 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 62%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RMs1、K580。功耗 2 W，并写不含近距电子学。降温时间 3.5 分钟。制冷机电压 12 V。重量 250 g。外形 88×50×46 mm。制冷机 MTTF 12 500 小时。环境条件 MIL-STD-810。",
        "产品页写用途包括吸收在 3.3 µm 一带的气体，并写针对甲烷、乙烷、丙烷和其他 VOC，以及手持和电池供电相机。",
      ], "mwir"),
      page("Hnoss 330 SL", "", "https://www.irnova.se/products/hnoss-330-sl", [
        "产品页写它与 Hnoss 330 SWaP VOC 探测器相同，但使用分体线性制冷机。正文写长度更短，适合无人机云台从上方查找泄漏。",
        "640×512，像元 15 µm，T2SL。光谱范围 3.2 到 3.4 µm。光圈 F/1.2。NETD 16 mK（F/1.2，30 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 62%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 K588、SX020。功耗 2 W，并写不含近距电子学。降温时间 3.5 分钟。制冷机电压 12 V。重量 340 g。外形 87×63×52 mm。制冷机 MTTF 40 000 小时。环境条件 MIL-STD-810。",
      ], "mwir"),
      page("Hnoss 330 LLT", "", "https://www.irnova.se/products/t2sl-hnoss-330-llt", [
        "页首写 640×512，并写长寿命制冷机，面向固定和移动安装。正文写分辨率提高因而视场更大。规格表格式仍是 640×512。",
        "640×512，像元 15 μm，T2SL。光谱范围 3.2 到 3.4 μm。光圈 F/1.2。NETD 16 mK（F/1.2，30 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 62%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 3 W，并写不含近距电子学。降温时间 3 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 133×76×66 mm。制冷机 MTTF 大于 50 000 小时。环境条件 MIL-STD-810。",
        "正文写光谱范围 3.3 µm，并写可检测甲烷、乙烷、丙烷或其他 VOC。",
      ], "mwir"),
    ],
  },
  {
    id: "fenrir",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Fenrir Pol：IRnova 长波偏振探测器",
    summary:
      "产品页写 Fenrir Pol 是制冷长波偏振 QWIP 探测器，640×512、15 μm，光谱范围 7.7 到 9.1 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Fenrir Pol", "", "https://www.irnova.se/products/fenrir-lw-pol", [
        "产品页写这是制冷长波偏振探测器。正文写片内 2×2 像素结构，每个像素对应一个偏振角：0°、45°、90° 和 -45°。",
        "640×512，像元 15 μm，QWIP。光谱范围 7.7 到 9.1 μm。光圈 F/2 与 F/2.24。NETD 35 mK（F/2.24，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 45%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 5.5 W，并写不含近距电子学。降温时间 5 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 142×76×68 mm。制冷机 MTTF 31 500 小时。环境条件 MIL-STD-810。",
        "产品页写用途包括溢油探测、反伪装、简易爆炸装置探测、红外人脸识别，以及工业测温和无损检测。",
        "下载区写 LWIR & VLWIR QWIP。规格表光谱范围是 7.7 到 9.1 μm。",
      ], "lwir"),
    ],
  },
  {
    id: "tor",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Tor：IRnova 长波 QWIP 探测器",
    summary:
      "产品页写 Tor 是 15 μm 像元的 QWIP 探测器，用于制冷长波，格式 640×512，光谱范围 7.7 到 9.1 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Tor", "", "https://www.irnova.se/products/tor-lw", [
        "产品页写这是 15 μm 像元的 QWIP 探测器，用于高端制冷长波。",
        "640×512，像元 15 μm，QWIP。光谱范围 7.7 到 9.1 μm。光圈 F/2 与 F/2.24。NETD 30 mK（F/2.24，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 45%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 5.5 W，并写不含近距电子学。降温时间 5 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 142×76×68 mm。制冷机 MTTF 31 500 小时。环境条件 MIL-STD-810。",
        "产品页写用途包括边境监视、防空目标跟踪、坦克观瞄、海事、消防、工业测温和无损检测，以及机载或天基对地成像。",
        "下载区写 LWIR & VLWIR QWIP。规格表光谱范围是 7.7 到 9.1 μm。",
      ], "lwir"),
    ],
  },
  {
    id: "idun",
    date: "",
    companyId: "irnova",
    category: "product",
    title: "Idun 1055：IRnova 长波气体成像探测器",
    summary:
      "产品页写 Idun 1055 是 640×512、15 μm 的 QWIP 光学气体成像探测器，光谱范围 10.3 到 10.8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Idun 1055", "", "https://www.irnova.se/products/qwip-idun-1055", [
        "产品页写这是基于其 QWIP 的 640×512 光学气体成像探测器，针对六氟化硫，也可用于氨、乙烯，以及吸收在 10.55 μm 附近的其他气体。",
        "640×512，像元 15 μm，QWIP。光谱范围 10.3 到 10.8 μm。光圈 F/1.2。NETD 一栏写 25 mK（F/1.2，0 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 45%。",
        "近距电子学供电 5 V，最高帧率 60 Hz，可选 120 Hz，接口 Camera Link，含制冷机控制和近距电子学。",
        "制冷机 RM3i、K508、K508N、SRI401。功耗 6.5 W，并写不含近距电子学。降温时间 5.5 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g。外形 133×76×67 mm。制冷机 MTTF 14 000 小时。环境条件一栏写 Commerical。",
        "下载区写 LWIR & VLWIR QWIP。规格表光谱范围是 10.3 到 10.8 μm。",
      ], "lwir"),
    ],
  },
  {
    id: "irnova-balder",
    date: "2026-04-16",
    companyId: "irnova",
    category: "product",
    title: "Balder：IRnova 扩展短波探测器",
    summary:
      "2026 年 4 月 16 日发布。Balder 是 640×512、15 μm 的 T2SL 探测器。产品页光谱范围 0.9 到 2.5 μm。新闻稿写帧率最高 300 Hz，产品页写 150 Hz，可选 300 Hz。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral"],
    models: [
      page("Balder", "2026-04-16", "https://www.irnova.se/products/balder", [
        "2026 年 4 月 16 日发布。新闻稿写这是 IRnova 第一款 eSWIR T2SL 产品，最初为太空设计，现以 640 VGA 供货。格式写焦平面、旋转式和分体线性 IDDCA。",
        "产品页：640×512，像元 15 μm，T2SL。光谱范围 0.9 到 2.5 μm。光圈 F/1.2 与 F/2。像元可操作性 99.9%。180 K 暗电流小于 0.5 µA/cm²。PRNU 小于 2%。奈奎斯特频率处 MTF 大于 60%，1.5 到 2.3 µm 大于 70%。",
        "产品页：读出包括开窗、ITR、IWR 和 IMRO，供电 5 V，帧率 150 Hz（可选 300 Hz），接口 Camera Link。制冷机 RMs1 或 K588。功耗小于 2 W，并写不含近距电子学。降温时间 3.5 分钟。制冷机电压 12 V。重量 240 g（RMs1）、330 g（K588）。外形 97×57×55 mm（RMs1）、87×72×58 mm（K588）。MTTF 大于 40 000 小时。环境条件 MIL-STD-810。",
        "新闻稿写帧率最高 300 Hz，读出还包括 snapshot，工作温度最高 200 K。IDDCA 写功耗低于 2 W、重量低于 300 g、降温快于 3 分钟。MTTF 写旋转式高于 15 000 小时、分体线性高于 35 000 小时。新闻稿写用途包括监视、工业监测、机器视觉和光谱测量。",
      ], "swir"),
    ],
  },
  {
    id: "irnova-tyr",
    date: "2026-01-23",
    companyId: "irnova",
    category: "product",
    title: "Tyr：IRnova 长波 QWIP 探测器",
    summary:
      "2026 年 1 月 23 日发布。Tyr 是 1280×1024、10 μm 的 QWIP 探测器。产品页光谱范围 7.7 到 9.1 μm，并写长波。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Tyr", "2026-01-23", "https://www.irnova.se/products/tyr", [
        "2026 年 1 月 23 日发布。新闻稿写这是 SXGA 格式的长波 QWIP 探测器，分辨率 1280×1024，并写可以一开始就按量交付。",
        "产品页：1280×1024，像元 10 µm，QWIP，长波。光谱范围 7.7 到 9.1 µm。光圈 F/1.2 与 F/2。NETD 35 mK（F/2，60 Hz）。像元可操作性 99.9%。奈奎斯特频率处 MTF 41%。",
        "产品页：近距电子学供电 5 V，最高帧率 60 Hz，接口 Camera Link，含制冷机控制和近距电子学。制冷机 RM3i、K508、K508N、SRI401。功耗一栏写 5.5，并写不含近距电子学，页面没有写出单位。降温时间 5 分钟。制冷机电压 12 V，并写可选 24 V。重量 590 g，外形 143×76×62 mm。制冷机 MTTF 18 000 小时。环境条件 MIL-STD-810。",
        "产品页写用途包括远距离安防与监视、防空目标跟踪、边境监视、机载或天基对地成像、坦克观瞄、海事、消防，以及工业测温和无损检测。",
      ], "lwir"),
    ],
  },
  {
    id: "pelican-d",
    date: "",
    companyId: "scd",
    category: "product",
    title: "PELICAN-D：SCD 制冷红外探测器",
    summary:
      "PELICAN-D 640 产品页写中波 3.6 到 5 μm。PELICAN-D LW 产品页写长波，截止波长 9.3 μm。HOT PELICAN-D 640 产品页写 XBn，工作温度 150 K。PELICAN-D JT 与 PELICAN-D LW JT 的产品页写焦耳-汤姆逊制冷。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("PELICAN-D 640", "", "https://www.scd-infrared.com/products/pelican-d-640/", [
        "640×512，像元 15 μm。产品页写中波，光谱带 3.6 到 5 μm，可选 1 到 5.4 μm。",
        "材料为 InSb。工作温度 80 K。70% 阱填充时 NETD 20 mK。最高帧频 350 Hz。",
      ], "mwir"),
      page("PELICAN-D LW", "", "https://www.scd-infrared.com/products/pelican-d-lw/", [
        "640×512，像元 15 μm，T2SL。产品页写长波，截止波长 9.3 μm。",
        "工作温度 77 K。最高帧频 350 Hz。",
        "产品页同一行写 NETD at 70% well fill 为 15 mK，括号里又写 65%、30 Hz。两处阱填充比例不一致，页面没有解释。",
      ], "lwir"),
      page("HOT PELICAN-D 640", "", "https://www.scd-infrared.com/products/hot-pelican-d-640/", [
        "产品页写它基于 SCD 的 XBn bariode，焦平面工作温度 150 K。产品页没有写发布日期。",
        "640×512，像元 15 μm。光谱带 3.6 到 4.2 μm，并写可选 1 到 4.2 μm。70% 阱填充时 NETD 23 mK。最高帧频 350 Hz。",
        "制冷机为高可靠整体旋转式。23℃ 制冷机功耗 6 W，近距电子学功耗 1.7 W。长度 140 mm，重量 650 gr。读出功能写 Windowing。",
        "标准配置制冷机 K508N，可选 K508。标准滤光片 3.6 到 4.2 μm。标准冷屏 f/4，可选 f/5.5。近距电子学标准为带 Camera Link 的数字输出，可选 Video Engine。",
      ], "mwir"),
      page("PELICAN-D JT", "", "https://www.scd-infrared.com/products/pelican-d-jt/", [
        "产品页把 JT 探测器写成面向导弹相关应用，用焦耳-汤姆逊制冷。产品页没有写发布日期。",
        "640×512，像元 15 μm，InSb。光谱带 3.6 到 5 μm。工作温度 77 K。70% 阱填充时 NETD 20 mK。最高帧频 350 Hz。",
        "23℃ 降温时间小于 14 秒，并写冷却气体为 N2。含制冷机和近距板的光轴长度 84 mm，含制冷机和近距板的重量 250 gr。",
        "同页配置栏把其他 JT 配置写成 Pelican-D LW 和 Blackbird 640。",
      ], "mwir"),
      page("PELICAN-D LW JT", "", "https://www.scd-infrared.com/products/pelican-d-lw-jt/", [
        "与 PELICAN-D JT 一样，产品页写焦耳-汤姆逊制冷，并写焦平面发热量低，可支持更长的任务时间。产品页没有写发布日期。",
        "640×512，像元 15 μm，T2SL。光谱带写长波截止 9.3 μm。工作温度 77 K。70% 阱填充时 NETD 32 mK。最高帧频 350 Hz。",
        "23℃ 降温时间小于 20 秒，并写冷却气体为 N2。含近距板、不含制冷机的光轴长度 80 mm。含制冷机和近距板的重量 280 gr。",
        "同页配置栏把其他 JT 配置写成 Pelican-D 和 Blackbird 640。",
      ], "lwir"),
    ],
  },
  {
    id: "robin",
    date: "2026-04-10",
    companyId: "scd",
    category: "product",
    title: "Robin：SCD 非制冷长波探测器",
    summary:
      "2026 年 4 月 10 日发布 Robin 系列。产品页写 Robin 是 640×512、12 μm 的氧化钒微测辐射热计，时间域 NETD 的条件里写 7.5 到 14 μm。同页还列出 Micro Robin 和 Core Robin。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Robin", "2026-04-10", "https://www.scd-infrared.com/products/robin/", [
        "新闻页日期写 10/Apr/2026。新闻稿写 12 µm VGA 长波非制冷探测器和热像机芯，材料为氧化钒微测辐射热计，热时间常数不大于 7 ms。探测器级 NETD 低于 50 mK，机芯级低于 35 mK。",
        "产品页：640×512，像元 12 μm。时间域 NETD 小于 50 mK（25℃，F/1，60 Hz，7.5 到 14 μm）。热时间常数小于 7 ms。可操作性大于 99.5%。帧率 25、30、50、60、120 Hz。",
        "视频输出为数字 14 bit LVCMOS。通信 SPI、QSPI。60 Hz、25℃ 功耗不大于 550 mW。晶圆级封装。尺寸 21×21×9.5 mm³，重量小于 10 g。工作温度 -40℃ 到 +85℃。探测器 MTTF 写 20 年（25℃）。焦平面温度稳定写 TEC-less。",
        "新闻稿写用途包括导弹导引头、制导弹药、巡飞弹、自主效应器和无人机载荷，以及装甲车辆态势感知、驾驶员视觉增强、导弹告警、热武器瞄具和持续监视。",
      ], "lwir"),
      page("Micro Robin", "2026-04-10", "https://www.scd-infrared.com/products/robin/", [
        "与 Robin 同一产品页，新闻稿把视频模组列为这一系列的配置之一，没有单独的发布日期。",
        "产品页：帧率 25、30、50、60 Hz。视频输出为数字 14 bit LVCMOS 和 MIPI，并写经过 NUC 和 BPR。通信另有 UART。60 Hz、25℃ 功耗不大于 1 W。",
        "不含镜头尺寸 21×21×17 mm³。仅机芯重量不大于 17 g。工作温度 -40℃ 到 +71℃。产品页写它输出面向计算机视觉的校正视频。",
      ], "lwir"),
      page("Core Robin", "2026-04-10", "https://www.scd-infrared.com/products/robin/", [
        "与 Robin 同一产品页。新闻稿写完全集成的热像机芯是这一系列的配置之一，没有单独的发布日期。",
        "产品页：帧率 25/30 Hz、50/60 Hz、100/120 Hz。两路同时视频，一路全处理最高 60 Hz，一路 NUC 和 BPR 最高 120 Hz。60 Hz、25℃ 功耗不大于 1.2 W。",
        "不含镜头尺寸 23×23×25 mm³。仅机芯重量不大于 23 g。工作温度 -40℃ 到 +71℃。产品页写支持有快门和无快门。",
      ], "lwir"),
    ],
  },
  {
    id: "blackbird",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Blackbird：SCD 中波探测器",
    summary:
      "产品页上的 Blackbird 都写中波。BLACKBIRD 1920 是 1920×1536、10 μm 的 InSb。1280 一档是 1280×1024、10 μm，材料按页分为 HFM、XBn 和 InSb。BLACKBIRD 640 JT 是 640×512、15 μm，制冷方式写焦耳-汤姆逊。这些产品页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("BLACKBIRD 1920", "", "https://www.scd-infrared.com/products/blackbird-1920/", [
        "产品页写 3 Megapixel 焦平面，格式 1920×1536，像元 10 μm，材料 InSb，读出电路为数字 CMOS。",
        "性能表光谱范围 1 到 5.4 μm。标准滤光片 3.6 到 4.9 μm，可选 3.6 到 4.2 μm，或 3.6 到 4.9 μm 并在 1.06 做陷波。",
        "NETD 小于 28 mK（2 Me⁻ 电容，70% 阱填充）。工作温度 80 K。全格式、4 路视频时最高帧频不小于 120 Hz。",
        "制冷机功耗 18 W，近距电子学功耗 4.5 W。制冷机写整体旋转式或分体。标准制冷机 K543，可选 K548。标准冷屏 f/3，可选 f/2、f/4。长度 150 mm，重量 1.1 Kg。读出功能写 Binning 和 Windowing。近距电子学为 LVDS 数字输出。",
      ], "mwir"),
      page("MINI BLACKBIRD 1280 HFM", "", "https://www.scd-infrared.com/products/blackbird-1280-hfm/", [
        "产品页写 Mini Blackbird SXGA，材料为 Hot Full Midwave（HFM），像元 10 μm，并写近距板带 Video Engine。",
        "1280×1024。光谱范围 3.6 到 4.9 μm。工作温度 120°K。NETD 27 mK（2 Me⁻ 电容，70% 阱填充）。最高帧频 60 Hz。",
        "制冷机为分体线性。制冷机功耗 5 W。光轴长度 92 mm，重量 350 g。读出功能写 Binning 和 windowing。",
        "片上视频处理写 NUC、BPR、AGC、DRC、自动对焦支持、数字变焦、图形叠加、伪彩色查找表，以及空间和时间降噪。这一行又写最高帧频 60 Hz。",
      ], "mwir"),
      page("BLACKBIRD 1280 XBn", "", "https://www.scd-infrared.com/products/hot-blackbird-1280/", [
        "产品页写 BLACKBIRD SXGA，材料为 XBn，像元 10 μm。产品索引卡片也写 MWIR XBn。",
        "1280×1024。光谱范围 3.6 到 4.2 μm。工作温度 150°K。NETD 29 mK（2 Me⁻ 电容，70% 阱填充）。最高帧频 60 Hz。",
        "制冷机写高可靠整体旋转式。制冷机功耗 7 W，近距电子学功耗 3.5 W。光轴长度 145 mm，重量 720 g。",
        "读出功能写 Binning 和 windowing。片上视频处理与 MINI BLACKBIRD 1280 HFM 同页所列项目相同，并写最高帧频 60 Hz。",
      ], "mwir"),
      page("BLACKBIRD 1280 HFM", "", "https://www.scd-infrared.com/products/blackbird-1280-2/", [
        "产品页性能表写材料为 HFM，像元 10 μm。产品索引卡片把这一条写成 MWIR XBn。",
        "1280×1024。光谱范围 3.6 到 4.9 μm。工作温度 120°K。NETD 29 mK（2 Me⁻ 电容，70% 阱填充）。性能表最高帧频 100 Hz。",
        "片上视频处理那一行写最高帧频 60 Hz，和性能表的 100 Hz 不一致，页面没有解释。",
        "制冷机写高可靠整体旋转式。制冷机功耗 8.5 W，近距电子学功耗 3.5 W。光轴长度 140 mm，重量 720 g。读出功能写 Binning 和 windowing。",
      ], "mwir"),
      page("BLACKBIRD 1280 InSb", "", "https://www.scd-infrared.com/products/blackbird-1280/", [
        "产品页写材料为 InSb，像元 10 μm。",
        "1280×1024。光谱范围 3.6 到 5 μm，并写可按要求提供 1 到 5.4 μm。工作温度 80°K。NETD 29 mK（2 Me⁻ 电容，70% 阱填充）。最高帧频 60 Hz。",
        "制冷机选项写分体旋转式、整体旋转式和高可靠整体旋转式。制冷机功耗 10 W，近距电子学功耗 3.5 W。光轴长度 140 mm，重量 720 g。",
        "读出功能写 Binning 和 windowing。片上视频处理一行写最高帧频 60 Hz。",
      ], "mwir"),
      page("MINI BLACKBIRD 1280 XBn", "", "https://www.scd-infrared.com/products/mini-blackbird-1280/", [
        "产品页写低 SWaP-C 的高清中波机芯，材料为 XBn，焦平面工作温度 150 K。正文写重量小于 350 gr，室温总功耗大约 5 W。",
        "性能表：1280×1024，像元 10 μm。光谱范围 3.6 到 4.2 μm，并写可按要求提供 1 到 4.2 μm。工作温度 150°K。重量 350 gr。",
        "制冷机功耗 3 W，近距电子学功耗 3.5 W。性能表没有把这两项加总成正文里的大约 5 W。光轴长度 82 mm。制冷机选项写整体旋转式或分体线性。",
        "NETD 27 mK（2 Me⁻ 电容，70% 阱填充）。性能表全幅原始图像最高帧频 60 Hz。配置栏写原始数字输出全窗口最高 90 Hz，全处理数据 60 Hz。",
        "读出功能写 Binning 和 windowing。接口写沿用原有连接器，带 Camera Link。",
      ], "mwir"),
      page("BLACKBIRD 640 JT", "", "https://www.scd-infrared.com/products/blackbird-640-jt/", [
        "产品页把 JT 探测器写成面向导弹相关应用，焦平面 640×512，用焦耳-汤姆逊制冷。",
        "性能表像元 15 μm。技术栏写 InSb / XBn。光谱带 3.6 到 5 μm / 3.6 到 4.2 μm。工作温度 77 K / 150 K。70% 阱填充时 NETD 30 mK。最高帧频 350 Hz。",
        "23℃ 降温时间小于 20 秒，并写取决于冷却气体。含近距板、不含制冷机的光轴长度 49 mm。含制冷机和近距板的重量 120 gr。",
        "同页配置栏把其他 JT 配置写成 Pelican-D 和 Pelican-D LW。",
      ], "mwir"),
    ],
  },
  {
    id: "crane",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Crane：SCD 中波探测器",
    summary:
      "CRANE HFM 与 CRANE XBn 的产品页都写 2560×2048、5 μm 的中波探测器。HFM 页写工作温度 120°K，XBn 页写 150°K。两页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("CRANE HFM", "", "https://www.scd-infrared.com/products/crane-hfm/", [
        "产品页写 5-megapixel，格式 2560×2048，像元 5 μm，材料为 Hot Full Midwave（HFM）。正文写焦平面在 120 K 工作。",
        "性能表光谱范围 3.6 到 4.9 μm。工作温度 120°K。70% 阱填充时 NETD 40 mK。最高帧频 150 Hz。制冷机写分体旋转式。",
        "制冷机功耗 17 W，近距电子学功耗 5.5 W。光轴长度 103 mm，重量 1300 g。读出功能写 Binning、Windowing 和 multi-mode operation。",
        "配置栏只列技术 HFM。",
      ], "mwir"),
      page("CRANE XBn", "", "https://www.scd-infrared.com/products/crane/", [
        "产品页写 5-megapixel，格式 2560×2048，像元 5 μm，材料为 XBn。正文写焦平面在 150 K 工作。",
        "性能表光谱范围 3.6 到 4.2 μm，并写可按要求提供 1 到 4.2 μm。工作温度 150°K。70% 阱填充时 NETD 45 mK。",
        "制冷机选项写整体旋转式或分体旋转式。光轴长度 88 mm / 96 mm，重量 360 g / 1300 g。制冷机功耗 5 W / 13 W。近距电子学功耗两栏都是 5.5 W。",
        "最高帧频一栏写 60 Hz at 12 bit / 100 Hz at 13 bit, 140 Hz at 12 bit。配置栏把技术写成 HFM、XBn，性能表只列 XBn。",
      ], "mwir"),
    ],
  },
  {
    id: "hercules",
    date: "",
    companyId: "scd",
    category: "product",
    title: "HERCULES 1280：SCD 中波探测器",
    summary:
      "HERCULES 1280 产品页写 1280×1024、15 μm。技术栏同时列出 InSb 和 XBn，对应两组光谱带和工作温度。产品页没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("HERCULES 1280", "", "https://www.scd-infrared.com/products/hercules-1280/", [
        "产品页写 15 μm 的 InSb，以及 0.18 μm 硅 CMOS 读出电路，并写整体旋转式斯特林制冷机。性能表技术栏为 InSb / XBn。",
        "格式 1280×1024，像元 15 μm。光谱带 3.6 到 5 μm / 3.6 到 4.2 μm。工作温度 80 K / 150 K。",
        "制冷机选项写分体旋转式、整体旋转式和高可靠整体旋转式。光轴长度 138 mm / 162 mm / 149 mm。重量 1570 g / 860 g / 750 g。",
        "23℃ 制冷机功耗 20 W / 19 W / 5.5 W。23℃ 近距电子学功耗三栏都是 3.3 W。14 bit、全窗口最高帧频 100 F/s。NETD 18 mK（5.8 Me⁻ 电容，70% 阱填充）。视频输出 Camera Link。读出功能写 Windowing 和 dilution。",
      ], "mwir"),
    ],
  },
  {
    id: "sparrow",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Sparrow：SCD 中波机芯",
    summary:
      "SPARROW-HD 产品页写 1280×1024、5 μm，技术为 XBn 和 HFM。SPARROW HFM 与 SPARROW XBn 的产品页都写 640×512、10 μm 的低 SWaP 中波机芯。三页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("SPARROW-HD", "", "https://www.scd-infrared.com/products/sparrow-hd/", [
        "产品页写低 SWaP 的 5 μm 中波探测器模组。正文写两种材料：XBn 截止波长 4.2 μm、工作温度 150 K；HFM 截止波长 4.85 μm、工作温度 120 K，并写最高支持 200 Hz。",
        "性能表格式 1280×1024，像元 5 μm。冷滤光片 3.6 到 4.15 μm / 3.6 到 4.85 μm。工作温度 150°K / 120°K。正文的 4.2 μm 截止和性能表的 3.6 到 4.15 μm 不是同一个写法。",
        "制冷机为分体线性。冷屏 F/1.8，高度 12 mm。积分模式 ITR、IWR。增益选项 0.9 Me / 0.9 Me / 2.6 Me。最高帧频 Up to 60 Hz / Up to 200 Hz。视频输出 Camera-Link 或 MIPI CSI-2。数字分辨率 12/13 bit。",
        "NETD 为 40 mK（0.9 Me 电容的 70%）/ 25 mK（2.6 Me 电容的 70%）。残余非均匀性小于 0.05% STD/DR（20% 到 80% 阱填充）。23℃ 功耗小于 4 W / 小于 6 W（60 Hz，0.9 Me⁻）。",
        "尺寸小于 70×53×58 mm / 小于 72×53×62 mm，均注明光轴。重量小于 350 Gr / 小于 380 Gr。制冷机 MTTFF 大于 22,000 小时，条件写 For GM (Ground Mobile) @ 35°C。可选片上视频处理写在 60 Hz 工作。",
      ], "mwir"),
      page("SPARROW HFM", "", "https://www.scd-infrared.com/products/sparrow-hfm/", [
        "产品页写低 SWaP 的 10 μm 中波机芯，并写采用 HOT Blackbird 焦平面和分体线性制冷机。",
        "640×512，像元 10 μm。性能表技术为 HFM。光谱带 3.6 到 4.9 μm。工作温度 120°K。光圈 F/3.6。70% 阱填充时 NETD 30 mK（2 Me⁻ 电容）。全幅原始图像最高帧频 180 Hz。",
        "尺寸 58×62×42 mm，重量 300 gm。23℃、proxy 模式下模组总功耗 7.8 W。读出功能写 Binning 和 windowing。",
        "DDC 一栏写 Sparrow / See spot / Extended SWIR。性能表没有给出扩展短波的波长。配置栏把技术写成 XBn，和性能表的 HFM 不一致。",
      ], "mwir"),
      {
        ...page("SPARROW XBn", "", "https://www.scd-infrared.com/products/blackbird-640-sparrow/", [
          "产品页标题为 SPARROW XBn。正文同样写低 SWaP 的 10 μm 中波机芯和 HOT Blackbird 焦平面。原文链接是这一页。",
          "640×512，像元 10 μm。性能表技术为 XBn。光谱带三档为 3.6 到 4.2 μm、3.6 到 4.2 μm 并在 1.064 μm 做窄陷波、1.6 到 2.4 μm。工作温度 150°K。",
          "光圈 F/3.6 / F/3.6 / F/2。23℃、proxy 模式下模组总功耗 4 W / 4.3 W / 5.7 W。70% 阱填充时 NETD 28 mK / 28 mK / NA。全幅原始图像最高帧频 180 Hz。",
          "尺寸 58×62×42 mm，重量 300 gm。DDC 一栏写 Sparrow / See spot / Extended SWIR。配置栏把技术写成 HFM，和性能表的 XBn 不一致。",
        ], "mwir"),
        bands: ["mwir", "swir"],
      },
    ],
  },
  {
    id: "kinglet",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Kinglet 640：SCD 中波探测器",
    summary:
      "Kinglet 640 产品页写 640×512、15 μm 的 XBn（InAsSb），焦平面工作温度 150 K。产品页没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Kinglet 640", "", "https://www.scd-infrared.com/products/kinglet-640-15/", [
        "产品页写 XBn（InAsSb）在 150 K 仍有性能，并写可配旋转式制冷机或线性制冷机。旋转式对应手持，线性对应云台。",
        "640×512，像元 15 μm。光谱带 3.6 到 4.2 μm，并写可选 1 到 4.2 μm。工作温度 150°K。70% 阱填充时 NETD 23 mK。最高帧频 100 Hz。",
        "性能表制冷机选项只写整体旋转式。配置栏标准制冷机为 K562S（旋转式），可选 580（旋转式）和 SX020（线性）。",
        "23℃ 制冷机功耗 2.5 W，近距电子学功耗 0.8 W。长度 80 mm，重量 280 gr。读出功能写 Binning 和 windowing。标准冷屏 f/5.5，可选 f/4。近距电子学写紧凑、低功耗，带 Camera Link。",
      ], "mwir"),
    ],
  },
  {
    id: "swift",
    date: "",
    companyId: "scd",
    category: "product",
    title: "SWIFT：SCD 短波探测器",
    summary:
      "SWIFT-EI 产品页写事件驱动的短波红外传感器，InGaAs，640×512、10 μm。SWIFT 640 产品页写同一格式的 InGaAs 视频模组，光谱范围都写 0.6 到 1.7。两页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("SWIFT-EI", "", "https://www.scd-infrared.com/products/swift-ei/", [
          "产品页写它按像素异步检测场景变化，并写延迟在微秒级。成像模式写全局快门。另有独立的事件检测通道，以及最高 50 kHz 的异步激光脉冲检测。",
          "材料 InGaAs。格式一栏写 640×512、10 μm 对应 SIM，320×256 分箱对应 LNIM、ALPD 和 Event。光谱范围 0.6 到 1.7，并标注 VIS-SWIR。1550 nm 量子效率大于 80%。",
          "典型暗电流约 1 fA（280 K）。全窗口帧频：只开 SIM 时 13 bit 为 800 F/s，11 bit 为 1600 F/s。尺寸 25×22×6.1 mm。焦平面功耗 200 mW 到 500 mW，并写随工作模式变化。视频输出 4 lane JESD204B。",
        ], "swir"),
        technologies: ["spectral", "event", "global"],
      },
      page("SWIFT 640", "", "https://www.scd-infrared.com/products/swift-640/", [
        "产品页写低 SWaP-C 的短波视频模组，10 μm VGA InGaAs，数字读出，陶瓷封装，带 TEC 和近距电子学板。",
        "640×512，像元 10 μm。光谱范围 0.6 到 1.7，并标注 VIS-SWIR。1550 nm 量子效率大于 80%。典型暗电流小于 1 fA（280 K）。",
        "NEP 小于 0.5 fW（高增益，积分时间 27 msec）。工作模式写高增益 10 Ke、带 CDS 时 40 e，中增益 500 Ke、170 e（ALPD），低增益 1 Me、350 e。帧频 25、50 F/s。",
        "功耗小于 1.7 W（50 Hz，环境 25 c，不含 TEC）。尺寸 34×33×34 mm，重量 100 gr。视频输出 Camera Link。",
      ], "swir"),
    ],
  },
  {
    id: "cardinal",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Cardinal：SCD 短波探测器",
    summary:
      "Cardinal 640 与 Cardinal 640 Low Noise 都是 640×512、15 μm 的 InGaAs。Cardinal 1280 是 1280×1024、10 μm 的 InGaAs。三页光谱范围都写 0.6 到 1.7，并写全局快门。产品页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral", "global"],
    models: [
      page("Cardinal 640", "", "https://www.scd-infrared.com/products/cardinal-640/", [
        "产品页写 SWIR VGA、像元 15 μm，带 TEC，并写异步激光脉冲检测和二维激光测距。",
        "640×512。配置为 Standard。1550 nm 量子效率大于 85%。光谱范围 0.6 到 1.7，并标注 VIS-SWIR。典型暗电流小于 4.5 fA（283 K）。",
        "满阱：高增益 12 Ke，中增益 0.6 Me，低增益 3 Me，另有 ALPD。低增益、全窗口最高帧频 350 F/s，13 bit，全局快门。",
        "焦平面功耗小于 100 mW（60 F/sec）。近距板功耗小于 1.7 W（60 Hz，环境 25 c，不含 TEC）。尺寸 30×23×30 mm（加高窗口、不含近距板）或 30×20×30 mm（不含近距板）。视频输出 Camera Link。",
      ], "swir"),
      page("Cardinal 640 Low Noise (LOON)", "", "https://www.scd-infrared.com/products/cardinal-640-low-noise-loon/", [
        "与 Cardinal 640 同一段介绍，性能表配置写 Low noise。",
        "640×512，像元 15 μm，InGaAs。1550 nm 量子效率大于 80%。光谱范围 0.6 到 1.7，并标注 VIS-SWIR。典型暗电流小于 4.5 fA（283 K）。",
        "满阱：高增益 15 Ke，低增益 0.3 Me，另有主动成像。配置栏写极低底噪模式 15 e。低增益、全窗口最高帧频 350 F/s，13 bit，全局快门。",
        "焦平面功耗约 100 mW（60 F/s）。近距板功耗小于 1.7 W（60 Hz，环境 25 c，不含 TEC）。含近距板尺寸 51×45×61 mm。视频输出 Camera Link。配置栏写门控成像，64×64 感兴趣区的时间常数 100 ns。",
      ], "swir"),
      page("Cardinal 1280", "", "https://www.scd-infrared.com/products/cardinal-1280/", [
        "产品页写高清短波 InGaAs，像元 10 μm，带 TEC 和异步激光脉冲检测。封装分金属和陶瓷。",
        "1280×1024。光谱范围 0.6 到 1.7 μm，并标注 VIS-SWIR。1550 nm 量子效率大于 80%。典型暗电流 1 fA（283 K）。",
        "满阱：高增益 10 Ke，中增益 0.5 Me，低增益 1 Me。ALPD 写第二代，最高 1 kHz。全窗口最高帧频两栏为 150 F/s 和 151 F/s，都写 13 bit 全局快门。",
        "焦平面功耗约 150 mW（60 F/s）。近距板功耗 2 W（TEC 关闭）。制冷能力：环境 30 C 时分别可到 -10 C 和 0 C。含近距板尺寸一栏为 43×45×43 mm，另一栏为 37×34×37 mm。",
      ], "swir"),
    ],
  },
  {
    id: "bird",
    date: "",
    companyId: "scd",
    category: "product",
    title: "Bird：SCD 非制冷长波探测器",
    summary:
      "Bird 640 的金属封装和陶瓷封装产品页都写 640×480、17 μm 氧化钒微测辐射热计。Bird XGA 产品页写 1024×768、17 μm。三页都没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("Bird 640, 17μm – Metallic", "", "https://www.scd-infrared.com/products/bird-640-17%ce%bcm-metallic/", [
        "产品页写 17 μm 氧化钒微测辐射热计，面向 VGA 长波。配置为 HS。",
        "640×480，像元 17 μm。时间域 NETD 不大于 32 mK（25 C，F/1，60 Hz）。光谱响应 8 到 14 μm。",
        "帧频 25/30 Hz、50/60 Hz、100/120 Hz。热时间常数 14 mS。工作温度 -40°C 到 71°C。存储温度 -40°C 到 85°C。",
        "视频输出 Analog-1/2 lines。25°C 功耗 350 mW，并写不含 Tec。焦平面稳定方式为 TEC。尺寸 30×41×9 mm，重量 27 gr。MTTF 大于 20 年（25°C 真空寿命，90% confidence）。",
      ], "lwir"),
      page("Bird 640, 17μm – Ceramic", "", "https://www.scd-infrared.com/products/bird-640-17/", [
        "与金属封装页同一段介绍。配置为 LTTC / HS / BB。",
        "640×480，像元 17 μm。时间域 NETD（25 C，F/1，60 Hz）写 <=55 mK / 不大于 35 mK / 不大于 26 mK。光谱响应 8 到 14 μm / 8 到 14 μm / 3 到 14 μm。",
        "热时间常数 7 mS / 14 mS / 14 mS。25°C 功耗 400 mW / 350 mW / 350 mW。焦平面稳定方式写 TEC-less。尺寸 23×26×5 mm，重量 8 gr。",
        "帧频、工作温度、存储温度、视频输出和 MTTF 与金属封装页写在同一组：帧频到 100/120 Hz，工作温度 -40°C 到 71°C，MTTF 大于 20 年（25°C，90% confidence）。",
      ], "lwir"),
      page("Bird XGA", "", "https://www.scd-infrared.com/products/bird-xga-17/", [
        "产品页写 17 μm 氧化钒微测辐射热计，面向 XGA 长波。配置 FAST / HS / BB。",
        "1024×768，像元 17 μm。时间域 NETD（25°C，F#1，60 Hz）一栏写 <100 mK / <36 mK -<50 mK / <32 mK。光谱响应 8 到 12 μm / 8 μm 到 14 μm 或 8 μm 到 12 μm / 3 μm 到 14 μm。",
        "帧频 25/30 Hz、50/60 Hz、100 Hz。工作温度 -40°C 到 71°C。存储温度 -40°C 到 85°C。视频输出 Analog 2/4 lines。",
        "25°C 功耗 750 mW 到 900 mW。焦平面稳定方式为 TEC。尺寸 52 mm×52 mm×11 mm，并写不含引脚和真空管。重量 70 gr。MTTF 大于 20 年（25°C 真空寿命，90% confidence）。可选近距电子学写 4 路视频 ADC、功率级、TEC 驱动和快门控制。",
      ], "lwir"),
    ],
  },
  {
    id: "vox-imager",
    date: "",
    companyId: "scd",
    category: "product",
    title: "VOx Imager：SCD 长波视频引擎",
    summary:
      "VOx Imager 产品页写 17 μm 氧化钒微测辐射热计的 VGA 长波视频引擎。性能表光谱范围为 8 到 14 μm，宽带配置为 3 到 14 μm。产品页没有写发布日期。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("VOx Imager", "", "https://www.scd-infrared.com/products/vox-imager/", [
        "产品页写 17 μm 氧化钒，VGA 长波视频引擎。格式 VGA，640×480，像元 17 μm。",
        "光谱范围 8 到 14 μm，宽带配置为 3 到 14 μm。灵敏度小于 35 mK（30 Hz，f/1，25˚C），并写不做降噪。配置栏宽带一项的灵敏度也小于 35 mK（30 Hz，f/1），双动态范围写 50°C 或 250°C，条件 @ F#1。",
        "性能表帧频 9/25/30/50/60 Hz。出图时间小于 3 秒。延迟写 Sub frame。30 Hz、25˚C 功耗 1.55 W。写 TEC-Less，并写温度标定。",
        "视频输出 14 bit 并行、BT.656、Camera Link，可选模拟视频或 USB3。工作温度 -40°C 到 +71°C。存储温度 -40°C 到 +85°C。冲击 500 G（0.5 msec）。尺寸 31×31×29.7 mm，重量 43 gr。",
        "配置栏宽带帧频写 25/30 Hz，并写另有小于 9 Hz 的版本。性能表已经列出 9 Hz。图像处理写 NUC、BPR、场景 NUC、降噪、动态范围压缩和穹顶效应校正。",
      ], "lwir"),
    ],
  },
  {
    id: "rd2600",
    date: "",
    companyId: "scd",
    category: "product",
    title: "RD2600X4MS：SCD 可见光到近红外线阵",
    summary:
      "RD2600X4MS 产品页写背照式 CMOS 线阵，一块硅片上有 4 条独立线，每条 2600 像素。谱段由客户在可见光到近红外里选择。产品页写按设计抗辐射，并写适用于空间。产品页没有写发布日期，也没有给出各谱段的起止波长。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      page("RD2600X4MS", "", "https://www.scd-infrared.com/products/cmos-rd2600x4ms/", [
        "产品页写背照式、全 CMOS、可见光到近红外的多线双向扫描探测器。4 条独立线，每条 2600 像素，像元 26 μm。窗口可按线加不同谱段的滤光片，一共 4 个谱段。",
        "像元为高增益、低噪声 4T CMOS。TDI 级数 8 到 64，步进 8。标称满阱 300 ke⁻，并写可由通信改变。底噪小于 120 e⁻（全部 64 级 TDI）。动态范围 71 dB。线性度小于 2%，括号里写到满阱 95%。",
        "最高行频 7,500 行/秒，设计目标 10,000 行/秒。配置栏写最高 10,000 行/秒，双向。最高行频功耗小于 1.8 W。片上 12 bit ADC。通信为串口。主时钟为单路 LVDS，最高 58 MHz，另有行同步。读出方向双向。",
        "环境栏写为空间应用做了抗辐射。正文写 CMOS 管芯按设计抗辐射，并写因此适用于空间。密封陶瓷封装，玻璃窗靠近焦平面。产品页没有给出重量和外形尺寸的数字。",
      ], "nir"),
    ],
  },
  {
    id: "ir-s",
    date: "",
    companyId: "inright",
    category: "product",
    title: "IR-S：英睿红外胶体量子点短波图像传感器",
    summary:
      "产品页把 IR-S0615A、IR-S0615B、IR-S0615C 和 IR-S1210A 列在同一张表。光谱范围都是 0.4 到 1.7 μm，材料为硫化铅胶体量子点。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("IR-S0615A", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "640×512，像元 15 μm。光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 100 fps。1550 nm 量子效率大于 55%，可操作像元率不低于 99.5%。",
        "TEC 制冷，功耗 80 mW。满阱 5.3 Me⁻（ITR）或 4.6 Me⁻（IWR）。",
      ], "swir"),
      page("IR-S0615C", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "与 IR-S0615A 同为 640×512、15 μm，光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 340 fps。TEC 制冷，功耗 208 mW。",
      ], "swir"),
      page("IR-S0615B", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "640×512，像元 15 μm，光谱范围 0.4 到 1.7 μm。",
        "卷帘快门，最高 56 fps。满阱 450 ke⁻，功耗 60 mW。",
      ], "swir"),
      page("IR-S1210A", "", "https://www.inrighttech.com/product/cqd-swir-image-sensor/", [
        "1280×1024，像元 10 μm。光谱范围 0.4 到 1.7 μm。",
        "全局快门，最高 100 fps。TEC 制冷，功耗 150 mW。",
        "满阱 4.0 Me⁻（ITR）或 2.7 Me⁻（IWR）。可操作像元率不低于 99.5%。",
      ], "swir"),
    ],
  },
  {
    id: "zxrc-sw",
    date: "2025-01",
    companyId: "zxrc",
    category: "product",
    title: "ZXRC-SW：中芯热成胶体量子点短波探测器",
    summary:
      "手册把 ZXRC-SW640、ZXRC-SW1280 和 ZXRC-SW1024×1 都写成胶体量子点短波探测器。表格中的光谱响应是 800 到 1700 nm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("ZXRC-SW640-F15", "2025-01", "https://www.zxrckj.com/uploads/file/20250105/dfef96edb81478a40fbcca4688f462e5.pdf", [
        "蝶形封装手册。640×512，像元 15 μm，感光面积 9.6×7.68 mm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。全局快门，内置 TEC。",
        "4 路读出，全画幅帧频 120 Hz。动态范围不低于 55 dB。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW640-F15-YF2", "2025-01", "https://www.xinirtech.com/uploads/file/20250105/ae7e2e2a314f6b98b7a9e19f2f394c39.pdf", [
        "陶瓷封装手册。阵列、像元和光谱范围与蝶形封装的 ZXRC-SW640-F15 相同。",
        "外形 26×24.5×9.37 mm。窗口为蓝宝石，800 nm 前截止。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW1280-F15-YF", "2024-11", "https://www.zxrckj.com/uploads/file/20241223/e0caae2aad1de7ba425d7f7b5ab85691.pdf", [
        "陶瓷封装手册。1280×1024，像元 15 μm，感光面积 19.2×15.36 mm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。全局快门，内置 TEC。",
        "读出通道 4 或 8 路。手册表格写全画幅帧频 60 Hz（4 路）或 20 Hz（8 路）。",
      ], "swir", "打开产品手册"),
      page("ZXRC-SW1024x1-F12.5", "2024-12", "https://www.zxrckj.com/uploads/file/20241223/bab28322b53efdff0823014b04b71e85.pdf", [
        "陶瓷封装线阵手册。1024×1，像元 12.5×270 μm。",
        "表格写光谱响应 800 到 1700 nm，峰值量子效率 40%。快照曝光，边积分边读出。",
        "4 路模拟输出，行频最高 40 kHz。内置 TEC。",
      ], "swir", "打开产品手册"),
    ],
  },
  {
    id: "gir",
    date: "2025-06-10",
    companyId: "gpixel",
    category: "product",
    title: "GIR：InGaAs 短波红外线阵",
    summary:
      "2025 年 6 月 10 日发布 GIR1201 与 GIR2505。英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。两款都是 InGaAs 全局快门线阵，64 引脚 DIP，封装 57.4 mm × 18.9 mm。",
    applications: ["spectral", "machine", "scientific"],
    technologies: ["spectral", "global"],
    models: [
      page(
        "GIR1201",
        "2025-06-10",
        "https://www.gpixel.com/en/details_201.html",
        [
          "英文发布稿日期为 2025-06-10。中文页面日期栏为 2025-06-09，正文写 2025 年 6 月 10 日发布。",
          "1024×1 InGaAs 线阵，像素 12.5 μm × 12.5 μm，全局快门。英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。",
          "片上 12 bit ADC。英文发布稿写动态范围 72 dB，低增益满阱 1.6 Me⁻，高增益满阱 120 ke⁻。2 对 Sub-LVDS，最高 1.68 Gbps，最高行频 71.9 kHz，最高行频下功耗小于 450 mW。",
          "中文发布稿把系列的高增益满阱写成 120 ke⁻、动态范围写成 72 dB，并写全速输出功耗为 450 mW。",
          "64 引脚 DIP，封装 57.4 mm × 18.9 mm，与 GIR2505 针脚兼容。中文发布稿写用途包括半导体检测、工业检测、智能分拣、光谱分析和医疗。工程样片和评估系统可订购。",
        ],
        "swir",
        "打开产品发布页",
      ),
      page(
        "GIR2505",
        "2025-06-10",
        "https://www.gpixel.com/en/details_201.html",
        [
          "与 GIR1201 同日发布。512×2 InGaAs 线阵，沿扫描方向 512 像素、2 行，像素 25 μm × 25 μm，全局快门。",
          "英文发布稿写敏感范围 900 nm 到 1700 nm，1550 nm 量子效率 75%。动态范围 70 dB。低增益满阱 1.6 Me⁻，高增益满阱 85 ke⁻。",
          "2 对 Sub-LVDS，最高 1.68 Gbps，最高行频 40.4 kHz，最高行频下功耗小于 450 mW。64 引脚 DIP，封装 57.4 mm × 18.9 mm。",
          "中文发布稿未把高增益满阱和动态范围按型号分开，系列数字写为高增益满阱 120 ke⁻、动态范围 72 dB、全速功耗 450 mW。",
          "中文发布稿写用途包括半导体检测、工业检测、智能分拣、光谱分析和医疗。工程样片和评估系统可订购。",
        ],
        "swir",
        "打开产品发布页",
      ),
    ],
  },
  {
    id: "ohle",
    date: "2026-03-19",
    companyId: "raytron",
    category: "product",
    title: "OHLE：睿创微纳 SWLP 非制冷长波探测器",
    summary:
      "OHLE3123 与 OHLE6081 都是氧化钒微测辐射热计、SWLP 封装的长波探测器。OHLE3123 为 384×288、12 μm。OHLE6081 正文写 640×512、8 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("OHLE3123", "2025-03-12", "https://www.raytrontek.com/product/pro-detail-555.htm", [
        "新闻页日期为 2025-03-12。正文写 2025 年 3 月 11 日慕尼黑上海光博会开幕，OHLE3123 首发亮相。2026-03-19 的新闻写 2025 年发布，没有写日。",
        "氧化钒微测辐射热计，SWLP 长波。正文写面阵 384×288、像元间距 12 μm、NETD＜40 mK、功耗＜65 mW、响应波段 8-14 µm。",
        "规格表：响应波段 8~14 μm，像元间距 12 μm，分辨率 384×288。NETD <40 mK（f/1.0，25 Hz，300 K）。功耗 <60 mW（25 Hz，25℃）。帧频 ≤60 Hz。热时间常数 <15 ms。14 bit。",
        "规格表：片上 9 位非均匀性校正，36-Pin SWLP，尺寸 10.4×10.4×4.3 mm³（不计引脚），重量 <0.6 g，输出极性黑热。测温范围 -40~600℃（f/1.0）。可操作率 ≥99.5%。工作温度 -40°C~+85°C。",
        "正文写匹配 SMT1 贴装。亮点栏写匹配 SMT2。亮点栏写测温范围可达 -40~600°C。",
        "产品页写明用于户外夜视、工业测温、安防监控和民用行业无人机。",
      ], "lwir"),
      page("OHLE6081", "2026-03-19", "https://www.raytrontek.com/product/pro-detail-556.htm", [
        "中文新闻页日期为 2026-03-19。正文写 3 月 18 日 2026 慕尼黑上海光博会开幕，并写今年带来 OHLE6081。英文新闻 datePublished 为 2026-05-13，标题写在 Laser World of Photonics China 2026 上推出。产品页没有写日期。",
        "正文写氧化钒微测辐射热计、SWLP 长波，面阵 640×512，像元间距 8 μm，尺寸 11.2×11.2 mm。",
        "规格表把「响应波段」写成 640×512，「像元间距」写成 8-14 μm，「分辨率」写成 8 μm。规格表 NETD <50 mK（f/1.0，25 Hz，300 K）。帧频 25/30/50/60 Hz。热时间常数 <15 ms。14 bit。逐行读出。片上 6 位非均匀性校正。",
        "规格表：功耗 <120 mW。封装 11.2×11.2×4.2 mm³（不计引脚），32-Pin SWLP，重量 ＜1 g。输出极性白热。测温范围 -40℃~800℃（f/1.0）。可操作率 ≥99.5%。工作温度 -40~+105℃。",
        "英文新闻写 NETD <50 mK、尺寸 11.2×11.2 mm、重量 <1 g、功耗 <120 mW、测温 -40°C 到 800°C，并写相对常规 640×512 陶瓷封装探测器，模组尺寸大约缩小 74%。",
        "产品页写明用于民用行业无人机、工业测温、户外夜视和辅助驾驶。中文新闻还写户外手持和安防监控。英文新闻写商用无人机、工业测温、户外夜视、ADAS 和手持设备。",
      ], "lwir"),
    ],
  },
  {
    id: "rtd",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "RTD：睿创微纳陶瓷封装非制冷长波探测器",
    summary:
      "RTD6122C 的中文产品页写氧化钒微测辐射热计、陶瓷封装、640×512、12 μm，响应波段 8 到 14 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("RTD6122C", "", "https://www.raytrontek.com/product/pro-detail-417.htm", [
        "产品页没有写发布日期。标题写 CP 非制冷红外热成像探测器。正文写氧化钒微测辐射热计、陶瓷封装、640×512、12 μm，响应波段 8-14 µm。",
        "规格表：响应波段 8-14 μm，像元间距 12 μm，分辨率 640×512。NETD <40 mK（f/1.0，50 Hz，300 K）。帧频 ≤60 Hz。热时间常数 <12 ms。14 bit。逐行读出。X、Y 方向镜像。片上 6 位非均匀性校正。",
        "规格表功耗 <170 mW（50 Hz，25℃）。尺寸 22×22×4.58 mm³（不计引脚），重量 ≤6 g，32-pin 陶瓷，输出极性白热。测温范围 -40~600ºC（f/1.0）。可操作率 ≥99.5%。2 bit 并行输入。工作温度 -40~+85℃。",
        "正文写户外夜视、火灾预防。亮点栏写户外夜视、安防监控、工业测温。应用领域写安防监控、工业测温、森林防火、手持户外。",
        "英文产品页把功耗条件写成 50 Hz、300 K，规格表表头写 Module，重量栏写成 Weigh，读出模式写成 Progressive scan。",
      ], "lwir"),
    ],
  },
  {
    id: "rtds",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "RTDS：睿创微纳陶瓷封装非制冷长波探测器",
    summary:
      "RTDS123C 的产品页写氧化钒微测辐射热计、陶瓷封装、1280×1024、12 μm，响应波段 8 到 14 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("RTDS123C", "", "https://www.raytrontek.com/product/pro-detail-418.htm", [
        "产品页没有写发布日期。标题写 CP 非制冷红外热成像探测器。正文写氧化钒微测辐射热计、陶瓷封装、1280×1024、12 μm，响应波段 8-14 µm。",
        "规格表：响应波段 8-14 μm，像元间距 12 μm，分辨率 1280×1024。NETD <40 mK（f/1.0，30 Hz，300 K）。帧频 25/30/50 Hz。热时间常数 <15 ms。数字输出 14 bit（25/30 Hz）、13 bit（50 Hz）。逐行读出。片上 6 位非均匀性校正。",
        "规格表功耗 <300 mW（30 Hz，25ºC）。尺寸 27×27×4.6 mm³（不计引脚），重量 ≤10 g，56-Pin 陶瓷，输出极性白热。测温范围 -40~600ºC（f/1.0）。可操作率 ≥99.5%。6 bit 并行输入。工作温度 -40~+85℃。",
        "亮点栏标题写分辨率 1280×1024，下一条却写 640×512 高分辨率。正文写工业测温、户外夜视。亮点栏写户外夜视、周界安防、工业测温。应用领域写工业测温、安消防、户外手持、森林防火。",
      ], "lwir"),
    ],
  },
  {
    id: "rs615",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "RS615：睿创微纳短波 InGaAs 面阵探测器",
    summary:
      "RS615BM1 与 RS6152M1 的产品页都写 640×512、15 μm、InGaAs，光谱响应 0.9 到 1.7 μm。两页都写全局快门，并写金属气密封装、内置单级 TEC。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("RS615BM1", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rs615bm1-short-wave-infrared-focal-plane-detector", [
          "产品页没有写发布日期。正文写通用短波 InGaAs 焦平面，640×512，像元 15 μm，支持高帧率和 ROI 开窗。金属气密封装，内置 TEC。",
          "光谱响应 0.9 μm 到 1.7 μm。量子效率在 1.0 μm 到 1.6 μm 大于 70%。光学填充因子 100%。有效像元率 ≥99.8%。积分方式为全局快门，最短积分时间 5 μs。",
          "全窗口最高帧率 400 fps（25 MHz）。典型读出噪声 30 e（20°C，高增益）。可选 3 档增益。平均像元暗电流 ≤100 ke/s（20℃）。功耗 ≤240 mW。动态范围 ≥50 dB。未校正响应非均匀性 ≤5%。",
          "输出信号摆幅 1.8±0.1 V。外形 32.0×23.5×7.0 mm³（不含引脚），重量 25±2 g。工作壳温 -40°C 到 +60°C，贮存壳温 -55°C 到 +70°C。",
          "正文写用途包括视觉增强、机器视觉、光伏检测、工业分拣和激光检测。",
        ], "swir"),
        technologies: ["spectral", "global"],
      },
      {
        ...page("RS6152M1", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rs6152m1-short-wave-infrared-ingaas-focal-plane-detector", [
          "产品页没有写发布日期。正文写数字短波 InGaAs 焦平面，640×512，像元 15 μm，支持高帧率和 MROI 多窗口。气密封装，内置 TEC。",
          "光谱响应 0.9 μm 到 1.7 μm。量子效率在 1.0 μm 到 1.6 μm 大于 70%。光学填充因子 100%。有效像元率 ≥99.8%。积分方式为全局快门，最短积分时间 1 μs。",
          "全窗口最高帧率 120 fps。典型读出噪声 35 e（20°C，高增益）。可选 3 档增益。平均像元暗电流 ≤100 ke/s（20℃）。功耗 ≤200 mW。有效输出位深 13 bit。动态范围 ≥50 dB。未校正响应非均匀性 ≤5%。",
          "特性栏外形写成 32.0×23.5×7.0 mm3，规格表写成 32.0×23.5×7.0 mm³，都不计引脚。重量 25±2 g。工作壳温 -40°C 到 +65°C，贮存壳温 -45°C 到 +70°C。",
          "正文写用途包括机器视觉、光谱成像、视觉增强和激光检测。",
        ], "swir"),
        technologies: ["spectral", "global"],
      },
    ],
  },
  {
    id: "rss102",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "RSS102：睿创微纳短波 InGaAs 面阵探测器",
    summary:
      "RSS102M1 的产品页写 1280×1024、10 μm、InGaAs，光谱响应 0.9 到 1.7 μm，全局快门。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("RSS102M1", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rss102m1-short-wave-infrared-ingaas-focal-plane-detector", [
          "产品页没有写发布日期。正文写数字高分辨率短波 InGaAs 焦平面，1280×1024，像元 10 μm，支持高帧率 ROI 开窗。金属气密封装，内置 TEC。",
          "光谱响应 0.9 μm 到 1.7 μm。量子效率在 1.0 μm 到 1.6 μm 大于 70%。光学填充因子 100%。有效像元率 ≥99.8%。积分方式为全局快门，最短积分时间 1 μs。",
          "全窗口最高帧率 60 fps。典型读出噪声 45 e（20°C，高增益）。可选 3 档增益。平均像元暗电流 ≤90 ke/s（20℃）。功耗 ≤350 mW。有效输出位深 13 bit。动态范围 ≥48 dB。未校正响应非均匀性 ≤5%。",
          "封装栏写 Gas-tight metal packaging（built-in single stage TEC）。外形 32.0×23.5×7.0 mm³（不含引脚），重量 28±2 g。工作壳温 -40°C 到 +65°C，贮存壳温 -45°C 到 +70°C。",
          "正文写用途包括视觉增强、机器视觉、光伏检测和空间遥感。",
        ], "swir"),
        technologies: ["spectral", "global"],
      },
    ],
  },
  {
    id: "rl",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "RL：睿创微纳短波 InGaAs 线阵探测器",
    summary:
      "RL01K1 与 RL5122-H1S00 在同一产品页，分别为 1024×1、12.5 μm 和 512×2、25 μm。RL01K1-C0 是 1024×1、12.5 μm 的无 TEC 陶瓷封装。三款都写 InGaAs，光谱响应 0.9 到 1.7 μm。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("RL01K1", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rl01k1-rl5122-h1s00-short-wave-infrared-linear-array-detector", [
        "与 RL5122-H1S00 同一产品页，页顶型号写成 RL01K1/RL5122-H1S00。产品页没有写发布日期。",
        "规格表：InGaAs，光谱响应 0.9 μm 到 1.7 μm。量子效率在 1.0 μm 到 1.6 μm 大于 70%。光学填充因子 100%。像元 12.5 μm，线阵 1024×1。有效像元率 ≥99.8%。",
        "最高输出行频 36 kHz。读出方式 ITR、IWR。最短积分时间 15 μs。典型读出噪声 50 e（1 到 36 kHz，20℃）。可选增益不少于 4 档。平均像元暗电流 ≤100 ke/s（20℃）。",
        "功耗 ≤200 mW。输出信号摆幅 1.9±0.1 V。动态范围 ≥58 dB。未校正响应非均匀性 ≤5%。金属陶瓷一体化气密封装，内置单级 TEC。外形 25.5×17.7×7.0 mm³（不含引脚），重量约 8 g。工作壳温 -40°C 到 +60°C，贮存壳温 -45°C 到 +70°C。",
        "正文写用途包括资源回收、农产品分拣、光伏检测和机器视觉。",
      ], "swir"),
      page("RL5122-H1S00", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rl01k1-rl5122-h1s00-short-wave-infrared-linear-array-detector", [
        "与 RL01K1 同一产品页。规格表把像元写成 25 μm，线阵写成 512×2。平均像元暗电流 ≤300 ke/s（20℃）。",
        "光谱响应、量子效率、行频、读出方式、读出噪声、功耗、动态范围、封装和外形与同页的 RL01K1 写在同一组。重量约 8 g。",
      ], "swir"),
      page("RL01K1-C0", "", "https://www.raytron-microelectronics.com/swir-camera-modules/rl01k1-c0-short-wave-infrared-linear-array-detector", [
        "产品页没有写发布日期。正文写 InGaAs 线阵，1024×1，像元 12.5 μm，光谱响应 0.9 到 1.7 μm，无 TEC 陶瓷封装。",
        "量子效率在 1.0 μm 到 1.6 μm 大于 70%。光学填充因子 100%。有效像元率 >99.8%。最高输出行频 36 kHz。读出方式 ITR、IWR。最短积分时间 15 μs。",
        "典型读出噪声 ≤50 e（1 到 36 kHz，20°C）。可选增益不少于 4 档。平均像元暗电流 ≤100 ke/s（20℃）。功耗 ≤200 mW。输出信号摆幅 1.9±0.1 V。动态范围 ≥58 dB。未校正响应非均匀性 ≤5%。",
        "封装为 PGA 陶瓷、TECless。特性栏和规格表都把外形写成 28.91×18.64×4.0 mm3（不含引脚）。重量 8±2 g。工作壳温 -20°C 到 +50°C，贮存壳温 -40°C 到 +60°C。",
        "正文写用途包括农产品分拣、资源回收、工业分拣、光伏检测和机器视觉。",
      ], "swir"),
    ],
  },
  {
    id: "ogi330",
    date: "",
    companyId: "raytron",
    category: "product",
    title: "OGI330HM：睿创微纳光学气体成像探测器",
    summary:
      "产品页标题把 OGI 写成 OGl。正文写 320×256、30 μm 的 III-V 族中波气体探测器，工作温度最高 150 K。规格表把 F12BL-A、F12BL-B、F12BL-C 和 F12BL-D 列成四个响应波段。",
    applications: ["spectral", "machine"],
    technologies: ["spectral"],
    models: [
      page("F12BL-A", "", "https://www.raytron-microelectronics.com/mwir-cooled-infrared-module/ogi330hm-optical-gas-imaging-ogl-detector", [
        "产品页型号写 OGI330HM，标题写成 Optical Gas Imaging (OGl) Detector。产品页没有写发布日期。规格表响应波段 3.2±0.1 μm 到 3.5±0.1 μm。",
        "与同页另外三款共用：320×256，像元 30 μm，F 数 1.2，NETD ≤10 mK，有效像元率 ≥99.5%，响应不均匀性 ≤10%。",
        "稳定功耗 ≤4 W（25℃±2℃），最大功耗 ≤10 W（25℃±2℃）。供电 12 V DC。降温时间 ≤2 分 30 秒（25℃±2℃）。重量 ≤280 g。外形 70 mm×62.5 mm×37.2 mm。工作壳温 -40℃ 到 +70℃。制冷机 MTTF ≥20000 h（25℃±2℃）。",
        "应用栏把这一列对应甲烷、乙烷和 VOC。正文写工作温度最高 150 K，并写针对挥发性有机物。",
      ], "mwir"),
      page("F12BL-B", "", "https://www.raytron-microelectronics.com/mwir-cooled-infrared-module/ogi330hm-optical-gas-imaging-ogl-detector", [
        "与 F12BL-A 同一产品页。规格表响应波段 3.8±0.1 μm 到 4.1±0.1 μm。应用栏把这一列对应炉膛安全检查。",
        "面阵、像元、NETD、功耗、降温、重量和外形与同页其余型号写在同一行。",
      ], "mwir"),
      page("F12BL-C", "", "https://www.raytron-microelectronics.com/mwir-cooled-infrared-module/ogi330hm-optical-gas-imaging-ogl-detector", [
        "与 F12BL-A 同一产品页。规格表响应波段 4.2±0.1 μm 到 4.4±0.1 μm。应用栏把这一列对应二氧化碳。",
        "面阵、像元、NETD、功耗、降温、重量和外形与同页其余型号写在同一行。",
      ], "mwir"),
      page("F12BL-D", "", "https://www.raytron-microelectronics.com/mwir-cooled-infrared-module/ogi330hm-optical-gas-imaging-ogl-detector", [
        "与 F12BL-A 同一产品页。规格表响应波段 4.5±0.1 μm 到 4.7±0.1 μm。应用栏把这一列对应一氧化碳、氧化亚氮和乙烯酮。",
        "面阵、像元、NETD、功耗、降温、重量和外形与同页其余型号写在同一行。",
      ], "mwir"),
    ],
  },
  {
    id: "s3921",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S3921 与 S3924：滨松电压输出 NMOS 线阵",
    summary:
      "S3921-128Q、S3921-256Q、S3921-512Q、S3924-256Q、S3924-512Q 与 S3924-1024Q 的产品页写 NMOS 线阵，类型为 Voltage output type，光谱响应 200 到 1000 nm。标题下写 Voltage output type with current-integration readout circuit and impedance conversion circuit。产品页都没有写发布日期。手册标题写成 S3921/S3924 series，KMPD1044E04 页脚写 Mar. 2017，并写资料截至 March 2017，记为约 2017 年 3 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S3921-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3921-128Q.html", [
          "产品页没有写发布日期。标题写 NMOS linear image sensor。标题下写 Voltage output type with current-integration readout circuit and impedance conversion circuit。正文用单数 photodiode，写高度 2.5 mm，并写 is arrayed in a row at a spacing of 50 μm。窗口写成 Quartz glass。型号句写 current-integration readout circuit utilizing the video line，输出写 boxcar waveform。",
          "特性写内置电流积分读出和阻抗变换，括注 boxcar waveform output，并写感光区宽、紫外灵敏度高且稳定、暗电流低、饱和电荷高、室温下可长时间积分、动态范围宽、线性度和空间均匀性好。另写 Low voltage, single power supply operation。起始脉冲、时钟和视频线复位脉冲与 CMOS 逻辑兼容。",
          "规格表类型为 Voltage output type。图像尺寸 6.4 x 2.5 mm，有效像素 128 x 1 pixels，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。规格表没有 Dedicated driver circuit 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写成 Saturation charge: Reset V=2.5 V, Vdd=5.0 V, Vφ=5.0 V。",
          "手册标题写成 S3921/S3924 series，KMPD1044E04 页脚写 Mar. 2017，并写资料截至 March 2017，记为约 2017 年 3 月。手册把 photodiode 写成复数 are arrayed。S3921 系列高度 2.5 mm、间距 50 μm。S3924 系列高度 2.5 mm，并写 but are arrayed，间距 25 μm。正文写每种系列有 3 种像素数，different 在行末拆成 differ- 和 ent，随后却列出 128（S3921-128Q）、256（S3921-256Q、S3924-256Q）、512（S3921-512Q、S3924-512Q）和 1024（S3924-1024Q）。spectroscopy 在行末拆成 spectrosco- 和 py。手册特性另有 Pixel pitch 和 Pixel height 两行。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表这一列像素数 128。封装长度与 S3921-256Q 写在合并格 31.75 mm，表头写成 Number of pin，数值与整个 S3921 系列合并为 22。窗口 Quartz。注记 *3 写可提供光纤面板，但不包括 S3921-128Q 和 S3924-256Q。手册没有把这些光纤面板写成单独型号。重量与 S3921-256Q 合并写成 3.0 g。外形图标题写成 S3921-128Q, S3924-256Q，感光区 6.4 × 2.5，封装长度印 31.75 ± 0.3 mm。感光区结构图把 S3921 系列写成 a=50 μm，b=45 μm，图内材料写成 Oxidation silicon。",
          "手册光谱响应范围注记写 10% of peak。峰值波长典型 600 nm。S3921 系列暗电流典型 0.2 pA、最大 0.6 pA。光电二极管电容典型 20 pF。饱和曝光典型 220 mlx · s，单位中间有空格，光源注记写 2856 K, tungsten lamp。饱和电荷典型 50 pC。饱和输出电压 -128Q 一格典型 1350 mV。光响应非均匀性上限 ±3%，注记写饱和的 50%，并除去起始像素和最后一个像素。绝对最大功耗 10 mW，条件 Vdd=5 V，Vr=2.5 V。输入脉冲一行写成 ɸ1、ɸ2、ɸst，没有把 Reset ɸ 写进这一行的名称。工作温度 -40 到 +65 ℃，注记 *2 写 No condensation。贮存温度 -40 到 +85 ℃。数据率最小 0.1 kHz、最大 500 kHz。手册写视频数据率等于时钟频率，因为视频在 ɸ2 上升沿同步读出。-128 Q 一格的视频延迟典型 100 ns，注记写饱和的 50%。时钟线电容典型 21 pF，复位脉冲线电容典型 6 pF，饱和控制栅电容典型 12 pF。输出阻抗典型 200 Ω，条件 Vdd=5 V，Vr=2.5 V。引脚说明写 ɸ1、ɸ2 和 Reset ɸ 幅度为 5 V 时，Reset V 推荐 2.5 V。End of scan 写用 10 kΩ 上拉到 5 V。全复位脉冲宽度写长于 5 μs。结构说明写 a NMOS linear image sensor。虚拟视频一行写 DC offset remove。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3921-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3921-256Q.html", [
          "产品页没有写发布日期。正文与 S3921-128Q 同一套句子，高度 2.5 mm，间距 50 μm，photodiode 仍是单数，并写 is arrayed in a row。特性与同页相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1 pixels，像元 50 x 2500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3921-128Q 相同。",
          "手册结构表像素数 256。封装长度与 S3921-128Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图标题写成 S3921-256Q, S3924-512Q，感光区 12.8 × 2.5，封装长度仍印 31.75 ± 0.3 mm。",
          "手册暗电流、饱和电荷、饱和曝光和峰值波长与 S3921 系列同一列。饱和输出电压 -256Q 一格典型 1300 mV。-256 Q 一格的视频延迟典型 150 ns，时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3921-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3921-512Q.html", [
          "产品页没有写发布日期。正文仍写间距 50 μm、高度 2.5 mm，并仍把 photodiode 写成单数，句子里有 in a row。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1 pixels，像元 50 x 2500 μm。最高行频 975 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3921-128Q 相同。",
          "手册结构表像素数 512。封装长度单独写成 40.6 mm，重量单独写成 3.5 g。外形图标题写成 S3921-512Q, S3924-1024Q，感光区 25.6 × 2.5，封装长度 40.6 ± 0.3 mm。",
          "手册饱和输出电压 -512Q 一格典型 1100 mV。-512 Q 一格的视频延迟典型 200 ns，时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3924-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3924-256Q.html", [
          "产品页没有写发布日期。正文把间距写成 25 μm，高度仍是 2.5 mm，photodiode 仍是单数，句子写成 is arrayed in a row at a spacing。特性与 S3921-128Q 相同。",
          "规格表图像尺寸 6.4 x 2.5 mm，有效像素 256 x 1 pixels，像元 25 x 2500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3921-128Q 相同。",
          "手册写 S3924 系列高度 2.5 mm，并写 but are arrayed，间距 25 μm。结构表像素数 256。封装长度与 S3924-512Q 写在合并格 31.75 mm，重量合并写成 3.0 g。外形图与 S3921-128Q 共用，感光区 6.4 × 2.5。注记 *3 把这一型号排除在光纤面板之外。感光区结构图把 S3924 系列写成 a=25 μm，b=20 μm。",
          "手册 S3924 系列暗电流典型 0.1 pA、最大 0.3 pA。光电二极管电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 220 mlx · s。饱和输出电压 -256Q 一格典型 1050 mV。-256 Q 一格的视频延迟典型 100 ns，时钟线电容典型 27 pF，饱和控制栅电容典型 14 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3924-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3924-512Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm，并写 is arrayed in a row at a spacing。特性与同系列相同。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1 pixels，像元 25 x 2500 μm。最高行频 975 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 512。封装长度与 S3924-256Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图与 S3921-256Q 共用，感光区 12.8 × 2.5。",
          "手册暗电流和饱和电荷与 S3924 系列同一列。饱和输出电压 -512Q 一格典型 820 mV。-512 Q 一格的视频延迟典型 150 ns，时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3924-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3924-1024Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 2.5 mm，并写 is arrayed in a row。手册像素数清单里，1024 只写在 S3924-1024Q。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1 pixels，像元 25 x 2500 μm。最高行频 488 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3921-128Q 相同。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 3.5 g。外形图与 S3921-512Q 共用，感光区 25.6 × 2.5。光谱图标题写成 Spectral response (typical example)。",
          "手册饱和输出电压 -1024Q 一格典型 570 mV。-1024 Q 一格的视频延迟典型 200 ns，时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF。光响应非均匀性上限 ±3%，与 S3921 系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s3922",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S3922 与 S3923：滨松电压输出 NMOS 线阵",
    summary:
      "S3922-128Q、S3922-256Q、S3922-512Q、S3923-256Q、S3923-512Q 与 S3923-1024Q 的产品页写 NMOS 线阵，类型为 Voltage output type，光谱响应 200 到 1000 nm。标题下写 Voltage output type with current-integration readout circuit and impedance conversion circuit。产品页都没有写发布日期。手册标题写成 S3922/S3923 series，KMPD1037E04 页脚写 Mar. 2017，并写资料截至 March 2017，记为约 2017 年 3 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S3922-128Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3922-128Q.html", [
          "产品页没有写发布日期。标题写 NMOS linear image sensor。标题下写 Voltage output type with current-integration readout circuit and impedance conversion circuit。正文用单数 photodiode，写高度 0.5 mm，并写 is arrayed in a row at a spacing of 50 μm。窗口写成 Quartz glass。",
          "特性与 S3921-128Q 同一套句子，包括 boxcar waveform output 和 Low voltage, single power supply operation。",
          "规格表类型为 Voltage output type。图像尺寸 6.4 x 0.5 mm，有效像素 128 x 1 pixels，像元 50 x 500 μm。光谱响应 200 到 1000 nm。最高行频 3900 行/秒。无制冷，窗口 Quartz，封装 Ceramic。规格表没有 Dedicated driver circuit 这一行。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写成 Saturation charge: Reset V=2.5 V, Vdd=5.0 V, Vφ=5.0 V。",
          "手册标题写成 S3922/S3923 series，KMPD1037E04 页脚写 Mar. 2017，并写资料截至 March 2017，记为约 2017 年 3 月。手册把 photodiode 写成复数 are arrayed。S3922 系列高度 0.5 mm、间距 50 μm。S3923 系列高度 0.5 mm，并写 but are arrayed，间距 25 μm。正文写每种系列有 3 种像素数，different 在行末拆成 differ- 和 ent，随后却列出 128（S3922-128Q）、256（S3922-256Q、S3923-256Q）、512（S3922-512Q、S3923-512Q）和 1024（S3923-1024Q）。spectroscopy 在行末拆成 spectrosco- 和 py。这张手册的窗口一行没有星号，也没有光纤面板注记。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册结构表这一列像素数 128。封装长度与 S3922-256Q 写在合并格 31.75 mm，表头写成 Number of pin，数值与整个 S3922 系列合并为 22。窗口 Quartz。重量与 S3922-256Q 合并写成 3.0 g。外形图标题写成 S3922-128Q, S3923-256Q，感光区 6.4 × 0.5，封装长度印 31.75，没有印 ± 0.3。光学距离注记写 Optical distance from the outer surface of the quartz window to the chip surface，尺寸写成 1.3 ± 0.2。感光区结构图把 S3922 系列写成 a=50 μm，b=45 μm，图内材料写成 Oxidation silicon。",
          "手册光谱响应范围注记写 10% of peak。峰值波长典型 600 nm。S3922 系列暗电流典型 0.08 pA、最大 0.15 pA。光电二极管电容典型 3.6 pF。饱和曝光典型 220 mlx ∙ s，单位中间有空格。饱和电荷典型 10 pC。饱和输出电压 -128Q 一格典型 900 mV。光响应非均匀性上限 ±3%。绝对最大功耗 10 mW，条件 Vdd=5 V，Vr=2.5 V。输入脉冲一行写成 ɸ1、ɸ2、ɸst、Reset ɸ。工作温度注记写 No condensation。数据率最小 0.1 kHz、最大 500 kHz。起始脉冲高电平符号写成 Vɸ1。-128 Q 一格的视频延迟典型 100 ns。时钟线电容典型 21 pF，复位脉冲线电容典型 6 pF，饱和控制栅电容典型 12 pF。输出阻抗典型 200 Ω。引脚说明写 ɸ1、ɸ2 和 Reset ɸ 幅度为 5 V 时，Reset V 推荐 2.5 V。End of scan 写用 10 kΩ 上拉到 5 V。全复位脉冲宽度写长于 5 μs。结构说明写 a NMOS linear image sensor。虚拟视频一行写 DC offset remove。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3922-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3922-256Q.html", [
          "产品页没有写发布日期。正文与 S3922-128Q 同一套句子，高度 0.5 mm，间距 50 μm，photodiode 仍是单数，并写 is arrayed in a row。特性与同页相同。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 256 x 1 pixels，像元 50 x 500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3922-128Q 相同。",
          "手册结构表像素数 256。封装长度与 S3922-128Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图标题写成 S3922-256Q, S3923-512Q，感光区 12.8 × 0.5，封装长度仍印 31.75。",
          "手册暗电流、饱和电荷和饱和曝光与 S3922 系列同一列。饱和输出电压 -256Q 一格典型 670 mV。-256 Q 一格的视频延迟典型 150 ns，时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3922-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3922-512Q.html", [
          "产品页没有写发布日期。正文仍写间距 50 μm、高度 0.5 mm，并仍把 photodiode 写成单数，句子里有 in a row。特性与同系列相同。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 512 x 1 pixels，像元 50 x 500 μm。最高行频 975 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 512。封装长度单独写成 40.6 mm，重量单独写成 3.5 g。外形图标题写成 S3922-512Q, S3923-1024Q，感光区 25.6 × 0.5，封装长度印 40.6。",
          "手册饱和输出电压 -512Q 一格典型 460 mV。-512 Q 一格的视频延迟典型 200 ns，时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3923-256Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3923-256Q.html", [
          "产品页没有写发布日期。正文把间距写成 25 μm，高度仍是 0.5 mm，photodiode 仍是单数，句子写成 is arrayed in a row at a spacing。特性与 S3922-128Q 相同。",
          "规格表图像尺寸 6.4 x 0.5 mm，有效像素 256 x 1 pixels，像元 25 x 500 μm。最高行频 1950 行/秒。无制冷，窗口 Quartz，封装 Ceramic。测量条件与 S3922-128Q 相同。",
          "手册写 S3923 系列高度 0.5 mm，并写 but are arrayed，间距 25 μm。结构表像素数 256。封装长度与 S3923-512Q 写在合并格 31.75 mm，重量合并写成 3.0 g。外形图与 S3922-128Q 共用，感光区 6.4 × 0.5。感光区结构图把 S3923 系列写成 a=25 μm，b=20 μm。",
          "手册 S3923 系列暗电流典型 0.04 pA、最大 0.08 pA。光电二极管电容典型 1.8 pF。饱和电荷典型 5 pC。饱和曝光仍是 220 mlx ∙ s。饱和输出电压 -256Q 一格典型 420 mV。-256 Q 一格的视频延迟典型 100 ns，时钟线电容典型 27 pF，饱和控制栅电容典型 12 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3923-512Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3923-512Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 0.5 mm，并写 is arrayed in a row at a spacing。特性与同系列相同。",
          "规格表图像尺寸 12.8 x 0.5 mm，有效像素 512 x 1 pixels，像元 25 x 500 μm。最高行频 975 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 512。封装长度与 S3923-256Q 同在 31.75 mm 的合并格，重量同在 3.0 g 的合并格。外形图与 S3922-256Q 共用，感光区 12.8 × 0.5。",
          "手册暗电流和饱和电荷与 S3923 系列同一列。饱和输出电压 -512Q 一格典型 280 mV。-512 Q 一格的视频延迟典型 150 ns，时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S3923-1024Q", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S3923-1024Q.html", [
          "产品页没有写发布日期。正文写间距 25 μm、高度 0.5 mm，并写 is arrayed in row。手册像素数清单里，1024 只写在 S3923-1024Q。",
          "规格表图像尺寸 25.6 x 0.5 mm，有效像素 1024 x 1 pixels，像元 25 x 500 μm。最高行频 488 行/秒。无制冷，窗口 Quartz，封装 Ceramic。",
          "手册结构表像素数 1024。封装长度 40.6 mm，重量 3.5 g。外形图与 S3922-512Q 共用，感光区 25.6 × 0.5。",
          "手册饱和输出电压 -1024Q 一格典型 160 mV。-1024 Q 一格的视频延迟典型 200 ns，时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF。光响应非均匀性上限 ±3%，与 S3922 系列同一行。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s5930",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S5930 与 S5931：滨松电流输出 NMOS 线阵",
    summary:
      "S5930-256S、S5930-512S、S5931-512S 与 S5931-1024S 的产品页写 NMOS 线阵，类型为 Current output type (Standard type)，光谱响应 200 到 1000 nm。页内二级标题写 Built-in thermoelectric cooler ensures long exposure time and stable operation。规格表冷却一行却写 Non-cooled。产品页都没有写发布日期。手册标题写成 S5930/S5931 series，KMPD1018E07 页脚写 Nov. 2022，并写资料截至 November 2022，记为约 2022 年 11 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S5930-256S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S5930-256S.html", [
          "产品页没有写发布日期。页面标题写 NMOS linear image sensor。页内一级标题只写 S5930-256S。二级标题写 Built-in thermoelectric cooler ensures long exposure time and stable operation。正文用单数 The photodiode，写大感光面积、紫外灵敏度高但噪声很低。扫描电路写成 N-channel MOS transistors，低功耗、易于使用。内置风冷热电制冷器，可做长时间曝光并在低光下得到高信噪比。管帽使用气密封接的蓝宝石玻璃窗。",
          "特性写感光区宽、紫外灵敏度高且稳定、暗电流低且饱和电荷高、室温下可长时间积分并得到宽动态范围、输出线性和空间均匀性好。起始脉冲和时钟与 CMOS 逻辑兼容。另写 Built-in air-cooled thermoelectric cooler (setting temperature: 0 ℃)。",
          "规格表类型为 Current output type (Standard type)，写在同一格。图像尺寸 12.8 x 2.5 mm，有效像素 256 x 1 pixels，像元 50 x 2500 μm。光谱响应 200 到 1000 nm。最高行频 7800 行/秒。冷却一行写 Non-cooled。窗口 Sapphire，封装 Metal。Dedicated driver circuit 这一格是空的。测量条件写 Typ. Ta=25 ℃，unless otherwise noted。饱和电荷条件写成 Saturation charge: Vb=2.0 V, Vφ=5.0 V。手册文件名写成 s5930-256s_etc_kmpd1018e.pdf，产品页标 942 KB。",
          "手册标题写成 S5930/S5931 series，KMPD1018E07 页脚写 Nov. 2022，并写资料截至 November 2022，记为约 2022 年 11 月。手册把 photodiode 写成 Each photodiode。spectroscopy 在行末拆成 spectrosco- 和 py。integration 在特性里拆成 inte- 和 gration。S5930 系列间距 50 μm，S5931 系列间距 25 μm，高度都写 2.5 mm。选型表把 S5930-512S 的像元尺寸与 256 像素合并，把 S5931-1024S 的像元尺寸与 512 像素合并。应用栏写 Multichannel spectrophotometry 和 Image readout system。",
          "手册另写还提供近红外灵敏度更高的 S8382/S8383 series，并写主要特性几乎与本系列相同，只是峰值波长 750 nm，饱和电荷写成 90 mlx.s。光谱响应图把这一对照标成 IR high-sensitivity type。选型表没有列出 S8382 或 S8383 的具体型号。等效电路图标题写成 Equivalent circuit (S3901/S3902/S3903/S3904 series)。感光区结构图把材料写成 Oxidation silicon，S5930 系列 a=50 μm，b=45 μm。",
          "手册绝对最大额定值：输入脉冲电压 15 V。环境温度 -40 到 +65 ℃，芯片温度 -40 到 +50 ℃，贮存温度 -40 到 +85 ℃。注记 *1 写 No dew condensation。注记 *2 写用热敏电阻电阻值监视芯片温度。光谱响应范围注记写 10% of peak。峰值波长典型 600 nm。S5930 系列 25 ℃ 暗电流典型 0.2 pA、最大 0.6 pA，0 ℃ 典型 0.006 pA、最大 0.018 pA。光电二极管电容典型 20 pF。饱和曝光典型 180 mlx · s。饱和电荷典型 50 pC。光响应非均匀性上限 ±3%，注记编号印成 * 5，写饱和的 50%，并除去起始像素和最后一个像素。",
          "手册数据率最小 0.1 kHz、最大 2000 kHz。-256S 视频延迟典型 120 ns，时钟线电容典型 36 pF，饱和控制栅电容典型 20 pF，视频线电容典型 11 pF。视频延迟注记写用 C7883 测量。视频偏置裕量图标题写成 Video bias voltage margin (S3901/S3902/S3903/S3904/S8380/S8381 series)。手册写这一系列工作不需要直流电源，但 Vss、Vsub 和全部 NC 必须接地。End of scan 写用 10 kΩ 上拉到 5 V。引脚说明写第 20 脚与封装金属之间有电流流通。外形图与 S5931-512S 共用，封装长度印 32.0 ± 0.3 mm，感光区宽度标 12.8，总长标 50.0。蓝宝石玻璃厚度标 *1，数值 0.8。玻璃表面到芯片的距离标 *2，数值 4.05 ± 0.4。焊接写 260 ℃ 以下、5 秒以内。热敏电阻与 a NMOS chip 装在同一封装，句子写成 monitored with it, A relation。公式写成 RT1 = RT2 × exp BT1/ T2 (1/T1 – 1/T2)，斜线后有空格。热敏电阻写成 R298=10 kΩ，B298/323=3450 K。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S5930-512S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S5930-512S.html", [
          "产品页没有写发布日期。正文、二级标题和特性与 S5930-256S 相同，photodiode 仍是单数。规格表类型仍把 Current output type (Standard type) 写在同一格。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 512 x 1 pixels，像元 50 x 2500 μm。最高行频 3900 行/秒。冷却一行仍写 Non-cooled。窗口 Sapphire，封装 Metal。Dedicated driver circuit 这一格是空的。测量条件与 S5930-256S 相同。手册仍是 KMPD1018E07。",
          "手册选型表像素数 512，感光区 25.6 × 2.5，像元尺寸与 S5930-256S 写在合并格 50 × 2500。暗电流、饱和电荷、饱和曝光和峰值波长与 S5930 系列同一列。",
          "手册 -512S 一格的视频延迟典型 160 ns，时钟线电容典型 67 pF，饱和控制栅电容典型 35 pF，视频线电容典型 20 pF。外形图与 S5931-1024S 共用，封装长度印 40.64 ± 0.3 mm，感光区宽度标 25.6，总长标 58.84。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S5931-512S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S5931-512S.html", [
          "产品页没有写发布日期。正文、二级标题和特性与 S5930-256S 相同。规格表把类型拆成两行，先写 Current output type，下一行写 (Standard type)。",
          "规格表图像尺寸 12.8 x 2.5 mm，有效像素 512 x 1 pixels，像元 25 x 2500 μm。最高行频 3900 行/秒。冷却一行写 Non-cooled。窗口 Sapphire，封装 Metal。Dedicated driver circuit 这一格是空的。测量条件与 S5930-256S 相同。",
          "手册写 S5931 系列间距 25 μm、高度 2.5 mm。结构图写成 a=25 μm，b=20 μm。选型表像素数 512，感光区 12.8 × 2.5。S5931 系列 25 ℃ 暗电流典型 0.1 pA、最大 0.3 pA，0 ℃ 典型 0.003 pA、最大 0.009 pA。光电二极管电容典型 10 pF。饱和电荷典型 25 pC。饱和曝光仍是 180 mlx · s。峰值波长典型 600 nm。",
          "手册 -512S 一格的视频延迟典型 150 ns，时钟线电容典型 50 pF，饱和控制栅电容典型 24 pF，视频线电容典型 16 pF。外形图与 S5930-256S 共用，封装长度 32.0 ± 0.3 mm，感光区宽度 12.8。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S5931-1024S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S5931-1024S.html", [
          "产品页没有写发布日期。规格表同样把 Current output type 和 (Standard type) 分成两行。正文仍用单数 photodiode，并仍写内置风冷热电制冷器。",
          "规格表图像尺寸 25.6 x 2.5 mm，有效像素 1024 x 1 pixels，像元 25 x 2500 μm。最高行频 1950 行/秒。冷却一行写 Non-cooled。窗口 Sapphire，封装 Metal。Dedicated driver circuit 这一格是空的。",
          "手册选型表像素数 1024，感光区 25.6 × 2.5，像元尺寸与 S5931-512S 写在合并格 25 × 2500。暗电流和饱和电荷与 S5931 系列同一列。光响应非均匀性上限 ±3%，与 S5930 系列同一行。",
          "手册 -1024S 一格的视频延迟典型 200 ns，时钟线电容典型 100 pF，饱和控制栅电容典型 45 pF，视频线电容典型 30 pF。外形图与 S5930-512S 共用，封装长度 40.64 ± 0.3 mm，感光区宽度 25.6，总长 58.84。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
{
    id: "s7030",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S7030 与 S7031：滨松背照式 FFT-CCD",
    summary:
      "S7030-0906、S7030-0907、S7030-1006、S7030-1007、S7031-0906S、S7031-0907S、S7031-1006S 与 S7031-1007S 的产品页写背照式 FFT-CCD，光谱响应 200 到 1100 nm。分光索引里 S7030 的简介写成 High sensitivity. wide spectral response range back-thinned FFT-CCD。S7031 的简介在逗号后写 one-stage TE-cooled type。S7030 无制冷，窗口 Quartz，驱动电路 C7040。S7031 为一阶热电制冷，窗口 AR-coated sapphire，驱动电路 C7041。产品页都没有写发布日期。手册标题写成 S7030/S7031 series，KMPD1023E22 页脚写 Jul. 2026，并写资料截至 July 2026，记为约 2026 年 7 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S7030-0906", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7030-0906.html", [
          "产品页没有写发布日期。页面标题写 CCD area image sensor。页内一级标题只写 S7030-0906。二级标题写 Back-thinned FFT-CCD。正文把这一只型号写成 a family of FFT-CCD image sensors，并写低光科学检测。binning 之后可当作沿器件长度方向有长孔径的线阵，句子写成 suites for use in spectrophotometry。binning 相对外部电路数字相加写成 by and external cicuit。另写 low noise and low dark signal (MPP mode operation)，可做低光检测和长积分，从而得到宽动态范围。",
          "特性写 Non-cooled type、像元 24 × 24 μm、Line, pixel binning、峰值波长量子效率大于 90%、光谱响应范围宽、读出噪声低、动态范围宽、MPP operation，以及 High UV sensitivity with good stability。",
          "规格表类型分成两行，Binning type 和 Standard type。图像尺寸 12.288 x 1.392 mm，有效像素 512 x 58 pixels，像元 24 x 24 μm。光谱响应 200 到 1100 nm。行频典型 418 行/秒，最高 1375 行/秒。暗电流典型 100 e-/pixel/s。读出噪声典型 8 e- rms。冷却 Non-cooled。窗口 Quartz，封装 Ceramic。Dedicated driver circuit 写 C7040。测量条件写成 Typ. Ta=25 ℃，unless otherwise noted，frame rate: full line binning,Dark current: MPP mode，逗号后没有空格。手册链接文件名 s7030-0906_etc_kmpd1023e.pdf，产品页标 760 KB。",
          "手册标题写成 S7030/S7031 series，目录号 KMPD1023E22，页脚写 Jul. 2026 DN，并写资料截至 July 2026，记为约 2026 年 7 月。手册把 suited 和 by an external circuit 写全，并写 have low noise, low dark current and wide dynamic range, and long integration time enables to detect low-level light。有效像元 24 × 24 μm。面积从 12.288 (H) × 1.392 (V) mm²（512 × 58 像素）写到 24.576 (H) × 2.928 (V) mm²（1024 × 250 像素）。选型表里垂直方向最多是 122 像素，没有 1024 × 250 的型号。",
          "手册特性把无制冷写成 S7030 series，一阶热电制冷写成 S7031 series。应用栏写 Fluorescence spectrometer, ICP、Industrial inspection、Semiconductor inspection、DNA sequencer 和 Low-light-level detection。选型表总像素与有效像素：S7030-0906 为 532 × 64 和 512 × 58，S7030-0907 为 532 × 128 和 512 × 122，S7030-1006 为 1044 × 64 和 1024 × 58，S7030-1007 为 1044 × 128 和 1024 × 122。多通道探测头 S7030 系列写 C7040，S7031 系列写 C7041。注记写两级热电制冷的 S7032-1006/-1007 可按要求订制。这个订制型号没有加入。",
          "结构表像元 24 × 24 µm，垂直和水平时钟都写 2 phases，输出电路写 One-stage MOSFET source follower，封装写 24-pin ceramic DIP。窗口注记 *1 写可按要求提供临时窗口，例子是 S7030-0906N。这个型号没有加入。*2 把石英窗的密封写成 Resing sealing。*3 写 AR-coated sapphire 为 Hermetic sealing。绝对最大额定值工作温度 -50 到 +50 ℃，贮存温度 -50 到 +70 ℃。注记 *4 写 S7030 系列按封装温度，S7031 系列按芯片温度。注记写即使瞬间超过绝对最大额定值也可能使产品质量下降。",
          "手册电气特性没有行频一行。信号输出频率典型 0.25 MHz、最大 1 MHz。垂直寄存器电容 S703*-0906 典型 750 pF，S703*-0907/-1006 典型 1500 pF，S703*-1007 典型 3000 pF。水平寄存器电容 S703*-0906/-0907 典型 110 pF，S703*-1006/-1007 典型 180 pF。求和栅和复位栅电容都是典型 30 pF。转移栅电容前两档典型 55 pF，后两档典型 75 pF。电荷转移效率最小 0.99995、典型 0.99999。直流输出电平典型 16 V。输出阻抗典型 3 kΩ、最大 4 kΩ。功耗典型 13 mW、最大 14 mW。注记 *7 写这是片上放大器加上负载电阻的功耗。",
          "满阱垂直方向最小 240 ke-、典型 320 ke-，水平方向最小 800 ke-、典型 1000 ke-，线性写成 ±1.5%。转换效率最小 1.8 µV/e-、典型 2.2 µV/e-。MPP 暗电流 25 ℃ 典型 100 e-/pixel/s、最大 1000 e-/pixel/s，0 ℃ 典型 10 e-/pixel/s、最大 100 e-/pixel/s。注记写温度每升高 5 到 7 ℃，暗电流大约加倍。读出噪声典型 8 e- rms、最大 16 e- rms。注记 *10 写用 HAMAMATSU C4880 数字 CCD 相机和 CDS 电路测量，传感器温度 -40 ℃，工作频率 150 kHz。动态范围行 binning 最小 50000、典型 125000，面扫描最小 15000、典型 40000。光响应非均匀性典型 ±3%、最大 ±10%。注记 *12 写用峰值发射波长 560 nm 的 LED，在饱和输出的一半处测量。白点最大 0，黑点最大 10，簇缺陷最大 3，列缺陷最大 0。",
          "光谱响应图标题写 without window，图号 KMPDB0058EB。注记 *16 写装上石英玻璃或镀增透蓝宝石后，响应按窗材料的光谱透过特性下降。器件结构图画 4 个空白像素和 6-bevel，并写 H=512, 1024，V=58, 122。注记写从入射光方向看，水平移位寄存器盖着厚硅死层，长波光可能被它探测到，需要时对该区域加遮光。行 binning 时序把 S703*-0906/-1006 写成 58 + 6 (bevel)，把 S703*-0907/-1007 写成 122 + 6 (bevel)。P1V 脉冲宽度典型值按这三档写成 2 µs、4 µs 和 8 µs。",
          "S7030-0906 与 S7030-0907 共用外形图。窗口 16.3，感光区标 12.29，封装长度 34.0 ± 0.34 mm，引脚间距 2.54 ± 0.13 mm。高度相关尺寸写成 2.35 ± 0.15、3.75 ± 0.44、4.4 ± 0.44 和 4.8 ± 0.49，另有 22.4 ± 0.30 和 22.9 ± 0.30。S7030-0906 的 A=1.392，S7030-0907 的 A=2.928。S7030-1006 与 S7030-1007 的窗口写成 28.6，感光区标 24.58，封装长度 44.0 ± 0.44 mm，A 仍是 1.392 和 2.928。引脚表 S7030 的第 16 到 19 脚是短横线。注记 *19 写标准用法里 TG should be applied the same pulse as P2V。",
          "手册末尾另列多通道探测头 C7040 和 C7041，分别对应 S7030 系列和 S7031 系列。特性写 Area scanning or full line-binnng operation，读出频率 250 kHz，读出噪声 20 e- rms。这两只探测头没有当作传感器加入。注意事项写 Handle these sensors with bare hands or wearing cotton gloves。外接制冷时，冷却或回温的温度变化率要小于 5 K/minute。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7030-0907", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7030-0907.html", [
          "产品页没有写发布日期。正文把型号换成 S7030-0907，仍写 suites 和 by and external cicuit。特性仍以 Non-cooled type 开头。规格表光谱响应 200 到 1100 nm。",
          "规格表类型仍是两行 Binning type 和 Standard type。图像尺寸 12.288 x 2.928 mm，有效像素 512 x 122 pixels。行频典型 316 行/秒，最高 767 行/秒。暗电流、读出噪声、窗口、封装和 C7040 与 S7030-0906 相同。测量条件同样在 binning 和 Dark current 之间少一个空格。手册仍是 KMPD1023E22。",
          "手册选型表总像素 532 × 128，有效像素 512 × 122，感光区 12.288 × 2.928。外形图 A=2.928。垂直寄存器电容与 S703*-0907 一档相同，典型 1500 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7030-1006", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7030-1006.html", [
          "产品页没有写发布日期。正文仍写 suites 和 cicuit。规格表图像尺寸 24.576 x 1.392 mm，有效像素 1024 x 58 pixels。行频典型 213 行/秒，最高 698 行/秒。其余规格行与 S7030-0906 相同，驱动电路仍是 C7040。规格表光谱响应 200 到 1100 nm。",
          "手册总像素 1044 × 64，有效像素 1024 × 58，感光区 24.576 × 1.392。外形图窗口 28.6，感光区标 24.58，封装长度 44.0 ± 0.44 mm，A=1.392。水平寄存器电容与 S703*-1006 一档相同，典型 180 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7030-1007", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7030-1007.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 2.928 mm，有效像素 1024 x 122 pixels。行频典型 160 行/秒，最高 387 行/秒。暗电流典型仍是 100 e-/pixel/s，读出噪声典型仍是 8 e- rms。规格表光谱响应 200 到 1100 nm。",
          "手册总像素 1044 × 128，有效像素 1024 × 122，感光区 24.576 × 2.928。外形图 A=2.928。垂直寄存器电容典型 3000 pF。P1V 脉冲宽度典型 8 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7031-0906S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7031-0906S.html", [
          "产品页没有写发布日期。正文仍把这一只型号写成 a family，并仍写 suites 和 by and external cicuit。特性第一条写成 One-stage TE-cooled type。分光索引简介写 one-stage TE-cooled type。规格表光谱响应 200 到 1100 nm。",
          "规格表图像尺寸、像素和行频与 S7030-0906 相同，典型 418 行/秒，最高 1375 行/秒。暗电流典型仍是 100 e-/pixel/s，读出噪声典型仍是 8 e- rms。冷却一行写 One-stage TE-cooled。窗口 AR-coated sapphire，封装 Ceramic。Dedicated driver circuit 写 C7041。测量条件同样少一个空格。",
          "手册窗口注记 *3 写 Hermetic sealing。选型表冷却写 One-stage TE-cooled，探测头 C7041。引脚第 16、17 脚是热敏电阻 Th1 和 Th2，第 18、19 脚是 TE-cooler- 和 TE-cooler+。外形图标出 TE-cooler，封装长度 34.0 ± 0.34 mm，另标 42.0 和 50.0 ± 0.30，A=1.392。制冷器相关高度写成 4.89 ± 0.15、6.32 ± 0.63、6.92 ± 0.63 和 7.7 ± 0.68。",
          "手册热电制冷器表写 Typ. vacuum condition。S7031-0906S 与 S7031-0907S 一列：内阻 2.5 Ω，最大电流 1.5 A，最大电压 3.8 V，最大吸热 3.4 W。散热侧最高温度 70 ℃。注记写为保护制冷器，供电电流应小于这个最大电流的 60%。热敏电阻与 CCD 装在同一封装，句子写成 monitored with it. A relation。公式写成 RT1 = RT2 × exp BT1/T2 (1/T1 - 1/T2)。R298=10 kΩ，B298/323=3450 K。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7031-0907S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7031-0907S.html", [
          "产品页没有写发布日期。特性仍写 One-stage TE-cooled type。规格表图像尺寸 12.288 x 2.928 mm，有效像素 512 x 122 pixels。行频典型 316 行/秒，最高 767 行/秒。窗口、封装和 C7041 与 S7031-0906S 相同。规格表光谱响应 200 到 1100 nm。",
          "手册总像素 532 × 128。外形图与 S7031-0906S 共用，A=2.928。热电制冷器数值与 S7031-0906S 同一列。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7031-1006S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7031-1006S.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 1.392 mm，有效像素 1024 x 58 pixels。行频典型 213 行/秒，最高 698 行/秒。冷却、窗口和 C7041 与 S7031-0906S 相同。规格表光谱响应 200 到 1100 nm。",
          "手册总像素 1044 × 64。外形图窗口 28.6，感光区标 24.58，封装长度 44.0 ± 0.44 mm，另标 52.0 和 60.0 ± 0.30，A=1.392。热电制冷器另一列：内阻 1.2 Ω，最大电流 3.0 A，最大电压 3.6 V，最大吸热 5.1 W。散热侧最高温度仍写 70 ℃。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7031-1007S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7031-1007S.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 2.928 mm，有效像素 1024 x 122 pixels。行频典型 160 行/秒，最高 387 行/秒。暗电流和读出噪声仍与 S7031-0906S 的产品页相同。规格表光谱响应 200 到 1100 nm。",
          "手册总像素 1044 × 128，感光区 24.576 × 2.928。外形图 A=2.928。热电制冷器数值与 S7031-1006S 同一列。垂直寄存器电容典型 3000 pF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s7033",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S7033 与 S7034：滨松大满阱背照式 FFT-CCD",
    summary:
      "S7033-0907、S7033-1007、S7034-0907S 与 S7034-1007S 的产品页写背照式 FFT-CCD，类型为 Large full well type，光谱响应 200 到 1100 nm。S7033 无制冷，窗口 Quartz。S7034 为一阶热电制冷，窗口 Sapphire。四页的 Dedicated driver circuit 都是空的，也都没有写发布日期。手册标题写成 S7033/S7034 series，KMPD1029E15 页脚写 Jul. 2026，并写资料截至 July 2026，记为约 2026 年 7 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S7033-0907", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7033-0907.html", [
          "产品页没有写发布日期。二级标题写 Back-thinned FFT-CCD。正文写成 The S7033-0907 is families of FFT-CCD image sensors，并写水平 CCD 寄存器满阱大。binning 后可当作有 long height 的线阵，句子写 suited for use in spectrophotometry。significant 被拆成 signifi cant，efficiency 被拆成 effi ciency。外部电路数字相加写成 by an external circuit。",
          "特性写 Line, pixel binning、峰值波长量子效率大于 90 %、Wide spectral range、Wide dynamic range 和 MPP operation。规格表类型分成两行，Binning type 和 Large full well type。图像尺寸 12.288 x 2.928 mm，有效像素 512 x 122 pixels，像元 24 x 24 μm。光谱响应 200 到 1100 nm。行频典型 316 行/秒，最高 767 行/秒。暗电流典型 100 e-/pixel/s。读出噪声典型 30 e- rms。冷却 Non-cooled。窗口 Quartz，封装 Ceramic。Dedicated driver circuit 这一格是空的。测量条件写成 frame rate: full line binning, dark current: MPP mode。手册文件名 s7033-0907_etc_kmpd1029e.pdf，产品页标 623 KB。",
          "手册标题写成 S7033/S7034 series，目录号 KMPD1029E15，页脚写 Jul. 2026 DN，并写资料截至 July 2026，记为约 2026 年 7 月。手册写 feature large full-well capacity in horizontal CCD register。像元 24 × 24 μm。面积从 S7033-0907、S7034-0907S 的 12.288 (H) × 2.928 (V) mm² 写到 S7033-1007、S7034-1007S 的 24.576 (H) × 2.928 (V) mm²。正文写封装内可装一阶或两级热电制冷器，括注 S7034/S7035 series。室温下一级可冷到 -10 °C，两级可冷到 -30 °C。句子写成 In addition since both the CCD chip and the thermoelectric cooler are hermetically sealed, no dry air is required。",
          "手册特性写 Built-in thermoelectric cooler (S7034/S7035 series)。应用栏写 Fluorescence spectrometer, ICP、Industrial inspection requiring、Semiconductor inspection、DNA sequencer 和 Low-light-level detection。选型表 S7033-0907 总像素 532 × 128、有效像素 512 × 122，S7033-1007 总像素 1044 × 128、有效像素 1024 × 122，冷却都写 Non-cooled。S7034 两只写 One-stage TE-cooled。注记写两级热电制冷的 S7035 series 也可提供，选型表没有给出具体型号。分光索引这次没有 S7035 的产品页，没有加入。",
          "总则表把垂直和水平时钟都写成 2 phase，封装写成 24 pin ceramic DIP。S7033 的内置制冷器一格是短横线，S7034 写 One-stage。窗口 S7033 写 Quartz glass，S7034 写 AR-coated sapphire。注记 *1 写可按要求提供临时窗口，例子是 S7033-0907N。这个型号没有加入。窗材料表另写两系列都有 window-less 选项，并列出 S7035 series 为 two-stage TE-cooled type。注记 *15 写 Resin sealing，*16 写 Hermetic sealing。没有单独的 window-less 产品页，没有加入。",
          "绝对最大额定值工作温度 -50 到 +50 ℃，贮存温度 -50 到 +70 ℃。注记 *2 只写 Chip temperature。手册电气特性没有行频一行。信号输出频率典型 0.25 MHz、最大 1 MHz。垂直寄存器电容 S703*-0907(S) 典型 1500 pF，S703*-1007(S) 典型 3000 pF。水平寄存器电容分别是典型 260 pF 和 300 pF。转移栅电容典型 60 pF 和 80 pF。电荷转移效率最小 0.99995、典型 0.99999。直流输出电平最小 12 V、典型 15 V、最大 18 V。输出阻抗典型 2 kΩ、最大 3 kΩ。功耗典型 13 mW、最大 14 mW。输入栅电压最大写 0 V。",
          "满阱垂直方向最小 240 ke-、典型 320 ke-，水平方向最小 2700 ke-、典型 3400 ke-，线性写成 ±1.5 %。转换效率最小 0.5 µV/e-、典型 0.6 µV/e-。MPP 暗电流 25 ℃ 典型 100、最大 1000，0 ℃ 典型 10、最大 100，单位 e-/pixel/s。读出噪声典型 30 e- rms、最大 45 e- rms。注记 *8 只写工作频率 150 kHz，没有写出相机型号。动态范围行 binning 最小 60000、典型 113300，面扫描最小 5333、典型 10700。注记 *9 写成 Full well/Readout noise。光响应非均匀性典型 ±3%、最大 ±10%。注记 *10 写在满阱输出的一半处测量，没有写出 LED 波长。缺陷表把 column defect 的首字母写成小写。白点最大 0，黑点最大 10，簇缺陷最大 3，列缺陷最大 0。",
          "光谱响应图标题写 without window，图号仍是 KMPDB0058EB。注记 *14 写成 Spectral response with quartz glass or sapphire are decreased by the transmittance。器件结构图画 V=122，H=512, 1024。死层注记仍写长波光可能进入水平移位寄存器，需要时加遮光。行 binning 时序把斜边写成 (BEVEL)。面扫描时序写成 (Bevel)。P1V 脉冲宽度最小 6 µs、典型 8 µs。注记 *18 写 In case of the S7033-1007, S7034-1007S。面扫描的对应注记 *20 写成 In case of the 7033-1007, S7034-1007S，7033 前面没有 S。",
          "S7033-0907 外形图窗口 16.3，有效区 12.288，高度方向标 2.928，封装长度 34.0 ± 0.34 mm。另有 22.4 ± 0.3 和 22.9 ± 0.3，以及 2.4 ± 0.15、3.8 ± 0.44、4.4 ± 0.44 和 4.8 ± 0.49。引脚表 S7033 的第 16 到 19 脚是短横线。注意事项标题写成 Precaution for use，正文仍写 Handle these sensors with bare hands or wearing cotton gloves。温度变化率写成 less than 5 K/min。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7033-1007", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7033-1007.html", [
          "产品页没有写发布日期。正文同样写 is families，并把 significant 和 efficiency 拆开。特性没有 Built-in thermoelectric cooler。规格表光谱响应 200 到 1100 nm。",
          "规格表图像尺寸 24.576 x 2.928 mm，有效像素 1024 x 122 pixels。行频典型 160 行/秒，最高 387 行/秒。暗电流典型 100 e-/pixel/s，读出噪声典型 30 e- rms。冷却 Non-cooled，窗口 Quartz，封装 Ceramic。Dedicated driver circuit 这一格是空的。手册仍是 KMPD1029E15。",
          "手册总像素 1044 × 128，有效像素 1024 × 122。外形图窗口 28.6，有效区 24.576，封装长度 44.0 ± 0.34 mm。垂直寄存器电容与 S703*-1007 一档相同，典型 3000 pF。水平寄存器电容典型 300 pF。注记 *18 点名 S7033-1007。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7034-0907S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7034-0907S.html", [
          "产品页没有写发布日期。正文仍写 is families，但 significant 和 efficiency 没有拆开。另起一句写 One-stage thermoelectric cooler is built into the package ，句号前有空格。室温下一级制冷可到 -10 ℃，并写 hermetically sealed，不需要干燥空气。句子写成 In addition since。分光索引简介写 one-stage TE-cooled type。规格表光谱响应 200 到 1100 nm。",
          "特性末尾写 Built-in thermoelectric cooler。规格表图像尺寸和像素与 S7033-0907 相同。行频典型 316 行/秒，最高 767 行/秒。暗电流典型 100 e-/pixel/s，读出噪声典型 30 e- rms。冷却 One-stage TE-cooled。窗口 Sapphire，封装 Ceramic。Dedicated driver circuit 这一格是空的。",
          "手册窗口写成 AR-coated sapphire，不是产品页上的 Sapphire。选型表冷却写 One-stage TE-cooled，总像素 532 × 128。引脚第 16、17 脚是 Th1 和 Th2，第 18、19 脚是 TE-cooler- 和 TE-cooler+。外形图窗口 16.3，有效区 12.288，引脚间距写成 2.54，没有公差。封装长度 34.0 ± 0.34 mm，另标 42.0 和 50.0 ± 0.3。制冷器相关高度写成 4.8 ± 0.15、6.7 ± 0.63、7.3 ± 0.63 和 7.7 ± 0.68。",
          "手册热电制冷器表标题只写 Typ.，没有写 vacuum condition。S7034-0907S 一列：内阻 2.5 Ω，最大电流 1.5 A，最大电压 3.8 V，最大吸热 3.4 W。散热侧最高温度 70 ℃。注记写供电电流应小于最大电流的 60%。热敏电阻句子同样写成 monitored with it. A relation。公式和 R298=10 kΩ、B298/323=3450 K 与 S7030/S7031 手册相同。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S7034-1007S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S7034-1007S.html", [
          "产品页没有写发布日期。正文回到 S7033 那种写法，significant 和 efficiency 再次拆开，也没有 S7034-0907S 那段制冷器说明。特性没有 Built-in thermoelectric cooler。分光索引简介只写 large full-well capacity type，没有写 one-stage TE-cooled type。规格表光谱响应 200 到 1100 nm。",
          "规格表图像尺寸 24.576 x 2.928 mm，有效像素 1024 x 122 pixels。行频典型 160 行/秒，最高 387 行/秒。暗电流典型 100 e-/pixel/s，读出噪声典型 30 e- rms。冷却一行仍写 One-stage TE-cooled。窗口 Sapphire，封装 Ceramic。Dedicated driver circuit 这一格是空的。",
          "手册总像素 1044 × 128，窗口仍写 AR-coated sapphire。外形图窗口 28.6，有效区 24.576，封装长度 44.0 ± 0.44 mm，另标 52.0 和 60.0 ± 0.3。热电制冷器另一列：内阻 1.2 Ω，最大电流 3.0 A，最大电压 3.6 V，最大吸热 5.1 W。垂直寄存器电容典型 3000 pF。注记 *20 把 S7033-1007 印成 7033-1007。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s10140",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10140 与 S10141：滨松低噪声背照式 FFT-CCD",
    summary:
      "S10140-1107-01、S10140-1108-01、S10140-1109-01、S10141-1107S-01、S10141-1108S-01 与 S10141-1109S-01 的产品页写背照式 FFT-CCD，光谱响应 200 到 1100 nm。正文把 S10140/S10141 series (-01) 写成 low noise type。S10140 无制冷，窗口 Quartz。S10141 为一阶热电制冷，窗口 AR-coated sapphire。六页都没有写发布日期，规格表也都没有 Dedicated driver circuit。手册与 S13240/S13241 共用，标题分成两行，目录号 KMPD1181E05，页脚写 Oct. 2023，并写资料截至 October 2023，记为约 2023 年 10 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S10140-1107-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10140-1107-01.html", [
          "产品页没有写发布日期。页面标题写 Back-thinned type CCD area image sensor。一级标题只写 S10140-1107-01。二级标题写 Low readout noise, high resolution (pixel size: 12μm)，12 和 μm 之间没有空格。正文从 The S13240/S13241 series and S10140/S10141 series (-01) 写起。binning 后可当作垂直方向感光区很长的线阵，句子写 suited for use in spectrophotometry。宽动态范围写成 increasing the saturation charge than that of the previous product (S10140/S10141 series)。句号后直接接 The S13240，没有空格。S13240/S13241 写成 high-speed readout type，这一组写成 low noise type。These prod-ucts 用连字符拆开，并写 have an pixel size of 12 × 12 μm。面积从 24.576 (H) × 1.464 (V) mm2 写到 24.576 (H) × 6.072 (V) mm2，mm2 没有上标。",
          "特性写 Wide dynamic range。读出噪声写成 4e-rms typ.，减号放在上标，e 前面没有空格。后面是像元 12 × 12 μm、Non-cooled type、峰值量子效率 90% or higher、Wide spectral response range、MPP operation、High UV sensitivity and stable characteristics under UV light irradiation，以及 Pin compatible with the S7030/S7031 series。",
          "规格表类型分成两行，Binning type 和 High resolution type。图像尺寸 24.576 x 1.464 mm，有效像素 2048 x 122 pixels，像元 12 x 12 μm。光谱响应 200 to 1100 nm。行频典型 107 行/秒，最高 203 行/秒。暗电流典型 30 e-/pixel/s。读出噪声典型 4 e- rms，这一格在 e 两侧有空格。冷却 Non-cooled。窗口 Quartz，封装 Metal。规格表没有 Dedicated driver circuit 这一行。测量条件写成 Typ. Ta=25 ℃，unless otherwise noted, frame rate: full line binning, Dark current: MPP mode。手册文件名 s13240_etc_kmpd1181e.pdf，产品页标 648 KB。",
          "手册标题分成 S13240/S13241 series 和 S10140/S10141 series (-01)。目录号 KMPD1181E05，页脚写 Oct. 2023 DN，并写资料截至 October 2023，记为约 2023 年 10 月。手册把 products 在行末拆成 prod- 和 ucts，同样写 have an pixel size。特性里这一组的读出噪声写成 4 e- rms typ.，高速那组写成 30 e- rms typ.。无制冷写成 S13240 series, S10140 series (-01)。一阶热电制冷写成 S13241 series, S10141 series (-01)。与 S7030/S7031 引脚兼容只括在 S10140/S10141 series (-01)。应用栏写 Fluorescence spectrophotometry, ICP、Industrial product inspection、Semiconductor inspection、DNA sequencer、Low-light-level detection 和 Raman spectroscopy。",
          "选型表读出速度最大：S13240/S13241 为 10 MHz，S10140/S10141 为 0.5 MHz。总像素与有效像素，-1107 为 2068 × 128 和 2048 × 122，感光区 24.576 × 1.464；-1108 为 2068 × 256 和 2048 × 250，感光区 24.576 × 3.000；-1109 为 2068 × 512 和 2048 × 506，感光区 24.576 × 6.072。多通道探测头 S10140 写 C10150-01，S10141 写 C10151-01，S13240 和 S13241 是短横线。注记写两级热电制冷的 S10142 series (-01) 可按要求订制。这个订制系列没有加入。",
          "结构表像元 12 × 12 µm，垂直和水平时钟都写 2-phase。输出电路 S13240/S13241 写 Two-stage MOSFET source follower，S10140/S10141 写 One-stage MOSFET source follower。封装写 24-pin ceramic DIP，不是产品页上的 Metal。窗口 S10140 写 Quartz glass，S10141 写 AR-coated sapphire。注记 *1 写可按要求提供临时窗口，例子是 S13240-1107N。这个型号没有加入。*2 写 Resin sealing，*3 写 Hermetic sealing。",
          "绝对最大额定值工作温度 -50 到 +50 ℃，贮存温度 -50 到 +70 ℃。注记 *4 写 S13240 与 S10140 按封装温度，S13241 与 S10141 按芯片温度。输出晶体管漏极电压这一组最大 +25 V，S13240/S13241 最大 +20 V。内置制冷器最大电流 3.0 A，最大电压 3.6 V，散热侧最高温度 70 ℃。注记写即使瞬间超过绝对最大额定值也可能使产品质量下降。注记 *5 写供电电流应小于这个最大电流的 60%。",
          "手册电气特性没有行频一行。信号输出频率这一组典型 0.25 MHz、最大 0.5 MHz。垂直寄存器电容 -1107 典型 1600 pF，-1108 典型 3200 pF，-1109 典型 6400 pF。水平寄存器电容典型 150 pF。求和栅和复位栅电容都是典型 30 pF。转移栅电容典型 70 pF。电荷转移效率最小 0.99995、典型 0.99999。直流输出电平典型 17 V。输出阻抗典型 5 kΩ。功耗典型 16 mW。负载电阻典型 22 kΩ。注记 *7 写 S10140/S10141 的条件是 VOD=22 V，RL=22 kΩ。",
          "满阱垂直方向最小 60 ke-、典型 70 ke-，水平方向和求和都是最小 400 ke-、典型 500 ke-。转换效率最小 4 µV/e-、典型 5 µV/e-、最大 6 µV/e-。MPP 暗电流 25 ℃ 典型 30 e-/pixel/s、最大 300 e-/pixel/s，0 ℃ 典型 3、最大 30。读出噪声典型 4 e- rms、最大 18 e- rms。注记 *12 写工作频率 20 kHz，温度 -50 ºC。动态范围行 binning 最小 22222、典型 125000，面扫描最小 3333、典型 20000。注记 *13 写成 Dynamic range=Saturation charge/Readout noise。光响应非均匀性典型 ±3%、最大 ±10%。注记 *14 写用峰值发射波长 470 nm 的 LED，在饱和输出的一半处测量。白点最大 0，黑点最大 10，簇缺陷最大 3，列缺陷最大 0。",
          "光谱响应图标题写 without window，图号 KMPDB0485EA。注记 *18 写成 Spectral response with quartz glass or AR-coated sapphire are decreased according to the spectral transmittance characteristics of window material。器件结构图画 4 blank pixels 和 6-bevel，并写 H=2048，V=122, 250, 506。死层注记写长波光可能进入水平移位寄存器，需要时加遮光。行 binning 时序把三档写成 122 + 6 (bevel)、250 + 6 (bevel) 和 506 + 6 (bevel)，型号写成 S1324*/S1014*-1107 (-01) 这一类。P1V 脉冲宽度这一组的典型值按三档写成 4 µs、8 µs 和 16 µs。",
          "S10140 与 S13240 共用外形图 KMPDA0567EB。保证透过率的窗口写成 28.6 × 8.2 mm。重量写成 weight: 11.9 g，weight 是小写。窗口 29.6 ± 0.13，感光区标 24.58，另有 9.2 ± 0.13、22.4 ± 0.3 和 22.9 ± 0.3。封装长度 44 ± 0.44 mm，引脚间距 2.54 ± 0.13 mm。高度相关尺寸写成 2.35 ± 0.15、3.75 ± 0.44、4.4 ± 0.44 和 4.8 ± 0.49。S10140-1107-01 的 A=1.464。引脚表第 6 脚和第 16 到 19 脚是短横线。标准用法写 RL=22 kΩ，RD 为 +15 V，OD 为 +22 V。注记 *21 写 In standard operation, TG should be applied the same pulse as P2V。",
          "手册末尾另列多通道探测头 C10150-01 和 C10151-01，标题写成 S10140/S10141 series(-01)，括号前没有空格。C10150-01 对应无制冷的 S10140 series (-01)，C10151-01 对应一阶热电制冷的 S10141 series (-01)。制冷温度写成 Tchip=-10 ± 0.05 °C。控制器 C7557-01 写通过 USB 用附带软件采集数据。连接图注记写 Shutter, etc. are not available。这三只没有当作传感器加入。注意事项写 Handle these sensors with bare hands or wearing cotton gloves。外接制冷时温度变化率要小于或等于 5 K/minute。焊接条件写 260 °C max. (once, within 5 seconds)，距引线根部至少 2 mm。",
          "CCD/CMOS 选型指南 KMPD0002E35 写资料截至 June 2026，记为约 2026 年 6 月。高分辨率一栏把这六只的行频写成 107、80 和 40，与产品页典型值相同。注记 *2 再次写 S10142 series (-01) 可按要求订制。另写 Windowless types are also available，没有给出具体型号，没有加入。同一栏还列了 S12101，注记写 With anti-blooming function。分光索引没有 S12101，没有加入。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10140-1108-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10140-1108-01.html", [
          "产品页没有写发布日期。正文和特性与 S10140-1107-01 相同，仍写 prod-ucts，读出噪声仍是 4e-rms typ.。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 24.576 x 3.000 mm，有效像素 2048 x 250 pixels。行频典型 80 行/秒，最高 138 行/秒。暗电流、读出噪声、窗口和封装与 S10140-1107-01 相同。手册仍是 KMPD1181E05。",
          "手册总像素 2068 × 256，有效像素 2048 × 250，感光区 24.576 × 3.000。外形图 A=3.000。垂直寄存器电容典型 3200 pF。P1V 脉冲宽度典型 8 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10140-1109-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10140-1109-01.html", [
          "产品页没有写发布日期。正文和特性仍与 S10140-1107-01 相同。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 24.576 x 6.072 mm，有效像素 2048 x 506 pixels。行频典型 40 行/秒，最高 60 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 4 e- rms。窗口 Quartz，封装 Metal。",
          "手册总像素 2068 × 512，有效像素 2048 × 506，感光区 24.576 × 6.072。外形图 A=6.072。垂直寄存器电容典型 6400 pF。P1V 脉冲宽度典型 16 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10141-1107S-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10141-1107S-01.html", [
          "产品页没有写发布日期。正文仍写 prod-ucts 和 have an pixel size。特性把 Non-cooled type 换成 One-stage TE-cooled type。读出噪声仍写成 4e-rms typ.，并仍写 Pin compatible with the S7030/S7031 series。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸、像素和行频与 S10140-1107-01 相同，典型 107 行/秒，最高 203 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 4 e- rms。冷却 One-stage TE-cooled。窗口 AR-coated sapphire，封装 Metal。",
          "手册窗口写 AR-coated sapphire，探测头 C10151-01。引脚第 16、17 脚是 Th1 和 Th2，第 18、19 脚是 P- 和 P+。第 6 脚仍是短横线。外形图与 S13241 共用，图号 KMPDA0358EB。保证透过率的窗口写成 27.6 × 7.2 mm。重量写成 Weight: 38.7 g。窗口 29.6 ± 0.13，封装长度 44 ± 0.44 mm，另标 (52) 和 60 ± 0.3，A=1.464。制冷器相关高度写成 4.89 ± 0.15、6.32 ± 0.63、7.3 ± 0.63 和 7.7 ± 0.68。",
          "热电制冷器表只给一列，S13241 与 S10141 共用：内阻 1.2 Ω，最大吸热 5.1 W。这一表没有最大电流和最大电压，绝对最大额定值里才写 3.0 A 和 3.6 V。注记 *22 写这是理论吸热。要把制冷侧降到 -10 °C，散热侧必须在 30 °C 或以下。散热器热阻写成 no more than 1 °C /W，斜线前有空格。热敏电阻句子写成 is express by the following equation。公式写成 RT1 = RT2 × exp BT1/T2 (1/T1 - 1/T2)。R298=10 kΩ，B298/323=3450 K。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10141-1108S-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10141-1108S-01.html", [
          "产品页没有写发布日期。特性仍写 One-stage TE-cooled type，读出噪声仍是 4e-rms typ.。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 24.576 x 3.000 mm，有效像素 2048 x 250 pixels。行频典型 80 行/秒，最高 138 行/秒。窗口 AR-coated sapphire，封装 Metal。手册仍是 KMPD1181E05。",
          "手册总像素 2068 × 256。外形图 A=3.000。垂直寄存器电容典型 3200 pF。P1V 脉冲宽度典型 8 µs。热电制冷器数值与 S10141-1107S-01 同一列。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10141-1109S-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10141-1109S-01.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 6.072 mm，有效像素 2048 x 506 pixels。行频典型 40 行/秒，最高 60 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 4 e- rms。冷却 One-stage TE-cooled，窗口 AR-coated sapphire。规格表光谱响应 200 to 1100 nm。",
          "手册总像素 2068 × 512，感光区 24.576 × 6.072。外形图 A=6.072。垂直寄存器电容典型 6400 pF。P1V 脉冲宽度典型 16 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s13240",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S13240 与 S13241：滨松高速读出背照式 FFT-CCD",
    summary:
      "S13240-1107、S13240-1108、S13240-1109、S13241-1107S、S13241-1108S 与 S13241-1109S 的产品页写背照式 FFT-CCD，光谱响应 200 到 1100 nm。正文把 S13240/S13241 写成 high-speed readout type。S13240 无制冷，窗口 Quartz。S13241 为一阶热电制冷，窗口 AR-coated sapphire。六页都没有写发布日期，规格表也都没有 Dedicated driver circuit。手册与 S10140/S10141 共用，KMPD1181E05，页脚写 Oct. 2023，并写资料截至 October 2023，记为约 2023 年 10 月。",
    applications: ["spectral", "scientific", "machine"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S13240-1107", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13240-1107.html", [
          "产品页没有写发布日期。页面标题写 Back-thinned type CCD area image sensor。二级标题仍写 Low readout noise, high resolution (pixel size: 12μm)。正文与 S10140 相同，仍把这一组写成 high-speed readout type，并把 products 拆成 prod-ucts。规格表光谱响应 200 to 1100 nm。",
          "特性读出噪声写成 30 e-rms typ.，e 前面有空格，减号放在上标。特性没有 Pin compatible with the S7030/S7031 series。冷却一条写 Non-cooled type。规格表类型仍是两行 Binning type 和 High resolution type。",
          "规格表图像尺寸 24.576 x 1.464 mm，有效像素 2048 x 122 pixels，像元 12 x 12 μm。行频典型 921 行/秒，最高 2501 行/秒。暗电流典型 30 e-/pixel/s。读出噪声典型 30 e- rms。冷却 Non-cooled。窗口 Quartz，封装 Metal。规格表没有 Dedicated driver circuit 这一行。测量条件与 S10140 相同。手册文件名仍是 s13240_etc_kmpd1181e.pdf，产品页标 648 KB。",
          "手册读出噪声典型 30 e- rms、最大 45 e- rms。注记 *12 写工作频率 2.5 MHz，温度 0 ºC。转换效率最小 4.5 µV/e-、典型 5.5 µV/e-、最大 6.5 µV/e-。动态范围行 binning 最小 8888、典型 16666，面扫描最小 1333、典型 2333。信号输出频率典型 2.5 MHz、最大 10 MHz。直流输出电平典型 11 V。输出阻抗典型 0.2 kΩ。输出放大器回流电流典型 0.4 mA。功耗典型 100 mW。负载电阻典型 2.2 kΩ。注记 *7 的条件是 VOD=16 V，RL=2.2 kΩ。选型表探测头是短横线，读出速度最大 10 MHz。",
          "输出电路写 Two-stage MOSFET source follower。工作条件里输出放大器回流电压典型 4 V、最大 5 V。引脚第 6 脚是 Vret，标准用法写 +4 V。第 16 到 19 脚是短横线。标准用法写 RL=2.2 kΩ，RD 和 OD 都是 +16 V。注记 *20 写 In standard operation, TG should be applied the same pulse as P2V。P1V 脉冲宽度这一组的典型值按三档写成 1 µs、2 µs 和 4 µs。外形图与 S10140 共用，A=1.464，重量仍写 weight: 11.9 g。",
          "CCD/CMOS 选型指南 KMPD0002E35 的高速读出一栏把 S13240-1107、S13240-1108 和 S13240-1109 的行频写成 921、539 和 203，与产品页典型值相同，并写 Windowless types are also available。没有具体型号，没有加入。临时窗口的例子 S13240-1107N 也没有加入。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13240-1108", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13240-1108.html", [
          "产品页没有写发布日期。正文和特性与 S13240-1107 相同，读出噪声仍写成 30 e-rms typ.。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 24.576 x 3.000 mm，有效像素 2048 x 250 pixels。行频典型 539 行/秒，最高 1204 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 30 e- rms。窗口 Quartz，封装 Metal。",
          "手册总像素 2068 × 256，有效像素 2048 × 250。外形图 A=3.000。垂直寄存器电容典型 3200 pF。P1V 脉冲宽度典型 2 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13240-1109", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13240-1109.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 6.072 mm，有效像素 2048 x 506 pixels。行频典型 203 行/秒，最高 304 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 30 e- rms。冷却 Non-cooled，窗口 Quartz。规格表光谱响应 200 to 1100 nm。",
          "手册总像素 2068 × 512，感光区 24.576 × 6.072。外形图 A=6.072。垂直寄存器电容典型 6400 pF。P1V 脉冲宽度典型 4 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13241-1107S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13241-1107S.html", [
          "产品页没有写发布日期。特性把冷却写成 One-stage TE-cooled type。读出噪声仍写成 30 e-rms typ.，没有 Pin compatible 那一条。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸和行频与 S13240-1107 相同，典型 921 行/秒，最高 2501 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 30 e- rms。冷却 One-stage TE-cooled。窗口 AR-coated sapphire，封装 Metal。",
          "手册窗口写 AR-coated sapphire。选型表冷却写 One-stage TE-cooled，探测头仍是短横线。引脚第 6 脚是 Vret，第 16、17 脚是 Th1 和 Th2，第 18、19 脚是 P- 和 P+。外形图与 S10141 共用，A=1.464，重量写成 Weight: 38.7 g。热电制冷器与 S10141 同一列：内阻 1.2 Ω，最大吸热 5.1 W。热敏电阻句子同样写成 is express by the following equation。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13241-1108S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13241-1108S.html", [
          "产品页没有写发布日期。特性仍写 One-stage TE-cooled type，读出噪声仍是 30 e-rms typ.。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 24.576 x 3.000 mm，有效像素 2048 x 250 pixels。行频典型 539 行/秒，最高 1204 行/秒。窗口 AR-coated sapphire，封装 Metal。手册仍是 KMPD1181E05。",
          "手册总像素 2068 × 256。外形图 A=3.000。垂直寄存器电容典型 3200 pF。P1V 脉冲宽度典型 2 µs。热电制冷器数值与 S13241-1107S 同一列。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S13241-1109S", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S13241-1109S.html", [
          "产品页没有写发布日期。规格表图像尺寸 24.576 x 6.072 mm，有效像素 2048 x 506 pixels。行频典型 203 行/秒，最高 304 行/秒。暗电流典型 30 e-/pixel/s，读出噪声典型 30 e- rms。冷却 One-stage TE-cooled，窗口 AR-coated sapphire。规格表光谱响应 200 to 1100 nm。",
          "手册总像素 2068 × 512，感光区 24.576 × 6.072。外形图 A=6.072。垂直寄存器电容典型 6400 pF。P1V 脉冲宽度典型 4 µs。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s10420",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S10420-01：滨松低噪声背照式 CCD",
    summary:
      "S10420-1004-01、S10420-1006-01、S10420-1104-01、S10420-1106-01、S10420-1106NU-01 与 S10420-1106NW-01 的产品页写背照式 CCD，用于光谱仪。前五只光谱响应 200 到 1100 nm。S10420-1106NW-01 写 120 到 1100 nm。六页都没有写发布日期，冷却都是 Non-cooled，封装都是 Ceramic。手册与 S11071 共用，标题写 S11071/S10420-01 series，目录号 KMPD1120E14，页脚写 Feb. 2023 DN，并写资料截至 February 2023，记为约 2023 年 2 月。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S10420-1004-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1004-01.html", [
          "产品页没有写发布日期。页面标题写 Back-thinned type CCD area image sensor。一级标题只写 S10420-1004-01。二级标题写 Improved etaloning characteristics, Low noise type available。正文写 designed for spectrometers，并写 Low noise type is available with improved etaloning characteristics。量子效率写成 high quantμm efficiency，quant 和 m 之间是 μm 的 μ。特性写节点灵敏度 6.5 uV/e-，u 不是 μ，以及 High full well capacity and wide dynamic range，像元 14 × 14 μm。产品页特性列表没有手册里的 with anti-blooming function。",
          "规格表类型分成两行，Binning type 和 Low etaloning type。图像尺寸 14.336 x 0.224 mm，有效像素 1024 x 16 pixels，像元写成 14 x 14 μm，乘号是 x。光谱响应 200 to 1100 nm。行频典型 221 行/秒，最高 424 行/秒。暗电流典型 50 e-/pixel/s。读出噪声典型 6 e- rms。冷却 Non-cooled。封装 Ceramic。规格表没有窗口一行。专用驱动电路 C11287-01。测量条件写成 Typ. Ta=25 ℃，unless otherwise noted, Frame rate: full line binning，Frame 大写。手册文件名 s11071-1004_etc_kmpd1120e.pdf，产品页标 463 KB。",
          "手册标题写 CCD image sensors，系列名 S11071/S10420-01 series。目录号 KMPD1120E14，页脚写 Feb. 2023 DN，并写资料截至 February 2023，记为约 2023 年 2 月。正文写 The S11071/S10420-01 series offer，offer 没有 s，并写 high quantum efficiency。特性把节点灵敏度分成 8 μV/e-（S11071 series）和 6.5 μV/e-（S10420-01 series）。满阱和动态范围后面括着 with anti-blooming function。高紫外耐受只写给 S10420-1106NU-01/-1106NW-01。应用栏写 Spectrometers, etc.。手册解释 etaloning 是入射光在 CCD 正反面之间反复反射、衰减后造成灵敏度高低交替，长波进入背照式 CCD 时与硅片厚度和吸收长度有关，这一组用不易发生干涉的结构减轻这种现象。图号 KMPDB0284EB。",
          "选型表总像素与有效像素：-1004 为 1044 × 22 和 1024 × 16，感光区 14.336 × 0.224；-1006 为 1044 × 70 和 1024 × 64，感光区 14.336 × 0.896；-1104 为 2068 × 22 和 2048 × 16，感光区 28.672 × 0.224；-1106、-1106NU-01 和 -1106NW-01 为 2068 × 70 和 2048 × 64，感光区 28.672 × 0.896。读出速度最大：S11071 为 10 MHz，S10420-01 为 0.5 MHz。驱动电路分别写 C11288-01 和 C11287-01。",
          "结构表像元 14 × 14 µm。垂直时钟 2-phase，水平时钟 4-phase。输出电路 S11071 写 Two-stage MOSFET source follower，S10420-01 写 One-stage MOSFET source follower。封装写 24-pin ceramic DIP，不是产品页上的 Ceramic。窗口：S11071 和 S10420 的 -1004-01、-1006-01、-1104-01、-1106-01 写 Quartz glass (resin sealing)。S10420-1106NU-01 和 -1106NW-01 写 None。注记 *1 写可按要求提供临时窗口，例子是 S11071-1106N 和 S10420-1106N-01。这两个例子没有加入。注记 *2 写 Temporary window (borosilicate glass)。冷却都是 Non-cooled。",
          "绝对最大额定值工作温度 -50 到 +50 ℃，贮存温度 -50 到 +70 ℃。注记 *3 写封装温度。输出晶体管漏极电压 S11071 最大 +25 V，S10420-01 最大 +30 V。注记写即使瞬间超过绝对最大额定值也可能使产品质量下降。工作条件标题写 MPP mode, Ta=25 °C。外接负载电阻 S11071 典型 2.2 kΩ，S10420-01 典型 100 kΩ。注记 *4 只给 S11071 的输出放大器回流电压，写相对衬底为正，但电流流出传感器。S10420-01 的这一格是空的。",
          "信号输出频率 S10420-01 典型 0.25 MHz、最大 0.5 MHz，S11071 典型 5 MHz、最大 10 MHz。垂直寄存器电容符号 CP1V、CP2V，-1004 典型 200 pF，-1006 典型 600 pF，-1104 典型 400 pF，-1106 典型 1200 pF。水平寄存器电容把 -1004 与 -1006 的符号写成 CP1H、CP2H，典型 80 pF；-1104 与 -1106 写成 CP3H、CP4H，典型 160 pF。求和栅和复位栅电容都是典型 10 pF。转移栅电容 -1004 与 -1006 典型 30 pF，-1104 与 -1106 典型 60 pF。电荷转移效率最小 0.99995、典型 0.99999。直流输出电平 S10420-01 典型 17 V，S11071 典型 8 V。输出阻抗 S10420-01 典型 10 kΩ，S11071 典型 0.3 kΩ。功耗 S10420-01 典型 4 mW，S11071 典型 75 mW。注记 *5 写 S10420-01 的条件是 VOD=24 V，RL=100 kΩ。注记 *6 写按每个像元、在满阱一半处测量。注记 *7 写片上放大器加上负载电阻。",
          "手册电气光学特性没有行频一行。满阱垂直方向两组都是最小 50 ke-、典型 60 ke-。水平方向 S10420-01 最小 250 ke-、典型 300 ke-，S11071 最小 150 ke-、典型 200 ke-。转换效率 S10420-01 最小 5.5 µV/e-、典型 6.5 µV/e-、最大 7.5 µV/e-，S11071 最小 7、典型 8、最大 9。暗电流典型 50 e-/pixel/s、最大 500 e-/pixel/s。注记 *9 写温度每降 5 到 7 ℃，暗电流减半。读出噪声 S10420-01 典型 6 e- rms、最大 15 e- rms，S11071 典型 23、最大 28。注记 *10 写 S10420-01 在 -40 ℃、fc=20 kHz 测量，S11071 在 25 ℃、fc=2 MHz 测量。动态范围只有 line binning 一行，S10420-01 最小 16600、典型 50000，S11071 最小 5350、典型 8700。注记 *11 写成 Dynamic range = Full well capacity / Readout noise。光响应非均匀性典型 ±3%、最大 ±10%。注记 *12 写用峰值发射波长 660 nm 的 LED，在饱和输出的一半处测量。",
          "光谱响应图标题写 typical example, without window。图中分开画了 S11071 series、S10420-1004-01/-1006-01、S10420-1104-01/-1106-01、S10420-1106NW-01 和 S10420-1106NU-01。图号 KMPDB0578EB。窗口透过率图号 KMPDB0303EB。注记 *13 写加石英玻璃后的光谱响应要按窗口透过率下降。暗电流对温度图号 KMPDB0304EB。器件结构图画 4 blank pixels 和 6-bevel，并写 H=1024, 2048，V=16, 64。S11071 的图上同时出现 2 signal output 和 2n signal output。S10420-01 的图写 2n signal output。图号 KMPDC0343EC 和 KMPDC0269EC。注记写长波光可能穿过不感光的厚硅区进入水平移位寄存器，需要时加遮光。",
          "行 binning 时序图页眉先写 Timing chart (S11071/S10420 series)，正文标题写 Timing chart (line binning)。-1004 与 -1104 的垂直方向写成 22←16 + 6 (bevel)，-1006 与 -1106 写成 70←64 + 6 (bevel)。水平方向 -1004 与 -1006 写到 1044，-1104 与 -1106 写到 2068。输出标注对 -1004 与 -1006 写 D3...D10, S1...S1024, D11...D18，对 -1104 与 -1106 写 S1...S2048，图上还有 D1、D2、D19、D20。图号 KMPDC0270ED。P1V 脉冲宽度 S10420-01 最小 6 µs、典型 8 µs，S11071 最小 1 µs、典型 8 µs。注记 *14 写对称时钟应在最大幅度的 50% 处重叠。时序图没有单独写出 NU 和 NW。",
          "石英窗外形图标题写成 Dimensional outline (S11071/S10420-1 series, unit: mm)，S10420-01 写成了 S10420-1。下面又有一行 Dimensional outline (unit: mm)。图号 KMPDA0223EF。玻璃厚度注记写 refractive index≈1.5。Index mark 标了两处。引脚镀金，材料 Alloy 42。封装长度 38.10 ± 0.4 mm，引脚间距 2.54 ± 0.13 mm，另有 27.94 ± 0.3。感光区表把 -1004(-01) 写成 14.336 (H)、0.224 (V)。S10420-1106NU-01 与 -1106NW-01 另用图号 KMPDA0627EB，图上标 0.896，没有玻璃厚度注记。",
          "引脚表 S10420-01 的第 1 脚 OS 写 RL=100 kΩ，第 2 脚 OD 为 +24 V，第 5 脚是 SS，接 GND。第 13 脚功能写成 Over flow gate，中间分开，标准电压 +12 V。第 23 脚 TG 写 Same pulse as P2V。S11071 的第 5 脚是 Vret，标准电压 +1 V，OS 写 RL=2.2 kΩ，OD 为 +15 V。注意事项写 Handle these sensors with bare hands or wearing cotton gloves。临时窗口型 S10420-1106NU-01/-1106NW-01 另写 Never touch or wipe the photosensitive surface。手册末尾的驱动电路 C11287-01 和 C11288-01 写 sold separately，内置 16-bit A/D，接口 USB 2.0。C11287-01 写 USB bus power，并写可用于 S10420-01 series、S16010 series 和 S14650 series。C11288-01 写 DC+5 V，并写可用于 S11071 series 和 S14660 series。这两只驱动电路没有当作传感器加入。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10420-1006-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1006-01.html", [
          "产品页没有写发布日期。二级标题写成 Improved etaloning characteristics, Low noise type，没有 S10420-1004-01 标题里的 available。正文仍写 Low noise type is available，量子效率仍写成 quantμm。特性仍是 6.5 uV/e-。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 14.336 x 0.896 mm，有效像素 1024 x 64 pixels。行频典型 189 行/秒，最高 341 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 6 e- rms。冷却 Non-cooled，封装 Ceramic，没有窗口一行。专用驱动电路 C11287-01。手册仍是 KMPD1120E14。",
          "手册总像素 1044 × 70，有效像素 1024 × 64，感光区 14.336 × 0.896。垂直寄存器电容典型 600 pF。水平寄存器电容与 -1004 同列，典型 80 pF。时序图垂直方向按 -1006 写成 70←64 + 6 (bevel)，水平方向写到 1044。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10420-1104-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1104-01.html", [
          "产品页没有写发布日期。二级标题与 S10420-1006-01 相同，写 Low noise type。正文仍写 quantμm 和 Low noise type is available。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 28.672 x 0.224 mm，有效像素 2048 x 16 pixels。行频典型 116 行/秒，最高 227 行/秒。暗电流、读出噪声、冷却、封装和驱动电路与 S10420-1004-01 相同。手册仍是 KMPD1120E14。",
          "手册总像素 2068 × 22，有效像素 2048 × 16，感光区 28.672 × 0.224。垂直寄存器电容典型 400 pF。水平寄存器电容典型 160 pF，符号写成 CP3H、CP4H。转移栅电容典型 60 pF。时序图垂直方向按 -1104 写成 22←16 + 6 (bevel)，水平方向写到 2068。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10420-1106-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1106-01.html", [
          "产品页没有写发布日期。二级标题仍写 Low noise type。正文仍写 quantμm。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 28.672 x 0.896 mm，有效像素 2048 x 64 pixels。行频典型 106 行/秒，最高 200 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 6 e- rms。封装 Ceramic，没有窗口一行。专用驱动电路 C11287-01。手册仍是 KMPD1120E14。",
          "手册总像素 2068 × 70，感光区 28.672 × 0.896。窗口写 Quartz glass (resin sealing)。垂直寄存器电容典型 1200 pF。水平寄存器电容典型 160 pF。时序图按 -1106 写成 70←64 + 6 (bevel) 和 2068。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10420-1106NU-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1106NU-01.html", [
          "产品页没有写发布日期。二级标题写 Improved etaloning characteristics, Low noise type, High UV resistance。正文同时写出 high-speed type (S11071 series) 和 low noise type (S10420-01 series)。量子效率写成 high quantum eﬃciency，ffi 连成一个字符。特性在 6.5 uV/e- 和 14 × 14 μm 之外另写 High UV resistance。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸、像素和行频与 S10420-1106-01 相同，典型 106 行/秒，最高 200 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 6 e- rms。窗口写成 None (temporary window)。封装 Ceramic。专用驱动电路写成 C11287，没有 -01。手册选型表仍把这一只放在 C11287-01 一列。",
          "手册窗口写 None，注记 *2 写 Temporary window (borosilicate glass)。总像素 2068 × 70，感光区 28.672 × 0.896。外形图用 KMPDA0627EB，图上标 0.896，没有玻璃厚度注记。注意事项写不要触摸或擦拭感光面。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S10420-1106NW-01", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S10420-1106NW-01.html", [
          "产品页没有写发布日期。二级标题、正文和特性与 S10420-1106NU-01 相同，量子效率仍写成 quantum eﬃciency，并写 High UV resistance。规格表光谱响应改成 120 to 1100 nm。",
          "规格表图像尺寸 28.672 x 0.896 mm，有效像素 2048 x 64 pixels。行频典型 106 行/秒，最高 200 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 6 e- rms。窗口 None (temporary window)，封装 Ceramic。专用驱动电路同样写成 C11287。手册仍是 KMPD1120E14。",
          "手册光谱响应一行把 120 to 1100 nm 单列给这一只。窗口仍写 None，注记 *2 仍写 borosilicate glass。外形图与 S10420-1106NU-01 共用 KMPDA0627EB。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
  {
    id: "s11071",
    date: "",
    companyId: "hamamatsu",
    category: "product",
    title: "S11071：滨松高速背照式 CCD",
    summary:
      "S11071-1004、S11071-1006、S11071-1104 与 S11071-1106 的产品页写背照式 CCD，光谱响应 200 到 1100 nm。二级标题写 High-speed type。规格表类型仍写 Low etaloning type。四页都没有写发布日期，冷却都是 Non-cooled，封装都是 Ceramic，规格表都没有窗口一行。手册与 S10420-01 共用，KMPD1120E14，页脚写 Feb. 2023，并写资料截至 February 2023，记为约 2023 年 2 月。",
    applications: ["spectral", "scientific"],
    technologies: ["spectral"],
    models: [
      {
        ...page("S11071-1004", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11071-1004.html", [
          "产品页没有写发布日期。页面标题写 Back-thinned type CCD area image sensor。一级标题只写 S11071-1004。二级标题写 Improved etaloning characteristics, High-speed type。正文写 The S11071-1004 offer，offer 没有 s，量子效率写成 high quantμm efficiency。特性写节点灵敏度 8 uV/e-，u 不是 μ。规格表类型仍分成 Binning type 和 Low etaloning type，没有写 High-speed type。",
          "规格表图像尺寸 14.336 x 0.224 mm，有效像素 1024 x 16 pixels，像元 14 x 14 μm。光谱响应 200 to 1100 nm。行频典型 1777 行/秒，最高 6693 行/秒。暗电流典型 50 e-/pixel/s。读出噪声典型 23 e- rms。冷却 Non-cooled。封装 Ceramic。规格表没有窗口一行。专用驱动电路 C11288-01。测量条件与 S10420 相同，Frame rate 的 Frame 大写。手册文件名仍是 s11071-1004_etc_kmpd1120e.pdf，产品页标 463 KB。",
          "手册与 S10420-01 共用，目录号 KMPD1120E14，页脚写 Feb. 2023 DN，资料截至 February 2023，记为约 2023 年 2 月。这一组写成 high-speed type，读出速度最大 10 MHz，输出电路 Two-stage MOSFET source follower。窗口写 Quartz glass (resin sealing)。注记 *1 的临时窗口例子 S11071-1106N 没有加入。节点灵敏度手册写 8 μV/e-。满阱水平方向最小 150 ke-、典型 200 ke-。转换效率典型 8 µV/e-。读出噪声典型 23 e- rms、最大 28 e- rms，注记 *10 写在 25 ℃、fc=2 MHz 测量。动态范围 line binning 最小 5350、典型 8700。功耗典型 75 mW。输出阻抗典型 0.3 kΩ。直流输出电平典型 8 V。外接负载电阻典型 2.2 kΩ。引脚第 5 脚是 Vret，标准电压 +1 V。",
          "选型表总像素 1044 × 22，有效像素 1024 × 16，感光区 14.336 × 0.224。垂直寄存器电容典型 200 pF。水平寄存器电容典型 80 pF。时序图垂直方向按 -1004 写成 22←16 + 6 (bevel)，水平方向写到 1044。P1V 脉冲宽度最小 1 µs、典型 8 µs。外形图与带石英窗的 S10420 共用 KMPDA0223EF。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S11071-1006", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11071-1006.html", [
          "产品页没有写发布日期。正文仍写 The S11071-1006 offer，量子效率仍写成 quantμm。特性仍是 8 uV/e-。规格表类型仍写 Low etaloning type。光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 14.336 x 0.896 mm，有效像素 1024 x 64 pixels。行频典型 751 行/秒，最高 4074 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 23 e- rms。封装 Ceramic，没有窗口一行。专用驱动电路 C11288-01。手册仍是 KMPD1120E14。",
          "手册总像素 1044 × 70，有效像素 1024 × 64，感光区 14.336 × 0.896。垂直寄存器电容典型 600 pF。水平寄存器电容典型 80 pF。时序图按 -1006 写成 70←64 + 6 (bevel) 和 1044。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S11071-1104", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11071-1104.html", [
          "产品页没有写发布日期。正文仍写 offer 和 quantμm。规格表光谱响应 200 to 1100 nm，类型仍写 Low etaloning type。",
          "规格表图像尺寸 28.672 x 0.224 mm，有效像素 2048 x 16 pixels。行频典型 1303 行/秒，最高 3971 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 23 e- rms。专用驱动电路 C11288-01。手册仍是 KMPD1120E14。",
          "手册总像素 2068 × 22，有效像素 2048 × 16，感光区 28.672 × 0.224。垂直寄存器电容典型 400 pF。水平寄存器电容典型 160 pF。转移栅电容典型 60 pF。时序图按 -1104 写成 22←16 + 6 (bevel) 和 2068。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
      {
        ...page("S11071-1106", "", "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ccd-cmos-nmos-image-sensor/line-sensor/for-spectrophotometry/S11071-1106.html", [
          "产品页没有写发布日期。正文仍写 The S11071-1106 offer 和 quantμm。规格表光谱响应 200 to 1100 nm。",
          "规格表图像尺寸 28.672 x 0.896 mm，有效像素 2048 x 64 pixels。行频典型 651 行/秒，最高 2875 行/秒。暗电流典型 50 e-/pixel/s，读出噪声典型 23 e- rms。冷却 Non-cooled，封装 Ceramic，没有窗口一行。专用驱动电路 C11288-01。",
          "手册总像素 2068 × 70，感光区 28.672 × 0.896。窗口写 Quartz glass (resin sealing)。垂直寄存器电容典型 1200 pF。水平寄存器电容典型 160 pF。时序图按 -1106 写成 70←64 + 6 (bevel) 和 2068。",
        ], "uv"),
        bands: ["uv", "nir"],
      },
    ],
  },
];
