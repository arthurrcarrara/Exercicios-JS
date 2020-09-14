let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Uma unica linha / Return implicito
console.log(dobro(Math.PI))

ola = () => 'Ola'//Forma padrao
ola = _ => 'Ola' //Possui um parametro
console.log(ola())

