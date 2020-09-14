function maiorMenor(){
    let numeros = [3, 7, 43, 11, 43, 23, 54, 22, 85, 45, 17, 12]
    let maior = 0
    let menor = 0

    for(let i = 0; i < numeros.length; i++){
        if( maior == 0 && menor == 0){
            maior = numeros[i]
            menor = numeros[i]
        }else{
            if(numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
        }

    }
    return `Maior:${maior} , Menor:${menor}`
}

console.log(maiorMenor())