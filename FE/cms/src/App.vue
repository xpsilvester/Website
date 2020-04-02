<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
@import url('./scss/common.scss');
</style>
