<template>
	<div class="contact">
		<h1>联系我</h1>
		<form role="form" id='form'>
				<div class="form-group">
					<div class="col-md-6">
						<input type="text" class="form-control" name="name" placeholder="名字(必填)" v-model="users.name" require="require" @blur="check($event)">
						<input type="text" class="form-control" name="email" placeholder="邮箱"
						v-model="users.email">
					</div>
					<div class="col-md-6">
						<input type="text" class="form-control" name="qq" placeholder="QQ/微信(必填)"
						v-model="users.qq" require="require" @blur="check($event)">
						<input type="text" class="form-control" name="phone" placeholder="手机"
						v-model="users.phone" require="require" @blur="check($event)">
					</div>
					<div class="clear"></div>
					<div class="col-md-12">
						<textarea class="form-control" name="message" placeholder="发送消息...(必填)"
						v-model="users.message" @blur="check($event)"></textarea>
					</div>
					<button class="btn btn-info disco" @click.prevent="submit">SUBMIT</button>
					<div class="clear"></div>
				</div>
		</form>
		<div class="footer">
			<div class="col-md-4">
				<h1><span class="icon-location"></span>地址</h1>
				<p>湖北省宜昌市宜都市</p>
			</div>
			<div class="col-md-4">
				<h1> <span class="icon-email"></span>EmailMe</h1>
				<p>308232015@qq.com</p>
			</div>
			<div class="col-md-4">
				<h1><span class="icon-phone"></span>电话</h1>
				<p>17707170570/13100695760</p>
			</div>	
			<div class="clear"></div>		
		</div>
	</div>
</template>

<script>
	export default {
			data(){
				return {
					users:{
						name:'',
						email:'',
						qq:'',
						phone:'',
						message:''
					},
					count:0
				}
			},
			methods:{
				submit:function () {
						this.users.time=new Date();
						if(this.count>=3){
							this.$axios.post('http://www.guoaihua.com:3000/users/saveMessage',this.users).then(function (res) {
									alert(res.data);
									$('#form')[0].reset();
							});
						}else{
							alert("请至少填完必填选项！");
						}

				},
				check:function(event){
						if(event.currentTarget.value==""){
							alert("此项不能为空！");
						}else{
							this.count++;
						}
				}
			}
	}
	
</script>

<style scoped>
		.contact {
			width: 75%;
			padding: 1rem 0 0;
			text-align: center;
			color: white;
			margin:0 auto;
			font-family: "宋体";
			font-size:20px; 
		}
		.clear {
			clear: both;
		}
		.form-control {
			background:rgba(255, 255, 255, 0.05);
		}


		.form-group input{
			margin-bottom: 1rem;
		}

		.btn {
			width: 15%;
			margin-top: 1rem;
		}


		.disco:hover {
			-webkit-animation-duration: 2s;
			-webkit-animation-timing-function: ease-in-out;
			-webkit-animation-iteration-count: infinite;
			-webkit-animation-name: disco;
			animation-duration: 2s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
			animation-name: disco;
		}
		@-webkit-keyframes disco {
			0%    { -webkit-filter: drop-shadow(0 0 8px rgba(255,153,153,1)); }
			25%  { -webkit-filter: drop-shadow(0 0 8px rgba(244,241,66,1)); }
			50%  { -webkit-filter: drop-shadow(0 0 8px rgba(0,153,255,1)); }
			75%  { -webkit-filter: drop-shadow(0 0 8px rgba(244,66,232,1)); }
			100%    { -webkit-filter: drop-shadow(0 0 8px rgba(255,153,153,1)); }
		}

		.icon-location {
			background: url('/static/fonts/location.svg') no-repeat;
			display: inline-block;
			width: 32px;
			height: 32px;
		}
		.icon-email {
			background: url('/static/fonts/email.svg') no-repeat;
			display: inline-block;
			width: 39px;
			height: 24px;
		}
		.icon-phone {
			background: url('/static/fonts/phone.svg') no-repeat;
			display: inline-block;
			width: 37px;
			height: 35px;
		}

		.footer h1 {
			line-height: 32px;
		}
</style>