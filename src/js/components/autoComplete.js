import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from './../../data/countries.min.json';

const func = () => {
  const res = [];
  for (let country in countryList) {
    const cities = countryList[country];
    cities.forEach((city) => {
      const str = `${city}, ${country}`;
      console.log(str)
      res.push(str);
    });
  };
  return res;
};

const countries = func();

const autoCompleteJS = new autoComplete({
  selector: '#autoCompleteCountry',
  placeHolder: 'e.g Bali, Indonesia',
  data: {
    src: countries,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
  resultsList: {
    maxResults: 10,
  },
  searchEngine: 'strict', // strict | loose
});

export default autoCompleteJS;
