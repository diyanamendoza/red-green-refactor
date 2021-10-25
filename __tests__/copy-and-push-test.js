const copyAndPush = require('../copy-and-push.js');

describe('copyAndPush', () => {
  it('returns a new array with orig array content and new item pushed', () => {
    const numbers = [1, 2, 3];

    expect(copyAndPush(numbers)).toEqual([1, 2, 3, 4]);
  });
});
