// Load required packages
var mongoose = require('mongoose');

// Define our Motor temperature schema
var timestamps = require('mongoose-timestamp');
var MotortempSchema = new mongoose.Schema({
	
	motortemp: Number
});

MotortempSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Motortemp', MotortempSchema);