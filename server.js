const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const clienteRoutes = require('./resources/cliente/routes');
// habilitar/permitir que um front se conecte ao back
const cors = require('cors');

const app = express();

// habilitar/permitir que um front se conecte ao back
app.use(cors());

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(clienteRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
