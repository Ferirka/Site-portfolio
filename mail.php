<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем данные из формы (name из HTML)
    $name = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Настройки письма
    $to = "layoutdesignnerroh@mail.ru"; // ТВОЯ ПОЧТА
    $subject = "Новое сообщение с сайта";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $full_message = "Имя: $name\nEmail: $email\nСообщение:\n$message";

    // Отправляем письмо
    if (mail($to, $subject, $full_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>