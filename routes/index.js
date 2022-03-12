const express = require('express')//import express
const router = express.Router() //import router

//create the routes
router.get('/', (req, res) => { //get request and respond to /
    res.render('index') //render the index.ejs file
})

module.exports = router //export the router so the server.js can access
