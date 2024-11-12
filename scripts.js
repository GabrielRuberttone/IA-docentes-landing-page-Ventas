// scripts.js

// Configuración del enlace de checkout de Hotmart
const checkoutLink = 'https://pay.hotmart.com/H88956778Q?off=c6rapbhn&checkoutMode=10&ref=D90448761P&bid=1731450610053'; // <-- Aquí ingresa tu enlace de checkout

// Configuración del enlace de WhatsApp
const whatsappLink = 'https://wa.me/5491124698794?text=Hola,%20tengo%20algunas%20dudas%20sobre%20el%20curso.%20¿Podrías%20ayudarme?'; // <-- Aquí ingresa tu enlace de WhatsApp

// Configuración de la fecha y hora de finalización de la oferta
const countdownEndTime = '2024-11-15T12:00:00'; // <-- Configura la fecha y hora de finalización de la oferta

// IDs de los contadores en la página
const countdownIds = ['countdown-top', 'countdown-middle', 'countdown-bottom']; // <-- Asegúrate de que estos IDs coincidan con los del HTML

// Función para el contador regresivo
function countdownTimer(elementId, endTime) {
    // Obtener el elemento del contador por su ID
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) return; // Si el elemento no existe, salir de la función

    // Seleccionar los elementos de los números dentro del contador usando clases
    const daysElement = countdownElement.querySelector('.days');
    const hoursElement = countdownElement.querySelector('.hours');
    const minutesElement = countdownElement.querySelector('.minutes');
    const secondsElement = countdownElement.querySelector('.seconds');

    // Verificar que todos los elementos existen
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;

    // Función que actualiza el contador cada segundo
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = endTime - now;

        if (distance < 0) {
            clearInterval(x);
            // Establecer los valores a cero si el tiempo se ha agotado
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        // Cálculos de tiempo
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatear los números para que siempre tengan dos dígitos
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Actualizar los valores en el contador
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

    }, 1000);
}

// Inicializar todos los contadores
function initCountdowns() {
    // Convertir la fecha de finalización a milisegundos
    const endTime = new Date(countdownEndTime).getTime();

    // Inicializar cada contador por su ID
    countdownIds.forEach(elementId => {
        countdownTimer(elementId, endTime);
    });
}

// Llamar a la función para iniciar los contadores
initCountdowns();

// Asignar el enlace a todos los botones con la clase 'btn-checkout'
function assignCheckoutLinks() {
    const checkoutButtons = document.querySelectorAll('.btn-checkout');
    checkoutButtons.forEach(button => {
        button.setAttribute('href', checkoutLink);
    });
}

// Asignar el enlace a todos los elementos con la clase 'whatsapp-link'
function assignWhatsAppLinks() {
    const whatsappElements = document.querySelectorAll('.whatsapp-link');
    whatsappElements.forEach(element => {
        element.setAttribute('href', whatsappLink);
    });
}

// Llamar a las funciones para asignar los enlaces
assignCheckoutLinks();
assignWhatsAppLinks();

// Función para notificaciones de prueba social
function socialProofNotifications() {
    const names = ['Noelia P.', 'Carlos M.', 'Ana L.', 'Luis G.', 'María S.', 'Pedro R.', 'Sofía T.', 'Juan C.'];
    const countries = ['Argentina', 'Colombia', 'México', 'Chile', 'España', 'Perú', 'Uruguay', 'Ecuador'];

    function showNotification() {
        const socialProofElement = document.getElementById('social-proof');
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];

        socialProofElement.innerHTML = `<strong>${randomName} de ${randomCountry}</strong> compró el curso de IA para docentes.`;
        socialProofElement.classList.add('show');

        setTimeout(function() {
            socialProofElement.classList.remove('show');
        }, 5000); // La notificación desaparece después de 5 segundos
    }

    // Mostrar la primera notificación después de un intervalo inicial
    setTimeout(function() {
        showNotification();

        // Mostrar notificaciones cada 10 a 20 segundos
        setInterval(function() {
            showNotification();
        }, Math.floor(Math.random() * 10000) + 10000); // Intervalo entre 10 y 20 segundos
    }, 5000); // Primera notificación después de 5 segundos
}

// Iniciar las notificaciones de prueba social
socialProofNotifications();
