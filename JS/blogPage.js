fetch('JS/blog.json') // отправляет запрос на сервер(или к файлу)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки')
        }
        return response.json();
    })
    .then(data => {
        blogCards(data);
        console.log('Данные загружены');

    })

    .catch(error => {
        console.error('Ошибка:', error);
        // Можешь показать сообщение пользователю
        document.getElementById('blogBlock').innerHTML = '<p>Произошла ошибка при загрузке проектов</p>';

        
    });