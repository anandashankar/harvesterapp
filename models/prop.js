// Load required packages
var mongoose = require('mongoose');

// Define our propeller schema
var timestamps = require('mongoose-timestamp');
var PropellerSchema = new mongoose.Schema({
	
	rpm: Number,
	force: Number

});

PropellerSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Prop', PropellerSchema);