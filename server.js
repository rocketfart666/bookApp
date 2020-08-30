
// Importing Packages to be used
const express = require('express');
const mongoose = require('mongoose');

// Connecting to MongoDB
const Mongo_URI = "mongodb+srv://giresh:giresh@cluster0.i4kaz.mongodb.net/FirstApp?retryWrites=true&w=majority"
mongoose.connect(Mongo_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(res => {
    // Creating the backend server on port
    const app = express();
    const port = process.env.PORT || 5000;

    // Running Express
    app.use(express.json());

    // Get routes to manipulate mongoDB (Database)
    const booksRouter = require('./routes/books')
    app.use('/api/books', booksRouter)

    // Run Express server on selected Port
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
})
.catch(err => console.log(err))

