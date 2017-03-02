/**
 * Created by gah on 2016/11/26.
 */
window.onload = function (){
   //获取id函数
    function $(id) {return document.getElementById(id);}

    var js_slider = $("js_slider");

    var slider_main_block= $("slider_main_block");//图片的父亲

    var imgs = slider_main_block.children;  //需要滚动的部分

    var slider = $("slider"); //span的父盒子

    var spans = slider.children;  // 得到所有的span

    spans[0].setAttribute("class","main_slider current");

    var scrollWidth =js_slider.clientWidth; // 获取大盒子的宽度

    for(var i = 1; i<imgs.length;i++ ){
        imgs[i].style.left = scrollWidth + "px";  // 所有人移动到右边的距离 除了第一个
    }

    var iNow = 0; // 显示现在的图片张数


        for (var k in spans) {
            spans[k].onclick = function () {

                // alert(this.innerHTML);
                var that = this.innerHTML - 1;

                if (that > iNow) {
                    animate(imgs[iNow], {left: -scrollWidth });
                    imgs[that].style.left = scrollWidth + "px";
                }
                else if (that < iNow) {
                    animate(imgs[iNow], {left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(imgs[iNow], {left: 0});

            }

        }



}