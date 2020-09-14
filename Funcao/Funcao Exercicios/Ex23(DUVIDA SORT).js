function desempenhoAluno(codigo,n1,n2,n3){

        let notas = []
    notas.push(parseFloat(n1))
    notas.push(parseFloat(n2))
    notas.push(parseFloat(n3))
    let menor
    let maior
    

    let media
    media = (maior*4)+(menor*3) / 7

    return `Matricula:${codigo} Notas:${n1},${n2},${n3} Media:${media >= 5 ? 'Aprovado' : 'Reprovado'} `
}

console.log(desempenhoAluno(7,7,8,6))

