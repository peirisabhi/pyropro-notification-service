const db = require("../model")
const Notification = db.notification;

exports.create = (data) => {

    // Create a notification
    const notification = new Notification({
        temperature: data.temperature,
        humidity: data.humidity,
        time: data.time,
        device_id: data.device_id
    });

    notification
        .save()
        .then(data => {
            console.log("saved " + data)
        })
        .catch(err => {
            console.log(err.message)
        })
};