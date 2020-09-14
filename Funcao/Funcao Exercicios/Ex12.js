function fatorial(numero){
    let fatorial = numero
    let valor = 1

    for(let i = 1; i <= fatorial; i++){
        valor = valor * i 
    }
    console.log(`${valor}`)
}

fatorial(5)