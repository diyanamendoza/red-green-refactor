const fetchQuotes = require('../fetch-quotes.js');
const fetch = require('cross-fetch');

jest.mock('cross-fetch');

describe('fetchQuotes', () => {
  it('returns a single quote from the API', async () => {
    fetch.mockResolvedValue({
      json: async () => [
        {
          'character': 'Bender',
          'quote': 'Computer dating: it\'s just like pimping except you rarely have to use the\nterm \'upside your head\'.',
          'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        }
      ]
    });

    const quote = await fetchQuotes();
    
    const expectation = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };

    expect(quote).toEqual(expectation);
  });
});
