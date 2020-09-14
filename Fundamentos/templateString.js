const nome = 'Rebeca'
const concatenacao = "Ola " + nome + '!'
const template =`
    Ola
    ${nome}!`

console.log(concatenacao, template)

//Expressoes
console.log(`1 + 1 = ${1 + 1}`)// Vai interpolar a expressao.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)//Chamou a funcao