function mediaVetor(vetor){
    let totvetor = 0
    
    for(let i = 0; i < vetor.length; i++){
        totvetor += vetor[i]
    }

    let media = (totvetor / vetor.length).toFixed(2)

    console.log(`A media do vetor eh: ${media}`)

}

vetor = [2, 3, 4, 7, 10, 12]

mediaVetor(vetor)
