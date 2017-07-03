/**
 * Created by sun-gah on 2017/7/2.
 */
$(function () {
    $.ajax({
        type:'POST',
        url:'../server/sessionCheck.php',
        datatype:'text',
        async:false,
        success:function(data){
            if(data==1){
                console.log("已登录");
            }else if(data==2){
                alert("请先登录！");
                location.href="./login.html";
            }
        }
    });
});