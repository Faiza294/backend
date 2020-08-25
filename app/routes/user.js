module.exports = app => {
    const User = require("../controllers/user");
    var router = require("express").Router();

    // login
    router.post("/login", User.login);

    // REGISTER
    router.post("/register", User.register);

    app.use('/api/user', router);

};
