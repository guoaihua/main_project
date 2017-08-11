var http=require('http');
var cheerio=require('cheerio');
var request=require('request');
var fs=require('fs');
var i=0;
var url='http://www.ss.pku.edu.cn/index.php/newscenter/news/2391';


 function fetchPage(str){
 	startReq(str);
 }


function startReq(str){
		// 利用http模块 发起一次get请求

		http.get(str,function(res){
				var html='';
				var titles=[];
				res.setEncoding('utf-8'); // 防止中文乱码

				// steam流操作
				// 监听data事件，读取返回体
				res.on('data',function(chunk){
					html+=chunk;
				});
				// 监听end事件
				res.on('end',function(){
					var $=cheerio.load(html);   // 获取html中的所有选择器 开启node中的jquery
					var time=$('.article-info a:nth-child(2)').text().trim();

					var news_item={
						title:$('div.article-title a').text().trim(),
						Time:time,
						link:'http://www.ss.pku.edu.cn'+$('.article-title a').attr('href'),
						num:i++
					};

				console.log(news_item);
				var news_title=news_item.title;	
				savePage($,news_title);  // 保存文章到本地
				saveImg($,news_title);	 //  保存图片到本地

				//下一次request的url
				
				var nextLink="http://www.ss.pku.edu.cn"+$('li.next a').attr('href');
				    str1=nextLink.split('-');
				    str=encodeURI(str1[0]);  // 将字符串编码为url
				    console.log(str);
				    if(i<10){
				    	fetchPage(str);
				    }
				});

			});

}

function savePage($,news_title){
		$('div.article-content p').each(function(index,item){
			var x=$(this).text();     // this为dom元素，包装为jquery对象
			x=x+'\n';					
			fs.appendFile('./data/'+news_title+'.txt',x,'utf-8',function(err){  // 添加文件到本地
					if (err) {
						console.log(err);
					}
				});
		});
}

function saveImg($,news_title){
		$('.article-content img').each(function(index,item){
			var title=$(this).parent().next().text().trim();  // 获取图片标题
			var img_filname=title+'.jpg';

			var img_src="http://www.ss.pku.edu.cn"+$(this).attr('src');

			request.head(img_src,function(err,res,body){        // 用head请求只是为了验证路径是否存在
					if(err){
						console.log(err);
						return;
					}
			})
			request(img_src).pipe(fs.createWriteStream('./image/'+news_title+'-'+img_filname)); // 以流的形式保存图片到本地
			

		});
}


fetchPage(url);