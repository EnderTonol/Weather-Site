const INP = document.getElementById("inp");
const TEMP = document.getElementById("temp");
const WIND = document.getElementById("wind");
const TYPE = document.getElementById("type");
const UV = document.getElementById("uv");
const PLAC = document.getElementById("city");
const ICON = document.getElementById("icon");
const HUMD = document.getElementById("humd");
const TIME = document.getElementById("time");
const LAT = document.getElementById("lat");
const LON = document.getElementById("log");

const GRAPH = document.getElementById("graph");


const API_KEY = "57642cf60e898fcced276b5872e75c44"; 



async function weather() {
    
const CITY = INP.value;
const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY}`);
const data = await response.json();
        if (CITY || navigator.on) {
    
            if (data.current) {
                PLAC.innerText = `City: ${data.location.name}`;
                TEMP.innerText = `${data.current.temperature} °C`;
                WIND.innerText = `Wind Speed: ${data.current.wind_speed} km/h`;
                TYPE.innerText = `Type: ${data.current.weather_descriptions[0]}`;
                UV.innerText = `UV: ${data.current.uv_index}`;
                HUMD.innerText = `Humidity: ${data.current.humidity}`;
                ICON.src = `${data.current.weather_icons}`;
                TIME.innerText = `Time: ${data.current.observation_time} `;
                LAT.innerText = `Latitude: ${data.location.lat}`;
                LON.innerText = `Longitude: ${data.location.lon}`;

                console.log("Fetched")
            } else {
                alert("City not found OR Network error")


            }
        } else if(CITY != null) {
            alert('Please enter a city name.');
        }

    const IDG = document.getElementById('graph').getContext('2d');
    const X_val = ["°C","Humidity","UV","Wind_speed km/h","Feels Like"];
    const Y_val = [data.current.temperature, data.current.humidity, data.current.uv_index, data.current.wind_speed, data.current.feelslike]

    const myChart = new Chart(IDG, {
        type: 'bar',
        data: {
            labels: X_val,  
            datasets: [{  
                data: Y_val,  
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1  
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true 
                }
            },
            responsive: true,  
            plugins: {
                tooltip: {
                    enabled: true  
                },
                legend: {
                    display: true,  
                }
            }
        }
    });
}


