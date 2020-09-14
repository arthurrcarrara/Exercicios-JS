let vetorA = [1, 2, 3, 4, 5, 6]

function multVetor(vetor,multiplicador){
    
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });
    
    return vetorResultado 
}

console.log(multVetor(vetorA, 3))