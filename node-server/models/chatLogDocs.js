var async = require('async');
var mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;
	
var chatSessionLogSchema = new Schema({
	sessionName: {
		type: String,
		require: true
	},
	participants: [],
	createdAt:{
		type: Date,
		default: new Date().getTime()
	}
});	
exports.ChatSessionLogEntry = mongoose.model('chat_sessions', chatSessionLogSchema);

var chatMessageLogSchema = new Schema({
	txt: {
		type: String,
		require: true
	},
	chatSessionId: {
		type: String,
		require: true
	},
	senderUserName: {
		type: String,
		require: true,
		default: ''
	},
	createdAt:{
		type: Date,
		default: new Date().getTime()
	}
});	

chatMessageLogSchema.statics.getDialog = function(sessionId, callback){
	var chatMessageLogEntry = this;
	
	if (sessionId){
		async.waterfall([
			function(callback){
				chatMessageLogEntry.find({'chatSessionId': sessionId}, callback);
			},
			function (dialog, callback){
				if (dialog){					
					callback(null, dialog);					
				} else {
					callback(new HttpError(500));
				}
			}
		], callback);	
	};	
};

exports.ChatMessageLogEntry = mongoose.model('chat_messages', chatMessageLogSchema);

var usrChatMessageLogSchema = new Schema({
	userName: {
		type: String,
		require: true
	},
	chatSessionName: {
		type: String,
		require: true
	},	
	chatSessionId: {
		type: String,
		require: true
	},
	readedFlag: {
		type: Boolean,
		default: false	
	}
});

usrChatMessageLogSchema.statics.getUsrActiveSessions = function(userName, callback){
	
	var UsrChatMessageLogEntry = this;
	
	if (userName){
		async.waterfall([
			function(callback){
				//UsrChatMessageLogEntry.find({'userName': userName, 'readedFlag':false}, callback);
				
				var rules = [{'userName': userName}, {'readedFlag':false}];
				// and here are the grouping request:			
				UsrChatMessageLogEntry.aggregate([
					{ $match: {$and: rules } },
					{
						$project: {
							_id: 0, // let's remove bson id's from request's result
							chatSessionId: 1, // we need these fields
							chatSessionName: 1							
						}
					},
					{
						$group: {
							_id: '$chatSessionId', // grouping key
							chatSessionName: { $first: '$chatSessionName'}
						}
					}
				], callback)
			},
			function (sessionList, callback){
				if (sessionList){					
					callback(null, sessionList);					
				} else {
					callback(new HttpError(500));
				}
			}
		], callback);	
	};
}; 

exports.UsrChatMessageLogEntry = mongoose.model('usr_chat_messages', usrChatMessageLogSchema);


