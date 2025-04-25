// function to conver farenheit to celsius
function farenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}

//Driver code
let farenheit = 100;
let celsius = farenheitToCelsius(farenheit);
console.log(`${farenheit} Farenheit is equal to ${celsius} Celsius`);