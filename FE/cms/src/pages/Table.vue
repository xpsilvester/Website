<template>
  <div id="table">
    <h1>{{title}}</h1>
    <Cestable />
  </div>
</template>

<script>
import Cestable from '../components/Cestable.vue'

export default {
    name:'Table',
    data(){
        return {
            title: 'table',
        }
    },
    components:{
      Cestable
    },
    methods:{
      
    },
    created(){
      
    }
}
</script>

<style lang="scss" scoped>

</style>