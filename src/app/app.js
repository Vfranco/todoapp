function limpiar(){
    document.getElementsByClassName("input-form")[0].value = " ";
}


let tareas = new Array();


function agregar() {

    var input = document.getElementById("inputTareas");

    if (input.value.trim().length > 0) {

        tareas.push(input.value);

        input.value = "";

        console.log(tareas);
    }


}

function borrar(){
    
    var dato= document.getElementById("inputTareas");
    var index= tareas.indexOf(dato.value);
    tareas.splice(index,1);
    console.log(tareas);     
}



