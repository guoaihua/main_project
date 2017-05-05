<template>
  <div id="app">
    <Sidebar></Sidebar>
     <Show ></Show>
      <Edit></Edit>
     
    
  </div>
</template>

<script>
 
import Edit from './components/edit.vue'
import Show from './components/show.vue'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'app',
  components:{
    Edit,
    Show,
    Sidebar
  }
}
</script>

<style>
    *{
      margin: 0;
    }

    body,html {
      height: 100%;
      width: 100%;
    }
    #app {
      height: 100%;
      width: 100%;
    }
   .edit {
      background-color: skyblue;
      height: 100%;
      min-width: 200px;
   }
    .show {
      background-color: greenyellow;
      width: 250px;
      height: 100%;
      float: left;
      text-align: center;
      font-size: 20px;
      font-family: 宋体;

    }
    .sidebar {
      padding-top:20px;
      background-color: lightblue;
      width: 80px;
       height: 100%;
     float: left;
    
    }
</style>
