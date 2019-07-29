import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage/index'
import Message from '@/components/Message/index'
import Personal from '@/components/Personal/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
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
