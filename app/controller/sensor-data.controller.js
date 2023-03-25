const db = require("../model")
const SensorData = db.sensorData;

// const fileUpload = require("express-fileupload");
// const path = require("path");
// const fileConfig = require("../config/file.config");



// Retrieve all post from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};

    SensorData.find({})
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



