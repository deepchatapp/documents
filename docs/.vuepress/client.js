import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to, from, next) => {
      // 当访问首页时重定向到指南页面
      if (to.path === '/') {
        next('/guide/introduction/')
      } else {
        next()
      }
    })
  },
}) 