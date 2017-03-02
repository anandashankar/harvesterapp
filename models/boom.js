// Load required packages
var mongoose = require('mongoose');

// Define our beer schema

var timestamps = require('mongoose-timestamp');
var BoomSchema = new mongoose.Schema({

	boomlift: String,
	boomfold: String,
	boomrotate: String

});

BoomSchema.plugin(timestamps);
	
/*var HarvesterSchema   = new mongoose.Schema({
	Harvester: [Contents]
});
*/
// Export the Mongoose model
module.exports = mongoose.model('Boom', BoomSchema);	

