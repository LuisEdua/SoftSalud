var conexion= require('./conexion');
function mostrar(){
    var PU= localStorage.getItem(NU);
    $query ='SELECT * FROM infocare.usuarios;';
    conexion.query($query, function(err, rows){
        impN="Nombre: "+rows[PU].nombre_usuario;
        document.getElementById('txtNombre').innerHTML=impN;
        impA="Apellido: "+rows[PU].apellido_usuario;
        document.getElementById('txtApellido').innerHTML=impA;
        impAr="Area: "+"???";
        document.getElementById('txtArea').innerHTML=impAr;
        impNum="Numero: "+rows[PU].numero_telefonico;
        document.getElementById('txtNum').innerHTML=impNum;
        impR="Rango: "+"???";
        document.getElementById('txtRango').innerHTML=impR;
    });
}