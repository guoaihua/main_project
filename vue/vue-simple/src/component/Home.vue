<template>
 <div id="homepage">
	 {{msg}}
 </div>
</template>

<script>
export default {
	template:'#homepage',
  data () {
    return {
      msg: 'helloword! 这是主页'
    }
  }
}
</script>

<style>
	#hompage {
		border:1px solid black;
		width:100px;
		height:100px;
	}
</style>