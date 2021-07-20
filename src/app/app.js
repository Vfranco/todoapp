function limpiar() {
  document.getElementsByClassName("input-form")[0].value = " ";
}

var tareas = new Array();

function agregar() {
  var input = document.getElementById("inputTareas");

  if (input.value.trim().length > 0) {
    tareas.push(input.value);

    input.value = " ";

    console.log(tareas);
  }
}
