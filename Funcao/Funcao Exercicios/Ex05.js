function converter(valor){
    const moeda = valor.toFixed(2).replace("." , ",")

    console.log(`R$${moeda}`)
}

converter(0.1 + 0.2)