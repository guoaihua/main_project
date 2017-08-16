<template>
	<div class="home ">
		<div class="box clear">
			<img src="/static/imgs/borders1.png" class='img-responsive'>
			<marquee behavior="scroll" direction="up" class="scrollText">
				<p>生命里，一些缱绻，无论素净，还是喧哗，都已经被岁月赋予了清喜的味道，一些闲词，或清新，或淡雅，总会在某一个回眸的时刻醉了流年，濡湿了柔软的心，冥冥之中，我们沿着呼唤的风声，终于在堆满落花的秋里，再次重逢，念在天涯，心在咫尺，我相信，一米阳光，才是我们最好的距离。   
       缘起是诗，缘离是画，这些关于岁月，关于记忆的章节，终会被时光搁置在无法触及的红尘之外，曾经，你我一别经年，可风里，总有一段美丽会与我们不期而遇，一盏琉璃，半杯心悦，端然着那一份醉人的静，这安静行走的流年，总会被过往赋予一份清喜，一份浪漫。</p>
       				<p>生命里，一些缱绻，无论素净，还是喧哗，都已经被岁月赋予了清喜的味道，一些闲词，或清新，或淡雅，总会在某一个回眸的时刻醉了流年，濡湿了柔软的心，冥冥之中，我们沿着呼唤的风声，终于在堆满落花的秋里，再次重逢，念在天涯，心在咫尺，我相信，一米阳光，才是我们最好的距离。   
       缘起是诗，缘离是画，这些关于岁月，关于记忆的章节，终会被时光搁置在无法触及的红尘之外，曾经，你我一别经年，可风里，总有一段美丽会与我们不期而遇，一盏琉璃，半杯心悦，端然着那一份醉人的静，这安静行走的流年，总会被过往赋予一份清喜，一份浪漫。</p>
			</marquee>
			<div class="intro">
				<div class="line">
					<h3>你好！ 我叫郭爱华</h3>
					<div class="rw-words">
						<span>励志成为webfull-stack</span>
						<span>励志成为webfull-stack</span>
						<span>励志成为webfull-stack</span>
						<span>励志成为webfull-stack</span>
						<span>励志成为webfull-stack</span>
						<span>励志成为webfull-stack</span>
					</div>					
					<hr>
					<ul>
						<li>
							<ul  class="line-inblock">							
								<li>电话</li>
								<li>17707170570/13100695760</li>
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
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>


	/* 特效文字掉落 */

	.rw-words {
		overflow: hidden;
	}
	.rw-words span {
		display: inline;
		white-space: nowrap;
	}


	.home {
		width: 100%;
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
	}
	
	

	.intro .line {
		border:4px double white; 
		padding: 1.5rem;
		font-family: "宋体";
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