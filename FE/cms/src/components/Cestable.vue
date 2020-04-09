<!--表格组件 -->
<template>
  <section id="cestable">
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formInline.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.region" placeholder="请选择性别">
            <el-option
              v-for="item in formInline.genderOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="operation">
      <el-button type="primary" @click="onAdd">新增</el-button>
    </div>
    <div class="table-list">
      <el-table :data="tableData" height="350" border style="width: 100%">
        <el-table-column prop="id" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="180"></el-table-column>
        <el-table-column prop="gender" label="性别" width="180"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination style='display: flex;width:1200px;margin: 10px auto;justify-content: flex-end;height: 100%;align-items: center;'
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="total,sizes ,prev, pager, next,jumper"
        :page-size="pagination.pageSize"
        :current-page="pagination.pageNum"
        :total="pagination.total"
    ></el-pagination>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      formInline: {
        name: "",
        age: "",
        gender: 0,
        genderOption: [
          {
            label: "男",
            value: 1
          },
          {
            label: "女",
            value: 2
          }
        ]
      },
      tableData: [],
      pagination:{
        pageSize:10,
        pageNum:1,
        total:7
      }
    };
  },
  watch: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onReset() {
      console.log("reset!");
    },
    onAdd() {
      console.log("add!");
    },
    handleClick(row){
      console.log(row)
    },
    handleCurrentChange(){

    },
    handleSizeChange(){

    }
  },
  created(){
    for(let i=1;i<20;i++){
      this.tableData.push({
        id: i,
        name: '张三',
        age: 26,
        gender: '男',
        date: "2016-05-03"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.search,
.operation,
.table-list {
  max-width: 1200px;
  margin: 10px auto;
  text-align: left;
}
</style>