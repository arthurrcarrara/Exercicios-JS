// Var pode ser acessada em diferentes escopos
{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//A variavel VAR quando declarada numa funcao, so pode ser acessada dentro do escopo da funcao
function teste() {
    var local = 123
    console.log(local)
}

teste()
//Nao eh possivel acessar da seguinte maneira:
//console.log(local)
