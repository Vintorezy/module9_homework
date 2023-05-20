// Обработчик клика на кнопку
document.getElementById('submitButton').addEventListener('click', function() {
    // Получение значения из input
    var value = parseInt(document.querySelector('input').value);

    // Проверка, попадает ли число в диапазон от 1 до 10
    if (value >= 1 && value <= 10) {
      // Формирование URL для запроса
      var url = 'https://picsum.photos/v2/list?limit=' + value;

      // Создание объекта XMLHttpRequest
      var xhr = new XMLHttpRequest();

      // Настройка запроса
      xhr.open('GET', url, true);

      // Обработка ответа
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Получение данных из ответа
          var response = JSON.parse(xhr.responseText);

          // Вывод картинок на экран
          var imagesContainer = document.getElementById('imagesContainer');
          imagesContainer.innerHTML = '';

          response.forEach(function(item) {
            var imageElement = document.createElement('img');
            imageElement.src = item.download_url;
            imagesContainer.appendChild(imageElement);
          });
        } else {
          console.log('Ошибка запроса');
        }
      };

      // Отправка запроса
      xhr.send();
    } else {
      // Вывод сообщения, если число не попадает в диапазон
      var imagesContainer = document.getElementById('imagesContainer');
      imagesContainer.innerHTML = 'Число вне диапазона от 1 до 10';
    }
  });