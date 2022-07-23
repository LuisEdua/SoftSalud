# ProyectoIntegrador
//PUEDE EXITIR PROBLEMA, POR QUE LA RUTA DEBE DE SER DESDE EL HTML
const conexion = require('./conexion');

//const boton=document.querySelector('#btnRegistro');
function eliminarPaciente(){
    var id_paciente=  document.getElementById('input_ID').value;
    
    //INSTRUCCIONES DE sql
    $query=`DELETE FROM pacientes WHERE id_paciente ='${id_paciente}';`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Dato Eliminado")}
        })};
