//PUEDE EXITIR PROBLEMA, POR QUE LA RUTA DEBE DE SER DESDE EL HTML
const conexion = require('../JS/conexion');

function modificar(que1){
    console.log("QUE: "+que1);
    if (que1 !== null) {
        $query = que1;
        conexion.query($query, function (err) {
            if (!err) {
                alert("Registro Actualizado")
            }
        });
    }
}

//const boton=document.querySelector('#btnRegistro');
function editDatos() {
    var usuario = document.getElementById('input_ID').value;
    input_ID.value = "";
    var passA= document.getElementById('input_PasswordA').value;
    input_PasswordA.value="";
    var pass = document.getElementById('input_PasswordN').value;
    input_PasswordN.value = "";
    var numero_telefonico = document.getElementById('input_NumTel').value;
    input_NumTel.value = "";
    $query = `SELECT*FROM usuarios`;
    conexion.query($query, function (err, rows) {
        long = rows.length;
        for (i = 0; i < long; i++) {
            if (usuario == rows[i].id_usuario && passA == rows[i].password_usuario) {
                if(numero_telefonico.length==10){
                    que1 = `UPDATE usuarios SET numero_telefonico ='${numero_telefonico}', password_usuario='${pass}' WHERE id_usuario='${usuario}';`;
                    modificar(que1)
                }else{
                    que1 = `UPDATE usuarios SET password_usuario='${pass}' WHERE id_usuario='${usuario}';`;
                    modificar(que1)
                }
            }
        }
    });
}