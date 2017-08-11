<template>
  <div id="app">
    	<div class="container">
    		<div class="header">
    			<h1 class="logoname">Zming</h1>
    			<ul>
    				<li> <router-link to='/home'>HOME </router-link></li>
    				<li><router-link to='/person'> ABOUT ME</router-link></li>
    				<li> <router-link to='/project'>MYPEROJECT</router-link></li>
    				<li><router-link to='/article'>ARTICLE</router-link></li>
    				<li><router-link to='/contact'>CONTACT</router-link></li>
    			</ul>
    		</div>
    		<div class="content">
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
		font-family: "宋体";
		width: 100%;
		height: 100%;
	}
	body {
		background-image: url('../static/imgs/1.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	/* 头部开始 */
		.header {
			color: white;
		}
		.logoname {
			display: inline-block;
			font-size: 4rem
		}

		.header ul {
			display: inline-block;
			list-style: none;
			width: 70%;
		}

		.header ul li {
			float: right;
			width: 17%;
			padding-top:3rem; 
		}



	/* 头部结束 */
	/* 内容部分开始 */
	/* 内容部分结束 */
	/* 尾巴 */
</style>
