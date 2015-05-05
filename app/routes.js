// app/routes.js

// grab the nerd model
var Nerd = require('./models/nerd');
var express = require('express');

module.exports = function(app) {
  
  app.use(express.static(__dirname + '/public')); 

  app.get('/api/nerds', function (req, res) {
    Nerd.find(function(err, nerds) {
      if (err)
        res.send(err);

      res.json(nerds);
    });
  });

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};