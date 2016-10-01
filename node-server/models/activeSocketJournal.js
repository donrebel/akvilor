var mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;
	
var schema = new Schema({
	userName: {
		type: String,
		require: true
	},
	socketId: {
		type: String,
		require: true
	},
	createdAt:{
		type: Date,
		default: new Date().getTime()
	}
})	

exports.ActiveSocketJrnEntry = mongoose.model('active_sockets', schema);
