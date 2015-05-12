var rsvpApp = angular.module('rsvpApp', []);

rsvpApp.controller('RsvpController', ['$http', function ($http) {
  var home = this;
  this.author = "Michael Sawyer";
  var rsvp = {};
  rsvp.name = '';
  rsvp.count = 0;
  rsvp.message = '';
  rsvp.email = '';

  home.submitRsvp = function() {
    $http.post("/api/guests", home.rsvp).success(function(data, status) {
      rsvp.name    = '';
      rsvp.count   =  0;
      rsvp.message = '';
      rsvp.email   = '';
    });
  };

}]);