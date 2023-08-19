require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('/abc', (req, res) => {
    res.send('Hello ABC')
})
app.get('/TEF', (req, res) => {
    res.send('Hello TEF')
})

app.get('*', (req, res) => {
    res.send('I didnt expect that')
})


app.listen(process.env.PORT)

