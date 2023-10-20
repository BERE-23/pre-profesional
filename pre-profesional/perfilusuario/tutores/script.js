document.addEventListener("DOMContentLoaded", function () {
  var tutores = [];

  var tutoresList = document.getElementById("tutores-list");
  var tutorForm = document.getElementById("tutor-form");
  var nombreInput = document.getElementById("nombre");
  var especializacionInput = document.getElementById("especializacion");

  // Función para agregar un tutor académico
  function agregarTutor(event) {
    event.preventDefault();

    var nombre = nombreInput.value;
    var especializacion = especializacionInput.value;

    // Validar que se ingresen todos los campos
    if (nombre && especializacion) {
      var tutor = { nombre: nombre, especializacion: especializacion };
      tutores.push(tutor);

      // Actualizar la lista de tutores
      var tutorItem = document.createElement("li");
      tutorItem.textContent = tutor.nombre + " - " + tutor.especializacion;
      tutoresList.appendChild(tutorItem);

      // Limpiar los campos del formulario
      nombreInput.value = "";
      especializacionInput.value = "";
      document.addEventListener("DOMContentLoaded", function () {
        var tutores = [];
      
        var tutoresList = document.getElementById("tutores-list");
        var tutorForm = document.getElementById("tutor-form");
        var nombreInput = document.getElementById("nombre");
        var especializacionInput = document.getElementById("especializacion");
      
        // Función para agregar un tutor académico
        function agregarTutor(event) {
          event.preventDefault();
      
          var nombre = nombreInput.value;
          var especializacion = especializacionInput.value;
      
          // Validar que se ingresen todos los campos
          if (nombre && especializacion) {
            var tutor = { nombre: nombre, especializacion: especializacion };
            tutores.push(tutor);
      
            // Actualizar la lista de tutores
            var tutorItem = document.createElement("li");
            tutorItem.textContent = tutor.nombre + " - " + tutor.especializacion;
            tutoresList.appendChild(tutorItem);
            window.location.href = "pre-profesional/menu.html";
            // Limpiar los campos del formulario
            nombreInput.value = "";
            especializacionInput.value = "";

          } else {
            alert("Por favor, ingrese todos los campos.");
          }
        }
      
        // Escuchar el evento "submit" del formulario de agregar tutor
        tutorForm.addEventListener("submit", agregarTutor);
      });
      
    } else {
      alert("Por favor, ingrese todos los campos.");
    }
  }

  // Escuchar el evento "submit" del formulario de agregar tutor
  tutorForm.addEventListener("submit", agregarTutor);
});
