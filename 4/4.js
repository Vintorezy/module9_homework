const widthInput = document.querySelector('#widthInput');
const heightInput = document.querySelector('#heightInput');
const submitButton = document.querySelector('#submitButton');
const resultDiv = document.querySelector('#result');

submitButton.addEventListener('click', () => {
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    resultDiv.innerHTML = '<p class="error" style="color: red;">Одно из чисел вне диапазона от 100 до 300</p>';
  } else {
    const url = `https://picsum.photos/${width}/${height}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Ошибка при загрузке изображения');
      })
      .then(blob => {
        const imageURL = URL.createObjectURL(blob);
        resultDiv.innerHTML = `<img src="${imageURL}" alt="Image">`;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
      });
  }
});