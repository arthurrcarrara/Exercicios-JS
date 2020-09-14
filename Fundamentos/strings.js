const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Codigo da tabela ASCII
console.log(escola.indexOf('3'))//Caracter da posicao Indice 3

console.log(escola.substring(1))//Vai retirar o caracter da indice estipulado (1)
console.log(escola.substring(0,3))//Vai retornar os caracteres do intervalo estipulado atravez dos indices

console.log('Escola '.concat(escola).concat("!"))//Valor literal concatenado com a variavel.
console.log('Escola ' + escola + "!")// Outra forma de concatenar.
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))// /\d/ Refere-se a todos os digitos da variavel escola.
console.log(escola.replace(/\w/g, 'e'))// Substitui tudo pela letra E. 
//Regex(Regular Expression) Vale a pena dar uma olhada.

console.log('Ana,Maria,Pedro'.split(','))// Vai separar num Array


