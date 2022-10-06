const generateBinary = document.getElementById('generate-binary');
const generateDecimal = document.getElementById('generate-decimal');
const generateHexadecimal = document.getElementById('generate-hexadecimal');

function binaryConverter(){
    let number = Math.floor(Math.random() * 10000);
    let convertedNumber = Number(number).toString(2);
    document.getElementById('binaryNumber').innerHTML = convertedNumber;
}
function decimalConverter(){
    let number = Math.floor(Math.random() * 2147483647);
    let convertedNumber = Number(number).toString(10);
    document.getElementById('decimalNumber').innerHTML = convertedNumber;
}
function hexadecimalConverter(){
    let number = Math.floor(Math.random() * 2147483647);
    let convertedNumber = Number(number).toString(16);
    document.getElementById('hexadecimalNumber').innerHTML = convertedNumber;
}
generateBinary.addEventListener('click', () => {
    binaryConverter();
})
generateDecimal.addEventListener('click', () => {
    decimalConverter();
})
generateHexadecimal.addEventListener('click', () => {
    hexadecimalConverter();
})