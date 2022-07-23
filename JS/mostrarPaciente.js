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
            document.getElementById("diagnostico").innerHTML="Diagnostico: "+ rows[0].diagnostico;
            document.getElementById("medicacion").innerHTML="Medicacion: "+ rows[0].medicacion;
        }
    });
    localStorage.removeItem("id");
}