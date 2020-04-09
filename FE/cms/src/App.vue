<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link">
      <router-link to="/home">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/charttable">Chart</router-link>
      <router-link to="/table">Table</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  @import './scss/common.scss';
</style>