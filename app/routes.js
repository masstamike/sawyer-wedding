// app/routes.js

// grab the nerd model
var Guest = require('./models/guest');
var express = require('express');

module.exports = function(app) {
  
  app.use(express.static(__dirname + '/public')); 

  app.get('/api/guests', function (req, res) {
    Guest.find(function(err, guests) {
      if (err)
        res.send(err);

      res.json(guests);
    });
  });

  app.post('/api/guests', function (req, res) {
    Guest.count(function(err, guests) {
      if (err)
        res.send(err);


      var rsvp = new Guest({
        name        : req.body.name,
        count       : req.body.count,
        email       : req.body.email,
        message     : req.body.message,
        menuBeef    : req.body.menuBeef,
        menuChicken : req.body.menuChicken,
        menuVeggie  : req.body.menuVeggie
      });
      rsvp.save();
      console.log(guests+1 + " items in database.");
      res.json(rsvp);
    })
  })

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};