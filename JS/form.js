// Ждём загрузку DOM
document.addEventListener('DOMContentLoaded', function() {

    // Находим форму по классу (она есть у тебя)
    const form = document.querySelector('.form__body');
    if (!form) return; // Если формы нет, выходим

    // Блок для сообщения об успехе/ошибке (можно создать динамически)
    const statusBlock = document.createElement('div');
    statusBlock.className = 'form__status';
    form.appendChild(statusBlock);

    // Слушаем отправку формы
    form.addEventListener('submit', function(event) {

        // Отменяем перезагрузку страницы
        event.preventDefault();

        // Собираем данные из полей
        const formData = new FormData(form);

        // Отправляем на сервер
        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                statusBlock.innerHTML = '<p style="color: #B9FF57; font-weight: 600;">✅ Ваше сообщение отправлено!</p>';
                form.reset(); // Очищаем поля
            } else {
                statusBlock.innerHTML = '<p style="color: #ff6b6b; font-weight: 600;">❌ Ошибка отправки. Попробуйте позже.</p>';
            }
        })
        .catch(error => {
            statusBlock.innerHTML = '<p style="color: #ff6b6b; font-weight: 600;">❌ Ошибка соединения. Проверьте интернет.</p>';
            console.error('Ошибка:', error);
        });
    });
});