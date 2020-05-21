import './styles.css';
import { fetchCountries } from './countries.js';
import lodash from 'lodash';

const input = document.querySelector('.searchInput');
// console.log(input);
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 300),
);
