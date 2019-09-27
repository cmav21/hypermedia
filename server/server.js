const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require("./models/user");
require('./services/passport');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ keys.cookieKey ]
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
authRoutes(app);

app.listen(PORT, ()=> {
    console.log(`Escuchando en el puerto ${PORT}`);
});