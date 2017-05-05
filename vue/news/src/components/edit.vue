<template>
	<div class="edit">
			<textarea  @input="editNote" :value="activeText"></textarea>
	</div>			
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
			methods:mapActions([
					'editNote'
				]),
			computed:mapGetters(
				['activeText']				
			)

			
	}
</script>

<style scoped>
	.edit textarea {
			height: 100%;
			width: auto;
	}
</style>