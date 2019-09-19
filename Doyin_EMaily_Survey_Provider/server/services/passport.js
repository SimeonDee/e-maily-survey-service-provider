const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('emailyusers');

// Saves userid from Mongodb to cookie
// passport.serializeUser((user, done) => {
//     done(null,user.id);
// });

// Retrive user with userid extracted from cookie
// passport.deserializeUser((id, done) => {
//     const user = User.findById(id);
//     done(null, user);
// });


//Initializing google Passport Strategy
//Can have this repeated for each passport Strategy, e.g. facebook, LinkedIn, etc
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log("Access Token: ", accessToken);
            console.log("Refresh Token: ", refreshToken);
            console.log("User Profile: ", profile);
                
            // const existingUser = await (User.findOne({googleId: profile.id}));
            // if (existingUser){
            //     done(null, existingUser)
            // } else {
            //     const user = await (new User({googleId: profile.id, fullname: profile.displayName})).save();
            //     done(null, user);
            // }    
        }
    )
);
