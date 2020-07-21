var mongoose = require("mongoose");

var MacSchema = new mongoose.Schema({
  name:String,
  type:String,
  macaddress:String,
  comments:String
});


module.exports = mongoose.model('Mac',MacSchema);