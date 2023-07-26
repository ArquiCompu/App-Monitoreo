/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

// Configuración del gráfico de Rendimiento CPU
const ctxCPU = document.getElementById("myChartCPU").getContext("2d");
let labelsCPU = [];
let dataCPU = [];
let data_n2 = [];
let myChartCPU = new Chart(ctxCPU, {
	type: "line",
    data: {
        labels: labelsCPU,
        datasets: [
            {
                label: "Rendimiento CPU (%)",
                data: dataCPU,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
			{
				label: "Base Line",
				data: data_n2,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Configuración del gráfico de Rendimiento Disco
const ctxDisco = document.getElementById("myChartDisco").getContext("2d");
let labelsDisco = [];
let dataDisco = [];
let myChartDisco = new Chart(ctxDisco, {
    type: "line",
    data: {
        labels: labelsDisco,
        datasets: [
            {
                label: "Rendimiento Disco (%)",
                data: dataDisco,
                backgroundColor: ["rgba(0, 0, 255, 0.2)"],
                borderColor: ["rgba(0, 0, 255,1)"],
                borderWidth: 1,
            }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Configuración del gráfico de Rendimiento Memoria
const ctxMemoria = document.getElementById("myChartMemoria").getContext("2d");
let labelsMemoria = [];
let dataMemoria = [];
let myChartMemoria = new Chart(ctxMemoria, {
    type: "line",
    data: {
        labels: labelsMemoria,
        datasets: [
            {
                label: "Rendimiento Memoria (%)",
                data: dataMemoria,
                backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                borderColor: ["rgba(75, 192, 192, 1)"],
                borderWidth: 1,
            }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Función para agregar datos a los gráficos
function addData(chart, dataS) {
    let today = new Date();
    let date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    chart.data.labels.push(date);
    chart.data.datasets[0].data.push(dataS);

    // Limitar la cantidad de datos mostrados en el gráfico (opcional)
    const maxDataPoints = 10;
    if (chart.data.labels.length > maxDataPoints) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}