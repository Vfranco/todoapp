function limpiar(){
    document.getElementsByClassName("input-form")[0].value = " ";
}


var tareas = new Array();


function agregar() {

    var entrada = document.getElementById('inputTareas');
    
    tareas.push(entrada.value);

    entrada.value = " ";

    console.log(tareas);
    
}




