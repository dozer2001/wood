<?php
$arr= $_POST['obj']
json_decode($arr)
$infa = 'infa.txt'
file_put_contents($infa, $arr)
//echo $fio;
//echo "<br>";
//echo $email;
mail("dozer.m3x@gmail.com", "Заявка с сайта", "ФИО:".$arr.". phone_number: ".$arr ,"From: Eco-DecorWood@eco-decorwood.ru \r\n")
?>