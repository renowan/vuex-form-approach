import Vue from 'vue'
import Vuex from 'vuex'
import form1 from './modules/form1'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form1,
  },
  strict: true
})
