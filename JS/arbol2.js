var conexion=require('../JS/conexion.js');

var cond=true;

class Node
{
    constructor(data, id)
    {
        this.data = data;
        this.id=id;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree2
{
    constructor()
    {
        // root of a binary search tree
        this.root = null
        this.mostrar=null;
    }

    // insert(data)
    insert(data, id)
    {
        var newNode = new Node(data, id)
        if (this.root === null)
        {
            this.root = newNode
        }
        else 
        {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
            {
                node.left = newNode
            }
            else
            {
                this.insertNode(node.left, newNode)
            }
        }
        else
        {
            if(node.right === null)
            {
                node.right = newNode
            }
            else
            {
                this.insertNode(node.right,newNode)
            }
        }
    }
    
    eliminarPaciente(id_paciente){
        document.getElementById(id_paciente).style.display ='none';
        $query=`DELETE FROM pacientes WHERE id_paciente ='${id_paciente}';`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Dato Eliminado")}
        })
    }

    // remove(data)
    remove(data)
    {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, key)
    {
        if(node === null)
        {
            return null
        }
        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key)
            return node
        }
        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key)
            return node
        }
        else
        {
            if(cond){
                cond=false;
                id=node.id;
                this.eliminarPaciente(id);
            }
            if(node.left === null && node.right === null)
            {
                this.eliminarPaciente(node.id);
            }
            if(node.left === null)
            {
                node = node.right
                return node
            }
            else if(node.right === null)
            {
                node = node.left
                return node
            }
            var aux = this.findMinNode(node.right)
            node.data = aux.data
            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }

    //findMinNode(node)
    findMinNode(node)
    {
        if(node.left === null)
            return node
        else
            return this.findMinNode(node.left)
    }

    //getRootNode()
    getRootNode()
    {
        return this.root
    }

    // inorder(node)
    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            $query=`SELECT*FROM pacientes WHERE id_paciente='${node.id}'`;
            conexion.query($query, (err, rows) => {
                var newDiv=document.createElement("div");
                var br1=document.createElement("br");
                var br2=document.createElement("br");
                var br3=document.createElement("br");
                var br4=document.createElement("br");
                var br5=document.createElement("br");
                newDiv.className="div_paciente";
                newDiv.setAttribute("id", node.id);
                var id=node.id;
                var pNomb=document.createTextNode("Nombre: "+rows[0].nombre_paciente);
                var pApellido=document.createTextNode("Apellido: "+rows[0].apellido_paciente);
                var pTipoSangre=document.createTextNode("Tipo de Sangre: "+rows[0].tipo_sangre);
                var pPabellon=document.createTextNode("Pabellon: "+rows[0].pabellon);
                var pCama=document.createTextNode("Numero de Cama: "+rows[0].numero_cama);
                var pDiagnostico=document.createTextNode("Diagnostico: ");
                var diagnostico=document.createTextNode(rows[0].diagnostico);
                var newDiv1=document.createElement("div");
                var btnMostrarPaciente=document.createElement("button");
                btnMostrarPaciente.setAttribute("id", "btnMostrarPaciente");
                btnMostrarPaciente.onclick=()=>{localStorage.setItem("id", JSON.stringify(id));
                window.location.href="../HTML/MostrarPaciente.HTML";};
                btnMostrarPaciente.textContent="Mostrar Paciente";
                var btnDiagnosticar=document.createElement("button");
                btnDiagnosticar.setAttribute("id", "btnDiagnosticar");
                btnDiagnosticar.onclick=()=>{localStorage.setItem("id", JSON.stringify(id));
                window.location.href="../HTML/Diagnostico.HTML";};
                btnDiagnosticar.textContent="Dar Diagnostico";
                newDiv1.appendChild(pNomb);
                newDiv1.appendChild(br1);
                newDiv1.appendChild(pApellido);
                newDiv1.appendChild(br2);
                newDiv1.appendChild(pTipoSangre);
                newDiv1.appendChild(br3);
                newDiv1.appendChild(pPabellon);
                newDiv1.appendChild(br4);
                newDiv1.appendChild(pCama);
                newDiv1.appendChild(br5);
                newDiv1.appendChild(pDiagnostico);
                newDiv1.appendChild(diagnostico);
                newDiv.appendChild(newDiv1);
                var newDiv2=document.createElement("div");
                newDiv2.setAttribute("id","botones");
                newDiv2.appendChild(btnMostrarPaciente);
                newDiv2.appendChild(btnDiagnosticar);
                newDiv.appendChild(newDiv2);
                document.body.appendChild(newDiv);
            });
            this.inorder(node.right);
        }
    }

    // preorder(node)
    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    // postorder(node)
    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }

    // search(node, data)
    search(node, data)
    {
        if(node === null)
        {
            return null
        }
        else if(data < node.data)
        {
            return this.search(node.left, data)
        }
        else if(data > node.data)
        {
            return this.search(node.right, data)
        }
        else
        {
            return node
        }
    }
}

module.exports={BinarySearchTree2};