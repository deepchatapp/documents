module.exports = {
  title: 'DeepChat',
  description: 'DeepChat官方文档',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'https://deepchat.thinkinai.xyz/logo.png' }]
  ],
  themeConfig: {
    logo: 'https://deepchat.thinkinai.xyz/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started/' },
      { text: '使用指南', link: '/guide/user-guide/' },
      { text: '官网', link: 'https://deepchat.thinkinai.xyz/' }
    ],
    sidebar: {
      '/guide/getting-started/': [
        {
          title: '快速开始',
          collapsable: false,
          children: [
            '',
            'installation',
            'initial-setup',
            'first-conversation',
          ]
        }
      ],
      '/guide/user-guide/': [
        {
          title: '使用指南',
          collapsable: false,
          children: [
            '',
            'model-configuration',
            'document-processing',
            'artifacts',
            'mcp',
            'knowledge-base',
          ]
        }
      ]
    }
  }
} 