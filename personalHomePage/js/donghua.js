/**
 * Created by gah on 2016/11/30.
 */

window.onload = function (){
     function $(id) {return document.getElementById(id);}

     var wrap = $("wrap"); // 获取大盒子warp
     var arrow = $("arrow");
     var slide = $("slide");
     var lis = slide.getElementsByTagName("li"); // 获取所有的li标签

     wrap.onmouseover = function () {
         animate(arrow,{'opacity':100});


     }

    wrap.onmouseout = function () {
        animate(arrow,{'opacity':0});

    }

    //  json 数组 储存 imgs信息

    var json = [
        {  // 1
            width: 400,
            top: 20,
            left: 50,
            opacity: 20,
            z:2
        },
        {
            // 2
            width:600,
            top: 70,
            left: 0,
            opacity: 80,
            z:3
        },
        {
            // 3
            width:800,
            top: 100,
            left: 200,
            opacity: 90,
            z:4
        },
        {
            // 4
            width:600,
            top: 70,
            left: 600,
            opacity: 80,
            z:3
        },
        {
            // 5
            width:400,
            top: 20,
            left: 750,
            opacity: 20,
            z:2
        }
    ];

    var haha= arrow.children;


    for(var k in haha ){

        haha[k].onclick = function () {
            if(this.className=="prev"){
                change(false);   // 左侧按钮
            }
            else{
                change(true);  // 右侧按钮
            }
        }

    }


    function change (flag){
         if(flag){
             json.unshift(json.pop());           // 把最后一个删除 并且把第一个添加到json第一个位置
         }
        else{
             json.push(json.shift());          // 移除第一个  放到json最后一个
         }

        for(var i=0;i<json.length;i++){
            animate(lis[i],{                        // 将json储存的数据一一赋值给lis
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            })
        }


    }


}
