module.exports = app => {
    const tutorials = require("../controllers/test-controller.js");
    const passport = require('passport')
    const passportConf = require('../config/passport-config.js')

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", passport.authenticate('jwt', { session: false}), tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.post("/update", tutorials.update);

    // Delete a Tutorial with id
    router.post("/delete", tutorials.delete);

    // Delete all Tutorials
    router.post("/deleteAll", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};
