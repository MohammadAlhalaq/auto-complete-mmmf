const jsonObj = require('./names');

const filterData = (pharse) => {
  const filterdData = [];

  jsonObj.forEach((obj) => {
    if (obj.name.toLowerCase().startsWith(pharse.toLowerCase())) {
      filterdData.push(obj.name);
    }
  });
  return filterdData;
};

module.exports = filterData;
