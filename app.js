const path = require('path')
const express = require ('express')
const hbs = require ('hbs')

const publicDirPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirPath))

hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index'
    })
})

app.get('/people', (req, res) => {
    res.render('people', {
        title: 'People'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})