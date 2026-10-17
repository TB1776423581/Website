export function sitePath(path = "/") {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
