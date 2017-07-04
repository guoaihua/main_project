/**
 * Created by sun-gah on 2017/7/4.
 */
$(function () {
    $("#cancel").click(function(){
        $.ajax({
            type:'POST',
            url:'../server/cancel.php',
            success: function (data) {
                alert(data);
            }
        });
    });
});