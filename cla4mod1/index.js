
let distancia = 2225000;
let transporte;

if (distancia <= 1000) {
    transporte = "pie";
} else if (distancia <= 10000) {
    transporte = "bicicleta";
} else if (distancia <= 30000) {
    transporte = "colectivo";
} else if (distancia <= 100000) {
    transporte = "auto";
} else {
    transporte = "avion";
}

console.log("Para " + distancia + " metros, el transporte recomendado es: " + transporte);