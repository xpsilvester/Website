<template>
  <div class="special">
    <div class="special-content">
      <img :src="imgUrl" />
      <span class="more">MORE</span>
      <h3>{{title}}</h3>
      <p class="titleSmall">{{titleSmall}}</p>
      <div class="line"></div>
      <p>{{detail}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573446378086&di=01b6efd3265d6ad7bef8adc18cfb6175&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
      title: 'CSS3 @media 查询实例',
      titleSmall: 'CSS Conditional Rules Module Level 3 @media D',
      detail: 'Media features describe specific characteristics of the user agent, output device, or environment. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.'
    }
  }
}
</script>
<style lange='scss'>
    @import '~assets/scss/special.scss';
</style>