
// Función para saludar con el botón
function saludar() {
    alert('¡Hola!');
}

// Manejador de eventos para el clic en el div
document.querySelector('.contenedor-boton').addEventListener('click', function() {
    alert('Hola! Soy el div');
});