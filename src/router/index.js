import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PageIndex from '@/components/PageIndex'
import Index from '@/components/Index'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'
import PageC from '@/components/PageC'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/page-A',
          component: PageA
        },
        {
          path: '/page-B',
          component: PageB
        },
        {
          path: '/page-C',
          component: PageC
        }
      ]
    }
  ]
})
