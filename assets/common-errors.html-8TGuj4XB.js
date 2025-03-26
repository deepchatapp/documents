import{_ as a,c as u,e as g,a as i,b as t,d as n,w as r,r as s,o as p}from"./app-BnrJZbdv.js";const d={},m={href:"https://github.com/thinkinai/deepchat/issues",target:"_blank",rel:"noopener noreferrer"};function h(b,l){const o=s("RouteLink"),e=s("ExternalLinkIcon");return p(),u("div",null,[l[9]||(l[9]=g('<h1 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h1><p>本页面汇总了使用 DeepChat 时可能遇到的常见错误和问题，包括错误代码、问题描述、可能原因以及快速解决方法。</p><h2 id="连接和-api-错误" tabindex="-1"><a class="header-anchor" href="#连接和-api-错误"><span>连接和 API 错误</span></a></h2><h3 id="api-连接失败" tabindex="-1"><a class="header-anchor" href="#api-连接失败"><span>API 连接失败</span></a></h3><ol><li><p><strong>无法连接到 API 服务</strong></p><ul><li><strong>症状</strong>：对话始终处于「正在思考...」状态，不返回结果</li><li><strong>检查项</strong>： <ul><li>互联网连接是否稳定</li><li>API 服务提供商的状态页是否报告服务中断</li><li>防火墙或网络策略是否阻止连接</li></ul></li></ul></li><li><p><strong>API 身份验证失败</strong></p><ul><li><strong>症状</strong>：发送消息后立即收到错误提示或验证密钥时显示验证失败</li><li><strong>检查项</strong>： <ul><li>API URL 是否填写正确，绝大多数情况使用默认地址即可</li><li>API 密钥是否正确输入（无多余空格或换行）</li><li>密钥是否已在服务提供商平台被禁用或删除</li><li>是否有权限使用请求的特定模型</li><li>代理模式里面是否选用正确代理</li><li>防火墙或网络策略是否阻止连接</li></ul></li><li><strong>常见错误</strong>：将测试密钥用于生产环境；使用已撤销的密钥</li></ul></li><li><p><strong>API 请求超时</strong></p><ul><li><strong>症状</strong>：对话开始后长时间无响应，最终返回超时错误</li><li><strong>影响因素</strong>： <ul><li>网络连接质量</li><li>请求内容大小</li><li>服务器当前负载</li></ul></li><li><strong>解决策略</strong>：分割长输入；选择响应更快的模型；优化网络连接</li></ul></li><li><p><strong>达到 API 速率限制</strong></p><ul><li><strong>症状</strong>：短时间发送多条消息后收到限制错误</li><li><strong>常见限制</strong>： <ul><li>OpenAI：根据套餐的 RPM（每分钟请求数）和 TPM（每分钟令牌数）限制</li><li>Claude：每分钟请求数和每天请求数限制</li><li>其他服务：类似限制策略</li></ul></li><li><strong>长期解决方案</strong>：实施客户端请求节流；升级服务等级；使用多个 API 密钥轮换</li></ul></li></ol><h3 id="模型特定错误" tabindex="-1"><a class="header-anchor" href="#模型特定错误"><span>模型特定错误</span></a></h3><ol><li><p><strong>请求的模型不可用</strong></p><ul><li><strong>常见场景</strong>： <ul><li>服务提供商正在更新或维护模型</li><li>某些区域或账户类型无法访问特定模型</li><li>模型已停用或替换为新版本</li></ul></li><li><strong>解决方案</strong>： <ul><li>查看提供商的状态页了解维护计划</li><li>考虑使用功能相似的替代模型</li><li>检查您的账户是否有访问限制</li></ul></li></ul></li><li><p><strong>超出上下文窗口限制</strong></p><ul><li><strong>模型限制参考</strong>： <ul><li>GPT-3.5-Turbo：4K/16K 令牌上下文窗口</li><li>GPT-4：8K/32K 令牌上下文窗口</li><li>Claude：100K-200K 令牌（根据版本不同）</li><li>Llama 系列：4K-128K 令牌（根据版本不同）</li></ul></li><li><strong>优化策略</strong>： <ul><li>启用智能上下文管理功能（设置→高级→上下文管理）</li><li>定期总结长对话以减少令牌使用</li><li>使用分段处理长文档</li></ul></li></ul></li><li><p><strong>模型输出被过滤</strong></p><ul><li><strong>常见触发因素</strong>： <ul><li>请求生成可能违反使用政策的内容</li><li>涉及模型设计者定义的敏感主题</li><li>包含潜在有害指令的提示</li></ul></li><li><strong>规避方法</strong>： <ul><li>重新表述请求，避免直接触发关键词</li><li>明确表达合法、道德的使用意图</li><li>设置适当的上下文和约束条件</li></ul></li></ul></li></ol><p>如果您在上面的列表中没有找到您遇到的错误，或需要更详细的解决步骤，请参阅：</p>',8)),i("ul",null,[i("li",null,[i("strong",null,[n(o,{to:"/guide/troubleshooting/solutions.html"},{default:r(()=>l[0]||(l[0]=[t("解决方案")])),_:1})]),l[1]||(l[1]=t(" - 按问题类型分类的详细解决方案和步骤"))]),i("li",null,[i("strong",null,[n(o,{to:"/guide/troubleshooting/logs.html"},{default:r(()=>l[2]||(l[2]=[t("日志查看")])),_:1})]),l[3]||(l[3]=t(" - 了解如何查看和解读应用日志来诊断复杂问题"))]),i("li",null,[i("strong",null,[n(o,{to:"/guide/troubleshooting/feedback.html"},{default:r(()=>l[4]||(l[4]=[t("问题反馈")])),_:1})]),l[5]||(l[5]=t(" - 如何向开发团队有效地报告未解决的错误"))])]),i("p",null,[l[7]||(l[7]=t("如果您遇到无法解决的问题，或发现可能的 bug，请通过")),i("a",m,[l[6]||(l[6]=t("GitHub issues")),n(e)]),l[8]||(l[8]=t("向我们反馈。"))])])}const P=a(d,[["render",h]]),I=JSON.parse('{"path":"/guide/troubleshooting/common-errors.html","title":"常见错误","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"连接和 API 错误","slug":"连接和-api-错误","link":"#连接和-api-错误","children":[{"level":3,"title":"API 连接失败","slug":"api-连接失败","link":"#api-连接失败","children":[]},{"level":3,"title":"模型特定错误","slug":"模型特定错误","link":"#模型特定错误","children":[]}]}],"git":{"createdTime":1742952057000,"updatedTime":1742985282000,"contributors":[{"name":"wanna","email":"wanna.w@binarywalk.com","commits":1},{"name":"袁鑫","email":"eric.yuanxin@gmail.com","commits":1}]},"filePathRelative":"guide/troubleshooting/common-errors.md"}');export{P as comp,I as data};
