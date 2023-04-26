const db = require("../model")
const Notification = db.notification;

exports.create = (data) => {

    console.log(data)


    // Create a SensorData
    const notification = new Notification({
        temperature: data.temperature,
        humidity: data.humidity,
        time: data.time,
        device_id: data.device_id
    });


    // Save User in the database

    notification
        .save()
        .then(data => {
            console.log("saved ")
        })
        .catch(err => {
            console.log("error")
        })

    // post
    //     .save(post)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the post."
    //         });
    //     });
};