function negativos(){
    let numeros = [-4, 5, 6, -3, 10, 3, -7]
    let totneg = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            totneg++
        }
    }
    console.log(`Numeros negativos: ${totneg}`)
}

negativos()