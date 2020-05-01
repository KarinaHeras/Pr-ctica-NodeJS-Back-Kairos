'use strict'

 const bodyParser = require('body-parser');
const passport = require('passport');
const BasicStrategy  = require('passport-http');
const Strategy = require('passport-http');
const ExtractJwt = require('passport-jwt');
const UsersRepository = require('./resource/user/repository');

const settings = config();

module.export =  app => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(passport.initialize());

    passport.use(new BasicStrategy(async (username, password, done) => {
        const user = await UsersRepository.getByUsername(username);
        if (!user) {
            return done(null, false, {message: 'User not found'});
        }
    
        const verifyPass = await user.isValidPassword(password);
        if (verifyPass) {
            return done(null, user);
        }else{
            return done(null, false, {message: 'Incorrect password'});
        }
    }));

    const jwtOpts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        SECRET_TOKEN : 'miclavedetokens'

    }
    
    passport.use(new Strategy(jwtOpts, async (payload, done) => {
        
        var user = await UsersRepository.getByUsername(payload.username);
        
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'User not found' });
        }
        
    }) );
    
}




