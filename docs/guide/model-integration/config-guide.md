# 模型配置指南

本页面将详细指导您如何在 DeepChat 中配置和使用各类语言模型，包括商业 API 模型和本地开源模型。

## 模型配置基础

### 访问模型设置

在 DeepChat 中访问和管理模型配置：

1. **模型配置面板**：
   - 点击界面右上角的"设置"图标
   - 选择"模型"选项卡
   - 查看已配置的模型列表和添加新模型选项

2. **对话中切换模型**：
   - 在对话界面点击当前模型名称
   - 从下拉菜单选择其他可用模型
   - 或使用快捷键 `Ctrl+Shift+M`（Windows/Linux）或 `Cmd+Shift+M`（macOS）

3. **设置默认模型**：
   - 在模型配置页面选择一个模型
   - 点击"设为默认"按钮
   - 新对话将自动使用此模型

![模型配置界面](https://deepchat.thinkinai.xyz/chat-screenshot.png)

*这里应放置一张模型配置界面的截图，显示模型列表和配置选项。*

## 配置 API 模型

### OpenAI 模型配置

配置 OpenAI GPT 系列模型：

1. **添加 OpenAI API**：
   - 设置 → 模型 → 添加模型 → OpenAI
   - 输入您的 OpenAI API 密钥
   - 选择 API 类型（标准 API 或 Azure OpenAI）

2. **基本设置**：
   - 选择模型变体（GPT-4o、GPT-4、GPT-3.5-Turbo 等）
   - 设置温度（0.0-2.0，值越低回答越确定）
   - 配置最大响应长度（token 数）

3. **高级参数**：
   - Top P（核心采样，控制词汇多样性）
   - 频率惩罚（降低重复词的可能性）
   - 存在惩罚（增加新概念的可能性）
   - 系统消息自定义

4. **模型特定功能**：
   - 启用/禁用流式输出
   - 配置函数调用功能
   - 启用多模态支持（对于支持视觉的模型）

```json
// OpenAI 配置示例
{
  "name": "GPT-4 Turbo",
  "provider": "openai",
  "model": "gpt-4-turbo",
  "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
  "temperature": 0.7,
  "max_tokens": 4000,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "streaming": true,
  "system_message": "你是一个有帮助的助手。"
}
```

### Anthropic Claude 配置

配置 Anthropic Claude 系列模型：

1. **添加 Claude API**：
   - 设置 → 模型 → 添加模型 → Anthropic
   - 输入您的 Anthropic API 密钥
   - 选择区域（如有必要）

2. **模型选择和基本设置**：
   - 选择模型变体（Claude 3 Opus/Sonnet/Haiku）
   - 设置温度（0.0-1.0）
   - 配置最大响应长度

3. **高级参数**：
   - Top P 设置
   - Top K 设置（Claude 特有）
   - 系统提示词优化

```json
// Claude 配置示例
{
  "name": "Claude 3 Sonnet",
  "provider": "anthropic",
  "model": "claude-3-sonnet-20240229",
  "apiKey": "sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx",
  "temperature": 0.5,
  "max_tokens": 4000,
  "top_p": 0.9,
  "streaming": true,
  "system": "你是Claude，一个由Anthropic开发的AI助手。请用简洁专业的方式回答问题。"
}
```

### Google Gemini 配置

配置 Google Gemini 系列模型：

1. **添加 Gemini API**：
   - 设置 → 模型 → 添加模型 → Google AI
   - 输入您的 Google AI API 密钥
   - 选择 API 版本

2. **基本设置**：
   - 选择模型（Gemini 1.5 Pro、Gemini 1.0 Ultra 等）
   - 设置温度和响应长度
   - 配置安全设置

3. **安全和使用限制**：
   - 内容过滤级别设置
   - 使用配额监控
   - API 请求频率限制

```json
// Gemini 配置示例
{
  "name": "Gemini Pro",
  "provider": "google",
  "model": "gemini-1.0-pro",
  "apiKey": "AIzaxxxxxxxxxxxxxxxxxxxxxxxx",
  "temperature": 0.4,
  "maxOutputTokens": 2048,
  "topK": 40,
  "topP": 0.95
}
```

## 配置本地模型

### Ollama 模型配置

使用 Ollama 运行本地模型：

1. **安装 Ollama**：
   - 从 [Ollama 官网](https://ollama.ai/) 下载并安装
   - 拉取所需模型，例如：`ollama pull llama3`

2. **在 DeepChat 中配置**：
   - 设置 → 模型 → 添加模型 → Ollama
   - 设置 API 地址（默认为 `http://localhost:11434`）
   - 选择已拉取的模型

3. **模型运行参数**：
   - 设置上下文窗口大小
   - 配置温度和采样参数
   - 设置资源使用限制

4. **高级 Ollama 选项**：
   - 模板提示词格式自定义
   - 使用自定义 Modelfile
   - 配置系统提示词

```json
// Ollama 配置示例
{
  "name": "Llama 3 本地",
  "provider": "ollama",
  "model": "llama3",
  "host": "http://localhost:11434",
  "temperature": 0.8,
  "context_size": 8192,
  "system_prompt": "你是一个有帮助的AI助手，基于Llama 3模型。"
}
```

### LocalAI 模型配置

使用 LocalAI 部署本地模型：

1. **设置 LocalAI**：
   - 安装并配置 LocalAI
   - 下载并加载模型文件
   - 启动 LocalAI 服务

2. **在 DeepChat 中添加**：
   - 设置 → 模型 → 添加模型 → 自定义 API
   - 设置为 OpenAI 兼容接口
   - 配置 LocalAI 服务器地址

3. **性能优化**：
   - 调整批处理大小和线程数
   - 配置量化选项
   - 内存使用限制设置

### LM Studio 模型配置

使用 LM Studio 运行本地模型：

1. **安装和设置 LM Studio**：
   - 从 [LM Studio 网站](https://lmstudio.ai/) 下载并安装
   - 导入模型或从库中下载
   - 启动本地服务器

2. **在 DeepChat 中连接**：
   - 设置 → 模型 → 添加模型 → 自定义 API
   - 设置为 OpenAI 兼容接口
   - 配置 LM Studio 本地服务器地址

3. **自定义参数**：
   - 配置 prompt 模板
   - 调整性能参数
   - 设置上下文管理选项

## 模型参数调优

### 关键参数解释

了解并调整主要模型参数：

1. **温度 (Temperature)**：
   - **范围**：0.0-2.0，通常使用 0.0-1.0
   - **作用**：控制回复的随机性和创造性
   - **建议**：
     - 低温度 (0.1-0.3)：事实性回答，编码，逻辑任务
     - 中温度 (0.4-0.7)：平衡的创意与准确性
     - 高温度 (0.8-1.0)：创意写作，头脑风暴

2. **Top P（核心采样）**：
   - **范围**：0.0-1.0
   - **作用**：限制词汇选择范围，仅考虑累积概率达到 top_p 的词汇
   - **建议**：
     - 精确任务：0.1-0.5
     - 一般用途：0.7-0.9
     - 创意生成：0.95-1.0

3. **最大长度 (Max Tokens)**：
   - **作用**：限制模型回复的最大长度
   - **建议**：
     - 简短回复：256-512
     - 一般对话：1024-2048
     - 长篇内容：4096+

4. **系统提示词**：
   - **作用**：设置模型的行为指南和人格
   - **技巧**：
     - 保持简洁明确
     - 包含关键指令和限制
     - 指定回复格式和风格

### 特定任务的推荐配置

不同任务类型的优化配置：

| 任务类型 | 推荐模型 | 温度 | Top P | 其他参数 |
|---------|---------|------|------|---------|
| 编程辅助 | GPT-4, CodeLlama | 0.1-0.3 | 0.95 | 高频率惩罚 |
| 创意写作 | Claude 3, GPT-4 | 0.7-0.9 | 0.95 | 较低频率惩罚 |
| 事实问答 | GPT-4o, Claude 3 | 0.0-0.2 | 0.6 | 低存在惩罚 |
| 内容摘要 | Claude 3, GPT-3.5 | 0.3-0.5 | 0.8 | 中等频率惩罚 |
| 头脑风暴 | Claude 3 Opus, GPT-4 | 0.8-1.1 | 1.0 | 高存在惩罚 |
| 角色扮演 | Claude 3, Llama 3 | 0.7-0.9 | 0.9 | 特定系统提示词 |

### 自定义配置模板

保存和重用常用配置：

1. **创建配置模板**：
   - 设置模型参数为您偏好的值
   - 点击"保存为模板"
   - 命名并添加描述

2. **应用配置模板**：
   - 从模板库中选择配置
   - 点击"应用到当前模型"
   - 可选择应用部分或全部参数

3. **分享配置模板**：
   - 导出配置为 JSON 文件
   - 通过设置 → 模型 → 导入配置添加他人的配置
   - 导入后自动添加到模板库

## 多模型管理

### 模型组和快速切换

有效管理多个模型：

1. **创建模型组**：
   - 设置 → 模型 → 模型组 → 创建新组
   - 命名并选择包含的模型
   - 设置组显示顺序

2. **快速切换**：
   - 使用快捷键 `Ctrl+Shift+M` 打开模型选择器
   - 按模型组过滤
   - 使用方向键选择并按 Enter 确认

3. **对话记忆**：
   - 每个对话保留上次使用的模型
   - 新对话使用全局默认模型
   - 自动保存模型偏好设置

### 模型回退和智能路由

处理模型不可用或特定任务路由：

1. **配置模型回退**：
   - 为每个主要模型设置备选模型
   - 当主模型不可用或出错时自动切换
   - 设置恢复条件和通知选项

2. **智能任务路由**：
   - 基于任务类型自动选择模型
   - 例如：代码问题路由到 CodeLlama
   - 创意任务路由到 Claude 3 等

3. **基于内容长度路由**：
   - 配置长内容自动路由到大上下文模型
   - 短问题使用快速响应模型
   - 设置路由规则和阈值

## 模型评估和监控

### 性能跟踪

监控模型使用和性能：

1. **使用统计**：
   - 查看每个模型的使用频率
   - 跟踪响应时间和质量
   - 分析成本和效率

2. **响应质量评估**：
   - 通过反馈评分系统评估回复质量
   - 比较不同模型的表现
   - 识别特定任务的最佳模型

3. **成本监控**：
   - 跟踪 API 调用成本
   - 设置使用限额和预算警报
   - 优化成本性能比

### 自动测试和基准

评估模型性能的工具：

1. **模型基准测试**：
   - 运行标准测试集评估模型能力
   - 比较不同模型在特定任务上的表现
   - 根据结果优化配置

2. **一致性检查**：
   - 测试模型在相同提示下的一致性
   - 评估不同参数设置的影响
   - 识别最稳定的配置

## 故障排除

常见模型问题及解决方案：

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| API 连接失败 | API 密钥无效；服务中断；网络问题 | 验证 API 密钥；检查服务状态；测试网络连接 |
| 本地模型崩溃 | 内存不足；显存溢出；模型损坏 | 减小批处理大小；使用更小模型；重新下载模型 |
| 模型输出截断 | 最大长度设置过低；上下文窗口限制 | 增加最大令牌数；减少输入长度；分段处理长任务 |
| 模型回复偏离 | 温度设置过高；系统提示词不明确 | 降低温度参数；优化系统提示词；使用更强大的模型 |
| 响应延迟过高 | 服务器负载；网络延迟；模型大小 | 使用本地缓存；切换到更快模型；优化网络连接 |

## 高级配置示例

### OpenAI 高级配置

```json
{
  "name": "GPT-4 专业配置",
  "provider": "openai",
  "model": "gpt-4",
  "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
  "temperature": 0.2,
  "max_tokens": 8000,
  "top_p": 0.9,
  "presence_penalty": 0.1,
  "frequency_penalty": 0.2,
  "stop": ["\n\n", "用户:", "AI:"],
  "logit_bias": {
    "50256": -100
  },
  "streaming": true,
  "system_message": "你是一位知识渊博、逻辑清晰的专业助手。请提供准确、具体且深入的回答。在回答前先分析问题的关键点，然后系统地组织你的思路。对于不确定的信息，请明确指出这是推测。",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_knowledge_base",
        "description": "搜索内部知识库获取信息",
        "parameters": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "搜索查询"
            }
          },
          "required": ["query"]
        }
      }
    }
  ]
}
```

### Claude 高级配置

```json
{
  "name": "Claude 创意助手",
  "provider": "anthropic",
  "model": "claude-3-opus-20240229",
  "apiKey": "sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx",
  "temperature": 0.8,
  "max_tokens": 5000,
  "top_p": 0.95,
  "top_k": 50,
  "streaming": true,
  "system": "你是一位富有创造力和想象力的助手，专长于生成新颖、独特的创意内容。你的回答应该充满灵感，探索不同角度和可能性。在讨论创意主题时，请提供多种思路和选择，帮助用户拓展思维边界。同时，你应该用生动、引人入胜的语言表达你的想法，激发用户的灵感。请确保你的回答既有创意又有实用价值。"
}
```

### 本地 Ollama 高级配置

```json
{
  "name": "Llama 3 编程助手",
  "provider": "ollama",
  "model": "codellama",
  "host": "http://localhost:11434",
  "temperature": 0.2,
  "num_ctx": 8192,
  "seed": 42,
  "repeat_penalty": 1.1,
  "top_k": 40,
  "top_p": 0.9,
  "num_thread": 8,
  "system_prompt": "你是一位专业的编程助手，基于CodeLlama模型。请提供简洁、高效、符合最佳实践的代码和解释。优先考虑代码的可读性和可维护性。确保你提供的代码是完整的、可直接运行的，并解释关键部分。如果有多种解决方案，请指出最适合的方法并解释原因。"
}
```

下一步，您可以了解如何安全管理[API密钥](./api-keys.md)，确保模型访问的安全性和有效性。

![模型配置指南](https://deepchat.thinkinai.xyz/chat-screenshot.png)

*这里应放置一张配置模型的步骤截图，展示如何添加和配置一个新模型。* 