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


//MIDDLEWARE
app.use(morgan("dev"));

//ROUTES
//landing page - just to check if server is working
app.listen(5010, () => {
    console.log("Listening on port 5010");
  });
  
//1- home page - welcome to my books page  -- index.ejs
//2 - add a new book -- new.ejs
//3- show all the books -- show.ejs,, if done early create a views filts based on a) if read or not, b)year of publication, c)rating, d)no of pages
//4- show a certain books details -- books/index.ejs
//5 - edit an existing book - edit.ejs
//6- delete an existing book - a simple button that exists 

