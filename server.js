//IMPORTING MODULES
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();

//REQUIRE DATABASE
require('./config/database');

const app = express();
