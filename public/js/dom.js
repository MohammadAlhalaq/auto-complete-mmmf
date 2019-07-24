const searchInput = document.querySelector('.inputForm-inputField');

const listOption = document.querySelector('#listOption');

const randerNames = (data) => {
  const convertedData = JSON.parse(data);

  listOption.textContent = '';
  convertedData.forEach((name) => {
    const option = document.createElement('option');
    option.setAttribute('value', name);
    listOption.appendChild(option);
  });
};

searchInput.addEventListener('input', (e) => {
  if (e.target.value.trim() !== '') {
    createXhr('/name', 'POST', e.target.value, randerNames);
  }
});
