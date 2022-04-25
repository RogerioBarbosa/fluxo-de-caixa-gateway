const messagebroker = require('../messagebroker')

exports.sendMsg = (request) => {
  console.log('Enviando tansação...');
  messagebroker.sendMsg(request);
}

