const urls = {
    "[0,0,0]": "/EditarDatos/EDU.html",
}
function goToLink(element) {
    const result = JSON.parse(element.dataset.value); // convertimos el valor a Array para emular el comportamiento descrito
    window.location.href = urls[JSON.stringify(result)];
};


//PUEDE EXITIR PROBLEMA, POR QUE LA RUTA DEBE DE SER DESDE EL HTML
const conexion = require('./conexion');

//const boton=document.querySelector('#btnRegistro');
function editarDatos(){
    var nombre_medicamento =  document.getElementById('input_NombreMedicamento').value;
    var numero_bodega =  document.getElementById('input_NumeroBodega').value;
    var id = document.getElementById('input_ID').value;
    
    //INSTRUCCIONES DE sql
    $query=`UPDATE usuarios SET nombre_medicamento='${nombre_medicamento}','numero_bodega='${numero_bodega}'' WHERE id_usuario ='${id}';`;
        conexion.query($query, (err, results, fields)=>{
                if(err){
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {alert("Datos guardados")}
        })};
