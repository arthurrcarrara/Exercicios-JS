function verificarInteiro(numero){
    let valor = parseInt(numero)
    return valor % 3 == 0 ? "True" : "False"
}

console.log(verificarInteiro(5))