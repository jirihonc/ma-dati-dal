import Vue from 'vue'
import Router from 'vue-router'
import DebtCounter from '@/components/DebtCounter'
import Credit from '@/components/Credit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DebtCounter',
      component: DebtCounter
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    }
  ]
})
