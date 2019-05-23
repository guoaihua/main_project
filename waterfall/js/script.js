/**
 * Created by sun-gah on 2017/3/8.
 */
window.onload=function(){
    var clientHeight=document.documentElement.clientHeight;  // 获取页面可视区高度
    var timer=null;
    var isTop=true;
    var showon=document.getElementById("show");
    var flag=true;
    var main=document.getElementById("main");
    var btn=document.getElementById("backTop");
    var nav=document.getElementById("nav");

    // 按钮点击监听事件
    btn.onclick=function(){
        timer=setInterval(function(){
            var scroll=document.documentElement.scrollTop||document.body.scrollTop;
            var speed=Math.floor(-scroll/6);
            document.body.scrollTop=scroll+speed;
       /*     console.log(scroll+speed);*/
            isTop=true;
            if(scroll==0){
                clearInterval(timer);
            }
        },30);
    }
   /*滚动条监听事件*/
    window.onscroll=function(){
        var scroll=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(scroll);
        if (scroll>=390){
            nav.style.backgroundColor="white";
        }else {
            nav.style.backgroundColor="rgba(227, 229, 228, 0)";
        }
        if(scroll>clientHeight){
            btn.style.display="block";
        }else {
            btn.style.display="none";
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;
        checkHeight();
    }

    /*判断是否到达底部*/
    function checkHeight(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var scrollHeight=document.documentElement.scrollHeight||document.body.scrollHeight;
        var height=scrollHeight-scrollTop-clientHeight
        if (height<50){
           /* alert("以到达最底部");*/
            for (var i=0;i<10;i++){
                creat();
            }
        }
    }


    // dom添加子元素 实现无限图片加载
    function creat(){
        var div=document.createElement("div");
        div.className="box";
        var divc=document.createElement("div");
        divc.className="pic";
        div.appendChild(divc);
        var img=document.createElement("img");
        var num=parseInt(Math.random()*10);
        console.log(num);
        img.src="imgs/"+num+".jpg";
        divc.appendChild(img);
        main.appendChild(div);
        fun();
        show();
    }

    // 鼠标点击展示全图

    function show(){
    var boxs=document.getElementsByClassName("box");
    for (var i=0;i<boxs.length;i++){       // 循环闭包，里面含有匿名函数
        (function(){
            var j=i;  /*外部变量储存在j中，里面的匿名函数调用*/
            boxs[j].onclick=function(){
                if (flag){      /*设置标志位，实现点击切换*/
                    flag=false;
                    var image=new Image(); // 创建图片储存对象
                    var img = boxs[j].children[0].firstElementChild;
                    image.src=img.src;
                    var w = image.width;
                    var h=image.height;
                    console.log(image.width);
                    showon.style.display="block";
                    showon.firstElementChild.src=image.src;
                    showon.style.marginTop=-h*0.5+"px";
                    showon.style.marginLeft=-w*0.5+"px";
                }else {
                    flag=true;
                    showon.style.display="none";
                }
            };
        })();
    }
}
show();




    // 监听屏幕大小改变
    window.onresize =fun;
    fun();

function fun(){
    var screenW={
        a:340,
        b:787,
        c:980,
        d:1420
    };
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
    /*   console.log(nums);*/
    waterfall(nums,boxs,boxsW);
}

function waterfall(nums,boxs,boxsW){
    main.style.width=boxsW*nums+"px";
    main.style.margin="10px auto";
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