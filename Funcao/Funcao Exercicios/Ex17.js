function aumentoSalario (plano,salario){
    switch (plano){
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano Invalido'
    }
    
}

console.log(aumentoSalario('d',2000))