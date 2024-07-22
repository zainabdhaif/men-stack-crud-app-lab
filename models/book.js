const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    author: { type: String, required: true },
    rating:{ type: Number, required: true },
    yearPublished: { type: Number, required: true },
    noOfPages:{ type: Number, required: true },
    publisher: { type: String, required: true },
    readYet: { type: Boolean, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;



