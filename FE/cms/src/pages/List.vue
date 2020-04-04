<template>
    <div id="list">
        <h1>{{title}}</h1>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="序号" width="180">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="phone" label="手机号">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="blog" label="博客">
            </el-table-column>
            <el-table-column prop="country" label="国籍">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                title: 'list',
                tableData: []
            }
        },
        methods:{
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        },
        created() {
            for (let i = 0; i < 2000; i++) {
                this.tableData.push({
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