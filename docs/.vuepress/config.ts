import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DeepChat',
  description: 'DeepChat官方文档',
  // 添加base路径配置，对应GitHub Pages项目站点的子路径
  base: '/documents/',
  head: [
    ['link', { rel: 'icon', href: 'https://deepchat.thinkinai.xyz/logo.png' }]
  ],
  // 指定vite bundler
  bundler: viteBundler(),
  // 使用reco主题
  theme: recoTheme({
    logo: 'https://deepchat.thinkinai.xyz/logo.png',
    author: 'DeepChat',
    authorAvatar: 'https://deepchat.thinkinai.xyz/logo.png',
    navbar: [
      // DeepChat介绍入口
      { text: 'DeepChat介绍', link: '/guide/introduction/' },
      // 快速开始入口
      { text: '快速开始', link: '/guide/getting-started/' },
      // 使用指南入口
      { text: '使用指南', link: '/guide/user-guide/' },
      // 官网入口 
      { text: '官网', link: 'https://deepchat.thinkinai.xyz/' } 
    ],
    series: {
      '/guide/introduction/': [
        {
          text: 'DeepChat介绍',
          children: [
            '/guide/introduction/',
            '/guide/introduction/features',
            '/guide/introduction/architecture',
          ]
        }
      ],
      '/guide/getting-started/': [
        {
          text: '快速开始',
          children: [
            '/guide/getting-started/',
            '/guide/getting-started/installation',
            '/guide/getting-started/initial-setup',
            '/guide/getting-started/first-conversation',
          ]
        }
      ],
      '/guide/user-guide/': [
        {
          text: '使用指南',
          children: [
            '/guide/user-guide/',
            '/guide/user-guide/model-configuration',
            '/guide/user-guide/document-processing',
            '/guide/user-guide/artifacts',
            '/guide/user-guide/mcp',
            '/guide/user-guide/knowledge-base',
          ]
        }
      ]
    },
    // 最后更新时间
    lastUpdated: true,
    // 自动设置系列
    autoSetSeries: true,
  })
}) 