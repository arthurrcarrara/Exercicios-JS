function numerosImpares(inicio, fim){
    if(inicio > fim){
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }

    for(let i = inicio; i <= fim; i++){
        if( i % 2 != 0){
        console.log(i)
        }
    }
}

numerosImpares(10, 2)