function mostrar(opcion){
    switch(opcion.value){
        case "Doctor":
            document.getElementById("Doctor").style.display="block";
            document.getElementById("Secretaria").style.display="none";
            document.getElementById("Encargado").style.display="none";
            document.getElementById("Directivo").style.display="none";
        break;
        case "Secretaria":
            document.getElementById("Secretaria").style.display="block";
            document.getElementById("Doctor").style.display="none";
            document.getElementById("Encargado").style.display="none";
            document.getElementById("Directivo").style.display="none"
        break;
        case "Encargado de Bodega":
            document.getElementById("Encargado").style.display="block";
            document.getElementById("Secretaria").style.display="none";
            document.getElementById("Doctor").style.display="none";
            document.getElementById("Directivo").style.display="none"
        break;
        case "Directivo":
            document.getElementById("Directivo").style.display="block";
            document.getElementById("Secretaria").style.display="none";
            document.getElementById("Doctor").style.display="none";
            document.getElementById("Encargado").style.display="none";
    }
}
