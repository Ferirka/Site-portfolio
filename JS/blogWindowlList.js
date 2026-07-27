function blogCards(data, containerId) {

    const blogBlock = document.getElementById('');

    let htmlString = '';


    // проходим по всем объектам из JSON

  
      htmlString += `<article class="blog__window">
    <h2 class="blog__heading portfolio__heading">${list.title}</h2>
    <span class="window__span portfolio__paragraph">${list.span}</span>`;

// Цикл по секциям
list.articles.forEach(section => {
    htmlString += `
        <h3 class="window__subtitle">${section.subtitle}</h3>
        <p class="window__paragrapf">${section.description}</p>
    `;
});

htmlString += `<a href="#" class="btn__blog btn__main">${blog.link}</a>
</article>`;

 // Вставляем все карточки одной операцией
    blogBlock.innerHTML = htmlString;

}