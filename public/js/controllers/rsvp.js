var rsvpApp = angular.module('rsvpApp', []);

rsvpApp.controller('RsvpController', ['$http', function ($http) {
  var home          = this;
  home.author       = "Michael Sawyer";
  this.rsvp          = {};
  home.rsvp.name    = '';
  home.rsvp.count   =  0;
  home.rsvp.message = '';
  home.rsvp.email   = '';

  this.initialize = function () {
    home.rsvp.name    = '';
    home.rsvp.count   =  0;
    home.rsvp.message = '';
    home.rsvp.email   = '';
  }

  this.initialize();

  this.submitRsvp = function() {
    $http.post("/api/guests", home.rsvp).success(function(data, status) {
      home.rsvp.name    = '';
      home.rsvp.count   =  0;
      home.rsvp.message = '';
      home.rsvp.email   = '';
    })
  };

}]);