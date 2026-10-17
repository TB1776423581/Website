import { defineConfig } from "astro/config";

const onGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: "https://tb1776423581.github.io",
  base: onGitHubPages ? "/Website" : "/",
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
});
