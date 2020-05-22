import './styles.css';
import { fetchCountries } from './fetchCountries.js';
import lodash from 'lodash';

let countries;

const input = document.querySelector('.searchInput');
// console.log(input);
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);

const markup = (countries) => {
  const countryList = document.querySelector('.result');
  console.log(countries);
  const value = countries.reduce((acc, country) => {
    return acc += `<li class='list_item'>${country}</li>`
  }, '');
  console.log(value);
};