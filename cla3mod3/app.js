const express = require("express");
const { engine } = require("express-handlebars");
require("dotenv").config();

const app = express();

const PORT = 3000;

// Configuración Handlebars
app.engine("hbs", engine({
    extname: ".hbs"
}));

app.set("view engine", "hbs");
app.set("views", "./views");

// Middleware para leer formularios
app.use(express.urlencoded({ extended: true }));

// HOME
app.get("/", (req, res) => {
    res.send("HOME");
});

// NOSOTROS
app.get("/nosotros", (req, res) => {
    res.send("NOSOTROS");
});

// PRODUCTOS
app.get("/productos", (req, res) => {
    res.send("PRODUCTOS");
});

// CONTACTO
app.get("/contacto", (req, res) => {
    res.render("contacto");
});

// FORMULARIO
app.post("/contacto", (req, res) => {

    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    res.render("contacto", {
        message: "Formulario enviado correctamente"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});