const amqp = require("amqplib");
const mqConfig = require("../config/mq.config");

exports.consumeMessages = async () => {
    console.log()
    const connection = await amqp.connect(mqConfig.rabbitMQ.url);
    const channel = await connection.createChannel();

    await channel.assertExchange(mqConfig.rabbitMQ.exchangeName, "direct");

    const q = await channel.assertQueue(mqConfig.rabbitMQ.queueName);

    await channel.bindQueue(q.queue, mqConfig.rabbitMQ.exchangeName, mqConfig.rabbitMQ.notificationRoutingKey);

    channel.consume(q.queue, (msg) => {
        const data = JSON.parse(msg.content);
        console.log(data);
        channel.ack(msg);
    });
}