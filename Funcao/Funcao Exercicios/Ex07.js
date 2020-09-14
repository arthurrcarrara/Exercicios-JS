function bhaskara(a, b, c){
    const delta = Math.pow(b,2) - (4 * a * c)
    
    if(delta < 0 ){
        return "Delta eh negativo"
    }else{
        const raizdelta = Math.sqrt(delta, 2)
        let raizes = []
        x1 = (-(b) + raizdelta) / 2 * (a)
        x2 = (-(b) - raizdelta) / 2 * (a)
        raizes.push(x1)
        raizes.push(x2)
        return raizes
    }
}

console.log(bhaskara(1, 3, 2))

console.log(bhaskara(3, 1, 2))