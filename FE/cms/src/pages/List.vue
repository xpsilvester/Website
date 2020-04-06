<template>
  <div id="list">
    <h1>{{title}}</h1>
    <Virlist :tableTitles="listTitles" :tableData="tableDatas" @childDel="deleteRow">
      <div class="list-column" v-for="item in listTitles" :key="item.name"
          :style="{width: item.width ? item.width : '100px'}">
          {{item.name}}
      </div>
    </Virlist>
  </div>
</template>

<script>
  import Virlist from '../components/Virlist.vue'
  export default {
    name: 'List',
    data() {
      return {
        title: 'list',
        listTitles: [
          {
            name: '序号',
            width: '50px'
          },
          {
            name: '日期',
            width: '100px'
          },
          {
            name: '姓名',
            width: '100px'
          },
          {
            name: '地址',
            width: '250px'
          },
          {
            name: '手机号',
            width: '100px'
          },
          {
            name: '年龄',
            width: '50px'
          },
          {
            name: '博客',
            width: '100px'
          },
          {
            name: '国籍',
            width: '80px'
          },
          {
            name: '操作',
            width: '80px'
          }
        ],
        tableDatas: []
      }
    },
    components: {
      Virlist
    },
    methods: {
      deleteRow(index) {
        this.tableDatas.splice(index, 1)
      }
    },
    computed: {

    },
    mounted() {

    },
    created() {
      for (let i = 0; i < 2000; i++) {
        this.tableDatas.push({
          id: i,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '1233443433',
          age: 26,
          blog: 'xpsilvester',
          country: '中国'
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/list.scss';
</style>