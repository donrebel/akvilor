//var async = require('async');
var util = require('util');

var mongoose = require('../modules/mongoose'),
Schema = mongoose.Schema;

var schema = new Schema({
	userName: {
		type: String,
		unique: true,
		require: true
	},
	hashedPassword: {
		type: String,
		require: true
	},
	salt: {
		type: String,
		require: true
	},
	eMail:{
		type: String,
		unique: true,
		require: true
	},
	personName: {
		type: String,
		require: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});
var User = mongoose.model('User', schema);

var users = {

  getAll: function(req, res) {
    User.find({}, function(err, allusers) {
      if (err) {
  			return next(err);
  		}
      console.log(allusers);
      res.json(allusers);
    })
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },

  create: function(req, res) {
    var newuser = req.body;
    data.push(newuser); // Spoof a DB call
    res.json(newuser);
  },

  update: function(req, res) {
    var updateuser = req.body;
    var id = req.params.id;
    data[id] = updateuser // Spoof a DB call
    res.json(updateuser);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'user 1',
  id: '1'
}, {
  name: 'user 2',
  id: '2'
}, {
  name: 'user 3',
  id: '3'
}];

module.exports = users;
