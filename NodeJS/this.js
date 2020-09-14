console.log(this === global)
//falso: this aponta para module.exports
console.log(this === module)

//Fora de uma funcao aponta para o module.exports
console.log(this === module.exports)
console.log(this === exports)

//this dentro de uma funcao aponta para global
function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}