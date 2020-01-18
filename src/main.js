import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import test from './components/test'
Vue.use(VueRouter)


const constantRouterMap = [
  {
    path: "/test",
    component: test
  }
]

let router= new VueRouter({
  routes: constantRouterMap
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



