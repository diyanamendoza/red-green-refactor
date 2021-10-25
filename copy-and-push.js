const copyAndPush = (array, newLast) => {
  const copy = array;
  copy.push(newLast);
  return copy;
};

module.exports = copyAndPush;
