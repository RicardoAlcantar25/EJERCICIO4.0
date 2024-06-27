require('dotenv').config(); 
const express = require("express");
const path = require("path");
const usuariosRutas = require("./routes/usuariosRutas");

const app = express();
app.use("/", express.static(path.join(__dirname, "web")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usuariosRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor em http://127.0.0.1:" + port);
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
