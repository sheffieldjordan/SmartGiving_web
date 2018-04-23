var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var path = require("path");
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

require("./routes/dbRoutes")(app);

//Use our router configuration when we call /api
app.use("/api", router);

var port = process.env.API_PORT || 3001;

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
