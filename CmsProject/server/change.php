
<?php
	include('./conn.php');
	mysql_select_db('cms');
	mysql_query('set names utf8');
	$id=$_POST['id'];
	$name=$_POST['name'];
	$password=$_POST['password'];
	$qq=$_POST['qq'];
	$phone=$_POST['phone'];
	$sql="UPDATE user SET name='$name',password='$password',qq='$qq',phone='$phone' WHERE id='$id' ";
	$result=mysql_query($sql)or die(mysql_error());
	if($result){
		echo "修改成功";
	}else{
		echo "修改失败，请检查数据格式";
	}

?>