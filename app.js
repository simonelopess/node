const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');
app.use('/produtos', rotaProdutos);

const rotaPedidos = require('./routes/pedidos');
app.use('/pedidos', rotaPedidos);

module.exports = app;