function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let celsiusRadio = document.getElementById("celsius");
    let fahrenheitRadio = document.getElementById("fahrenheit");
    let result = document.getElementById("result");

    if (celsiusRadio.checked) {
        let fahrenheit = temperature * 9 / 5 + 32;
        result.innerHTML = temperature + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
    } else if (fahrenheitRadio.checked) {
        let celsius = (temperature - 32) * 5 / 9;
        result.innerHTML = temperature + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.";
    } else {
        result.innerHTML = "Please select a temperature unit.";
    }
}
