import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import project from '../components/project'
import article from '../components/article'
import person from '../components/person'
import contact from '../components/contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
        {
      path: '/article',
      name: 'article',
      component: article
    },
        {
      path: '/project',
      name: 'project',
      component: project
    },
        {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
    	path:'/*',
    	redirect:'/home'
    }
  ]
})
