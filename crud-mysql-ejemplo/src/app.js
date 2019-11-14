const path = require('path');
const express = require('express');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
const app = express();
//importar rutas
const indiceRutas = require('./rutas/index');
//Configuraciones 
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vistas'))

//Middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 8080,
	database: 'crudnodejsmysql'
},'single'));

//usamos las rutas 
app.use('/',indiceRutas);

app.listen(app.get('port'),() => {
	console.log('Esuchando en el puerto 3000');
});