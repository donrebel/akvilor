var jwt = require('express-jwt');

module.exports = function(req, res, next) {

  var authCheck = jwt({
    secret: new Buffer('lMKAZ8DW74Yq3vNS3jLJTZKire7VzA4Zf3qxTe29NfSQZXDUzoHBGKYbg4SKKccP', 'base64'),
    audience: 'dXFukGIX83bwXj2R8yFPsKR3dhecEWZi'
  });

  console.log('rrrrrrrrrrrrrrrrrrrrrrr');
  console.log(authCheck);

  next();
};
