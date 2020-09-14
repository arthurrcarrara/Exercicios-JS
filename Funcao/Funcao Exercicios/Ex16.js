function calculadora (x1, op, x2){
    let a = x1
    let b = x2

    switch (op){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Operacao Invalida'
    }
}

console.log(calculadora(3, '+', 4))