const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const BlogRoute = require("./Routes/Blog.js");

app.use("/Blog", BlogRoute);

module.exports = app;
