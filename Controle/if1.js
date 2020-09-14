function soBoaNoticia(nota) {
    if (nota >= 7) { 
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('Eh verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined) // Nao faz sentido
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0) // 0 = false
seForVerdadeEuFalo(-1) // -1 = true
seForVerdadeEuFalo(' ') //String vazia = true
seForVerdadeEuFalo('?') //True
seForVerdadeEuFalo([]) //True
seForVerdadeEuFalo([1, 2]) //True
seForVerdadeEuFalo({}) //True
