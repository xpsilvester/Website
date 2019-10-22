<template>
  <section class="home">
    <Slider width="100%" height="600px"  />
    <div class="activity"></div>
  </section>
</template>

<script>
import Slider from '~/components/Slider.vue'
export default {
  components: {
    Slider
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/home.scss';
</style>

