<template>
  <div class="rankingList">
  	<div class="upList">
  	  <span class="vertical-Line"></span>
      <span class="listTitle">推荐歌单</span>
      <span class="symbol">></span>
    </div>  
     <div class="list" v-for="list in lists">
     	<div class="pics">
     		<img :src="list.src" alt="">
     		<a href="#" :title="list.title">{{list.title}}</a>
     	</div>
     </div> 
  
   	<div class="upList">
  	  <span class="vertical-Line"></span>
      <span class="listTitle">最新音乐</span>
      <span class="symbol">></span>
    </div>  
     <div class="list" v-for="list in lists">
     	<div class="pics">
     		<img :src="list.src" alt="">
     		<a href="#" :title="list.title">{{list.title}}</a>
     	</div>
     </div> 
  </div>
</template>

<script>
  export default {
  		data(){
  			return {
  				lists:[]
  			}
  		},
  		created:function () {
  			this.$axios.post('http://www.guoaihua.com:3000/getPics').then((res)=>{
  				this.lists=res.data;
  				/*console.log(this.lists);*/
  			});
  		}
  }
</script>

<style scoped>
	.rankingList {
		width: 100%;
		height: 100%;
	}

	.upList{
		margin-top: 20px; 
		margin-bottom: 10px;
	}

	.listTitle {
		display: inline-block;
		font-size: 20px;
		color: white;
		font-family: "宋体";
	}


	.vertical-Line {
		display: inline-block;
		width: 4px;
		height: 20px;
		background-color: white;
	}
	.symbol {
		font-size: 25px;
		color: #ccc;
	}

	.list {
		display: inline-block;
		width: 32%;
		margin-right:1%; 
		margin-bottom: 15px;
	}

	.pics {
		width: 100%;
	}

    .pics img {
    	width: 100%;
    	height: 80%;
    }
	/* 文字多余隐藏 */
	.pics a {
		display: inline-block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
</style>
</style>