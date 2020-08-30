//Import Express
const express = require('express')

// Use Express Router function
const router = express.Router()

// Import the book model
const Book = require('../models/Book')


// Getting all the books from the database
router.route('/').get((req, res) => {
    // Accesing book model and running the mongoose find function
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json(err));
})

// Adding a new book to the database
router.route('/').post((req, res) => {
    // Creating a new Book document(database entry) using the Book Schema and the request body
    const newBook = new Book(req.body)

    // Saving the document in mongoDB using mongoose save function
    newBook.save()
    .then(book => {
        book.response = "Book Added!"
        res.json(book)
    })
    .catch(err => res.status(400).json(err));
})

module.exports = router;