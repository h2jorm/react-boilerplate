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

app.use(route.get('/backend/todos/1234', function *() {
  this.body = {
    title: 'hello',
    content: 'world',
  };
}));

app.use(route.get('/backend/todos', function *() {
  this.body = [
    {id: '1', title: 'hello', content: 'world'},
    {id: '2', title: 'good', content: 'days'},
  ];
}));

app.use(route.get('*', function *() {
  yield send(this, 'build/public/index.html');
}));

module.exports = app;
