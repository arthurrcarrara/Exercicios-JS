

let valor // nao inicializada
console.log(valor)

valor = null //Ausencia de valor
console.log(valor)//Sempre use nulo quando zerar uma variavel
//console.log(valor.toString()) // Error! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //Evite atribuir undefined. Deixe a linguagem atribuir undefined.
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preco
console.log(!!produto.preco)
console.log(produto)