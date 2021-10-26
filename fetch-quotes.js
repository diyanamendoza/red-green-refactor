const fetch = require('cross-fetch');

const fetchQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();
  const { character, quote, image } = body[0];
  return { 'name': character, 'text': quote, image };
};
  
module.exports = fetchQuotes;
  
