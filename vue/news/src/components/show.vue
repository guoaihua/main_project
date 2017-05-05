<template>
	<div class="show">
		<h2>note展示区</h2>
		<div class="btn-group center">
			<button type="button" class="btn btn-defaule">所有的note</button>
			<button type="button" class="btn btn-defaule">收藏的note</button>
		</div>		
		<button type="button" class="btn btn-info showbutton" v-for="note in notes" :class="{active: activeNote === note}" @click="update(note)">{{note.text.substring(0,30)}}</button>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
export default {	
		computed:

			mapGetters([
			'notes',
			'activeNote'
			]),
		methods:	
			mapActions([
			'update'
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