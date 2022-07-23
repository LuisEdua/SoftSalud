const conexion = require('./conexion');

//const boton=document.querySelector('#btnRegistro');
function eliminarUsuario(){
    var id_usuario =  document.getElementById('input_IDUsuario').value;
    input_IDUsuario.value="";
    //var tipo_sangre = document.getElementById('TipoSanguineo').value;
    
    //INSTRUCCIONES DE sql
    $query=`SELECT*FROM usuarios WHERE id_usuario ='${id_usuario}';`;
        conexion.query($query, (err, rows) =>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {
                    alert(rows[0].cargo_usuario+" eliminado");
                }
        })};
        $query=`DELETE FROM usuarios WHERE id_usuario ='${id_usuario}';`;
