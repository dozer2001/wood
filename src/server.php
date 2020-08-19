<?php


$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
 echo  $say, ' ', $to;
$fio = urldecode($fio);
$phone_number = urldecode($phone);

$fio = trim($fio);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
mail("dozer.m3x@gmail.com", "Заявка с сайта", "ФИО:".$fio.". phone_number: ".$phone ,"From: Eco-DecorWood@eco-decorwood.ru \r\n")