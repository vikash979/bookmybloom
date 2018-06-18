<?php
$conn=mysql_connect("localhost","root","");
$result=mysql_select_db("bookmybloom",$conn) or die ("mysql_error");
$pro="select * from products ";
$product=mysql_query($pro);
$pronum=mysql_num_rows($product);
$data = array();
?>
<ul>
<?php
while($prductre=mysql_fetch_array($product))
{

?>
<li>
<?php echo $prductre['pname'];?>
</li>

<?php

}
sleep(5);
?>
</ul>
