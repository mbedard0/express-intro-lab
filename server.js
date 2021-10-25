// import modules

import express from 'express'
import * as studentsDB from './data/studentsDB.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)

// Mount routes

app.get('/', function(req, res) {
  res.redirect('home');
})

app.get('/home', function(req, res) {
  res.render('home');
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

app.get('/students', function(req, res) {
  studentsDB.find({}, function(error, student) {
    res.render(('students/index'), {
      student: student,
      error: error,
    })
  })
})