<template>
  <div id="app">
    	<div class="container">
    		<div class="header">
    			<h1 class="logoname">ZIming</h1>
    			<ul>    				
    				<li><router-link to='/contact'>CONTACT</router-link></li>
    				<li><router-link to='/article'>ARTICLE</router-link></li>
    				<li><router-link to='/project'>MYPEROJECT</router-link></li>
    				<li><router-link to='/person'> ABOUT ME</router-link></li>
    				<li><router-link to='/home'>HOME </router-link></li>
    			</ul>
    		</div>
    		<div class="content clear">
    			<router-view></router-view>
    		</div>
    		<div class="footer"></div>
    	</div>
  </div>
</template>

<script>
export default {

}

</script>

<style>
	html,body {
		margin: 0;
		padding: 0;
		font-size: 20px;
		font-family: 'Open Sans', sans-serif;
		width: 100%;
		height: 100%;
	}
	body {
		background-image: url('../static/imgs/bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.clear {
		clear: both;
	}

	/* 头部开始 */

		.header {
			color: white;
		}
		.logoname {
			display: inline-block;
			font-size: 3rem
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
