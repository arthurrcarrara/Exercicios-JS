function triangulo(a, b, c){
    if(a === b && a === c && b === c){
        console.log(`Triangulo Equilatero`)
    }else if (a === b || a === c || b === c){
        console.log(`Triangulo Isosceles`)
    }else if (a !== b && a !== c && b !== c){
        console.log(`Triangulo Escaleno`)
    }
}

triangulo(6, 6, 6)
triangulo(6, 3, 6)
triangulo(5, 6, 7)