
<template>
 <div id='app'>
 {{msg}}

 	<aaa></aaa>
 </div>
</template>

<script>
import aaa from './component/componenta.vue';
export default {
  components:{
    aaa
  },
  data () {
    return {
      msg: 'Welcome '
    }
  }
}
</script>

<style >
  html {
  height:100%;
  }
  body { background: url('./assets/background.png') no-repeat;
          background-size:100% 100%;
          height:100%;
    }
	#app{
   width:600px;
   position:absolute;
   margin-left:-300px;
   left:50%;
   top:50%;
   margin-top:-100px;
	 color:green;
   border:1px solid yellowgreen;

	}
</style>