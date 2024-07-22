const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    rating: Integer,
    yearPublished: Integer,
    noOfPages: Integer,
    publisher: String,
    readYet: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;



