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

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};