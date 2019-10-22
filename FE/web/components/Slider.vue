<template>
  <div class="slider" :style="{ height: height , width: width }">
    
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props:{
    height: String,
    width: String
  },
  components: {
  }
}
</script>
<style lange='scss'>
    .slider{
        border: 1px solid #ccc;
    }
</style>