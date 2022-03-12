if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import library (express, app, expressLayouts)
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


app.set('view engine', 'ejs') //set view engine using ejs
app.set('views', __dirname + '/views') //add to views directory
app.set('layout', 'layouts/layout') //add to layout directory
app.use(expressLayouts) //use expressLayouts library
app.use(express.static('public')) //add to public directory
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false }))

//integrate mongodb using mongoose
const mongoose = require('mongoose') //import mongoose
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) //connect to mongodb
const db = mongoose.connection //connect to db
db.on('error', error => console.error(error)) //if error, print error
db.on('open', () => console.log('Connected to Mongoose')) //if no error, print connected to mongodb


app.use('/', indexRouter) //use indexRouter
app.use('/authors', authorRouter) //use authorRouter

app.listen(process.env.PORT || 3000) //listen on port 3000

