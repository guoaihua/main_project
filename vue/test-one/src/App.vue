<template>
  <div id="app">
    <v-header></v-header>
    <nav class="tab-list">
      <ul>
        <li><router-link to='home' class='a'></router-link>首页</li>
        <li><router-link to='project' class='a'></router-link>项目</li>
        <li><router-link to='skill' class='a'></router-link>技能</li>
        <li><router-link to='person' class='a'></router-link>个人</li>
     </ul>
    </nav>
    <router-view></router-view>
    <div class="footer">
      我是尾部
    </div>
  </div>
</template>

<script>
import header from './components/header';

  export default {
     components:{
      'v-header':header
  }
}
</script>

<style>
  #app {
    font-size: 16px;
  }

  .tab-list {
    width: 100%;
  }
  .tab-list ul{
    width: 80%;
    flex: 1;
    display: flex;
    list-style: none;
  }
  .tab-list ul li {
    width: 25%;
  }
  .tab-list ul li a {
    width: 100%;
    height: 20px;
    display: block;
  }
</style>
