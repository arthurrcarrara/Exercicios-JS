//estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a = a || 1 // Caso o valor seja false,assume 1.
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3),soma1(0, 0, 0))
//Zero retorna FALSE

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Verificar se for numero
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrado do ES2015(ECMA)
function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma(0, 0, 0))