// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var LocationSchema = new mongoose.Schema({
	
	latitude: Number,
	longitude: Number
});

LocationSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Location', LocationSchema);

