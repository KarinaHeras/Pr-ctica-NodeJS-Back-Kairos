import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { ExtractJwt, Strategy } from 'passport-jwt';
import UsersRepository from './resources/users/repository';
//
const settings = config(); 
// const passportJWT = require("passport-jwt");
// const UserModel = require('./resources/users/model')
// const ExtractJWT = passportJWT.ExtractJwt;
// const LocalStrategy = require('passport-local').Strategy;
// const JWTStrategy   = passportJWT.Strategy;


export default app => {

    app.use(cors());

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
        secretOrKey: settings.parsed.JWT_SECRET_KEY
    }
    
    passport.use(new Strategy(jwtOpts, async (payload, done) => {
        
        var user = await UsersRepository.getByUsername(payload.username);
        
        if (user) {
            return done(null, user);
        } else {
            
            return done(null, false, { message: 'User not found' });
        }
        
    }) );
    
    

   //----
//     passport.use(new LocalStrategy({
//             usernameField: 'username',
//             passwordField: 'password'
//         },
//         function (username, password, cb) {
    
//             //Assume there is a DB module pproviding a global UserModel
//             return UserModel.findOne({username, password})
//                 .then(user => {
//                     if (!user) {
//                         return cb(null, false, {message: 'Incorrect username  or password.'});
//                     }
    
//                     return cb(null, user, {
//                         message: 'Logged In Successfully'
//                     });
//                 })
//                 .catch(err => {
//                     return cb(err);
//                 });
//         }
//     ));
    
//     passport.use(new JWTStrategy({
//             jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//             secretOrKey   : 'your_jwt_secret'
//         },
//         function (jwtPayload, cb) {
    
//             //find the user in db if needed
//             return UserModel.findOneById(jwtPayload.id)
//                 .then(user => {
//                     return cb(null, user);
//                 })
//                 .catch(err => {
//                     return cb(err);
//                 });
//         }
//     ));

}