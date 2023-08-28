const app = require('express').Router()
const places= require('../models/places.js')
// GET /places
app.get('/', (req, res) => {

      
      res.render('places/index', { places })

  })
  app.get('/new', (req, res) => {
    res.render('places/new')
  })
  app.post('/',  (req, res) => {
    console.log (req.body)
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
      })
      

module.exports = app


    
