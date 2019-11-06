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
          img:'http://img1.imgtn.bdimg.com/it/u=301510610,3922289225&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 2,
          img:'http://img3.imgtn.bdimg.com/it/u=869353456,4177450797&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 3,
          img:'http://img3.imgtn.bdimg.com/it/u=943952439,1100964234&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 4,
          img:'http://img5.imgtn.bdimg.com/it/u=2316638757,642138572&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 5,
          img:'http://img0.imgtn.bdimg.com/it/u=1242054797,1604644057&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 6,
          img:'http://hiphotos.baidu.com/feed/pic/item/7af40ad162d9f2d33183a7fba3ec8a136327cc10.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 7,
          img:'http://img2.imgtn.bdimg.com/it/u=230361599,3007241127&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        }
        ,
        {
          id: 8,
          img:'http://img0.imgtn.bdimg.com/it/u=3520224759,3900359425&fm=26&gp=0.jpg',
          title: '查询实例如果文档宽度小于 300 像素则修改背',
          date: '2015-01-11',
          url:'#'
        },
        {
          id: 9,
          img:'http://img0.imgtn.bdimg.com/it/u=3050741762,3087249566&fm=26&gp=0.jpg',
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