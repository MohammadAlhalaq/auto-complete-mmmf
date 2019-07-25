
const { handelHome, handelrequests, htmllinks: htmllink, handleDetaled } = require('./handlers/index');

const router = (req, res) => {
  const endpoint = req.url;

  const arrayPath = endpoint.split('/');

  if (endpoint === '/') {
    handelHome(res);
  } else if (arrayPath.includes('public')) {
    htmllink(res, endpoint, arrayPath);
  } else if (endpoint === '/name') {
    handelrequests(req, res);
  } else if (endpoint === '/detailedName') {
    handleDetaled(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>PAGE NOT FOUND 404</h1>');
  }
};

module.exports = router;
