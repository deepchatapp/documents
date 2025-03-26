import{_ as r,c as o,a as l,e as d,d as s,b as t,w as e,r as u,o as p}from"./app-Dv7ThJu5.js";const g={},m={href:"https://deepchat.thinkinai.xyz/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://deepchat.thinkinai.xyz/",target:"_blank",rel:"noopener noreferrer"};function b(k,n){const i=u("RouteLink"),a=u("ExternalLinkIcon");return p(),o("div",null,[n[35]||(n[35]=l("h1",{id:"快速开始",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#快速开始"},[l("span",null,"快速开始")])],-1)),n[36]||(n[36]=l("p",null,"欢迎使用 DeepChat！本章节将帮助您快速上手 DeepChat，包括安装、配置和基本使用。",-1)),n[37]||(n[37]=l("h2",{id:"入门指南概览",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#入门指南概览"},[l("span",null,"入门指南概览")])],-1)),n[38]||(n[38]=l("p",null,"快速开始章节包含以下内容：",-1)),l("ol",null,[l("li",null,[s(i,{to:"/guide/getting-started/requirements.html"},{default:e(()=>n[0]||(n[0]=[l("strong",null,"系统要求",-1)])),_:1}),n[1]||(n[1]=t(" - 了解运行 DeepChat 所需的硬件和软件要求"))]),l("li",null,[s(i,{to:"/guide/getting-started/installation.html"},{default:e(()=>n[2]||(n[2]=[l("strong",null,"安装步骤",-1)])),_:1}),n[3]||(n[3]=t(" - 在不同操作系统上安装 DeepChat"))]),l("li",null,[s(i,{to:"/guide/getting-started/initial-setup.html"},{default:e(()=>n[4]||(n[4]=[l("strong",null,"首次使用配置",-1)])),_:1}),n[5]||(n[5]=t(" - 完成初始设置，连接到大语言模型"))]),l("li",null,[s(i,{to:"/guide/getting-started/basic-demo.html"},{default:e(()=>n[6]||(n[6]=[l("strong",null,"基础功能演示",-1)])),_:1}),n[7]||(n[7]=t(" - 使用 DeepChat 的基本功能"))])]),n[39]||(n[39]=l("p",null,"按照上述步骤，您将能够在几分钟内开始使用 DeepChat 进行智能对话。",-1)),n[40]||(n[40]=l("h2",{id:"快速安装指引",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#快速安装指引"},[l("span",null,"快速安装指引")])],-1)),n[41]||(n[41]=l("p",null,"如果您希望立即开始使用，以下是最常见平台的快速安装步骤：",-1)),n[42]||(n[42]=l("h3",{id:"windows",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#windows"},[l("span",null,"Windows")])],-1)),l("ol",null,[l("li",null,[n[9]||(n[9]=t("访问 ")),l("a",m,[n[8]||(n[8]=t("DeepChat 官网")),s(a)]),n[10]||(n[10]=t(" 下载页面"))]),n[11]||(n[11]=l("li",null,"下载最新版本的 Windows 安装程序 (.exe 文件)",-1)),n[12]||(n[12]=l("li",null,"运行下载的安装程序，按照向导操作",-1)),n[13]||(n[13]=l("li",null,"安装完成后，从开始菜单或桌面快捷方式启动 DeepChat",-1))]),n[43]||(n[43]=l("h3",{id:"macos",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#macos"},[l("span",null,"macOS")])],-1)),l("ol",null,[l("li",null,[n[15]||(n[15]=t("访问 ")),l("a",f,[n[14]||(n[14]=t("DeepChat 官网")),s(a)]),n[16]||(n[16]=t(" 下载页面"))]),n[17]||(n[17]=l("li",null,"下载最新版本的 macOS 安装程序 (.dmg 文件)",-1)),n[18]||(n[18]=l("li",null,"打开下载的 .dmg 文件",-1)),n[19]||(n[19]=l("li",null,"将 DeepChat 应用拖动到应用程序文件夹",-1)),n[20]||(n[20]=l("li",null,"从启动台或应用程序文件夹启动 DeepChat",-1))]),n[44]||(n[44]=d(`<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>对于 Ubuntu/Debian 系统：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加 DeepChat 仓库</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://deepchat.thinkinai.xyz/linux/ubuntu/gpg.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -</span>
<span class="line"><span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://deepchat.thinkinai.xyz/linux/ubuntu stable main&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新并安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> deepchat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),l("p",null,[n[22]||(n[22]=t("更多 Linux 安装选项请参考")),s(i,{to:"/guide/getting-started/installation.html"},{default:e(()=>n[21]||(n[21]=[t("安装步骤")])),_:1}),n[23]||(n[23]=t("页面。"))]),n[45]||(n[45]=l("h2",{id:"安装后的首要步骤",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#安装后的首要步骤"},[l("span",null,"安装后的首要步骤")])],-1)),n[46]||(n[46]=l("p",null,"安装完成 DeepChat 后，您需要：",-1)),n[47]||(n[47]=l("ol",null,[l("li",null,[l("strong",null,"连接模型"),t("：设置 API 密钥或连接到本地模型")]),l("li",null,[l("strong",null,"基本设置"),t("：调整界面语言、主题和其他基本设置")]),l("li",null,[l("strong",null,"创建对话"),t("：开始您的第一次 AI 对话")])],-1)),l("p",null,[n[25]||(n[25]=t("这些步骤在")),s(i,{to:"/guide/getting-started/initial-setup.html"},{default:e(()=>n[24]||(n[24]=[t("首次使用配置")])),_:1}),n[26]||(n[26]=t("中有详细介绍。"))]),n[48]||(n[48]=l("h2",{id:"视频教程",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#视频教程"},[l("span",null,"视频教程")])],-1)),n[49]||(n[49]=l("p",null,"观看我们的入门视频教程，了解 DeepChat 的基本使用方法：",-1)),n[50]||(n[50]=l("div",{class:"video-container"},[l("iframe",{src:"https://player.bilibili.com/player.html?aid=123456789&bvid=BV1xx411c7mD&cid=123456789&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"})],-1)),n[51]||(n[51]=l("h2",{id:"常见问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#常见问题"},[l("span",null,"常见问题")])],-1)),n[52]||(n[52]=l("p",null,"在开始使用过程中可能遇到的常见问题：",-1)),n[53]||(n[53]=l("ul",null,[l("li",null,[l("strong",null,"无法连接到模型"),t("：确保您的 API 密钥正确，网络连接正常")]),l("li",null,[l("strong",null,"安装失败"),t("：检查系统是否满足最低要求，或尝试最新版本")]),l("li",null,[l("strong",null,"界面显示异常"),t("：尝试调整显示设置或重新启动应用")])],-1)),l("p",null,[n[29]||(n[29]=t("如果您遇到其他问题，请参考")),s(i,{to:"/guide/troubleshooting/"},{default:e(()=>n[27]||(n[27]=[t("故障排除")])),_:1}),n[30]||(n[30]=t("章节，或加入我们的")),s(i,{to:"/guide/community/"},{default:e(()=>n[28]||(n[28]=[t("社区支持")])),_:1}),n[31]||(n[31]=t("获取帮助。"))]),l("p",null,[n[33]||(n[33]=t("准备好开始了吗？让我们先了解 DeepChat 的")),s(i,{to:"/guide/getting-started/requirements.html"},{default:e(()=>n[32]||(n[32]=[t("系统要求")])),_:1}),n[34]||(n[34]=t("。"))])])}const v=r(g,[["render",b]]),C=JSON.parse('{"path":"/guide/getting-started/","title":"快速开始","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"入门指南概览","slug":"入门指南概览","link":"#入门指南概览","children":[]},{"level":2,"title":"快速安装指引","slug":"快速安装指引","link":"#快速安装指引","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"macOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]}]},{"level":2,"title":"安装后的首要步骤","slug":"安装后的首要步骤","link":"#安装后的首要步骤","children":[]},{"level":2,"title":"视频教程","slug":"视频教程","link":"#视频教程","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1742733434000,"updatedTime":1742921049000,"contributors":[{"name":"袁鑫","email":"eric.yuanxin@gmail.com","commits":2}]},"filePathRelative":"guide/getting-started/README.md"}');export{v as comp,C as data};
