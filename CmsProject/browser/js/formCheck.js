/**
 * Created by gah on 2017/7/3.
 */

/**
 *
 * 默认：id
 * 表单名称：form（可更改）
 * 用户名：user
 * 密码：password
 * 电话号码：phoneNum
 * QQ：qq
 *
 */

$(function () {

    var num=0;
    //对表格的input 进行失去焦点遍历验证合理性
    $("#formOne :input").blur(function(){
        //分别进行匹配
        //用户名进行验证 规则：中文或者大小写字母数字


        if($(this).is("#user")){
            let re=/[\w\u4e00-\u9fa5]/g;
            if(re.test(this.value)){
                $("#span_user").html("用户名验证通过");
                num++;
                console.log(num);
            }else{
                $("#span_user").html("请输入合法用户名");
            }
        }
        //密码验证   规则：只能为数字字母大小写且不少于6位
        if($(this).is("#password")){
            let  re=/[\w]{6}/g;
            if(re.test(this.value)){
                $("#span_password").html("密码验证通过");
                num++;
                console.log(num);
            }else{
                $("#span_password").html("请输入字母数字切不少于六位");
            }
        }
        // qq号码验证 规则：只能为数字
        if($(this).is("#qq")){
            let re=/^[1-9][0-9]+/g;
            if(re.test(this.value)){
                $("#span_qq").html("qq验证通过");
                num++;
                console.log(num);
            }else{
                $("#span_qq").html("只能为数字");
            }
        }
        // 电话号码验证 规则： 只能为11位数字
        if($(this).is("#phoneNum")){
            let re=/^[1-9][0-9]{10}/g;
            if(re.test(this.value)){
                $("#span_phoneNum").html("手机验证通过");
                num++;
                console.log(num);
            }else{
                $("#span_phoneNum").html("请输入11位手机号码");
            }
        }

        if(num==$("#formOne :input").length){
            console.log(flag);
            flag=true;
            console.log(num);
            console.log(flag);
        }
    });
});