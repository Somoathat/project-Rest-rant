const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('/abc', (req, res) => {
    res.send('Hello ABC')
})

app.listen(3000)

