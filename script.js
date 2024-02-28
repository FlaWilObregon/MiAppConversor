function convertirDecimal() {
    var decimal = parseInt(document.getElementById('decimal').value);

    if (isNaN(decimal)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }
    var binario = decimal.toString(2);
    var octal = decimal.toString(8);
    var hexadecimal = decimal.toString(16).toUpperCase();

    document.getElementById('resultadoDecimal').innerHTML = `
        <p>Binario: ${binario}</p>
        <p>Octal: ${octal}</p>
        <p>Hexadecimal: ${hexadecimal}</p>
    `;
}
function convertirBinario() {
    var binario = document.getElementById('binario').value;
    var decimal = parseInt(binario, 2);
    document.getElementById('resultadoBinOctHex').innerHTML = `<p>Decimal: ${decimal}</p>`;
}
