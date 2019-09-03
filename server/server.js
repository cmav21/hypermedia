const express = require("express");
const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const PORT = process.env.PORT || 3000;

const app = express();

// passport.use(new GoogleStrategy());

app.get('/',(req, res)=>{
    res.send('<html><h1>te quiero mucho cesario</h1></html>')
});

app.listen(PORT, ()=> {
    console.log("Escuchando en el puerto 3000")
});