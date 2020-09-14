// par Nome/Valor
const saudacao = 'Opa' //Contexto lexico 1

function exec() {
    const saudacao = 'Falaaaa' // Contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


