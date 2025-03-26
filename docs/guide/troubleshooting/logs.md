# 日志查看

本页面将指导您如何访问、查看和解读 DeepChat 的日志文件，帮助您诊断问题和理解应用行为。日志是故障排除的重要资源，包含了应用运行时的详细信息和错误记录。

## 日志概述

### 日志类型与位置

DeepChat 的日志分为几种类型，保存在不同位置：

1. **应用日志**：记录一般应用操作、错误和警告
   - **桌面版**：
     - Windows: `%APPDATA%\DeepChat\logs\`
     - macOS: `~/Library/Application Support/DeepChat/logs/`
     - Linux: `~/.config/DeepChat/logs/`
   - **浏览器版**：通过开发者工具访问（见下文）
   - **移动应用**：通过内置日志查看器访问

2. **API 请求日志**：记录与 AI 服务提供商的通信
   - 默认与应用日志保存在相同目录下
   - 文件名格式：`api_requests_YYYY-MM-DD.log`

3. **错误日志**：详细记录错误和异常情况
   - 文件名格式：`error_YYYY-MM-DD.log`
   - 包含错误堆栈和上下文信息

4. **崩溃报告**：应用意外关闭时生成
   - 保存在与应用日志相同的目录下
   - 文件名格式：`crash_YYYY-MM-DD_HHMMSS.log`

### 日志级别

DeepChat 的日志分为多个详细程度级别：

| 级别 | 标记 | 包含信息 | 适用场景 |
|------|------|---------|---------|
| 错误 | `ERROR` | 严重错误和异常 | 当应用无法完成关键功能时 |
| 警告 | `WARN` | 潜在问题和异常状况 | 应用可以继续但可能有问题 |
| 信息 | `INFO` | 常规操作和状态变更 | 了解应用正常工作流程 |
| 调试 | `DEBUG` | 详细的技术信息 | 追踪具体操作和数据流 |
| 跟踪 | `TRACE` | 非常详尽的执行信息 | 开发人员深入调试用 |

## 访问日志

### 桌面应用日志访问

访问桌面版 DeepChat 的日志文件：

1. **通过应用界面访问**：
   - 打开 DeepChat
   - 导航至 `设置 → 高级 → 日志`
   - 点击 `查看应用日志` 按钮
   - 应用将打开日志查看器或文件夹

2. **直接访问日志文件**：
   - **Windows**：
     - 打开文件资源管理器
     - 在地址栏输入 `%APPDATA%\DeepChat\logs\`
     - 按回车键打开日志文件夹
   - **macOS**：
     - 打开 Finder
     - 按下 `Command+Shift+G`
     - 输入 `~/Library/Application Support/DeepChat/logs/`
     - 点击 "前往" 按钮
   - **Linux**：
     - 打开终端
     - 输入 `cd ~/.config/DeepChat/logs/`
     - 使用 `ls -la` 查看日志文件
     - 使用 `cat`、`less` 或文本编辑器查看内容

3. **命令行访问**（高级用户）：
   - 在终端或命令提示符使用以下命令：
     ```bash
     # Windows
     type %APPDATA%\DeepChat\logs\latest.log
     
     # macOS/Linux
     cat ~/Library/Application\ Support/DeepChat/logs/latest.log
     
     # 使用 tail 查看最新日志
     tail -f ~/Library/Application\ Support/DeepChat/logs/latest.log
     ```

### 浏览器版日志访问

访问网页版 DeepChat 的日志：

1. **使用浏览器开发者工具**：
   - **Chrome/Edge**：
     - 按下 `F12` 或 `Ctrl+Shift+I`（Mac上为 `Cmd+Option+I`）
     - 切换到 "Console" 标签
     - 选择 "Verbose" 日志级别以查看所有日志
   - **Firefox**：
     - 按下 `F12` 或 `Ctrl+Shift+I`（Mac上为 `Cmd+Option+I`）
     - 切换到 "Console" 标签
     - 确保 "All" 选项已选中

2. **启用详细日志**：
   - 在浏览器控制台中输入：
     ```javascript
     localStorage.setItem('debugLevel', 'trace');
     // 重新加载页面后生效
     ```
   - 刷新页面以应用更改

3. **查看网络请求日志**：
   - 在开发者工具中切换到 "Network" 标签
   - 筛选 "XHR" 或 "Fetch" 请求类型
   - 查看与 API 服务器的通信详情

### 移动应用日志访问

访问移动版 DeepChat 的日志：

1. **应用内日志查看器**：
   - 打开 DeepChat 移动应用
   - 前往 `设置 → 高级 → 日志`
   - 点击 `查看日志` 选项

2. **导出日志**：
   - 在日志查看器中，点击 `导出日志` 按钮
   - 选择分享方式（如电子邮件、云存储等）
   - 将日志文件发送到您可以分析的设备

3. **Android 特殊访问**（需要 root 权限或 ADB）：
   - 使用 ADB 命令：
     ```bash
     adb logcat -s DeepChat:*
     ```
   - 或使用第三方日志查看器应用

## 解读日志

### 日志格式

DeepChat 的日志条目通常遵循以下格式：

```
[时间戳] [日志级别] [组件] 消息内容 (可能的额外上下文信息)
```

示例：
```
[2024-05-28 14:32:45.123] [INFO] [ApiService] API request sent to OpenAI (model: gpt-4, tokens: 423)
[2024-05-28 14:32:47.456] [ERROR] [NetworkManager] Connection failed: timeout after 30s (endpoint: api.openai.com)
```

### 常见日志组件

理解日志中的组件名称有助于定位问题来源：

| 组件名称 | 功能描述 | 相关日志类型 |
|---------|---------|------------|
| `ApiService` | 处理API通信 | API请求、响应、错误 |
| `ModelManager` | 模型配置和管理 | 模型加载、参数设置 |
| `ConversationStore` | 对话历史存储 | 数据保存、加载、同步 |
| `AuthManager` | 身份验证和凭证 | 登录、API密钥、权限 |
| `UIController` | 用户界面控制 | 渲染、交互、布局 |
| `SettingsManager` | 应用设置管理 | 配置更改、加载、保存 |
| `CoreEngine` | 核心应用逻辑 | 启动、关闭、主要流程 |
| `PluginSystem` | 插件和扩展 | 插件加载、初始化、错误 |

### 解读错误信息

从错误日志中提取有用信息：

1. **错误代码**：通常采用 `ERR_XXX_YYY` 格式
   - 查看[常见错误](./common-errors.md)页面了解特定代码含义
   - 例如 `ERR_API_AUTH_002` 表示API身份验证失败

2. **错误堆栈**：追踪错误发生的代码路径
   - 查找堆栈顶部（最近的调用）了解直接原因
   - 注意错误文件名和行号以确定位置

3. **上下文信息**：错误发生时的状态和参数
   - 检查错误发生前的日志条目了解前因
   - 查看错误消息中包含的参数和值

## 日志分析技巧

### 基本日志筛选

有效筛选日志内容：

1. **使用内置日志查看器**：
   - 按级别筛选（如只显示 ERROR）
   - 按组件筛选（如只显示 ApiService）
   - 按时间范围筛选（如最近30分钟）

2. **使用文本编辑器或命令行工具**：
   - **Windows** (PowerShell):
     ```powershell
     Get-Content latest.log | Select-String "ERROR"
     ```
   - **macOS/Linux** (Bash):
     ```bash
     grep "ERROR" latest.log
     grep "ApiService" latest.log | grep -v "DEBUG"
     ```
   - **使用文本编辑器搜索**：
     - 使用 VS Code、Sublime Text 等高级编辑器
     - 使用正则表达式搜索特定模式

3. **搜索特定事件或错误**：
   - 按错误代码搜索（如 `ERR_API_AUTH_002`）
   - 按操作类型搜索（如 `conversation saved`）
   - 按用户操作搜索（如 `model changed`）

### 高级日志分析

深入分析复杂问题：

1. **时序分析**：
   - 建立事件时间线，了解问题发展
   - 确定触发事件与错误间的关联
   - 识别异常时间间隔或操作顺序

2. **模式识别**：
   - 查找重复出现的错误或警告
   - 识别导致问题的特定条件
   - 分析错误是否与特定操作相关

3. **对比分析**：
   - 比较正常会话与问题会话的日志
   - 对比不同环境下的日志（如不同操作系统）
   - 分析问题出现前后的日志差异

### 使用自动分析工具

利用内置工具辅助分析：

1. **日志分析功能**：
   - 导航至 `设置 → 高级 → 日志 → 分析日志`
   - 系统会自动识别常见问题模式
   - 生成摘要报告和建议解决方案

2. **导出分析报告**：
   - 在日志查看器中点击 `生成报告`
   - 选择报告类型（摘要、详细、技术）
   - 保存或分享生成的报告文件

3. **第三方日志分析工具**：
   - 对于大量日志，考虑使用专门的日志分析软件
   - 推荐工具：LogParser、Graylog、ELK Stack 等
   - 导入 DeepChat 日志进行高级可视化和分析

## 日志管理

### 设置日志级别

控制日志详细程度：

1. **通过应用设置**：
   - 导航至 `设置 → 高级 → 日志 → 日志级别`
   - 选择适当的级别（ERROR、WARN、INFO、DEBUG、TRACE）
   - 点击 `应用` 保存设置

2. **通过配置文件**（高级用户）：
   - 找到配置文件：
     - Windows: `%APPDATA%\DeepChat\config.json`
     - macOS: `~/Library/Application Support/DeepChat/config.json`
     - Linux: `~/.config/DeepChat/config.json`
   - 编辑 `logLevel` 属性的值
   - 保存文件并重启应用

3. **临时调整**（开发和调试用）：
   - 在浏览器版本的控制台中执行：
     ```javascript
     DeepChat.setLogLevel('trace'); // 或其他级别
     ```
   - 或在桌面版的开发者控制台中执行类似命令

### 日志轮换和清理

管理日志文件大小和数量：

1. **自动日志轮换设置**：
   - 导航至 `设置 → 高级 → 日志 → 日志轮换`
   - 配置单个日志文件大小限制（如 10MB）
   - 设置保留的日志文件数量（如保留最近10个）

2. **手动清理日志**：
   - 通过 `设置 → 高级 → 日志 → 清理日志` 操作
   - 选择清理范围（全部、过期、特定类型）
   - 确认操作以删除选定的日志文件

3. **归档旧日志**：
   - 将重要的旧日志文件压缩存档
   - 保存到备份位置以备将来参考
   - 为归档文件添加描述性标签（如问题类型和日期）

### 敏感信息处理

保护日志中的敏感信息：

1. **启用日志脱敏**：
   - 导航至 `设置 → 隐私 → 日志脱敏`
   - 启用自动脱敏功能
   - 选择要脱敏的数据类型

2. **脱敏的数据类型**：
   - API 密钥（默认始终脱敏）
   - 用户输入内容（可选）
   - 模型输出内容（可选）
   - 个人身份信息（如有被检测到）

3. **分享日志安全措施**：
   - 在分享日志前使用内置脱敏工具处理
   - 检查并移除任何个人识别信息
   - 考虑仅分享相关部分而非完整日志

## 使用日志进行故障排除

### 常见问题的日志特征

学习识别特定问题的日志模式：

1. **API 连接问题**：
   ```
   [ERROR] [ApiService] Connection failed after 3 retries
   [ERROR] [NetworkManager] Unable to reach endpoint: api.openai.com
   ```
   
2. **身份验证错误**：
   ```
   [ERROR] [AuthManager] Authentication failed with status code 401
   [WARN] [ApiService] API key may be invalid or expired
   ```
   
3. **应用性能问题**：
   ```
   [WARN] [PerformanceMonitor] High memory usage detected: 2.4GB
   [WARN] [UIController] Rendering took 1.2s, exceeding threshold
   ```
   
4. **数据损坏问题**：
   ```
   [ERROR] [ConversationStore] Failed to parse conversation data
   [ERROR] [DatabaseManager] Database integrity check failed
   ```

### 实际故障排除案例

以实际案例展示如何使用日志排除故障：

#### 案例一：API 响应超时

**日志分析**：
```
[14:32:45] [INFO] [ApiService] Sending request to OpenAI (model: gpt-4)
[14:33:15] [WARN] [ApiService] Request taking longer than expected (30s)
[14:33:45] [ERROR] [ApiService] Request timeout after 60s
[14:33:45] [ERROR] [ConversationManager] Failed to get model response: timeout
```

**问题诊断**：
1. 请求发送后等待 30 秒出现第一个警告
2. 再等待 30 秒后请求超时
3. 超时导致无法获取模型响应

**解决方案**：
1. 检查网络连接和速度
2. 考虑增加 API 超时设置
3. 尝试使用响应更快的模型
4. 查看 API 服务商的状态页面

#### 案例二：本地存储错误

**日志分析**：
```
[09:15:30] [INFO] [ConversationStore] Saving conversation 'project-ideas'
[09:15:30] [ERROR] [StorageManager] Failed to write to file: permission denied
[09:15:30] [ERROR] [ConversationStore] Could not save conversation
[09:15:31] [WARN] [UIController] Showing error notification to user
```

**问题诊断**：
1. 尝试保存对话时发生文件写入错误
2. 错误原因是权限被拒绝
3. 导致对话无法保存

**解决方案**：
1. 检查应用数据目录的文件权限
2. 确认磁盘空间充足
3. 尝试以管理员权限运行应用
4. 考虑更改保存位置设置

### 分享日志寻求帮助

如何有效地分享日志以获取支持：

1. **准备日志信息**：
   - 导出相关的日志片段（问题发生前后的记录）
   - 使用内置脱敏工具处理敏感信息
   - 添加问题发生时的操作步骤描述

2. **提交问题报告**：
   - 按照[问题反馈](./feedback.md)指南填写报告
   - 附上处理过的日志文件或相关片段
   - 包含系统信息和应用版本

3. **通过官方渠道提交**：
   - [GitHub 问题跟踪器](https://github.com/thinkinai/deepchat/issues)
   - [社区论坛](https://deepchat.thinkinai.xyz/community)
   - 直接联系[技术支持](mailto:support@deepchat.thinkinai.xyz)

## 高级日志功能

### 自定义日志设置

为高级用户提供的日志定制选项：

1. **自定义日志格式**：
   - 导航至 `设置 → 高级 → 日志 → 自定义格式`
   - 设置时间戳格式、字段顺序等
   - 保存自定义格式配置

2. **组件级别日志控制**：
   - 为特定组件设置不同的日志级别
   - 例如，将 ApiService 设为 DEBUG，其他保持 INFO
   - 适用于针对性调试特定功能

3. **条件日志记录**：
   - 设置触发详细日志的条件
   - 例如，仅在发生错误时记录详细的 API 请求日志
   - 有助于减少日志体积同时保留关键信息

### 远程日志收集

适用于团队和企业环境：

1. **配置远程日志服务器**：
   - 导航至 `设置 → 高级 → 日志 → 远程日志`
   - 输入日志服务器地址和凭证
   - 选择要发送的日志类型和级别

2. **加密传输设置**：
   - 配置传输加密选项
   - 设置证书和加密协议
   - 测试加密连接是否正常

3. **团队日志分析**：
   - 使用集中式日志查看权限控制
   - 按用户标识过滤日志
   - 设置团队级别的警报和通知

### 开发者工具集成

为开发和调试提供的高级功能：

1. **与调试工具集成**：
   - 配置日志输出到开发工具
   - 设置断点触发条件
   - 使用高级过滤和搜索功能

2. **性能分析标记**：
   - 在日志中添加性能计时点
   - 分析操作耗时和资源使用
   - 识别性能瓶颈和优化机会

3. **自定义日志插件**：
   - 开发自定义日志分析插件
   - 创建针对特定需求的可视化工具
   - 扩展日志功能满足特殊要求

通过有效使用和分析日志，您可以更快地诊断和解决 DeepChat 中遇到的问题，提高应用的稳定性和性能。如需更多帮助，请参考[问题反馈](./feedback.md)页面获取额外支持。

![日志查看工具](https://deepchat.thinkinai.xyz/chat-screenshot.png)

*这里应放置一张日志查看界面的截图，展示如何查看和分析日志。* 