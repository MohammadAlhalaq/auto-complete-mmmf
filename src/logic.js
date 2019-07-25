const jsonObj = require('./models/names');

const filterData = (pharse) => {
  const filterdData = new Set();

  jsonObj.forEach((obj) => {
    if (obj.name.toLowerCase().startsWith(pharse.toLowerCase())) {
      filterdData.add(obj.name);
    }
  });

  return Array.from(filterdData);
};

module.exports = filterData;
