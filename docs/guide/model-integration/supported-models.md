# 支持的模型

DeepChat 支持多种先进的语言模型，从商业云端API模型到本地部署的开源模型。本页面将提供完整的支持模型列表及其主要特性。

## 商业云模型

### OpenAI 模型

OpenAI 提供的高性能模型，通过 API 使用：

| 模型 | 上下文窗口 | 主要优势 | 推荐使用场景 |
|------|------------|---------|-------------|
| GPT-4o | 128K 令牌 | 最新版本，多模态能力，性能强大 | 复杂任务，多模态交互，需要最高质量输出 |
| GPT-4 | 8K/32K 令牌 | 推理能力强，生成质量高 | 学术写作，复杂推理，高要求内容生成 |
| GPT-3.5-Turbo | 4K/16K 令牌 | 响应速度快，成本较低 | 日常对话，简单任务，原型开发 |
| GPT-4-Vision | 128K 令牌 | 图像理解和分析能力 | 图像描述，视觉内容分析，多模态任务 |

**API 特性**：
- 支持流式响应
- 函数调用功能
- 系统提示词优化
- 向量嵌入生成
- 使用配额和计费管理

### Anthropic 模型

Anthropic 提供的 Claude 系列模型：

| 模型 | 上下文窗口 | 主要优势 | 推荐使用场景 |
|------|------------|---------|-------------|
| Claude 3 Opus | 200K 令牌 | 最高性能，推理能力极强 | 专业研究，复杂分析，高质量创作 |
| Claude 3 Sonnet | 200K 令牌 | 平衡性能和速度 | 日常工作使用，一般内容创作 |
| Claude 3 Haiku | 200K 令牌 | 速度快，成本低 | 快速响应，简单任务，高频使用 |
| Claude 2.1 | 100K 令牌 | 成熟稳定 | 需要稳定性的生产环境 |

**API 特性**：
- 超长上下文窗口
- 音频和图像输入
- 较低的幻觉率
- 内置道德伦理考量

### Google 模型

Google 提供的 Gemini 系列模型：

| 模型 | 上下文窗口 | 主要优势 | 推荐使用场景 |
|------|------------|---------|-------------|
| Gemini 1.5 Pro | 128K 令牌 | 多模态能力强，长上下文理解 | 文档分析，多模态任务，长对话 |
| Gemini 1.0 Ultra | 32K 令牌 | 逻辑推理能力强 | 复杂问题解决，学术研究 |
| Gemini 1.0 Pro | 32K 令牌 | 平衡性能和效率 | 一般工作场景，内容创建 |
| Gemini 1.0 Flash | 32K 令牌 | 高速响应 | 即时回复，简单任务 |

**API 特性**：
- 多模态输入支持
- 流式输出
- 与 Google 服务集成
- 安全过滤功能

### 其他商业模型

其他可通过 API 接入的商业模型：

| 模型服务 | 代表模型 | 主要优势 | 推荐使用场景 |
|----------|---------|---------|-------------|
| Cohere | Command | 企业级文本生成和理解能力 | 商业文档生成，客户支持 |
| AI21 | Jurassic-2 | 文本创作和摘要能力出色 | 内容创作，文档摘要 |
| 百度文心 | 文心一言 | 中文处理能力强 | 中文内容创作，本地化服务 |
| 阿里通义 | 通义千问 | 中文语境理解深入 | 中文对话，行业应用 |
| 讯飞星火 | 星火认知 | 垂直领域优化 | 特定行业应用，专业知识 |

## 开源模型

### 本地部署模型

可在本地计算机或私有服务器部署的开源模型：

| 模型 | 大小变体 | 主要优势 | 资源需求 |
|------|---------|---------|---------|
| Llama 3 | 8B, 70B | Meta最新开源模型，性能接近商业模型 | 8B: 16GB RAM, 70B: 48GB+ VRAM |
| Mistral | 7B, 8x7B | 高效架构，参数利用率高 | 7B: 16GB RAM, 8x7B: 32GB+ RAM |
| Gemma | 2B, 7B | Google开源小模型，效率高 | 2B: 8GB RAM, 7B: 16GB RAM |
| Phi-3 | Mini, Small | 微软小参数高性能模型 | Mini: 8GB RAM, Small: 16GB RAM |
| Vicuna | 7B, 13B | 基于Llama微调，指令遵循能力强 | 7B: 16GB RAM, 13B: 24GB RAM |
| Orca | 7B, 13B | 对齐优化的Llama模型 | 7B: 16GB RAM, 13B: 24GB RAM |
| Falcon | 7B, 40B | 多语言支持，开放训练过程 | 7B: 16GB RAM, 40B: 40GB+ VRAM |

**部署选项**：
- GGUF 量化格式支持
- CPU 和 GPU 加速
- 量化级别选择 (Q2_K to Q8_0)
- 内存映射优化

### 专业领域模型

为特定任务优化的开源模型：

| 领域 | 代表模型 | 主要优势 | 推荐使用场景 |
|------|---------|---------|-------------|
| 代码生成 | CodeLlama, DeepSeek Coder, WizardCoder | 代码理解和生成专精 | 编程辅助，代码优化，调试 |
| 医疗健康 | Med-PaLM M, Med42, ClinicalGPT | 医疗知识丰富，专业术语理解 | 医学教育，临床参考，研究辅助 |
| 科学研究 | Galactica, BLOOM | 科学文献理解，数学能力强 | 科研辅助，论文写作，公式处理 |
| 法律分析 | LexiLaw, Legal-Bert | 法律术语和文档理解 | 法律文件分析，合规审查 |
| 多语言 | BLOOM, XGLM | 多语言支持广泛 | 多语言内容创建，翻译辅助 |

## 多模态模型

支持处理文本以外模态的模型：

| 模型 | 支持模态 | 主要能力 | 推荐使用场景 |
|------|---------|---------|-------------|
| GPT-4V | 文本，图像 | 高级图像理解和分析 | 图像内容分析，可视化问答 |
| Claude 3 Vision | 文本，图像，文档 | 精确文档理解和分析 | 文档处理，图表分析，视觉内容创作 |
| Gemini Pro Vision | 文本，图像，视频 | 视觉内容处理，实时分析 | 多媒体内容理解，视觉创意辅助 |
| LLaVA | 文本，图像 | 开源视觉-语言模型 | 本地图像分析，隐私保护应用 |
| CogVLM | 文本，图像 | 高精度视觉理解 | 细节图像描述，视觉内容理解 |

## 模型选择指南

如何为您的需求选择合适的模型：

### 选择因素

在选择模型时考虑以下因素：

1. **任务复杂度**：
   - 简单任务：GPT-3.5-Turbo, Claude 3 Haiku, 本地小型模型
   - 中等复杂任务：GPT-4, Claude 3 Sonnet, Gemini Pro
   - 高度复杂任务：GPT-4o, Claude 3 Opus, 大型专业模型

2. **响应速度需求**：
   - 高速响应：Claude 3 Haiku, GPT-3.5-Turbo, 本地优化模型
   - 平衡速度与质量：GPT-4, Claude 3 Sonnet
   - 优先质量：GPT-4o, Claude 3 Opus

3. **成本考虑**：
   - 低成本：本地开源模型，GPT-3.5-Turbo
   - 中等成本：Claude 3 Sonnet, Gemini Pro
   - 高成本高性能：GPT-4o, Claude 3 Opus

4. **特殊能力需求**：
   - 代码生成：CodeLlama, WizardCoder, GPT-4
   - 多语言：BLOOM, GPT-4, Claude 3
   - 视觉理解：GPT-4V, Claude 3 Vision, Gemini Vision

5. **隐私与安全**：
   - 最高隐私：本地部署开源模型
   - 中等隐私：私有云部署
   - 标准隐私：商业API模型(遵循其隐私政策)

### 性能比较表

主要模型在不同任务上的性能对比：

| 任务类型 | 顶级性能 | 良好平衡 | 资源效率 |
|---------|---------|---------|---------|
| 通用对话 | GPT-4o, Claude 3 Opus | Claude 3 Sonnet, Llama 3 70B | Mistral 7B, Phi-3 |
| 创意写作 | Claude 3 Opus, GPT-4 | Claude 3 Sonnet, Llama 3 | GPT-3.5, Gemma |
| 代码生成 | GPT-4, DeepSeek Coder | CodeLlama, WizardCoder | Phi-3, Mistral |
| 逻辑推理 | GPT-4o, Claude 3 Opus | GPT-4, Gemini Pro | Mistral, Phi-3 |
| 多语言处理 | GPT-4o, Claude 3 Opus | BLOOM, Gemini Pro | XGLM, Mistral |
| 视觉理解 | GPT-4V, Gemini Pro Vision | Claude 3 Vision, LLaVA | CogVLM, LLaVA-NeXT |

## 模型版本更新

DeepChat 会定期更新支持的模型列表。查看最新支持的模型，请访问我们的[模型更新页面](https://deepchat.thinkinai.xyz/models)或在应用内查看模型配置面板。

下一步，您可以了解如何[配置这些模型](./config-guide.md)，以便在 DeepChat 中使用它们。

![支持的模型概览](https://deepchat.thinkinai.xyz/chat-screenshot.png)

*这里应放置一张展示 DeepChat 支持的各种模型的概览图，显示模型类别和关系。* 