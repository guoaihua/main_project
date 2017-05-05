<template>
	<div class="sidebar">
		<i class="glyphicon glyphicon-plus" @click="addNote"></i>
    	<i class="glyphicon glyphicon-star"></i>
  	    <i class="glyphicon glyphicon-remove" @click="delNote"></i>
	</div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'

	export default {
		methods:mapActions([
			'addNote',
			'delNote'
		]
		)
	}

</script>

<style scoped>
	.sidebar i{
			font-size:40px;
			margin-left: 20px;
			margin-top:20px;
			cursor: pointer;
	}
</style>