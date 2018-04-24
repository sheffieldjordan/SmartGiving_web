import React from "react";
import ReactDOM from "react-dom";
import "./style/Components.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./RootStore";
//SEL
// var express = require("express");
// var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
// var ObjectId = require("mongodb").ObjectID;
//
// require("./database/model/recipients");
// require("./database/model/donor");
// require("./database/model/merchant");
// var app = express();
// mongoose.Promise = global.Promise; //CHECK IF THIS IS NECESSARY
// mongoose.connect(
//   "mongodb://sberthely:password@ds047307.mlab.com:47307/final_proj_test"
// );
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// require("./database/routes/dbRoutes")(app);
//SEL
window.React = React;

ReactDOM.render(
  <App store={store} />,

  document.getElementById("root")
);
registerServiceWorker();
