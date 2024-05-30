// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
  
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  
    // Si las cookies aún no se han aceptado, mostrar el banner
    if (!cookiesAccepted) {
      cookieBanner.classList.remove('hidden');
    }
  
    // Agregar evento al botón de aceptar cookies
    acceptCookiesBtn.addEventListener('click', function() {
      // Ocultar el banner de cookies
      cookieBanner.classList.add('hidden');
      // Marcar que las cookies han sido aceptadas
      localStorage.setItem('cookiesAccepted', true);
    });
  });
  