import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import { fetchCountries } from './js/fetchCountries.js';
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
