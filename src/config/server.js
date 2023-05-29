const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const server = express();

server.use(express.static('public')); // Cargar archivos estaticos

// Configuraciones
server.set('port', process.env.PORT || 3000); // Puerto
server.set('views', path.join(__dirname, '../app/views')); // Lugar donde estaran las vistas

// Middleware
server.use(bodyParser.urlencoded({ extended: false }))

module.exports = server;