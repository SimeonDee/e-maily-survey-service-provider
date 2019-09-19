const passport = require('passport');
const json_data = require('../utilities/my_data.json');

module.exports = (app) => {
    /*Redirect to google account user permission request page.
    Requesting for permission to access user profile and email address*/
    app.get("/auth/google/", passport.authenticate("google", {
        scope: ['profile', 'email']
    }));

    //Redirect URL after user grants permission to access email profile
    app.get("/auth/google/callback", passport.authenticate('google'));

    //Just some test case
    app.get("/", (req,res) => {
        const data = {
            greeting: 'Coming from Express', 
            name: 'Adeyemi Adedoyin S.', 
            someValue: 12345,
            status: 'Connected Successfully to MongoDB'
        };
        res.send(data);  
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });

    app.get("/api/jsondata",(req, res) => {
        res.send(json_data);
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
    });

};