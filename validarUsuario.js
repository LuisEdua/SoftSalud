var conexion = require('./conexion.js');

function validar() {
    var usuario = document.getElementById("input_Usuario").value;
    input_Usuario.value = "";
    var password = document.getElementById("input_Password").value;
    input_Password.value = "";
    $query = `select*from usuarios`;
    conexion.query($query, function(err, rows) {
        long = rows.length;
        for (i = 0; i < long; i++) {
            if (usuario == rows[i].id_usuario && password == rows[i].password_usuario) {
                console.log("Bienvenido "+rows[i].cargo_usuario)
                switch (rows[i].cargo_usuario) {
                    case 'Directivo':
                        localStorage.setItem("NU",rows[i].id_usuario);
                        window.location.href = "./HTML/Director.html";
                        break;
                    case 'Doctor':
                        localStorage.setItem("NU",rows[i].id_usuario);
                        window.location.href = "./HTML/Doctor.html";
                        break;
                    case 'Secretaria':
                        localStorage.setItem("NU",rows[i].id_usuario);
                        window.location.href = "./HTML/Secretaria.html";
                        break;
                    case 'Encargado de Bodega':
                        localStorage.setItem("NU",rows[i].id_usuario);
                        window.location.href = "./HTML/EncargadoBodega.html";
                }
            }else{
                console.log("Usuario invalido")
            }
        }
    });
}