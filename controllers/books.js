//IMPORTING BOOK MODEL, SAME AS ONE IS SERVER.JS FILE
const Book = require("../models/book.js");


//1- home page - welcome to my books page  -- index.ejs
const home = async (req, res) => {
    res.render("index.ejs");
}

//2 - add a new book -- new.ejs
const New = async (req, res) => {
    res.render("books/new.ejs");
};

//3- show all the books -- show.ejs,, if done early create a views filts based on a) if read or not, b)year of publication, c)rating, d)no of pages
const index = async (req, res) => {
    // const books = await Book.find();
    res.render("books/index.ejs");
};


module.exports = {
    index,
    home,
    New,
}