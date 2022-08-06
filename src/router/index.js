import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'
import AgeError from '@/views/AgeError.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page-2/',
      name: 'Page 2',
      component: Page2
    },
    {
      path: '/page-3/',
      name: 'Page 3',
      component: Page3
    },
    {
      path: '/age-error/',
      name: 'Age Error',
      component: AgeError
    }
  ]
})
