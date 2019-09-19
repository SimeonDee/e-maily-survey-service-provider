const express = require("express");
const mongoose = require('mongoose');
// const cookieSession = require("coockie-session");
// const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

//Connecting to mongodb DBase using mongooseJS
mongoose.connect(keys.mongoDBConnStr3, { useNewUrlParser: true });

const app = express();

//Enabling cookie in our app
// passport.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: [keys.cookieKeys]
//     })
// );

//Instructing app to allow passport initialize i.e. enable cookie-session
// app.use(passport.initialize());
// app.use(passport.session());

require('./routes/authRoutes')(app)

// If there is a dynamic port defined by Heroku, use, otherwise use 5000
const PORT = process.env.PORT | 5000
app.listen(PORT);