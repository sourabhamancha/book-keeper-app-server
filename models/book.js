var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
