function blogCards(data, containerId) {

    const blogBlock = document.getElementById('blogBlock');

    let htmlString = '';


    // проходим по всем объектам из JSON

  data.blogBlock.forEach(blog => {
        htmlString += `<article class="blog__card portfolio__card">
        <div class="blog__heading">
            <h1 class="blog__title">${blog.title}</h1>
            <time datetime="02.09.2026, 14:15" class>${blog.time}</time>
        </div>

        <h2 class="blog__subtitle">${blog.subtitle}</h2>
        </article>`
        
    });

    // Вставляем все карточки одной операцией
    blogBlock.innerHTML = htmlString;

}