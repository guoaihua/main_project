<template>
  <div id="app">
  
  <nav class="navbar navbar-default" role="navigation">
         <div class="navbar-header">
          <p class="navbar-brand">Zming</p>
        </div> 
   <div>
    <ul class="nav navbar-nav">
        <li><router-link to='/home'>首页</router-link></li>
        <li><router-link to='/personal'>个人简历</router-link></li>
        <li><router-link to='/project'>项目介绍</router-link></li>
        <li><router-link to='/skill'>技术栈</router-link></li>
    </ul>
    </div>
  </nav>


    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
