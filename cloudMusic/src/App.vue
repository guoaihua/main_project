<template>
  <div id="app">
      <div class="header">
           <ul>
               <li><router-link to="recommend" class="header_text">个性推荐</router-link> </li>
               <li><router-link to="song_list" class="header_text">歌单</router-link> </li>
               <li><router-link to="station" class="header_text">我的收藏</router-link></li>
               <li><router-link to="ranking_list" class="header_text">排行榜</router-link></li>
           </ul>
      </div> 
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer" v-on:click="show">
          <span class="picshow"><img :src="pic" alt=""> </span>
          <span class="name">{{name}}</span>
          <span class="author">{{author}}</span>
          <span class="icon" v-on:click.stop="toggle()">
                <img src="./assets/imgs/btn1.png" v-show="!cshow">
                <img src="./assets/imgs/btn2.png" v-show="cshow">
          </span>
      </div>


      <!-- 尾部子页面 -->
      <div class="music" v-show="musicShow">
          <div class="musci-header">
            <span class="back" v-on:click="hidden"><-</span>
          </div>
          <div class="music-content">
            <span class="text">{{name}}  {{author}}</span>
            
          </div>
          <div class="music-footer">
                  <!-- 播放器控件 -->
            <audio :src="src" autoplay="autoplay" id="audio" controls="controls" loop="loop"></audio>
          </div>
      </div>
  </div>
</template>

<script>

export default {
      data(){
        return {
            pic:'niaho',
            name:'一眼万年',
            author:'林俊杰',
            pic:"http://www.guoaihua.com:3000/users/pics/query?num=pic1",
            src:'http://www.guoaihua.com:3000/users/musics/007',
            lrc:'',
            cshow:false,
            musicShow:false
        }
      },
      created:function () {
         this.$root.Bus.$on('showing', (data)=>{
           /*    console.log(this);*/
              this.pic=data.pic;
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
            audio.pause(); 
          }else{
               audio.play();
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
}
body {
      background-image: url(./assets/imgs/bg1.jpg);
      background-size: 100% 100%;
}

 #app {
    width: 100%;
    height: 100%; 
 } 

 /* 头部样式开始 */
    .header {
      width: 100%;
      height: 12%;
      background-color: rgba(61, 73, 86, 0.7);
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
      font-family: "宋体";
      color: white;
      line-height: 80px;
    }

 /* 头部样式结束 */


  /* 内容样式开始 */
    .content {
      width: 100%;
      height: 80%;
      overflow-y:auto; 
  
      background-size: 100% 100%;
      opacity: 0.9;
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
        background-image: url('./assets/imgs/bg2.jpg');
      background-size: 100% 100%;
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
      color: white;
      line-height: 47px;
      text-align: center;
    }

    .music-content {
      width: 100%;
      height: 80%;
      position: relative;
    }

    .music-content .text {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%,-50%);
      color: white;
      font-size: 30px;
      font-family: "宋体";
      width: 90%;
      height: 40px;
      text-align: center;
      display: block;
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      -webkit-background-size:200% 100%;
      background-image: -webkit-linear-gradient(left,#df21f5 , skyblue 25%, orange 50%, #000a80 75% , #df21f5);
      -webkit-animation: content-animation 4s infinite linear;
    }

  @-webkit-keyframes content-animation {
      0%{background-position: 0,0}
      100%{background-position: -100% 0;}
  }

  .music-content .text:hover {
    transform: scale(1.5);
  }

 .music-footer  {
      width: 100%;
      height: 13%;

     }


    .lrc {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  
   .on {
      color: white;
   } 

    .music-footer audio{
      width: 100%;
      height: 100%;
      display: block;
      
    }

  


/* 尾部子页部分结束 */



    .footer {
      width: 100%;
      height: 8%;
     background-color:rgba(255, 255, 255, 0.28);
      line-height: 53px;
    }

    .active {
      color: skyblue!important;
    }
    
    .footer span {
      display: inline-block;
      line-height: 53px;
      overflow: hidden;
    }  

    .footer .picshow {
      width: 20%;
      text-align: center; 
      height: 100%;
    }

    .footer .picshow img {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-top: 6px;
    }

    .footer .name { 
      height: 100%;
      margin-top: -10px;
    }
    
    .footer .author {
      margin-left:10px; 
      width: 15%;
      height: 100%;
      color: #2e2c2c;
    }

    .icon {
      height: 70px;
      width: 70px;
      float: right;
      margin-right: 20px;
     }
    .icon img {
      width: 50px;
      height: 50px;
      clip-path: inset(10px 10px 10px 10px);
    }

 /* 尾部样式结束 */
</style>
