const http = require('http');

const router = require('./router');

const port = process.env.PORT || 3030;

const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`now server listining to http://localhost:${port} now`);
});
