import Home from './components/Home.vue'
import Personal from './components/Personal.vue'
import Project from './components/project.vue'
import Skill from './components/skill.vue'

const routes=[
				{path:'/home',component:Home},
				{path:'/personal',component:Personal},
				{path:'/project',component:Project},
				{path:'/skill',component:Skill},
				{path:'*',redirect:'/home'}
			]
export default {
	routes
}