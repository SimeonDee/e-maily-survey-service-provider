const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    fullname: String
});

mongoose.model('emailyusers', userSchema);



