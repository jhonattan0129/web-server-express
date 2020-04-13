const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))

//Express hbs

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhonattan',
        anio: 2020
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: 2020
    })
})

app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${ port }`)
})