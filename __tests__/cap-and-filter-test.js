const capAndFilter = require('../cap-and-filter.js');

describe('capAndFilter', () => {
  it('takes an array of strings, capitalizes all strings and filters out any string that starts with the letter F/f', () => {
    const array = ['red', 'green', 'flower', 'Factor'];

    expect(capAndFilter(array)).toEqual(['RED', 'GREEN']);
  });
});
