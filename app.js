function calculadora(num1, num2, operacion) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "valor desconocido";
    }

    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':

            if (num2 === 0) {
                return "No se puede dividir por cero";
            }
            return num1 / num2;
        default:
            return "valor desconocido";
    }
}

// Pruebas
console.log(calculadora(5, 3, '+')); // 8
console.log(calculadora(5, 3, '-')); // 2
console.log(calculadora(5, 3, '*')); // 15
console.log(calculadora(5, 3, '/')); // 1.6666666666666667
console.log(calculadora(5, 0, '/')); // "No se puede dividir por cero"
console.log(calculadora(5, '3', '+')); // "valor desconocido"
console.log(calculadora(5, 3, '^')); // "valor desconocido"