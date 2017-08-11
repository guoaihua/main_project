/**
 * Created by sun-gah on 2017/5/18.
 */
$(function(){
    $.ajax({
        type:'post',
         url:'./index1.php',
           cache:false,
        datatype:'json',
        success:function(data){
        	console.log(11+Math.random());
        	var str=$.parseJSON(data);
        	console.log(str);
           
var a='';
 var reshtml='<tr><th>书籍名称</th> <th>书籍作者</th> <th>书籍类型</th> <th>书籍价格</th> </tr>';
            $.each(str,function(index,content){
                console.log(content.bookName+content.bookAuthor+content.bookType+content.bookPrice);
                a+=content.bookName+content.bookAuthor+content.bookType+content.bookPrice;
               reshtml+='<tr><td>'+content.bookName+'</td> <td>'+content.bookAuthor+'</td> <td>'+content.bookType+'</td> <td>'+content.bookPrice+'</td></tr>';
            });
            $('#show_table').html(
            	reshtml
            )
        }
    });
});
