<?php
	include('./conn.php');
	mysql_select_db('cms');
	mysql_query('set names utf8');
	$str1='';
	$str2='';
	$str3='';
	$str4='';
	


	if(!empty($_POST)){
		if($_POST['name']!=''){
			$name=$_POST['name'];
			$str1="name='$name'";
		}
		if($_POST['type']!=''){
			$type=$_POST['type'];
			$str2="type='$type'";
		}


		if(($_POST['pirce1']!="")&&($_POST['pirce2']!=0)){
			$pirce1=$_POST['pirce1'];
			$pirce2=$_POST['pirce2'];
			$str3=" pirce BETWEEN ".$pirce1." AND ".$pirce2 ;
		}


		// 字符串拼接验证
		// str1 str2 验证是否都存在 
		if(($str1!='')&&($str2!='')){
			$str4=" WHERE ".$str1." and ".$str2;
		}else{
			$str4=" WHERE ".$str1.$str2;
		}
		// str3 验证是否存在
		if($str3!=''){
			// 先判断 1.2 条件是否都不存在
			if(($str1=='')&&($str2=='')){
				$str=" WHERE ".$str3;
			}else{
				$str=$str4." and ".$str3;
			}
		}else{
			$str=$str4;
		}

	}

	$sql="SELECT * FROM data ".$str." "; 	
	$result=mysql_query($sql)or die(mysql_error());
	$data=array();
	while ($row=mysql_fetch_assoc($result)) {
		array_push($data, $row);
	}
	echo json_encode($data,JSON_UNESCAPED_UNICODE); 

?>	