# 快速开始

欢迎使用 DeepChat！本章节将帮助您快速上手 DeepChat，包括安装、配置和基本使用。

## 入门指南概览

快速开始章节包含以下内容：

1. [**系统要求**](./requirements.md) - 了解运行 DeepChat 所需的硬件和软件要求
2. [**安装步骤**](./installation.md) - 在不同操作系统上安装 DeepChat
3. [**首次使用配置**](./initial-setup.md) - 完成初始设置，连接到大语言模型
4. [**基础功能演示**](./basic-demo.md) - 使用 DeepChat 的基本功能

按照上述步骤，您将能够在几分钟内开始使用 DeepChat 进行智能对话。

## 快速安装指引

如果您希望立即开始使用，以下是最常见平台的快速安装步骤：

### Windows

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/) 下载页面
2. 下载最新版本的 Windows 安装程序 (.exe 文件)
3. 运行下载的安装程序，按照向导操作
4. 安装完成后，从开始菜单或桌面快捷方式启动 DeepChat

### macOS

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/) 下载页面
2. 下载最新版本的 macOS 安装程序 (.dmg 文件)
3. 打开下载的 .dmg 文件
4. 将 DeepChat 应用拖动到应用程序文件夹
5. 从启动台或应用程序文件夹启动 DeepChat

### Linux

对于 Ubuntu/Debian 系统：

```bash
# 添加 DeepChat 仓库
curl -s https://deepchat.thinkinai.xyz/linux/ubuntu/gpg.key | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://deepchat.thinkinai.xyz/linux/ubuntu stable main"

# 更新并安装
sudo apt update
sudo apt install deepchat
```

更多 Linux 安装选项请参考[安装步骤](./installation.md)页面。

## 安装后的首要步骤

安装完成 DeepChat 后，您需要：

1. **连接模型**：设置 API 密钥或连接到本地模型
2. **基本设置**：调整界面语言、主题和其他基本设置
3. **创建对话**：开始您的第一次 AI 对话

这些步骤在[首次使用配置](./initial-setup.md)中有详细介绍。

## 视频教程

观看我们的入门视频教程，了解 DeepChat 的基本使用方法：

<div class="video-container">
  <iframe src="https://player.bilibili.com/player.html?aid=123456789&bvid=BV1xx411c7mD&cid=123456789&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 常见问题

在开始使用过程中可能遇到的常见问题：

- **无法连接到模型**：确保您的 API 密钥正确，网络连接正常
- **安装失败**：检查系统是否满足最低要求，或尝试最新版本
- **界面显示异常**：尝试调整显示设置或重新启动应用

如果您遇到其他问题，请参考[故障排除](../troubleshooting/)章节，或加入我们的[社区支持](../community/)获取帮助。

准备好开始了吗？让我们先了解 DeepChat 的[系统要求](./requirements.md)。 