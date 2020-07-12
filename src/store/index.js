import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      name: '',
      phone: '',
      cart: {
        address:'',
        items:[]
      },
      catering: {
        event: "",
        guestNumber: 20,
        address: "",
        message: ""
      },
      stand: {
        message: ""
      },
      registration: {
        event: "",
        extraOptions: [],
        guestNumber: 20,
        message: ""
      },
      contact: {
        message: ""
      }
    }
  },
  mutations: {},
  getters: {
    getForm: state => state.form
  },
  actions: {},
  modules: {}
})