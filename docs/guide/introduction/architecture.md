---
pageClass: architecture-page
---

# 技术架构

DeepChat 采用现代化的软件架构设计，确保系统的稳定性、可扩展性和优秀的用户体验。本页面介绍 DeepChat 的整体架构和关键组件。

## 系统架构概览 <Badge text="系统设计" type="tip"/>

DeepChat 采用客户端-服务器架构，主要由以下几个部分组成：

- **前端界面**：基于 Electron 和现代 Web 技术构建的跨平台桌面应用
- **本地服务**：处理用户请求、模型调用、文档处理等核心功能
- **模型接口层**：连接各种大语言模型的统一接口
- **插件系统**：提供功能扩展能力
- **存储层**：管理对话历史、用户设置和知识库数据

系统架构图：

![DeepChat架构图](https://deepchat.thinkinai.xyz/chat-screenshot.png)

## 前端技术栈 <Badge text="技术选型" type="warning"/>

DeepChat 前端采用现代 Web 技术栈开发：

- **Electron**：跨平台桌面应用框架，确保 Windows、macOS 和 Linux 平台的一致体验
- **Vue.js**：响应式前端框架，提供高效的组件化开发体验
- **Tailwind CSS**：实用优先的 CSS 框架，确保界面美观且易于维护
- **Monaco Editor**：强大的代码编辑器组件，提供代码高亮和智能提示
- **ECharts**：数据可视化图表库，支持多种图表类型

前端架构采用组件化设计，将不同功能模块解耦，便于维护和扩展。界面设计遵循现代设计原则，注重用户体验和可访问性。

## 后端技术栈 <Badge text="服务构建" type="warning"/>

后端服务采用高性能的技术组件：

- **Node.js**：主要运行环境，提供高效的异步 I/O 能力
- **Express**：轻量级 Web 服务框架，处理 API 请求
- **WebSocket**：实现客户端和服务器之间的实时双向通信
- **SQLite**：嵌入式数据库，用于本地数据存储
- **文档处理库**：支持 PDF、Word、Excel 等多种格式文档的解析

后端服务作为本地服务运行，避免了网络延迟，同时保护用户数据隐私。

## 模型集成架构 <Badge text="核心功能" type="tip"/>

DeepChat 的模型集成架构是系统的核心，它提供了统一的接口连接不同的大语言模型：

- **模型抽象层**：定义统一的模型接口，屏蔽不同模型 API 的差异
- **适配器模式**：为每种模型提供专用适配器，处理特定模型的请求格式和响应解析
- **参数映射**：将通用参数映射到特定模型的参数体系
- **流式传输**：支持模型响应的流式传输，提供实时反馈
- **错误处理**：统一的错误处理机制，提高系统稳定性

这种架构设计使得 DeepChat 可以轻松集成新的模型，并为用户提供一致的使用体验。

## 数据流程 <Badge text="核心流程" type="tip"/>

典型的用户请求在 DeepChat 中的处理流程：

1. **用户输入**：用户在界面输入消息或上传文档
2. **前端处理**：前端组件进行初步处理，如UI更新和本地缓存
3. **请求传递**：请求通过 IPC 通道传递到本地服务
4. **上下文构建**：系统根据对话历史构建完整的上下文
5. **模型调用**：通过适配器调用选定的大语言模型
6. **流式响应**：模型生成的响应实时传回前端
7. **内容渲染**：前端进行格式化和特殊内容（如代码、表格）的渲染
8. **状态更新**：更新对话历史和相关状态

整个流程优化了响应速度和用户体验，特别是通过流式传输提供即时反馈。

## 插件系统 <Badge text="扩展能力" type="tip"/>

DeepChat 设计了模块化的插件系统，支持功能扩展：

- **核心API**：提供插件开发的基础 API 和接口
- **事件机制**：基于发布-订阅模式的事件系统，允许插件监听和触发事件
- **生命周期钩子**：插件可以在不同阶段执行自定义逻辑
- **配置系统**：支持插件的自定义配置
- **插件市场**：发现和安装社区开发的插件

插件系统使得 DeepChat 可以根据用户需求不断扩展功能，同时保持核心系统的简洁和稳定。

## 安全性设计 <Badge text="安全保障" type="danger"/>

DeepChat 高度重视用户数据安全：

- **本地优先**：对话数据和文档默认存储在本地，不经用户许可不会上传到云端
- **加密传输**：与模型服务的通信采用加密传输，保护数据安全
- **权限控制**：严格的 API 权限控制，防止未授权访问
- **沙箱机制**：第三方插件在沙箱环境中运行，限制访问范围
- **隐私保护**：用户可以选择性地删除历史记录和上传的文档

安全性设计贯穿整个系统架构，确保用户数据的安全和隐私。

## 可扩展性 <Badge text="未来规划" type="warning"/>

DeepChat 的架构设计考虑了未来的扩展需求：

- **多模型支持**：统一的模型接口便于接入新的大语言模型
- **多语言支持**：国际化框架支持添加新的语言包
- **主题定制**：可定制的 UI 主题系统，支持深色模式和自定义主题
- **功能模块**：模块化设计允许功能的灵活组合和定制
- **API扩展**：预留了 API 扩展点，便于添加新功能

这种前瞻性设计确保 DeepChat 可以随着技术发展和用户需求不断进化。

## 部署选项 <Badge text="部署方式" type="tip"/>

DeepChat 支持多种部署方式，满足不同场景需求：

- **桌面应用**：标准部署方式，适合个人用户
- **私有部署**：企业可以在内部网络部署 DeepChat 服务
- **云服务集成**：支持与云服务集成，提供更强大的计算能力
- **混合模式**：结合本地处理和云服务的优势

不同的部署方式为用户提供了灵活选择，平衡便捷性、性能和数据控制。

通过这些架构设计，DeepChat 实现了高性能、可扩展性和优秀用户体验的平衡，为用户提供强大而灵活的 AI 对话平台。

下一步，您可以[快速开始](../getting-started/)使用 DeepChat，或了解其[核心功能](../core-features/)。

<style>
.architecture-page {
  --arch-primary: var(--c-brand);
  --arch-bg: #f8f9fa;
  --arch-card-bg: white;
  --arch-shadow: rgba(0, 0, 0, 0.05);
}

.architecture-container {
  max-width: 100%;
  margin: 0 auto;
}

.architecture-diagram {
  margin: 2rem 0;
  text-align: center;
}

.arch-img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--arch-shadow);
}

.arch-component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}

.arch-component {
  background: var(--arch-card-bg);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px var(--arch-shadow);
  transition: transform 0.3s;
}

.arch-component:hover {
  transform: translateY(-5px);
}

.comp-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--arch-primary);
}

.comp-desc {
  color: var(--c-text);
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 2rem 0;
}

.tech-item {
  flex: 0 0 calc(20% - 16px);
  background: var(--arch-card-bg);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px var(--arch-shadow);
  text-align: center;
  transition: transform 0.3s;
}

.tech-item:hover {
  transform: translateY(-5px);
}

.tech-logo {
  font-size: 2rem;
  margin-bottom: 8px;
}

.tech-name {
  font-weight: 600;
  color: var(--arch-primary);
  margin-bottom: 4px;
}

.tech-desc {
  font-size: 0.9rem;
  color: var(--c-text);
}

.process-flow {
  margin: 2rem 0;
}

.process-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 12px;
  background: var(--arch-card-bg);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--arch-shadow);
}

.step-number {
  background: var(--arch-primary);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 16px;
}

.step-desc {
  line-height: 1.5;
}

@media (max-width: 719px) {
  .tech-item {
    flex: 0 0 calc(50% - 16px);
  }
  
  .arch-component-grid {
    grid-template-columns: 1fr;
  }
}
</style> 