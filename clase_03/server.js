// libreria requeridas
const express = require("express");
const Container = require("../clase_02/Container");

const container = new Container("products.json");

// funcion random: la obtuve de developer mozzila
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Inicio de servidor, http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Funciona");
});
