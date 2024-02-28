function convert(){
    let numBox = document.getElementById("numBox").value
    let toCelsius = document.getElementById("toCelsius").checked
    let toFahrenheit = document.getElementById("toFahrenheit").checked
    let result = document.getElementById("result")
    let temp
    if(toCelsius){
        result.textContent = (numBox - 32) * 5/9 + "°C"
    } else if(toFahrenheit){
        result.textContent = (9*numBox/5) + 32 + "°F"
    } else {
        result.textContent = "SELECT A UNIT"
    }
}