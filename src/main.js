// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import layout from './components/layout-comp.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/css/swiper.css'
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 引入mockjs
require('../mock/mock')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout },
  template: '<layout/>'
})

//希望router-link跳转到页面顶部代码
// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// })
