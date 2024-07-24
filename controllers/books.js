//IMPORTING BOOK MODEL, SAME AS ONE IS SERVER.JS FILE
const Book = require("../models/book.js");


//1- home page - welcome to my books page  -- index.ejs
const home = async (req, res) => {
    res.render("index.ejs");
}

//2.a - add a new book -- new.ejs
const New = async (req, res) => {
    res.render("books/new.ejs");
};

//2.b - add a new book -- new.ejs actual update of data
const create = async (req, res) => {
    await Book.create(req.body);
    //send the user to a new page 
    res.redirect("/books");
}

//3- show all the books -- show.ejs,, if done early create a views filts based on a) if read or not, b)year of publication, c)rating, d)no of pages
const index = async (req, res) => {
    const books = await Book.find();
    res.render("books/index.ejs", {books});
};

//4- show a certain books details -- books/index.ejs
const show = async (req, res) => {
    const book = await Book.findById(req.params.bookId);
    res.render("books/show.ejs", {book});
};

//5.a - edit an existing book - edit.ejs
const edit = async (req, res) => {
    const foundBook = await Book.findById(req.params.bookId);
    res.render("books/edit.ejs", {book: foundBook});
};

//5.b - actually update the edited data
const update = async (req, res) => {
  await Book.findByIdAndUpdate(req.params.bookId, req.body);
  res.redirect(`/books/${req.params.bookId}`);
}

module.exports = {
    index,
    home,
    New,
    create,
    show,
    edit,
    update
}