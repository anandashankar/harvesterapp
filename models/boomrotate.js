// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var BoomrotateSchema = new mongoose.Schema({
	
	boomtlp: Number,
	boomtrp: Number,
	boomrcc: Number

});

BoomrotateSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Boomrotate', BoomrotateSchema);