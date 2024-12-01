// Función para saludar con el botón
function saludar() {
    alert('¡Hola!');
}

// Manejador de eventos para el clic en el div
document.querySelector('.contenedor-boton').addEventListener('click', function() {
    alert('Hola! Soy el div');
});

// Manejador de eventos para el clic en el botón, evitando la propagación
document.querySelector('button').addEventListener('click', function(event) {
    alert('¡Hola!');
    event.stopPropagation();  // Previene que el clic en el botón dispare el evento del div
});