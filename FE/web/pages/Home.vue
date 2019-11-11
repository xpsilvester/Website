<template>
  <section class="home">
    <Slider width="100%" height="600px"  />
    <Activity />
    <Recommend />
    <Special />
    <Footer />
  </section>
</template>

<script>
import Slider from '~/components/Slider.vue'
import Activity from '~/components/Activity.vue'
import Recommend from '~/components/Recommend.vue'
import Special from '~/components/Special.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Slider,
    Activity,
    Recommend,
    Special,
    Footer
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/home.scss';
</style>

