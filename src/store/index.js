import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      name: '',
      phone: '',
      address:'',
    }
  },
  mutations: {},
  getters: {
    getForm: state => state.form
  },
  actions: {},
  modules: {}
})