const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('<html><h1>bye</h1></html>')
});


app.listen(PORT, ()=> {
    console.log("Escuchando en el puerto 3000")
})