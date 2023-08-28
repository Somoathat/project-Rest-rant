const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/Pad Thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Copy cat food.jpg'
      }]
      
      res.render('places/index', { places })

  })
  app.get('/new', (req, res) => {
    res.render('places/new')
  })
  app.post('/',  (req, res) => {
    res.send('You called post places/stub')
  })
  

module.exports = app


   
