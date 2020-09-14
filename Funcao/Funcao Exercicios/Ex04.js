function divisao(dividendo, divisor){
    const resultado  = parseInt(dividendo / divisor)
    const resto = dividendo % divisor
    console.log(`Resultado: ${resultado} / Resto: ${resto}`) 
}

divisao(9,2)