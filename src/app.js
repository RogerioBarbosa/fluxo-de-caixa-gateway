const express = require('express');
const routes = require('./routes');
const messagebroker = require('./messagebroker');
const { request } = require('http');

class App {
  express;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.express.use('/', routes);
    messagebroker.connect();
  }

}

module.exports = new App().express;