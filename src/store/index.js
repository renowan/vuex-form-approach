import Vue from 'vue'
import Vuex from 'vuex'
import form1 from './modules/form1'
import form2 from './modules/form2'
import form3 from './modules/form3'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form1,
    form2,
    form3,
  },
  strict: true
})
