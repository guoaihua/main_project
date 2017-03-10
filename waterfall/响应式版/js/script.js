/**
 * Created by sun-gah on 2017/3/8.
 */
window.onload=function(){

    // 获取屏幕的宽度
    // 声明一个区间
    var screenW={
        a:340,
        b:787,
        c:980,
        d:1420
    };


  window.onresize =fun;
    fun();
   function fun(){
       var main=document.getElementById("main");
       var boxs=document.getElementsByClassName("box");
       var boxsW=boxs[0].offsetWidth;
      for(var i=0;i<boxs.length;i++){
          boxs[i].style.position="static";
      }


       var nums= 0,clos=0;
    // 检测屏幕宽度并实现不同宽度对clos的复制
       var sc=document.documentElement.offsetWidth;
        if (sc>screenW.a&&sc<=screenW.b){
            nums=1;
        }else if(sc>screenW.b&&sc<=screenW.c){
            nums=2;
        }else if(sc>screenW.c&&sc<=screenW.d){
            nums=3;
        }else if(sc>screenW.d){
            nums=Math.floor(sc/boxsW);
        }

       console.log(nums);
       main.style.width=boxsW*nums+"px";
       main.style.margin="0 auto";


       var arrh=new Array;
       for(var i=0;i<boxs.length;i++){
           if (i<nums){
               arrh.push(boxs[i].offsetHeight);
           }else {
               var minH=Math.min.apply(null,arrh);
               /*  console.log(minH);*/
               var index=arrh.indexOf(minH);
               boxs[i].style.position="absolute";
               boxs[i].style.top=minH+"px";
               boxs[i].style.left=boxsW*index+"px";
               arrh[index]+=boxs[i].offsetHeight;
           }
       }
   }
   }




