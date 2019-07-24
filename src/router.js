
const handelhome = require('./handlers/handelHome');

const router = (req, res) => {
  const endpoint = req.url;
  // const arrayPath = endpoint.split('/');
  // const ext = endpoint.split('.')[1];
  // const extType = {
  // html: 'text/html',
  //   css: 'text/css',
  //   jpg: 'image/jpg',
  //   ico: 'image/x-icon',
  //   png:'image/png',
  //   js: 'application/javascript',
  // }
  if (endpoint === '/') {
    handelhome(res);
  }
};

module.exports = router;
