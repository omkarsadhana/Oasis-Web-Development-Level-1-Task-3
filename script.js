document.getElementById('convertBtn').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    let result;

    if (fromUnit === 'celsius') {
        result = {
            celsius: inputValue,
            fahrenheit: (inputValue * 9/5) + 32,
            kelvin: inputValue + 273.15
        };
    } else if (fromUnit === 'fahrenheit') {
        result = {
            celsius: (inputValue - 32) * 5/9,
            fahrenheit: inputValue,
            kelvin: (inputValue - 32) * 5/9 + 273.15
        };
    } else if (fromUnit === 'kelvin') {
        result = {
            celsius: inputValue - 273.15,
            fahrenheit: (inputValue - 273.15) * 9/5 + 32,
            kelvin: inputValue
        };
    }

    document.getElementById('result').innerHTML = `
        The Temperature will be:<br>
        ${result.celsius.toFixed(2)} Celsius<br>
        ${result.fahrenheit.toFixed(2)} Fahrenheit<br>
        ${result.kelvin.toFixed(2)} Kelvin
    `;
});
