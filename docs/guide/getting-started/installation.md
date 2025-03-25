# 安装步骤

本页面提供了在各种操作系统上安装 DeepChat 的详细指南。请根据您的操作系统选择相应的安装方法。

## Windows 安装

### 方法 1：使用安装程序（推荐）

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/downloads) 下载页面
2. 下载最新版本的 Windows 安装程序 (.exe 文件)
3. 运行下载的安装程序
4. 根据安装向导的提示完成安装：
   - 选择安装位置
   - 选择是否创建桌面快捷方式
   - 选择是否添加到开始菜单
5. 点击"完成"完成安装

### 方法 2：便携版

如果您希望在不需要管理员权限的情况下使用 DeepChat，或者希望在可移动设备上使用：

1. 在 [DeepChat 官网](https://deepchat.thinkinai.xyz/downloads) 下载便携版 (.zip 文件)
2. 解压缩下载的文件到您选择的位置
3. 运行解压后文件夹中的 `DeepChat.exe`

::: warning 注意
便携版不会自动更新，您需要手动下载并替换新版本。
:::

### 方法 3：使用 Winget（命令行）

如果您习惯使用命令行，可以通过 Windows 包管理器 Winget 安装：

```powershell
winget install DeepChat
```

要更新到最新版本：

```powershell
winget upgrade DeepChat
```

## macOS 安装

### 方法 1：使用 DMG 安装程序（推荐）

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/downloads) 下载页面
2. 下载最新版本的 macOS 安装程序 (.dmg 文件)
3. 打开下载的 .dmg 文件
4. 将 DeepChat 应用图标拖动到"应用程序"文件夹图标中
5. 关闭安装窗口
6. 从"应用程序"文件夹或 Launchpad 启动 DeepChat

::: tip 首次运行
首次运行时，macOS 可能会显示安全警告。请右键点击应用图标，选择"打开"，然后在弹出的对话框中确认打开。
:::

### 方法 2：使用 Homebrew

如果您已安装 Homebrew，可以通过命令行安装 DeepChat：

```bash
brew install --cask deepchat
```

要更新到最新版本：

```bash
brew upgrade --cask deepchat
```

## Linux 安装

Linux 上有多种安装方式，请根据您的发行版选择：

### Ubuntu/Debian（使用 APT）

添加 DeepChat 仓库并安装：

```bash
# 添加 GPG 密钥
curl -s https://deepchat.thinkinai.xyz/linux/ubuntu/gpg.key | sudo apt-key add -

# 添加 DeepChat 仓库
sudo add-apt-repository "deb [arch=amd64] https://deepchat.thinkinai.xyz/linux/ubuntu stable main"

# 更新软件包列表
sudo apt update

# 安装 DeepChat
sudo apt install deepchat
```

### Fedora/RHEL（使用 DNF）

添加 DeepChat 仓库并安装：

```bash
# 导入 GPG 密钥
sudo rpm --import https://deepchat.thinkinai.xyz/linux/fedora/gpg.key

# 添加 DeepChat 仓库
sudo dnf config-manager --add-repo https://deepchat.thinkinai.xyz/linux/fedora/deepchat.repo

# 安装 DeepChat
sudo dnf install deepchat
```

### Arch Linux（使用 AUR）

使用 AUR 助手安装：

```bash
# 使用 yay
yay -S deepchat

# 或使用 paru
paru -S deepchat
```

### 通用 Linux（使用 AppImage）

适用于任何 Linux 发行版：

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/downloads) 下载页面
2. 下载最新版本的 AppImage 文件
3. 为下载的文件添加执行权限：
   ```bash
   chmod +x DeepChat-*.AppImage
   ```
4. 运行 AppImage 文件：
   ```bash
   ./DeepChat-*.AppImage
   ```

::: tip 集成到桌面
您可以使用 `AppImageLauncher` 工具将 AppImage 集成到桌面环境，创建菜单项和关联。
:::

## 验证安装

安装完成后，启动 DeepChat 应用。如果安装成功，您将看到 DeepChat 的欢迎界面。

## 更新 DeepChat

DeepChat 支持自动更新。当新版本可用时，应用会通知您并提供更新选项。您也可以：

- **Windows**：通过安装程序安装新版本（会自动升级）
- **macOS**：下载并安装新的 .dmg 文件
- **Linux**：使用相应的包管理器更新

## 卸载方法

如需卸载 DeepChat：

- **Windows**：通过"设置"→"应用程序"→"应用和功能"卸载，或使用安装目录中的卸载程序
- **macOS**：将应用从"应用程序"文件夹拖到垃圾桶
- **Linux**：使用相应的包管理器卸载（如 `sudo apt remove deepchat`）

## 常见安装问题排查

| 问题 | 可能的解决方法 |
|------|--------------|
| 安装程序无法启动 | 确保您有足够的权限；尝试以管理员身份运行 |
| "无法验证开发者"错误 | 在 macOS 上，右键点击应用并选择"打开" |
| 依赖库缺失 | 安装提示的依赖项；在 Linux 上可能需要额外的库 |
| 启动时崩溃 | 检查系统要求；尝试重新安装最新版本 |
| 无法连接到服务器 | 检查网络连接和防火墙设置 |

如果您遇到其他安装问题，请参考[故障排除](../troubleshooting/)章节，或访问我们的[支持论坛](https://deepchat.thinkinai.xyz/forum)寻求帮助。

下一步：[首次使用配置](./initial-setup.md) 