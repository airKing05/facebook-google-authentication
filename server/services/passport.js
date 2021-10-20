const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');


// we are asking mongodb id for the particular user 
passport.serializeUser((user, done) => {
    done(null, user.id)
});

// asking data(info) from mongodb for the particular id which we have get form the mongodb
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})



passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: `/auth/google/callback`
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
        .then((isExist) => {
             if (isExist){
                  console.log('user already existing to the data base')
                  done(null, isExist)
             }
             else{
                new User({googleId: profile.id}).save()
                .then((user) => {
                    done(null, user)
                })
             }
        })
       
    }  
    )
);