<template>
  <div class="activity">
      <div class="activity-left">
        <div class="activity-first">
          <div class="activity-first-title">
            <h3>{{activityFirstTitle.title}}</h3>
            <p>{{activityFirstTitle.titleSecond}}</p>
            <span></span>
          </div>
          <div class="activity-first-second">
            <img :src="activityFirstSecond.imgUrl" />
          </div>
          <div class="activity-first-third">
            <h3>{{activityFirstThird.title}}</h3>
            <p>{{activityFirstThird.titleSecond}}</p>
            <div class="browse">{{activityFirstThird.browse}}</div>
            <div class="favorites">{{activityFirstThird.favorites}}</div>
          </div>  
        </div>
        <div class="activity-second">
          <div class="activity-second-first">
            <h3>{{activitySecondFirst.title}}</h3>
            <p>{{activitySecondFirst.titleSecond}}</p>
            <div class="browse">{{activityFirstThird.browse}}</div>
            <div class="favorites">{{activityFirstThird.favorites}}</div>
            <div class="triangle"></div>
          </div>
          <div class="activity-second-second">
            <img :src="activitySecondSecond.imgUrl" />
          </div>
        </div>
        <div class="activity-third">
          <div class="activity-third-first">
            <h3>{{activityThirdFirst.title}}</h3>
            <h5>{{activityThirdFirst.titleSecond}}</h5>
            <p>{{activityThirdFirst.titleThird}}</p>
            <div class="triangle"></div>
          </div>
          <div class="activity-third-second">
            <img :src="activityThirdSecond.imgUrl" />
          </div>
        </div>
      </div>
      <div class="activity-right">
        <div class="activity-top">
          <img :src="activityTop.imgUrl" />
        </div>
        <div class="activity-bottom">
          <h3>{{activityBottom.title}}</h3>
          <p>{{activityBottom.titleSecond}}</p>
          <div class="browse">{{activityBottom.browse}}</div>
          <div class="favorites">{{activityBottom.favorites}}</div>
          <div class="triangle"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      activityFirstTitle:{
        title: '品牌活动',
        titleSecond: 'Brand Activity'
      },
      activityFirstSecond:{
        imgUrl: 'https://alessioangeloro.it/wp-content/uploads/2016/06/css3_media_query.png'
      },
      activityFirstThird:{
        title: 'CSS Conditional Rules',
        titleSecond: 'CSS3 @media 查询实例如果文档宽度小于 300 像素则修改背景演示CSS Conditional Rules Module Level 3 @media D',
        browse: 21231,
        favorites: 2342
      },
      activitySecondFirst:{
        title: 'CSS Conditional Rules',
        titleSecond: 'CSS3 @media 查询实例如果文档宽度小于 300 像素则修改背景演示CSS Conditional Rules Module Level 3 @media D',
        browse: 21231,
        favorites: 2342
      },
      activitySecondSecond:{
        imgUrl: 'https://cn.bing.com/th?id=OIP._s-6o5hY0wH6i2PUFjwr9wHaD5&pid=Api&rs=1'
      },
      activityThirdFirst:{
        title:'38',
        titleSecond:'MAY',
        titleThird:'等你出发'
      },
      activityThirdSecond:{
        imgUrl:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1'
      },
      activityTop:{
        imgUrl:'https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2016/11/media-query-funciona-css.png?fit=666%2C370&quality=100&strip=all&ssl=1'
      },
      activityBottom:{
        title: 'CSS Conditional Rules',
        titleSecond: 'CSS3 @media 查询实例如果文档宽度小于 300 像素则修改背景演示CSS Conditional Rules Module Level 3 @media D',
        browse: 21231,
        favorites: 2342
      }
    }
  }
}
</script>
<style lange='scss'>
    @import '~assets/scss/activity.scss';
</style>