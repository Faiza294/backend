const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const { secretOrKey } = require('./keys')
const db = require("../models");
const User = db.User;

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secretOrKey
}, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findByPk(payload.sub);

        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }
        // Otherwise, return the user
        done(null, user);
    } catch(error) {
        done(error, false);
    }
}));
