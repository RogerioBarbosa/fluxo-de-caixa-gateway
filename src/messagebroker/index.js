const amqp = require('amqplib/callback_api');
const { request } = require('http');

let pubChannel = null;
let queue = 'transaction_in';

exports.connect = () => {
  amqp.connect('amqp://rabbitmq', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queue, {
        durable: false
      });
      pubChannel = channel;

    });
  });

  return amqp.connection;

}

exports.sendMsg = (request) => {
  console.log('Enviando transação para o broker')
  var msg = request.body;
  pubChannel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
  return true;
}