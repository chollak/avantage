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
import VueToast from 'vue-toast-notification';
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import checkView from 'vue-check-view'

Vue.prototype.$http = Axios;
Vue.prototype.$unsplash = 'https://source.unsplash.com/random';


class AosPlugin {
  config = {
    // Your AOS config here
  }

  install(Vue) {
    AOS.init(this.config)

    Vue.mixin({
      updated() {
        this.$nextTick(function () {
          AOS.refreshHard() // This is needed to avoid the un-animate aos effect
        })
      }
    })
  }
}

Vue.use(new AosPlugin())
Vue.use(vueSmoothScroll)
Vue.use(VueToast)
Vue.use(checkView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')