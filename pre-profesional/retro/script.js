// Simulación de datos de retroalimentaciones
const retroalimentaciones = [
  { tutor: 'Tutor 1', estudiante: 'Estudiante 1', comentarios: 'Buen trabajo', calificacion: 4.5 },
  { tutor: 'Tutor 2', estudiante: 'Estudiante 2', comentarios: 'Necesita mejorar en la explicación', calificacion: 3.7 },
  // Agrega más retroalimentaciones aquí según tus necesidades
];

// Función para generar la tabla de retroalimentaciones
function generarTablaRetroalimentaciones() {
  const retroalimentacionesBody = document.getElementById('retroalimentaciones-body');
  retroalimentacionesBody.innerHTML = '';

  retroalimentaciones.forEach(retroalimentacion => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${retroalimentacion.tutor}</td>
      <td>${retroalimentacion.estudiante}</td>
      <td>${retroalimentacion.comentarios}</td>
      <td>${retroalimentacion.calificacion}</td>
    `;
    retroalimentacionesBody.appendChild(row);
  });
}

// Función para enviar el comentario del supervisor
function enviarComentario(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const comentarioInput = document.getElementById('comentario-input');
  const comentario = comentarioInput.value;

  // Aquí puedes realizar una solicitud al servidor para guardar el comentario en la base de datos

  // Limpia el campo de entrada de comentarios
  comentarioInput.value = '';
}

// Event Listener para enviar comentarios
const comentariosForm = document.getElementById('comentarios-form');
comentariosForm.addEventListener('submit', enviarComentario);

// Genera la tabla de retroalimentaciones al cargar la página
generarTablaRetroalimentaciones();