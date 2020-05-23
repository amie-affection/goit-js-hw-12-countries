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

const countryList = document.querySelector('.country_list');

const markup = function template(params) {

}