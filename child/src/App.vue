<template>
  <div id="canalysis">
    <router-view/>
  </div>
</template>

<script>
// import { domTitle, setDocumentTitle } from '@/utils/domUtil'
// import { i18nRender } from '@/locales'

export default {
  data () {
    return {
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      // title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))

      return title
    }
  }
}
</script>
