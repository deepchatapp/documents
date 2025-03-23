<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <RightSidebar />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import RightSidebar from './RightSidebar.vue'

export default {
  components: {
    PageEdit,
    PageNav,
    RightSidebar
  },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style> 