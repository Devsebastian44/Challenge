// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    mostrarAmigos();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
}

/**
 * Función para mostrar la lista de amigos en el DOM
 */
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${amigo} 
            <button onclick="eliminarAmigo(${index})" style="margin-left: 10px; padding: 5px 8px; font-size: 12px; background-color: #ff4444; color: white; border: none; border-radius: 15px; cursor: pointer;">
                ✕
            </button>
        `;
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para eliminar un amigo de la lista
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    limpiarResultado();
}

/**
 * Función para sortear un amigo secreto
 */
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agregue al menos un nombre para realizar el sorteo.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSecreto);
}

/**
 * Función para mostrar el resultado del sorteo
 */
function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

/**
 * Función para limpiar el resultado anterior
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Función para manejar el evento Enter en el campo de entrada
 */
function manejarEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar event listener para la tecla Enter
    inputAmigo.addEventListener('keypress', manejarEnter);
    
    // Enfocar el campo de entrada al cargar la página
    inputAmigo.focus();
});

/**
 * Función para reiniciar la aplicación
 */
function reiniciarJuego() {
    amigos = [];
    mostrarAmigos();
    limpiarResultado();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

// Función adicional para confirmar antes de reiniciar (opcional)
function confirmarReinicio() {
    if (amigos.length > 0) {
        if (confirm('¿Estás seguro de que quieres borrar toda la lista?')) {
            reiniciarJuego();
        }
    } else {
        reiniciarJuego();
    }
}