// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var OiltempSchema = new mongoose.Schema({
	
	oiltemp: Number
});

OiltempSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Oiltemp', OiltempSchema);