var conexion = require('../JS/conexion.js');

function moverPaciente() {
    var id = document.getElementById('input_ID').value;
    input_ID.value = "";
    if (id != "") {
        var cama = document.getElementById('cama').value;
        cama.value = "";
        var pabellon_paciente = document.getElementById('pabellon').value;
        pabellon.value = "";
        $query = `UPDATE pacientes SET pabellon='${pabellon_paciente}', numero_cama='${cama}' WHERE id_paciente='${id}'`;
        conexion.query($query, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                alert("Paciente actualizado");
                window.history.back();
            }
        });
    }else{
        alert("Ingrese ID");
        window.history.back();
    }
}