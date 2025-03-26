import{_ as p,c as d,e as a,a as t,b as i,d as e,w as r,r as s,o as u}from"./app-Dv7ThJu5.js";const h={},g={href:"https://platform.openai.com/account/api-keys",target:"_blank",rel:"noopener noreferrer"},q={href:"https://console.anthropic.com/",target:"_blank",rel:"noopener noreferrer"};function x(k,l){const n=s("ExternalLinkIcon"),o=s("RouteLink");return u(),d("div",null,[l[21]||(l[21]=a('<h1 id="首次使用配置" tabindex="-1"><a class="header-anchor" href="#首次使用配置"><span>首次使用配置</span></a></h1><p>成功安装 DeepChat 后，您需要进行一些初始设置，包括连接到大语言模型和基本偏好设置。本指南将帮助您完成这些步骤，快速开始使用 DeepChat。</p><h2 id="首次启动向导" tabindex="-1"><a class="header-anchor" href="#首次启动向导"><span>首次启动向导</span></a></h2><p>首次打开 DeepChat 时，您会看到欢迎向导，引导您完成初始设置：</p><ol><li><strong>欢迎界面</strong>：点击&quot;开始设置&quot;进入配置流程</li><li><strong>选择语言</strong>：选择您偏好的界面语言</li><li><strong>选择主题</strong>：选择浅色、深色或跟随系统主题</li><li><strong>连接模型</strong>：设置您要使用的大语言模型</li><li><strong>隐私设置</strong>：配置数据存储和使用统计选项</li><li><strong>完成设置</strong>：点击&quot;完成&quot;开始使用 DeepChat</li></ol><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>如果您不想按照向导操作，可以点击&quot;跳过&quot;，稍后在设置中进行配置。</p></div><h2 id="连接大语言模型" tabindex="-1"><a class="header-anchor" href="#连接大语言模型"><span>连接大语言模型</span></a></h2><p>DeepChat 支持多种大语言模型，您需要选择并配置至少一种模型：</p><h3 id="配置-openai-api" tabindex="-1"><a class="header-anchor" href="#配置-openai-api"><span>配置 OpenAI API</span></a></h3><p>使用 OpenAI 的 GPT 系列模型（如 GPT-3.5-Turbo、GPT-4）：</p>',10)),t("ol",null,[l[3]||(l[3]=t("li",null,'从下拉菜单中选择"OpenAI"',-1)),t("li",null,[l[1]||(l[1]=i("前往 ")),t("a",g,[l[0]||(l[0]=i("OpenAI API 平台")),e(n)]),l[2]||(l[2]=i(" 创建账户并获取 API 密钥"))]),l[4]||(l[4]=t("li",null,"将 API 密钥粘贴到相应字段",-1)),l[5]||(l[5]=t("li",null,"选择默认模型（如 GPT-4）",-1)),l[6]||(l[6]=t("li",null,'点击"验证"测试连接',-1)),l[7]||(l[7]=t("li",null,"设置可选的默认参数（温度、上下文窗口等）",-1))]),l[22]||(l[22]=t("h3",{id:"配置-claude-api",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置-claude-api"},[t("span",null,"配置 Claude API")])],-1)),l[23]||(l[23]=t("p",null,"使用 Anthropic 的 Claude 系列模型：",-1)),t("ol",null,[l[11]||(l[11]=t("li",null,'从下拉菜单中选择"Claude"',-1)),t("li",null,[l[9]||(l[9]=i("前往 ")),t("a",q,[l[8]||(l[8]=i("Anthropic 控制台")),e(n)]),l[10]||(l[10]=i(" 注册账户并获取 API 密钥"))]),l[12]||(l[12]=t("li",null,"将 API 密钥粘贴到相应字段",-1)),l[13]||(l[13]=t("li",null,"选择默认模型（如 Claude 3 Opus）",-1)),l[14]||(l[14]=t("li",null,'点击"验证"测试连接',-1))]),l[24]||(l[24]=a('<h3 id="配置本地模型" tabindex="-1"><a class="header-anchor" href="#配置本地模型"><span>配置本地模型</span></a></h3><p>使用本地部署的开源模型：</p><ol><li>从下拉菜单中选择&quot;本地模型&quot;</li><li>选择本地服务类型： <ul><li>LM Studio</li><li>Ollama</li><li>llama.cpp</li><li>Text Generation WebUI</li></ul></li><li>输入服务地址（默认为 <code>http://localhost:端口号</code>）</li><li>点击&quot;连接&quot;测试连接</li></ol><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>使用本地模型前，需要先安装并运行相应的模型服务器软件。</p></div><h3 id="配置自定义-api-端点" tabindex="-1"><a class="header-anchor" href="#配置自定义-api-端点"><span>配置自定义 API 端点</span></a></h3><p>对于其他大语言模型 API：</p><ol><li>从下拉菜单中选择&quot;自定义 API&quot;</li><li>输入 API 端点 URL</li><li>选择认证方式（API 密钥、Bearer 令牌等）</li><li>输入认证凭据</li><li>配置请求格式和响应解析设置</li><li>点击&quot;验证&quot;测试连接</li></ol><h2 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置"><span>基本设置</span></a></h2><p>除了模型配置外，以下是一些建议的基本设置：</p><h3 id="存储设置" tabindex="-1"><a class="header-anchor" href="#存储设置"><span>存储设置</span></a></h3><p>配置数据如何存储和管理：</p><ol><li>在左侧菜单中选择&quot;设置&quot;→&quot;存储&quot;</li><li>设置对话历史存储位置</li><li>配置自动清理选项</li><li>设置备份频率（如果需要）</li></ol><h3 id="界面设置" tabindex="-1"><a class="header-anchor" href="#界面设置"><span>界面设置</span></a></h3><p>自定义 DeepChat 的外观和行为：</p><ol><li>在左侧菜单中选择&quot;设置&quot;→&quot;界面&quot;</li><li>选择字体大小和字体系列</li><li>调整界面布局（紧凑、舒适或宽敞）</li><li>配置代码块和消息格式设置</li></ol><h3 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h3><p>配置键盘快捷键：</p><ol><li>在左侧菜单中选择&quot;设置&quot;→&quot;快捷键&quot;</li><li>查看默认快捷键列表</li><li>根据需要自定义快捷键</li></ol><h2 id="创建第一个对话" tabindex="-1"><a class="header-anchor" href="#创建第一个对话"><span>创建第一个对话</span></a></h2><p>完成初始设置后，您可以开始使用 DeepChat：</p><ol><li>点击左侧的&quot;+&quot;按钮创建新对话</li><li>选择要使用的模型和模式（自由对话、文档助手等）</li><li>在输入框中输入您的第一条消息</li><li>按&quot;发送&quot;按钮或使用快捷键（Enter 或 Ctrl+Enter）发送消息</li><li>等待 AI 响应</li></ol><h2 id="导入和导出设置" tabindex="-1"><a class="header-anchor" href="#导入和导出设置"><span>导入和导出设置</span></a></h2><p>如果您需要在多台设备上使用相同的配置，或备份您的设置：</p><h3 id="导出设置" tabindex="-1"><a class="header-anchor" href="#导出设置"><span>导出设置</span></a></h3><ol><li>在左侧菜单中选择&quot;设置&quot;→&quot;高级&quot;</li><li>点击&quot;导出设置&quot;按钮</li><li>选择要包含的设置项（模型配置、界面设置、快捷键等）</li><li>点击&quot;导出&quot;并选择保存位置</li></ol><h3 id="导入设置" tabindex="-1"><a class="header-anchor" href="#导入设置"><span>导入设置</span></a></h3><ol><li>在左侧菜单中选择&quot;设置&quot;→&quot;高级&quot;</li><li>点击&quot;导入设置&quot;按钮</li><li>选择之前导出的设置文件</li><li>选择要导入的设置项</li><li>点击&quot;导入&quot;应用设置</li></ol><h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2><p>初始设置过程中可能遇到的常见问题：</p><table><thead><tr><th>问题</th><th>解决方法</th></tr></thead><tbody><tr><td>API 密钥验证失败</td><td>检查 API 密钥是否正确；确认账户余额充足；检查网络连接</td></tr><tr><td>本地模型连接失败</td><td>确认本地服务器正在运行；检查 URL 和端口是否正确；检查防火墙设置</td></tr><tr><td>界面显示不完整</td><td>调整显示比例；检查显示器分辨率；更新图形驱动程序</td></tr><tr><td>设置未保存</td><td>确保您有写入权限；检查磁盘空间；尝试以管理员身份运行</td></tr></tbody></table>',30)),t("p",null,[l[16]||(l[16]=i("如果您遇到其他问题，请参考")),e(o,{to:"/guide/troubleshooting/"},{default:r(()=>l[15]||(l[15]=[i("故障排除")])),_:1}),l[17]||(l[17]=i("章节。"))]),t("p",null,[l[19]||(l[19]=i("完成初始设置后，您可以继续了解 DeepChat 的")),e(o,{to:"/guide/getting-started/basic-demo.html"},{default:r(()=>l[18]||(l[18]=[i("基础功能演示")])),_:1}),l[20]||(l[20]=i("。"))])])}const f=p(h,[["render",x]]),v=JSON.parse('{"path":"/guide/getting-started/initial-setup.html","title":"首次使用配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"首次启动向导","slug":"首次启动向导","link":"#首次启动向导","children":[]},{"level":2,"title":"连接大语言模型","slug":"连接大语言模型","link":"#连接大语言模型","children":[{"level":3,"title":"配置 OpenAI API","slug":"配置-openai-api","link":"#配置-openai-api","children":[]},{"level":3,"title":"配置 Claude API","slug":"配置-claude-api","link":"#配置-claude-api","children":[]},{"level":3,"title":"配置本地模型","slug":"配置本地模型","link":"#配置本地模型","children":[]},{"level":3,"title":"配置自定义 API 端点","slug":"配置自定义-api-端点","link":"#配置自定义-api-端点","children":[]}]},{"level":2,"title":"基本设置","slug":"基本设置","link":"#基本设置","children":[{"level":3,"title":"存储设置","slug":"存储设置","link":"#存储设置","children":[]},{"level":3,"title":"界面设置","slug":"界面设置","link":"#界面设置","children":[]},{"level":3,"title":"快捷键","slug":"快捷键","link":"#快捷键","children":[]}]},{"level":2,"title":"创建第一个对话","slug":"创建第一个对话","link":"#创建第一个对话","children":[]},{"level":2,"title":"导入和导出设置","slug":"导入和导出设置","link":"#导入和导出设置","children":[{"level":3,"title":"导出设置","slug":"导出设置","link":"#导出设置","children":[]},{"level":3,"title":"导入设置","slug":"导入设置","link":"#导入设置","children":[]}]},{"level":2,"title":"故障排除","slug":"故障排除","link":"#故障排除","children":[]}],"git":{"createdTime":1742733434000,"updatedTime":1742921049000,"contributors":[{"name":"袁鑫","email":"eric.yuanxin@gmail.com","commits":2}]},"filePathRelative":"guide/getting-started/initial-setup.md"}');export{f as comp,v as data};
