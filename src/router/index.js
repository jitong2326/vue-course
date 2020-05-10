import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'Home' })
    else next()
  }
})

/*
1.  导航被触发
2.  在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
3.  调用全局迁前置守卫 beforeEach
4.  在重用的组件里调用 beforeRouteUpdate
5.  调用路由独享的守卫 beforeEnter
6.  解析异步路由组件
7.  在被激活的组件（即将进入的页面组件里调用 beforRouteEnter
8.  调用全局解析守卫 beforeRrsolve
9.  导航被确认
10. 带哦用全局后置守卫 afterEach
11. 触发DOM更新
12. 用创建好的实例调用beforeRouteEnter守卫传给next的回调函数
*/

export default router
