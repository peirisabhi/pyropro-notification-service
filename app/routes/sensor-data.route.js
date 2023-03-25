const {use} = require("express/lib/router");
const user = require("../controller/sensor-data.controller");
module.exports = app => {
    const post = require("../controller/sensor-data.controller");

    let router = require("express").Router();

    // Create a new post
    // router.post("/", post.create);

    // Retrieve all posts
    router.get("/", post.findAll);

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
