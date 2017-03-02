// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var BoomliftSchema = new mongoose.Schema({
	
	boomlup: Number,
	boomlcc: Number

});

BoomliftSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Boomlift', BoomliftSchema);