import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form1View from '@/pages/form1/Form1View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form1',
      name: 'Form1View',
      component: Form1View
    }
  ]
})
