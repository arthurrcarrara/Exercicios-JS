function anoBissexto(ano){
    if( ano % 100 != 0 && ano % 4 == 0){
        return console.log("True")
    }else if (ano % 400 == 0){
        return console.log("True")
    }else{
        return console.log('False')
    }
}

anoBissexto(2002)