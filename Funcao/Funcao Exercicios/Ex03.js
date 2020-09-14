/* METODO ANTIGO
function expoente(base, expoente){
    const resultado = Math.pow(base,expoente)
    console.log(`O resultado foi ${resultado}`)
}
expoente(5, 3)
*/

//METODO NOVO

function expoente(base, expoente){
    const resultado = base ** expoente
    console.log(`O resultado foi ${resultado}`)
}

expoente(5, 2)