<template>
	<div class="home ">
		<div class="box clear">
			<img src="/static/imgs/2.jpg" class='img-responsive'>
			<div class="intro">
				<div class="line">
					<h3>Hello</h3>
					<h3>I'm GAH</h3>
					<h6>full-stack</h6>
					<ul>
						<li>PHONE</li>
						<li>ADDRESS</li>
						<li>E-MAIL</li>
						<li>WEBSITE</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
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
		top: 6%;
		left: -22%;
		width: 60%;
		background:#23D6E7;
		padding: 1.5rem;
	}

	.intro .line {
		border:4px double white;
		padding: 1.5rem;
	}
	@media (max-width: 1366px) {
		.box {
			width: 67%;
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
			top: 4%;
			width: 73%;
			padding: 1rem;
		}
	}

	@media (max-width: 991px) {
		.intro {
			top:-5%;
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
	}


	@media (max-width: 493px) {
		.box {
			width: 80%;
		}
	}


</style>