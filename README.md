# DeepChat 文档

这是 DeepChat 的官方文档项目，使用 VuePress 构建。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

## 构建

```bash
# 构建静态文件
npm run docs:build
```

## 目录结构

```
docs/
├── .vuepress/         # VuePress配置文件
│   ├── public/        # 静态资源
│   └── config.js      # 配置文件
├── guide/             # 指南
│   ├── getting-started/ # 快速开始
│   └── user-guide/    # 使用指南
└── README.md          # 首页
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request
