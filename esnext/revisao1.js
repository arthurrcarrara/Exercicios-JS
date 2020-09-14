// Let e Const
{
    var a = 2
    let b = 3
    console.log(b)//Let tem escopo de bloco, por isso pode apenas ser acessada dentro do bloco.
}
console.log(a) //Var nao possui escopo de bloco
// console.log(b) 

//Template String
const produto = 'Ipad'
console.log(`${produto} eh caro`)

//Desctructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "Ana", idade: 9 }
console.log(i, nome)
