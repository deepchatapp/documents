# 系统要求

在安装 DeepChat 前，请确保您的系统满足以下要求，以获得最佳使用体验。

## 支持的操作系统

DeepChat 支持以下主流操作系统：

### Windows

- Windows 10 64位（1809或更高版本）
- Windows 11 64位（所有版本）
- Windows Server 2019/2022

::: tip 提示
我们强烈建议保持 Windows 操作系统为最新版本，以确保最佳的安全性和兼容性。
:::

### macOS

- macOS 10.15 (Catalina) 或更高版本
- 支持 Intel 芯片和 Apple Silicon (M1/M2/M3) 芯片

::: warning 注意
对于 Apple Silicon 芯片，应用会通过 Rosetta 2 运行，原生 ARM 版本正在开发中。
:::

### Linux

- Ubuntu 20.04 LTS 或更高版本
- Debian 11 或更高版本
- Fedora 35 或更高版本
- CentOS 8 或更高版本
- 其他支持 AppImage 的主流 Linux 发行版

::: tip 小贴士
虽然我们提供针对特定发行版的安装包，但 AppImage 格式几乎可以在任何现代 Linux 发行版上运行。
:::

## 硬件要求

### 最低配置

DeepChat 可以在满足以下最低配置的设备上运行：

- **处理器**：双核处理器，2.0GHz 或更高
- **内存**：4GB RAM
- **存储空间**：500MB 可用空间
- **显示器**：分辨率 1280x720 或更高
- **网络**：互联网连接（使用在线模型时需要）

### 推荐配置

为获得最佳体验，我们推荐以下配置：

- **处理器**：四核处理器，2.5GHz 或更高
- **内存**：8GB RAM 或更高
- **存储空间**：2GB 或更多可用空间（如果需要存储大量对话历史和文档）
- **显示器**：分辨率 1920x1080 或更高
- **网络**：稳定的高速互联网连接

### 本地模型配置

如果您计划运行本地模型，则需要更高的硬件配置：

- **处理器**：支持 AVX2 指令集的现代多核处理器
- **内存**：
  - 小型模型 (7B)：至少 16GB RAM
  - 中型模型 (13B)：至少 24GB RAM
  - 大型模型 (70B+)：至少 32GB RAM 和支持的 GPU
- **GPU**：支持 CUDA 的 NVIDIA GPU，至少 8GB 显存（用于加速推理）
- **存储空间**：至少 20GB 可用空间（用于存储模型文件）

## 网络要求

使用 DeepChat 的完整功能需要以下网络条件：

- **互联网连接**：使用在线模型时需要稳定的互联网连接
- **带宽**：推荐至少 5Mbps 下行速度
- **防火墙设置**：确保能够访问以下域名：
  - api.openai.com（用于 OpenAI 模型）
  - api.anthropic.com（用于 Claude 模型）
  - deepchat.thinkinai.xyz（用于更新和服务通知）
  - 其他第三方模型 API 域名（根据您使用的模型而定）

::: tip 离线使用
DeepChat 支持离线模式，您可以在没有互联网连接的情况下使用本地部署的模型。
:::

## 软件依赖

DeepChat 是一个独立应用，包含了运行所需的大部分依赖。不过，在某些情况下可能需要：

- **Windows**：最新版本的 Microsoft Visual C++ Redistributable（安装程序会自动检查并安装）
- **macOS**：Rosetta 2（在 Apple Silicon Mac 上首次运行时会自动提示安装）
- **Linux**：根据发行版可能需要额外的库，安装程序会提示缺少的依赖

## 移动设备支持

目前 DeepChat 主要针对桌面设备设计，但我们提供有限的移动设备支持：

- **移动网页版**：通过浏览器访问 DeepChat Web 版本
- **平板电脑**：在 iPad OS 和 Android 平板上通过浏览器使用
- **原生应用**：iOS 和 Android 原生应用正在开发中

## 检查系统兼容性

在安装前，您可以使用我们的[系统兼容性检查工具](https://deepchat.thinkinai.xyz/compatibility-check)来确认您的设备是否满足运行 DeepChat 的要求。

下一步：[安装步骤](./installation.md) 