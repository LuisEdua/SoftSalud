//PUEDE EXITIR PROBLEMA, POR QUE LA RUTA DEBE DE SER DESDE EL HTML
const conexion = require('../JS/conexion');

//const boton=document.querySelector('#btnRegistro');
function eliminarMedicamento(){
    var id_medicamento=  document.getElementById('input_ID').value;
    

    //INSTRUCCIONES DE sql
    $query=`DELETE FROM medicamentos WHERE id_medicamento ='${id_medicamento}';`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Dato Eliminado")}
        })};
