<template>
  <div id="chartTable">
    <h1>{{title}}</h1>
    <echart ref="chart" :options="orgOptions" :auto-resize="true"></echart>
  </div>
</template>

<script>
import 'echarts/lib/chart/line'

export default {
  name: "ChartTable",
  data() {
    return {
      title: "chartTable",
      orgOptions: {}
    };
  },
  components: {},
  methods: {},
  mounted() {
  },
  created() {
     this.orgOptions = {
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
            smooth: true
        }]
    }
  }
};
</script>

<style lang="scss">
@import "../scss/chartTable.scss";
</style>