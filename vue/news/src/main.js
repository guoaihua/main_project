import Vue from 'vue'
import App from './App.vue'
import store from './store.js'



var vm=new Vue({
	store,
  el: '#app',
  render: h => h(App)
})
