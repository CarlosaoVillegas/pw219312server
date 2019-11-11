const path = require();
const express = require('express');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
const app = express();
//importar rutas
const indice
//Configuraciones 
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vistas'))

//Middleware
app.use()

app.listen(app.get('port'),() => {
	console.log('Esuchando en el puerto 3000');
});