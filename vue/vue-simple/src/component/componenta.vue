<template>
	<div id="search-input">
	<bbb @getindex='getIndex'></bbb>

		<input type="text" v-model="keywords" @keyup="get($event)" @keydown.down="select()" @keyup.up="selectUp()" 

		@keydown.up.prevent="selectUp()">

		<button type="button" @click="search">搜索</button>

		<div class="search-result">
				<ul>
					<li v-for="(value,index) in mydata" :class="{select:index==now}" >
						{{value}}
					</li>
				</ul>
		</div>
			<i @click="clear">Ⅹ</i>	
	</div>
</template>
<script>

import bbb from './componentb.vue'; 
	export default {
	 components:{
    bbb
  },
		data(){
			return{
				keywords:'',
				mydata:[],
				now:-1,
				searchindex:0,
				logodata:[
				{searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='},
				{searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='},
				{searchSrc: 'https://www.sogou.com/web?query='}
				]

			}
		},
		created(){
	
			
		},
		methods:{
		
			get:function(ev){

            if (ev.keyCode == 38 || ev.keyCode == 40) {
                return;
            };
            if(ev.keyCode==13){
             window.open(this.logodata[this.searchindex].searchSrc+encodeURI(this.keywords));
             this.keyswords='';
            }

				console.log(this.$data.keywords);
				console.log(this.searchindex);
				this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keywords+ '&encodein=utf-8&encodeout=utf-8').then(function(res){
					this.mydata=res.data.s;
				});
				
			},

			select:function(){
				this.now++;
				 if (this.now == this.mydata.length) {
                this.now = 0;
            }
            this.keywords = this.mydata[this.now];
			},

			selectUp:function(){
					 this.now--;
		            //同上
		            if (this.now == -1) {
		                this.now = this.mydata.length - 1;
		            }
		            this.keywords = this.mydata[this.now];
			},
			search:function(){
			             window.open(this.logodata[this.searchindex].searchSrc+encodeURI(this.keywords));
           				 this.keyswords='';
			},
			getIndex:function(index){
				this.searchindex = index;
			},
				clear:function(){
					this.keywords='';
					this.mydata=[];
				}
		}
	}
</script>
<style type="text/css">
.select {background:#ccc}

#search-input input {
	width:490px;
	height:45px;
	border-width:0px;
	padding-left:10px;
}

#search-input button {
	width:95px;
	height:45px;
	background:lightgreen;
}

.search-result {
	margin-top:10px;
	width:470px;
	background:white;
	padding-left:30px;
}
 i {
		position:absolute;
		top:152px;
		right:110px;
		cursor:pointer;
	}
</style>