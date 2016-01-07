const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const staticDir = require('koa-static');
const send = require('koa-send');
const mount = require('koa-mount');
const route = require('koa-route');

const app = koa();

app.use(logger());
app.use(mount('/assets', staticDir(path.join(__dirname, 'build'))));
app.use(route.get('/favicon.ico', function *() {
  this.status = 200;
}));

app.use(route.get('*', function *() {
  yield send(this, 'public/index.html');
}));

module.exports = app;
