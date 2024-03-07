// Carga la librería de Google Charts
google.charts.load("current", {packages:["corechart"]});

// Llama a la función drawChart() cuando la librería esté cargada
google.charts.setOnLoadCallback(drawChart);

// Define la función drawChart()
function drawChart() {
    // Define los datos del gráfico
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['Cuadernos',  5.85],
        ['Marcadores',  1.66],
        ['Colores', 0.316],
        ['Estuches', 0.0791]
    ]);

    // Define las opciones del gráfico
    var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Swiss Language Use (100 degree rotation)',
        pieStartAngle: 100,
    };

    // Crea el gráfico y lo dibuja en el elemento con id 'piechart'
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
