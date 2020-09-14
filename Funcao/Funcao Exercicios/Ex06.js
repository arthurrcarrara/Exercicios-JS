function jurosSimples(capitalInicial, juros, tempo){

    return ((capitalInicial * (juros/100)) * tempo) + capitalInicial   
}

function jurosComposto(capitalInicial, juros, tempo){
     
    return capitalInicial * (1 + (juros/100)) ** tempo  
}


console.log(jurosSimples(1000, 20, 4))
console.log(jurosComposto(1000, 20, 4))
