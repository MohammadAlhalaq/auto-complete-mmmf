const path = require('path');

const fs = require('fs');

const htmllink = (res, endpoint, arrayPath) => {
  const ext = endpoint.split('.')[1];

  const extType = {
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    png: 'image/png',
    js: 'application/javascript',
  };

  const filePath = path.join(__dirname, '..', '..', ...arrayPath);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>Internal Server Error</h1>');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': extType[ext] });
      res.write(file);
      res.end();
    }
  });
};
module.exports = htmllink;
