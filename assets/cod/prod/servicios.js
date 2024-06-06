"use strict";

// Función para validar la descripción del problema
function validarDescripcion(descripcion) {
  var expresionRegular = /^[a-zA-Z0-9\s]*$/; // Expresión regular que permite letras, números y espacios

  if (descripcion.trim() === "") {
    alert("Por favor, ingrese una descripción del problema.");
    return false; // Evitar que se envíe el formulario
  } else if (!expresionRegular.test(descripcion)) {
    alert("La descripción solo puede contener letras, números y espacios.");
    return false; // Evitar que se envíe el formulario
  }
  return true; // Permitir el envío del formulario si la descripción es válida
}

// Función para enviar la solicitud del servicio
function enviarSolicitud(servicio, descripcion) {
  // Validar la descripción del problema
  if (!validarDescripcion(descripcion)) {
    return;
  }

  // Aquí podrías agregar código para enviar la solicitud a una API correspondiente al servicio
  alert("Su solicitud de servicio \"".concat(servicio, "\" est\xE1 siendo procesada. Gracias por contactarnos."));

  // Borrar el contenido del área de texto después de mostrar el alert
  var textareaId = "descripcionProblema".concat(servicio);
  var descripcionProblemaTextarea = document.getElementById(textareaId);
  if (descripcionProblemaTextarea) {
    descripcionProblemaTextarea.value = "";
  } else {
    console.error("No se encontr\xF3 el \xE1rea de texto con ID ".concat(textareaId));
  }
}