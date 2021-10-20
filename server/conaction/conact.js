const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI, ()=>{
    console.log("connection successfully with mongoDB")
})