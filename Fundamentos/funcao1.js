//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//Vai ignorar os demais.

//Funcao com retorno
function  soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))//Ele utiliza o valor padrao estipulado na declaracao da function. Houve um tratamento na variavel b.