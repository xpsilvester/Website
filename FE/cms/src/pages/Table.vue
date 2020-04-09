<template>
  <div id="table">
    <h1>{{title}}</h1>
    <Cestable :tableData="tableData" 
              :tableCols="tableCols" 
              :tableOperation="[
                {type:'primary',name:'编辑',handle:handleClick},
                {type:'danger',name:'删除',handle:handleClick}              
              ]"
              :topOperation="[
                {type:'primary',name:'新增',handle:onAdd}
              ]"
              :formData="searchData"
              :formOption="searchForm"
              :formOperation="[
                {type:'primary',name:'查询',handle:onSearch},
                {type:'primary',name:'重置',handle:onReset}
              ]"
              :pagination="{data:pagination,handleCurrentChange,handleSizeChange}" />
  </div>
</template>

<script>
import Cestable from "../components/Cestable.vue";

export default {
  name: "Table",
  data() {
    return {
      title: "table",
      tableData:[],
      tableCols:[
        {
          prop: 'id',
          label: '序号',
          width: 100
        },
        {
          prop: 'name',
          label: '姓名',
          width: 180
        },
        {
          prop: 'age',
          label: '年龄',
          width: 180
        },
        {
          prop: 'gender',
          label: '性别',
          width: 180
        },
        {
          prop: 'date',
          label: '日期',
          width: 'auto'
        }
      ],
      searchForm:[
        {type:'Input',label:'姓名',prop:'name',width:'180px',placeholder:'请输入姓名'},
        {type:'Input',label:'年龄',prop:'age',width:'180px',placeholder:'请输入年龄'},
        {type:'Select',label:'性别',prop:'gender',width:'180px',options:[{label: "男",value: 1},{label: "女",value: 2}],placeholder:'请选择性别'}
      ],
      searchData:{
        name: "",
        age: "",
        gender: ''
      },
      pagination:{
        pageSize:10,
        pageNum:1,
        total:7
      }
    };
  },
  components: {
    Cestable
  },
  methods: {
    handleClick(row){
      console.log(row)
    },
    onAdd(){
      console.log('add!')
    },
    onSearch(){
      console.log('search',this.searchData)
    },
    onReset(){
      this.searchData = {
        name: "",
        age: "",
        gender: ''
      }
    },
    handleCurrentChange(data){
      console.log(data)
    },
    handleSizeChange(data){
      console.log(data)
    }
  },
  created() {
    for (let i = 1; i < 20; i++) {
      this.tableData.push({
        id: i,
        name: "张三",
        age: 26,
        gender: "男",
        date: "2016-05-03"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>