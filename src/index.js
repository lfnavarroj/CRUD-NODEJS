require('./database');
const app=require('./app');


app.listen(app.get('port')); // se le asigna el puerto en donde se debe ejecutar

console.log('server on port',app.get('port')); //Ejecutar el archivo index.js para levantar el servidor.
