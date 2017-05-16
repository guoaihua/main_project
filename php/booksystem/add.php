
 <!DOCTYPE html>
<html>
<head>
	<title>书店</title>
	<meta charset="utf-8">
	<style>
		*{margin: 0}
		body,html{
			width: 100%;
			height: 100%;
		}
		.wrap {
			width: 80%;
			margin: 0 auto;
			text-align: center;
		}
		.header {
			font-size: 20px;
			font-family: "宋体";
			margin:20px 0 20px 0; 
		}
		.container ul {
			list-style: none;
			width: 50%;
			margin: 0 auto; 
		}
		.container ul li{
			float: left;
			width: 33%;
		}
		.container ul li a{
			color: black;
			text-decoration: none;
		}
		.clear {
			clear: both;
		}

	</style>
</head>
<body>
	<div class="wrap">
		<div class="header">
			<h1 >网上书店</h1>
		</div>	
		<div class="container">

			<ul>
				<li> <a href="#">首页</a></li>
				<li> <a href="./insert.php">添加图书</a> </li>
				<li> <a href="./del.php">删除图书</a> </li>
			</ul>

			<form class="clear" action="add.php" method="post">
				<h3>插入书籍</h3> 
				书籍名称：<input type="text" name="bookName"> <br><br>
				书籍作者：<input type="text" name="bookAuthor"> <br><br>
				书记类型：<input type="text" name="bookType"> <br><br>
				书籍价格：<input type="text" name="bookPrice"> <br><br>
				<input type="submit" value="提交" name="submit">	
			</form>

		</div>

	</div>

</body>
</html>
	<?php 
	include('./conn.php');
	mysql_select_db('test_a');
	mysql_query('set names utf8'); // 设置数据库通信编码
	if(isset($_POST['submit'])){
			echo "提交过来了";
			$bookName=$_POST['bookName'];
			$bookAuthor=$_POST['bookAuthor'];
			$bookType=$_POST['bookType'];
			$bookPrice=$_POST['bookPrice'];
			echo $bookName;
			$result=mysql_query("INSERT INTO booksystem (bookID,bookName,bookAuthor,bookType,bookPrice)VALUES(null,'$bookName','$bookAuthor','$bookType','$bookPrice')")or die(mysql_error());

	}

	 ?>