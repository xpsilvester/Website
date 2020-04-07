<template>
    <div id="virlist">
        <ul class="title">
            <li>
                <slot></slot>
            </li>
        </ul>
        <div class="list-content" ref="content" @scroll="handleScroll">
            <div class="list-phantom" :style="{height: contentHeight}"></div>
            <ul :style="{transform: 'translate3d(0, '+transformY + 'px, 0)'}">
                <li v-for="(item,index) in tableVisible" :key="item.id">
                    <div v-for="(val,key,i) in item" :key="i" class="list-column"
                        :style="{width: tableTitles[i].width ? tableTitles[i].width : '100px'}">
                        {{val}}
                    </div>
                    <div class="list-column operation" style="width: 80px;" @click="deleteRow(index)">
                        删除
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    //混入节流函数
    import {throttle} from '../minxins/throttle.js'
    export default {
        name: 'Virlist',
        data() {
            return {
                itemHeight: 50,
                transformY: 0,
                startIndex: 0,
                contentUl: 500,
                tableVisible: []
            }
        },
        mixins:[throttle],
        props: {
            msg: String,
            tableData: Array,
            tableTitles: Array
        },
        methods: {
            handleScroll() {
                this.throttle(this.updateVisibleData,100)()
            },
            deleteRow(index) {
                const end = this.startIndex + this.visibleCount // 取得可见区域的结束数据索引
                this.$emit('childDel', index + this.startIndex);
                this.tableVisible = this.tableData.slice(this.startIndex, end) // 计算出可见区域对应的数据，让 Vue.js 更新
            },
            updateVisibleData() {
                let scrollTop = this.$refs.content.scrollTop || 0
                const start = Math.floor(scrollTop / this.itemHeight) // 取得可见区域的起始数据索引
                this.startIndex = start
                const end = start + this.visibleCount // 取得可见区域的结束数据索引
                this.tableVisible = this.tableData.slice(start, end) // 计算出可见区域对应的数据，让 Vue.js 更新
                // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
                //this.$refs.contentul.style.webkitTransform = `translate3d(0, ${ start * 50 }px, 0)`;
                this.transformY = start * 50
            }
        },
        computed: {
            contentHeight() {
                //return this.tableData.length * this.itemHeight + 'px'; //Memory 38M
                return (this.tableVisible.length + this.startIndex + 1) * this.itemHeight + 'px'; ////Memory 32M
            },
            visibleCount() {
                return Math.ceil(this.contentUl / this.itemHeight) // 取得可见区域的可见列表项数量
            }
        },
        mounted() {
            this.updateVisibleData(0);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../scss/virlist.scss';
</style>