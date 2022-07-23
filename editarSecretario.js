var conexion = require('./conexion.js');

function editarSecretario(){
    var id = document.getElementById("input_IDusuario").value;
    input_IDusuario.value = "";
    var area_encargada = document.getElementById("input_AreaEncargada").value;
    input_AreaEncargada.value = "";
    
    
    //INSTRUCCIONES DE sql
    $query=`UPDATE secretario SET area_encargada ='${area_encargada}' WHERE id_secretario ='${id}';`;
        conexion.query($query, (err, rows)=>{
                if(!err){
                    alert("     Datos Actualizados      " )
                }
                else {console.log("error en el query");
                console.log(err);
                return;
            }
        })};
