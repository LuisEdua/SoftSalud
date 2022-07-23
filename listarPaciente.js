var conexion=require('./conexion.js');
const {BinarySearchTree}=require('./arbol.js');
var BST=new BinarySearchTree();

function verDiagnostico(){
    $query=`SELECT id_paciente, nombre_paciente, apellido_paciente FROM pacientes`;
    conexion.query($query, (err, rows) => {
        if(err){
            console.error(err);
        }
        else {
            for(i=0; i<rows.length; i++){
                nombreCompleto=rows[i].apellido_paciente+" "+rows[i].nombre_paciente
                id=rows[i].id_paciente;
                BST.insert(nombreCompleto, id);
            }
            root=BST.getRootNode();
            BST.inorder(root);
        }
    });
}