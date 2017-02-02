// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var FuellevelSchema = new mongoose.Schema({
	
	fuellevel: Number
});

FuellevelSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Fuellevel', FuellevelSchema);