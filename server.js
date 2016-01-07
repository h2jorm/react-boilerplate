const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const staticDir = require('koa-static');
const send = require('koa-send');
const mount = require('koa-mount');
const route = require('koa-route');

const app = koa();
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  app.use(logger());
  app.use(mount('/assets', staticDir(path.resolve('build'))));
}

app.use(route.get('*', function *() {
  yield send(this, 'build/public/index.html');
}));

module.exports = app;
