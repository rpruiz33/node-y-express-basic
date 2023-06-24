const bodyParser=require('body-parser'); 
require('dotenv').config();
const express = require('express');
const path = require("path");
const app = express();

/*app.use(function mostrar(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next(string);
  
});
app.get("/json", function (req, res) {
  var jsonResponse = { "message": "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }

  res.json(jsonResponse);
});
const middleware = (req, res, next) => {
    req.time = new Date().toString();
    console.log(req.time);
    next();
  };
  
  app.get("/now", middleware, (req, res) => {
    res.json({
      time: req.time
    });
  });
  *//*
app.get("/:word/echo", (req, res)=>{
const { word }=req.params;
res.json({
    echo:word
});

});*/

/*app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // OR you can destructure and rename the keys
    var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

*/
app.use(bodyParser.urlencoded({extended: false}));


app.post("/name", function(req, res) {
    var firstName = req.body.first;
    var lastName = req.body.last;
    var { first: firstName, last: lastName } = req.body;
   
    res.json({
      name: `${firstName} ${lastName}`
});
})
module.exports = app;