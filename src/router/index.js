import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import WorkView from '@/components/WorkView'
import Contest from '@/components/Contest'
import Contestant from '@/components/Contestant'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Contest
    },
    {
      path: '/contestant',
      component: Contest
    },
    {
      path: '/work',
      component: Work
    }
  ]
})
