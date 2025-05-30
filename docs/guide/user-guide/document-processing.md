# 文档处理

DeepChat 支持在对话框中上传多个不同格式的文档作为附件，然后解析文件内容，结合用户提问与大模型进行问答。本页面将详细介绍如何使用文档处理功能。

## 支持的文档格式

DeepChat 支持以下文档格式：

- **文本文件**：TXT, MD, RTF
- **办公文档**：DOCX, DOC, PPTX, PPT, XLSX, XLS, CSV
- **PDF文件**：PDF
- **代码文件**：JS, PY, JAVA, C, CPP, CS, HTML, CSS, JSON, XML 等
- **图像文件**：JPG, JPEG, PNG, BMP, GIF, WEBP (支持OCR提取文本)

## 上传文档

### 方法一：拖拽上传

1. 直接将文件从你的计算机拖拽到对话框中
2. 文件会自动上传并处理

### 方法二：附件按钮

1. 点击输入框旁边的"📎"(回形针)图标
2. 在弹出的文件选择器中选择要上传的文件
3. 点击"打开"按钮

### 方法三：复制粘贴

1. 复制文件（在文件管理器中选择文件并按 `Ctrl+C` 或 `Cmd+C`）
2. 在对话框中粘贴（按 `Ctrl+V` 或 `Cmd+V`）

## 文档处理流程

上传文档后，DeepChat会自动进行以下处理：

1. **文件上传**：将文件上传到本地/服务器
2. **格式识别**：识别文件格式，选择合适的解析方法
3. **内容提取**：提取文档中的文本内容
   - 对于图像文件，使用OCR技术提取文本
   - 对于结构化文档，保留文档的逻辑结构
4. **内容分析**：分析文档内容，建立语义索引
5. **准备就绪**：显示文档已准备就绪的提示

## 文档问答

文档上传并处理完成后，你可以开始基于文档进行提问：

### 基本问答

直接输入与文档相关的问题，例如：

```
这份文档的主要内容是什么？
```

```
请总结第二章的关键观点
```

### 高级问答技巧

#### 多文档交叉引用

上传多个相关文档后，可以进行交叉引用：

```
比较这两份报告的主要结论有何异同？
```

#### 指定文档问答

当上传多个文档时，可以指定特定文档：

```
根据第一个Excel文件，销售额最高的产品是什么？
```

#### 深度分析

要求模型对文档进行深度分析：

```
分析这份研究论文的方法论优缺点
```

## 文档管理

### 查看已上传文档

1. 点击对话框右上角的"附件"按钮
2. 查看当前对话中已上传的所有文档

### 删除文档

1. 点击对话框右上角的"附件"按钮
2. 在文档列表中找到要删除的文档
3. 点击文档旁边的"删除"图标

### 重新上传

如果文档内容有更新，可以重新上传：

1. 删除原文档
2. 上传新版本的文档

## 文档处理设置

可以在设置中调整文档处理相关的参数：

1. 打开设置 > 文档处理
2. 调整以下选项：
   - 最大文档大小
   - OCR语言设置
   - 文档处理优先级
   - 文档缓存设置
3. 点击"保存"应用设置

## 注意事项

- 大型文档处理可能需要一定时间，请耐心等待
- 文档越复杂，解析准确度可能受影响
- 一次对话中上传的文档总大小有限制
- 目前OCR功能支持的语言包括：中文、英文、日文、韩文、法文、德文等主要语言 