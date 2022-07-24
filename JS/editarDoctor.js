var conexion = require('../JS/conexion.js');

function editDoc(){
    var id = document.getElementById("input_ID").value;
    input_ID.value = "";
    var area_encargada = document.getElementById("area").value;
    area.value = "";
    var especialidad = document.getElementById("especialidad").value;
    especialidad.value = "";
    
    
    //INSTRUCCIONES DE sql
    $query=`UPDATE doctores SET area_encargada ='${area_encargada}', especialidad='${especialidad}' WHERE id_doctor='${id}';`;
        conexion.query($query, (err, rows)=>{
                if(!err){
                    alert("     Datos Actualizados      " )
                }
                else {console.log("error en el query");
                console.log(err);
                return;
            }
        })};