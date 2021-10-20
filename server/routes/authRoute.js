const passport = require('passport');
const express = require('express');
// const router = express.Router();

module.exports = (app) =>{
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));


// accessing the user from the cookies
app.get('/current-user', (req, res) =>{
    res.send(req.user)
});

// logout the user from the particular cookies
app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
})
}