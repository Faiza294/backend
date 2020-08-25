var jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const { secretOrKey } = require('../config/keys')
const bcrypt = require("bcryptjs");


// login
exports.login = (req, res) => {
    console.log(req.body.email)

    // When a user tries to sign in this code runs
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async function(dbUser) {
        // If there's no user with the given email
        console.log(dbUser)
        if (!dbUser) {
            res.status(500).send({
                msg: 'Email is not registered!'
            });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
       else if (!await bcrypt.compare(req.body.password,dbUser.password)) {
            res.status(500).send({
                msg: 'Password is incorrect!'
            });
        }
        else {
            // If none of the above, return the user
            const id = dbUser.id
            const user = { id }
            const accessToken = jwt.sign({
                iss: "falconWing",
                sub: id,
                iat: new Date().getTime(),
                exp: new Date().setDate( new Date().getDate() + 1)
            }, secretOrKey)
            res.status(200).send({
                userData:dbUser,
                accessToken: accessToken
            });
        }
    });
};

//register
exports.register = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async function(dbUser) {
        // If there's no user with the given email
        if (dbUser) {
            return res.status(500).send({
                msg: 'User already exist!'
            });
        } else {
            const hash = await bcrypt.hash(req.body.password, 10)
            const user = {
                email: req.body.email,
                password: hash,
                first_name: req.body.first_name,
                middle_initial: req.body.middle_initial,
                last_name: req.body.last_name,
                job_title: req.body.job_title,
                address: req.body.address,
                zip_code: req.body.zip_code,
                city: req.body.city,
                created_by: req.body.created_by,
                modified_by: req.body.modified_by,
                user_interest_id: req.body.user_interest_id,
                country_id: req.body.country_id,
                state_id: req.body.state_id,
                status_id: req.body.status_id,
                role_id: req.body.role_id
            }
            User.create(user).then(function(user) {
                res.status(200).send({
                    msg: 'Account has been created',
                    data: user
                });
            }).catch(function(err) {
                res.json(err);
            });
        }
    }).catch(function(err) {
        res.json(err);
    });
};

