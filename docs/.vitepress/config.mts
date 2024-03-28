import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KIRINO",
  description: "在线文档",
  srcDir: './src',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目难点', link: '/project' },
      { text: 'VUE', link: '/vue' },
      { text: 'JS', link: '/js' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '项目难点', link: '/project' },
          { text: 'VUE', link: 'VUE' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tongnai' }
    ],
    footer: {
      message: '版权所有',
      copyright: 'Copyright © 2024-present KIRINO'
    }
  }
})
