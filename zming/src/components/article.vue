<template>
	<div class="article">
		<h1 class='text-white title'>我的介绍</h1>
		<div class="col-md-12 text-white">
				{{showtext}}
		</div>

		<div class="clear"></div>
		<div class="skills">
			<transition-group name="fade">
				<div class="col-md-6" v-show="showskills" key="one" >
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
				<div class="col-md-6" v-show="showskills" key="two">
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
							 <span class="sr-only" style="position:static">EXPRESS/MONGODB</span>
						</div>	
					</div>
				</div>
			</transition-group>
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



			text:"你好，我叫郭爱华，今年22岁。就读于武汉纺织大学，对计算机领域的学习有着浓厚的兴趣，更对 web 前端情有独钟。对互联网新技术的的学习充满着热爱，能快速掌握新技术开发。自学能力强，做事专注，放弃从不是我的选择，喜欢安静的思考。做事有要么不做，要么做到最好的原则。喜欢挑战，爱折腾，不畏惧任何困难，心之所向，无往不利！ ",
			showtext:'',
			showskills: false

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
		

		var timer=setInterval(function(){
			if(strs.split('').length>index){
				_this.showtext=_this.text.substring(0,index++);
			}else{
				_this.showskills=!_this.showskills;
				clearInterval(timer);
			}
			},200);
	}


}
</script>

<style scoped>
		
		/* 动态过渡 */
		.fade-enter-active, .fade-leave-active {
		  transition: opacity 4s ease;
		}
		.fade-enter  {
		  opacity: 0;
		}
		.fade-leave-to {
			opacity: 1;
		}
		/* 动态过渡 */	



		.article {
			width: 75%;
			padding: 1rem 0 0;
			text-align: center;
			color: black;
			margin:0 auto;
			font-size: 20px;
			font-family: "宋体";
		}
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