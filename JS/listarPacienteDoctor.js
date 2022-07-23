var conexion = require('../JS/conexion.js');
const { BinarySearchTree2 } = require('../JS/arbol2.js');
var BST = new BinarySearchTree2();

function verPacientes(caso) {
    $query = `SELECT id_paciente, nombre_paciente, apellido_paciente FROM pacientes`;
    conexion.query($query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            for (i = 0; i < rows.length; i++) {
                nombreCompleto = rows[i].apellido_paciente + " " + rows[i].nombre_paciente
                id = rows[i].id_paciente;
                BST.insert(nombreCompleto, id);
            }
            if(caso=='m'){
                root = BST.getRootNode();
                BST.inorder(root);
            }
            if (caso == 'e') {
                var nombre = document.getElementById("nombrePaciente").value;
                nombrePaciente = "";
                BST.remove(nombre);
                //root = BST.getRootNode();
                //BST.inorder(root);
            }
        }
    });
}
function elimiar() {

}