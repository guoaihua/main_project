<template>
	<div class="article">
		<h1 class='text-white title'> about me</h1>
		<div class="col-md-12 text-white">
				{{showtext}}
		</div>

		<div class="clear"></div>
		<div class="skills">

			<div class="col-md-6">
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 85%;" >
						 <span class="sr-only" style="position:static">HTML/CSS3</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 70%;" >
						 <span class="sr-only" style="position:static">BOOTSTRAP</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 65%;" >
						 <span class="sr-only" style="position:static">JQUERY</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 60%;" >
						 <span class="sr-only" style="position:static">NODE</span>
					</div>	
				</div>
	
			</div>

			<div class="col-md-6">
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 80%;" >
						 <span class="sr-only" style="position:static">JAVASCRIPT</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 55%;" >
						 <span class="sr-only" style="position:static">VUE</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 50%;" >
						 <span class="sr-only" style="position:static">PHP/JAVA/C</span>
					</div>	
				</div>
				<div class="progress progress-striped">
					<div class="progress-bar  progress-bar-success"aria-valuemin="0" role="progressbar" aria-valuemax="100"  style="width: 45%;" >
						 <span class="sr-only" style="position:static">EXPRESS</span>
					</div>	
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<span class="star" @click='animation'>
			<img src="/static/imgs/22.png" class='img-responsive'>
		</span>
	</div>
</template>

<script>
export default {
	data(){
		return{
			text:"Sed ac libero mattis, accumsan lacus nec, eleifend tortor. Etiam sodales consequat cursus. Quisque venenatis mi at nulla pulvinar lobortis. Mauris vulputate odio sed dolor suscipit, a sollicitudin sapien auctor. Nam aliquam tellus nibh, molestie dictum ipsum lobortis in.",
			showtext:''

		}
	},
	methods:{
		animation:function () {
			$('.star').animate({
				'bottom':'900'
			},6000,'linear',function (){
				$('.star').css("bottom","0px");			
			});
		}
	},
	created:function () {
/*		console.log(this.text);*/
		var _this=this;
		var index=0;
		var strs=this.text.toString();
		

		setInterval(function(){
			if(strs.split('').length>index){
				_this.showtext=_this.text.substring(0,index++);
			}
		},100);
		
		

	}


}
</script>

<style scoped>
		.article {
			width: 75%;
			padding: 2rem 0 0;
			text-align: center;
			color: black;
			margin:0 auto;
			border: 1px solid white;		}
		.text-white{
			color: rgba(255, 255, 255, 0.91);
		}
		.clear {
			clear: both;
		}
		.star {
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.skills {
			margin-top: 2rem;
		}

</style>