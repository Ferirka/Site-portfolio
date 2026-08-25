document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.bth__header');
    const modal = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    console.log('menuBtn:', menuBtn); // Проверь, что кнопка найдена
    console.log('modal:', modal);     // Проверь, что модалка найдена

    if (!menuBtn || !modal || !closeBtn) {
        console.error('Один из элементов не найден');
        return;
    }

    menuBtn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});