<template>
  <div>
    <TopBar />
    <Nav />
    <nuxt/>
  </div>
</template>
<script>
import TopBar from '~/components/TopBar.vue'
import Nav from '~/components/Nav.vue'
export default {
  components: {
    TopBar,
    Nav
  }
}
</script>
<style lang='scss'>
@import '~/assets/scss/default.scss';
</style>

