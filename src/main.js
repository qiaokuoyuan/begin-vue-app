import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)


const constantRouterMap = [
  {
    path: "/test",
    component: () => import("@/components/test")
  }
]

let router= new Router({
  routes: constantRouterMap
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



