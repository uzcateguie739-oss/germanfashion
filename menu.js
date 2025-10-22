document.addEventListener('DOMContentLoaded', () => {
    // Referencias para el menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    
    // Lógica para abrir/cerrar el menú
    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú (definido en menu.css)
            menuLinks.classList.toggle('active');
        });
    }
});