<template>
  <div id="chartMap">
    <h1>{{title}}</h1>
    <div class="chart-list">
      <echart ref="chart" :options="orgOptions" :auto-resize="true"></echart>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

//地图
import 'echarts/lib/chart/map'
import 'echarts/map/js/china'

export default {
  name: "ChartMap",
  data() {
    return {
      title: "chartMap",
      orgOptions: {},
      barOptions: {}
    };
  },
  components: {
    'echart': ECharts
  },
  methods: {},
  mounted() {
  },
  created() {
    this.orgOptions = {
        title: {
            text: '疫情地图',
            x: 'center'
        },
        tooltip:{//提示框组件
          show:true,
          trigger:'item',
          formatter: '地区：{b}<br/>现有确诊：{c}'// {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
        },
        visualMap:{//视觉映射组件
          type:'piecewise',//映射组件类型(1、piecewise--分段型;2、continuous--连续型)
          inRange:{
            color: ['#CCC', '#F2B252', '#D1241A']//数据段范围颜色
          },
          pieces: [//地图左下角显示可视化
            {min: 10000,color:'#b80909'}, // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 1000, max: 9999,color:'#e64546'},
            {min: 100, max: 999,color:'#f57567'},
            {min: 10, max: 99,color:'#ff9985'},
            {min: 1, max: 9,color:'#ffe5db'},
            {value: 0,color:'#fff'}, // 表示 value 等于 0 的情况。
          ]
        },
        series: [{
            name: '地图',
            type: 'map',
            map:'china',
            zoom:1,//地图显示大小调整(默认为1)
            data: [
              {name:'北京',value:'320'},
              {name:'天津',value:'362'},
              {name:'上海',value:'532'},
              {name:'重庆',value:'632'},
              {name:'湖北',value:'5990'}
            ],
            label:{//区域名称显示
              show:true
            },
            itemStyle:{//区域间样式调节
              borderColor:'lightblue'
            },
            emphasis:{//区域高亮显示时状态
                label:{//高亮时字体样式
                color: '#FFF',
              },
              itemStyle:{//高亮是区域样式
                areaColor:'#c7fffd',
                borderColor:'#ccc'
              }
            }
        }]
    };
    this.axios.get('/api/getdata')
    .then((response) => {
        //console.log(response)
        let provinceDatas = response.data.component[0].caseList.map(item => {
            item.name = item.area
            item.value = item.curConfirm
            return item
        })
        this.orgOptions.series[0].data = provinceDatas;
        //console.log(this.orgOptions.series[0].data)
    })
    .catch((error) => {
        console.log(error)
    });
  }
};
</script>

<style lang="scss">
@import "../scss/ChartMap.scss";
</style>