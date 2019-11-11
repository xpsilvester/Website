<template>
  <div class="footer">
    <div class="footer-content">
        <a v-for="(tag,index) in tagList" :key="tag.name" :href="tag.url" :style="{borderRight: index == tagList.length - 1 ? '' : '1px solid #8b8b8b' }">
            {{tag.name}}
        </a>
        <p>@ Media features describe specific characteristics of the user agent</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tagList:[
          {
            name: '网站定制',
            url: '#'
          },
          {
              name: '举报热线',
              url: '#'
          },
          {
              name: '新版官方',
              url: '#'
          },
          {
              name: '采购商标信息',
              url: '#'
          },
          {
              name: '法律声明',
              url: '#'
          },
          {
              name: '投资者关系',
              url: '#'
          }
      ] 
    }
  }
}
</script>
<style lange='scss'>
    @import '~assets/scss/footer.scss';
</style>