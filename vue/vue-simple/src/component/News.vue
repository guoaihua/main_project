<template>
 <div id='newspage'>
 {{msg}}
 		<router-link to="/news/da">新闻1</router-link>
 		  <router-view></router-view>
 </div>
</template>

<script>
export default {
	template:'#newspage',
  data () {
    return {
      msg: 'Welcome 这是新闻页面'
    }
  }
}
</script>

<style>
	#newspage{
		border:1px solid black;
		width:100px;
		height:100px;
	}
</style>