const funcs = []

for(var i =0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Devido ao fato de VAR nao ter escopo de bloco, sera impresso 10.