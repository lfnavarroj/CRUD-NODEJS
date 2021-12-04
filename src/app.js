const express=require('express'); //Para llamar la dependencia que se utilizará
const morgan=require('morgan'); // Permite leer las peticiones del servidor

const app=express(); // Ejecutamos la dependencia y se asigna la variable app

app.set('port',process.env.PORT || 4000);

app.use(morgan('dev')); // Le indicamos al servidor para que empiece a usar la dependencia morgan

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/employees',require('./routes/employees.routes'))

module.exports=app; //Exportando el servidor para el resto del proyecto.