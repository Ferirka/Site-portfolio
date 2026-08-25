// Плавный скролл для всех ссылок с якорем (#)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]'); // Все ссылки, которые начинаются с #

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Отменяем стандартный прыжок
            event.preventDefault();

            // Находим блок, к которому ведёт ссылка
            const targetId = this.getAttribute('href'); // Например, "#form"
            const targetBlock = document.querySelector(targetId);

            if (targetBlock) {
                // Плавно прокручиваем к блоку
                targetBlock.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Привязываем к верху блока
                });
            }
        });
    });
});