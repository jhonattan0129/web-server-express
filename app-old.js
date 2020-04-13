const http = require('http')
http.createServer((req, res) => {
        res.writeHead(200, 'Content-Type', 'aplicttion/json')
        let salida = {
                nombre: 'jhonattan',
                edad: 20,
                url: req.url
            }
            // res.write('Hola Mundo')
        res.write(JSON.stringify(salida))
        res.end()
    })
    .listen(8080)

console.log('Esuchando en puerto 8080');