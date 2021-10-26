const capAndFilter = (array) => {
  const newArray = [];
  for(let i = 0; i < array.length; i++) {
    !array[i].startsWith('f') && !array[i].startsWith('F') && newArray.push(array[i].toUpperCase());
  }
  return newArray;
};
  
module.exports = capAndFilter;

