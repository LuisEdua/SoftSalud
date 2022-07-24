const conexion = require('../JS/conexion.js');
//const boton=document.querySelector('#btnRegistro');
function cargarDatos() {
    var nombre_usuario = document.getElementById('Nombre').value;
    Nombre.value = "";
    var apellido_usuario = document.getElementById('Apellidos').value;
    Apellidos.value = "";
    var numero_telefonico = document.getElementById('Telefono').value;
    Telefono.value = "";
    var tipo_sangre = document.getElementById('TipoSanguineo').value;
    TipoSanguineo.value = "";
    var cargo_usuario = document.getElementById('Cargo').value;
    Cargo.value = "";

    var id_valido=false;

    do{
        id_valido=false;
        switch (cargo_usuario) {
            case 'Doctor':
                id_usuario = "D312" + Math.random().toString(36).slice(2);
                password = Math.random().toString(24).slice(2);
                var areaDoctor = document.getElementById('pabellon').value;
                pabellon.value = "";
                var especialidadDoctor = document.getElementById('Especialidad').value;
                Especialidad.value = "";
                que = `INSERT INTO doctores VALUES ('${id_usuario}','${areaDoctor}','${especialidadDoctor}');`;
                break;
            case 'Secretaria':
                id_usuario = "A213" + Math.random().toString(36).slice(2);
                password = Math.random().toString(24).slice(2);
                var areaSecretaria = document.getElementById('areaEncargada').value;
                areaEncargada.value = "";
                que = `INSERT INTO secretario VALUES ('${id_usuario}','${areaSecretaria}');`;
                break;
            case 'Encargado de Bodega':
                id_usuario = "B231" + Math.random().toString(36).slice(2);
                password = Math.random().toString(24).slice(2);
                var bodega = document.getElementById('Bodega').value;
                Bodega.value = "";
                que = `INSERT INTO encargado_bodega VALUES ('${id_usuario}','${bodega}');`;
                break;
            case 'Directivo':
                id_usuario = "D123" + Math.random().toString(36).slice(2);
                password = Math.random().toString(24).slice(2);
                var rango = document.getElementById('Rango').value;
                Rango.value = "";
                var areaDirectivo = document.getElementById('area').value;
                area.value = "";
                que = `INSERT INTO directivo VALUES ('${id_usuario}','${rango}','${areaDirectivo}');`
        }
        $query=`SELECT * FROM usuarios`
        conexion.query($query, function(rows){
            for(var i=0; i<rows.length; i++){
                if(rows[i].id_usuario == id_usuario){
                    id_valido=true;
                }
            }
        });
        console.log(id_valido);
    }while(id_valido);

    console.log(que);

    if (numero_telefonico.length == 10) {
        $query = `INSERT INTO usuarios VALUES ('${id_usuario}','${password}','${nombre_usuario}','${apellido_usuario}','${numero_telefonico}','${tipo_sangre}','${cargo_usuario}');`;
        conexion.query($query, function (err) {
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            }
        });
        $query = que;
        conexion.query($query, function (err) {
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            }
            else {
                alert("Datos guardados");

            }
        });
    }
}
