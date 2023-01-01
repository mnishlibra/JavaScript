var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
require('dotenv').config();
const express = require('express');
const app = express();

// linkedin app settings
var LINKEDIN_CLIENT_ID = "77wmu7lpjmbzqp ";
var LINKEDIN_CLIENT_SECRET = "5xj5imzJb3Bf3gXp";
var Linkedin = require('node-linkedin')(LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile', 'rw_company_admin'],
    passReqToCallback: true
},
function (req, accessToken, refreshToken, profile, done) {
    req.session.accessToken = accessToken;
    process.nextTick(function () {
        return done(null, profile);
    });
}));

// for auth

app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

// for callback

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }),
function (req, res) {
    res.redirect('/');
});