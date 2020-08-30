// const { Schema, model } = require('mongoose')

// Import Mongoose
const mongoose = require('mongoose')

// Create mongoose Schema function
const Schema = mongoose.Schema

const schemaDefinitions = {
    bookname: {
        type: String,
        required: true,
        trim: true,
    },
    isbn: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
    },
    coverType: {
        type: String,
        trim: true,
        required: true,
    },
    genre: [],
}

const schemaOptions = {
    timestamps: true,
}

const bookSchema = new Schema(schemaDefinitions, schemaOptions)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

