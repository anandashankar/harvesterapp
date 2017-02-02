// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var OillevelSchema = new mongoose.Schema({
	
	oillevel: Number
});

OillevelSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Oillevel', OillevelSchema);