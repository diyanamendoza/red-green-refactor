const copyAndPush = (array, newLast) => {
  const newArray = [...array, newLast];
  return newArray;
};

module.exports = copyAndPush;
