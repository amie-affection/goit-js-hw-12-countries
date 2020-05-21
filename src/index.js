import './styles.css';
import { fetchCountries } from './countries.js';
import debounce from 'lodash';

const input = document.querySelector('.searchInput');
input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(input.value);
  }, 300),
);
