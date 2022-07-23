const conexion = require('../JS/conexion.js');

//const boton=document.querySelector('#btnRegistro');
function agregarMedicamentos(){
    var nombre_medicamento =  document.getElementById('input_NombreMedicamento').value;
    input_NombreMedicamento.value = "";
    var tipo_medicamento = document.getElementById('tipoMedicamento').value;
    tipoMedicamento.value = "Seleccionar";
    var numero_bodega =  document.getElementById('bodega').value;
    bodega.value = "Seleccionar";
    var id=Math.random().toString(8).slice(2);
    //var tipo_sangre = document.getElementById('TipoSanguineo').value;
    
    //INSTRUCCIONES DE sql
    $query=`INSERT INTO medicamentos (id_medicamento,nombre_medicamento,tipo_medicamento,numero_bodega) 
            VALUE ('${id}','${nombre_medicamento}','${tipo_medicamento}','${numero_bodega}');`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Datos registrados Exitosamente")}
        })};