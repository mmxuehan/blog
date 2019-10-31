import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import regist from '@/components/regist'

//子路由
import forgetpsd from "../components/user/forgetpsd.vue"
// import loginmail from "../components/user/loginmail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      // 配置子路由：
      // children:[
        
      //   {
      //     path:'loginname',
      //     component:loginname
      //   },
      //   {
      //     path:'loginmail',
      //     component:loginmail
      //   }
      // ]
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

  ]
})
