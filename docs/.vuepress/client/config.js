import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to, from, next) => {
      // 如果访问根路径，则重定向到DeepChat介绍页面
      if (to.path === '/') {
        next('/guide/introduction/')
      } else {
        next()
      }
    })
  }
}) 