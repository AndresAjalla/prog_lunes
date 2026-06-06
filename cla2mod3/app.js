const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("HOME");
});

app.get("/nosotros", (req, res) => {
    res.send("NOSOTROS");
});

app.get("/productos", (req, res) => {
    res.send("PRODUCTOS");
});

app.get("/contacto", (req, res) => {
    res.send("CONTACTO");
});

app.listen(PORT, () => {
    console.log("Servidor funcionando");
});