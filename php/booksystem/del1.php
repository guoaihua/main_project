<?php 
	include('./conn.php');
	mysql_select_db('test_a');
	mysql_query('set names utf8'); // 设置数据库通信编码
	$bookName=$_POST['bookName'];
	$sql = "SELECT * FROM booksystem WHERE bookName='$bookName' "; // 书名完整查询
	$result=mysql_query($sql)or die(mysql_error());
	if ($row=mysql_fetch_assoc($result)) {
			mysql_query("DELETE FROM booksystem WHERE bookName='$bookName'")or die(mysql_error());
	 		echo '删除图书:'.$bookName.' 成功';
		}else {
			echo "图书不存在";
		}
 ?>
