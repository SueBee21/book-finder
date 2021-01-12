const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Image, required: true },
  //  link: { type:        , required, true }
});

const List = mongoose.model("List", listSchema);

module.exports = List;

