import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	collectLists:[]
}

const getters ={
	collectLists(state){
		return state.collectLists;
	}
}

const mutations={
		addmusic(state,value){
				state.collectLists.push(value);
				alert("收藏成功！");
		},
		del(state,index){
				state.collectLists.splice(index,1);
		}
}

const actions={
	addmusic({commit},value){
		commit('addmusic',value)
	},
	del({commit},index){
		commit('del',index)
	}
}


export default new Vuex.Store({
	state,getters,actions,mutations
})