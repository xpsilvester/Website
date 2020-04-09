import Vue from 'vue'
import Router from "vue-router"
import Home from './pages/Home.vue'
import List from './pages/List.vue'
import ChartTable from './pages/ChartTable.vue'
import Table from './pages/Table.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        component: Home
    },{
        path: '/list',
        component: List
    },{
        path: '/charttable',
        component: ChartTable
    },{
        path: '/table',
        component: Table
    }]
})

export default router