
function adicionaVetor(a,b){

    let vetorResultado = a.concat(b)

    return `${vetorResultado}`

}

let vetorPilha = [1, 2, 3, 4, 5]

let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(adicionaVetor(vetorAdiciona, vetorPilha))