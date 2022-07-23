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
class BinarySearchTree3
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
            var newTr=document.createElement('tr');
            var newId=document.createElement('td');
            var newNombre=document.createElement('td');
            var newApellido=document.createElement('td');
            var newArea=document.createElement('td');
            var newEspecilidad=document.createElement('td');
            //var id, nombre, apellido, area, especialidad, fila;
            $query=`SELECT*FROM usuarios WHERE id_usuario='${node.id}'`;
            conexion.query($query, (err, rows) => {
                newId.innerText = rows[0].id_usuario;
                newNombre.innerText=rows[0].nombre_usuario;
                newApellido.innerText=rows[0].apellido_usuario;
                newTr.appendChild(newId);
                newTr.appendChild(newNombre);
                newTr.appendChild(newApellido);
                /*id=rows[0].id_usuario;
                nombre=rows[0].nombre_usuario;
                apellido=rows[0].apellido_usuario;*/
            });
            $query=`SELECT*FROM doctores WHERE id_doctor='${node.id}'`;
            conexion.query($query, (err, rows)=>{
                newArea.innerText=rows[0].area_encargada;
                newEspecilidad.innerText=rows[0].especialidad;
                newTr.appendChild(newArea);
                newTr.appendChild(newEspecilidad);
                /*area=rows[0].area_encargada;
                especialidad=rows[0].especialidad;*/
            });
            var table = document.getElementById("listaDoctores");
            var cuerpoTabla=document.createElement("tbody");
            cuerpoTabla.appendChild(newTr);
            table.appendChild(cuerpoTabla);
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

module.exports={BinarySearchTree3};