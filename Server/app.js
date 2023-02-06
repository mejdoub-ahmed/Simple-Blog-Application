const express = require("express");
//Create an Express App
const app = express();

//Middleware to parse incoming requests with JSON
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Require application Route modules
const BlogRoute = require("./Routes/Blog.js");

// Routes to the middleware handling path
app.use("/Blog", BlogRoute);

module.exports = app;
