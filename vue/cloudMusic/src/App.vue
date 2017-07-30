<template>
  <div id="app">
      <div class="header">
           <ul>
               <li><router-link to="recommend" class="header_text">个性推荐</router-link> </li>
               <li><router-link to="song_list" class="header_text" >歌单</router-link> </li>
               <li><router-link to="station" class="header_text">主播电台</router-link></li>
               <li><router-link to="ranking_list" class="header_text">排行榜</router-link></li>
           </ul>
      </div> 
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
          <span class="pic">图片待添加</span>
          <span class="name">{{name}}</span>
          <span class="author">{{author}}</span>
          <span class="icon"> bofang</span>
      </div>

      <audio :src="src" autoplay="autoplay"></audio>
  </div>
</template>

<script>

export default {
      data(){
        return {
            pic:'niaho',
            name:'hha1',
            author:'da',
            src:''
        }
      },
      created:function () {
         this.$root.Bus.$on('showing', (data)=>{
               console.log(this);
              this.name=data.name;
              this.author=data.author;
              this.src=data.src;
              console.log(this.name+this.author);
         }

          )
      }

}
</script>

<style>
body,html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;   
    overflow: hidden; 
    font-size: 20px;
}

 #app {
    width: 100%;
    height: 100%; 
 } 

 /* 头部样式开始 */
    .header {
      width: 100%;
      height: 12%;
      background-color: rgba(53, 80, 109, 0.82);
    }

    .header ul {
      list-style: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .header ul li {
      width: 25%;
      height: 100%;
      float: left;
      text-align: center;
  
    }

   .header ul li .header_text {
      width: 100%;
      height: 100%;
      display: block;
      text-decoration: none;
      line-height: 200px;
      font-family: "宋体";
      font-size: 2.5rem;
      color: white;
    }

 /* 头部样式结束 */


  /* 内容样式开始 */
    .content {
      width: 100%;
      height: 80%;
      background-color:  rgb(53, 80, 109);
      overflow-y:auto; 
    }
    
 /* 内容样式结束 */



  /* 尾部样式开始 */
    .footer {
      width: 100%;
      height: 8%;
      background-color: lightgreen;
    }

    .active {
      color: skyblue!important;
    }
    
    .footer span {
      display: inline-block;
      font-size: 2rem;
      line-height: 140px;
      text-align: center;
    }  

    .footer .pic {
      width: 30%;
      height: 100%;
    }

    .footer .name {
      width: 30%;
      height: 100%;
    }
    
    .footer .author {
      width: 20%;
      height: 100%;
    }

 /* 尾部样式结束 */
</style>
