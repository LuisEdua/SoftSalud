const conexion = require('../JS/conexion');


function busquedaMedicamento(){
    var nombre_medi =  document.getElementById('input_NombreMedicamento').value;
    
    
    //INSTRUCCIONES DE sql
    $query=`SELECT * FROM medicamentos WHERE nombre_medicamento='${nombre_medi}';`;
        conexion.query($query, (err, rows)=>{
                if(!err){
                        var texto =`
                        Nombre : ${rows[0].nombre_medicamento}
                        ID Medicamento : ${rows[0].id_medicamento}
                        Tipo de Medicamento : ${rows[0].tipo_medicamento}
                        Numero de Bodega : ${rows[0].numero_bodega}
                        `
                    alert("     MEDICAMENTO ENCONTRADO      " + texto)
                }
                else {console.log("error en el query");
                console.log(err);
                return;
            }
        })};