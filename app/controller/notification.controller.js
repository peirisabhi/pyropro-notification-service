const db = require("../model")
const Notification = db.notification;

// const fileUpload = require("express-fileupload");
// const path = require("path");
// const fileConfig = require("../config/file.config");


// Create and Save a notification
exports.create = (req, res) => {

    // // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({message: "title can not be empty!"});
    //     return;
    // }
    //
    // if (!req.files) {
    //     return res.status(400).send("No images were uploaded.");
    // }

    //upload file
    // const file = req.files.image;
    // const fileName = Date.now() + "_" + file.name.trim()
    // const savePath = fileConfig.path + fileName;
    //
    // console.log(savePath)

    // file.mv(savePath, (err) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(500).send(err);
    //     }
    //     // return res.send({status: "success", path: savePath});
    // });

    // Create a post
    const post = new Notification({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        time: req.body.time,
        device_id: req.body.device_id,
        type: req.body.type,
    });

    console.log(post)


    // Save User in the database
    post
        .save(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the post."
            });
        });
};



// Retrieve all post from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};

    Notification.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });
};



