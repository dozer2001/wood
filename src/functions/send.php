<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$lastname = htmlspecialchars($lastname);
$phone_number = htmlspecialchars($phone_number);

$fio = urldecode($fio);
$email = urldecode($email);
$lastname = urldecode($lastname);
$phone_number = urldecode($phone_number);

$fio = trim($fio);
$email = trim($email);
$lastname = trim($lastname);
$phone_number = trim($phone_number);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("dozer2001@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: wood \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>