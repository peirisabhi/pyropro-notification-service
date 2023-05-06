const {use} = require("express/lib/router");
const user = require("../controller/notification.controller");
module.exports = app => {
    const notification = require("../controller/notification.controller");

    let router = require("express").Router();

    // Create a new post
    router.post("/detections", notification.findAllFireDetections);

    // Retrieve all posts
    router.post("/predictions", notification.findAllFirePredictions);

    // Retrieve a single post with id
    // router.get("/:id", post.findOne);

    // Update a post with id
    // router.put("/:id", post.update);
    //
    // Delete a post with id
    // router.delete("/:id", post.delete);

    // router.get("/file/:name", post.getFile);


    app.use("/api/data", router);
};
