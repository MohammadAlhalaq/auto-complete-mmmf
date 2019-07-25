const filterdata = require('./../logic');

const handleDetaled = (req, res) => {
  let alldata = '';
  req.on('data', (chunk) => {
    alldata += chunk;
  });
  req.on('end', () => {
    res.writeHead(200, {
      'Type-Content': 'application/Javascript',
    });
    res.end(JSON.stringify(filterdata(alldata, 'submit')));
  });
};
module.exports = handleDetaled;
