---
pageClass: feature-page
---

# 核心特性

DeepChat 提供了丰富的功能，帮助用户充分利用大语言模型的能力。以下是 DeepChat 的核心特性介绍。

## 多模型支持 <Badge text="核心功能" type="tip"/>

DeepChat 兼容多种大型语言模型，为用户提供灵活的选择：

- **OpenAI GPT 系列**：支持 GPT-3.5-Turbo、GPT-4、GPT-4o 等模型，提供出色的通用对话能力
- **本地部署模型**：支持 Llama、Mistral、Gemma 等开源模型的本地部署，保障数据安全
- **Claude 系列**：集成 Anthropic 的 Claude 系列模型，提供长上下文窗口支持
- **其他商业模型**：支持 Google Gemini、百度文心一言等其他主流大语言模型
- **自定义 API**：允许连接自定义的模型 API 端点，实现更大的灵活性

通过统一界面管理和使用不同模型，用户可以根据具体需求选择最适合的模型，同时进行性能和成本的平衡。

## 文档处理能力 <Badge text="高级功能" type="warning"/>

DeepChat 具备强大的文档处理能力，帮助用户与各种文档进行智能交互：

- **多格式支持**：处理 PDF、Word、TXT、Markdown、Excel 等多种格式文档
- **智能分析**：自动提取文档结构和关键信息，支持文档摘要和内容检索
- **上下文理解**：在对话中保持对文档内容的理解，支持多轮基于文档的问答
- **长文档处理**：通过高效的文本分块和检索技术，支持超长文档的处理
- **批量导入**：支持批量导入多个文档，构建个人或团队知识库

文档处理功能特别适合研究人员、学生和知识工作者，帮助他们更有效地与大量文本信息进行交互。

## Artifacts 实时交互 <Badge text="独特功能" type="tip"/>

DeepChat 的 Artifacts 功能让 AI 生成的内容更具交互性：

- **代码预览**：实时语法高亮和格式化，支持多种编程语言
- **代码执行**：在安全的沙箱环境中执行代码，查看运行结果
- **表格数据**：结构化展示表格数据，支持排序和筛选
- **图表生成**：将数据可视化为各种图表类型，包括柱状图、折线图、饼图等
- **游戏交互**：支持简单游戏的生成和交互，如猜数字、井字棋等

Artifacts 功能极大地扩展了 AI 对话的应用场景，使其不仅限于文本交流，还能创建和交互丰富的内容类型。

## MCP 功能 <Badge text="高级配置" type="warning"/>

Model Control Panel (MCP) 提供了对模型行为的精细控制：

- **系统提示词**：定制模型的角色、风格和行为规则
- **温度调节**：控制输出的创造性和多样性，从确定性到高随机性
- **上下文窗口**：调整模型记忆的对话长度，平衡性能和上下文理解
- **函数调用**：配置允许模型调用的函数和工具，扩展能力边界
- **输出格式**：指定输出的结构和格式，如 JSON、Markdown 等

MCP 功能特别适合开发者和高级用户，让他们能够深度定制 AI 助手的行为，满足特定场景的需求。

## 多平台支持 <Badge text="兼容性" type="tip"/>

DeepChat 跨平台设计确保了在不同环境下的一致体验：

- **桌面应用**：支持 Windows、macOS 和 Linux 系统
- **Web 版本**：通过浏览器访问，无需安装
- **移动适配**：响应式设计，支持在移动设备上使用
- **数据同步**：在不同设备间同步对话历史和设置（需要账户）

多平台支持确保用户在任何设备上都能获得流畅的使用体验，不受硬件和操作系统限制。

## 知识库集成 <Badge text="开发中" type="danger"/>

即将推出的知识库功能将提供：

- **知识库管理**：创建、编辑和管理专属知识库
- **智能检索**：基于语义的智能检索能力，找到最相关的信息
- **文档同步**：自动同步外部知识来源，保持知识库最新
- **权重调整**：对不同知识来源设置不同的权重和优先级
- **团队协作**：支持团队共同构建和维护知识库

知识库功能将使 DeepChat 成为强大的企业知识管理工具，帮助团队更有效地组织和利用集体智慧。

下一步，您可以了解 DeepChat 的[应用场景](./use-cases.md)或[技术架构](./architecture.md)。

<style>
.feature-page {
  --feature-primary: var(--c-brand);
  --feature-bg: #f8f9fa;
  --feature-card-bg: white;
  --feature-shadow: rgba(0, 0, 0, 0.05);
}

.feature-container {
  max-width: 100%;
  margin: 0 auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.feature-card {
  background: var(--feature-card-bg);
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 4px 12px var(--feature-shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px var(--feature-shadow);
}

.feature-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--feature-primary);
}

.feature-content {
  color: var(--c-text);
  line-height: 1.5;
}

.feature-list {
  margin: 24px 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 12px;
  background: var(--feature-card-bg);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--feature-shadow);
}

.feature-icon {
  font-size: 24px;
  margin-right: 16px;
  min-width: 32px;
  text-align: center;
}

.feature-desc {
  line-height: 1.5;
}

@media (max-width: 719px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style> 