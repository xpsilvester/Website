<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        website
      </h1>
      <h2 class="subtitle">
        Nuxt.js project 1
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div class="links">
        <nuxt-link class="button--green" :to="{name:'Home'}">Start</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/index.scss';
</style>

