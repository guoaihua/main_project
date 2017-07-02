<?php
	include('./conn.php');
	mysql_select_db('cms');
	mysql_query('set names utf8');
	$id=$_POST['id'];
	$sql="DELETE  FROM data WHERE id='$id'";
	$result=mysql_query($sql)or die(mysql_error());
	if($result){
		echo "修改成功";
	}else{
		echo "修改失败，请检查数据格式";
	}

?>