var transaction = require('../service');
var properties = require('../../package.json');

var controllers = {
  about: function (request, response) {
    console.log('Informação sobre aplicação...');
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    }
    response.json(aboutInfo);
  },

  postTransaction: function (request, response) {
    console.log('Recebendo transação...');
    transaction.sendMsg(request, response);
    return response.json("{'status' : 'transação enviada'}");
  }
};

module.exports = controllers;