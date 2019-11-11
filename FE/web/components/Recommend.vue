<template>
  <div class="recommend">
      <div class="title">
        <h3>Conditional Rules</h3>
        <p>查询实例如果文档宽度小于 300 像素则修改背</p>
      </div>
      <div class="recommend-slider">
        <div class="gallery">
          <ul :style="{width: ulWidth , transform: ulTranslate }">
            <li v-for="item in galleryList" :key="item.id">
              <img :src="item.img" />
              <div class="detail">
                <h4>{{item.title}}</h4>
                <p class="date">{{item.date}}</p>
                <a :href="item.url" class="more">查看更多&gt;</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="prev" @click="sliderMove(-1)"></div>
        <div class="next" @click="sliderMove(1)"></div>
      </div>
      <div class="background"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      galleryList:[
        {
          id: 1,
          img:'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 2,
          img:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 3,
          img:'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 4,
          img:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 5,
          img:'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 6,
          img:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 7,
          img:'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        }
        ,
        {
          id: 8,
          img:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 9,
          img:'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        }
      ],
      currentIndex:0,
      maxIndex:0
    }
  },
  methods:{
    sliderMove(index){
      if(index > 0){
        if(this.currentIndex < this.maxIndex){
          this.currentIndex++;
        }
      }else{
        if(this.currentIndex > 0){
          this.currentIndex--;
        }
      }
    }
  },
  computed:{
    ulWidth(){
      return Math.ceil(this.galleryList.length / 2) * 373 + 'px';
    },
    ulTranslate(){
      return `translateX(${-373 * this.currentIndex}px) `
    }
  },
  created(){
    this.maxIndex = Math.ceil(this.galleryList.length / 2) - 3;
  }
}
</script>
<style lange='scss'>
    @import '~assets/scss/recommend.scss';
</style>