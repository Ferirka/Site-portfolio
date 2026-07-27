function renderCards(data, containerId) {

    const priceBlock = document.getElementById('priceBlock');

    let htmlString = '';


    // проходим по всем объектам из JSON

  data.priceBlock.forEach(item => {
        htmlString += `<article class="price__card">
        <h3 class="price__heading">${item.title}</h3>
        <h4 class="price__subtitle">${item.subtitle}</h4>
                    <div class="card__text">
                        <ul class="card__list">
                        ${item.item.map(item => `<li class="card__item">${item}</li>`).join('')}
                        </ul>
                    </div>
                        <div class="price__value">
                            <span class="price__number">${item.price}</span>
                            <span class="price__currency">₽</span>
                        </div>
            </article>`
    });

    // Вставляем все карточки одной операцией
    priceBlock.innerHTML = htmlString;

}