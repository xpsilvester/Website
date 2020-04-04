import Vue from 'vue'
import Router from "vue-router"
import Home from './pages/Home.vue'
import List from './pages/List.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        component: Home
    },{
        path: '/list',
        component: List
    }]
})

export default router