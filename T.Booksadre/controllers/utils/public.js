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
                <!-- Menú -->
                <nav class="navbar bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src="../../resources/img/logo.png" alt="Logo"></a>
    
                    <ul class="nav nav-underline position-absolute top-50 start-50 translate-middle">
                        <li class="nav-item">
                            <a class="nav-link-text" href="../../views/public/Index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-text" href="#">Catálogo</a>
                        </li>
                    </ul>
    
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <div class="search-box">
                                <input type="text" class="form-control" placeholder="Buscar">
                                <a class="nav-link" href="#" style="--i:1;"><i class='bx bx-search-alt-2'></i></a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="carrito.html" style="--i:2;"><i class='bx bxs-cart'></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="quienes_somos.html" style="--i:3;"><i class='bx bx-info-circle'></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html" style="--i:4;"><i class='bx bxs-user-circle'></i></a>
                        </li>
                    </ul>
                </div>
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
            <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand"><img src="../../resources/img/logo.png" alt="Logo"></a>

                <ul class="nav nav-underline position-absolute top-50 start-50 translate-middle">
                    <li class="nav-item">
                        <a class="nav-link-text" href="../../views/public/Index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link-text" href="#">Catálogo</a>
                    </li>
                </ul>

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Buscar">
                            <a class="nav-link" href="#" style="--i:1;"><i class='bx bx-search-alt-2'></i></a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="carrito.html" style="--i:2;"><i class='bx bxs-cart'></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="quienes_somos.html" style="--i:3;"><i class='bx bx-info-circle'></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html" style="--i:4;"><i class='bx bxs-user-circle'></i></a>
                    </li>
                </ul>
            </div>
        </nav>
            </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
    <footer>
    <div class="row align-items-center">
      <div class="col text-center">
        <img class="" src="../../resources/img/logo.png" alt="" width="250" height="110">
        <div class="row mt-2 justify-content-center">
          <div class="columna text-center">
            <a class="nav-link-text">SIGUENOS</a>
            <br><br>
            <a href="https://web.whatsapp.com/"><i class='bx bxl-whatsapp'></i></a>
            <a href="https://www.instagram.com/booksadre/"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.google.com/intl/es/gmail/about/"><i class='bx bxl-gmail'></i></a>
            <br><br>
          </div>
        </div>
        <small class="d-block mb-3 text-body-secondary">&copy; 2017-2024</small>
      </div>
      <div class="col">
        <h8>Información para el cliente</h8>
        <ul class="list-unstyled text-small">
          <li class=""><a class="link-secondary text-decoration-none" href="promociones.html">Promociones</a></li>
          <li class=""><a class="link-secondary text-decoration-none" href="politica_cookies.html">Política de cookies</a></li>
          <li class=""><a class="link-secondary text-decoration-none" href="quienes_somos.html">¿Quienes somos?</a></li>
        </ul>
      </div>
      <div class="col">
        <h8>Gestión de cuentas</h8>
        <ul class="list-unstyled text-small">
          <li class=""><a class="link-secondary text-decoration-none" href="login.html">Mi cuenta</a></li>
        <li class=""><a class="link-secondary text-decoration-none" href="registro.html">Registrarme </a></li>
        <li class=""><a class="link-secondary text-decoration-none" href="recuperar_contraseñas.html">Recuperar clave</a></li>
        <li class=""><a class="link-secondary text-decoration-none" href="como_comprar.html">¿Como comprar en línea?</a></li>
        </ul>
      </div>
      <div class="col">
       
        <ul class="list-unstyled text-small">
          <li class=""><a class="link-secondary text-decoration-none" href="#"></a></li>
          <li class=""><a class="link-secondary text-decoration-none" href="#"></a></li>
          <li class=""><a class="link-secondary text-decoration-none" href="#"></a></li>
          <li class=""><a class="link-secondary text-decoration-none" href="#"></a></li>
        </ul>
      </div>
    </div>
  
  </footer>
    `);
}