// js/form.js
document.addEventListener('DOMContentLoaded', function() {
    // Находим форму по классу (она уже есть в HTML)
    const form = document.querySelector('.form__body');
    if (!form) return;

    // Блок для сообщения об успехе/ошибке (добавляем динамически)
    const statusBlock = document.createElement('div');
    statusBlock.className = 'form__status';
    form.appendChild(statusBlock);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === 'success') {
                statusBlock.innerHTML = '<p style="color: #7ECD0F; font-weight: bold;">✅ Сообщение отправлено!</p>';
                form.reset();
            } else {
                statusBlock.innerHTML = '<p style="color: #ff6b6b; font-weight: bold;">❌ Ошибка. Попробуйте позже.</p>';
            }
        })
        .catch(error => {
            statusBlock.innerHTML = '<p style="color: #ff6b6b; font-weight: bold;">❌ Ошибка соединения.</p>';
            console.error('Ошибка:', error);
        });
    });
});