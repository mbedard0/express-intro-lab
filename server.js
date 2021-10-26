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

app.get('/students', function(req, res) {
  studentsDB.find({}, function(error, student) {
    res.render(('students/index'), {
      student: student,
      error: error,
    })
  })
})

// app.get('/students/:id', function(req, res) {
// 	console.log(`The value for the :id route parameter is: ${req.params.id}`);
	// res.render('students/show', {student: {name: 'Lisa', age: 14, _id: 20071115}})
//   const {id} = req.params.id;
// 	res.render('students/show', studentsDB.find({id}, function(student) {
//     student._id==={id}}))
// });

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})