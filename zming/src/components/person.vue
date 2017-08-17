<template>
	<div class="person">
		<div class="wrap">
			<div class="cube">
				<div class="font out"></div>
				<div class="back out"></div>
				<div class="top out"></div>
				<div class="bottom out"></div>
				<div class="left out"></div>
				<div class="right out"></div>

				<div class="font-in in"></div>				
				<div class="back-in in"></div>
				<div class="top-in in"></div>
				<div class="bottom-in in"></div>
				<div class="left-in in"></div>
				<div class="right-in in"></div>
			</div>
		</div>


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

		/* 旋转方块 */
		.wrap {
			margin-top: 3rem;
			width: 100%;
			perspective-origin: 50% 50%;
			perspective: 3000px;
		}

		.cube {
			position: relative;
			margin-left: auto;
			margin-right: auto;
			width: 200px;
			height: 200px;
			transform-style: preserve-3d;
		}

		.cube .out {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.cube .in {
			position: absolute;
			width: 50%;
			height: 50%;
			top: 25%;
			left: 25%;

		}

		.font {
			background: url('/static/imgs/block1.jpg');
			transform: translateZ(100px);
		}
		.back {
			background: url('/static/imgs/block2.jpg');
			transform: translateZ(-100px) rotateY(180deg);
		}
		.top {
			background: url('/static/imgs/block3.jpg');
			transform: translateY(-100px) rotateX(-90deg);
			
		}
		.bottom {
			background: url('/static/imgs/block4.jpg');
			transform: translateY(100px) rotateX(90deg);
		}
		.left {
			background: url('/static/imgs/block5.jpg');
			transform:  translateX(-100px) rotateY(270deg);
			
		}
		.right {
			background: url('/static/imgs/block6.jpg');
			transform: translateX(100px) rotateY(-270deg);
		
		}




		.font-in,.back-in,.top-in,.bottom-in,.left-in,.right-in {
			background: url('/static/imgs/cube.png');
			background-image:50% 50% 
		}
		
		.font-in {
			transform: translateZ(50px);
		}

		.back-in {
			transform: translateZ(-50px) rotateY(180deg);
		}
		.top-in {
			transform: translateY(-50px) rotateX(-90deg);
		}

		.bottom-in {
			transform: translateY(50px) rotateX(90deg);
		}
		.left-in {
			transform: translateX(-50px) rotateY(270deg);
		}

		.right-in {
			transform: translateX(50px) rotateY(-270deg);
		}

		



		@keyframes spin {
		    from { transform: rotateX(0deg) rotateY(0deg); }
		    to { transform: rotateX(360deg) rotateY(360deg); }
		} 
		 
		.cube {
		    animation: spin 20s infinite linear;
		}


		 .cube:hover .font {
			transform: translateZ(200px);
		}

		.cube:hover .back {
			transform: translateZ(-200px) rotateY(180deg);
		}

		.cube:hover .top {
			transform: translateY(-200px) rotateX(-90deg);
		}
		.cube:hover .bottom {
			transform: translateY(200px) rotateX(90deg);
		}
		.cube:hover .left {
			transform: translateX(-200px) rotateY(270deg);
		}
		.cube:hover .right{
			transform: translateX(200px) rotateY(-270deg);
		}  





		/* 旋转方块 */


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