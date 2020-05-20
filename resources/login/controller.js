const express = require('express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const services = require('../users/services');
const jwt = require('jsonwebtoken');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const jwtSecretKey = 'top_secret';
const router = express.Router();

router.use(passport.initialize());

passport.use(new BasicStrategy(services.verifyUser));
passport.use(new JWTstrategy({
  secretOrKey: jwtSecretKey,
  jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (tokenPayload, done) => done(null, tokenPayload)));

router.post('/', passport.authenticate('basic', { session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, jwtSecretKey);
    res.status(200).json({ token });
});

exports.router = router;