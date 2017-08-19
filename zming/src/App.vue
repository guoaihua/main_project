<template>
  <div id="app">
    	<div class="container">
    		<div class="header">
    			<h1 class="logoname">ZIming</h1>
    			<ul>    				
    				<li><router-link to='/contact'>联系我</router-link></li>
    				<li><router-link to='/article'>个人介绍</router-link></li>
    				<li><router-link to='/project'>项目展示</router-link></li>
    				<li><router-link to='/person'>图片欣赏</router-link></li>
    				<li><router-link to='/home'>主页</router-link></li>
    			</ul>
    		</div>
    		<div class="content clear">
    			<router-view></router-view>
    		</div>
    		<div class="footer"></div>
    		<span class="music-fly" @click="stop"> 
				<img src="/static/imgs/music-fly.png" alt="" class="img-responsive">
				<audio :src="src" autoplay="autoplay" id="audio"></audio>
    		</span>
    	</div>
  </div>
</template>

<script>
export default {

		data(){
			return {
				move:true,
				timer:null,
				timers:{
					dirX:1,
					dirY:1,
					posX:0,
					posY:0
				},
				src:"http://www.guoaihua.com:3000/users/musics/007",
				}
			},
		created:function () {		
/*			console.log(this.timers);
			console.log(this.timers.dirX);*/
		if(this.move===true){
				var	_this=this;
				 this.timer=setInterval(function () {
				_this.timers.posX+=(2*_this.timers.dirX);
				_this.timers.posY+=(2*_this.timers.dirY);
				$(".music-fly").css({
					top:_this.timers.posY,
					left:_this.timers.posX
				});
				/*	碰撞检测*/

			if(_this.timers.posX < 1 || _this.timers.posX> document.body.clientWidth)
		            {_this.timers.dirX =- _this.timers.dirX};

		       if(_this.timers.posY < 1 || _this.timers.posY> document.body.clientHeight)
		            {_this.timers.dirY =- _this.timers.dirY};
					},30);			
			}
		}
	,
	methods:{

		stop:function () {

		let audio=document.getElementById("audio");
		this.move=!this.move;
		if(this.move===false){
			clearInterval(this.timer);
			audio.pause();
		}else{
				audio.play();
				var	_this=this;
				 this.timer=setInterval(function () {
				_this.timers.posX+=(2*_this.timers.dirX);
				_this.timers.posY+=(2*_this.timers.dirY);
				$(".music-fly").css({
					top:_this.timers.posY,
					left:_this.timers.posX
				});
				/*	碰撞检测*/
			if(_this.timers.posX < 1 || _this.timers.posX> document.body.clientWidth)
		            {_this.timers.dirX =- _this.timers.dirX};
		   if(_this.timers.posY < 1 || _this.timers.posY> document.body.clientHeight)
		            {_this.timers.dirY =- _this.timers.dirY};
					},30);

		}

		}

	}
}

</script>

<style>
	html,body {
		margin: 0;
		padding: 0;
		font-size: 20px;
		font-family: 'Open Sans', sans-serif,"宋体";
		width: 100%;
		height: 100%;
		overflow: hidden; 
	}
	body {
		background-image: url('../static/imgs/bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.clear {
		clear: both;
	}

	/* 音乐控件 */
		.music-fly {
		position: absolute;
		left: 0;
		top: 0;
	}
	.music-fly:hover {
		cursor: pointer;
	}

	/* 头部开始 */

		.header {
			color: white;
		}
		.logoname {
			padding-bottom: 10px; 
			display: inline-block;
			font-family: 'Open Sans', sans-serif,"宋体";
			font-size: 3rem;
			 text-align: center;
	      -webkit-background-clip:text;
	      -webkit-text-fill-color:transparent;
	      background-size:200% 120%;
	      background-image: -webkit-linear-gradient(left,#df21f5 , skyblue 25%, orange 50%, #000a80 75% , #df21f5);
	      animation: content-animation 4s infinite linear;
		}

  @keyframes content-animation {
      0%{background-position: 0,0}
      100%{background-position: -100% 0;}
  }




		.header ul {
			display: inline-block;
			list-style: none;
			padding-left: 0;
			width: 60%;
			float: right;
		}

		.header ul li {
			float: right;
			width: 20%;
			padding-top:2.5rem; 
			color: white;
			text-align: center;
		}

		.header ul li a {
			color: white;
			font-size: 14px;
			text-decoration: none;
		}
		.header ul li a:hover{
			color: #23D6E7;
		}


		 /* 媒体查询，检测小屛 */
		@media (max-width: 493px) {
			.logoname {
				width: 100%;
				text-align: center;
				font-size: 2rem;
			}

			.header ul {
				width: 100%;
			}

			.header ul li {
				padding-top: 0.5rem;
			}
		}



	    /* 媒体查询，检测手机 */
		@media (max-width: 384px){
			.logoname {
				width: 100%;
				text-align: center;
				font-size: 2rem;;
			}
			.header ul {
				width: 100%;
				padding-left: 0;
			}
			.header ul li {
				width: 100%;
				padding-top:0rem;
				text-align: center;
				padding: 0.3rem;
			}

			.header ul li a {
				color: white;
			}

			.header ul li a {
				color: #fff;
				text-decoration: none;
			} 
			.header ul li:hover {
				background-color: #23D6E7;
			}

		}

		.router-link-active {
			color: skyblue!important;
		}

	/* 头部结束 */
	/* 内容部分开始 */
	/* 内容部分结束 */
	/* 尾巴 */
</style>
