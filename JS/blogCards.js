function blogCards(data, containerId) {

    const blogBlock = document.getElementById('blogBlock');

    let htmlString = '';


    // проходим по всем объектам из JSON

  data.blogBlock.forEach(blog => {
        htmlString += `<article class="blog__card portfolio__card">
        <h3 class="blog__heading portfolio__heading">${blog.title}</h3>
        <p class="blog__heading portfolio__paragraph">${blog.description}</p>
        <a href="#" class="btn__blog btn__main">${blog.link}</a>
        </article>`
        
    });

    // Вставляем все карточки одной операцией
    blogBlock.innerHTML = htmlString;

}