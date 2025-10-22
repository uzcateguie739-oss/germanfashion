document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos principales
    const modalProducto = document.getElementById('modal-producto');
    const galeriaPrincipal = document.getElementById('galeria-principal');
    const botonCerrar = document.querySelector('.boton-cerrar');
    
    // Referencias a dónde se inyectan los datos
    const imagenPrincipalModal = document.getElementById('imagen-principal');
    const modeloProductoModal = document.getElementById('modelo-producto');
    const tallaProducto = document.getElementById('talla-producto');
    // Referencia al <a> dentro del botón de compra
    const linkWhatsapp = document.getElementById('link-whatsapp'); 

    
    // 1. Abrir el Modal y Cargar Datos
    galeriaPrincipal.addEventListener('click', function(evento) {
        const imagenClickeada = evento.target;
        
        // Solo actúa si se hace clic en una imagen de la galería
        if (imagenClickeada.classList.contains('imagen-galeria')) {
            
            // Extraer datos usando .dataset (sintaxis moderna)
            const urlImagenFull = imagenClickeada.dataset.imagenPrincipal;
            const nombreModelo = imagenClickeada.dataset.modelo;
            const tallas = imagenClickeada.dataset.talla;
            // 🔥 CLAVE: Extraer el mensaje único y personalizado
            const whatsappMsg = imagenClickeada.dataset.whatsappMensaje; 

            // Inyectar datos en el Modal
            imagenPrincipalModal.src = urlImagenFull;
            modeloProductoModal.textContent = nombreModelo;
            tallaProducto.textContent = tallas;
            
            // CONSTRUIR EL ENLACE DINÁMICO DE WHATSAPP
            const telefono = '+584241715961';
            // Codifica el mensaje para que sea válido en la URL
            const mensajeCodificado = encodeURIComponent(whatsappMsg || "Me interesa un producto de su catálogo.");
            
            // Asigna el URL de WhatsApp personalizado
            linkWhatsapp.href = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
            
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