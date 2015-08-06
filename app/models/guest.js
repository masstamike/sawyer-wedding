// app/models/guest.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allos us to pass this to other files when it is called
module.exports = mongoose.model('Guest', {
  name : {type : String, default: ''},
  contact : {type : String, default: ''},
  count : {type: Number, default: 0},
  message : {type: String, default: ''},
  email : {type: String, default: ''},
  menuBeef: {type: Number, default: 0},
  menuChicken: {type: Number, default: 0},
  menuVeggie: {type: Number, default: 0}
});
