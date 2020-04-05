<template>
    <div id="list">
        <h1>{{title}}</h1>
        <div class="list-title">
            <ul>
                <li>
                    <div class="list-column" style="width: 50px;">
                        序号
                    </div>
                    <div class="list-column" style="width: 100px;">
                        日期
                    </div>
                    <div class="list-column" style="width: 100px;">
                        姓名
                    </div>
                    <div class="list-column" style="width: 250px;">
                        地址
                    </div>
                    <div class="list-column" style="width: 100px;">
                        手机号
                    </div>
                    <div class="list-column" style="width: 50px;">
                        年龄
                    </div>
                    <div class="list-column" style="width: 100px;">
                        博客
                    </div>
                    <div class="list-column" style="width: 80px;">
                        国籍
                    </div>
                    <div class="list-column" style="width: 80px;">
                        操作
                    </div>
                </li>
            </ul>
        </div>
        <div class="list-content" ref="content" @scroll="handleScroll">
            <div class="list-phantom" :style="{height: contentHeight}"></div>
            <ul ref="contentul">
                <li v-for="(item,index) in tableVisible" :key="item.id">
                    <div class="list-column" style="width: 50px;">
                        {{item.id}}
                    </div>
                    <div class="list-column" style="width: 100px;">
                        {{item.date}}
                    </div>
                    <div class="list-column" style="width: 100px;">
                        {{item.name}}
                    </div>
                    <div class="list-column" style="width: 250px;">
                        {{item.address}}
                    </div>
                    <div class="list-column" style="width: 100px;">
                        {{item.phone}}
                    </div>
                    <div class="list-column" style="width: 50px;">
                        {{item.age}}
                    </div>
                    <div class="list-column" style="width: 100px;">
                        {{item.blog}}
                    </div>
                    <div class="list-column" style="width: 80px;">
                        {{item.country}}
                    </div>
                    <div class="list-column operation" style="width: 80px;" @click="deleteRow(index,tableData)">
                        删除
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                title: 'list',
                tableData: [],
                tableVisible: [],
                itemHeight: 50
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1)
            },
            updateVisibleData(scrollTop) {
                scrollTop = scrollTop || 0;
                const visibleCount = Math.ceil(500 / this.itemHeight) // 取得可见区域的可见列表项数量
                const start = Math.floor(scrollTop / this.itemHeight) // 取得可见区域的起始数据索引
                const end = start + visibleCount; // 取得可见区域的结束数据索引
                this.tableVisible = this.tableData.slice(start, end) // 计算出可见区域对应的数据，让 Vue.js 更新
                // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
                this.$refs.contentul.style.webkitTransform = `translate3d(0, ${ start * 50 }px, 0)`;
            },
            handleScroll() {
                let scrollTop = this.$refs.content.scrollTop
                this.updateVisibleData(scrollTop)
                console.log(scrollTop)
            }
        },
        computed: {
            contentHeight() {
                return this.tableData.length * this.itemHeight + 'px';
            }
        },
        mounted(){
            this.updateVisibleData(0);
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