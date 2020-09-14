console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// exports = {
//     nome: 'Teste'
// } Nao sera  retornado.
// THIS e EXPORTS sao apenas duas referencias para o mesmo objeto que module.exports aponta.

console.log(module.exports)

module.exports = { publico: true }