	<?php 
	include('./conn.php');
	mysql_select_db('test_a');
	mysql_query('set names utf8'); // 设置数据库通信编码
	
			$bookName=$_POST['bookName'];
			$bookAuthor=$_POST['bookAuthor'];
			$bookType=$_POST['bookType'];
			$bookPrice=$_POST['bookPrice'];
		
			$result=mysql_query("INSERT INTO booksystem (bookID,bookName,bookAuthor,bookType,bookPrice)VALUES(null,'$bookName','$bookAuthor','$bookType','$bookPrice')")or die(mysql_error());
			echo '添加成功';


	 ?>