function fruta (nome) {
    switch (nome) {
        case 'maca':
            console.log('Nao vendemos essa fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.')
            break
        case 'melancia':
            console.log('Aqui esta, 3 reais o quilo.')
            break
        default:
            console.log('[ERRO] Fruta nao identificada')
    }
}

fruta('maca')
fruta('kiwi')
fruta('melancia')