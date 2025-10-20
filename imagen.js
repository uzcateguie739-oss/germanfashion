document.addEventListener('DOMContentLoaded', (event) => {
    // Referencias a los elementos principales
    const modalProducto = document.getElementById('modal-producto');
    const galeriaPrincipal = document.getElementById('galeria-principal');
    const botonCerrar = document.querySelector('.boton-cerrar');
    
    // Referencias a dónde se inyectan los datos
    const imagenPrincipalModal = document.getElementById('imagen-principal');
    const modeloProductoModal = document.getElementById('modelo-producto');
    const tallaProducto = document.getElementById('talla-producto');

    
    // 1. Abrir el Modal y Cargar Datos
    galeriaPrincipal.addEventListener('click', function(evento) {
        // Solo actúa si se hace clic en una imagen con la clase 'imagen-galeria'
        if (evento.target.classList.contains('imagen-galeria')) {
            const imagenClickeada = evento.target;
            
            // Extraer datos de los atributos data-*
            const urlImagenFull = imagenClickeada.getAttribute('data-imagen-principal');
            const nombreModelo = imagenClickeada.getAttribute('data-modelo');
            const tallas = imagenClickeada.getAttribute('data-talla');

            // Inyectar datos en el Modal
            imagenPrincipalModal.src = urlImagenFull;
            modeloProductoModal.textContent = nombreModelo;
            tallaProducto.textContent = tallas;
            
            // Mostrar el modal
            modalProducto.style.display = 'flex'; 
        }
    });

    // 2. Cerrar el Modal (Botón 'X')
    botonCerrar.addEventListener('click', () => {
        modalProducto.style.display = 'none';
    });

    // 3. Cerrar el Modal (Click fuera de la caja)
    window.addEventListener('click', function(evento) {
        if (evento.target === modalProducto) {
            modalProducto.style.display = 'none';
        }
    });
});
