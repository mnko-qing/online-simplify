import Vue from 'vue'
import Router from 'vue-router'
import TaskList from './views/TaskList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'taskList',
      component: TaskList
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: () => import('./views/CreateOrder.vue')
    },
    {
      path: '/taskHandle',
      name: 'taskHandle',
      component: () => import('./views/TaskHandle.vue')
    }
  ]
})
