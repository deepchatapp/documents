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
      // 核心功能入口
      { text: '核心功能', link: '/guide/core-features/' },
      // 高级功能入口
      { text: '高级功能', link: '/guide/advanced-features/' },
      // 模型集成入口
      { text: '模型集成', link: '/guide/model-integration/' },
      // 使用技巧入口
      { text: '使用技巧', link: '/guide/tips/' },
      // 故障排除入口
      { text: '故障排除', link: '/guide/troubleshooting/' },
      // 更新与维护入口
      { text: '更新与维护', link: '/guide/maintenance/' },
      // 社区支持入口
      { text: '社区支持', link: '/guide/community/' },
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
      '/guide/core-features/': [
        {
          text: '核心功能',
          children: [
            '/guide/core-features/',
            '/guide/core-features/conversation',
            '/guide/core-features/model-config',
            '/guide/core-features/prompt-engineering',
            '/guide/core-features/history',
            '/guide/core-features/export',
          ]
        }
      ],
      '/guide/advanced-features/': [
        {
          text: '高级功能',
          children: [
            '/guide/advanced-features/',
            '/guide/advanced-features/custom-settings',
            '/guide/advanced-features/shortcuts',
            '/guide/advanced-features/themes',
            '/guide/advanced-features/data-management',
            '/guide/advanced-features/languages',
          ]
        }
      ],
      '/guide/model-integration/': [
        {
          text: '模型集成',
          children: [
            '/guide/model-integration/',
            '/guide/model-integration/supported-models',
            '/guide/model-integration/config-guide',
            '/guide/model-integration/api-keys',
            '/guide/model-integration/performance',
          ]
        }
      ],
      '/guide/tips/': [
        {
          text: '使用技巧',
          children: [
            '/guide/tips/',
            '/guide/tips/best-practices',
            '/guide/tips/faq',
            '/guide/tips/optimization',
            '/guide/tips/security',
          ]
        }
      ],
      '/guide/troubleshooting/': [
        {
          text: '故障排除',
          children: [
            '/guide/troubleshooting/',
            '/guide/troubleshooting/common-errors',
            '/guide/troubleshooting/solutions',
            '/guide/troubleshooting/logs',
          ]
        }
      ],
      '/guide/maintenance/': [
        {
          text: '更新与维护',
          children: [
            '/guide/maintenance/',
            '/guide/maintenance/versions',
            '/guide/maintenance/backup',
            '/guide/maintenance/system',
            '/guide/maintenance/security-updates',
          ]
        }
      ],
      '/guide/community/': [
        {
          text: '社区支持',
          children: [
            '/guide/community/',
            '/guide/community/join',
            '/guide/community/contributing',
            '/guide/community/issue-report',
            '/guide/community/resources',
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