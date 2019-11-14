const express = require ('express');
const rutas = express.Router();

const customerController = require('../controllers/customersControllers');

//rutas.get('/', (req,res)=>{
//	res.send("hola node");
//});

rutas.get('/',customersControllers.list);

module.exports = rutas;