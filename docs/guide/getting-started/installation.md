# 下载安装

DeepChat 支持 Windows、macOS 和 Linux 平台。请根据你的操作系统选择相应的安装方式。

## Windows

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/) 下载页面
2. 下载最新版本的 `.exe` 安装文件
3. 运行下载的安装文件
4. 按照安装向导的指引完成安装

## macOS

1. 访问 [DeepChat 官网](https://deepchat.thinkinai.xyz/) 下载页面
2. 下载最新版本的 `.dmg` 安装文件
3. 打开下载的 `.dmg` 文件
4. 将 DeepChat 应用拖动到应用程序文件夹中
5. 首次运行时，可能需要在「系统偏好设置 > 安全性与隐私」中允许打开应用

## Linux

### Ubuntu/Debian

```bash
# 添加 DeepChat 仓库
curl -s https://deepchat.thinkinai.xyz/linux/ubuntu/gpg.key | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://deepchat.thinkinai.xyz/linux/ubuntu stable main"

# 更新并安装
sudo apt update
sudo apt install deepchat
```

### Fedora/RHEL

```bash
# 添加 DeepChat 仓库
sudo rpm --import https://deepchat.thinkinai.xyz/linux/fedora/gpg.key
sudo dnf config-manager --add-repo https://deepchat.thinkinai.xyz/linux/fedora/deepchat.repo

# 安装
sudo dnf install deepchat
```

### Arch Linux

通过 AUR 安装：

```bash
yay -S deepchat
```

## 从源码构建

如果你需要从源码构建 DeepChat，请参考我们的 [GitHub 仓库](https://github.com/thinkinai/deepchat)。

## 验证安装

安装完成后，启动 DeepChat 应用。如果一切顺利，你将看到欢迎页面。 