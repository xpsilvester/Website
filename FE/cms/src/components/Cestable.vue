<!--表格组件 -->
<template>
  <section id="cestable">
    <!-- 查询表单 -->
    <div class="search">
      <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item v-for="item in formOption" :key="item.prop" :label="item.label">
          <el-input v-if="item.type == 'Input'" v-model="formData[item.prop]" :placeholder="item.placeholder"></el-input>
          <el-select v-if="item.type == 'Select'" v-model="formData[item.prop]" :placeholder="item.placeholder">
            <el-option
              v-for="item2 in item.options"
              :key="item2.value"
              :label="item2.label"
              :value="item2.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 查询操作 -->
        <el-form-item v-for="item in formOperation" :key="item.name">
          <el-button :type="item.type" @click="item.handle">{{item.name}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 操作按钮 -->
    <div class="operation" v-if="topOperation.length > 0">
      <el-button v-for="item in topOperation" :key="item.name" :type="item.type" @click="item.handle">{{item.name}}</el-button>
    </div>
    <!-- 数据列表 -->
    <div class="table-list">
      <el-table :data="tableData" height="350" border style="width: 100%">
        <el-table-column v-for="item in tableCols" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150" v-if="tableOperation.length > 0">
          <template slot-scope="scope">
            <el-button @click="btn.handle(scope.row)" v-for="btn in tableOperation" :key="btn.name" :type="btn.type" size="small">{{btn.name}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination style='display: flex;width:1200px;margin: 10px auto;justify-content: flex-end;height: 100%;align-items: center;'
        @current-change="pagination.handleCurrentChange"
        @size-change="pagination.handleSizeChange"
        layout="total,sizes ,prev, pager, next,jumper"
        :page-size="pagination.data.pageSize"
        :current-page="pagination.data.pageNum"
        :total="pagination.data.total"
    ></el-pagination>
  </section>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
    tableData: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableCols: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableOperation: {
      type: Array,
      default: function () {
        return []
      }
    },
    topOperation: {
      type: Array,
      default: function () {
        return []
      }
    },
    formOption:{
      type: Array,
      default: function () {
        return []
      }
    },
    formData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    formOperation: {
      type: Array,
      default: function () {
        return []
      }
    },
    pagination: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {},
  methods: {
    
  },
  created(){
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