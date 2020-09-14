console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' (Essa linha eh equivalente a de cima, apenas uma diferente notacao)
console.log(obj1.nome)

//O "ponto" sera utilizado para os membros de objetos,funcoes.

function Obj(nome){
    this.nome = nome
    this.exec = function (){

    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)