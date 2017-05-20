<?php 
	include('./conn.php');
	mysql_select_db('test_a');
	mysql_query('set names utf8'); // 设置数据库通信编码
	$bookName=$_POST['bookName'];
	$sql = "SELECT * FROM booksystem WHERE bookName LIKE '%".$bookName."%'"; // 模糊查询匹配
/*	$sql = "SELECT * FROM booksystem WHERE bookName='$bookName' ";*/  // 书名完整查询
	$result=mysql_query($sql);
	$data=array();
	while ($row=mysql_fetch_assoc($result)) {
		array_push($data, $row);
	};
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
	 /*echo urldecode($res);*/
	/*	printf($data[1]['bookName']);*/
 ?>
