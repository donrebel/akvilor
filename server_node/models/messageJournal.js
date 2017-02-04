var mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;
	
var schema = new Schema({
	msgtext: {
		type: String,
		require: true
	},
	sender_id: {
		type: String,
		require: true
	},
	receiver_id: {
		type: String,
		require: true
	},
	receiver_type_id: {
		type: String,
		require: true      //1 - group, 2 - person
	}, 
	timestamp: {
		type: Date,
		default: Date.now
	}
})	

exports.MessageJournalEntry = mongoose.model('message', schema);



