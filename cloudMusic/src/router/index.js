import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend'
import song_list from '../components/song_list/song_list'
import station from '../components/station/station'
import ranking_list from '../components/ranking_list/ranking_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:'recommend'}
    },
    {
    	path:'/recommend',
    	name:'recommend',
    	component: recommend
    },
    {
    	path:'/song_list',
    	name:'song_list',
    	component: song_list
    },
    {
    	path:'/station',
    	name:'station',
    	component: station
    },
        {
    	path:'/ranking_list',
    	name:'ranking_list',
    	component: ranking_list
    },
  ],
  	linkActiveClass:'active'
})
