var mongoose = require("mongoose");

var NetworkSchema = new mongoose.Schema({
  title: String,
  body: String,
  name: String,
  type: String,
  ipv4: String,
  ipv6: String,
  comments: String,
});

module.exports = mongoose.model("Network", NetworkSchema);
