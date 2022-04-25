const messagebroker = require('../messagebroker')


class TransactionService {

  sendMsg(request, response) {
    console.log(request.body);
    messagebroker.sendMsg(request);
  }
}
module.exports = new TransactionService();
