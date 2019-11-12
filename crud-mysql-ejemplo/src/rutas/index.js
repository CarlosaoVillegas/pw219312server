const express = require ('express');
const rutas = express.Router();

rutas.get('/', (req,res)=>{
	res.send("hola node");
});

module.exports = rutas;