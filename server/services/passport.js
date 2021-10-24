const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
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



// passport authentication though google 

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: `/auth/google/callback`
    },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            User.findOne({ userId: profile.id })
                .then((isExist) => {
                    if (isExist) {
                        console.log('user already existing to the data base')
                        done(null, isExist)
                    }
                    else {
                        new User({
                            userId: profile.id,
                            userName: profile._json.name,
                            userImg: profile._json.picture,
                            userSex: profile._json.gender,
                            userEmail: profile._json.email

                        }).save()
                            .then((user) => {
                                done(null, user)
                            })
                    }
                })
        }
    )
);



// passport authentication through facebook

passport.use(new FacebookStrategy({
    clientID: keys.facebookAppId,
    clientSecret: keys.facebookAppSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photo', 'email']
},
    (accessToken, refreshToken, profile, done) => {
        console.log(profile, done)
        User.findOne({ userId: profile.id })
            .then((isExist) => {
                if (isExist) {
                    console.log('user already existing to the data base')
                    done(null, isExist)
                }
                else {
                    new User({
                        userId: profile.id,
                        userName: profile._json.name,
                        userImg: profile._json.picture,
                        userSex: profile._json.gender,
                        userEmail: profile._json.email

                    }).save()
                        .then((user) => {
                            done(null, user)
                        })
                }
            })
    }
));