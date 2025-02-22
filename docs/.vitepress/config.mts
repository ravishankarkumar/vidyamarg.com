import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vidya Marg",
  description: "A companion site for Vidya Marg youtube channel",
  head: [['link', { rel: 'icon', href: '/logos/maroon-bg-logo-128.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Physics', link: '/jee-neet/physics' }
    ],

    sidebar: {
      "jee-neet/physics": [
        {
          text: 'Physics lessons',
          items: [
            // { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@VidyaMargbyRaviShankar-w9u' }
    ]
  }
})
