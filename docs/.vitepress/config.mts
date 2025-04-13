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
          text: 'Introduction to Physics', link: 'jee-neet/physics/getting-started'
        },
        {
          text: 'Physical Quantities & SI Units', link: 'jee-neet/physics/physical-quantities-and-si-units'
        },
        {
          text: 'Units and dimensions', link: 'jee-neet/physics/units-and-dimensions'
        },

        { text: 'Maths Basics for Physics', link: 'jee-neet/physics/maths-basics-for-physics' },
        {
          text: 'Mechanics', link: 'jee-neet/physics'
        },
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@VidyaMargbyRaviShankar-w9u' }
    ]
  }
})
