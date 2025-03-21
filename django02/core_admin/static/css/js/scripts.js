// Puedes agregar interactividad aquí, como validaciones de formulario o animaciones.

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de validación simple para el formulario de contacto
    const contactForm = document.querySelector('form[action="/contact/"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                event.preventDefault();
            }
        });
    }

    // Ejemplo de validación simple para el formulario de login
    const loginForm = document.querySelector('form[method="post"]');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Por favor, completa todos los campos.');
                event.preventDefault();
            }
        });
    }
});