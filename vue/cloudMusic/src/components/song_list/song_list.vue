<template>
  <div class="song_list">
     		<p v-for="(item,index) in items" v-on:click="sendMsg(index)" >
     			<span class="num">{{item.num}}</span>
     			<span class="name">{{item.name}}</span>
     			<span class="author">{{item.author}}</span>
     			<span class="more"  v-on:click.stop="addMusic(index)">+</span>
     		</p>
   </div>   
</template>

<script>


  export default {

  			data(){
  				return {
  					items:[],
  					b:{}
  				}
  			},
  			methods:{
 	
  				sendMsg:function (index) {
  					/*console.log(a[index]);*/
  					this.b=this.items[index];
  					this.$root.Bus.$emit('showing',this.b);
  				},
  				addMusic:function (index) {
  					this.$store.dispatch('addmusic',this.items[index]);
  				}
  			},
        created:
           function (){
           this.$axios.post('http://www.guoaihua.com:3000/getData').then((res)=>{
            /*console.log(res);*/
               this.items=res.data;
       /*        console.log(this.items);*/
              });
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