var conexion = require('./conexion.js');

function editarDoctor() {
    var id = document.getElementById("input_IDusuario").value;
    input_IDusuario.value = "";
    var area_encargada = document.getElementById("input_AreaEncargada").value;
    input_AreaEncargada.value = "";
    var especialidad = document.getElementById("input_Especialidad").value;
    input_Especialidad.value = "";
    $query = `select*from doctores`;
    conexion.query($query, function(err, rows) {
        long = rows.length;
        for (i = 0; i < long; i++) {
            console.log(rows[i]);
            if (id == rows[i].id_doctor) {
                $query = `UPDATE doctores SET area_encargada ='${area_encargada}', especialidad='${especialidad}' WHERE id_doctor='${id}';`;
                alert("Registro Actualizado")
            }else{
                alert("Usuario invalido")
            }
        }
    });
}

function editDoc(){
    var id = document.getElementById("input_IDusuario").value;
    input_IDusuario.value = "";
    var area_encargada = document.getElementById("input_AreaEncargada").value;
    input_AreaEncargada.value = "";
    var especialidad = document.getElementById("input_Especialidad").value;
    input_Especialidad.value = "";
    
    
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
