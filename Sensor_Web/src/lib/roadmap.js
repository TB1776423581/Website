import { companies, products } from "../data/catalog.js";

const colors = ["#a33b2b", "#1b1916", "#2f6f5e", "#8a5a2a", "#3a4d78", "#6b3a55", "#4d6740"];

export const roadmaps = [
  { id: "uv", name: "紫外", kind: "spectral", band: "uv" },
  { id: "nir", name: "近红外", kind: "spectral", band: "nir" },
  { id: "swir", name: "短波", kind: "spectral", band: "swir" },
  { id: "mwir", name: "中波", kind: "spectral", band: "mwir" },
  { id: "lwir", name: "长波", kind: "spectral", band: "lwir" },
  { id: "broadband", name: "通谱", kind: "spectral", band: "broadband" },
  { id: "itof", name: "iTOF", kind: "distance", depth: "itof" },
  { id: "dtof", name: "dTOF", kind: "distance", depth: "dtof" },
];

function textOf(product, model) {
  return [product.title, product.summary, ...(model.points || [])].join("\n");
}

function companyName(product) {
  return companies.find((company) => company.id === product.companyId)?.name || "未标明公司";
}

function toNm(value, unit) {
  const number = Number(value);
  return /μm|um|微米/i.test(unit) ? number * 1000 : number;
}

function toMeters(value, unit) {
  const number = Number(value);
  if (/mm|毫米/.test(unit)) return number / 1000;
  if (/cm|厘米/.test(unit)) return number / 100;
  return number;
}

export function wavelengthRangeNm(text) {
  const ranges = [];
  const pattern = /(\d+(?:\.\d+)?)\s*(?:到|至|–|—|-|~|－)\s*(\d+(?:\.\d+)?)\s*(nm|μm|um|微米)/gi;
  let match = pattern.exec(text);
  while (match) {
    let start = toNm(match[1], match[3]);
    let end = toNm(match[2], match[3]);
    if (start > end) [start, end] = [end, start];
    if (end > 80 && end < 30000) ranges.push([start, end]);
    match = pattern.exec(text);
  }
  if (!ranges.length) return null;
  ranges.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  return { min: ranges[0][0], max: ranges[0][1] };
}

export function resolutionPixels(text) {
  const counts = [];
  const arrays = /(\d{2,5})\s*[×xX*]\s*(\d{1,5})(?:\s*(μm|um|微米))?/g;
  let match = arrays.exec(text);
  while (match) {
    const width = Number(match[1]);
    const height = Number(match[2]);
    const pixelSize = Boolean(match[3]);
    if (!pixelSize && ((width >= 128 && height === 1) || (width >= 64 && height >= 64))) {
      counts.push(width * height);
    }
    match = arrays.exec(text);
  }
  const megapixels = text.match(/(\d+(?:\.\d+)?)\s*万像素/);
  if (megapixels) counts.push(Number(megapixels[1]) * 10000);
  if (!counts.length) return null;
  return Math.max(...counts);
}

export function distanceRangeM(text) {
  const span = text.match(
    /(\d+(?:\.\d+)?)\s*(mm|cm|m|毫米|厘米|米)\s*(?:到|至)\s*(\d+(?:\.\d+)?)\s*(mm|cm|m|毫米|厘米|米)/,
  );
  if (span) {
    const min = toMeters(span[1], span[2]);
    const max = toMeters(span[3], span[4]);
    return min < max ? { min, max } : { min: max, max: min };
  }
  const farthest = text.match(/(?:最远|量程)(?:约|大约)?\s*(\d+(?:\.\d+)?)\s*(mm|cm|m|毫米|厘米|米)/);
  if (farthest) return { min: 0, max: toMeters(farthest[1], farthest[2]) };
  return null;
}

function depthKind(product, model) {
  const text = textOf(product, model);
  if (/直接飞行时间|dToF|dTOF/i.test(text)) return "dtof";
  if (/间接飞行时间|iToF|iTOF/i.test(text)) return "itof";
  return "";
}

function spectralRows() {
  return products
    .filter((product) => product.applications.includes("spectral"))
    .flatMap((product) =>
      product.models.map((model) => {
        const text = textOf(product, model);
        const wave = wavelengthRangeNm(text);
        const pixels = resolutionPixels(text);
        return {
          product,
          model,
          company: companyName(product),
          band: model.band || "",
          wave,
          pixels,
          broadband: Boolean(wave && wave.min <= 450 && wave.max >= 1000),
        };
      }),
    );
}

export function broadbandModels() {
  return spectralRows().filter((row) => row.broadband);
}

export function rowsForRoadmap(id) {
  const roadmap = roadmaps.find((item) => item.id === id);
  if (!roadmap) return [];
  if (roadmap.kind === "spectral") {
    return spectralRows().filter((row) => {
      if (!row.wave || !row.pixels) return false;
      return roadmap.band === "broadband" ? row.broadband : row.band === roadmap.band;
    });
  }
  return products
    .filter((product) => product.applications.includes("depth"))
    .flatMap((product) =>
      product.models.map((model) => {
        const text = textOf(product, model);
        return {
          product,
          model,
          company: companyName(product),
          kind: depthKind(product, model),
          distance: distanceRangeM(text),
        };
      }),
    )
    .filter((row) => row.kind === roadmap.depth && row.distance);
}

export function colorFor(name) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return colors[hash % colors.length];
}

export function formatPixels(pixels) {
  if (pixels >= 10000) return `${(pixels / 10000).toFixed(pixels >= 100000 ? 0 : 1)} 万像素`;
  return `${pixels} 像素`;
}

export function formatNm(nm) {
  if (nm >= 1000) return `${(nm / 1000).toFixed(nm >= 10000 ? 0 : 2)} μm`;
  return `${Math.round(nm)} nm`;
}

export function formatMeters(meters) {
  if (meters >= 1) return `${Number(meters.toFixed(meters >= 10 ? 0 : 1))} m`;
  if (meters >= 0.01) return `${Math.round(meters * 100)} cm`;
  return `${Math.round(meters * 1000)} mm`;
}
