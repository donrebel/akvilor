module.exports = function(app, staticRoot) {

  var apiRoutes_v1 = require('./apiroutes_v1.js');

  var jwt = require('express-jwt');
  var authCheck = jwt({
    secret: new Buffer('lMKAZ8DW74Yq3vNS3jLJTZKire7VzA4Zf3qxTe29NfSQZXDUzoHBGKYbg4SKKccP', 'base64'),
    audience: 'dXFukGIX83bwXj2R8yFPsKR3dhecEWZi'
  });

  app.all('/api/v1/*', authCheck);
  app.use('/api/v1', apiRoutes_v1);

  app.get('/*', function(req, res) {
      res.sendFile(staticRoot + 'index.html'); // load our public/index.html file
  });
};
