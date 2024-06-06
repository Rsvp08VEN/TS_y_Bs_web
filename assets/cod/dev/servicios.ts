// Función para validar la descripción del problema
function validarDescripcion(descripcion: string): boolean {
    const expresionRegular = /^[a-zA-Z0-9\s]*$/; // Expresión regular que permite letras, números y espacios

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
function enviarSolicitud(servicio: string, descripcion: string) {
    // Validar la descripción del problema
    if (!validarDescripcion(descripcion)) {
        return;
    }

    // Aquí podrías agregar código para enviar la solicitud a una API correspondiente al servicio
    alert(`Su solicitud de servicio "${servicio}" está siendo procesada. Gracias por contactarnos.`);
    
        // Borrar el contenido del área de texto después de mostrar el alert
        const textareaId = `descripcionProblema${servicio}`;
        const descripcionProblemaTextarea = document.getElementById(textareaId) as HTMLTextAreaElement | null;
        if (descripcionProblemaTextarea) {
            descripcionProblemaTextarea.value = "";
        } else {
            console.error(`No se encontró el área de texto con ID ${textareaId}`);
        }
}
