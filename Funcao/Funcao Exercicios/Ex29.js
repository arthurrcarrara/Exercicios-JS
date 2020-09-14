function intervalo(){
    let a = 10
    let b = 20
    let numeros = [2, 49 ,12, 22, 20, 11, 19, 31]
    let totin = 0
    let totfora = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10 && numeros[i] <= 20){
            totin++;
        }else{
            totfora++
        }
    }
    return `Qtde de numeros no intervalo:${totin} , Qtde de numeros fora do intervalo:${totfora}`
}

console.log(intervalo())