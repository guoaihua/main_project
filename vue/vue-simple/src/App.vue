
<template>
 <div id='app'>
 {{msg}}
 	<ul>
 		<li>
 			 <router-link to="/home">主页</router-link>
     		 <router-link to="/news">新闻1</router-link>
 		</li>
 	</ul>
 	
  <router-view></router-view>
 	
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome '
    }
  }
}
</script>

<style >
	#app{
	 color:green;
	}
</style>