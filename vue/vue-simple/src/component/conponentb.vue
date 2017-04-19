<template>
	<div id="logo">
		<img :src="logodata[nowlogo].imgsrc">
		<span class="select-logo" @click="toggleFlag"></span>

		<ul v-show="toggleFlaglist">
			<li v-for="(item,index) in logodata" @click="selected(index)">
				<img :src="item.imgsrc">  // 定义图标选择渲染
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
			data(){
				return{
					logodata:[{imgsrc: require('../assets/360_logo.png')},
								{imgsrc: require('../assets/baidu_logo.png')},
								{imgsrc: require('../assets/sougou_logo.png')}
						],
					toggleFlaglist: false,
					nowlogo:0
				}
			},
			methods:{
				toggleFlag:function(){
					this.toggleFlaglist=!this.toggleFlaglist;
				},
				selected: function(a){
					this.nowlogo=a;
					this.toggleFlaglist=!this.toggleFlaglist;
					this.$emit('getindex', this.nowlogo);
				}
			}

	}

</script>

<style>
	#logo {
		width:600px;
		height:140px;
	}
	#logo img {
		margin-left:60px;
	}
	#logo span {
		width:0;
		height:0;
		border:8px solid ;
		border-color:#000 transparent transparent transparent;
		position:absolute;
		top:75px;
		right:110px;
	}

	#logo ul{
		width:250px;
		height:240px;
		background:white;
		position:absolute;
		z-index:999;
		left:180px;
		top:195px;
		list-style: none;
	}
	#logo ul li img {
		width:100%;
		height:80px;
		margin-left:0;
	}
</style>