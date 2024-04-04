import { defineConfig } from "vitepress";
import nav from "./settings/nav.mts";
import sidebar from "./settings/sidebar.mts";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KIRINO",
  description: "在线文档",
  srcDir: "./src",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/tongnai" }],
    footer: {
      message: "版权所有",
      copyright: "Copyright © 2024-present KIRINO",
    },
  },
});
