import card from './card.hbs';

const basisUrl = 'https://restcountries.eu/rest/v2/name/';
const countryList = document.querySelector('.country_list');
const countryInfo = document.querySelector('.country_info');

export const fetchCountries = inputValue => {
  fetch(`${basisUrl}${inputValue}`)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      }
    })
    .then(data => {
      if (data.length > 10) {
        console.log('много совпадений');
      }
      if (data.length <= 10 && data.length >= 2) {
        const value = data.reduce((acc, country) => {
          return (acc += `<li class="list_item">${country.name}</li>`);
        }, '');

        countryList.innerHTML = value;
        console.log('список объектов');
      }
      if (data.length === 1) {
        const value = data.reduce((acc, country) => {
          return (acc += card(country));
        }, '');

        countryInfo.innerHTML = value;
        console.log('1 объект');
      }

      console.log(data);
    })
    .catch(error => {
      console.log('Not found');
    });
};