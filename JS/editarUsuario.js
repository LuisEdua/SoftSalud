//PUEDE EXITIR PROBLEMA, POR QUE LA RUTA DEBE DE SER DESDE EL HTML
const conexion = require('../JS/conexion');

//const boton=document.querySelector('#btnRegistro');
function editDatos(){
    var usuario = document.getElementById('input_ID').value;
    input_ID.value = "";
    var pass = document.getElementById('input_PasswordN').value;
    input_PasswordN.value = "";
    var numero_telefonico =  document.getElementById('input_NumTel').value;
    input_NumTel.value = "";
    $query = `SELECT*FROM usuarios`;
    var que="";
    conexion.query($query, function(err, rows) {
        long = rows.length;
        for (i = 0; i < long; i++) {
            console.log(rows[i]);
            if (usuario == rows[i].id_usuario) {
                que = `UPDATE usuarios 
                SET numero_telefonico ='${numero_telefonico}', password_usuario='${pass}' 
                WHERE id_usuario='${usuario}';`;          
            }
        }
    });
    $query=que;
    conexion.query($query, function(err){
        if(!err){
        alert("Registro Actualizado")
        }
    });  
}