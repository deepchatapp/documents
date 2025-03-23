export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用程序是否运行在服务器上
}) => {
  // 只在客户端执行
  if (typeof window !== 'undefined') {
    // 添加全局变量以确认脚本已加载
    window._VUEPRESS_TOC_LOADED = true;
    
    // 等待DOM完全加载
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOM loaded, attempting to add TOC');
      setTimeout(addRightToc, 1000);
    });
    
    // 在页面加载完成后添加右侧目录
    router.afterEach(() => {
      if (isServer) return;
      
      console.log('Page changed, will add TOC');
      // 使用更长的延迟确保DOM已更新
      setTimeout(addRightToc, 1000);
    });
  }
};

// 添加右侧目录函数
function addRightToc() {
  try {
    console.log('Adding right TOC...');
    
    // 检查是否已存在TOC
    if (document.querySelector('.right-toc')) {
      console.log('TOC already exists, removing it');
      document.querySelector('.right-toc').remove();
    }
    
    // 获取内容区域
    const content = document.querySelector('.theme-default-content');
    if (!content) {
      console.warn('Content element not found!');
      return;
    }
    
    // 获取标题
    const headings = Array.from(content.querySelectorAll('h2, h3'));
    if (!headings.length) {
      console.warn('No headings found in content!');
      return;
    }
    
    console.log(`Found ${headings.length} headings`);
    
    // 创建TOC容器
    const toc = document.createElement('div');
    toc.className = 'right-toc';
    toc.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      width: 240px;
      max-height: calc(100vh - 140px);
      overflow-y: auto;
      background: #fff;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      z-index: 10;
      border: 1px solid #eaecef;
    `;
    
    // 创建TOC标题
    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.style.cssText = `
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eaecef;
      color: #2c3e50;
      text-align: center;
    `;
    tocTitle.innerText = '目录';
    toc.appendChild(tocTitle);
    
    // 创建TOC列表
    const tocList = document.createElement('div');
    tocList.className = 'toc-list';
    tocList.style.cssText = 'margin:0;padding:0;';
    
    let currentH2 = null;
    let currentH2Item = null;
    let currentSubList = null;
    
    // 清理标题文本的函数
    function cleanHeadingText(text) {
      // 移除开头的#号和空格
      let clean = text.replace(/^#+\s*/, '');
      
      // 移除开头的数字和点（如果有）
      clean = clean.replace(/^\d+\.\s*/, '');
      
      // 移除VuePress可能添加的锚点链接
      const anchorIndex = clean.indexOf('#');
      if (anchorIndex > 0) {
        clean = clean.substring(0, anchorIndex).trim();
      }
      
      // 如果标题包含 - 或 | 等分隔符，可能需要进一步处理
      if (clean.includes(' - ')) {
        clean = clean.split(' - ')[0].trim();
      }
      
      return clean.trim();
    }
    
    // 处理每个标题
    headings.forEach(heading => {
      // 首先尝试获取不包含子元素的纯文本
      let title = '';
      
      // 检查是否有纯文本节点
      for (let i = 0; i < heading.childNodes.length; i++) {
        if (heading.childNodes[i].nodeType === 3) { // Text节点
          title += heading.childNodes[i].textContent;
        }
      }
      
      // 如果没有纯文本节点，则使用整个innerText
      if (!title.trim()) {
        title = heading.innerText || heading.textContent;
      }
      
      // 清理标题文本
      const cleanTitle = cleanHeadingText(title);
      const id = heading.id;
      
      console.log(`Processing heading: "${cleanTitle}" (original: "${title}") with id "${id}"`);
      
      const isH3 = heading.tagName.toLowerCase() === 'h3';
      
      if (!isH3) {
        // 这是h2标题
        currentH2 = heading;
        
        // 创建标题项
        currentH2Item = document.createElement('div');
        currentH2Item.className = 'toc-item';
        currentH2Item.style.cssText = `
          margin-bottom: 10px;
          line-height: 1.5;
        `;
        
        const link = document.createElement('a');
        link.href = '#' + id;
        link.style.cssText = `
          display: block;
          color: #4e6e8e;
          text-decoration: none;
          transition: all 0.2s;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 500;
        `;
        link.onmouseenter = () => {
          link.style.backgroundColor = '#f6f8fa';
          link.style.color = 'rgb(79, 70, 229)';
        };
        link.onmouseleave = () => {
          if (!link.classList.contains('active')) {
            link.style.backgroundColor = '';
            link.style.color = '#4e6e8e';
          }
        };
        link.innerText = cleanTitle;
        link.onclick = (e) => {
          e.preventDefault();
          scrollToHeading(id);
        };
        
        currentH2Item.appendChild(link);
        tocList.appendChild(currentH2Item);
        
        // 准备子列表容器
        currentSubList = document.createElement('div');
        currentSubList.className = 'toc-sub-list';
        currentSubList.style.cssText = `
          padding-left: 14px;
          margin-top: 4px;
          margin-bottom: 14px;
          border-left: 1px solid #eaecef;
        `;
        currentH2Item.appendChild(currentSubList);
      } else if (currentSubList) {
        // 这是h3标题，添加到当前h2的子列表
        const subItem = document.createElement('div');
        subItem.className = 'toc-sub-item';
        subItem.style.cssText = `
          margin-bottom: 6px;
          font-size: 0.9em;
        `;
        
        const link = document.createElement('a');
        link.href = '#' + id;
        link.style.cssText = `
          display: block;
          color: #4e6e8e;
          text-decoration: none;
          transition: all 0.2s;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 3px 8px;
          border-radius: 4px;
        `;
        link.onmouseenter = () => {
          link.style.backgroundColor = '#f6f8fa';
          link.style.color = 'rgb(79, 70, 229)';
        };
        link.onmouseleave = () => {
          if (!link.classList.contains('active')) {
            link.style.backgroundColor = '';
            link.style.color = '#4e6e8e';
          }
        };
        link.innerText = cleanTitle;
        link.onclick = (e) => {
          e.preventDefault();
          scrollToHeading(id);
        };
        
        subItem.appendChild(link);
        currentSubList.appendChild(subItem);
      }
    });
    
    toc.appendChild(tocList);
    document.body.appendChild(toc);
    console.log('TOC added to document body');
    
    // 添加滚动监听来高亮当前标题
    setupScrollHighlight(headings);
    
    // 添加进度条
    addProgressBar();
  } catch (error) {
    console.error('Error creating TOC:', error);
  }
}

// 滚动到指定标题
function scrollToHeading(id) {
  try {
    const heading = document.getElementById(id);
    if (!heading) {
      console.warn(`Heading with id "${id}" not found`);
      return;
    }
    
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight + 10 : 70;
    
    window.scrollTo({
      top: heading.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: 'smooth'
    });
  } catch (error) {
    console.error('Error scrolling to heading:', error);
  }
}

// 设置滚动高亮
function setupScrollHighlight(headings) {
  try {
    const tocLinks = document.querySelectorAll('.right-toc a');
    if (!tocLinks.length) {
      console.warn('No TOC links found');
      return;
    }
    
    const highlightOnScroll = () => {
      let current = '';
      
      headings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        
        if (top < 100) {
          current = heading.id;
        }
      });
      
      tocLinks.forEach(link => {
        link.classList.remove('active');
        link.style.color = '#4e6e8e';
        link.style.backgroundColor = '';
        link.style.fontWeight = '';
        
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
          link.style.color = 'rgb(79, 70, 229)';
          link.style.backgroundColor = '#f6f8fa';
          link.style.fontWeight = '600';
          link.style.borderLeft = '2px solid rgb(79, 70, 229)';
          link.style.paddingLeft = '10px';
        } else {
          link.style.borderLeft = '';
          link.style.paddingLeft = '';
        }
      });
    };
    
    // 初始高亮
    highlightOnScroll();
    
    // 移除旧的滚动监听器（如果有）
    if (window._tocScrollHandler) {
      window.removeEventListener('scroll', window._tocScrollHandler);
    }
    
    // 添加新的滚动监听器
    window._tocScrollHandler = highlightOnScroll;
    window.addEventListener('scroll', window._tocScrollHandler);
  } catch (error) {
    console.error('Error setting up scroll highlight:', error);
  }
}

// 添加进度条
function addProgressBar() {
  try {
    // 检查是否已存在进度条
    let progressBar = document.querySelector('.reading-progress');
    if (progressBar) {
      progressBar.remove();
    }
    
    // 创建进度条
    progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = 'position:fixed;top:0;left:0;right:0;width:0;height:3px;background:rgb(79, 70, 229);z-index:999;transition:width 0.1s ease;';
    document.body.appendChild(progressBar);
    
    // 移除旧的滚动监听器（如果有）
    if (window._progressScrollHandler) {
      window.removeEventListener('scroll', window._progressScrollHandler);
    }
    
    // 更新进度条
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    };
    
    // 添加新的滚动监听器
    window._progressScrollHandler = updateProgress;
    window.addEventListener('scroll', window._progressScrollHandler);
    
    // 初始更新
    updateProgress();
  } catch (error) {
    console.error('Error adding progress bar:', error);
  }
} 