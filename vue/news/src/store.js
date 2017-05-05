import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state= {
	notes: [],
	activeNote:{}
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
	}
}

const mutations={
	addNote(state){
		const newNote={
			text:'new note'
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
		state.notes.$els.remove(state.activeNote);
		state.activeNote=state.notes[0];
	}
}

const getters={
 	notes(state){
 		return state.notes
 	},
 	activeText(state){
 		return state.activeNote.text
 	},
 	activeNote(state){
 		return state.activeNote
 	}

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
