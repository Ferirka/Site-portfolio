function portfolioCards(data, containerId) {

    const portfolioBlock = document.getElementById('portfolioBlock');

    let htmlString = '';


    // проходим по всем объектам из JSON

    data.portfolioBlock.forEach(card => {
        htmlString += `<article class="portfolio__card">
        <h3 class="portfolio__heading">${card.title}</h3>
        <p class="portfolio__paragraph">${card.description}</p>
        <span class="supportive__text">${card.support}</span>
                    <div class="portfolio__card-text">
                        <ul class="portfolio__card-list">
                        ${card.card.map(card => `<li class="portfolio__card-item">${card}</li>`).join('')}
                        </ul>
                    </div>
                    <span class="supportive__text">
                    <a class="portfolio__link" target="_blank" rel="noopener noreferrer" href="${card.link1.url}">${card.link1.text}</a>
                    </span>
                    <span class="supportive__text">
                    <a class="portfolio__link"  target="_blank" rel="noopener noreferrer" href="${card.link2.url}">${card.link2.text}</a>
                    </span>

         
            </article>`
    });

    // Вставляем все карточки одной операцией
    portfolioBlock.innerHTML = htmlString;

}