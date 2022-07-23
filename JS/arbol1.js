var conexion=require('../JS/conexion.js');

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
class BinarySearchTree1
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
            if(node.left === null && node.right === null)
            {
                node = null
                return node
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
                newDiv.onclick = ()=>{localStorage.setItem("id", JSON.stringify(id));
                window.location.href="MostrarPaciente.HTML";};
                var pNomb=document.createTextNode("Nombre: "+rows[0].nombre_paciente);
                var pApellido=document.createTextNode("Apellido: "+rows[0].apellido_paciente);
                var pTipoSangre=document.createTextNode("Tipo de Sangre: "+rows[0].tipo_sangre);
                var pPabellon=document.createTextNode("Pabellon: "+rows[0].pabellon);
                var pCama=document.createTextNode("Numero de Cama: "+rows[0].numero_cama);
                var pDiagnostico=document.createTextNode("Diagnostico: ");
                var diagnostico=document.createTextNode(rows[0].diagnostico);
                newDiv.appendChild(pNomb);
                newDiv.appendChild(br1);
                newDiv.appendChild(pApellido);
                newDiv.appendChild(br2);
                newDiv.appendChild(pTipoSangre);
                newDiv.appendChild(br3);
                newDiv.appendChild(pPabellon);
                newDiv.appendChild(br4);
                newDiv.appendChild(pCama);
                newDiv.appendChild(br5);
                newDiv.appendChild(pDiagnostico);
                newDiv.appendChild(diagnostico);
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

module.exports={BinarySearchTree1};