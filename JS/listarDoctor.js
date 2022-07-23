var conexion=require('../JS/conexion.js');
const {BinarySearchTree3}=require('../JS/arbol3.js');
var BST=new BinarySearchTree3();

function verDoctores(){
    $query=`SELECT*FROM usuarios WHERE cargo_usuario='Doctor'`;
    conexion.query($query, (err, rows) => {
        if(err){
            console.log(err);
        }
        else {
            for(i=0; i<rows.length; i++){
                nombreCompleto=rows[i].apellido_usuario+" "+rows[i].nombre_usuario;
                id=rows[i].id_usuario;
                BST.insert(nombreCompleto, id);
            }
            root=BST.getRootNode();
            BST.inorder(root);
        }
    });
}

function volver() {
    
}