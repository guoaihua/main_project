<template>
	<div class="article">
		<h1>about me</h1>
		<div class="col-md-6">
			Sed ac libero mattis, accumsan lacus nec, eleifend tortor. Etiam sodales consequat cursus. Quisque venenatis mi at nulla pulvinar lobortis. Mauris vulputate odio sed dolor suscipit, a sollicitudin sapien auctor. Nam aliquam tellus nibh, molestie dictum ipsum lobortis in.
		</div>
		<div class="col-md-6">
			Nam vestibulum odio eu erat pulvinar pulvinar. Aliquam enim odio, scelerisque quis lacus.
		</div>
		<div class="clear"></div>
		<div class="skills">
			<div class="col-md-6">
				<div class="aa">121</div>
				<div class="aa">23</div>
				<div class="aa">23</div>
				<div class="aa">32</div>
			</div>
			<div class="col-md-6">
				<div class="aa">32</div>
				<div class="aa">32</div>
				<div class="aa">32</div>
				<div class="aa">32</div>
			</div>
		</div>
		<div class="clear"></div>
		<span class="star">
			<img src="/static/imgs/22.png" class='img-responsive'>
		</span>
	</div>
</template>

<script>
	$('.star').click(function () {
			$(this).css("animation","up 5s ease-in-out 1");
			console.log('adsad');
	});
	
</script>

<style scoped>
			.article {
			width: 75%;
			padding: 2rem 0 0;
			text-align: center;
			color: black;
			margin:0 auto;
			background: white;
		}
		.clear {
			clear: both;
		}
		.star {
			position: absolute;
			left: 0;
			bottom: 0;
		}
		
/* 		.star{
	animation: up 5s ease-in-out 1;
}
 */
		@keyframes up {
			0%{	left: 0;bottom: 0;}
			100%{left: 0;bottom: 900px;}
		}
	
</style>