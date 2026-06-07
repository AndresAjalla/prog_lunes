const express = require('express');
const session = require('express-session');

const app = express();

app.use(
    session({
        secret: 'clave-super-secreta-12345',
        resave: false,
        saveUninitialized: true
    })
);

// Ruta que escribe una variable de sesión
app.get('/guardar', (req, res) => {

    req.session.nombre = 'Andres';

    res.send('Variable de sesión guardada');

});

// Ruta que muestra la variable de sesión
app.get('/mostrar', (req, res) => {

    res.send(`Nombre guardado en sesión: ${req.session.nombre}`);

});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});