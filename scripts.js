// En este caso, no hay funcionalidades JavaScript específicas
// Puedes agregar funciones de scroll suave o cualquier interacción que desees

// Ejemplo de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
