
const handelhome = require('./handlers/handelHome');

const htmllink = require('./handlers/htmllinks');

const handelrequests = require('./handlers/handelrequests');

const router = (req, res) => {
  const endpoint = req.url;

  const arrayPath = endpoint.split('/');

  if (endpoint === '/') {
    handelhome(res);
  } else if (arrayPath.includes('public')) {
    htmllink(res, endpoint, arrayPath);
  } else if (endpoint === '/name') {
    handelrequests(req, res);
  } else {
    res.writeHead(404,{'Content-Type':'text/html' });
    res.end("<h1>PAGE NOT FOUND 404</h1>");
  }
};

module.exports = router;
