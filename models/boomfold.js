// Load required packages
var mongoose = require('mongoose');

// Define our pressure schema
var timestamps = require('mongoose-timestamp');
var BoomfoldSchema = new mongoose.Schema({
	
	boomfup: Number,
	boomfcc: Number

});

BoomfoldSchema.plugin(timestamps);
	
// Export the Mongoose model
module.exports = mongoose.model('Boomfold', BoomfoldSchema);