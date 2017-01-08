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


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('devPortHttp', (process.env.PORT || config.get('devPortHttp')));
app.set('prodPortHttp', (process.env.PORT || config.get('prodPortHttp')));
app.set('portHttps', (process.env.PORT || config.get('portHttps')));

app.use(logger('dev'));
app.use(cors());
// allow CORS
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

var staticRoot = path.join(__dirname, '../');

//app.use(express.static(staticRoot)); // dist
app.use(express.static(path.join(__dirname, '../assets'))); // public



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

if (app.get('env') == 'development') {
  httpServer.listen(app.get('devPortHttp'), function() {
      console.log('app running on port', app.get('devPortHttp'));
  });
  httpsServer.listen(app.get('portHttps'), function() {
      console.log('app running on port', app.get('portHttps'));
  });

  // socket = require('./modules/socket')(httpServer);
  // app.set('io', socket);

}
else {
  httpServer.listen(app.get('prodPortHttp'), function() {
      console.log('app running on port', app.get('prodPortHttp'));
  });
  httpsServer.listen(app.get('portHttps'), function() {
      console.log('app running on port', app.get('portHttps'));
  });
  // socket = require('./modules/socket')(httpServer);
  // app.set('io', socket);
};
