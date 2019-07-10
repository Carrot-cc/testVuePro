import Vue from 'vue'
import VueRouter from 'vue-router'

 Vue.use(VueRouter)

import HomeContainer from '../components/layout/HomeContainer.vue'
import MemberContainer from '../components/layout/MemberContainer.vue'
import SearchContainer from '../components/layout/SearchContainer.vue'
import ShopcarContainer from '../components/layout/ShopcarContainer.vue'

var router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    }

  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router;