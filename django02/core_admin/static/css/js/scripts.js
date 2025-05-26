document.addEventListener('DOMContentLoaded', function () {
    // Agregar clase de animación a los elementos principales
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('animate-fade-in');
    }

    // Animación suave al hacer clic en los enlaces del nav
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Efecto visual al hacer clic
                this.style.backgroundColor = '#DABBEO'; // Lavender al hacer clic
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 300);
            }
        });
    });

    // Validación del formulario de contacto con mejores mensajes
    const contactForm = document.querySelector('form[action="/contact/"]');
    if (contactForm) {
        // Añadir efecto de transición a los campos al enfocar
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('input-focused');
            });
        });
        
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;
            
            // Restablecer estilos de error
            inputs.forEach(input => {
                input.style.borderColor = '';
            });

            if (!name) {
                document.getElementById('name').style.borderColor = '#ff6b6b';
                isValid = false;
            }
            
            if (!email) {
                document.getElementById('email').style.borderColor = '#ff6b6b';
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById('email').style.borderColor = '#ff6b6b';
                isValid = false;
            }
            
            if (!message) {
                document.getElementById('message').style.borderColor = '#ff6b6b';
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
                showMessage('Por favor, completa correctamente todos los campos.', 'error');
            } else {
                showMessage('¡Formulario enviado con éxito!', 'success');
            }
        });
    }

    // Validación del formulario de login con mejores mensajes
    const loginForm = document.querySelector('form[method="post"]');
    if (loginForm) {
        // Añadir efecto de transición a los campos al enfocar
        const inputs = loginForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#EEBFD1'; // Flamingo al enfocar
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '';
            });
        });
        
        loginForm.addEventListener('submit', function (e) {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            let isValid = true;
            
            // Restablecer estilos de error
            inputs.forEach(input => {
                input.style.borderColor = '';
            });

            if (!username) {
                document.getElementById('username').style.borderColor = '#ff6b6b';
                isValid = false;
            }
            
            if (!password) {
                document.getElementById('password').style.borderColor = '#ff6b6b';
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
                showMessage('Por favor, completa todos los campos.', 'error');
            }
        });
    }
    
    // Crear elementos de tarjetas con animación
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            // Retrasar la animación para que aparezcan secuencialmente
            setTimeout(() => {
                card.classList.add('animate-fade-in');
            }, index * 100);
        });
    }
    
    // Función auxiliar para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Función para mostrar mensajes
    function showMessage(text, type) {
        // Eliminar mensajes anteriores
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear nuevo mensaje
        const message = document.createElement('div');
        message.className = `message message-${type}`;
        message.textContent = text;
        message.style.padding = '10px 15px';
        message.style.borderRadius = '4px';
        message.style.marginBottom = '15px';
        message.style.transition = 'all 0.3s ease';
        message.style.textAlign = 'center';
        
        if (type === 'error') {
            message.style.backgroundColor = '#ffeeee';
            message.style.color = '#ff6b6b';
            message.style.border = '1px solid #ff6b6b';
        } else {
            message.style.backgroundColor = '#eeffee';
            message.style.color = '#28a745';
            message.style.border = '1px solid #28a745';
        }
        
        // Insertar mensaje en el DOM
        const form = document.querySelector('form');
        if (form) {
            form.parentNode.insertBefore(message, form);
            
            // Eliminar mensaje después de unos segundos
            setTimeout(() => {
                message.style.opacity = '0';
                setTimeout(() => {
                    message.remove();
                }, 300);
            }, 5000);
        }
    }
});