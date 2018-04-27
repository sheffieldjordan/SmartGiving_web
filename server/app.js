var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var ObjectId = require("mongodb").ObjectID;
var fs = require("fs");

// var Recipient = require("./model/recipients");
// var Donor = require("./model/donor");
// var Merchant = require("./model/merchant");
require("./model/recipients");
require("./model/donor");
require("./model/merchant");

var app = express();
var router = express.Router(); //NOT SURE I NEED THIS HERE

//set our port to either a predetermined port number if you have set
//it up, or 3001
//db config
mongoose.Promise = global.Promise; //CHECK IF THIS IS NECESSARY
mongoose.connect(
  "mongodb://sberthely:password@ds047307.mlab.com:47307/final_proj_test"
);

//Folder to store output JSON files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

require("./routes/dbRoutes")(app);

//Use our router configuration when we call /api
app.use("/api", router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log("Not found :(")
  console.log(res)
  next(err);
});


//Use React whenever we hit any other url
app.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

module.exports = app