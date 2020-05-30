import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Article from '@/pages/article'
import Aboutus from '@/pages/aboutus'

Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    }
   
  ]
})

