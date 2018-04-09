import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import Pos from '@/components/pages/Pos'
import Home from '@/components/pages/Home'
import AllOreder from '@/components/pages/AllOrder'
import GoodsList from '@/components/pages/GoodsList'
import Logout from '@/components/pages/Logout'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/pos',
      name: 'pos',
      component: Pos
    }, {
      path: '/allOrder',
      name: 'allOrder',
      component: AllOreder
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})
