const express = require('express')
const router = express.Router() 
const Book = require('../models/book')

//create the routes
router.get('/', async (req, res) => {
    let books
    try {
        books= await Book.find().sort({createdAt: 'desc'}).limit(10).exec()
    } catch {
        
    }
    res.render('index', {books:books}) 
})

module.exports = router //export the router so the server.js can access
