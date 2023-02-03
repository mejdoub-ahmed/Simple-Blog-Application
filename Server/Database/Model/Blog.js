let mongoose = require("mongoose");
mongoose.set("strictQuery", false);

let BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  upvote: { type: Number, default: 0 },
  downvote: { type: Number, default: 0 },
});

module.exports = mongoose.model("Blog", BlogSchema);
