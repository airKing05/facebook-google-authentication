const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    userName: String,
    userImg: String,
    userSex: String,
    userEmail: String
});

mongoose.model('users', userSchema)