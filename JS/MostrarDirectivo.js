var conexion= require('../conexion');
function mostrar(){
    var PU= localStorage.getItem(0);
    $query ='select *from usuarios';
    conexion.query($query, function(err, rows){
        document.getElementById('txtNombre').innerHTML="Nombre :"+rows[PU].nombre_usuario;
        document.getElementById('txtApellido').innerHTML="Apellido :"+rows[PU].apellido_usuario;
        document.getElementById('txtArea').innerHTML="Area :"+"???";
        document.getElementById('txtNum').innerHTML="Numero :"+rows[PU].numero_telefonico;
        document.getElementById('txtRango').innerHTML="Rango: "+"???";
    });
}