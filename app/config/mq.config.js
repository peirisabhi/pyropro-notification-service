module.exports = {
    rabbitMQ: {
        url: "amqp://localhost",
        exchangeName: "pyropro",
        queueName: "PyroproNotificationQueue",
        // notificationRoutingKey: "pyropro.notification",
        notificationRoutingKey: "PyroproNotificationQueue",
    },
};
