const mysql= require('mysql2');

const conection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'InfoCare',
    port: '3306'
});
conection.connect(function(err){
    if (err){
        console.log(err.code);
        console.log(err.fatal);
        return;
    }
    else{
        console.log('Conexion exitosa')
    }
})
module.exports = conection;