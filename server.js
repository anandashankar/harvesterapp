  // Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');
var Harvester = require('./models/harvester');
var Pressure = require('./models/pressure');
var Oillevel = require('./models/oillevel');
var Fuellevel = require('./models/fuellevel');
var Location = require('./models/location');
var Motortemp = require('./models/motortemp');
var Oiltemp = require('./models/oiltemp');
var Boom = require('./models/boom');
var Boomlift = require('./models/boomlift');
var Boomfold = require('./models/boomfold');
var Boomrotate = require('./models/boomrotate');
var cookieParser = require('cookie-parser');

var favicon = require('serve-favicon'); 
var path = require('path');


//to avoid mongoose promise error
mongoose.Promise = global.Promise;

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/harvesterapp');

// Create our Express application
var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

// Use environment defined port or 8008
var port = process.env.PORT || 8008;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); 

app.get('/dashboard', function(req, res) {
  res.sendfile(path.join(__dirname + '/public/dashboard.html'));
});

app.get('/raw', function(req, res) {
  res.sendfile(path.join(__dirname + '/public/raw.html'));
});

app.get('/analytics', function(req, res) {
  res.sendfile(path.join(__dirname + '/public/analytics.html'));
});

app.get('/machinedata', function(req, res) {
  res.sendfile(path.join(__dirname + '/public/machinedata.html'));
});

app.get('/boom', function(req, res) {
  res.sendfile(path.join(__dirname + '/public/boom.html'));
});
// Create our Express router
var router = express.Router();

var baseURL = 'http://204.189.49.127:'+port+'/api/harvesters';

router.get('/', function(req, res) {
	var obj = baseURL;
  res.json([{message: 'List of Harvesters', data: obj}]);
});


// Create a new route with the prefix /harvester
var harvestersRoute = router.route('/harvesters');
console.log(" Received GET request from controller");
// Create endpoint /api/harvesters for POSTS
harvestersRoute.post(function(req, res) {
  // Create a new instance of the Harvester model
  var harvester = new Harvester();

  // Set the beer properties that came from the POST data
  harvester.id = req.body.id;
  harvester.step_ms = req.body.step_ms;
  harvester.oillevel = baseURL+'/oillevel';
  harvester.fuellevel = baseURL+'/fuellevel';
  harvester.pressure = baseURL+'/pressure';
  harvester.location = baseURL+'/location';
  harvester.motortemp = baseURL+'/motortemp';
  harvester.oiltemp = baseURL+'/oiltemp';
  harvester.boom = baseURL+'/boom'
  //'http://46.101.113.34:8008/api/harvesters/boom';
  

  // Save the harvester and check for errors
  harvester.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Haraverster data', data: harvester });
  });
});

//creating new route using endpoint /harvesters/pressure for POST
var pressureHarvestersRoute = router.route('/harvesters/pressure');
pressureHarvestersRoute.post(function(req, res){
  var pressure = new Pressure();
  pressure.pressure = req.body.pressure;

  pressure.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: pressure });
  });
});

//creating new route using endpoint /harvesters/pressure for GET
pressureHarvestersRoute.get(function(req, res){
  Pressure.find(function(err, pressure){
    if(err)
      res.send(err);
    res.json(pressure);
  });
});

//creating new route using endpoint /harvesters/oillevel for POST
var oillevelHarvestersRoute = router.route('/harvesters/oillevel');
oillevelHarvestersRoute.post(function(req, res){
  var oillevel = new Oillevel();
  oillevel.oillevel = req.body.oillevel;

  oillevel.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: oillevel });
  });
});

//creating new route using endpoint /harvesters/oillevel for GET
oillevelHarvestersRoute.get(function(req, res){
  Oillevel.find(function(err, oillevel){
    if(err)
      res.send(err);
    res.json(oillevel);
  });
});

//creating new route using endpoint /harvesters/fuellevel for POST
var fuellevelHarvestersRoute = router.route('/harvesters/fuellevel');
fuellevelHarvestersRoute.post(function(req, res){
  var fuellevel = new Fuellevel();
  fuellevel.fuellevel = req.body.fuellevel;

  fuellevel.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: fuellevel });
  });
});

//creating new route using endpoint /harvesters/fuellevel for GET
fuellevelHarvestersRoute.get(function(req, res){
  Fuellevel.find(function(err, fuellevel){
    if(err)
      res.send(err);
    res.json(fuellevel);
  });
});

//creating new route using endpoint /harvesters/location for POST
var locationHarvestersRoute = router.route('/harvesters/location');
locationHarvestersRoute.post(function(req, res){
  var location = new Location();
  location.latitude = req.body.latitude;
  location.longitude = req.body.longitude;

  location.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: location });
  });
});

//creating new route using endpoint /harvesters/location for GET
locationHarvestersRoute.get(function(req, res){
  Location.find(function(err, location){
    if(err)
      res.send(err);
    res.json(location);
  });
});

//*** Motor Temperature ***
//creating new route using endpoint /harvesters/motortemp for POST
var motortempHarvestersRoute = router.route('/harvesters/motortemp');
motortempHarvestersRoute.post(function(req, res){
  var motortemp = new Motortemp();
  motortemp.motortemp = req.body.motortemp;

  motortemp.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: motortemp });
  });
});

//creating new route using endpoint /harvesters/motortemp for GET
motortempHarvestersRoute.get(function(req, res){
  Motortemp.find(function(err, motortemp){
    if(err)
      res.send(err);
    res.json(motortemp);
  });
});

var motor = router.route('/harvesters/motortemp/:motortemp_id');

// Create endpoint /api/beers/:beer_id for GET
motor.get(function(req, res) {
  // Use the Beer model to find a specific beer
  Motortemp.findById(req.params.motortemp_id, function(err, motor) {
    if (err)
      res.send(err);

    res.json(motor);
  });
});

// Create endpoint /api/harvesters/:harvesters_id for DELETE
motor.delete(function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Motortemp.findByIdAndRemove(req.params.motortemp_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Motor Temperature data removed' });
  });
});

//Oil Temperature
//creating new route using endpoint /harvesters/oiltemp for POST
var oiltempHarvestersRoute = router.route('/harvesters/oiltemp');
oiltempHarvestersRoute.post(function(req, res){
  var oiltemp = new Oiltemp();
  oiltemp.oiltemp = req.body.oiltemp;

  oiltemp.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Haraverster data', data: oiltemp });
  });
});

//creating new route using endpoint /harvesters/oiltemp for GET
oiltempHarvestersRoute.get(function(req, res){
  Oiltemp.find(function(err, oiltemp){
    if(err)
      res.send(err);
    res.json(oiltemp);
  });
});

/*Boom Schema*/
var boomHarvestersRoute = router.route('/harvesters/boom');
boomHarvestersRoute.post(function(req, res){
  var boom = new Boom();
  boom.boomlift = baseURL+'/boom/boomlift';
  boom.boomfold = baseURL+'/boom/boomfold';
  boom.boomrotate = baseURL+'/boom/boomrotate';

  boom.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Boom data', data: boom });
  });
});

//creating new route using endpoint /harvesters/boom for GET
boomHarvestersRoute.get(function(req, res){
  Boom.find(function(err, boom){
    if(err)
      res.send(err);
    res.json(boom);
  });
});


/*Boom Lift*/
var boomliftHarvestersRoute = router.route('/harvesters/boom/boomlift');
boomliftHarvestersRoute.post(function(req, res){
  var boomlift = new Boomlift();
  boomlift.boomlup = req.body.boomlup;
  boomlift.boomlcc = req.body.boomlcc;

  boomlift.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Boom Lift Data', data: boomlift });
  });
});

//creating new route using endpoint /harvesters/boom/boomlift for GET
boomliftHarvestersRoute.get(function(req, res){
  Boomlift.find(function(err, boomlift){
    if(err)
      res.send(err);
    res.json(boomlift);
  });
});


/*Boom Fold*/

var boomfoldHarvestersRoute = router.route('/harvesters/boom/boomfold');
boomfoldHarvestersRoute.post(function(req, res){
  var boomfold = new Boomfold();
  boomfold.boomfup = req.body.boomfup;
  boomfold.boomfcc = req.body.boomfcc;

  boomfold.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Boom Fold Data', data: boomfold });
  });
});

//creating new route using endpoint /harvesters/boom/boomfold for GET
boomfoldHarvestersRoute.get(function(req, res){
  Boomfold.find(function(err, boomfold){
    if(err)
      res.send(err);
    res.json(boomfold);
  });
});


/*Boom Rotate*/

var boomrotateHarvestersRoute = router.route('/harvesters/boom/boomrotate');
boomrotateHarvestersRoute.post(function(req, res){
  var boomrotate = new Boomrotate();
  boomrotate.boomtlp = req.body.boomtlp;
  boomrotate.boomtrp = req.body.boomtrp;
  boomrotate.boomrcc = req.body.boomrcc;

  boomrotate.save(function(err){
    if (err)
      res.send(err);
    res.json({ message: 'Boom Rotate Data', data: boomrotate });
  });
});

//creating new route using endpoint /harvesters/boom/boomrotate for GET
boomrotateHarvestersRoute.get(function(req, res){
  Boomrotate.find(function(err, boomrotate){
    if(err)
      res.send(err);
    res.json(boomrotate);
  });
});


// Create endpoint /api/harvesters for GET
harvestersRoute.get(function(req, res) {
  // Use the Harvester model to find all beer
  Harvester.find(function(err, harvesters) {
    if (err)
      res.send(err);

    res.json(harvesters);

  });
});

// Create a new route with the /harvesters/:harvester_id prefix
var harvesterRoute = router.route('/harvesters/:harvester_id');

// Create endpoint /api/beers/:beer_id for GET
harvesterRoute.get(function(req, res) {
  // Use the Beer model to find a specific beer
  Harvester.findById(req.params.harvester_id, function(err, harvester) {
    if (err)
      res.send(err);

    res.json(harvester);
  });
});

// Create endpoint /api/harvesters/:harvesters_id for DELETE
harvesterRoute.delete(function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Harvester.findByIdAndRemove(req.params.harvester_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Harvester data removed' });
  });
});


// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Harvester data on port ' + port);
