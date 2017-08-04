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
      <div class="footer" v-on:click="show">
          <span class="pic">图片待添加</span>
          <span class="name">{{name}}</span>
          <span class="author">{{author}}</span>
          <span class="icon" v-text="showText" v-on:click.stop="toggle()"></span>
      </div>


      <!-- 尾部子页面 -->
      <div class="music" v-show="musicShow">
          <div class="musci-header">
            <span class="back" v-on:click="hidden"><-</span>
            <span>{{name}}</span>
            <span>{{author}}</span>
          </div>
          <div class="music-content"></div>
          <div class="music-footer">
                  <!-- 播放器控件 -->
            <audio :src="src" autoplay="autoplay" id="audio" controls="controls"></audio>
          </div>
      </div>
  </div>
</template>

<script>

export default {
      data(){
        return {
            pic:'niaho',
            name:'hha1',
            author:'da',
            src:'',
            cshow:true,
            showText:'暂停',
            musicShow:false
        }
      },
      created:function () {
         this.$root.Bus.$on('showing', (data)=>{
           /*    console.log(this);*/
              this.name=data.name;
              this.author=data.author;
              this.src=data.src;
           /*   console.log(this.name+this.author);*/
         }

          )
      },
      methods:{
        show:function () {
            this.musicShow=true;
        },
        hidden:function () {
            this.musicShow=false;
        },
        toggle:function () {
          let audio=document.getElementById('audio');
          this.cshow=!this.cshow;
          if(this.cshow===true){
              this.showText="停止";
              audio.play();
          }else{
             this.showText="播放";
             audio.pause();
          }
        }
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
    .music {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgb(53, 80, 109);
      font-size: 20px;
    }

   /*  尾部子页头部 */
    .musci-header {
      width: 100%;
      height: 7%;  
      border-bottom: 1px solid black;   
    }
    .musci-header span {
      height: 100%;
      display: inline-block;
      font-size: 2.5rem;
      line-height: 122px;
      text-align: center;
    }

    .music-content {
      width: 100%;
      height: 80%;
    }

     .music-footer  {
      width: 100%;
      height: 13%;
      background-color: lightgreen;
     }



    .music-footer audio{
      width: 80%;
      height: 80%;
      display: block;
    }
/* 尾部子页部分结束 */



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

    }  

    .footer .pic {
      width: 30%;
      height: 100%;
      text-align: center;
    }

    .footer .name {
      
      height: 100%;
    }
    
    .footer .author {
      margin-left:10px; 
      width: 20%;
      height: 100%;
    }

    .icon {
      float: right;
      margin-right: 100px;
    }

 /* 尾部样式结束 */
</style>
