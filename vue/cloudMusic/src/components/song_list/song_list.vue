<template>
  <div class="song_list">
     		<p v-for="(item,index) in items" v-on:click="sendMsg(index)" >
     			<span class="num">{{item.num}}</span>
     			<span class="name">{{item.name}}</span>
     			<span class="author">{{item.author}}</span>
     			<span class="more">┆</span>
     		</p>
   </div>   
</template>

<script>

    	var a=[
  				{num:1,name:'济南济南',author:'陈小熊'},
  				{num:2,name:'故乡的原风景',author:'笛子'},
  				{num:3,name:'kiss the rain',author:'刚琴'},
  				{num:4,name:'济南济南',author:'陈小熊'},
  				{num:5,name:'济南济南',author:'陈小熊'},
  				{num:6,name:'济南济南',author:'陈小熊'},
  				{num:4,name:'济南济南',author:'陈小熊'},
  				{num:5,name:'济南济南',author:'陈小熊'},
  				{num:6,name:'济南济南',author:'陈小熊'},
  				{num:4,name:'济南济南',author:'陈小熊'},
  				{num:5,name:'济南济南',author:'陈小熊'},
  				{num:6,name:'济南济南',author:'陈小熊'},
  			]
  export default {

  			data(){
  				return {
  					items:a,
  					b:{}
  				}
  			},
  			methods:{
  				sendMsg:function (index) {
  					/*console.log(a[index]);*/
  					this.b=a[index];
  					this.$root.Bus.$emit('showing',this.b);
  				}
  			}
  }
</script>

<style scoped>
	.song_list {
		width: 100%;
		height: 100%;
	/* 	font-size: 20px; */
	}
	.song_list p {
		width: 100%;
		height: 9%;
		margin: 0;
	}

	p span {
		font-size: 2.5rem;
		display: inline-block;
		color: white;
		line-height: 125px;
	}

	.num {
		width: 20%;
		height: 100%;
		text-align: center;
		
	}

	.name {
		width: 35%;
		height: 100%;
		border-bottom: 1px solid black;
	}
	.author {
		color: #ccc;
		width: 37%;
		height: 100%;
		border-bottom: 1px solid black;
	}
</style>