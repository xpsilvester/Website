<template>
  <section class="home">
    <Slider width="100%" height="600px"  />
    <Activity />
    <Recommend />
    <Special />
  </section>
</template>

<script>
import Slider from '~/components/Slider.vue'
import Activity from '~/components/Activity.vue'
import Recommend from '~/components/Recommend.vue'
import Special from '~/components/Special.vue'
export default {
  components: {
    Slider,
    Activity,
    Recommend,
    Special
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/home.scss';
</style>

