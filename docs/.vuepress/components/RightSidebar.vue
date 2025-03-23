<template>
  <div class="right-sidebar" v-if="headers.length > 0">
    <div class="toc-title">目录</div>
    <div class="toc-list">
      <div 
        class="toc-item" 
        v-for="(h, i) in headers" 
        :key="i" 
        :class="{ 'active': activeSlug === h.slug }">
        <a :href="'#' + h.slug" @click.prevent="scrollTo(h.slug)">{{ h.title }}</a>
        
        <div class="toc-sub-list" v-if="h.children && h.children.length">
          <div 
            class="toc-sub-item" 
            v-for="(subH, j) in h.children" 
            :key="j"
            :class="{ 'active': activeSlug === subH.slug }">
            <a :href="'#' + subH.slug" @click.prevent="scrollTo(subH.slug)">{{ subH.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightSidebar',
  data() {
    return {
      headers: [],
      activeSlug: '',
      observer: null
    }
  },
  mounted() {
    this.getHeaders()
    this.setupObserver()
    
    // 监听内容变化，包括窗口大小变化和页面导航
    window.addEventListener('resize', this.getHeaders)
    
    // 路由变化时重新获取标题
    this.$router.afterEach(() => {
      setTimeout(() => {
        this.getHeaders()
        this.setupObserver()
      }, 300)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getHeaders)
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    getHeaders() {
      const content = document.querySelector('.theme-default-content')
      if (!content) return
      
      // 获取页面中的标题
      const headings = Array.from(content.querySelectorAll('h2, h3'))
      if (!headings.length) return
      
      // 构建标题树
      const headers = []
      let currentH2 = null
      
      headings.forEach(heading => {
        const title = heading.innerText || heading.textContent
        const slug = heading.id
        const isH3 = heading.tagName.toLowerCase() === 'h3'
        
        if (isH3 && currentH2) {
          // 这是一个h3，添加到当前h2的子标题
          currentH2.children.push({
            title,
            slug,
            level: 3
          })
        } else {
          // 这是一个h2，创建新的标题
          currentH2 = {
            title,
            slug,
            level: 2,
            children: []
          }
          headers.push(currentH2)
        }
      })
      
      this.headers = headers
      
      // 添加进度条
      this.addProgressBar()
    },
    setupObserver() {
      // 移除已有的观察器
      if (this.observer) {
        this.observer.disconnect()
      }
      
      // 设置新的标题观察器
      const headings = document.querySelectorAll('.theme-default-content h2, .theme-default-content h3')
      if (!headings.length) return
      
      // 创建IntersectionObserver来监视标题的可见性
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            this.activeSlug = entry.target.id
          }
        })
      }, {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      })
      
      // 观察所有标题
      headings.forEach(heading => {
        this.observer.observe(heading)
      })
    },
    scrollTo(slug) {
      const el = document.getElementById(slug)
      if (!el) return
      
      // 更新活动状态
      this.activeSlug = slug
      
      // 获取导航栏高度
      const navbar = document.querySelector('.navbar')
      const offset = navbar ? navbar.offsetHeight + 10 : 70
      
      // 滚动到标题位置
      const position = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    },
    addProgressBar() {
      // 检查是否已存在进度条
      let progressBar = document.querySelector('.reading-progress')
      
      if (!progressBar) {
        // 创建进度条
        progressBar = document.createElement('div')
        progressBar.className = 'reading-progress'
        document.body.appendChild(progressBar)
        
        // 滚动时更新进度条
        window.addEventListener('scroll', () => {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const progress = scrollTop / scrollHeight * 100
          progressBar.style.width = progress + '%'
        })
      }
    }
  }
}
</script>

<style scoped>
.right-sidebar {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 240px;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  z-index: 10;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.toc-title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eaecef;
  color: #2c3e50;
}

.toc-list {
  margin: 0;
  padding: 0;
}

.toc-item {
  margin-bottom: 8px;
  line-height: 1.5;
}

.toc-item a {
  color: #4e6e8e;
  text-decoration: none;
  display: block;
  transition: color 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toc-item a:hover,
.toc-item.active > a {
  color: var(--c-brand);
}

.toc-sub-list {
  padding-left: 12px;
  margin-top: 6px;
}

.toc-sub-item {
  margin-bottom: 6px;
  font-size: 0.9em;
}

.toc-sub-item a {
  color: #4e6e8e;
}

.toc-sub-item a:hover,
.toc-sub-item.active > a {
  color: var(--c-brand);
}

/* 进度条全局样式 */
</style>

<style>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 0;
  height: 3px;
  background: var(--c-brand);
  z-index: 999;
  transition: width 0.1s ease;
}

/* 修改主内容区域，为右侧目录腾出空间 */
@media (min-width: 960px) {
  .theme-default-content:not(.custom) {
    max-width: calc(var(--content-width) - 280px) !important;
    margin-right: 280px;
  }
}

@media (max-width: 959px) {
  .right-sidebar {
    display: none;
  }
}
</style> 