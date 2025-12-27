import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-blog/',
  title: 'Semitian 的技术博客',
  description: '记录前端 / WebRTC / Three.js 学习与实践',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/guide/first-post' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '博客文章',
          items: [
            { text: '我的第一篇博客', link: '/guide/first-post' }
          ]
        }
      ]
    }
  }
})
