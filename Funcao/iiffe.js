//IIFE -> Immediately Invoked Function Expression
//Eh um padrao utilizado para fugir do escopo global.
//Tudo que for criado dentro da funcao auto invocavel, so sera acessado dentro da funcao.

(function (){
    console.log('Sera executado na hora')
    console.log('Foge do escopo mais abrangente!')
})()
