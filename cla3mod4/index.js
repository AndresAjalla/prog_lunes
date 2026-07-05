const express = require("express");
const pool = require("./bd");

const app = express();

async function conectar() {
    try {
        await pool.query("SELECT 1");
        console.log("Conexión a MySQL exitosa");
    } catch (error) {
        console.error("Error al conectar a MySQL:", error);
    }
}

conectar();

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});