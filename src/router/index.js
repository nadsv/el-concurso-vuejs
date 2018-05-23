import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Contest from '@/components/Contest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Contest
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/work/:id',
      component: Work,
      props: true
    }
  ]
})
