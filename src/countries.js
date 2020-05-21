const basisUrl = 'https://restcountries.eu/rest/v2/name/';

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
      if (data.length < 10 && data.length > 2) {
        console.log('список объектов');
        }
        if (data.length === 1) {
            console.log('1 объект');
        }
      console.log(data);
    });
};
