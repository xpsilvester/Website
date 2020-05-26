import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(VueAxios,axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
