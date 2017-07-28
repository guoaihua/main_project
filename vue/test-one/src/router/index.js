import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import project from '@/components/project'
import skill from '@/components/skill'
import person from '@/components/person'

Vue.use(Router)

export default new Router({
  mode:'history',  
  routes: [
    
    {
      path: '/home',
      component: home
    },
    
    {
      path: '/project',
      component: project
    },

    {
      path: '/skill',
      component: skill
    },

    {
      path: '/person',
      component: person
    }
    ,{
        path: '/',
        redirect:'/home'
    }
  ]
})

