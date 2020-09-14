function planoSaude(idade){
    let min = 100

    if(idade < 10) {
        return min + 80
    }else if(idade < 30){
        return min + 50
    }else if(idade < 60){
        return min + 95
    } else {
        return min + 130
    }
}

console.log(planoSaude(8))

console.log(planoSaude(18))

console.log(planoSaude(44))

console.log(planoSaude(80))