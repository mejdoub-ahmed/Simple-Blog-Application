var mongoose = require("mongoose");
var mongoUri = "mongodb+srv://ahmed:ahmed@blogapp.o5ehref.mongodb.net/test";

var connection = mongoose.connect(mongoUri, () => {
  console.log("Database connected  :)");
});

module.exports = connection;
