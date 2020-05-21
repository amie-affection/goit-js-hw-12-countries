const basisUrl = 'https://restcountries.eu/rest/v2/name';

export const fetchCountries = inputValue => {
    fetch(`${basisUrl}${inputValue}`)
    .then(response => {return response.json})
};
