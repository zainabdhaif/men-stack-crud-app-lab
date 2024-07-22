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
  
