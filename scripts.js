// Función para el contador regresivo
function countdownTimer(elementId, endTime, duration) {
    // Seleccionar los elementos de los números dentro del contador
    const countdownElement = document.getElementById(elementId);
    const daysElement = countdownElement.querySelector('#days');
    const hoursElement = countdownElement.querySelector('#hours');
    const minutesElement = countdownElement.querySelector('#minutes');
    const secondsElement = countdownElement.querySelector('#seconds');

    let endDate = new Date(endTime).getTime();

    if (isNaN(endDate)) {
        // Si no se proporciona una fecha válida, usar tiempo actual + duración
        endDate = new Date().getTime() + duration * 1000;
    }

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = endDate - now;

        if (distance < 0) {
            clearInterval(x);
            // Establecer los valores a cero
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

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

        // Actualizar los valores solo si han cambiado para activar la animación
        if (daysElement.textContent != days) {
            daysElement.textContent = days;
            animateFlip(daysElement.parentElement);
        }
        if (hoursElement.textContent != hours) {
            hoursElement.textContent = hours;
            animateFlip(hoursElement.parentElement);
        }
        if (minutesElement.textContent != minutes) {
            minutesElement.textContent = minutes;
            animateFlip(minutesElement.parentElement);
        }
        if (secondsElement.textContent != seconds) {
            secondsElement.textContent = seconds;
            animateFlip(secondsElement.parentElement);
        }

    }, 1000);
}

// Función para agregar y remover la clase 'animate' para la animación
function animateFlip(element) {
    element.classList.add('animate');
    setTimeout(() => {
        element.classList.remove('animate');
    }, 700); // Duración de la animación en milisegundos (coincide con el CSS)
}

// Configuración del contador en la sección de oferta
const offerStartTime = 'Oct 12, 2024 12:00:00';
const offerDuration = 48 * 60 * 60; // 48 horas en segundos
countdownTimer('countdown', offerStartTime, offerDuration);

// Configuración del contador en la sección de contenido del curso (si existe)
const offerStartTimeBottom = 'Oct 12, 2024 12:00:00';
const offerDurationBottom = 48 * 60 * 60; // 48 horas en segundos
countdownTimer('countdown-bottom', offerStartTimeBottom, offerDurationBottom);


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
