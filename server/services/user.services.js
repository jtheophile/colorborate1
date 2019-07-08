module.exports = function(app) {
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require("../models/user/user.model");
const bcrypt = require("bcryptjs");

//generate salt
const salt = bcrypt.genSaltSync(10);

//stores local current user info
passport.serializeUser(serializeUser);

function serializeUser(user, done) {
   done(null, user);
 }

passport.deserializeUser(deserializeUser);


function deserializeUser(user, done) {
   userModel.findUserById(user._id).then(
     function(user) {
       done(null, user);
     },
     function(err) {
       done(err, null);
     }
   );
 }

    //Register
    app.post("/api/register", async (req, res) =>{
        const user = req.body;
        //encrypt user password
        user.password = bcrypt.hashSync(user.password, salt); //rewrite pw to encrypted version
        const data = await userModel.createUser(user);
        req.login(data, () => {
            res.json(data);
        });
    });

    //final all users
    app.get("/api/users", async (req, res) => {
        const data = await userModel.findAllUsers();
        res.json(data);
  });  
}