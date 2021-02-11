<template>
  <div class="home">
    <nav-header/>
    <router-view/>
    <nav-footer/>
  </div>
</template>

<script type='text/ecmascript-6'>
import NavHeader from '@/components/NavHeader/index'
import NavFooter from '@/components/NavFooter/index'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    'nav-header': NavHeader,
    'nav-footer': NavFooter
  }
}
</script>

<style lang="scss" scoped rel='stylesheet/scss'>
</style>
