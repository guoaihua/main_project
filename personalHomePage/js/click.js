/**
 * Created by gah on 2016/11/28.
 */
/*点击切换背景功能函数*/


window.onload = function (){

    function $(id) {return document.getElementById(id);}  // id获取函数

    var spring = $("spring");  // 获取四季的id 并创建变量
    var summer = $("summer");
    var autumu = $("autumu");
    var winter = $("winter");

    var introduction = $("introduction");

    spring.onclick = function (){
        introduction.style.background = "url('imgs/spring.jpg') no-repeat";
    }
    summer.onclick = function (){
        introduction.style.background = "url('imgs/summer.jpg') no-repeat";
    }

    autumu.onclick = function (){
        introduction.style.background = "url('imgs/autumu.jpg') no-repeat";
    }

    winter.onclick = function (){
        introduction.style.background = "url('imgs/winter.jpg') no-repeat";
    }




}