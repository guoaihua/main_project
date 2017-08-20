<template>
	<div class="home ">
		<div class="box clear">
			<img src="/static/imgs/borders1.png" class='img-responsive'>
			<marquee behavior="scroll" direction="up" class="scrollText" onMouseOut="this.start()" onMouseOver="this.stop()" scrollamount="3">
				<p>亲爱的访客，您好！</p>
				<p>此网站是萌新，利用假期搭建的基于vue框架的个人网站。由于技术方面和时间方面的原因，网站兼容性就暂时没精力去改善了，目前谷歌等主流浏览器是可以正常体验的，ie，手机端等是不存在的。哈哈，依据优雅降级原则，此网站的兼容性和其它功能会在日后的版本更新中体现。欢迎大神前来指教，也希望与志同道合的小伙伴们一起奋斗！</p>  
			</marquee>
			<div class="intro">
				<div class="line">
					<h3>你好！ 我叫郭爱华</h3>

					<div class="rw-words">
						<span>励志成为Full Stack Developer</span>
						<span>喜欢酷炫的Web Skills</span>
						<span>极其爱折腾，安静！</span>
						<span>喜欢古风，爱笛箫</span>
						<span>爱旅游，梦想走遍万水千山</span>
						<span>志同道合的小伙伴快来认亲</span>
					</div>					
					<hr class="split-line">
					<ul>
						<li>
							<ul  class="line-inblock">							
								<li>电话</li>
								<li>17707170570</li>
							</ul>
						</li>
						<li>
							<ul class="line-inblock">
								<li>地址</li>
								<li>湖北宜昌</li>
							</ul>
						</li>
						<li>
							<ul class="line-inblock">
								<li>邮箱</li>
								<li>308232015@qq.com</li>
							</ul>
						</li>
						<li>
							<ul class="line-inblock">
								<li>学校</li>
								<li>武汉纺织大学</li>
							</ul>
						</li>
						<li>
							<ul class="line-inblock">
								<li>github</li>
								<li class="address"><a href="https://github.com/guoaihua/main_project" title="https://github.com/guoaihua/main_project">点击进入</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>

	.address a {
		text-decoration: none;
	}
	/* 线框流动开始 */
	.line {
		position: relative;
	}
	
	.line:hover::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	border: 2px solid skyblue;
 	animation: lineOne 8s linear infinite; 
	animation-delay:-4s; 
	z-index: 99;
	}

 @keyframes lineOne {
	0%,100%{clip:rect(0,400px,2px,0)}
    	25%{clip:rect(0,3px,329px,0)}
    	50%{clip:rect(326px,400px,329px,2px)}
    	75%{clip:rect(0,400px,328px,396px)}
}   
 
  .line:hover::after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	border: 2px solid skyblue;
	animation-delay: 4s; 
	 animation: lineTwo 8s linear infinite; 
	 z-index: 99;
}

@keyframes lineTwo {
	0%,100%{clip:rect(0,400px,2px,0)}
    	25%{clip:rect(0,2px,329px,0)}
    	50%{clip:rect(326px,400px,329px,2px)}
    	75%{clip:rect(0,400px,328px,396px)}
}   



	/* 线框流动结束 */

	/* 特效文字掉落 */

	.split-line {
		margin-top: 15%;
	}

	.rw-words {
		text-indent: 10px;
	/* 	overflow: hidden; */
		position: relative;
	}
	.rw-words span {
		display: inline;
		white-space: nowrap;
		position: absolute;
		color: white;
		opacity: 0;
		overflow: hidden;
		color: #888;
		-webkit-transform-origin: 10% 75%;
		transform-origin: 10% 75%;
		-webkit-animation: rotateWord 18s linear infinite 0s;
		-ms-animation: rotateWord 18s linear infinite 0s;
		animation: rotateWord 18s linear infinite 0s;
	}

.rw-words span:nth-child(2) { 
    -webkit-animation-delay: 3s; 
	-ms-animation-delay: 3s; 
	animation-delay: 3s; 
	color: #6b889d;
}
.rw-words span:nth-child(3) { 
    -webkit-animation-delay: 6s; 
	-ms-animation-delay: 6s; 
	animation-delay: 6s; 
	color: #6b739d;	
}
.rw-words span:nth-child(4) { 
    -webkit-animation-delay: 9s; 
	-ms-animation-delay: 9s; 
	animation-delay: 9s; 
	color: #7a6b9d;
}
.rw-words span:nth-child(5) { 
    -webkit-animation-delay: 12s; 
	-ms-animation-delay: 12s; 
	animation-delay: 12s; 
	color: #8d6b9d;
}
.rw-words span:nth-child(6) { 
    -webkit-animation-delay: 15s; 
	-ms-animation-delay: 15s; 
	animation-delay: 15s; 
	color: #9b6b9d;
}



@keyframes rotateWord {
    0% { opacity: 0; }
    5% { opacity: 1; }
    17% { opacity: 1; -webkit-transform: rotate(0deg); transform: rotate(0deg); }
	19% { opacity: 1; -webkit-transform: rotate(98deg); transform: rotate(98deg); }
	21% { opacity: 1; -webkit-transform: rotate(86deg); transform: rotate(86deg); }
	23% { opacity: 1; -webkit-transform: translateY(85px) rotate(83deg); transform: translateY(85px) rotate(83deg); }
	25% { opacity: 0; -webkit-transform: translateY(170px) rotate(80deg); transform: translateY(170px) rotate(80deg); }
	80% { opacity: 0; }
    100% { opacity: 0; }
}

/* 特效文字掉落结束 */

	.home {
		width: 100%;
		font-family: 'Open Sans', sans-serif;
	}

	.box {
		width: 75%;
		position: relative;
		margin: 0 auto;
	}
	
	.intro {
		position: absolute;
		top: 16%;
		left: -22%;
		width: 60%;
		background:rgba(33, 185, 236, 0);
		padding: 1.5rem;
		border-radius: 5px;
	}
	
	.scrollText {
		height: 50%;
		position: absolute;
		right: -13%;
		top: 26%;
		margin-left: 10rem;
		color: rgba(240, 248, 253, 0.76);
	}
	
	

	.intro .line {
	/* 	border:4px double white;  */
		padding: 1.5rem;
		font-family: "宋体";
	/* 	background: red; */
	}

	.line h3 {
		color: white;
	}
	ul {
		list-style: none;
		padding-left: 0;
	}

	.line-inblock {
		list-style: none;
	}

	.line-inblock li {
		display: inline-block;
		color: white;
		margin-right: 5%; 
	}


	/* 图标处理 */

	.icon-phone {
		width: 50px;
		height: 50px;
		background: url(/static/imgs/icons.png) 1542px -1264px;
	}


 	@media (max-width: 1366px) {
		.box {
			width: 67%;
			padding: 1rem 0 0;
		}
		.box img {
			margin-left: 10rem;
		}
	}
	@media (max-width: 1080px) {

		.box img {
			margin-left: 8rem;
		}
		
		.intro {
			top: 9%;
			width: 73%;
			padding: 1rem;
		}

	}

	@media (max-width: 991px) {
		.intro {
			top:5%;
		}
		.box {
			padding: 2rem 0 0;
		}
		.scrollText {
		top: 32%;
	}
	}
	@media (max-width: 667px) {
		.intro {
			top:auto;
			left: 0;
			width: 100%;
		}
		.box img {
			margin-left: 0;
		}

		.scrollText {
		top: 33%;
		right: 24%;
	}
	}


	@media (max-width: 493px) {
		.box {
			width: 80%;
			padding: 0;
		}
		.scrollText {
		top: 28%;
		right: 5%;
		margin-left:2rem;
	}
	}


</style>