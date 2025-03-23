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
    
    // 重置目录状态，确保默认展开
    localStorage.setItem('tocCollapsed', 'false');
    
    // 等待DOM完全加载
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOM loaded, attempting to add TOC');
      setTimeout(addRightToc, 1000);
    });
    
    // 在页面加载完成后添加右侧目录
    router.afterEach(() => {
      if (isServer) return;
      
      console.log('Page changed, will add TOC');
      // 重置目录状态，确保每次页面切换后目录可见
      localStorage.setItem('tocCollapsed', 'false');
      // 使用更长的延迟确保DOM已更新
      setTimeout(addRightToc, 1000);
    });

    // 等待页面加载完成
    window.addEventListener('DOMContentLoaded', () => {
      // 创建目录切换按钮
      console.log('DOM loaded, creating TOC toggle button directly');
      const tocToggleBtn = document.createElement('div');
      tocToggleBtn.className = 'toc-toggle-btn';
      // 确保按钮内容可见
      tocToggleBtn.style.cssText = `
        position: fixed;
        z-index: 100;
        right: 20px;
        bottom: 80px;
        width: 50px;
        height: 50px;
        background: rgb(79, 70, 229);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-size: 22px;
        font-weight: bold;
      `;
      // 设置按钮文本
      tocToggleBtn.innerText = 'T';
      // 添加到body的最后位置
      document.body.appendChild(tocToggleBtn);
      console.log('TOC toggle button added to document body');

      // 获取右侧目录和页面内容元素
      let rightToc = document.querySelector('.right-toc');
      const page = document.querySelector('.page');

      // 如果还没有找到右侧目录（可能是异步创建的），设置一个定时器检查
      if (!rightToc) {
        const checkToc = setInterval(() => {
          rightToc = document.querySelector('.right-toc');
          if (rightToc) {
            clearInterval(checkToc);
            setupTocToggle(rightToc);
          }
        }, 200);
      } else {
        setupTocToggle(rightToc);
      }
    });
  }
};

// 添加右侧目录函数
function addRightToc() {
  try {
    console.log('添加右侧目录...');
    
    // 检查是否已存在TOC
    if (document.querySelector('.right-toc')) {
      console.log('目录已存在，移除它');
      document.querySelector('.right-toc').remove();
    }
    
    // 总是创建新的切换按钮
    console.log('创建目录切换按钮');
    const oldBtn = document.querySelector('.toc-toggle-btn');
    if (oldBtn) {
      oldBtn.remove();
    }
    
    const tocToggleBtn = document.createElement('div');
    tocToggleBtn.className = 'toc-toggle-btn active';
    // 添加内联样式确保按钮可见 - 修改为圆角方形按钮
    tocToggleBtn.style.cssText = `
      position: fixed !important;
      z-index: 1000 !important;
      right: 20px !important;
      bottom: 80px !important;
      padding: 8px 16px !important;
      background: rgb(79, 70, 229) !important;
      color: white !important;
      border-radius: 8px !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      cursor: pointer !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      font-size: 14px !important;
      font-weight: bold !important;
      user-select: none !important;
      transition: all 0.3s ease !important;
      opacity: 0;
      visibility: hidden;
    `;
    // 修改按钮文本内容
    tocToggleBtn.innerText = '显示目录';
    // 添加到body的最后位置
    document.body.appendChild(tocToggleBtn);
    console.log('目录切换按钮已添加到页面');
    
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
    
    // 强制设置为展开状态
    localStorage.setItem('tocCollapsed', 'false');
    console.log('设置目录初始状态: 展开');
    
    // 确保目录一开始就是可见的 - 使用内联样式覆盖任何CSS
    toc.style.cssText = `
      position: fixed;
      z-index: 100;
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
      border: 1px solid #eaecef;
      transform: translateX(0) !important;
      opacity: 1 !important;
      visibility: visible !important;
      display: block !important;
    `;
    console.log('使用内联样式确保目录可见');
    
    // 创建TOC顶部栏容器（包含标题和收起按钮）
    const tocHeader = document.createElement('div');
    tocHeader.className = 'toc-header';
    tocHeader.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eaecef;
    `;
    
    // 创建TOC标题
    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.style.cssText = `
      font-weight: 600;
      font-size: 16px;
      color: #2c3e50;
    `;
    tocTitle.innerText = '目录';
    tocHeader.appendChild(tocTitle);
    
    // 创建收起按钮
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toc-close-btn';
    closeBtn.style.cssText = `
      background: transparent;
      border: none;
      color: #909399;
      cursor: pointer;
      font-size: 13px;
      padding: 2px 6px;
      border-radius: 4px;
      transition: all 0.2s;
    `;
    closeBtn.innerText = '收起';
    closeBtn.onmouseenter = () => {
      closeBtn.style.color = 'rgb(79, 70, 229)';
      closeBtn.style.background = '#f6f8fa';
    };
    closeBtn.onmouseleave = () => {
      closeBtn.style.color = '#909399';
      closeBtn.style.background = 'transparent';
    };
    tocHeader.appendChild(closeBtn);
    
    // 将顶部栏添加到TOC容器
    toc.appendChild(tocHeader);
    
    // 创建TOC列表
    const tocList = document.createElement('div');
    tocList.className = 'toc-list';
    
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
    console.log('TOC added to document body, className:', toc.className, 'transform:', toc.style.transform);
    
    // 为收起按钮添加点击事件
    closeBtn.addEventListener('click', () => {
      // 触发隐藏目录的函数，复用已有的切换逻辑
      const isCurrentlyVisible = toc.getAttribute('data-visible') === 'true';
      if (isCurrentlyVisible) {
        // 手动触发相同的隐藏逻辑
        toc.setAttribute('data-visible', 'false');
        toc.classList.add('collapsed');
        toc.style.transform = 'translateX(calc(100% + 20px))';
        toc.style.opacity = '0';
        toc.style.visibility = 'hidden';
        
        document.querySelector('.page')?.classList.add('expanded');
        
        // 显示悬浮"显示目录"按钮 - 使用document.querySelector确保获取最新的按钮元素
        const toggleBtn = document.querySelector('.toc-toggle-btn');
        if (toggleBtn) {
          toggleBtn.classList.remove('active');
          toggleBtn.style.opacity = '1';
          toggleBtn.style.visibility = 'visible';
          console.log('设置显示目录按钮可见');
        } else {
          console.warn('找不到显示目录按钮');
        }
        
        localStorage.setItem('tocCollapsed', 'true');
        console.log('目录已通过关闭按钮隐藏');
      }
    });
    
    // 设置TOC切换功能
    setupTocToggle(toc);
    
    // 设置滚动高亮
    setupScrollHighlight(headings);
    
    // 添加进度条
    addProgressBar();
    
    console.log('TOC setup completed successfully');
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

// 设置目录切换功能
function setupTocToggle(rightToc) {
  try {
    const tocToggleBtn = document.querySelector('.toc-toggle-btn');
    const page = document.querySelector('.page');
    
    if (!tocToggleBtn || !rightToc || !page) {
      console.warn('Required elements for TOC toggle not found!');
      if (!tocToggleBtn) console.warn('- TOC toggle button not found');
      if (!rightToc) console.warn('- Right TOC not found');
      if (!page) console.warn('- Page element not found');
      return;
    }
    
    console.log('设置目录切换功能');
    
    // 确保按钮有内联样式和文本
    if (!tocToggleBtn.innerText) {
      tocToggleBtn.innerText = '显示目录';
    }
    
    // 从本地存储获取目录状态，默认设为展开（不折叠）
    localStorage.setItem('tocCollapsed', 'false');
    rightToc.setAttribute('data-visible', 'true');
    console.log('初始化目录状态: 展开');
    
    // 应用初始状态 - 确保目录可见
    rightToc.classList.remove('collapsed');
    rightToc.style.transform = 'translateX(0)';
    rightToc.style.opacity = '1';
    rightToc.style.visibility = 'visible';
    rightToc.style.display = 'block';
    page.classList.remove('expanded');
    tocToggleBtn.classList.add('active');
    
    // 初始状态下隐藏"显示目录"按钮 - 移除!important以便后续可以覆盖
    tocToggleBtn.style.opacity = '0';
    tocToggleBtn.style.visibility = 'hidden';
    
    // 强制重新计算样式
    void rightToc.offsetWidth;
    
    // 移除现有的事件监听器，避免重复绑定
    const newTocToggleBtn = tocToggleBtn.cloneNode(true);
    if (tocToggleBtn.style.cssText) {
      // 移除cssText中的!important标记，以便后续可以覆盖这些样式
      let cleanCssText = tocToggleBtn.style.cssText
        .replace(/\s*!important/g, '')
        .replace(/opacity:\s*0/g, 'opacity: 0')
        .replace(/visibility:\s*hidden/g, 'visibility: hidden');
      newTocToggleBtn.style.cssText = cleanCssText;
    }
    newTocToggleBtn.innerText = '显示目录';
    tocToggleBtn.parentNode.replaceChild(newTocToggleBtn, tocToggleBtn);
    console.log('替换了新的TOC切换按钮');
    
    // 点击切换按钮时切换目录显示状态
    newTocToggleBtn.addEventListener('click', () => {
      console.log('目录按钮被点击');
      
      // 使用数据属性跟踪当前可见状态，而不依赖计算样式
      const isCurrentlyVisible = rightToc.getAttribute('data-visible') === 'true';
      console.log('目录当前状态:', isCurrentlyVisible ? '可见' : '不可见');
      
      if (!isCurrentlyVisible) {
        // 如果目录不可见，则显示它
        console.log('显示目录');
        rightToc.setAttribute('data-visible', 'true');
        rightToc.classList.remove('collapsed');
        
        // 使用内联样式确保可见 - 简化样式但保留关键属性
        rightToc.style.position = 'fixed';
        rightToc.style.zIndex = '100';
        rightToc.style.top = '80px';
        rightToc.style.right = '20px';
        rightToc.style.width = '240px';
        rightToc.style.maxHeight = 'calc(100vh - 140px)';
        rightToc.style.background = '#fff';
        rightToc.style.borderRadius = '8px';
        rightToc.style.padding = '16px';
        rightToc.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
        rightToc.style.transform = 'translateX(0)';
        rightToc.style.opacity = '1';
        rightToc.style.visibility = 'visible';
        rightToc.style.display = 'block';
        
        page.classList.remove('expanded');
        newTocToggleBtn.classList.add('active');
        localStorage.setItem('tocCollapsed', 'false');
        
        // 隐藏"显示目录"按钮
        newTocToggleBtn.style.opacity = '0';
        newTocToggleBtn.style.visibility = 'hidden';
        console.log('设置显示目录按钮不可见');
      } else {
        // 如果目录可见，则隐藏它
        console.log('隐藏目录');
        rightToc.setAttribute('data-visible', 'false');
        rightToc.classList.add('collapsed');
        
        // 使用内联样式确保隐藏 - 只更改影响可见性的属性
        rightToc.style.transform = 'translateX(calc(100% + 20px))';
        rightToc.style.opacity = '0';
        rightToc.style.visibility = 'hidden';
        
        page.classList.add('expanded');
        newTocToggleBtn.classList.remove('active');
        localStorage.setItem('tocCollapsed', 'true');
        
        // 显示"显示目录"按钮 - 确保能够覆盖之前的样式
        newTocToggleBtn.style.opacity = '1';
        newTocToggleBtn.style.visibility = 'visible';
        console.log('设置显示目录按钮可见，当前样式: opacity=' + newTocToggleBtn.style.opacity + ', visibility=' + newTocToggleBtn.style.visibility);
      }
      
      console.log('切换后目录类名:', rightToc.className);
      console.log('切换后目录transform:', rightToc.style.transform);
      console.log('切换后目录可见性:', rightToc.style.visibility);
      console.log('切换后按钮可见性:', newTocToggleBtn.style.visibility, '透明度:', newTocToggleBtn.style.opacity);
      
      // 强制重新计算样式
      void rightToc.offsetWidth;
      void newTocToggleBtn.offsetWidth;
    });
    
    // 处理窗口大小变化
    const handleResize = () => {
      if (window.innerWidth <= 959) {
        // 移动设备上强制隐藏目录
        rightToc.setAttribute('data-visible', 'false');
        rightToc.classList.add('collapsed');
        
        // 使用内联样式确保隐藏
        rightToc.style.transform = 'translateX(calc(100% + 20px))';
        rightToc.style.opacity = '0';
        rightToc.style.visibility = 'hidden';
        
        page.classList.add('expanded');
        
        // 显示"显示目录"按钮
        newTocToggleBtn.style.opacity = '1';
        newTocToggleBtn.style.visibility = 'visible';
        console.log('移动设备: 设置显示目录按钮可见');
      } else {
        // 桌面设备恢复用户偏好，默认显示目录
        rightToc.setAttribute('data-visible', 'true');
        rightToc.classList.remove('collapsed');
        
        // 使用内联样式确保可见
        rightToc.style.position = 'fixed';
        rightToc.style.zIndex = '100';
        rightToc.style.top = '80px';
        rightToc.style.right = '20px';
        rightToc.style.transform = 'translateX(0)';
        rightToc.style.opacity = '1';
        rightToc.style.visibility = 'visible';
        rightToc.style.display = 'block';
        
        page.classList.remove('expanded');
        newTocToggleBtn.classList.add('active');
        
        // 隐藏"显示目录"按钮
        newTocToggleBtn.style.opacity = '0';
        newTocToggleBtn.style.visibility = 'hidden';
        console.log('桌面设备: 设置显示目录按钮不可见');
      }
    };
    
    // 移除现有的resize事件监听器
    window.removeEventListener('resize', handleResize);
    
    // 添加新的resize事件监听器
    window.addEventListener('resize', handleResize);
    
    // 初始执行一次以适应当前窗口大小
    handleResize();
    
    console.log('目录切换功能设置完成');
  } catch (error) {
    console.error('设置目录切换功能时出错:', error);
  }
} 