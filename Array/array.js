console.log(typeof Array, typeof new Array, typeof [])

//Quando utilizar um array, a boa pratica determina que o array deve manter-se homogeneo.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //O intervalo das posicoes ficaram undefined, pois nao ha valores atribuidos
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Alterou de forma alfabetica o array em questao 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) 
console.log(aprovados)