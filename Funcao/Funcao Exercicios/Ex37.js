function pA(n,A1,r){
    for(let i = 0; i < n; i++){
        console.log(A1 + r*i) // Nao entendi essa formula (An = A1 + (n - 1)*r)
    }
    console.log('Soma: ' + (n * ( A1 + ((n - 1)*r)))/2)
}

pA(10, 4, 8)

function pG(n, A1, r){
    for(let i = 0; i < n; i++){
        console.log(A1 *( r ** i )) // Nao se considera An = A1 * ((q**n) - 1) / q - 1
    }
    console.log('Soma: ' + (A1 * ((r**n) - 1)) / (r - 1))
}

pG(4, 2, 2)