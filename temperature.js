function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let convertedTemperature;
  
    if (selectedUnit === 'celsius') {
      convertedTemperature = (temperatureInput - 32) * (5 / 9);
    } else {
      convertedTemperature = (temperatureInput * (9 / 5)) + 32;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${selectedUnit}`;
  }