/**
 * Created by sun-gah on 2017/3/8.
 */
window.onload=function(){
    var main=document.getElementById("main");
    var boxs=[];
    boxs=document.getElementsByClassName("box");

    var boxsW=boxs[0].offsetWidth;
    console.log(boxsW);
    var clos=Math.floor(document.documentElement.offsetWidth/boxsW);
    console.log(clos);
    main.style.width=boxsW*clos+"px";
    main.style.margin="0 auto";

    // 创建数组保存每一列的高度
    var arrh=[];
    for(var i=0;i<boxs.length;i++){
        if (i<clos){
            arrh.push(boxs[i].offsetHeight);
        }else {
            var minH=Math.min.apply(null,arrh);
            console.log(minH);
            var index=arrh.indexOf(minH);
           boxs[i].style.position="absolute";
            boxs[i].style.top=minH+"px";
            boxs[i].style.left=boxsW*index+"px";
            arrh[index]+=boxs[i].offsetHeight;

        }
    }




}