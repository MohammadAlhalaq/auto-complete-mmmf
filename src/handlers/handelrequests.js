const filterData = require('../logic');

const handelReq = (req, res) => {
  let chunks = '';
  req.on('data', (chunk) => {
    chunks += chunk;
  });
  req.on('end', () => {
    res.writeHead(200, {
      'Content-Type': 'application/Javascript',
    });
    res.end(JSON.stringify(filterData(chunks)));
  });
};

module.exports = handelReq;
