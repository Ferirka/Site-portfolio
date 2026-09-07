<?php
// Подключаем PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Пути к файлам PHPMailer (ОБЯЗАТЕЛЬНО ПРОВЕРЬ)
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Проверка полей
    if (empty($_POST['username']) || empty($_POST['email']) || empty($_POST['message'])) {
        echo "error";
        exit;
    }

    $name = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Настройки SMTP (используем Mail.ru)
        $mail->isSMTP();
        $mail->Host       = 'smtp.mail.ru';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'layoutdesignnerroh@mail.ru'; // Твоя почта
        $mail->Password   = 'Hen1!a7ss864';       // Пароль от почты!
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // От кого и кому
        $mail->setFrom('layoutdesignnerroh@mail.ru', 'Сайт');
        $mail->addAddress('layoutdesignnerroh@mail.ru'); // Куда письмо

        // Содержимое
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Новое сообщение с сайта';
        $mail->Body    = "Имя: $name\nEmail: $email\nСообщение:\n$message";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "error";
        // Ошибку можно посмотреть в логах хостинга
        error_log("Ошибка PHPMailer: {$mail->ErrorInfo}");
    }
}
?>