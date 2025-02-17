import Vue from 'vue'
import Vuex from 'vuex'
import { products, checkout, register } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    checkout,
    register
  },
})
