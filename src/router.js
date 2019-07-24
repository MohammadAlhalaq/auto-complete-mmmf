
const handelhome = require('./handlers/handelHome');

const htmllink = require('./handlers/htmllinks');

const router = (req, res) => {
  const endpoint = req.url;

  const arrayPath = endpoint.split('/');
  
  console.log(endpoint);
  if (endpoint === '/') {
    handelhome(res);
  } else if (arrayPath.includes('public')) {
    htmllink(res, endpoint);
  }
};

module.exports = router;
