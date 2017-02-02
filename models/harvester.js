// Load required packages
var mongoose = require('mongoose');

// Define our beer schema

var timestamps = require('mongoose-timestamp');
var HarvesterSchema = new mongoose.Schema({
	
	id: Number,
	step_ms: String,
	oillevel: String,
	fuellevel: String,
	pressure: String,
	location: String,
	motortemp: String,
	oiltemp: String

});

HarvesterSchema.plugin(timestamps);
	
/*var HarvesterSchema   = new mongoose.Schema({
	Harvester: [Contents]
});
*/
// Export the Mongoose model
module.exports = mongoose.model('Harvester', HarvesterSchema);

