function avaliacao(nota){
    let notacorrigida = arredondar(nota)
    if(notacorrigida >= 40){
        console.log(`Aluno aprovado com nota ${notacorrigida}`)
    }else{
        console.log(`Aluno reprovado com nota ${notacorrigida}`)
    }
}

function arredondar (nota) {
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
    return nota
}
}

avaliacao(83)