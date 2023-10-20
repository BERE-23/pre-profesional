document.addEventListener("DOMContentLoaded", function () {
  var feedbackForm = document.getElementById("feedback-form");
  var comentariosInput = document.getElementById("comentarios");
  var calificacionInput = document.getElementById("calificacion");

  // Función para enviar la retroalimentación
  function enviarRetroalimentacion(event) {
    event.preventDefault();

    var comentarios = comentariosInput.value;
    var calificacion = calificacionInput.value;

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor o almacenarlos localmente.

    // Limpiar los campos del formulario
    comentariosInput.value = "";
    calificacionInput.value = "";

    alert("¡Gracias por tu retroalimentación!");
  }

  // Escuchar el evento "submit" del formulario de retroalimentación
  feedbackForm.addEventListener("submit", enviarRetroalimentacion);
});
