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
if (mail("cto@appsidedev.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: cto@appsidedev.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
$('body')
    .on('submit', 'form', function(e) {
        e.preventDefault();
        $('input[type=submit]').prop('disabled', true)

        var form = $(this)[0],
            data = new FormData(form);
            var full_url = window.location.href;
            data.append('full_url', full_url);
            data.append('type', 'submit');
            $.ajax({
                url: 'functions/send.php',
                method: 'post',
                data: data,
                dataType: 'json',
                processData: false,
                contentType: false,
                cache: false,
                success: function(response) {
                    if (response.SUCCESS) {
                        window.location.href = 'thanks.php';
                    } else {
                        console.error(response.MESSAGE);
                    }
                },
                error: function(response) {
                    console.error(response.responseText);
                }
            });
        })