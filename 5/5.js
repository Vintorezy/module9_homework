const pageInput = document.querySelector('#pageInput');
    const limitInput = document.querySelector('#limitInput');
    const requestButton = document.querySelector('#requestButton');
    const resultDiv = document.querySelector('#result');

    requestButton.addEventListener('click', () => {
      const page = parseInt(pageInput.value);
      const limit = parseInt(limitInput.value);

      let errorMessage = '';

      if (isNaN(page) || page < 1 || page > 10) {
        errorMessage += 'Номер страницы вне диапазона от 1 до 10. ';
      }

      if (isNaN(limit) || limit < 1 || limit > 10) {
        errorMessage += 'Лимит вне диапазона от 1 до 10. ';
      }

      if (errorMessage) {
        resultDiv.innerHTML = `<p class="error">${errorMessage}</p>`;
      } else {
        const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Ошибка при загрузке данных');
          })
          .then(data => {
            const images = data.map(item => `<img src="${item.download_url}" alt="Image">`);
            const imagesHTML = images.join('');
            resultDiv.innerHTML = imagesHTML;
            localStorage.setItem('lastRequestData', imagesHTML);
          })
          .catch(error => {
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
          });
      }
    });

    // Проверяем наличие сохраненных данных в localStorage и выводим их при загрузке страницы
    const lastRequestData = localStorage.getItem('lastRequestData');
    if (lastRequestData) {
      resultDiv.innerHTML = lastRequestData;
    }