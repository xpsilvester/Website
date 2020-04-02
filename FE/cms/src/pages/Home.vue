<template>
  <div id="home">
    {{title}}
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return {
            title: 'home'
        }
    }
}
</script>

<style lang="scss">
@import url('../scss/home.scss');
</style>