"use strict";
// app/routes.js

// grab the nerd model
var Guest   = require('./models/guest');
var express = require('express');
var multer  = require('multer');
var fs      = require('fs');
var upload  = multer({dest: 'public/images/uploads/'})

module.exports = function(app) {
  
  app.use(express.static(__dirname + '/public')); 

/*  app.get('/api/guests', function (req, res) {
    Guest.find(function(err, guests) {
      if (err)
        res.send(err);

      res.json(guests);
    });
  });*/

  app.post('/api/guests', function (req, res) {
    Guest.count(function(err, guests) {
      if (err)
        res.send(err);


      var rsvp = new Guest({
        name        : req.body.name,
        contact     : req.body.contact,
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
  });

  app.post('/images/upload', upload.single('image'), function (req, res) {
    fs.rename('./public/images/uploads/' + req.file.filename,
        ('./public/images/uploads/' + req.file.filename + '.jpg'),
        function(err) {
          if (err) {
            console.log(err);
            throw err;
          }
        });
    res.status(200).send();
  })

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};
