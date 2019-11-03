import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import regist from '@/components/regist'
//首页路由
import homepage from '@/components/homepage'
//忘记密码路由
import forgetpsd from "../components/user/forgetpsd.vue"
// 文章详情路由
import articledetail from "../components/user/articleDetail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/forgetpsd',
      name: 'forgetpsd',
      component: forgetpsd
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      component: articledetail
    },

  ]
})
