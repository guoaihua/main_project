/**
 * Created by sun-gah on 2017/6/28.
 */
$(function(){
	var p={"p":1};
	getData(p);
    $(".pre").click(function(){
    		if (p.p>1) {
    			p.p--;
    			getData(p);
    			console.log(p);
    		}else{
    			p.p=1;
    			getData(p);
    		console.log(p);
    		}	
    });

    $(".next").click(function(){
    	  p.p++;
    	  getData(p);
    	  console.log(p);
    });
});

function getData(p){
	 $.ajax({
        type:'post',
        url:'../server/getdata.php',
        cache:false,
        data:p,
        datatype:'json',
        success:function(data){
        	/*console.log(data);*/
        /*	console.log("ceshi");*/
    		   var str=JSON.parse(data);
            var reshtml='<tr><th>编号</th> <th>名称</th> <th>类型</th> <th>价格</th> <th>数量</th> </tr>';
            $.each(str,function(index,content){
                reshtml+='<tr><td>'+content.id+'</td><td>'+content.name+'</td><td>'+content.type+'</td><td>'+content.pirce+'</td><td>'+content.number+'</td></tr>';
            });
            $('#showt').html(
                reshtml
            );
        }
    });
}
