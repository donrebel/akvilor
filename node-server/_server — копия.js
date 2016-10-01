var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    HttpError = require('./modules/error-handler').HttpError;
    cors = require('cors');
    errorHandler = require('errorhandler');
    http = require('http');
    https = require('https');
    multer = require('multer');

var app = express();
var hskey = fs.readFileSync('./ssh/hacksparrow-key.pem');
var hscert = fs.readFileSync('./ssh/hacksparrow-cert.pem');
var options = {
    key: hskey,
    cert: hscert
};
var staticRoot = __dirname + '/';

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('portHttp', (process.env.PORT || config.get('portHttp')));
app.set('portHttps', (process.env.PORT || config.get('portHttps')));

app.use(cors());
app.use(express.static(staticRoot)); // dist
app.use(express.static(path.join(__dirname, '../public'))); // public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// routes ====================================================
require('./routes/index')(app, staticRoot); // configure our routes


/* file upload handling */
var DIR = './uploads/';

var upload = multer({dest: DIR}).fields([
  { name: 'file', maxCount: 1, fileSize: 1024*1024*52 },
//  { name: 'gallery', maxCount: 8 }
]);

app.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return
    }
    // Everything went fine
    console.log(req.files['file'][0]);// -> File
    //  req.files['gallery'] -> Array
    console.log('wwwwww');
    console.log(req.body);
  })
})

app.use(require('./middlewares/sendHttpError'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new HttpError(404, '404: Page Not Found');
    next(err);
});

app.use(function(err, req, res, next){
	if (typeof err == 'number'){
		err = new HttpError(err);
	}
	if (err instanceof HttpError){
		res.sendHttpError(err);
  } else {
		if (app.get('env') == 'development') {
			errorHandler()(err, req, res, next);
		} else {
			log.error(err);
			err = new HttpError(500);
			res.sendHttpError(err);
		}
	}
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);
httpServer.listen(app.get('portHttp'), function() {
    console.log('app running on port', app.get('portHttp'));
});
httpsServer.listen(app.get('portHttps'), function() {
    console.log('app running on port', app.get('portHttps'));
});
