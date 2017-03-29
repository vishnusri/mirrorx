let express = require('express')
let bodyParser = require('body-parser')
let app = module.exports = express()

app.set('views', 'views')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.render('index')
})
