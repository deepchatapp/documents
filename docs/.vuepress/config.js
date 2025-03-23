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
      { text: '官网', link: 'https://deepchat.thinkinai.xyz/' }
    ],
    sidebar: [
      {
        title: 'DeepChat介绍',
        path: '/',
        collapsable: true,
        sidebarDepth: 0
      },
      {
        title: '快速开始',
        path: '/guide/getting-started/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/guide/getting-started/',
          '/guide/getting-started/installation',
          '/guide/getting-started/initial-setup',
          '/guide/getting-started/first-conversation',
        ]
      },
      {
        title: '使用指南',
        path: '/guide/user-guide/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/guide/user-guide/',
          '/guide/user-guide/model-configuration',
          '/guide/user-guide/document-processing',
          '/guide/user-guide/artifacts',
          '/guide/user-guide/mcp',
          '/guide/user-guide/knowledge-base',
        ]
      }
    ],
    // 平滑滚动
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: '上次更新',
    // 显示编辑链接
    editLinks: false,
    // 默认展开所有侧边栏组
    displayAllHeaders: false,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10
  }
} 