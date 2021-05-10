//TODO: add descriptions
let airQualityElement = document.getElementById('air-quality-chart').getContext('2d');
let altimeterElement = document.getElementById('altimeter-chart').getContext('2d');
let co2Element = document.getElementById('co2-chart').getContext('2d');
let lightElement = document.getElementById('light-chart').getContext('2d');
let magnetometerElement = document.getElementById('magnetometer-chart').getContext('2d');
let mq9Element = document.getElementById('MQ9-chart').getContext('2d');
let load_cellElement = document.getElementById('load_cell-chart').getContext('2d');
let uvElement = document.getElementById('uv-chart').getContext('2d');
let pElement = document.getElementById('p-chart').getContext('2d');
let htElement = document.getElementById('ht-chart').getContext('2d');
let accelerometerElement = document.getElementById('accelerometer-chart').getContext('2d');

function createSensorChartConfig(data){
    return {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            parsing: {
                xAxisKey: 'x',
                yAxisKey: 'y'
            }
        }
    }
}

let aqChart = new Chart(airQualityElement, createSensorChartConfig(aq_data));

let altimeterChart = new Chart(altimeterElement, createSensorChartConfig(alt_data));

let accelerometerChart = new Chart(accelerometerElement, createSensorChartConfig(accel_data));

let co2Chart = new Chart(co2Element, createSensorChartConfig(co2_data));

let lightChart = new Chart(lightElement, createSensorChartConfig(light_data));

let mq9Chart = new Chart(mq9Element, createSensorChartConfig(mq9_data));

let magnetometerChart = new Chart(magnetometerElement,  createSensorChartConfig(magnetometer_data));

let load_cellChart = new Chart(load_cellElement, createSensorChartConfig(load_cell_data));

let uvChart = new Chart(uvElement, createSensorChartConfig(uv_data));

let pChart = new Chart(pElement,  createSensorChartConfig(p_data));

let htChart = new Chart(htElement,  createSensorChartConfig(ht_data));
