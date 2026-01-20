document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const temperature = 8; // Celsius
const windSpeed = 12; // km/h

const windChillElem = document.getElementById('wind-chill');
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElem.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + '°C';
} else {
    windChillElem.textContent = 'N/A';
}
