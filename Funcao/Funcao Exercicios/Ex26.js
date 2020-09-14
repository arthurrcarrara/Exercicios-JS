function contadorPares() {
    let i = 0
    let pares = []
    let impares = []
   
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            pares.push(i)
        }else{
            impares.push(i)
        }
    }
    console.log(pares.length)
    console.log(impares.length)
}

contadorPares()
