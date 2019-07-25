/* eslint-disable no-undef */

const searchInput = document.querySelector('.inputForm-inputField');

const searchBtn = document.querySelector('.inputForm-searchBtn');

const listOption = document.querySelector('#listOption');

const div = document.querySelector('.main-result');

const randerNames = (data, status, eventType) => {
  if (status !== 200 && !data) {
    const head = document.querySelector('.head');
    const errorMessage = document.createElement('span');
    let message;
    switch (status) {
      case 404: message = 'xhr 404 Page Not Found';
        break;
      case 500: message = 'xhr 500 Server Error';
        break;
      default: message = 'xhr ERROR';
    }

    errorMessage.textContent = message;
    head.appendChild(errorMessage);
    return;
  }
  const convertedData = JSON.parse(data);
  if (eventType === 'input') {
    listOption.textContent = '';
    convertedData.forEach((name) => {
      const option = document.createElement('option');
      option.setAttribute('value', name);
      listOption.appendChild(option);
    });
  } else if (eventType === 'submit') {
    div.textContent = '';
    convertedData.forEach((item, index) => {
      if (index !== 0) {
        const chiledDiv = document.createElement('div');

        const nameh1 = document.createElement('span');

        const company = document.createElement('span');

        const gender = document.createElement('span');

        const balance = document.createElement('span');

        const nameheader = document.createElement('h4');

        const companyheader = document.createElement('h4');

        const genderheader = document.createElement('h4');

        const balanceheader = document.createElement('h4');

        chiledDiv.classList.add('chiledContainer');
        nameh1.classList.add('name');

        nameh1.textContent = `${item.name}`;
        nameheader.textContent = 'Name: ';
        gender.textContent = `${item.gender}`;
        genderheader.textContent = 'Gender: ';

        company.textContent = `${item.company}`;
        companyheader.textContent = 'company: ';

        balance.textContent = `${item.balance}`;
        balanceheader.textContent = 'Balance: ';


        chiledDiv.appendChild(nameheader);
        chiledDiv.appendChild(nameh1);

        chiledDiv.appendChild(genderheader);
        chiledDiv.appendChild(gender);

        chiledDiv.appendChild(companyheader);
        chiledDiv.appendChild(company);

        chiledDiv.appendChild(balanceheader);
        chiledDiv.appendChild(balance);

        div.appendChild(chiledDiv);
      }
    });
  }
};

searchInput.addEventListener('keypress', (code) => {
  if (code.key === 'Enter') {
    const { value } = searchInput;
    if (value.trim() !== '') createXhr('/detailedName', 'POST', value, randerNames, 'submit');
  }
});
searchInput.addEventListener('input', (e) => {
  if (e.target.value.trim() !== '') createXhr('/name', 'POST', e.target.value, randerNames, 'input');
});

function submitfn() {
  const { value } = searchInput;
  if (value.trim() !== '') createXhr('/detailedName', 'POST', value, randerNames, 'submit');
}

searchBtn.onclick = submitfn;
