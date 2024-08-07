/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'Booksadre - Store';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');
MAIN_TITLE.classList.add('text-center', 'py-3');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                <div class="menu ">
                <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img src="../../resources/img/logo.png" height="50" alt="Booksadre"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </li>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link" href="index.html"><i class="bi bi-shop"></i> Catálogo</a>
                            <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i> Carrito</a> 
                            <a class="nav-link" href="historial.html"><i class="bi bi-clock-history"></i> Historial</a>
                            <a class="nav-link" href="profile.html"><i class="bi bi-person"></i> Perfil</a> 
                            <a class="nav-link" href="#" onclick="logOut()"><i class="bi bi-box-arrow-left"></i> Cerrar sesión</a>
                        </div>
                    </div>
                </div>
            </nav>
            </nav>
          </header>
            `);
        } else {
            location.href = 'index.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
            <header>
            
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src="../../resources/img/logo.png" height="50" alt="Booksadre"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <li class="nav-item">
        
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto text-end">
                <a class="nav-link" href="index.html"><i class="bi bi-shop"></i> Catálogo</a>
               <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i> Carrito</a>
               <a class="nav-link" href="login.html"><i class="bi bi-box-arrow-right"></i> Iniciar sesión</a>
        </div>
         </div>
            </div>
        </nav>
            </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
    <footer class="pt-4 pb-4 bg-dark text-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center mb-4 mb-md-0">
          <img class="img-fluid" src="../../resources/img/logo.png" alt="Logo" width="250" height="110">
          <div class="mt-2">
            <h6 class="mb-3">SÍGUENOS</h6>
            <div class="d-flex justify-content-center">
              <a href="https://web.whatsapp.com/" class="text-white me-3"><i class='bx bxl-whatsapp'></i></a>
              <a href="https://www.instagram.com/booksadre/" class="text-white me-3"><i class='bx bxl-instagram'></i></a>
              <a href="https://www.google.com/intl/es/gmail/about/" class="text-white"><i class='bx bxl-gmail'></i></a>
            </div>
          </div>
          <small class="d-block mt-3">&copy; 2017-2024</small>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <h6 class="mb-3">Información para el cliente</h6>
          <ul class="list-unstyled">
            <li><a class="text-decoration-none text-white" href="promociones.html">Promociones</a></li>
            <li><a class="text-decoration-none text-white" href="politica_cookies.html">Política de cookies</a></li>
            <li><a class="text-decoration-none text-white" href="quienes_somos.html">¿Quiénes somos?</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="mb-3">Gestión de cuentas</h6>
          <ul class="list-unstyled">
            <li><a class="text-decoration-none text-white" href="login.html">Mi cuenta</a></li>
            <li><a class="text-decoration-none text-white" href="signup.html">Registrarme</a></li>
            <li><a class="text-decoration-none text-white" href="como_comprar.html">¿Cómo comprar en línea?</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
    `);
}