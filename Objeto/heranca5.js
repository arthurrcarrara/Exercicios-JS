console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Atribuicao na funcao String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Nao deve-se substituir funcoes estabelecidas na API.
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r', reverse())