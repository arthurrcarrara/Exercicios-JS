function comprarCarro(carro){
    switch (carro){
        case 'hatch':
            return 'Compra efetuada com sucesso';
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que nao prefere esse modelo?';
            break
        default :
            return 'Nao trabalhamos com esse tipe de automovel aqui.'
    }
}

console.log(comprarCarro('sedan'))