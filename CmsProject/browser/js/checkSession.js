/**
 * Created by sun-gah on 2017/7/2.
 */
$(function () {
    $.ajax({
        type:'POST',
        url:'../server/sessionCheck.php',
        async:false,
        success:function(data){
            if(data==2){
                alert("请先登录！");
                location.href="./login.html";
            }else{
                console.log(data);
                sessionName=data;
                $("#showSession").html("欢迎你！"+sessionName);
            }
        }
    });
});