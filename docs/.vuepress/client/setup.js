// client setup.js
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    
    onMounted(() => {
      // 如果是根路径，重定向到DeepChat介绍页面
      if (window.location.pathname === '/') {
        router.push('/guide/introduction/')
      }
    })
  }
} 