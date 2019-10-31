<template>
  <div class="slider" :style="{ height: height , width: width }" @mouseover="clearInv" @mouseout="runInv">
    <div class="slider-img">
      <transition :name="transform == 0 ? 'slide-trans' : 'slide1-trans'">
        <img v-if="isShow" :src="slides[nowIndex].img">
      </transition>
      <transition :name="transform == 0 ? 'slide-trans-old' : 'slide1-trans-old'">
        <img v-if="!isShow" :src="slides[nowIndex].img">
      </transition>
    </div>
    <!-- <h2>{{slides[nowIndex].title}}</h2> -->
    <ul class="slides-pages">
      <li class="radius" :class="{active: index === nowIndex }" v-for="(item,index) in slides" :key="index" @click="goto(index)">
      </li>
    </ul>
    <div class="prev" @click="goto(prevIndex)"></div>
    <div class="next" @click="goto(nextIndex)"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nowIndex: 0,
      isShow: true,
      transform: 0
    }
  },
  props:{
    height: String,
    width: String,
    slides: {
      type: Array,
      default: function () {
        return [
          {
            title: '1',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572414853872&di=eba96553156fe3d2d6c2d57c9bad9983&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0130f15bebc08ea80121ab5dee3d5a.png%402o.png',
            href: '/'
          },
          {
            title: '2',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572496313101&di=5ead2f39fea8e1acfe8c93fb4fe3b5aa&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3455898968%2C844918433%26fm%3D214%26gp%3D0.jpg',
            href: '/'
          },
          {
            title: '3',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572496471539&di=81115d2bbe8a286460a881678373dbc5&imgtype=0&src=http%3A%2F%2Fimg01.3dmgame.com%2Fuploads%2Fallimg%2F140724%2F153_140724103337_1.jpg',
            href: '/'
          }
        ]
      }
    },
    inv: {
      type: Number,
      default: 5000
    },
    itemH: {
      type: Number,
      default: 187
    }
  },
  computed:{
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods:{
    goto (index) {
      this.isShow = false
      if (index > this.nowIndex) {
        this.transform = 0
      } else {
        this.transform = 1
      }
      if (index !== this.nowIndex) {
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      }
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style lange='scss'>
    @import '~assets/scss/slider.scss';
</style>