<template>
	<div id="search-input">
		<input type="text" v-model="keywords" @keyup="get()" @keyup.down="select()" @keyup.up="selectUp()">
		<ul>
			<li v-for="(value,index) in mydata" :class="{select:index==now}" >
				{{value}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				keywords:'',
				mydata:[],
				now:0
			}
		},
		methods:{
		
			get:function(){
				console.log(this.$data.keywords);
				this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keywords+ '&encodein=utf-8&encodeout=utf-8').then(function(res){
					this.mydata=res.data.s;
				});
				
			},
			select:function(){
				this.now++;
				 if (this.now == this.mydata.length) {
                this.now = 0;
            }
            this.keyword = this.mydata[this.now];
			},
			selectUp:function(){
					 this.now--;
		            //同上
		            if (this.now == -1) {
		                this.now = this.mydata.length - 1;
		            }
		            this.keyword = this.mydata[this.now];
			}
		}
	}
</script>
<style scoped>
.select {background:greenyellow}
body{
	width:300px;
	height:150px;
	border:1px solid black;
}

</style>