// Static values for temperature and wind speed (matching HTML content)
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Function to calculate wind chill (Metric formula)
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Calculate and display wind chill
function displayWindChill() {
    const windChillElement = document.getElementById('windchill');

    // Check if conditions are met for wind chill calculation
    // Metric: Temperature <= 10°C and Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    // Set current year
    const yearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set last modified date
    const modifiedElement = document.getElementById('lastModified');
    modifiedElement.textContent = document.lastModified;
}

// Run functions when page loads
displayWindChill();
updateFooter();