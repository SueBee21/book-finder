const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: String,
  link: { type: String}
});

const List = mongoose.model("List", listSchema);

module.exports = List;

