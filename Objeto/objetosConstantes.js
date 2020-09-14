// pessoa -> 123 -> {...}

const pessoa = { nome : 'Joao'}
pessoa.nome = 'Pedro'
pessoa.nome = 'Maria'
console.log(pessoa)

//pessoa -> 456(novo endereco) -> {...} 
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //O objeto foi congelado, portanto tornou-se constante.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)