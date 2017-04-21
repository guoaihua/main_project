import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import config from './router.config.js'


Vue.use(VueRouter)



const router=new VueRouter(config)


new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
  