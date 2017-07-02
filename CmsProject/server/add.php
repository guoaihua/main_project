<?php
include('./conn.php');
mysql_select_db('cms');
mysql_query('set names utf8');

$name=$_POST['name'];
$type=$_POST['type'];
$pirce=$_POST['pirce'];
$number=$_POST['number'];

$sql="INSERT INTO data (id,name,type,pirce,number)VALUES(null,'$name','$type','$pirce','number')";
 $result=mysql_query($sql)or die(mysql_error());
 echo "添加成功";
?>