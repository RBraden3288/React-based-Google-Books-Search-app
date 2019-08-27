//import Book scheama from ./api/books.js
const router = require('express').Router();
const bookRoutes = require('./books');

// import API key
// require('dotenv').config();
//use: process.env.GoogleBooksAPIKey;
router.use('/books', bookRoutes);

module.exports = router;






