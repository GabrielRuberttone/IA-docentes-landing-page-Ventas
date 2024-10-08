// Función para el contador regresivo
function countdownTimer(elementId, endTime, duration) {
    const countdownElement = document.getElementById(elementId);
    let endDate = new Date(endTime).getTime();

    if (isNaN(endDate)) {
        // Si no se proporciona una fecha válida, usar tiempo actual + duración
        endDate = new Date().getTime() + duration * 1000;
    }

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = endDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML =
            days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        if (distance < 0) {
            clearInterval(x);
            // Reiniciar el contador con nueva duración si es necesario
            // Aquí puedes ajustar la lógica para reiniciar el contador
            countdownElement.innerHTML = '¡Oferta finalizada!';
        }
    }, 1000);
}

// Configuración del contador en la sección de oferta
const offerStartTime = 'Oct 8, 2024 12:00:00';
const offerDuration = 48 * 60 * 60; // 48 horas en segundos
countdownTimer('countdown', offerStartTime, offerDuration);

// Configuración del contador en la sección de contenido del curso
const offerStartTimeBottom = 'Oct 8, 2024 12:00:00';
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
