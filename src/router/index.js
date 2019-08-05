import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Homepage from '@/view/Homepage/index'
import Sort from '@/view/Sort/index'
import Message from '@/view/Message/index'
import Personal from '@/view/Personal/index'
// 二级路由
import listDetails from '@/view/Homepage/Subpage/listDetails/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Subpage/listDetails',
      name: 'listDetails',
      component: listDetails
    },
    {
      path: '/Sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
