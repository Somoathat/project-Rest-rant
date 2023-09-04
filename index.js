require('dotenv').config()
const express = require('express')
const methodOverride= require('method-override')
const app = express()
const mongoose= require('mongoose')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))




async function main(){

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected")
}
main().catch(err => console.log(err));



app.get('/', (req, res) => {
    res.render('home')
  })
  
app.get('/abc', (req, res) => {
    res.send('Hello ABC')
})
app.get('/TEF', (req, res) => {
    res.send('Hello TEF')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  


app.listen(process.env.PORT)

