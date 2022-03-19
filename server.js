if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import library (express, app, expressLayouts)
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('layout', 'layouts/layout') 
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false }))

//integrate mongodb using mongoose
const mongoose = require('mongoose') //import mongoose
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) //connect to mongodb
const db = mongoose.connection //connect to db
db.on('error', error => console.error(error)) //if error, print error
db.on('open', () => console.log('Connected to Mongoose')) //if no error, print connected to mongodb


app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter) 

app.listen(process.env.PORT || 3000) //listen on port 3000

