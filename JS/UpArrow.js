function initScrollToTop() {
    const button = document.getElementById('UpArrow');
    if(!button) return;


    window.addEventListener("scroll", function() {
        if (window.scrollY > 300)  {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    button.addEventListener("click", function() {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        });
    }); 
}

document.addEventListener('DOMContentLoaded', initScrollToTop);  // работа кнопки