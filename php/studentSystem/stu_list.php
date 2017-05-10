<?php
	//定义数组保存学生信息
	$info = array(
		array('name' => '王小六','birth'=>'1996-08-07','snum'=>'012132132' ),
		array('name' => '张小三','birth'=>'1996-09-17','snum'=>'012132213' ),
		array('name' => '陈小五','birth'=>'1993-08-27','snum'=>'012322112' ),
		array('name' => '孙小七','birth'=>'1994-08-07','snum'=>'012123211' ),
		);
?>

<table>
		<tr><th>学号</th><th>姓名</th><th>出生日期</th><th>详情</th></tr>
	<?php for ($i=0,$len=count($info);$i <$len ; $i++) { ?>
		<tr>
			<td><?php echo $info[$i]['snum']; ?></td>
			<td><?php echo $info[$i]['name']; ?></td>
			<td><?php echo $info[$i]['birth']; ?></td>
			<td><a href="#">点击查看详情</a></td>
		</tr>			
	<?php }?>


</table>