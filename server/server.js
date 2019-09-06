const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// passport.use(new GoogleStrategy());
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
            console.log({
                accessToken,
                refreshToken,
                profile,
                done
            });
        }
	)
);

// app.use('/', (req, res) => res.send('on ta el oauth'));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

// app.get('/',(req, res)=>{
//     res.send('<html><h1>te quiero mucho cesario</h1></html>')
// });

app.listen(PORT, ()=> {
    console.log("Escuchando en el puerto 3000")
});