// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allos us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
  name : {type : String, default: ''}
});
