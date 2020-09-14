console.log('01)', '1' == 1) //Comparando apenas valor
console.log('02)', '1' === 1)//Comparando valor e tipo
console.log('03)', '3' != 3)//Apenas valor
console.log('04)', '3' !== 3)//Valor e tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('06)', 3 >= 2)

const d1 = new Date(0)//0 Parametro da linguagem para 01/01
const d2 = new Date(0)
console.log('09)', d1 === d2) //Vai comparar o endereco de memoria(d1,d2)
console.log('10)', d1 == d2)//Vai comparar o endereco de memoria(d1,d2)
console.log('11)', d1.getTime() === d2.getTime())// Nesse caso, d1 e d2 sao numbers devido ao getTime.
console.log('12)', undefined == null)
console.log('13)', undefined === null)
