import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './component/Home.vue'
import News from './component/News.vue'
import Deta from './component/Deta.vue'

Vue.use(VueRouter);
const router=new VueRouter({
	routes:[{path:'/home',component:Home},
			{path:'/news',component:News,
			 children:[
			 {path:'da',component:Deta}
			 ]
			},
			
			{path:'*',redirect:'/home'}]
});


new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
