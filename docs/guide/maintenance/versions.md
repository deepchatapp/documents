# 版本更新

本页面将指导您如何获取、安装和管理 DeepChat 的版本更新，以确保您始终能够使用最新功能和安全修复。

## 版本编号系统

DeepChat 使用标准的语义化版本编号系统（Semantic Versioning），由三部分组成：

```
主版本号.次版本号.修订号
```

例如：`2.4.1`

- **主版本号**：表示不兼容的 API 变更（可能需要迁移数据或调整配置）
- **次版本号**：表示向后兼容的功能新增
- **修订号**：表示向后兼容的问题修复

特殊情况下，可能会看到带有后缀的版本号：
- `2.4.1-beta`：测试版，包含实验性功能
- `2.4.1-rc.2`：发布候选版（Release Candidate），即将正式发布的预览版

## 检查更新

### 自动检查更新

默认情况下，DeepChat 会定期检查更新。您可以通过以下步骤查看和修改更新设置：

1. 打开 DeepChat
2. 导航至 `设置 → 高级 → 更新设置`
3. 选择自动检查更新的频率：
   - 启动时检查
   - 每日检查
   - 每周检查
   - 每月检查
   - 从不检查（不推荐）

### 手动检查更新

要立即检查是否有可用更新：

1. 打开 DeepChat
2. 导航至 `设置 → 关于 → 检查更新`
3. 应用将连接到更新服务器并检查新版本

## 安装更新

### 桌面应用更新

当有新版本可用时，DeepChat 桌面应用会显示通知。安装更新的步骤如下：

1. 点击通知中的 `查看更新` 按钮
2. 查看版本说明以了解新功能和变更
3. 点击 `立即更新` 按钮
4. 应用将下载更新包
5. 根据提示保存工作并重启应用
6. 更新完成后，应用将自动重启

也可以手动下载并安装更新：

1. 访问 [DeepChat 官方下载页面](https://deepchat.thinkinai.xyz/download)
2. 选择适合您操作系统的安装包
3. 下载并运行安装程序
4. 按照安装向导的指示完成更新

### 网页版更新

DeepChat 网页版会自动更新，无需用户干预。只需确保：

1. 定期刷新浏览器页面
2. 清除浏览器缓存（如长时间未使用）
   - Chrome/Edge: `Ctrl+Shift+Delete`
   - Firefox: `Ctrl+Shift+Delete`
   - Safari: `Command+Option+E`

### 移动应用更新

DeepChat 移动应用通过各自的应用商店更新：

1. **Android**：
   - 打开 Google Play 商店
   - 搜索 "DeepChat" 或前往 "我的应用和游戏"
   - 如有可用更新，点击 "更新"

2. **iOS**：
   - 打开 App Store
   - 点击个人资料图标
   - 下拉刷新可用更新列表
   - 如列出 DeepChat，点击 "更新"

## 版本回退

在某些情况下，您可能需要回退到之前的版本：

### 桌面版回退方法

1. 访问 [DeepChat 版本历史页面](https://deepchat.thinkinai.xyz/releases)
2. 找到并下载您希望安装的旧版本
3. 卸载当前版本（建议先备份数据）
4. 安装下载的旧版本
5. 如有需要，恢复之前的备份

> **注意**：回退到旧版本可能会引入已修复的问题或安全漏洞，通常不推荐这样做。

## 更新数据管理

### 数据迁移

主版本更新可能涉及数据格式变更。DeepChat 会处理大多数数据迁移，但您应该：

1. 在重大更新前创建完整备份
2. 按照更新提示完成数据迁移流程
3. 更新后验证所有数据是否正确迁移

### 故障排除

如果更新过程中遇到问题：

1. 查看 [常见错误](../troubleshooting/common-errors.md) 了解已知更新问题
2. 检查更新日志文件（位于与应用日志相同的目录）
3. 尝试清除应用缓存后重新安装
4. 从备份恢复，然后重试更新

## 版本历史和变更日志

### 查看变更日志

了解各版本的详细变更：

1. 应用内查看：`设置 → 关于 → 变更日志`
2. 访问 [在线变更日志](https://deepchat.thinkinai.xyz/changelog)

### 主要版本里程碑

以下是 DeepChat 开发历程中的一些主要里程碑：

| 版本 | 发布日期 | 主要特性 |
|------|---------|---------|
| 3.0.0 | 2024-05 | 完全重构的架构；多模型同时支持；高级工作流集成 |
| 2.5.0 | 2024-02 | 本地模型直接集成；高级文件处理功能；跨设备同步 |
| 2.0.0 | 2023-10 | 多模态支持；多模型同时对话；高级提示词管理 |
| 1.5.0 | 2023-06 | 多API提供商支持；会话管理功能；企业级安全 |
| 1.0.0 | 2023-01 | 初始稳定版本；基本对话功能；OpenAI集成 |

## 测试版参与计划

如果您希望提前体验新功能并帮助改进 DeepChat：

1. 加入测试版计划：
   - 桌面版：`设置 → 高级 → 测试版计划 → 加入测试版`
   - 移动版：通过应用商店的测试版项目加入
   - 网页版：访问 [测试版网站](https://beta.deepchat.thinkinai.xyz)

2. 测试版用户的责任：
   - 报告发现的问题和错误
   - 提供功能使用反馈
   - 了解测试版可能不稳定的风险

3. 提交测试版反馈：
   - 应用内：`帮助 → 发送反馈`
   - 电子邮件：[beta-feedback@deepchat.thinkinai.xyz](mailto:beta-feedback@deepchat.thinkinai.xyz)
   - 测试版论坛：[https://community.deepchat.thinkinai.xyz/beta](https://community.deepchat.thinkinai.xyz/beta)

## 企业更新管理

对于企业环境中的 DeepChat 部署：

1. **分阶段更新**：
   - 先在测试组中部署更新
   - 确认稳定后扩展到更多用户
   - 完成全面部署

2. **更新策略**：
   - 安全更新：优先级高，尽快部署
   - 功能更新：可根据业务需求安排
   - 主版本更新：谨慎规划，确保兼容性

3. **企业部署工具**：
   - 使用 `DeepChat 企业管理控制台`
   - 配置更新政策和时间表
   - 监控整个组织的更新状态

## 开发者版本管理

对于开发人员和贡献者：

1. **源码构建**：
   - 克隆 [GitHub 仓库](https://github.com/thinkinai/deepchat)
   - 切换到所需分支或标签
   - 按照 `CONTRIBUTING.md` 中的说明构建项目

2. **开发分支**：
   - `main`：稳定开发分支
   - `develop`：最新开发进展
   - `release-x.y.z`：即将发布的版本

保持 DeepChat 更新不仅能让您使用最新功能，还能确保应用安全、稳定且高效。如有任何更新相关问题，请参考[故障排除](../troubleshooting/README.md)部分或联系支持团队。

![版本更新界面](https://deepchat.thinkinai.xyz/chat-screenshot.png)

*这里应放置一张版本更新界面或变更日志的截图。* 