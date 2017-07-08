/**
 * Created by sun-gah on 2017/7/8.
 */
(function($){
    function PreLoad(imgs,options){
        this.imgs=(typeof imgs ==='string')?[imgs]:imgs;
        this.opts=$.extend({},PreLoad.DEFAULTS,options);
        this._unoredered();
    }

    PreLoad.DEFAULTS={
        each:null,        // 每一张图片加载后执行的
        all:null
    }
    PreLoad.prototype._unoredered= function () {
        var imgs=this.imgs,
            opts=this.opts,
            count=0,
            len=imgs.length;

        $.each(imgs, function (i,src) {         //  each遍历 集合imgs 为索引，src为遍历的item值
            if(typeof src!='string') return;
            var imgobj=new Image();// 创建img对象

            $(imgobj).on('load error', function () {   // 将dom对像转换为jquery对象，并绑定load事件，加载完毕则执行回调函数
               opts.each && opts.each(count);
                if(count>=len-1){
                    opts.all && opts.all();
                }
                count++;
            });
            imgobj.src=src;                  // 给img对象的src赋值
            console.log(imgobj);
        });
    }
    $.extend({
        preload: function (imgs,ops) {
            new PreLoad(imgs,ops);
        }
    });
})(jQuery);