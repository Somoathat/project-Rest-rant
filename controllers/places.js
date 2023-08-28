const app = require('express').Router()
const places= require('../models/places.js')
// GET /places
app.get('/', (req, res) => {
console.log('Im here')// app.use(bodyParser.json({extended:true}));  
//$.ajax({

//     url: '/places',
//     dataType: 'json',
//     success: function( data ) {
//       console.log( "Success:", data);
//     },
//     error: function( data ) {
//       console.log( "Error:", data);
//     }
//   });
// app.get('/places', (req, res) => {
//     console.log('Im at line 18')
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('places/edit', { place: places[id] })
//     }
//   })
app.get('/edit', (req, res) => {
    res.render('places/edit')
  })


    app.get('/:id/edit', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
            res.render('error404')
        }
        else if (!places[id]) {
            res.render('error404')
        }
        else {
          res.render('places/edit', { place: places[id] })
        }
      })
      
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


    
