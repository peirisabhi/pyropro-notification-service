const express = require("express");
// const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4201"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// app.use(fileUpload());

// const sensorDataSubscriber = require("./app/subscriber/sensor-data.subscriber")
// sensorDataSubscriber.connectToBroker();
// sensorDataSubscriber.subscribeToTopic("sensor-data");

const db = require("./app/model");


db.mongoose
    .connect(db.url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to modjoul backend application."});
});

require("./app/routes/notification.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});