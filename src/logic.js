const jsonObj = require('./models/names');

const filterData = (pharse, typeEvent) => {
  if (typeEvent === 'input') {
    const filterdData = new Set();

    jsonObj.forEach((obj) => {
      if (obj.name.toLowerCase().startsWith(pharse.toLowerCase())) {
        filterdData.add(obj.name);
      }
    });
    return Array.from(filterdData);
  }
  const filterdData = [{}];

  jsonObj.forEach((obj) => {
    if (obj.name.toLowerCase().startsWith(pharse.toLowerCase())) {
      filterdData.push(obj);
    }
  });
  return filterdData;
};

module.exports = filterData;
