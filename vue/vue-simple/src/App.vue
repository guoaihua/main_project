
<template>
 <div id='app'>


 	<aaa></aaa>
 </div>
</template>

<script>
import aaa from './component/componenta.vue';  
//引入组件 

export default {
  components:{             
    aaa
  }
}
</script>

<style >
  *{margin:0;padding:0;}
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
   margin-top:-300px;
	 color:green;

	}
</style>