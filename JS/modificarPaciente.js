var conexion=require('../JS/conexion.js');

function mostrarPaciente(){
    var id=JSON.parse(localStorage.getItem("id"));
    console.log("Mostrar Paciente con ID: "+id);
    $query=`SELECT * FROM PACIENTES WHERE id_paciente='${id}'`;
    conexion.query($query, (err, rows)=>{
        if(err){
            console.log(err);
        }else{
            document.getElementById("nombre").innerHTML="Nombre: " + rows[0].nombre_paciente;
            document.getElementById("apellido").innerHTML="Apellido: " + rows[0].apellido_paciente;
            document.getElementById("direccion").innerHTML="Direccion: " + rows[0].direccion;
            document.getElementById("sangre").innerHTML="Tipo de Sangre: "+ rows[0].tipo_sangre;
            document.getElementById("pabellon").innerHTML="Pabellon: "+ rows[0].pabellon;
            document.getElementById("cama").innerHTML="Numero de Cama: "+ rows[0].numero_cama;
        }
    });
}
function agregarDiagnostico(){
    var diagnostico=document.getElementById('input_diagnostico').value;
    input_diagnostico.value="";
    var id=document.getElementById('id_paciente');
    console.log(id);
    $query=`UPDATE pacientes SET diagnostico='${diagnostico}' WHERE id_paciente='${id}'`;
    conexion.query($query, function(err){
        if(err){
            console.log(err);
        }else{
            alert("Diagnostico agregado");
        }
    });
}
function agregarMedicacion(){
    var medicacion=document.getElementById('input_medicacion').value;
    input_medicacion.value="";
    var id=document.getElementById('id_paciente');
    console.log(id);
    $query=`UPDATE pacientes SET medicacion='${medicacion}' WHERE id_paciente='${id}'`;
    conexion.query($query, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Medicacion agregada");
        }
    });
}