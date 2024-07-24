//IMPORTING MODULES
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();

//REQUIRE DATABASE
require('./config/database');

const Book = require("./models/book.js");

const app = express();

const booksCtrl = require("./controllers/books.js");


//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//ROUTES
//landing page - just to check if server is working
app.listen(5010, () => {
    console.log("Listening on port 5010");
  });
  
//1- home page - welcome to my books page  -- index.ejs
app.get('/', booksCtrl.home);

//2.a - add a new book -- new.ejs
app.get('/books/new', booksCtrl.New);

//2.b - add a new book -- new.ejs actual update of data
app.post('/books', booksCtrl.create);

//3- show all the books -- show.ejs,, if done early create a views filts based on a) if read or not, b)year of publication, c)rating, d)no of pages
app.get('/books', booksCtrl.index);

//4- show a certain books details -- books/index.ejs
app.get("/books/:bookId", booksCtrl.show);

//5.a - edit an existing book - edit.ejs
app.get('/books/:bookId/edit', booksCtrl.edit);

//5.b - actually update the edited data

//6- delete an existing book - a simple button that exists 

