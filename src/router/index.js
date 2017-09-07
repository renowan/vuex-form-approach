import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form1View from '@/pages/form1/PageView'
import Form2View from '@/pages/form2/PageView'
import Form3View from '@/pages/form3/PageView'

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
    },
    {
      path: '/form2',
      name: 'Form2View',
      component: Form2View
    },
    {
      path: '/form3',
      name: 'Form3View',
      component: Form3View
    }
  ]
})
