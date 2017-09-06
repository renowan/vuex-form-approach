import Vue from 'vue'
import Vuex from 'vuex'
import form1 from './modules/form1'
import form2 from './modules/form2'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form1,
    form2,
  },
  strict: true
})
