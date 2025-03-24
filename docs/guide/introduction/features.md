---
pageClass: feature-page
---

# DeepChat 特性详解

<div class="feature-container">

## 多模型支持 <Badge text="核心功能" type="tip"/>

DeepChat兼容多种大型语言模型，包括但不限于：

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-title">OpenAI GPT系列</div>
    <div class="feature-content">支持GPT-3.5-turbo、GPT-4等模型，提供流畅自然的对话体验。</div>
  </div>
  <div class="feature-card">
    <div class="feature-title">本地模型</div>
    <div class="feature-content">可接入各种开源大语言模型，适合对隐私有要求的场景。</div>
  </div>
  <div class="feature-card">
    <div class="feature-title">自定义API</div>
    <div class="feature-content">支持接入自定义API服务，满足各种特殊需求。</div>
  </div>
</div>

不同的模型有各自的优势和特点，用户可以根据实际需求选择合适的模型。

## 文档处理能力 <Badge text="高级功能" type="warning"/>

DeepChat支持上传多种格式的文档作为附件，并与大模型进行问答：

<div class="feature-list">
  <div class="feature-item">
    <div class="feature-icon">📄</div>
    <div class="feature-desc">
      <strong>支持格式</strong>：PDF、Word、TXT、Markdown等
    </div>
  </div>
  <div class="feature-item">
    <div class="feature-icon">📚</div>
    <div class="feature-desc">
      <strong>长文档处理</strong>：能够处理长篇文档，并提取关键信息
    </div>
  </div>
  <div class="feature-item">
    <div class="feature-icon">🔄</div>
    <div class="feature-desc">
      <strong>上下文保持</strong>：在对话过程中保持对文档内容的理解
    </div>
  </div>
</div>

## Artifacts实时交互 <Badge text="独特功能" type="tip"/>

直接在聊天界面预览和交互生成的内容：

- **代码预览**：实时语法高亮和格式化
- **图表展示**：支持多种图表类型的生成和展示
- **游戏交互**：支持简单的游戏互动体验
- **表格数据**：结构化展示表格数据

## MCP功能 <Badge text="高级配置" type="warning"/>

Model Control Panel (MCP) 提供灵活的模型控制能力：

- **系统提示词**：定制模型的行为和响应风格
- **温度调节**：控制输出的创造性和多样性
- **输出格式控制**：指定输出的结构和格式
- **上下文窗口调整**：控制模型记忆的对话长度

## 多平台支持 <Badge text="兼容性" type="tip"/>

DeepChat支持多种操作系统平台：

- **Windows系统**：支持Windows 10/11
- **macOS**：支持Intel和Apple Silicon芯片
- **Linux**：支持主流Linux发行版

## 知识库集成 <Badge text="开发中" type="danger"/>

即将推出的知识库功能将提供：

- **知识库管理**：创建、编辑和管理专属知识库
- **智能检索**：基于语义的智能检索能力
- **实时更新**：知识库内容的实时更新
- **自定义权重**：对不同知识源设置不同的权重

</div>

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