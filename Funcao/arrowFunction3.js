let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)// Aponta para o OBJ, nao mais o escopo global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //Foi escrito num modulo, nao mais no escopo global. A funcao arrow encontra-se num modulo.
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj)
