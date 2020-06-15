import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
global.$ = jQuery
import 'bootstrap'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from "aos"
import 'aos/dist/aos.css'
import Axios from 'axios'

Vue.prototype.$http = Axios;

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')