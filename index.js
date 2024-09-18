const fs = require('node:fs/promises')

fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(text)
})

fs.readFile('./archivo.txt', 'utf-8').then(text=>{console.log('segundo texto: ',text)})