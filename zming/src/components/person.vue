<template>
	<div class="person">
		<h1>about me</h1>
		<div class="col-md-12">

		</div>
		<div class="clear"></div>

		<div class="clear"></div>

		<span class="winnower-container">	
				<img src="/static/imgs/winnower.png" alt="" class="img-responsive winnower ">
				<img src="/static/imgs/winnower-bottom.png" alt="" class="img-responsive winnower-bottom">
		</span>

		<span class="stars">
			<img src="/static/imgs/stars.png" alt="" class=img-responsive>
		</span>
	</div>
</template>

<script>
	
</script>

<style scoped>
		.person {
			width: 75%;
			padding: 2rem 0 0;
			text-align: center;
			color: black;
			margin:0 auto;
/* 			background: white; */
		}
		.clear {
			clear: both;
		}

		.col-md-4 img {
			   /*  clip-path: inset(67px 62px 71px 60px); */
		}

		.winnower-container {
			position: absolute;
			right: 0;
			bottom: 0;
		}

		.winnower-bottom {
			position: absolute;
			right: 74px;
			bottom: 0;
			z-index: -1;
		}
		.winnower{
			animation: rotating 3s linear infinite;
		}
		
		@keyframes rotating {
			0%{transform: rotate(0deg);}
			100%{transform: rotate(360deg);}
		}


		.stars {
			position: absolute;
			bottom: 0;
			right: 100px;
			animation: moverandom 10s cubic-bezier(.40,.82,.80,.34) infinite;
		}

		@keyframes moverandom {
			0%{right: 100px;display: none;}
			100%{right: 100%;}
		}


		

</style>