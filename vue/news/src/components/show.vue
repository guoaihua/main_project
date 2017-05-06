<template>
	<div class="show">
		<h2>note展示区</h2>
		<div class="btn-group center">

			<button type="button" class="btn btn-defaule" @click="sel('all')" :class="{active:show==='all'}">所有的note</button>

			<button type="button" class="btn btn-defaule" @click="sel('vorites')" :class="{
			active:show==='favorite'
			}">收藏的note</button>

		</div>		

		<button type="button" class="btn btn-info showbutton" v-for="note in notesff" :class="{active: activeNote === note}" @click="update(note)">{{note.text.substring(0,30)}}</button>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
export default {	
		methods:	
			mapActions([
			'update','sel'
			]),
		computed:mapGetters([
			'activeNote','notes','show'
			])
}
	

</script>

<style scoped>
	.btn-group {
		 margin-bottom:20px;
	}	
	.showbutton {
		width: 100%;
	}
	.active {
		background-color: red;
	}
</style>