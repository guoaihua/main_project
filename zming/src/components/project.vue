<template>
	<div class="project">
		<h1 class="text3d">我的项目</h1>
		<h4 class="address"><a href="https://github.com/guoaihua/main_project" title="https://github.com/guoaihua/main_project">以下项目均在github上发布，打滚求star</a></h4>

	<div class="boxsOne box" @click='showslider'>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>实验室元器件管理</p>
		</div></div>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>留言板</p>
		</div></div>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>O2O自助平台</p>
		</div></div>
		<div class="clear"></div>
	</div>

	<div class="boxsTwo box" @click='showslider'>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>网络聊天室</p>
		</div></div>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>网络爬虫</p>
		</div></div>
		<div class="col-md-4"><img src="/static/imgs/project.jpg" alt="" class="img-responsive"><div class="mask">
			<p>仿网易云音乐</p>
		</div></div>
		<div class="clear"></div>
	</div>
	<div class="clear"></div>	

	<div class="swipebox-container" v-show="boxshow">
		<div class="swipebox-slider">
			<div class="slider current"><img src="/static/imgs/propic1.png" alt="" class="img-responsive"></div>
			<div class="slider"><img src="/static/imgs/propic2.png" alt="" class="img-responsive"></div>
			<div class="slider"><img src="/static/imgs/propic3.png" alt="" class="img-responsive"></div>
			<div class="slider"><img src="/static/imgs/propic4.png" alt="" class="img-responsive"></div>
			<div class="slider"><img src="/static/imgs/propic5.png" alt="" class="img-responsive"></div>
			<div class="slider"><img src="/static/imgs/propic6.png" alt="" class="img-responsive"></div>
		</div>
		<div class="arrows">
			<span class="arrows-left" @click="prev"></span>
			<span class="arrows-right" @click="next"></span>
			<span class="close" @click="closeslider"></span>
		</div>	
	</div>	
	</div>


</template>

<script>
	export default {
		data(){
			return{
				boxshow:false,
				index:0
			}
			
		},
		methods:{
			showslider:function () {
				this.boxshow=!this.boxshow;
			},
			closeslider:function () {
				this.boxshow=!this.boxshow;
			},
			prev:function () {			
				if(this.index<=0){
					this.index=0;
				}else{
					this.index--;
				}
				$(".swipebox-slider").css("transform","translate3d(-"+100*(this.index)+"%,0,0)");
			$(".swipebox-slider div:nth-child("+(this.index+2)+")").removeClass("current");
				$(".swipebox-slider div:nth-child("+(this.index+1)+")").addClass("current");

				console.log(this.index);
			},
			next:function(){
				if(this.index>=5){
					this.index=5;
				}else{
					this.index++;
				}
				$(".swipebox-slider").css("transform","translate3d(-"+100*(this.index)+"%,0,0)");

				$(".swipebox-slider div:nth-child("+(this.index)+")").removeClass("current");
				$(".swipebox-slider div:nth-child("+(this.index+1)+")").addClass("current");
				console.log(this.index);
			}
		}
	}
</script>

<style scoped>

	.address a {
		text-decoration: none;
		color: #ccc;
	}	

	.address a:hover {
		color: skyblue;
	} 
	.text3d {
			color:#3d3d3d;
			font-weight: bold;
		    text-shadow: 0 -1px 0 #858585, 0 1px 10px rgba(0,0,0,.6), 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.2), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 7px 10px rgba(0,0,0,.25), 0 15px 10px rgba(0,0,0,.2), 0 25px 15px rgba(0,0,0,.15)
	}
		.project {
			width: 75%;
			padding: 1rem 0 0;
			text-align: center;
			color: black;
			margin:0 auto;
			color: white;
		}
		.clear {
			clear: both;
		}

		.box {
			margin-bottom: 1rem;
		}


		.col-md-4 {
			position: relative;
		}
		.mask {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border: 0px solid rgba(0,0,0,0.7);
			overflow: visible;
			transition: all 0.4s ease-in-out;
			text-align: center;
			opacity: 0;
			padding: 0 15px; 
			box-sizing: border-box;
		}

		.mask:hover {
			opacity: 1;
			padding: 0!important;
			border:50px solid rgba(35, 214, 231, 0.64);
   		    background: rgba(0, 0, 0, 0.45);
		}

		.mask p {
		 text-transform: capitalize;
		 padding: 1rem 0 0;
		 display: inline-block;
		 font-size:1em;
  		  color: #fff;
		}

	/* 滑动 */
	.swipebox-container {
		position: fixed;
		left: 0;
		top: 0;
		right:0;
		bottom: 0;
		background-image: url('/static/imgs/bg.png');
		background-size: 100% 100%;
	}
	.swipebox-container .swipebox-slider {
		width: 100%;
		height: 100%;
		white-space: nowrap;   /* 段落不换行 */
	}
	.swipebox-slider .slider {
		width: 100%;
		display: inline-block;
		height: 100%;
		position: relative;
	}
	
	.current img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}	

	/* 控制按钮 */
	.arrows {
		height: 50px;
	    width: 100%;
	    position: absolute;
	    bottom: 0px;
	    left: 0px;
	}

	.arrows:hover .arrows-left,
	.arrows:hover .arrows-right {
		display: block;

	}

	.arrows-left {
		position: fixed;
		bottom: 0px;
		left: 14%;
		width: 50px;
		height: 50px;
		background: url('/static/imgs/arrows.png') -32px 13px no-repeat;
		display: none;
		transition: all 2s ease-in-out;
		cursor: pointer;
	}
	.arrows-right {
		position: fixed;
		bottom: 0px;
		right: 14%;
		width: 50px;
		height: 50px;
		background: url('/static/imgs/arrows.png') -78px 13px no-repeat;
		display: none;
		cursor: pointer;
	}

	.close {
		position: fixed;
		top: 0px;
		right: 14%;
		width: 50px;
		height: 50px;
		background: url('/static/imgs/arrows.png') 15px 12px no-repeat;
		z-index: 99;
		cursor: pointer;
	}
</style>