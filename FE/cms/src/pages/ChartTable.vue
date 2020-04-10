<template>
  <div id="chartTable">
    <h1>{{title}}</h1>
    <div class="chart-list">
      <echart ref="chart" :options="orgOptions" :auto-resize="true"></echart>
      <echart ref="chart" :options="barOptions" :auto-resize="true"></echart>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

//折线/面积图
import 'echarts/lib/chart/line'
//柱状/条形图
import 'echarts/lib/chart/bar'

export default {
  name: "ChartTable",
  data() {
    return {
      title: "chartTable",
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
            text: '折线图'
        },
        tooltip: {},
        legend: {
            data:['人数']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            name: '人数',
            smooth: true
        }]
    };
    this.barOptions = {
        title: {
            text: '柱状图'
        },
        tooltip: {},
        legend: {
            data:['人数'],
            x: 'center', 
        },
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
    };
  }
};
</script>

<style lang="scss">
@import "../scss/chartTable.scss";
</style>