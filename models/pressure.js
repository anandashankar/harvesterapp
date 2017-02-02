// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var PressureSchema = new mongoose.Schema({
	
	pressure: { type:[Number]}
});

PressureSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Pressure', PressureSchema);

