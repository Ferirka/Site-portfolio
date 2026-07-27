fetch('JS/priceBlock.json') // отправляет запрос на сервер(или к файлу)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки')
        }
        return response.json();
    })
    .then(data => {
        renderCards(data, 'cardsContainer');
        console.log('Данные загружены');

    })

    .catch(error => {
        console.error('Ошибка:', error);
        // Можешь показать сообщение пользователю
        document.getElementById('priceBlock').innerHTML = '<p>Произошла ошибка при загрузке проектов</p>';

        
    });