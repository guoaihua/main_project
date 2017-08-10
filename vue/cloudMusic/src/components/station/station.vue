<template>
	<div class="collectLists">
		<p v-for="(collectList,index) in collectLists" v-on:click="sendMsg(index)" >
			<span class="num">{{index+1}}</span>
			<span class="name">{{collectList.name}}</span>
			<span class="author">{{collectList.author}}</span>
			<span class="more" v-on:click="del(index)">-</span>
		</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed:
			mapGetters([
			'collectLists'
			]),
		methods:{
			  	sendMsg:function (index) {
  					/*console.log(a[index]);*/
  					this.b=this.collectLists[index];
  					this.$root.Bus.$emit('showing',this.b);
  				},
  				del:function (index) {
  					this.$store.dispatch('del',index);
  				}

		}	
	}
</script>

<style scoped>

	.collectLists {
		width: 100%;
		height: 100%;
	/* 	font-size: 20px; */
	}
	.collectLists p {
		width: 100%;
		height: 9%;
		margin: 0;
	}

	p span {
		display: inline-block;
		color: white;
		line-height: 49px;
	}

	.num {
		width: 20%;
		height: 100%;
		text-align: center;
		
	}

	.name {
		width: 35%;
		height: 100%;
		border-bottom: 1px solid rgba(220, 189, 189, 0.33);
	}
	.author {
		color: #ccc;
		width: 37%;
		height: 100%;
		border-bottom: 1px solid rgba(220, 189, 189, 0.33);
	}
</style>