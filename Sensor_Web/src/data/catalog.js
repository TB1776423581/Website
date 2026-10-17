import { products } from "./products-data.js";
export const applications = [
  {
    id: "mobile",
    name: "手机",
    description: "用于智能手机摄像头的图像传感器，包括主摄、长焦和前置。",
  },
  {
    id: "auto",
    name: "汽车",
    description: "用于前视辅助驾驶、电子后视镜、舱内监测和自动驾驶的图像传感器。",
  },
  {
    id: "machine",
    name: "机器视觉",
    description: "用于工厂检测、自动化、交通和航测的图像传感器。",
  },
  {
    id: "scientific",
    name: "医疗与科学",
    description: "用于医疗成像、天文、显微和科学仪器的图像传感器。",
  },
  {
    id: "consumer",
    name: "消费电子",
    description: "用于可穿戴、眼动追踪、常开相机等消费设备的图像传感器。",
  },
  {
    id: "depth",
    name: "3D探测",
    description: "输出深度或三维图像的传感器，包括飞行时间、分区测距和激光雷达。",
  },
  {
    id: "spectral",
    name: "光谱探测",
    description: "按波段分辨光线的多光谱、高光谱图像传感器，以及覆盖可见光到短波红外的光谱成像传感器。",
  },
];

export const technologies = [
  {
    id: "stacked",
    name: "堆叠式",
    description: "像素与电路分层堆叠，用来提高画质、速度或缩小芯片。",
  },
  {
    id: "global",
    name: "全局快门",
    description: "所有像素同时曝光，适合运动物体和机器视觉。",
  },
  {
    id: "hdr",
    name: "高动态范围",
    description: "同一场景里同时保留高光和暗部。",
  },
  {
    id: "lowlight",
    name: "低照度",
    description: "面向暗光、夜景或近红外的灵敏度。",
  },
  {
    id: "event",
    name: "事件相机",
    description: "按像素亮度变化输出事件，而不是按固定帧率输出整幅图像。",
  },
  {
    id: "highres",
    name: "高分辨率",
    description: "以超高像素数作为主要特征的图像传感器。",
  },
  {
    id: "tof",
    name: "3D探测",
    description: "用飞行时间或分区深度测量物体远近，并形成深度图。",
  },
  {
    id: "spectral",
    name: "光谱探测",
    description: "在像素上区分不同波长，用于多光谱、高光谱或短波红外成像。",
  },
];

export const categories = {
  product: "新产品",
  roadmap: "路线",
  partnership: "合作",
  market: "产能与市场",
};

export const companies = [
  {
    id: "sony",
    name: "索尼半导体",
    nameEn: "Sony Semiconductor Solutions",
    region: "海外",
    hq: "日本",
    summary:
      "手机图像传感器品牌为 LYTIA。公司在产品页上的表述是：释放智能手机用户的创造力。",
    roadmap:
      "LYTIA L910 的公开资料写明，量产出货时间为 2026 年夏季。",
  },
  {
    id: "samsung",
    name: "三星半导体",
    nameEn: "Samsung Semiconductor",
    region: "海外",
    hq: "韩国",
    summary: "手机图像传感器品牌为 ISOCELL，覆盖旗舰机的高像素主摄。",
  },
  {
    id: "omnivision",
    name: "豪威",
    nameEn: "OMNIVISION",
    region: "国内",
    hq: "上海",
    summary:
      "豪威科技的图像传感器品牌是 OMNIVISION，产品覆盖手机与汽车摄像头。",
  },
  {
    id: "onsemi",
    name: "安森美",
    nameEn: "onsemi",
    region: "海外",
    hq: "美国",
    summary: "车载图像传感器产品线包括 Hyperlux，面向辅助驾驶和舱内视觉。",
  },
  {
    id: "smartsens",
    name: "思特威",
    nameEn: "SmartSens",
    region: "国内",
    hq: "上海",
    summary: "设计 CMOS 图像传感器，手机产品线为 XS 系列。",
  },
  {
    id: "galaxycore",
    name: "格科微",
    nameEn: "GalaxyCore",
    region: "国内",
    hq: "上海",
    summary: "设计手机 CMOS 图像传感器，公开产品页按像素档列出型号和规格。",
  },
  {
    id: "gpixel",
    name: "长光辰芯",
    nameEn: "Gpixel",
    region: "国内",
    hq: "长春",
    summary:
      "产品包括全局快门 GMAX、高速全局快门 GSPRINT，以及科学成像 GSENSE。",
  },
  {
    id: "st",
    name: "意法半导体",
    nameEn: "STMicroelectronics",
    region: "海外",
    hq: "瑞士",
    summary: "车载图像传感器包含面向驾驶员监测的全局快门产品。",
  },
  {
    id: "prophesee",
    name: "Prophesee",
    nameEn: "Prophesee",
    region: "海外",
    hq: "法国巴黎",
    summary: "做事件视觉传感器。像素在亮度变化时输出事件，而不是固定帧率的整幅图像。",
  },
  {
    id: "infineon",
    name: "英飞凌",
    nameEn: "Infineon",
    region: "海外",
    hq: "德国",
    summary: "REAL3 系列包含用于消费和工业的飞行时间三维图像传感器。",
  },
  {
    id: "melexis",
    name: "迈来芯",
    nameEn: "Melexis",
    region: "海外",
    hq: "比利时",
    summary: "车载和工业用间接飞行时间图像传感器，可输出 VGA 深度图。",
  },
  {
    id: "spectricity",
    name: "Spectricity",
    nameEn: "Spectricity",
    region: "海外",
    hq: "比利时",
    summary: "做面向移动设备的快照式多光谱图像传感器，由 imec 分拆而来。",
  },
  {
    id: "imec",
    name: "imec",
    nameEn: "imec",
    region: "海外",
    hq: "比利时",
    summary: "在 CMOS 图像传感器上单片集成马赛克滤光片，做成快照式高光谱传感器。",
  },
  {
    id: "hesai",
    name: "禾赛",
    nameEn: "Hesai",
    region: "国内",
    hq: "上海",
    summary: "做车载和机器人激光雷达，产品页覆盖长距前视、补盲和 360° 扫描。",
  },
  {
    id: "robosense",
    name: "速腾聚创",
    nameEn: "RoboSense",
    region: "国内",
    hq: "深圳",
    summary: "做 MEMS、固态补盲和机械式激光雷达，用于汽车和机器人。",
  },
  {
    id: "ouster",
    name: "Ouster",
    nameEn: "Ouster",
    region: "海外",
    hq: "美国",
    summary: "做数字激光雷达。产品页列出 OS0、OS1、OS2，以及 OSDome 和 OS1 Max。",
  },
  {
    id: "livox",
    name: "览沃",
    nameEn: "Livox",
    region: "国内",
    hq: "中国",
    summary: "做混合固态激光雷达，用于低速机器人、测绘和车载远距离探测。",
  },
  {
    id: "benewake",
    name: "北醒",
    nameEn: "Benewake",
    region: "国内",
    hq: "北京",
    summary: "做单点测距模组和三维激光雷达，产品页覆盖近距到数百米。",
  },
  {
    id: "hokuyo",
    name: "北阳",
    nameEn: "Hokuyo Automatic",
    region: "海外",
    hq: "日本",
    summary: "做扫描式激光测距仪，产品列表包括二维扫描和三维激光雷达。",
  },
  {
    id: "seyond",
    name: "图达通",
    nameEn: "Seyond",
    region: "海外",
    hq: "森尼韦尔",
    summary: "做图像级激光雷达。产品页列出 Falcon、Robin 和 Hummingbird。",
  },
  {
    id: "velodyne",
    name: "Velodyne",
    nameEn: "Velodyne Lidar",
    region: "海外",
    hq: "美国",
    summary: "机械式激光雷达。现行规格页由 Ouster 托管，型号仍以 VLP 和 VLS 列出。",
  },
  {
    id: "sick",
    name: "SICK",
    nameEn: "SICK",
    region: "海外",
    hq: "德国",
    summary: "做多层和二维激光雷达，产品手册列出 multiScan、MRS 和 picoScan。",
  },
  {
    id: "analog",
    name: "亚德诺",
    nameEn: "Analog Devices",
    region: "海外",
    hq: "美国",
    summary: "做间接飞行时间深度模组，用于机器视觉和机器人。",
  },
  {
    id: "leishen",
    name: "镭神智能",
    nameEn: "LSLiDAR",
    region: "国内",
    hq: "深圳",
    summary: "做 1550 nm 与 905 nm 激光雷达。2024 年 10 月的产品手册列出图像级、补盲和机械式型号。",
  },
];

export { products };

export function companyById(id) {
  return companies.find((company) => company.id === id);
}

export function applicationById(id) {
  return applications.find((item) => item.id === id);
}

export function technologyById(id) {
  return technologies.find((item) => item.id === id);
}

export function formatDate(date) {
  if (!date) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-");
    return `${year}.${month}.${day}`;
  }
  if (/^\d{4}-\d{2}$/.test(date)) {
    const [year, month] = date.split("-");
    return `约 ${year} 年${Number(month)} 月`;
  }
  if (/^\d{4}$/.test(date)) return `约 ${date} 年`;
  return date;
}

export function productById(id) {
  return products.find((item) => item.id === id);
}

export function tagTechnologies(item) {
  const names = new Set(item.applications.map((id) => applicationById(id)?.name));
  return item.technologies.filter((id) => !names.has(technologyById(id)?.name));
}

export const developments = products;

export function sortedDevelopments(list = products) {
  return [...list].sort((a, b) => {
    const byDate = (b.date ?? "").localeCompare(a.date ?? "");
    if (byDate) return byDate;
    return a.title.localeCompare(b.title, "zh");
  });
}

export function developmentsForCompany(companyId) {
  return sortedDevelopments(products.filter((item) => item.companyId === companyId));
}

export function developmentsForApplication(applicationId) {
  return sortedDevelopments(
    products.filter((item) => item.applications.includes(applicationId)),
  );
}

export function developmentsForTechnology(technologyId) {
  return sortedDevelopments(
    products.filter((item) => item.technologies.includes(technologyId)),
  );
}
