const server = require('../server');

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`${new Date().toISOString()}: koa is listening on port ${PORT}`);
});
