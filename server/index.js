const express = require('express');
const app = express();
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

require('./conaction/conact');

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiesKEY]
}))

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoute')(app);

const PORT = process.env.PORT || 9000

app.get('/', (req, res) =>{
    res.send('hi google auth')
});

app.listen(PORT, ()=> {
    console.log(`server is running on port ${9000}`)
})
