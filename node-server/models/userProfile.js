var mongoose = require('../modules/mongoose');
var Schema = mongoose.Schema;

var userProfileSchema = new Schema({
	userName: {	type: String,	require: true, unique: true},
  personName: { type: String, require: true },
  email: { type: String, require: true },
  synopsis: { type: String, require: false },
  ratePerMinute: { type: Number, require: true },
  likes: { type: Number, default: 0 },
	skilltaglist: [{type: String}],
	created_at: Date,
	updated_at: Date

  /*avatar: { data: Buffer, contentType: String },
  canvas: { data: Buffer, contentType: String },
  skilltaglist: [{type: String}],
  feedbacks: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]*/
/*
	meta: {
		age: Number,
		mentor: Boolean
	}
*/
});

userProfileSchema.pre('save', function(next) {
	var isoDate = new Date().toISOString();

  this.updated_at = isoDate;
  if (!this.created_at)
    this.created_at = isoDate;
  next();
});

var UserProfile = mongoose.model('user_profile', userProfileSchema);

var userProfile = {
	readAll: function(req, res, next) {
		UserProfile.find({}, function(err, userProfileList){
			if (err) {
				next(err)
			} else {
				res.json(userProfileList)
			}
		})
  },

	readOne: function(req, res, next) {
		if (!req.params.id) {
			next();
		}
    var userName = req.params.id;
		//UserProfile.findById(userName, function(err, userProfile) {
		UserProfile.find({'userName': userName}, function(err, userProfile) {
			if (err) {
		  	next(err);
		  }
		  res.json(userProfile);
		})
  },

	create: function(req, res, next) {
		if (!req.body.data) {
			next();
		}
		var userProfileData = req.body.data;
		var newUserProfile = new UserProfile(userProfileData)
		newUserProfile.save(function(err, userProfile){
			if (err) {
				next(err)
			} else {
				res.json(userProfile);
			}
		})
	},

	update: function(req, res, next) {
		if (!req.params.id) {
			next();
		}
		var userProfileId = req.params.id;
		if (!req.body.data) {
			next();
		}
		var userProfileData = req.body.data;
		UserProfile.findById(userProfileId, function(err, userProfile) {
		  if (err) next(err);
			var isUpdate = false;
			if (userProfileData.hasOwnProperty('userName')) {
				if (userProfile.userName != userProfileData.userName){
					isUpdate = true;
					userProfile.userName = userProfileData.userName;
				}
			}
			if (userProfileData.hasOwnProperty('personName')) {
				if (userProfile.personName != userProfileData.personName){
					isUpdate = true;
					userProfile.personName = userProfileData.personName;
				}
			}
			if (userProfileData.hasOwnProperty('email')) {
				if (userProfile.email != userProfileData.email){
					isUpdate = true;
					userProfile.email = userProfileData.email;
				}
			}
			if (userProfileData.hasOwnProperty('synopsis')) {
				if (userProfile.synopsis != userProfileData.synopsis){
					isUpdate = true;
					userProfile.synopsis = userProfileData.synopsis;
				}
			}
			if (userProfileData.hasOwnProperty('ratePerMinute')) {
				if (userProfile.ratePerMinute != userProfileData.ratePerMinute){
					isUpdate = true;
					userProfile.ratePerMinute = userProfileData.ratePerMinute;
				}
			}
			if (userProfileData.hasOwnProperty('likes')) {
				if (userProfile.likes != userProfileData.likes){
					isUpdate = true;
					userProfile.likes = userProfileData.likes;
				}
			}
			if (userProfileData.hasOwnProperty('skilltaglist')) {
				if (userProfile.skilltaglist != userProfileData.skilltaglist){
					isUpdate = true;
					userProfile.skilltaglist = userProfileData.skilltaglist;
				}
			}
			if (isUpdate) {
				userProfile.save(function(err) {
			    if (err) next(err);
			    res.json(userProfile);
			  });
			} else {
				res.json(userProfile)
			}
		});
	},

	delete: function(req, res, next) {
		if (!req.params.id) {
			next();
		}
		var userProfileId = req.params.id;
		UserProfile.findByIdAndRemove(userProfileId, function(err) {
		  if (err) throw err;
		});
	}

};

var data = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];

module.exports = userProfile;
