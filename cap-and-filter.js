const capAndFilter = (array) => {
  const newArray = array.map(entry => entry.toUpperCase());
  return newArray.filter(entry => !entry.startsWith('F'));
};
  
module.exports = capAndFilter;

