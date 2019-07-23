const path = require('path');

const fs = require('fs');

const handelHome = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Internal Server Error .</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = handelHome;
