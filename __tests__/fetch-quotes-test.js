const fetchQuotes = require('../fetch-quotes.js');

describe('fetchQuotes', () => {
  it('returns a single quote from the API', async () => {
    const quote = await fetchQuotes();
    
    const expectation = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };

    expect(quote).toEqual(expectation);
  });
});
