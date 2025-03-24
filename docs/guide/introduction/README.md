---
heroImage: https://deepchat.thinkinai.xyz/logo.png
pageClass: introduction-page
actions:
  - text: 特性详解
    link: /guide/introduction/features
    type: primary
  - text: 架构设计
    link: /guide/introduction/architecture
    type: secondary
features:
  - title: 多模型支持
    details: 兼容多种大型语言模型，包括OpenAI GPT系列、本地模型和自定义API
  - title: 文档处理
    details: 支持PDF、Word、TXT等多种格式文档的智能问答和上下文保持
  - title: Artifacts实时交互
    details: 直接在聊天界面预览和交互生成的代码、图表、游戏等内容
  - title: MCP功能
    details: 通过模型控制面板灵活调整系统提示词、温度和输出格式等参数
  - title: 多平台支持
    details: 支持Windows、macOS和Linux多平台，满足不同用户需求
  - title: 知识库集成
    details: 提供知识库管理、智能检索和实时更新等功能（开发中）
footer: Copyright © 2023-present DeepChat
---

# DeepChat 介绍

<div class="hero-section">
  <img src="https://deepchat.thinkinai.xyz/logo.png" alt="DeepChat Logo" class="hero-image">
  <div class="hero-content">
    <h1 class="hero-title">DeepChat</h1>
    <p class="hero-description">基于先进的大型语言模型，提供流畅自然的对话体验</p>
    <div class="hero-actions">
      <a href="/guide/introduction/features" class="action-btn primary">特性详解</a>
      <a href="/guide/introduction/architecture" class="action-btn secondary">架构设计</a>
    </div>
  </div>
</div>

## 什么是DeepChat？

DeepChat融合了最新的AI技术，为用户提供了一个功能丰富、界面友好的聊天平台。它不仅仅是一个简单的对话工具，更是一个强大的内容生成和知识管理助手。无论是日常聊天、知识问答，还是处理文档、生成代码，DeepChat都能满足您的各种需求。

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🤖</div>
    <div class="feature-title">多模型支持</div>
    <div class="feature-desc">兼容多种大型语言模型，包括OpenAI GPT系列、本地模型和自定义API</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">📄</div>
    <div class="feature-title">文档处理</div>
    <div class="feature-desc">支持PDF、Word、TXT等多种格式文档的智能问答和上下文保持</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">⚡</div>
    <div class="feature-title">Artifacts实时交互</div>
    <div class="feature-desc">直接在聊天界面预览和交互生成的代码、图表、游戏等内容</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">⚙️</div>
    <div class="feature-title">MCP功能</div>
    <div class="feature-desc">通过模型控制面板灵活调整系统提示词、温度和输出格式等参数</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">💻</div>
    <div class="feature-title">多平台支持</div>
    <div class="feature-desc">支持Windows、macOS和Linux多平台，满足不同用户需求</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">📚</div>
    <div class="feature-title">知识库集成</div>
    <div class="feature-desc">提供知识库管理、智能检索和实时更新等功能（开发中）</div>
  </div>
</div>

## 为什么选择DeepChat？

<div class="benefits-section">
  <div class="benefit-item">
    <div class="benefit-number">01</div>
    <div class="benefit-content">
      <h3>强大的对话能力</h3>
      <p>基于先进的大型语言模型，DeepChat提供流畅自然的对话体验，能够理解复杂问题并给出准确回答。</p>
    </div>
  </div>
  <div class="benefit-item">
    <div class="benefit-number">02</div>
    <div class="benefit-content">
      <h3>丰富的内容展示</h3>
      <p>支持多种形式的内容展示，包括代码、图表、表格等，让AI生成的内容更加生动直观。</p>
    </div>
  </div>
  <div class="benefit-item">
    <div class="benefit-number">03</div>
    <div class="benefit-content">
      <h3>灵活的定制选项</h3>
      <p>通过MCP功能，用户可以自定义模型行为、调整参数设置，打造专属AI助手。</p>
    </div>
  </div>
</div>

<style>
.introduction-page .theme-default-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.hero-section {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-image {
  width: 180px;
  height: 180px;
  margin-right: 3rem;
}

.hero-content {
  flex: 1;
  min-width: 280px;
}

.hero-title {
  font-size: 3rem;
  margin: 0;
  background: linear-gradient(90deg, var(--c-brand), #8083ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.4rem;
  opacity: 0.9;
  margin: 1rem 0 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
  text-decoration: none;
}

.action-btn.primary {
  background: var(--c-brand);
  color: white;
}

.action-btn.primary:hover {
  background: var(--c-brand-light);
  transform: translateY(-2px);
}

.action-btn.secondary {
  border: 1px solid var(--c-brand);
  color: var(--c-brand);
}

.action-btn.secondary:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: translateY(-2px);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--c-brand);
}

.feature-desc {
  line-height: 1.6;
  color: var(--c-text);
}

.benefits-section {
  margin: 3rem 0;
}

.benefit-item {
  display: flex;
  margin-bottom: 2rem;
}

.benefit-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--c-brand);
  opacity: 0.3;
  margin-right: 2rem;
  line-height: 1;
}

.benefit-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: var(--c-text);
}

.benefit-content p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 719px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-image {
    margin-right: 0;
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .benefit-item {
    flex-direction: column;
  }
  
  .benefit-number {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style> 