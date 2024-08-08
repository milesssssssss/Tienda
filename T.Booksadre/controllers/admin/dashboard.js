// Constante para completar la ruta de la API.
const PRODUCTO_API = 'services/admin/producto.php';
const CLIENTE_API = 'services/public/cliente.php';
const PEDIDO_API = 'services/public/pedido.php';

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Constante para obtener el número de horas.
    const HOUR = new Date().getHours();
    // Se define una variable para guardar un saludo.
    let greeting = '';
    // Dependiendo del número de horas transcurridas en el día, se asigna un saludo para el usuario.
    if (HOUR < 12) {
        greeting = 'Buenos días';
    } else if (HOUR < 19) {
        greeting = 'Buenas tardes';
    } else if (HOUR <= 23) {
        greeting = 'Buenas noches';
    }
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();
    // Se establece el título del contenido principal.
    MAIN_TITLE.textContent = `${greeting}, bienvenido`;
    // Llamada a la funciones que generan los gráficos en la página web.
    graficoBarrasCategorias();
    graficoPastelCategorias();
    graficoBarrasClientes();
    graficoTop5ClientesConMasPedidos();
});

/*
*   Función asíncrona para mostrar un gráfico de barras con la cantidad de productos por categoría.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const graficoBarrasCategorias = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'cantidadProductosCategoria');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a graficar.
        let categorias = [];
        let cantidades = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            categorias.push(row.nombre_categoria);
            cantidades.push(row.cantidad);
        });
        // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
        barGraph('chart1', categorias, cantidades, 'Cantidad de productos', 'Cantidad de productos por categoría');
    } else {
        document.getElementById('chart1').remove();
        console.log(DATA.error);
    }
}

/*
*   Función asíncrona para mostrar un gráfico de pastel con el porcentaje de productos por categoría.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const graficoPastelCategorias = async () => {
    // Petición para obtener los datos del gráfico.
    const DATA = await fetchData(PRODUCTO_API, 'porcentajeProductosCategoria');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
    if (DATA.status) {
        // Se declaran los arreglos para guardar los datos a gráficar.
        let categorias = [];
        let porcentajes = [];
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se agregan los datos a los arreglos.
            categorias.push(row.nombre_categoria);
            porcentajes.push(row.porcentaje);
        });
        // Llamada a la función para generar y mostrar un gráfico de pastel. Se encuentra en el archivo components.js
        pieGraph('chart2', categorias, porcentajes, 'Porcentaje de productos por categoría');
    } else {
        document.getElementById('chart2').remove();
        console.log(DATA.error);
    }
}

const graficoBarrasClientes = async () => {
    try {
        // Petición para obtener los datos del gráfico.
        const DATA = await fetchData(CLIENTE_API, 'countClients');
        // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
        if (DATA.status) {
            // Se declaran los arreglos para guardar los datos a graficar.
            let labels = ['Número total de clientes'];
            let cantidades = [DATA.dataset];
            // Llamada a la función para generar y mostrar un gráfico de barras. Se encuentra en el archivo components.js
            clientCountBarGraph('chart4', labels, cantidades, 'Cantidad de clientes', 'Número total de clientes registrados');
        } else {
            document.getElementById('chart4').remove();
            console.log(DATA.error);
        }
    } catch (error) {
        console.error('Error fetching client count data:', error);
    }
}

const graficoTop5ClientesConMasPedidos = async () => {
    try {
        // Petición para obtener los datos del gráfico.
        const DATA = await fetchData(PEDIDO_API, 'top5ClientesConMasPedidos');
        // Se comprueba si la respuesta es satisfactoria, de lo contrario se remueve la etiqueta canvas.
        if (DATA.status) {
            // Se declaran los arreglos para guardar los datos a graficar.
            let clientes = [];
            let totalPedidos = [];
            // Se recorre el conjunto de registros fila por fila a través del objeto row.
            DATA.dataset.forEach(row => {
                // Se agregan los datos a los arreglos.
                clientes.push(row.nombre_cliente);
                totalPedidos.push(row.total_pedidos);
            });
            // Llamada a la función para generar y mostrar un gráfico de barras.
            top5ClientesMasPedi('chart10', clientes, totalPedidos, 'Cantidad de pedidos', 'Top 5 clientes con más pedidos');
        } else {
            document.getElementById('chart10').remove();
            console.log(DATA.error);
        }
    } catch (error) {
        console.error('Error fetching top 5 clients with most orders:', error);
    }
}
