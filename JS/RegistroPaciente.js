const conexion = require('../JS/conexion.js');
//const boton=document.querySelector('#btnRegistro');
function cargarDatos(){
    var nombre_paciente =  document.getElementById('input_Nombre').value;
    var apellido_paciente = document.getElementById('input_Apellidos').value;
    var tipo_sangre = document.getElementById('tipoSangre').value;
    var direccion_paciente = document.getElementById('input_Direccion').value;
    var alergia_paciente = document.getElementById('input_Alergia').value;
    var trabajo_paciente = document.getElementById('input_Trabajo').value;
    var deporte_paciente = document.getElementById('input_Deporte').value;
    var telefono_paciente = document.getElementById('input_NumTelefonico').value;
    var antecedentes_paciente = document.getElementById('input_Antecedentes').value;
    var pabellon_paciente = document.getElementById('input_NPabellon').value;
    var cama_paciente = document.getElementById('input_NumCama').value;
    var id="D312"+Math.random().toString(36).slice(2);
    
    //INSTRUCCIONES DE sql
        $query=`INSERT INTO pacientes (id_paciente, nombre_paciente, apellido_paciente, tipo_sangre, direccion, alergia, trabajo, deporte, numero_telefonico, antecedente_familiar, pabellon, numero_cama)
        VALUES ('${id}', '${nombre_paciente}','${apellido_paciente}','${tipo_sangre}','${direccion_paciente}',
        '${alergia_paciente}','${trabajo_paciente}','${deporte_paciente}','${telefono_paciente}','${antecedentes_paciente}','${pabellon_paciente}','${cama_paciente}');`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Datos guardados")}
        })};
