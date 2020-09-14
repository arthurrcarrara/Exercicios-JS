let num1 = 1 
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //So depois da comparacao que sera decrementado
//Nao eh uma boa pratica por um incremento numa comparacao
console.log(num1 === num2)