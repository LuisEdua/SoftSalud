var conexion = require('../JS/conexion');
function mostrarDirector() {
    var PU = JSON.parse(localStorage.getItem("IU"));
    $query = `select *from usuarios where id_usuario='${PU}'`;
    conexion.query($query, function (err, rows) {
        document.getElementById('txtNombre').innerHTML = "Nombre :" + rows[0].nombre_usuario;
        document.getElementById('txtApellido').innerHTML = "Apellido :" + rows[0].apellido_usuario;
        document.getElementById('txtNumero').innerHTML = "Numero :" + rows[0].numero_telefonico;
    });
    $query = `select * from directivo where id_directivo='${PU}'`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            document.getElementById('txtArea').innerHTML = "Area: " + rows[0].area_encargada;
            document.getElementById('txtRango').innerHTML = "Rango: " + rows[0].rango;
        }
    });
}

function mostrarDoctor(){
    var PU = JSON.parse(localStorage.getItem("IU"));
    $query = `select *from usuarios where id_usuario='${PU}'`;
    conexion.query($query, function (err, rows) {
        document.getElementById('txtNombre').innerHTML = "Nombre :" + rows[0].nombre_usuario;
        document.getElementById('txtApellido').innerHTML = "Apellido :" + rows[0].apellido_usuario;
        document.getElementById('txtNumero').innerHTML = "Numero :" + rows[0].numero_telefonico;
        document.getElementById('txtSangre').innerHTML = "Tipo de Sangre :" + rows[0].tipo_sangre;
    });
    $query = `select * from doctores where id_doctor='${PU}'`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            document.getElementById('txtArea').innerHTML = "Area: " + rows[0].area_encargada;
            document.getElementById('txtEspecialidad').innerHTML = "Especialidad: " + rows[0].especialidad;
        }
    });
}

function mostrarSecretaria(){
    var PU = JSON.parse(localStorage.getItem("IU"));
    $query = `select *from usuarios where id_usuario='${PU}'`;
    conexion.query($query, function (err, rows) {
        document.getElementById('txtNombre').innerHTML = "Nombre :" + rows[0].nombre_usuario;
        document.getElementById('txtApellido').innerHTML = "Apellido :" + rows[0].apellido_usuario;
        document.getElementById('txtNumero').innerHTML = "Numero :" + rows[0].numero_telefonico;
    });
    $query = `select * from secretario where id_secretario='${PU}'`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            document.getElementById('txtArea').innerHTML = "Area: " + rows[0].area_encargada;
        }
    });
}

function mostrarEncargado(){
    var PU = JSON.parse(localStorage.getItem("IU"));
    $query = `select *from usuarios where id_usuario='${PU}'`;
    conexion.query($query, function (err, rows) {
        document.getElementById('txtNombre').innerHTML = "Nombre :" + rows[0].nombre_usuario;
        document.getElementById('txtApellido').innerHTML = "Apellido :" + rows[0].apellido_usuario;
        document.getElementById('txtNumero').innerHTML = "Numero :" + rows[0].numero_telefonico;
    });
    $query = `select * from encargado_bodega where id_encargado='${PU}'`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            document.getElementById('txtArea').innerHTML = "Bodega: " + rows[0].bodega_asignada;
        }
    });
}