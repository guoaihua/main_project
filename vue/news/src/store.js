import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state= {
	notes: [],
	activeNote:{},
	data:'all'
	}


const actions={
	addNote:({
		commit
	})=>{
		commit('addNote')
	},
	editNote:({
		commit
	},e)=>{
		commit('editNote',e.target.value)
	},
	update:({commit},note)=>{
		commit('update',note)
	},
	delNote:({
		commit
	})=>{
		commit('delNote')
	},
	toggleFavorite:({
		commit
	})=>{
		commit('toggleFavorite')
	}
}

const mutations={
	addNote(state){
		const newNote={
			text:'new note',
			favorite:false
		};
		state.notes.push(newNote); 
		state.activeNote=newNote;          //添加笔记
	},
	editNote(state,text){
		/*console.log(text);*/
		state.activeNote.text=text;
	},
	update(state,note){
		state.activeNote=note;
	},
	delNote(state){
		let indexa=state.notes.indexOf(state.activeNote)
		state.notes.splice(indexa,1);
		state.activeNote=state.notes[0];
	},
	toggleFavorite(state){
		state.activeNote.favorite = !state.activeNote.favorite;	
	},

}

const getters={
 	notes(state){
 console.log(state);	
 			return state.notes	
 	},
 	activeText(state){
 		return state.activeNote.text
 	},
 	activeNote(state){
 		return state.activeNote
 	},
 	show(state){
 		return state.data
 	}

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
