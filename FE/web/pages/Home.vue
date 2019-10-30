<template>
  <section class="home">
    <Slider width="100%" height="600px"  />
    <Activity />
  </section>
</template>

<script>
import Slider from '~/components/Slider.vue'
import Activity from '~/components/Activity.vue'
export default {
  components: {
    Slider,
    Activity
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/home.scss';
</style>

