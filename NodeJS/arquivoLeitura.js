const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Leitura de JSON e convertido em objeto
const config = require('./arquivo.json')
console.log(config.db)

//Ler diretorio e callback com todos os arquivos dele.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})