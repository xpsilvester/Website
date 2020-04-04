<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link">
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/list">Go to List</router-link>
    </div>
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
@import './scss/common.scss';
</style>
