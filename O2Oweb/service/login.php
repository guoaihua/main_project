<?php
include('./conn.php');
mysql_select_db('test');
mysql_query('set names utf8');  // 设置数据库通信编码

$name=$_POST['name'];
$password=$_POST['password'];
$sql="SELECT password FROM usermanagement WHERE loginname='$name'";
$result=mysql_query($sql)or die(mysql_error());
while ($row=mysql_fetch_assoc($result)) {
	 if($row['password']==$password){
	 	echo 1;  // 登录成功
 }else{
 	echo 2; // 登录失败
 }
}
?>