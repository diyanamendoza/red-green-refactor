const getName = require('../get-name.js');

describe('getName', () => {
  it('takes in an object and returns the name property of the object', () => {
    const dog = { name: 'Blitz' };

    expect(getName(dog)).toEqual('Blitz');
  });
});
